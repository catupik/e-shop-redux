const Cart = ({toggleCartVisibility}) => {
    return(
        <div>
            <img onClick={toggleCartVisibility} width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/e30613/shopping-trolley--v1.png" alt="shopping-trolley--v1"/>
        </div>
    )
}

export default Cart;