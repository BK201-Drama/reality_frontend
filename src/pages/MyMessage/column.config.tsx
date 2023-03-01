import { Button } from 'antd';
import ProlongModal from '../../features/ProlongModal';

const columns = (visCharge?: any, prolongRoom?: any) => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: '房间id',
    },
    {
      key: 'roomNumber',
      dataIndex: 'roomNumber',
      title: '房间号',
    },
    {
      key: 'roomStatus',
      dataIndex: 'roomStatus',
      title: '房间状态',
    },
    {
      key: 'roomBeginTime',
      dataIndex: 'roomBeginTime',
      title: '房间起始居住日',
    },
    {
      key: 'roomEndTime',
      dataIndex: 'roomEndTime',
      title: '房间结束日期',
    },
    {
      key: 'roomBill',
      dataIndex: 'roomBill',
      title: '水电费(已花)',
    },
    {
      key: 'roomRentPerDay',
      dataIndex: 'roomRentPerDay',
      title: '每日租金',
    },
    {
      key: 'id',
      dataIndex: 'id',
      title: '操作',
      render: (id: number) => (
        <div className='flex gap-[5px]'>
          <Button
            onClick={() => {
              visCharge?.(id);
            }}>
            模拟水电费-50
          </Button>
          <ProlongModal
            render={(click) => {
              return <Button onClick={click}>延长租期</Button>;
            }}
            onOk={(bill) => {
              prolongRoom(id, bill)
            }}
          />
        </div>
      ),
    },
  ];
};

export default columns;
