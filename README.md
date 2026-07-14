# Contactvox Landing Page

Landing page de Contactvox CX desplegada en Vercel con dominio personalizado contactvox.com

## 📋 Estructura del Proyecto

```
contactvox-landing-github/
├── index.html                 # Landing page principal
├── public/
│   └── qr/
│       └── index.html        # URL permanente para QR (redirige al landing)
├── vercel.json               # Configuración de Vercel
├── .gitignore                # Archivos ignorados por Git
└── README.md                 # Este archivo
```

## 🔗 URLs Importantes

- **Landing Principal:** `https://contactvox.com/`
- **QR Permanente:** `https://contactvox.com/qr` (NUNCA cambia, aunque modifiques el código)

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue automático desde GitHub

1. **Push a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Landing page setup"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/contactvox-landing.git
   git push -u origin main
   ```

2. **En Vercel Dashboard:**
   - Ir a https://vercel.com/dashboard
   - Hacer clic en "New Project"
   - Seleccionar tu repositorio `contactvox-landing` de GitHub
   - Vercel detectará automáticamente la configuración de `vercel.json`
   - Hacer clic en "Deploy"

3. **Conectar dominio personalizado:**
   - En Vercel Dashboard, ir a "Domains"
   - Agregar dominio: `contactvox.com`
   - Vercel te mostrará los registros DNS a configurar
   - En tu proveedor de dominio (Godaddy, Namecheap, etc.), actualizar los DNS

### Opción 2: Despliegue directo desde carpeta local

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar desde la carpeta del proyecto
cd C:\Users\aliss\contactvox-landing-github
vercel
```

## 📝 Cambios Futuros

Cuando necesites actualizar el landing:

1. **Editar `index.html`** con los cambios
2. **Git commit y push:**
   ```bash
   git add index.html
   git commit -m "Actualizar landing page"
   git push
   ```
3. **Vercel desplegará automáticamente** en 1-2 minutos

⚠️ **Importante:** La URL del QR (`/qr`) siempre permanecerá igual, incluso si cambias el contenido del landing.

## 🔧 GetResponse

Tu landing tiene integración con GetResponse para tracking analítico:
- Script: `https://comunicados.aliothapps.com/script/f25d32cb-56a6-49ee-a75a-80d7a0183157/ga.js`
- El script está en la línea 10-17 del `index.html`

## 📱 Características

- ✅ Landing page responsiva
- ✅ Integración GetResponse
- ✅ URL permanente para QR (`/qr`)
- ✅ Despliegue automático desde GitHub
- ✅ Dominio personalizado (contactvox.com)
- ✅ Cache optimizado en Vercel

## 🤝 Soporte

Para cambios o actualizaciones, modifica el `index.html` y haz push a GitHub.
Vercel desplegará automáticamente los cambios.

---

**Última actualización:** 2026-07-14
