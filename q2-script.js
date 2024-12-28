const products = new Array(10)

products[0] = {name: 'Gum', description: 'A wonderfull gum that clear your mouth',price: 3 }
products[1] = {name: 'Macbook', description: 'A wonderfull pc in a great price',price: 3000 }
products[2] = {name: 'Iphone', description: 'A smart phone for your pocket that can do almost everything',price: 3000 }
products[3] = {name: 'Nike Shoes', description: 'A beautiful shoes to walk everywhere from nike',price: 300 }
products[4] = {name: 'Shirt', description: 'A Tshirt to wear in the everyday life',price: 50 }
products[5] = {name: 'Pants', description: 'A pants to wear in the everyday life',price: 50 }
products[6] = {name: 'Mouse pad', description: 'A wonderfull pad for your mouse that makes everything go smooth',price: 30 }
products[7] = {name: 'Screen', description: 'A screen to watch all the tv shows you want',price: 1000 }
products[8] = {name: 'Camera', description: 'A Camera to film stuff in high quality',price: 3000 }
products[9] = {name: 'Pc game', description: 'A game to play on your macbook',price: 200 }

function priceEntered(){
    document.getElementById('products').innerHTML = ""
    
    const myPrice = document.getElementById('input').value 
    products.forEach((product, index) => {
        if(myPrice >= product.price ){  
            let displayPro = document.createElement("div")
            displayPro.classList.add("product")
            displayPro.innerHTML += `${product.name}:
                ${product.description}
                ,price: ${product.price}₪`
            document.getElementById('products').append(displayPro)
        }
    })
}

