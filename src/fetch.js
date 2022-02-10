import axios from "axios"

const api = "https://raksix-schoolhack.herokuapp.com/"

const getQuizAns = ({ id }) => new Promise((resolve) => {
   axios.get(api + "/quiziz/" + id).then(res => {
      resolve(res)
   })
})