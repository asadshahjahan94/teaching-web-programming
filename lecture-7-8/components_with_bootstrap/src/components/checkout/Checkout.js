export const Redeem = () => {
    return (
        <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code"/>
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
        </form>
    )
}

export const Heading = () => {
    return (
        <div class="py-5 text-center">
          <h2>Checkout form</h2>
          <p class="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
    )
}

