import React from 'react';
import './Content.sass';
import image1 from '../../img/1.png';
import image2 from '../../img/2.png';
import image3 from '../../img/3.png';
import image4 from '../../img/4.png';
import arrow from '../../img/Arrow 11.png'


const data = [
    {
        item_img: image1,
        item_text: 'Los Angeles (US)'
    },
    {
        item_img: image2,
        item_text: 'Las vegas (US)'
    },
    {
        item_img: image3,
        item_text: 'Miami (US)'
    },
    {
        item_img: image4,
        item_text: 'Orlando (US)'
    }
]

const Content = () => {
  return (
   <div className="containerApp_content">
       <div className="title">Check the popular destinations</div>
       {
           data.map((item, index) => {
               return (
                   <div className="item" key={index}>
                       <div className="item_img">
                           <img src={item.item_img} alt={item.item_img} />
                        </div>
                        <div className="item_text">{item.item_text}</div>
                        <div className="item_arrow">
                            <img src={arrow} alt={`arrow${index}`} />
                        </div>

                    </div>
               )
           })
       }
    </div>
  );
}

export default Content;
