import Prism from "prismjs";
import { createSignal } from "solid-js";

const code = `
function createSignal(value) {
  const subscribers = new Set();

  const read = () => {
    const listener = getCurrentListener();
    if (listener) subscribers.add(listener);
    return value;
  };

  const write = (nextValue) => {
    value = nextValue;
    for (const sub of subscribers) sub.run();
  };

  return [read, write];
}

createEffect(() => {
  console.log("The count is now", count());
});
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

export default function SlideTwo() {
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
            <div class={`mockup-code h-full pl-3 ${visible(7)}`}>
              <pre>
                <code innerHTML={html}></code>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">How solid works</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  Solid is build on 3 fundamental primitives:
                  <ol>
                    <li class={visible(2)}>Signals</li>
                    <li class={visible(3)}>Effects</li>
                    <li class={visible(4)}>Memos</li>
                  </ol>
                </li>

                <li class={visible(5)}>What are Signals?</li>
                <li class={visible(6)}>
                  Signals are event emitters that hold a list of subscriptions.
                  They notify their subscribers whenever their value changes.
                </li>
                <li class={visible(7)}>
                  Here is a basic implementation of{" "}
                  <span class="code">createSignal</span>, which returns{" "}
                  <span class="code">read</span> and{" "}
                  <span class="code">write</span> functions.
                </li>
                <li class={visible(8)}>
                  The reader, <span class="code">count()</span> is a function
                  that is called by the anonymous function in{" "}
                  <span class="code">createEffect</span>.
                  <span class="code">getCurrentListener()</span> can read from
                  the stack and add the effect to the list of subscribers.
                </li>
                <li class={visible(8)}>
                  When the writer, <span class="code">setCount()</span> is
                  called, all of the subscribers, (effects) are re-executed.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
