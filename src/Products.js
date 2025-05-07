import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';

export default function Products({ token }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get('http://localhost:8000/api/products/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  return (
    <div>
      <h2>Ürünlerim</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.price}₺ ({p.stock} adet)</li>
        ))}
      </ul>

      <AddProduct token={token} onProductAdded={fetchProducts} />
    </div>
  );
}
