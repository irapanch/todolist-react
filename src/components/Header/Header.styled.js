import styled from 'styled-components';

export const HeaderWrapper = styled.header`
margin: auto;
 width: 100%;
 max-width: 335px;
    @media (min-width: 376px) {
   max-width: 768px;
  }
 background-color: var(--section);
 padding: 20px 0;
 box-shadow: 0 3px 10px var(--border);
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
 row-gap: 20px;
 align-items: center;
 
 h2 {
    font-weight: 400;
  }
`
export const Nav = styled.ul`

  display: flex;
  justify-content: center;
  gap: 20px;
  height: 100%;
  font-size: 24px;
  @media (min-width: 376px) {
    font-size: 32px;
    gap: 30px;
  }

`
export const Button = styled.button`
border-radius: 6px;
background-color: var(--text-not-available);
padding: 5px 10px;
font-size: 20px;
border: none;
box-shadow: 0 2px 12px var(--border);
&:hover {
    background-color: var(--card);
}

`