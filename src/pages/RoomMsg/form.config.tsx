import { Input, Select } from "antd"
import { ROOM_STATUS } from "../../public/constants/room"
const options = Object.entries(ROOM_STATUS).map(item => {
  const [value, label] = item
  return {
    label, value: Number(value)
  }
})
const formConfig = [
  {
    name: 'roomNumber',
    element: <Input />,
    label: '房间号',
  }, {
    name: 'roomStatus',
    element: <Select options={options} allowClear />,
    label: '房间号',
  }
]

export default formConfig
