import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { LuShoppingBasket } from "react-icons/lu";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

export default function CartDropdownMenu() {
  type TCartData = {
    img: string,
    productName: string,
    quantity: number
  }
  const cartData: TCartData[] = [
    {
      img: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-5.webp',
      productName: 'White Eggplant',
      quantity: 3
    },
    {
      img: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-8.webp',
      productName: 'Fresh Bananas',
      quantity: 1
    },
    {
      img: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-10.webp',
      productName: 'Orange Fruit',
      quantity: 3
    },
    {
      img: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-7.webp',
      productName: 'Hot Patties',
      quantity: 3
    },
    {
      img: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-6.webp',
      productName: 'Fresh Mushroom',
      quantity: 2
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <LuShoppingBasket className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[30rem]">
        <DropdownMenuLabel className="text-xl">My Cart</DropdownMenuLabel>

        <ScrollArea className="h-[20rem]">
          {
            cartData.map((item, i) => <div
              key={i}
              className="p-4 hover:bg-gray-100 flex items-center gap-4"
            >
              <X />
              <Image src={item.img} alt="product image" width={100} height={100} className="size-12" />
              <div className="w-full flex items-center justify-between">
                <h4>{item.productName}</h4>
                <div className="flex items-center gap-2 border-2 rounded-lg">
                  <Button className="p-2"><Plus /></Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button className="p-2"><Minus /></Button>
                </div>
              </div>
            </div>)
          }
        </ScrollArea>

        <div className="w-full p-4 flex items-center justify-between text-xl">
          <p>Total</p>
          <p>$ 38.67</p>
        </div>

        <DropdownMenuItem>
          <Button variant={'secondary'} className="w-full">
            Checkout Now
          </Button>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
