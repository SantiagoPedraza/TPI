import './componentes/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from '../src/componentes/form';
import Navegador from './componentes/navbar';
import Banner from './componentes/Banner';

function App() {
  return (
    <div >
      <Navegador/>
      <Banner/>
      <hr></hr>
      <h1>DATOS</h1>
      <Formulario/>
    </div>
  );
}

export default App;
