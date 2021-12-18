import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Paragraph } from "react-native-paper";
import ChooseOneDialog from "../ChooseOneDialog";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoadPhotoDialog = ({ cameraDialogRef, setUseCamera }) => {
  return (
    <ChooseOneDialog ref={cameraDialogRef}>
      <Paragraph>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              console.log("in pick camera");
              setUseCamera(true);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="camera-outline" size={24}></Ionicons>
              <Text style={styles.text}>Pick Camera</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              console.log("in pick photo");
              const r = await pickImage();
              if (!r.cancelled) {
                setImage(r.uri);
              }
              console.log("response", JSON.stringify(r));
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="library-outline" size={24}></Ionicons>
              <Text style={styles.text}>Pick Picture</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Paragraph>
    </ChooseOneDialog>
  );
};

export default LoadPhotoDialog;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "column",
  },
  button:{
      marginVertical:20,
  },
  text:{
    marginHorizontal:20,
    marginTop:5
}
});
