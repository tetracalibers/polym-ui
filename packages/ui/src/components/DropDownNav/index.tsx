import { Fragment, useState } from 'react'
import { DifferStack } from '../layout-algorithm/DifferStack'
import { Menu, mockData, SubMenu } from './helper/type'
import { Horizontal, Nav, TopUl } from './styled/nav'
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri'
import { WithIcon } from '../with-icon/core'

type DropdownProps = {
  subMenus: (SubMenu | Menu)[]
  dropdown: boolean
  depth: number
}

const Dropdown = ({ subMenus, depth }: DropdownProps) => {
  return (
    <ul role='menu'>
      {subMenus.map((subMenu, index) => (
        <MenuItem item={subMenu} key={index} depth={depth + 1} />
      ))}
    </ul>
  )
}

/* -------------------------------------------- */

type MenuItemProps = {
  item: Menu
  depth: number
}

const MenuItem = ({ item, depth }: MenuItemProps) => {
  const [dropdown, setDropdown] = useState(false)

  const Direction = depth > 0 ? Horizontal : Fragment

  return (
    <li role='presentation'>
      {item.subMenus ? (
        <Direction>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown}
            onClick={() => setDropdown(prev => !prev)}
          >
            {item.title}
            {depth > 0 ? <RiArrowDropRightLine /> : <RiArrowDropDownLine />}
          </button>
          {dropdown && (
            <Dropdown
              subMenus={item.subMenus}
              dropdown={dropdown}
              depth={depth}
            />
          )}
        </Direction>
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
      <TopUl role='menubar' aria-label=''>
        {mockData.map((menu, index) => {
          return <MenuItem item={menu} key={index} depth={0} />
        })}
      </TopUl>
    </Nav>
  )
}
