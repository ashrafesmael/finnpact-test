// Load content from JSON file
fetch('/content/homepage.json')
  .then(response => response.json())
  .then(data => {
    // Update the page title if it exists
    const heroTitle = document.querySelector('h1, [class*="hero"], [class*="title"]');
    if (heroTitle && data.hero_title) {
      heroTitle.textContent = data.hero_title;
    }
    
    // Update subtitle/description
    const heroSubtitle = document.querySelector('p, [class*="subtitle"], [class*="description"]');
    if (heroSubtitle && data.hero_subtitle) {
      heroSubtitle.textContent = data.hero_subtitle;
    }
  })
  .catch(error => console.log('Content loading error:', error));
