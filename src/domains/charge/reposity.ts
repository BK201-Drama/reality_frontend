import { post } from "../../core/services/axios";

export const recharge = (params: any) => post('/user/charge', params)

export const visCharges = (params: any) => post('/user/virtualExpend', params)