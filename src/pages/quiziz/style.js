import { StyleSheet } from "react-native";


export const QuizStyles = StyleSheet.create({
   input: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      margin: 20,
      marginTop: 5
   },
   text: {
      fontSize: 25,
      color: 'white',
      margin: 20,
      marginBottom: 0,
      marginTop: "25%"
   },
   button: {
      backgroundColor: 'red',
      margin: 20,
      borderRadius: 10,
      marginTop: 0
   },
   buttonTop: {
      backgroundColor: 'red',
   },
   buttonBottom: {
      backgroundColor: 'red',
      width: "50%"
   },
   bottomNav: {
      display: "flex",
      flexDirection: "row"
   },
   buttonText: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      margin: 5
   },
   webview:{
      height: "50%",
      marginTop: 0
   }
})