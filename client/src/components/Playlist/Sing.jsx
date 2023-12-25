import React from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import "./playlist.css";
import { useDispatch } from "react-redux";
import { getAlbum, getIndex } from "../../redux/getMusicSlice";

function Sing({ track, index, albumName, isAlbum }) {
    const dispatch = useDispatch();

    const handleGetMusic = () => {
        dispatch(getAlbum(isAlbum));
        dispatch(getIndex(index));
    };
    return (
        <tr className=" hover:bg-white hover:bg-opacity-10 visibly">
            <td className="w-[10%] px-4 py-[0.4rem] text-left border-t-0 border-l-0 border-r-0 whitespace-nowrap font-bold text-sm">
                <BsFillPlayFill
                    className="text-base text-white translate-x-[-0.25rem] play"
                    onClick={handleGetMusic}
                />
                <span className="hide">{index + 1}</span>
            </td>
            <td className="py-[0.4rem] w-[40%] text-xs text-left border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                <div className="flex items-center ">
                    <div className="w-8 h-8">
                        <img
                            src={track.track_image}
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="ml-2 ">
                        <Link to={`/sing-detail/${track.track_id}`}>
                            <span className="w-[280px] pb-2  text-white truncate hover:underline cursor-pointer ">
                                {track.track_name}
                            </span>
                        </Link>
                        <div className="py-[2px]"></div>
                        <Link to={`/artist/${track.artist_id}`}>
                            <span className="inline-block text-[#989898] hover:underline cursor-pointer">
                                {track.artist}
                            </span>
                        </Link>
                    </div>
                </div>
            </td>
            <td className="py-[0.4rem] text-xs text-left border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap ">
                <span className="hover:underline">{albumName}</span>
            </td>
            <td className="py-[0.4rem] text-xs text-left border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                3 weeks ago
            </td>
            <td className="py-[0.4rem] text-xs border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                3:51
            </td>
        </tr>
    );
}

export default Sing;
