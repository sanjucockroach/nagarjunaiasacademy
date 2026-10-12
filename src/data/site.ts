import {
  BookOpenCheck,
  Compass,
  Lightbulb,
  NotebookPen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ---------------- Learn pillars (from the academy's own page) ---------------- */

export const LEARN_PILLARS: Array<{ title: string; line: string; icon: LucideIcon }> = [
  {
    title: 'Step-by-step methods',
    line: 'Hundreds of aspirants have followed the same sequenced plan: foundation first, integration next, answer writing always.',
    icon: Compass,
  },
  {
    title: 'Mastering the syllabus',
    line: 'Complexity is converted into clarity with theme maps, so the syllabus feels like a checklist rather than an ocean.',
    icon: BookOpenCheck,
  },
  {
    title: 'Current affairs with GS',
    line: 'News is never a separate subject here. Every briefing is stitched into the core General Studies topics it belongs to.',
    icon: NotebookPen,
  },
  {
    title: 'Answer writing that scores',
    line: 'Structure and presentation decide marks. The TESP technique trains theme, example, structure and presentation under time.',
    icon: Lightbulb,
  },
];

/* ---------------- Ten exclusive benefits (verbatim list from the academy) ---------------- */

export const BENEFITS: string[] = [
  'Powerful education',
  'Result oriented',
  'Most organized',
  'Classified and simplified',
  'Integration of current affairs with core subjects',
  'Focused and impactful',
  'Application oriented',
  'Memory reinforcing',
  'Most updated version',
  'Time and energy saving',
];

/* ---------------- Audiences (verbatim) ---------------- */

export const AUDIENCES: string[] = [
  'UPSC Civil Services aspirants',
  'APPSC Group I and II aspirants',
  'Undergraduates, graduates and postgraduates',
  'Employees who aspire to advance in their career',
  'Those seeking educational enrichment',
  'Those who wish to fix their intellectual poverty',
  'Educators building interdisciplinary thinking',
  'Those seeking personality development',
];

/* ---------------- Testimonials scraped from nagarjunaiasacademy.in ---------------- */

export interface Testimonial {
  name: string;
  service: string;
  initials: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'M. Tulasi',
    service: 'IAS',
    initials: 'MT',
    quote:
      'The credit for my good score in GS, Essay, Public Administration and Interview goes to Ravindra Babu sir. The dawn of light in the lives of IAS aspirants is Nagarjuna IAS Academy. Ravindra Babu sir will be the Dronacharya preparing new age Arjunas.',
  },
  {
    name: 'JVN Subramanyam',
    service: 'IAS',
    initials: 'JS',
    quote:
      'I am proud to be part of the success run of Nagarjuna IAS Academy, being selected for IAS under the able and perfected guidance of Ravindra Babu sir. I wholeheartedly dedicate my success to my friend, philosopher and guide.',
  },
  {
    name: 'B. Uday Bhaskar',
    service: 'IPS',
    initials: 'BU',
    quote:
      'Integrated approach, logical and analytical explanations by Ravindra Babu sir boosted my confidence. The credit for my success goes to Nagarjuna IAS Academy.',
  },
  {
    name: 'G. Kapil',
    service: 'IRS',
    initials: 'GK',
    quote:
      'Analytical explanations, interview guidance and mock interviews by Ravindra Babu sir helped me to secure the result. I am thankful to the Nagarjuna IAS Academy.',
  },
  {
    name: 'V. Narendranath',
    service: 'IFS',
    initials: 'VN',
    quote:
      'Major part of the credit for my selection to IFS goes to Ravindra Babu sir and Nagarjuna IAS Academy.',
  },
  {
    name: 'K. Pradeep Babu',
    service: 'IRAS',
    initials: 'KP',
    quote:
      'Coaching and guidance by Ravindra Babu sir inspired me to write the exam seriously and greatly helped my success in the Civil Services Exam.',
  },
  {
    name: 'N. Mohan Krishna',
    service: 'Civil Services',
    initials: 'NM',
    quote:
      'Holistic explanations of Ravindra Babu sir on GS, Public Administration, Essay and guidance for interview contributed to my success, which are in tune with the requirements of UPSC.',
  },
  {
    name: 'V. Rose Mary',
    service: 'Finance & Accounts Service',
    initials: 'VR',
    quote:
      'Commitment, dedication and genuine interest of Sri Ravindra Babu to help students excel in Civils is unparalleled. I am indebted to his mentorship.',
  },
  {
    name: 'Suyodhan',
    service: 'Civil Judge',
    initials: 'S',
    quote:
      'Logical explanations, the TESP technique and subject frameworks imparted by Ravindra Babu sir reinforce memory and help students achieve any service.',
  },
  {
    name: 'V. Sahithya',
    service: 'Civil Services',
    initials: 'VS',
    quote:
      'Analytical explanations, guidance and mock sittings for interview have contributed for my success in CSE. I am very much thankful to Ravindra Babu sir and the academy.',
  },
];

/* ---------------- FAQs scraped from the live site ---------------- */

export const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What makes this UPSC preparation programme different?',
    a: 'The programme combines proven strategies, expert guidance and a structured, personalised approach. The focus is on efficiency, clarity and mindset, so the journey is smarter, not harder.',
  },
  {
    q: 'How do I know if this programme is right for me?',
    a: 'If you are serious about clearing the UPSC CSE, looking for a well-structured plan, and ready to commit to focused preparation, the programme suits your needs.',
  },
  {
    q: 'Is this programme suitable for beginners?',
    a: 'Yes. Beginners are guided step by step so they build a strong foundation while avoiding the common pitfalls of UPSC preparation.',
  },
  {
    q: 'How is this different from self-study?',
    a: 'Expert mentorship, structured resources and a personalised strategy are what self-study usually lacks. That difference shows up as better outcomes in less time.',
  },
  {
    q: 'Can working professionals benefit?',
    a: 'Absolutely. The programme is designed to help working professionals balance their time efficiently while maximising learning and progress.',
  },
  {
    q: 'What resources will I get access to?',
    a: 'Curated study material, practice tests, exclusive strategy sessions and access to an interactive community of aspirants and mentors.',
  },
  {
    q: 'How does the programme address my unique challenges?',
    a: 'Personalised feedback and one-on-one guidance address individual challenges, so no aspirant feels left behind.',
  },
  {
    q: 'What is the duration of the programme?',
    a: 'Flexible: short-term intensive courses or a year-long structured plan, tailored to your preparation timeline.',
  },
  {
    q: 'Do you provide mock tests?',
    a: 'Yes. Comprehensive mock tests simulate the UPSC exam environment to help you evaluate and improve performance, with awards for the best performers.',
  },
  {
    q: 'How do I enrol?',
    a: 'Start with the Bronze membership to experience the method, or reach the academy through the contact page for counselling and the weekly orientation call.',
  },
];

/* ---------------- Founder / about ---------------- */

export const ABOUT_FEATURES: string[] = [
  '4i approach: Information, Interpretation, Integrity, Intensity',
  'Senior-most faculty with proven ability',
  'Holistic and interdisciplinary method',
  'In-depth analysis, to-the-point teaching',
  'Most updated content, quality notes',
  'Success-oriented strategic coaching for CSE',
];
