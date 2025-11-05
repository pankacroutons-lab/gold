import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Instagram, MessageCircle, Send, Menu, X, Download, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center transition-transform hover:scale-105 duration-300"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/w9regwv9_logo2.png" 
                alt="The Gold Logo" 
                className="h-16 w-auto filter drop-shadow-2xl"
              />
            </button>

            <div className="hidden md:flex items-center space-x-10">
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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gold hover:text-gold-light transition-colors"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-gold/30">
            <div className="px-6 py-8 space-y-4">
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
                  className="block w-full text-left px-6 py-4 text-xl text-white hover:text-gold hover:bg-gold/10 rounded-lg transition-all"
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
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/dvuippi1_video111.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="hero-title mb-8">
            THE GOLD
          </h1>
          <p className="hero-subtitle mb-6">
            Караоке клуб премиум-класса в сердце Паттайи
          </p>
          <p className="hero-description mb-12">
            Лучший звук • Живые эмоции • Авторская кухня • Крафтовое пиво
          </p>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="btn-3d-gold"
          >
            Забронировать столик
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gold animate-bounce cursor-pointer"
        >
          <ChevronDown size={48} strokeWidth={3} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="section-title">О нас</h2>
            <div className="gold-divider"></div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <p className="about-text text-center mb-8">
              The Gold — это не просто караоке. Это место, где каждая нота звучит как золото. 
              У нас — лучший звук в Паттайе, авторская европейская кухня под руководством итальянского шефа 
              и собственная пивоварня с более чем 8 сортами крафтового пива.
            </p>
            <p className="about-text text-center">
              Здесь проходят вечеринки, джемы и ночи, которые запоминаются навсегда.
            </p>
          </div>

          {/* Photo Gallery - All 8 photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/xm9nd6bp_11.JPG',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/7gu90uwl_12.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/x30i4p87_13.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/t1eocam4_15.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/mx4iz5yr_16.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/gxrm4b02_17.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/vmh4an1d_18.jpg',
              'https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/k4i437jh_19.jpg'
            ].map((img, index) => (
              <div 
                key={index} 
                className="gallery-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={img} 
                  alt={`The Gold ${index + 1}`} 
                  className="w-full h-72 object-cover"
                />
                <div className="gallery-overlay">
                  <p className="text-gold font-display text-2xl font-bold">THE GOLD</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-black to-dark-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Меню</h2>
            <div className="gold-divider"></div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <p className="about-text text-center">
              Наша кухня — микс итальянского шарма и европейского стиля. В каждом блюде — акцент на вкус, 
              подачу и детали. А крафтовое пиво собственного производства — визитная карточка The Gold.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Card className="menu-card-3d group">
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <div className="menu-image-container mb-6">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/eln7096t_edaa1.jpg"
                      alt="Меню кухни"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="menu-card-title">Меню Кухни</h3>
                  <p className="menu-card-subtitle">Авторская европейская кухня</p>
                </div>
                <a
                  href="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/do01dv3m_edapdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button className="btn-3d-outline w-full">
                    <Download className="mr-2" size={20} />
                    Скачать меню кухни
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="menu-card-3d group">
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <div className="menu-image-container mb-6">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/r7u9ym0k_alkoo1.png"
                      alt="Барное меню"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="menu-card-title">Барное Меню</h3>
                  <p className="menu-card-subtitle">Крафтовое пиво и коктейли</p>
                </div>
                <a
                  href="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/mvgazyey_alkopdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button className="btn-3d-outline w-full">
                    <Download className="mr-2" size={20} />
                    Скачать барное меню
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Halls Section */}
      <section id="halls" className="py-20 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Зал и VIP-зона</h2>
            <div className="gold-divider"></div>
          </div>

          <p className="about-text text-center mb-16 max-w-4xl mx-auto">
            На первом этаже — сцена, свет и драйв. На втором — приватная атмосфера, отдельный бар и премиальный комфорт.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="hall-card-3d">
              <h3 className="hall-title">Первый Этаж</h3>
              <div className="hall-image-wrapper">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/ab5qqgmb_ras1.png" 
                  alt="Схема первого этажа" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="hall-description">Основной зал со сценой и танцполом</p>
            </div>

            <div className="hall-card-3d">
              <h3 className="hall-title">Второй Этаж - VIP</h3>
              <div className="hall-image-wrapper">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/yuver50w_ras2.png" 
                  alt="Схема второго этажа" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="hall-description">Приватная VIP-зона</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Бронирование</h2>
            <div className="gold-divider"></div>
          </div>

          <Card className="booking-card-3d">
            <CardContent className="p-12">
              <form className="space-y-8">
                <div>
                  <label className="form-label">Ваше имя</label>
                  <Input 
                    type="text" 
                    placeholder="Введите ваше имя"
                    className="input-3d"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="form-label">Дата</label>
                    <Input 
                      type="date" 
                      className="input-3d"
                    />
                  </div>
                  <div>
                    <label className="form-label">Время</label>
                    <Select>
                      <SelectTrigger className="input-3d">
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
                  <label className="form-label">Количество гостей</label>
                  <Select>
                    <SelectTrigger className="input-3d">
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
                  <Button type="button" className="btn-3d-gold w-full py-6">
                    <MessageCircle className="mr-2 flex-shrink-0" size={20} />
                    <span className="booking-btn-text">Забронировать через WhatsApp</span>
                  </Button>
                </a>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 bg-gradient-to-b from-black to-dark-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Атмосфера The Gold</h2>
            <div className="gold-divider"></div>
          </div>

          <p className="about-text text-center mb-16 max-w-4xl mx-auto">
            The Gold — это место, где ночь всегда молода. Свет, сцена, голоса, смех и драйв — 
            мы создаём атмосферу, где каждый становится звездой.
          </p>

          <div className="video-wrapper">
            <video
              controls
              className="w-full h-auto rounded-2xl shadow-2xl"
            >
              <source src="https://customer-assets.emergentagent.com/job_premiumkaraoke/artifacts/dvuippi1_video111.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-gold/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="text-center md:text-left">
              <img 
                src="https://customer-assets.emergentagent.com/job_2eeabbe5-00cd-41df-984e-a7494f2fec1a/artifacts/w9regwv9_logo2.png" 
                alt="The Gold Logo" 
                className="h-24 w-auto mx-auto md:mx-0 mb-6"
              />
              <p className="footer-text">
                Караоке клуб премиум-класса в самом сердце Паттайи
              </p>
            </div>

            <div>
              <h3 className="footer-title">Контакты</h3>
              <div className="space-y-4 footer-text">
                <a href="tel:+66820390661" className="footer-link">
                  <Phone size={20} className="mr-3" />
                  +66 82-039-0661
                </a>
                <a 
                  href="https://goo.gl/maps/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <MapPin size={20} className="mr-3 flex-shrink-0" />
                  <span>315, 166-167 Jomtien Second Rd, Pattaya 20150</span>
                </a>
                <div className="flex items-start footer-text">
                  <Clock size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p>Пн, Ср-Вс: 20:00 - 02:00</p>
                    <p>Пт-Сб: 20:00 - 03:00</p>
                    <p className="text-gold font-bold">Вторник: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="footer-title">Мы в соцсетях</h3>
              <div className="flex space-x-6">
                <a
                  href="https://instagram.com/thegoldkaraoke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-3d"
                >
                  <Instagram size={26} />
                </a>
                <a
                  href="https://wa.me/66820390661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-3d"
                >
                  <MessageCircle size={26} />
                </a>
                <a
                  href="https://t.me/+66820390661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-3d"
                >
                  <Send size={26} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/30 pt-8 text-center footer-text">
            <p>&copy; {new Date().getFullYear()} The Gold Karaoke Club. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;