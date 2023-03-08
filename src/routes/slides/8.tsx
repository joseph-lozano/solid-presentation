import Prism from "prismjs";
import { createSignal, Show } from "solid-js";

const code = `
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter1() {
  const [count, setCount] = createSignal(0);
  
  return (
    <button onClick={() => setCount(count() + 1)}>
        Current count: {count()}
    </button>
  );
}

function Counter2() {
  const [count, setCount] = createSignal(0);
    
  return (
    <button onClick={() => setCount(count() + 1)}>
        Current count: {count()}
    </button>
  );
}

render(() => <><Counter1 /><Counter2 /></> , document.getElementById("app")!);
`;

const code2 = `
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);
  
function Counter1() {
  return (
    <button onClick={() => setCount(count() + 1)}>
        Current count: {count()}
    </button>
  );
}

function Counter2() {
  return (
    <button onClick={() => setCount(count() + 1)}>
        Current count: {count()}
    </button>
  );
}

render(() => <><Counter1 /><Counter2 /></> , document.getElementById("app")!);
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");
const html2 = Prism.highlight(code2, Prism.languages.javascript, "javascript");

export default function SlideEight() {
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
                  when={step() < 4}
                  fallback={<code innerHTML={html2}></code>}
                >
                  <code innerHTML={html}></code>
                </Show>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Components are a lie</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  Solid Signals are <strong>NOT</strong> state. They are reader
                  and writer functions for updating subscribers.
                </li>
                <li class={visible(2)}>
                  Signals do not have to be placed in a component.
                </li>
                <li class={visible(3)}>
                  In this this code, each button can be incremented separately.{" "}
                  <a target="_blank" href="https://playground.solidjs.com/anonymous/e1096cbf-9f2d-46c1-816c-cac801455eb8">
                    Playground
                  </a>
                </li>
                <li class={visible(4)}>
                  But if you move the signal out of the component, then both
                  buttons will increment together.
                  <a target="_blank" href="https://playground.solidjs.com/anonymous/4053f863-cda2-4b02-af79-09be9cc6ce0f">
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
