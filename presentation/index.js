// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Code,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

import {
  DropDown1,
  DropDown2,
  DropDown3,
  DropDown4,
  DropDown5,
  DropDown6,
  DropDown7,
  DropDown8,
  Menu,
  ListHandler,
  List1,
  List2,
  List3,
  List4,
  OpenBehavior,
  ItemTransform1,
  ItemTransform2,
  ListTransform2,
} from '../src/components'

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="bar" controls={false}>

          <Slide>
            <Heading size={1} fit caps>
              User Interface
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Animations
            </Heading>
            <Heading size={1} fit caps>
              in React
            </Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Heading caps fit size={2} textColor="tertiary">
              DropDown
            </Heading>
            <Heading caps fit size={2} textColor="primary">
              Use Case
            </Heading>
          </Slide>

          <Slide>
            <CodePane
              lang="html"
              source={require("raw!../src/examples/dropdown-use.example")}
              margin="0 auto 40px"
              textSize="26px"
            />

            <DropDown1 label="Click me">
              <Menu/>
            </DropDown1>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown.example")}
            ranges={[
              { loc: [0, 0], title: "DropDown" },
              { loc: [2, 8], note: "Button" },
              { loc: [8, 11], note: "Content" },
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              CSS Only
            </Heading>

            <List textColor="tertiary">
              <ListItem>Pas besoin d'être spécifique à React</ListItem>
              <ListItem>Utile quand il n'est pas nécéssaire de modifier le DOM</ListItem>
              <ListItem>Utilise la technique avec <Code>visibility</Code> et <Code>delay</Code></ListItem>
            </List>

            <DropDown1 label="Click me">
              <Menu/>
            </DropDown1>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-css1.example")}
            ranges={[
              { loc: [0, 0], title: "CSS Only" },
              { loc: [3, 7], note: "Modifier class --open on Content" },
              { loc: [16, 19] },
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="css"
            code={require("raw!../src/examples/dropdown-css2.example")}
            ranges={[
              { loc: [0, 0], title: "CSS Only" },
              { loc: [1, 4], note: "Default is hidden" },
              { loc: [5, 13], note: "Visibility technique" },
              { loc: [5, 7], note: "Delay for close transition" },
              { loc: [16, 19], note: "Open State" },
              { loc: [20, 21], note: "Delay for open transition" },
            ]}
          />


          <Slide>
            <Heading size={2} textColor="secondary">
              ReactCSSTransitionGroup
            </Heading>
            <List textColor="tertiary">
              <ListItem>API haut niveau</ListItem>
              <ListItem>Anime en CSS un élément qui entre ou quitte le DOM</ListItem>
              <ListItem>Utilise des classes css spécifiques pour chaques états (-enter, -enter-active, -leave, -leave-active, …)</ListItem>
              <ListItem>Permet d'animer un ou plusieurs éléments (même animation ou animations différentes)</ListItem>
            </List>
            <DropDown2 label="Click me">
              <Menu/>
            </DropDown2>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-csstransitiongroup1.example")}
            ranges={[
              { loc: [0, 0], title: "ReactCSSTransitionGroup" },
              { loc: [7, 22] },
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="css"
            code={require("raw!../src/examples/dropdown-csstransitiongroup2.example")}
            ranges={[
              { loc: [0, 0], title: "ReactCSSTransitionGroup" },
              { loc: [0, 4] },
              { loc: [5, 12] },
              { loc: [13, 17] },
              { loc: [18, 25] },
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              ReactTransitionGroup + CSS
            </Heading>
            <List textColor="tertiary">
              <ListItem>API bas niveau, utilisé par ReactCSSTransitionGroup</ListItem>
              <ListItem>Anime un élément qui entre ou quitte le DOM</ListItem>
              <ListItem>Permet d'animer un ou plusieurs éléments (même animation ou animations différents)</ListItem>
              <ListItem>Les éléments possèdent de nouvelles méthodes pour gérer le cycle de vie lié à l'animation (<Code>componentWillAppear</Code>, <Code>componentWillEnter</Code>, …)</ListItem>
            </List>
            <DropDown3 label="Click me">
              <Menu/>
            </DropDown3>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-transitiongroup1.example")}
            ranges={[
              { loc: [0, 0], title: "ReactTransitionGroup + CSS" },
              { loc: [7, 17] },
              { loc: [10, 15] },
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-transitiongroup2.example")}
            ranges={[
              { loc: [0, 0], title: "DropDownContent" },
              { loc: [0, 1], note: "componentWillEnter" },
              { loc: [13, 18] },
              { loc: [3, 12] },
              { loc: [21, 22], note: "componentWillLeave" },
              { loc: [32, 37] },
              { loc: [24, 31] },
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              ReactTransitionGroup + GSAP (TweenLite, …)
            </Heading>
            <List textColor="tertiary">
              <ListItem>On peut utiliser une libraire JavaScript</ListItem>
            </List>
            <DropDown4 label="Click me">
              <Menu/>
            </DropDown4>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-transitiongroupgsap.example")}
            ranges={[
              { loc: [0, 0], title: "ReactTransitionGroup + TweenLite" },
              { loc: [0, 9] },
              { loc: [10, 19] },
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              ReactTransitionGroup + Web Animation API
            </Heading>
            <List textColor="tertiary">
              <ListItem>Autre example avec Web Animation API</ListItem>
            </List>
            <DropDown5 label="Click me">
              <Menu/>
            </DropDown5>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-transitiongroupweb.example")}
            ranges={[
              { loc: [0, 0], title: "ReactTransitionGroup + Web Anim. API" },
              { loc: [0, 11] },
              { loc: [13, 24] },
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              react-motion
            </Heading>
            <List textColor="tertiary">
              <ListItem>La spécificité de react-motion est surtout son approche de l'animation : utiliser une timing function différente</ListItem>
              <ListItem>On anime avec <Code>spring()</Code>, plutôt que <Code>cubic-bezier()</Code> (et celles par défaut : <Code>ease</Code>, <Code>ease-in</Code>, …)</ListItem>
              <ListItem>On ne parle plus de <Code>duration</Code> ou <Code>delay</Code>, mais de <Code>stiffness</Code> (rigidité) et <Code>damping</Code> (amortissement)</ListItem>
              <ListItem>Un autre avantage est de pouvoir redéfinir l'animation en cours en gardant les règles physique de la 1re animation</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              react-motion with Motion
            </Heading>
            <List textColor="tertiary">
              <ListItem>Ne gère pas l'entrée et la sortie du DOM</ListItem>
              <ListItem>Permet d'animer un seul élément</ListItem>
              <ListItem>L'équivalent pour plusieurs éléments est <Code>StaggeredMotion</Code></ListItem>
            </List>
            <DropDown6 label="Click me">
              <Menu/>
            </DropDown6>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-reactmotion-motion.example")}
            ranges={[
              { loc: [0, 0], title: "react-motion with Motion" },
              { loc: [0, 7] },
              { loc: [7, 8] },
              { loc: [10, 15] },
            ]}
          />

          {/*<Slide>
            <Heading size={2} textColor="secondary">
              react-motion with TransitionMotion
            </Heading>
            <List textColor="tertiary">
              <ListItem>Anime une liste d'éléments qui entrent ou quittent le DOM</ListItem>
              <ListItem>Pas très pratique pour animer un seul élément</ListItem>
              <ListItem>Plutôt prévu pour animer une liste de mêmes éléments</ListItem>
            </List>
            <DropDown7 label="Click me">
              <Menu/>
            </DropDown7>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-reactmotion-transitionmotion.example")}
            ranges={[
              { loc: [0, 0], title: "react-motion with TransitionMotion" },
              { loc: [26, 31] },
              { loc: [0, 4] },
              { loc: [5, 9] },
              { loc: [10, 23] },
              { loc: [31, 42] },
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              react-flip-move
            </Heading>
            <List textColor="tertiary">
              <ListItem>Anime une liste d'éléments qui entrent ou quittent le DOM</ListItem>
              <ListItem>Utilisent la FLIP technique pour animer automatiquement le déplacement de tous les éléments</ListItem>
              <ListItem>Peut animer n'importe quel ensemble d'éléments</ListItem>
              <ListItem>Pas très utile pour animer un seul élément</ListItem>
            </List>
            <DropDown8 label="Click me">
              <Menu/>
            </DropDown8>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/dropdown-flipmove.example")}
            ranges={[
              { loc: [0, 0], title: "react-flip-move" },
              { loc: [0, 1] },
              { loc: [3, 13] },
              { loc: [13, 23] },
            ]}
          />*/}

          {/******************************************/}

          <Slide bgColor="secondary">
            <Heading caps fit size={2} textColor="tertiary">
              List Items
            </Heading>
            <Heading caps fit size={2} textColor="primary">
              Use Case
            </Heading>
          </Slide>

          <Slide align="middle flex-start">
            <ListHandler>
              <List4 />
            </ListHandler>
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              ReactCSSTransitionGroup
            </Heading>
            <List textColor="tertiary">
              <ListItem>Anime en CSS un élément qui entre ou quitte le DOM</ListItem>
              <ListItem>Mais ne prévoit rien pour animer les autres éléments</ListItem>
              <ListItem>Ni le changement de position</ListItem>
              <ListItem>Et ne donne aucun contrôle car API haut niveau</ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/list1-1.example")}
            ranges={[
              { loc: [0, 0], title: "ReactCSSTransitionGroup" },
              { loc: [0, 11] },
            ]}
          />

          <Slide align="middle flex-start">
            <ListHandler>
              <List1 />
            </ListHandler>
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              ReactTransitionGroup + Web Animation API
            </Heading>
            <List textColor="tertiary">
              <ListItem>Permet d'animer en JavaScript un élément qui entre ou quitte le DOM</ListItem>
              <ListItem>Rien n'est prévu pour animer les autres éléments, mais on a la main pour pouvoir le faire</ListItem>
              <ListItem>Et faire aussi le changement de position par nous même</ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/list2-1.example")}
            ranges={[
              { loc: [0, 0], title: "ReactTransitionGroup + Web Animation API" },
              { loc: [0, 9] },
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/list2-2.example")}
            ranges={[
              { loc: [0, 0], title: "ReactTransitionGroup + Web Animation API" },
              { loc: [0, 14] },
              { loc: [15, 26] },
              { loc: [27, 38] },
            ]}
          />

          <Slide align="middle flex-start">
            <ListHandler>
              <List2 />
            </ListHandler>
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              ReactTransitionGroup + Web Animation API
            </Heading>
            <List textColor="tertiary">
              <ListItem>Ne fonctionne pas correctement pour Remove dans cet exemple</ListItem>
              <ListItem>Dû au fait qu'il y a perte de correlation entre l'index de la collection et les éléments dans le DOM car l'élément supprimé est toujours à sa place dans le DOM pendant l'animation</ListItem>
              <ListItem>Solution qui ne marche que pour une liste verticale d'éléments de taille identique</ListItem>
              <ListItem>Le problème est de devoir recréer les calculs du Layout en JS</ListItem>
            </List>
          </Slide>


          <Slide>
            <Heading size={2} textColor="secondary">
              react-motion with TransitionMotion
            </Heading>
            <List textColor="tertiary">
              <ListItem>Anime un élément qui entre ou quitte le DOM</ListItem>
              <ListItem>Il est théoriquement possible de faire bouger les autres éléments mais pas si simple à cause de l'API de react-motion</ListItem>
              <ListItem>react-motion abstrait le DOM via sa structure <Code>TransitionStyle</Code></ListItem>
              <ListItem>Il n'est pas simple non plus de définir une animation d'un point de départ à un point d'arrivé car react-motion est pensé pour le changement de position toujours avec animation</ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/list3-1.example")}
            ranges={[
              { loc: [0, 0], title: "react-motion" },
              { loc: [0, 10] },
              { loc: [19, 33] },
            ]}
          />

          <Slide align="middle flex-start">
            <ListHandler>
              <List3 />
            </ListHandler>
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              react-motion with TransitionMotion
            </Heading>
            <List textColor="tertiary">
              <ListItem>Les exemples existant montrant les animations de ré-ordonnement ne sont pas fait avec <Code>TransitionMotion</Code></ListItem>
              <ListItem>Ils sont fait avec <Code>Motion</Code> ou <Code>StaggeredMotion</Code>, cela veut dire qu'il n'y a pas de modification du DOM</ListItem>
              <ListItem>Les éléments ne changent jamais d'ordre dans le DOM, tout le Layout est fait avec <Code>translate</Code></ListItem>
            </List>
          </Slide>


          <Slide>
            <Heading size={2} textColor="secondary">
              react-flip-move
            </Heading>
            <List textColor="tertiary">
              <ListItem>Anime une liste d'éléments qui entrent, quittent ou bougent dans le DOM</ListItem>
              <ListItem>Grâce à la FLIP technique, pas besoin de recalculer le Layout, on ne fait que calculer la différence entre l'ancien et le nouveau DOM</ListItem>
              <ListItem>La librairie react-flip-move gèrent automatiquement les animations d'ajout, suppréssion et déplacement</ListItem>
              <ListItem>Elle possède plusieurs ensemble d'animations, et permet aussi de personnaliser</ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/list4-1.example")}
            ranges={[
              { loc: [0, 0], title: "react-flip-move" },
              { loc: [0, 12] },
            ]}
          />

          <Slide align="middle flex-start">
            <ListHandler>
              <List4 />
            </ListHandler>
          </Slide>

          <Slide bgColor="secondary">
            <Heading caps fit size={2} textColor="tertiary">
              Transformation
            </Heading>
            <Heading caps fit size={2} textColor="primary">
              Use Case
            </Heading>
          </Slide>

          <Slide>
            <OpenBehavior>
              <ItemTransform1 />
            </OpenBehavior>
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              F.L.I.P. hand made
            </Heading>
            <List textColor="tertiary">
              <ListItem>Faire la différence de Layout, avant et après changement avec <Code>getBoundingClientRect()</Code></ListItem>
              <ListItem>Avant: <Code>componentWillReceiveProps</Code></ListItem>
              <ListItem>Après: <Code>componentDidUpdate</Code></ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/transform1-1.example")}
            ranges={[
              { loc: [0, 0], title: "F.L.I.P. hand made" },
              { loc: [30, 47] },
              { loc: [0, 13] },
              { loc: [14, 24] },
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/transform1-2.example")}
            ranges={[
              { loc: [0, 0], title: "F.L.I.P. hand made" },
              { loc: [4, 5] },
              { loc: [7, 15] },
              { loc: [16, 18] },
              { loc: [20, 33] },
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              F.L.I.P. hand made
            </Heading>
            <List textColor="tertiary">
              <ListItem>Il manque la gestion du remove : il faudrait gérer un component 'fantôme'</ListItem>
              <ListItem><Code>getBoundingClientRect()</Code> est par rapport au viewport, il faudrait qu'il soit relatif pour gérer l'imbrication</ListItem>
              <ListItem>Ce sont des problématiques que gère déjà react-flip-move</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              react-flip-move + fork
            </Heading>
            <List textColor="tertiary">
              <ListItem>Gérer le scale en plus du translate</ListItem>
              <ListItem>Il faut placer les <Code>transform-origin</Code> des éléments de l'item au coin top left de l'item</ListItem>
            </List>
          </Slide>


          <Slide>
            <ListTransform2 />
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../src/examples/transform2-1.example")}
            ranges={[
              { loc: [0, 0], title: "react-flip-move + fork" },
              { loc: [0, 7] },
              { loc: [14, 26] },
            ]}
          />

          <Slide>
            <Heading size={1} fit caps>
              Merci
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              <Link href="https://twitter.com/HarrisFreddy">@harrisfreddy</Link>
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
