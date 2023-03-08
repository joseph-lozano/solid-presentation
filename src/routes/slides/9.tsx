import { createSignal } from "solid-js";

export default function SlideNine() {
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
          <div class="card-body">
            <h2 class="card-title">Where to learn more</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  <code>https://solidjs.com/guides</code>
                  <div>A much better explanation of how Solid works</div>
                </li>
                <li class={visible(2)}>
                  <code>https://solidjs.com/tutorial</code>
                  <div>Interactive tutorial going through SolidJS</div>
                </li>
                <li class={visible(3)}>
                  <code>https://playground.solidjs.com/</code>
                  <div>SolidJS playground. Try things out.</div>
                </li>
                <li class={visible(4)}>
                  <div>
                    <code>https://twitter.com/RyanCarniato</code>
                  </div>
                  <div>
                    <code>https://dev.to/ryansolid</code>
                  </div>
                  <div>
                    Ryan Carniato is the creator of SolidJS. One of the most
                    knowledgeable folks out there about JS frameworks.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
