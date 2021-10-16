import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
`;

export const NotFound = () => {
  return <Wrapper>This page doesn't exist!</Wrapper>;
};
