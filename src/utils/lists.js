

export const getFullNameUser = (user) => {
    if (!user) return "...";
    return `${user.firstname || ""} ${user.lastname || ""}`.trim() || "...";
}

export const getDisplayName = (user) => {
    if (!user) return "";

    const firstName = user.firstname || user.email.substring(0, 2).toUpperCase();
    const lastName = user.lastname || "";

    return `${firstName} ${lastName}`.trim();
}