import { Container } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import "./styles/app.scss"

const api = "https://api.dictionaryapi.dev/api/v2/entries/en"

const App = () => {
    const [word, setWord] = useState("")
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
            <Container maxWidth="md" className="container">
                <Header />
            </Container>
        </div>
    )
}

export default App
