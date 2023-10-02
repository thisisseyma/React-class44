import "./App.css";
import Categories from "./components/Categories.js";
import Products from "./components/Products.js";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Products</h1>
                <Categories
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
                <Products selectedCategory={selectedCategory} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
