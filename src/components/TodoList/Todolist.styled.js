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

export const ItemWrap = styled.li`
width: 100%;
background-color: var(--card);
`;
export const AuthLink = styled(Link)`
text-decoration: underline;
color: var(--text-clarification);
`