import React, { useContext } from "react";
import WebView from "react-native-webview";
import { QuizContext } from "../../../contexts/quizContext";
import { QuizStyles } from "../style";


export function QuizWebView() {

   const [quiz, setQuiz] = useContext(QuizContext)

   return (
      <WebView source={{ uri: "https://quizizz.com/join?gc=" + quiz.id }} style={QuizStyles.webview}></WebView>
   )
}