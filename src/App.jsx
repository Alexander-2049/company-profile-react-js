import Section1 from "./components/Sections/Section1"
import Section2 from "./components/Sections/Section2"
import Section3 from "./components/Sections/Section3"
import Section4 from "./components/Sections/Section4"
import Section5 from "./components/Sections/Section5"

function App() {

  return (
    <div>
      <div id="page1">
      <Section1/>
      <Section2/>
      </div>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}

export default App
