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

//Feladat 2

async function add(numA, numB) {
  return numA + numB;
}

function sub(numA, numB) {
  return new Promise(resolve => resolve(numA - numB));
}

function mul(numA, numB) {
  return numA * numB;
}

//Feladat 3

function powCalc(n, x) {
  let result = 1;
  let intermediateValues = [];

  if (x === 0) {
    return { result: 1, intermediateValues };
  }

  for (let i = 1; i <= x; i++) {
    result *= n;
    intermediateValues.push(result);
  }

  return {
    result: result,
    intermediateValues: intermediateValues,
  };
}

console.log(bucket);
const divTask1Element = document.createElement('div');
divTask1Element.innerHTML = JSON.stringify(bucket, null, 2);
document.getElementById('app').appendChild(divTask1Element);

const operation = add(5, 4)
  .then(sum => add(2, 1).then(innerSum => sub(sum, mul(3, innerSum))))
  .then(result => sub(result, 6));

operation.then(console.log);
operation.then(x => {
  const operationContainer = document.createElement('div');
  operationContainer.innerHTML = x;
  document.getElementById('app').appendChild(operationContainer);
});

console.log(powCalc(2, 5));
console.log(powCalc(2, 10));
console.log(powCalc(5, 2));