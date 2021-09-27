import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import First from './components/first'
import Foot from './components/foot';
import '../node_modules/react-icons/fa';
import Hello from './Hello'
function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <First></First>
      <Foot></Foot> */}
      <Hello></Hello>
    </div>
  );
}

export default App;
