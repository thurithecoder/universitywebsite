export const programs = [
    // ---- Engineering ----
    {
        id: 1,
        name: 'Bachelor of Civil Engineering',
        category: 'Engineering',
        icon: '🏗️',
        duration: '4 Years',
        fees: 'RM 38,000/year',
        level: 'Undergraduate',
        intake: 'March, July, November',
        description:
            'Develop expertise in designing and constructing infrastructure including roads, bridges, dams, and buildings. Combine theory with practical training in state-of-the-art labs.',
        requirements: 'SPM / A-Level / Foundation / Diploma (Engineering/Science)',
        careers: ['Civil Engineer', 'Structural Engineer', 'Project Manager', 'Site Engineer'],
        highlights: ['MQA Accredited', 'Industry Internship', 'Lab Facilities'],
        keywords: ['civil', 'engineering', 'construction', 'infrastructure', 'structure'],
    },
    {
        id: 2,
        name: 'Bachelor of Electrical & Electronic Engineering',
        category: 'Engineering',
        icon: '⚡',
        duration: '4 Years',
        fees: 'RM 38,000/year',
        level: 'Undergraduate',
        intake: 'March, July, November',
        description:
            'Study power systems, electronics, telecommunications, and automation. Prepare for a career in Malaysia\'s growing tech-manufacturing sector.',
        requirements: 'SPM / A-Level / Foundation with Physics & Maths',
        careers: ['Electrical Engineer', 'Electronics Engineer', 'Automation Engineer'],
        highlights: ['Modern Labs', 'Industrial Projects', 'Dual Award Option'],
        keywords: ['electrical', 'electronics', 'engineering', 'power', 'tech'],
    },
    {
        id: 3,
        name: 'Bachelor of Mechanical Engineering',
        category: 'Engineering',
        icon: '⚙️',
        duration: '4 Years',
        fees: 'RM 38,000/year',
        level: 'Undergraduate',
        intake: 'March, July, November',
        description:
            'Learn thermodynamics, fluid mechanics, manufacturing, and machine design. Graduates are highly sought after in oil & gas, automotive, and manufacturing.',
        requirements: 'SPM / A-Level / Foundation / Diploma',
        careers: ['Mechanical Engineer', 'Design Engineer', 'Production Manager'],
        highlights: ['Workshop Facilities', 'CAD/CAM Training', 'MQA Accredited'],
        keywords: ['mechanical', 'engineering', 'machine', 'manufacturing', 'automotive'],
    },

    // ---- Business ----
    {
        id: 4,
        name: 'Bachelor of Business Administration (BBA)',
        category: 'Business',
        icon: '💼',
        duration: '3 Years',
        fees: 'RM 28,000/year',
        level: 'Undergraduate',
        intake: 'March, July, November',
        description:
            'A comprehensive business degree covering management, marketing, finance, and entrepreneurship. Ideal for students aiming to lead organizations or start their own ventures.',
        requirements: 'SPM / STPM / A-Level / Foundation',
        careers: ['Business Manager', 'Entrepreneur', 'Marketing Executive', 'HR Manager'],
        highlights: ['Case Study Approach', 'Industry Visits', 'Internship Program'],
        keywords: ['business', 'administration', 'management', 'finance', 'marketing'],
    },
    {
        id: 5,
        name: 'Master of Business Administration (MBA)',
        category: 'Business',
        icon: '🎓',
        duration: '1.5 – 2 Years',
        fees: 'RM 45,000 total',
        level: 'Postgraduate',
        intake: 'March, July',
        description:
            'Elevate your career with a globally recognized MBA. Specializations include Strategic Management, Digital Marketing, Finance, and Supply Chain.',
        requirements: 'Bachelor\'s Degree + 2 years work experience',
        careers: ['Senior Manager', 'Business Consultant', 'CEO/COO', 'Corporate Director'],
        highlights: ['Globally Recognized', 'Weekend Classes', 'Research Track'],
        keywords: ['mba', 'business', 'postgraduate', 'management', 'leadership'],
    },
    {
        id: 6,
        name: 'Bachelor of Accounting (Hons)',
        category: 'Business',
        icon: '📊',
        duration: '3 Years',
        fees: 'RM 26,000/year',
        level: 'Undergraduate',
        intake: 'March, July, November',
        description:
            'Gain expertise in financial accounting, auditing, taxation, and corporate finance. ACCA exemptions available for eligible graduates.',
        requirements: 'SPM / A-Level / Foundation (with Maths)',
        careers: ['Accountant', 'Auditor', 'Tax Consultant', 'Finance Analyst'],
        highlights: ['ACCA Exemptions', 'MICPA Partnership', 'Practical Training'],
        keywords: ['accounting', 'finance', 'audit', 'tax', 'business'],
    },

    // ---- Information Technology ----
    {
        id: 7,
        name: 'Bachelor of Computer Science (Hons)',
        category: 'IT',
        icon: '💻',
        duration: '3 Years',
        fees: 'RM 30,000/year',
        level: 'Undergraduate',
        intake: 'March, July, November',
        description:
            'Build strong foundations in algorithms, data structures, programming, AI, and software engineering. Includes electives in cybersecurity and cloud computing.',
        requirements: 'SPM / A-Level / Foundation (with Maths)',
        careers: ['Software Developer', 'Systems Analyst', 'AI Engineer', 'Data Scientist'],
        highlights: ['MQA Accredited', 'AI & ML Electives', 'Hackathons'],
        keywords: ['computer', 'science', 'software', 'programming', 'it', 'tech', 'ai'],
    },
    {
        id: 8,
        name: 'Bachelor of Information Technology (Hons)',
        category: 'IT',
        icon: '🖥️',
        duration: '3 Years',
        fees: 'RM 28,000/year',
        level: 'Undergraduate',
        intake: 'March, July, November',
        description:
            'Focus on practical IT skills: networking, database management, web development, and IT project management. Industry-driven curriculum with live projects.',
        requirements: 'SPM / STPM / Foundation (any stream)',
        careers: ['IT Manager', 'Network Engineer', 'Web Developer', 'Database Admin'],
        highlights: ['Cisco Networking Lab', 'Live Projects', 'Industry Partners'],
        keywords: ['information', 'technology', 'it', 'networking', 'web', 'database'],
    },
    {
        id: 9,
        name: 'Master of Science in Cybersecurity',
        category: 'IT',
        icon: '🔐',
        duration: '1.5 Years',
        fees: 'RM 42,000 total',
        level: 'Postgraduate',
        intake: 'March, July',
        description:
            'Advanced study in ethical hacking, digital forensics, cryptography, and cyber risk management. Prepares graduates for high-demand cybersecurity roles.',
        requirements: 'Bachelor\'s in IT/CS or equivalent',
        careers: ['Cybersecurity Analyst', 'Penetration Tester', 'CISO', 'Forensic Analyst'],
        highlights: ['Cyber Lab', 'CEH Prep', 'Research Opportunities'],
        keywords: ['cyber', 'security', 'hacking', 'forensics', 'it', 'tech'],
    },

    // ---- Health Sciences ----
    {
        id: 10,
        name: 'Bachelor of Nursing (Hons)',
        category: 'Health',
        icon: '🏥',
        duration: '4 Years',
        fees: 'RM 32,000/year',
        level: 'Undergraduate',
        intake: 'March, July',
        description:
            'Train to become a professional nurse with clinical placements in partner hospitals. Curriculum covers anatomy, pharmacology, patient care, and community health.',
        requirements: 'SPM (credits in Biology, Chemistry, Maths)',
        careers: ['Registered Nurse', 'Clinical Nurse Specialist', 'Healthcare Manager'],
        highlights: ['Hospital Placements', 'Simulation Lab', 'MOH Recognized'],
        keywords: ['nursing', 'health', 'medical', 'hospital', 'clinical', 'care'],
    },
    {
        id: 11,
        name: 'Bachelor of Pharmacy (Hons)',
        category: 'Health',
        icon: '💊',
        duration: '4 Years',
        fees: 'RM 36,000/year',
        level: 'Undergraduate',
        intake: 'March, July',
        description:
            'A rigorous program covering pharmaceutical sciences, pharmacology, clinical pharmacy, and drug development. Graduates are licensed to practice in Malaysia.',
        requirements: 'SPM with credits in Biology, Chemistry, Physics/Maths',
        careers: ['Pharmacist', 'Clinical Pharmacist', 'Drug Researcher', 'Hospital Pharmacist'],
        highlights: ['Pharmacy Lab', 'Hospital Attachment', 'BPharm Recognized by MPC'],
        keywords: ['pharmacy', 'pharmacist', 'medicine', 'drug', 'health'],
    },

    // ---- Law ----
    {
        id: 12,
        name: 'Bachelor of Laws (LLB) (Hons)',
        category: 'Law',
        icon: '⚖️',
        duration: '4 Years',
        fees: 'RM 30,000/year',
        level: 'Undergraduate',
        intake: 'March, July',
        description:
            'Comprehensive legal education covering Malaysian law, constitutional law, contract law, criminal law, and advocacy. Prepares students for the Bar exams.',
        requirements: 'SPM / STPM / A-Level / Foundation',
        careers: ['Lawyer', 'Legal Advisor', 'Magistrate', 'Corporate Counsel'],
        highlights: ['Moot Court', 'Legal Aid Clinic', 'CLP Preparation'],
        keywords: ['law', 'legal', 'llb', 'lawyer', 'advocate', 'court'],
    },
];

// ---- Categories for filter ----
export const categories = ['All', 'Engineering', 'Business', 'IT', 'Health', 'Law'];

// ---- University info ----
export const universityInfo = {
    name: 'Lincoln University College',
    shortName: 'Lincoln UC',
    tagline: 'Where Leaders Are Made',
    founded: 2002,
    code: 'DKU016(B)',
    address: 'Wisma Lincoln, No. 12-18, Jalan SS 6/12, Kelana Jaya, 47301 Petaling Jaya, Selangor, Malaysia',
    phone: '+603-7806 3478',
    email: 'info@lincoln.edu.my',
    website: 'www.lincoln.edu.my',
    stats: {
        students: '8,000+',
        programs: '70+',
        countries: '40+',
        years: '20+',
        staff: '500+',
        alumni: '20,000+',
    },
    mission:
        'To provide quality and affordable higher education that develops ethical, creative, and globally competitive graduates who contribute meaningfully to society.',
    vision:
        'To be a premier and globally recognized university college offering world-class education with a strong emphasis on research, innovation, and industry partnerships.',
    values: [
        { icon: '🌟', title: 'Excellence', desc: 'Pursuing the highest academic and professional standards in everything we do.' },
        { icon: '🤝', title: 'Integrity', desc: 'Acting with honesty, transparency, and ethical responsibility.' },
        { icon: '🌍', title: 'Diversity', desc: 'Embracing students from over 40 countries in an inclusive community.' },
        { icon: '💡', title: 'Innovation', desc: 'Encouraging creative thinking, research, and lifelong learning.' },
    ],
    faculties: [
        { name: 'Faculty of Engineering', programs: 12, icon: '⚙️' },
        { name: 'Faculty of Business', programs: 15, icon: '💼' },
        { name: 'Faculty of Information Technology', programs: 10, icon: '💻' },
        { name: 'Faculty of Health Sciences', programs: 14, icon: '🏥' },
        { name: 'Faculty of Law', programs: 6, icon: '⚖️' },
        { name: 'Faculty of Arts & Social Sciences', programs: 8, icon: '🎨' },
    ],
    leadership: [
        { name: 'Dato\' Dr. Eswaran Narasiman', role: 'President / Vice Chancellor', initials: 'EN' },
        { name: 'Prof. Dr. Saravanan Murugan', role: 'Deputy Vice Chancellor (Academic)', initials: 'SM' },
        { name: 'Prof. Dr. Murugesu Pathmanathan', role: 'Deputy Vice Chancellor (Research)', initials: 'MP' },
        { name: 'Prof. Dr. Lim Soo Kun', role: 'Registrar', initials: 'LK' },
    ],
    testimonials: [
        {
            name: 'Ahmad Faris',
            program: 'BBA Graduate, 2023',
            initials: 'AF',
            text: 'Lincoln gave me the business skills and confidence to land my dream job at a Fortune 500 company. The lecturers are experienced industry professionals who truly care.',
        },
        {
            name: 'Priya Nair',
            program: 'BSc Nursing, 2022',
            initials: 'PN',
            text: 'The hospital placements were incredible. I felt fully prepared on day one of work. Lincoln\'s nursing program is top-class and the faculty is very supportive.',
        },
        {
            name: 'Zhang Wei',
            program: 'MSc Cybersecurity, 2023',
            initials: 'ZW',
            text: 'As an international student from China, I felt welcome from day one. The cyber lab is world-class and I secured a job in Singapore before graduation.',
        },
        {
            name: 'Mohammed Ali',
            program: 'BSc Nursing, 2024',
            initials: 'MA',
            text: 'As an international student from China, I felt welcome from day one. The cyber lab is world-class and I secured a job in Singapore before graduation.',
        },
    ],
    news: [
        {
            id: 1,
            title: 'Lincoln UC Rises in QS World University Rankings 2025',
            date: 'June 10, 2025',
            category: 'Achievement',
            excerpt: 'Lincoln University College has been ranked among the top universities in Malaysia, reflecting our commitment to academic excellence.',
        },
        {
            id: 2,
            title: 'New AI & Data Science Lab Launched',
            date: 'May 28, 2025',
            category: 'Campus',
            excerpt: 'Our state-of-the-art AI laboratory opens doors for students to work with cutting-edge machine learning tools and datasets.',
        },
        {
            id: 3,
            title: 'Convocation 2025 – Celebrating 1,200 Graduates',
            date: 'May 15, 2025',
            category: 'Event',
            excerpt: 'Join us in congratulating the Class of 2025 as they embark on their professional journeys across 40+ countries.',
        },
    ],
};

// ---- FAQ data ----
export const faqs = [
    {
        q: 'What are the entry requirements for undergraduate programs?',
        a: 'Most undergraduate programs require SPM with at least 5 credits (including English), STPM, A-Level, Foundation, or an equivalent Diploma. Specific science programs may require credits in relevant science subjects. Check individual program pages for details.',
    },
    {
        q: 'Does Lincoln University College offer scholarships?',
        a: 'Yes! We offer Merit Scholarships (up to 50% discount), Sports Excellence Awards, and Sibling Discounts. International students may also be eligible for our Global Excellence Scholarship. Visit the Admissions Office or contact us for the latest offerings.',
    },
    {
        q: 'Are the programs accredited?',
        a: 'All our programs are accredited by the Malaysian Qualifications Agency (MQA) and registered with the Ministry of Higher Education (MOHE). Several professional programs carry additional accreditation from bodies like ACCA, MPC, BEM, and MOH.',
    },
    {
        q: 'Can international students apply?',
        a: 'Absolutely! We welcome students from over 40 countries. International applicants need to provide their academic transcripts, English proficiency (IELTS 5.5 or TOEFL 60), a valid passport copy, and a Student Pass application. Our International Student Services team will guide you through the process.',
    },
    {
        q: 'What is the medium of instruction?',
        a: 'All programs at Lincoln University College are conducted in English, making it an excellent choice for both local and international students.',
    },
    {
        q: 'Is on-campus accommodation available?',
        a: 'While Lincoln UC does not have on-campus hostels, we have partnered with several nearby student residences in Kelana Jaya and Petaling Jaya offering affordable and comfortable housing. Our Student Affairs office can assist with arrangements.',
    },
    {
        q: 'How do I apply?',
        a: 'You can apply online through our website, or visit our campus at Kelana Jaya. Submit your application along with copies of academic certificates, IC/Passport, and a passport-sized photo. Our Admissions team will contact you within 3 working days.',
    },
    {
        q: 'What is the duration of the Foundation program?',
        a: 'Our Foundation in Science, Arts, and Business programs each take 1 year (2 semesters) to complete. After Foundation, students can progress directly into their chosen undergraduate degree at Lincoln UC or other universities.',
    },
];
