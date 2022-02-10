import React, { useContext, useState } from 'react';
import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View
} from 'react-native';

import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WebView from 'react-native-webview';
import MenuIndex from './src/pages/menu';
import { MenuContext } from './src/contexts/menuContext';
import QuizIndex from './src/pages/quiziz';
import { QuizContext } from './src/contexts/quizContext';


const App = () => {

   const [menu, setMenu] = useState("index")
   const [quiz, setQuiz] = useState({
      id: "",
      data: {}
   })

   return (
      <QuizContext.Provider value={[quiz, setQuiz]}>
         <MenuContext.Provider value={[menu, setMenu]}>
            <SafeAreaView style={styles.body}>
               {menu === "index" ? (
                  <MenuIndex />
               ) : (
                  menu === "quiz" ? (
                     <QuizIndex />
                  ) : (
                     <QuizIndex />
                  )
               )}
            </SafeAreaView>
         </MenuContext.Provider>
      </QuizContext.Provider>
   );
};

const styles = StyleSheet.create({
   body: {
      backgroundColor: 'black',
      height: '100%'
   }
});

export default App;
