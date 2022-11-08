// String Number Boolean undefined null BigInt  --- primitive

// Symbol Object Array non - primitive (objects)


// var a = 10;

// var b = 'asddas';
// var c = true;
// var d = undefined;
// var e = null;
// var f = 281390213909012498901239012380n
// var g = Symbol('foo')
// var h = 'xaxa' 

// h = c
// console.log(h);

// var person = {
//     // key        value
//     lastName: 'Akmalov',
//     firstName: 'Temur',
//     age: 22,
//     married: true,
//     address: {
//         zipCode: 100110,
//         country: 'Uzbekiston',
//         state: 'Toshkent',
//         province: 'Andijon',
//         disrict: 'Baliqchi'
//     }
// }

// console.log(person);

// var fruits = ['olma', 'shoftoli', 'anor', 'uzum', 'nok', 'xurmo', 'behi']

// console.log(fruits);

// LastName - PascalCase
// last_name - snake_case
// lastName - camelCase


// ~~~~~ orifmetik operatorlar ~~~~~~~
//  ( + - * / % ** ) 

// templete literal   `` 
// oddiy qphstirno    '' , ""

// var sm = 22800
// var metr = 100
// var natija  = sm / metr
// var log = `natijda: ${sm} santiment teng ${natija} metrga`




// console.log(log);
// var result = 2 * 3
// var result = 2 / 3
// var result = 2 % 3
// var result = 2 ** 54

// console.log(result);


// kankatinatsiya
// console.log('natijda: ' + sm + ' santiment teng ' + natija + ' metrga');


// var str1 = `jsoisjdoisaj ${metr}`
// var str2 = "jsoisjdoisaj ${metr}"
// var str3 = 'jsoisjdoisaj ${metr}';

// console.log(str1);
// console.log(str2);
// console.log(str3);

// var let const



// var a = 'hello'
// var a = 5
// var a = true;
// var a = undefined;
// var a = {name: 'asda'};
// var a = [1,2,3];
// var a = null;
// var a = Symbol('foo') ;
// var a = 1n;

// var result = typeof(a);

// console.log(result);



// logic operators 
// ( < , > , <= , >= , == , === )


// var a = 30;
// var b = 20;
// // var result = a > b;
// // var result = a < b;
// // var result = a <= b;
// // var result = a >= b;
// // var result = a == b;



// // if togri bolsa keyn ishlaydi (yani true bolsa)
// if (a > b) {
//     console.log('xa a kotta b dan');
// }
// // else false bolsa keyn ishlaydi
// else{
//     console.log('yoq a kotta emas b dan');
// }


// var yosh = 'asda'

// if (yosh >= 18) {
//     console.log('siz institutga topshiraolasiz');
// }
// else if (yosh < 18){
//     console.log('siz xali voyaga etmagansiz');
// }
// else{
//     console.log('notogri malumot kiritdingiz');
// }






// ~~~~~~~~~~~~~~~~~~~~~

// var person = {
//     // key        value
//     lastName: 'Akmalov',
//     firstName: 'Temur',
//     age: 22,
//     married: true,
//     car: null,
//     address: {
//         zipCode: 100110,
//         country: 'Uzbekiston',
//         state: 'Toshkent',
//         province: 'Andijon',
//         disrict: 'Baliqchi'
//     }
// }




// malumot olish
// var info = `Familiyasi: ${person['lastName']} , Ismi: ${person.firstName}, Yoshi: ${person.age} da`
// var getAge = 'age'

// console.log(person.age);

// console.log(person[getAge]);



// console.log(person2[getAge]);


// malumot qoyish

// var person2 = {
//     age: 66
// }

// console.log(person2);

// person2.name = 'umar'
// person2['married'] = true 
// person2.address = {
//     title: 'asdasdsa'
// }


// console.log(person2);

// malumotni ochirish


// delete person2.name
// delete person2.age
// delete person2.address

// console.log(person2);





// var fruits = ['olma', 'shoftoli', 'anor', 'uzum', 'nok', 'xurmo', 'behi']

//malumot olish
// console.log(fruits['2']);
// console.log(fruits[2]);

//malumot qotish

// fruits[7]= 'ooo'
// fruits[12]= 'aaa'
// fruits[0] = 'asdjkhasjkdhjaskd'

// malumot ichirish

// delete fruits[0]

// console.log(fruits);



// ~~~~~~~~~~



// darajaga oshireadi
console.log(Math.pow(2, 4));


// eng kotta qiymatni aniqlaydi
// console.log(Math.max(2,4,10,288));


// eng kichik qiymatni aniqlaydi
// console.log(Math.min(2,4,10,1));

// pastga 
// console.log(Math.floor(2.920));


// teppaga 
// console.log(Math.ceil(2.001));



// qaysi tamonga tortsa 
// console.log(Math.round(2.7));

//random son chiqaradi 
// console.log(Math.random());


// console.log(Math.floor(Math.random() * 10));



// ildizini chiqaradi
// console.log(Math.sqrt(5));


// kob ildiz chiqaradi
// console.log(Math.cbrt(8));




