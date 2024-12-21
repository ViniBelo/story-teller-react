import { StyleSheet } from "react-native";

// App's styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    chatContainer: {
        flex: 1,
        marginBottom: 20,
    },
    aiMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#E0F7FA",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: "80%",
    },
    userMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#D1C4E9",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: "80%",
    },
    messageText: {
        fontSize: 16,
        color: "#000",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        marginRight: 10,
    },
    button: {
        backgroundColor: "#0A7EA4",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default styles;
