import Prism from "prismjs";
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
            <h2 class="card-title">By the way...</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  <div>These slides were written in SolidJS!</div>
                </li>
                <li class={visible(2)}>
                  <code>
                    <a href="https://github.com/joseph-lozano/solid-presentation">
                      https://github.com/joseph-lozano/solid-presentation
                    </a>
                  </code>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
