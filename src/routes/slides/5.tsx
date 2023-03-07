import Prism from "prismjs";
import { createSignal } from "solid-js";

const code = `
import React, { useState } from "react";

function Counter({propsCount}) {
  const [count, setCount] = useState(0);

  setInterval(() => {
     console.log("I get logged every second")
  }, 1000);

  return (
    <div onClick={() => setCount(count + 1)}>
      Count: {count + propsCount}
    </div>
  );
}
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

export default function SlideFive() {
  const [step, setStep] = createSignal(0);

  const visible = (x: number) => (step() >= x ? "visible" : "invisible");
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
      />
      <div onClick={() => setStep((s) => s + 1)}>
        <div class="card card-side w-[1600px] bg-base-100 shadow-xl">
          <div data-theme="night">
            <div class="mockup-code h-full pl-3">
              <pre>
                <code innerHTML={html}></code>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">How React works</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  In React, a component's code runs on every render
                </li>
                <li class={visible(2)}>
                  Components re-render everytime state or props change.
                </li>
                <li class={visible(3)}>
                  a new <span class="code">setInterval</span> gets created every render.
                </li>
                <li class={visible(4)}>
                  I crashed serveral browser tabs testing this code because of the this memory leak.
                </li>
                <li class={`${visible(5)} mt-8 list-none font-bold`}>
                  SolidJS does not have these footguns.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
