import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FooterTop from './component/FooterTop';
import Menu from './component/Menu';
import Links from './RouteSetting/Links';

function App() {
  return (
    <div className="App">
      <header>
        <Menu/>
      </header>
      <main>
        <Links/>
      </main>
      <FooterTop/>
    </div>
  );
}

export default App;
