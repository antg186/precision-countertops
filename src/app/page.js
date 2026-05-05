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
  "Custom Laminate",
  "Solid Surface Countertops",
  "Butcher Block Countertops",
  "Countertop Measurement",
  "Countertop Installation",
  "Demo & Removal",
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
    text: "A practical laminate option with a smooth formed front edge. Great for kitchens, laundry rooms, and everyday residential projects.",
  },
  {
    title: "Custom Laminate Countertops",
    text: "Built for layouts that need more flexibility, custom sizing, seams, radius corners, or specialty edge details.",
  },
  {
    title: "Square Edge Laminate",
    text: "A clean, modern laminate style with a straight front edge. A good option when you want a simple updated look.",
  },
  {
    title: "Butcher Block Countertops",
    text: "A warm wood-look option for islands, work areas, laundry rooms, and select kitchen layouts.",
  },
  {
    title: "Solid Surface Countertops",
    text: "A smooth, repairable surface option using materials like Corian. Great for a clean and seamless-looking finish.",
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
    text: "A local residential countertop company serving Greater Houston homeowners.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Licensed & Insured",
    text: "Professional service with the experience and coverage homeowners expect.",
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "Fabricated In-House",
    text: "Your countertops are fabricated in our own shop for better control and quality.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
      <a href="#styles" className="hover:text-stone-950">
        Styles
      </a>
      <a href="#process" className="hover:text-stone-950">
        Quote Process
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

      <section className="bg-stone-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-stone-200">
              Family-owned • Licensed & insured • 30+ years experience
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
             Residential Laminate & Solid Surface Countertops in Greater Houston
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Precision Countertops is a family-owned countertop shop specializing in laminate, postform, butcher block, and solid surface countertops for homeowners across the Greater Houston Area.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:2814439785"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-stone-950"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 281-443-9785
              </a>

              <a
                href="sms:8327032596"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white"
              >
                <MessageSquareText className="mr-2 h-5 w-5" />
                Text Photos
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-stone-950">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Start here
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Send photos before scheduling a measure.
            </h2>

            <p className="mt-4 leading-7 text-stone-700">
              To avoid wasted trips, send your city, layout photos, cabinet
              status, and rough measurements first. We’ll help determine the
              next step for your countertop project.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Photos of current countertops or cabinet layout",
                "City or ZIP code",
                "Material you’re interested in",
                "New cabinets or existing cabinets",
                "Approximate measurements if available",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-stone-100 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
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
            Countertop services for residential projects.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service} className="rounded-3xl border border-stone-200 bg-stone-50 p-6 font-semibold">
                {service}
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
              style. We help homeowners compare practical options like
              postform, custom laminate, butcher block, and solid surface.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {countertopStyles.map((style) => (
              <div
                key={style.title}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{style.title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-600">
                  {style.text}
                </p>
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
            Turnaround depends on material selection, edge details, project size,
            and scheduling.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:col-span-2">
          {[
            {
              title: "Wilsonart",
              text: "Popular laminate options for residential kitchens, bathrooms, laundry rooms, and workspaces.",
            },
            {
              title: "Formica",
              text: "Durable laminate selections with many colors, patterns, and textures for practical countertop projects.",
            },
            {
              title: "Corian",
              text: "Solid surface material with a clean look, smooth feel, and repairable surface.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
            </div>
          ))}
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
                Instead of sending someone out before knowing the project details,
                we start with photos and basic information. This helps save time
                and gives you a clearer next step.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "1. Send Photos",
                  text: "Text photos of your current countertops, cabinets, or layout drawings.",
                },
                {
                  title: "2. Share Location",
                  text: "Send your city or ZIP code so we can confirm service availability.",
                },
                {
                  title: "3. Choose Material",
                  text: "Let us know if you want laminate, postform, butcher block, or solid surface.",
                },
                {
                  title: "4. Schedule Next Step",
                  text: "If the project is a good fit, we’ll help move it toward measure and install.",
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
              832-703-2596.
            </p>
          </div>
        </div>
      </section>

            <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Project Gallery
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Countertop project photos coming soon.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              We’ll be adding photos of completed laminate, postform, butcher
              block, and solid surface countertop projects. For now, text us
              photos of your layout and we can help you get started.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Laminate Kitchens",
              "Solid Surface Projects",
              "Butcher Block Tops",
            ].map((item) => (
              <div
                key={item}
                className="flex min-h-64 items-end rounded-3xl border border-dashed border-stone-300 bg-stone-100 p-6"
              >
                <p className="text-xl font-bold text-stone-700">{item}</p>
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
            <div key={area} className="rounded-2xl border border-stone-200 bg-white px-5 py-4 font-semibold shadow-sm">
              {area}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-stone-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Ready to start your countertop project?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
            Call the office or text photos of your layout, measurements, and
            city to get started.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:2814439785" className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-stone-950">
              Call 281-443-9785
            </a>

            <a href="sms:8327032596" className="rounded-2xl border border-white/30 px-6 py-4 text-center font-semibold text-white">
              Text Photos: 832-703-2596
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}