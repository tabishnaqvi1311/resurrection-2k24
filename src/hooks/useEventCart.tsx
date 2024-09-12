import { EventCartContext } from "@/context/EventCartContext";
import { useContext } from "react"

export const useEventCart = () => {
    return useContext(EventCartContext);
}