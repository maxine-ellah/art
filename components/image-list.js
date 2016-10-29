import React, {Component} from 'react';
import images from '../public/images/images.js';

class Imagelist extends Component {
  constructor(){
    super()
  }


imageLoop(){
  return images.map((image) => {
    var path = image.path;
    return (
      <img key={image.name} src={path} />
    )
  })
}

  render(){
    return (
      <div className="img-list-container">
        <li>
          {this.imageLoop()}
        </li>
      </div>
    )
  }
}


export default Imagelist;
