"use client";
import React from "react";
import { useState } from "react";

function Page() {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log(file);
        }
    };

    return (
        <div>
            <h1 className="text-7xl font-semibold font-space text-center animate-pulse">Schedule</h1>
            <input type="file" accept=".pdf" onChange={handleFileUpload} />
        </div>
    );
}

export default Page;
