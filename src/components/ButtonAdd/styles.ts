import styled from 'styled-components';

export const Button = styled.button`
    text-align: center
    display: flex;
    padding: 10px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    background-color: #70DBDB;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #CCC; 

    &:hover {
        background-color: #2980b9;
      }
`;