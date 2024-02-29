//Task 1

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


const operation = add(5, 4)
    .then(sum => add(2, 1).then(innerSum => sub(sum, mul(3, innerSum))))
    .then(result => sub(result, 6));

operation.then(console.log);
operation.then(x => {
    const task2Container = document.createElement('div');
    task2Container.innerHTML =
        `<h2 class="mt-3">Task 2:</h2><div class="card">
            <div class="card-body">
                ${x}
            </div>
        </div>`;
    document.getElementById('app').appendChild(task2Container);
}).then(() => {
    console.log(powCalc(2, 5));
    console.log(powCalc(2, 10));
    console.log(powCalc(5, 2));

    const task3Container = document.createElement('div');
    task3Container.innerHTML =
        `<h2 class="mt-3">Task 3:</h2><div class="card">
            <div class="card-body">
                ${JSON.stringify(powCalc(2, 10), null, 2)}
            </div>
        </div>
    `;
    document.getElementById('app').appendChild(task3Container);
});

