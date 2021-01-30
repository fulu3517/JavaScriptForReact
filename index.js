// Template Literals (Şablon Dizileri)
const name = "Fatih";
const greeting = `Selam ${name}`;
console.log(greeting);

const priceFirst = 10;
const numberFirst = 2
const priceSecond = 35;
const numberSecond = 3
const currency = "USD";
const totalPrice = `Total Price : ${priceFirst * 2 + priceSecond * 3} ${currency}`;
console.log(totalPrice);

//Shorthand Property Names
const city = "İzmir";
const population = "4M";
// const cityObject= {city: city, population: population} // Key value olarak bu şekilde yazabileceğimiz gib
const cityObject= { city, population}                      // keyler le valueler aynı isimde olduğu için bu şekilde de yazabiliriz
console.log(cityObject);

// Arrow Functions
// Normal fonksiyonları sonradan tanımlayıp önce kullanabiliyoruz altta olduğu gibi.
    // console.log(plus(5,8))
    // function plus(number1, number2) {
    //     return number1 + number2;
    // } 
// Ancak arrow functions da bu mümkün değil. Önce fonksiyon tanımlanır sonra kullanılır
// console.log("Plus", plus(3,5)); // Hata verir
const plus = (number1,number2) => {
    return number1 + number2;
}
console.log("Plus", plus(3,5));
// üstteki fonksiyonu implecent retur şekllinde refactor edebilirizz. 
// Fonksiyonun içi tek bir satırsa şu şekilde yazabiliriz;
// const plus = (number1, number2) => number1 + number2
