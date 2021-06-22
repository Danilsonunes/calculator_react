import styled from 'styled-components';

 export const Main = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 256px;
    text-align: center;
    border: 10px solid #101116;
    border-radius: 5px;
    background: #2f2a3a;
`;

export const Form = styled.form`

    input{
        height: 75px;
        width: 249px;
        background: #2f2a3a;
        border: 0px;
        color: #fff;
        text-align: right;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 1px;
    }
   
`
export const Keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);
`
export const ClearButton = styled.button` 
    grid-column: 1/3;
    grid-row: 1;
    color: #7d67d7;
    margin: 5px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: #2f2a3a;

` 

export const EqualButton = styled.button `
    grid-column: 4/5;
    grid-row: 5;
    color: #f1f1f1;
    margin: 5px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: #7d67d7;
`

export const BackspaceButton = styled.button `
    color: #7d67d7;
    margin: 5px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: #2f2a3a;

`

export const Button = styled.button ` 
    margin: 5px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: #2f2a3a;
    color: #f1f1f1;
    font-weight: 500;
`

