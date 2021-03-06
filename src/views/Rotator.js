import React, { Component } from 'react'

import TextRotator from '../components/TextRotator'
import Back from '../components/Back'

import '../styles/Rotator.scss'

const ADJECTIVES = [
  'sleek',
  'compact',
  'ultra-fast',
  'reactive',
  'monadic',
  'actionable',
  'innovative',
  'elegant',
  'meaningful',
  'efficient',
  'engaging',
  'immersive',
  'influential',
  'smart',
  'personal',
  'ill-defined',
]

export default class Rotator extends Component {
  state = {
    blend: false
  }

  componentDidMount() {
    // stow sidemenu
    this.props.menu.stow()
  }

  /**
   * Handles checkbox change.
   */
  handleChange = () => {
    this.setState(prev => {
      return { blend: !prev.blend }
    })
  }

  render() {
    const { blend } = this.state
    const bgColor = blend ? 'white' : 'rgba(0,0,0,0.85)'
    const fontColor = blend ? 'coral' : 'white'
    return (
      <div className="Rotator">
        <Back
          style={{ color: 'black' }}
          showInitials/>
        <div className="container">
          <span className="proclamation">Our&nbsp; product&nbsp; is</span>
          <TextRotator
            words={ ADJECTIVES }
            spinRate={ 4.2 }
            reverseRotation={ true }
            positionRight={ '-90px' }
            width="257px"
            backgroundColor={ bgColor }
            fontColor={ fontColor }/>
          <label className="options">
            <input
              type="checkbox"
              name="blend"
              onChange={this.handleChange}/>blend
          </label>
        </div>
        <span className="description">
          {/* The <strong>TextRotator</strong> component, seen here cycling through an arbitrary list of buzzword-y adjectives, is a quote shiny doohickey unquote and aspires to be nothing more. Allow your eyes, fatigued from the daily slog of bad site design, to be replenished by the TR's pleasant rotation. */}
          This shiny doohickey, sensibly named the <strong>TextRotator</strong>, will jazz up any static webpage it adorns. All you need to do is pass in a list of words and watch that baby spin!
        </span>
      </div>
    )
  }
}
