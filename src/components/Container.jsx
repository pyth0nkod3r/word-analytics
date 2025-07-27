import Stats from './Stats.jsx'
import TextArea from './TextArea.jsx'
import { useState } from "react"


export default function Container() {
    const [text, setText] = useState("")
    const charCount = text.length
    return (
        <main className="container">
            <TextArea text={text} setText={setText} />
            <Stats charCount={charCount} />
        </main>
    );
}