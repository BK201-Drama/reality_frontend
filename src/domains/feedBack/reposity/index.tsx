import { post } from "../../../core/services/axios";

export const feedBack = (params: { userId: number; feedback: string }) => post('/user/feedback', params)