import { useEffect, useState } from "react";
import styles from "../src/styles/Products.module.css";

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
      <h1 className={styles["title-products"]}>Lista de Productos</h1>
      <div className={styles["product-list"]}>
        {products.map((product) => (
          <div key={product.book.ISBN} className={styles["product-container"]}>
            <h2>{product.book.title}</h2>
            <p>
              {" "}
              <b>Género: </b> {product.book.genre}
            </p>
            <p>
              <b>Sinopsis: </b> {product.book.synopsis}
            </p>
            <p>
              <b>Autor: </b> {product.book.author.name}
            </p>
            <p>
              <b>Año: </b>
              {product.book.year}
            </p>
            <p>
              <b>Precio: </b>${product.book.price}
            </p>
            <h3>Portada del libro</h3>
            <img src={product.book.cover} alt={`Imagen`} />
          </div>
        ))}
      </div>
    </>
  );
};
