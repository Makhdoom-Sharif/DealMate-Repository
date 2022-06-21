import axios from "axios";


const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWE4ODM0MTMzNTlmYzc1OTJkYTdmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTc2MjU2OSwiZXhwIjoxNjU2MDIxNzY5fQ.aU8yoCX1SU6TE0rizGC6if-XCwLqPlqdq2NmhNBcnuw";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})


export const userRequest = axios.create({
    baseURL: BASE_URL ,
    header : {token : `Bearer ${TOKEN}` }
})