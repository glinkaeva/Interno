import styled from "styled-components"
import {Container} from './layout/common/Container'
import logo from '../images/svg/logo.svg'
import { base } from '../styles/base'
import { useState } from "react"

const linkData = [
    {id: 1, href: '#header', text: 'Home'},
    {id: 2, href: '#about', text: 'About Us'},
    {id: 3, href: '#projects', text: 'Projects'},
    {id: 4, href: '#blog', text: 'Blog'},
    {id: 5, href: '#contact', text: 'Contact Us'},
]

const NavCont = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 36px;
    padding-bottom: 36px;

    @media(max-width: 860px) {
        position: fixed;
        transition: 0.6s ease-in-out;
        /* transform: ${({open}) => open ? 'scaleX(1)' : 'scaleX(0)'}; */
        transform: ${({open}) => open ? 'translateX(0px)' : 'translate(1000px)'};

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
        margin-bottom: 10px;
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
    width: 25px;
    height: 20px;
    position: fixed;
    right: 30px;
    top: 30px;
    z-index: 6;

    display: none;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;

    @media (max-width: 860px) {
        display: flex;
    }

    @media(max-width: 768px) {
        right: 20px;
        top: 20px;
    }

    @media(max-width: 540px) {
        right: 15px;
        top: 15px;
    }
`

const BurgerItem = styled.div`
    width: 100%;
    height: 4px;
    background: ${base.colors.headlineColor};
    transition: 0.5s;

    cursor: pointer;

    &:first-child{
        transform: ${({open}) => open ? 'rotate(45deg) translateX(11px)' : 'rotate(0deg)'};
    }

    &:nth-child(2){
        opacity: ${({open}) => open ? '0' : '1'};
    }

    &:last-child{
        transform: ${({open}) => open ? 'rotate(-45deg) translateX(12px)' : 'rotate(0deg)'};
    }
`

export default function Nav() {

    const [open, setOpen] = useState(false)

    return(
        <nav>
            <NavCont open={open}>
                <a href="/"><Logo src={logo} alt="logo"/></a>
                <LinkCont>
                    {
                        linkData.map(({id, href, text}) => 
                            <Link key={id} href={href} onClick={() => setOpen(false)}>{text}</Link>
                        )
                    }
                </LinkCont>
            </NavCont>
            <Burger onClick={() => setOpen(!open)} >
                <BurgerItem open={open}/>
                <BurgerItem open={open}/>
                <BurgerItem open={open}/>
            </Burger>
        </nav>
    )
}