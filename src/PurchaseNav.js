import "./PurchaseNav.css";
import iconcart from "../src/images/icon-cart.svg";
import profileart from "../src/images/image-avatar.png";

export default function PurchaseNav() {
  return (
    <div className='purchase-navigation col-md-6'>
      <ul className='purchase-links'>
        <li>
          <img src={iconcart} alt='cart' height={20} />
        </li>
        <li>
          <img src={profileart} alt='profile icon' height={45} />
        </li>
      </ul>
    </div>
  );
}
