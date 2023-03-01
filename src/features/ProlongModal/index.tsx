import { Form, InputNumber, message, Modal } from "antd"
import { FC, ReactNode, useState } from "react"

const rules = [{ required: true, message: '请输入' }]
const { Item } = Form

interface IProps {
  render: (click: (e: any) => any) => ReactNode
  onOk?: (e: number) => any
}
const ProlongModal: FC<IProps> = ({ render, onOk }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [formInstance] = Form.useForm()
  const cancel = () => {
    setVisible(false)
  }

  const ok = () => {
    formInstance?.validateFields().then((res) => {
      onOk?.(res?.bill)?.then(() => {
        message.success("续租成功")
        cancel()
      })
    })
  }
  return (
    <div>
      <Modal open={visible} onOk={ok} onCancel={cancel} title="注册">
        <Form form={formInstance} className="pt-[20px]">
          <Item name="bill" rules={rules}>
            <InputNumber addonBefore="续租天数" addonAfter="天" min={1} />
          </Item>
        </Form>
      </Modal>
      {render(() => {
        setVisible(true)
      })}
    </div>
  )
}

export default ProlongModal