import './App.css';
import Header from './components/Header'
import PizzaCard from './components/PizzaCard';
import Categories from './components/Categories';
import pizzas from './assets/pizzas.json'
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
      <Categories />
        <section className='pizza-section'>
            <div className="container">
              <div className="pizza-section__holder">
                {pizzas.map((obj) => (
                  <PizzaCard 
                    title={obj.title} 
                    imageUrl={obj.imageUrl} 
                    price={obj.price} 
                    sizes={obj.sizes}
                    types={obj.types}
                  />
                ))}
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
