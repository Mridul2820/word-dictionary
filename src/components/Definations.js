import React from 'react'

const Definations = ({ word, catagory, meanings }) => {
    return (
        <div className="meanings">
            {word === ""
                ? (<span className="sub-title">Start by typing a word in search</span>)
                : (
                    meanings.map(meaning => (
                        meaning.meanings.map(item => (
                            item.definitions.map(def => (
                                <div className="single-meaning">
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {def.example && (
                                        <span>
                                            <b>Example :</b> {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((syn) => `${syn}, `)}
                                        </span>
                                    )}
                                </div>
                            ))
                        ))
                    ))
                )
            }
        </div>
    )
}

export default Definations
