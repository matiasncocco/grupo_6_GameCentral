import './css/styles.css';
import CountItem from '../CountItem';

// fetch

let CountPanel = () => {
    return (
        <section className='count-panel'>
            <CountItem 
                title='Juegos'
                number='20'                
            />
            <CountItem 
                title='Categorías'
                number='40'                
            />
            <CountItem 
                title='Plataformas'
                number='4'                
            />
            <CountItem 
                title='Usuarios'
                number='51'                
            />
            <CountItem 
                title='Ventas'
                number='200'                
            />
        </section>
    )
};

export default CountPanel;