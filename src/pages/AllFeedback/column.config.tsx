/*
 * @Author: chenyixin@ray003 chenyixin@rayvision.com
 * @Date: 2023-02-21 22:52:29
 * @LastEditors: chenyixin@ray003 chenyixin@rayvision.com
 * @LastEditTime: 2023-02-26 20:13:40
 * @FilePath: \realty_frontend\src\pages\AllFeedback\column.config.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import moment from "moment"

export const Columns = () => {
    return [
        {
            title: '反馈id',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: '房间号',
          dataIndex: 'roomNumber',
          key: 'roomNumber',
      },
        {
            title: '反馈',
            dataIndex: 'feedback',
            key: 'feedback',
        },
        {
            title: '姓名',
            dataIndex: 'userRealName',
            key: 'userRealName',
        },
        {
            title: '反馈时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: (time?: number) => moment(time).format("MMMM Do YYYY h:mm:ss")
        }
    ]
}