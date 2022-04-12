let arrayProdutos = []

// filter

function addToCart(product){
  arrayProdutos.push(product)
}


function removeProduct(id) {
    arrayProdutos = arrayProdutos.filter((product) => {
        console.log("actual produt", product)
        return product.id !== id
    })
}


addToCart({
    id: "873484",
    price: 10,
    name: "arroz"
})

addToCart({
    id: "9349384",
    price: 8,
    name: "batata"
})


removeProduct("9349384")

function sumTotal(price){
    const sum = arrayProdutos.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);

    return sum
}

console.log("total", sumTotal())

addToCart({
    id: "fsdfsdfds",
    price: 200,
    name: "betrraba"
})

console.log("total", sumTotal())