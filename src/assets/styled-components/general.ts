import styled from 'styled-components';
import bgImage from '../../assets/images/background.png';

export const ImageContainer = styled.div`
    background: url(${bgImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh
`;

export const Layout = styled.div`
    background-color: rgba(0,0,0,.3);
    height: 100%;
    width: 100%
`;