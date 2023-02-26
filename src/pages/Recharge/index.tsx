import { Button, Form, Input, message } from "antd"
import { useStores } from "../../core/stores"
import { recharge } from "../../domains/charge/reposity"
const SUCCESS = 200
const Recharge = () => {
  const { userStore } = useStores()
  const finish = (e: any) => {
    const params = {
      ...e,
      id: userStore.id
    }
    recharge(params).then((res: any) => {
      if (res.status === SUCCESS) message.success("充值成功")
      else message.error("充值失败")
    }).catch(() => message.error("充值失败"))
  }
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Form onFinish={finish}>
        <Form.Item name="chargeNum" label="充值金额">
          <Input placeholder="请输入充值金额" />
        </Form.Item>
        <Form.Item className='pl-[90px]'>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Recharge