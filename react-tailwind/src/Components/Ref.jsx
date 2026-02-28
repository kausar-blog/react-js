import React, { useRef } from "react";

const MyRef = () => {
  const InputRef = useRef(null);

  const ShowValue = () => {
    alert(InputRef.current.value);
  };
  return (
    <>
      <div>
        <input
          type="text"
          ref={InputRef}
          placeholder="enter something...."
          className="border border-indigo-500"
        />
        <button className="bg-indigo-500 p-1 rounded" onClick={ShowValue}>
          Show Me
        </button>
      </div>
    </>
  );
};
export default MyRef;
