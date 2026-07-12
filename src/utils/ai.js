import { faqs, programs, universityInfo } from '../data/programs';

function normalize(value) {
    return value.trim().toLowerCase();
}

export function findPrograms(input) {
    const query = normalize(input);
    if (!query) return [];

    const affordabilityTerms = ['cheap', 'affordable', 'low cost', 'budget'];
    const postgraduateTerms = ['master', 'mba', 'postgraduate'];
    const undergraduateTerms = ['bachelor', 'degree', 'undergraduate'];

    return programs.filter((program) => {
        const haystack = [
            program.name,
            program.category,
            program.description,
            program.level,
            ...program.keywords,
        ].join(' ').toLowerCase();

        return (
            haystack.includes(query) ||
            program.keywords.some((keyword) => query.includes(keyword.toLowerCase())) ||
            (affordabilityTerms.some((term) => query.includes(term)) && program.level === 'Undergraduate') ||
            (postgraduateTerms.some((term) => query.includes(term)) && program.level === 'Postgraduate') ||
            (undergraduateTerms.some((term) => query.includes(term)) && program.level === 'Undergraduate')
        );
    });
}

export function answerQuestion(input) {
    const query = normalize(input);

    if (!query) {
        return 'Ask me about programs, fees, intakes, application steps, scholarships, or contact details.';
    }

    const matches = findPrograms(query).slice(0, 3);
    if (matches.length > 0) {
        return `I found ${matches.length} relevant program${matches.length > 1 ? 's' : ''}: ${matches.map((p) => p.name).join(', ')}. You can open Programs to compare details and intakes.`;
    }

    const faq = faqs.find((item) => {
        const text = `${item.q} ${item.a}`.toLowerCase();
        return query.split(/\s+/).some((word) => word.length > 3 && text.includes(word));
    });

    if (faq) return faq.a;

    if (query.includes('apply') || query.includes('admission')) {
        return 'You can apply by contacting the admissions team, preparing academic documents, and submitting your application. The contact form will route your enquiry to admissions.';
    }

    if (query.includes('phone') || query.includes('email') || query.includes('contact')) {
        return `You can contact ${universityInfo.shortName} at ${universityInfo.phone} or ${universityInfo.email}.`;
    }

    if (query.includes('intake')) {
        return 'Most programs list March, July, and November intakes. Some postgraduate and health programs may have fewer intakes.';
    }

    return 'I can help with program options, admissions, intakes, requirements, fees, scholarships, and contact details. Try asking "What IT programs are available?"';
}

export function generateFaqAnswer(input) {
    const answer = answerQuestion(input);
    return {
        question: input.trim() || 'What should I know before applying?',
        answer,
    };
}
