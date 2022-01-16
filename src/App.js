import logo from './logo.svg';
import './App.scss';
import Hero  from './components/Hero/Hero';
import Article from './components/Article/Article';
import Events from './components/Events/Events';
import article from './data/article';
const a = "<br/>";


function App() {
  return (
    <div className="App">
      <Hero />
      <div class="container">
      {
        article.map(item=> <Article {...item} />)
      }
      <Events />
      </div>

    </div>
  );
}

export default App;
