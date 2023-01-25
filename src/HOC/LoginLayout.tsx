import React from 'react';
import AuthService from "../service/auth/auth.service";
import {loginSchema, loginSchemaInitialValues} from "../validators/auth/login.schema";
import {useValidator} from "react-joi"

export interface loginProps {
    HandleChange: (value: any) => void;
    HandleSubmit: (value: any) => void;
    state: any;
    setExplicitField: any;
}

const LoginLayout = (OldComponent: any) => {

    const Layout = (props: any) => {
        // @ts-ignore
        const {state, setData, setExplicitField, validate} = useValidator({
            initialData: loginSchemaInitialValues,
            schema: loginSchema,
            validationOptions: {
                abortEarly: true
            },
        })

        const HandleChange = (e: any) => {
            // react < v17
            e.persist()

            setData((old: any) => ({
                ...old,
                [e.target.name]: e.target.value,
            }))
        }

        const HandleSubmit = async (e: any): Promise<void> => {
            e.preventDefault();
            await validate();
            if (!state.$all_source_errors.length) {
                AuthService.login(state.$data).then((res) => {
                    if (res.data.roleName === "Company")
                        //@ts-ignore
                        window.location.href = `${COMPANY_URL}/#/token/${res.data.token}`;
                    else
                        //@ts-ignore
                        window.location.href = `${NAVIGATOR_URL}/#/token/${res.data.token}`;
                })
            }
        }

        return <OldComponent state={state}
                             setExplicitField={setExplicitField}
                             HandleChange={HandleChange}
                             HandleSubmit={HandleSubmit}
                             {...props}/>
    };
    return Layout
}


export default LoginLayout;