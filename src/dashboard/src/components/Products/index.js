import Panel from '../Panel';
import Spinner from '../Spinner';
import {
    useEffect,
    useState
} from 'react';

let Products = () => {

    let [
        games,
        setGames
    ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => {
                setGames(
                    data.games
                )
            })
            .catch(err => console.log(err));
    }, [])

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
        <main className='main-main'>
        {/* main-main => Main.css */}
            <div className='panel-container'>
                {/* panel-container => Main.css */}
                {
                    games.length === 0 &&
                    <Spinner />
                }
                {
                    games &&
                    games.map((game, i) => {
                        return (
                            <Panel key={ game.title + i } 
                                title={ game.title }
                                img={ game.img }
                            />
                        )
                    })
                }
            </div>
        </main>
    )
};

export default Products;