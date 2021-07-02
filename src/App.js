import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js'
import Footer from './components/bottom.js'
import Container from './components/container.js'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Container/>
      <Container/>
      <Container/>
      <Container/>
      <Footer/>
     
    </div>
  );
}

export default App;
