/*
 * @Author: chenyixin@ray003 chenyixin@rayvision.com
 * @Date: 2023-02-19 23:20:56
 * @LastEditors: chenyixin@ray003 chenyixin@rayvision.com
 * @LastEditTime: 2023-02-26 21:06:30
 * @FilePath: \realty_frontend\src\pages\PeopleMsg\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useAntdTable } from "ahooks"
import { Button } from "antd"
import { getAllUserInfo } from "../../domains/Login/reposity"
import RegistModal from "../../features/RegistModal"
import RTable from "../../shared/RTable"
import getTableData from "../../shared/utils/tableApi"
const columns = [
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
    title: '密码',
    dataIndex: 'userPassword',
    key: 'userPassword',
  },
]
const PeopleMsg = () => {
  const { tableProps } = useAntdTable(getTableData(getAllUserInfo))
  return (
    <div className="bg-[#fff] m-[20px] p-[15px] flex flex-col gap-[10px] rounded-[8px]">
      <h2>用户管理</h2>
      <div className="flex gap-[5px] flex-col justify-center items-center">
        <RTable tableProps={tableProps} columns={columns} />
        <RegistModal render={(click) => <Button onClick={click}>注册用户</Button>} />
      </div>
    </div>
  )
}

export default PeopleMsg