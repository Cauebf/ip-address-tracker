import styled from "styled-components";
import { useState, useEffect } from "react";

const Stats = ({ data, error }) => {
    const { ip, city, country, postalCode, timezone, isp } = data;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const isDataLoaded = Object.keys(data).every(key => data[key] !== '');
        setIsLoading(!isDataLoaded);
    }, [data]);

    const statsData = [
        { label: "IP ADDRESS", value: ip },
        { label: "LOCATION", value: `${city}, ${country} ${postalCode || ''}` },
        { label: "TIMEZONE", value: `UTC ${timezone}` },
        { label: "ISP", value: isp },
    ];

    return (
        <StatsContainer>
            { 
                error ? <Error>{error}</Error> : 
                    statsData.map((stat, index) => (
                        <ListItem key={index}>
                            <Label>{stat.label}</Label>
                            <Value>{isLoading ? '' : stat.value}</Value>
                        </ListItem>
                    ))
            }
        </StatsContainer>
    );
}

const StatsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ffff;
    width: 80%;
    padding: 40px 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: 1;
    
    @media (max-width: 1000px) {
        flex-wrap: wrap;
        text-align: center;
        padding: 20px 10px;
    }
`;

const Error = styled.p`
    font-size: 25px;
    font-weight: 500;
    color: hsl(0, 0%, 17%);
    padding: 33.5px;

    @media (max-width: 1000px) {
        padding: 50px 20px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`

const ListItem = styled.li`
    width: 20%;
    height: 100px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        height: 50px;
        width: 100%; 
        margin: 10px 0;
    }
`;

const Label = styled.span`
    font-size: 15px;
    font-weight: 700;
    color: hsl(0, 0%, 59%);
    letter-spacing: 1px;
    margin-bottom: 20px;
    
    @media (max-width: 1000px) {
        font-size: 13px;
        margin-bottom: 13px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const Value = styled.p`
    font-size: 25px;
    font-weight: 500;
    color: hsl(0, 0%, 17%);
    word-wrap: break-word; 
    overflow-wrap: break-word;

    @media (max-width: 1000px) {
        font-size: 23px;    
    }

    @media (max-width: 480px) {
        font-size: 20px;    
    }
`;

export default Stats