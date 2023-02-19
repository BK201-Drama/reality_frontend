import { Layout } from 'antd';
import { Outlet } from 'react-router';
import FHeader from '../FHeader';
import SideBar from '../SideBar';

const { Content } = Layout;
const LayoutIndex = () => {
  return (
    <Layout className='h-[100vh]'>
      <FHeader />
      <Layout>
        <SideBar />
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