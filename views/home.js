import styles from './styles.js'

export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inicio | Hiragana API REST</title>
  
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

  <style>
    ${styles}
  </style>
</head>
<body>
  <div id="app">
    <header>
      <div class="container flex items-center justify-between mx-auto">
        <h1><a class="" href="/">Japanese Hiragana API REST (￣y▽,￣)╭</a></h1>
        
        <nav class="flex">
          <a class="py-2 px-4 bg-gray-800" href="/">Inicio</a>
          <a class="py-2 px-4" href="/guide">Documentación</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="container mx-auto py-8">
        <h2 class="h2">Te damos la bienvenida</h2>
        <p>Todo tipo de contenido relacionado con el Hiragana y Katakana en un solo lugar.</p>
      </section>
    </main>
    
    <footer class="bg-gray-800 text-white py-2">
      <div class="container mx-auto">
        <ul class="footer-data">
          <li title="Alumno">Nicolas Leonel Corbalan</li>
          <li class="border-s border-white/30" title="Materia">Aplicaciones Híbridas</li>
          <li class="border-s border-white/30" title="Profesor">Cruz Jonathan Emanuel</li>
          <li class="border-s border-white/30" title="Comisión">DWN4AV</li>
        </ul>
      </div>
    </footer>
  </div>
</body>
</html>
`