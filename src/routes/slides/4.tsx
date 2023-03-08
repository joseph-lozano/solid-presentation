import Prism from "prismjs";
import { createSignal, Match, Switch } from "solid-js";

const code = `
import { render } from 'solid-js/web';
import { createSignal, createMemo } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  const squaredCount = () => {
    console.log("I run everytime \`squaredCount\` is invoked")
    return count() * count()
  }

  const squaredMemo = createMemo(() => {
    console.log("I run only when \`setCount\` is invoked")
    return count() * count()
  })

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>
        Click Me
      </button>

      <div>The square of the count is {squaredCount()}</div>
      <div>The square of the count is {squaredCount()}</div>
      <div>The square of the count is {squaredCount()}</div>
 
      <div>The square of the count is {squaredMemo()}</div>
      <div>The square of the count is {squaredMemo()}</div>
      <div>The square of the count is {squaredMemo()}</div>
    </>
  );
}
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

export default function SlideFour() {
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
            <div class={`mockup-code h-full pl-3 ${visible(1)}`}>
              <pre>
                <Switch>
                  <Match when={step() >= 2}>
                    <code innerHTML={html}></code>
                  </Match>
                </Switch>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Memos and Resources</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  Memos are a kind of "smart" derived signal that only re-runs
                  when the underlying signal value changes.
                </li>
                <li class={visible(2)}>
                  In this example, the <span class="code">console.log</span> in{" "}
                  <span class="code">squaredCount</span> runs 3 times for
                  everytime <span class="code">setCount</span> is invoked.
                </li>
                <li class={visible(3)}>
                  The <span class="code">console.log</span> in{" "}
                  <span class="code">squaredMemo</span> runs just once for each{" "}
                  <span class="code">setCount</span> invokation.
                </li>
              </ol>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
