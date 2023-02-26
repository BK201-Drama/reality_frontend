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

  return (
    <Form form={formInstance}>
      {
        formConfig.map((formItem: FormConfig) => {
          return <Form.Item label={formItem.label} name={formItem.name}>
            {formItem.element}
          </Form.Item>
        })
      }
      <Row gutter={24} justify="end" style={{ marginBottom: 24 }}>
        <Button type="primary" onClick={submit}>
          搜索
        </Button>
        <Button style={{ marginLeft: 16 }} onClick={reset}>
          重置
        </Button>
      </Row>
    </Form>
  )
}

export default RFormHeader