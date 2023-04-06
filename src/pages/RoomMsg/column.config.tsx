import _ from 'lodash';
import moment from 'moment';
import PeopleModal from '../../features/PeopleModal';
import { ROOM_STATUS, STATUS } from '../../public/constants/room';

const Columns = (refresh: any) => {
  return [
    {
      id: 'id',
      dataIndex: 'id',
      title: 'id',
    },
    {
      id: 'roomNumber',
      dataIndex: 'roomNumber',
      title: '房间号',
    },
    {
      id: 'roomRentPerDay',
      dataIndex: 'roomRentPerDay',
      title: '每月租金',
      render: (roomRentPerDay: number | null) => roomRentPerDay ?? '-',
    },
    {
      id: 'roomStatus',
      dataIndex: 'roomStatus',
      title: '房间状态',
      render: (roomStatus: STATUS) => ROOM_STATUS?.[roomStatus] ?? '-',
    },
    {
      id: 'userRealName',
      dataIndex: 'userRealName',
      title: '预订人',
      render: (userRealName?: string) => userRealName ?? '-',
    },
    {
      id: 'roomBeginTime',
      dataIndex: 'roomBeginTime',
      title: '房间预定时间',
      render: (time: number | null) =>
        !_.isNil(time) ? moment(time).format('MMMM Do YYYY h:mm:ss') : '-',
    },
    {
      id: 'roomEndTime',
      dataIndex: 'roomEndTime',
      title: '房间过期时间',
      render: (time: number | null) =>
        !_.isNil(time) ? moment(time).format('MMMM Do YYYY h:mm:ss') : '-',
    },
    {
      id: 'id',
      dataIndex: 'id',
      title: '操作',
      render: (id: number, record: any) => (
        record?.roomStatus === STATUS.notBook ? <PeopleModal
          id={id}
          refresh={refresh}
          render={(click) => (
            <a className='text-[blue]' onClick={click}>
              选择用户预定
            </a>
          )}
        /> : '--'
      ),
    },
  ];
};
export default Columns;
