# README

rails new react-app -j esbuild
rails javascript:install:esbuild
rails g stimulus react
add //= link application.js to manifest
yarn add @hotwired/turbo-rails
yarn add @hotwired/stimulus
rails stimulus:manifest:update
rails g controller pages home
root 'pages#home'
yarn add react react-dom
Procfile.dev: npx tailwindcss -i ./app/javascript/styles.css -o ./app/assets/sylesheets/output.css --watch
<%= stylesheet_link_tag "application", "output.css" %>
"./app/javascript/components/*.{html,js,jsx}"