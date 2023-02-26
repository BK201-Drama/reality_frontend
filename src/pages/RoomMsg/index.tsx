import { useAntdTable } from "ahooks"
import { getAllRoomData } from "../../domains/room/reposity"
import RTable from "../../shared/RTable"
import getTableData from "../../shared/utils/tableApi"
import Columns from "./column.config"

const RoomMsg = () => {
  const { tableProps } = useAntdTable(getTableData(getAllRoomData))
  return (
    <div className="bg-[#fff] m-[20px] p-[15px] flex flex-col gap-[10px] rounded-[8px]">
      <h2>房间信息</h2>
      <div className="flex gap-[5px] flex-col justify-center items-center">
        <RTable columns={Columns()} tableProps={tableProps} />  
      </div>
    </div>
  )
}

export default RoomMsg