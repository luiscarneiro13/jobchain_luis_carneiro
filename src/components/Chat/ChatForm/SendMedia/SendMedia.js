import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from "./SendMedia.styles"
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Button, IconButton } from 'react-native-paper';
import { GalleryOption, CameraOption } from './options';
import { useAuth } from '../../../../hooks';


export function SendMedia(props) {

    const { chatId } = props
    const { accessToken } = useAuth()

    const [show, setShow] = useState(false);

    const onOpenClose = () => setShow((prevState) => !prevState)

    return (
        <>
            <View style={styles.container}>

                <TouchableOpacity onPress={onOpenClose}>
                    <IconButton icon="plus" style={{ marginLeft: -15, marginRight: -15, paddingTop: 10 }} />
                </TouchableOpacity>

                <Modal
                    isVisible={show}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackdropPress={onOpenClose}
                    style={styles.modal}
                >
                    <View style={styles.modalContent}>

                        <Text style={styles.modalTitle}>Opciones</Text>

                        <View style={{ marginBottom:20 }}>
                            <CameraOption onClose={onOpenClose} chatId={chatId} accessToken={accessToken} />
                        </View>

                        <GalleryOption onClose={onOpenClose} chatId={chatId} accessToken={accessToken} />

                        <TouchableOpacity style={styles.closeButton} onPress={onOpenClose}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal >
            </View >
        </>
    )
}