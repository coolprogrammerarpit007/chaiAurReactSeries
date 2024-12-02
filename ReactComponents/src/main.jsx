
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

const root = createRoot(document.getElementById(`root`));


// function MyButton()
// {
//   return <button>I am a button</button>
// }

// function MyAvtar()
// {
//   return <img src="https://i.imgur.com/Nn81vGf.jpeg" width="6.25rem" height="6.25rem" className='avtar'/>
// }

// const user = 
// {
//   name:'Little Tom',
//   imageUrl:'https://i.imgur.com/Nn81vGf.jpeg',
//   imgSize:90
// }
// root.render(
//    <>
//     {/* <h1>Welcome to my application.</h1>
//     <MyButton />
//     <MyAvtar/> */}

//     <h1>{user.name}</h1>
//     <img className='avtar' src={user.imageUrl}  alt={'Photo Of ' + user.name} style={{width:user.imgSize,height:user.imgSize,borderRadius:'50%'}}/>
//    </>
// )


// const products = 
// [
//   {
//     id:1,
//     title:'Cabbage',
//     isFruit:false
//   },

//   {
//     id:2,
//     title:'Carrot',
//     isFruit:false
//   },
//   {
//     id:3,
//     title:'Apple',
//     isFruit:true
//   }
// ];

// const listItems = products.map((product) =>{
//   return <li key={product.id} className='item' style={{color:product.isFruit ? 'magenta' : 'green'}}>{product.title}</li>
// })
// console.log(listItems);

function MyButton()
{
  function handleClick()
  {
    alert('Button is clicked!');
  }

  return <button onClick={handleClick}>Click Me!</button>
}

function CountNumber()
{
  const [ count,setCount ] = useState(0);

  function handleClick()
  {
    setCount(count+1);
  }

  return <button onClick={handleClick}>Clicked {count} times!</button>
}



root.render(
  <>
    {/* <h3>My List Items</h3>
    <ul>
      {listItems}
    </ul> */}
    {/* <MyButton/> */}
    <CountNumber/>
    <br/>
    <br/>
    <CountNumber/>
  </>
)