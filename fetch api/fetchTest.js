fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
    console.log('success', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('failed', err);
});
