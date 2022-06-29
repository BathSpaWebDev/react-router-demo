import { useState } from "react";

function Button({buttonText, themeColour, setThemeColour}) {

    const myStyles = { 
        color: themeColour, 
        border: `2px solid ${themeColour}`, 
        cursor: 'pointer' 
    };

    const changeThemeColour = () => {
        if (themeColour === 'red'){
            setThemeColour('blue');
        } else {
            setThemeColour('red');
        }   
    }

    return (
      <button className="Button" style={myStyles} onClick={changeThemeColour} >
        {buttonText}
      </button>
    );

}
  
export default Button;