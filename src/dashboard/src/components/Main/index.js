import './css/styles.css';
import MainCountPanel from '../MainCountPanel';
import Panel from '../Panel';
import CountPanel from '../CountPanel';
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
                delete data.games;
                setCategories(
                    data.categories
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
                            <Panel key={ item + i } 
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
                <CountPanel>

                </CountPanel>
            </div>
        </main>
    )
};

export default Main;