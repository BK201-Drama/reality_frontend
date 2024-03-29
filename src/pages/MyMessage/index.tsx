import { useAntdTable } from "ahooks"
import { useStores } from "../../core/stores"
import { visCharges } from "../../domains/charge/reposity"
import { getUserInfo } from "../../domains/Login/reposity"
import { userStore } from "../../domains/Login/stores"
import { prolong } from "../../domains/room/reposity"
import UpdateModal from "../../features/UpdateModal"
import RTable from "../../shared/RTable"
import { IPage } from "../../types/table.type"
import columns from "./column.config"

const Detail = () => {
  const { userStore: {
    id, userName, userBalance, userRealName, setUserMessage
  } } = useStores()
  const getTableData = (pages: IPage) => {
    const params = {
      pageNum: pages.current,
      pageSize: pages.pageSize,
      id,
    }
    return getUserInfo(params).then((res: any) => {
      const {
        data: {
          data: {
            id,
            userName,
            userBalance,
            userRealName,
            roomPageInfo: {
              list,
              total,
            }
          }
        }
      } = res
      setUserMessage({
        id,
        userName,
        userBalance,
        userRealName,
        roomList: list,
      })
      return {
        list,
        total,
      }
    })
  }
  const { tableProps, refresh } = useAntdTable(getTableData)

  const visCharge = (id: number) => {
    visCharges({
      userId: userStore.id,
      roomId: id,
      bill: 50,
    }).then((e) => {
      refresh()
    })
  }

  const prolongRoom = (id: number, daysNum: number) => {
    return prolong({
      userId: userStore.id,
      roomId: id,
      daysNum,
    })
  }

  return (
    <>
      <div className="bg-[#fff] m-[20px] p-[15px] rounded-[8px]">
        <h2>个人信息</h2>
        <div className="pt-[20px]">
          <div>
            账号：{userName}
          </div>
          <UpdateModal id={id} render={(click) => {
            return <a className="text-[blue]" onClick={click}>修改密码</a>
          }} onOk={refresh} />
          <div>余额：{userBalance}</div>
          <div>姓名：{userRealName}</div>
        </div>
      </div>
      <div className="bg-[#fff] m-[20px] p-[15px] flex flex-col gap-[10px] rounded-[8px]">
        <h2>我的租房</h2>
        <RTable columns={columns(visCharge, prolongRoom)} tableProps={tableProps} rowKey="id" />
      </div>
    </>
  )
}

export default Detail