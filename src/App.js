
import './App.css';
import Navbar from './components/Navbar';
import User from './components/user';
function App() {


  return (

    <div className='container'>

      <Navbar title="User App" />
      <hr />
      <User
      name =" Emre Ay"
      salary=" 5000"
      //department = "Bilişim"


      />
      <User
      name =" Mahmut İşçi"
      salary=" 2500"
      department = "Temizlik"


      />
      <User/>

    </div>
  );
}

export default App;
