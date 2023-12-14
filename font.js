let body = document.body
let font1 = document.getElementById('b1')
let font2 = document.getElementById('b2')
let font3 = document.getElementById('b3')

function action1(){
    body.style.fontFamily = 'mono';

}
font1.addEventListener('click',action1)

function action2 (){
body.style.fontFamily = 'Serif';
}
font2.addEventListener('click',action2)


function action3 (){
    body.style.fontFamily = 'Sans Serif';
    }
    font3.addEventListener('click',action3)
    











