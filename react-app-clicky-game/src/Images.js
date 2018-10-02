import React, { Component } from 'react';
import ace from './assets/images/ace.jpg';
import brook from './assets/images/brook.png';
import chopper from './assets/images/chopper.jpg';
import franky from './assets/images/franky.jpg';
import law from './assets/images/law.jpg';
import luffy from './assets/images/luffy.jpg';
import nami from './assets/images/nami.png';
import robin from './assets/images/robin.png';
import sabo from './assets/images/sabo.jpg';
import sanji from './assets/images/sanji.png';
import usopp from './assets/images/usopp.png';
import zoro from './assets/images/zoro.png';


const imgArr = [ace, brook, chopper, franky, law, luffy, nami, robin, sabo, sanji, usopp, zoro];

const shuffleArray = imgArr.sort(() => Math.random() - 0.5);


export class Images extends Component {
  constructor(props) {
  super(props);

  this.state = {
		images: [
      {id: "ace", src: ace, alt: "ace"},
      {id: "brook", src: brook, alt: "brook"},
      {id: "chopper", src: chopper, alt: "chopper"},
      {id: "franky", src: franky, alt: "franky"},
      {id: "law", src: law, alt: "law"},
      {id: "luffy", src: luffy, alt: "luffy"},
      {id: "nami", src: nami, alt: "nami"},
      {id: "robin", src: robin, alt: "robin"},
      {id: "sabo", src: sabo, alt: "sabo"},
      {id: "sanji", src: sanji, alt: "sanji"},
      {id: "usopp", src: usopp, alt: "usopp"},
      {id: "zoro", src: zoro, alt: "zoro"}
    ],
  }
}
  render() {
    return (
      <div> 
      {shuffleArray.map((img, idx) => {
        return (
          <img className="imgClick" id={idx} src={img} alt={shuffleArray[idx]}></img>
        );
      })}

      {/* {this.state.images.map((images) => {
        return <img id={images.id} src={images.src} alt={images.alt}></img>
      })} */}
      </div>
    );
  }
}


export default Images;
