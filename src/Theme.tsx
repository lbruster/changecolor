import React, { useState } from "react";

function SelectTheme() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`base-button ${isActive ? "active-button" : ""}`}
      onClick={toggleActive}
    >
      Toggle Class
    </button>
  );
}

export default SelectTheme;
