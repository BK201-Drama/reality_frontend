import { IPage } from "../../types/table.type"

const getTableData = (myApi: any) => (pages: IPage, formData: any) => {
  const params = {
    pageNum: pages.current,
    pageSize: pages.pageSize,
    ...formData,
  }
  return myApi(params).then((res: any) => {
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

export default getTableData