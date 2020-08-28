import styled, { css } from "styled-components";

import Logo from "../../../assets/images/logo-won.svg";

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.main.colors.won.blue};
    padding-left: 2rem;
    height: ${theme.main.sizes.leftMenu.height};

    .projectName {
      display: block;
      height: ${theme.main.sizes.leftMenu.height};

      background-image: url(${Logo});
      background-repeat: no-repeat;
      background-position: left center;
      background-size: auto 3.5rem;
    }
  `}
`;

export default Wrapper;
