import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Bio } from './components/Bio';
import { Gallery } from './components/Gallery';
import { Reel } from './components/Reel';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeSection, setActiveSection] = useState('Bio');

  const renderSection = () => {
    switch (activeSection) {
      case 'Bio':
        return <Bio />;
      case 'Gallery':
        return <Gallery />;
      case 'Reel':
        return <Reel />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Bio />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      {renderSection()}
      <Toaster />
    </div>
  );
}