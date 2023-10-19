import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
    return <Wrapper {...delegated}>
        <MainText>{children}</MainText>
        <HoverText>{children}</HoverText>
    </Wrapper>;
}

const Wrapper = styled.a`
    position: relative;
    display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
    overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
    display: block;
    transition: transform 150ms;
    will-change: transform;
    transform: translateY(var(--translate-from));

    ${Wrapper}:hover & {
        transform: translateY(var(--translate-to));
    }
`
const MainText = styled(Text)`
    --translate-from: 0%;
    --translate-to: -100%;
`;
const HoverText = styled(Text)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-weight: bold;
    --translate-from: 100%;
    --translate-to: 0%;
`;

export default NavLink;
