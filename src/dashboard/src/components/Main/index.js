import './assets/css/styles.css';
import background from './assets/img/background.jpeg'
import CountPanel from '../CountPanel';
import LastPanel from '../LastPanel';
import {
    useState,
    useEffect
} from 'react';

let mainStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

let Main = () => {
    let [
        data,
        setData
    ] = useState([]);

    useEffect(() => {
        setData([
            {
                itemName: 'ÚLTIMO USUARIO',
                id: 1,
                title: 'Santiago Martín Guastavino',
                img: 'http://localhost:3001/img/users/1627698902593.jpg'
            },
            {
                itemName: 'ÚLTIMO PRODUCTO',
                id: 2,
                title: 'RAINBOW SIX SIEGE',
                img: 'http://localhost:3001/img/users/1627698902593.jpg'
            }
        ])
    }, [])

    return (
        <main className='main-main' style={ mainStyle }>
            <CountPanel />
            <div className='last-container'>
                {
                    data.length === 0 &&
                    <p>
                        SPINNER
                    </p>
                }
                {   data &&
                    data.map((item, i) => {
                        return (
                            <LastPanel key={ item + i }
                                itemName={ item.itemName }
                                id={ item.id }
                                title={ item.title }
                                img={ item.img }
                            />
                        )
                    })
                }
            </div>
        </main>
    )
};

export default Main;