import _ from "lodash"
import moment from "moment"
import { ROOM_STATUS, STATUS } from "../../public/constants/room"

const Columns = () => {
    return [
        {
            id: 'id',
            dataIndex: 'id',
            title: 'id'
        }, {
            id: 'roomNumber',
            dataIndex: 'roomNumber',
            title: '房间号'
        }, {
            id: 'roomRentPerDay',
            dataIndex: 'roomRentPerDay',
            title: '每日租金',
            render: (roomRentPerDay: number | null) => roomRentPerDay ?? '-'
        }, {
            id: 'roomStatus',
            dataIndex: 'roomStatus',
            title: '房间状态',
            render: (roomStatus: STATUS) => ROOM_STATUS?.[roomStatus] ?? '-'
        }, {
            id: 'roomBeginTime',
            dataIndex: 'roomBeginTime',
            title: '房间预定时间',
            render: (time: number | null) => !_.isNil(time) ? moment(time).format("MMMM Do YYYY h:mm:ss") : '-'
        }, {
            id: 'roomEndTime',
            dataIndex: 'roomEndTime',
            title: '房间过期时间',
            render: (time: number | null) => !_.isNil(time) ? moment(time).format("MMMM Do YYYY h:mm:ss") : '-'
        }, {
            id: 'id',
            dataIndex: 'id',
            title: '操作',
            render: (id: number) => <a className="text-[blue]">预定</a>
        }
    ]
}
export default Columns