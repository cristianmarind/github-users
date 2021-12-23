import React from "react";
import UserFinder from "../components/UserFinder";

export default function UserFinderView() {
    return (
        <div className="container-fluid py-4">
            <div className="row justify-content-center">
                <div className="col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6">
                    <UserFinder />
                </div>
            </div>
        </div>
    )
}