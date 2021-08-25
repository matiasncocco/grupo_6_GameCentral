import './css/styles.css';
import CountItem from '../CountItem';
import {
    useState,
    useEffect
} from 'react';

let CountPanel = () => {
    let [
        count,
        setCount
    ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api')
            .then(response => response.json())
            .then(data => {
                setCount([
                    {
                        thing: 'JUEGOS',
                        total: data.totals.gameCount
                    },
                    {
                        thing: 'CATEGORIES',
                        total: data.totals.categoryCount
                    },
                    {
                        thing: 'PLATAFORMAS',
                        total: data.totals.platformCount
                    },
                    {
                        thing: 'USUARIOS',
                        total: data.totals.userCount
                    },
                    {
                        thing: 'VENTAS',
                        total: data.totals.saleCount
                    }
                ]);
            }, [])
            .catch(err => console.log(err));
        }, []);
   
    return (
        <section className='count-panel'>
            {
                count.length === 0 &&
                <p>
                    SPINNER
                </p>
            }
            {
                count.length > 0 &&
                count.map((thing, i) => {
                    return (
                        <CountItem key={ thing + i}
                            title={ thing.thing }
                            number={ thing.total }
                        />
                    )
                })
            }
        </section>
    )
};

export default CountPanel;