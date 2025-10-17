export default function SectionNavigation() {
  const sections = [
    { name: 'OVERVIEW', id: 'overview' },
    { name: 'GALLERY', id: 'gallery' },
    { name: 'LOCATION', id: 'location' },
    { name: 'FAQ\'S', id: 'faqs' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="w-full bg-gray-900 border-b border-gray-700 py-0">
      <div className="w-full max-w-7xl mx-auto">
        <nav className="w-full">
          <div className="flex justify-center items-center w-full px-4 mt-0">
            <div className="flex items-center justify-center">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-3 md:px-10 py-3 md:py-4 text-white hover:text-[#c9980b] hover:bg-gray-800/30 transition-all duration-300 whitespace-nowrap text-xs md:text-base font-semibold tracking-wide md:tracking-widest uppercase border-r border-gray-600 last:border-r-0 min-w-fit flex-1 md:flex-none"
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}