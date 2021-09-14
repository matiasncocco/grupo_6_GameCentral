import './css/styles.css';
import MainCountPanel from '../MainCountPanel';
import Panel from '../Panel';
import Ocurrences from '../Ocurrences';
import Spinner from '../Spinner';
import {
    useState,
    useEffect
} from 'react';

let Main = () => {

    useEffect(() => {
        let thisLink = document.querySelector('#home-link');
        thisLink.classList.add('active-link');
    }, [])

    let [
        fetchTo,
        setFetchTo
    ] = useState('')

    useEffect(() => {
        setFetchTo(
            'https://g6-game-central.herokuapp.com/api'
        );
        if (window.location.href.includes('localhost')) {
            setFetchTo(
                'http://localhost:3001/api'
            )
        };
    }, [])

    let [
        lastEntries,
        setLastEntries
    ] = useState([])

    let [
        categories,
        setCategories
    ] = useState([])

    let [
        platforms,
        setPlatforms
    ] = useState([])

    let [
        bestBuyers,
        setBestBuyers
    ] = useState([])

    let [
        bestSellers,
        setBestSellers
    ] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let lastUser = await fetch(`${ fetchTo }/users/last`)
                .then(res => res.json());
            let lastProduct = await fetch(`${ fetchTo }/products/last`)
                .then(res => res.json());
            try {
                setLastEntries([
                    {
                        ...lastUser.user
                    },
                    {
                        ...lastProduct.game
                    }
                ])
            } catch(err) {
                console.log(err);
            };
        };
        fetchData();
    }, [fetchTo])

    useEffect(() => {
        fetch(`${ fetchTo }/products`)
            .then(res => res.json())
            .then(data => {
                setCategories(
                    data.countByCategory
                )
                setPlatforms(
                    data.countByPlatform
                )
                setBestBuyers(
                    data.bestBuyers
                )
                setBestSellers(
                    data.bestSellers
                )
            })
            .catch(err => console.log(err));
    }, [fetchTo])

    useEffect(() => {
        let thisLink = document.querySelector('#home-link');
        return () => {
            thisLink.classList.remove('active-link');
        }
    }, [fetchTo])

    return (
        <main className='main-main'>
            <MainCountPanel />
            <div className='panel-container'>
                {
                    categories.length === 0 &&
                    <Spinner />
                }
                {
                    categories &&
                    <section className='count-panel'>
                        <header className='count-header'>
                            <p>Ocurrencias</p>
                            <p>CATEGORÍAS</p>
                        </header>
                        <article className='count-article'>
                            {
                                categories.map((category, i) => {
                                    return (
                                        <Ocurrences key={ category.title + i }
                                            title={ category.title }
                                            number={ category.quantity }
                                        />
                                    )
                                })
                            }
                        </article>
                    </section>
                }
                {
                    platforms.length === 0 &&
                    <Spinner />
                }                
                {
                    platforms &&
                    <section className='count-panel'>
                        <header className='count-header'>
                            <p>Ocurrencias</p>
                            <p>PLATAFORMAS</p>
                        </header>
                        <article className='count-article'>
                            {
                                platforms.map((platform, i) => {
                                    return (
                                        <Ocurrences key={ platform.title + i }
                                            title={ platform.title }
                                            number={ platform.quantity }
                                        />
                                    )
                                })
                            }
                        </article>
                    </section>
                }
                {
                    bestBuyers.length === 0 &&
                    <Spinner />
                }
                {
                    bestBuyers &&
                    <section className='count-panel'>
                        <header className='count-header'>
                            <p>Ocurrencias</p>
                            <p>COMPRADORES</p>
                        </header>
                        <article className='count-article'>
                            {
                                bestBuyers.map((buyer, i) => {
                                    return (
                                        <Ocurrences key={ buyer.surname + i }
                                            title={ buyer.name + ' ' + buyer.surname }
                                            number={ buyer.quantity }
                                        />
                                    )
                                })
                            }
                        </article>
                    </section>
                }
                {
                    bestBuyers.length === 0 &&
                    <Spinner />
                }
                {
                    bestSellers &&
                    <section className='count-panel'>
                        <header className='count-header'>
                            <p>Ocurrencias</p>
                            <p>VENDIDOS</p>
                        </header>
                        <article className='count-article'>
                            {
                                bestSellers.map((game, i) => {
                                    return (
                                        <Ocurrences key={ game.title + i }
                                            title={ game.title }
                                            number={ game.quantity }
                                        />
                                    )
                                })
                            }
                        </article>
                    </section>
                }
                {
                    lastEntries.length === 0 &&
                    <Spinner />
                }
                {   lastEntries &&
                    lastEntries.map((item, i) => {
                        return (
                            <Panel key={ item.title + i }
                                title={ item.title }
                                img={ item.img }
                            >
                                <header className='panel-header'>
                                {/* panel-header => Panel.css */}
                                    <p>ÚLTIMO</p>
                                    <p>{ item.identity }</p>
                                </header>
                            </Panel>
                        )
                    })
                }
            </div>
        </main>
    )
};

export default Main;