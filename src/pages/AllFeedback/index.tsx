import { useAntdTable } from "ahooks"
import { allFeedback } from "../../domains/feedBack/reposity"
import RTable from "../../shared/RTable"
import getTableData from "../../shared/utils/tableApi"
import { Columns } from "./column.config"

const AllFeedback = () => {
  const { tableProps } = useAntdTable(getTableData(allFeedback))
  const columns = Columns()
  return (
    <div className="bg-[#fff] m-[20px] p-[15px] flex flex-col gap-[10px] rounded-[8px]">
      <h2>反馈列表</h2>
      <div className="flex gap-[5px] flex-col justify-center items-center">
        <RTable columns={columns} tableProps={tableProps} rowKey="id" />
      </div>
    </div>
  )
}

export default AllFeedback