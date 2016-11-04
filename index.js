const app = "I don't do much."

function destructivelyAppendKitten(name){
  window.kittens.push(name);
}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name);
}

function destructivelyRemoveLastKitten(array){
  window.kittens.pop();
}

function destructivelyRemoveFirstKitten(array){
  window.kittens.shift();
}

function appendKitten(name){
  var array = [...window.kittens,name];
  return array;
}

function prependKitten(name){
  var array = [name,...window.kittens];
  return array;
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
