"use client";
import React from "react";
import { useState } from "react";

function Page() {
    const [message, setMessage] = useState('');
    const handleFileUpload = (e) => {
        try {
            const file = e.target.files[0];
            if (!file) {
                throw new Error('No file selected');
            }
            setMessage('File uploaded successfully');
            console.log(file);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h1 className="text-7xl font-semibold font-space text-center animate-pulse">Schedule</h1>
            <div className="mt-10 ml-10 h-screen">
                <label className="font-space font-semibold text-2xl">
                    Having new timetable? Upload here
                </label>
                <div className="mt-7">
                    <input type="file" accept=".pdf" onChange={handleFileUpload}/>
                    {message && <p className="text-green-500 ">{message}</p>} 
                </div>
            </div>
        </div>
    );
}

export default Page;
