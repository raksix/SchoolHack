import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import WebView from "react-native-webview";
import { MenuContext } from "../../contexts/menuContext";
import { QuizContext } from "../../contexts/quizContext";
import { getReq } from "../../fetch";
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
            <Pressable style={QuizStyles.buttonTop} onPress={() => { setMenu("index") }}><Text style={QuizStyles.buttonText}>Ana Menü</Text></Pressable>
            <Text style={QuizStyles.text}>Quiz id gir</Text>
            <TextInput style={QuizStyles.input} placeholder="Quiz id" value={quiz.id} onChangeText={(e) => {
               setQuiz({
                  id: e,
                  data: {}
               })
            }}></TextInput>
            <Pressable style={QuizStyles.button} onPress={() => {
               getReq({
                  endpoint: "/quiziz/",
                  id: quiz.id
               }).then(res => {
                  setQuizPage(true)
                  setQuiz({
                     id: quiz.id,
                     data: res
                  })
               })
            }}><Text style={QuizStyles.buttonText}>Quize Gir</Text></Pressable>
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
               <ScrollView style={QuizStyles.answersArea}>
                  <Text style={QuizStyles.buttonText}>Cevaplar</Text>
                  {quiz.data.data.answers.map((a, idx) => (
                     <View style={QuizStyles.answersCard} key={idx}>
                        {a.question.map((a, idx) => (
                           <Text style={QuizStyles.buttonText} key={idx}>Soru: {a.text}</Text>
                        ))}
                        {a.answers.map((a, idx) => (
                           <Text style={QuizStyles.buttonText} key={idx}>{idx + 1}. Cevap: {a.text}</Text>
                        ))}
                     </View>
                  ))}
               </ScrollView>
               <View style={QuizStyles.bottomNav}>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setSection("quiz") }}><Text style={QuizStyles.buttonText}>Quiz</Text></Pressable>
                  <Pressable style={QuizStyles.buttonBottom} onPress={() => { setSection("hack") }}><Text style={QuizStyles.buttonText}>Ğ</Text></Pressable>
               </View>
            </>
         )
      )
   )
}