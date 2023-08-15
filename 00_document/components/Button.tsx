// Button
type Props = {
    onPress: () => void; // handler to be called when the user taps the button
    title: string; // text to display inside the button, On android the given title will be converted to the uppercased form.
    accessibilityLabel: string; // text to display for blinding accessibility features
    color: string; // color of the text , or background color of the button 
    disabled: boolean; // whether or not the button is disabled
}