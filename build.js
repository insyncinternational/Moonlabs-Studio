const fs = require('fs');
const path = require('path');

// Create build script for deployment
function buildProject() {
    console.log('🚀 Building Spark Ventures for deployment...');
    
    // Create dist directory
    const distDir = 'dist';
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
    }
    
    // Copy HTML files
    const htmlFiles = ['index.html', 'about.html', 'bootcamp.html', 'founders.html', 'portfolio.html'];
    htmlFiles.forEach(file => {
        if (fs.existsSync(file)) {
            fs.copyFileSync(file, path.join(distDir, file));
            console.log(`✅ Copied ${file}`);
        }
    });
    
    // Copy CSS
    if (fs.existsSync('styles.css')) {
        fs.copyFileSync('styles.css', path.join(distDir, 'styles.css'));
        console.log('✅ Copied styles.css');
    }
    
    // Copy JS
    if (fs.existsSync('script.js')) {
        fs.copyFileSync('script.js', path.join(distDir, 'script.js'));
        console.log('✅ Copied script.js');
    }
    
    // Create optimized index.html for production
    createOptimizedIndex();
    
    console.log('🎉 Build completed successfully!');
    console.log('📁 Files are ready in the dist/ directory');
    console.log('🌐 You can now deploy the dist/ folder to any static hosting service');
}

function createOptimizedIndex() {
    const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spark Ventures - Building the Future of AI from Dubai</title>
    <meta name="description" content="Spark Ventures is a venture builder in the UAE that transforms visionary founders into CEOs of high-growth AI companies.">
    <meta name="keywords" content="AI, venture builder, startup, Dubai, UAE, artificial intelligence, entrepreneurship">
    <meta property="og:title" content="Spark Ventures - Building the Future of AI">
    <meta property="og:description" content="Transform your AI idea into a high-growth company with our team, capital, and ecosystem.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sparkventures.ai">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Spark Ventures - Building the Future of AI">
    <meta name="twitter:description" content="Transform your AI idea into a high-growth company with our team, capital, and ecosystem.">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="icon" type="image/png" href="Spark Ventures logo black.png">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <img src="Spark Ventures logo black.png" alt="Spark Ventures" class="logo-img">
            </div>
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link active">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="bootcamp.html" class="nav-link">Bootcamp</a></li>
                <li><a href="founders.html" class="nav-link">For Founders</a></li>
                <li><a href="portfolio.html" class="nav-link">Portfolio</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-headline">Building the Future of AI, from Dubai to the World</h1>
                <p class="hero-subheadline">Spark Ventures is a venture builder in the UAE that transforms visionary founders into CEOs of high-growth AI companies. We provide the team, the capital, and the ecosystem to turn your idea into reality.</p>
                <div class="hero-buttons">
                    <a href="bootcamp.html" class="btn btn-primary">Apply to the AI Bootcamp</a>
                    <a href="founders.html" class="btn btn-secondary">For Founders</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="floating-shapes">
                    <div class="shape"></div>
                    <div class="shape"></div>
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>
                <div class="floating-cards">
                    <div class="card card-1">
                        <i class="fas fa-brain"></i>
                        <span>AI Innovation</span>
                    </div>
                    <div class="card card-2">
                        <i class="fas fa-rocket"></i>
                        <span>Rapid Growth</span>
                    </div>
                    <div class="card card-3">
                        <i class="fas fa-globe"></i>
                        <span>Global Impact</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Your Unfair Advantage Section -->
    <section class="advantage">
        <div class="container">
            <h2 class="section-title">Your Unfair Advantage</h2>
            <div class="advantage-grid">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-users-cog"></i>
                    </div>
                    <h3>Elite AI Team</h3>
                    <p>Your idea is paired with our in-house team of world-class AI/ML engineers, full-stack developers, and UX designers. We are your technical co-founders.</p>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3>Seed Funding & Support</h3>
                    <p>We provide the crucial first check of $75,000, along with legal, marketing, and operational infrastructure, so you can focus entirely on building your product and winning customers.</p>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-globe-americas"></i>
                    </div>
                    <h3>Global Ecosystem</h3>
                    <p>Based in Dubai, we give you unparalleled access to the MENA region's fastest-growing market and a global network of mentors, partners, and follow-on investors.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Proven Model Section -->
    <section class="model">
        <div class="container">
            <h2 class="section-title">A Repeatable Path from Zero to One</h2>
            <div class="model-flow">
                <div class="flow-step">
                    <div class="step-number">1</div>
                    <h3>IDENTIFY</h3>
                    <p>We find the brightest minds through our exclusive AI Entrepreneurship Bootcamp.</p>
                </div>
                <div class="flow-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                <div class="flow-step">
                    <div class="step-number">2</div>
                    <h3>VALIDATE</h3>
                    <p>We stress-test ideas to confirm genuine market demand.</p>
                </div>
                <div class="flow-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                <div class="flow-step">
                    <div class="step-number">3</div>
                    <h3>BUILD</h3>
                    <p>Our venture team builds a market-ready MVP in just 90 days.</p>
                </div>
                <div class="flow-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                <div class="flow-step">
                    <div class="step-number">4</div>
                    <h3>LAUNCH</h3>
                    <p>We incorporate, fund, and launch the company, ready for growth and Series A.</p>
                </div>
            </div>
            <div class="model-cta">
                <a href="about.html" class="btn btn-primary">Discover Our Model</a>
            </div>
        </div>
    </section>

    <!-- Why Build in UAE Section -->
    <section class="uae-section">
        <div class="container">
            <div class="uae-content">
                <h2>The Perfect Launchpad for Global Ambition</h2>
                <p>The UAE is not just a location; it's a strategy. With visionary government support through the National Program for Artificial Intelligence, a thriving tech ecosystem, and its strategic position as a global hub, there is no better place to build a world-changing AI company. Spark Ventures is at the epicenter of this movement.</p>
                <div class="uae-features">
                    <div class="feature">
                        <i class="fas fa-landmark"></i>
                        <span>Government Support</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Strategic Location</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-network-wired"></i>
                        <span>Tech Ecosystem</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta">
        <div class="container">
            <h2>Ready to build what's next?</h2>
            <p>The journey from idea to impact starts here.</p>
            <a href="bootcamp.html" class="btn btn-primary btn-large">Apply Now</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Spark Ventures</h3>
                    <p>Building the future of AI from Dubai to the world.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="about.html">About</a></li>
                        <li><a href="bootcamp.html">Bootcamp</a></li>
                        <li><a href="founders.html">For Founders</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <p>Dubai, UAE</p>
                    <p>hello@sparkventures.ai</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Spark Ventures. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;
    
    fs.writeFileSync(path.join('dist', 'index.html'), indexContent);
    console.log('✅ Created optimized index.html');
}

// Run build if called directly
if (require.main === module) {
    buildProject();
}

module.exports = { buildProject };
