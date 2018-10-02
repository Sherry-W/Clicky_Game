import React, { Component } from 'react';
import Images from './Images';

export class ClickNRandom extends Component {
    handleClick(e) {
      e.preventDefault()
      console.log(e.target)
    }
  
    render() {
      return (
        <Images />
      )
    }
  }
  export default ClickNRandom;
// export const ClickNRandom = (imgArr) => {
//     $('.imgClick').on(click, 'imgClick')
//     const shuffleArray = imgArr.sort(() => Math.random() - 0.5);
//   };