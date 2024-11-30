"use client"
import React from 'react'

const Header = () => {

    const handleDownload = async () => {
        try {
            const res = await fetch('/api/download', { method: 'POST' });

            if (!res.ok) {
                throw new Error('Failed to download image');
            }

            const data = await res.json();
            const base64Image = data.image;
            const { base64_string } = base64Image;

            const link = document.createElement('a');
            link.href = `data:image/png;base64,${base64_string}`;
            link.download = 'downloaded-image.png';
            link.click();
            link.remove();

        } catch (error) {
            console.log("Error downloading image:", error);
            alert("An error occurred during the download process. Please try again")

        }
    }


    return (
        <>
            <div className='m-6 flex justify-between items-center border-b-2 border-b-slate-300 pb-6 py-4 mx-9'>
                <h1 className='font-bold text-3xl px-3 text-[#303030]'>Reports</h1>
                <button className='px-5 ' onClick={handleDownload}>Download</button>
            </div>
        </>
    )
}

export default Header