import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, category, price, brand },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer bg-product_detail transition-all hover:scale-105"
    >
      <img
        className="w-full bg-product_bg"
        src={image}
        alt={title}
        style={{ height: '364px', objectFit: 'cover' }}
      />
      <div className="mt-2 px-2 text-lg flex justify-between items-center font-bold">
        <h3 className="truncate">{title}</h3>
        <p>${price}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
