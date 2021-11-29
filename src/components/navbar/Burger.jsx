import { useState } from 'react';
import styled from 'styled-components';

// components
import NavItems from './NavItems';

// Styles
const StyledBurger = styled.div`
  width: 1.9rem;
  height: 1.9rem;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  padding-right: 10px;
  z-index: 20;

  div {
    width: 1.9rem;
    height: 0.2rem;
    background-color: ${({ open }) => (open ? '#ddd' : '#e5e5e5')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <StyledBurger open={!open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavItems open={open} />
    </>
  );
}
