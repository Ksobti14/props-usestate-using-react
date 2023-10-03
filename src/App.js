import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  return (
    <>
    <Navbar title="kanav-cart"/>
    <Alert alert="Customer Alert!"/>
    <div className='container'>
    <TextForm heading='enter the text to analyse'/>
    </div>
    </>
  );
}

export default App;
