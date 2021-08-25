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
        setCount([
            {
                thing: 'JUEGOS',
                total: 23
            },
            {
                thing: 'CATEGORIES',
                total: 40
            },
            {
                thing: 'PLATAFORMAS',
                total: 4
            },
            {
                thing: 'USUARIOS',
                total: 51
            },
            {
                thing: 'VENTAS',
                total: 200
            }
        ])
    }, [])

    return (
        <section className='count-panel'>
            {
                count.length === 0 &&
                <div>
                    SPINNER
                </div>
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