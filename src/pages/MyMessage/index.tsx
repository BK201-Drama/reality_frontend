import { useAntdTable } from "ahooks"
import { Button } from "antd"
import { useStores } from "../../core/stores"
import { visCharges } from "../../domains/charge/reposity"
import { getUserInfo } from "../../domains/Login/reposity"
import { userStore } from "../../domains/Login/stores"
import UpdateModal from "../../features/UpdateModal"
import RTable from "../../shared/RTable"
import { IPage } from "../../types/table.type"
import columns from "./column.config"

const Detail = () => {
  const { userStore: {
    id, userName, userBalance, userRealName, userPassword, setUserMessage
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
            userPassword,
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
        userPassword,
        userBalance,
        userRealName,
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
        <RTable columns={columns(visCharge)} tableProps={tableProps} />
      </div>
    </>
  )
}

export default Detail