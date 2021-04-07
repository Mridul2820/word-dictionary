import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/app.scss"

const api = "https://api.dictionaryapi.dev/api/v2/entries/en"

const App = () => {
    const [meanings, setMeanings] = useState([])
    const dictionaryAPI = async() => {
        try {
            const data = await axios.get(`${api}/plane`)

            setMeanings(data.data)

        } catch (error) {
            console.log(error);
        }
    }

    console.log(meanings);

    useEffect(() => {
        dictionaryAPI()
    }, [])

    return (
        <div className="app">
            <h1>Word APP</h1>
        </div>
    )
}

export default App
