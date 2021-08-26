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
                id: 1,
                title: 'Santiago',
                img: 'http://localhost:3001/img/users/1627698902593.jpg'
            },
            {
                id: 2,
                title: 'Roberto',
                img: 'http://localhost:3001/img/users/1627698902593.jpg'
            }
        ])
    }, [])

    return (
        <main className='main-main' style={ mainStyle }>
            <CountPanel />
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
                            id={ item.id }
                            title={ item.title }
                            img={ item.img }
                        />
                    )
                })
            }
        </main>
    )
};

export default Main;