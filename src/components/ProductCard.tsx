// components/ProductCard.js
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  previousPrice?: number;
  description: string;
  category: string;
  image: string;
  isNew?: boolean;
  brand: string;
  quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  previousPrice,
  description,
  category,
  image,
  isNew,
  brand,
  quantity,
}) => {
  return (
    <div className="max-w-md mx-auto  bg-gray-400 dark:bg-black rounded-xl overflow-hidden shadow-md">
      <Image
        width={400}
        height={400}
        className="w-full h-48 object-cover  "
        src={image}
        alt={title}
      />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{category}</span>
          {isNew && (
            <span className="bg-green-500 text-white py-1 px-2 rounded-full">
              New
            </span>
          )}
        </div>
        <h2 className="font-bold text-xl mt-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-blue-500">${price}</span>
            {previousPrice && (
              <span className="text-gray-400 line-through ml-2">
                ${previousPrice}
              </span>
            )}
          </div>
          <div className="text-gray-500">{brand}</div>
        </div>
        <div className="mt-4 text-gray-500">Available: {quantity}</div>
      </div>
    </div>
  );
};

export default ProductCard;
