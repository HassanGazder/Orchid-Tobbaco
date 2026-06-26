import { useEffect, useMemo, useRef, useState } from 'react';
import featureVideoFile from '../Videos/Video one.mp4';
import secondVideoFile from '../Videos/video2.mp4';

const heroVideoId = 'DmDS3W4C_nk';
const heroVideoSrc = `https://www.youtube.com/embed/${heroVideoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playlist=${heroVideoId}`;
const featureVideoSrc = featureVideoFile;
const secondVideoSrc = secondVideoFile;

const packVariants = [
  {
    id: 'classic',
    name: 'Classic Red',
    description: 'A luxurious balance of rich tobacco notes and restrained elegance, designed for the discerning connoisseur.',
    color: 'bg-[#a05530]',
    media: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gold',
    name: 'Golden Reserve',
    description: 'An opulent expression with gilded accents and a refined aroma palette for premium presentation.',
    color: 'bg-[#c2a264]',
    media: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'menthol',
    name: 'Menthol Frost',
    description: 'Silky charcoal notes meet crisp menthol in a design that feels both modern and timeless.',
    color: 'bg-[#4c7658]',
    media: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
  },
];

const portfolioItems = [
  { title: 'Signature Editions', subtitle: 'Curated blends with premium accents.' },
  { title: 'Limited Drops', subtitle: 'Exclusive launches in sculptural packaging.' },
  { title: 'Cigar Collection', subtitle: 'Bold silhouettes and deep tobacco richness.' },
  { title: 'Gift Concierge', subtitle: 'Personalized sets for high-end gifting.' },
];

const packs = [
  {
    label: 'Royal Red',
    category: 'Whisky',
    price: '$32.00 – $37.50',
    url: new URL('../images/p1.webp', import.meta.url).href,
    hoverUrl: new URL('../images/p1bg.jpg', import.meta.url).href,
    description: 'American Blend (high grade)',
  },
  {
    label: 'Royal Limited Edition',
    category: 'Whisky',
    sale: '10% OFF',
    price: '$449.00',
    url: new URL('../images/p2.webp', import.meta.url).href,
    hoverUrl: new URL('../images/p2bg.jpg', import.meta.url).href,
    description: 'Premium special edition (high grade)',
  },
  {
    label: 'Royal Blue',
    category: 'Whisky',
    price: '$349.00',
    url: new URL('../images/p3.webp', import.meta.url).href,
    hoverUrl: new URL('../images/p3bg.jpg', import.meta.url).href,
    description: 'American blend (high grade)',
  },
];

const galleryImages = [
  { src: new URL('../images/gallery1.jpg', import.meta.url).href, cols: 'xl:col-span-2 xl:row-span-2' },
  { src: new URL('../images/gallery2.webp', import.meta.url).href },
  { src: new URL('../images/gallery3.webp', import.meta.url).href },
  { src: new URL('../images/gallery4.webp', import.meta.url).href },
  { src: new URL('../images/gallery5.jpg', import.meta.url).href },
  { src: new URL('../images/gallery6.jpg', import.meta.url).href },
  { src: new URL('../images/gallery7.jpg', import.meta.url).href },
];

function App() {
  const [hoveredPack, setHoveredPack] = useState(null);
  const [activeVariant, setActiveVariant] = useState(packVariants[0].id);
  const heroPlayerRef = useRef(null);
  const featureVideoRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      heroPlayerRef.current = new window.YT.Player('heroPlayer', {
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    window.onYouTubeIframeAPIReady = initPlayer;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const activeVariantData = useMemo(
    () => packVariants.find((variant) => variant.id === activeVariant),
    [activeVariant]
  );

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
    <main className="min-h-screen bg-[#f7f1e8] text-slate-900">
      <nav className="border-b border-slate-300/40 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <div className="font-serif text-xl font-semibold tracking-[0.18em] text-slate-900">Orchid Tobacco</div>
          <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.35em] text-slate-700 md:flex">
            <a href="#hero" className="transition hover:text-slate-950">Home</a>
            <a href="#products" className="transition hover:text-slate-950">Products</a>
            <a href="#gallery" className="transition hover:text-slate-950">Gallery</a>
            <a href="#portfolio-video" className="transition hover:text-slate-950">Film</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative overflow-hidden border-b border-slate-200/60 bg-white w-full">
        <div className="relative h-[560px] w-full overflow-hidden">
          <iframe
            id="heroPlayer"
            className="absolute inset-0 h-full w-full"
            src={heroVideoSrc}
            title="Orchid Tobacco banner video"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/60" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
              <p className="mx-auto mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/90 backdrop-blur-sm">
                Luxury tobacco experience
              </p>
              <h1 className="text-4xl font-serif tracking-tight text-white sm:text-5xl lg:text-6xl">
                Crafted for the modern connoisseur.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80">
                A premium tobacco homepage with cinematic motion, rich imagery, and refined product storytelling designed to impress.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-lg transition hover:bg-slate-100"
                >
                  View Collection
                </a>
                <a
                  href="#gallery"
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/20"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Curated selections for every moment</p>
            <h2 className="mt-3 text-4xl font-serif tracking-tight text-slate-950">Brands</h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packs.map((pack, index) => (
            <article
              key={pack.label}
              onMouseEnter={() => setHoveredPack(index)}
              onMouseLeave={() => setHoveredPack(null)}
              className="group overflow-hidden border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)] transition duration-500 ease-out"
            >
              <div className="relative overflow-hidden">
                {pack.sale ? (
                  <div className="absolute left-4 top-4 rounded-full bg-slate-950 px-3 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-lg">
                    {pack.sale}
                  </div>
                ) : null}
                <div className="relative h-[420px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={pack.url}
                    alt={pack.label}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out"
                  />
                  <img
                    src={hoveredPack === index ? pack.hoverUrl : pack.url}
                    alt={`${pack.label} hover`}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex justify-center px-4 pb-4">
                  <button
                    type="button"
                    className="translate-y-4 rounded-full border border-slate-950 bg-slate-950 px-5 py-2 text-[0.72rem] uppercase tracking-[0.35em] text-white shadow-lg opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Quick view
                  </button>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{pack.category}</p>
                <h3 className="text-2xl font-serif tracking-tight text-slate-950">{pack.label}</h3>
                <p className="text-sm leading-7 text-slate-600">{pack.description}</p>
                <p className="text-xl font-semibold text-slate-950">{pack.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="second-video" className="relative overflow-hidden bg-white w-full mt-10">
        <div className="relative h-[700px] w-full overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={secondVideoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          <div className="absolute left-6 bottom-6 rounded-full bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white">
            Cinematic motion
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Gallery</p>
          <h2 className="mt-3 text-4xl font-serif tracking-tight text-slate-950">Captured premium moments</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            A refined visual gallery of product and lifestyle imagery, placed between motion sections to enrich the brand experience.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden bg-slate-100 ${image.cols || ''} h-[310px]`}
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* <section id="feature-video" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Feature Video</p>
            <h2 className="text-4xl font-serif tracking-tight text-slate-950">Premium product story in motion</h2>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Reserve this section for your showcase video. Replace the placeholder source with your own clip to give the brand a cinematic moment on the homepage.
            </p>
            <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Video content</p>
              <p className="text-sm leading-7 text-slate-600">
                Use this section for a product film, mood piece, or rich brand story that complements the hover interactions above.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-[0_32px_110px_rgba(15,23,42,0.08)]">
            <video
              className="h-[520px] w-full object-cover"
              src=""
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1524777312-1e796d32df35?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>
        </div>
      </section> */}

      {/* <section id="variants" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Interactive Variation</p>
              <h2 className="mt-3 text-4xl font-serif tracking-tight text-slate-950">Variant Switcher</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Choose a different mood with the product selector. Each option updates the frame with an elegant fade and refined motion.
              </p>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_28px_90px_rgba(15,23,42,0.08)]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Selected variant</p>
                <h3 className="mt-3 text-3xl font-serif text-slate-950">{activeVariantData.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{activeVariantData.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {packVariants.map((variant) => {
                  const selected = variant.id === activeVariant;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setActiveVariant(variant.id)}
                      className={`inline-flex h-12 items-center gap-3 rounded-full border px-4 text-sm transition duration-300 ease-out ${
                        selected ? 'border-slate-900 bg-slate-950 text-white shadow-[0_12px_35px_rgba(15,23,42,0.12)]' : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`inline-flex h-3.5 w-3.5 rounded-full ${variant.color}`} />
                      <span>{variant.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_32px_110px_rgba(15,23,42,0.08)]">
            <div className="overflow-hidden rounded-[2rem] bg-slate-100">
              <img
                key={activeVariantData.id}
                src={activeVariantData.media}
                alt={activeVariantData.name}
                className="h-[520px] w-full object-cover transition duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="second-video" className="relative overflow-hidden bg-white w-full">
        <div className="relative h-[560px] w-full overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={secondVideoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section> */}

      <section id="portfolio-video" className="relative overflow-hidden bg-white w-full">
        <div className="relative h-[560px] w-full overflow-hidden">
          <video
            ref={featureVideoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={featureVideoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-900 bg-slate-950 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
        aria-label="Back to top"
      >
        ↑
      </button>

      <footer className="bg-slate-950 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">O</div>
              <span className="text-xl font-serif uppercase tracking-[0.28em]">Orchid</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Orchid Tobacco Dubai offers a refined presentation experience, blending premium packaging with elegant interaction for a luxurious brand showcase.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="text-sm">info@orchidtobacco.com</span>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-slate-500">Links</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#hero" className="transition hover:text-white">Home</a></li>
              <li><a href="#products" className="transition hover:text-white">Products</a></li>
              <li><a href="#gallery" className="transition hover:text-white">Gallery</a></li>
              <li><a href="#portfolio-video" className="transition hover:text-white">Film</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-slate-500">Products</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><span className="transition text-slate-300 hover:text-white">Royal Red</span></li>
              <li><span className="transition text-slate-300 hover:text-white">Royal Limited Edition</span></li>
              <li><span className="transition text-slate-300 hover:text-white">Royal Blue</span></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-slate-500">Contact</p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>UAE — Sheikh Zayed Road</p>
              <p>Dubai, UAE 00000</p>
              <p>+971 55 012 3456</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 px-6 py-6 text-sm text-slate-500 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
            <span>© 2026 Orchid Tobacco Dubai. All rights reserved.</span>
            <span>Site by Orchid Creative Studio</span>
          </div>
        </div>
      </footer>
    </main>
    </div>
  );
}

export default App;
