import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const { collegeName, cart } = await req.json();

    console.log(collegeName);
    console.log(cart);
    
    return new Response("Form Submitted!", {status: 200});

}