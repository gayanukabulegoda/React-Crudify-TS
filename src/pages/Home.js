import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [qty, setqty] = useState(0);
  const [categoryId, setCategoryId] = useState(null);

  //in-order to setProducts when page loads
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    // fetch method (API)
    fetch("back-end url path should mention here")
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        // setting products to state
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCategories = () => {
    fetch("API request path")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleQty = (event) => {
    setqty(event.target.value);
  };

  const handleCategory = (event) => {
    setCategoryId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      "name": name,
      "price": price,
      "qty": qty,
      "categoryId": categoryId,
    };

    fetch("Products end-point API URL", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => { // ... means 'js spread oprator'. It spreads a full js array (means spread the array and add the new value to the end)
        setProducts([...products,data])

        setName(null)
        setPrice(null)
        setqty(null)
        setCategoryId(null)

        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to="/products">Products</Link> {/* Link component */}
        </li>
      </ul>

      <button onClick={getProducts}>Load Products</button>

      <ol>
        {products &&
          products.map((product) => {
            // for-each loop
            <li>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>;
          })}
      </ol>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input type="text" required onChange={handleName} value={name} />
        </div>
        <div>
          <label>Product Price</label>
          <input type="text" required onChange={handlePrice} value={price} />
        </div>
        <div>
          <label>Product Qty</label>
          <input type="text" required onChange={handleQty} value={qty} />
        </div>
        <div>
          <label>Quantity</label>
          <select required onChange={handleCategory} value={categoryId}>
            <option>Please Select</option>

            {categories &&
              categories.map((category) => {
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>;
              })}
          </select>
        </div>

        <button type="submit">Save Product</button>
      </form>
    </>
  );
};

export default Home;
