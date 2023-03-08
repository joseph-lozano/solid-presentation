import { createSignal } from "solid-js";

export default function SlideZero() {
  const [step, setStep] = createSignal(0);

  const visible = (x: number) => (step() >= x ? "visible" : "invisible");
  return (
    <>
      <div onClick={() => setStep((s) => s + 1)}>
        <div class="card card-side w-[1200px] bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">What we are going to cover...</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  <div>How React works</div>
                </li>
                <li class={visible(2)}>
                  <div>How Solid works</div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
