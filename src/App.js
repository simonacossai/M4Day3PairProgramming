import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyBadge from './components/MyBadge/MyBadge';
import Booklist from './components/BookList/BookList';

function App() {
  return (
     <>
      <MyBadge text="hello" colour="success"></MyBadge>
      <Booklist />
     </>
  );
}

export default App;
