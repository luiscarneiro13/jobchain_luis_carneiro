import AsyncStorage from "@react-native-async-storage/async-storage"
import { ENV } from "../utils"
import { postDB } from "./global"

export class Auth {

    async register(email, password) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`
            const data = { email, password }
            const headers = { "Content-Type": "application/json" }

            const response = await postDB(url, data, headers)
            const result = await response?.data

            if (response.status !== 201) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async login(email, password, expoPushToken) {

        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`
            const data = { email, password, expo_token: expoPushToken }
            const headers = { "Content-Type": "application/json" }
            const response = await postDB({ url, data, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async refreshAccessToken(refreshToken) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REFRESH_ACCESS_TOKEN}`
            const data = { refreshToken }
            const headers = { "Content-Type": "application/json" }

            const response = await postDB({ url, data, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }
    }

    async setAccessToken(token) {
        await AsyncStorage.setItem(ENV.JWT.ACCESS, token)
    }

    async setRefreshToken(token) {
        await AsyncStorage.setItem(ENV.JWT.REFRESH, token)
    }

    async getAccessToken() {
        return await AsyncStorage.getItem(ENV.JWT.ACCESS)
    }

    async getRefreshToken() {
        return await AsyncStorage.getItem(ENV.JWT.REFRESH)
    }

    async removeTokens() {
        await AsyncStorage.removeItem(ENV.JWT.ACCESS)
        await AsyncStorage.removeItem(ENV.JWT.REFRESH)
    }

}