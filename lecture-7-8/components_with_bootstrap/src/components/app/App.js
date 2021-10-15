import {Footer} from "../footer/Footer"
import {Heading, Redeem} from "../checkout/Checkout"
import BillingForm from "../checkout/BillingForm"
import {Cart} from "../checkout/Cart"
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Heading />
        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <Cart />
            <Redeem />
          </div>
          <div class="col-md-8 order-md-1">
            <BillingForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
