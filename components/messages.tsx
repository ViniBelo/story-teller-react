import styles from "@/styles";
import { MotiView } from "moti";
import { Text, ScrollView } from "react-native";

// Interface for the messages in the chat, withe role/message
export interface IMessage {
    sender: string;
    text: string;
}

// Interface for the chat
interface IMessages {
    chat: Array<IMessage>;
}

// Messages component acts as the part of the chat that displays the messages
const Messages = (props: IMessages) => {
    const chat = props.chat
    return (
        <ScrollView style={styles.chatContainer} contentContainerStyle={{ paddingBottom: 20 }}>
            {/* Maps the messages, separate them into their roles and displays them */}
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