import './css/styles.css';
import MainCountPanel from '../MainCountPanel';
import Panel from '../Panel';
import Ocurrences from '../Ocurrences';
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
            let lastUser = await fetch('http://localhost:3001/api/users/last')
                .then(res => res.json());
            let lastProduct = await fetch('http://localhost:3001/api/products/last')
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
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
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
    }, [])

    useEffect(() => {
        let thisLink = document.querySelector('#home-link');
        return () => {
            thisLink.classList.remove('active-link');
        }
    }, [])

    return (
        <main className='main-main'>
            <MainCountPanel />
            <div className='panel-container'>
                {
                    lastEntries.length === 0 &&
                    <p>
                        SPINNER
                    </p>
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
                {
                    categories.length === 0 &&
                    <p>
                        SPINNER
                    </p>
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
                    <p>
                        SPINNER
                    </p>
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
                    <p>
                        SPINNER
                    </p>
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
                    <p>
                        SPINNER
                    </p>
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
            </div>
        </main>
    )
};

export default Main;