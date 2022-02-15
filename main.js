// Your task is to write a series of functions that execute the following tasks:

// xify - returns the same string, but with every character replaced by an 'x'
// Examples:
// xify('hello') -> 'xxxxx'
// xify('hi there') -> 'xxxxxxxx'

// function xify(str){
//     let strX = ''
//     for (let i of str){
//         strX += 'x'
//     }
//     return console.log(strX);
// }

// xify('hello');

// xify('hi there');






// yellingChars - returns the given string with an exclamation point after each character
// Examples:
// yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
// yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'

//Works
// function yellingChars(str){
//     let strI = '';
//     for (let i = 0; i < str.length; i++){
//         strI = strI + str[i] + '!';
//     }
//     return console.log(strI);
// }

// yellingChars('goodness');

// yellingChars('oh hello');

//Another cool way
// function yellingChars(str){
//     let strI = '';
//     for (let i of str){
//         strI += i;
//         strI += '!';
//     }
//     return console.log(strI);
// }

// yellingChars('goodness');

// yellingChars('oh hello');






// indexedChars - adds the index of each character before that character in the given string
// Examples:
// indexedChars('hello') -> '0h1e2l3l4o'
// indexedChars('bye') -> '0b1y2e'

// function indexedChars(str){
//     let strI = '';
//     for (let count = 0; count < str.length; count++){
//         strI = strI + count + str[count];
//     }
//     return console.log(strI);
// }

// indexedChars('hello');

// indexedChars('bye');

// A DIFFERENT WAY
//  function indexedChars(str){
//      let strI = '';
//      let index = 0;
//      for (let i of str){
//          strI += index;
//          strI += i;
//          index += 1;
//      }
//      return console.log(strI);
//  }

//  indexedChars('hello');

//  indexedChars('bye');






// numberedChars - adds the number of each character before that character in the given string
// Examples:
// numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
// numberedChars('bye') -> '(1)b(2)y(3)e'

// function numberedChars(str){
//     let strX = ''
//     let index = 0;
//     for (let i of str){
//         index = index + 1;
//         strX = strX + '(' + index + ')' + i;
//     }
//     return console.log(strX);
// }

// numberedChars('hello');

// numberedChars('bye');






// exclaim - returns the given sentence with every question mark or period changed to an exclamation point
// Examples:
// exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
// exclaim('This is fine.') -> 'This is fine!'

// function exclaim(str){
//     let strX = '';
//     for (let i of str){
//         if (i === '?' || i === '.'){
//             strX += '!';
//         } else {
//             strX += i;
//         }
//     }
//     return console.log(strX);
// }

// exclaim('What are you doing? Are you a fool?');

// exclaim('This is fine.');






// repeatIt - returns the given string repeated n times, where n is the second parameter
// Examples:
// repeatIt('beetlejuice', 3) -> 'beetlejuicbeetlejuiceebeetlejuice'
// repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'

// function repeatIt(str, num){
//     let strX = '';
//     for (let count = 0; count < num; count++){
//         strX += str;
//     }
//     return console.log(strX);
// }

// repeatIt('beetlejuice', 3);

// repeatIt('oh hi!', 8)





// truncate - shortens a long string to 15 characters plus an ellipsis (...)
// Examples:
// truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
// truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

// function truncate(str){
//     let strX = '';
//     for (let count = 0; count < 15; count++){
//         strX = strX + str[count];
//     }
//     return console.log(strX+'...');
// }

// truncate('The fault, dear Brutus, is not in our stars, but in ourselves.')

// truncate("Well, that's just, like, your opinion man.")






// ciEmailify - creates an email from a two-part name
// Examples:
// ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
// ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'

// function ciEmailify(str){
//     let strX = ''
//     for (let i of str){
//         if (i === ' '){
//             strX += '.';
//         } else {
//             strX += i;
//         }
//     }
//     return console.log(strX.toLocaleLowerCase()+'@codeimmersives.com');
// }

// ciEmailify('colin jaffe');

// ciEmailify('Anthony DeRosa')






// reverse - reverses the given string
// Examples:
// reverse('colin') -> 'niloc'
// reverse('mesuara') -> 'arausem'

// function reverse(str){
//     let strX = '';
//     let x = 1;
//     for (let count = 0; count < str.length; count++){
//         strX = strX + str[str.length - x];
//         x = x + 1;
//     }
//     return console.log(strX);
// }

// reverse('colin');

// reverse('mesuara');






// onlyVowels - returns only the vowels from a word
// Examples:
// onlyVowels('Colin Jaffe') -> 'oiae'
// onlyVowels('quickly') -> 'ui'
// onlyVowels('Anthony DeRosa') -> 'Aoeoa

// function onlyVowels(str){
//     let strX = '';
//     for (let i of str){
//         if (i === 'A' || i === 'a' || i === 'E' || i === 'e' || i === 'I' || i === 'i' || i === 'O'  || i === "o" || i === 'U' || i === 'u'){
//             strX += i;
//         }
//     }
//     return console.log(strX);
// }

// onlyVowels('Colin Jaffe');

// onlyVowels('Anthony DeRosa')





// crazyCase - returns the given string with alternating lower and upper cases
// Examples:
// crazyCase('hello') -> 'hElLo'
// crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
// crazyCase('YELLING') -> 'yElLiNg'

// function crazyCase(str){
//     let strX = '';
//     for (let x = 0; x < str.length; x++){
//         if (x % 2 === 0){
//             strX += str[x].toLowerCase();
//         } else {
//             strX += str[x].toUpperCase();
//         }
//     }

//     return console.log(strX);
// }

// crazyCase('hello');

// crazyCase('multiple words here')

// crazyCase('YELLING')






// titleCase - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
// Examples:
// titleCase('return of the king') -> 'Return Of The King'
// titleCase('cOde iMMerSives') -> 'Code Immersives'

// function titleCase(str){
//     let strX = '';
//     for (let x = 0; x < str.length; x++){
//         if (x === 0 || str[x-1] === " "){
//             strX += str[x].toUpperCase();
//         } else {
//             strX += str[x].toLowerCase();
//         }
//     }
//     return console.log(strX);
// }

// titleCase('return of the king');

// titleCase('cOde iMMerSives')





// camelCase - returns the given string in camel case
// Examples:
// camelCase('oh Hello') -> 'ohHello'
// camelCase('well yeah of course') -> 'wellYeahOfCourse'
// camelCase('Boy howdy') -> 'boyHowdy'

// function camelCase(str){
//     let strX = '';
//     for (let x = 0; x < str.length; x++){
//         if (str[x] === ' '){
//             strX = strX;
//         } else if (str[x-1] === ' '){
//             strX += str[x].toUpperCase();
//         } else {
//             strX += str[x].toLowerCase();
//         }
//     }
//     return console.log(strX);
// }

// camelCase('oh Hello');

// camelCase('well yeah of course');

// camelCase('Boy howdy');






// crazyCase2ReturnOfCrazyCase - same as crazyCase, but does NOT count spaces as letters to upper or lower case (see examples below!)
// Examples:
// crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
// crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'

// function crazyCase2ReturnOfCrazyCase(str){
//     let strX = '';
//     let a = 0;
//     for (let x = 0; x < str.length; x++){
//         if (str[x] === ' '){
//             a = a + 1;
//         }
//         if (a % 2 === 0){
//             strX += str[x].toLowerCase();
//         } else {
//             strX += str[x].toUpperCase();
//         }
//         a += 1;
//     }
//     return console.log(strX);
// }

// crazyCase2ReturnOfCrazyCase('multiple words here');

// crazyCase2ReturnOfCrazyCase('crazy stuff');