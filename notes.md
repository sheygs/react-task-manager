# Notes

- `...RETURNING *` is used when performing `POST/UPDATE/DELETE` operations to return a value.
- No need to add `...RETURNING *` for `GET` because the purpose of select is to return data back.
- Proxy is only used in development so it will be ignored in production. so if there is no `http://localhost:5000` then by default
  it is going to use the heroku domain. The heroku app is just our server serving the build static content and also holding the restful api.

# Steps to deploy to Heroku

1. Put server code in root directory.
2. Configure the `main` entry file.
   1. Configure the `PORT` & `NODE_ENV`
   2. Configure database for both environments
   3. Set up scripts in package.json
   4. Set up proxy
