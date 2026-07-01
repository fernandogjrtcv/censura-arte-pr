# Fichero de la Censura — Arte y Memoria en Puerto Rico

Prototipo de sitio web que presenta el Proyecto de Conclusión **"Fichero de documentación y casos de censura en Puerto Rico"** de Isabelle Carolina Rosa Santos (Maestría en Gestión y Administración Cultural, Universidad de Puerto Rico, Recinto de Río Piedras, 2026).

El sitio documenta casos de censura en las artes plásticas puertorriqueñas —desde el carpeteo y la Ley de la Mordaza (1948) hasta la Poli/Gráfica 2024— como un *fichero* digital de expedientes citables, con línea de tiempo, marco conceptual y metodología. Su estructura toma como referencia el [Observatório da Censura](https://www.observatoriodacensura.com.br/) (Brasil).

## Stack

- HTML/CSS/JS estático, sin paso de build — pensado como prototipo para cliente.
- Tipografías: [Lora](https://fonts.google.com/specimen/Lora) (serif, cuerpo) y [Archivo](https://fonts.google.com/specimen/Archivo) (sans, navegación y metadatos), vía Google Fonts.
- Hospedaje: **Azure Static Web Apps** (`fgsan-censuraarte-swa-dev-eus2`, grupo `rg-fgsan-censuraarte-dev-eus2`).
- Despliegue: **GitHub Actions** (`.github/workflows/azure-static-web-apps.yml`) — cada push a `main` publica automáticamente; los pull requests generan ambientes de staging.

## Estructura

```
├── index.html                  # Portada: casos destacados, citas, CTA
├── casos.html                  # El Fichero: índice de expedientes con filtros
├── casos/                      # Expedientes individuales (permalinks)
├── linea-de-tiempo.html        # Cronología 1930s–2025 en tres capas
├── que-es-censura.html         # Definiciones, mecanismos y marco legal
├── contexto.html               # Ensayo histórico
├── metodologia.html            # Historia oral, criterios y limitaciones
├── sobre.html                  # El proyecto, la autora, el comité
├── fuentes.html                # Bibliografía de la tesis
├── contacto.html               # "Suma un caso" (formulario prototipo)
├── data/plan.json              # Plan de contenido derivado de la tesis
├── css/styles.css              # Sistema de diseño (ficha de archivo)
└── staticwebapp.config.json    # Configuración de Static Web Apps
```

## Desarrollo local

No hay dependencias; basta un servidor estático:

```bash
python3 -m http.server 8000
```

## Despliegue

El pipeline usa el secreto `AZURE_STATIC_WEB_APPS_API_TOKEN` (token de despliegue del recurso). Push a `main` → publicación en producción.

## Notas editoriales

- La tesis fuente no incluye imágenes; los espacios de imagen usan un tratamiento de "imagen no disponible" con motivo de barra de censura, coherente con el tema.
- Los casos sin fecha precisa se publican como *fecha no determinada*, siguiendo la honestidad metodológica de la tesis.
- El formulario de contacto es un prototipo sin backend.
