import Prism from "prismjs";
import { createSignal, Show } from "solid-js";

const code = `
// This works in React
import React, { useState } from "react";

function Counter({propsCount}) {
  const [shouldShow, setShouldShow] = useState(false);
  
  return (
    <div onClick={() => setShouldShow(!shouldShow)}>
      {shouldShow ? "shouldShow is true" : "shouldShow is false"}
    </div>
  );
}

// This does not work in SolidJS
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [shouldShow, setShouldShow] = createSignal(false);
  
  return (
    <div onClick={() => setShouldShow(!shouldShow)}>
      {shouldShow() ? "shouldShow is true" : "shouldShow is false"}
    </div>
  );
}

render(() => <Counter /> , document.getElementById("app")!);
`;

const code2 = `
import { createSignal, Show, Match, Switch } from 'solid-js';

function Counter() {
  const [shouldShow, setShouldShow] = createSignal(false);
  const [count, setCount] = createSignal(0)

  return (
    <>
      <button onClick={() => {
        setShouldShow(!shouldShow())
        setCount(count() + 1)
        }}>
        Click me
      </button>
      <Show 
        when={shouldShow()} 
        fallback={<span>should Show is false</span>}>
         <span>should Show is true</span>
       </Show>
      <Switch>
        <Match when={count() % 3 == 0}>Count is 0</Match>
        <Match when={count() % 3 == 1}>Count is 1</Match>
        <Match when={count() % 3 == 2}>Count is 2</Match>
      </Switch>
    </>
  );
}
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");
const html2 = Prism.highlight(code2, Prism.languages.javascript, "javascript");

export default function SlideSeven() {
  const [step, setStep] = createSignal(0);

  const visible = (x: number) => (step() >= x ? "visible" : "invisible");
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
      />
      <div onClick={() => setStep((s) => s + 1)}>
        <div class="card card-side w-[1200px] bg-base-100 shadow-xl">
          <div data-theme="night">
            <div class="mockup-code h-full pl-3">
              <pre>
                <Show
                  when={step() < 3}
                  fallback={<code innerHTML={html2}></code>}
                >
                  <code innerHTML={html}></code>
                </Show>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Control flow</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  In React, because components are re-run every time state or
                  props change, control-flow can be embedded in the component
                </li>
                <li class={visible(2)}>
                  Conversly, because solid components{" "}
                  <span class="bold">do not</span> re-run, other methods have to
                  be used for control flow.{" "}
                  <a
                    href="https://playground.solidjs.com/anonymous/e32ce560-c677-43b2-a913-0e27b061ae62"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Playground
                  </a>
                </li>
                <li class={visible(3)}>
                  Solid provides the <span class="code">Show</span> and{" "}
                  <span class="code">Match</span> components.{" "}
                  <a
                    href="https://playground.solidjs.com/anonymous/b179c2d2-121f-4ad3-8f3e-6d0c9f66a088"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Playground
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
