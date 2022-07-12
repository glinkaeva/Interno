import styled from "styled-components";
import {Container} from './layout/common/Container'
import logo from '../images/svg/logo.svg'
import { base } from '../styles/base'

const NavCont = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
`
const Logo = styled.img`
    width: 100%;
    max-width: 177px;
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
`

export default function Nav() {
    return(
        <nav>
            <NavCont>
                <a href="/"><Logo src={logo} alt="logo"/></a>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="#about">About Us</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#blog">Blog</Link>
                    <Link href="#contact">Contact Us</Link>
                </div>
            </NavCont>
        </nav>
    )
}