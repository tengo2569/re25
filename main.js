let input1 = document.querySelector('input')
let form = document.querySelector('form')
let h11 = document.querySelector('h2')
let play = document.querySelector('.play')
let txt =document.querySelector('.p2')
let txt1= document.querySelector('.p3')
let txt2= document.querySelector('.p4')
let txt3 = document.querySelector('.p6')
let noun = document.getElementById('noun')
let main =document.querySelector('main')




async function info(){
    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input1.value}`)
    let data = await res.json()
    h11.innerHTML = input1.value
    txt.innerHTML = data[0].meanings[0].definitions[0].definition
    txt1.innerHTML = data[0].meanings[0].definitions[1].definition
    txt2.innerHTML = data[0].meanings[0].definitions[2].definition
    txt3.innerHTML = data[0].meanings[0].definitions[3].definition
    noun.innerHTML = data[0].meanings[0].partOfSpeech






    console.log(data)


    play.addEventListener('click', function(){
        let audio = data[0].phonetics[1].audio
        let audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio);
        audioElement.play();
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    info()
})