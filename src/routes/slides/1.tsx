import Prism from "prismjs";
import { createSignal } from "solid-js";

const code = `
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div onClick={() => setCount(count() + 1)}>
      Count: {count)}
    </div>
  );
}

render(() => <Counter />, document.getElementById('app'));
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

export default function SlideOne() {
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
                <code innerHTML={html}></code>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Solid looks a lot like React</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>Solid uses JSX</li>
                <li class={visible(2)}>Solid has components</li>
                <li class={visible(3)}>
                  <span class="code">createSignal</span> looks a lot like{" "}
                  <span class="code">useState</span>
                </li>
                <li class={visible(4)}>
                  A <span class="code">render</span> function loads the App
                </li>
                <li class={`${visible(5)} mt-8 list-none font-bold`}>
                  But there are major differences
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
