/* import { useState } from "react";

function MyEvent() {
  const [message, setMessage] = useState("Click The Button");

  const HandleClick = () => {
    setMessage("Button was Clicked");
  };
  return (
    <>
      <div className="ring-1 ring-red-500 p-5 m-5">
        <h3>{message}</h3>
        <button
          onClick={HandleClick}
          className="bg-blue-800 text-white rounded-2xl px-2 py-1 mt-2"
        >
          click Me
        </button>
      </div>
    </>
  );
}

export default MyEvent;
 */

import { useState } from "react";

function OnChange() {
  const [Messages, setMessage] = useState(
    "Please write something in the input field",
  );

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="ring-2 m-5 p-5">
        <h3>{Messages}</h3>
        <input
          className="border px-3 py-1 rounded-2xl mt-1 bg-red-50 text-black"
          type="text"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default OnChange;
