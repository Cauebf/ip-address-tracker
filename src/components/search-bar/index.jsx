import { useState } from "react";
import styled, {css} from "styled-components";
import { StyleSheetManager } from 'styled-components'

const SearchBar = ({ handleSearch, error }) => {
    const [inputValue, setInputValue] = useState('')
 
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = async () => {
        return await handleSearch(inputValue);
    }

    const handleKeyDown = (e) => {
        e.key === 'Enter' && handleClick()        
    }

    return (
        <StyleSheetManager shouldForwardProp={() => true}>
            <CardContainer>
                <H1>IP Address Tracker</H1>
                <InputContainer error={error}>
                    <Input
                        type="text"
                        placeholder="Search for any IP address or domain"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown} 
                    />
                    <SearchButton onClick={handleClick}>
                        <img src="/svg/icon-arrow.svg" alt="Arrow icon" />
                    </SearchButton>
                </InputContainer>
            </CardContainer>
        </StyleSheetManager>
    );
};

export default SearchBar;

const CardContainer = styled.div`
    background: url('/images/pattern-bg-desktop.png') center/cover;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    @media (max-width: 480px) {
        background: url('/images/pattern-bg-mobile.png') center/cover;
        height: 300px;
    }
`;

const H1 = styled.h1`
    color: #ffff;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 500;

    @media (max-width: 1000px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`

const InputContainer = styled.div`
    display: flex;
    width: 700px;
    margin-bottom: 100px;

    @media (max-width: 1000px) {
        ${({ error }) => !error && css`
            margin-bottom: 170px;
        `}
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Input = styled.input`
    font-size: 18px;
    border: none;
    padding: 20px 25px;
    width: 650px;
    border-radius: 15px 0 0 15px;
 
    &:focus {
        outline: none;
    }

    &::placeholder {
        color: hsl(0, 0%, 59%);
    }

    @media (max-width: 480px) {
        width: 70%;
        font-size: 17px;
    }
`

const SearchButton = styled.button`
    height: 63px;
    width: 70px;
    background-color: #000000;
    border: none;
    border-radius: 0 15px 15px 0;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: hsl(0, 0%, 17%);
    }

    @media (max-width: 768px) {
        width: 20%;
    }
`