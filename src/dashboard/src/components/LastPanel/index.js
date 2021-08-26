import './css/styles.css';

let LastPanel = (props) => {
    return (
        <section className='last-panel'>
            <header className='last-panel-header'>
                <p className='last-panel-id'>{ props.id }</p>
                <p className='last-panel-title'>{ props.title }</p>
                <img src={ props.img } alt={ props.title + props.id.toString() }/>
                {/* link */}
            </header>
        </section>
    )
};

export default LastPanel;