import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        padding: 20,
        alignItems: "center"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#000",
        padding: 16,
        fontSize: 18,
        borderRadius: 10,
        marginBottom: 20
    },
    button: {
        width: "90%",
        height: 50,
        backgroundColor: "#0A7EA4",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    },
    card: {
        width: "90%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    cardText: {
        fontSize: 16,
        lineHeight: 24
    }
});

export default styles;