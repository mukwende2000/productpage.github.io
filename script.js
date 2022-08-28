const thumbnails = document.querySelectorAll('.thumbnail')
const current = document.querySelector('.current')
const decrease = document.querySelector('.decrease')
const quantity = document.querySelector('.quantity')
const increase = document.querySelector('.increase')
const button = document.querySelector('button')
const product = document.querySelector('.product')
const price = document.querySelector('.product-price')
const items = document.querySelector('.items')
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const links = document.querySelector('.links')
const arrowLeft = document.querySelector('.fa-caret-left')
const arrowRight = document.querySelector('.fa-caret-right')


const imagesArray = ['images/image-product-1-thumbnail.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg']

let index = 0

current.setAttribute('src', imagesArray [index])
arrowLeft.addEventListener('click', () => {
        if (index === 0) {
            index = 3
        } else {
            index--
        }
        console.log(imagesArray[index])
        current.setAttribute('src', imagesArray[index])
})
arrowRight.addEventListener('click', () => {
    if (index === 3) {
        index = 0
    } else {
        index++
    }
    console.log(imagesArray[index])
    current.setAttribute('src', imagesArray[index])
})

thumbnails.forEach (thumbnail => {
    thumbnail.addEventListener('click', changeImage)
    function changeImage() {
       for (let i = 0; i < thumbnails.length; i++) { 
           thumbnails[i].parentElement.style.outline = 'none'
       }
        thumbnail.parentElement.style.outline = '2px solid rgb(254, 126,29)'
        current.setAttribute('src', thumbnail.getAttribute('src'))
    }
})
console.log(thumbnails[1])

decrease.addEventListener('click', () => {
    if(quantity.textContent == 0) return
    quantity.textContent--
})

increase.addEventListener('click', () => {
    quantity.textContent++
})

function openNav() {
    links.classList.add('active')
}

function closeNav() {
    console.log(links)
    links.classList.remove('active')
}


button.addEventListener('click', addToCart)
function addToCart() {
    if(items.textContent) {
        items.textContent = ''
    }
    const itemImage = document.createElement('img')
    const itemImageCont = document.createElement('div')
    itemImageCont.className = 'iic'
    itemImage.setAttribute('src', current.getAttribute('src'))

    const itemContainer = document.createElement('div')
    itemContainer.className = 'item-container'
    const itemName = document.createElement('div')
    itemName.textContent = product.textContent

    const itemDetails = document.createElement('div')
    const itemQuantity = document.createElement('div')
    itemQuantity.innerHTML = `
    <span>${price.textContent} x</span> <span>${quantity.textContent}</span> <span class="total">$${parseInt(price.textContent) * parseInt(quantity.textContent)}</span>`

    const del = document.createElement('i')
    del.classList.add('fas')
    del.classList.add('fa-trash')
    const checkOutBtn = document.createElement('button')
    checkOutBtn.className = 'checkout'
    checkOutBtn.textContent = 'Checkout'
    
    const item = document.createElement('div')
    itemImageCont.appendChild(itemImage)
    itemDetails.appendChild(itemName)
    itemDetails.appendChild(itemQuantity)
    itemContainer.appendChild(itemImageCont)
    itemContainer.appendChild(itemDetails)
    itemContainer.appendChild(del)
    items.appendChild(itemContainer)
    items.appendChild(checkOutBtn)
    
    del.addEventListener('click', () => {
        items.innerHTML =  '<p class="placeholder">Your cart is empty</p>'
    })
}