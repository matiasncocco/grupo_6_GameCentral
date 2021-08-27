import './css/styles.css';
import CountPanel from '../CountPanel';
import Panel from '../Panel';
import {
    useState,
    useEffect
} from 'react';

let Main = () => {

    useEffect(() => {
        let thisLink = document.querySelector('#home-link');
        thisLink.classList.add('active-link');
    }, [])

    let [
        data,
        setData
    ] = useState([])

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

    useEffect(() => {
        let thisLink = document.querySelector('#home-link');
        return () => {
            thisLink.classList.remove('active-link');
        }
    }, [])

    return (
        <main className='main-main'>
            <CountPanel />
            <div className='panel-container'>
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
                                title={ item.title }
                                img={ item.img }
                            >
                                <header className='panel-header'>
                                    <p>ÚLTIMO</p>
                                    <p>{ item.name }</p>
                                </header>
                            </Panel>
                        )
                    })
                }
            </div>
        </main>
    )
};

export default Main;