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
// robocontest dan misollar

// 1-misol 1% li
// let a = 3;
// let b = 2;

// let sum = a + b;
// console.log(sum);

//4-oy 6-dars vazifasi

//1-misol

// let a = 10;
// let sum = 0;
// let i = 1;

// while (i <= a) {
//   if (i % 2 == 0) {
//     sum++;
//     sum + sum + i;
//   }
//   i++;
// }
// console.log(sum);

//2-misol

// let a = 10;
// let i = 1;
// let sum = 1;
// while(i <= a){
//   i++;
//   if(i % 3 == 0){
//     sum = sum * i;
//   }
// }
// console.log(sum)

//3-misol
// let a = 5;
// let b = 10;
// let i = 0;
// let count = 0;
// while(i <= a){
//   i++;
//   if(i % 3 == 0 ){
//     count++;
//   }
// }
// while(i <= a){
//   i++;
//   if(i % 7 == 0 ){
//     count++;
//   }
// }
// while(i <= b){
//   i++;
//   if(i % 3 == 0 ){
//     count++;
//   }
// }
// while(i <= b){
//   i++;
//   if(i % 7 == 0 ){
//     count++;
//   }
// }
// console.log(count)

//4-misol
// let a = 7;
// let sum;

// if(a == 2){
//   sum = "Bu son tub son emas !!!";
// } else{
//   sum = "Bu son tub son  !!!";
// }
// console.log(sum);

//5-misol

// let a = 153;

// let b = (a % 10);
// let o = (a / 10) - a % 10 / 10 - 10;
// let y = ( a / 10) - a % 10 / 10 - 14;
// sum = b + o + y;
// console.log(sum);

//6-misol

let a = 153;
let y = a / 10 - (a % 10) / 10 - 14;
let o = a / 10 - (a % 10) / 10 - 10;
let b = a % 10;

let birlik = "";
let onlik = "";
let yuzlik = "";
switch (y) {
  case 100:
    yuzlik = "biryuzi";
    break;
  case 200:
    yuzlik = "ikkiyuzi";
    break;
  case 300:
    yuzlik = "uchyuzi";
    break;
  case 400:
    yuzlik = "to'rtyuzi";
    break;
  case 500:
    yuzlik = "beshyuzi";
    break;
  case 600:
    yuzlik = "oltyuzi";
    break;
  case 700:
    yuzlik = "yetyuzi";
    break;
  case 800:
    yuzlik = "sakkizyuzi";
    break;
  case 900:
    yuzlik = "to'qqizyuzi";
    break;

  default:
    sum = "Ushbu operatsiyani amalga oshirib bo'lmaydi !!!"
    break;
};
switch (o) {
  case 10:
    onlik += "o'n";
    break;
  case 20:
    onlik += "yigirma";
    break;
  case 30:
    onlik += "o'ttiz";
    break;
  case 40:
    onlik += "qirq";
    break;
  case 50:
    onlik += "ellik";
    break;
  case 60:
    onlik += "oltmish";
    break;
  case 70:
    onlik += "yetmish";
    break;
  case 80:
    onlik += "sakson";
    break;
  case 90:
    onlik += "to'qson";
    break;

  default:
    sum = "Ushbu operatsiyani amalga oshirib bo'lmaydi !!!"
    break;
}
switch (b) {
  case 1:
    birlik += "bir";
    break;
  case 2:
    birlik += "ikki";
    break;
  case 3:
    birlik += "uch";
    break;
  case 4:
    birlik += "to'rt";
    break;
  case 1:
    birlik += "besh";
    break;
  case 1:
    birlik += "olti";
    break;
  case 1:
    birlik += "yetti";
    break;
  case 1:
    birlik += "sakkiz";
    break;
  case 1:
    birlik += "qo'qqiz";
    break;

  default:
    sum =  "Ushbu operatsiyani amalga oshirib bo'lmaydi !!!"
    break;
}


console.log(yuzlik , onlik , birlik)