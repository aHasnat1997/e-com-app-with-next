import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Shop() {
  const categories = ['Vegetables', 'Fruits', 'Juice', 'Meat', 'Milk & Drinks', 'Sea Food', 'Fishes'];
  const weight = ['250gm', '500gm', '1kg', '2kg', '5kg', '10kg'];
  const productData = [
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
    {
      id: '05',
      title: 'Terra organics',
      price: 6.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-9.webp'
    },
    {
      id: '06',
      title: 'Orange Fruit',
      price: 8.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-10.webp'
    },
    {
      id: '07',
      title: 'Terra organics',
      price: 6.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-9.webp'
    },
    {
      id: '08',
      title: 'Orange Fruit',
      price: 8.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-10.webp'
    },
    {
      id: '09',
      title: 'Terra organics',
      price: 6.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-9.webp'
    }
  ];

  return (
    <section className="section-div flex items-start gap-8">
      <div className="w-[25%] shadow-xl p-8">
        <div>
          <h3 className="text-xl font-semibold">Product Categories</h3>
          <ul className="mt-4">
            {
              categories.map(item => <li
                key={item}
                className="p-4 duration-200 hover:bg-secondary/50 cursor-pointer rounded-md"
              >
                {item}
              </li>)
            }
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Weight</h3>
          <ul className="mt-4">
            {
              weight.map(item => <li
                key={item}
                className="p-4 duration-200 hover:bg-secondary/50 cursor-pointer rounded-md"
              >
                {item}
              </li>)
            }
          </ul>
        </div>
      </div>

      <div className="w-[75%]">
        <div className="w-full p-8 shadow-md flex items-center justify-between">
          <h5>Showing 1-9 of 99 results</h5>
          <div className="flex items-center gap-2">
            <Button variant={'outline'}><FaAngleLeft className="text-lg" /></Button>
            <Button variant={'outline'}><FaAngleRight className="text-lg" /></Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {
            productData.map(item => <ProductCard
              key={item.id}
              imgSrc={item.productImg}
              title={item.title}
              currentPrice={item.price}
            />)
          }
        </div>
      </div>
    </section>
  )
}
