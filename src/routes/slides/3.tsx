import Prism from "prismjs";
import { createSignal } from "solid-js";

const code = `
import { render } from 'solid-js/web';
import { createSignal, createEffect } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);
  createEffect(() => {
    console.log("The count is now", count());
  });

  const squaredCount = () => count() * count()

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>
        Click Me
      </button>
      <div>The square of the count is {squaredCount()}</div>
    </>
  );
}

render(() => <Counter /> , document.getElementById("app")!);
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

export default function SlideThree() {
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
            <div class={`mockup-code h-full pl-3 ${visible(0)}`}>
              <pre>
                <code innerHTML={html}></code>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Signals, Effects and Derived Signals</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(0)}>
                  Signals are the primary primitive for SolidJS. Calling{" "}
                  <span class="code">createSignal</span> returns a reader and
                  writer, much like React's <span class="code">useState</span>
                </li>
                <li class={visible(1)}>
                  Effects are functions that wrap signals and re-executes them
                  whenever a the signal's value changes.
                </li>

                <li class={visible(2)}>
                  The Solid compiler replaces signals inside of JSX templates
                  with effects that update the DOM.
                </li>
                <li class={visible(3)}>
                  "Derived Signals" are functions that wrap signals.
                </li>
                <li class={visible(4)}>
                  When <span class="code">setCount</span> is invoked,{" "}
                  <span class="code">squaredCount</span> will be automatically
                  updated.
                </li>
                <li class={visible(5)}>
                  When <span class="code">setCount</span> is invoked, the
                  function inside <span class="code">createEffect</span> will be
                  automatically re-executed.
                </li>
                <li class={visible(6)}>
                  <a
                    href="https://playground.solidjs.com/anonymous/6da3858f-6087-49a1-93fb-8359448201ca"
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
