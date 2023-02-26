import { Button, Col, Form, FormInstance, Row } from "antd"
import { FC } from "react"
interface FormConfig {
  element: React.ReactNode
  name: string
  label?: string
}
interface IProps {
  formInstance: FormInstance<any>
  reset: (e?: any) => any
  submit: (e?: any) => any
  formConfig: FormConfig[]
}
const RFormHeader: FC<IProps> = ({ formInstance, reset, submit, formConfig }) => {
  const [iniFormInstance] = Form.useForm()
  const form = formInstance ?? iniFormInstance
  const onReset = () => {
    formInstance.resetFields()
    reset()
  }
  const onSubmit = () => {
    const params = formInstance.getFieldsValue()
    submit?.(params)
  }

  return (
    <Form form={form}>
      <Row gutter={24}>
        {
          formConfig.map((formItem: FormConfig, index: number) => {
            return <Col span={8} key={index}>
              <Form.Item label={formItem?.label} name={formItem.name}>
                {formItem.element}
              </Form.Item>
            </Col>
          })
        }
      </Row>
      <Row gutter={24} justify="end" style={{ marginBottom: 24, paddingRight: 10 }}>
        <Button type="primary" onClick={onSubmit}>
          搜索
        </Button>
        <Button style={{ marginLeft: 16 }} onClick={onReset}>
          重置
        </Button>
      </Row>
    </Form>
  )
}

export default RFormHeader