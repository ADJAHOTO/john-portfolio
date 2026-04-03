import { ref, computed } from 'vue'

const currentLang = ref(localStorage.getItem('portfolio-lang') || 'fr')

const translations: Record<string, any> = {
  fr: {
    nav: {
      about: 'À Propos',
      projects: 'Projets',
      skills: 'Compétences',
      path: 'Parcours',
      contact: 'Contact',
      cta: 'Me contacter',
    },
    hero: {
      status: 'Disponible pour de nouveaux projets',
      greeting: 'Jean Bénisse',
      name: 'ADJAHOTO',
      description:
        'Développeur <span class="text-on-surface font-semibold">Fullstack</span> spécialisé en Vue.js & FastAPI. Je conçois des applications webs performantes et élégantes.',
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter',
      downloadCV: 'Télécharger mon CV',
      stats: {
        techs: 'Technologies maîtrisées',
        projects: 'Projets en entreprise',
        degree: 'Ans de formation',
        energy: 'Énergie créative',
      },
      stack: 'Stack',
    },
    about: {
      title: 'À Propos',
      subtitle: 'Mon Histoire',
      description:
        "Passionné par le développement web depuis plusieurs années, je me suis spécialisé dans la création d'applications robustes et scalables.",
      content: [
        'Mon parcours a commencé par une fascination pour la manière dont le code peut résoudre des problèmes concrets. Aujourd\'hui, je combine ma maîtrise du <span class="text-primary font-semibold">Frontend (Vue.js/React)</span> et du <span class="text-primary font-semibold">Backend (FastAPI/Node.js)</span> pour offrir des solutions complètes.',
        "Actuellement en licence <span class=\"text-primary font-semibold\">Génie Logiciel à l'IFRI</span>, j'ai eu l'opportunité de travailler sur des projets d'envergure au sein de <span class=\"text-primary font-semibold\">Kapital Human & Conseils</span>, où j'ai affiné mes compétences en intégration d'API et en architecture applicative.",
        "Mon objectif est de toujours repousser les limites de l'expérience utilisateur tout en garantissant une performance optimale sous le capot.",
      ],
      signature: 'Prêt à relever de nouveaux défis.',
    },
    projects: {
      title: 'Portfolio',
      subtitle: 'Projets sélectionnés',
      description:
        'Des projets réels réalisés en entreprise avec une exigence de qualité et de performance.',
      status: 'En production',
      seeAll: 'Voir tous mes projets',
      items: {
        ktalent: {
          category: 'Plateforme de Recrutement',
          description:
            'Application de recrutement développée pour Kapital Human & Conseils. Frontend Vue.js, Backend FastAPI, Pinia, intégration API REST, formulaires complexes et gestion de données.',
        },
        osons: {
          category: 'Plateforme de reseaux sociaux',
          description:
            "Application fullstack complète developpé en Vue.js et FastAPI, Pinia, et Gestion des API avec publication, creation d'evenements  gestion des evenements, et gestion des rôles des utilisateurs.",
        },
        linguaia: {
          category: 'Plateforme d\'apprentissage de l\'anglais',
          description:
            "Plateforme interactive d'apprentissage de l'anglais propulsée par l'intelligence artificielle avec feedback instantané.",
        },
        taskflow: {
          category: 'Gestion de Tâches',
          description:
            'Application fullstack complète avec gestion de tâches, historique et système multi-utilisateurs.',
        },
        eshopify: {
          category: 'E-Commerce',
          description: 'Boutique en ligne moderne avec paiement Stripe et panier persistant.',
        },
        cryptotracker: {
          category: 'Finance',
          description: 'Application de suivi de portefeuilles de cryptomonnaies.',
        },
        traveldiary: {
          category: 'Blog',
          description: 'Réseau social pour voyageurs avec carte interactive.',
        },
        fitapp: {
          category: 'Santé & Sport',
          description: 'Application de suivi de fitness et générateur de routines sur-mesure.',
        },
        agencysite: {
          category: 'Site Vitrine',
          description: 'Site internet de haute performance pour une agence digitale créative.',
        },
        smarthome: {
          category: 'IoT / Sécurité',
          description: 'Dashboard de contrôle pour appareils intelligents avec système d\'authentification.',
        },
      },
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Stack technique',
      description: 'Des technologies maîtrisées dans des contextes réels en entreprise.',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Mobile & Outils',
      },
    },
    experience: {
      title: 'Expériences',
      subtitle: 'Mon parcours',
      active: 'En cours',
      items: [
        {
          period: 'En cours',
          role: 'Développeur Fullstack',
          company: 'Kapital Human & Conseils',
          project: 'K-Talent — Plateforme de Recrutement',
          tasks: [
            "Conception frontend avec Vue.js et intégration d'APIs REST",
            'Implémentation de formulaires dynamiques et gestion de données',
            "Participation à l'UX/UI et structuration applicative",
          ],
        },
        {
          period: 'Stage Pro',
          role: 'Développeur Frontend',
          company: 'Kapital Human & Conseils',
          project: "Réseau Social d'Entreprise",
          tasks: [
            'Publications, commentaires et fonctionnalités interactives',
            'Intégration Frontend ↔ Backend via API REST',
          ],
        },
        {
          period: 'Stage',
          role: 'Développeur Web Fullstack',
          company: 'Kapital Human & Conseils',
          project: 'Application Gestion WiFi Zone',
          tasks: ["Création et consommation d'API REST", 'Gestion de données backend'],
        },
        {
          period: '2022 - 2025',
          role: 'Licence Génie Logiciel',
          company: "IFRI – Université d'Abomey-Calavi",
          project: '',
          tasks: ['Algorithmique, POO, Architecture Web & Mobile'],
        },
      ],
    },
    contact: {
      status: 'Disponible',
      title: 'Un projet en tête ?',
      subtitle: 'Discutons.',
      form: {
        name: 'Votre nom',
        email: 'Votre email',
        subject: 'Sujet',
        message: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
      },
      whatsapp: 'Discuter sur WhatsApp',
      networks: 'Réseaux',
      location: 'Localisation',
      city: 'Cotonou, Ste Rita',
      country: 'Bénin',
      madeWith: 'Conçu avec ❤️ et Vue.js',
    },
    Loading: 'Chargement...',
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      path: 'Experience',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      status: 'Available for new projects',
      greeting: 'Jean Bénisse',
      name: 'Adjahoto',
      description:
        'Intermediate <span class="text-on-surface font-semibold">Fullstack Developer</span> specialized in Vue.js & FastAPI. I design high-performance and elegant web applications.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
      stats: {
        techs: 'Mastered Technologies',
        projects: 'Professional Projects',
        degree: 'Years of Training',
        energy: 'Creative Energy',
      },
      stack: 'Stack',
    },
    about: {
      title: 'About Me',
      subtitle: 'My Story',
      description:
        'Passionate about web development for several years, I have specialized in creating robust and scalable applications.',
      content: [
        'My journey began with a fascination for how code can solve complex problems. Today, I combine my mastery of <span class="text-primary font-semibold">Frontend (Vue.js/React)</span> and <span class="text-primary font-semibold">Backend (FastAPI/Node.js)</span> to deliver end-to-end solutions.',
        'Currently pursuing a <span class="text-primary font-semibold">Software Engineering degree at IFRI</span>, I had the opportunity to work on large-scale projects at <span class="text-primary font-semibold">Kapital Human & Conseils</span>, where I honed my skills in API integration and application architecture.',
        'My goal is to always push the boundaries of user experience while ensuring optimal performance under the hood.',
      ],
      signature: 'Ready for new challenges.',
    },
    projects: {
      title: 'Portfolio',
      subtitle: 'Selected projects',
      description:
        'Real projects carried out in business with a high standard of quality and performance.',
      status: 'Live',
      seeAll: 'View all my projects',
      items: {
        ktalent: {
          category: 'Recruitment Platform',
          description:
            'Recruitment application developed for Kapital Human & Conseils. Vue.js frontend, REST API integration, complex forms, and data management.',
        },
        taskflow: {
          category: 'Task Management',
          description:
            'Complete fullstack application with task management, history, and multi-user system.',
        },
        osons: {
          category: 'Social Media Platform',
          description:
            "Complete fullstack application developed in Vue.js and FastAPI, Pinia, and API management with posting, event creation, event management, and user role management.",
        },
        linguaia: {
          category: 'Education & AI',
          description: 'Interactive AI-powered English learning platform with instant feedback.',
        },
        eshopify: {
          category: 'E-Commerce',
          description: 'Modern online store with Stripe payment and persistent cart.',
        },
        cryptotracker: {
          category: 'Finance',
          description: 'Cryptocurrency portfolio tracker application.',
        },
        traveldiary: {
          category: 'Blog',
          description: 'Social network for travelers with interactive map.',
        },
        fitapp: {
          category: 'Health & Fitness',
          description: 'Fitness tracking application and custom routine generator.',
        },
        agencysite: {
          category: 'Showcase Website',
          description: 'High-performance website for a creative digital agency.',
        },
        smarthome: {
          category: 'IoT / Security',
          description: 'Control dashboard for smart devices with authentication system.',
        },
      },
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical Stack',
      description: 'Technologies mastered in real business contexts.',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Mobile & Tools',
      },
    },
    experience: {
      title: 'Experiences',
      subtitle: 'My path',
      active: 'Current',
      items: [
        {
          period: 'Current',
          role: 'Fullstack Developer',
          company: 'Kapital Human & Conseils',
          project: 'K-Talent — Recruitment Platform',
          tasks: [
            'Frontend design with Vue.js and REST API integration',
            'Implementation of dynamic forms and data management',
            'UX/UI contribution and application structuring',
          ],
        },
        {
          period: 'Professional Internship',
          role: 'Frontend Developer',
          company: 'Kapital Human & Conseils',
          project: 'Corporate Social Network',
          tasks: [
            'Posts, comments, and interactive features',
            'Frontend ↔ Backend integration via REST API',
          ],
        },
        {
          period: 'Internship',
          role: 'Fullstack Web Developer',
          company: 'Kapital Human & Conseils',
          project: 'WiFi Zone Management App',
          tasks: ['Creation and consumption of REST APIs', 'Backend data management'],
        },
        {
          period: '2022 - 2025',
          role: 'Software Engineering Degree',
          company: 'IFRI – University of Abomey-Calavi',
          project: '',
          tasks: ['Algorithms, OOP, Web & Mobile Architecture'],
        },
      ],
    },
    contact: {
      status: 'Available',
      title: 'Project in mind?',
      subtitle: "Let's talk.",
      form: {
        name: 'Your name',
        email: 'Your email',
        subject: 'Subject',
        message: 'Your message',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
      },
      whatsapp: 'Chat on WhatsApp',
      networks: 'Networks',
      location: 'Location',
      city: 'Cotonou, Ste Rita',
      country: 'Benin',
      madeWith: 'Designed with ❤️ and Vue.js',
    },
    Loading: 'Loading...',
  },
}

// Fonction qui me permet de changer la langue dans le portfolio
export function useI18n() {
  const t = computed(() => translations[currentLang.value])

  const toggleLang = () => {
    currentLang.value = currentLang.value === 'fr' ? 'en' : 'fr'
    // On stocke ici la langue choisie par l'utilisateur
    localStorage.setItem('portfolio-lang', currentLang.value)
  }

  return {
    lang: currentLang,
    t,
    toggleLang,
  }
}
