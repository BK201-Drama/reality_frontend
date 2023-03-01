import { Input, message } from 'antd';
import _ from 'lodash';
import { booking } from '../../domains/room/reposity';
const SUCCESS = 200
export const columns = (roomId: number, daysNum?: number, cancel?:() => any) => [
  {
    title: '用户id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '账号',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '名称',
    dataIndex: 'userRealName',
    key: 'userRealName',
  },
  {
    title: '确认',
    dataIndex: 'id',
    key: 'id',
    render: (id: number, record: any) => (
      <a className='text-[blue]' onClick={() => {
        console.log(daysNum)
        if (_.isNil(daysNum)) {
          message.error("请输入预订天数")
          return
        }
        booking({
          roomId,
          userId: id,
          daysNum
        }).then((res: any) => {
          if (res.status === SUCCESS) {
            message.success("预订成功")
            cancel?.()
          }
        })
      }}>
        预订
      </a>
    ),
  },
];

export const formConfigs = [
  {
    name: 'userName',
    element: <Input />,
    label: '用户账户',
  },
  {
    name: 'userRealName',
    element: <Input />,
    label: '用户姓名',
  },
];
