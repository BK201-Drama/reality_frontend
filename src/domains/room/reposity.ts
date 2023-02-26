import { post } from "../../core/services/axios";

export const getAllRoomData = (params: any) => post('/manager/getAllRoomData', params)