import ServiceBlock from "./service-block";
import { useState } from "react";

function ServiceList({theme}) {

   

    return (
      <div className={`ServiceList ${theme}`}>

        <ServiceBlock 
            title="Web design" 
            description={
                `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus cum aspernatur voluptates ex consequuntur vel eaque beatae neque laboriosam magnam dolorem, corrupti quis! Deleniti, deserunt? Recusandae sequi optio est quis?
                `
            } 
            imgSrc="https://picsum.photos/200/300"
            theme={theme}
        />
        

        <ServiceBlock 
            title="Consulting" 
            description={
                `
                Different consulting services
                `
            } 
            imgSrc="https://picsum.photos/200/300"
            theme={theme}
        />
        
      </div>
    );
  }
  
export default ServiceList;