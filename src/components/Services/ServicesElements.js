import styled from "styled-components";

export const ServicesContainer = styled.div`
    background: #010606;
    height: auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center @media screen and (max-width:768px) {
        height: auto;
    }
    @media screen and (max-width: 480px) {
        height: auto;
    }
`;
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        background: #01bf71;
        color: black;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 180px;
    margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
export const ServicesH2 = styled.h1`
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 600;
`;
export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
