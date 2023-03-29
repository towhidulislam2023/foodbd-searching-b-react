const getFromdb = () => {
    let cart = {};
    const storedCard = JSON.parse(localStorage.getItem("food-cart"))
    if (storedCard) {
        cart = storedCard
    }
    return cart
}
const addTobd = (id,name) => {
    const cart=getFromdb()
    cart[id] = name;
    localStorage.setItem('food-cart', JSON.stringify(cart))
}
const displayFormdb =()=>{
    const storedCard = JSON.parse(localStorage.getItem("food-cart"))
    // console.log(storedCard);
    return storedCard


}

export { addTobd, getFromdb, displayFormdb }