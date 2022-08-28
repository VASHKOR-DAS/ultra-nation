// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);

  // Country Added : 0, er majhe show krr jnne ata kora
  const [cart, setCart] = useState([]);





  useEffect( () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    // .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    // console.log('added', country);

    // Country Added : 0, er majhe show krr jnne ata kora
    const newCart = [...cart, country]
    setCart(newCart);
  }


  return (
    <div className='App'>
      <h1>Country loaded : {countries.length}</h1>
      <h3>Country Added : {cart.length}</h3>
      <Cart cart = {cart}></Cart>
        {
          countries.map(country =>
              <Country 
                key={country.alpha3Code}
                country = {country}
                handleAddCountry = {handleAddCountry}
              >
              </Country>
            )
        }

    </div>
  );
}

export default App;
