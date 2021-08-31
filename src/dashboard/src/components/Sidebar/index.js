import './css/styles.css'
import { Link } from 'react-router-dom';

let Sidebar = () => {

    return (
        <aside className='sidebar'>
            <p className='logo-box'>
                GC
            </p>
            <h5 className='trademark'>
                Game Central ©
            </h5>
            <ul className='link-list'>
                <Link id='home-link' className='link-link' to='/'>
                    Home
                </Link>
                <Link id='products-link' className='link-link' to='/products'>
                    Productos
                </Link>
                <Link id='users-link' className='link-link' to='/users'>
                    Usuarios
                </Link>
            </ul>
            <ul id='back-to-web-page' className='link-list'>
                <a className='link-link' href='http://localhost:3001/' target='_blank' rel='noreferrer'>
                    Volver
                </a>
            </ul>
        </aside>
    )
};

export default Sidebar;