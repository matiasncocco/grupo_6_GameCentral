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
                        item: 'JUEGOS',
                        total: data.totals.gameCount
                    },
                    {
                        item: 'CATEGORIES',
                        total: data.totals.categoryCount
                    },
                    {
                        item: 'PLATAFORMAS',
                        total: data.totals.platformCount
                    },
                    {
                        item: 'USUARIOS',
                        total: data.totals.userCount
                    },
                    {
                        item: 'VENTAS',
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
                count.map((item, i) => {
                    return (
                        <CountItem key={ item + i}
                            title={ item.item }
                            number={ item.total }
                        />
                    )
                })
            }
        </section>
    )
};

export default CountPanel;