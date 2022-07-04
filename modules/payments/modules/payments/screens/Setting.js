import { Text, View, Switch } from "react-native";
import React, { useContext, useState } from "react";
import { OptionsContext } from "@options";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const Setting = ({ navigation }) => {
  const [percent, setPercent] = useState("");
  const options = useContext(OptionsContext);
  const { styles } = options;
  const [isEnabled, setIsEnabled] = useState(true);

  const trackingToggle = async () => {
    setIsEnabled(!isEnabled);
  };

  const handleNavigate = () => {
    navigation.navigate("Setting");
  };
  const handlePercentage = () => {
    console.log("Entered Percentage: ", percent);
  };
  return (
    <View style={styles.container1}>
      <View style={styles.header}>
        <Text style={styles.switchText} onPress={handleNavigate}>{"<"}</Text>
        <Text style={styles.heading}>Settings</Text>
        <Text />
      </View>
      <View style={styles.trackingContainer}>
        <Text>Is wallet connect</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#a5b0ff" }}
          thumbColor={isEnabled ? "#1549b2" : "#f4f3f4"}
          onValueChange={trackingToggle}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
      {isEnabled
        ? <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <Text style={styles.mr10}>Percentage</Text>
        <View style={styles.textInput}>
          <Input placeholder={"Enter"}
            value={percent}
            setPercent={setPercent} />
        </View>

        <View style={styles.buttonBottom}>
          <Button onPress={handlePercentage}>Save</Button>
        </View>
      </View>
        : <Text>{""}</Text>}

    </View>
  );
};

export default Setting;
