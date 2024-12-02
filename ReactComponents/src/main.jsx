
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById(`root`));


// function MyButton()
// {
//   return <button>I am a button</button>
// }

// function MyAvtar()
// {
//   return <img src="https://i.imgur.com/Nn81vGf.jpeg" width="100px" height="100px" className='avtar'/>
// }

const user = 
{
  name:'Little Tom',
  imageUrl:'https://i.imgur.com/Nn81vGf.jpeg',
  imgSize:90
}
root.render(
   <>
    {/* <h1>Welcome to my application.</h1>
    <MyButton />
    <MyAvtar/> */}

    <h1>{user.name}</h1>
    <img className='avtar' src='{user.imageUrl} width={user.imgSize}'/>
   </>
)