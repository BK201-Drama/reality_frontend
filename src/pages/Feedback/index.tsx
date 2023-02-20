import { Button, Form, Input } from "antd"
import { useStores } from "../../core/stores"

const { Item } = Form

const FeedBack = () => {
  const { userStore } = useStores()
  const finish = (e: { feedback?: string }) => {
    console.log({
      ...e,
      userId: userStore.id,
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