import { useState } from 'react';
import './App.css';

function App() {

  const [permission, setPermission] = useState(Notification.permission);
  const [product, setProduct] = useState(null);

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert("Browser does not support notifications");
      return;
    }

    const status = await Notification.requestPermission();
    setPermission(status);
  };

  const fetchSampleProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const data = await res.json();
    setProduct(data);
  };

  return (
    <div style={{padding:'20px', fontFamily:'sans-serif'}}>

      <h1>PWA Deal Alerts</h1>

      <div style={{background:'#f4f4f4', padding:'15px', borderRadius:'8px'}}>
        <p><b>Push Permission Status:</b> {permission}</p>

        {permission !== 'granted' && (
          <button onClick={requestNotificationPermission}>
            Enable Background Alerts
          </button>
        )}
      </div>

      <br/>

      <button onClick={fetchSampleProduct}>
        Fetch Product
      </button>

      {product && (
        <div style={{border:'1px solid #ccc', padding:'10px', marginTop:'20px'}}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      )}

    </div>
  );
}

export default App;