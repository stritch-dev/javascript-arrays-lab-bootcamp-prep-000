const app = "I don't do much."


function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;

}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}
function removeLastKitten(name){
  var newArray = kittens.slice();
  newArray.pop(name);
  return newArray;
}
function removeFirstKitten(){
  var newArray = kittens.slice();
  newArray.shift(name);
  return newArray;
}

function prependKitten(name) {
  var newArray = kittens.slice();
  newArray.unshift(name);
  return newArray;

}
