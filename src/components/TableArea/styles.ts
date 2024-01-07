import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #FFF
    padding: 60px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 30px 0px;
    text-align: center;
`;