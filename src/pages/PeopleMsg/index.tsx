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
    <div className="bg-[#fff] p-[15px] rounded-[8px] m-[30px]">
      <h2>用户管理</h2>
      <div className="flex gap-[5px] flex-col justify-center items-center">
        <RTable tableProps={tableProps} columns={columns} />
        <RegistModal render={(click) => <Button onClick={click}>注册用户</Button>} />
      </div>
    </div>
  )
}

export default PeopleMsg