// ========== UPLOAD FUNCTIONALITY ==========

const designInput = document.getElementById('designInput');
const uploadBox = document.querySelector('.upload-box');
const designForm = document.getElementById('designForm');
const portfolioGrid = document.getElementById('portfolioGrid');
const uploadPreview = document.getElementById('uploadPreview');
const previewImage = document.getElementById('previewImage');
const uploadSuccess = document.getElementById('uploadSuccess');

let selectedFile = null;

// Click to upload
uploadBox.addEventListener('click', () => designInput.click());

// File input change
designInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleFileSelect(file);
    }
});

// Drag and drop
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleFileSelect(file);
    } else {
        alert('Please drop an image file');
    }
});

function handleFileSelect(file) {
    if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB limit');
        return;
    }

    selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImage.src = e.target.result;
        uploadPreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// Handle form submission
designForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!selectedFile) {
        alert('Please select an image first');
        return;
    }

    const title = document.getElementById('designTitle').value;
    const description = document.getElementById('designDescription').value;
    const category = document.getElementById('designCategory').value;

    const reader = new FileReader();
    reader.onload = (e) => {
        const design = {
            id: Date.now(),
            title,
            description,
            category,
            image: e.target.result,
            createdAt: new Date().toISOString()
        };

        // Save to localStorage
        const designs = JSON.parse(localStorage.getItem('portfolioDesigns') || '[]');
        designs.push(design);
        localStorage.setItem('portfolioDesigns', JSON.stringify(designs));

        // Add to portfolio
        addDesignToPortfolio(design);

        // Reset form
        designForm.reset();
        designInput.value = '';
        selectedFile = null;
        uploadPreview.style.display = 'none';
        previewImage.src = '';

        // Show success message
        uploadSuccess.style.display = 'block';
        setTimeout(() => {
            uploadSuccess.style.display = 'none';
        }, 3000);
    };
    reader.readAsDataURL(selectedFile);
});

function addDesignToPortfolio(design) {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.innerHTML = `
        <button class="delete-btn" onclick="deleteDesign(${design.id})">×</button>
        <div class="portfolio-image">
            <img src="${design.image}" alt="${design.title}">
        </div>
        <h3>${design.title}</h3>
        <p>${design.description}</p>
        ${design.category ? `<div class="category">${design.category}</div>` : ''}
    `;

    portfolioGrid.appendChild(item);
}

function deleteDesign(id) {
    if (confirm('Are you sure you want to delete this design?')) {
        // Remove from localStorage
        let designs = JSON.parse(localStorage.getItem('portfolioDesigns') || '[]');
        designs = designs.filter(d => d.id !== id);
        localStorage.setItem('portfolioDesigns', JSON.stringify(designs));

        // Remove from portfolio
        location.reload();
    }
}

// Load designs from localStorage on page load
function loadDesigns() {
    const designs = JSON.parse(localStorage.getItem('portfolioDesigns') || '[]');
    
    if (designs.length > 0) {
        // Clear placeholder
        portfolioGrid.innerHTML = '';
        
        // Add each design
        designs.forEach(design => {
            addDesignToPortfolio(design);
        });
    }
}

// ========== SMOOTH SCROLLING ==========

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== CONTACT FORM ==========

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name.trim() && email.trim() && message.trim()) {
        this.reset();
        alert('Thank you for your message! I\'ll get back to you soon.');
    } else {
        alert('Please fill out all fields.');
    }
});

// ========== PORTFOLIO ANIMATIONS ==========

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items
function observePortfolioItems() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Load designs and observe on page load
window.addEventListener('load', () => {
    loadDesigns();
    observePortfolioItems();
});