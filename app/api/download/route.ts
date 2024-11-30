import { NextResponse } from "next/server";
import axios from "axios";

export async function POST() {

    try {
        const res = await axios.get(`http://localhost:3000/api/data`)
        const { api_secret } = res.data;
        const apiKey = api_secret
        
        const apiUrl = "https://testd5-img.azurewebsites.net/api/imgdownload";
        const response = await axios.post(apiUrl, { api: apiKey });

        const base64Image = response.data;


        return NextResponse.json({ image: base64Image });

    }
    catch (error) {
        console.error('Error in download API route', error);
        return NextResponse.json({ error: 'An error occurred on the server' }, { status: 500 });
    }

}