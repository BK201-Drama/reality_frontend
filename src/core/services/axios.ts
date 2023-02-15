import { message } from 'antd'
import originAxios from 'axios'

// 创建请求实例
const instance = originAxios.create({
    baseURL: 'http://127.0.0.1',
    timeout: 30000,
})

// 
export const post = (url: string, data: any) => {
    return new Promise((resolve, reject) => {
        instance?.({
            method: 'post',
            url,
            data,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            validateStatus: () => true
        })
        .then(res => resolve(res))
        .catch(err => {
            message.error("请求异常")
            reject(err)
        })
        .finally(() => {
            // TODO: 添加加载spin
        })
    })
}