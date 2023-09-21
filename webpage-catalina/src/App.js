import './App.css';
import Navbar from './Components/Navbar';
import OutlinedCard from './Components/OutlinedCard';
import SearchAppBar from './Components/SearchAppBar';
import miImagen from './assets/cata.jpeg';
import Info from './Components/Info';
import Trabajos from './Components/Trabajos';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <SearchAppBar/>
      <table>
        <tr>
          <td>
            <Navbar/>
          </td>
          <td>
            <div>
              <img className='foto' src={miImagen} alt='Catalina Velez'></img>
            </div>
          </td>
        </tr>
      </table>
      <Info/>
      <OutlinedCard/>
      <Trabajos/>
      <Footer/>
    </div>
  );
}

export default App;
