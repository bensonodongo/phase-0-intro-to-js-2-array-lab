// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name) {
    cats.push('Ralph')
};
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveLastCat() {
    cats.pop('Garfield')
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveFirstCat() {
    cats.shift('Milo')
}
//cats.length = 0
//cats.push('Milo', 'Otis', 'Garfield');
function appendCat(name) {
    var cats = ['Milo', 'Otis', 'Garfield']
    const newCats = [...cats, 'Broom'];
    return newCats;
}
function prependCat(name) {
    var cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = ['Arnold', ...cats];
    return newCats;
}
function removeLastCat() {
    var cats = ['Milo', 'Otis', 'Garfield'];
    cats.pop();
    return cats;
}
function removeFirstCat() {
    var cats = ['Milo', 'Otis', 'Garfield'];
    cats.shift();
    return cats;
}