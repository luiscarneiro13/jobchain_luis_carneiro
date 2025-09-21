import { ENV } from "../utils"
import { getDB, patchDB } from "./global"

export class User {

    async getMe(accessToken) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`
            const headers = { Authoritation: `Bearer ${accessToken}` }

            const response = await getDB({ url, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async updateUser(accessToken, userData) {
        try {
            const formData = new FormData();
            Object.keys(userData).forEach((key) => {
                if (userData[key] && userData[key].uri) {
                    formData.append(key, userData[key], userData[key].name);
                } else {
                    formData.append(key, userData[key]);
                }
            });

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`;
            const headers = { "Accept": "*/*", "Content-Type": "multipart/form-data", Authoritation: `Bearer ${accessToken}` }

            const response = await patchDB({ url, data: formData, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error;
        }
    }

    async getAll(accessToken) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}`
            const headers = { Authoritation: `Bearer ${accessToken}` }

            const response = await getDB({ url, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            console.error(error)
        }

    }

    async getUser(accessToken, userId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}/${userId}`
            const headers = { Authoritation: `Bearer ${accessToken}` }

            const response = await getDB({ url, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            console.error(error)
        }

    }

    async getUsersExceptParticipantsGroup(accessToken, groupId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_EXCEPT_PARTIIPANTS_GROUP}/${groupId}`
            const headers = { Authoritation: `Bearer ${accessToken}` }

            const response = await getDB({ url, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            console.error(error)
        }

    }

}