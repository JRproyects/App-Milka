import React from 'react';
import { Instagram, Globe, MessageSquare, Facebook } from 'lucide-react';
import AppHeader from './components/AppHeader';
import LinkButton from './components/LinkButton';
import EventPopup from './components/EventPopup';

const App = () => {
  const links = [
    { icon: Instagram, title: 'Instagram', href: 'https://www.instagram.com/milkadesigns_/' },
    { icon: Globe, title: 'Web Oficial', href: 'https://milkadesigns.mitiendanube.com/?exit_preview_theme_installation' },
    { icon: MessageSquare, title: 'WhatsApp', href: 'https://wa.me/+5492996281095?text=Hola,%20quisiera%20saber%20más%20sobre%20el%20próximo%20evento.' },
    { icon: Facebook, title: 'Facebook', href: 'https://www.facebook.com/tupagina' },
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-cremaClaro dark:bg-darkBg text-bordo dark:text-darkText">
      <AppHeader />

      <div className="w-full flex flex-col items-center">
        {links.map((link, i) => (
          <LinkButton key={i} icon={link.icon} title={link.title} href={link.href} />
        ))}

        <EventPopup />
      </div>
    </div>
  );
};

export default App;
