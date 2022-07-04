import { useState, useEffect } from "react";
import Checkbox from "../forms/checkbox";

function Contact() {

    const submitHandler = (event) => {
        const selected = selectionOptions.filter(s => s.checked);
        
        event.preventDefault();
        
        setMessage(`
        Thank you, ${inputs.name}. An email has been sent to ${inputs.email}
        Your selection was:
        ${
            selected.map((item,i) => item.title)
        }
        `);
        

    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setInputs((state) => ({ ...state, [name]: value }));
    };

    const [inputs, setInputs] = useState({
        name: "",
        email: ""
    })
    
    // const [checkedState, setCheckedState] = useState();

    const [selectionOptions, setSelectionOptions]  = useState([
        {title: 'Selection 1', checked: false},
        {title: 'Selection 2', checked: false},
        {title: 'Selection 3', checked: false},
    ]);


    const checkboxChangeHandler = (position) => {
        const updatedCheckedState = selectionOptions.map((item, index) => {
        item.checked = (index === position ? !item.checked : item.checked);
        return item;
        });
        // console.log('updatedCheckedState', updatedCheckedState);
        setSelectionOptions(updatedCheckedState);
    };
  
    // useEffect(()=>{
    //     console.log(selectionOptions)
    // },[selectionOptions])
   

    
    const [message, setMessage] = useState(null)

    return (
      <div className="Contact">
        <h1>Contact page</h1>

        <form action="" onSubmit={submitHandler}>
            <div className="form-row">
                <label htmlFor="name">Your name:</label>
                <input type="text" name="name" id="name" value={inputs.name} onChange={changeHandler}/>
            </div>

            <div className="form-row">
                <label htmlFor="email">Your email:</label>
                <input type="email" name="email" id="email" value={inputs.email} onChange={changeHandler} />
            </div>

            <div className="form-row">
                <label htmlFor="selections">Selections:</label>

                <fieldset>
                <legend>Selections:</legend>
                {selectionOptions.map((selection, i) => {

                    // console.log(selection)
              
                    return (
                        <Checkbox 
                        title={selection.title}
                        checked={selectionOptions[i].checked}
                        onChange={() => checkboxChangeHandler(i)}
                        index={i}
                        />
                    );
                })}
                </fieldset>
                
            </div>

            <button type="submit">Submit</button>
            
        </form>
        
        { message && <p>{message}</p> }


        
      </div>
    );
  }
  
export default Contact;