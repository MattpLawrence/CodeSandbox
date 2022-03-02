import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function List(props) {
  console.log(props.urlList);
  return props.urlList.map((item, i) => (
    <div key={i}>
      <div key={item.id} onClick={() => props.addListItem(item.id)}>
        {item.fullUrl}
        {item.shortUrl}
      </div>

      <p onClick={() => props.removeListItem(item.id)}>
        <FontAwesomeIcon icon={faTrash} className="faIcon" />
      </p>
    </div>
  ));
}

export default List;
