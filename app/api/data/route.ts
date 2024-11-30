import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const path = "http://localhost:3000/data.json"
        const res = await axios.get(path);
        return NextResponse.json(res.data)

    } catch (error) {
        console.log("Error fetching data", error);
        return new Response("Error fetching data", { status: 500 });
    }
}