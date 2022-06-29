import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Layout from "./components/layout/main";
import Article from "./components/pages/article";
import { articles } from "./data/articles";

function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {articles.map(article => (
              <Route key={article.title}
                path="articles/:slug"
                element={
                  <Article 
                    title={article.title} 
                    intro={article.intro} 
                    body={article.body}
                  />
                } 
              />
            ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
