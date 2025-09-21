import { useState } from "react"
import { Text } from 'react-native'
import { styles } from './AlertConfirm.styles'
import { Button, Dialog, Portal, useTheme } from 'react-native-paper'

export function AlertConfirm(props) {

    const { show, onClose, title, message, textConfirm, onConfirm, isDanger } = props

    const [loading, setLoading] = useState(false)

    const theme = useTheme()

    const onConfirmWrapper = () => {
        setLoading(true)
        onConfirm()
    }

    return (
        <Portal>
            <Dialog visible={show} onDismiss={onClose}>
                <Dialog.Title>{title || ""}</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">{message}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button textColor="#333" onPress={onClose}>Cancelar</Button>
                    <Button
                        textColor={isDanger ? theme.colors.errors : theme.colors.primary}
                        onPress={onConfirmWrapper}
                        loading={loading}
                    >
                        {textConfirm}
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}