import Button from "./button";
import { useState } from "react";

function Block({buttonText}) {

    const [themeColour, setThemeColour] = useState('red');

    const blockStyles = {
        background: themeColour
    }

    return (
      <div className="block" style={blockStyles}>
        <p>Hola mundo</p>
        <Button buttonText={buttonText} themeColour={themeColour} setThemeColour={setThemeColour}/>
      </div>
    );
  }
  
export default Block;