import "./Table.css";
const Table = (props) => {
  let tBody = [];
  const caret = props.sorting.order ? (
    <span class="material-symbols-outlined" style={{ fontSize: "1.25em" }}>
      arrow_drop_up
    </span>
  ) : (
    <span class="material-symbols-outlined" style={{ fontSize: "1.25em" }}>
      arrow_drop_down
    </span>
  );
  if (!!props.tData) {
    tBody = props.tData.map((data, i) => {
      return (
        <tr
          style={
            props.selected === i
              ? { backgroundColor: "#c4dde9" }
              : { backgroundColor: "#f7fbfd" }
          }
          key={i}
          data-cy={`item-${i}`}
          id={`item-${i}`}
          onClick={() => {
            props.setSelected(i);
          }}
        >
          <td>{data.name}</td>
          <td>{data.city}</td>
          <td data-cy={`item-${i}-cell`}>{data.abbreviation}</td>
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
      <table
        data-cy="table"
        className="table text-center font-weight-bold"
        style={{ width: "100%" }}
      >
        {/* table head */}
        <thead style={{ backgroundColor: "#004589", color: "white" }}>
          <tr>
            <th
              name="name"
              onClick={() => clickHandler("name")}
              style={{ fontWeight: "400" }}
            >
              <div>
                Team Name
                {props.sorting.field === "name" && caret}
              </div>
            </th>
            <th
              value="city"
              onClick={() => clickHandler("city")}
              style={{ fontWeight: "400" }}
            >
              <div>
                City
                {props.sorting.field === "city" && caret}
              </div>
            </th>
            <th
              value="abbreviation"
              onClick={() => clickHandler("abbreviation")}
              style={{ fontWeight: "400" }}
            >
              <div>
                Abbreviation
                {props.sorting.field === "abbreviation" && caret}
              </div>
            </th>
            <th
              value="conference"
              onClick={() => clickHandler("conference")}
              style={{ fontWeight: "400" }}
            >
              <div>
                Conference
                {props.sorting.field === "conference" && caret}
              </div>
            </th>
            <th
              value="division"
              onClick={() => clickHandler("division")}
              style={{ fontWeight: "400" }}
            >
              <div>
                Division
                {props.sorting.field === "division" && caret}
              </div>
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
