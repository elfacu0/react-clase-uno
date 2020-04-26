import { CheckboxListWithState } from './tarea/Tarea4.js';


// Tarea 4.2
ReactDOM.render(
    <CheckboxListWithState
        items={{
           uno: false,
           dos: true,
           tres: false,
         }}
        onChange={function alerta(){alert("checkBox changed successfully")}}
    />,
    document.getElementById('react-app')
);


//tarea 4.1
// ReactDOM.render(
//     <ControlledCheckbox
//         name="cachoDeDia"
//         value={false}
//         onChange={function alerta(){alert("checkBox changed successfully")}}
//     />,
//     document.getElementById('react-app')
// );

// Tarea 3.2
// ReactDOM.render(
//     <CheckboxList
//         items={{
//            uno: false,
//            dos: true,
//            tres: false,
//          }}
//     />,
//     document.getElementById('react-app')
// );

// Tarea 3.1
// ReactDOM.render(
//     <UncontrolledCheckbox
//         name = "areTrapsGay?"
//         initialValue = {false}
//     />,
//     document.getElementById('react-app')
// );

// Tarea 2
// ReactDOM.render(
//     <ValidationInput
//         validation= {true}
//         isPassword= {true}
//     />,
//     document.getElementById('react-app')
// );


//Tarea 1
// ReactDOM.render(
//     <BlogPost
//     titulo="The hero: "
//     parrafos={`Hoy vi una ardilla.
//   La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
//   Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
//   autor={{
//     nombre: "Julián Absatz",
//     titulo: "React-Man ||The Protector||",
//     imagen: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FXkeNkVR.png"
//   }}
//   />,
//   document.getElementById('react-app')
// );
