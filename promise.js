// setTimeout(() => {
//     console.log(123);
// }, 1000);

// eslint-disable-next-line no-unused-vars
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(123);
//     }, 3000);
// }).then(res => console.log(res));

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(123);
//     }, 3000);
// })
//     .then(res => console.log(res))
//     .catch(e => console.log(e));

var p1 = () =>
    new Promise((res, rej) =>
        setTimeout(() => {
            res(12345);
        }, 1000)
    );

p1();

async function q1() {
    var res = await p1();
    console.log(res);
}
q1();
