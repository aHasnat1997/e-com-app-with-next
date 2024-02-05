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
import { LuShoppingBasket } from "react-icons/lu";

export default function CartDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <LuShoppingBasket className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Cart</DropdownMenuLabel>


      </DropdownMenuContent>
    </DropdownMenu>
  )
}
