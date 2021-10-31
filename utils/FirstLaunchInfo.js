import { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

const FirstLaunchInfo = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true"); //this is async but bu dont need to wait this
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return isFirstLaunch;
};
export default FirstLaunchInfo;
