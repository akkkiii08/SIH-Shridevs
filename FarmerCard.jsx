import location from './location.png'
import farmer1 from './farmer1.png'
export const FarmerCard = () =>(
    <div className="card" style={{  height: 312, position: 'relative', border: '1px solid #000', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
  
  {/* Left Side: Product Image */}
  <img
    className="product-image"
    style={{ width: 291, height: 234, objectFit: 'cover', borderRadius: '8px' }}
    src={farmer1} /* Replace with your local image path */
    alt="Product Image"
  />

  

  {/* Right Side: Text Information */}
  <div className="product-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '20px', textAlign: 'left', maxWidth: '500px' }}>
    
    

    {/* Product Details */}
    <div style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
      <span><strong>Name:</strong> Arav Bhivgade ✔ </span>
      
      <p><strong>Crop:</strong> Wheat</p>
      <p><strong>Type:</strong> Big farmer</p><br/>
      <p>5.0 ★</p>
    </div>

    {/* Location */}
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <img
        className="location-icon"
        style={{ width: '20px', height: '20px', marginRight: '8px' }}
        src={location} /* Replace with an actual location icon path */
        alt="Location"
      />
      <p style={{ fontSize: '16px', marginTop: '5px', color: '#555' }}>Nagpur, MH, India</p>
    </div>

    

    {/* Buttons */}
    <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Call Now</button>
      <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Message Now</button>
    </div>
    
  </div>

</div>


)
export default FarmerCard;





        