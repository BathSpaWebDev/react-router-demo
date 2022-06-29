function ServiceBlock({title, description, imgSrc, theme}) {
    return (
      <div className="ServiceBlock">
        {
            theme === 'theme1' ?
            <h2>This is theme one</h2>
            :
            <h2>This is theme two</h2>
        }
        <h3 className="ServiceBlock__title">{title}</h3>
        <p className="ServiceBlock__description">{description}</p>
        <img src={imgSrc} alt="random image from lorem picsum" />
      </div>
    );
  }
  
export default ServiceBlock;