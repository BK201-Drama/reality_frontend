import { Form, Input, message, Modal } from "antd"
import { FC, ReactNode, useState } from "react"
import { regist, updatePwd } from "../../domains/Login/reposity"

const { Item } = Form
const rules = [{ required: true, message: '请输入' }]

interface IProps {
  render: (click: (e: any) => any) => ReactNode
  onOk?: () => any
  id: number
}
const UpdateModal: FC<IProps> = ({ render, onOk, id }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [formInstance] = Form.useForm()
  const ok = (e: any) => {
    formInstance?.validateFields().then((e) => {
        const { newPassword, anotherPwd } = e
        if (anotherPwd !== newPassword) {
            message.error("密码不一致，请重试")
            return
        }
        updatePwd({ newPassword, id }).then((res) => {
            message.success("修改成功")
        })
    })
    onOk?.()
    setVisible(false)
  }
  const cancel = () => {
    setVisible(false)
  }
  return (
    <>
      <Modal open={visible} onOk={ok} onCancel={cancel} title="注册">
        <Form form={formInstance} className="pt-[20px]">
          <Item label="请修改密码" name="newPassword" rules={rules}>
            <Input />
          </Item>
          <Item label="请再次确认密码" name="anotherPwd" rules={rules}>
            <Input.Password />
          </Item>
        </Form>
      </Modal>
      {render(() => {
        setVisible(true)
      })}
    </>
  )
}

export default UpdateModal