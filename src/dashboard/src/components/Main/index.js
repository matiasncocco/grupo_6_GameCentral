import './assets/css/styles.css';
import background from './assets/img/background.jpeg'
import CountPanel from '../CountPanel';
import LastPanel from '../LastPanel';

let mainStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

let Main = () => {
    return (
        <main className='main-main' style={ mainStyle }>
            <CountPanel />
            <LastPanel />
            <LastPanel />
        </main>
    )
};

export default Main;