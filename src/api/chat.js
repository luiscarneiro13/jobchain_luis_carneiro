import { ENV } from "../utils"
import { deleteDB, getDB, postDB } from "./global"

export class Chat {

    async create(token, participantOne, participantTwo) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}`;
            const headers = { Authoritation: `Bearer ${token}` }
            const data = {
                participant_id_one: participantOne,
                participant_id_two: participantTwo
            }

            const response = await postDB({ url, data, headers })
            const result = await response?.data ?? {}

            if (response.status !== 200 && response.status !== 201) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async getAll(token) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async remove(token, chatId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}/${chatId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await deleteDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async obtain(token, chatId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}/${chatId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

}