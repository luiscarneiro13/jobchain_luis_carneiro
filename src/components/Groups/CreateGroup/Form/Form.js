import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'
import { Avatar, Button, IconButton, useTheme } from 'react-native-paper'
import { styles } from "./Form.styles"
import CustomTextInput from '../../../Shared/CustomTextInput'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from "./Form.form"
import { AvatarGroup } from '../../../Shared/AvatarGroup'
import { useEffect } from 'react'
import * as ImagePicker from "expo-image-picker"
import { imageExpoFormat } from '../../../../utils'
import { Group } from "../../../../api"
import { useAuth } from '../../../../hooks'

const groupController = new Group()

export function Form(props) {

    const { usersIds } = props
    const { accessToken, user } = useAuth()

    const navigation = useNavigation()
    const theme = useTheme()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validationOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const { name, image } = formValue

                await groupController.create(
                    accessToken,
                    user._id,
                    usersIds,
                    name,
                    image
                )

                navigation.goBack()

            } catch (error) {
                console.error(error)
            }
        }
    })

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<IconButton icon="check-circle" iconColor="#63a47b" onPress={formik.handleSubmit} />)
        })
    }, [])

    const openGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
            const file = imageExpoFormat(result.assets[0].uri)
            formik.setFieldValue("image", file)
        }
    }


    return (
        <>
            <View style={styles.content}>
                <Pressable onPress={openGallery}>
                    {
                        formik.values.image ? (
                            <Avatar.Image
                                source={{ uri: formik.values.image.uri || null }}
                                size={150}
                                style={[styles.image, formik.errors.image && styles.imageError]}
                            />
                        ) : (

                            <Avatar.Icon
                                size={120}
                                icon="camera"
                                color="#FFF"
                                style={[styles.image, formik.errors.image && styles.imageError]}
                            />
                        )
                    }
                </Pressable>

            </View>
            <View style={theme.form}>

                <CustomTextInput
                    style={[theme.input]}
                    error={formik.errors.name}
                    label="Nombre del grupo"
                    mode="outlined"
                    value={formik.values.name}
                    onChangeText={(text) => formik.setFieldValue("name", text)}
                    autoCapitalize="none"
                />


            </View>
        </>
    )
}