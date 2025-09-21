


export function shouldShowBlueCheck(message, user, isMe) {
    // Si falta información crítica, retorna blanco
    if (!message || !message.user || !message.readBy || !message.chat) return "#FFFFFF";

    // Si el mensaje no es mío, ocultamos el ícono
    if (!isMe) return "#FFFFFF";

    // Si el mensaje es mío, determinamos el otro participante
    const myId = String(user._id)
    const participantOne = (String(message.chat.participant_one?._id) || message.chat.participant_one);
    const participantTwo = (String(message.chat.participant_two?._id) || message.chat.participant_two);

    const otherUserId = myId === participantOne ? participantTwo : participantOne;

    // Verificamos si el otro usuario ya leyó el mensaje
    const readByOther = message.readBy.some(id => String(id) === otherUserId);

    return readByOther ? "#4fc3f7" : "#C1C1C1";
}