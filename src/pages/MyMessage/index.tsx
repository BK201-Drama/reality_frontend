import { useAntdTable } from "ahooks"
import { useStores } from "../../core/stores"
import { getUserInfo } from "../../domains/Login/reposity"
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
  const { tableProps } = useAntdTable(getTableData)
  return (
    <>
      <div className="bg-[#fff] m-[20px] p-[15px]">
        <h2>个人信息</h2>
        <div className="pt-[20px]">
          <div>
            账号：{userName}
          </div>
          <div>密码：{userPassword}</div>
          <div>余额：{userBalance}</div>
          <div>姓名：{userRealName}</div>
        </div>
      </div>
      <div className="bg-[#fff] m-[20px] p-[15px] flex flex-col gap-[10px]">
        <h2>我的租房</h2>
        <RTable columns={columns} tableProps={tableProps} />
      </div>
    </>
  )
}

export default Detail