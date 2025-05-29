import logo from './logo.svg';
import './App.css';
import Salam from './one';
import NavbarComponent from './nav';
import SliderComponent from './header';
import ProductComponent from './product';
import FooterComponent from './footer';
// index.js ya App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <div>
    <NavbarComponent ></NavbarComponent>
      <SliderComponent ></SliderComponent>
      <ProductComponent ></ProductComponent>
      <FooterComponent ></FooterComponent>
  </div>
  );
}

export default App;
