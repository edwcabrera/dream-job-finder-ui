
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { EyeIcon, EyeOffIcon, GithubIcon, LucideGithub } from "lucide-react";

const AuthPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Error de inicio de sesión",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would authenticate the user here
    toast({
      title: "Inicio de sesión exitoso",
      description: "Bienvenido de nuevo a DreamJob.",
    });
    
    // Redirect to dashboard
    navigate("/dashboard");
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerData.name || !registerData.email || !registerData.password || !registerData.confirmPassword) {
      toast({
        title: "Error de registro",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Error de registro",
        description: "Las contraseñas no coinciden.",
        variant: "destructive",
      });
      return;
    }
    
    if (!registerData.agreeTerms) {
      toast({
        title: "Error de registro",
        description: "Debes aceptar los términos y condiciones.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would register the user here
    toast({
      title: "Registro exitoso",
      description: "Tu cuenta ha sido creada correctamente.",
    });
    
    // Redirect to dashboard
    navigate("/dashboard");
  };
  
  const handleSocialLogin = (provider: string) => {
    // In a real app, you would authenticate with the social provider
    toast({
      title: `Iniciando sesión con ${provider}`,
      description: "Serás redirigido a la página de autenticación.",
    });
  };
  
  return (
    <Layout>
      <div className="bg-slate-900 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 bg-slate-800">
                <TabsTrigger value="login" className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Iniciar Sesión
                </TabsTrigger>
                <TabsTrigger value="register" className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Registrarse
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Iniciar Sesión</CardTitle>
                    <CardDescription>
                      Ingresa tus credenciales para acceder a tu cuenta
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tucorreo@ejemplo.com"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="password">Contraseña</Label>
                          <Button variant="link" className="p-0 h-auto text-sm" asChild>
                            <a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
                          </Button>
                        </div>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember-me"
                          name="rememberMe"
                          checked={loginData.rememberMe}
                          onCheckedChange={(checked) => setLoginData({...loginData, rememberMe: checked as boolean})}
                        />
                        <Label htmlFor="remember-me" className="text-sm">Recordarme</Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Iniciar Sesión
                      </Button>
                    </form>
                    
                    <div className="relative mt-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">O continuar con</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => handleSocialLogin("Google")}
                        className="flex items-center justify-center"
                      >
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleSocialLogin("GitHub")}
                        className="flex items-center justify-center"
                      >
                        <GithubIcon className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Crear una cuenta</CardTitle>
                    <CardDescription>
                      Completa tu información para registrarte
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Tu nombre"
                          value={registerData.name}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Correo Electrónico</Label>
                        <Input
                          id="register-email"
                          name="email"
                          type="email"
                          placeholder="tucorreo@ejemplo.com"
                          value={registerData.email}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Contraseña</Label>
                        <div className="relative">
                          <Input
                            id="register-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                        <Input
                          id="confirm-password"
                          name="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={registerData.confirmPassword}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agree-terms"
                          name="agreeTerms"
                          checked={registerData.agreeTerms}
                          onCheckedChange={(checked) => setRegisterData({...registerData, agreeTerms: checked as boolean})}
                        />
                        <Label htmlFor="agree-terms" className="text-sm">
                          Acepto los <a href="/terminos" className="text-blue-600 hover:underline">Términos de Servicio</a> y la <a href="/privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a>
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Crear Cuenta
                      </Button>
                    </form>
                    
                    <div className="relative mt-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">O registrarse con</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => handleSocialLogin("Google")}
                        className="flex items-center justify-center"
                      >
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleSocialLogin("GitHub")}
                        className="flex items-center justify-center"
                      >
                        <GithubIcon className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;
