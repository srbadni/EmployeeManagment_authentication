import {TokenData} from "../Models/AuthModels/TokenData";

const PROFILE_KEY = "profile";
const TOKEN_KEY = "token";

export default class StorageService {

    // static setProfile(profile: TokenData) {
    //     localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
    // }

    static setToken(token: TokenData) {
        localStorage.setItem(TOKEN_KEY, token.token)
    }

}
