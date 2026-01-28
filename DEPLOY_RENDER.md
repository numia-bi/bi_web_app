# Deploying MRR Dashboard a Render.com

## Pasos para desplegar:

### 1. Sube el proyecto a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/mrr-dashboard.git
git push -u origin main
```

### 2. En Render.com:
1. Ve a [render.com](https://render.com)
2. Inicia sesión o crea una cuenta
3. Click en "New +" → "Web Service"
4. Conecta tu repositorio de GitHub
5. Configura:
   - **Name**: `mrr-dashboard`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Root Directory**: (déjalo en blanco)

### 3. Deploy
- Click en "Create Web Service"
- Espera a que se complete el deployment (~2-3 minutos)
- Tu app estará disponible en `https://mrr-dashboard-xxxx.onrender.com`

## Notas:
- El sitio puede tardar 15-30 segundos en cargar la primera vez (Render duerme las instancias gratuitas)
- Para un deployment más rápido, usa `npm run build` en lugar de preview
- Si quieres un sitio más rápido, considera el plan pago

¿Necesitas ayuda con algo?
