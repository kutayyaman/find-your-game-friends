import { createStore } from "redux";
import authReducer from "./authReducer";
import { AsyncStorage } from "react-native";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./authActions";
import { useState } from "react";
import * as SecureStoreNew from 'expo-secure-store';


async function save(key, value) {
  await SecureStoreNew.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStoreNew.getItemAsync(key);
  if (result) {
    return result;
  } else {
  }
}

const configureStore = () => {
  const [stateInLocalStorage, setStateInLocalStorage] = useState({
    isLoggedIn: false,
    mail: undefined,
    password: undefined,
    image: undefined,
  });

  getValueFor("auth").then((authData)=>{
    if (authData) {
      try {
        const parsedAuthData = JSON.parse(authData);
        if (stateInLocalStorage.isLoggedIn != parsedAuthData.isLoggedIn) {
          //state should execute one time because if i dont use this if statement it will be execute infinitly
          setStateInLocalStorage(parsedAuthData);
        }
      } catch (error) {}
    }
  })

  const store = createStore(authReducer, stateInLocalStorage);

  store.subscribe(async () => {
    try {
      await save("auth",store.getState())
    } catch (error) {
      // Error saving data
    }
  });

  return store;
};

export default configureStore;
