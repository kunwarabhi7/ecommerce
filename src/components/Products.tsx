import ProductCard from "./ProductCard";

export const getProducts = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/amazonpro");
  const data = await res.json();
  return data;
};

const Products = async () => {
  const result = await getProducts();
  //   console.log(result);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {result.map((product: any) => {
        return (
          <ProductCard
            key={product.id}
            category={product.category}
            brand={product.brand}
            quantity={product.quantity}
            title={product.title}
            image={product.image}
            isNew={product.isNew}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
