type userBody = { name: string, email: string }

import { createContext } from "react";

const UserContext = createContext<userBody>({ name: '', email: '' })

export default UserContext