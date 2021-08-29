import './css/styles.css';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

let Panel = (props) => {
    
    useEffect(() => {
        let panel = document.querySelectorAll('.panel');
        for (let i = 0; i < panel.length; i++) {
            if (panel[i].firstChild.localName !== 'header') {
                panel[i].classList.add('panel-thinner');
            };
        }
    }, [])

    return (
        <section className='panel'>
            { props.children }
            <article className='panel-article'>
                <p className='panel-title'>{ props.title }</p>
                <div className='panel-img'>
                    <a target='_blank' href={ props.img } rel='noreferrer'>
                        <img src={ props.img } alt={ `img${props.title}` }/>
                    </a>
                </div>
                {/* <Link to={`/products/:${props.id}`}></Link> */}
            </article>
        </section>
    )
};

export default Panel;