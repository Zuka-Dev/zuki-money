import React from "react";

import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarLinks,
    SideBarMenu,
    SideBtnWrap,
    SideBarWrapper,
    SideBtnRoute,
} from "./SideBarElements";
const SideBar = ({ isOpen, toggle }) => {
    return (
        <div>
            <SideBarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SideBarWrapper>
                    <SideBarMenu>
                        <SideBarLinks to="about" onClick={toggle}>
                            About
                        </SideBarLinks>
                        <SideBarLinks to="discover" onClick={toggle}>
                            Discover
                        </SideBarLinks>
                        <SideBarLinks to="services" onClick={toggle}>
                            Services
                        </SideBarLinks>
                        <SideBarLinks to="signup" onClick={toggle}>
                            Sign Up{" "}
                        </SideBarLinks>
                    </SideBarMenu>
                    <SideBtnWrap>
                        <SideBtnRoute to="/signin">Sign In</SideBtnRoute>
                    </SideBtnWrap>
                </SideBarWrapper>
            </SideBarContainer>
        </div>
    );
};

export default SideBar;
