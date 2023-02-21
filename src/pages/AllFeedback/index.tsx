import { useAntdTable } from "ahooks"
import { allFeedback } from "../../domains/feedBack/reposity"
import RTable from "../../shared/RTable"
import getTableData from "../../shared/utils/tableApi"
import { Columns } from "./column.config"

const AllFeedback = () => {
  const { tableProps } = useAntdTable(getTableData(allFeedback))
  const columns = Columns()
  return (
    <div className="h-full flex flex-col gap-[20px] items-center pt-[20px]">
      <h2>反馈列表</h2>
      <RTable columns={columns} tableProps={tableProps} rowKey="id" />
    </div>
  )
}

export default AllFeedback