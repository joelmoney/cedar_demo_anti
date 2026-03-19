import { selectJourneyByScore } from './journeyScoring';

export interface JourneyStep {
  headline: string;
  body: string;
  bullets?: string[];
  instruction?: string;
  deeperContent?: string;
  videoUrl?: string;
  lottieUrl?: string;
}

export interface JourneyLeftPanelContent {
  headline: string;
  body: string;
  bullets?: string[];
  instruction?: string;
  deeperContent?: string;
}

export interface Persona {
  name: string;
  age: number;
  dob: string;
  occupation: string;
  location: string;
  hometown: string;
  bio: string;
  imageUrl: string;
}

export interface PersonaScreenContent {
  tagline: string;
  headline: string;
  body: string;
  buttonText: string;
}

export interface Journey {
  id: string;
  name: string;
  eyebrowTitle: string;
  persona: Persona;
  personaScreenContent: PersonaScreenContent;
  steps: JourneyStep[];
  leftPanelContent: JourneyLeftPanelContent[];
  recapTitle: string;
  recapDescription: string;
  recapHighlights: string[];
  recapGradient: string;
  defaultSliderValues: Record<string, number>;
}

export const journeys: Journey[] = [
  {
    id: 'journey1',
    name: 'Journey 1',
    eyebrowTitle: 'Intelligent Discounts',
    persona: {
      name: 'Elias Thorne',
      age: 34,
      dob: '05.12.92',
      occupation: 'Freelance Designer',
      location: 'Portland, OR',
      hometown: 'Seattle, WA',
      bio: 'Elias is a 34-year-old freelance designer juggling irregular income, so when his insurance unexpectedly lapses and a large hospital bill hits, a smart discount that reflects his real ability to pay is the difference between avoidance and engagement.',
      imageUrl: '/images/persona_1.jpg',
    },
    personaScreenContent: {
      tagline: 'Your Journey Begins',
      headline: 'Meet Elias Thorne',
      body: 'This personalized experience is tailored based on your selections. Let\'s explore the journey together.',
      buttonText: 'Begin Journey',
    },
    recapTitle: '',
    recapDescription: '',
    recapHighlights: [
      'Making large self-pay bills feel affordable',
      'Cedar Intelligence turns an overwhelming self-pay balance into an affordable, personalized offer by matching Elias with a right‑sized, time‑bound discount and discounted payment plan. He feels able to engage and pay, while ABC Health recovers more revenue without blunt write‑offs.'
    ],
    recapGradient: 'from-blue-600 via-cyan-600 to-blue-800',
    defaultSliderValues: {
      sentiment: 1,
      billSize: 3,
      paymentBehavior: 1,
      insurance: 0,
      digitalLiteracy: 3,
      income: 1,
    },
    leftPanelContent: [
      {
        headline: 'Elias\' real-world context',
        body: 'Based on what Cedar Intelligence knows about Elias\' situation, he\'s facing financial strain rather than unwillingness to pay.\n\nBecause patients in similar situations often delay or avoid payment unless affordability changes, the engine flags Elias as needing a lifeline, not more standard reminders. That shifts him away from generic dunning toward affordability workflows.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Routing to the right experience',
        body: 'Cedar Intelligence determines Elias may be a good match for the Intelligent Discounts.\n\nBehind the scenes, a discount model looks at historical outcomes, balance size, similar patient attributes, and ABC Health\'s guardrails to determine the smallest effective discount that still unlocks payment while protecting margin, instead of a blunt across‑the‑board write‑off.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Fine-tuning for affordability',
        body: 'To further address affordability and increase the likelihood of payment, Cedar offers Elias both the personalized, time‑bound discount embedded directly in his digital flow as well as a discounted payment plan.\n\nElias chooses the discounted payment plan',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Secure verification with ease',
        body: 'Before proceeding any further, Cedar prompts Elias to verify his identity without the need to track down a login or reset a forgotten password.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Flexible payment plans',
        body: 'Cedar then allows Elias to configure the payment plan start date, cadence and installment amount that works best for him.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Reducing friction at every step',
        body: 'Elias has made payments with ABC Health in the past, so Cedar displays his saved payment information.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Peace of mind, confirmed',
        body: 'With one more click, Cedar confirms Elias\' payment plan.\n\nNow, Elias can focus on healing instead of affording the care he needs.',
        instruction: 'Tap to finish',
      },
    ],
    steps: [
      {
        headline: '',
        body: '',
      },
      {
        headline: '',
        body: '',
      },
      {
        headline: '',
        body: '',
      },
      {
        headline: '',
        body: '',
      },
      {
        headline: '',
        body: '',
      },
      {
        headline: '',
        body: '',
      },
      {
        headline: '',
        body: '',
      },
    ],
  },
  {
    id: 'journey2',
    name: 'Journey 2',
    eyebrowTitle: 'COORDINATION OF BENEFITS',
    persona: {
      name: 'Martha Higgins',
      age: 71,
      dob: '11.24.54',
      occupation: 'Administrative Assistant',
      location: 'Austin, TX',
      hometown: 'St. Petersburg, FL',
      bio: 'Martha is a 71-year-old administrative assistant who carefully manages both her employer coverage and Medicare, so a denied claim feels especially unfair. Clear coordination-of-benefits guidance helps her understand what happened and get her bill covered correctly.',
      imageUrl: '/images/persona_2.jpg',
    },
    personaScreenContent: {
      tagline: 'Your Journey Begins',
      headline: 'Meet Martha Higgins',
      body: 'This personalized experience is tailored based on your selections. Let\'s explore the journey together.',
      buttonText: 'Begin Journey',
    },
    recapTitle: '',
    recapDescription: '',
    recapHighlights: [
      'Turn confusing denials into covered claims',
      'Instead of sending more bills, Cedar pinpoints that Martha\'s problem is a coordination‑of‑benefits issue and walks her through fixing her insurance details. She gets clear steps to resolve the denial, and ABC Health turns a likely write‑off into reimbursed coverage.'
    ],
    recapGradient: 'from-purple-600 via-pink-600 to-purple-800',
    defaultSliderValues: {
      sentiment: 1,
      billSize: 2,
      paymentBehavior: 3,
      insurance: 2,
      digitalLiteracy: 2,
      income: 2,
    },
    leftPanelContent: [
      {
        headline: 'Martha\'s real-world context',
        body: 'Based on what Cedar Intelligence knows about Martha\'s visit, her claim was denied even though she carefully manages both employer coverage and Medicare. That signals confusion and frustration about why she\'s getting a bill at all, not an unwillingness to pay.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Routing to the right experience',
        body: 'Because Cedar Intelligence detected that Martha received a denial, Cedar routes Martha into the COB guidance experience. Cedar uses email—her preferred channel—to proactively alert her that the visit was not covered and that there are steps she can take to fix it.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Gathering what\'s needed to fix coverage',
        body: 'Within the experience, Cedar asks a few focused questions to understand her coverage situation. Martha indicates that she has both Medicare and employer coverage, which allows Cedar to surface the right denial path instead of sending her down a one‑size‑fits‑all billing flow.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Clear, actionable next steps',
        body: 'Cedar then lays out simple, sequential instructions to allow for an explanation of what happened and what to do next, like which plan should be primary and which details to confirm with each payer. The guidance is written in plain language so Martha knows exactly what to say when she contacts her insurance.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Closing the loop',
        body: 'Once the payer response is received, Cedar confirms the outcome and any changes to what Martha owes. Only after coverage is correctly coordinated does Cedar resume standard billing, ensuring Martha pays the right amount for the right reason.',
        instruction: 'Tap to finish',
      },
    ],
    steps: [
      {
        headline: 'Welcome to Journey 2 - Screen 1',
        body: 'A different path tailored to your specific choices.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 2 - Screen 2',
        body: 'Experience powerful tools built for your workflow.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 2 - Screen 3',
        body: 'See the difference this approach makes for your goals.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 2 - Screen 4',
        body: 'Discover advanced capabilities for your needs.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 2 - Screen 5',
        body: 'Your journey continues to new heights.',
        instruction: 'Tap to finish',
      },
    ],
  },
  {
    id: 'journey3',
    name: 'Journey 3',
    eyebrowTitle: 'KORA OUTBOUND',
    persona: {
      name: 'Juliana Torres',
      age: 52,
      dob: '06.30.75',
      occupation: 'Project Manager',
      location: 'Phoenix, AZ',
      hometown: 'New York, NY',
      bio: 'Juliana is a 52-year-old project manager racing through the final details of her daughter\'s wedding, so when a new provider sends an unfamiliar type of digital bill, a timely Kora Outbound message that explains she can use her HSA makes it simple to resolve without derailing her focus.',
      imageUrl: '/images/persona_3.jpg',
    },
    personaScreenContent: {
      tagline: 'Your Journey Begins',
      headline: 'Meet Juliana Torres',
      body: 'This personalized experience is tailored based on your selections. Let\'s explore the journey together.',
      buttonText: 'Begin Journey',
    },
    recapTitle: '',
    recapDescription: '',
    recapHighlights: [
      'Unlock forgotten HSA dollars with proactive outreach',
      'Cedar Intelligence sees Juliana is digitally disengaged but has HSA funds available, then uses Kora Outbound to reach her by phone at the right moment. Kora explains her options, surfaces her HSA balance, and sends a secure link so she can pay quickly without derailing her day.'
    ],
    recapGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
    defaultSliderValues: {
      sentiment: 2,
      billSize: 1,
      paymentBehavior: 2,
      insurance: 4,
      digitalLiteracy: 3,
      income: 3,
    },
    leftPanelContent: [
      {
        headline: 'Juliana\'s real-world context',
        body: 'Cedar Intelligence sees Juliana has a manageable balance, has a history of paying bills but doesn\'t typically engage with digital outreach, making her a good candidate for proactive voice outreach with Kora Outbound for proactive voice outreach. When Kora places the call, it uses an ABC Health caller ID so Juliana recognizes who\'s reaching out.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Framing around security and flexibility, not collections',
        body: 'When Juliana answers, Kora warmly introduces itself as ABC Health\'s AI assistant, quickly confirms it\'s speaking with her, then securely verifies her identity and walks through flexible payment options, keeping things supportive, compliant, and respectful of her time.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Surfacing her HSA balance as an ideal option',
        body: 'Because Cedar Intelligence detects Juliana\'s HSA can cover her bill, Kora gently suggests using it and offers secure ways to pay now or via a texted link later. Juliana chooses the link so she can finish when it\'s convenient.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Confirming the texted payment link',
        body: 'Kora sends a secure payment link to Juliana\'s mobile number, confirms it went to the right place, and checks if she needs anything else before ending the conversation.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Left Panel Content - Screen 5',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Left Panel Content - Screen 6',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Left Panel Content - Screen 7',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Left Panel Content - Screen 8',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Left Panel Content - Screen 9',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        instruction: 'Tap to finish',
      },
    ],
    steps: [
      {
        headline: 'Welcome to Journey 3 - Screen 1',
        body: 'Your selections have led you to this unique experience.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 2',
        body: 'Your selections have led you to this unique experience.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 3',
        body: 'Unlock new possibilities with these capabilities.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 4',
        body: 'This is just the beginning of your journey.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 5',
        body: 'Discover innovative solutions for your needs.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 6',
        body: 'Experience transformative tools and strategies.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 7',
        body: 'Your success story starts here.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 8',
        body: 'Your success story starts here.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 3 - Screen 9',
        body: 'Your success story starts here.',
        instruction: 'Tap to finish',
      },
    ],
  },
  {
    id: 'journey4',
    name: 'Journey 4',
    eyebrowTitle: 'Partial Payment',
    persona: {
      name: 'Saffron Rivers',
      age: 28,
      dob: '02.14.98',
      occupation: 'Marketing Professional',
      location: 'Seattle, WA',
      hometown: 'Austin, TX',
      bio: 'Saffron is a 28-year-old marketing professional recently impacted by a layoff, and while they\'re committed to paying what they can, a flexible plan that builds from their initial partial payment keeps care affordable while they search for their next role.',
      imageUrl: '/images/persona_4.jpg',
    },
    personaScreenContent: {
      tagline: 'Your Journey Begins',
      headline: 'Meet Saffron Rivers',
      body: 'This personalized experience is tailored based on your selections. Let\'s explore the journey together.',
      buttonText: 'Begin Journey',
    },
    recapTitle: '',
    recapDescription: '',
    recapHighlights: [
      'Convert "I\'ll pay what I can" into a sustainable plan',
      'When Saffron makes a partial payment, Cedar treats it as a strong intent signal and immediately offers an interest‑free plan calibrated around what they can afford. That keeps care financially manageable for Saffron while increasing long‑term collections for ABC Health.'
    ],
    recapGradient: 'from-orange-600 via-amber-600 to-orange-800',
    defaultSliderValues: {
      sentiment: 1,
      billSize: 3,
      paymentBehavior: 2,
      insurance: 3,
      digitalLiteracy: 4,
      income: 1,
    },
    leftPanelContent: [
      {
        headline: 'Saffron\'s real-world context',
        body: 'Based on Saffron\'s previous payment behavior, bill size and other attributes, Cedar Intelligence recognizes that Saffron is likely someone who wants to pay but needs more flexibility to make it work.\n\nCedar alerts Saffron to their bill through the channel they engage with most, text, so the message lands where they\'re most responsive.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Surfacing the right solutions',
        body: 'Cedar first provides a concise bill summary and clearly surfaces the option to make a partial payment instead of an all‑or‑nothing choice.\n\nSaffron wants to learn more about making a partial payment and clicks on that option.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Quick, secure verification',
        body: 'Before showing sensitive details, Cedar verifies Saffron\'s identity with a simple, low‑friction check—no need to remember a username or reset a password. This keeps both the provider and Saffron protected without derailing their intent to pay.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Capturing what\'s possible today',
        body: 'Cedar then asks Saffron how much they\'d like to pay right now. That amount becomes a key signal for Cedar Intelligence: it reflects Saffron\'s current cash on hand and willingness to stay engaged and pursue payment.\n\nUsing the partial amount Saffron enters, Cedar proposes an interest‑free payment plan with an installment slightly below that number. This both respects Saffron\'s budget and increases the likelihood that ABC Health collects more over time instead of losing the patient entirely.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Letting Saffron fine‑tune the plan',
        body: 'From there, Saffron can adjust the start date, cadence, and installment amount within guardrails set by ABC Health. The interface makes it clear how changes affect the total timeline so Saffron can find the right balance between affordability and speed.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Frictionless checkout',
        body: 'When it\'s time to complete the plan, Cedar surfaces saved payment methods alongside popular options like cards, ACH, and digital wallets. Saffron doesn\'t have to re‑enter information—one more way to keep a motivated but financially stressed patient from abandoning the process.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Confidence in the agreement',
        body: 'With a final confirmation click, Cedar activates the plan and shows Saffron exactly what will be drafted and when. The result is peace of mind for Saffron and a structured, higher‑yield recovery path for ABC Health.',
        instruction: 'Tap to finish',
      },
    ],
    steps: [
      {
        headline: 'Welcome to Journey 4 - Screen 1',
        body: 'A specialized path designed for your preferences.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 4 - Screen 2',
        body: 'Experience streamlined processes built for speed.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'We value your privacy',
        body: 'Verify your identity to proceed securely.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Payment summary',
        body: 'Discover targeted solutions for your workflow.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Create a payment plan',
        body: 'Leverage precision tools to maximize efficiency.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Payment methods',
        body: 'Optimize your process with proven methods.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Payment confirmed',
        body: 'Your payment plan has been successfully set up.',
        instruction: 'Tap to finish',
      },
    ],
  },
  {
    id: 'journey5',
    name: 'Journey 5',
    eyebrowTitle: 'Financial Aid',
    persona: {
      name: 'Preston Sterling',
      age: 50,
      dob: '08.03.19',
      occupation: 'Warehouse Worker',
      location: 'Denver, CO',
      hometown: 'Chicago, IL',
      bio: 'Preston is a 50-year-old warehouse worker who recently moved his family across state lines and assumed their Medicaid would transfer automatically, so proactive guidance that flags his eligibility gap and streamlines re-enrollment protects them from unexpected medical debt.',
      imageUrl: '/images/persona_5.jpg',
    },
    personaScreenContent: {
      tagline: 'Your Journey Begins',
      headline: 'Meet Preston Sterling',
      body: 'This personalized experience is tailored based on your selections. Let\'s explore the journey together.',
      buttonText: 'Begin Journey',
    },
    recapTitle: '',
    recapDescription: '',
    recapHighlights: [
      'Catch coverage gaps before they become bad debt',
      'Seeing that Preston previously relied on Medicaid but now lacks active coverage, Cedar links his estimate to a guided enrollment flow instead of a pure self‑pay path. With partner Fortuna, it helps him re-enroll, tracks status, and updates his bills once coverage is restored.'
    ],
    recapGradient: 'from-red-600 via-rose-600 to-red-800',
    defaultSliderValues: {
      sentiment: 1,
      billSize: 2,
      paymentBehavior: 1,
      insurance: 1,
      digitalLiteracy: 1,
      income: 0,
    },
    leftPanelContent: [
      {
        headline: 'Preston\'s real-world context',
        body: 'From Preston\'s prior visits, Cedar Intelligence knows he previously used Medicaid to cover his care. As this new visit approaches, Cedar reaches out via text, Preston\'s preferred communication channel, to proactively confirm his coverage details and share an estimate.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Proactive estimate, preferred channel',
        body: 'This early outreach gives him a clear view of potential costs and sets the stage for offering help before a surprise bill arrives.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Easy identity verification with no login',
        body: 'When Preston taps the link in the text, Cedar verifies his identity with a quick, secure check—no username, no password reset. This keeps the experience safe and compliant without adding friction that might cause him to drop off.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Keeping things up to date',
        body: 'After verification, Cedar prompts Preston to review and update key contact and coverage details. This is where Cedar detects that while he\'s entered an address in a new state, Preston did not update his Medicaid plan, flagging that there is likely a coverage gap.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Generating a real-time estimate',
        body: 'With his visit and coverage information in place, Cedar uses integrations with payers to generate an up‑to‑date estimate for the upcoming appointment, then presents it in clear, patient‑friendly language.\n\nIn the background, Cedar Intelligence combines what it knows—historical Medicaid use, lack of active coverage, high estimate, and likely financial sensitivity—to determine that Preston may need help paying this bill.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Linking the estimate to coverage help',
        body: 'On the estimate screen, Cedar prominently offers empathetic support in exploring coverage options, instead of pushing straight to self‑pay.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Routing into the Medicaid enrollment journey',
        body: 'When Preston indicates that he needs help, Cedar routes him into the Medicaid Enrollment flow directly from the estimate, so he doesn\'t have to start over in a separate system or hunt down state resources on his own.\n\nBehind the scenes, Cedar hands Preston off to trusted partner Fortuna, which specializes in Medicaid enrollment. To Preston, it feels like a single, continuous experience focused on getting him back under coverage.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Confirming preferred contact method',
        body: 'Within Fortuna\'s flow, Preston first confirms how he wants to be contacted going forward—text, phone, or email—so updates about his application and coverage reach him in the way he\'s most likely to see.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Confirming his state of residency',
        body: 'Next, Preston confirms his current state of residence. This step is critical, since moving to a new state is often why previously active Medicaid coverage has lapsed.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Gathering household information',
        body: 'Fortuna then collects basic household details (who lives with Preston, ages, and relationships) so it can determine who in the family may qualify for Medicaid and under which programs.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Checking likely Medicaid eligibility',
        body: 'Using that household information and high‑level financial context, Fortuna evaluates Preston\'s likely eligibility for Medicaid in his new state, signaling whether he appears to qualify before moving into the full application.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Beginning the Medicaid application',
        body: 'Because he appears eligible, Preston is guided into the full Medicaid application right from the same flow, without needing to find and complete separate government forms on his own.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Collecting income details with support',
        body: 'As part of the application, Fortuna gathers details about household income, such as wages, pay frequency, and any additional sources. If Preston doesn\'t have exact numbers handy, the experience offers examples and guidance so he can provide reasonable estimates without getting stuck.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Collecting income details with support',
        body: 'As part of the application, Fortuna gathers details about household income, such as wages, pay frequency, and any additional sources. If Preston doesn\'t have exact numbers handy, the experience offers examples and guidance so he can provide reasonable estimates without getting stuck.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Completing and submitting the application',
        body: 'Once all required fields are filled in, Fortuna submits the Medicaid application on Preston\'s behalf. He sees a clear confirmation that his application has been sent to the state for review.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Completing and submitting the application',
        body: 'Once all required fields are filled in, Fortuna submits the Medicaid application on Preston\'s behalf. He sees a clear confirmation that his application has been sent to the state for review.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Confirming submission and setting expectations',
        body: 'Cedar and Fortuna outline what to expect next—typical review timelines, what kinds of communications to watch for, and whether any additional documentation may be requested. That way, Preston isn\'t left wondering what happens after he clicks "submit."\n\nAfter submission, Cedar continues to monitor the application status in the background. Instead of relying on Preston to repeatedly check a portal, Cedar keeps a live pulse on where things stand.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Proactive updates via his preferred channel',
        body: 'Whenever the state updates the application—requesting more information, issuing a decision, or activating coverage—Cedar uses Preston\'s preferred contact method to alert him. He gets timely nudges when something important changes, without having to initiate the check‑ins himself.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Preventing avoidable medical debt',
        body: 'When Preston\'s application is approved, Cedar confirms that his Medicaid coverage is active again.\n\nBy connecting his prior Medicaid history, the lack of current coverage, and his upcoming visit, Cedar Intelligence transforms what could have become unaffordable medical debt into a covered encounter. Preston experiences a guided, end‑to‑end journey that keeps his family protected financially.',
        instruction: 'Tap to finish',
      },
    ],
    steps: [
      {
        headline: 'Welcome to Journey 5 - Screen 1',
        body: 'Your journey begins with a foundation of excellence.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 2',
        body: 'Layer by layer, create something remarkable.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 3',
        body: 'Continue building on this strong foundation.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 4',
        body: 'Discover quality first principles in action.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 5',
        body: 'Experience reliable systems and trusted solutions.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 6',
        body: 'Build your solid foundation with strategic growth.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 7',
        body: 'Create sustainable practices for long-term success.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 8',
        body: 'Embrace ongoing development and adaptive strategies.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 9',
        body: 'Establish lasting impact through excellence.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 10',
        body: 'Unlock new possibilities for growth.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 11',
        body: 'Leverage proven methodologies and best practices.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 12',
        body: 'Achieve measurable results and clear outcomes.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 13',
        body: 'Explore innovative approaches to your challenges.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 14',
        body: 'Transform your vision into actionable results.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 15',
        body: 'Experience cutting-edge solutions and expertise.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 16',
        body: 'Navigate your path with expert guidance.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 17',
        body: 'Build confidence through demonstrated success.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 18',
        body: 'Embrace continuous improvement and evolution.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 5 - Screen 19',
        body: 'Prepare for your next chapter of success.',
        instruction: 'Tap to finish',
      },
    ],
  },
  {
    id: 'journey6',
    name: 'Journey 6',
    eyebrowTitle: 'Express Pay',
    persona: {
      name: 'Chris Miller',
      age: 31,
      dob: '10.19.94',
      occupation: 'Software Engineer',
      location: 'Charlotte, NC',
      hometown: 'Denver, CO',
      bio: 'Chris is a 31-year-old software engineer who visits their primary care clinic regularly and trusts its digital tools. Having a saved card and streamlined Express Pay lets them review, confirm, and easily pay their bill during a commercial break.',
      imageUrl: '/images/persona_6.jpg',
    },
    personaScreenContent: {
      tagline: 'Your Journey Begins',
      headline: 'Meet Chris Miller',
      body: 'This personalized experience is tailored based on your selections. Let\'s explore the journey together.',
      buttonText: 'Begin Journey',
    },
    recapTitle: '',
    recapDescription: '',
    recapHighlights: [
      'Turn quick digital follow-ups into one‑click payments',
      'For Chris, a digitally engaged, high‑propensity payer with a small balance, Cedar fast‑tracks him into an Express Pay checkout. A single email deep‑links him to a pre-filled payment screen so he can review and confirm in just a few clicks, shortening time to collect.'
    ],
    recapGradient: 'from-indigo-600 via-violet-600 to-indigo-800',
    defaultSliderValues: {
      sentiment: 3,
      billSize: 1,
      paymentBehavior: 4,
      insurance: 4,
      digitalLiteracy: 4,
      income: 4,
    },
    leftPanelContent: [
      {
        headline: 'Chris\'s real-world context',
        body: 'Cedar Intelligence knows Chris is a regular visitor with a strong payment history, saved card on file, and high digital engagement. For patients like Chris, the biggest risk isn\'t affordability—it\'s friction and time.\n\nBecause fast, low‑touch flows perform best for this profile, Cedar routes Chris into an Express Pay journey.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'A fast-track experience',
        body: 'An email, his preferred channel, lets him know his bill is ready and highlights that he can pay with his saved payment method in just a few clicks.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Quick verification, no full login',
        body: 'When Chris clicks through, Cedar confrims his identity with a lightweight verification rather than sending him through a full portal login. That protects access to his information while maintaining the "in‑between‑commercials" speed he expects from modern digital tools.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Straight into checkout',
        body: 'Instead of landing on a generic overview, Chris goes directly to a streamlined checkout screen that summarizes his balance and pre‑selects his usual payment method (with the option to change it). Chris quickly reviews the amount and confirms with a single click. All of the unnecessary steps between "I got the email" and "I paid" are removed, so the experience feels like a standard consumer checkout—clear, predictable, and over in seconds.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Reinforcing trust and future behavior',
        body: 'Immediately after, Cedar shows a confirmation and sends a receipt. Each interaction teaches Cedar Intelligence more about when and how to reach Chris (and every other patient), making future Express Pay experiences even smoother and further accelerating time to collect for ABC Health.',
        instruction: 'Tap to finish',
      },
    ],
    steps: [
      {
        headline: 'Welcome to Journey 6 - Screen 1',
        body: 'Experience innovation tailored to your vision.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 6 - Screen 2',
        body: 'See how new ideas transform into reality.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 6 - Screen 3',
        body: 'Keep pushing boundaries and exploring new frontiers.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 6 - Screen 4',
        body: 'Keep pushing boundaries and exploring new frontiers.',
        instruction: 'Tap to continue',
      },
      {
        headline: 'Welcome to Journey 6 - Screen 5',
        body: 'Keep pushing boundaries and exploring new frontiers.',
        instruction: 'Tap to finish',
      },
    ],
  },
];

export interface SliderOption {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  segmentLabels: string[];
}

export const sliderOptions: SliderOption[] = [
  {
    id: 'sentiment',
    label: 'Patient Sentiment',
    min: 0,
    max: 4,
    step: 1,
    defaultValue: 2,
    segmentLabels: ['Frustrated', 'Confused', 'Distracted', 'Content', 'Pleased'],
  },
  {
    id: 'billSize',
    label: 'Bill Size',
    min: 0,
    max: 4,
    step: 1,
    defaultValue: 2,
    segmentLabels: ['>50%', '$50-350', '$350-1000', '$1000-2800', '$2800+'],
  },
  {
    id: 'paymentBehavior',
    label: 'Payment Behavior',
    min: 0,
    max: 4,
    step: 1,
    defaultValue: 2,
    segmentLabels: ['Never', 'Rarely', 'Seldom', 'Frequently', 'Recurring'],
  },
  {
    id: 'insurance',
    label: 'Insurance Coverage',
    min: 0,
    max: 4,
    step: 1,
    defaultValue: 2,
    segmentLabels: ['Not insured', 'Underinsured', 'Multiple', 'Partially', 'Commercially'],
  },
  {
    id: 'digitalLiteracy',
    label: 'Digital Usage',
    min: 0,
    max: 4,
    step: 1,
    defaultValue: 2,
    segmentLabels: ['Novice', 'Below Average', 'Average', 'Intermediate', 'Expert'],
  },
  {
    id: 'income',
    label: 'Income',
    min: 0,
    max: 4,
    step: 1,
    defaultValue: 2,
    segmentLabels: ['Very low', 'Low', 'Lower-Med', 'Upper-Med', 'High'],
  },
];

export function mapSlidersToJourney(sliderValues: Record<string, number>): Journey {
  const result = selectJourneyByScore(sliderValues);

  const journeyIndex = parseInt(result.journeyId.replace('journey', '')) - 1;
  return journeys[journeyIndex] || journeys[0];
}
