# README

rails new react-app -j esbuild<br/>
rails javascript:install:esbuild<br/>
rails g stimulus react<br/>
add //= link application.js to manifest<br/>
yarn add @hotwired/turbo-rails<br/>
yarn add @hotwired/stimulus<br/>
rails stimulus:manifest:update<br/>
rails g controller pages home<br/>
root 'pages#home'<br/>
yarn add react react-dom<br/>
Procfile.dev: npx tailwindcss -i ./app/javascript/styles.css -o ./app/assets/sylesheets/output.css --watch<br/>
<%= stylesheet_link_tag "application", "output.css" %><br/>
"./app/javascript/components/*.{html,js,jsx}"<br/>
get '*path', to: "pages#home", constraints: ->(request) do
    !request.xhr? && request.format.html?
end<br/>