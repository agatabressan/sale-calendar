import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CalendarFilterProps {
  activeFilter: 'all' | 'quarter' | 'month';
  activeQuarter: number | null;
  activeMonth: number | null;
  onFilterChange: (filter: 'all' | 'quarter' | 'month') => void;
  onQuarterChange: (quarter: number) => void;
  onMonthChange: (month: number) => void;
}

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const quarters = [
  { number: 1, label: '1º Trimestre', months: 'Jan-Mar' },
  { number: 2, label: '2º Trimestre', months: 'Abr-Jun' },
  { number: 3, label: '3º Trimestre', months: 'Jul-Set' },
  { number: 4, label: '4º Trimestre', months: 'Out-Dez' }
];

export const CalendarFilter = ({
  activeFilter,
  activeQuarter,
  activeMonth,
  onFilterChange,
  onQuarterChange,
  onMonthChange
}: CalendarFilterProps) => {
  return (
    <div className="space-y-6">
      {/* Filter Type Selection */}
      <div className="flex flex-wrap gap-3">
        <Button
          variant={activeFilter === 'all' ? 'default' : 'outline'}
          onClick={() => onFilterChange('all')}
          className="transition-all duration-200"
        >
          Todas as Datas
        </Button>
        <Button
          variant={activeFilter === 'quarter' ? 'default' : 'outline'}
          onClick={() => onFilterChange('quarter')}
          className="transition-all duration-200"
        >
          Por Trimestre
        </Button>
        <Button
          variant={activeFilter === 'month' ? 'default' : 'outline'}
          onClick={() => onFilterChange('month')}
          className="transition-all duration-200"
        >
          Por Mês
        </Button>
      </div>

      {/* Quarter Selection */}
      {activeFilter === 'quarter' && (
        <div className="space-y-3 animate-fade-in">
          <h3 className="text-sm font-medium text-muted-foreground">Selecione o trimestre:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {quarters.map((quarter) => (
              <Button
                key={quarter.number}
                variant={activeQuarter === quarter.number ? 'default' : 'outline'}
                onClick={() => onQuarterChange(quarter.number)}
                className="flex flex-col h-auto p-4 transition-all duration-200 hover:scale-105"
              >
                <span className="font-semibold">{quarter.label}</span>
                <span className="text-xs text-muted-foreground mt-1">{quarter.months}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Month Selection */}
      {activeFilter === 'month' && (
        <div className="space-y-3 animate-fade-in">
          <h3 className="text-sm font-medium text-muted-foreground">Selecione o mês:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
            {months.map((month, index) => (
              <Button
                key={index}
                variant={activeMonth === index + 1 ? 'default' : 'outline'}
                onClick={() => onMonthChange(index + 1)}
                size="sm"
                className="transition-all duration-200 hover:scale-105"
              >
                {month}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Active Filter Display */}
      {(activeQuarter || activeMonth) && (
        <div className="flex items-center gap-2 animate-slide-up">
          <span className="text-sm text-muted-foreground">Filtro ativo:</span>
          {activeQuarter && (
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              {quarters.find(q => q.number === activeQuarter)?.label}
            </Badge>
          )}
          {activeMonth && (
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              {months[activeMonth - 1]}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};