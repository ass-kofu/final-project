function addcart(){
  const buttonElement = document.querySelector('.addCart');

  if (buttonElement.innerHTML === 'ADD TO CART'){
  buttonElement.innerHTML = 'ADDED TO CART';
  } else {
    buttonElement.innerHTML = 'ADD TO CART'
  };
}