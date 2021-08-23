import './assets/css/styles.css';
import CountItem from '../CountItem';

let CountPanel = () => {
    return (
        <section className='count-panel'>
            <header className='count-header'>
                <h2>Recuento</h2>
            </header>
            <header className='count-subheader'>
                Juegos
            </header>
            <section className='count-subpanel'>
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
            </section>
            <header className='count-subheader'>
                Juegos
            </header>
            <section className='count-subpanel'>
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
        </section>
    )
};

export default CountPanel;