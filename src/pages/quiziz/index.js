import React, { useContext } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import WebView from "react-native-webview";
import { MenuContext } from "../../contexts/menuContext";
import { QuizContext } from "../../contexts/quizContext";
import { QuizStyles } from "./style";


export default function QuizIndex() {

   const [menu, setMenu] = useContext(MenuContext)
   const [quiz, setQuiz] = useContext(QuizContext)


   if (quizPage === false) {
      return (
         <ScrollView>
            <Text style={QuizStyles.text}>Quiz id gir</Text>
            <TextInput style={QuizStyles.input} placeholder="Quiz id" value={quiz.id} onChange={(e) => {
               setQuiz({
                  id: e.target.value,
                  data: {}
               })
            }}></TextInput>
            <Pressable style={QuizStyles.button}><Text style={QuizStyles.buttonText}>Quize Gir</Text></Pressable>
         </ScrollView>
      )
   } else {
      return (
         <WebView source={{ uri: ""}}></WebView>
      )
   }
}