const SERVER_IP_PROD = "vemitienda.com.ve"
const SERVER_IP_LOCAL = "192.168.16.194:3977"

const PROTOCOL_PROD = "https"
const PROTOCOL_LOCAL = "http"

let SERVER = null
let PROTOCOL = null

const ENVIRONMENT = 'prod'

if (ENVIRONMENT === 'local') {
    SERVER = SERVER_IP_LOCAL
    PROTOCOL = PROTOCOL_LOCAL
} else {
    SERVER = SERVER_IP_PROD
    PROTOCOL = PROTOCOL_PROD
}

// Para producción solo se cambia donde esté SERVER_IP por SERVER_IP_PROD

export const ENV = {
    SERVER_IP: SERVER,
    BASE_PATH: `${PROTOCOL}://${SERVER}/api/miwisachat/uploads`,
    API_URL: `${PROTOCOL}://${SERVER}/api/miwisachat`,
    SOCKET_URL: `${PROTOCOL}://${SERVER}`,
    ENDPOINTS: {
        AUTH: {
            REGISTER: "auth/register",
            LOGIN: "auth/login",
            REFRESH_ACCESS_TOKEN: "auth/refresh_access_token"
        },
        ME: "user/me",
        USER: "user",
        USER_EXCEPT_PARTIIPANTS_GROUP: "users_except_participants_group",
        CHAT: "chat",
        CHAT_MESSAGE: "chat/message",
        CHAT_MESSAGE_IMAGE: "chat/message/image",
        CHAT_MESSAGE_MARK_AS_READ: "chat/message/markAllAsRead",
        CHAT_MESSAGE_LAST: "chat/message/last",
        CHAT_MESSAGE_TOTAL: "chat/message/total",
        GROUP: "group",
        GROUP_BAN: "group/ban",
        GROUP_EXIT: "group/exit",
        GROUP_ADD_PARTICIPANTS: "group/add_participants",
        GROUP_MESSAGE: "group/message",
        GROUP_MESSAGE_IMAGE: "group/message/image",
        GROUP_MESSAGE_LAST: "group/message/last",
        GROUP_MESSAGE_TOTAL: "group/message/total",
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh"
    },
    ACTIVE_CHAT_ID: "active_chat_id",
    ACTIVE_GROUP_ID: "active_group_id",
}