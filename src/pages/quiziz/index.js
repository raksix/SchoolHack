import React, { useContext, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import WebView from "react-native-webview";
import { MenuContext } from "../../contexts/menuContext";
import { QuizContext } from "../../contexts/quizContext";
import { QuizWebView } from "./components/webview";
import { QuizStyles } from "./style";


export default function QuizIndex() {

   const [menu, setMenu] = useContext(MenuContext)
   const [section, setSection] = useContext("quiz")
   const [quiz, setQuiz] = useContext(QuizContext)
   const [quizPage, setQuizPage] = useState(false)


   if (quizPage === false) {
      return (
         <ScrollView>
            <Text style={QuizStyles.text}>Quiz id gir</Text>
            <TextInput style={QuizStyles.input} placeholder="Quiz id" value={quiz.id} onChangeText={(e) => {
               setQuiz({
                  id: e,
                  data: {}
               })
            }}></TextInput>
            <Pressable style={QuizStyles.button} onPress={() => { setQuizPage(true) }}><Text style={QuizStyles.buttonText}>Quize Gir</Text></Pressable>
         </ScrollView>
      )
   } else {
      if (section === "quiz") {
         return (
            <>
               <Pressable style={QuizStyles.buttonTop} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Quizeden Çık</Text></Pressable>
               <QuizWebView></QuizWebView>
               <View style={QuizStyles.bottomNav}>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Quiz</Text></Pressable>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Ğ</Text></Pressable>
               </View>
            </>
         )
      } else {
         return (
            <>
               <Pressable style={QuizStyles.buttonTop} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Quizeden Çık</Text></Pressable>
               <QuizWebView></QuizWebView>
               <View style={QuizStyles.bottomNav}>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Quiz</Text></Pressable>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Ğ</Text></Pressable>
               </View>
            </>
         )
      }
   }
}