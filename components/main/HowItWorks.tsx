import { steps } from "@/constants/steps";
import { SectionHeading } from "./SectionHeading";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <SectionHeading
          eyebrow="How It Works"
          title="Create and share your quiz in 3 simple steps"
        />

        <div className="relative grid gap-10 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-[16.5%] right-[16.5%] top-4 hidden border-t border-dashed border-lime-300 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-lime-50 text-xs font-bold text-lime-600">
                  {step.number}
                </div>

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lime-50 text-lime-600">
                  <Icon size={23} />
                </div>

                <h3 className="mb-1 text-sm font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="max-w-[180px] text-xs leading-5 text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}