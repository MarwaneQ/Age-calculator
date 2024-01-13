let navBar = document.createElement('nav')
navBar.className = 'NavSection'
document.body.appendChild(navBar)
let ul = document.createElement('ul')
for (let index = 0; index < 3; index++) {
    let li = document.createElement('li')
    ul.appendChild(li)
    let a = document.createElement('a')
    a.className = `link-${index}`
    a.href = ''
    li.appendChild(a)
    li.style.cssText=`
padding: 0px 10px;
font-weight: bold;
font-weight: bold;
    border: solid 1px black;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 0 10px;

`
a.style.cssText = `
text-decoration: none;
`

}
navBar.appendChild(ul)
document.querySelector('.link-0').textContent = 'Home'
document.querySelector('.link-1').textContent = 'About'
document.querySelector('.link-2').textContent = 'Contact'
document.body.style.cssText =`
font-family: 'Rubik', sans-serif;
background-color: #eee;

`
navBar.style.cssText = `
background-color: #eee;
height: 9vh;
color: black;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: flex-end;

`
ul.style.cssText = `
display : flex;
list-style-type: none;
padding: 0px 15px;


`
let main = document.createElement('section')
main.className = 'main'
document.body.appendChild(main)


// function name(num1,num2) {
//     let result = num1*num2;
//     return result
// }
// console.log(name(3,2));
// let x = function(a,b){
//     console.log('hi from x');
// }
// console.log(x.length);
// function name() {
//     console.log('hellooo');
// }
// function callOtherFunction(otherfun){
//     otherfun()
// }
// callOtherFunction(name)
setTimeout(function() {
    console.log('hey');
},10000)
let s = setTimeout()