import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    fetch(`API Link should paste here/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <div>{product.price}</div>
          <div>Stock: {product.qty}</div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
