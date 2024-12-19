import { storyGenerator } from "@/services/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView, ScrollView } from 'moti';

export default function Index() {
  const [informations, setInformations] = useState("");
  const [chat, setChat] = useState(Array);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (informations.trim().length === 0) {
      alert("Please enter some information to search on history.");
      return;
    }

    const userMessage = { sender: "user", text: informations };
    setChat((prevChat) => [...prevChat, userMessage]);

    setIsLoading(true);
    setInformations("");

    try {
      const result = await storyGenerator(informations);
      const aiMessage = { sender: "ai", text: result };
      setChat((prevChat) => [...prevChat, aiMessage]);
    } catch (err) {
      alert("An error occurred while generating the story. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with AI to leran history!</Text>

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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your instructions here..."
          value={informations}
          onChangeText={setInformations}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage} disabled={isLoading}>
          <Text style={styles.buttonText}>{isLoading ? "Sending..." : "Send"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
