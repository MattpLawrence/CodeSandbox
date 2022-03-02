import React, { useState } from "react";

function List(props) {
  console.log(props.urlList);
  return props.urlList.map((item, i) => (
    <div>
      <div key={item.id} onClick={() => props.addListItem(item.id)}>
        {item.fullUrl}
      </div>

      <p onClick={() => props.removeListItem(item.id)}> 🗑️</p>
    </div>
  ));
}

export default List;
