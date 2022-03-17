import React from 'react';
import AnimationContent from '../AnimationContent/AnimationContent';
import './TitleContent.sass';

const TitleContent = () => {
  return (
    <div className="containerApp_titleContent">
        <div className="animationContent">
            <AnimationContent/>
        </div>
        <div className="titleContent">We are about to change everything you know about finding a flight</div>
        <div className="subTitleContent">Customize to your trip and your desires</div>
        <div className="btnContent">Check our deals</div>
    </div>
  );
}

export default TitleContent;
