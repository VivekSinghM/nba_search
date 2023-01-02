
const Table = (props) => {
  let tBody = [];

  if (!!props.tData) {
    tBody = props.tData.map((data,i) => {
      return (
        <tr
          key={i}
          style={{backgroundColor:'#f7fbfd'}}
          onClick={() => {
            props.setSelected(i);
          }}
        >
          <td>{data.name}</td>
          <td>{data.city}</td>
          <td>{data.abbreviation}</td>
          <td>{data.conference}</td>
          <td>{data.division}</td>
        </tr>
      );
    });
  }

  const clickHandler = (e) => {
    let temp = { ...props.sorting };
    if (temp.field === e) temp.order = !temp.order;
    else {
      temp.field = e;
      temp.order = false;
    }
    props.setSorting(temp);
  };

  return (
    <div style={{ width: "100%" }}>
      <table className="table text-center" style={{ width: "100%" }}>
        {/* table head */}
        <thead style={{ backgroundColor: "#004589", color: "white" }}>
          <tr>
            <th
              name="name"
              onClick={() => clickHandler("name")}
              style={{ fontWeight: "400" }}
            >
              Team Name
            </th>
            <th
              value="city"
              onClick={() => clickHandler("city")}
              style={{ fontWeight: "400" }}
            >
              City
            </th>
            <th
              value="abbreviation"
              onClick={() => clickHandler("abbreviation")}
              style={{ fontWeight: "400" }}
            >
              Abbreviation
            </th>
            <th
              value="conference"
              onClick={() => clickHandler("conference")}
              style={{ fontWeight: "400" }}
            >
              Conference
            </th>
            <th
              value="division"
              onClick={() => clickHandler("division")}
              style={{ fontWeight: "400" }}
            >
              Division
            </th>
          </tr>
        </thead>
        {/* table body */}
        <tbody>{tBody}</tbody>
      </table>
    </div>
  );
};
export default Table;
