# Wolf Game Wool Edition
A side project built on top of the <a href="https://wolf.game">Wolf Game NFT project</a>.  Modular APIs from various resources curated into one place looking up Wolf Game NFT asset prices

The following is the official link to the API docs:
<ul>
    <li><a target="_blank" href="https://codingabdullah.github.io/Wolf-Game-Wool-Edition/"> https://codingabdullah.github.io/Wolf-Game-Wool-Edition</a></li>
</ul>

More resources will be added to this project.

## Project Setup
The project is a full-stack application using React.js for the front-end and Node.js/Express.js for the back-end. TypeScript is used for enforcing type safety and ensuring best security practices.

In order to work with this project locally, clone this repository and run <b>`npm install`</b> in each of the server folders to install the necessary dependencies required to run this project.

The following need to be added to a <b><code>.env</code></b> file in the <code><b>backend</b></code> directory containing the following secrets:
<code><b>
SIMPLE_HASH_API_KEY=''
WOLF_GAME_FARMER_COLLECTION_ID=''
WOLF_GAME_SHEEP_WOLF_COLLECTION_ID=''
WOLF_GAME_LAND_COLLECION_ID=''
WOLF_GAME_GEN_TWO_COLLECTION_ID=''
</b></code>

## Simple Hash Collection API

SimpleHash provides APIs for looking up NFT collection prices by trait. This is useful for Wolf Game price lookups as sub-classes of NFTs based on trait vary greatly in price.


APIs have been built in the development environment which will be published later in production upon consultation.

The following NFT collections pertain to Wolf Game:
- <a target="_blank" href="https://opensea.io/collection/wolf-game">Wolf Game Collection</a>
- <a target="_blank" href="https://opensea.io/collection/wolf-game-generation-2">Wolf Game Generation 2</a>
- <a target="_blank" href="https://opensea.io/collection/wolf-game-farmer">Wolf Game Farmer</a>
- <a target="_blank" href="https://opensea.io/collection/wolf-game-land">Wolf Game Genesis Land</a>

#### Collections by Contract API
SimpleHash works with collection IDs which are found using the following API: 
- <a href="https://docs.simplehash.com/reference/collections-by-contract">Collections by Contract</a>


One needs to make use of these collection IDs to fetch pricing data related to the NFT collections above.
For the sake of simplicity, the four collection IDs are posted below and can be added to the <code><b>.env</b></code> file:

- <b><i><u>Collection IDs</u></i></b>
- - Wolf Game Farmer - <code><b>54bbc779847b0d07c8dedc559a9227f4</b></code>
- - Wolf Game Genesis Land - <code><b>b1299923196b89e89e4c89f88988aca9</b></code>
- - Wolf Game Sheep/Wolves - <code><b>493238f79224b0e3cc220270978bf8dc</b></code>
- - Wolf Game Generation 2 - <code><b>823e62764e30a7d4464dba57b05df8a1</b></code>

#### Floor Price by Trait API
SimpleHash incorporates the following API:
- <a target="_blank" href="https://docs.simplehash.com/reference/trait-floor">Floor Price by Trait</a>

This fetches floor prices of collections based on valid requested traits. The API makes use of the collection IDs to determine which collection is being used for fetching the correct data. 

This is at the heart of what this web application is all about.

#### Trails by Collection API

Alternatively, if one is not familiar with what traits exist in a particular collection, they can use the collection ID (or find the collection ID first using the aforementioned API) and find all the traits pertaining to the requested collection.

The following API provided by Simple Hash allows one to do this:
- <a target="_blank" href="https://docs.simplehash.com/reference/traits-by-collection">Traits by Collection</a>


## Bypassing the Transpiler
For the back-end server, there is no need to transpile the TypeScript code. You can bypass this step by running the following in the <code>backend</code> directory: <br />

- <code><b>npx ts-node server</b></code>

<br />

This allows one to bypass the transpiling step (TypeScript to JavaScript) and helps load the environment variables at run-time.

## Express Server Endpoints
In all, there are 23 endpoints used in this web application. More information can be found in the official API docs mentioned at the top of this <code><b>README.md</b></code> file. 

The following is a brief table outlining the request type and URL:

|   Request Type    |                    URL                   |
| ----------------  | ---------------------------------------- |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-above-average-jane-price</b></code> |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-average-joe-price</b></code>        |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-big-daddy-price</b></code>          |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-big-mama-price</b></code>           |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-diesel-price</b></code>             |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-floor-price</b></code>              |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-hundo-price</b></code>              |
| <code><b>GET</b></code>  | <code><b>/wolf-game-farmer-the-kid-price</b></code>            |
| <code><b>GET</b></code>  | <code><b>/wolf-game-land-czero-level-one-price</b></code>      |
| <code><b>GET</b></code>  | <code><b>/wolf-game-land-czero-level-two-price</b></code>      |
| <code><b>GET</b></code>  | <code><b>/wolf-game-land-czero-level-three-price</b></code>    |
| <code><b>GET</b></code>  | <code><b>/wolf-game-land-floor-price</b></code>                |
| <code><b>GET</b></code>  | <code><b>/wolf-game-land-structure-floor-price</b></code>      |
| <code><b>GET</b></code>  | <code><b>/wolf-game-sheep-floor-price</b></code>               |
| <code><b>GET</b></code>  | <code><b>/wolf-game-sheep-floor-gen-two-price</b></code>       |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-floor-price</b></code>                |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-alpha-five-price</b></code>           |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-alpha-five-gen-two-price</b></code>   |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-alpha-six-price</b></code>            |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-alpha-six-gen-two-price</b></code>    |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-alpha-seven-price</b></code>          |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-alpha-seven-gen-two-price</b></code>  |
| <code><b>GET</b></code>  | <code><b>/wolf-game-wolf-alpha-eight-price</b></code>          |


## Helpful Links
For more information related to Wolf Game, visit their official website <a href="https://wolf.game">here</a>. 

Please note that this project is not affiliated with Wolf Game in anyway, but rather a helpful tool developed to help new community members and Wolf Gamers alike.

Open source code for whoever wants or needs it. These APIs are publicly sourced and can be used by anyone.

<i><u>Built by CodingAbdullah</u></i>