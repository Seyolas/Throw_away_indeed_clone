import React from 'react';
import { FaRegHeart} from "react-icons/fa";
import ReactCanvasConfetti from "react-canvas-confetti";
import { connect } from 'react-redux'
import { useRef, useCallback,useState } from 'react';
const mapStateToProps = store =>{
    const {selectedItemId, selectedItem} = store.searchReducer;
    return {selectedItem,selectedItemId }
  }

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };

const SingleJob = ({selectedItem}) => {

    const array = selectedItem.split('.');
    const clearArray = array.filter(i => i)
    
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
      }, []);
    
      const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
          refAnimationInstance.current({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(200 * particleRatio)
          });
      }, []);
    
      const fire = useCallback(() => {
        makeShot(0.25, {
          spread: 26,
          startVelocity: 55
        });
    
        makeShot(0.2, {
          spread: 60
        });
    
        makeShot(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
    
        makeShot(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
    
        makeShot(0.1, {
          spread: 120,
          startVelocity: 45
        });
      }, [makeShot]);


  return(
        <>

        <aside className={selectedItem !='' ? null : 'hidden'}>
                
        <div className="button-container">
            <button onClick={fire} className='apply'>Apply now!</button>
            <button onClick={fire} className='fav'><FaRegHeart/></button>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </div>


          <ul>
              {clearArray.map((item,index)=>{
                 return <li key={index}>{item}</li>
              })}
          </ul>
    



        <style jsx>{`
            aside{
                display:flex;
                flex-direction:column;
                width:40%;
                max-width:40%;
                height:500px;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                margin:1rem 0;
                position:fixed;
                right:190px;
                border-radius:20px;
            }            
            .hidden{
                display:none;
            }
            ul{
                position:absolute;
                left:40px;
                margin:1rem auto;
            }
            .button-container{
                position:absolute;
                top:400px;
                left:20px;
            }
            .button-container button{
                margin:0 1rem;
                font-size:20px;
                border:none;
                outline:none;
                cursor:pointer;
            }
            .apply{
                background-color:rgb(37, 87, 167);
                color:white;
                padding:0.4rem 3rem;
            }
            .fav{
                padding:0.5rem;
            }
            
            `}

        </style>
        </aside>
</>

  )
};

export default connect(mapStateToProps,null)(SingleJob)

