import { View, Text } from 'react-native'
import { styles } from "./Search.styles"
import { TextInput, Button } from "react-native-paper"
import { createFilter } from "react-search-input"
import { create } from 'yup/lib/Reference'
import CustomTextInput from '../../Shared/CustomTextInput'

const KEYS_TO_FILTERS = [
    "email",
    "firstname",
    "lastname",
    "name"
]

export function Search(props) {

    const { data, setData } = props

    const onSearch = (text) => {
        const resultSearch = data.filter(createFilter(text, KEYS_TO_FILTERS))
        setData(resultSearch)
    }

    return (
        <CustomTextInput
            label="Buscar"
            autoCapitalize="none"
            mode="outlined"
            style={styles.input}
            onChangeText={onSearch}
            outlineColor="#e7e7e7"
            outlineStyle={{ borderRadius: 10 }}
        />
    )
}