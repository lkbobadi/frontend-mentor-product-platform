import "./App.css";
import Navigation from "./Navigation";
import ProductGallery from "./ProductGallery";
import ProductInformation from "./ProductInformation";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <nav className='navigation row'>
          <Navigation />
        </nav>
        <main className='product-section row'>
          <ProductGallery />
          <ProductInformation />
        </main>
      </div>
    </div>
  );
}
