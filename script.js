const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  links.forEach(a => { a.classList.remove('active'); if (a.getAttribute('href') === '#' + current) a.classList.add('active'); });
}

function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open')));

function openResumeModal() {
  document.getElementById('resumeModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal(e) {
  if (e && e.type === 'click' && e.target !== document.getElementById('resumeModal') && !e.target.closest('.close-btn')) return;
  document.getElementById('resumeModal').classList.remove('open');
  document.body.style.overflow = '';
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

function handleSubmit(btn) {
  const form = btn.closest('form');
  if (!form) return;

  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const subject = form.querySelector('[name="subject"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    return;
  }

  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message,
      _subject: "New Portfolio Message: " + (subject || "No Subject"),
      _autoresponse: "Hi " + name + ",\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nMounika Rayapalli"
    })
  })
  .then(response => {
    if (response.ok) {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
      btn.style.background = '#5D866C';
      form.reset();
    } else {
      throw new Error("Failed to send");
    }
  })
  .catch(err => {
    console.error(err);
    btn.innerHTML = '<i class="fa-solid fa-xmark"></i> Error Sending';
    btn.style.background = '#C74634';
  })
  .finally(() => {
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  });
}

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector('i');
  let savedTheme = localStorage.getItem('theme');

  // Set dark theme as default if not previously set
  if (!savedTheme) {
    savedTheme = 'dark';
    localStorage.setItem('theme', 'dark');
  }

  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    document.body.removeAttribute('data-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }

  themeToggleBtn.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  });
}

// PROJECT MODAL LOGIC
const projectsData = {
  project4: {
    badge: 'Web',
    title: 'YUMMY Dine Divine',
    shortDesc: 'A premium responsive restaurant landing website featuring interactive menu sections, booking forms, events showcases, and chefs information.',
    longDesc: 'YUMMY Dine Divine is an elegant landing page designed for a high-end restaurant to showcase culinary offerings and streamline table reservations.<br><br>Key features include:<br>- Fully responsive, mobile-first design<br>- Interactive menu catalog and dynamic item filter panels<br>- Online book-a-table reservation forms<br>- Integrated chefs, events, and gallery display grids',
    image: 'assets/images/project4.png',
    category: 'Web Development',
    features: ['Responsive UI Grid', 'Interactive Menu Cards', 'Table Reservation Form', 'CSS Hover Transitions', 'Structured Layout Sections'],
    techTags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'yummy food project/home_page.html',
    githubUrl: 'https://github.com/mounikarayapalli/restaurant-landing-page'
  },
  project5: {
    badge: 'Web',
    title: 'TECH DESIRE',
    shortDesc: 'An interactive e-learning platform for computer science engineering and web development courses with dynamic syllabi, quizzes, and automated credentials.',
    longDesc: 'TECH DESIRE is a comprehensive, ISO-certified software and hardware coaching platform. Learners can enroll in curriculum roadmaps, read structured lectures, solve interactive quizzes, and receive certificates.<br><br>Key features include:<br>- Dynamic course catalogs and visual learning paths<br>- Custom simulated email inbox notifications<br>- Automated grade checks and downloadable certifications<br>- Responsive dark/light themed layouts',
    image: 'TECH DESIRE/logo.jpg',
    category: 'EdTech / Web Development',
    features: ['Interactive Syllabus', 'Syllabus Quiz Engines', 'Simulated Mail Client', 'ISO Certificate Generator', 'SPA Routing Engine'],
    techTags: ['HTML', 'CSS', 'JS', 'Bootstrap', 'DOM'],
    demoUrl: 'TECH DESIRE/index.html',
    githubUrl: 'https://github.com/mounikarayapalli/TECH-DESIRE'
  }
};

function openProjectModal(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  document.getElementById('pmBadge').textContent = data.badge;
  document.getElementById('pmTitle').textContent = data.title;
  document.getElementById('pmShortDesc').textContent = data.shortDesc;
  document.getElementById('pmLongDesc').innerHTML = data.longDesc;
  document.getElementById('pmImage').src = data.image;
  document.getElementById('pmCategory').textContent = data.category;
  
  const techTagsContainer = document.getElementById('pmTechTags');
  techTagsContainer.innerHTML = '';
  data.techTags.forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    techTagsContainer.appendChild(span);
  });
  
  const featuresList = document.getElementById('pmFeaturesList');
  featuresList.innerHTML = '';
  data.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  document.getElementById('pmLiveDemoBtn').href = data.demoUrl;
  document.getElementById('pmDemoTabBtn').href = data.demoUrl;
  document.getElementById('pmGithubBtn').href = data.githubUrl;

  // Reset to Overview tab
  switchPmTab('overview');

  document.getElementById('projectDetailModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(e) {
  if (e && e.type === 'click' && e.target !== document.getElementById('projectDetailModal') && !e.target.closest('.pm-close')) return;
  document.getElementById('projectDetailModal').classList.remove('active');
  // Only remove overflow hidden if resume modal isn't also open
  if (!document.getElementById('resumeModal').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function switchPmTab(tabName) {
  // Update buttons
  document.querySelectorAll('.pm-tab').forEach(btn => btn.classList.remove('active'));
  const btnMapping = { 'overview': 0, 'details': 1, 'demo': 2 };
  document.querySelectorAll('.pm-tab')[btnMapping[tabName]].classList.add('active');

  // Update bodies
  document.querySelectorAll('.pm-body').forEach(body => body.classList.remove('active'));
  if(tabName === 'overview') document.getElementById('pmBodyOverview').classList.add('active');
  if(tabName === 'details') document.getElementById('pmBodyDetails').classList.add('active');
  if(tabName === 'demo') document.getElementById('pmBodyDemo').classList.add('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeResumeModal();
    closeProjectModal();
    if (typeof closeCertModal === 'function') closeCertModal();
  }
});

// CERTIFICATE MODAL LOGIC
const certificatesData = {
  cert1: {
    badge: 'Programming',
    badgeColor: '#3776AB',
    title: 'Python Foundation',
    issuerDate: 'Infosys Springboard • <i class="fa-regular fa-calendar"></i> 2024',
    image: 'assets/certificates/cert_python.png'
  },
  cert2: {
    badge: 'Cloud',
    badgeColor: '#C74634',
    title: 'Oracle Cloud Foundations Associate',
    issuerDate: 'ORACLE University • <i class="fa-regular fa-calendar"></i> 2025',
    image: 'assets/certificates/cert_oracle.png'
  },
  cert3: {
    badge: 'Programming',
    badgeColor: '#E85D04',
    title: 'Java Developer Certification',
    issuerDate: 'Infosys Springboard • <i class="fa-regular fa-calendar"></i> 2024',
    image: 'assets/certificates/cert_java.png'
  },
  cert4: {
    badge: 'AI',
    badgeColor: '#1a73e8',
    title: 'Google Cloud: Responsible AI',
    issuerDate: 'Google Cloud • <i class="fa-regular fa-calendar"></i> 2025',
    image: 'assets/certificates/Applying AI Principles with Google Cloud.png'
  }
};

function openCertModal(certId) {
  const data = certificatesData[certId];
  if (!data) return;

  const badgeEl = document.getElementById('cmBadge');
  badgeEl.textContent = data.badge;
  badgeEl.style.background = data.badgeColor;
  
  document.getElementById('cmTitle').textContent = data.title;
  document.getElementById('cmIssuerDate').innerHTML = data.issuerDate;
  document.getElementById('cmImage').src = data.image;

  document.getElementById('certModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal(e) {
  if (e && e.type === 'click' && e.target !== document.getElementById('certModal') && !e.target.closest('.pm-close')) return;
  document.getElementById('certModal').classList.remove('active');
  
  // Only remove overflow hidden if other modals aren't open
  if (!document.getElementById('resumeModal').classList.contains('open') && 
      !document.getElementById('projectDetailModal').classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

// ==================== HERO SECTION TYPEWRITER ANIMATION ====================
const words = [
  "AI solutions.",
  "Computer Vision.",
  "Full-Stack Development.",
  "Smart Solutions.",
  "Product Building.",
  "Problem Solving.",
  "Machine Learning."
];
let wordIndex = 0;
let charIndex = 13; // Initialize to length of "AI solutions."
let isDeleting = true; // Set to true so it pauses and deletes first word next
let typeSpeed = 100;

function typeWriter() {
  const currentWord = words[wordIndex];
  const typingTextSpan = document.getElementById('typing-text');
  
  if (!typingTextSpan) return;
  
  if (isDeleting) {
    typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 60; // Faster deleting speed
  } else {
    typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100; // Normal typing speed
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500; // Pause before typing next word
  }
  
  setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('typing-text')) {
    setTimeout(typeWriter, 2000); // Wait 2 seconds before deleting first word
  }
});

function switchAboutTab(event, tabId) {
  const tabs = document.querySelectorAll('.about-tab-btn');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.currentTarget.classList.add('active');
  
  const contents = document.querySelectorAll('.about-tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  document.getElementById('tab-' + tabId).classList.add('active');
}

