import { CartItem } from "./CartItem";

export type EventCartContextType = {
    addToCart: (item: CartItem) => void;
    cart: CartItem[]
}