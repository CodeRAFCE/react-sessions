import FunctionalComponent from "./FunctionalComponent"
import ClassComponent from "./ClassComponent"
import { Component } from "react"


const AboutUs = () => {
  return (
    <div>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>

        <FunctionalComponent user={{ name: "John Doe", age: 30, occupation: "Software Engineer" }} />
        <ClassComponent user={{ name: "John Doe", age: 30, occupation: "Software Engineer" }} />
    </div>
  )
}

export default AboutUs