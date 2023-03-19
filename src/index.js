import {createRoot} from 'react-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<>
<App/>
</>
);












// const  Header = (props) => {
//     /* console.log(props.user); */
//     return (
        
//      <h1>Hello Ahmed {props.user}</h1>
//     )
// }

// function Footer(props){
//     return <footer>Allrights reserved {props.year
//     } </footer>
// }