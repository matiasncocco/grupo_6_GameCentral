import Panel from '../Panel';
import Spinner from '../Spinner';
import {
    useEffect,
    useState
} from 'react';
import { getCurrentUrl } from '../../utils/helper';

let Users = () => {

    let currentUrl = getCurrentUrl();

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
        fetch(`${ currentUrl }/api`)
            .then(res => res.json())
            .then(data => {
                setUserTotal(data.totals.userCount);
            })
            .catch(err => console.log(err));
    }, [currentUrl])

    useEffect(() => {
        fetch(`${ currentUrl }/api/users/${ page }`)
            .then(res => res.json())
            .then(data => {
                setUsers(
                    data.users
                )
            })
            .catch(err => console.log(err));
    }, [page, currentUrl])

    let usersPageUp = async () => {
        await setPage(page + 1);
        fetch(`${ currentUrl }/api/users/${ page }`)
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
        fetch(`${ currentUrl }/api/users/${ page }`)
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
            <div className='panel-container'>
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