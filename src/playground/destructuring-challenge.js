// object destructuring
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penquin',
//   },
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// array destructuring
const address = ['123 Elm Stree', , 'California', '19454'];

const [, city = 'Iowa', state] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, small, medium, large] = item;
console.log(`A medium ${itemName} costs ${medium}`);
