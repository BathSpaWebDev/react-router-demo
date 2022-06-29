import ServiceBlock from "./service-block";


function ServiceList() {
    return (
      <div className="ServiceList">

        <ServiceBlock 
            title="Web design" 
            description={
                `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus cum aspernatur voluptates ex consequuntur vel eaque beatae neque laboriosam magnam dolorem, corrupti quis! Deleniti, deserunt? Recusandae sequi optio est quis?
                `
            } 
            imgSrc="https://picsum.photos/200/300"
        />
        

        <ServiceBlock 
            title="Consulting" 
            description={
                `
                Different consulting services
                `
            } 
            imgSrc="https://picsum.photos/200/300"
        />
        
      </div>
    );
  }
  
export default ServiceList;