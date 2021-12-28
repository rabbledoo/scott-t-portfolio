import SocialInstance from "../../src/assets/SocialInstance.png";
import Maze from "../../src/assets/Maze.png"
import WiseMonkey from "../../src/assets/wisemonkey.jpeg"
import SuperReddit from "../../src/assets/SuperReddit.png"
import EpicNFT from "../../src/assets/EpicNFT.png"
import RosenbergScreenshot from "../../src/assets/RosenbergScreenshot.png"

function openKwitter() {
  window.open("https://kenzie-se-q2.github.io/kwitter-nddudash/");
}

function openMaze() {
  window.open("https://kenzieacademy-students.github.io/se-q1-maze-rabbledoo/")
}

function openSuperReddit(){
  window.open("https://superreddit.herokuapp.com/")
}

function openEpicNFT(){
  window.open("https://epic-nfts-frontend-seven.vercel.app/")
}

function openShareButton(){
  window.open("https://investrosenberg.com/")
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
    text: "Maze made with JavaScript using a Model View Controller (MVC) design pattern and DOM manipulation principles",
    button: "Check it out!",
    click: openMaze,
  },
  {
    image: SuperReddit,
    title: "SuperReddit",
    text: "Forum/discussion application.  UI/UX, API and database built with Python, Django, PostgreSQL and deployed to a Heroku Server",
    button: "Check it out!",
    click: openSuperReddit,
  },
  {
    image: EpicNFT,
    title: "EpicNFT",
    text: "NFT generator app.  UI/UX built with React.js, JavaScript, and Ethers.js (connect to ethereum blockchain).  Smart contract built using Solidity and Hardhat.js (deploy to ethereum blockchain)",
    button: "Check it out!",
    click: openEpicNFT,
  },
  {
    image: RosenbergScreenshot,
    title: "Share Button",
    text: "Share button feature using 3rd party package AddToAny. My client asked me to update this feature for their landing page.",
    button: "Check it out!",
    click: openShareButton,
  }

];
