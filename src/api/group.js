import { ENV } from "../utils"
import { getDB, patchDB, postDB } from "./global"

export class Group {

    async create(token, creatorId, usersIds, name, image) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP}`;
            const headers = { "Accept": "*/*", "Content-Type": "multipart/form-data", Authoritation: `Bearer ${token}` }

            const participants = [...usersIds, creatorId]

            const formData = new FormData()
            formData.append("name", name)
            formData.append("image", {
                uri: image.uri,
                name: image.name,
                type: image.type
            })
            formData.append("participants", JSON.stringify(participants))

            const response = await postDB({ url, data: formData, headers })
            const result = await response?.data
            if (response.status !== 201) throw result

            return result
        } catch (error) {
            throw error
        }

    }

    async getAll(token) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result


        } catch (error) {
            throw error
        }

    }

    async obtain(token, groupId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP}/${groupId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const response = await getDB({ url, headers })
            const result = await response?.data ?? []

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async exit(token, groupId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_EXIT}/${groupId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const data = {
                participant_id_one: participantOne,
                participant_id_two: participantTwo
            }

            const response = await patchDB({ url, data, headers })
            const result = await response?.data ?? {}

            if (response.status !== 200) throw result

            return result
        } catch (error) {
            throw error
        }

    }

    async update(token, groupId, data) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP}/${groupId}`;
            const headers = { "Accept": "*/*", "Content-Type": "multipart/form-data", Authoritation: `Bearer ${token}` }

            const formData = new FormData()

            if (data.name) formData.append("name", data.name)

            if (data.file) {
                formData.append("image", data.file)
            }

            const response = await patchDB({ url, data: formData, headers })
            const result = await response?.data ?? {}

            if (response.status !== 200) throw result

            return result
        } catch (error) {
            throw error
        }

    }

    async ban(token, groupId, participantId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_BAN}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const data = {
                group_id: groupId,
                user_id: participantId
            }

            const response = await patchDB({ url, data, headers })
            const result = await response?.data ?? {}

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }

    }

    async addParticipants(token, groupId, participanstId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GROUP_ADD_PARTICIPANTS}/${groupId}`;
            const headers = { Authoritation: `Bearer ${token}` }

            const data = { users_id: participanstId }

            const response = await patchDB({ url, data, headers })
            const result = await response?.data ?? {}

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }

    }
}