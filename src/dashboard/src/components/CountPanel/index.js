import './css/styles.css';

let CountPanel = (props) => {
    return (
        <article className='count-panel'>
            <header className='count-header'>
                <p>{ props.identity }</p>
                <p>OCURRENCIAS</p>
            </header>
            <article className='count-article'>
                <div className='article-one-fourth'>
                    <p className='count-title'>{ props.itemOne }</p>
                    <p className='count-number'>{ props.numberOne }</p>
                </div>
                <div className='article-one-fourth'>
                    <p className='count-title'>{ props.itemTwo }</p>
                    <p className='count-number'>{ props.numberTwo }</p>
                </div>
                <div className='article-one-fourth'>
                    <p className='count-title'>{ props.itemThree }</p>
                    <p className='count-number'>{ props.numberThree }</p>
                </div>
                <div className='article-one-fourth'>
                    <p className='count-title'>{ props.itemFour }</p>
                    <p className='count-number'>{ props.numberFour }</p>
                </div>
            </article>
        </article>
    )
};

export default CountPanel;