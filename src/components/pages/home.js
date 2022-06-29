import { articles } from "../../data/articles";

function Home({theme}) {

    return (
      <div className="Home">
        <h1>Homepage</h1>
        {theme === 'theme1' ? <h2>This is theme 1</h2> : '' }
        <h3>All articles</h3>
        {articles.map(article => (
            <div>
                <a href={'articles/' + article.url}>
                    <h3>{article.title}</h3>
                </a>
            </div>
        ))}
      </div>
    );
  }
  
export default Home;