import React from "react";
import { Link } from "react-router-dom";
import CartSing from "./CartSing";
function ListCartSing() {
    return (
        <div className="px-2 my-2">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white cursor-pointer hover:underline">
                    Spotify Playlists
                </h3>
                <button className="text-[0.7rem] text-[#989898] hover:underline">
                    Show all
                </button>
            </div>
            <div className="grid grid-cols-6 my-5">
                <CartSing />
                <CartSing />
                <CartSing />
                <CartSing />
                <CartSing />
                <CartSing />
            </div>
        </div>
    );
}

export default ListCartSing;
