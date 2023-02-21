import moment from "moment"

export const Columns = () => {
    return [
        {
            title: '反馈id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '反馈',
            dataIndex: 'feedback',
            key: 'feedback',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '反馈时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: (time?: number) => moment(time).format("MMMM Do YYYY h:mm:ss")
        }
    ]
}