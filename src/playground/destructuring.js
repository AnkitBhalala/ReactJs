const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'penguin'
  }
}

const {name:publisherName = 'self published'} = book.publisher;
console.log(publisherName);

const item = ['coffee (hot)', '2.00$', '3.00$', '5.00$'];
const [coffee, , price] = item;
console.log(`A medium ${coffee} is price ${price}`);