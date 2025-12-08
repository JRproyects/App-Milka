import React from 'react';
import { Instagram, Globe, MessageSquare, Facebook } from 'lucide-react';
import AppHeader from './components/AppHeader';
import LinkButton from './components/LinkButton';
import EventPopup from './components/EventPopup';

const App = () => {
  const links = [
    { icon: Instagram, title: 'Instagram', href: 'https://www.instagram.com/milkadesigns_/' },
     { icon: Facebook, title: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584854631127&sfnsn=wa' },    
    { icon: Globe, title: 'Web Oficial', href: 'https://milkadesigns.mitiendanube.com/?exit_preview_theme_installation' },
    { icon: MessageSquare, title: 'WhatsApp', href: 'https://wa.me/+5492994595973?text=Hola!%20Tengo%20interés%20en%20la%20joyería%20de%20Milka%20Designs.%20Me%20gustaría%20conocer%20más%20detalles%20sobre%20los%20productos%20y%20el%20proceso%20de%20compra.%20Muchas%20gracias!.' },
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
