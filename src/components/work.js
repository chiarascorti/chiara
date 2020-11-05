import React, {useState, useEffect} from 'react';
import MyCard from './cards';
import styled from 'styled-components';
import '../styles.css';
import {Link, useRouteMatch, Switch, Route} from 'react-router-dom';

const SplitDiv = styled.div`
  text-align: ${props => props.right ? 'right' : 'left'};
  background-size: cover;
  margin: 20px;
  padding: 20px;
  font-size: 80px;
`
const DesignLink = ({ children, ...props }) => (
    <Link to={props.to} className='linkMap' value={props.value} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {children}
    </Link>
  );

//prototype for work list
const list =  [{
  id:1,
  text: "Indigo-Graduation-project",
  img: "https://picsum.photos/200/300"
  }, {
    id:2,
    text:'Untitled-Fulldome-exp.',
    img: "https://picsum.photos/230/350"
  }, {
    id:3,
    text:'Freaks-Film-Launch',
    img: "https://picsum.photos/200/200"
  }, { 
    id:4,
    text:'FreekyPeep-Videomapping',
    img: "https://picsum.photos/300/300"
    }, {
      id:5,
      text: 'D&AD-New-Blood-Awards',
    img: "https://picsum.photos/300/400"
    }, {
      id: 6,
      text: 'Noir-Podcast-design',
    img: "https://picsum.photos/200/300"
    }];




    
   //initialstate to pass to state
const initialState = {
  state: false,
  id: 0,
  text: 'aahah',
  img: '',
}

const LinkedList = (props) => {


const [onShow, setOnShow] = useState(initialState);


useEffect(() => {
  console.log('render')
 
}, [onShow.state])


function handleShowLeave(onShow){
  setOnShow({
    ...onShow,
    state: false,
  })
}


const isOdd = num => {
  return num % 2
}

let {path, url} = useRouteMatch();

      return (
        <div>


       
          {list.map((work) => 
            <SplitDiv key={work.id} right={isOdd(work.id)}> 

                <DesignLink to={`${url}/${work.text}`} value={onShow} id={work.id} onMouseEnter={() => {
                  setOnShow({
                      ...onShow,
                      state: true,
                      id: work.id,
                      text: work.text,
                      img: work.img,
                        })
                 }} onMouseLeave={handleShowLeave}>
                     {work.text}
                </DesignLink>
               
            </SplitDiv>
          )}
          
          <div className='overlay'>
            {onShow.state  && <MyCard  id={onShow.id}> <h1>{onShow.text}</h1> <img src={onShow.img} className='imgViewer'/> </MyCard> }
          </div>
          <Switch>
          <Route path={`${path}/Indigo-Graduation-project`}>
            <MyCard />
          </Route>
          </Switch>
     

       </div>
      
        
        
    )    
}

// const ShowLink = (...props) => {
//   const [toShow, setToShow] = useState({
//     id : '',
//     container: '' 
//   });

//   const showCard = () => {
//     setToShow({
//         id: props.id,
//         container: props.children
//       })
//   }

//   return (
//     <div>
//     <MyCard id={props.id}> {props.children} </MyCard>
//     </div>
//   )

// }

export default LinkedList;