 # Installation

   ## Clone the repository
   git clone https://github.com/sheygs13/pern.git

   ## Change directory
   cd src

   ## Install dependencies
   npm install

   ## Configure environment variables
   Replace `.env.sample` with `.env` and fill the required placeholders

   ## Run your app
   npm run dev

   # Minify your app
   npm run build



# notes

- `...RETURNING *` is used when performing `POST/UPDATE/DELETE` operations to return a value.
- For `GET` request, no need to add `...RETURNING *` because the purpose of select is to return data back.
- proxy is only used in development so it will be ignored in production. so if there is no `http://localhost:5000` then by default 
it is going to use the heroku domain. The heroku app is just our server serving the build static content and also holding the restful api.