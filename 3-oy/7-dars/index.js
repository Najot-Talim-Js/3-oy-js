//  type conversion 
// NaN =  not a number


/// String to Number

// var str = '123.9209'

// var result = Number(str)
// var a = parseInt(str)
// var b = parseFloat(str)
// var result = +str

// console.log(result);



// Number to String

// var int = 200
// var result = String(int)
// var result = int + ''
// var result = `${int}` 
// var result = int.toString() 

// console.log( typeof result);

// Number to Boolean && String to Boolean && Boolean to Number && Boolean to String

// var int = 100
// var str = ' '
// var negInt = 0

// var result = Boolean(negInt)

// console.log(result);



// Falsy : 0, false, '', undefined, null
// trusy : 'asd', true, 12, -23


// var result = 0 || ' ' || false 

// var result = 'hello' && true && 100 && 'a'


// if (-1) {
//     console.log('Truthy');
// }
// else{
//     console.log('Falthy');
// }


var $body = document.getElementsByTagName('body')[0]
var $btn = document.querySelector('#btn')
var $text = document.querySelector('#text')
var $submit = document.querySelector('#submit')
var $title = document.querySelector('#title')
// var $main = document.querySelector('#main')
// $main.style.height = '100vh'


$body.style.display = 'flex'
$body.style.justifyContent = 'center'
$body.style.alignItems = 'center'
$body.style.height = '100vh'


$btn.style.padding = '1rem 5rem'

$btn.textContent = `rgb(255,255,255)`


function randomNumber() {
    var number = Math.floor(Math.random() * 256)
    return number
}



// $btn.addEventListener('click',function(){
//     if ($main.style.backgroundColor == 'black') {
//         $main.style.backgroundColor = 'gray'
//     }
//     else{
//         $main.style.backgroundColor = 'black'
//     }
// })



$btn.addEventListener('click', function () {
    var r = randomNumber()
    var g = randomNumber()
    var b = randomNumber()

    $body.style.backgroundColor = `rgb(${r},${g},${b})`
    $btn.textContent = `rgb(${r},${g},${b})`

})

$submit.addEventListener('click', function (e) {
    e.preventDefault()
    $title.textContent = $text.value
    $text.value = ''
})






