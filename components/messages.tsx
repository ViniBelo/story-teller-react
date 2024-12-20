import styles from "@/styles";
import { MotiView } from "moti";
import { Text, ScrollView } from "react-native";

interface IMessage {
    sender: string;
    text: string;
}

interface IMessages {
    chat: Array<IMessage>;
}

const Messages = (props: IMessages) => {
    const chat = props.chat
    return (
        <ScrollView style={styles.chatContainer} contentContainerStyle={{ paddingBottom: 20 }}>
            {chat.map((message, index) => (
                <MotiView
                    key={index}
                    style={message.sender === "ai" ? styles.aiMessage : styles.userMessage}
                    from={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    <Text style={styles.messageText}>{message.text}</Text>
                </MotiView>
            ))}
        </ScrollView>
    );
};

export default Messages;