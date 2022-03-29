import React from 'react'
import Feedback from './feedback/Feedback'
import SearchBar from './searchbar/SearchBar'
import './SidePanel.css'
import View from './view/View'

export default function SidePanel({ style, setStyle }) {
  return (
    <div className="SidePanelContainer">
        <div>
            <div className='content'>
                <p style={{fontWeight:"600"}}>Hi Reader</p>
                <p>Here's your news</p>
            </div>    
            <View style={style} setStyle={setStyle} />
            <Feedback />
            <SearchBar />
        </div>
    </div>
  )
}
