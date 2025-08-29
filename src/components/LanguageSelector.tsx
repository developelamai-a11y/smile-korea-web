import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, ChevronDown } from "lucide-react";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'ko',
    name: '한국어',
    flag: '🇰🇷'
  });

  const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const scrolledEnough = currentScrollY > 100;
      
      setIsVisible(scrollingUp && scrolledEnough);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectLanguage = (language: typeof selectedLanguage) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}>
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="bg-background/95 backdrop-blur-sm border-border hover:bg-accent px-3 py-2 h-auto shadow-medium"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{selectedLanguage.flag} {selectedLanguage.name}</span>
          <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
        
        {isOpen && (
          <Card className="absolute top-full mt-2 right-0 w-48 bg-background border shadow-strong">
            <div className="p-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  className={`w-full text-left px-3 py-2 rounded-md hover:bg-accent text-sm transition-colors ${
                    selectedLanguage.code === language.code ? 'bg-accent' : ''
                  }`}
                >
                  <span className="mr-3">{language.flag}</span>
                  {language.name}
                </button>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;