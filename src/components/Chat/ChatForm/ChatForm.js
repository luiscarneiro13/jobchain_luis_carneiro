import { View, Keyboard } from 'react-native'
import { styled } from "./ChatForm.styles"
import { IconButton, TextInput, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CustomTextInput from '../../Shared/CustomTextInput'
import { useEffect, useState } from 'react'
import { initialValues, validationSchema } from "./ChatForm.form"
import { useFormik } from 'formik'
import { ChatMessage } from '../../../api'
import { useAuth } from '../../../hooks'
import { SendMedia } from './SendMedia/SendMedia'

const chatMessageController = new ChatMessage()


export function ChatForm(props) {

    const theme = useTheme()
    const styles = styled()

    const { accessToken } = useAuth()
    const { chatId } = props


    const [keyBoardHeight, setKeyBoardHeight] = useState(0)

    useEffect(() => {

        const showKeyboard = Keyboard.addListener('keyboardDidShow', (event) => {
            const { endCoordinates } = event
            setKeyBoardHeight(endCoordinates.height + 14)
        })

        const hideKeyboard = Keyboard.addListener('keyboardDidHide', (event) => {
            setKeyBoardHeight(0)
        })

        return () => {
            showKeyboard.remove()
            hideKeyboard.remove()
        }

    }, [])

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validationOnChange: false,
        onSubmit: async (formValue) => {
            try {
                setKeyBoardHeight(0)
                Keyboard.dismiss()
                await chatMessageController.sendText(accessToken, chatId, formValue.message)
                formik.handleReset()
            } catch (error) {
                console.error("error", error)
            }
        }
    })

    return (
        <View style={[styles.content, { bottom: keyBoardHeight }]}>

            <SendMedia chatId={chatId} />

            <View style={[styles.inputContainer]}>
                <TextInput
                    placeholder="Enviar mensaje..."
                    style={[theme.input, styles.input, { paddingRight: 50 }]}
                    mode="outlined"
                    autoCapitalize="none"
                    outlineColor="#e7e7e7"
                    outlineStyle={{ borderRadius: 50 }}
                    onChangeText={(text) => formik.setFieldValue("message", text)}
                    onEditing={!formik.isSubmitting && formik.handleSubmit}
                    value={formik.values.message}
                />
                <IconButton
                    icon="send"
                    iconColor="#333"
                    style={styles.iconSend}
                    onPress={!formik.isSubmitting && formik.handleSubmit}
                />
            </View>
        </View>
    )
}