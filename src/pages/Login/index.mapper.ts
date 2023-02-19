import { loginValidation, managerValidation } from "../../domains/Login/reposity"
import { RoleType } from "../../public/constants/role"

const APIMapper = {
    [RoleType.user]: loginValidation,
    [RoleType.admin]: managerValidation,
}

export default APIMapper