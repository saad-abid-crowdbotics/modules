import { ScrollView, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { OptionsContext, GlobalOptionsContext } from "@options";
import { PAYMENT_DATA, PRODUCT_DATA } from "../options";
import Button from "../components/Button";
const Home = (props) => {
  const options = useContext(OptionsContext);
  const { styles } = options;
  const onPress = () => {
    props.navigation.navigate("sellers");
  };
  const Item = ({ title, email }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
  return (
		<ScrollView>

			<View style={styles.bottomContainer}>
				<View style={styles.walletHead}>
					<Text style={styles.headText}>Payments</Text>
				</View>
        <FlatList
        data={PAYMENT_DATA}
        renderItem={({ item }) => (<Item title={item.title} email={item.email}/>)}
        keyExtractor={item => item.id}
      />
      </View>
				<View style={styles.buttonContainer}>
					<Button onPress={onPress}>Sellers</Button>
				</View>
			</ScrollView>
  );
};

export default Home;
