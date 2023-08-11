import React from 'react'
import './index.scss'

const TextArea = ({ setTextAnalysis }: any) => {
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value

    const totalCharacter = text.length

    const totalWords = text.split(/\s+/).length

    const totalSentences = text.split(/[.?!]/g).filter(Boolean).length

    const totalParagraphs = text.split(/[\r\n]+/g).filter(Boolean).length

    setTextAnalysis({
      characters: totalCharacter,
      words: totalWords,
      sentences: totalSentences,
      paragraphs: totalParagraphs,
    })
  }

  return (
    <textarea className="text-area" placeholder="Paste your text here..." onChange={handleChange} />
  )
}

export default TextArea
