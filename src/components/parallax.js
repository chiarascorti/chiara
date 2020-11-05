import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledParallaxDiv = styled.div`
  text-align: center;
  margin: auto;
  position: absolute;
  margin: 100px 500px ;
  height: 200px;
  width: 200px;
  background-color: none;
  border: 3px solid red;
  transform: ${props => `translateY(${(props.off) * 1}px) ` };
  
  z-index: -3;
 
`
const StyledParallaxDiv2 = styled.div`
  text-align: center;
  position: absolute;
  margin: 700px 500px ;
  height: 250px;
  width: 250px;
  background-color: none;
  border-radius: 50%;
  border: 3px solid blue;
  transform: ${props => `translateY(${-(props.off) * 0.8}px) ` };
  z-index: -4;  
`


export const MyParallax = () => {


  
  const [offSet, setOffset] = useState(0)

  useEffect(() => {

     const handleYScroll = () => {
       setOffset(window.pageYOffset)
     }



     window.addEventListener('scroll', handleYScroll)

    return () => {
      window.removeEventListener('scroll', handleYScroll)
 

      }
  }, [])


  return (
    <div>
       <StyledParallaxDiv off={offSet}/> 
    <StyledParallaxDiv2 off={offSet}/>
    </div>
   

  )
};

{/* & @keyframes App-logo-spin {
  from {
    transform: ${props => `translateY(${(props.off) * 1}px) ` };
  }
  to {
    transform: rotate(360deg);
  }
}
animation: App-logo-spin infinite 20s linear;*/}