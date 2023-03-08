
import Prism from "prismjs";
import { createSignal } from "solid-js";

const code = `
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    console.log("I am logged only once per second")
  }, 1000)

  return (
    <div onClick={() => setCount(count() + 1)}>
      Count: {count)}
    </div>
  );
}

render(() => <Counter />, document.getElementById('app'));
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

export default function SlideSix() {
  const [step, setStep] = createSignal(10);

  const visible = (x: number) => (step() >= x ? "visible" : "invisible");
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
      />
      <div onClick={() => setStep((s) => s + 1)}>
        <div class="card card-side bg-base-100 shadow-xl w-[1200px]">
          <div data-theme="night">
            <div class="mockup-code h-full pl-3">
              <pre>
                <code innerHTML={html}></code>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Solid components run only once</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>Because the code never runs more than once, <span class="code">setInterval</span> is safe to call.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
