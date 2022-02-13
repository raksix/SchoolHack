import { StyleSheet } from "react-native";


export const MenuStyles = StyleSheet.create({
   menu: {
      marginTop: "50%",
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
   },
   MenuText: {
      fontSize: 30,
      textAlign: 'center',
      color: 'white'
   },
   MenuSelector: {
      margin: 10,
      paddingTop: 50,
      paddingBottom: 50,
      width: '45%',
      backgroundColor: 'red',
      borderRadius: 10
   }
})