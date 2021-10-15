const CartElement = (props) => {
    return (
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">{props.cart.productName}</h6>
                <small class="text-muted">{props.cart.description}</small>
            </div>
            <span class="text-muted">{props.cart.amount}</span>
        </li>
    )
}


export const Cart = () => {

    const cartList = [
        {"productName": "Product name", "description": "Brief description", "amount": "$12"},
        {"productName": "Second product", "description": "Brief description", "amount": "$8"},
        {"productName": "Promo code", "description": "EXAMPLECODE", "amount": "-$5"},
    ]
    return (
        <div>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">2</span>
            </h4>
            <ul class="list-group mb-3">
                {cartList.map(cartE => (<CartElement cart={cartE} /> ))}
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$15</strong>
                </li>
            </ul>
        </div>
    )
}
