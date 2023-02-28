import { post } from "../../core/services/axios";

export const getAllRoomData = (params: any) => post('/manager/getAllRoomData', params)

export const prolong = (params: any) => post('/user/prolong', params)
