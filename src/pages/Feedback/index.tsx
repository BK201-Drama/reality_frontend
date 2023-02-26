import { Button, Form, Input, message } from "antd"
import { useStores } from "../../core/stores"
import { feedBack } from "../../domains/feedBack/reposity"

const { Item } = Form

const FeedBack = () => {
  const { userStore } = useStores()
  const finish = (e: { feedback?: string }) => {
    feedBack({
      ...e,
      userId: userStore.id,
    }).then(() => {
      message.success("反馈成功")
    })
  }
  return (

    <div className="justify-center items-center flex h-full w-full flex-col gap-[40px]">
      <h1>有什么建议都可以提出来噢</h1>
      <Form onFinish={finish} className="w-[800px] justify-center flex flex-col">
        <Item name="feedback">
          <Input.TextArea />
        </Item>
        <Item>
          <Button htmlType="submit">提交反馈</Button>
        </Item>
      </Form>
    </div>
  )
}

export default FeedBack