import styles from "@/styles"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

interface IFormField {
    informations: string;
    setInformations: (text: string) => void;
    onPress: () => void;
    isLoading?: boolean;
};

const FormField = (props: IFormField) => {
    const { informations, setInformations, onPress, isLoading } = props
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Type your instructions here..."
                value={informations}
                onChangeText={setInformations}
            />
            <TouchableOpacity style={styles.button} onPress={onPress} disabled={isLoading}>
                <Text style={styles.buttonText}>{isLoading ? "Sending..." : "Send"}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default FormField;