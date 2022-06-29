function ServiceBlock({title, description, imgSrc}) {
    return (
      <div className="ServiceBlock">
        <h3 className="ServiceBlock__title">{title}</h3>
        <p className="ServiceBlock__description">{description}</p>
        <img src={imgSrc} alt="random image from lorem picsum" />
      </div>
    );
  }
  
export default ServiceBlock;