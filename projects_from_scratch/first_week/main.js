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

//Task 3

function powCalc(n, x) {
    let result = 1;
    let intermediateValues = [];

    if (x === 0) {
        return { result: result, intermediateValues };
    } else if (x === 1) {
        return { result: n, intermediateValues }
    }

    intermediateValues.push(1);

    for (let i = 1; i <= x; i++) {
        result *= n;
        if (i !== x) {
            intermediateValues.push(result);
        }
    }

    return {
        result: result,
        intermediateValues: intermediateValues,
    };
}

//Output
console.log(bucket);
const task1Container = document.createElement('div');

task1Container.innerHTML =
    `<h2 class="mt-3">Task 1:</h2><div class="card">
        <div class="card-body">
            ${JSON.stringify(bucket, null, 2)}
        </div>
    </div>`;
document.getElementById('app').appendChild(task1Container);


// const operation = add(5, 4)
//     .then(sum => add(2, 1).then(innerSum => sub(sum, mul(3, innerSum))))
//     .then(result => sub(result, 6));

async function asyncOperation() {
    const sum = await add(5, 4);
    const innerSum = await add(2, 1);
    const subtractionResult = await sub(sum, await mul(3, innerSum));
    const result = await sub(subtractionResult, 6);

    return result;
}

asyncOperation().then(console.log);
asyncOperation().then(x => {
    const task2Container = document.createElement('div');
    task2Container.innerHTML =
        `<h2 id="taskContainer2" class="mt-3">Task 2:</h2><div class="card">
            <div class="card-body">
                ${x}
            </div>
        </div>`;
    document.getElementById('app').appendChild(task2Container);
}).then(() => asyncOperation().then(() => {
    const task2Container = document.getElementById('taskContainer2');
})).then(() => {
    console.log(powCalc(2, 2));

    const task3Container = document.createElement('div');
    task3Container.innerHTML =
        `<h2 class="mt-3">Task 3:</h2><div class="card">
            <div class="card-body">
                ${JSON.stringify(powCalc(2, 3), null, 2)}
            </div>
        </div>
    `;
    document.getElementById('app').appendChild(task3Container);
});

