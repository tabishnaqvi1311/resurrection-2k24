import { NextRequest } from "next/server";
import { google } from "googleapis";

export const POST = async (req: NextRequest) => {
    const {
        name,
        email,
        collegeName,
        music,
        dance,
        theatre,
        fashion,
        fine_arts,
        culinary

    } = await req.json();

    if (!process.env.GOOGLE_API_CREDENTIALS) {
        throw new Error('.env not found');
    }
    
    const auth = await google.auth.getClient({
        credentials: JSON.parse(process.env.GOOGLE_API_CREDENTIALS),
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    console.log('authenticated');
    
    const sheets = google.sheets({ version: "v4", auth });
    
    let values = [[
        name,
        email,
        collegeName,
        music,
        dance,
        theatre,
        fashion,
        fine_arts,
        culinary
    ]];

    const resource = {
        values
    };

    console.log(resource);

    try {
        const response = sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: "Sheet1",
            valueInputOption: "RAW",
            requestBody: resource
        });

        console.log(response)

        return new Response(JSON.stringify("Updated Cells"), { status: 201 });

    } catch (error) {
        console.log(error);
        return new Response(`Failed Write`, { status: 500 });
    }
}