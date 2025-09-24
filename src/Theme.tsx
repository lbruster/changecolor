import React, { useState, useEffect } from "react";
/* useEffect(() => {
    // Add the class when the component mounts
    document.body.classList.add("my-body-class");
    // Return a cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("my-body-class");
    };
  }, []); // Empty dependency array ensures this runs only once on mount/unmount */
function SelectTheme() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    document.body.style.backgroundColor = isActive ? "white" : "black";
    document.body.classList.add("dark-theme");
    if (isActive) {
      document.body.classList.remove("dark-theme");
    }
    setIsActive(!isActive);
  };

  return (
    <button
      className={`base-button ${isActive ? "active-button" : ""}`}
      onClick={toggleActive}
    >
      {`${isActive ? "Light Theme" : "Dark Theme"}`}
    </button>
  );
}

export default SelectTheme;
