import { Prosto_One } from "next/font/google";
import { useEffect, useState } from "react";
import styles from '../src/styles/Products.module.css'

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/data/products.json");
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className={styles['product-list']}>
        <h1>Lista de Productos</h1>
        {products.map((product) => (
          <div key={product.id} className={styles["product-container"]}>
            <h2>{product.name}</h2>
            <p>Categoría: {product.category}</p>
            <p>Precio: ${product.price}</p>
            <p>
              Disponibilidad:
              {product.availability ? " Disponible" : " No disponible"}
            </p>
            <p className={product.availability ? "" : styles["product-not-avaliable"]}>
              {product.description}
            </p>
            {/* Aquí puedes mostrar las imágenes y reseñas si las tienes */}
            {product.images && product.images.length > 0 && (
              <div>
                <h3>Imágenes del Producto:</h3>
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`Imagen ${index + 1}`} />
                ))}
              </div>
            )}
            {product.reviews && product.reviews.length > 0 && (
              <div>
                <h3>Reseñas:</h3>
                {product.reviews.map((review) => (
                  <div key={review.id}>
                    <p>{review.user}</p>
                    <p>Rating: {review.rating}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
