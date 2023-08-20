// Alert
const createTwoButtonAlert = function() {
    return Alert.alert('Alert Title', 'My Alert Msg', [
    {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
}
const createThreeButtonAlert = function() {
    return Alert.alert('Alert Title', 'My Alert Msg', [
    {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
    },
    {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
}

const showAlert = function() {
    return Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
        {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
        },
        ],
        {
        cancelable: true,
        onDismiss: () =>
            Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
    );
}


type alert =  {
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions,
};

type prompt= {
    title: string,
    message?: string,
    callbackOrButtons?: ((text: string) => void) | AlertButton[],
    type?: AlertType,
    defaultValue?: string,
    keyboardType?: string,
};
