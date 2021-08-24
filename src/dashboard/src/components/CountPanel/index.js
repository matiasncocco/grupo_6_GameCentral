import './css/styles.css';
import CountItem from '../CountItem';

let CountPanel = () => {
    return (
        <section className='count-panel'>
            <CountItem 
                title='Juegos'
                number='20'
                icon=''
                color=''
            />
            <CountItem 
                title='Categorías'
                number='40'
                icon=''
                color=''
            />
            <CountItem 
                title='Plataformas'
                number='4'
                icon=''
                color=''
            />
            <CountItem 
                title='Usuarios'
                number='51'
                icon=''
                color=''
            />
            <CountItem 
                title='Ventas'
                number='200'
                icon=''
                color=''
            />
        </section>
    )
};

export default CountPanel;