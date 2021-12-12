import styled from "styled-components";

const Container = styled.div<{ pointerEvents: boolean }>`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  pointer-events: ${props => !props.pointerEvents ? 'auto' : 'none'};
  /* background-color: #36393F; */
`
export default Container;