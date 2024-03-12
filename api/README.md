# whos-that-pokemon API

This is a little middleware API layer between the mobile app "who's that pokemon?" and the publicly available [PokeAPI](https://pokeapi.co/). 

Initially this is just an exercise in creating a small API in typescript to be deployed to Azure. Eventually this will hopefully do some fun data transformation / grouping of responses from PokeAPI to enable nice app features.

Built with inspiration from:
* Create a TSOA app https://tsoa-community.github.io/docs/getting-started.html
* Generate a client from an openAPI spec https://openapi-generator.tech/docs/usage#generate 
* publishing a package locally https://classic.yarnpkg.com/lang/en/docs/cli/link/

## Running this API

To build and run with hot reloading:
```bash
yarn build && yarn dev
```

Hit [http://localhost:3000/pokemon/ditto](http://localhost:3000/pokemon/ditto) to get details about the pokemon ditto.

Hit [http://localhost:3000/pokemon?habitatId=3](http://localhost:3000/pokemon?habitatId=3) to get the names of all pokemon which live in habitat #3 (grassland).

Hit [http://localhost:3000/docs](http://localhost:3000/docs) to view the OpenAPI spec for this API via swagger UI.


## OpenAPI Spec

The OpenAPI Spec can be found in [build/swagger.json](./build/swagger.json). It's generated from the TSOA API definition and generation can be triggered with 
```bash
yarn generate-spec
```


## Publish client

An npm package containing a typescript axios client for this API is generated from the OpenAPI spec.
```bash
yarn generate-client
```

The config for this package including the version number (which should be incremented in line with semantic versioning for any changes) can be found in [clientConfig.json](./clientConfig.json).

### Working locally

To consume a local version of this package:
```bash
# run in api/
yarn generate-spec
yarn generate-client

# Publish package locally
cd ./build/client
yarn link

# Consume package
cd ../../../app
yarn link "pokemon-lil-api"
```