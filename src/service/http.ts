import axios from 'axios';
import store from "../store";
import { callErrorToast, callSuccessToast } from "../store/slice/requestMessageHandle.slice";

const http = axios.create({
    // @ts-ignore
    baseURL: BASE_URL_AUTHENTICATION
})

//disable until loading
http.interceptors.request.use((req) => {
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true
    })
    return req
})

http.interceptors.response.use((response) => {
    if (response.data.token) {
        store.dispatch(callSuccessToast("ورود با موفقیت انجام شد"))
    }
    if (response.data.message) {
        store.dispatch(callSuccessToast(response.data.message))
    }
    document.querySelectorAll('button').forEach(button => {
        button.disabled = false
    })
    return response
}, err => {
    store.dispatch(callErrorToast(err.response.data.message))
    document.querySelectorAll('button').forEach(button => {
        button.disabled = false
    })
})


export default {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
}