import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

function ShortUrl() {
  //set state. I will use a state array to show functionality as if it were connected to the back end.
  const [urlList, setUrlList] = useState([]);

  const addListItem = (item) => {
    // check to see if anything is coming back from input
    console.log(item);
    if (!item.fullUrl) {
      return;
    }

    // add item to top of the array
    const newList = [item, ...urlList];
    console.log(newList);
    setUrlList(newList);
  };

  const removeListItem = (id) => {
    //look through array and add new array without the item matching the id
    const updateList = [...urlList].filter((item) => item.id !== id);

    setUrlList(updateList);
  };

  return (
    <div>
      <h1>What URl would you like to shorten?</h1>
      <Form addListItem={addListItem} />
      <List urlList={urlList} removeListItem={removeListItem} />
    </div>
  );
}

export default ShortUrl;
