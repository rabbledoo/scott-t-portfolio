import SocialInstance from "../../src/assets/SocialInstance.png";
import Maze from "../../src/assets/Maze.png"
import WiseMonkey from "../../src/assets/wisemonkey.jpeg"

function openKwitter() {
  window.open("https://kenzie-se-q2.github.io/kwitter-nddudash/");
}

function openMaze() {
  window.open("https://kenzieacademy-students.github.io/se-q1-maze-rabbledoo/")
}

export const Projects = [
  {
    image: SocialInstance,
    title: "Social-inStance",
    text: "Social Media Application using React.js, JavaScript, the AntD Component Library",
    button: "Check it out!",
    click: openKwitter,
  },
  {
    image: Maze,
    title: "Vanilla JavaScript Maze",
    text: "This is a maze made with Vanilla JavaScript using a Model View Controller (MVC) design pattern and DOM manipulation principles",
    button: "Check it out!",
    click: openMaze,
  },
  {
    image: WiseMonkey,
    title: "More coming soon!!",
    text: "Stay tuned!!",
    button: "Check it out!",
    click: openKwitter,
  },

];
