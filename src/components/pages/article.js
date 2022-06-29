import { useParams } from 'react-router-dom';

function Article({title, body, intro}) {

    const { slug } = useParams();
    
    return (
      <div className="Article">
        <a href="/">Back to home</a>
        <h1>{title}</h1>
        <p><b>{intro}</b></p>
        <p>{body}</p>
      </div>
    );
  }
  
export default Article;