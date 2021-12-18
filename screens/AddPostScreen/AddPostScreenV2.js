import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";
import { Paragraph } from "react-native-paper";
import ChooseOneDialog from "../../components/ChooseOneDialog";
import LoadPhotoDialog from "../../components/AddPostScreenV2Components/LoadPhotoDialog";

export default function AddPostScreenV2() {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraDialogRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      console.log("in take picture");
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        return photo;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {useCamera ? (
        <View>
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={{ flex: 9 }}></View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setUseCamera(false);
                }}
              >
                <Text style={styles.text}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={styles.text}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log("in take pic");
                  const r = await takePicture();
                  setUseCamera(false);
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  /*alert(JSON.stringify(r));
                  console.log("response", JSON.stringify(r));*/
                }}
              >
                <Text style={styles.text}>PICTURE</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      ) : (
        <>
          <View style={{ width: "100%" }}>
            {/**BURA */}
            <SafeAreaView style={styles.container2}>
              <View style={styles.header}>
                <TouchableOpacity>
                  <Ionicons
                    name="arrow-back-outline"
                    size={24}
                    color="#D8D9DB"
                  ></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ fontWeight: "500" }}>Post</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <Image
                  source={require("../../assets/background/bg.jpg")}
                  style={styles.avatar}
                ></Image>
                <TextInput
                  autoFocus={true}
                  //multiline={true}
                  numberOfLines={4}
                  style={{ flex: 1 }}
                  placeholder="Want to share something?"
                ></TextInput>
              </View>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: 200 }}
                />
              )}
              <TouchableOpacity
                style={styles.photo}
                onPress={() => {
                  cameraDialogRef.current.showDialog();
                }}
              >
                <Ionicons name="camera-outline" size={24}></Ionicons>
              </TouchableOpacity>
            </SafeAreaView>
            {/**BURA */}
            <LoadPhotoDialog cameraDialogRef={cameraDialogRef} setUseCamera={setUseCamera}/>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    minHeight: "25%",
    minWidth: "100%",
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    margin: 8,
    backgroundColor: "grey",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  container2: {
    flex: 1,
    height: 48,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D9DB",
  },
  inputContainer: {
    margin: 32,
    flexDirection: "row",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32,
  },
});
