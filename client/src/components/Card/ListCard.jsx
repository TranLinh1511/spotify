import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function ListCard({ playList }) {
    const quantityAlbum = 6;
    const albumQuantity = playList.list_album.slice(0, quantityAlbum);
    return (
        <div className="px-2 my-2">
            <div className="flex items-center justify-between">
                <h3 className="text-lg cursor-pointer hover:underline">
                    {playList.playList_name}
                </h3>
                <Link to={`/section/${playList.playList_id}`}>
                    <button className="text-[0.7rem] text-[#989898] hover:underline">
                        Show all
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-2 my-5">
                {albumQuantity?.map((e) => (
                    <Card key={e.album_id} album={e} />
                ))}
            </div>
        </div>
    );
}

export default ListCard;
