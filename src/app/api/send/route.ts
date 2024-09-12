import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    return new Response(JSON.stringify("Updated Cells"), { status: 200 });
}