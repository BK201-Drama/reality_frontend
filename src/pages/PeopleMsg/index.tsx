import { useAntdTable } from "ahooks"
import { Button } from "antd"
import RegistModal from "../../features/RegistModal"
import RTable from "../../shared/RTable"
import getTableData from "../../shared/utils/tableApi"

const PeopleMsg = () => {
  // const { tableProps } = useAntdTable(getTableData(allFeedback))
  return (
    <div>
      <RegistModal render={(click) => <Button onClick={click}>注册用户</Button>} />
      <RTable />
    </div>
  )
}

export default PeopleMsg