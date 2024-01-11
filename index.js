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



let a = 10