import React from "react";
import "./card.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card({ album }) {
    return (
        <div className="relative card">
            <div className="mx-[0.4rem] bg-[rgb(22,22,22)] p-[0.75rem] rounded-[0.4rem] hover:bg-[rgb(40,40,40)] cursor-pointer ">
                <Link to={`/playlist/${album.album_id}`}>
                    <div className=" h-[125px] w-[134px] object-cover ">
                        <img
                            src={album.album_image}
                            alt=""
                            className="w-[100%] h-[100%] rounded-[0.3rem]"
                        />
                    </div>
                    <h3 className="mt-3 truncate">{album.album_name}</h3>
                    <p className="mt-2 text-xs font-semibold text-[#989898] block-ellipsis tracking-tighter h-10">
                        {album.decs}
                    </p>
                </Link>
                <button className="text-[2.2rem] text-[rgb(30,215,96)] absolute top-[41%] right-7 play_btn z-50  ">
                    <BsFillPlayCircleFill className="duration-75 cursor-pointer hover:scale-110" />
                </button>
            </div>
        </div>
    );
}

export default Card;
