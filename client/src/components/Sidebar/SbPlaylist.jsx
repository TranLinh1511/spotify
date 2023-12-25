import React from "react";
import { Link } from "react-router-dom";

function SbPlaylist({ album }) {
    return (
        <Link to={`/playlist/${album.album_id}`}>
            <div className="px-1 mx-1 py-2 rounded-md hover:bg-white hover:bg-opacity-[0.05]">
                <div className="flex items-center mx-1">
                    <div className="w-10 h-10 rounded-md">
                        <img
                            src={album.album_image}
                            alt=""
                            className="w-full h-full rounded-md"
                        />
                    </div>
                    <div className="w-[70%] ml-3">
                        <h3 className="mb-1 text-xs font-semibold truncate">
                            {album.album_name}
                        </h3>
                        <p className="truncate text-[#999] text-[0.67rem] font-semibold">
                            {album.decs}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SbPlaylist;
