let array = ['l', 'a', 'p', 't', 'o', 'p'];

function reversedArray(array){
  for(let i = array.length-1; i >= (array.length-1)/2; i--){
    let a = array[0 + i];
    console.log(a);
    let b = array[array.length-1-i];
    console.log(b);

    array[array.length-1-i] = a;
    array[0 + i] = b;
  }
  return array;
}
reversedArray(array);