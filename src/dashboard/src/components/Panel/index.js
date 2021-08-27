import './css/styles.css';

let Panel = (props) => {
    return (
        <section className='panel'>
            { props.children }
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