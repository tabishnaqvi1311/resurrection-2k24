import { CartItem } from "@/types/CartItem";
import { EventCartContextType } from "@/types/EventCartContext";
import { createContext, ReactNode, useState } from "react";

export const EventCartContext = createContext({} as EventCartContextType);

export const EventCartProvider = ({ children }
    : {children: ReactNode}
) => {

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            return [...prev, item]
        })
    }

    return (
        <EventCartContext.Provider value={{
            addToCart,
            cart
        }}>
            {children}
        </EventCartContext.Provider>
    )
}