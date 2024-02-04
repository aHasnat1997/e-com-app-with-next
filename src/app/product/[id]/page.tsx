import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function SingleProduct() {
  const productData = {
    productId: "123456",
    productName: "Orange Fruit",
    category: "Vegetables",
    description: "Fresh organic carrots, grown without pesticides or synthetic fertilizers, provide a crisp and flavorful experience. Sourced from a local farm, these carrots are rich in natural sweetness. Packed with essential nutrients, including 110% of daily Vitamin A and 10% of Vitamin C per serving, they contribute to a healthy diet. At $2.99 per pound, our carrots are not only nutritious but also affordable. Limited stock of 100 units available. Get a taste of farm-fresh goodness with our Organic Carrots!",
    price: 2.99,
    unit: "per pound",
    origin: "Local farm",
    organic: true,
    quantity: 100,
    image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-9.webp"
  };
  const relatedProducts = [
    {
      id: '01',
      title: 'White Eggplant',
      price: 6.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-5.webp'
    },
    {
      id: '02',
      title: 'Fresh Mushroom',
      price: 5.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-6.webp'
    },
    {
      id: '03',
      title: 'Hot Patties',
      price: 3.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-7.webp'
    },
    {
      id: '04',
      title: 'Fresh Bananas',
      price: 4.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-8.webp'
    },
  ]

  return (
    <section className="section-div">
      <div className="flex items-start justify-between">
        <Image
          src={productData.image}
          alt="product image"
          width={1000}
          height={1000}
          className="size-[35%]"
        />
        <div className="w-[60%] space-y-6">
          <h2 className="text-6xl font-semibold">{productData.productName}</h2>
          <p className="text-4xl text-red-500">$ {productData.price}</p>
          <p className="text-justify">{productData.description}</p>
          <p>Category: <span className="font-semibold">{productData.category}</span></p>
          <Button className="bg-primary/20 duration-300 text-primary hover:bg-secondary hover:text-gray-700 space-x-2">
            <FaPlus />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-4 gap-4">
        {
          relatedProducts.map(item => <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            currentPrice={item.price}
            imgSrc={item.productImg}
          />)
        }
      </div>
    </section>
  )
}
