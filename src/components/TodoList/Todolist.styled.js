import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeWrap = styled.div`
margin: auto;
padding-top: 40px;
text-align: center;
 max-width: 335px;
    @media (min-width: 376px) {
   max-width: 768px;
   padding-top: 80px;
  }
   h3 {
    margin-top: 40px;
    font-size: 24px;
   }

`;

export const FilterWrap = styled.div`

margin-bottom: 40px;
text-align: center;
`
export const ListWrap = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;

`
export const ItemWrap = styled.li`
display: flex;

flex-direction: column;
gap: 20px;
width: 370px;
border-radius: 6px;
padding: 10px 15px;
font-size: 24px;
border: 2px solid var(--border);
box-shadow: 0 2px 12px var(--border);
background-color: var(--card);
`;
export const AuthLink = styled(Link)`
text-decoration: underline;
color: var(--text-clarification);
`