import './css/styles.css'

let Ocurrences = (props) => {
    return (
        <div className='article-one-fourth'>
            <p className='count-title'>{ props.title }</p>
            <p className='count-number'>{ props.number }</p>
        </div>
    )
}

export default Ocurrences;