import { Button, Layout } from 'antd';
import navHelper from '../../core/route/navHelper';

const { Header } = Layout;

const FHeader = () => {
  const navInstance = navHelper()
  return (
    <Header>
      <div className='flex items-center h-full justify-between'>
        <h2 className='text-[#fff]'>枫叶公寓</h2>
        <Button className='text-[#dee]' onClick={() => {
          localStorage.removeItem("token")
          navInstance.toLogin()
        }}>注销</Button>
      </div>
    </Header>
  )
}

export default FHeader