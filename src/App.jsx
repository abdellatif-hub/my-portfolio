import { useEffect, useState } from 'react';
import {
  ArrowUpRightIcon,
  BotIcon,
  BriefcaseIcon,
  CalendarIcon,
  CertificateIcon,
  CloudIcon,
  CodeIcon,
  DownloadIcon,
  FolderIcon,
  GithubIcon,
  GlobeIcon,
  GraduationIcon,
  HeartIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SmartphoneIcon,
  SparkIcon,
  TargetIcon,
  UserIcon,
  UsersIcon,
} from './components/Icons';
import SectionHeading from './components/SectionHeading';
import ThemeToggle from './components/ThemeToggle';
import {
  certifications,
  education,
  experiences,
  extracurricular,
  interests,
  languages,
  profile,
  projects,
  skills,
  stats,
} from './data/portfolio';

function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const initialTheme =
      storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-bs-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-bs-theme', nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  };

  return { theme, toggleTheme };
}

function Pill({ children }) {
  return <span className="badge rounded-pill portfolio-pill">{children}</span>;
}

function Panel({ children, className = '' }) {
  return <div className={`portfolio-panel ${className}`}>{children}</div>;
}

function SocialButton({ href, label, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="social-btn" aria-label={label}>
      <Icon className="icon-sm" />
    </a>
  );
}

function NavItem({ href, label, icon: Icon }) {
  return (
    <a href={href} className="nav-link p-0 d-inline-flex align-items-center gap-2">
      <Icon className="icon-nav" />
      <span>{label}</span>
    </a>
  );
}

function TitledRow({ icon: Icon, title, className = '' }) {
  return (
    <h3 className={`subsection-title d-flex align-items-center gap-2 mb-3 ${className}`}>
      <Icon className="icon-subtitle" />
      <span>{title}</span>
    </h3>
  );
}

const heroDomains = [
  { title: 'Web', subtitle: 'Developpement', icon: CodeIcon, tone: 'blue' },
  { title: 'Mobile', subtitle: 'Applications', icon: SmartphoneIcon, tone: 'green' },
  { title: 'Cloud', subtitle: 'Scalable Apps', icon: CloudIcon, tone: 'slate' },
  { title: 'IA', subtitle: 'Innovation', icon: BotIcon, tone: 'orange' },
];

const navItems = [
  { href: '#apropos', label: 'A propos', icon: UserIcon },
  { href: '#certifications', label: 'Certifications', icon: CertificateIcon },
  { href: '#competences', label: 'Competences', icon: CodeIcon },
  { href: '#experiences', label: 'Experiences', icon: BriefcaseIcon },
  { href: '#projets', label: 'Projets', icon: FolderIcon },
  { href: '#contact', label: 'Contact', icon: MailIcon },
];

const skillIcons = {
  Frontend: CodeIcon,
  Backend: BriefcaseIcon,
  Mobile: SmartphoneIcon,
  'Bases de donnees': CloudIcon,
  DevOps: CloudIcon,
  Outils: BriefcaseIcon,
  Design: SparkIcon,
  IA: BotIcon,
};

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="portfolio-shell">
      <div className="container py-4 py-lg-5">
        <header className="navbar navbar-expand-lg portfolio-navbar mb-4 mb-lg-5">
          <div className="container-fluid px-0">
            <a href="#accueil" className="navbar-brand brand-mark d-inline-flex align-items-center gap-2">
              <UserIcon className="icon-nav" />
              <span>Abdellatif El Hamaoui</span>
            </a>
            <div className="d-flex align-items-center gap-2">
              <nav className="d-none d-lg-flex align-items-center gap-4 small fw-semibold">
                {navItems.map((item) => (
                  <NavItem key={item.href} href={item.href} label={item.label} icon={item.icon} />
                ))}
              </nav>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </header>

        <main className="d-flex flex-column gap-4 gap-lg-5">
          <section id="accueil" className="row g-4 g-lg-5 align-items-stretch">
            <div className="col-lg-7">
              <div className="hero-panel h-100">
                <p className="hero-eyebrow mb-2 d-inline-flex align-items-center gap-2">
                  <SparkIcon className="icon-sm" />
                  <span>Salut, je suis</span>
                </p>
                <h1 className="hero-title mb-3">{profile.name}</h1>
                <p className="hero-subtitle mb-4">{profile.title}</p>

                <div className="hero-domain-grid mb-4">
                  {heroDomains.map((domain) => {
                    const DomainIcon = domain.icon;

                    return (
                      <div key={domain.title} className={`hero-domain-card tone-${domain.tone}`}>
                        <div className="hero-domain-icon">
                          <DomainIcon className="icon-sm text-white" />
                        </div>
                        <div>
                          <h3>{domain.title}</h3>
                          <p>{domain.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="hero-passion mb-4">
                  <SparkIcon className="icon-sm" />
                  <span>Passionne par l'innovation et la resolution de problemes</span>
                </div>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a href="#projets" className="btn btn-primary btn-lg portfolio-btn">
                    <span>Voir mes projets</span>
                    <ArrowUpRightIcon className="icon-sm" />
                  </a>
                  <a href={profile.cv} download className="btn btn-outline-primary btn-lg portfolio-btn">
                    <span>Telecharger mon CV</span>
                    <DownloadIcon className="icon-sm" />
                  </a>
                </div>

                <div className="hero-meta">
                  <div className="hero-stats">
                    {stats.map((stat) => (
                      <div key={stat.label} className="hero-stat-pill">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-3">
                    <SocialButton href={profile.linkedin} label="LinkedIn" icon={LinkedInIcon} />
                    <SocialButton href={profile.github} label="GitHub" icon={GithubIcon} />
                    <a href={`mailto:${profile.email}`} className="social-btn" aria-label="Email">
                      <MailIcon className="icon-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-visual h-100">
                <div className="hero-visual-glow hero-visual-glow-one" />
                <div className="hero-visual-glow hero-visual-glow-two" />
                <div className="hero-visual-card">
                  <div className="hero-location-badge d-inline-flex align-items-center gap-2">
                    <MapPinIcon className="icon-sm" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="profile-frame mx-auto">
                    <img src={profile.avatar} alt={profile.name} className="profile-image" />
                  </div>
                </div>
                <div className="hero-floating-note hero-note-bottom">
                  <strong className="d-inline-flex align-items-center gap-2">
                    <MailIcon className="icon-sm" />
                    <span>{profile.email}</span>
                  </strong><br />
                  
                  <span>Ouvert aux opportunites et collaborations</span>
                </div>
              </div>
            </div>
          </section>

          <section id="apropos" className="row g-4">
            <div className="col-lg-7">
              <Panel className="h-100">
                <SectionHeading
                  eyebrow="A propos"
                  title="Un profil polyvalent, entre engineering, produit et execution."
                  description={profile.intro}
                />
                <div className="content-stack">
                  {profile.about.map((paragraph) => (
                    <p key={paragraph} className="content-copy">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  {languages.map((language) => (
                    <Pill key={language.name}>
                      {language.name} - {language.level}
                    </Pill>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4">
                <Panel>
                  <TitledRow icon={GraduationIcon} title="Formation" />
                  <div className="d-flex flex-column gap-3">
                    {education.map((item) => (
                      <div key={item.title} className="info-block">
                        <h4 className="info-title">{item.title}</h4>
                        <p className="info-text mb-1">{item.school}</p>
                        <span className="info-meta">{item.period}</span>
                      </div>
                    ))}
                  </div>
                </Panel>

                <Panel>
                  <TitledRow icon={HeartIcon} title="Centres d'interet" />
                  <div className="d-flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Pill key={interest}>{interest}</Pill>
                    ))}
                  </div>
                </Panel>

                <Panel>
                  <TitledRow icon={UsersIcon} title="Activites para-universitaires" />
                  <div className="d-flex flex-column gap-3">
                    {extracurricular.map((item) => (
                      <div key={item} className="info-block">
                        <p className="info-text mb-0">{item}</p>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
            </div>
          </section>

          <section id="certifications">
            <SectionHeading
              eyebrow="Certifications"
              title="Un socle technique renforce par des parcours certifiants."
              description="Les certifications extraites du CV et des PDF fournis sont integrees directement au site avec des liens de consultation."
            />
            <div className="row g-4">
              {certifications.map((certification) => (
                <div key={certification.title} className="col-md-6 col-xl-4">
                  <Panel className="certificate-card h-100">
                    <span className="badge text-bg-light certificate-badge">{certification.issuer}</span>
                    <h3 className="card-title mt-3 d-flex align-items-start gap-2">
                      <CertificateIcon className="icon-sm mt-1 flex-shrink-0" />
                      <span>{certification.title}</span>
                    </h3>
                    <a href={certification.href} target="_blank" rel="noreferrer" className="card-link">
                      Voir le certificat
                      <ArrowUpRightIcon className="icon-sm" />
                    </a>
                  </Panel>
                </div>
              ))}
            </div>
          </section>

          <section id="competences">
            <SectionHeading
              eyebrow="Competences"
              title="Des stacks web, mobile et cloud complementaires."
              description="Le portfolio met en avant les outils et technologies cites dans le CV, regroupes par domaine pour une lecture rapide."
            />
            <div className="row g-4">
              {skills.map((group) => {
                const GroupIcon = skillIcons[group.category] || CodeIcon;

                return (
                  <div key={group.category} className="col-md-6 col-xl-3">
                    <Panel className="h-100">
                      <h3 className="card-title mb-3 d-flex align-items-center gap-2">
                        <GroupIcon className="icon-subtitle" />
                        <span>{group.category}</span>
                      </h3>
                      <div className="d-flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Pill key={item}>{item}</Pill>
                        ))}
                      </div>
                    </Panel>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="experiences">
            <SectionHeading
              eyebrow="Experiences"
              title="Des contextes differents, avec la meme exigence de livraison."
              description="Stage, hackathon et gestion terrain montrent un profil capable de construire, coordonner et s'adapter."
            />
            <div className="row g-4">
              {experiences.map((experience) => (
                <div key={`${experience.company}-${experience.role}`} className="col-lg-4">
                  <Panel className="h-100">
                    <span className="info-meta d-inline-flex align-items-center gap-2">
                      <CalendarIcon className="icon-mini" />
                      <span>{experience.period}</span>
                    </span>
                    <h3 className="card-title mt-2 mb-1 d-flex align-items-start gap-2">
                      <BriefcaseIcon className="icon-subtitle mt-1 flex-shrink-0" />
                      <span>{experience.role}</span>
                    </h3>
                    <p className="text-primary fw-semibold mb-3 d-inline-flex align-items-center gap-2">
                      <MapPinIcon className="icon-mini" />
                      <span>
                        {experience.company} - {experience.location}
                      </span>
                    </p>
                    <p className="content-copy">{experience.summary}</p>
                    <div className="d-flex flex-column gap-2 mt-3">
                      {experience.bullets.map((bullet) => (
                        <div key={bullet} className="list-card">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </Panel>
                </div>
              ))}
            </div>
          </section>

          <section id="projets">
            <SectionHeading
              eyebrow="Projets"
              title="Une selection de projets entre IA, plateformes web et applications utiles."
              description="Les projets ci-dessous reprennent les initiatives visibles sur le CV et ajoutent des liens vers GitHub lorsque disponibles."
            />
            <div className="row g-4">
              {projects.map((project) => (
                <div key={project.title} className="col-md-6">
                  <Panel className="h-100">
                    <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                      <div>
                        <span className="info-meta d-inline-flex align-items-center gap-2">
                          <FolderIcon className="icon-mini" />
                          <span>{project.type}</span>
                        </span>
                        <h3 className="card-title mt-2 mb-0 d-flex align-items-start gap-2">
                          <CodeIcon className="icon-subtitle mt-1 flex-shrink-0" />
                          <span>{project.title}</span>
                        </h3>
                      </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-primary icon-btn"
                          aria-label={`Voir ${project.title}`}
                        >
                          <ArrowUpRightIcon className="icon-sm" />
                        </a>
                      ) : null}
                    </div>
                    <p className="content-copy">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <Pill key={tag}>{tag}</Pill>
                      ))}
                    </div>
                  </Panel>
                </div>
              ))}
            </div>

            <Panel className="mt-4 d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
              <div>
                <span className="info-meta d-inline-flex align-items-center gap-2">
                  <GithubIcon className="icon-mini" />
                  <span>GitHub</span>
                </span>
                <h3 className="card-title mt-2 mb-0">Voir tous les projets</h3>
              </div>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-primary portfolio-btn">
                <span>Explorer GitHub</span>
                <ArrowUpRightIcon className="icon-sm" />
              </a>
            </Panel>
          </section>

          <section id="contact" className="row g-4">
            <div className="col-lg-7">
              <Panel className="h-100">
                <SectionHeading
                  eyebrow="Contact"
                  title="Disponible pour opportunites, stages et collaborations."
                  description="Le site centralise les informations essentielles extraites du CV pour te contacter rapidement."
                />
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="info-block contact-block h-100">
                      <span className="info-meta d-inline-flex align-items-center gap-2">
                        <MailIcon className="icon-mini" />
                        <span>Email</span>
                      </span>
                      <a href={`mailto:${profile.email}`} className="contact-link break-contact">
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="info-block contact-block h-100">
                      <span className="info-meta d-inline-flex align-items-center gap-2">
                        <PhoneIcon className="icon-mini" />
                        <span>Telephone</span>
                      </span>
                      <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="contact-link">
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="info-block contact-block h-100">
                      <span className="info-meta d-inline-flex align-items-center gap-2">
                        <MapPinIcon className="icon-mini" />
                        <span>Localisation</span>
                      </span>
                      <p className="contact-link mb-0">{profile.location}</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="info-block contact-block h-100">
                      <span className="info-meta d-inline-flex align-items-center gap-2">
                        <LinkedInIcon className="icon-mini" />
                        <span>LinkedIn</span>
                      </span>
                      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                        Abdellatif El Hamaoui
                      </a>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>

            <div className="col-lg-5">
              <Panel className="h-100">
                <TitledRow icon={SparkIcon} title="Resume visuel du profil" className="mb-3" />
                <div className="d-flex flex-column gap-3">
                  <div className="info-block">
                    <span className="info-meta d-inline-flex align-items-center gap-2">
                      <GlobeIcon className="icon-mini" />
                      <span>Orientation</span>
                    </span>
                    <p className="info-text mb-0">Web, mobile, IA appliquee et backend moderne.</p>
                  </div>
                  <div className="info-block">
                    <span className="info-meta d-inline-flex align-items-center gap-2">
                      <UsersIcon className="icon-mini" />
                      <span>Points forts</span>
                    </span>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      <Pill>Leadership</Pill>
                      <Pill>Organisation</Pill>
                      <Pill>Travail en equipe</Pill>
                      <Pill>Adaptabilite</Pill>
                    </div>
                  </div>
                  <div className="info-block">
                    <span className="info-meta d-inline-flex align-items-center gap-2">
                      <TargetIcon className="icon-mini" />
                      <span>Objectif</span>
                    </span>
                    <p className="info-text mb-0">
                      Rejoindre des projets utiles ou une equipe ambitieuse pour continuer a
                      progresser sur des produits a forte valeur.
                    </p>
                  </div>
                </div>
              </Panel>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
