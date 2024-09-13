import { CartItem } from "@/types/CartItem";
import { NextRequest } from "next/server";
import { storeData } from "@/utils/utils";

export const POST = async (req: NextRequest) => {
    const { collegeName, cart } = await req.json();

    const cartItems: CartItem[] = JSON.parse(cart);

    try{
        await storeData({ collegeName, cart: cartItems });
    } catch(e){
        console.error(e);
        return new Response(`error while storing data, contact devs`, {status: 500});
    }
    
    return new Response("Form Submitted!", {status: 200});
}