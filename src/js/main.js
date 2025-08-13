// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileCategoriesButton = document.getElementById('mobile-categories-button');
const mobileCategories = document.getElementById('mobile-categories');
const searchInput = document.getElementById('search-input');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    
    // Save preference to localStorage
    const isDark = html.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
});

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// Mobile Menu Toggle
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Mobile Categories Toggle
mobileCategoriesButton.addEventListener('click', () => {
    mobileCategories.classList.toggle('hidden');
    mobileCategoriesButton.querySelector('i').classList.toggle('fa-chevron-down');
    mobileCategoriesButton.querySelector('i').classList.toggle('fa-chevron-up');
});

// Search Functionality
searchInput.addEventListener('input', (e) => {
    // This will be enhanced later with actual search functionality
    console.log('Searching for:', e.target.value);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});


// Category Card Hover Effects
document.querySelectorAll('#categories a').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const iconContainer = card.querySelector('div:first-child');
        iconContainer.classList.add('bg-primary-200', 'dark:bg-primary-800');
    });
    
    card.addEventListener('mouseleave', () => {
        const iconContainer = card.querySelector('div:first-child');
        iconContainer.classList.remove('bg-primary-200', 'dark:bg-primary-800');
    });
});

// Simple search functionality for categories
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const categoryCards = document.querySelectorAll('#categories a');
    
    categoryCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Load More Categories Functionality
const loadMoreBtn = document.getElementById('load-more-categories');
const categoriesContainer = document.querySelector('#categories .grid');

// Additional categories data
const additionalCategories = [
    {
        title: "Misc Tools",
        icon: "wrench",
        description: "Various handy utilities for developers and everyday tasks."
    },
    {
        title: "Study Tools",
        icon: "font",
        description: "Manipulate, analyze, and use text in various ways."
    },
    {
        title: "Time Tools",
        icon: "palette",
        description: "Timers, Stopwatches, Alarms and tools to boost your efficiency."
    },
    {
        title: "Design Tools",
        icon: "database",
        description: "Convert, visualize, and analyze various design formats.",
        badge: "Popular"
    }
];

let allCategoriesLoaded = false;

loadMoreBtn.addEventListener('click', function() {
    if (allCategoriesLoaded) {
        // Scroll back to top of categories section
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
        loadMoreBtn.innerHTML = 'View All Categories <i class="fas fa-chevron-down ml-2"></i>';
        allCategoriesLoaded = false;
        return;
    }

    // Add additional categories
    additionalCategories.forEach((category, index) => {
        const categoryCard = document.createElement('a');
        categoryCard.href = 'tools/' + category.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')+'/' + category.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + '.html';
        categoryCard.className = 'group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden animate-fadeIn';
        categoryCard.style.animationDelay = `${index * 0.1}s`;
        
        categoryCard.innerHTML = `
            ${category.badge ? `<div class="badge absolute top-3 right-3 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">${category.badge}</div>` : ''}
            <div class="absolute top-4 right-4 text-gray-300 dark:text-gray-600 group-hover:text-primary-400 transition-colors">
                <i class="fas fa-arrow-right text-xl"></i>
            </div>
            <div class="w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                <i class="fas fa-${category.icon} text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">${category.title}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
                ${category.description}
            </p>
            <span class="absolute inset-0"></span>
        `;
        
        categoriesContainer.appendChild(categoryCard);
    });

    // Update button state
    loadMoreBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-2"></i>';
    allCategoriesLoaded = true;
    
    // Apply hover effects to new cards
    applyCategoryCardHoverEffects();
});



// Function to apply hover effects to all category cards
function applyCategoryCardHoverEffects() {
    document.querySelectorAll('#categories .grid a').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const iconContainer = card.querySelector('div:first-of-type');
            if (iconContainer && !iconContainer.classList.contains('absolute')) {
                iconContainer.classList.add('bg-primary-200', 'dark:bg-primary-800');
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const iconContainer = card.querySelector('div:first-of-type');
            if (iconContainer && !iconContainer.classList.contains('absolute')) {
                iconContainer.classList.remove('bg-primary-200', 'dark:bg-primary-800');
            }
        });
    });
}

// Initialize hover effects on page load
document.addEventListener('DOMContentLoaded', () => {
    applyCategoryCardHoverEffects();
});




// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lazy loading for images (if added later)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback to Intersection Observer
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => observer.observe(img));
}



// featured tools data 
// Tool data array
const toolsData = [
    {
        id: 1,
        name: "PDF to Word",
        description: "Convert PDF documents to editable Word files while preserving formatting.",
        icon1: "file-pdf",
        icon2: "file-word",
        color: "blue",
        badge: "Popular",
        toolLink: "tools/file-tools/document-tools.html"
    },
    {
        id: 2,
        name: "Image Compressor",
        description: "Reduce image file size without noticeable quality loss.",
        icon1: "image",
        icon2: "compress-alt",
        color: "green",
        badge: "Popular",
        toolLink: "tools/image-tools/image-tools.html"
    },
    {
        id: 3,
        name: "Resume Builder",
        description: "Create professional resumes in minutes with our easy builder.",
        icon1: "file-alt",
        icon2: "magic",
        color: "purple",
        badge: "New",
        toolLink: "tools/writing-tools/writing-tools.html"
    },
    {
        id: 4,
        name: "Scientific Calculator",
        description: "Advanced calculator with scientific, statistical and graphing functions.",
        icon1: "calculator",
        icon2: "square-root-alt",
        color: "orange",
        toolLink: "tools/calculator-tools/calculators.html"
    },
    {
        id: 5,
        name: "QR Code Generator",
        description: "Create custom QR codes for URLs, contact info, WiFi and more.",
        icon1: "qrcode",
        icon2: "plus-circle",
        color: "red",
        badge: "New",
        toolLink: "tools/misc-tools/misc-tools.html"
    },
    {
        id: 6,
        name: "Password Generator",
        description: "Generate strong, secure passwords with customizable options.",
        icon1: "key",
        icon2: "random",
        color: "yellow",
        badge: "New",
        toolLink: "tools/misc-tools/misc-tools.html"
    },
    {
        id: 7,
        name: "Unit Converter",
        description: "Convert between different units of measurement instantly.",
        icon1: "ruler-combined",
        icon2: "exchange-alt",
        color: "indigo",
        toolLink: "tools/calculator-tools/calculators.html"
    },
    {
        id: 8,
        name: "Text to Speech",
        description: "Convert written text into natural sounding speech.",
        icon1: "font",
        icon2: "volume-up",
        color: "pink",
        badge: "Popular",
        toolLink: "tools/writing-tools/writing-tools.html"
    },
    {
        id: 9,
        name: "Color Picker",
        description: "Select, convert and extract colors from images.",
        icon1: "palette",
        icon2: "eye-dropper",
        color: "teal",
        toolLink: "tools/design-tools/design-tools.html"
    },
    {
        id: 10,
        name: "Base64 Encoder",
        description: "Encode and decode Base64 strings and files.",
        icon1: "code",
        icon2: "arrows-alt-h",
        color: "gray",
        toolLink: "tools/misc-tools/misc-tools.html"
    },
    {
        id: 11,
        name: "Markdown Editor",
        description: "Live preview markdown editor with export options.",
        icon1: "markdown",
        icon2: "file-download",
        color: "blue",
        toolLink: "tools/writing-tools/writing-tools.html"
    },
    {
        id: 12,
        name: "JSON Formatter",
        description: "Validate and format JSON data for better readability.",
        icon1: "braces",
        icon2: "indent",
        color: "green",
        toolLink: "tools/misc-tools/misc-tools.html"
    }
];

// Configuration
const INITIAL_TOOLS_TO_SHOW = 4;
const TOOLS_PER_LOAD = 4;
let visibleToolsCount = 0;



// Function to create tool card HTML
function createToolCard(tool) {
    const badge = tool.badge ? `
        <div class="absolute top-3 left-3 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
            ${tool.badge}
        </div>
    ` : '';
    
    return `
        <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 tool-card">
            <div class="relative">
                <div class="h-40 bg-gradient-to-r from-${tool.color}-100 to-${tool.color}-50 dark:from-${tool.color}-900/30 dark:to-${tool.color}-800/30 flex items-center justify-center">
                    <i class="fas fa-${tool.icon1} text-5xl text-${tool.color}-500 dark:text-${tool.color}-400"></i>
                    ${tool.icon2 ? `<i class="fas fa-${tool.icon2} text-4xl text-${tool.color}-600 dark:text-${tool.color}-300 ml-4"></i>` : ''}
                </div>
                ${badge}
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${tool.name}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    ${tool.description}
                </p>
                <a href="${tool.toolLink}" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline">
                    Use Tool <i class="fas fa-arrow-right ml-1 text-xs"></i>
                </a>
            </div>
        </div>
    `;
}

// Function to load tools
function loadTools(count) {
    const toolsContainer = document.getElementById('tools-container');
    const nextTools = toolsData.slice(visibleToolsCount, visibleToolsCount + count);
    
    nextTools.forEach(tool => {
        toolsContainer.insertAdjacentHTML('beforeend', createToolCard(tool));
    });
    
    visibleToolsCount += nextTools.length;
    
    // Hide load more button if all tools are shown
    if (visibleToolsCount >= toolsData.length) {
        document.getElementById('load-more-tools').style.display = 'none';
    }
    
    // Add event listeners to new cards
    addToolCardInteractions();
}

// Function to add interactions to tool cards
function addToolCardInteractions() {
    document.querySelectorAll('.tool-card').forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            const iconBg = card.querySelector('div:first-child > div');
            const colorClass = Array.from(iconBg.classList).find(cls => cls.includes('gradient-to-r'));
            iconBg.classList.remove(colorClass);
            iconBg.classList.add('bg-gradient-to-r', 'from-primary-100', 'to-primary-50', 'dark:from-primary-900/30', 'dark:to-primary-800/30');
        });
        
        card.addEventListener('mouseleave', () => {
            const iconBg = card.querySelector('div:first-child > div');
            const toolColor = card.querySelector('i:first-child').classList[2].split('-')[1]; // Extract color from icon class
            iconBg.classList.add(`bg-gradient-to-r`, `from-${toolColor}-100`, `to-${toolColor}-50`, `dark:from-${toolColor}-900/30`, `dark:to-${toolColor}-800/30`);
        });
        
        // Click effect
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                const toolLink = card.querySelector('a');
                toolLink.click();
            }
        });
    });
}


// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load initial tools
    loadTools(INITIAL_TOOLS_TO_SHOW);
    
    // Load more tools button event
    document.getElementById('load-more-tools').addEventListener('click', () => {
        loadTools(TOOLS_PER_LOAD);
    });
    
    // Hide load more button if all tools are already shown initially
    if (visibleToolsCount >= toolsData.length) {
        document.getElementById('load-more-tools').style.display = 'none';
    }
});