import Button from "./Button";

export default function CTASection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container-x">
        <div className="relative grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
          <div className="relative bg-surface flex flex-col justify-center px-8 sm:px-14 py-16 lg:py-0 gap-6 z-10">
            {/* <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-primary/10 blur-3xl" /> */}
            <span className="eyebrow relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-[2px] before:bg-primary">
              No Excuses
            </span>
            <h2 className="font-teko text-5xl sm:text-6xl font-semibold uppercase text-heading leading-[0.95]">
              Your Only <br />
              <span className="text-primary">Limit Is You</span>
            </h2>
            <p className="font-inter text-body max-w-sm">
              Step into a space built for discipline, community, and results.
              Come see the YOUR FITNESS CLUB experience for yourself.
            </p>
            <Button as="a" href="/contact" className="w-fit">
              Take A Tour
            </Button>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[420px]">
            <img
              src="https://i.pinimg.com/736x/c6/6b/b5/c66bb51a170031065d442ee4a6985a9c.jpg"
              alt="Luxury modern gym interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-black/30 to-transparent lg:bg-gradient-to-r lg:from-surface lg:via-black/10 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
