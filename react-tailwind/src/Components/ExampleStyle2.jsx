import { useState } from "react";

function StyleExample() {
  const [IsActive, setIsActive] = useState(true);

  const Activity = () => {
    setIsActive(!IsActive);
  };

  return (
    <>
      <div>
        <button
          className={IsActive ? "Btn-Active" : "Btn-InActive"}
          onClick={Activity}
        >
          {IsActive ? "Active Button" : "Button InActive"}
        </button>
      </div>
    </>
  );
}
export default StyleExample;
