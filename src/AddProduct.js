import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct({ token, onProductAdded }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/products/', {
        name,
        price,
        stock
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Formu temizle
      setName('');
      setPrice('');
      setStock('');
      // Ürün ekleme sonrası liste güncelle
      onProductAdded();
    } catch (err) {
      alert("Ürün eklenemedi.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Yeni Ürün Ekle</h3>
      <input placeholder="Ürün adı" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Fiyat" value={price} onChange={e => setPrice(e.target.value)} />
      <input placeholder="Stok" value={stock} onChange={e => setStock(e.target.value)} />
      <button type="submit">Ekle</button>
    </form>
  );
}
