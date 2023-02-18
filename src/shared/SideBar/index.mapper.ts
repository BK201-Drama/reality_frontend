import { ADMIN_MENU, USER_MENU } from "../../public/constants/menu";
import { RoleType } from "../../public/constants/role";

export const REAL_MENU = {
    [RoleType.admin]: ADMIN_MENU,
    [RoleType.user]: USER_MENU,
}