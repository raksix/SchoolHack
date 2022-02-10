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
   webview: {
      marginTop: 0
   },
   hidden: {
      display: "none"
   },
   answersArea: {
      display: "flex",
      marginTop: 0,
      height: "85%",
   },
   answersCard: {
      borderRadius: 10,
      backgroundColor: 'red',
      margin: 10,
      marginLeft: 20,
      marginRight: 20,
      padding: 10
   }
})