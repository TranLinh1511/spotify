import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { LuRepeat2 } from "react-icons/lu";
import { LiaRandomSolid } from "react-icons/lia";
import "./common.css";
import { useSelector } from "react-redux";

function SbMusic() {
    const [value, setValue] = useState(0);
    const album = useSelector((state) => state.getMusic);
    const [index, setIndex] = useState(1);
    useEffect(() => {
        setIndex(album.index);
    }, [album.index]);
    const fixed = {
        artist: "MCK",
        artist_id: "1",
        path: "https://a320-zmp3.zmdcdn.me/df92f016f35fe8ef1ee2499e8e9b45b9?authen=exp=1694833998~acl=/df92f016f35fe8ef1ee2499e8e9b45b9/*~hmac=0cd3838e82fe0d6ae2ab4f82974b0d98",
        track_id: "3",
        track_image:
            "https://i.pinimg.com/236x/71/9b/14/719b14041ab18b518211af8fcd1d90eb.jpg",
        track_name: "Thủ đô Cyper",
    };
    let isTrack =
        (album.album.list_music && album.album.list_music[index]) || fixed;
    return (
        <div className="fixed bottom-0 left-0 m-1 text-white z-[99] w-full bg-black h-[4rem]">
            <div className="relative flex items-center justify-between w-full px-4 py-2">
                <div className="flex items-center translate-y-2 ">
                    <div className="w-10 h-10 rounded-md">
                        <img
                            src={isTrack && isTrack.track_image}
                            alt=""
                            className="object-cover w-full h-full rounded-md"
                        />
                    </div>

                    <div className="mx-4 ">
                        <h4 className="text-xs font-semibold">
                            {isTrack && isTrack.track_name}
                        </h4>
                        <p className="text-[0.6rem] pt-1 text-[#989898]">
                            {isTrack && isTrack.artist}
                        </p>
                    </div>
                    <div className="mx-2">
                        <AiOutlineHeart className="text-base" />
                    </div>
                    <audio src={isTrack && isTrack.path}></audio>
                    <div className="justify-center w-[40rem] text-[#989898] text-xl absolute left-[23rem]">
                        <div className="flex items-center justify-center translate-y-1">
                            <LiaRandomSolid className="mx-2 hover:text-white" />
                            <button
                                onClick={() => setIndex(index - 1)}
                                disabled={index === 0}
                            >
                                <GiPreviousButton className="mx-2 hover:text-white" />
                            </button>
                            <BsFillPlayCircleFill className="mx-3 text-2xl text-white hover:text-white" />

                            <button
                                onClick={() => setIndex(index + 1)}
                                disabled={
                                    index === album.album.list_music?.length - 1
                                }
                            >
                                <GiNextButton className="mx-2 hover:text-white" />
                            </button>
                            <LuRepeat2 className="mx-2 hover:text-white" />
                        </div>

                        <div className="justify-center text-center -translate-y-1 rangehover">
                            <input
                                type="range"
                                className="range"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SbMusic;
