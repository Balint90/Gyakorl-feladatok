//Task 1

const list = [false, 1, '2', [3, 4], { ot: 5 }];
const emptyBucket = { bool: [], number: [], string: [], list: [], object: [] };

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
}, emptyBucket);

//Task 2

async function add(numA, numB) {
    return numA + numB;
}

function sub(numA, numB) {
    return new Promise(resolve => resolve(numA - numB));
}

function mul(numA, numB) {
    return numA * numB;
}

// const operation = add(5, 4)
//     .then(sum => add(2, 1).then(innerSum => sub(sum, mul(3, innerSum))))
//     .then(result => sub(result, 6));

async function asyncOperation() {
    const sum = await add(5, 4);
    const innerSum = await add(2, 1);
    const subtractionResult = await sub(sum, await mul(3, innerSum));
    await sub(subtractionResult, 6).then(console.log);
}

//Task 3

function powCalc(n, x) {
    let result = 1;
    let intermediateValues = [];

    if (x <= 1) {
        return { result: x === 0 ? result : n, intermediateValues };
    }

    intermediateValues.push(1);

    for (let i = 1; i <= x; i++) {
        result *= n;
        if (i !== x) {
            intermediateValues.push(result);
        }
    }

    return {
        result,
        intermediateValues,
    };
}

//Output
console.log(bucket);
await asyncOperation();
console.log(powCalc(2, 2));
