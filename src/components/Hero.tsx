import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent-foreground border border-accent/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Ferramenta Gratuita para E-commerce</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Calendário Comercial
                </span>
                <br />
                <span className="text-foreground">Interativo 2024</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Descubra as principais datas comerciais do ano e transforme cada ocasião em uma oportunidade de venda com estratégias comprovadas.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                'Mais de 12 datas estratégicas mapeadas',
                'Ideias práticas de campanhas para cada data',
                'Sugestões de canais e criativos',
                'Estratégias de promoção testadas'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/calendar">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 group"
                >
                  Acessar Calendário
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto hover:bg-accent/10 transition-colors"
              >
                Ver Preview
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Sem Cadastro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-to-br from-card to-muted/20 rounded-2xl p-8 shadow-strong border border-border/50">
              {/* Calendar Preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-accent to-accent-light rounded-xl">
                    <Calendar className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Principais Datas 2024</h3>
                    <p className="text-sm text-muted-foreground">Estratégias para cada ocasião</p>
                  </div>
                </div>

                {/* Mock Calendar Items */}
                {[
                  { title: 'Dia das Mães', date: '12/05', category: 'Principal' },
                  { title: 'Black Friday', date: '29/11', category: 'Principal' },
                  { title: 'Natal', date: '25/12', category: 'Principal' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-background rounded-xl border border-border/30 hover:shadow-soft transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-xs font-medium">
                      {item.category}
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground rounded-full p-3 shadow-medium">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 shadow-medium">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};