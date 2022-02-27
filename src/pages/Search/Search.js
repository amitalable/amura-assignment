import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Search.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";
const Search = () => {
  const [data, setData] = useState({ data: {}, filteredData: {} });
  const fetchData = () => {
    Axios.get("https://retoolapi.dev/N996G3/data")
      .then((data) => {
        setData({ data: [...data.data], filteredData: [...data.data] });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    let filterResult = data.data.filter((item) =>
      item.name.includes(e.target.value)
    );
    setData({ ...data, filteredData: filterResult });
  };

  const filterAsc = (isAsc) => {
    let filterResult = isAsc
      ? data.filteredData.sort((a, b) => a.name.length - b.name.length)
      : data.filteredData.sort((a, b) => b.name.length - a.name.length);

    setData({ ...data, filteredData: filterResult });
  };

  const reset = () => {
    setData({ ...data, filteredData: data.data });
  };
  console.log(data);
  return (
    <div className="search-page">
      <Header title="Welcome to the portal" />
      <div className="search">
        <div className="filter">
          <div className="text-input">
            <input
              type="text"
              placeholder="Search For Anything.."
              onChange={handleChange}
            />
          </div>
          <div className="arrow-keys">
            <div className="upward" onClick={() => filterAsc(true)}>
              Up
            </div>
            <div className="downward" onClick={() => filterAsc(false)}>
              Down
            </div>
          </div>
          <div className="date-selector">
            <input type="date" />
          </div>
          <div className="reset" onClick={reset}>
            Reset
          </div>
        </div>
        <hr />
        <div className="content-list">
          {data.filteredData.length &&
            data.filteredData.map((item) => (
              <NavLink to={`/idcard/${JSON.stringify(item)}`} key={item.id}>
                <div className="data">
                  <span className="data-items">Name: {item.name},</span>
                  <span className="data-items">
                    {" "}
                    JoinedOn: {item.joinedOn},
                  </span>
                  <span className="data-items">
                    {" "}
                    Profession: {item.profession}
                  </span>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
