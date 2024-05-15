//variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', toggleEnter)

// funções callback
function handleTryClick(event){
    event.preventDefault() //não faça o padrão desse evento

    const inputNumber = document.querySelector("#inputNumber")

   if(Number(inputNumber.value) == randomNumber) {
        toggleSreen()

        // document.querySelector(".screen2 h2").innerText = 
        // `Acertou em ${xAttempts} tentativas.`

        // || assim

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas.`
        
        // não deixará que o usuário digite um número maior que 10 e menor que 0
   } else if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
        alert("Digite números entre 0 e 10!\n OBS: não contará como tentativas números fora eles")
        xAttempts--

        // aqui ele descontará a tentativa caso ele não tenha colocado nada
   } else if (inputNumber.value == "") {
        xAttempts--
   }


    inputNumber.value =""
    xAttempts++
}

function handleResetClick() {
    toggleSreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleSreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function toggleEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}