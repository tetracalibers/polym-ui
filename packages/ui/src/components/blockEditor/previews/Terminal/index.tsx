import styled, { keyframes } from 'styled-components'

const Container = styled.div``

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(#504b45 0%, #3c3b37 100%);
`

const BarButtons = styled.div`
  display: flex;
  align-items: center;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
  }
`

const BarUser = styled.div`
  color: #d5d0ce;
  margin-left: 6px;
  font-size: 14px;
  line-height: 15px;
`

const Body = styled.div`
  background: rgba(56, 4, 40, 0.9);
  font-family: 'Ubuntu Mono';
  height: calc(100% - 30px);
  padding-top: 2px;
  margin-top: -1px;
`

const Prompt = styled.div`
  display: flex;
`

const PromptUser = styled.span`
  color: #7eda28;
`

const PromptLocation = styled.span`
  color: #4878c0;
`

const PromptBling = styled.span`
  color: #dddddd;
`

const blink = keyframes`
  0% {    
    background: #ffffff;  
  }  
  49% {    
    background: #ffffff;  
  }  
  60% {    
    background: transparent;  
  }  
  99% {    
    background: transparent;  
  }  
  100% {    
    background: #ffffff;  
  }
`

const PromptCursor = styled.span`
  display: block;
  height: 17px;
  width: 8px;
  margin-left: 9px;
  animation: ${blink} 1200ms linear infinite;
`

const Command = styled.span``

const Output = styled.div``

type TerminalProps = {
  user: string
  location: string
  command: string
  output: string
}

export const Terminal = ({
  user,
  location,
  command,
  output,
}: TerminalProps) => {
  return (
    <Container>
      <Bar>
        <BarButtons>
          <span></span>
          <span></span>
          <span></span>
        </BarButtons>
        <BarUser>{`${user}: ${location}`}</BarUser>
      </Bar>
      <Body>
        <Prompt>
          <PromptUser>{user + ':'}</PromptUser>
          <PromptLocation>{location}</PromptLocation>
          <PromptBling>$</PromptBling>
          <PromptCursor />
          <Command>{command}</Command>
        </Prompt>
        <Output>{output}</Output>
      </Body>
    </Container>
  )
}
