import { useAntdTable } from "ahooks"
import { Form } from "antd"
import { getAllRoomData } from "../../domains/room/reposity"
import RFormHeader from "../../shared/RFormHeader"
import RTable from "../../shared/RTable"
import getTableData from "../../shared/utils/tableApi"
import Columns from "./column.config"
import formConfig from "./form.config"

const RoomMsg = () => {
  const [formInstance] = Form.useForm()
  const { tableProps, search } = useAntdTable(getTableData(getAllRoomData), {
    form: formInstance
  })
  const { submit, reset } = search
  return (
    <div className="bg-[#fff] m-[20px] p-[15px] flex flex-col gap-[10px] rounded-[8px]">
      <h2>房间信息</h2>
      <RFormHeader formInstance={formInstance} formConfig={formConfig} submit={submit} reset={reset} />
      <div className="flex gap-[5px] flex-col justify-center items-center">
        <RTable columns={Columns()} tableProps={tableProps} rowKey="id" />  
      </div>
    </div>
  )
}

export default RoomMsg