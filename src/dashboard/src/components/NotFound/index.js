import './css/styles.css';

let NotFound = () => {
    return (
        <div>
            <h1 className='error-text'>
                ERROR 404
            </h1>
            <p className='error-detail'>
                Page not found
            </p>
        </div>
    )
}

export default NotFound;