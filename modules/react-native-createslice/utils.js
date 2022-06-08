import EncryptedStorage from "react-native-encrypted-storage";

export const setStore = async (key, value) => {
  try {
    return await EncryptedStorage.setItem(key, value);
  } catch (error) {}
};

export const getStore = async (key) => {
  try {
    return await EncryptedStorage.getItem(key);
  } catch (error) {}
};
