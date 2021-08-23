import '../assets/css/styles.css';
import background from '../assets/img/background.jpeg'
import Sidebar from './Sidebar';

let appStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

let App = () => {
  return (
    <div style={ appStyle } className="container">
      <Sidebar />
    </div>
  )
};

export default App;