import { useContext, useEffect, useMemo, useState } from "react";
import { data } from "./jsonData";
import Table from "./table/Table";
import "./dt.css";
import Sidebar from "../UI/sidebar/Sidebar";
import Pagination from "../UI/pagination/Pagination";
import Search from "../UI/search/Search";
import { TeamContext } from "../../context/TeamProvider";

const DashBoard = (props) => {
  const { allTeam, totalTeams } = useContext(TeamContext);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [sorting, setSorting] = useState({ field: "", order: false });
  const [selected, setSelected] = useState(null);

  const tableData = useMemo(() => {
    if (!allTeam) return [];
    let tempData = allTeam;
    //sorting
    if (sorting.field) {
      const revs = !sorting.order ? 1 : -1;
      tempData = tempData.sort(
        (a, b) => revs * a[sorting.field].localeCompare(b[sorting.field])
      );
    }
    //search
    tempData = tempData.filter((data) => {
      return (
        data.name.toLowerCase().includes(search.toLowerCase()) ||
        data.abbreviation.toLowerCase().includes(search.toLowerCase())
      );
    });

    return tempData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, allTeam, search, sorting]);

  return (
    <div className="col p-0">
      <div className="pt-3 pb-3 w-100" style={{ height: "20vh" }}>
        <div className="display-4" style={{ color: "#004589" }}>
          <b>NBA TEAMS</b>
        </div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="row m-auto">
        <Table
          tData={tableData}
          sorting={sorting}
          setSorting={setSorting}
          setSelected={setSelected}
        ></Table>
      </div>

      {/* pagiantino */}
      {totalTeams > itemsPerPage && (
        <Pagination
          totalItems={totalTeams}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          goTo={(pNo) => {
            setCurrentPage(pNo);
          }}
        />
      )}

      {selected !== null && (
        <div>
          <Sidebar
            selected={selected}
            close={() => setSelected(null)}
            team={tableData[selected]}
          ></Sidebar>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
