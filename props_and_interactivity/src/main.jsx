
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById('root'));

function Profile()
{
  return (<App person={{name:'Lin Lanyling',imageId:'1bX5QH6'}} size={100}/>);
}

root.render(<Profile/>);


// Steps when Passing Props to child component.

// Step 1:- Pass props to the child component.
// Step 2 :- Read props inside the child component.
