import { Button, Layout } from 'antd';
import { useEffect } from 'react';
import navHelper from '../../core/route/navHelper';
import { useStores } from '../../core/stores';

const { Header } = Layout;

const FHeader = () => {
  const { userStore } = useStores()
  const navInstance = navHelper()
  const user = JSON.parse(localStorage.getItem('user') ?? '{}')
  useEffect(() => {
    userStore.setUserMessage(user)
  }, [])
  return (
    <Header>
      <div className='flex items-center h-full justify-between'>
        <h2 className='text-[#fff]'>枫叶公寓</h2>
        <div className='flex items-center gap-[15px]'>
          <div className='text-[#fff]'>你好：{user?.userRealName ?? user?.managerName}</div>
          <Button className='text-[#dee]' onClick={() => {
            localStorage.removeItem("roleType")
            userStore.resetUserMessage()
            navInstance.toLogin()
          }}>注销</Button>
        </div>
      </div>
    </Header>
  )
}

export default FHeader