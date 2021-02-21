//Promise() syntax
let p = new Promise((resolve, reject) => {
    let sum = 1 + 1
    if (sum == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})