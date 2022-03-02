import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    function newShortUrl(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    props.addListItem({
      id: Math.random(Math.floor() * 1000),
      fullUrl: input,
      shortUrl: newShortUrl
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form className="frmList" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <button className="btnSubmit">Shorten Me</button>
      </form>
    </div>
  );
}

export default Form;
