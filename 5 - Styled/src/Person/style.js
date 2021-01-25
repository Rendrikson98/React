import styled from 'styled-components';

export const StyledDiv = styled.div `
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (max-width: 500px){
        width: 400px
    }
`