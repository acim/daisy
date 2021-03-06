# Oxeye - [Sapper](https://sapper.svelte.dev/) Universal/Isomorphic Web Application Skeleton Project Implementing Authentication

[![GitHub](https://img.shields.io/github/license/acim/oxeye)](LICENSE)
![GitHub issues](https://img.shields.io/github/issues-raw/acim/oxeye)
[![Build Status](https://drone.ablab.io/api/badges/acim/oxeye/status.svg)](https://drone.ablab.io/acim/oxeye)
[![HitCount](http://hits.dwyl.com/acim/oxeye.svg)](http://hits.dwyl.com/acim/oxeye)

<p align="center"><img src="static/oxeye.jpg"></p>

## Dependencies

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)

## Set local development environment

- install direnv, Docker and docker-compose
- change working directory to the project root
- create file .envrc with the following contents:

```bash
export MONGO_INITDB_ROOT_USERNAME=admin
export MONGO_INITDB_ROOT_PASSWORD=password
export ME_CONFIG_MONGODB_ADMINUSERNAME=admin
export ME_CONFIG_MONGODB_ADMINPASSWORD=password
export MONGO_URI='mongodb://admin:password@mongo/oxeye?authSource=admin&retryWrites=true&w=majority'
export JWT_SECRET_KEY=your-super-secret-key
export MAILGUN_API_KEY=some-mailgun.key
export MAILGUN_DOMAIN=your-mailgun-domain
```

- run direnv allow .
- run docker-compose up --build

Your Oxeye application should be available at http://localhost:3000/ and if you need to check Mongo database by
Mongo Express administration tool, it should be available at http://localhost:3001/.

If there is no user in the database, Oxeye is going to create admin user and you can see the password in the output.

## TODO

- implement authorization
- implement accounting

## [Demo](https://oxeye.ablab.io/)

---

## [Sapper documentation](https://github.com/sveltejs/sapper/blob/master/README.md)
