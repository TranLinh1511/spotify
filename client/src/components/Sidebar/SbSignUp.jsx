import React from "react";
import "./common.css";
import { Link } from "react-router-dom";
function SbSignUp() {
    return (
        <div className="fixed bottom-0 left-0 m-1 signup_bar z-[99]">
            <div className="flex items-center justify-between px-4 py-2">
                <div className="leading-5">
                    <p className="text-[0.67rem]"> PREVIEW OF SPOTIFY </p>
                    <p className="font-semibold">
                        Sign up to get unlimited songs and podcasts with
                        occasional ads. No credit card needed.
                    </p>
                </div>
                <Link to={"signup"}>
                    <button className="px-6 py-3 font-bold text-black bg-white rounded-full scale">
                        Sign up free
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SbSignUp;
