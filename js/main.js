// for (let i = 1; i <= 100 ; i++){
//     let str = '';
//     for(let a = 1; a <= i; a++){
//         str += a;
//     }
// }
// console.log(str);

//while operatori

// let j = 1;
// while (j <= 10){
//     console.log(j);
//     j++;
// }

// ixtiyoriy sonni bo'luvchilar sonini topish

// let i = 1;
// let n = 10;
// let sum = 0;
// while(i <= n){
//     if(n % i == 0){
//        sum++;
//     }
//     i++;
// }
// console.log(sum)

//switch    tanlash operatori

// let a = +prompt("biror bir rqama kiriting ...");
// let n = 12;
// let res;
// switch (n) {
//   case 1:
//     res = "mart";
//     break;
//   case 2:
//     res = "aprel";
//     break;
//   case 3:
//     res = "may";
//     break;
//   case 4:
//     res = "iyun";
//     break;
//   case 5:
//     res = "iyul";
//     break;
//   case 6:
//     res = "avgust";
//     break;
//   case 7:
//     res = "sentyabr";
//     break;
//   case 8:
//     res = "oktyabr";
//     break;
//   case 9:
//     res = "noyabr";
//     break;
//   case 12:
//     res = "dekabr";
//     break;
//   case 11:
//     res = "yanvar";
//     break;
//   case 10:
//     res = "fevral";
//     break;
//   default:
//     res = "bunday son mavjud emas";
//     break;
// }
// console.log(res);

// let a = +prompt(" 2 xonali son kiriting ...");
// let o = Math.trunc(a / 10);
// let resault = "";

// switch (o) {
//   case 10:
//     resault = "o'n";
//     break;
//   case 20:
//     resault = "yigirma";
//     break;
//   case 30:
//     resault = "o'ttiz";
//     break;
//   case 40:
//     resault = "qirq";
//     break;
//   case 50:
//     resault = "ellik";
//     break;
//   case 60:
//     resault = "oltmish";
//     break;
//   case 70:
//     resault = "yetmish";
//     break;
//   case 80:
//     resault = "sakson";
//     break;
//   case 90:
//     resault = "to'qson";
//     break;

//   default:
//     resault = "Ushbu operatsiani bajarish mumkin emas !!!"
//     break;
// }
// switch (b) {
//     case 1:
//       resault += "bir";
//       break;
//     case 2:
//       resault += "yigirma";
//       break;
//     case 3:
//       resault += "o'ttiz";
//       break;
//     case 4:
//       resault += "qirq";
//       break;
//     case 5:
//       resault += "ellik";
//       break;
//     case 6:
//       resault += "oltmish";
//       break;
//     case 7:
//       resault += "yetmish";
//       break;
//     case 8:
//       resault += "sakson";
//       break;
//     case 9:
//       resault += "to'qson";
//       break;
  
//     default:
//       resault = "Ushbu operatsiani bajarish mumkin emas !!!"
//       break;
//   }
// console.log(resault);
//    qo'shimcha dars 

// let a = 9;
// let b = 10;
// let c = 6;
// let sum = 1;
//  if(a % 3 == 0 ){
//   sum = sum * a;
//  }
//  if(b % 3 == 0 ){
//   sum = sum * b ;
//  }
//  if(c % 3 == 0 ){
//   sum = sum * c  ;
//  }
//  console.log(sum)


// let a = 20;
// let sum = 1;
// for( let i = 1 ; i <= a; i++ ){
//   if(a % 5 == 0){
//     sum = sum + i;
//   }
// }
// console.log(sum);


// let n = 30;
// let count = 0;

// if(n % 3 == 0 && n % 5 == 0){
// count = count + n;
// }
// console.log(count);


// let n = 30;
// let sum = 0;
// for( let i = 1; i <= n; i++){
//   if(n % i == 0){
//    sum++ ;
//   }
// }
// console.log(sum);

// //  bu misol tub yoki tub maslikka tekshiradi !

// if (sum == 2){
//   console.log("bu son tub son");
// } else{
//   console.log("bu son tub son emas !");
// }

// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++){
//   let count = 0;
//   for(let j = 1; j <= i; j++){
//     if(i % j == 0){
//       count++;
//     }
//   }
//   if(count == 2){
//     sum = sum + i;
//   }
// }
// console.log(sum);


//                            qiziqarli ketmaketlik 

// let n = 4;
// let res;

// for (let i = n; i >= 1; i -= 2) {
//   if (i % 2 == 1) {
//     res = "Qiziqarli";
//   } else {
//     res = "Qiziqarli emas";
//   }
// }
// console.log(res);


//            g'aroyib yig'indi

// let a = 10;
// let b = 15;
// let sum = 0;

// for()


// robocontest dan misollar

// 1-misol 1% li
// let a = 3;
// let b = 2;

// let sum = a + b;
// console.log(sum);







//4-oy 6-dars vazifasi

let a = 10;
let sum = 0;

for(let i = 1; i <= a; i++){
if(i % 2 == 0){
  sum = sum + 1; 
}
}
console.log(sum)
