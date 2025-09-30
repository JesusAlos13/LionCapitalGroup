# 🏠 Lion Capital Group - Listado de Propiedades

¡Bienvenido! Esta es una aplicación web de **listado de propiedades** construida con **React (v18+)** y **Tailwind CSS v4**.  
Permite buscar, filtrar, ordenar y ver detalles de propiedades de manera **responsive y profesional**.

---

## 🚀 Instalación rápida

```bash
# Clonar repositorio
git clone <github.com/JesusAlos13/LionCapitalGroup>
cd LionCapitalGroup

# Instalar dependencias
npm install

# Ejecutar la app en modo desarrollo
npm run dev


.

📂 Estructura del proyecto
src/
│
├─ components/        
│  └─ PropertyCard.jsx        # Tarjeta individual de propiedad
│
├─ properties/          
│  └─ PropertyList.jsx        # Listado de propiedades con filtros y búsqueda
│
├─ hook/             
│  └─ useFilter.jsx  # Lógica de búsqueda, filtrado y ordenación
│
├─ data/              
│  └─ properties.json        # Datos de ejemplo de propiedades
│
├─ App.jsx                  # Componente principal
└─ main.jsx                 # Entrada del proyecto


✨ Funcionalidades implementadas

-Listado de propiedades con imagen, precio, ubicación, características y estado.

-Búsqueda por título o ubicación.

-Ordenación por precio (ascendente o descendente).

-Filtro por tipo de propiedad (Apartamento, Casa, Oficina).

-Modal con información completa al hacer clic en una propiedad.

-Diseño responsive, adaptado a móviles, tablet y desktop.

-Indicador de carga mientras se cargan los datos.




🖱️ Cómo usar

-Escribe en la barra de búsqueda para filtrar propiedades por título o ubicación.

-Selecciona la ordenación por precio según tu preferencia.

-Filtra por tipo de propiedad.

-Haz clic en una tarjeta para abrir el modal con información completa.

-Cierra el modal haciendo clic en "Cerrar".


⚡ Desafíos encontrados

-Filtrado y ordenación combinados: Se centralizó en un hook personalizado.


💡 Mejoras futuras

-Integración con backend real para datos dinámicos.

-Mejorar UX con animaciones suaves en modal y filtros.

-Implementar favoritos guardados en localStorage o base de datos.
