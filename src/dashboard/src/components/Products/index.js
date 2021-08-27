import Panel from '../Panel';
import {
    useEffect,
    useState
} from 'react';

let Products = () => {

    let [
        data,
        setData
    ] = useState([])

    useEffect(() => {
        
    })

    useEffect(() => {
        let thisLink = document.querySelector('#products-link');
        thisLink.classList.add('active-link');
    }, [])

    useEffect(() => {
        let thisLink = document.querySelector('#products-link');
        return () => {
            thisLink.classList.remove('active-link')
        };
    }, [])

    return (
        <main className='main-main'> {}
        {/* main-main => Main.css */}
            <div className='panel-container'>
                {/* panel-container => Main.css */}
                {
                    data.length === 0 &&
                    <p>
                        SPINNER
                    </p>
                }
                <Panel
                    title={ 'lul' }
                />
                <Panel/>
            </div>
        </main>
    )
};

export default Products;