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
        <Layout className='p-[40px] bg-[#eee]'>
          <Content className="p-[24px] m-[0px] min-h-[280px] bg-[#fff]">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex