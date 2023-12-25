import React, { useEffect } from "react";
import Card from "../Card/Card";
import SbLogin from "../Sidebar/SbLogin";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiPlaylist } from "../../redux/musicsSlice";
import { useParams } from "react-router-dom";

function Seemore() {
    const playLists = useSelector((state) => state.listMusic.listPlaylist);
    const { playListId } = useParams();
    const isPlaylist = playLists.find((e) => e.playList_id === playListId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiPlaylist());
    }, []);
    return (
        <div className="mt-20">
            <SbLogin opacity={"bg-opacity-70"} />
            <div className="px-2 my-2">
                <div className="flex">
                    <h3 className="text-lg cursor-pointer hover:underline">
                        {isPlaylist.playList_name}
                    </h3>
                </div>
                <div className="grid grid-cols-6 gap-2 my-5">
                    {isPlaylist.list_album?.map((e) => (
                        <Card key={e.album_id} album={e} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Seemore;
