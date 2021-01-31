import React, { useState, useEffect } from "react";
import { Datas } from "./tabledata";
import { Pagination } from "./pagenumber";

const App = () => {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [datasPerPage] = useState(10);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  // Get current data
  const indexOfLastData = currentPage * datasPerPage;
  const indexOfFirstData = indexOfLastData - datasPerPage;
  const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paging = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Table</h1>
      <Datas datas={currentDatas} />
      <br />
      <Pagination
        datasPerPage={datasPerPage}
        totalDatas={datas.length}
        paging={paging}
      />
    </div>
  );
};
export default App;
