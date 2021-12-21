import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const YesOrNoDialog = React.forwardRef(({title,description,yesAction}, ref) => {
  React.useImperativeHandle(ref, () => ({
    showDialog: showDialog,
    hideDialog: hideDialog
  }));
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const handleYes = () => {
    yesAction();
    hideDialog();
  }

  return (
    <Provider>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Content>
              <Text>{description}</Text>
            </Dialog.Content>
            <Dialog.Actions style={{marginBottom:20}}>
              <Button style={{marginRight:20}} color="red" onPress={handleYes}>Yes</Button>
              <Button color="black" onPress={hideDialog}>No</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </Provider>
  );
});

export default YesOrNoDialog;