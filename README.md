# Santosh Nakka - Data Analyst Portfolio

A modern, responsive portfolio website showcasing Santosh Nakka's skills, projects, and experience as a data analyst.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Interactive elements like hover effects and project modals
- Clean, professional layout that showcases data analytics expertise
- Sections for Home, About, Projects, Skills, Education, Interests, and Contact

## Technologies Used

- Angular 19
- Bootstrap 5
- Font Awesome icons
- AOS (Animate On Scroll) for animations
- SCSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Customization

### Replacing Images

Replace the placeholder images in the `src/assets/images` directory with your actual images:

- `profile.jpg` - Your profile picture for the home page
- `about.jpg` - Image for the about section
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project thumbnails
- `project1-detail.jpg`, `project2-detail.jpg`, `project3-detail.jpg` - Detailed project images
- `bg-pattern.png` - Background pattern image

### Modifying Content

Edit the HTML files in the `src/app/pages` directory to update the content of each section:

- `home.component.html` - Introduction and summary
- `about.component.html` - Professional summary, work experience, and certifications
- `projects.component.html` - Project details and descriptions
- `skills.component.html` - Technical skills and proficiency levels
- `education.component.html` - Educational background
- `interests.component.html` - Extracurricular activities and interests
- `contact.component.html` - Contact information and form

## Deployment

### Building for Production

```bash
ng build --configuration production
```

This will create a `dist/portfolio-website` directory with optimized files for production.

### Deployment Options

1. **GitHub Pages**
   - Install the Angular GitHub Pages package: `npm install -g angular-cli-ghpages`
   - Build the project: `ng build --configuration production --base-href="/<repository-name>/"`
   - Deploy: `npx angular-cli-ghpages --dir=dist/portfolio-website`

2. **Netlify**
   - Create a `netlify.toml` file in the root directory:
     ```toml
     [build]
       publish = "dist/portfolio-website"
       command = "ng build --configuration production"
     ```
   - Connect your GitHub repository to Netlify

3. **Vercel**
   - Install Vercel CLI: `npm install -g vercel`
   - Deploy: `vercel`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap for the responsive design framework
- Font Awesome for the icons
- AOS for the scroll animations
