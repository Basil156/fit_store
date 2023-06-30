// cart
let carticon = document.querySelector("#cart-icone")
let cart = document.querySelector(".cart")
let closecart = document.querySelector("#close-cart")


//open cart
carticon.onclick = () => {
    cart.classList.add("active");
};

//close cart
closecart.onclick = () => {
    cart.classList.remove("active");
};

//cart working js
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready);

}
else{
    ready;
}
//making function
function ready(){
    //remove items from cart
    var reomvCartButtons = decument.getElemntsByClassName('cart-remove')
    console.log(reomvCartButtons)
    for(var i =0;i<reomvCartButtons.length;i++){
        var button =reomvCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}
    //remove items from cart
function removeCartItem (event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}


//update total
function updatetotal(){
    var cartContant = document.getElementsByClassName('cart-content')[0];
    var cartBoxes=cartContent.getElementsByClassName('cart-box');
    var total=0;
    for(var i =0;i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i];
        var priceElement=cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity =quantityElement.value;
        total=total+(price*quantity);

        document.getElementsByClassName("total-price")[0].innerText="$"+total;


    }

}