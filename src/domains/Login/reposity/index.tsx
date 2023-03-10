import { post } from '../../../core/services/axios'
export const returnType = (params: { loginName: string }) => post('/login/returnType', params)
export const loginValidation = (params: {
    id: number,
    userName: string;
    password: string;
}) => post('/login/loginValidation', params)

export const managerValidation = (params: {
    id: number,
    managerName: string;
    managerPassword: string;
}) => post('/login/managerValidation', params)

export const regist = (params: {
    userName: string;
    userPassword:string;
    userRealName: string;
}) => post('/user/register', params)

export const updatePwd = (params: {
    id: number;
    newPassword: string;
}) => post('/user/updatePassword', params)

export const getUserInfo = (params: {
    id: number;
    pageNum: number;
    pageSize: number;
}) => post('/user/getUserInfo', params)

export const getAllUserInfo = (params: {
    pageNum: number;
    pageSize: number;
}) => post('/manager/getAllUserInfo', params)