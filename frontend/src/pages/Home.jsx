import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Instagram, MessageCircle, Send, Menu, X, Download, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'halls', 'booking', 'video', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 transition-transform hover:scale-105"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/w9regwv9_logo2.png" 
                alt="The Gold Logo" 
                className="h-14 w-auto"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'about', label: 'О нас' },
                { id: 'menu', label: 'Меню' },
                { id: 'halls', label: 'Зал' },
                { id: 'booking', label: 'Бронирование' },
                { id: 'video', label: 'Галерея' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gold hover:text-gold-light transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-gold/20">
            <div className="px-4 py-6 space-y-4">
              {[
                { id: 'about', label: 'О нас' },
                { id: 'menu', label: 'Меню' },
                { id: 'halls', label: 'Зал' },
                { id: 'booking', label: 'Бронирование' },
                { id: 'video', label: 'Галерея' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-cream hover:text-gold hover:bg-gold/10 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/dvuippi1_video111.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="hero-title mb-6 animate-fade-in">
            THE GOLD
          </h1>
          <p className="hero-subtitle mb-4 animate-fade-in-delay-1">
            Караоке клуб премиум-класса в сердце Паттайи
          </p>
          <p className="text-xl md:text-2xl text-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Лучший звук. Живые эмоции. Авторская кухня и крафтовое пиво собственного производства.
          </p>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="btn-gold animate-fade-in-delay-3"
          >
            Забронировать столик
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">О нас</h2>
            <div className="gold-divider"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-lg md:text-xl text-cream/90 leading-relaxed text-center mb-8">
              The Gold — это не просто караоке. Это место, где каждая нота звучит как золото. 
              У нас — лучший звук в Паттайе, авторская европейская кухня под руководством итальянского шефа 
              и собственная пивоварня с более чем 8 сортами крафтового пива.
            </p>
            <p className="text-lg md:text-xl text-cream/90 leading-relaxed text-center">
              Здесь проходят вечеринки, джемы и ночи, которые запоминаются навсегда.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/xm9nd6bp_11.JPG',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/t1eocam4_15.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/mx4iz5yr_16.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/vmh4an1d_18.jpg'
            ].map((img, index) => (
              <div 
                key={index} 
                className="gallery-item group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={img} 
                  alt={`The Gold Party ${index + 1}`} 
                  className="w-full h-80 object-cover"
                />
                <div className="gallery-overlay">
                  <p className="text-gold font-display text-xl">The Gold Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Меню</h2>
            <div className="gold-divider"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-cream/90 leading-relaxed text-center">
              Наша кухня — микс итальянского шарма и европейского стиля. В каждом блюде — акцент на вкус, 
              подачу и детали. А крафтовое пиво собственного производства — визитная карточка The Gold.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="menu-card group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <span className="text-4xl">🍽️</span>
                  </div>
                  <h3 className="text-2xl font-display text-gold mb-2">Меню Кухни</h3>
                  <p className="text-cream/70">Авторская европейская кухня</p>
                </div>
                <a
                  href="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/do01dv3m_edapdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button className="btn-gold-outline w-full">
                    <Download className="mr-2" size={18} />
                    Скачать меню кухни
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="menu-card group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <span className="text-4xl">🍺</span>
                  </div>
                  <h3 className="text-2xl font-display text-gold mb-2">Барное Меню</h3>
                  <p className="text-cream/70">Крафтовое пиво и коктейли</p>
                </div>
                <a
                  href="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/mvgazyey_alkopdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button className="btn-gold-outline w-full">
                    <Download className="mr-2" size={18} />
                    Скачать барное меню
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Halls Section */}
      <section id="halls" className="py-24 bg-gradient-to-b from-dark-gray to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Зал и VIP-зона</h2>
            <div className="gold-divider"></div>
          </div>

          <p className="text-lg md:text-xl text-cream/90 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
            На первом этаже — сцена, свет и драйв. На втором — приватная атмосфера, отдельный бар и премиальный комфорт.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="hall-card">
              <h3 className="text-3xl font-display text-gold mb-6 text-center">Первый Этаж</h3>
              <div className="hall-image-container">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/ab5qqgmb_ras1.png" 
                  alt="Схема первого этажа" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-center text-cream/80 mt-4">Основной зал со сценой и танцполом</p>
            </div>

            <div className="hall-card">
              <h3 className="text-3xl font-display text-gold mb-6 text-center">Второй Этаж - VIP</h3>
              <div className="hall-image-container">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/yuver50w_ras2.png" 
                  alt="Схема второго этажа" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-center text-cream/80 mt-4">Приватная VIP-зона с отдельным баром</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-dark-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Бронирование</h2>
            <div className="gold-divider"></div>
          </div>

          <Card className="booking-card">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-cream mb-2 font-medium">Ваше имя</label>
                  <Input 
                    type="text" 
                    placeholder="Введите ваше имя"
                    className="input-gold"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream mb-2 font-medium">Дата</label>
                    <Input 
                      type="date" 
                      className="input-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-cream mb-2 font-medium">Время</label>
                    <Select>
                      <SelectTrigger className="input-gold">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20:00">20:00</SelectItem>
                        <SelectItem value="20:30">20:30</SelectItem>
                        <SelectItem value="21:00">21:00</SelectItem>
                        <SelectItem value="21:30">21:30</SelectItem>
                        <SelectItem value="22:00">22:00</SelectItem>
                        <SelectItem value="22:30">22:30</SelectItem>
                        <SelectItem value="23:00">23:00</SelectItem>
                        <SelectItem value="23:30">23:30</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-cream mb-2 font-medium">Количество гостей</label>
                  <Select>
                    <SelectTrigger className="input-gold">
                      <SelectValue placeholder="Выберите количество" />
                    </SelectTrigger>
                    <SelectContent>
                      {[2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                        <SelectItem key={num} value={num.toString()}>{num} {typeof num === 'number' ? 'гостей' : ''}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <a
                  href="https://wa.me/66820390661?text=Здравствуйте!%20Хочу%20забронировать%20столик%20в%20The%20Gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button type="button" className="btn-gold w-full text-lg py-6">
                    <MessageCircle className="mr-2" size={20} />
                    Забронировать через WhatsApp
                  </Button>
                </a>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-24 bg-gradient-to-b from-dark-gray to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Атмосфера The Gold</h2>
            <div className="gold-divider"></div>
          </div>

          <p className="text-lg md:text-xl text-cream/90 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            The Gold — это место, где ночь всегда молода. Свет, сцена, голоса, смех и драйв — 
            мы создаём атмосферу, где каждый становится звездой.
          </p>

          <div className="video-container">
            <video
              controls
              className="w-full h-auto rounded-xl shadow-2xl"
              poster="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/w9regwv9_logo2.png"
            >
              <source src="https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/dvuippi1_video111.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-gold/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <img 
                src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/w9regwv9_logo2.png" 
                alt="The Gold Logo" 
                className="h-20 w-auto mx-auto md:mx-0 mb-4"
              />
              <p className="text-cream/70 leading-relaxed">
                Караоке клуб премиум-класса в самом сердце Паттайи
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-display text-gold mb-4">Контакты</h3>
              <div className="space-y-3 text-cream/80">
                <a href="tel:+66820390661" className="flex items-center hover:text-gold transition-colors">
                  <Phone size={18} className="mr-3" />
                  +66 82-039-0661
                </a>
                <a 
                  href="https://goo.gl/maps/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-gold transition-colors"
                >
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                  <span>315, 166-167 Jomtien Second Rd,<br />Pattaya 20150</span>
                </a>
                <div className="flex items-start">
                  <Clock size={18} className="mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p>Пн, Ср-Вс: 20:00 - 02:00</p>
                    <p>Пт-Сб: 20:00 - 03:00</p>
                    <p className="text-gold">Вторник: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-display text-gold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/thegoldkaraoke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/66820390661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <MessageCircle size={24} />
                </a>
                <a
                  href="https://t.me/+66820390661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Send size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8 text-center text-cream/60">
            <p>&copy; {new Date().getFullYear()} The Gold Karaoke Club. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;