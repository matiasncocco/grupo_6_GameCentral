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

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(
                    data.users
                )
            })
            .catch(err => console.log(err));
    }, [])

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
            </div>
        </main>
    )
};

export default Users;