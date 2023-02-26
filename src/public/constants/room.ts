export enum STATUS {
    notBook = 1,
    booked = 2,
} 
export const ROOM_STATUS = {
    [STATUS.notBook]: "未预订",
    [STATUS.booked]: "已预订",
}