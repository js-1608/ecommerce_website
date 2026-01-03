import React from "react";
import Header from "../Common/Header";

export default function UserLayout({ children }) {
    return (    
        <div className="min-h-screen flex flex-col">
            <Header/>

            <main className="flex-grow container mx-auto p-4">
                {children}

            </main>

            <footer className="bg-gray-200 text-center p-4">
                <p className="text-gray-600">&copy; 2024 E-Commerce Platform. All rights reserved.</p>
            </footer>

        </div>

    );
}
