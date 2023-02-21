import { Form, Input, message, Modal } from "antd"
import { FC, ReactNode, useState } from "react"
import { regist } from "../../domains/Login/reposity"

const { Item } = Form
const rules = [{ required: true, message: '请输入' }]

interface IProps {
  render: (click: (e: any) => any) => ReactNode
}
const RegistModal: FC<IProps> = ({ render }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [formInstance] = Form.useForm()
  const ok = () => {
    formInstance?.validateFields().then((res) => {
      regist(res).then(() => {
        setVisible(false)
        message.success("注册成功")
      })
    })
  }
  const cancel = () => {
    setVisible(false)
  }
  return (
    <>
      <Modal open={visible} onOk={ok} onCancel={cancel} title="注册">
        <Form form={formInstance} className="pt-[20px]">
          <Item label="账号" name="userName" rules={rules}>
            <Input />
          </Item>
          <Item label="密码" name="userPassword" rules={rules}>
            <Input.Password />
          </Item>
          <Item label="名字" name="userRealName" rules={rules}>
            <Input />
          </Item>
        </Form>
      </Modal>
      {render(() => {
        setVisible(true)
      })}
    </>
  )
}

export default RegistModal