import styles from "@/styles"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

// Interface for FormField component properties
interface IFormField {
    informations: string;
    setInformations: (text: string) => void;
    onPress: () => void;
    isLoading?: boolean;
};

// Component responsible for taking user input and send to the method recieved from onPress property
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
    );
};

export default FormField;