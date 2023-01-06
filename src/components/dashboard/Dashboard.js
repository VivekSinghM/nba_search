import { useContext, useMemo, useState } from "react";
import Table from "./table/Table";
import "./db.css";
import Sidebar from "../UI/sidebar/Sidebar";
import Pagination from "../UI/pagination/Pagination";
import Search from "../UI/search/Search";
import { TeamContext } from "../../context/TeamProvider";

const Dashboard = () => {
  const { allTeam, totalTeams } = useContext(TeamContext);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [sorting, setSorting] = useState({ field: "", order: false });
  const [selected, setSelected] = useState(null);
  const filteredData = useMemo(() => {
      let tempData = allTeam;
      if (!allTeam ) return [];
      if (search==='') return allTeam;
      setCurrentPage(1);
      //search
      return tempData.filter((data) => {
        return (
          data.name.toLowerCase().includes(search.toLowerCase()) ||
          data.abbreviation.toLowerCase().includes(search.toLowerCase())
        );
      });
      
  }, [search, allTeam]);

  const tableData = useMemo(() => {
    if (!allTeam) return [];
    let tempData = filteredData;
    //sorting
    if (sorting.field) {
      const revs = !sorting.order ? 1 : -1;
      tempData = tempData.sort(
        (a, b) => revs * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    return tempData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, allTeam, filteredData, sorting]);

  return (
    <div className="col p-0">
      <div
        className="pt-3 pb-3 w-100 d-flex flex-column justify-content-between"
        style={{ height: "20vh" }}
      >
        <h1 data-cy="display"style={{ color: "#004589" }}>
          <b>NBA TEAMS</b>
        </h1>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="row m-auto">
        <Table
          tData={tableData}
          sorting={sorting}
          setSorting={setSorting}
          selected={selected}
          setSelected={setSelected}
        ></Table>
      </div>

      {/* pagiantino */}
      {totalTeams > itemsPerPage && (
        <Pagination
          totalItems={filteredData.length}
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

export default Dashboard;
