import { makeAutoObservable } from "mobx"

const NUMBER_ZERO = 0

class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    id: number = NUMBER_ZERO
    userName?: string = ''
    userBalance?: number = NUMBER_ZERO
    userRealName?: string = ''
    userPassword?: string = ''

    roomList?: any[] = []

    setUserMessage = ({
        userName,
        userBalance,
        userRealName,
        id,
        managerName,
        roomList,
    }: {
        userName: string;
        userBalance: number;
        userRealName: string;
        id: number;
        managerName?: string;
        roomList?: any[],
    }) => {
        this.userName = userName ?? managerName
        this.userBalance = userBalance
        this.userRealName = userRealName
        this.id = id
        this.roomList = roomList
    }

    resetUserMessage = () => {
        this.userName = ''
        this.id = NUMBER_ZERO
        this.userBalance = NUMBER_ZERO
        this.userRealName = ''
    }

}

export const userStore = new UserStore()
export const userStoreTag = 'userStore'