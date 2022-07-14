import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    /* border: 1px solid; */

    @media(max-width: 1280px) {
        padding: 0 40px;
    }

    @media(max-width: 960px) {
        padding: 0 60px;
    }

    @media(max-width: 768px) {
        padding: 0 30px;
    }

    @media(max-width: 540px) {
        padding: 0 20px;
    }
`