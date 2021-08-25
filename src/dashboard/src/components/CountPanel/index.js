import './css/styles.css';
import CountItem from '../CountItem';
// import {
//     useState,
//     useEffect
// }

let CountPanel = () => {
    // let 
    let gameCount = 20;
    let categoryCount = 40;
    let platformCount = 4;
    let userCount = 51;
    let saleCount = 200;

    return (
        <section className='count-panel'>
            {
                gameCount &&
                <CountItem 
                    title='JUEGOS'
                    number={ gameCount }
                />
            }
            {
                categoryCount &&
                <CountItem 
                    title='CATEGORÍAS'
                    number={ categoryCount }
                />
            }
            {
                platformCount &&
                <CountItem 
                    title='PLATAFORMAS'
                    number={ platformCount }
                />
            }
            {
                userCount &&
                <CountItem 
                    title='USUARIOS'
                    number={ userCount }
                />
            }
            {
                saleCount &&
                <CountItem 
                    title='VENTAS'
                    number={ saleCount }
                />
            }
        </section>
    )
};

export default CountPanel;