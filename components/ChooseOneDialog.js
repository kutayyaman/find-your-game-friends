import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const ChooseOneDialog = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    showDialog: showDialog,
    hideDialog: hideDialog
  }));
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Choose one</Dialog.Title>
            <Dialog.Content>
              {props.children}
            </Dialog.Content>
          </Dialog>
        </Portal>
    </Provider>
  );
});

export default ChooseOneDialog;