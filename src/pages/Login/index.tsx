/*
 * @Author: chenyixin@ray003 chenyixin@rayvision.com
 * @Date: 2023-02-18 01:22:09
 * @LastEditors: chenyixin@ray003 chenyixin@rayvision.com
 * @LastEditTime: 2023-02-19 23:44:44
 * @FilePath: \realty_frontend\src\pages\Login\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Form, Input, message } from 'antd'
import { useEffect } from 'react'
import navHelper from '../../core/route/navHelper'
import { useStores } from '../../core/stores'
import { returnType } from '../../domains/Login/reposity'
import { RoleType } from '../../public/constants/role'
import APIMapper from './index.mapper'

const { Item } = Form

const Login = () => {
  const [formInstance] = Form.useForm()
  const { userStore } = useStores()
  const navInstance = navHelper()
  useEffect(() => {
    formInstance.setFieldsValue({
      userName: 'admin',
      password: 'admin',
    })
  }, [])
  const finishLogin = (e: {
    userName: string;
    password: string;
  }) => {
    returnType({ loginName: e?.userName ?? '' })?.then((res: any) => {
      const {
        data: {
          data: {
            id,
            loginType: roleType,
          }
        }
      } = res
      // 存储自己是不是管理员
      localStorage.setItem('roleType', roleType)
      APIMapper?.[roleType as RoleType]?.({
        ...e,
        id,
      }).then((res: any) => {
        const {
          data: data
        } = res
        message.success('登录成功')
        console.log(data)
        navInstance.toWelcome()
      })
    })
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-[#fff] rounded-[8px] flex justify-center items-between">
        <div className="p-[20px] flex flex-col gap-[40px] justify-center items-center backdrop-filter">
          <h1>枫叶公寓</h1>
          <h2>登录</h2>
          <Form form={formInstance} colon={false} onFinish={finishLogin}>
            <Item label="账号" name="userName">
              <Input />
            </Item>
            <Item label="密码" name="password">
              <Input.Password />
            </Item>
            <Item className='pl-[90px]'>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login