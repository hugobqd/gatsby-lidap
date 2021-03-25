import styled from "styled-components";
import Box from './Box'

const FocusOutliner =  styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  outline: none;
  pointer-events: none;
  box-shadow: ${(props)=> props.inset && 'inset'} 0 0 0 0rem ${(props)=> props.theme.colors.focus};
  transition: box-shadow ${(props) => props.theme.transitions.link};

  :focus {
    outline: none;
  }

  a:focus-visible &,
  button:focus-visible & {
    box-shadow: ${(props)=> props.inset && 'inset'} 0 0 0 ${2/16}rem ${(props)=> props.theme.colors.focus};
  }
`

export default FocusOutliner;
