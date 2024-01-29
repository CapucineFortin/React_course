import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [selected, setSelected] = useState('');

  function clickHandler(selectedButon) {
    setSelected(selectedButon);
  }

  const examples = ['components', 'jsx', 'props', 'state']

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) =>
              <CoreConcept
                {...concept}
                key={concept.title}
              />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {examples.map((example) =>
              <TabButton onClick={() => clickHandler(example)} active={selected == example}>
                {EXAMPLES[example].title}
              </TabButton>)}
          </menu>
          <div id="tab-content">
            {selected == '' ?
              <p>Select an item !</p> :
              <>
                <h1>{EXAMPLES[selected].title}</h1>
                <p>{EXAMPLES[selected].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selected].code}
                  </code>
                </pre>
              </>
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
