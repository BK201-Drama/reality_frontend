import { IPage } from "../../types/table.type"

const getTableData = (myApi: any) => (pages: IPage) => {
    const params = {
        pageNum: pages.current,
        pageSize: pages.pageSize
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