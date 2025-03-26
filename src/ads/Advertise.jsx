import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { recordUserSelect } from "../common.js";

const Advertise = ({ avenue, location }) => {
    const [ isSelected, setIsSelected ] = useState(false);

    const handleAdvertiseClick = () => {
        if (!isSelected) {
            if (avenue.type.name === "AdSense") {
                sendUserSelect(0, location);
            } else if (avenue.type.name === "Dable") {
                sendUserSelect(1, location);
            } else {
                sendUserSelect(2, location);
            }
            setIsSelected(true);
        }
    }

    const sendUserSelect = (selected, location) => {
        recordUserSelect(selected, location);
    }

    return (
        <AdvertiseWrapper id="advertisement" onClick={handleAdvertiseClick} >
            <SelectedMark style={isSelected ? {display: 'block'} : {display: 'none'}}> <FontAwesomeIcon icon={faCheckCircle} /> </SelectedMark>
            <div style={{transition: "filter 0.3s ease", filter: isSelected ? "brightness(50%)" : "brightness(100%)"}}>
                {avenue}
            </div>
        </AdvertiseWrapper>
    );
};

export default Advertise;

const AdvertiseWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 3rem 0;

    &:hover {
        cursor: pointer;
    }
`;

const SelectedMark = styled.div`
    position: absolute;
    color: lightgreen;
    z-index: 10;
    font-size: 5rem;
    brightness: 100%;
`;