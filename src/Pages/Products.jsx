import { useState, useEffect } from "react";
import { fetchAllProducts } from '../API/index';
import FilterOptions from "../component/FilterOpinions";
import ProductList from "../component/ProductList";
import SortingOptions from "../component/SortingOpinions";
import { useCart } from "../component/CartContext";
import NavBar from "../component/NavBar";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";


const ProductsPage = ({token}) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState(1000);
    const [sortBy, setSortBy] = useState('price');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { cart, setCart } = useCart();

    if (!token) {
      navigate('/');
    } 

    useEffect(() => {
      async function fetchData() {
        try {
          const products = await fetchAllProducts(); // Call fetchAllProducts to fetch products
          setProducts(products); // Set the fetched products to state

          const uniqueCategories = [...new Set(products.map(product => product.category))];
          setCategories(uniqueCategories);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
  
      fetchData(); // Call the fetchData function
    }, []);
    

    // Define the onPriceRangeChange function to update the priceRange state
    const onPriceRangeChange = (newValue) => {
        setPriceRange(newValue);
    }

    function selectCategory(e) {
        setSelectedCategory(e.target.value);
    }

    function selectSortBy(e) {
        setSortBy(e.target.value);
    }

    function addToCart(product) {
      const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
      // If the item already exists in the cart, increment its quantity
      existingItem.quantity += 1;
      setCart([...cart]); // Update the cart with the modified item
  } else {
      // If the item is not in the cart, add it with quantity 1
      const cartItem = {
          ...product,
          quantity: 1
      }
      setCart([...cart, cartItem]); // Add the new item to the cart
  }
  localStorage.setItem('cart', cart);
}

    function sortByPrice(ascending) {
        const sortedProducts = [...filteredProducts]; // Create a copy
        sortedProducts.sort((a, b) => {
          if (!ascending) {
            return b.price - a.price;
          } else {
            return a.price - b.price;
          }
        });
        setFilteredProducts(sortedProducts); // Update the filtered products
      }
    
      useEffect(() => {
        let filteredProducts = products;
        if (selectedCategory !== 'all') {
          filteredProducts = products.filter(product => product.category === selectedCategory);
        }
        filteredProducts = filteredProducts.filter(product => product.price <= priceRange);
    
        if (sortBy === 'price') {
          sortByPrice(true);
        } else if (sortBy === 'rating') {
          filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        }
    
        setFilteredProducts(filteredProducts); // Update filtered products
      }, [selectedCategory, priceRange, sortBy, products]);

      function handleAddToCart(product) {
        addToCart(product); // Use the addToCart function from the context
      }

      return (
        <div className="center-container">
            <div className="sidebar">
                <h2>Filter & Sort</h2>
                {token && <FilterOptions
                    categories={categories}
                    selectedCategory={selectedCategory}
                    priceRange={priceRange}
                    onCategoryChange={selectCategory}
                    onPriceRangeChange={onPriceRangeChange}
                />}
                {token && <SortingOptions sortBy={sortBy} onSortChange={selectSortBy} />}
            </div>
            <div className="product-list-center">
                {token && <h1>Products</h1>}
                {token && <ProductList products={filteredProducts} addToCart={handleAddToCart} />}
            </div>
        </div>
    );
}

export default ProductsPage;