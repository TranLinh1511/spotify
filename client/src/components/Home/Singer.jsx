import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Singer({ artist, setBackgroundAll, setDefaultBg, defaultBg }) {
    return (
        <div
            className="h-[4.2rem] bg-white rounded-[0.17rem] bg-opacity-10 relative hover:bg-opacity-20 card cursor-pointer"
            onMouseOver={() => setBackgroundAll(artist.background)}
            onMouseOut={() => setBackgroundAll(defaultBg)}
            onClick={() => setDefaultBg(artist.background)}
        >
            <div className="flex items-center">
                <Link to={`/artist/${artist.artist_id}`}>
                    <div className="w-[4.2rem] h-[4.2rem]  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                        <img
                            src={artist.artist_image}
                            alt=""
                            className="object-cover w-full h-full rounded-l-[0.17rem] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                        />
                    </div>
                </Link>

                <div>
                    <Link to={`/artist/${artist.artist_id}`}>
                        <p className="ml-4 text-sm font-bold hover:underline ">
                            {artist.artist_name}
                        </p>
                    </Link>
                </div>
            </div>
            <button className="text-[2.5rem] text-[rgb(30,215,96)] absolute top-[50%] translate-y-[-50%] right-7 play_btn z-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                <BsFillPlayCircleFill className="duration-75 cursor-pointer hover:scale-110" />
            </button>
        </div>
    );
}

export default Singer;
