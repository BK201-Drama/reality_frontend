import { Layout, Menu } from 'antd';
import { FC } from 'react';
import navHelper from '../../core/route/navHelper';
import { RoleType } from '../../public/constants/role';
import { REAL_MENU } from './index.mapper';

const { Sider } = Layout;

interface IProps {
  roleType: RoleType
}
const SideBar: FC<IProps> = ({ roleType = RoleType.user }) => {
  const nav = navHelper()
  return (
    <Sider width={200}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      onSelect={(e) => { nav.toKey(e?.key) }}
      style={{ height: '100%', borderRight: 0 }}
      items={REAL_MENU[roleType]}
    />
  </Sider>
  )
}

export default SideBar