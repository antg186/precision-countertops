import {
  Phone,
  MessageSquareText,
  ShieldCheck,
  Hammer,
  Home as HomeIcon,
  Clock,
  CheckCircle2,
} from "lucide-react";

const services = [
  "Laminate Countertops",
  "Postform Countertops",
  "Custom / Square Edge Laminate",
  "Solid Surface Countertops",
  "Butcher Block Countertops",
  "Quartz Countertops",
  "Granite Countertops",
  "Countertop Measurement",
  "Countertop Installation",
  "Demo & Removal",
  "Rental Property Countertops",
  "Multifamily Countertops",
  "Commercial Countertops",
];

const serviceAreas = [
  "Houston",
  "Spring",
  "The Woodlands",
  "Conroe",
  "Cypress",
  "Tomball",
  "Willis",
  "Brenham",
  "College Station",
  "Katy",
  "Magnolia",
  "Montgomery",
];

const countertopStyles = [
  {
    title: "Postform Countertops",
    text: "A practical countertop option with a smooth formed front edge. Great for kitchens, laundry rooms, rentals, and everyday residential projects.",
    image: "/images/gallery-wide-kitchen.jpg",
  },
  {
    title: "Custom / Square Edge Laminate",
    text: "A clean countertop option for layouts needing custom sizing, straight edges, seams, radius corners, or specialty details.",
    image: "/images/gallery-white-island.jpg",
  },
  {
    title: "Butcher Block Countertops",
    text: "A warm wood countertop option for islands, work areas, laundry rooms, and select kitchen layouts.",
    image: "/images/hero-butcher-block.jpg",
  },
  {
    title: "Solid Surface Countertops",
    text: "A smooth, repairable surface option using materials like Corian. Great for a clean and seamless-looking finish.",
    image: "/images/gallery-solid-surface-kitchen.jpg",
  },
  {
    title: "Quartz & Granite Countertops",
    text: "Durable stone countertop options for customers looking for a natural stone or engineered stone surface.",
    image: "/images/gallery-quartz-kitchen.jpg",
  },
];

const galleryImages = [
  {
    src: "/images/gallery-white-island.jpg",
    title: "Custom Kitchen Countertops",
    text: "Calcutta Marble laminate countertop with a clean island layout and topmount sink.",
  },
  {
    src: "/images/gallery-wide-kitchen.jpg",
    title: "Residential Kitchen Countertop Installation",
    text: "A full kitchen countertop project with a clean, finished layout.",
  },
  {
    src: "/images/gallery-vanity-tops.jpg",
    title: "Multifamily Vanity Tops",
    text: "Long vanity top setup with multiple sink openings for shared-use spaces.",
  },
  {
    src: "/images/gallery-solid-surface-kitchen.jpg",
    title: "Solid Surface Kitchen Countertops",
    text: "Solid surface countertops with a clean speckled finish and practical kitchen layout.",
  },
  {
    src: "/images/gallery-solid-surface-full-height.jpg",
    title: "Full-Height Solid Surface Backsplash",
    text: "Clean white solid surface countertop with matching full-height backsplash.",
  },
  {
    src: "/images/gallery-quartz-kitchen.jpg",
    title: "Quartz Kitchen Countertops",
    text: "Quartz countertop project with a durable stone surface and polished kitchen finish.",
  },
];

const trustPoints = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "30+ Years Experience",
    text: "Decades of hands-on countertop fabrication and installation experience.",
  },
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: "Family-Owned",
    text: "A local residential and multifamily countertop company serving Greater Houston.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Licensed & Insured",
    text: "Professional service with the experience and coverage customers expect.",
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "Fabricated In-House",
    text: "Many countertop projects are fabricated in our own shop for better control and quality.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div>
            <p className="text-xl font-bold">Precision Countertops</p>
            <p className="text-xs font-medium uppercase tracking-widest text-stone-500">
              Greater Houston Area
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            <a href="#services" className="hover:text-stone-950">
              Services
            </a>
            <a href="#commercial" className="hover:text-stone-950">
              Commercial
            </a>
            <a href="#styles" className="hover:text-stone-950">
              Styles
            </a>
            <a href="#process" className="hover:text-stone-950">
              Quote Process
            </a>
            <a href="#quote" className="hover:text-stone-950">
              Request Quote
            </a>
            <a href="#areas" className="hover:text-stone-950">
              Service Areas
            </a>
            <a href="#contact" className="hover:text-stone-950">
              Contact
            </a>
          </nav>

          <a
            href="tel:2814439785"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Call Office
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-stone-200">
              Family-owned • Licensed & insured • 30+ years experience
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Residential, Multifamily & Commercial Countertops in Greater
              Houston
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Precision Countertops is a family-owned countertop shop helping
              homeowners, rental property owners, multifamily properties, and
              select commercial projects with laminate, postform, butcher block,
              solid surface, quartz, and granite countertops across the Greater
              Houston Area.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Laminate",
                "Postform",
                "Solid Surface",
                "Quartz",
                "Granite",
                "Butcher Block",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-stone-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:2814439785"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-4 font-semibold text-stone-950 shadow-lg transition hover:bg-amber-400"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 281-443-9785
              </a>

              <a
                href="sms:2815476887"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <MessageSquareText className="mr-2 h-5 w-5" />
                Text Photos
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-stone-400">
              Send photos, rough measurements, material preference, and city by
              text or email for the fastest starting quote.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-white text-stone-950">
              <img
                src="/images/hero-butcher-block.jpg"
                alt="Butcher block island countertop installed in a residential kitchen"
                className="h-80 w-full object-cover"
              />

              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                  Real Countertop Projects
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Countertops for kitchens, rentals, and multifamily spaces.
                </h2>

                <p className="mt-4 leading-7 text-stone-700">
                  From laminate and solid surface to butcher block, quartz, and
                  granite, we help customers choose practical countertop options
                  for their project, timeline, and budget.
                </p>

                <div className="mt-8 grid gap-3">
                  <a
                    href="sms:2815476887"
                    className="rounded-2xl bg-stone-950 p-5 text-white transition hover:bg-stone-800"
                  >
                    <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                      Text Photos
                    </p>
                    <p className="mt-2 text-2xl font-bold">832-703-2596</p>
                  </a>

                  <a
                    href="mailto:quotes@precisionctops.com"
                    className="rounded-2xl border border-stone-200 bg-stone-50 p-5 text-stone-950 transition hover:bg-stone-100"
                  >
                    <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                      Email Photos
                    </p>
                    <p className="mt-2 text-xl font-bold">
                      quotes@precisionctops.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-800">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Countertop services for residential and multifamily projects.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6 font-semibold shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commercial" className="bg-stone-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Residential • Multifamily • Commercial
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Countertops for homes, rentals, multifamily properties, and select
              commercial spaces.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-300">
              Precision Countertops helps with practical countertop solutions
              for single-family homes, rental properties, apartment units,
              office spaces, break rooms, vanity areas, and commercial projects
              across the Greater Houston Area.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Homeowners",
                text: "Kitchen, bathroom, laundry room, island, and workspace countertop projects.",
              },
              {
                title: "Rental Properties",
                text: "Durable countertop options for rental homes and investment properties.",
              },
              {
                title: "Multifamily Units",
                text: "Countertop replacement and installation options for apartment and multifamily properties.",
              },
              {
                title: "Commercial Projects",
                text: "Countertop options for offices, break rooms, vanity areas, workspaces, and select commercial spaces.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="styles" className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Countertop Styles
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Choose the countertop style that fits your project.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              Not every countertop project needs the same material or edge
              style. We help customers compare practical options like postform,
              custom laminate, butcher block, solid surface, quartz, and
              granite.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {countertopStyles.map((style) => (
              <div
                key={style.title}
                className="group relative min-h-80 overflow-hidden rounded-3xl border border-stone-200 bg-stone-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={style.image}
                  alt={style.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-transparent" />

                <div className="relative flex h-full min-h-80 flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold">{style.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-stone-200">
                    {style.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-3">
        <div className="rounded-3xl bg-stone-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Materials
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Brands and materials we work with.
          </h2>

          <p className="mt-5 leading-7 text-stone-300">
            Turnaround depends on material selection, edge details, project
            size, and scheduling.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          {[
            {
              title: "Wilsonart",
              text: "Popular laminate options for kitchens, bathrooms, laundry rooms, rentals, and workspaces.",
            },
            {
              title: "Formica",
              text: "Durable laminate selections with many colors, patterns, and textures for practical countertop projects.",
            },
            {
              title: "Corian",
              text: "Solid surface material with a clean look, smooth feel, and repairable surface.",
            },
            {
              title: "Butcher Block",
              text: "Warm wood-look countertop options for islands, work areas, laundry rooms, and select kitchen layouts.",
            },
            {
              title: "Quartz",
              text: "Engineered stone countertop options for customers wanting a durable and polished surface.",
            },
            {
              title: "Granite",
              text: "Natural stone countertop options for customers wanting a classic stone look.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Browse Colors
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Explore countertop colors directly from the manufacturers.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              Color availability can change by brand, supplier, material,
              finish, and project timeline. For the most accurate options,
              browse the official manufacturer color pages and send us the
              colors you like with your quote request.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wilsonart",
                material: "Laminate & Solid Surface",
                text: "Browse Wilsonart laminate and solid surface colors, patterns, stone looks, woodgrains, and modern surface options.",
                link: "https://www.wilsonart.com/color-search",
              },
              {
                title: "Formica",
                material: "Laminate & Solid Surface",
                text: "Explore Formica laminate colors and Everform solid surface options for residential and commercial projects.",
                link: "https://www.formica.com/en-us/products/lamtrade/colors",
              },
              {
                title: "Corian",
                material: "Solid Surface",
                text: "View Corian solid surface colors for clean, smooth, durable, and repairable countertop designs.",
                link: "https://www.corian.com/-colors-of-corian-r-",
              },
              {
                title: "HI-MACS",
                material: "Solid Surface",
                text: "Browse HI-MACS solid surface colors including whites, neutrals, concrete looks, terrazzo styles, and marble-inspired designs.",
                link: "https://www.lxhausys.com/us/products/himacs-solid-surface/himacs-finder",
              },
              {
                title: "Staron",
                material: "Solid Surface",
                text: "Explore Staron solid surface color collections for residential, commercial, and specialty countertop projects.",
                link: "https://www.radianz-quartz.com/staron/ca/color/list",
              },
              {
                title: "Avonite",
                material: "Solid Surface",
                text: "Browse Avonite solid surface colors and patterns for bold, modern, and practical countertop applications.",
                link: "https://aristechsurfaces.com/market/architectural/avonite",
              },
              {
                title: "Hanex",
                material: "Solid Surface",
                text: "View Hanex solid surface colors including white, cream, gray, concrete, and marble-inspired options.",
                link: "https://www.hanex.com/collections/all_colors.php",
              },
            ].map((brand) => (
              <a
                key={brand.title}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                  {brand.material}
                </p>

                <h3 className="mt-3 text-2xl font-bold">{brand.title}</h3>

                <p className="mt-4 text-sm leading-6 text-stone-600">
                  {brand.text}
                </p>

                <p className="mt-6 font-semibold text-amber-700 group-hover:text-amber-800">
                  Browse colors →
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm leading-6 text-amber-950">
              Tip: When requesting a quote, send the brand name, color name,
              finish, and a screenshot or link if possible. Final availability
              may depend on supplier stock, project details, and material lead
              times.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                Quote Process
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                A better way to start your countertop quote.
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-600">
                Instead of sending someone out before knowing the project
                details, we start with photos and basic information. This helps
                save time and gives you a clearer next step.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "1. Send Photos",
                  text: "Text or email photos of your current countertops, cabinets, or layout drawings.",
                },
                {
                  title: "2. Share Location",
                  text: "Send your city or ZIP code so we can confirm service availability.",
                },
                {
                  title: "3. Choose Material",
                  text: "Let us know if you want laminate, postform, butcher block, solid surface, quartz, or granite.",
                },
                {
                  title: "4. Schedule Next Step",
                  text: "If the project is a good fit, we’ll help move it toward measure and installation.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-stone-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Need pricing faster?</h3>
            <p className="mt-3 text-stone-300">
              Text photos, measurements, material preference, and city to
              281-547-6887, or email them to quotes@precisionctops.com.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                Project Gallery
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Real countertop projects completed for local homes and
                properties.
              </h2>

              <p className="mt-5 text-lg leading-8 text-stone-600">
                Browse examples of countertop projects including solid surface,
                butcher block, kitchen countertops, vanity tops, and residential
                installations.
              </p>
            </div>

            <a
              href="#quote"
              className="inline-flex rounded-2xl bg-stone-950 px-6 py-4 text-center font-semibold text-white transition hover:bg-stone-800"
            >
              Start a Quote
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.title}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {image.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
          Service Areas
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Serving Greater Houston and surrounding communities.
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-stone-200 bg-white px-5 py-4 font-semibold shadow-sm"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Common countertop questions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              Here are a few things to know before starting your countertop
              project with Precision Countertops.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                question: "Do you offer free estimates?",
                answer:
                  "We start by reviewing photos, measurements, location, material preference, and cabinet status first. This helps us understand the project before scheduling any in-person measure.",
              },
              {
                question: "Can you quote from photos?",
                answer:
                  "Photos and rough measurements can help us provide a starting point. Final pricing may depend on the exact layout, material, edge details, and site conditions.",
              },
              {
                question: "When should new cabinets be measured?",
                answer:
                  "For the most accurate countertop measurement, new cabinets should be fully installed before the final measure is scheduled.",
              },
              {
                question: "What materials do you work with?",
                answer:
                  "We work with laminate, postform, butcher block, solid surface, quartz, and granite countertop materials, including brands like Wilsonart, Formica, and Corian.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We serve the Greater Houston Area and surrounding communities. Availability may depend on project size, schedule, material, and location.",
              },
              {
                question: "Do you do commercial work?",
                answer:
                  "Yes. Precision Countertops works on residential, multifamily, and select commercial countertop projects. Commercial availability may depend on scope, location, material, timeline, and scheduling.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-bold">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-stone-100 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Request a Quote
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Send the details we need to price your countertop project.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              The more details you send up front, the easier it is for us to
              understand the project before scheduling a measure.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Send your project details to:
              </h3>

              <div className="mt-5 grid gap-4">
                <a
                  href="sms:2815476887"
                  className="rounded-2xl bg-stone-950 px-5 py-4 text-center font-semibold text-white transition hover:bg-stone-800"
                >
                  Text Photos: 281-547-6887
                </a>

                <a
                  href="mailto:quotes@precisionctops.com"
                  className="rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 text-center font-semibold text-stone-950 transition hover:bg-white"
                >
                  Email Photos: quotes@precisionctops.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">
              What to include for a faster quote
            </h3>

            <div className="mt-8 grid gap-4">
              {[
                {
                  title: "1. Photos of the layout",
                  text: "Send photos of your current countertops, cabinets, or project area.",
                },
                {
                  title: "2. City or ZIP code",
                  text: "This helps us confirm service availability and scheduling.",
                },
                {
                  title: "3. Material preference",
                  text: "Let us know if you want laminate, postform, butcher block, solid surface, quartz, or granite.",
                },
                {
                  title: "4. Cabinet status",
                  text: "Tell us if cabinets are existing, being replaced, or already installed.",
                },
                {
                  title: "5. Rough measurements",
                  text: "Measurements, drawings, or a simple sketch can help us provide a better starting point.",
                },
                {
                  title: "6. Timeline",
                  text: "Let us know when you are hoping to have the project measured or installed.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                >
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Contact Precision Countertops
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Start your countertop quote today.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
              Call the office, text photos, or email your layout, measurements,
              material preference, and city. We’ll review the project details
              and help determine the next step.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">Before scheduling a measure</h3>
              <p className="mt-3 leading-7 text-stone-300">
                For new cabinets, the cabinets should be fully installed before
                final measuring. For replacement countertops, photos and rough
                measurements help us understand the project before scheduling.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 text-stone-950 shadow-2xl">
            <div className="space-y-5">
              <a
                href="tel:2814439785"
                className="flex items-center gap-4 rounded-3xl border border-stone-200 p-5 transition hover:bg-stone-50"
              >
                <Phone className="h-7 w-7 text-amber-700" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                    Office Phone
                  </p>
                  <p className="text-2xl font-bold">281-443-9785</p>
                </div>
              </a>

              <a
                href="mailto:quotes@precisionctops.com"
                className="flex items-center gap-4 rounded-3xl border border-stone-200 p-5 transition hover:bg-stone-50"
              >
                <MessageSquareText className="h-7 w-7 text-amber-700" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                    Email Photos
                  </p>
                  <p className="text-xl font-bold">quotes@precisionctops.com</p>
                </div>
              </a>

              <a
                href="sms:2815476887"
                className="flex items-center gap-4 rounded-3xl border border-stone-200 p-5 transition hover:bg-stone-50"
              >
                <MessageSquareText className="h-7 w-7 text-amber-700" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                    Text Photos
                  </p>
                  <p className="text-2xl font-bold">281-547-6887</p>
                </div>
              </a>

              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                  Service Area
                </p>
                <p className="mt-2 text-lg font-bold">
                  Greater Houston Area & Surrounding Communities
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Serving Houston, Spring, The Woodlands, Conroe, Cypress,
                  Tomball, Willis, Brenham, College Station, and nearby areas.
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-amber-900">
                  Shop visits and in-person measures are scheduled by project
                  fit, location, material, and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
