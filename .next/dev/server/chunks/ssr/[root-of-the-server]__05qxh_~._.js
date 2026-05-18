module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/data/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/content.ts
// ─────────────────────────────────────────────────────────────
// CONTENT DATA FILE — The single source of truth for all text.
//
// ✅ To change any text on the site, edit it HERE.
// ✅ You don't need to touch the component files for text changes.
// ✅ To add more testimonials, FAQ items, etc. — just add to the arrays.
// ─────────────────────────────────────────────────────────────
// ── NAVIGATION ───────────────────────────────────────────────
__turbopack_context__.s([
    "ageCategories",
    ()=>ageCategories,
    "contactInfo",
    ()=>contactInfo,
    "curriculums",
    ()=>curriculums,
    "faqItems",
    ()=>faqItems,
    "footerLinks",
    ()=>footerLinks,
    "founder",
    ()=>founder,
    "hero",
    ()=>hero,
    "navLinks",
    ()=>navLinks,
    "perspectives",
    ()=>perspectives,
    "testimonials",
    ()=>testimonials
]);
const navLinks = [
    {
        label: "Categories",
        href: "#categories"
    },
    {
        label: "Curriculum",
        href: "#curriculum"
    },
    {
        label: "Parents",
        href: "#parents"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "FAQ",
        href: "#faq"
    }
];
const hero = {
    eyebrow: "Unlocking Every Child's Potential",
    // The word in <em> tags will render in italic + primary color
    headline: "Igniting Young Minds through a",
    headlineAccent: "Kaleidoscope",
    headlineSuffix: "of Learning",
    body: "Discover a vibrant educational journey where imagination meets excellence. We offer personalised curriculums designed to fuel curiosity and build future-ready skills.",
    // CTA = Call To Action (the buttons)
    // When you build a /courses page, change primaryCta.href to "/courses"
    primaryCta: {
        label: "Explore Programs",
        href: "#categories"
    },
    secondaryCta: {
        label: "Our Story",
        href: "#about"
    },
    videoLabel: "Sample Class Recording",
    // Replace this with your own hosted video thumbnail image
    heroImageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtaJVdf5WP63FxQ4gCiFbgwEGZN4kCwmz0BhIr7ml90nGgI43LISv4L7VNSmz1KWBDFBmQIwzQE8dop04PEnoSqT-H3XtIoPgPcnu4azTZZY1k-yMUs1t3s94edR_FAiaMhUQsYxrApD9lUohdE7KzbelswlTFgHEaBfL-_99bra4CY-HYYpev8bZicO3pmkUYfD8287Dp2rYb22SJnxhFvEl92voLNGfSAM60WIDik4znOJoUQuu5yD9KGKQIFkcFNNajlj8Y2WA"
};
const testimonials = [
    {
        id: 1,
        quote: "The curriculum at Kaleidoscopic Minds is exactly what my daughter needed. She's finally excited about math and looks forward to every session!",
        name: "Sarah J.",
        role: "Parent of Year 4 Student",
        avatarColor: "bg-secondary-fixed",
        variant: "light"
    },
    {
        id: 2,
        quote: "I love how interactive the lessons are. It doesn't feel like school, it feels like an adventure. I've learned more here than anywhere else.",
        name: "Leo M.",
        role: "Grade 7 Student",
        avatarColor: "bg-primary-fixed-dim",
        variant: "dark"
    },
    {
        id: 3,
        quote: "The transition to IGCSE was daunting, but the support here made it seamless. The tutors are truly world-class and very patient.",
        name: "David R.",
        role: "Parent of Year 10 Student",
        avatarColor: "bg-tertiary-fixed",
        variant: "light"
    }
];
const ageCategories = [
    {
        id: 1,
        icon: "child_care",
        title: "Early Explorers",
        ageRange: "Ages 1 – 5 Years",
        description: "Focusing on sensory play, foundational numeracy, and fostering a love for discovery.",
        href: "#"
    },
    {
        id: 2,
        icon: "architecture",
        title: "Mind Builders",
        ageRange: "Ages 6 – 8 Years",
        description: "Building critical thinking skills through logic puzzles, storytelling, and basic science.",
        href: "#"
    },
    {
        id: 3,
        icon: "rocket_launch",
        title: "Future Leaders",
        ageRange: "Ages 9 – 12 Years",
        description: "Advanced problem-solving, project-based learning, and academic leadership prep.",
        href: "#"
    }
];
const curriculums = [
    {
        id: 1,
        code: "AC",
        name: "Australian Curriculum",
        icon: "school"
    },
    {
        id: 2,
        code: "VC",
        name: "Victorian Curriculum",
        icon: "history_edu"
    },
    {
        id: 3,
        code: "IGCSE",
        name: "UK Cambridge Int.",
        icon: "workspace_premium"
    },
    {
        id: 4,
        code: "IB",
        name: "International Baccalaureate",
        icon: "public"
    }
];
const perspectives = [
    {
        id: 1,
        icon: "celebration",
        iconBg: "bg-secondary-container/20",
        iconColor: "text-secondary",
        title: "Pure Joy for Kids",
        body: "Gamified challenges, interactive storytelling, and creative rewards that keep engagement high and boredom at bay."
    },
    {
        id: 2,
        icon: "monitoring",
        iconBg: "bg-primary-container/20",
        iconColor: "text-primary",
        title: "Peace of Mind for Parents",
        body: "Real-time progress tracking, weekly performance insights, and direct communication channels with expert educators."
    }
];
const founder = {
    eyebrow: "The Visionary Behind KM",
    headline: "Nurturing curiosity is my lifelong mission.",
    paragraphs: [
        "Founded on the belief that education should be as vibrant as a kaleidoscope, Kaleidoscopic Minds began as a small initiative to bridge the gap between rigid curriculums and the boundless imagination of children.",
        "With over 20 years of experience in educational psychology and curriculum design, I've seen firsthand how a child's potential can be unlocked when they are met with empathy, creativity, and the right intellectual challenge.",
        "Our goal is not just to teach subjects, but to build a foundation of lifelong curiosity and resilience. We don't just prepare kids for exams; we prepare them for the world."
    ],
    stats: [
        {
            value: "15k+",
            label: "Students"
        },
        {
            value: "120+",
            label: "Educators"
        },
        {
            value: "48",
            label: "Awards"
        }
    ],
    founderName: "Khadija Topiwala",
    founderTitle: "PhD in Educational Psychology",
    // Replace with your actual founder photo
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCccehq32S2xTup5U47MSrwuZygTkvE-PdY_GSNLdcEvv4FBb45gNr04e-yMGG_pwzU_MyZCpfh6hyI2ECW9PoqrtmIjNLXMZ3x8ZkhpKDL2G73KF_vIIHmHzmrEfvpQNJ6wwryLnKMuKgQQcepBujy-V6lmv_EtzfPKSIQHUMMbYLHpJMLe9Aa8i3ZHk5ZAmFgXaG3aKxN5oIDU169kfqhYBBKvZN09oBwp_fd9rFb51LHqd_zXktFS-xAofv0fdvouYKW1B8FN8"
};
const faqItems = [
    {
        id: 1,
        question: "How do I choose the right curriculum for my child?",
        answer: "Our educational advisors offer a free 30-minute consultation to assess your child's needs, academic history, and future goals to recommend the most suitable path.",
        defaultOpen: true
    },
    {
        id: 2,
        question: "Are the classes live or pre-recorded?",
        answer: "We offer a hybrid model. Most of our core modules include live interactive sessions with tutors, complemented by high-quality pre-recorded deep dives and practice modules.",
        defaultOpen: false
    },
    {
        id: 3,
        question: "Can I switch programs if my child isn't happy?",
        answer: "Yes! We prioritise the child's comfort. You can switch between age categories or curriculum tracks within the first two weeks of any term.",
        defaultOpen: false
    }
];
const footerLinks = {
    explore: [
        {
            label: "Categories",
            href: "#categories"
        },
        {
            label: "Curriculum",
            href: "#curriculum"
        },
        {
            label: "Join Now",
            href: "#"
        }
    ],
    support: [
        {
            label: "Help Center",
            href: "#"
        },
        {
            label: "Privacy Policy",
            href: "#"
        },
        {
            label: "Terms of Service",
            href: "#"
        }
    ]
};
const contactInfo = {
    email: "hello@kminds.com.au",
    phone: "+61 (0) EDU-KATE"
};
}),
"[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
// src/components/layout/Navbar.tsx
// ─────────────────────────────────────────────────────────────
// NAVBAR — Sticky navigation bar at the top of every page.
//
// To add a new nav link:
//   1. Open src/data/content.ts
//   2. Add to the navLinks array: { label: "Courses", href: "/courses" }
//
// To make "Join Now" open a modal or go to a page:
//   Change the href on the button below, or add an onClick handler.
// ─────────────────────────────────────────────────────────────
"use client"; // 'use client' is needed because we use React state (mobile menu toggle)
;
;
;
;
function Navbar() {
    // State to track whether the mobile menu is open or closed
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex justify-between items-center px-4 md:px-margin-desktop py-4 max-w-[1280px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "font-headline text-headline-md font-extrabold text-primary",
                        children: "Kaleidoscopic Minds"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "font-headline text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200",
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        className: "hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline text-label-md border-b-4 border-primary-container btn-3d",
                        children: "Join Now"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-on-surface",
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined text-3xl",
                            children: mobileOpen ? "close" : "menu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-surface border-t border-outline-variant/30 px-6 py-4 flex flex-col gap-4",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            onClick: ()=>setMobileOpen(false),
                            className: "font-headline text-label-md text-on-surface-variant hover:text-primary transition-colors",
                            children: link.label
                        }, link.label, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        onClick: ()=>setMobileOpen(false),
                        className: "bg-primary text-on-primary text-center px-6 py-3 rounded-full font-headline text-label-md",
                        children: "Join Now"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05qxh_~._.js.map