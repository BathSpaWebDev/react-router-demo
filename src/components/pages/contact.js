import { useState } from "react";

function Contact() {

    const submitHandler = (event) => {
        event.preventDefault();
        setMessage(`Thank you, ${inputs.name}. An email has been sent to ${inputs.email}`);
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setInputs((state) => ({ ...state, [name]: value }));
    };

    const [inputs, setInputs] = useState({
        name: "",
        email: ""
    })

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

            <button type="submit">Submit</button>
            
        </form>
        
        { message && <p>{message}</p> }
        

      </div>
    );
  }
  
export default Contact;