import React from "react";
import { Outlet } from "react-router-dom";
import TypingAnimationMobile from "./TypingAnimationMobile";


function MyNameMobile() {
    return(
        <div>
            <TypingAnimationMobile
            text={["Vlad Alexeenko"]}
            period={2000}
            />
        <Outlet/>
        </div>
    )
}

export default MyNameMobile;