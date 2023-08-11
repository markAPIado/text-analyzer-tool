import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [textAnalysis, setTextAnalysis] = useState({
    words: 0,
    charaters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
  })
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox textAnalysis={textAnalysis} />
          <TextArea setTextAnalysis={setTextAnalysis} />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
