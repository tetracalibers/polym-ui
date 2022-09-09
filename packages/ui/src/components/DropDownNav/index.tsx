import { DifferStack } from '../layout-algorithm/DifferStack'
import { Menu, mockData, SubMenu } from './helper/type'
import { Nav } from './styled/nav'

type DropdownProps = {
  subMenus: (SubMenu | Menu)[]
}

const Dropdown = ({ subMenus }: DropdownProps) => {
  return (
    <ul className='dropdown'>
      {subMenus.map((subMenu, index) => (
        <li key={index} className='menu-items'>
          <a href={subMenu.url}>{subMenu.title}</a>
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
  return (
    <li className='menu-items'>
      {item.subMenus ? (
        <>
          <button type='button' aria-haspopup='menu'>
            {item.title}{' '}
          </button>
          <Dropdown subMenus={item.subMenus} />
        </>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}
    </li>
  )
}

/* -------------------------------------------- */

export const DropDownNav = () => {
  return (
    <Nav>
      <DifferStack className='menus' as={'ul'} justifyContent={'center'}>
        {mockData.map((menu, index) => {
          return <MenuItem item={menu} key={index} />
        })}
      </DifferStack>
    </Nav>
  )
}
