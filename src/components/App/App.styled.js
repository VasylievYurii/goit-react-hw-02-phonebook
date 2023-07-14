import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 28px; */
  margin: 0 auto;
  /* padding-bottom: 0.5em; */
  /* border-radius: 5px; */
  background-image: var(--gradient-section);
  box-shadow: var(--shadow-section);
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: var(--color-main-one);
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: center;
  background-color: var(--color-accent);
  border-bottom: 2px solid white;
`;

export const TitleContacts = styled.h2`
width: 100%;
text-align: center;
border-bottom: 2px solid white;
padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: var(--color-accent);
  text-transform: uppercase;
  color: var(--color-main-one);
`
export const Contact = styled.li`
font-size: 20px;
padding: 0.5em;
`