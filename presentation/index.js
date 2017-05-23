// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Image,
  CodePane,
  ComponentPlayground,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Code slide
import CodeSlide from "spectacle-code-slide";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  striker: require("../assets/striker.png"),
  typescirptSuperset: require("../assets/typescript-superset.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#E8427D",
  secondary: "white",
  tertiary: "#652d87",
  quartenary: "#CECECE"
}, {
  primary: "Lato",
  secondary: "Helvetica"
});

// <Image src={images.striker} style={{ position: "absolute", top: 0, right: 0 }} width={150} />

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="primary" maxHeight="100%" style={{ height: "100%" }}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" bold>
            Large web apps at scale
          </Heading>
          <Text size={6} textColor="secondary">using mobx stack</Text>
          <Image src={images.striker} style={{ position: "absolute", bottom: -350, right: 50 }} width={150} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Hi! I'm Ostap</Heading>
          <Text size={9} style={{ marginTop: "30px" }} textColor="primary">Web evangelist @ Strikersoft</Text>
          <Text size={9} style={{ marginTop: "30px" }} textColor="primary">Twitter: <Link textColor="primary" style={{ textDecoration: "underline" }} href="https://twitter.com/katsickk">@katsickk</Link></Text>
          <Text size={9} textColor="primary">GitHub: <Link textColor="primary" style={{ textDecoration: "underline" }} href="https://github.com/katsick">@katsick</Link></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Why building large apps is hard?</Heading>
          <List style={{ marginTop: "60px" }}>
            <ListItem textColor="secondary">Lack of real-world examples</ListItem>
            <ListItem textColor="secondary">Async operations</ListItem>
            <ListItem textColor="secondary">CRUD === boilerplate</ListItem>
            <ListItem textColor="secondary">Full re-render comes at a price</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What we will learn today?</Heading>
          <List style={{ marginTop: "60px" }}>
            <ListItem textColor="secondary">What Mobx ecosystem is</ListItem>
            <ListItem textColor="secondary">How to optimize mobx rendering</ListItem>
            <ListItem textColor="secondary">How to build CRUD operations easily</ListItem>
            {/*<ListItem textColor="secondary">How not to use all that mentioned above</ListItem>*/}
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The stack of the day</Heading>
          <List style={{ marginTop: "60px" }}>
            <ListItem textColor="secondary">ReactJS with custom CRA</ListItem>
            <ListItem textColor="secondary">mobx, mobx-utils, mobx-devtools, serializr</ListItem>
            <ListItem textColor="secondary">Typescript (decorators support)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The myth of superset</Heading>
          <Appear>
            <Image src={images.typescirptSuperset} width={300} />
          </Appear>
          <Appear>
            <List style={{ marginTop: "60px" }}>
            <ListItem textColor="secondary">Typescript is NOT an superset of JS</ListItem>
            <ListItem textColor="secondary">Syntactically - yes</ListItem>
            <ListItem textColor="secondary">We ❤️ Typescript, since it scales!</ListItem>
            <ListItem textColor="secondary">No TS features in examples</ListItem>
          </List>
          </Appear>
          <Appear>
            <Text size={9} textColor="primary">To read: <Link textColor="primary" style={{ textDecoration: "underline" }} href="https://github.com/katsick">Jonas Bandi arcticle about TS</Link></Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>1. ReactJS with custom CRA</Heading>
          <CodePane style={{ marginTop: "60px" }} lang="shell" source={`
            -> yarn create react-app tsapp -- --scripts-version=react-scripts-ts
            -> cd cra-ts
            -> yarn start
          `}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>2. Mobx & mobx-ecosystem tools</Heading>
          <CodePane style={{ marginTop: "60px" }} lang="shell" source={`
            -> yarn add mobx mobx-react mobx-utils mobx-devtools serializr
          `}
          />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/mobx-and-react.example")}
          ranges={[
            { loc: [0, 0], title: "Gentle mobx intro" },
            { loc: [0, 4], note: "Imports" },
            { loc: [0, 1], note: "Import all React stuff (the only TS-specific syntax)" },
            { loc: [1, 2], note: "Import core primitives of mobx" },
            { loc: [2, 3], note: "Import magic connector" },
            { loc: [3, 4], note: "Import the styles :)" },
            { loc: [5, 18], note: "Let's become reactive wizards!" },
            { loc: [6, 8], note: "Mark fields to be reactive" },
            { loc: [9, 13], note: "The bad parts of OOP" },
            { loc: [14, 20], note: "Memoization for free" },
            { loc: [21, 22], note: "Create our instance of John" },
            { loc: [23, 25], note: "Decorate our component to react to every change of overvables or computed fields" },
            { loc: [25, 32], note: "Methods to change first & last name" },
            { loc: [33, 34], note: "The react render" },
            { loc: [43, 51], note: "Inputs that change our John" }
          ]}
        />
        <Slide transition={["zoom"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Demo</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What was wrong</Heading>
          <List style={{ marginTop: "60px" }} ordered>
            <ListItem textColor="secondary">We re-render the entire app on every change</ListItem>
            <ListItem textColor="secondary">Contructors are bad</ListItem>
            <ListItem textColor="secondary">Directly changing properties leads to "Backbone" hell</ListItem>
            <ListItem textColor="secondary">This is another TODO-like app</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>How to fix</Heading>
          <List style={{ marginTop: "60px" }} ordered>
            <ListItem textColor="secondary">Split components as much as you can</ListItem>
            <ListItem textColor="secondary">Use 'serializr'</ListItem>
            <ListItem textColor="secondary">Use strict mode</ListItem>
            <ListItem textColor="secondary">Add more fun to the app</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/mobx-and-react-and-serializr.example")}
          ranges={[
            { loc: [3, 4], note: "serializr imports" },
            { loc: [6, 7], note: "add useStrict" },
            { loc: [8, 9], note: "JSON placeholder for real data" },
            { loc: [11, 16], note: "Changes in our John" },
            { loc: [59, 64], note: "Nested address mapping" },
            { loc: [17, 24], note: "More realistic computed" },
            { loc: [25, 32], note: "Redux'y actions" },
            { loc: [33, 53], note: "Async side effect to server" },
            { loc: [54, 57], note: "Serializing for everything!" },
            { loc: [65, 68], note: "Our fist store" },
            { loc: [68, 80], note: "Async users fetching" },
            { loc: [81, 88], note: "Our reset user action (async gotcha!)" },
            { loc: [89, 90], note: "UserStore instance. WOW!" },
            { loc: [138, 157], note: "Our new root component" },
            { loc: [151, 153], note: "New button and users list" },
            { loc: [120, 137], note: "Users List component" },
            { loc: [91, 96], note: "User item render" },
            { loc: [96, 116] }
          ]}
        />
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Demo</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What we get</Heading>
          <List style={{ marginTop: "60px" }} ordered>
            <ListItem textColor="secondary">Slighty better rendering</ListItem>
            <ListItem textColor="secondary">Automated serialization/deserialization</ListItem>
            <ListItem textColor="secondary">Async operations on server</ListItem>
            <ListItem textColor="secondary">Flux'y\Redux'y actions and restrictions</ListItem>
            <ListItem textColor="secondary">Feeling of a real app</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What was (still) wrong</Heading>
          <List style={{ marginTop: "60px" }} ordered>
            <ListItem textColor="secondary">Rendering is still not optimal</ListItem>
            <ListItem textColor="secondary">Code mess (SINGLE FILE WTF)</ListItem>
            <ListItem textColor="secondary">There are no loaders\spinners!</ListItem>
            <ListItem textColor="secondary">App without router? I want a few pages</ListItem>
            <ListItem textColor="secondary">Still a strange feeling of TODO MVC</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>How to fix</Heading>
          <List style={{ marginTop: "60px" }} ordered>
            <ListItem textColor="secondary">Split to MOAR components</ListItem>
            <ListItem textColor="secondary">Restructure our app</ListItem>
            <ListItem textColor="secondary">Use mobx-utils</ListItem>
            <ListItem textColor="secondary">Let's add react-router v4</ListItem>
            <ListItem textColor="secondary">Let's add C of our CRUD</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/mobx-and-react-and-serializr-and-utils-1.example")}
          ranges={[
            { loc: [0, 0], title: "Root component" },
            { loc: [15, 16], note: "The provider" },
            { loc: [16, 17], note: "The router" },
            { loc: [32, 44], note: "The routes" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/mobx-and-react-and-serializr-and-utils-2.example")}
          ranges={[
            { loc: [0, 0], title: "UsersList component" },
            { loc: [1, 2], note: "Import injector" },
            { loc: [2, 3], note: "Import fromPromise helper" },
            { loc: [4, 5], note: "No need to import stores in low level components" },
            { loc: [6, 13], note: "Wrap promise to observable" },
            { loc: [17, 18], note: "switch case for observable" },
            { loc: [18, 19], note: "Loading case" },
            { loc: [19, 28], note: "Done case. Single source of truth" },
            { loc: [28, 29], note: "Error case" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/mobx-and-react-and-serializr-and-utils-3.example")}
          ranges={[
            { loc: [0, 0], title: "The Store" },
            { loc: [3, 4], note: "Import our model" },
            { loc: [5, 8], note: "Sleep function to emulate delay" },
            { loc: [29, 44], note: "Create new user" },
            { loc: [45, 48], note: "Add user to store" },
            { loc: [49, 64], note: "Get view model" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/mobx-and-react-and-serializr-and-utils-4.example")}
          ranges={[
            { loc: [0, 0], title: "The Model" },
            { loc: [2, 3], note: "Create view model import helper" },
            { loc: [4, 15], note: "ViewModel base class" },
            { loc: [16, 21], note: "User address now extends viewModel" },
            { loc: [22, 23], note: "User now extends view model" }
          ]}
        />
        <Slide transition={["zoom"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Demo</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What we've achived</Heading>
          <List style={{ marginTop: "60px" }} ordered>
            <ListItem textColor="secondary">Blazing-fast only-needed re-renders</ListItem>
            <ListItem textColor="secondary">Pretty structured app </ListItem>
            <ListItem textColor="secondary">Loading/Error substates indication</ListItem>
            <ListItem textColor="secondary">Form state with reset/submit for free</ListItem>
            <ListItem textColor="secondary">Router</ListItem>
            <ListItem textColor="secondary">C in CRUD</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What can be improved</Heading>
          <List style={{ marginTop: "60px" }} ordered>
            <ListItem textColor="secondary">Code structure</ListItem>
            <ListItem textColor="secondary">Code lazy load</ListItem>
            <ListItem textColor="secondary">Form validation</ListItem>
            <ListItem textColor="secondary">Add D in CRUD</ListItem>
            <ListItem textColor="secondary">More typescript ? 🤓</ListItem>
            <ListItem textColor="secondary">???</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>fin</Heading>
        </Slide>
      </Deck>
    );
  }
}
