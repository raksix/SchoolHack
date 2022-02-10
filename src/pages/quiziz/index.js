import React, { useContext } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import WebView from "react-native-webview";
import { MenuContext } from "../../contexts/menuContext";


export default function QuizIndex() {

   const [menu, setMenu] = useContext(MenuContext)

   return (
      <ScrollView>
         <TextInput></TextInput>
      </ScrollView>
   )
}