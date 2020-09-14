import styled from "styled-components";

export const Row = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  margin-top: ${-1}rem;
  margin-left: ${2 / -2}rem;
  margin-right: ${2 / -2}rem;

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    margin-top: ${1}rem;
    padding-left: ${2 / 2}rem;
    padding-right: ${2 / 2}rem;
  }
`;

export const Col = styled.div`
  /* flex: 1 0 0%; */
  flex: ${(props) => (props.span ? "0 0 auto;" : "1 0 0%")};
  /* width: ${(props) => (props.half ? "50%" : "auto")}; */
  width: ${(props) => (props.span ? `${(props.span / 12) * 100}%` : "auto")};

  /* ${(props) => (props.red ? "background: red;" : "background: yellow;")}; */
`;

export default Col;
