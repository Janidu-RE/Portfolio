import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import { portfolioData } from './data';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto">
        <Hero profile={portfolioData.profile} />
        <Skills />
        <ProjectGrid projects={portfolioData.projects} />
        <ContactForm />
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100 mt-12">
        <p>&copy; {new Date().getFullYear()} {portfolioData.profile.title}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
