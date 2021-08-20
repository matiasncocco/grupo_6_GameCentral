import {
    useState,
    useEffect,
} from 'react';

let User = () => {
    let [
        user,
        setUser
    ] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/api/users/51`)
            .then(response => { return response.json() })
            .then(data => {
                setUser(
                    data.user
                );
            })
            .catch(err => {
                console.log(err);
            });
    }, [])
    
    return (
        <>
            <h2>
                hello { user.name }
            </h2>
        </>
    )
};

export default User;