import { useState, useMemo } from 'react';
import { CalendarCard } from '@/components/CalendarCard';
import { CalendarFilter } from '@/components/CalendarFilter';
import { commercialDates, getDatesByQuarter, getDatesByMonth } from '@/data/commercialDates';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar as CalendarIcon, Target } from 'lucide-react';

export const Calendar = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'quarter' | 'month'>('all');
  const [activeQuarter, setActiveQuarter] = useState<number | null>(null);
  const [activeMonth, setActiveMonth] = useState<number | null>(null);

  const filteredDates = useMemo(() => {
    if (activeFilter === 'quarter' && activeQuarter) {
      return getDatesByQuarter(activeQuarter);
    } else if (activeFilter === 'month' && activeMonth) {
      return getDatesByMonth(activeMonth);
    }
    return commercialDates;
  }, [activeFilter, activeQuarter, activeMonth]);

  const handleFilterChange = (filter: 'all' | 'quarter' | 'month') => {
    setActiveFilter(filter);
    setActiveQuarter(null);
    setActiveMonth(null);
  };

  const handleQuarterChange = (quarter: number) => {
    setActiveQuarter(quarter);
  };

  const handleMonthChange = (month: number) => {
    setActiveMonth(month);
  };

  const majorDatesCount = filteredDates.filter(date => date.category === 'major').length;
  const seasonalDatesCount = filteredDates.filter(date => date.category === 'seasonal').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-accent to-accent-light rounded-2xl mr-4">
              <CalendarIcon className="w-8 h-8 text-accent-foreground" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Calendário Comercial
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra as principais datas comerciais do ano e maximize suas vendas com estratégias personalizadas para cada ocasião.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center shadow-soft">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-accent mr-2" />
              <span className="text-2xl font-bold text-foreground">{filteredDates.length}</span>
            </div>
            <p className="text-muted-foreground">Datas Comerciais</p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center shadow-soft">
            <div className="flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-primary mr-2" />
              <span className="text-2xl font-bold text-foreground">{majorDatesCount}</span>
            </div>
            <p className="text-muted-foreground">Datas Principais</p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center shadow-soft">
            <div className="flex items-center justify-center mb-3">
              <CalendarIcon className="w-6 h-6 text-success mr-2" />
              <span className="text-2xl font-bold text-foreground">{seasonalDatesCount}</span>
            </div>
            <p className="text-muted-foreground">Datas Sazonais</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border/50 rounded-xl p-6 mb-8 shadow-soft animate-slide-up">
          <CalendarFilter
            activeFilter={activeFilter}
            activeQuarter={activeQuarter}
            activeMonth={activeMonth}
            onFilterChange={handleFilterChange}
            onQuarterChange={handleQuarterChange}
            onMonthChange={handleMonthChange}
          />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in">
          <Badge className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground">
            Data Principal
          </Badge>
          <Badge className="bg-primary text-primary-foreground">
            Sazonal
          </Badge>
          <Badge className="bg-secondary text-secondary-foreground">
            Nicho
          </Badge>
        </div>

        {/* Calendar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-slide-up">
          {filteredDates.map((date, index) => (
            <div 
              key={date.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CalendarCard date={date} />
            </div>
          ))}
        </div>

        {filteredDates.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhuma data encontrada
            </h3>
            <p className="text-muted-foreground">
              Selecione um período diferente para ver as datas comerciais.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};