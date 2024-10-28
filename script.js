const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++){
    string+=friends[i];
    if (i < friends.length - 1){
        string += ' ';
    }
}
console.log(string);


const friends1 = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string1 = friends1.join(' ');
console.log(string1);


const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
const cardToRemove = cards.splice(2, 1);
console.log(cards);
const cardToInsert = cards.push('Карточка-6')
console.log(cards);
const cardToUpdate = cards.splice(2, 0, 'Карточка-4(Обновленный)');
console.log(cards);