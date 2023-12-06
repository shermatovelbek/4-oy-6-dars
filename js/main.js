

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

// let a = 153;
// let y = a / 10 - (a % 10) / 10 - 14;
// let o = a / 10 - (a % 10) / 10 - 10;
// let b = a % 10;

// let birlik = "";
// let onlik = "";
// let yuzlik = "";
// switch (y) {
//   case 100:
//     yuzlik = "biryuzi";
//     break;
//   case 200:
//     yuzlik = "ikkiyuzi";
//     break;
//   case 300:
//     yuzlik = "uchyuzi";
//     break;
//   case 400:
//     yuzlik = "to'rtyuzi";
//     break;
//   case 500:
//     yuzlik = "beshyuzi";
//     break;
//   case 600:
//     yuzlik = "oltyuzi";
//     break;
//   case 700:
//     yuzlik = "yetyuzi";
//     break;
//   case 800:
//     yuzlik = "sakkizyuzi";
//     break;
//   case 900:
//     yuzlik = "to'qqizyuzi";
//     break;

//   default:
//     sum = "Ushbu operatsiyani amalga oshirib bo'lmaydi !!!"
//     break;
// };
// switch (o) {
//   case 10:
//     onlik += "o'n";
//     break;
//   case 20:
//     onlik += "yigirma";
//     break;
//   case 30:
//     onlik += "o'ttiz";
//     break;
//   case 40:
//     onlik += "qirq";
//     break;
//   case 50:
//     onlik += "ellik";
//     break;
//   case 60:
//     onlik += "oltmish";
//     break;
//   case 70:
//     onlik += "yetmish";
//     break;
//   case 80:
//     onlik += "sakson";
//     break;
//   case 90:
//     onlik += "to'qson";
//     break;

//   default:
//     sum = "Ushbu operatsiyani amalga oshirib bo'lmaydi !!!"
//     break;
// }
// switch (b) {
//   case 1:
//     birlik += "bir";
//     break;
//   case 2:
//     birlik += "ikki";
//     break;
//   case 3:
//     birlik += "uch";
//     break;
//   case 4:
//     birlik += "to'rt";
//     break;
//   case 1:
//     birlik += "besh";
//     break;
//   case 1:
//     birlik += "olti";
//     break;
//   case 1:
//     birlik += "yetti";
//     break;
//   case 1:
//     birlik += "sakkiz";
//     break;
//   case 1:
//     birlik += "qo'qqiz";
//     break;

//   default:
//     sum =  "Ushbu operatsiyani amalga oshirib bo'lmaydi !!!"
//     break;
// }


// console.log(yuzlik , onlik , birlik);

// domla shu misolda hatolik bormi bilmayman !
// lekin man darsdagi vidioni ko'rp qildm lekn javob chqmadi domla shuni iltimos chuntirib bersangiz !


//7-misol
let sonOne = +prompt("Birinchi sonni kiriting");
let sonTwo = +prompt("Ikkinchi sonni kiriting");
let operator = prompt("Xisoblovchi operator kiriting");
let count;
if (operator == "+") {
  console.log(sonOne + sonTwo);
}
if (operator == "-") {
  console.log(sonOne - sonTwo);
}
if (operator == "*") {
  console.log(sonOne * sonTwo);
}
if (operator == "/") {
  console.log(sonOne / sonTwo);
}