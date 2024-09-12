import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    // const response = await db.event.findMany({});
    return new Response("my name jeff", { status: 200});
}