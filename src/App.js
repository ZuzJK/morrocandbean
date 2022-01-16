
import './App.scss';
import Hero  from './components/Hero/Hero';
import Article from './components/Article/Article';
import Events from './components/Events/Events';
import Tutorial from './components/Turorial/Tutorial';
import Footer from './components/Footer/Footer';
import article from './data/article';



function App() {
  return (
    <div className="App">
      <Hero />
      <div class="container">
      {
        article.map(item=> <Article {...item} />)
      }
        <Events />
        <Tutorial />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
