const auth = {
    authStartScreen: "AuthStartScreen",
    loginScreen: "LoginScreen",
    registerScreen: "RegisterScreen",
}

const global = {
    userProfileScreen: "UserProfileScreen",
    chatScreen: "ChatScreen",
    cameraScreen: "CameraScreen",
    imageFullScreen: "ImageFullScreen",
    groupScreen: "GroupScreen",
    groupProfileScreen: "GroupProfileScreen",
    addUserGroupScreen: "AddUserGroupScreen",
    changeNameGroupScreen: "ChangeNameGroupScreen",
}

// Esto es un tab
const chats = {
    root: "ChatsRoot",
    chatsScreen: "ChatsScreen",
    createChatScreen: "CreateChatScreen",
}

// Esto es un tab
const groups = {
    root: "GroupsRoot",
    groupsScreen: "GroupsScreen",
    createGroupScreen: "CreateGroupScreen",
}

// Esto es un tab
const settings = {
    root: "SettingsRoot",
    settingsScreen: "SettingsScreen",
    changeFirstNameScreen: "ChangeFirstNameScreen",
    changeLastNameScreen: "ChangeLastNameScreen",
}


export const screens = {
    auth,
    global,
    tab: {
        root: "BottomTabRoot",
        chats,
        groups,
        settings,
    }
}