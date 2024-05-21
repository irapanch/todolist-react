import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`

max-width: 325px;
margin: 40px auto ;
text-align: center;
display: flex;
flex-direction: column;
gap: 20px;
border: 2px solid var(--border);
border-radius: 6px ;
background-color: var(--card);
padding: 10px;


box-shadow: 0 2px 12px var(--border);
h2 {
    font-size: 30px;
}
label {
width: 100%;
}
input {
    width: 100%;
    height: 40px;
    border-radius: 6px ;
    border: none;
box-shadow: 0 2px 12px var(--border);

}
:focus-visible {
    outline: 2px solid var(--card);
}
`;

export const Button = styled.button`
margin: auto;
width: 250px;
border-radius: 6px;
background-color: var(--section);
padding: 10px 15px;
font-size: 24px;
border: none;
box-shadow: 0 2px 12px var(--border);
&:hover {
    background-color: var(--card);
    cursor: pointer;
}
&:focus{
    background-color: var(--card);
}


`
export const StyledLink = styled(Link)`
margin: auto;
width: 250px;
border-radius: 6px;
background-color: var(--card);
padding: 10px 15px;
font-size: 24px;
border: none;
box-shadow: 0 2px 12px var(--border);
&:hover {
    background-color: var(--section);
}
`
