interface item{
    name : string;
    price : number;
}

const book: item = {
    name: 'Harry Potter'
    price: 10
}

const phone: item = {
    name:'sumsung galaxy'
    price: 4000
}

console.log(`Book Name: ${book.name} , Book Price: $${book.price}`)
console.log(`Phone Name: ${phone.name} , Phone Price: $${phone.price}`)