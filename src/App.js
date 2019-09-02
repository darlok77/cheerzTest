import React, { Component } from 'react'

import mock from './test.json'
/** Class App */
class App extends Component {

  /**
    * render.
    * return {String}
  */
  render() {
    const images = mock.location.customization.Pola.images
    const texts = mock.location.customization.Pola.texts
    const template = mock.templates[1]

    const styleLogo = {
      width: images[1].width,
      height: images[1].width / images[1].ratio,
      position: 'absolute',
      top: images[1].y,
      left: images[1].x,
      zIndex: 3
    }

    const styleBackground = {
      width: images[0].width,
      height: images[0].width / images[0].ratio,
      position: 'absolute',
      top: images[0].y,
      left: images[0].x,
      zIndex: 1

    }
    const styleImage = {
      width: template.photo_positions[0].width,
      height: template.photo_positions[0].height,
      position: 'absolute',
      top: template.photo_positions[0].y,
      left: template.photo_positions[0].x,
      zIndex: 2
    }

    // value changed
    texts[0].y = 1042
    texts[0].x = 525
    texts[2].y = 830
    texts[2].x = 325
    texts[1].y = 1060
    texts[1].x = 490

    return (
      <div>
      <img src={images[0].url} style={styleBackground} />
      <img src="https://www.cnetfrance.fr/i/edit/2019/04/eso1644bsmall.jpg" style={styleImage} />
        {texts.map((text, pos) => {
          const style = {
            fontSize: text.size,
            color: text.color,
            position: 'relative',
            top: text.y,
            left: text.x,
            // textAlign: text.align === 'middle' ? 'center' : '',
            width: '600px',
            fontFamily: text.font,
            zIndex: 3
          }
          return (
            <p key={`text${pos}`} style={style}>{text.text}</p>
          )
        })}
        <img src={images[1].url} style={styleLogo} />
      </div>
    )
  }
}

export default App
