
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Search, FilterX } from "lucide-react";

interface SearchFiltersProps {
  onFilter: (filters: any) => void;
}

const SearchFilters = ({ onFilter }: SearchFiltersProps) => {
  const [filters, setFilters] = useState({
    query: "",
    location: "",
    jobType: "",
    category: "",
    salaryRange: [0, 100],
    experience: [],
  });

  const handleFilter = () => {
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters({
      query: "",
      location: "",
      jobType: "",
      category: "",
      salaryRange: [0, 100],
      experience: [],
    });
    onFilter({});
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar empleos..."
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
              className="pl-10"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="location" className="mb-1.5 block">
              Ubicación
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="Ciudad, país..."
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>
        </div>

        <Accordion type="multiple" defaultValue={["jobType", "category"]}>
          <AccordionItem value="jobType">
            <AccordionTrigger>Tipo de Empleo</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                <div className="flex items-center">
                  <Checkbox
                    id="jobType-1"
                    checked={filters.jobType === "fullTime"}
                    onCheckedChange={() =>
                      setFilters({
                        ...filters,
                        jobType: filters.jobType === "fullTime" ? "" : "fullTime",
                      })
                    }
                  />
                  <label
                    htmlFor="jobType-1"
                    className="ml-2 text-sm font-medium leading-none cursor-pointer"
                  >
                    Tiempo Completo
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="jobType-2"
                    checked={filters.jobType === "partTime"}
                    onCheckedChange={() =>
                      setFilters({
                        ...filters,
                        jobType: filters.jobType === "partTime" ? "" : "partTime",
                      })
                    }
                  />
                  <label
                    htmlFor="jobType-2"
                    className="ml-2 text-sm font-medium leading-none cursor-pointer"
                  >
                    Medio Tiempo
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="jobType-3"
                    checked={filters.jobType === "remote"}
                    onCheckedChange={() =>
                      setFilters({
                        ...filters,
                        jobType: filters.jobType === "remote" ? "" : "remote",
                      })
                    }
                  />
                  <label
                    htmlFor="jobType-3"
                    className="ml-2 text-sm font-medium leading-none cursor-pointer"
                  >
                    Remoto
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="jobType-4"
                    checked={filters.jobType === "contract"}
                    onCheckedChange={() =>
                      setFilters({
                        ...filters,
                        jobType: filters.jobType === "contract" ? "" : "contract",
                      })
                    }
                  />
                  <label
                    htmlFor="jobType-4"
                    className="ml-2 text-sm font-medium leading-none cursor-pointer"
                  >
                    Por Contrato
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="category">
            <AccordionTrigger>Categoría</AccordionTrigger>
            <AccordionContent>
              <Select
                value={filters.category}
                onValueChange={(value) => setFilters({ ...filters, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tecnologia">Tecnología</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="finanzas">Finanzas</SelectItem>
                  <SelectItem value="ventas">Ventas</SelectItem>
                  <SelectItem value="desarrollo">Desarrollo</SelectItem>
                  <SelectItem value="diseño">Diseño</SelectItem>
                  <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                  <SelectItem value="administracion">Administración</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="salary">
            <AccordionTrigger>Rango Salarial</AccordionTrigger>
            <AccordionContent>
              <div className="px-1 pt-2 pb-4">
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  value={filters.salaryRange}
                  onValueChange={(value) => setFilters({ ...filters, salaryRange: value })}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>Min: ${filters.salaryRange[0] * 1000}</span>
                  <span>Max: ${filters.salaryRange[1] * 1000}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex gap-2 mt-6">
          <Button onClick={handleFilter} className="flex-1">
            Aplicar Filtros
          </Button>
          <Button variant="outline" onClick={resetFilters} className="flex gap-1">
            <FilterX className="h-4 w-4" />
            Limpiar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
