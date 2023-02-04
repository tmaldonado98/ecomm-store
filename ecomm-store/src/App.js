import './App.css';
import Nav from './Nav';
import Header from './Header';
import MainAbout from './MainAbout';

function App() {
  return (
    <div >
      <nav>
        <Nav />        
      </nav>
      <header id="container-header">
        <Header />
      </header>
      <section id='e'>
        <MainAbout />
      </section>
    </div>
  );
}

export default App;
