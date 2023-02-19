import { post } from '../../../core/services/axios'
export const returnType = (params: { loginName: string }) => post('http://localhost:8080/api/login/returnType', params)
export const loginValidation = (params: {
    id: number,
    userName: string;
    password: string;
}) => post('http://localhost:8080/api/login/loginValidation', params)