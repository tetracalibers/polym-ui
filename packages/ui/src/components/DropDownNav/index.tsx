import { useState } from 'react'
import { DifferStack } from '../layout-algorithm/DifferStack'
import { Menu, mockData, SubMenu } from './helper/type'
import { Nav } from './styled/nav'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { WithIcon } from '../with-icon/core'

type DropdownProps = {
  subMenus: (SubMenu | Menu)[]
  dropdown: boolean
}

const Dropdown = ({ subMenus }: DropdownProps) => {
  return (
    <ul role='menu'>
      {subMenus.map((subMenu, index) => (
        <li key={index} role='presentation'>
          <a href={subMenu.url} role='menuitem'>
            {subMenu.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

/* -------------------------------------------- */

type MenuItemProps = {
  item: Menu
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <li role='presentation'>
      {item.subMenus ? (
        <>
          <WithIcon
            as='button'
            iconChild='last'
            alignItems={'center'}
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown}
            onClick={() => setDropdown(prev => !prev)}
          >
            {item.title}
            <RiArrowDropDownLine />
          </WithIcon>
          {dropdown && (
            <Dropdown subMenus={item.subMenus} dropdown={dropdown} />
          )}
        </>
      ) : (
        <a href={item.url} role='menuitem'>
          {item.title}
        </a>
      )}
    </li>
  )
}

/* -------------------------------------------- */

export const DropDownNav = () => {
  return (
    <Nav aria-label=''>
      <DifferStack
        className='menus'
        as={'ul'}
        justifyContent={'center'}
        role='menubar'
        aria-label=''
      >
        {mockData.map((menu, index) => {
          return <MenuItem item={menu} key={index} />
        })}
      </DifferStack>
    </Nav>
  )
}
