import { Layout, Menu } from 'antd';
import { FC } from 'react';
import navHelper from '../../core/route/navHelper';
import { RoleType } from '../../public/constants/role';
import { REAL_MENU } from './index.mapper';

const { Sider } = Layout;

interface IProps {
  roleType?: RoleType
}
const SideBar: FC<IProps> = ({ roleType = RoleType.user }) => {
  const nav = navHelper()
  return (
    <Sider width={150}>
      <Menu
        mode="inline"
        onSelect={(e) => { nav.toKey(e?.key) }}
        style={{ height: '100%', borderRight: 0 }}
        items={REAL_MENU[roleType]}
      />
    </Sider>
  )
}

export default SideBar