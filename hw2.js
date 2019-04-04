//Task1 Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.
let arrName = ["Oleg","Andriy","Slava","Ivan","Anton"]
let firstLetter = "A"
let FirstNames = arrName.filter(x=> x[0]==firstLetter )
document.write(FirstNames)
//Task2 Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).
let carWeight = ["1500","2100","3300","300"]
let LightWeight = carWeight.every(x=> x < 2000)
document.write(LightWeight)

//Task3 Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.

let numbers = [7,4,2,-1,7,3]
let prod = numbers.reduce( (result,x)=>result * x)
document.write(prod)
//Як зробити через стрілкові функції?

//Task6 Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.

let clients = [11,-7,4,-12,6,13]
clients.forEach((x,i,a)=>{  if(x<0) a[i]=0 } )
document.write(correctClients) */
//Task8 Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
function symbSearch(result,x,i,arr){
    if ( x =='a')
        result++
    return result
    
}
let symbols = ["a","c","g","a","e","u"]
let symb1 = symbols.reduce((res,x)=> x=='a'?result+1:result,0)
document.write(symb1)
//Не виходить!
