import { Container } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Definations from './components/Definations'
import Header from './components/Header'
import "./styles/app.scss"

const api = "https://api.dictionaryapi.dev/api/v2/entries"

const App = () => {
    const [word, setWord] = useState("")
    const [meanings, setMeanings] = useState([])
    const [catagory, setCatagory] = useState("en")

    const dictionaryAPI = async() => {
        try {
            const data = await axios.get(`${api}/${catagory}/${word}`)

            setMeanings(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(meanings);

    useEffect(() => {
        dictionaryAPI()
    }, [word, catagory])

    return (
        <div className="app">
            <Container maxWidth="md" className="container">
                <Header 
                    catagory={catagory} 
                    setCatagory={setCatagory} 
                    word={word} 
                    setWord={setWord}
                />
                {meanings && 
                <Definations 
                    word={word}
                    catagory={catagory} 
                    meanings={meanings}
                />}
            </Container>
        </div>
    )
}

export default App
