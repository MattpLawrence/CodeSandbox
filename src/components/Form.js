import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    (() => {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * 8));
      }
      let shortUrl = result;

      props.addListItem({
        id: Math.random(Math.floor() * 1000),
        fullUrl: input,
        shortUrl: shortUrl
      });
      setInput("");
    })();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>

        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  );
}

export default Form;
