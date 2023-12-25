import React, { useEffect } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectActual, MdArtTrack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiusers } from "../redux/userSlice";
import {
    fetchApiAlbum,
    fetchApiPlaylist,
    fetchApiTrack,
} from "../redux/musicsSlice";
function Dashboard() {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.listUser.listUsers);
    const listTrack = useSelector((state) => state.listMusic.listMusics);
    const listPlaylist = useSelector((state) => state.listMusic.listPlaylist);
    const listAlbum = useSelector((state) => state.listMusic.listAlbum);

    useEffect(() => {
        dispatch(fetchApiAlbum());
    }, []);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);
    useEffect(() => {
        dispatch(fetchApiTrack());
    }, []);
    useEffect(() => {
        dispatch(fetchApiPlaylist());
    }, []);
    return (
        <div className="bg-[rgb(250,250,250)] h-full">
            <div className="pt-20 mx-4">
                <h3 className="mx-2">Dashbroad</h3>
                <div className="grid grid-cols-4 gap-6 mx-6 my-10">
                    <div className="bg-white rounded-lg shadow-[0_1px_1px_rgb(0,0,0,0.1)] py-5">
                        <div className="flex items-center p-4 ">
                            <AiOutlineUsergroupAdd className="text-4xl text-[rgb(154,163,249)]" />
                            <div className="flex flex-col mx-4">
                                <p className="text-[#999] mb-1">User</p>
                                <p className="text-xl">{listUsers.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-[0_1px_1px_rgb(0,0,0,0.1)] py-5">
                        <div className="flex items-center p-4 ">
                            <MdArtTrack className="text-4xl text-[rgb(154,163,249)]" />
                            <div className="flex flex-col mx-4">
                                <p className="text-[#999] mb-1">Tracks</p>
                                <p className="text-xl">{listTrack.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-[0_1px_1px_rgb(0,0,0,0.1)] py-5">
                        <div className="flex items-center p-4 ">
                            <BiSolidPlaylist className="text-4xl text-[rgb(154,163,249)]" />
                            <div className="flex flex-col mx-4">
                                <p className="text-[#999] mb-1">Playlist</p>
                                <p className="text-xl">{listPlaylist.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-[0_1px_1px_rgb(0,0,0,0.1)] py-5">
                        <div className="flex items-center p-4 ">
                            <MdOutlinePhotoSizeSelectActual className="text-4xl text-[rgb(154,163,249)]" />
                            <div className="flex flex-col mx-4">
                                <p className="text-[#999] mb-1">Album</p>
                                <p className="text-xl">{listAlbum.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
