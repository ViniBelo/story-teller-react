import { historyFetcher } from "@/services/generator";
import styles from "@/styles";
import { useState } from "react";
import { View } from "react-native";
import FormField from "@/components/form";
import Title from "@/components/title";
import Messages, { IMessage } from "@/components/messages";

export default function Index() {
  const [informations, setInformations] = useState("");
  const [chat, setChat] = useState(Array<IMessage>());
  const [isLoading, setIsLoading] = useState(false);

  // Simple history search function, that send user input to the AI
  const sendMessage = async () => {
    // Validation to avoid empty input
    if (informations.trim().length === 0) {
      alert("Please enter some information to search on history.");
      return;
    }

    // Prepare the user's message to be sent to the AI
    const userMessage = { sender: "user", text: informations };

    // Add the user's message to the chat history and clear the input field
    setChat((prevChat) => [...prevChat, userMessage]);
    setIsLoading(true);
    setInformations("");

    // Fetch the AI's response based on the user's input and add it to the chat history
    try {
      const result = await historyFetcher(informations);
      const aiMessage = { sender: "ai", text: result };
      setChat((prevChat) => [...prevChat, aiMessage]);
    } catch (err) {
      alert("An error occurred while generating the story. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Render the app's main screen with the chat history, form for user input, and the messages component
  return (
    <View style={styles.container}>
      <Title title="Chat with AI to leran history!"></Title>

      <Messages chat={chat}></Messages>

      <FormField
        informations={informations}
        setInformations={setInformations}
        onPress={sendMessage}
        isLoading={isLoading}
      />
    </View>
  );
}
