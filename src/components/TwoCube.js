import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
const spinInnerKeyframes = {
  '0%': {
    transform: `translateX(-50%)
      scale3d(0.5,0.5,0.5)
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(0deg)`
  },
  '75%': {
    transform: `translateX(-50%)
      scale3d(0.5,0.5,0.5)
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(0deg)`
  },
  '100%': {
    transform: `translateX(-50%)
      scale3d(0.5,0.5,0.5)
      rotateX(0deg)
      rotateY(90deg)
      rotateZ(0deg)`
  },
}

const spinOuterKeyframes = {
  '0%': {
    transform: `translateX(-50%)
      scale3d(1,1,1)
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(0deg)`
  },
  '25%': {
    transform: `translateX(-50%)
      scale3d(1,1,1)
      rotateX(0deg)
      rotateY(-90deg)
      rotateZ(0deg)`
  },
  '100%': {
    transform: `translateX(-50%)
      scale3d(1,1,1)
      rotateX(0deg)
      rotateY(-90deg)
      rotateZ(0deg)`
  },
}

export default class TwoCube extends Component {

  state = {
    x: 0,
    y: 0,
    z: 0
  }

  static defaultProps = {
    depth: 250
  }

  styles = () => {
    const { x, y, z } = this.state
    const { depth } = this.props

    return StyleSheet.create({
      container: {
        width: `${depth * 1.5}px`,
        height: `${depth * 1.5}px`,
        paddingLeft: `${depth / 1.7}px`
      },
      TwoCube: {
        position: 'relative',
        display: 'block',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(-33.5deg) rotateY(45deg)',
        width: `${depth}px`,
        paddingBottom: `${depth * 0.5}px`,
      },
      cube: {
        display: 'inline-block',
        transformStyle: 'preserve-3d',
        transition: 'transform 1000ms',
      },
      innerCube: {
        position: 'absolute',
        top: '-2px',
        left: 0,
        width: `${depth}px`,
        height: `${depth}px`,
        transform: `translateX(-50%)
                    scale3d(0.5,0.5,0.5)
                    rotateX(${-x}deg)
                    rotateY(${-y}deg)
                    rotateZ(${-z}deg)`,
        transformOrigin: 'center',
        animationName: [spinInnerKeyframes],
        animationTimingFunction: 'ease',
        animationDuration: `4s`,
        animationIterationCount: 'infinite',
        animationFillMode: 'forwards'
      },
      outerCube: {
        width: `${depth}px`,
        height: `${depth}px`,
        transform: `translateX(-50%)
                    scale3d(1,1,1)
                    rotateX(${x}deg)
                    rotateY(${y}deg)
                    rotateZ(${z}deg)`,
        animationName: [spinOuterKeyframes],
        animationTimingFunction: 'ease',
        animationDelay: '3s',
        animationDuration: `4s`,
        animationIterationCount: 'infinite',
        animationFillMode: 'forwards'
      },
      face: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        border: '1px solid white'
      },
      outerFace: {
        backgroundColor: 'rgba(0, 0, 255, 0.6)',
        opacity: '.9',
        border: '2px solid white',
        transition: 'border-width 0.2s',
        transitionDelay: '0.2s'
      },
      innerFace: {
        backgroundColor: 'lightblue',
        border: '2px solid white'
      }
    })
  }

  getFaces = type => {
    const s = this.styles()
    const { depth } = this.props
    return [
      'rotateX(0deg)',
      'rotateX(-90deg)',
      'rotateX(90deg)',
      'rotateY(-90deg)',
      'rotateY(90deg)',
      'rotateY(180deg)'
    ].map((rot, i) => (
      <section
        key={ i }
        className={css(s.face, s[`${type}Face`])}
        style={{transform: `${rot} translateZ(${ (depth / 2)+2 }px)`}}/>
    ))
  }

  render() {
    const {
      container,
      TwoCube,
      cube,
      innerCube,
      outerCube
    } = this.styles()

    return (
      <div className={css(container)}>
        <span className={css(TwoCube)}>
          <figure className={css(cube, outerCube)}>
            { this.getFaces('outer') }
          </figure>
          <figure className={css(cube, innerCube)}>
            { this.getFaces('inner') }
          </figure>
        </span>
      </div>
    )
  }
}
