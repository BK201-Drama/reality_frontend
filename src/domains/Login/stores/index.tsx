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

    setUserMessage = ({
        userName,
        userBalance,
        userRealName,
        userPassword,
        id,
    }: {
        userName: string;
        userBalance: number;
        userRealName: string;
        userPassword?: string,
        id: number;
    }) => {
        this.userName = userName
        this.userBalance = userBalance
        this.userRealName = userRealName
        this.id = id
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