import React, { useState } from "react";
import Navigation from "./Navigation";
import List from "./List";
import Form from "./Form";

function ShortUrl() {
  const [urlList, setUrlList] = useState([]);

  const addListItem = (item) => {
    // check to see if anything is coming back from input
    if (!item.fullUrl) {
      return;
    }

    // add item to top of the array
    const newList = [item, ...urlList];
    setUrlList(newList);
  };

  const removeListItem = (id) => {
    //look through array and add new array without the item matching the id
    const updateList = [...urlList].filter((item) => item.id !== id);

    setUrlList(updateList);
  };

  return (
    <div>
      <Navigation />
      <div className="row ">
        <div className="row justify-content-center">
          <div className="col-10 frmMain ">
            <h1>What URl would you like to shorten?</h1>
            <Form addListItem={addListItem} />
            <List urlList={urlList} removeListItem={removeListItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortUrl;
