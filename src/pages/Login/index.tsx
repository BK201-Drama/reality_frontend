import { Button, Form, Input } from 'antd'

const { Item } = Form

const Login = () => {
  const [formInstance] = Form.useForm()
  const finishLogin = (e: any) => {
    console.log(e)
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-[#fff] rounded-[8px] flex justify-center items-between">
        <div className="p-[20px] flex flex-col gap-[40px] justify-center items-center">
          <h1>枫叶公寓</h1>
          <h2>登录</h2>
          <Form form={formInstance} colon={false} onFinish={finishLogin}>
            <Item label="账号" name="username">
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