import { post } from "../../../core/services/axios";
import { IPage } from "../../../types/table.type";

export const feedBack = (params: { userId: number; feedback?: string }) => post('/user/feedback', params)

export const allFeedback = (params: { pageNum: number; pageSize: number }) => post('/manager/seeFeedback', params)