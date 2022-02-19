import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import WebView from "react-native-webview";
import { MenuContext } from "../../contexts/menuContext";
import { QuizContext } from "../../contexts/quizContext";
import { getReq } from "../../fetch";
import { EbaWebView } from "./components/webview";
import { EbaStyles } from "./style";


export default function EbaIndex() {

   const [menu, setMenu] = useContext(MenuContext)
   const [cookie, setCookie] = useState("")
   const [section, setSection] = useState("eba")
   const [quiz, setQuiz] = useContext(QuizContext)
   const [loading, setLoading] = useState(false)
   const [click, setClick] = useState(false)
   const [err, setErr] = useState("")

   useEffect(() => {
      setLoading(true)
   })


   return (
      loading === false ? (
         <ScrollView>
            <Pressable style={EbaStyles.buttonTop} onPress={() => { setMenu("index") }}><Text style={EbaStyles.buttonText}>Ana Menü</Text></Pressable>
            <Text style={EbaStyles.text}>{err}</Text>
            <Pressable style={EbaStyles.button} ><Text style={EbaStyles.buttonText}>Giriliyor az bekle</Text></Pressable>
         </ScrollView>
      ) : (
         section === "eba" ? (
            <>
               <Pressable style={EbaStyles.buttonTop} onPress={() => { setMenu("index") }}><Text style={EbaStyles.buttonText}>Ana Menü</Text></Pressable>
               <EbaWebView url={"https://giris.eba.gov.tr/EBA_GIRIS/giris.jsp"} setCookie={setCookie} cookie={cookie} style={EbaStyles.webview}></EbaWebView>
               <View style={EbaStyles.bottomNav}>
                  <Pressable style={EbaStyles.buttonBottom} onPress={() => { setSection("eba") }}><Text style={EbaStyles.buttonText}>Quiz</Text></Pressable>
                  <Pressable style={EbaStyles.buttonBottom} onPress={() => { setSection("cevaps") }}><Text style={EbaStyles.buttonText}>Ğ</Text></Pressable>
               </View>
            </>
         ) : (
            <>
               <Pressable style={EbaStyles.buttonTop} onPress={() => { setMenu("index") }}><Text style={EbaStyles.buttonText}>Ana Menü</Text></Pressable>
               <EbaWebView url={"https://giris.eba.gov.tr/"} setCookie={setCookie} cookie={cookie} style={EbaStyles.hidden}></EbaWebView>
               <ScrollView style={EbaStyles.answersArea}>
                  <Text style={EbaStyles.buttonText}>Cevaplar</Text>
               </ScrollView>
               <View style={EbaStyles.bottomNav}>
                  <Pressable style={EbaStyles.buttonBottom} onPress={() => { setSection("eba") }}><Text style={EbaStyles.buttonText}>Quiz</Text></Pressable>
                  <Pressable style={EbaStyles.buttonBottom} onPress={() => { setSection("cevaps") }}><Text style={EbaStyles.buttonText}>Ğ</Text></Pressable>
               </View>
            </>
         )
      )
   )
}