import React, { useState } from "react";

// Define a type for the product data
type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
};

// Sample product data
const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a great product.",
        image: "https://img.kwcdn.com/product/fancy/09cac911-435c-4492-8efe-225f76cac167.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        category: "Долни дрехи",
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is another great product.",
        image: "https://images4-a.ravelrycache.com/uploads/randomoliveblog/766780876/book-sleeve-cover-02_1_medium2.jpg",
        category: "Аксесуари",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Yet another awesome product.",
        image: "https://lapose.us/cdn/shop/files/Nyree-Knit-Top-LaPose-1823.jpg?v=1710670407",
        category: "Горни дрехи",
    },
];

// Define categories for filtering
const categories = ["Всички", "Аксесуари", "Горни дрехи", "Долни дрехи"];

const ProductCatalog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term
    const [sortOption, setSortOption] = useState<string>("name-asc"); // State for sort option
    const [selectedCategory, setSelectedCategory] = useState<string>("Всички"); // State for selected category

    // Filter and sort products based on search term, category, and sort option
    const filteredProducts = products
        .filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategory === "Всички" || product.category === selectedCategory)
        )
        .sort((a, b) => {
            if (sortOption === "name-asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

    return (
        <div className="product-catalog">
            <h1>Плетива</h1>
            <div className="controls">
                <input
                    type="text"
                    placeholder="Потърси продукт..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="sort-dropdown"
                >
                    <option value="name-asc">Сортиране по име: А-Я</option>
                    <option value="name-desc">Сортиране по име: Я-А</option>
                </select>
            </div>
            {/* Horizontal categories for smaller screens */}
            <div className="categories horizontal">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-button ${category === selectedCategory ? "active" : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="main-content">
                {/* Vertical categories for larger screens */}
                <div className="categories vertical">
                    <h2>Категории</h2>
                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category}
                                className={category === selectedCategory ? "active" : ""}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <h2 className="product-name">{product.name}</h2>
                                <p className="product-description">{product.description}</p>
                                <button className="details-button">Детайли</button>
                            </div>
                        ))
                    ) : (
                        <p className="no-products-message">
                            Няма намерени продукти.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;
