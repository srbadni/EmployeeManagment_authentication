import http from '../http';
import {LoginRequestBody} from "../../Models/AuthModels/login.model";
import {TokenData} from "../../Models/AuthModels/TokenData";

export default class AuthService {
    static login(body: LoginRequestBody) {
        return http.post<TokenData>("/auth/login", body)
    }
}
