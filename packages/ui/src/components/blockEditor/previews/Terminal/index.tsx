import styled from 'styled-components'

const OverflowWrapper = styled.div`
  --border-radius: 0.5em;

  overflow: auto;
  border-radius: var(--border-radius);
  box-shadow: rgb(17 17 26 / 5%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px;
`

const Container = styled.div`
  & * {
    font-family: 'Ubuntu Mono' !important;
  }

  white-space: nowrap;
  min-width: fit-content;
  width: 100%;
  box-sizing: border-box;
`

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  background-color: #cfd8dc;
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
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
  }

  & > span:nth-child(1) {
    background: #ff5f57;
  }

  & > span:nth-child(2) {
    background: #ffbd2d;
  }

  & > span:nth-child(3) {
    background: #27c93f;
  }
`

const BarUser = styled.div`
  color: #607d8b;
  margin-left: 6px;
  font-size: 14px;
  line-height: 15px;
`

const Body = styled.div`
  background: #fff;
  height: calc(100% - 30px);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  line-height: 1.75;
  padding: 0.25em 0.5em;
  width: 100%;
  box-sizing: border-box;
`

const Prompt = styled.div`
  display: flex;
`

const PromptUser = styled.span`
  color: #7eda28;
`

const PromptLocation = styled.span`
  color: #69e3eb;
`

const PromptBling = styled.span`
  color: #ee5af6;
  padding-right: 0.5em;
`

const Command = styled.span`
  color: #4d608b;
`

const Output = styled.div`
  color: #967e76;
  padding-left: 0.25em;
  padding-bottom: 2px;
`

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
    <OverflowWrapper>
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
            <Command>{command}</Command>
          </Prompt>
          <Output>{output}</Output>
        </Body>
      </Container>
    </OverflowWrapper>
  )
}
