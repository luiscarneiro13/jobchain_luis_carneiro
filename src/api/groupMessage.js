import { ENV } from "../utils"
import { getDB, postDB } from "./global"

export class GroupMessage {

    async getTotal(token, groupId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_MESSAGE_TOTAL}/${groupId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async getLastMessage(token, groupId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_MESSAGE_LAST}/${groupId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async getAll(token, groupId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_MESSAGE}/${groupId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async sendText(token, groupId, message) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_MESSAGE}`;
            const headers = { "Content-Type": "application/json", Authoritation: `Bearer ${token}` }
            const data = { group_id: groupId, message }

            const response = await postDB({ url, data, headers })
            const result = await response?.data

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async sendImage(token, groupId, file) {

        try {

            const formData = new FormData();
            formData.append("group_id", groupId);
            formData.append("image", file);

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_MESSAGE_IMAGE}`;
            const headers = { "Accept": "*/*", "Content-Type": "multipart/form-data", Authoritation: `Bearer ${token}` }

            const response = await postDB({ url, data: formData, headers })
            const result = await response?.data
            if (response.status !== 201) throw result

            return result

        } catch (error) {
            throw error
        }

    }
}