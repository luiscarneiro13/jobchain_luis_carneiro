import { ENV } from "../utils"
import { getDB, postDB } from "./global"

export class ChatMessage {

    async getLastMessage(token, chatId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE_LAST}/${chatId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async getTotal(token, chatId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE_TOTAL}/${chatId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async getAll(token, chatId, page = 1, limit = 10) {

        try {

            // const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE}/${chatId}`;
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE}/${chatId}?page=${page}&limit=${limit}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async sendText(token, chatId, message) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE}`;
            const headers = { "Content-Type": "application/json", Authoritation: `Bearer ${token}` }
            const data = { chat_id: chatId, message }

            const response = await postDB({ url, data, headers })
            const result = await response?.data
            if (response.status !== 201) throw result

            return result
        } catch (error) {
            throw error
        }

    }

    async sendImage(token, chatId, file) {

        try {

            const formData = new FormData();
            formData.append("chat_id", chatId);
            formData.append("image", file);

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE_IMAGE}`;
            const headers = { "Accept": "*/*", "Content-Type": "multipart/form-data", Authoritation: `Bearer ${token}` }

            const response = await postDB({ url, data: formData, headers })
            const result = await response?.data
            if (response.status !== 201) throw result

            return result
        } catch (error) {
            throw error
        }

    }

    async markAllAsRead(token, chatId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE_MARK_AS_READ}/${chatId}`;
            const headers = { "Content-Type": "application/json", Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data
            if (response.status !== 201) throw result

            return result
        } catch (error) {
            throw error
        }

    }


}