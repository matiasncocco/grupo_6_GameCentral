import './assets/css/styles.css';
import background from './assets/img/background.jpeg'
import CountPanel from '../CountPanel';
import Panel from '../Panel';
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

        let fetchData = async () => {
            let lastUser = await fetch('http://localhost:3001/api/users/last')
                .then(res => res.json());
            let lastProduct = await fetch('http://localhost:3001/api/products/last')
                .then(res => res.json());
            try {
                setData([
                    {
                        name: 'USUARIO',
                        title: lastUser.user.name + ' ' + lastUser.user.surname,
                        img: lastUser.user.avatar
                    },
                    {
                        name: 'PRODUCTO',
                        title: lastProduct.game.title,
                        img: lastProduct.game.img
                    }
                ])
            } catch(err) {
                console.log(err);
            };
        };
        
        fetchData();
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
                            <Panel key={ item + i }
                                name={ item.name }
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