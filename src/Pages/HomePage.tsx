import React from "react";
import "./CSS/HomePage.css";
import NavBar from "../Components/NavBar";
import ContactForm from "../Components/ContactForm";

export default function HomePage() {
    return (
        <div className="">
            <NavBar />
            <div className="text-white">
                <h1 className="font-kenyanRg tracking-wide">Home Page</h1>
            </div>
            <ContactForm />
        </div>
    );


}

