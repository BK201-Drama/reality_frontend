import { useAntdTable } from "ahooks"
import { allFeedback } from "../../domains/feedBack/reposity"
import RTable from "../../shared/RTable"
import { IPage } from "../../types/table.type"
import { Columns } from "./column.config"
const getTableData = (pages: IPage) => {
  const params = {
    pageNum: pages.current,
    pageSize: pages.pageSize
  }
  return allFeedback(params).then((res: any) => {
    const {
      data: {
        data: {
          list,
          total,
        }
      }
    } = res
    return {
      list,
      total,
    }
  })
}
const AllFeedback = () => {
  const { tableProps } = useAntdTable(getTableData)
  const columns = Columns()
  return (
    <div className="h-full flex flex-col gap-[20px] items-center pt-[20px]">
      <h2>反馈列表</h2>
      <RTable columns={columns} tableProps={tableProps} rowKey="id" />
    </div>
  )
}

export default AllFeedback