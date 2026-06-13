const express=require('express')
const cors=require('cors')
const app=express()
const axios=require('axios')
const PORT=5178
const api_key="6fbfea33-cba6-4410-ac87-d730b57ea132"
app.use(cors())
app.use(express.json())

app.get('/api/movies',async (req,res)=>{
    const response=await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top',{
            params:{type:'TOP_250_BEST_FILMS',page:1},
            headers:{'X-API-KEY':'6fbfea33-cba6-4410-ac87-d730b57ea132'}
        })
    res.json(response.data.films)
})

app.listen(PORT,(req,res)=>{
    console.log(`The server is running: http://localhost:${PORT}`)
})