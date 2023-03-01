import { Form, InputNumber, Modal } from 'antd';
import { FC, ReactNode, useState } from 'react';
import PeopleMsgComponent from '../PeopleMsgComponent';
import { columns, formConfigs } from './config';

interface IProps {
  render: (click: (e: any) => any) => ReactNode;
  id: number
  refresh: any
}
const PeopleModal: FC<IProps> = ({ render, id, refresh }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [formInstance] = Form.useForm()
  const daysNum = Form.useWatch('daysNum', formInstance)
  const ok = () => {};
  const cancel = () => {
    setVisible(false);
    refresh?.()
  };
  const column = columns(id, daysNum, cancel)
  return (
    <>
      <Modal
        open={visible}
        onOk={ok}
        onCancel={cancel}
        title='选择用户'
        footer={null}>
        <PeopleMsgComponent columns={column} formConfigs={formConfigs} />
        <Form form={formInstance}>
          <Form.Item name="daysNum" label="预订月数">
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
      {render(() => {
        setVisible(true);
      })}
    </>
  );
};

export default PeopleModal;
