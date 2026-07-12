import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faCheckCircle,
    faChevronDown,
    faClock,
    faComments,
    faEnvelope,
    faLocationDot,
    faMapLocationDot,
    faPhone,
    faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { universityInfo, faqs, categories } from '../data/programs';
import { generateFaqAnswer } from '../utils/ai';
import back2 from '../assets/back2.webp';

const initialForm = { name: '', email: '', phone: '', program: '', message: '' };

export default function Contactpage() {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [faqPrompt, setFaqPrompt] = useState('');
    const [aiFaq, setAiFaq] = useState(null);
    const [openFaq, setOpenFaq] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    };

    const handleFaqGenerate = (e) => {
        e.preventDefault();
        setAiFaq(generateFaqAnswer(faqPrompt));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = 'Please enter your name.';
        if (!form.email.trim()) next.email = 'Please enter your email.';
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.';
        if (!form.message.trim()) next.message = 'Please enter a message.';
        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length === 0) {
            setSubmitted(true);
            setForm(initialForm);
        }
    };

    const infoCards = [
        { icon: faLocationDot, title: 'Campus Address', text: universityInfo.address },
        { icon: faPhone, title: 'Phone', text: universityInfo.phone, href: `tel:${universityInfo.phone}` },
        { icon: faEnvelope, title: 'Email', text: universityInfo.email, href: `mailto:${universityInfo.email}` },
        { icon: faClock, title: 'Office Hours', text: 'Mon-Fri: 8:30am-5:30pm' },
    ];

    return (
        <div className="bg-white text-gray-900">
            <section className="relative mt-20 min-h-[360px] overflow-hidden text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${back2})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

                <div className="container relative z-10 mx-auto flex min-h-[360px] max-w-6xl flex-col justify-center px-4 py-16">
                    <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85">
                        <FontAwesomeIcon icon={faComments} />
                        Admissions and enquiries
                    </span>
                    <h1 className="mb-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                        Get in touch with Lincoln UC
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-white/80">
                        Ask about programs, entry requirements, fees, intakes, or the application process.
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden border-b border-red-100 bg-gradient-to-br from-white via-red-50/60 to-white py-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#990000] via-[#de2203] to-[#990000]" />
                <div className="absolute right-0 top-0 h-full w-1/3 skew-x-[-16deg] bg-red-100/30" />
                <div className="container mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
                    {infoCards.map((c) => (
                        <div key={c.title} className="group relative overflow-hidden rounded-xl border border-red-100 bg-white p-5 shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-red-200 hover:bg-red-50/40 hover:shadow-[0_18px_36px_rgba(153,0,0,0.14)]">
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#de2203] to-[#990000]" />
                            <div className="absolute right-0 top-0 h-12 w-20 skew-x-[-18deg] bg-red-50" />
                            <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#de2203] shadow-sm ring-4 ring-white transition group-hover:bg-white group-hover:text-[#990000]">
                                <FontAwesomeIcon icon={c.icon} className="text-base" />
                            </div>
                            <h3 className="relative mb-2 text-base font-black text-gray-950">{c.title}</h3>
                            {c.href ? (
                                <a href={c.href} className="relative block break-words text-sm font-medium leading-relaxed text-gray-500 no-underline transition-colors hover:text-[#de2203]">
                                    {c.text}
                                </a>
                            ) : (
                                <p className="relative m-0 text-sm font-medium leading-relaxed text-gray-500">{c.text}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/50 py-10">
                <div className="absolute left-0 top-0 h-full w-36 skew-x-[-16deg] bg-red-50/60" />
                <div className="container mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
                    <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.10)] md:p-6">
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#990000] via-[#de2203] to-[#990000]" />
                        <div className="absolute right-0 top-0 h-24 w-36 skew-x-[-18deg] bg-red-50" />
                        <div className="mb-5">
                            <span className="relative mb-3 inline-block rounded-xl bg-red-50 px-4 py-2 text-sm font-bold text-[#de2203] shadow-sm">
                                Contact Form
                            </span>
                            <h2 className="relative text-2xl font-black text-gray-950">Send Us a Message</h2>
                            <div className="relative mt-3 h-1 w-14 rounded-full bg-[#de2203]" />
                        </div>

                        {submitted && (
                            <div className="mb-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                                <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5" />
                                <span>Thanks. Your message has been received and our admissions team will contact you within 3 working days.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate className="relative space-y-3.5">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="Full Name" required error={errors.name}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className={inputClass(errors.name)}
                                    />
                                </Field>

                                <Field label="Email" required error={errors.email}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={inputClass(errors.email)}
                                    />
                                </Field>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="Phone Number">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+60 12-345 6789"
                                        className={inputClass()}
                                    />
                                </Field>

                                <Field label="Program of Interest">
                                    <select
                                        name="program"
                                        value={form.program}
                                        onChange={handleChange}
                                        className={inputClass()}
                                    >
                                        <option value="">Select a faculty</option>
                                        {categories.filter((c) => c !== 'All').map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </Field>
                            </div>

                            <Field label="Message" required error={errors.message}>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Tell us how we can help..."
                                    className={`${inputClass(errors.message)} min-h-[150px] resize-none`}
                                />
                            </Field>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#de2203] to-[#990000] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(222,34,3,0.22)] transition-all hover:from-[#990000] hover:to-[#de2203] hover:shadow-[0_18px_36px_rgba(222,34,3,0.30)]"
                            >
                                Send Message
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>
                    </div>

                    <aside className="relative flex flex-col gap-5">
                        <div className="overflow-hidden rounded-2xl border border-red-100 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                            <div className="mb-2 flex items-center justify-between px-3 py-2">
                                <div>
                                    <p className="m-0 text-xs font-black uppercase tracking-wide text-[#de2203]">Campus Location</p>
                                    <h3 className="m-0 text-base font-black text-gray-950">Visit Lincoln UC</h3>
                                </div>
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#de2203]">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                </span>
                            </div>
                            <iframe
                                title="Lincoln University College Location"
                                src={`https://www.google.com/maps?q=${encodeURIComponent(universityInfo.address)}&output=embed`}
                                width="100%"
                                height="360"
                                className="rounded-2xl"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#990000] via-[#de2203] to-[#990000]" />
                            <div className="absolute right-0 top-0 h-20 w-32 skew-x-[-18deg] bg-red-50" />
                            <h3 className="relative mb-3 text-lg font-black text-gray-950">Admissions Support</h3>
                            <p className="mb-5 text-sm leading-relaxed text-gray-500">
                                Our team can help you compare programs, understand entry requirements, and prepare your application documents.
                            </p>
                            <div className="grid gap-3 text-sm">
                                <a href={`tel:${universityInfo.phone}`} className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/50 px-4 py-3 font-semibold text-gray-800 no-underline hover:text-[#de2203]">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#de2203] shadow-sm">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    {universityInfo.phone}
                                </a>
                                <a href={`mailto:${universityInfo.email}`} className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/50 px-4 py-3 font-semibold text-gray-800 no-underline hover:text-[#de2203]">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#de2203] shadow-sm">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    {universityInfo.email}
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="bg-white py-10 md:py-14">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="mb-8 text-center md:mb-10">
                        <span className="mb-3 inline-block rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-[#de2203]">
                            FAQ
                        </span>
                        <h2 className="text-3xl font-black text-gray-950 md:text-4xl">Frequently Asked Questions</h2>
                        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#de2203]" />
                    </div>

                    <div className="grid gap-3">
                        {faqs.map((f, i) => (
                            <div
                                className={`overflow-hidden rounded-xl border bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all ${
                                    openFaq === i ? 'border-red-200 shadow-[0_18px_36px_rgba(153,0,0,0.10)]' : 'border-gray-200'
                                }`}
                                key={f.q}
                            >
                                <button
                                    className="flex w-full items-center justify-between gap-4 bg-white px-4 py-4 text-left text-sm font-black text-gray-950 transition-colors hover:bg-red-50/40 md:px-6"
                                    type="button"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    <span>{f.q}</span>
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#de2203]">
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className={`text-xs transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                                        />
                                    </span>
                                </button>

                                {openFaq === i && (
                                    <div className="border-t border-red-100 bg-gradient-to-br from-red-50/70 to-white px-4 py-4 md:px-6">
                                        <p className="m-0 text-sm font-medium leading-7 text-gray-600">{f.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/70 to-white p-5 shadow-sm">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#de2203] shadow-sm">
                                <FontAwesomeIcon icon={faWandMagicSparkles} />
                            </div>
                            <div>
                                <h3 className="m-0 text-lg font-black text-gray-950">AI FAQ Helper</h3>
                                <p className="m-0 text-sm text-gray-500">Generate a quick answer from the university dataset.</p>
                            </div>
                        </div>

                        <form onSubmit={handleFaqGenerate} className="flex flex-col gap-3 sm:flex-row">
                            <input
                                value={faqPrompt}
                                onChange={(e) => setFaqPrompt(e.target.value)}
                                placeholder="e.g. Do you offer scholarships?"
                                className="min-w-0 flex-1 rounded-xl border border-red-100 bg-white px-4 py-3 text-sm outline-none focus:border-[#de2203] focus:ring-4 focus:ring-red-100"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#de2203] px-5 py-3 text-sm font-bold text-white hover:bg-[#990000]"
                            >
                                Generate
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>

                        {aiFaq && (
                            <div className="mt-4 rounded-xl border border-red-100 bg-white p-4">
                                <p className="mb-2 text-sm font-black text-gray-950">{aiFaq.question}</p>
                                <p className="m-0 text-sm leading-relaxed text-gray-600">{aiFaq.answer}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

function Field({ label, required = false, error, children }) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-600">
                {label} {required && <span className="text-[#de2203]">*</span>}
            </span>
            {children}
            {error && <span className="mt-1 block text-[11px] font-medium text-red-500">{error}</span>}
        </label>
    );
}

function inputClass(error) {
    return `w-full rounded-xl border bg-red-50/30 px-4 py-3 text-sm font-medium outline-none transition ${
        error
            ? 'border-red-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-50'
            : 'border-red-100 focus:border-[#de2203] focus:bg-white focus:ring-4 focus:ring-red-100'
    }`;
}
