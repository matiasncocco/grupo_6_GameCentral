import './css/styles.css';

let LastPanel = (props) => {
    return (
        <section className='last-panel'>
            <h3 className='last-panel-header'>{ props.itemName }</h3>
            <article className='last-panel-article'>
                <p className='last-panel-id'>{ props.id }</p>
                <p className='last-panel-title'>{ props.title }</p>
                <div className='last-panel-img'>
                    <img src={ props.img } alt={ props.title + props.id.toString() }/>
                </div> 
                {/* link */}
            </article>
        </section>
    )
};

export default LastPanel;