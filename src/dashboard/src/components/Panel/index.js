import './css/styles.css';

let Panel = (props) => {
    return (
        <section className='panel'>
            <header className='panel-header'>
                <p>ÚLTIMO</p>
                <p>{ props.name }</p>
            </header>
            <article className='panel-article'>
                <p className='panel-title'>{ props.title }</p>
                <div className='panel-img'>
                    <img src={ props.img } alt={ `img${props.title}` }/>
                </div> 
                {/* link */}
            </article>
        </section>
    )
};

export default Panel;