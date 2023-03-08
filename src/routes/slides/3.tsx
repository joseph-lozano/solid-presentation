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
            <h2 class="card-title">Derived Signals and Effects</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  Effects are functions that wrap signals and
                  re-executes them whenever a the signal's value changes.
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
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
