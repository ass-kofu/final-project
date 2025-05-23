let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart Span');

let listProducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});
closeCart.addEventListener('click',() => {
  body.classList.toggle('showCart')
})

//add data html
const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if(listProducts.length > 0){
    listProducts.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('item');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
        <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">Ksh ${product.price}</div>
        <button class="addCart">ADD CART</button>
      `;
      listProductHTML.appendChild(newProduct);
    })
  }
}
listProductHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('addCart')){
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
})


const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
  if(carts.length <= 0){
    carts = [{
      product_id: product_id,
      quantity: 1
    }]
  }else if(positionThisProductInCart < 0){
    carts.push({
      product_id: product_id,
      quantity: 1
    });
  }else{
    carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity = 1;
  }
  }
    console.log('carts');

const initAPP = () => {
  //GET DATA FROM JSON
  fetch('products.json')
  .then(Response => Response.json())
  .then(data => {
    listProducts = data;
    addDataToHTML();
  })
}
initAPP();
