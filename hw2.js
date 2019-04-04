//Task1 Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.
let arrName = ["Oleg","Andriy","Slava","Ivan","Anton"]
let firstLetter = "A"
let FirstNames = arrName.filter(x=>{
    if(x[0]==firstLetter)
    return x
})
document.write(FirstNames)
//Task2 Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).
let carWeight = ["1500","2100","3300","300"]
let LightWeight = carWeight.every(x=>{
    if(x < 2000)
        return x 
})
document.write(LightWeight)

//Task3 Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.
function numProduct(result,x,i,numbers){
    return result *=x   
}
let numbers = [7,4,2,-1,7,3]
let prod = numbers.reduce(numProduct,1)
document.write(prod)
//Як зробити через стрілкові функції?

//Task6 Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.
function clientsPerWeek(x,i,arr){
    if(x<10)
        return x
}
let clients = [11,7,4,12,6,13]
let correctClients = clients.some(clientsPerWeek)
document.write(correctClients) */
//Task8 Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
function symbSearch(result,x,i,arr){
    if (result == x) {
        return x
    }
}
let symbols = ["a","c","g","a","e","u"]
let symb1 = symbols.reduce(symbSearch,"")
document.write(symb1)
//Не виходить!