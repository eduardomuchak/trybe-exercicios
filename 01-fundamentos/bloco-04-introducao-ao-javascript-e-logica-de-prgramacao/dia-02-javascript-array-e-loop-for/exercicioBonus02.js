//Ordene o array numbers em ordem decrescente e imprima seus valores;

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[secondIndex];
        array[secondIndex] = array[index];
        array[index] = position;
      }
    }
  }
  console.log(array)