// Define a type for the product data
type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
};

// Sample product data
const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a great product.",
        image: "https://m.media-amazon.com/images/I/71HIEEiXudL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is another great product.",
        image: "https://m.media-amazon.com/images/I/8105lC4bELL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Yet another awesome product.",
        image: "https://m.media-amazon.com/images/I/71R3mOT8KqL._AC_UF894,1000_QL80_.jpg",
    },
];

const ProductsYarn: React.FC = () => {
    return (
        <div className="product-catalog">
            <h1>Product Catalog</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <button className="details-button">Детайли</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsYarn;