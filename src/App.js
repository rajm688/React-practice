import "./styles.css";
import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { Switch, Route, useHistory } from "react-router-dom";
import { AddMovie, MoviesList } from "./AddMovie";
import { ColorPick } from "./ColorPick";
import { Home } from "./Home";
import { Notfound } from "./Notfound";
import { useParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useEffect } from "react";
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
// export default function App() {
//   const datas =[
//     {
//       name:"Growlithe",
//       img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png"
//     },
//     {
//       name:"Squido",
//       img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
//     },
//     {
//       name:"Pikachu",
//       img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
//     },
//     ]
//   return (
//     <div className="App">
//       {/* {datas.map((data)=>(<Hello name={data.name} img={data.img}/>))} */}

//       {datas.map(({img,name})=>(<Hello name={name} img={img}/>))}
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
  const [movies, setmovies] = useState([]);
  const url = "https://61c9c7ff20ac1c0017ed8e43.mockapi.io/disney";
  useEffect(() => {
    fetch(url,{method:"GET"})
      .then((data) => data.json())
      .then((mvs) => setmovies(mvs));
  }, []);

  const history = useHistory();
  // const intmovies = [
  //   {
  //     name: "Cars",
  //     poster: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
  //     rating: 4.6,
  //     summary:
  //       "Cars is a 2006 American computer-animated sports comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures.",
  //     trailer:"https://www.youtube.com/embed/SbXIj2T-_uk"
  //   },
  //   {
  //     name: "Toy Story",
  //     poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
  //     rating: 4.8,
  //     summary:
  //       "Toy Story is a 1995 American computer-animated comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures.",
  //       trailer:"https://www.youtube.com/embed/rNk1Wi8SvNc"
  //   },

  //   {
  //     name: "Up",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
  //     rating: 4.3,
  //     summary:
  //       "Up is a 2009 American computer-animated film directed by Pete Docter, and co-written by Bob Peterson.",
  //       trailer:"https://www.youtube.com/embed/ORFWdXl_zJ4"
  //   },
  //   {
  //     name: "Inside Out",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
  //     rating: 4.7,
  //     summary:
  //       "nside Out is a 2015 American computer-animated film directed by Pete Docter, who wrote the script with Meg LeFauve and Josh Cooley.",
  //   trailer:"https://www.youtube.com/embed/yRUAzGQ3nSY"
  //     },
  //   {
  //     name: "Jack-Jack Attack",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/2/28/Jack-Jack_Attack_poster.jpg",
  //     rating: 4.5,
  //     summary:
  //       "Jack-Jack Attack is a 2005 computer animated short film produced by Pixar and written and directed by Brad Bird. The short film is a spin-off on his 2004 film The Incredibles.",
  //       trailer:"https://www.youtube.com/embed/0dQpFu8uRP0"
  //   },
  //   {
  //     name: "The Good Dinosaur",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/8/80/The_Good_Dinosaur_poster.jpg",
  //     rating: 4.7,
  //     summary:
  //       "he Good Dinosaur is a 2015 American computer-animated adventure film[7] produced by Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures.",
  //       trailer:"https://www.youtube.com/embed/O-RgquKVTPE"
  //   },
  //   {
  //     name: "WALL-E",
  //     poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/WALL-Eposter.jpg",
  //     rating: 4.9,
  //     summary:
  //       "WALL-E (stylized with an interpunct as WALL·E) is a 2008 American computer-animated science fiction film[4] produced by Pixar Animation Studios and released by Walt Disney Pictures.",
  //       trailer:"https://www.youtube.com/embed/CZ1CATNbXg0"
  //   }
  // ];
  const [theme, settheme] = useState("light");
  const DarkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    // routing usng <Link> tag
    <ThemeProvider theme={DarkTheme}>
      <Paper sx={{ minHeight: "100vh" }} elevation={0}>
        <div className="main">
          <div className="header">
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" onClick={() => history.push("/")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/Movies/add")}
                >
                  Add Movie
                </Button>
                <Button color="inherit" onClick={() => history.push("/Movies")}>
                  Movies
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/colorgame")}
                >
                  Color Game
                </Button>
                <Button
                  style={{ marginLeft: "auto" }}
                  color="inherit"
                  onClick={() => settheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <LightModeIcon /> : <NightsStayIcon />}{" "}
                  {theme === "dark" ? "Light" : "Dark"} theme
                </Button>
              </Toolbar>
            </AppBar>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Movies/add">
              <AddMovie
                movies={movies}
                setmovies={setmovies}
              />
              {/* react matches by subsstring means it catches (displays) the first mmatched path in order to overcome we use exact attribute or keyword */}
            </Route>
            <Route path="/Movies/:id">
              <Moviedetails movies={movies} />
            </Route>

            <Route path="/Movies">
              <MoviesList movies={movies} setmovies={setmovies} />
            </Route>
            <Route path="/colorgame">
              <ColorPick />
            </Route>

            <Route path="**">
              <Notfound />
            </Route>
          </Switch>

          {/* //we can pass array as props as shown below */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Moviedetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const { name, trailer, summary } = movie;
  const history = useHistory();
  return (
    <div>
      <h1>Movie name : {name}</h1>
      <iframe
        width="588"
        height="331"
        src={trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p style={{ fontSize: "20px" }}>
        <strong>Summary:</strong>
        {summary}
      </p>
      <Button
        variant="contained"
        color="warning"
        onClick={() => history.goBack()}
      >
        Go back
      </Button>
    </div>
  );
}
