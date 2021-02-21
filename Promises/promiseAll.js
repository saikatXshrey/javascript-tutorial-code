//Promise.all syntax
const recordVideo1 = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');
})

const recordVideo2 = new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
})

const recordVideo3 = new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
})

Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((messages) => {
    console.log(messages);
});