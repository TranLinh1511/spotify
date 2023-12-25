import React, { useEffect } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import ListUser from "./ListUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiusers, loginUserApi } from "../redux/userSlice";

function User() {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.listUser.listUsers);
    useEffect(() => {
        dispatch(fetchApiusers());
    }, [listUsers]);
    const showUsers = listUsers.filter((e) => e.role !== "admin");
    const handleBlockUser = (user) => {
        const blockUser = { ...user, status: "block" };
        dispatch(loginUserApi(blockUser));
    };
    const handleUnBlockUser = (user) => {
        const blockUser = { ...user, status: "" };
        dispatch(loginUserApi(blockUser));
    };
    return (
        <div className="bg-[rgb(250,250,250)] h-full ">
            <div className="pt-20 mx-4">
                <h3 className="mx-2 text-[#999]">
                    Dashbroad <span className="mx-2">/</span> Users
                </h3>
                <div className="bg-white rounded-lg shadow-[0_1px_1px_rgb(0,0,0,0.1)] mx-6 my-3">
                    <div className="p-5 ">
                        <div className="flex items-center text-[#999]">
                            <AiOutlineUsergroupAdd className="text-base" />
                            <span className="mx-2">Users</span>
                        </div>
                        <div className="h-100 scroll">
                            <table className="w-full mt-10 text-sm text-left text-gray-500 dark:text-gray-400 ">
                                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="rounded-t-lg">
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center"
                                        >
                                            #
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center"
                                        >
                                            User
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center w-[25%]"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {showUsers.map((e, i) => (
                                        <ListUser
                                            key={e.id}
                                            user={e}
                                            index={i}
                                            handleBlockUser={handleBlockUser}
                                            handleUnBlockUser={
                                                handleUnBlockUser
                                            }
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
