const downloadBtn = document.getElementById("downloadPdfBtn");
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const specialSwitch = document.querySelector(".special-switch");
const specialModeBtn = document.getElementById("volodyaModeBtn");
const profileImage = document.getElementById("profileImage");
const funRain = document.getElementById("funRain");
const resumeRoot = document.getElementById("resumeRoot");
const funPasswordModal = document.getElementById("funPasswordModal");
const funPasswordInput = document.getElementById("funPasswordInput");
const funPasswordSubmitBtn = document.getElementById("funPasswordSubmitBtn");
const funPasswordCancelBtn = document.getElementById("funPasswordCancelBtn");
const storageKey = "resume-language";
const funPassword = "02041987";
const defaultProfileSrc = profileImage?.getAttribute("src") || "";
const funProfileSrc = "./assets/fun.jpg";

let funModeActive = false;

const baseTranslations = {
  text: {},
  html: {},
  attr: {},
};

const translations = {
  en: {
    text: {
      pageTitle: "Roman Shcherbinin | Resume",
      downloadPdf: "Download PDF",
      downloadPdfLabel: "Download PDF",
      profileAlt: "Photo of Roman Shcherbinin",
      fullName: "Roman Shcherbinin",
      contactsHeading: "CONTACTS",
      city: "Moscow",
      personalDetailsHeading: "PERSONAL DETAILS",
      techStackHeading: "TECH STACK",
      languagesHeading: "LANGUAGES",
      interestsHeading: "INTERESTS",
      interestsText:
        "Photography • Music (electric guitar) • Technology • Travel • Strength training, cardio, and mobility work • Reading: applied philosophy, risk, and decision-making under uncertainty • Cycling",
      aboutHeading: "ABOUT ME",
      aboutText:
        "A systems-oriented specialist combining hands-on experience in operations, analytics, and the development of internal digital tools. I have practical experience in process optimization, analytical systems development, and business logic automation. I am currently deepening my expertise in Data Engineering and data processing architecture.",
      profileHeading: "PROFESSIONAL PROFILE",
      profileQuote:
        "A data analytics specialist focused on operational process digitalization and business logic automation. I actively apply AI and machine learning to solve business problems. My career began in operational and commercial roles, which gave me a practical inside view of how businesses work. Over time, my focus shifted toward logistics, operational analytics, and the automation of business calculations.",
      profileText:
        "I am currently focused on data analytics, automation of business calculations, internal tool development using AI/ML, business process digitalization, and data pipeline design.",
      workHeading: "WORK EXPERIENCE",
      astTitle: "Head of Logistics Digital Transformation",
      astCompany: "LLC AST",
      astPeriod: "Mar 2026 - Present",
      internTitle: "Data Engineer Intern",
      internPeriod: "Oct 2025 - Mar 2026",
      internIntro:
        "Hands-on Data Engineering and Big Data internship focused on end-to-end project delivery:",
      allianceTitle: "Software Engineer / Data Specialist",
      allianceCompany: "LLC Alliance DV",
      alliancePeriod: "Feb 2023 - Mar 2026",
      tasksHeading: "RESPONSIBILITIES",
      achievementsHeading: "ACHIEVEMENTS",
      magtrakTitle:
        "Operations Data Analyst / Head of Container Transportation Department",
      magtrakCompany: "MAGTRAK LLC",
      magtrakPeriod: "2018 - 2022",
      mebelviaTitle: "Co-owner, Furniture Retail Franchise",
      mebelviaCompany: "MebelVia Franchise",
      mebelviaPeriod: "2017 - 2018",
      mebelviaText:
        "Launched and managed furniture stores in Chekhov and Podolsk. Responsible for operations, supplier relationships, financial accounting, and sales management.",
      exportManagerTitle: "Export Manager",
      exportCompany: "LLC Kolos Express (Myllyn Paras Group Oy)",
      exportPeriod: "2012 - 2014",
      otherRolesTitle: "OTHER ROLES:",
      otherRolesText:
        'PJSC Southern Power Grids (Electrician) • CJSC RTK (customer and operational data processing in 1C / Excel, data quality control) • LLC MS Transport-1 (Account Manager) • JSC Petrol Complex (Gas Station Operator) • LLC Digital World (Expeditor)',
      educationHeading: "EDUCATION",
      edu1Badge: "SECOND DEGREE",
      edu1Period: "2025 - 2028",
      edu1Title: "ARTIFICIAL INTELLIGENCE AND BIG DATA",
      edu1Subtitle: "(Applied Informatics)",
      edu2Badge: "DEGREE",
      edu2Period: "2013",
      edu2Title: "FINANCIAL MANAGEMENT",
      edu2Subtitle: "(Finance and Credit)",
      additionalEducationHeading: "ADDITIONAL EDUCATION",
      cert1Org: "TOP Academy",
      cert2Org: "Specialist Training Center",
      cert3Desc: "PYTHON, SQL, GIT, ALGORITHMS",
      footerCreated: "Created in 2026",
    },
    html: {
      identityRole:
        "HEAD OF LOGISTICS<br />DIGITAL TRANSFORMATION<br />DATA ENGINEER<br />DATA ANALYTICS<br />SPECIALIST",
      personalDetailsList: `
        <li><span>Date of Birth</span><span>26.06.1988</span></li>
        <li><span>Marital Status</span><span>Single</span></li>
        <li><span>Travel / Relocation</span><span>Open</span></li>
        <li><span>Driving License</span><span>Category B</span></li>
      `,
      languagesList: `
        <li><span>Russian</span><span>NATIVE</span></li>
        <li><span>English</span><span>B2</span></li>
        <li><span>Turkish</span><span>A2</span></li>
      `,
      astList: `
        <li>Building and developing the logistics digital transformation function and promoting a data-driven approach in operations</li>
        <li>Analyzing operational and financial transportation data: trips, costs, lead times, and profitability</li>
        <li>Designing and implementing internal tools for logistics teams and management</li>
        <li>Automating data processing and management reporting with Python, SQL, and Excel</li>
        <li>Participating in the selection and implementation of IT solutions for logistics infrastructure digitalization</li>
      `,
      projectProbablyFresh: `
        <strong>ProbablyFresh Analytics Platform</strong>
        <span>(final project defense score: 9.5 / 10)</span>
        <p class="project-link-line">
          <a
            class="project-link"
            href="https://github.com/Romanweiss/Novadata_Internship_10_Final_Challenge"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </p>
        <p>
          Built an end-to-end analytics platform covering the full Data Engineering flow: JSON → MongoDB → Kafka →
          ClickHouse RAW → ClickHouse MART → PySpark ETL → S3. Implemented ingestion, analytical marts, feature marts,
          and export to object storage.
        </p>
        <p>
          Added production-oriented capabilities, including a daily Airflow DAG, Grafana dashboards and alerts,
          a managed ingestion/staging layer with batch statuses, error handling and replay, smoke checks, and
          MART-level data quality controls.
        </p>
        <p>
          Expanded the platform into a full control panel with a Django + DRF backend API, React UI with one-click
          pipeline actions, Data Quality / Exports / Feature Mart views, PII protection via SHA-256 + salt, CSV export
          to S3, and optional Parquet output from PySpark.
        </p>
      `,
      projectStreaming: `
        <strong>Streaming pipeline</strong>
        <span>(PostgreSQL → Kafka → ClickHouse)</span>
        <p>
          Developed Python-based producer and consumer services, built a streaming data pipeline, added duplicate
          protection, and deployed the infrastructure through Docker Compose.
        </p>
      `,
      projectOlap: `
        <strong>ClickHouse OLAP Analytics</strong>
        <p>
          Built an analytical mart on AggregatingMergeTree, used Materialized Views and State / Merge aggregate
          functions, and implemented 7-day retention calculation.
        </p>
      `,
      allianceTasks: `
        <li>Analyzing logistics and operational data: trips, cost structure, downtime, and delivery schedule deviations</li>
        <li>Preparing analytical reports and summary tables for management decision-making</li>
        <li>Automating calculations and data processing for logistics coordinators and dispatch teams</li>
        <li>Developing internal tools and systems with Python, JavaScript, and Google Sheets</li>
        <li>Structuring data and improving logistics processes through analytics</li>
      `,
      allianceAchievements: `
        <li>Automated transportation calculations, reducing manual data processing by 30-40%<span>Python + SQL + Excel</span></li>
        <li>Built a profitability model for leased fleet units to evaluate vehicle efficiency<span>Google Sheets + JavaScript</span></li>
        <li>Created an operational system for logistics coordinators and managers to run shipments and control day-to-day operations<span>Google Sheets + JavaScript</span></li>
        <li>Reduced management reporting preparation from several hours to 15-20 minutes<span>SQL + Excel + Google Sheets</span></li>
        <li>Structured shipment and cost data, improving transparency across logistics operations<span>Excel + SQL</span></li>
      `,
      magtrakTasks: `
        <li>Analyzed operational and financial transportation data: costs, revenue, and profitability</li>
        <li>Prepared management reporting and summary tables for decision-making</li>
        <li>Designed an analytical reporting system to assess transportation efficiency</li>
        <li>Managed container transportation operations and monitored key operational indicators</li>
      `,
      magtrakAchievements: `
        <li>Built an Excel-based transportation analytics system with pivot tables, calculation models, and charts</li>
        <li>Developed transportation efficiency analysis tools used in weekly, monthly, and annual management reviews</li>
        <li>Implemented a regular profitability analysis and planning framework for transportation operations</li>
      `,
      earlyCareerTitle:
        'Early Career <span class="muted-inline">(2005 - 2017)</span>',
      exportText: `
        Developed export sales across CIS markets: Ukraine, Belarus, Kazakhstan, Georgia, and Armenia.<br />
        Coordinated market entry activities including negotiations, Incoterms documentation, assortment planning,
        marketing budgets, and packaging / labeling adaptation.<br />
        Analyzed sales and assortment performance in Excel; increased sales in Belarus by 20-30% by expanding retail
        presence and optimizing assortment.
      `,
      edu1School:
        '•&nbsp; Synergy University (Moscow Financial and Industrial University "Synergy")',
      edu2School:
        '•&nbsp; Synergy University (Moscow Financial and Industrial University "Synergy")',
    },
    attr: {
      downloadPdfLabel: "Download PDF",
      profileAlt: "Photo of Roman Shcherbinin",
      footerGlyphAlt: "Site glyph",
    },
  },
};

const funDecorations = [
  { emoji: "🍬", side: "left", offset: "8px", size: "24px", delay: "-1.2s", duration: "13s", drift: "10px" },
  { emoji: "🐥", side: "left", offset: "24px", size: "28px", delay: "-6.5s", duration: "16s", drift: "14px" },
  { emoji: "🦄", side: "left", offset: "42px", size: "30px", delay: "-3.2s", duration: "18s", drift: "16px" },
  { emoji: "🐱", side: "left", offset: "14px", size: "26px", delay: "-9.4s", duration: "15s", drift: "12px" },
  { emoji: "🐶", side: "left", offset: "34px", size: "26px", delay: "-11.1s", duration: "17s", drift: "18px" },
  { emoji: "🐬", side: "left", offset: "52px", size: "28px", delay: "-1.8s", duration: "19s", drift: "15px" },
  { emoji: "🍭", side: "left", offset: "20px", size: "24px", delay: "-7.7s", duration: "14s", drift: "11px" },
  { emoji: "🍌", side: "left", offset: "46px", size: "24px", delay: "-4.1s", duration: "16s", drift: "13px" },
  { emoji: "🐷", side: "left", offset: "30px", size: "26px", delay: "-5.8s", duration: "17s", drift: "14px" },
  { emoji: "🐮", side: "left", offset: "58px", size: "26px", delay: "-2.9s", duration: "18s", drift: "12px" },
  { emoji: "🐐", side: "left", offset: "12px", size: "25px", delay: "-8.6s", duration: "16s", drift: "16px" },
  { emoji: "🌟", side: "left", offset: "40px", size: "24px", delay: "-10.8s", duration: "15s", drift: "10px" },
  { emoji: "🍬", side: "right", offset: "10px", size: "24px", delay: "-2.6s", duration: "13s", drift: "-10px" },
  { emoji: "🐥", side: "right", offset: "26px", size: "28px", delay: "-8.2s", duration: "16s", drift: "-14px" },
  { emoji: "🦄", side: "right", offset: "44px", size: "30px", delay: "-5.5s", duration: "18s", drift: "-16px" },
  { emoji: "🐱", side: "right", offset: "18px", size: "26px", delay: "-10.4s", duration: "15s", drift: "-12px" },
  { emoji: "🐶", side: "right", offset: "36px", size: "26px", delay: "-12.3s", duration: "17s", drift: "-18px" },
  { emoji: "🐬", side: "right", offset: "54px", size: "28px", delay: "-3.4s", duration: "19s", drift: "-15px" },
  { emoji: "🍭", side: "right", offset: "22px", size: "24px", delay: "-9.1s", duration: "14s", drift: "-11px" },
  { emoji: "🍌", side: "right", offset: "48px", size: "24px", delay: "-6.1s", duration: "16s", drift: "-13px" },
  { emoji: "🐷", side: "right", offset: "32px", size: "26px", delay: "-5.1s", duration: "17s", drift: "-14px" },
  { emoji: "🐮", side: "right", offset: "60px", size: "26px", delay: "-2.1s", duration: "18s", drift: "-12px" },
  { emoji: "🐐", side: "right", offset: "14px", size: "25px", delay: "-7.8s", duration: "16s", drift: "-16px" },
  { emoji: "🌟", side: "right", offset: "42px", size: "24px", delay: "-11.3s", duration: "15s", drift: "-10px" },
];

function initializeFunRain() {
  if (!funRain || funRain.children.length) {
    return;
  }

  funDecorations.forEach((item) => {
    const element = document.createElement("span");
    element.className = `fun-item ${item.side}`;
    element.textContent = item.emoji;
    element.style.setProperty("--offset", item.offset);
    element.style.setProperty("--size", item.size);
    element.style.setProperty("--delay", item.delay);
    element.style.setProperty("--duration", item.duration);
    element.style.setProperty("--drift", item.drift);
    funRain.appendChild(element);
  });
}

function syncSpecialSwitchPosition() {
  if (!specialSwitch || !resumeRoot) {
    return;
  }

  const rootRect = resumeRoot.getBoundingClientRect();
  const left = Math.max(8, Math.round(rootRect.left));
  specialSwitch.style.left = `${left}px`;
}

function setFunMode(isActive) {
  funModeActive = isActive;
  document.body.classList.toggle("fun-mode", isActive);

  if (specialModeBtn) {
    specialModeBtn.classList.toggle("active", isActive);
    specialModeBtn.setAttribute("aria-pressed", String(isActive));
  }

  if (profileImage && defaultProfileSrc) {
    profileImage.setAttribute("src", isActive ? funProfileSrc : defaultProfileSrc);
  }
}

function openFunModal() {
  if (!funPasswordModal) {
    return;
  }

  funPasswordModal.hidden = false;

  if (funPasswordInput) {
    funPasswordInput.value = "";
    window.setTimeout(() => funPasswordInput.focus(), 0);
  }
}

function closeFunModal() {
  if (!funPasswordModal) {
    return;
  }

  funPasswordModal.hidden = true;
}

function submitFunPassword() {
  const password = funPasswordInput?.value ?? "";

  if (password !== funPassword) {
    window.alert("Введите верный пароль!");
    if (funPasswordInput) {
      funPasswordInput.focus();
      funPasswordInput.select();
    }
    return;
  }

  closeFunModal();
  setFunMode(true);
}

function collectBaseTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!(key in baseTranslations.text)) {
      baseTranslations.text[key] = element.textContent;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (!(key in baseTranslations.html)) {
      baseTranslations.html[key] = element.innerHTML;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const definitions = element.dataset.i18nAttr.split(",");
    definitions.forEach((definition) => {
      const [attributeName, key] = definition.split(":").map((item) => item.trim());
      if (!attributeName || !key) {
        return;
      }
      if (!(key in baseTranslations.attr)) {
        baseTranslations.attr[key] = element.getAttribute(attributeName) || "";
      }
    });
  });
}

function getTranslationBucket(lang, type) {
  if (lang === "ru") {
    return baseTranslations[type];
  }

  return translations[lang]?.[type] || {};
}

function applyLanguage(lang) {
  const textBucket = getTranslationBucket(lang, "text");
  const htmlBucket = getTranslationBucket(lang, "html");
  const attrBucket = getTranslationBucket(lang, "attr");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key in textBucket) {
      element.textContent = textBucket[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (key in htmlBucket) {
      element.innerHTML = htmlBucket[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const definitions = element.dataset.i18nAttr.split(",");
    definitions.forEach((definition) => {
      const [attributeName, key] = definition.split(":").map((item) => item.trim());
      if (!attributeName || !(key in attrBucket)) {
        return;
      }
      element.setAttribute(attributeName, attrBucket[key]);
    });
  });

  document.documentElement.lang = lang;

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem(storageKey, lang);
}

collectBaseTranslations();
initializeFunRain();
syncSpecialSwitchPosition();

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    window.print();
  });
}

if (specialModeBtn) {
  const handleSpecialModeClick = () => {
    if (funModeActive) {
      setFunMode(false);
      return;
    }

    openFunModal();
  };

  specialModeBtn.addEventListener("click", handleSpecialModeClick);
  window.handleVolodyaModeClick = handleSpecialModeClick;
}

if (funPasswordSubmitBtn) {
  funPasswordSubmitBtn.addEventListener("click", submitFunPassword);
}

if (funPasswordCancelBtn) {
  funPasswordCancelBtn.addEventListener("click", closeFunModal);
}

if (funPasswordModal) {
  funPasswordModal.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.closeFunModal === "true") {
      closeFunModal();
    }
  });
}

if (funPasswordInput) {
  funPasswordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      submitFunPassword();
    }

    if (event.key === "Escape") {
      closeFunModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && funPasswordModal && !funPasswordModal.hidden) {
    closeFunModal();
  }
});

window.addEventListener("resize", syncSpecialSwitchPosition);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang || "ru");
  });
});

const initialLanguage = window.localStorage.getItem(storageKey);
applyLanguage(initialLanguage === "en" ? "en" : "ru");
