import ServiceList from "../services/service-list";
import Block from "../general/block";

function About({theme}) {
    return (
      <div className="About">
        
        <h2>Services</h2>

        <Block buttonText="Custom button text" />

        <ServiceList theme={theme} />

        
      </div>
    );
  }
  
export default About;