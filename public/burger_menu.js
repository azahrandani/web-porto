import styled from 'styled-components'
import Link from 'next/link'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(200%)'};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 79vw;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-family: Baloo Da;
    font-size: 2.5em;
    color: #FF5F53;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #FFDBDB;
    }
  }

  .first_menu {
    margin-top: 6vh;
  }
`

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/">
        <a className='first_menu'>Home</a>
      </Link>
      <Link href="/works">
        <a>Works</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
    </StyledMenu>
  )
}

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 92vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 3em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 3em;
    height: 0.35em;
    background: #FF5F53;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => {console.log('haha'); console.log(!open); setOpen(!open)}}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };