import '../assets/css/styles.css';
import Sidebar from './Sidebar';
import Main from './Main';

let App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Main />
    </div>
  )
};

export default App;