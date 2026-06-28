import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BookOpen,
  Check,
  Clock,
  Award,
  Users,
  Briefcase,
  Sparkles,
  Globe2,
  FileText,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  PlayCircle,
  Star,
  ChevronDown,
  Calendar,
  Download,
  Infinity as InfinityIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mastering Contract Drafting & Freelancing — 6-Month Expert Course" },
      { name: "description", content: "Draft 24+ complex contracts, learn from 12+ industry experts across 54 live sessions, and earn on Upwork. Enroll by June 30." },
      { property: "og:title", content: "Mastering Contract Drafting & Freelancing" },
      { property: "og:description", content: "A 6-month expert-led course with 54 live sessions, freelancing training, and lifetime access." },
    ],
  }),
  component: CoursePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
} as const;

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || intro) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-px w-8 bg-gold" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-display text-4xl text-ink sm:text-5xl">{title}</h2>
            )}
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function CoursePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <TrustStrip />
      <Overview />
      <WhatYouLearn />
      <Curriculum />
      <Benefits />
      <Instructors />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- Top Bar ---------------- */
function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-cream">
            <span className="text-display text-lg italic">L</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-ink">Lawctopus</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Law School</div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#overview" className="hover:text-ink transition">Overview</a>
          <a href="#curriculum" className="hover:text-ink transition">Curriculum</a>
          <a href="#instructors" className="hover:text-ink transition">Faculty</a>
          <a href="#pricing" className="hover:text-ink transition">Pricing</a>
          <a href="#faq" className="hover:text-ink transition">FAQ</a>
        </nav>
        <Button asChild size="sm" className="rounded-full bg-ink text-cream hover:bg-ink/90">
          <a href="#pricing">Enroll Now</a>
        </Button>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, color-mix(in oklch, var(--gold) 18%, transparent) 0%, transparent 60%), radial-gradient(50% 60% at 0% 30%, color-mix(in oklch, var(--ink) 8%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <Badge variant="outline" className="rounded-full border-gold/50 bg-gold-soft/40 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-ink">
              <Sparkles className="mr-1.5 h-3 w-3" /> New cohort • July 1 – December 31
            </Badge>
            <h1 className="mt-6 text-display text-5xl text-ink sm:text-6xl lg:text-[5.5rem]">
              Mastering <em className="font-normal italic text-ink/90">Contract Drafting</em> & <span className="gold-underline">Freelancing</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A 6-month expert-level course with <strong className="text-ink">54 live sessions</strong>. Draft 24+ complex contracts,
              learn to negotiate, and start earning on Upwork — all guided by industry leaders.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-ink px-7 text-cream hover:bg-ink/90">
                <a href="#pricing">Enroll Now — ₹24,999</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-ink/15 bg-transparent">
                <a href="#curriculum"><PlayCircle className="mr-2 h-4 w-4" /> Preview curriculum</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat value="54" label="Live sessions" />
              <Stat value="24+" label="Contracts" />
              <Stat value="20k+" label="Students taught" />
            </div>
          </motion.div>

          {/* Right — sticky enrollment card */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-3xl border border-border bg-card p-3 soft-shadow"
            >
              <div className="relative overflow-hidden rounded-2xl bg-ink p-7 text-cream">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full"
                  style={{ background: "radial-gradient(closest-side, color-mix(in oklch, var(--gold) 65%, transparent), transparent)" }}
                />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.2em] text-cream/60">Limited seats</div>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-display text-5xl text-cream">₹24,999</span>
                    <span className="text-lg text-cream/50 line-through">₹60,000</span>
                  </div>
                  <div className="mt-1 text-sm text-gold">Save ₹35,001 — register by June 30</div>
                </div>
              </div>

              <div className="p-5">
                <ul className="space-y-3 text-sm">
                  {[
                    { icon: Calendar, text: "6 months • Starts July 1" },
                    { icon: PlayCircle, text: "54 live expert-led sessions" },
                    { icon: FileText, text: "Draft 9 contracts with feedback" },
                    { icon: InfinityIcon, text: "Lifetime access to all materials" },
                    { icon: ShieldCheck, text: "Money-back guarantee" },
                  ].map((row) => (
                    <li key={row.text} className="flex items-center gap-3 text-ink">
                      <row.icon className="h-4 w-4 text-gold" />
                      {row.text}
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="mt-6 w-full rounded-full bg-ink text-cream hover:bg-ink/90">
                  <a href="#pricing">Enroll Now</a>
                </Button>
                <a href="https://cdn.lawctopus.com/wp-content/uploads/2025/12/CDN-Expert-Level-_-6-Months-_-Course-Outline-and-Structure.pdf" target="_blank" className="mt-2 flex w-full items-center justify-center gap-1.5 py-2 text-xs text-muted-foreground hover:text-ink cursor-pointer">
                  <Download className="h-3 w-3" /> Download brochure
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-display text-3xl text-ink">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const items = [
    "20,000+ learners trained",
    "Avg. rating 93.2 / 100",
    "Faculty from top law firms",
    "Featured Upwork experts",
  ];
  return (
    <div className="border-y border-border bg-cream/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-3">
            {idx > 0 && <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />}
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Overview ---------------- */
function Overview() {
  return (
    <Section
      id="overview"
      eyebrow="The course"
      title={<>A complete path from <em className="italic">first clause</em> to first client.</>}
      intro="In the first two months you'll learn the fundamentals — identifying contracts, reviewing, and redrafting a sale deed yourself. The next four months focus on specialised agreements across real estate, IP, and business, with monthly freelancing and networking sessions to launch your career."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Clock, title: "6 months structured", text: "Live weekly classes built around your week, not your weekend." },
          { icon: BookOpen, title: "24+ agreement types", text: "From NDAs and MSAs to JV, POA, franchise & international contracts." },
          { icon: Briefcase, title: "Earn while you learn", text: "Build your Upwork profile and apply to real client opportunities." },
          { icon: Users, title: "12+ industry experts", text: "Faculty from leading firms, in-house counsels and AmLaw-100 advisors." },
          { icon: Award, title: "Certified completion", text: "Receive recognition aligned with 66% attendance and graded assignments." },
          { icon: InfinityIcon, title: "Lifetime access", text: "Re-watch live recordings, drafts, and reading material — forever." },
        ].map((f) => (
          <motion.div
            key={f.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold/40 hover:soft-shadow"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-soft text-ink">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- What You'll Learn ---------------- */
function WhatYouLearn() {
  const items = [
    "Draft 24 essential, high-demand agreements with hands-on guidance",
    "Master practice areas: Real Estate, IPR, General Corporate & International Contracts",
    "Build a top-rated Upwork profile and land your first paying client",
    "Draft 10 contracts with personalised, individual feedback on each",
    "Learn execution formalities, stamp duty and registration nuances",
    "Negotiate clauses confidently — from termination to indemnity",
    "Write winning CVs, cover letters and Upwork proposals",
    "Save 4 years of legal career — learn in 6 months what most learn in 4–5",
  ];
  return (
    <Section
      className="bg-cream/50"
      eyebrow="What you'll learn"
      title={<>Outcomes you can put on a <span className="gold-underline">contract.</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.04 }}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
          >
            <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-cream">
              <Check className="h-3.5 w-3.5" />
            </div>
            <p className="text-[15px] leading-relaxed text-ink">{it}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Curriculum ---------------- */
const modules = [
  {
    month: "Month 1",
    title: "Essential Clauses of a Contract",
    items: [
      "Drafting boilerplate clauses & territory of operation",
      "Representations, warranties & non-compete",
      "Termination, Force Majeure & confidentiality",
      "Reviewing & redrafting a Sale Deed (hands-on)",
    ],
  },
  {
    month: "Month 2",
    title: "Execution Formalities & Negotiation",
    items: [
      "Stamp duty, registration & execution processes",
      "Introduction to negotiation tactics",
      "Key commercial contracts overview",
      "Contract Lab + Negotiation Table exercise",
    ],
  },
  {
    month: "Month 3",
    title: "Intellectual Property Contracts",
    items: [
      "Trademark Licensing & Assignment Agreements",
      "Software Licensing & SaaS contracts",
      "International contracts and e-contracts",
      "Freelancing Session 1 + Networking Session",
    ],
  },
  {
    month: "Month 4",
    title: "Real Estate & Web Contracts",
    items: [
      "Sale Deed — drafting & execution formalities",
      "Leave & License Agreement",
      "Return & Refund + Privacy Policy for websites",
      "Networking Skills 3 + Freelancing Session 2",
    ],
  },
  {
    month: "Month 5",
    title: "Corporate & Business Agreements",
    items: [
      "Share Purchase & Share Subscription Agreements",
      "Partnership Agreements",
      "Joint Venture & Shareholders Agreements",
      "Master Service Agreements & NDAs",
    ],
  },
  {
    month: "Month 6",
    title: "Power of Attorney, Gift Deed & Career",
    items: [
      "Power of Attorney — drafting + cross-border execution",
      "Franchisee Agreement & Gift Deed",
      "Negotiation Skills Sessions 1 & 2",
      "Cover letter, LinkedIn audit & 1-on-1 coaching",
    ],
  },
];

function Curriculum() {
  const [open, setOpen] = useState(0);
  return (
    <Section
      id="curriculum"
      eyebrow="Curriculum"
      title={<>54 live sessions, mapped across <em className="italic">6 focused months.</em></>}
      intro="Each month layers on top of the last — from foundational clauses to specialised, high-value agreements and freelancing readiness."
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        {modules.map((m, i) => {
          const isOpen = open === i;
          return (
            <div key={m.month} className="border-b border-border last:border-b-0">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-6 px-6 py-6 text-left transition hover:bg-cream/60 sm:px-8"
              >
                <div className="text-display text-3xl text-gold sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{m.month}</div>
                  <div className="mt-1 text-xl text-ink sm:text-2xl">{m.title}</div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="overflow-hidden"
              >
                <ul className="grid gap-3 px-6 pb-7 pl-20 sm:grid-cols-2 sm:px-8 sm:pl-24">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- Benefits ---------------- */
function Benefits() {
  const items = [
    { icon: GraduationCap, title: "Career Advancement Cell", text: "CV reviews, mock interviews, LinkedIn audits and bi-monthly 1-on-1 coaching with faculty." },
    { icon: TrendingUp, title: "Real Upwork opportunities", text: "Receive vetted client briefs, apply with mentor support, and get paid for your work." },
    { icon: Globe2, title: "International contracts module", text: "Understand cross-border execution, jurisdiction & enforceability." },
    { icon: ShieldCheck, title: "Money-back guarantee", text: "Eligible learners can claim a full refund — no questions, no friction." },
  ];
  return (
    <Section
      eyebrow="Add-on benefits"
      title={<>More than a course — a <span className="gold-underline">career platform.</span></>}
      className="bg-cream/50"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((b) => (
          <motion.div
            key={b.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="flex gap-5 rounded-2xl border border-border bg-card p-7 transition hover:soft-shadow"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-gold">
              <b.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Instructors ---------------- */
const faculty = [
  { name: "Bhumesh Verma", role: "Founding Partner, Corp Comm Legal", bio: "30+ years across M&A, JVs and corporate contracts. Recorded lectures + masterclasses.", image: "images/Bhumesh-Varma.png" },
  { name: "Gourav Mohanty", role: "Advocate, Bombay High Court", bio: "Practitioner across commercial litigation, real estate and Power of Attorney execution.", image: "images/Gourav-1.png"},
  { name: "Anup Menon V.", role: "Partner, Corporate & Banking Law", bio: "Corporate law specialist with expertise in banking, commercial contracts, compliance, and strategic legal advisory.", image: "images/Anup-Menon-V.png" },
  { name: "Akanksha Mishra", role: "Constitutional Law specialist, SLS Pune & LL.M. Nagpur", bio: "Course developer focused on contractual nuance, IP and media licensing.", image: "images/Akanksha-Mishra.png" },
  { name: "Arunima Jha", role: "Partner, Media, Privacy & Corporate Law", bio: "Expert in media law, privacy, data protection, and corporate advisory, with over a decade of in-house legal leadership experience.", image: "images/Arunima-Jha.png" },
  { name: "Tanuj Kalia", role: "Negotiation coach & advocate", bio: "Leads the Negotiation Skills sessions — from term sheets to salary conversations.", image: "images/Tanuj.png" },
  { name: "Shashank Sardesai", role: "Co-Founding Partner, Litigation & Corporate Law", bio: "Independent Litigator & Company Secretary specializing in litigation, corporate advisory, and commercial contracts.", image: "images/Shashank-Sardesai.png" },
  { name: "Pranjal Doshi", role: "Partner, Mergers & Acquisitions", bio: "Specializes in M&A, private equity transactions, and investment documentation, with experience at Trilegal, Khaitan & Co., and Walker Morris LLP.", image: "images/Pranjal-Doshi.png" },
  { name: "Adv. Jaibatruka Mohanta", role: "Partner, Public Policy & Criminal Law", bio: "Practicing Advocate specializing in criminal law, public policy, government advisory, and legal research.", image: "images/Jai.png" }, 
  { name: "H. B Keshava", role: "Partner, Intellectual Property Law", bio: "IP law practitioner specializing in trademarks, copyrights, and intellectual property advisory.", image: "images/HB-Keshava.png" },
  { name: "Shayonee Dasgupta", role: "Partner, Legal Research & Content", bio: "Legal researcher and content strategist with experience at Trilegal, Shardul Amarchand Mangaldas, and IDIA.", image: "images/Shayonee-Dasgupta.png" },
  { name: "Debanshu Khettry", role: "Partner, Corporate Law & Legal Innovation", bio: "Corporate lawyer, legal entrepreneur, and investor with expertise in corporate advisory, legal innovation, and startup ecosystems.", image: "images/Debanshu-Khettry.png" },
];

function Instructors() {
  return (
    <Section
      id="instructors"
      eyebrow="Your faculty"
      title={<>Taught by lawyers who <em className="italic">do</em> the work.</>}
      intro="Practitioners from top firms, in-house teams and freelance success stories. Every session is led, designed, and reviewed by someone who drafts these contracts every week."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {faculty.map((p) => (
          <motion.div
            key={p.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:soft-shadow"
          >
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-xl text-ink">{p.name}</h3>
              <div className="mt-1 text-xs uppercase tracking-widest text-gold">{p.role}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const tiers = [
    {
      name: "Contract Drafting & Negotiation",
      tag: "2-Month Certificate",
      price: "₹7,999",
      duration: "2 months • 13 hrs of live lectures",
      cta: "Choose this plan",
      featured: false,
      items: [
        "Core drafting fundamentals",
        "Boilerplate & execution",
        "Live cohort access",
        "Course completion certificate",
      ],
    },
    {
      name: "Mastering Contract Drafting & Freelancing",
      tag: "6-Month Expert Course",
      price: "₹24,999",
      strike: "₹60,000",
      duration: "6 months • 85 hrs of live lectures",
      cta: "Enroll Now — save ₹35,001",
      featured: true,
      items: [
        "54 live sessions with industry experts",
        "24+ specialised contracts covered",
        "4 freelancing + 2 negotiation sessions",
        "Draft 10 contracts with feedback",
        "Career Advancement Cell + 1-on-1 coaching",
        "Lifetime access + money-back guarantee",
      ],
    },
  ];
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={<>Two paths. <em className="italic">Same standard</em> of teaching.</>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {tiers.map((t) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className={`relative flex flex-col rounded-3xl p-8 transition ${t.featured
                ? "bg-ink text-cream soft-shadow"
                : "border border-border bg-card text-ink"
              }`}
          >
            {t.featured && (
              <div className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                Most popular
              </div>
            )}
            <div className={`text-xs uppercase tracking-[0.2em] ${t.featured ? "text-gold" : "text-muted-foreground"}`}>
              {t.tag}
            </div>
            <h3 className={`mt-3 text-display text-3xl ${t.featured ? "text-cream" : "text-ink"}`}>
              {t.name}
            </h3>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-display text-5xl">{t.price}</span>
              {t.strike && <span className="text-lg text-cream/50 line-through">{t.strike}</span>}
            </div>
            <div className={`mt-1 text-sm ${t.featured ? "text-cream/70" : "text-muted-foreground"}`}>
              {t.duration}
            </div>

            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {t.items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-gold" : "text-ink"}`} />
                  <span className={t.featured ? "text-cream/90" : "text-foreground"}>{it}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className={`mt-8 w-full rounded-full ${t.featured ? "bg-gold text-ink hover:bg-gold/90" : "bg-ink text-cream hover:bg-ink/90"
                }`}
            >
              <a href="#">{t.cta}</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const t = [
    {
      quote: "I went from never having drafted a contract to landing my first Upwork client in month 4. The feedback on every draft is what made it click.",
      name: "Riya S.",
      role: "Final-year law student, NLU",
    },
    {
      quote: "The faculty's depth is unreal. I now draft SaaS and licensing contracts at work without second-guessing every clause.",
      name: "Aditya K.",
      role: "Associate, 2 yrs PQE",
    },
    {
      quote: "The freelancing module alone paid back the fee twice over. Highly recommend for any young lawyer.",
      name: "Meera N.",
      role: "Independent legal consultant",
    },
  ];
  return (
    <Section
      className="bg-cream/50"
      eyebrow="Reviews"
      title={<>1,000+ alumni. <span className="gold-underline">93.2 / 100</span> average rating.</>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {t.map((r) => (
          <motion.figure
            key={r.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7"
          >
            <div>
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">
                "{r.quote}"
              </blockquote>
            </div>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="text-sm font-semibold text-ink">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "Who can enroll for this course?", a: "Law students at any stage, young lawyers with 0–4 years of experience, in-house counsels, and business owners who want to draft and review contracts confidently." },
    { q: "What's the time commitment per week?", a: "Plan for 2 live sessions per week in months 1–2, and 7–8 sessions per month thereafter, plus 2–4 hours of self-paced reading and assignments." },
    { q: "How does the money-back guarantee work?", a: "If you attend the required percentage of sessions and submit all assignments, but feel the course didn't meet expectations, you can request a full refund per the eligibility criteria." },
    { q: "Do I get a certificate?", a: "Yes — completion requires attending 66%+ of live classes (video ON) and passing all assignments." },
    { q: "Will I really be able to freelance after?", a: "We give you the playbook: a top-rated Upwork expert mentors you, we share real client briefs, and your 10 graded drafts become your portfolio." },
    { q: "How long do I keep access to materials?", a: "Lifetime access — to recordings, drafts, reading modules and any future updates we add." },
  ];
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Questions, <em className="italic">answered.</em></>}
    >
      <Accordion type="single" collapsible defaultValue="0" className="rounded-2xl border border-border bg-card px-6">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={String(i)} className="border-border">
            <AccordionTrigger className="py-5 text-left text-lg text-ink hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl bg-ink p-10 text-cream sm:p-16"
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 80% at 100% 0%, color-mix(in oklch, var(--gold) 35%, transparent), transparent 60%), radial-gradient(50% 100% at 0% 100%, color-mix(in oklch, var(--gold) 18%, transparent), transparent 60%)",
            }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Badge className="rounded-full bg-cream/10 text-cream hover:bg-cream/10">
                Enrolment closes June 30
              </Badge>
              <h2 className="mt-5 text-display text-4xl text-cream sm:text-6xl">
                Become the lawyer clients <em className="italic text-gold">trust with the paper.</em>
              </h2>
              <p className="mt-5 max-w-xl text-cream/70">
                Join the July cohort. 54 live sessions, real drafts, real feedback, and a clear path to your first freelance income.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="rounded-full bg-gold text-ink hover:bg-gold/90">
                <a href="#pricing">Enroll Now — ₹24,999</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-cream/20 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">
                <a href="#curriculum">View full curriculum</a>
              </Button>
              <div className="mt-2 text-center text-xs text-cream/50">
                Money-back guarantee • Lifetime access • Certificate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-cream/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-cream">
            <span className="text-display text-lg italic">L</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lawctopus Law School. All rights reserved.
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#overview" className="hover:text-ink">Overview</a>
          <a href="#curriculum" className="hover:text-ink">Curriculum</a>
          <a href="#instructors" className="hover:text-ink">Faculty</a>
          <a href="#pricing" className="hover:text-ink">Pricing</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
