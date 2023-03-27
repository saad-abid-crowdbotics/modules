import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  },
  outerContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d6dce4"
  },
  innerContainer: {
    width: "100%",
    height: "100%"
  },
  topContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(51, 104, 123, 1)"
  },
  textTopContainer: {
    color: "rgba(255, 255, 255, 1)"
  },
  membersOnlineContainer: {
    width: "100%",
    flexDirection: "row"
  },
  member: {
    paddingRight: 4,
    paddingVertical: 4,
    color: "rgba(255, 255, 255, 1)"
  },
  friendlyNameEdit: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4
    // height: 100
  },
  messageScrollContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#d6dce4"
  },
  messageContainerThem: {
    flexDirection: "row",
    marginTop: 12,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  messageContainerMe: {
    flexDirection: "row",
    marginTop: 12,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  messageContent: {
    flex: 1
  },
  messageSender: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 1)"
  },
  messageText: {
    fontSize: 14,
    fontWeight: "700",
    color: "rgba(0, 0, 0, 1)"
  },
  messageTimetoken: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 1)"
  },
  timetokenContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  avatarThem: {
    width: 38,
    height: 38,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(51, 104, 123, 1)"
  },
  avatarMe: {
    width: 38,
    height: 38,
    borderRadius: 50,
    overflow: "hidden",
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(151, 204, 223, 1)"
  },
  avatarNone: {
    display: "none"
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    height: 80,
    backgroundColor: "#d6dce4"
  },
  textInput: {
    flex: 1,
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 1)",
    borderRadius: 4,
    padding: 16,
    elevation: 2
  },
  textInputFriendlyName: {
    flex: 1,
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 1)",
    borderRadius: 8,
    padding: 8,
    elevation: 2
  },
  saveFriendlyName: {
    position: "absolute",
    right: 32
  },
  submitButton: {
    position: "absolute",
    right: 32
  },
  logo: {
    width: "50%",
    height: undefined,
    aspectRatio: 0.9
  }
});

const PUBNUB_PUB = "pub-c-09dc7d68-298a-4dd5-9623-7cc67ddaa937";
const PUBNUB_SUB = "sub-c-253106be-97d7-11ec-b249-a68c05a281ab";
const FILESTACK_KEY = "AAPKloXQDQy61KlIW09M6z";

const user = {
  name: "Me",
  user_id: "03436599622",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg"
};

export const users = [
  { name: "Amir", user_id: "03436599622" },
  { name: "Abdul Gafoor", user_id: "03069790566" },
  { name: "Imtiaz", user_id: "03146862263" }
];

export default {
  PUBNUB_SUB: PUBNUB_SUB,
  PUBNUB_PUB: PUBNUB_PUB,
  ENDPOINT: "https://www.filestackapi.com/api",
  FILESTACK_KEY: FILESTACK_KEY,
  user: user,
  users: users,
  styles: styles
};
