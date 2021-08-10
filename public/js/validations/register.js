fetch('http://localhost:3001/api/users/emails')
    .then(response => {
        response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });