import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CartAtrist({ artist }) {
    return (
        <Link to={`/artist/${artist.artist_id}`}>
            <div className="relative card">
                <div className="mx-[0.4rem] bg-[rgb(22,22,22)] p-[0.8rem] rounded-[0.4rem] hover:bg-[rgb(40,40,40)] cursor-pointer ">
                    <div className=" h-[125px] w-[125px]  rounded-[50%]">
                        <img
                            src={artist.artist_image}
                            alt=""
                            className="w-[100%] h-[100%] object-cover rounded-[50%]"
                        />
                    </div>
                    <h3 className="mt-3">{artist.artist_name}</h3>
                    <p className="mt-2 text-xs font-semibold text-[#989898] block-ellipsis tracking-tighter">
                        Artist
                    </p>
                    <button className="text-[2.5rem] text-[rgb(30,215,96)] absolute top-[46%] right-5 play_btn z-50">
                        <BsFillPlayCircleFill className="duration-75 cursor-pointer hover:scale-110" />
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default CartAtrist;
