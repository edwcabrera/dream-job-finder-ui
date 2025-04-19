
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface SearchFiltersProps {
  onFilter: (filters: any) => void;
}

const SearchFilters = ({ onFilter }: SearchFiltersProps) => {
  const [filters, setFilters] = useState({
    jobType: [],
    category: [],
    experience: [],
    salaryRange: [30000, 100000],
    remoteOnly: false,
    postedWithin: "any",
  });

  const handleCheckboxChange = (group: string, value: string) => {
    const currentValues = filters[group as keyof typeof filters] as string[];
    
    let newValues;
    if (Array.isArray(currentValues)) {
      newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
    } else {
      newValues = [value];
    }
    
    setFilters({ ...filters, [group]: newValues });
  };

  const handleSliderChange = (value: number[]) => {
    setFilters({ ...filters, salaryRange: value });
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFilters({ ...filters, [name]: checked });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      jobType: [],
      category: [],
      experience: [],
      salaryRange: [30000, 100000],
      remoteOnly: false,
      postedWithin: "any",
    });
    onFilter({});
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Filtros</CardTitle>
        <Button variant="ghost" size="icon" onClick={handleResetFilters}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">Tipo de Empleo</h3>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <div key={type.value} className="flex items-center">
                  <Checkbox
                    id={`job-type-${type.value}`}
                    checked={filters.jobType.includes(type.value)}
                    onCheckedChange={() => handleCheckboxChange('jobType', type.value)}
                  />
                  <Label
                    htmlFor={`job-type-${type.value}`}
                    className="ml-2 text-sm cursor-pointer"
                  >
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Categoría</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.value} className="flex items-center">
                  <Checkbox
                    id={`category-${category.value}`}
                    checked={filters.category.includes(category.value)}
                    onCheckedChange={() => handleCheckboxChange('category', category.value)}
                  />
                  <Label
                    htmlFor={`category-${category.value}`}
                    className="ml-2 text-sm cursor-pointer"
                  >
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Experiencia</h3>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <div key={level.value} className="flex items-center">
                  <Checkbox
                    id={`experience-${level.value}`}
                    checked={filters.experience.includes(level.value)}
                    onCheckedChange={() => handleCheckboxChange('experience', level.value)}
                  />
                  <Label
                    htmlFor={`experience-${level.value}`}
                    className="ml-2 text-sm cursor-pointer"
                  >
                    {level.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Rango Salarial</h3>
              <span className="text-sm text-gray-500">
                ${filters.salaryRange[0].toLocaleString()} - ${filters.salaryRange[1].toLocaleString()}
              </span>
            </div>
            <Slider
              defaultValue={filters.salaryRange}
              min={20000}
              max={200000}
              step={5000}
              onValueChange={handleSliderChange}
              className="my-4"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remote-only"
              checked={filters.remoteOnly}
              onCheckedChange={(checked) => handleSwitchChange('remoteOnly', checked as boolean)}
            />
            <Label htmlFor="remote-only" className="text-sm cursor-pointer">Solo trabajos remotos</Label>
          </div>

          <div>
            <h3 className="font-medium mb-3">Publicado en</h3>
            <div className="space-y-2">
              {postedWithinOptions.map((option) => (
                <div key={option.value} className="flex items-center">
                  <Checkbox
                    id={`posted-${option.value}`}
                    checked={filters.postedWithin === option.value}
                    onCheckedChange={() => handleRadioChange('postedWithin', option.value)}
                  />
                  <Label
                    htmlFor={`posted-${option.value}`}
                    className="ml-2 text-sm cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button 
            onClick={handleApplyFilters} 
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Aplicar Filtros
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const jobTypes = [
  { value: "full-time", label: "Tiempo Completo" },
  { value: "part-time", label: "Medio Tiempo" },
  { value: "contract", label: "Contrato" },
  { value: "temporary", label: "Temporal" },
  { value: "internship", label: "Prácticas" },
];

const categories = [
  { value: "technology", label: "Tecnología" },
  { value: "marketing", label: "Marketing" },
  { value: "design", label: "Diseño" },
  { value: "sales", label: "Ventas" },
  { value: "finance", label: "Finanzas" },
  { value: "customer-service", label: "Atención al Cliente" },
];

const experienceLevels = [
  { value: "entry", label: "Nivel Inicial (0-2 años)" },
  { value: "mid", label: "Nivel Medio (2-5 años)" },
  { value: "senior", label: "Nivel Senior (5-8 años)" },
  { value: "expert", label: "Nivel Experto (8+ años)" },
];

const postedWithinOptions = [
  { value: "1d", label: "Últimas 24 horas" },
  { value: "3d", label: "Últimos 3 días" },
  { value: "7d", label: "Última semana" },
  { value: "14d", label: "Últimos 14 días" },
  { value: "30d", label: "Último mes" },
  { value: "any", label: "Cualquier momento" },
];

export default SearchFilters;
