import { storyGenerator } from "@/services/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';

export default function Index() {
  const [informations, setInformations] = useState("");
  const [history, setHistory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchHistory = async () => {
    if (informations.length <= 5) {
      alert("Please give more informations to tell the story...");
      return;
    }

    setIsLoading(true);
    setInformations("");
    setHistory("");

    try {
      const result = await storyGenerator(informations);
      setHistory(result);
    } catch (err) {
      alert("An error occurred while searching the history. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Storyteller</Text>
      <Text style={styles.subtitle}>Your studies journey starts here.</Text>
      <TextInput
        onChangeText={setInformations}
        value={informations}
        style={styles.input}
        placeholder="Informations to search the history..."
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={searchHistory}>
        <Text style={styles.buttonText}>Search history</Text>
      </TouchableOpacity>
      {
        history && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>Your story is done:</Text>
            <Text style={styles.cardText}>{history}</Text>
          </MotiView>
        )
      }
    </View>
  );
}
