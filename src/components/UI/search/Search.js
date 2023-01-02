import React from "react";
import "./Search.css";
function Search(props) {
  return (
    <div className="col-md-6 p-0 m-0">
      <div className="s-box pl-2 row m-0 align-items-center">
        <div className="col-auto p-0 d-flex aign-items-center">
          <span className="material-symbols-outlined" style={{fontSize:'inherit', color: 'gray'}}>search</span>
        </div>
        <div className="col p-0">
          <input
            className="form-control form-control-md form-control-borderless"
            value={props.Search}
            onChange={(e) => {
                props.setSearch(e.target.value);
              }}
            type="search"
          />
        </div>
       
      </div>
    </div>
  );
}

export default Search;
