# JSX Structure

```memo
<LinkList>
  <LinkList.Item href={'#'} active>Home</LinkList.Item>
  <LinkList.Item href={'#'}>About</LinkList.Item>
  <LinkList.Item href={'#'}>Services</LinkList.Item>
  <LinkList.Item href={'#'}>Contact</LinkList.Item>
</LinkList>
```

```memo
<Tab
  titleListStyleFn={(children: ReactNode) => <LinkList>{children}</LinkList>}
  titleStyleFn={(title: string) => <Decoration>{title}</Decoration>}
>
  <Tab.Panel title="Home">Home Contents</Tab.Panel>
  <Tab.Panel title="About">About Contents</Tab.Panel>
  <Tab.Panel title="Services">Services Contents</Tab.Panel>
  <Tab.Panel title="Contact">Contact Contents</Tab.Panel>
</Tab>
```

# Style Pattern

- **styleType**
  - growFromCenterUnder
  - growFromLeftUnder
  - growFromRightUpper
  - growFromCircle
  - fillFromLeft
  - fillFromUnderLine
  - fillFromHorizontalLine
  - borderGoAround
  - borderMerging
