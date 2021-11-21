import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-evenly;
  width: 62px;
  flex-shrink: 0;
  height: 100%;
  background-color: #202225;
`
const SidebarItem = styled.div`
  height: 48px;
  width: 48px;
  cursor: pointer;
`
const HomeButton = styled(SidebarItem)`
  background-color: #5865F2;
  transition: background-color .15s ease-out,color .15s ease-out;
`
// hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%)
export default Sidebar;