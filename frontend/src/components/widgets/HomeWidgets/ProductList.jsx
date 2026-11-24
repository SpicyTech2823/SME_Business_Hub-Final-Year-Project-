import ProductCard from './ProductCard'
const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard 
        image="/path/to/image1.jpg" 
        name="Product 1" 
        category="Category 1" 
        rate="4.5" 
        location="Location 1" 
      />
      <ProductCard 
        image="/path/to/image2.jpg" 
        name="Product 2" 
        category="Category 2" 
        rate="4.0" 
        location="Location 2" 
      />
      <ProductCard 
        image="/path/to/image3.jpg" 
        name="Product 3" 
        category="Category 3" 
        rate="4.8" 
        location="Location 3" 
      />
      <ProductCard 
        image="/path/to/image4.jpg" 
        name="Product 4" 
        category="Category 4" 
        rate="4.2" 
        location="Location 4" 
      />
    </div>
  )
}

export default ProductList;