import React from "react";
import { Outlet } from "react-router-dom";
import TypingAnimation from "../components/TypingAnimation";


function MyName() {
    return(
        <div>
            <TypingAnimation 
            text={["Vlad Alexeenko"]}
            period={2000}
            />
        <Outlet/>
        </div>
    )
}

export default MyName;