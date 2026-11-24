export const projects = [
  {
    number: '01',
    title: 'MATYAG',
    subtitle: 'Monitoring and Analysis Tool for Your Awareness Gateway',
    category: 'Capstone Project',
    description:
      'Developed a cross-platform disaster reporting system for T.I.P. Manila CCS students and faculty administrators, with sentiment analysis, approximate geolocation, and hazard alerts using React, TypeScript, FastAPI, and PostgreSQL.',
    images: [
      {
        src: 'matyag-landing.png',
        alt: 'MATYAG public landing page and system overview',
      },
      {
        src: 'matyag-workflow.png',
        alt: 'MATYAG core functions and five-stage report workflow',
      },
      {
        src: 'matyag-hazard-cross-check.png',
        alt: 'MATYAG official hazard references and project footer',
      },
      {
        src: 'matyag-login.png',
        alt: 'MATYAG sign-in screen',
      },
      {
        src: 'matyag-account-activation.png',
        alt: 'MATYAG account activation screen',
      },
      {
        src: 'matyag-student-dashboard.png',
        alt: 'MATYAG student dashboard',
      },
      {
        src: 'matyag-report-form.png',
        alt: 'MATYAG disaster report form',
      },
      {
        src: 'matyag-my-reports.png',
        alt: 'MATYAG reports page',
      },
      {
        src: 'matyag-hazard-map.png',
        alt: 'MATYAG hazard density map',
      },
      {
        src: 'matyag-bulletins.png',
        alt: 'MATYAG official hazard bulletins page',
      },
      {
        src: 'matyag-community-feed.png',
        alt: 'MATYAG community report feed',
      },
      {
        src: 'matyag-install.png',
        alt: 'MATYAG installation instructions',
      },
    ],
    githubUrl: 'https://github.com/frometou/MATYAG',
    links: [],
    details: {
      overview:
        'MATYAG is a cross-platform disaster reporting, sentiment analysis, approximate geolocation, and hazard alert system for T.I.P. Manila CCS students and faculty administrators.',
      features: [
        'The documented student workflow submits structured disaster reports with optional location consent.',
        'The documented NLP scope classifies report text as Distress, Neutral, or Relief with a confidence score; sentiment is a supporting signal for faculty review.',
        'Approximate location is captured only when a report is submitted and location permission is granted; continuous tracking is out of scope.',
        'Faculty-facing workflows include report monitoring, map visualization, and cross-checking reports against PAGASA and PHIVOLCS references.',
        'The documented research scope covers typhoons and earthquakes and does not automate hazard verification or academic accommodations.',
      ],
      architecture: [
        {
          layer: 'Frontend',
          description:
            'The README describes a responsive React, Vite, and TypeScript application organized into student, faculty-admin, authentication, map, and shared UI areas.',
        },
        {
          layer: 'API and NLP',
          description:
            'The documented backend is FastAPI, exposing REST endpoints and connecting report processing to a Python sentiment-analysis pipeline for multilingual English, Filipino, and Taglish text.',
        },
        {
          layer: 'Identity and data',
          description:
            'The linked system guide specifies Supabase Authentication and PostgreSQL, with role-based access and row-level security for student and faculty-admin data.',
        },
        {
          layer: 'Mapping and alerts',
          description:
            'The system guide names Leaflet/react-leaflet for report maps, Firebase Cloud Messaging or an equivalent for alerts, and n8n for workflow orchestration. These are documented technical directions, not confirmation that each integration is deployed.',
        },
      ],
    },
  },
  {
    number: '02',
    title: 'BrightTrack LMS',
    subtitle: 'School LMS and Student Support Platform',
    category: 'School Project',
    description:
      'Built role-based student support workflows for classes, attendance, grades, submissions, messaging, wellness monitoring, at-risk detection, and interventions. Used Django, PostgreSQL, Tailwind CSS, Gemini API, and Render; implemented OTP, permissions, and audit logging.',
    images: [
      {
        src: 'brighttrack-landing.png',
        alt: 'BrightTrack landing page showing learning, analytics, and wellness features',
      },
      {
        src: 'brighttrack-roles-footer.png',
        alt: 'BrightTrack role-based experiences and page footer',
      },
      {
        src: 'brighttrack-registration.png',
        alt: 'BrightTrack student registration form',
      },
      {
        src: 'brighttrack-login.png',
        alt: 'BrightTrack sign-in form',
      },
      {
        src: 'brighttrack-stride-analysis.png',
        alt: 'BrightTrack STRIDE threat analysis',
      },
      {
        src: 'brighttrack-dread-analysis.png',
        alt: 'BrightTrack DREAD threat severity analysis',
      },
    ],
    githubUrl: 'https://github.com/haruto-web/campus-care-project',
    links: [],
    details: {
      overview:
        'BrightTrack is a role-based learning management system that brings academic operations and proactive student support into one school platform.',
      features: [
        'Student, teacher, counselor, and administrator experiences use role-scoped workflows.',
        'Academic workflows cover classes, assignments, submissions, grading, attendance, announcements, and materials.',
        'Wellness workflows support check-ins, risk signals, alerts, counselor interventions, and follow-up.',
        'Messaging includes reporting and moderation workflows; sensitive actions are tracked in audit logs.',
        'Authentication includes OTP verification, registration approval, and password reset flows.',
      ],
      architecture: [
        {
          layer: 'Presentation',
          description:
            'Django templates provide the web interface, styled with Tailwind CSS and enhanced with vanilla JavaScript and Chart.js.',
        },
        {
          layer: 'Application',
          description:
            'Django apps separate accounts, academics, wellness, messaging, AI assistant endpoints, and machine-learning records.',
        },
        {
          layer: 'Data',
          description:
            'PostgreSQL stores the platform records, including academic workflows, wellness check-ins, messages, audit logs, and prediction records.',
        },
        {
          layer: 'Integrations',
          description:
            'The system uses Gemini API for its AI assistant, Cloudinary for production media, Brevo for transactional email, and Django background tasks and signals.',
        },
        {
          layer: 'Deployment',
          description:
            'The Django application is deployed on Render, with WhiteNoise serving static assets.',
        },
      ],
    },
  },
  {
    number: '03',
    title: 'PhishSwish',
    subtitle: 'Android Phishing and Scam Detection App',
    category: 'School Project',
    description:
      'Built camera, SMS, and paste scanning using Java, ML Kit OCR, Gemini, and VirusTotal URL reputation signals, with Firebase authentication, scan history, and login lockout.',
    images: [
      {
        src: 'phishswish-login.png',
        alt: 'PhishSwish sign-in screen',
      },
      {
        src: 'phishswish-register.png',
        alt: 'PhishSwish create account screen',
      },
      {
        src: 'phishswish-home.png',
        alt: 'PhishSwish home screen with paste, inbox, and camera scan options',
      },
      {
        src: 'phishswish-paste-scan.png',
        alt: 'PhishSwish paste scan screen',
      },
      {
        src: 'phishswish-inbox-scan.png',
        alt: 'PhishSwish inbox scan screen',
      },
      {
        src: 'phishswish-camera-scan.png',
        alt: 'PhishSwish camera scanning screen',
      },
      {
        src: 'phishswish-analysis-result.png',
        alt: 'PhishSwish scan analysis result screen',
      },
      {
        src: 'phishswish-history.png',
        alt: 'PhishSwish scan history screen',
      },
      {
        src: 'phishswish-settings.png',
        alt: 'PhishSwish profile settings screen',
      },
      {
        src: 'phishswish-about.png',
        alt: 'PhishSwish about page with the project team',
      },
    ],
    githubUrl: 'https://github.com/richald03/PhishSwish',
    links: [],
    details: {
      overview:
        'PhishSwish is an Android app that helps users assess phishing and scam content through camera, inbox, and pasted-text scans, AI analysis, and URL reputation signals.',
      features: [
        'Camera Scan uses CameraX and ML Kit Text Recognition to extract text from printed or on-screen messages.',
        'Inbox Scan reviews SMS content for suspicious patterns and risky links; Paste Scan analyzes text or URLs supplied by the user.',
        'Gemini provides contextual phishing analysis, while VirusTotal supplies URL reputation signals.',
        'Firebase Authentication supports accounts, Firestore stores scan history, and the app includes a login lockout.',
      ],
      architecture: [
        {
          layer: 'Android app',
          description:
            'A Java application built with AndroidX and Material Components. Activities provide the authentication, scan, result, history, and settings flows, with adapters for list-based UI.',
        },
        {
          layer: 'Input and OCR',
          description:
            'CameraX supplies camera capture and ML Kit Text Recognition extracts text; inbox and paste screens provide the other scan inputs.',
        },
        {
          layer: 'Detection services',
          description:
            'The app-side detector utilities inspect scan indicators and risk, request contextual analysis from Gemini, and query VirusTotal URL reputation using OkHttp.',
        },
        {
          layer: 'Accounts and history',
          description:
            'Firebase Authentication handles user accounts and a Firestore service persists scan records for the history screen. The README does not describe a separate application server.',
        },
      ],
    },
  },
  {
    number: '04',
    title: 'SeekyFind',
    subtitle: 'Campus Lost-and-Found Application',
    category: 'School Project',
    description:
      'Developed a campus lost-and-found application as an academic project.',
    images: [
      {
        src: 'seekyfind-auth.png',
        alt: 'SeekyFind welcome, login, and sign-up screens',
      },
      {
        src: 'seekyfind-reports.png',
        alt: 'SeekyFind password reset, home dashboard, and missing-item report screens',
      },
      {
        src: 'seekyfind-search-notifications.png',
        alt: 'SeekyFind found-item report, item search, and notifications screens',
      },
      {
        src: 'seekyfind-settings-messages.png',
        alt: 'SeekyFind settings, item feed, and chat list screens',
      },
      {
        src: 'seekyfind-chat-profile.png',
        alt: 'SeekyFind chat conversation, profile editing, and photo selection screens',
      },
      {
        src: 'seekyfind-activity-about.png',
        alt: 'SeekyFind change password, recent activity, and About Us screens',
      },
      {
        src: 'seekyfind-faq-contact.png',
        alt: 'SeekyFind FAQ and contact screens',
      },
    ],
    githubUrl: 'https://github.com/Kelloggszx/SeekyFIND',
    links: [],
    details: {
      overview:
        'SeekyFind is a native Android campus lost-and-found app for reporting and finding missing or found items.',
      features: [
        'Users can submit missing-item and found-item reports, then browse and search listings by item, username, or location.',
        'The home screen shows the signed-in user’s missing, found, and claimed item counts with recent activity.',
        'The Android app also declares screens for item details, notifications, chat, voice search, profile, and account settings.',
      ],
      architecture: [
        {
          layer: 'Android client',
          description:
            'Java Android activities form the login, home, search, report, item-detail, chat, profile, and notification screens. RecyclerViews and adapters render item and activity lists.',
        },
        {
          layer: 'Authentication and sessions',
          description:
            'Firebase Authentication provides account sign-in. The home and search screens read a per-user session value from SharedPreferences and compare it with the user record in Realtime Database.',
        },
        {
          layer: 'Application data',
          description:
            'Firebase Realtime Database stores and serves the MissingItems, FoundItems, ClaimedItems, RecentActivities, and Users paths; item search and dashboard counts read these records.',
        },
        {
          layer: 'Media and notifications',
          description:
            'The Android manifest declares camera and image permissions plus a FileProvider; the app build declares Firebase Storage, Firebase Cloud Messaging, and Glide dependencies. The repository has no project README documenting their detailed runtime flows.',
        },
      ],
    },
  },
  {
    number: '05',
    title: 'MapaBaha',
    subtitle: 'Flood-Focused Weather Web Application',
    category: 'School Project',
    description:
      'Contributed to a flood-focused weather web application built with Laravel and React.',
    images: [
      {
        src: 'mapabaha-home.png',
        alt: 'MapaBaha home page with real-time flood monitoring overview',
      },
      {
        src: 'mapabaha-platform-features.png',
        alt: 'MapaBaha platform features and community call to action',
      },
      {
        src: 'mapabaha-latest-updates.png',
        alt: 'MapaBaha latest platform updates',
      },
      {
        src: 'mapabaha-flood-map.png',
        alt: 'MapaBaha interactive flood map and report form',
      },
      {
        src: 'mapabaha-alerts.png',
        alt: 'MapaBaha flood alerts dashboard',
      },
      {
        src: 'mapabaha-community-reports.png',
        alt: 'MapaBaha community flood reports',
      },
      {
        src: 'mapabaha-emergency-resources.png',
        alt: 'MapaBaha emergency hotlines and resources',
      },
      {
        src: 'mapabaha-about.png',
        alt: 'MapaBaha about, mission, and vision page',
      },
    ],
    githubUrl: 'https://github.com/frometou/MapaBaha_Weather-Web-App-Flood-focused',
    links: [],
    details: {
      overview:
        'MapaBaha is a community flood-reporting and monitoring application with user and administrator workflows.',
      features: [
        'Users can submit flood reports with descriptions, locations, optional images, and priority; administrators review reports and approve or decline them.',
        'The application includes flood-map views, route computation, user report history, and emergency-resource information.',
        'Administrators manage users, reports, and announcements; user authentication includes email OTP and social sign-in flows.',
      ],
      architecture: [
        {
          layer: 'React frontend',
          description:
            'A React 19 single-page app built with Vite and React Router uses Bootstrap for UI, AuthContext for shared user state, and service modules to call the backend. Mapping uses Google Maps and Leaflet libraries.',
        },
        {
          layer: 'Laravel API',
          description:
            'Laravel 12 provides REST routes, controllers, models, and middleware for accounts, flood posts, announcements, and administration. Laravel Sanctum provides stateful cookie authentication with CSRF protection; Socialite handles Google and Facebook sign-in.',
        },
        {
          layer: 'Data',
          description:
            'The documented data model uses MySQL with Laravel migrations and Eloquent models for users, flood posts, announcements, OTPs, and Sanctum sessions/tokens.',
        },
        {
          layer: 'Integrations',
          description:
            'Laravel Mail sends OTPs, uploaded report images use Laravel storage, and the route service calls the Google Maps API.',
        },
        {
          layer: 'Build and delivery',
          description:
            'The React frontend is built into Laravel’s public assets and served with the backend as one deployment unit. The repository README is a generic Laravel template; these project-specific details are documented in its PROJECT_ANALYSIS.md.',
        },
      ],
    },
  },
  {
    number: '06',
    title: 'Camera E-commerce Website',
    subtitle: 'Shopify',
    category: 'Client Project',
    description:
      'Created a camera e-commerce website using Shopify based on a client’s request.',
    images: [
      {
        src: 'camera-store-home.png',
        alt: 'Cey Click homepage and camera collections',
      },
      {
        src: 'camera-store-reviews.png',
        alt: 'Cey Click customer benefits and reviews',
      },
      {
        src: 'camera-store-refund.png',
        alt: 'Cey Click refund policy page',
      },
      {
        src: 'camera-store-contact.png',
        alt: 'Cey Click contact page',
      },
    ],
    websiteUrl: 'https://cey-click.myshopify.com/',
    links: [],
    details: {
      overview:
        'A camera e-commerce storefront created on Shopify for the supplied Cey Click store.',
      features: [
        'The supplied screenshots show the homepage and camera collections, a reviews section, refund policy, and contact page.',
      ],
      architecture: [
        {
          layer: 'Storefront',
          description:
            'The live Cey Click URL is hosted on Shopify. The supplied materials show its storefront pages and collection presentation.',
        },
        {
          layer: 'Documentation',
          description:
            'No GitHub repository or project README is linked for this client site, so custom theme internals, checkout configuration, inventory integrations, and other services cannot be verified.',
        },
      ],
    },
  },
];
