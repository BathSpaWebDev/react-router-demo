import { useState } from "react";

function Contact() {

  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  });

  const [message, setMessage] = useState(null);

 

    const changeHandler = (e) => {
      const { name, value } = e.target;
      setInputs((state) => ({ ...state, [name]: value }));
    };
    const submitHandler = (e) => {
      e.preventDefault();
      setMessage(`Thank you for submitting the form, ${inputs.name}. An email has been sent to ${inputs.email}`);
    }

    return (
      <div className="Contact">
        <h1>Contact page</h1>

        <form action="" onSubmit={submitHandler}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={inputs.name} onChange={changeHandler}/>
          </div>

          <div className="form-row">
            <label htmlFor="email">email:</label>
            <input type="text" name="email" id="email" value={inputs.email} onChange={changeHandler} />
          </div>

          <button type="submit">Submit</button>
        
        </form>

        {message && message}
        
      </div>
    );
  }
  
export default Contact;