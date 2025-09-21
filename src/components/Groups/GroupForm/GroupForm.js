import { View, Keyboard } from 'react-native'
import { styles } from "./GroupForm.styles"
import { IconButton, TextInput, useTheme } from 'react-native-paper'
import CustomTextInput from '../../Shared/CustomTextInput'
import { useEffect, useState } from 'react'
import { initialValues, validationSchema } from "./GroupForm.form"
import { useFormik } from 'formik'
import { GroupMessage } from '../../../api'
import { useAuth } from '../../../hooks'
import { SendMedia } from './SendMedia'

const groupMessageController = new GroupMessage()


export function GroupForm(props) {

    const theme = useTheme()

    const { accessToken } = useAuth()
    const { groupId } = props


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
                await groupMessageController.sendText(accessToken, groupId, formValue.message)
                formik.handleReset()
            } catch (error) {
                console.error("error", error)
            }
        }
    })

    return (
        <View style={[styles.content, { bottom: keyBoardHeight }]}>

            <SendMedia groupId={groupId} />

            <View style={[styles.inputContainer]}>
                <TextInput
                    placeholder="Enviar mensaje..."
                    style={[theme.input, styles.input, { paddingRight: 30 }]}
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