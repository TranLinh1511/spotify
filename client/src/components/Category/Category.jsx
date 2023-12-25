import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiTrack } from "../../redux/musicsSlice";
import Track from "./Track";
import SbLogin from "../Sidebar/SbLogin";
function Category() {
    const dispatch = useDispatch();
    const listTrack = useSelector((state) => state.listMusic.listMusics);
    useEffect(() => {
        dispatch(fetchApiTrack());
    }, []);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState(null);
    const searchFilter = listTrack?.filter(
        (e) =>
            e?.track_name.toLowerCase().indexOf(searchValue?.toLowerCase()) !==
            -1
    );
    return (
        <div
            className="pt-1 rounded-md"
            style={{
                backgroundImage: `linear-gradient( rgb(90,92,97), rgb(18,18,18), rgb(18,18,18))`,
            }}
        >
            <SbLogin opacity={"bg-opacity-30"} />
            <div className="mx-4 mt-[3.8rem]">
                <h3 className="my-2 text-lg">Search</h3>
                <div className="relative mb-3">
                    <input
                        placeholder="Enter the song you want to find"
                        className="w-full px-3 py-2 text-black rounded-md"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className="h-70 scroll">
                    {searchValue === null ? (
                        <div className="w-full my-10">
                            {listTrack.map((e, i) => (
                                <Track key={e.track_id} track={e} index={i} />
                            ))}
                        </div>
                    ) : searchFilter.length === 0 ? (
                        <div className="text-center -translate-x-3">
                            <p className="my-5">
                                No results found for{" "}
                                <span>"{searchValue}"</span>
                            </p>
                            <p className="font-normal">
                                Please make sure your words are spelled
                                correctly, or use fewer or different keywords.
                            </p>
                        </div>
                    ) : (
                        <div className="w-full my-10">
                            {searchFilter.map((e, i) => (
                                <Track key={e.track_id} track={e} index={i} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Category;
