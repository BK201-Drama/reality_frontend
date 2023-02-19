/*
 * @Author: chenyixin@ray003 chenyixin@rayvision.com
 * @Date: 2023-02-19 23:20:56
 * @LastEditors: chenyixin@ray003 chenyixin@rayvision.com
 * @LastEditTime: 2023-02-19 23:28:26
 * @FilePath: \realty_frontend\src\shared\LayoutIndex\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Layout } from 'antd';
import { Outlet } from 'react-router';
import { RoleType } from '../../public/constants/role';
import FHeader from '../FHeader';
import SideBar from '../SideBar';

const { Content } = Layout;
const LayoutIndex = () => {
  const roleType = Number(localStorage.getItem('roleType') ?? RoleType.user)
  return (
    <Layout className='h-[100vh]'>
      <FHeader />
      <Layout>
        <SideBar roleType={roleType} />
        <Layout className='bg-[#eee]'>
          <Content className="m-[0px] min-h-[280px]">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex