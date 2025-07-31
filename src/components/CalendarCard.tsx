import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Calendar, Target, Megaphone, Palette, Gift } from 'lucide-react';
import { CommercialDate } from '@/data/commercialDates';

interface CalendarCardProps {
  date: CommercialDate;
}

export const CalendarCard = ({ date }: CalendarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'major':
        return 'bg-gradient-to-r from-accent to-accent-light text-accent-foreground';
      case 'seasonal':
        return 'bg-primary text-primary-foreground';
      case 'niche':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'major':
        return 'Data Principal';
      case 'seasonal':
        return 'Sazonal';
      case 'niche':
        return 'Nicho';
      default:
        return category;
    }
  };

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {date.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <CardDescription className="text-sm">{date.date}</CardDescription>
            </div>
          </div>
          <Badge className={`${getCategoryColor(date.category)} font-medium px-3 py-1`}>
            {getCategoryLabel(date.category)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {date.context}
        </p>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-between hover:bg-accent/10 transition-colors"
            >
              <span>Ver detalhes das campanhas</span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4 space-y-6 animate-accordion-down">
            {/* Campanhas */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Target className="w-4 h-4 text-accent" />
                <h4>Ideias de Campanhas</h4>
              </div>
              <ul className="space-y-2">
                {date.campaigns.map((campaign, index) => (
                  <li key={index} className="text-sm text-muted-foreground pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {campaign}
                  </li>
                ))}
              </ul>
            </div>

            {/* Canais */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Megaphone className="w-4 h-4 text-accent" />
                <h4>Canais Recomendados</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {date.channels.map((channel, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {channel}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Criativos */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Palette className="w-4 h-4 text-accent" />
                <h4>Sugestões de Criativos</h4>
              </div>
              <ul className="space-y-2">
                {date.creatives.map((creative, index) => (
                  <li key={index} className="text-sm text-muted-foreground pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <em>"{creative}"</em>
                  </li>
                ))}
              </ul>
            </div>

            {/* Promoções */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Gift className="w-4 h-4 text-accent" />
                <h4>Ideias de Promoções</h4>
              </div>
              <ul className="space-y-2">
                {date.promotions.map((promotion, index) => (
                  <li key={index} className="text-sm text-muted-foreground pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-success rounded-full"></span>
                    {promotion}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};