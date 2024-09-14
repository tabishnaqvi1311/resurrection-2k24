import { CartItem } from "./CartItem";

export type EventCartContextType = {
    addToCart: (item: CartItem) => void;
    setCart: (cart: CartItem[]) => void;
    cart: CartItem[]
}