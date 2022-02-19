import axios from "axios"

const api = "https://raksix-schoolhack.herokuapp.com"

export const getReq = ({ endpoint, id, cookie}) => new Promise((resolve) => {
   console.log(api + endpoint + id)
   axios.get(api + endpoint + id, {headers: {
      'data': cookie
   }}).then(res => {
      resolve(res.data)
   })
})