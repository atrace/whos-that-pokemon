# whos-that-pokemon

Spotted a pokemon but just can't recall it's name? `Who's that pokemon?` will ask you a few questions to narrow down and help you identify which pokemon friend you saw.

Inspired by the RSPB bird identifier (RIP - see similarly [British Bird Identifier](https://www.birdspot.co.uk/british-bird-identifier)).

This project is a learning exercise to get more familiar with all aspects of creating a mobile app and supporting TS API from scratch. 

## Get started

To start the API:
```bash
cd ./api

## install deps, generate API spec, and build
yarn 
yarn build

## publish TS package containing types and client locally for app to pick up
cd ./build/client
yarn link
cd ../..

## start the API in your terminal at http://localhost:3000
yarn dev
```

Then install the [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779) app on your mobile device, and in a new terminal:
```bash
cd ./app
yarn

## consume the local API package
yarn link "pokemon-lil-api"

yarn start  ## scan the QR code that appears
```

For more detail, see the individual [app](./app/README.md) and [API]((./api/README.md)) readmes.

## Cool things to add (backlog)

- [x] Basic app with one question and present a shortlist
- [x] Allow user to select a pokemon from final shortlist to see pokemon details
- [x] Integrate with whos-that-pokemon API
- [ ] **WIP** - Present a shortlist which is the narrowed-down result of multiple questions
    - requires big API thinking!
- [ ] Add more questions
    - [ ] What colour was it?
    - [ ] Shape
    - [ ] Type
    - [ ] to narrow down a shortlist: location area encountered, weight, height, which game was it in? 
- [ ] Add more info to final pokemon details screen
- [ ] Style pokemon details screen like a pokemon card
- [ ] Present relevant pictures with each question option
- [ ] Present pretty final shortlist selection screen with pictures