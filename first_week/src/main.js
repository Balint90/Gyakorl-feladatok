//Feladat 1

const list = [false, 1, '2', [3, 4], { ot: 5 }];

const bucket = list.reduce((acc, currentItem) => {
  switch (typeof currentItem) {
    case 'boolean':
      acc.bool.push(currentItem);
      break;
    case 'number':
      acc.number.push(currentItem);
      break;
    case 'string':
      acc.string.push(currentItem);
      break;
    case 'object':
      Array.isArray(currentItem) ? acc.list.push(currentItem) : acc.object.push(currentItem);
      break;
    default:
      console.log(`Type ${typeof currentItem} is not handled`);
  }
  return acc;
}, { bool: [], number: [], string: [], list: [], object: [] });

console.log(bucket);
