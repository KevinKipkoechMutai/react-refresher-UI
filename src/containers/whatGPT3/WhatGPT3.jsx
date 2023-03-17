import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__padding' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature
          title="What is GPT-3?"
          text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, GPT-3 requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text."
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature 
          title="Chatbots"
          text="One of the most notable examples of GPT-3's implementation is the ChatGPT language model. ChatGPT is a variant of the GPT-3 model optimized for human dialogue, meaning it can ask follow-up questions, admit mistakes it has made and challenge incorrect premises."
        />
        <Feature
          title="Knowledgebase"
          text="GPT-3's deep learning neural network is a model with over 175 billion machine learning parameters. To put things into scale, the largest trained language model before GPT-3 was Microsoft's Turing Natural Language Generation (NLG) model, which had 10 billion parameters. "
        />
        <Feature 
          title="Education"
          text="Whenever a large amount of text needs to be generated from a machine based on some small amount of text input, GPT-3 provides a good solution. Large language models, like GPT-3, are able to provide decent outputs given a handful of training examples."
        />
      </div>
    </div>
  )
}

export default WhatGPT3