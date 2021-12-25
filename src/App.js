import './App.css';

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello Pikachu</h1>
//     </div>
//   );
// }

// export default function App() {
//   const name = "Pikachu";
//   return (
//     <div className="App">
//       <h1>Hello {name}</h1>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <Hello/>
//     </div>
//   );
// }
// function Hello(){
//   const name = "Pikachu";
//   return(
//     <div>
//       <h1>Hello {name}</h1>
//       </div>
//   )
// }

// export default function App() {
//   return (
//     <div className="App">
//       <Hello name="Growlithe" />
//       <Hello name="Squido" />
//       <Hello name="Pikachu" />
//     </div>
//   );
// }
// function Hello(props) {
//   // props are passed as HTML attribute and collected as js object
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//     </div>
//   );
// }


// export default function App() {
//   return (
//     <div className="App">
//       <Hello
//         name="Growlithe"
//         img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png"
//       />
//       <Hello
//         name="Squido"
//         img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
//       />
//       <Hello
//         name="Pikachu"
//         img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
//       />
//     </div>
//   );
// }
// // function Hello(props) {
// // function Hello({ name, img }) {
//   function Hello (props){
//     const {name,img} = props
//   return (
//     <div id="main">
//       <h1>Hello {name}</h1>
//       <img src={img} alt={name} />
//     </div>
//   );
// }
export default function App() {
  const datas =[
    {
      name:"Growlithe",
      img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png"
    },
    {
      name:"Squido",
      img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {
      name:"Pikachu",
      img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    ]
  return (
    <div className="App">
      {/* {datas.map((data)=>(<Hello name={data.name} img={data.img}/>))} */}

      {datas.map(({img,name})=>(<Hello name={name} img={img}/>))}
    </div>
  );
}
// function Hello(props) {
// function Hello({ name, img }) {
  function Hello (props){
    const {name,img} = props
  return (
    <div id="main">
      <h1>Hello {name}</h1>
      <img src={img} alt={name} />
    </div>
  );
}
