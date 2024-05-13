import styled from 'styled-components';

export const HeaderWrapper = styled.header`
 width: 100%;
 background-color: var(--section);
 padding-top: 20px;
 box-shadow: 0 3px 10px var(--border);
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