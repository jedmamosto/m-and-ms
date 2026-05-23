import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M&Ms | Buy Handcrafted Treasures Direct From Filipino MSMEs",
  description: "Shop authentic native delicacies, artisan crafts, and handwoven apparel directly supporting local MSMEs. Direct-to-artisan fair trade across the Philippines.",
  openGraph: {
    title: "M&Ms | Buy Handcrafted Treasures Direct From Filipino MSMEs",
    description: "Shop authentic native delicacies, artisan crafts, and handwoven apparel directly from regional cooperatives.",
    url: "https://m-and-ms.ph",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://m-and-ms.ph/#organization",
        "name": "M&Ms MSME Marketplace",
        "url": "https://m-and-ms.ph",
        "description": "Authentic Filipino MSME delicacies, artisan crafts, and handwoven apparel supporting local communities."
      },
      {
        "@type": "WebSite",
        "@id": "https://m-and-ms.ph/#website",
        "url": "https://m-and-ms.ph",
        "name": "M&Ms MSME Marketplace",
        "publisher": {
          "@id": "https://m-and-ms.ph/#organization"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://m-and-ms.ph/#itemlist",
        "name": "Curated Filipino MSME Delicacies & Artisan Crafts",
        "numberOfItems": 8,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Inabel Handwoven Table Runner",
              "description": "Threads of thick hand-spun local cotton woven together on century-old wooden looms featuring the geometric binakol pattern.",
              "offers": {
                "@type": "Offer",
                "price": 850,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Abel Weavers of Vigan"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "reviewCount": 38
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Single-Origin Davao Dark Chocolate (70%)",
              "description": "Deep, earthy cocoa aroma conched in small batches, displaying cherries and toasted walnut notes from the foothills of Mt. Talomo.",
              "offers": {
                "@type": "Offer",
                "price": 350,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Malagos Cacao Farmers"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.8,
                "reviewCount": 64
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Product",
              "name": "Batangas Ground Kapeng Barako",
              "description": "Pure Liberica beans offering a dark-roasted, woody grind with a strong, smoky aroma and sweet anise-like undertones.",
              "offers": {
                "@type": "Offer",
                "price": 280,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Lipa Coffee Growers Coop"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.7,
                "reviewCount": 112
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Product",
              "name": "Yakan Handwoven Sling Bag",
              "description": "Vibrant handloomed geometric pattern sling bag capturing Basilan's visual culture in a bag that takes three days to weave.",
              "offers": {
                "@type": "Offer",
                "price": 1850,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Yakan Weavers of Basilan"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 5.0,
                "reviewCount": 22
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Product",
              "name": "Paete Acacia Salad Bowl",
              "description": "Smooth, heavy acacia wood hand-carved from a single timber block finished in food-safe local beeswax.",
              "offers": {
                "@type": "Offer",
                "price": 1200,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Woodcarvers of Paete"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "reviewCount": 45
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Product",
              "name": "Benguet Wildflower Honey",
              "description": "Raw, unfiltered Cordillera wildflower honey carrying golden-amber mountain pine forest floral notes.",
              "offers": {
                "@type": "Offer",
                "price": 480,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Benguet Apiculture Coop"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.8,
                "reviewCount": 57
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Product",
              "name": "VCO Handcrafted Soap Set",
              "description": "Three organic coconut oil soap bars cold-processed and infused with farm-pressed calamansi, lemongrass, and moringa.",
              "offers": {
                "@type": "Offer",
                "price": 390,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Leyte Coco-Growers Assoc"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "reviewCount": 73
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Product",
              "name": "Romblon Abaca Sun Hat",
              "description": "A wide-brimmed tropical abaca palm hat woven in Mimaropa using sustainable natural buri leaves.",
              "offers": {
                "@type": "Offer",
                "price": 950,
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
              },
              "brand": {
                "@type": "Brand",
                "name": "Romblon Weavers Guild"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.6,
                "reviewCount": 29
              }
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. ABOVE-THE-FOLD / HERO SECTION (conversion-ux & mobile-responsive) */}
      <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col items-center text-center bg-radial from-primary/5 via-transparent to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1c190a_1px,transparent_1px),linear-gradient(to_bottom,#1b1c190a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 fade-in">
          {/* Pre-headline tag (design-system) */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-3 border-on-surface bg-tertiary-fixed text-on-tertiary-fixed font-label-bold text-xs uppercase tracking-wider mb-6 rotate-[-1.5deg] shadow-[3px_3px_0px_0px_var(--color-secondary)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Support Local, Buy Direct
          </span>

          {/* Headline - Benefit-driven, names avatar, under 12 words (brand-color-application Technique 2: Gradient on Heading) */}
          <h1 className="font-display-lg text-4xl md:text-6xl tracking-tight leading-[1.1] max-w-3xl mb-6">
            Buy Handcrafted Treasures Direct <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-container inline-block drop-shadow-[2px_2px_0px_var(--color-on-surface)] mt-2">
              From Filipino MSMEs
            </span>
          </h1>

          {/* Sub-headline - Names mechanism, under 20 words (show-not-tell) */}
          <p className="font-body-lg text-base md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed bg-surface/95 p-4 rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            Discover handcrafted treasures direct from Filipino MSMEs. Help protect ancestral weaving traditions, local coffee farms, and family cocoa crops with fair-trade shipping.
          </p>

          {/* Primary CTA (conversion-ux rules: Action + Benefit + First-Person) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/demo?tab=quiz"
              className="cta-primary cta-pulse w-full sm:w-auto min-h-[48px] text-center uppercase tracking-wide"
              id="hero-cta-btn"
            >
              Find my perfect craft match
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto min-h-[48px] px-6 flex items-center justify-center border-3 border-on-surface bg-surface text-on-surface hover:bg-surface-container font-button-text text-button-text uppercase tracking-wide rounded shadow-[3px_3px_0px_0px_var(--color-on-surface)] transition-all hover:translate-y-[3px] hover:translate-x-[3px] hover:shadow-none"
            >
              Open Sandbox Demo
            </Link>
          </div>

          {/* Proof Row - Defensible credentials (conversion-ux stats pattern) */}
          <div className="mt-12 py-5 border-y-3 border-on-surface bg-surface-container w-full max-w-3xl flex flex-wrap justify-around items-center gap-y-4 gap-x-6 text-xs text-on-surface font-label-bold text-label-bold uppercase tracking-wider rounded shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">★</span>
              <span>100% Filipino-Owned</span>
            </div>
            <div className="h-6 w-[3px] bg-on-surface hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">★</span>
              <span>Direct-to-Artisan</span>
            </div>
            <div className="h-6 w-[3px] bg-on-surface hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">★</span>
              <span>Supporting 50+ Communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (conversion-ux logo pattern) */}
      <section className="py-8 border-y-3 border-on-surface bg-surface-container-low relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-label-bold text-[10px] uppercase tracking-wider text-on-surface-variant font-bold mb-4">
            Celebrating Native Heritages From Across the Islands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 font-label-bold text-[11px] text-on-surface uppercase tracking-wide">
            <span className="border-2 border-on-surface px-3 py-1 bg-surface-container-highest rounded rotate-[-1.5deg] shadow-[2px_2px_0px_0px_var(--color-secondary)]">ILOCOS COTTON WEAVERS</span>
            <span className="border-2 border-on-surface px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded rotate-[2deg] shadow-[2px_2px_0px_0px_var(--color-secondary)]">BATANGAS LIBERICA GROWERS</span>
            <span className="border-2 border-on-surface px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded rotate-[-1deg] shadow-[2px_2px_0px_0px_var(--color-secondary)]">DAVAO CACAO FARMS</span>
            <span className="border-2 border-on-surface px-3 py-1 bg-surface-container rounded rotate-[1deg] shadow-[2px_2px_0px_0px_var(--color-secondary)]">PAETE WOODWORKERS GUILD</span>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY GRID (brand-color-application Technique 4: Color on Grid) */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-primary-container text-on-primary-container border-3 border-on-surface px-4 py-1 rounded-full font-label-bold text-xs uppercase tracking-wide rotate-[-1deg] shadow-[3px_3px_0px_0px_var(--color-secondary)] mb-4">
            Explore Categories 📦
          </span>
          <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface tracking-tight mb-4">
            Four Pillars of Local Craftsmanship
          </h2>
          <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
            Every purchase funds multi-generational workshops, sustainable agroforestry, and direct craft-trade jobs.
          </p>
        </div>

        {/* 2x2 grid representing color per grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 - Yellow bg */}
          <div className="card bg-tertiary-fixed hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] transition-all">
            <div className="w-10 h-10 rounded border-2 border-on-surface bg-surface flex items-center justify-center font-bold text-lg mb-6 shadow-[2px_2px_0px_0px_var(--color-on-surface)]">
              🍯
            </div>
            <h3 className="font-headline-md text-lg text-on-surface mb-2">Food Products</h3>
            <p className="font-body-md text-on-surface-variant text-xs leading-relaxed">
              Mt. Talomo single-origin chocolates, highland wildflower forest honey, and dark ground Barako coffee beans.
            </p>
          </div>

          {/* Card 2 - Blue/Indigo bg */}
          <div className="card bg-secondary-fixed text-on-secondary-fixed hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] transition-all">
            <div className="w-10 h-10 rounded border-2 border-on-surface bg-surface flex items-center justify-center font-bold text-lg mb-6 shadow-[2px_2px_0px_0px_var(--color-on-surface)]">
              🏺
            </div>
            <h3 className="font-headline-md text-lg text-on-secondary-fixed mb-2">Artisan Crafts</h3>
            <p className="font-body-md text-on-secondary-fixed-variant text-xs leading-relaxed">
              Geometric hand-loomed table textiles from Vigan and sustainable acacia wood tableware turned by hand in Paete.
            </p>
          </div>

          {/* Card 3 - Orange bg */}
          <div className="card bg-primary-fixed text-on-primary-fixed hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] transition-all">
            <div className="w-10 h-10 rounded border-2 border-on-surface bg-surface flex items-center justify-center font-bold text-lg mb-6 shadow-[2px_2px_0px_0px_var(--color-on-surface)]">
              👜
            </div>
            <h3 className="font-headline-md text-lg text-on-primary-fixed mb-2">Apparel & Bags</h3>
            <p className="font-body-md text-on-primary-fixed-variant text-xs leading-relaxed">
              Adjustable tribal pattern crossbody sling bags and light abaca palm braided hats woven in Romblon.
            </p>
          </div>

          {/* Card 4 - White/Surface bg */}
          <div className="card bg-surface-container hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] transition-all">
            <div className="w-10 h-10 rounded border-2 border-on-surface bg-surface flex items-center justify-center font-bold text-lg mb-6 shadow-[2px_2px_0px_0px_var(--color-on-surface)]">
              🧼
            </div>
            <h3 className="font-headline-md text-lg text-on-surface mb-2">Organic Wellness</h3>
            <p className="font-body-md text-on-surface-variant text-xs leading-relaxed">
              Cold-processed soap bars infused with farm-pressed virgin coconut oil, lemongrass, and citrusy calamansi extract.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MERCHANT SPOTLIGHT (brand-color-application Technique 5: One Tint Layout & show-not-tell copy) */}
      <section className="py-16 md:py-24 border-y-3 border-on-surface bg-secondary-container/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface text-center mb-12 uppercase tracking-tight">
            Merchant Spotlight
          </h2>

          {/* Indigo tinted block */}
          <div className="glass-card flex flex-col md:flex-row items-center gap-8 border-3 border-on-surface bg-secondary-fixed/30 shadow-[6px_6px_0px_0px_var(--color-secondary)]">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded border-3 border-on-surface bg-gradient-to-tr from-indigo-700 to-violet-800 text-white flex items-center justify-center font-black text-3xl shrink-0 shadow-[4px_4px_0px_0px_var(--color-on-surface)]">
              NR
            </div>
            <div>
              <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed border-2 border-on-surface px-2.5 py-0.5 rounded font-label-bold text-[10px] uppercase mb-3">
                Master Weaver • Vigan, Ilocos
              </span>
              <h3 className="font-headline-md text-xl text-on-surface mb-4">Nanay Rosa&apos;s Clacking Wooden Loom</h3>
              
              {/* Show-not-tell descriptive copy */}
              <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed italic mb-6">
                &ldquo;In the dry season heat, the air inside our Vigan workshop smells of raw, unspun cotton. From 6:00 AM, the room fills with the steady, rhythmic clacking of wooden foot-pedals. My calloused hands guide the flying wooden shuttle across the loom, sliding thick colored threads into geometric diamond patterns that protect dining tables for generations.&rdquo;
              </p>
              
              <div>
                <h4 className="font-headline-md text-on-surface text-sm uppercase">Rosa Abel cooperative</h4>
                <p className="font-body-md text-on-surface-variant text-xs">Supplying traditional handwoven table runners since 1984</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT PREVIEW SECTION (brand-color-application Technique 1: Color as Product Background) */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-tertiary-container text-on-tertiary-container border-2 border-on-surface px-3 py-1 rounded font-label-bold text-xs uppercase tracking-wide rotate-[1.5deg] shadow-[2.5px_2.5px_0px_0px_var(--color-on-surface)] mb-4">
            Curated Favorites
          </span>
          <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface tracking-tight mb-4">
            Locally Grown, Hand-Turned, and Loomed
          </h2>
          <p className="font-body-md text-on-surface-variant text-sm">
            Crafted in small family batches, representing the soil and traditions of our regional makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="card hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] transition-all">
            {/* Technique 1: Color as Product Background frame */}
            <div className="w-full aspect-square rounded border-3 border-on-surface bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-black text-3xl shadow-[3px_3px_0px_0px_var(--color-on-surface)] mb-6">
              🌾
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="tag text-[10px] uppercase">Ilocos Region</span>
              <span className="font-headline-md text-base text-primary">₱850</span>
            </div>
            <h4 className="font-headline-md text-base text-on-surface mb-2">Inabel Table Runner</h4>
            <p className="font-body-md text-on-surface-variant text-xs leading-relaxed mb-4">
              Threads of thick hand-spun local cotton woven into the geometric &ldquo;binakol&rdquo; patterns.
            </p>
            <Link
              href="/demo"
              className="w-full text-center px-4 py-2 bg-surface hover:bg-surface-container border-3 border-on-surface rounded font-button-text text-xs uppercase shadow-[3px_3px_0px_0px_var(--color-secondary)] inline-block transition-all hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none"
            >
              Configure in Sandbox
            </Link>
          </div>

          {/* Card 2 */}
          <div className="card hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-primary)] transition-all">
            {/* Technique 1: Color as Product Background frame */}
            <div className="w-full aspect-square rounded border-3 border-on-surface bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center text-white font-black text-3xl shadow-[3px_3px_0px_0px_var(--color-on-surface)] mb-6">
              🍫
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="tag text-[10px] uppercase">Davao Region</span>
              <span className="font-headline-md text-base text-primary">₱350</span>
            </div>
            <h4 className="font-headline-md text-base text-on-surface mb-2">Single-Origin Davao Dark Chocolate</h4>
            <p className="font-body-md text-on-surface-variant text-xs leading-relaxed mb-4">
              Velvety dark chocolate bar conched in small batches, displaying cherries and toasted walnut notes.
            </p>
            <Link
              href="/demo"
              className="w-full text-center px-4 py-2 bg-surface hover:bg-surface-container border-3 border-on-surface rounded font-button-text text-xs uppercase shadow-[3px_3px_0px_0px_var(--color-secondary)] inline-block transition-all hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none"
            >
              Configure in Sandbox
            </Link>
          </div>

          {/* Card 3 */}
          <div className="card hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] transition-all">
            {/* Technique 1: Color as Product Background frame */}
            <div className="w-full aspect-square rounded border-3 border-on-surface bg-gradient-to-br from-amber-800 to-yellow-900 flex items-center justify-center text-white font-black text-3xl shadow-[3px_3px_0px_0px_var(--color-on-surface)] mb-6">
              🪵
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="tag text-[10px] uppercase">Calabarzon</span>
              <span className="font-headline-md text-base text-primary">₱1,200</span>
            </div>
            <h4 className="font-headline-md text-base text-on-surface mb-2">Paete Acacia Salad Bowl</h4>
            <p className="font-body-md text-on-surface-variant text-xs leading-relaxed mb-4">
              Heavy acacia wood turned on a lathe and finished in food-safe local beeswax.
            </p>
            <Link
              href="/demo"
              className="w-full text-center px-4 py-2 bg-surface hover:bg-surface-container border-3 border-on-surface rounded font-button-text text-xs uppercase shadow-[3px_3px_0px_0px_var(--color-secondary)] inline-block transition-all hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none"
            >
              Configure in Sandbox
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FAQ BLOCK (conversion-ux FAQ pattern) */}
      <section className="py-16 md:py-24 bg-surface-container-low border-t-3 border-on-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline-lg text-3xl text-on-surface tracking-tight text-center mb-16 uppercase">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-surface-container-lowest rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
              <h4 className="font-headline-md text-lg text-on-surface mb-2">How are products shipped to buyers?</h4>
              <p className="font-body-md text-on-surface-variant text-sm">
                We work directly with regional cooperatives and local postal services. Once an order is processed, the items are packaged at the maker&apos;s workshop and shipped straight to your doorstep.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
              <h4 className="font-headline-md text-lg text-on-surface mb-2">How much of my payment goes to the creators?</h4>
              <p className="font-body-md text-on-surface-variant text-sm">
                We operate on a fair-trade, direct-to-artisan model. Over 85% of checkout revenues go directly to the MSME sellers, keeping multi-generational workshops thriving.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
              <h4 className="font-headline-md text-lg text-on-surface mb-2">Can MSMEs apply to join the marketplace?</h4>
              <p className="font-body-md text-on-surface-variant text-sm">
                Yes! Under the seller portal in the demo page, MSMEs can submit their brand details and schedule a video verification call to list products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA STACK (conversion-ux final summary & sticky mobile helper) */}
      <section className="py-20 bg-surface-container text-center border-t-3 border-on-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface tracking-tight mb-4 uppercase">
            Support Pinoy Artisans Today
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Take our 2-minute Matchmaker Quiz to discover unique coffee, textiles, and woodcrafts suited for your home.
          </p>
          <Link
            href="/demo?tab=quiz"
            className="cta-primary min-h-[48px] w-full sm:w-auto px-10 text-center uppercase tracking-wide"
            id="final-cta-btn"
          >
            Find my craft match
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t-3 border-on-surface bg-surface text-center text-xs text-on-surface-variant font-label-bold text-label-bold uppercase">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} M&Ms Marketplace. Direct-to-Artisan Fair Trade.</p>
          <div className="flex gap-6">
            <Link href="/demo?tab=apply" className="hover:text-primary hover:underline">Apply as Merchant</Link>
            <a href="#" className="hover:text-primary hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
