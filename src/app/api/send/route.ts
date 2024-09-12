import { db } from "@/utils/db";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    const response = await db.event.findMany({});
    return new Response(JSON.stringify(response), { status: 200});
}