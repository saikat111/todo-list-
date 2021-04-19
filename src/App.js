import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
 import Todo from './components/Todo.js'; 

function App() {
  const onDelete =(todo) =>{
    console.log("I am on delete of todo", todo);

  }
  let tods = [
    {
      sno : 1,
      title : "Go to the market",
      dis : "To done the work"
    },
    {
      sno : 2,
      title : "Go to the school",
      dis : "To done the work"
    },
    {
      sno : 3,
      title : "Go to the college",
      dis : "To done the work"
    },
  ]
  return (
   <>
  
        <Header></Header>
       <Todo tods ={tods} onDelete={onDelete} />
        <Footer></Footer>
        </>
    
  );
}

export default App;
