import React, { useContext } from "react";
import WebView from "react-native-webview";
import { QuizStyles } from "../style";


export function QuizWebView({ url,style }) {

   return (
      <WebView key={"quiz"} source={{ uri: url }} style={style} />
   )
}