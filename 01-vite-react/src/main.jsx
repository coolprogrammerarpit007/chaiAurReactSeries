// import { StrictMode } from 'react'
// import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp()
// {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }
// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// );

// const anotherUser = `Friends`;
// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'visit google!',
    // anotherUser
// );
createRoot(document.getElementById('root')).render(
    // reactElement
  // // <>
  // //   <App />
  //   <MyApp/>
  // // </>
  <App/>
)
