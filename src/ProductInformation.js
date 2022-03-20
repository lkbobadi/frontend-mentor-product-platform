import PurchaseProduct from "./PurchaseProduct";
import "./Purchase.css";

export default function ProductInformation() {
  return (
    <main className='main-information col-md-6'>
      <subtitle>Sneaker Company</subtitle>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className='price'>
        $125.00<span className='discount'> 50%</span>
        <div className='original-price mt-2 mb-5'>$225.00</div>
      </div>
      <div className='purchase-section'>
        <PurchaseProduct />
      </div>
    </main>
  );
}
