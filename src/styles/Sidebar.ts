import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
  width: 76px;
  flex-shrink: 0;
  height: 100%;
  background-color: #202225;
  padding: 10px 0px;
`
const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  user-select: none;
  &:hover {
    & span:first-child {
      height: 18px;
    }
  
  }
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  transition: border-radius 0.15s ease-out;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    border-radius: 38%;
  }
  &:active {
    transform: translateY(1px)
  }
  & img {
    height: 100%;
    width: 100%;
    user-drag: none;
  }
`
const HomeButton = styled(Icon)`
  background-color: #36393f;
  transition: background-color .15s ease-out,color .15s ease-out, border-radius 0.15s ease-out;
  padding: 10px;
  &:hover {
    background-color: #5865F2;
  }
`

const Pill = styled.span`
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  height: 7px;
  width: 8px;
  margin-left: -5px;
  background-color: white;
  border-radius: 0 4px 4px 0;
`
// hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%)
export { Sidebar, SidebarItem, HomeButton, Icon, Pill };