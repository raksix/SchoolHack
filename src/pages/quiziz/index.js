import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import WebView from "react-native-webview";
import { MenuContext } from "../../contexts/menuContext";
import { QuizContext } from "../../contexts/quizContext";
import { QuizWebView } from "./components/webview";
import { QuizStyles } from "./style";


export default function QuizIndex() {

   const [menu, setMenu] = useContext(MenuContext)
   const [section, setSection] = useState("quiz")
   const [quiz, setQuiz] = useContext(QuizContext)
   const [quizPage, setQuizPage] = useState(false)

   useEffect(() => {

   }, [])


   return (
      quizPage === false ? (
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
      ) : (
         section === "quiz" ? (
            <>
               <Pressable style={QuizStyles.buttonTop} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Quizeden Çık</Text></Pressable>
               <QuizWebView url={"https://quizizz.com/join?gc=" + quiz.id} style={QuizStyles.webview}></QuizWebView>
               <View style={QuizStyles.bottomNav}>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setSection("quiz") }}><Text style={QuizStyles.buttonText}>Quiz</Text></Pressable>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setSection("hack") }}><Text style={QuizStyles.buttonText}>Ğ</Text></Pressable>
               </View>
            </>
         ) : (
            <>
               <Pressable style={QuizStyles.buttonTop} onPress={() => { setQuizPage(false) }}><Text style={QuizStyles.buttonText}>Quizeden Çık</Text></Pressable>
               <QuizWebView url={"https://quizizz.com/join?gc=" + quiz.id} style={QuizStyles.hidden}></QuizWebView>
               <View style={QuizStyles.answersArea}>
                  <Text style={QuizStyles.buttonText}>Cevaplar</Text>
                  <View style={QuizStyles.answersCard}>
                     <Text style={QuizStyles.buttonText}>Soru: ASDASDASDDASDSAD</Text>
                     <Text style={QuizStyles.buttonText}>Cevap: ASDASDASDDASDSAD</Text>
                  </View>
               </View>
               <View style={QuizStyles.bottomNav}>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setSection("quiz") }}><Text style={QuizStyles.buttonText}>Quiz</Text></Pressable>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setSection("hack") }}><Text style={QuizStyles.buttonText}>Ğ</Text></Pressable>
               </View>
            </>
         )
      )
   )
}