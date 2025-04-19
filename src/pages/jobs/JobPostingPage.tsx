
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle2, Info } from "lucide-react";

const jobCategories = [
  { value: "tech", label: "Tecnología" },
  { value: "marketing", label: "Marketing" },
  { value: "design", label: "Diseño" },
  { value: "sales", label: "Ventas" },
  { value: "finance", label: "Finanzas" },
  { value: "hr", label: "Recursos Humanos" },
  { value: "customer", label: "Atención al Cliente" },
  { value: "other", label: "Otro" },
];

const jobTypes = [
  { value: "full-time", label: "Tiempo Completo" },
  { value: "part-time", label: "Tiempo Parcial" },
  { value: "contract", label: "Contrato" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Pasantía" },
  { value: "temporary", label: "Temporal" },
];

const JobPostingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    defaultValues: {
      title: "",
      company: "",
      location: "",
      type: "",
      category: "",
      minSalary: "",
      maxSalary: "",
      description: "",
      requirements: "",
      responsibilities: "",
      benefits: "",
      aboutCompany: "",
      contactEmail: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Oferta publicada con éxito!",
        description: "Tu oferta de empleo ha sido publicada correctamente.",
      });
      form.reset();
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-3">Publica tu Oferta de Empleo</h1>
              <p className="text-muted-foreground">
                Encuentra a los mejores talentos para tu empresa publicando tu oferta de trabajo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Detalles del Empleo</CardTitle>
                    <CardDescription>
                      Proporciona toda la información sobre el empleo que estás publicando
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Título del Empleo *</FormLabel>
                                <FormControl>
                                  <Input placeholder="ej. Desarrollador Frontend Senior" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nombre de la Empresa *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ej. TechSoluciones S.A." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="location"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Ubicación *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ej. Lima, Perú" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="type"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Tipo de Empleo *</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar tipo de empleo" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {jobTypes.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                          {type.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="category"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Categoría *</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar categoría" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {jobCategories.map((category) => (
                                        <SelectItem key={category.value} value={category.value}>
                                          {category.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="minSalary"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Salario Mínimo</FormLabel>
                                  <FormControl>
                                    <Input type="number" placeholder="ej. 30000" {...field} />
                                  </FormControl>
                                  <FormDescription>Valor anual en tu moneda local</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="maxSalary"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Salario Máximo</FormLabel>
                                  <FormControl>
                                    <Input type="number" placeholder="ej. 45000" {...field} />
                                  </FormControl>
                                  <FormDescription>Valor anual en tu moneda local</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <Separator />

                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Descripción del Empleo *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Describe detalladamente el puesto de trabajo"
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="responsibilities"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Responsabilidades *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Lista las principales responsabilidades del puesto"
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Separa cada responsabilidad con una línea nueva
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="requirements"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Requisitos *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Lista los requisitos para este puesto"
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Separa cada requisito con una línea nueva
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="benefits"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Beneficios</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Lista los beneficios que ofrece el puesto"
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Separa cada beneficio con una línea nueva
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Separator />

                          <FormField
                            control={form.control}
                            name="aboutCompany"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Acerca de la Empresa</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Describe brevemente tu empresa"
                                    className="min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="contactEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email de Contacto *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="ej. rrhh@empresa.com" {...field} />
                                </FormControl>
                                <FormDescription>
                                  Las aplicaciones se enviarán a este email
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="pt-4">
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Publicando..." : "Publicar Empleo"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Consejos para Publicar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-job-green-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Sé específico</span> - Incluye detalles claros sobre el rol, responsabilidades y requisitos.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-job-green-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Destaca los beneficios</span> - Menciona lo que hace único este empleo y por qué los candidatos deberían aplicar.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-job-green-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Sé realista</span> - Define requisitos alcanzables para aumentar las probabilidades de encontrar candidatos adecuados.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Precios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Publicación Básica</div>
                        <div className="font-bold text-primary">$49</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Visible por 30 días, incluye distribución en nuestro email semanal de ofertas de empleo.
                      </p>
                      <Separator className="my-2" />
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Publicación Destacada</div>
                        <div className="font-bold text-primary">$99</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Todo lo del plan básico + posición destacada en los resultados por 30 días.
                      </p>
                      <div className="mt-4 bg-muted/50 p-3 rounded-md flex items-start">
                        <Info className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Los precios no incluyen impuestos. La factura será emitida después de la compra.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center text-muted-foreground text-sm">
                  <p>¿Necesitas ayuda?</p>
                  <a href="/contacto" className="text-primary hover:underline">
                    Contacta a nuestro equipo de soporte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobPostingPage;
