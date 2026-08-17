import { useMemo, useRef, useEffect, useState } from "react";
import { Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import GalleryCard from "../components/GalleryCard";
import Lightbox from "../components/Lightbox";
import { galleryImages, galleryCategories } from "../data/gallery";

function CategoryTabs({ categories, active, setActive, counts }) {
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = categories.indexOf(active);
    const btn = containerRef.current?.children[idx + 1];
    if (btn) setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [active, categories]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mx-auto max-w-full"
    >
      <span
        className="absolute top-1.5 bottom-1.5 rounded-full bg-primary transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`relative z-10 flex items-center gap-1.5 font-rajdhani font-bold uppercase tracking-wide text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap ${
            active === cat ? "text-black" : "text-body hover:text-heading"
          }`}
        >
          {cat}
          <span
            className={`text-[10px] font-semibold ${
              active === cat ? "text-black/60" : "text-muted"
            }`}
          >
            {counts[cat]}
          </span>
        </button>
      ))}
    </div>
  );
}

// Bento span pattern — every 7th tile gets more room so the grid never feels flat.
const spanPattern = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const counts = useMemo(() => {
    const c = { All: galleryImages.length };
    galleryCategories
      .filter((cat) => cat !== "All")
      .forEach((cat) => {
        c[cat] = galleryImages.filter((img) => img.category === cat).length;
      });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === active),
    [active]
  );

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <>
      <PageHero
        eyebrow="Inside The Gym"
        title="Our"
        highlight="Gallery"
        description="Take a closer look inside Your Fitness Club — from high-energy workouts and modern training spaces to the people, passion, and community that make every session worth showing up for."
        image="/gallerybanner.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="Discover Our Story"
        secondaryBtnLink="/about"
      />

      <section className="py-10 sm:py-16 md:py-24">
        <div className="container-x px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <CategoryTabs
              categories={galleryCategories}
              active={active}
              setActive={setActive}
              counts={counts}
            />
            <p className="font-rajdhani text-xs uppercase tracking-wide text-muted text-center flex items-center gap-2">
              <Camera size={14} className="text-primary" />
              Showing {filtered.length} of {galleryImages.length} photos
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] xs:auto-rows-[170px] sm:auto-rows-[200px] gap-3 sm:gap-4 lg:gap-5">
            {filtered.map((image, i) => (
              <div
                key={image.id}
                className={`animate-fadeIn ${spanPattern[i % spanPattern.length]}`}
              >
                <GalleryCard
                  image={image}
                  onClick={() => openLightbox(i)}
                  className="h-full"
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-3 py-12 sm:py-16 px-4 text-center">
              <p className="font-teko text-2xl sm:text-3xl text-heading uppercase">
                No Photos Found
              </p>
              <p className="text-center text-muted font-inter text-sm">
                Try a different category to see more of the gym.
              </p>
              <button
                onClick={() => setActive("All")}
                className="font-rajdhani font-bold uppercase text-sm text-primary mt-2 hover:underline"
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface px-8 sm:px-14 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative text-center sm:text-left">
              <h3 className="font-teko text-3xl sm:text-4xl font-semibold uppercase text-heading leading-none">
                See It <span className="text-primary">In Person</span>
              </h3>
              <p className="font-inter text-sm text-body mt-2 max-w-md">
                Photos only tell half the story — book a free tour and try a session on us.
              </p>
            </div>
            <Link to="/contact" className="btn-primary group relative shrink-0">
              Book A Tour
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
