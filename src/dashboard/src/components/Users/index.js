import Panel from '../Panel';
import Spinner from '../Spinner';
import {
    useEffect,
    useState
} from 'react';

let Users = () => {

    let [
        users,
        setUsers
    ] = useState([])

    let [
        userTotal,
        setUserTotal
    ] = useState(0)

    let [
        page,
        setPage
    ] = useState(1)

    useEffect(() => {
        fetch('https://g6-game-central.herokuapp.com/api')
            .then(res => res.json())
            .then(data => {
                setUserTotal(data.totals.userCount);
            })
            .catch(err => console.log(err));
    })

    useEffect(() => {
        fetch(`https://g6-game-central.herokuapp.com/api/users/${ page }`)
            .then(res => res.json())
            .then(data => {
                setUsers(
                    data.users
                )
            })
            .catch(err => console.log(err));
    }, [page])

    let usersPageUp = async () => {
        await setPage(page + 1);
        fetch(`https://g6-game-central.herokuapp.com/api/users/${ page }`)
            .then(res => res.json())
            .then(data => {
                setUsers(
                    data.users
                )
            })
            .catch(err => console.log(err));
    }

    let usersPageDown = async () => {
        await setPage(page - 1);
        fetch(`https://g6-game-central.herokuapp.com/api/users/${ page }`)
            .then(res => res.json())
            .then(data => {
                setUsers(
                    data.users
                )
            })
            .catch(err => console.log(err));
    }

    let preventDefault = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        let thisLink = document.querySelector('#users-link');
        thisLink.classList.add('active-link');
    }, [])

    useEffect(() => {
        let thisLink = document.querySelector('#users-link');
        return () => {
            thisLink.classList.remove('active-link');
        };
    }, [])

    return(
        <main className='main-main'>
        {/* main-main => Main.css */}
            <div className='panel-container'>
            {/* panel-container => Main.css */}
            {
                users.length === 0 &&
                <Spinner />
            }
            {
                users &&
                users.map((user, i) => {
                    return (
                        <Panel key={ user.name + i }
                            title={ user.name + ' ' + user.surname }
                            img={ user.avatar }
                        />
                    )
                })
            }
            {
                // every className in this block => Product.css
                users &&
                <div className='paging-button-box'>
                    <button
                        className='paging-button'
                        onClick={ page === 1 ? preventDefault : usersPageDown }
                    >
                        <h2>
                            <i className='fas fa-caret-left'></i>
                        </h2>
                    </button>
                    <h2 className='current-page'>{ page }</h2>
                    <button
                        className='paging-button'
                        onClick={
                            Math.ceil(userTotal / 6) === page ? preventDefault : usersPageUp
                        }
                    >
                        <h2>
                            <i className='fas fa-caret-right'></i>
                        </h2>
                    </button>
                </div>
            }
            </div>
        </main>
    )
};

export default Users;