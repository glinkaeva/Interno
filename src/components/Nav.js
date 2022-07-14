import styled from "styled-components"
import {Container} from './layout/common/Container'
import logo from '../images/svg/logo.svg'
import { base } from '../styles/base'
import { useRef, useState } from "react"


const NavCont = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 36px;
    padding-bottom: 36px;

    @media(max-width: 860px) {
        position: absolute;
        transition: 0.5s;
        transform: ${({open}) => open ? 'scaleY(1)' : 'scaleY(0)'};

        flex-direction: column;
        align-items: flex-start;
        background: ${base.colors.lightbeige};
        z-index: 5;
    }
`

const LinkCont = styled.div`
    @media(max-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Logo = styled.img`
    width: 100%;
    max-width: 177px;

    @media(max-width: 860px) {
        width: 80%;
    }
`
const Link = styled.a`
    font-family: ${base.fontFamily.text};
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.4px;
    text-transform: capitalize;
    margin-left: 40px;
    transition: .5s;

    &:hover {
        color: ${base.colors.beige};
    }

    @media(max-width: 860px) {
        display: block;
        margin: 20px 0;
        
    }

    @media(max-width: 480px) {
        text-align: center;
    }
`

const Burger = styled.div`
    width: 30px;
    height: 25px;
    position: absolute;
    right: 40px;
    top: 40px;
    z-index: 6;

    display: none;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 860px) {
        display: flex;
    }

    @media(max-width: 768px) {
        right: 30px;
        top: 30px;
    }

    @media(max-width: 540px) {
        right: 20px;
        top: 20px;
    }
`

const BurgerItem = styled.div`
    width: 100%;
    height: 5px;
    background: ${base.colors.headlineColor};
`

export default function Nav() {

    const [open, setOpen] = useState(false)
    const burgerToggler = useRef(null)

    return(
        <nav>
            <NavCont ref={burgerToggler} open={open}>
                <a href="/"><Logo src={logo} alt="logo"/></a>
                <LinkCont>
                    <Link href="/">Home</Link>
                    <Link href="#about">About Us</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#blog">Blog</Link>
                    <Link href="#contact">Contact Us</Link>
                </LinkCont>
            </NavCont>
            <Burger onClick={() => setOpen(!open)} >
                <BurgerItem />
                <BurgerItem />
                <BurgerItem />
            </Burger>
        </nav>
    )
}