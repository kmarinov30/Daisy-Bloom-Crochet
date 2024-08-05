import { useState } from "react";

// Define a type for the product data
type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
};

const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a great product.",
        image: "https://www.susannaarnall.fi/storage_167933/%D0%A0%D0%B5%D0%BA%D0%BE%D0%BB%D1%82%D0%B0-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%B8-%D0%BF%D0%BB%D0%B5%D1%82%D0%B5%D0%BD%D0%B8-%D0%BF%D1%83%D0%BB%D0%BE%D0%B2%D0%B5%D1%80%D0%B8-1_pic.jpeg",
        category: "Tops",
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is another great product.",
        image: "https://s7.badu.bg/photos/493202/400x400_6363b0a7ed8f4.jpg",
        category: "Bottoms",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Yet another awesome product.",
        image: "https://s7.badu.bg/photos/493202/400x400_6363b0a609fb6.jpg",
        category: "Accessories",
    },
];

// Define categories for filtering
const categories = ["All", "Tops", "Bottoms", "Accessories"];

const ProductsKnitting: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term
    const [sortOption, setSortOption] = useState<string>("name-asc"); // State for sort option
    const [selectedCategory, setSelectedCategory] = useState<string>("All"); // State for selected category

    // Filter and sort products based on search term, category, and sort option
    const filteredProducts = products
        .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === "All" || product.category === selectedCategory)
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
            <h1>Product Catalog</h1>
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="sort-dropdown"
                >
                    <option value="name-asc">Sort by Name: A-Z</option>
                    <option value="name-desc">Sort by Name: Z-A</option>
                </select>
            </div>
            <div className="main-content">
                <div className="categories">
                    <h2>Categories</h2>
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
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                            <button className="details-button">Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsKnitting;