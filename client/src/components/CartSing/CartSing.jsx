import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CartSing() {
    return (
        <div className="relative card">
            <div className="mx-[0.4rem] bg-[rgb(22,22,22)] p-[0.8rem] rounded-[0.4rem] hover:bg-[rgb(40,40,40)] cursor-pointer ">
                <Link to={"/sing"}>
                    <div className=" h-[130px] w-[130px] object-cover ">
                        <img
                            src="https://i.scdn.co/image/ab67616d00001e029cabbe77a322fcb0f48b4fc6"
                            alt=""
                            className="w-[100%] h-[100%] rounded-[0.3rem]"
                        />
                    </div>
                    <h3 className="mt-3 text-white text-bold">
                        Today's Top Hits
                    </h3>
                    <p className="mt-2 text-[0.67rem] font-semibold text-[#989898] block-ellipsis">
                        <span> 2023</span> &#8226; <span>Album</span>
                    </p>
                    <button className="text-[2rem] text-[rgb(30,215,96)] absolute top-[43%] right-7 play_btn">
                        <BsFillPlayCircleFill className="duration-75 cursor-pointer hover:scale-110" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CartSing;
