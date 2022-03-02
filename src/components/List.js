import React from "react";

function List(props) {
  console.log(props.urlList);
  return props.urlList.map((item, i) => (
    <div key={i}>
      <div key={item.id} onClick={() => props.addListItem(item.id)}>
        {item.fullUrl}
        {item.shortUrl}
      </div>

      <p onClick={() => props.removeListItem(item.id)}> 🗑️</p>
    </div>
  ));
}

export default List;
