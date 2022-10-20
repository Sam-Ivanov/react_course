console.log('1');
let a = new Promise((resolve, reject) => {
   setTimeout(() => { resolve() }, 2000)
})
console.log('2');
const b = async () => {
   await a;
console.log('3 done after 2 sec');
}

b()
// b().then(qwe);

console.log('4');

//1 2 4 3

// function qwe() {
//    console.log('3 done after 2 sec');
// }