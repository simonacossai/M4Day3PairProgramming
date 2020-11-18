import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Booklist from './components/BookList/BookList';
import WarningSign from './components/WarningSign/WarningSign';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
     <>
      <Navbar title="Strive"/>
      <Booklist />
      <WarningSign />
     </>
  );
}

export default App;
