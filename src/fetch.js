import axios from "axios"

const api = "http://localhost:5000"

export const getReq = ({ endpoint, id }) => new Promise((resolve) => {
   axios.get(api + endpoint + id).then(res => {
      resolve(res.data)
   })
})