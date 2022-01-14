import React, { useState } from "react";
import { Routes } from "react-router-dom";

import { Navbar, Feed, PinDetail, Search, CreatePin } from "../components";

const Pins = ({ user }) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="px-2 md:px-5">
            <div className="bg-gray-50">
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="h-full">
                <Routes path="/" element={<Feed />} />
                <Routes path="/categpry/:categoryId" element={<Feed />} />
                <Routes
                    path="/pin-detail/:pinId"
                    element={<PinDetail user={user} />}
                />
                <Routes
                    path="/create-pin"
                    element={<CreatePin user={user} />}
                />
                <Routes
                    path="/search"
                    element={
                        <Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    }
                />
            </div>
        </div>
    );
};

export default Pins;
