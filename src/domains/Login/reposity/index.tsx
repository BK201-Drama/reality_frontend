import { post } from '../../../core/services/axios'
export const returnType = (params: { loginName: string }) => post('/login/returnType', params)
export const loginValidation = (params: {
    id: number,
    userName: string;
    password: string;
}) => post('/login/loginValidation', params)