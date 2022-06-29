import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Layout from "./components/layout/main";
import Article from "./components/pages/article";
import { articles } from "./data/articles";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('theme1');

  const changeTheme = () => {
      if (theme === 'theme1') {
          setTheme('theme2');
      } else {
          setTheme('theme1');
      }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout changeTheme={changeTheme} />}>
            <Route index element={<Home theme={theme} />} />
            <Route path="about" element={<About theme={theme} />} />
            <Route path="contact" element={<Contact theme={theme} />} />
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
