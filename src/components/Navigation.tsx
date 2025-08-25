interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = ['Bio', 'Gallery', 'Reel', 'Resume', 'Contact'];

  return (
    <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-end space-x-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionChange(section)}
              className={`transition-colors ${
                activeSection === section
                  ? 'text-blue-400'
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}