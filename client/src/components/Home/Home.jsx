import { useDispatch, useSelector } from "react-redux";
import ListCard from "../Card/ListCard";
import SbLogin from "../Sidebar/SbLogin";
import Singer from "./Singer";
import { useEffect, useState } from "react";
import { fetchApiArtist, fetchApiPlaylist } from "../../redux/musicsSlice";
import CartAtrist from "./CartAtrist";
import { fetchApiusers } from "../../redux/userSlice";

function Home() {
    const dispatch = useDispatch();
    const quantitySings = 5;
    const quantityArtist = 6;
    const listPlaylist = useSelector((state) => state.listMusic.listPlaylist);
    const [defaultBg, setDefaultBg] = useState("rgb(56, 71, 71)");
    const [backgroundAll, setBackgroundAll] = useState(defaultBg);
    const listUsers = useSelector((state) => state.listUser.listUsers);
    const userLogin = listUsers.find((e) => e.status === "active");

    const listArtist = useSelector((state) => state.listMusic.artist);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, []);
    useEffect(() => {
        dispatch(fetchApiPlaylist());
    }, []);
    useEffect(() => {
        dispatch(fetchApiArtist());
    }, []);
    const artistSings = listArtist.slice(0, quantitySings);
    const artistQuantity = listArtist.slice(0, quantityArtist);
    return (
        <div
            className="pt-5 "
            style={{
                backgroundImage: `linear-gradient( ${backgroundAll}, rgb(18,18,18), rgb(18,18,18))`,
            }}
        >
            <SbLogin opacity={"bg-opacity-0"} />
            {userLogin && (
                <div className="mx-5 mt-6 ">
                    <h3 className="py-5 text-[1.7rem] font-bold tracking-tighter">
                        Good afternoon{" "}
                        <span className="mx-3 text-3xl uppercase">
                            {userLogin.name}
                        </span>
                    </h3>
                    <div className="grid grid-cols-3 gap-5 ">
                        {artistSings &&
                            artistSings.map((e) => (
                                <Singer
                                    key={e.artist_id}
                                    artist={e}
                                    setBackgroundAll={setBackgroundAll}
                                    setDefaultBg={setDefaultBg}
                                    defaultBg={defaultBg}
                                />
                            ))}
                    </div>
                </div>
            )}

            <div className="px-3 mt-[3.9rem]">
                {listPlaylist.map((e, i) => (
                    <ListCard key={e.playList_id} playList={e} />
                ))}
            </div>
            <div className="px-5 mt-[3.9rem] ">
                <div className="flex items-center justify-between my-5">
                    <h3 className="text-lg cursor-pointer hover:underline">
                        Popular artist
                    </h3>
                </div>
                <div className="grid grid-cols-6 gap-2">
                    {artistQuantity?.map((e, i) => (
                        <CartAtrist key={e.artist_id} artist={e} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
