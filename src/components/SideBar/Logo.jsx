import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

// Create a styled component
const StyledLogo = styled.div`
	margin: 10px;
`;

const Logo = () => {
	return (
		<StyledLogo>
			<FontAwesomeIcon icon={faTwitter} size="3x" />
		</StyledLogo>
	);
};

/*const Logo = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faTwitter} size="3x" />
		</div>
	);
};*/

export default Logo;
