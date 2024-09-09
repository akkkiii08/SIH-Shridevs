import location from './location.png'
import cotton from './cotton.jpg'


export const ProductList = () =>(
    <div className="card" style={{  height: 312, position: 'relative', border: '1px solid #000', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
  
  {/* Left Side: Product Image */}
  <img
    className="product-image"
    style={{ width: 291, height: 234, objectFit: 'cover', borderRadius: '8px' }}
    src={cotton} /* Replace with your local image path */
    alt="Product Image"
  />

  {/* Right Side: Text Information */}
  <div className="product-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '20px', textAlign: 'left', maxWidth: '500px' }}>
    
    {/* Product Name and Price */}
    <div>
      <h2 style={{ fontSize: '22px', fontWeight: '600', margin: '0', color: '#000' }}>Cotton ₹ 500/Kg</h2>
    </div>

    {/* Product Details */}
    <div style={{ fontSize: '16px', color: '#555' }}>
      <p><strong>Brand:</strong> Bhivgade Productions ✔</p>
      <p><strong>Usage:</strong> Cloth Manufacture</p>
      <p><strong>Quantity:</strong> 100 Kg</p>
    </div>

    {/* Location */}
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <img
        className="location-icon"
        style={{ width: '20px', height: '20px', marginRight: '8px' }}
        src={location}/* Replace with an actual location icon path */
        alt="Location"
      />
      <p style={{ fontSize: '16px', margin: '0', color: '#555' }}>Nagpur, MH, India</p>
    </div>

    {/* Rating */}
    <div style={{ fontSize: '16px', marginTop: '10px', color: '#000', fontWeight: '600' }}>
      5.0 ★
    </div>

    {/* Buttons */}
    <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Call Now</button>
      <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Get Better Price</button>
    </div>
    
  </div>

</div>


)
export default ProductList;





        