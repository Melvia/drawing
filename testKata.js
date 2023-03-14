// const data = ['1,1,3,2,3,3,4];
// function cleanedCounts(data) {
//
//     correctData = data.reduce((acc, item, index) => {
//         const prevItem = acc?.slice(-1)['0];
//         const correctItem = (prevItem && prevItem > item) ? prevItem : item;
//         acc.push(correctItem);
//         return acc;
//     }, ['] )
//     return correctData;
// }
//
// cleanedCounts(data);
// console.log(cleanedCounts());

// function goodVsEvil(good, evil){
//     const goodWeights = ['1, 2, 3, 3, 4, 10];
//     const evilWeights =  ['1, 2, 2, 2, 3, 5, 10];
//
//     const commonGood = good.split(' ').reduce((acc, value, index) => +value * goodWeights['index] + acc, 0 );
//     const commonEvil = evil.split(' ').reduce((acc, value, index) => +value * evilWeights['index] + acc, 0 );
//
//     return commonGood > commonEvil ?  'Battle Result: Good triumphs over Evil' : commonGood < commonEvil ? 'Battle Result: Evil eradicates all trace of Good': 'Battle Result: No victor on this battle field';
// }
//
// const result = goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0');
// console.log(result);


// function GrεεκL33t(str){
//     //Think out of the block!!
//     const greekLetters = new Map([['A','α'], ['B','β'], ['D','δ'],['E','ε'],['I','ι'],['K','κ'],['N','η'],['O','θ'],['P','ρ'],['R','π'], ['T','τ'], ['U','μ'], ['V','υ'], ['W','ω'], ['X','χ'], ['Y','γ']]);
//
//     const result = [...str].map(letter =>  greekLetters.has(letter.toUpperCase()) ? greekLetters.get(letter.toUpperCase()) : letter.toLowerCase() ).join('');
// console.log(result);
// }
//
// GrεεκL33t("codewars");
//
// GrεεκL33t("kata");
//
// GrεεκL33t("kumite");
// GrεεκL33t("greekleet");
//
// var map = {a:'α',b:'β',d:'δ',e:'ε',i:'ι',k:'κ',n:'η',o:'θ',p:'ρ',r:'π',t:'τ',u:'μ',v:'υ',w:'ω',x:'χ',y:'γ'};
//
// function GrεεκL33t(str){
//     return str.toLowerCase().replace(/./g, function(v){ return map[v] || v });
// }
//
// var hanoi = function(disks) {
//     function hanoiMove(ringsCount, from, to, buf) {
//         if (ringsCount === 1) {
//           //  console.log(from, '-->', to);
//             moveCounter++;
//         }
//         else
//         {
//             hanoiMove(ringsCount-1, from, buf, to);
//             //console.log(from, '-->', to);
//             moveCounter++;
//             hanoiMove(ringsCount-1, buf, to , from);
//         }
//
//     }
//     let moveCounter = 0;
//     const first = 'первый';
//     const second = 'второй';
//     const third = 'третий';
//     hanoiMove(disks, 1, 2, 3);
//     console.log(moveCounter);
// };
//
//
//
//
// hanoi(20);

// var hanoi = function(disks) {
//     let moveCounter = 0;
//     const x = 'первый';
//     const y = 'второй';
//     const z = 'третий';
//
//     if (!(disks % 2))
//     clockwise()
//
//
//     clockwise() {
//
//     }
//
//
//     counterclockWise() {}
//
// //     console.log(moveCounter);
// };

// longestPalindrome=function(s){
//     //your code here
//     if (s.length === 0 ) return 0;
//     for (strLength = s.length; strLength > 0; strLength--) {
//         for (beginSym=0; beginSym <= s.length-strLength; beginSym++) {
//             const checkingString = s.substring(beginSym, beginSym+strLength);
//             if (checkingString === [...checkingString]?.reverse()?.join(''))
//                 return strLength;
//         }
//     }
// }

// function reverseString(checkingString) {
//     const revString = [...checkingString]?.reverse()?.join('');
//     return  revString;
// }

//
// console.log(longestPalindrome(''));
//
// console.log(longestPalindrome('baablkj12345432133d'));

// function isValidIP(str) {
//     const ipArray = str.split('.');
//     if (ipArray.length === 4 && ipArray.every(ip => +ip <= 255 && +ip >= 0))
//         return true;
//     return false;
// }
//
// // console.log(isValidIP("0.0.0.0"));
// console.log(isValidIP('01.02.03.04'));


var date1 = new Date("7/11/2010");
var date2 = new Date("12/12/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log(diffDays);