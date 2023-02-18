import { ADMIN_MENU, USER_MENU } from "../../public/constants/menu";
import { RoleType } from "../../public/constants/role";

export const REAL_MENU = {
    [RoleType.user]: ADMIN_MENU,
    [RoleType.admin]: USER_MENU,
}