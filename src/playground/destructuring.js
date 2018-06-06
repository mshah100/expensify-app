//ES6 Object Destructuring

// const book = {
//     title: 'Ego is my Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`);