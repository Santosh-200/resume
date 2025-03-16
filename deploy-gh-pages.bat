@echo off
echo Building the project for GitHub Pages...
call ng build --configuration production --base-href="./portfolio-website/"
echo Deploying to GitHub Pages...
call npx angular-cli-ghpages --dir=dist/portfolio-website
echo Deployment complete!
pause 