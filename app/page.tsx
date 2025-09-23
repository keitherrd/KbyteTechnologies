"use client"

import { useState } from 'react'
import { ArrowRight, Code, Globe, Smartphone, Database, Users, CheckCircle, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

//if (!supabaseUrl || !supabaseAnonKey) {
//throw new Error('Missing Supabase environment variables')
//}

//const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function HomePage() {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/18293699666?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/kbyte-logo.png"
                alt="KBYTE Technologies"
                width={240}
                height={120}
                className="h-24 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Inicio
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Contacto
              </Link>
            </nav>
            <Link
              href="#contacto"
              className="bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-4 py-2 font-small transition-colors flex items-center"
            >
              Cotizar Proyecto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
                Desarrollamos
                <span className="block text-blue-700">Soluciones Digitales</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                En KBYTE transformamos ideas en realidad digital. Con experiencia comprobada 
                en sistemas, páginas web, aplicaciones móviles 
                y software personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white">
                  <Link href="#servicios" className="flex items-center">
                    Ver Servicios
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                  <Link href="#contacto" className="flex items-center">
                    Contactar por WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Code className="h-8 w-8 text-blue-800 mb-3" />
                    <h3 className="font-semibold text-gray-800">Desarrollo Web</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Smartphone className="h-8 w-8 text-blue-800 mb-3" />
                    <h3 className="font-semibold text-gray-800">Apps Móviles</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Database className="h-8 w-8 text-blue-800 mb-3" />
                    <h3 className="font-semibold text-gray-800">Bases de Datos</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Globe className="h-8 w-8 text-blue-800 mb-3" />
                    <h3 className="font-semibold text-gray-800">E-commerce</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Sistemas de Préstamos</CardTitle>
                <CardDescription>
                  Plataformas completas para gestión de créditos y financiamiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Evaluación crediticia automatizada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Gestión de pagos y cobranza
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Reportes financieros detallados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Páginas Web de Rifas</CardTitle>
                <CardDescription>
                  Plataformas de sorteos y rifas online con gestión completa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Sistema de boletos digitales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Sorteos automáticos transparentes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Pasarelas de pago integradas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Desarrollo Web</CardTitle>
                <CardDescription>
                  Sitios web modernos, responsivos y optimizados para SEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Diseño responsivo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Optimización SEO
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    CMS personalizado
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Aplicaciones Móviles</CardTitle>
                <CardDescription>
                  Apps nativas e híbridas para iOS y Android
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    iOS y Android
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    UI/UX optimizada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Integración API
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Software Personalizado</CardTitle>
                <CardDescription>
                  Sistemas a medida para optimizar tus procesos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Análisis de requisitos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Desarrollo ágil
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Soporte continuo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Bases de Datos</CardTitle>
                <CardDescription>
                  Diseño y optimización de bases de datos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Modelado de datos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Optimización
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Migración segura
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">E-commerce</CardTitle>
                <CardDescription>
                  Tiendas online completas y seguras
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Pasarelas de pago
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Gestión de inventario
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Panel administrativo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Consultoría IT</CardTitle>
                <CardDescription>
                  Asesoramiento tecnológico estratégico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Auditoría técnica
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Estrategia digital
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Transformación digital
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-blue-800 mb-4" />
                <CardTitle className="text-blue-900">Integración con Sistemas de Terceros</CardTitle>
                <CardDescription>
                  Integramos tu software con sistemas de contabilidad, facturación y más.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Integración con How Many
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Integración API
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                    Soporte continuo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">¿Por qué elegir KBYTE?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos un equipo de desarrolladores con experiencia comprobada en 
                sistemas financieros especializados, plataformas de rifas y soluciones 
                web personalizadas. Colaboramos estrechamente con How Many, integrando sus soluciones líderes en nuestros desarrollos. Comprometidos con entregar soluciones de alta calidad que superen 
                las expectativas de nuestros clientes.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 rounded-full p-2">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Experiencia Comprobada</h3>
                    <p className="text-gray-600">Más de 5 años desarrollando soluciones tecnológicas exitosas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 rounded-full p-2">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Tecnologías Modernas</h3>
                    <p className="text-gray-600">Utilizamos las últimas tecnologías y mejores prácticas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 rounded-full p-2">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Soporte Continuo</h3>
                    <p className="text-gray-600">Acompañamos tu proyecto desde la idea hasta el mantenimiento</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Nuestros Números</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">100+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">98%</div>
                  <div className="text-gray-600">Satisfacción Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
                  <div className="text-gray-600">Soporte Técnico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">5+</div>
                  <div className="text-gray-600">Años Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">¿Listo para comenzar tu proyecto?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a transformar tu idea en realidad
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">support@contentai.site</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+1 (829) 369-9666</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ubicación</h4>
                    <p className="text-gray-600">Santo Domingo, República Dominicana</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <Link href="https://wa.me/18293699666" target="_blank" className="text-gray-600 hover:text-blue-900">
                      +1 (829) 369-9666
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Escribe tu mensaje y te contactaremos por WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto..." 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-blue-200 focus:border-blue-600"
                  />
                  <Button 
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                  >
                    Enviar Mensaje por WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-50 text-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/kbyte-logo.png"
                alt="KBYTE Technologies"
                width={240}
                height={120}
                className="h-24 w-auto mb-4"
              />
              <p className="text-black">
                Transformamos ideas en soluciones digitales innovadoras
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-black">
                <li>Sistemas de Préstamos</li>
                <li>Páginas Web de Rifas</li>
                <li>Desarrollo Web</li>
                <li>Apps Móviles</li>
                <li>Software Personalizado</li>
                <li>Integración con Sistemas de Terceros</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-black">
                <li>Nosotros</li>
                <li>Proyectos</li>
                <li>Blog</li>
                <li>Carreras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-black">
                <li>support@contentai.site</li>
                <li>+1 (829) 369-9666</li>
                <li>Santo Domingo, República Dominicana</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-black">
            <p>&copy; 2025 KBYTE Technologies. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}