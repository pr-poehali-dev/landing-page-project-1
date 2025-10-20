import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const slides = [
  {
    image: 'https://cdn.poehali.dev/projects/24adde16-dd28-4a65-9038-4b5b71422785/files/237e86c3-1b19-42db-9aeb-759ace7addf7.jpg',
    title: 'Инновационные решения',
    subtitle: 'Технологии будущего уже сегодня'
  },
  {
    image: 'https://cdn.poehali.dev/projects/24adde16-dd28-4a65-9038-4b5b71422785/files/55e733c2-304d-4855-9ff1-d23b0299ef3f.jpg',
    title: 'Профессиональная команда',
    subtitle: 'Эксперты с многолетним опытом'
  },
  {
    image: 'https://cdn.poehali.dev/projects/24adde16-dd28-4a65-9038-4b5b71422785/files/b78a3848-5e51-4315-91de-cd59a7bb6d19.jpg',
    title: 'Передовые технологии',
    subtitle: 'Цифровая трансформация вашего бизнеса'
  }
];

const products = [
  {
    title: 'Инновационное решение А',
    description: 'Собственная разработка для автоматизации бизнес-процессов',
    badge: 'Инновация',
    icon: 'Lightbulb'
  },
  {
    title: 'Продукт Б',
    description: 'Комплексная система управления предприятием нового поколения',
    badge: 'Собственная разработка',
    icon: 'Rocket'
  },
  {
    title: 'Решение В',
    description: 'Платформа для цифровой трансформации с AI-технологиями',
    badge: 'Инновация',
    icon: 'Zap'
  },
  {
    title: 'Продукт Г',
    description: 'Система аналитики и прогнозирования на базе больших данных',
    badge: 'Собственная разработка',
    icon: 'BarChart'
  }
];

const advantages = [
  { icon: 'Award', title: 'Качество', description: 'Высокие стандарты в каждом проекте' },
  { icon: 'Users', title: 'Опыт', description: 'Более 10 лет на рынке' },
  { icon: 'Clock', title: 'Скорость', description: 'Быстрая реализация решений' },
  { icon: 'Shield', title: 'Надёжность', description: 'Гарантия и поддержка 24/7' }
];

const clients = [
  { name: 'Компания 1', logo: '🏢', color: 'from-purple-500 to-pink-500' },
  { name: 'Компания 2', logo: '🏭', color: 'from-blue-500 to-cyan-500' },
  { name: 'Компания 3', logo: '🏗️', color: 'from-orange-500 to-red-500' },
  { name: 'Компания 4', logo: '🏪', color: 'from-green-500 to-emerald-500' },
  { name: 'Компания 5', logo: '🏦', color: 'from-indigo-500 to-purple-500' }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TechnoLogo
          </div>
          
          <nav className="flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="story-link">Продукция</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <button 
                        onClick={() => scrollToSection('products')}
                        className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors story-link"
                      >
                        Наша продукция
                      </button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="tel:+79001234567" className="story-link text-foreground hover:text-primary transition-colors">
              +7 (900) 123-45-67
            </a>

            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contacts')}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              Контакты
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative h-screen w-full overflow-hidden mt-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[1200px] w-full mx-auto px-6">
            <Card className="bg-white/95 backdrop-blur-sm p-12 max-w-2xl animate-scale-in">
              <h1 className="text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {slides[currentSlide].subtitle}
              </p>
            </Card>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section id="products" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-fade-in">
            Наша продукция
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 group hover-scale border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <Icon name={product.icon as any} size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full mb-2">
                      {product.badge}
                    </span>
                    <h3 className="text-xl font-heading font-bold mb-2 story-link cursor-pointer">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
                <Button 
                  variant="outline"
                  className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  Узнать больше
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Преимущества
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center group hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <Icon name={advantage.icon as any} size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Наши заказчики
          </h2>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {clients.map((client, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
                className="cursor-pointer hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-32 h-32 rounded-2xl flex items-center justify-center text-6xl transition-all duration-300 ${
                  hoveredClient === index 
                    ? `bg-gradient-to-br ${client.color}` 
                    : 'bg-gray-200 grayscale'
                }`}>
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">TechnoLogo</h3>
              <p className="text-gray-400">Инновационные решения для вашего бизнеса</p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+79001234567" className="block story-link hover:text-white transition-colors">
                  +7 (900) 123-45-67
                </a>
                <a href="mailto:info@technologo.ru" className="block story-link hover:text-white transition-colors">
                  info@technologo.ru
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                {['💬', '📱', '🔗', '📧'].map((emoji, index) => (
                  <button 
                    key={index}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl transition-all hover-scale"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 TechnoLogo. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
