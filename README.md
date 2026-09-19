# Plataforma de Egresados I.E. Fray Plácido (Mocoa, Putumayo)

## Descripción
Sistema de información educativo para fidelizar a la comunidad de graduados, hacer seguimiento a su inserción laboral/académica (Tracer Study), y facilitar trámites administrativos para educación superior.

## Stack Tecnológico
- **Frontend:** Next.js 14 (App Router, SSR/SSG, TypeScript, Tailwind CSS)
- **Backend:** NestJS (Arquitectura modular, TypeScript, Inyección de Dependencias)
- **Base de Datos:** Firebase (Firestore, Firebase Auth, Firebase Storage)
- **Despliegue:** Vercel (frontend), Cloud Run (backend), Firebase Hosting/Functions

## Estructura del Proyecto
```
egresados/
├── frontend/          # Next.js App Router
├── backend/           # NestJS API
├── firebase/          # Firebase config y funciones
├── docs/              # Documentación de requerimientos
└── package.json       # Workspace raíz
```

## Requerimientos
Ver `docs/REQUERIMIENTOS.md` para especificación completa.

## Instalación
```bash
# Instalar dependencias
npm install

# Configurar Firebase
cp firebase/firebase.json.example firebase/firebase.json
# Editar con tus credenciales de Firebase

# Desarrollo
npm run dev
```

## Autor
Juan Carlos Pastuzan - juanCpastuzan99@github.com
