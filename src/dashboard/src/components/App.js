import '../assets/css/styles.css';
import background from '../assets/img/background.jpeg';
import Sidebar from './Sidebar';
import Main from './Main';
import Products from './Products';
import Users from './Users';
import NotFound from './NotFound';
import {
  Route,
  Switch
} from 'react-router-dom';

let appStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

let App = () => {
  return (
    <div className='container' style={ appStyle }>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={ Main } />
        <Route path='/products' exact component={ Products } />
        <Route path='/users' exact component={ Users } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  )
};

export default App;