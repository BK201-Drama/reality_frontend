import { useAntdTable } from "ahooks"
import RTable from "../../shared/RTable"
import getTableData from "../../shared/utils/tableApi"

const PeopleMsg = () => {
  // const { tableProps } = useAntdTable(getTableData(allFeedback))
  return (
    <div>
      <RTable />
    </div>
  )
}

export default PeopleMsg