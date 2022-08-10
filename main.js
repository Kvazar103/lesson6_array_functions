// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log("- Знайти та вивести довижину настипних стрінгових значень")
  let exp='hello world';
    console.log(exp.length)
  let exp1='lorem ipsum';
    console.log(exp1.length)
  let exp2='javascript is cool';
    console.log(exp2.length)
//     - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log("- Перевести до великого регістру наступні стрінгові значення")
    console.log(exp.toUpperCase());
    console.log(exp1.toUpperCase())
    console.log(exp2.toUpperCase())
    // - Перевести до нижнього регістру настипні стрінгові значення
console.log("- Перевести до нижнього регістру настипні стрінгові значення")
    console.log(exp.toLowerCase())
    console.log(exp1.toLowerCase())
    console.log(exp2.toLowerCase())
    // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log("- Є \"брудна\" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.")
let str = ' dirty string   '
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let ss = 'Ревуть воли як ясла повні';

function stringToArray(string){
    let arr=string.split(' ')
    return arr
}
console.log(stringToArray(ss));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку 
// перетворити всі об'єкти в масиві на стрінгові.
console.log("// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку \n" +
    "// перетворити всі об'єкти в масиві на стрінгові.")

let arrayNumbers=[10,8,-7,55,987,-1011,0,1050,0];

let newArrayNumber=arrayNumbers.map(function (value){
    let x=`${value}`
    console.log(typeof x)
    return x
})
console.log(newArrayNumber);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
//     або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log("- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, \n" +
    "//     або навпаки в залежності від значення аргументу direction.")
let numbers=[11,21,3];

function sortNumsAscending(nums){
   return  nums.sort((a,b)=>a-b)
}
function sortNumsDescending(nums){
    return nums.sort((a,b)=>b-a)
}
console.log(sortNumsAscending(numbers));
console.log(sortNumsDescending(numbers));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log("- є масив")
console.log("-- відсортувати його за спаданням за monthDuration")
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let filtratedArray =coursesAndDurationArray.sort((a,b)=>
    (a.monthDuration-b.monthDuration))
console.log(filtratedArray)
console.log("// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців")

let newFiltratedArray=filtratedArray.filter(function (el){
    return el.monthDuration>5
})
console.log(newFiltratedArray);

// описати колоду карт
// - знайти піковий туз     //spade
// - всі шістки
// - всі червоні карти
// - всі буби               //diamond
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
console.log("описати колоду карт")
let cards=[
    {cardSuit:'spade',value:6,color:'red'},
    {cardSuit: 'diamond',value: 9,color: 'black'},
    {cardSuit: 'heart',value: 'jack',color: 'red'},
    {cardSuit: 'clubs',value: 6,color: 'red'},
    {cardSuit: 'diamond',value: 'queen',color: 'black'},
    {cardSuit: 'spade',value: 'joker',color: 'red'}
]
console.log("знайти піковий туз ")
let spade_cards=cards.filter(function (el){
    return el.cardSuit=='spade'
})
console.log(spade_cards)
console.log("всі шістки")
let cards_with6=cards.filter(function (el){
    return el.value==6;
})
console.log(cards_with6);
console.log("всі червоні карти")
let cards_red=cards.filter(function (el){
    return el.color=='red';
})
console.log(cards_red);
console.log("всі буби")
let cards_with_diamond=cards.filter(function (el){
    return el.cardSuit=='diamond';
})
console.log(cards_with_diamond);
console.log("всі трефи від 9 та більше")
let card_from_9=cards.filter(function (el){
    return el.value===9 || (typeof el.value==="string")
})
console.log(card_from_9);











