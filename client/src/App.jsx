import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Playlist from "./components/Playlist/Playlist";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Artist from "./components/Artist/Artist";
import SingDetail from "./components/Sing/SingDetail";
import Seemore from "./components/SeeMore/Seemore";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import User from "./Admin/User";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} index />
                    <Route path="artist/:artistId" element={<Artist />} />
                    <Route path="playlist/:albumId" element={<Playlist />} />
                    <Route
                        path="sing-detail/:trackId"
                        element={<SingDetail />}
                    />
                    <Route path="search" element={<Category />} />
                    <Route path="section/:playListId" element={<Seemore />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="users" element={<User />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
