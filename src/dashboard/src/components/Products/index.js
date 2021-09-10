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

    let [
        gameTotal,
        setGameTotal
    ] = useState(0)

    let [
        page,
        setPage
    ] = useState(1)

    useEffect(() => {
        fetch('http://localhost:3001/api')
            .then(res => res.json())
            .then(data => {
                setGameTotal(data.totals.gameCount);
            })
            .catch(err => console.log(err));
    })

    useEffect(() => {
        fetch(`http://localhost:3001/api/products/${page}`)
            .then(res => res.json())
            .then(data => {
                setGames(
                    data.nineGames
                )
            })
            .catch(err => console.log(err));
    }, [page])

    let gamesPageUp = async () => {
        await setPage(page + 1);
        fetch(`http://localhost:3001/api/products/${page}`)
            .then(res => res.json())
            .then(data => {
                setGames(
                    data.nineGames
                )
            })
            .catch(err => console.log(err));
    }

    let gamesPageDown = async () => {
        await setPage(page - 1);
        fetch(`http://localhost:3001/api/products/${page}`)
            .then(res => res.json())
            .then(data => {
                setGames(
                    data.nineGames
                )
            })
            .catch(err => console.log(err));
    }

    let preventDefault = (e) => {
        e.preventDefault();
    };

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
                {
                    games &&
                    <div className='paging-buttons'>
                        <button
                            className=''
                            onClick={
                                Math.ceil(gameTotal/9) === page ? preventDefault : gamesPageUp
                            }
                        >
                            Más
                        </button>
                        <button 
                            className='' 
                            onClick={ page === 1 ? preventDefault : gamesPageDown }
                        >
                            Menos
                        </button>
                    </div>
                }
            </div>
        </main>
    )
};

export default Products;