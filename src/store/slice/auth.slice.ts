import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AuthStoreState = {
    token: string | undefined,
    companyId: string | undefined,
    permissions: string[]
}


const slice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token"),
        companyId: "",
        permissions: []
    } as AuthStoreState,
    reducers: {
        //todo separate login and companyLogin
        login: (store, action: PayloadAction<string>) => {
            store.token = action.payload
            // todo implement storage service
            localStorage.setItem("token", action.payload)
        },
        logout: (store, action: PayloadAction) => {
            store.token = undefined;
            localStorage.removeItem("token")
        },
        setPermissions: (store, action: PayloadAction<string[]>) => {
            store.permissions = action.payload;
        },
        setCompanyId: (store, action: PayloadAction<string>) => {
            store.companyId = action.payload;
        }
    },
})

export default slice.reducer;
export const {logout, login, setPermissions, setCompanyId} = slice.actions
