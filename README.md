# Node GraphQL Express MongoDB
This project is just an exploration into bettering my understanding of different Node stacks and what works and what doesn't.

The project uses the following tools:
- Node v8.9.4
- GraphQL
- Apollo
- Express
- MongoDB
- Mongoose
- PassportJs
- Docker
- Webpack & Webpack Dev Server
- Create React App
- Styled Components

## Getting started
1. Run your MongoDB server
2. ```yarn run dev``` or ```npm run dev```

## Models
Modeling logic is handled using Mongoose plugin. Models can be updated in the ```/src/server/models``` directory.

## GraphQL
GraphQL API exposes a single endpoint that we can use to query the data that we need. The endpoint URL is set to ```:7777/graphql``` located in the ```src/client/index.js``` file. GraphQL also exposes a testing url located at ```http://localhost:7777/graphql``` where you can test queries and view your query model.

In this project we are using JS objects to define our GraphQL schema instead of SDL which is less managable for larger projects.

The folder structure is as follows:
- mutations: Contains all of your Create, Updated and Delete logic
- queries: Contains query calls for front-end components
- resolvers: Contains your Read logic for accessing the DB
- types: Contains the Schema model for object types

To add a new "enpoint":
1. Create a new type of resource being added. for example:
```
import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: 'Book',
	description: 'A Book',
	fields: {
		id: {
			type: GraphQLID,
			resolve: (root, args, context, info) => {
				return root.id;
			}
		},
		title: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.title
			}
		}
	}
})
```
2. Add the new type to ```rootSchema.js``` to expose it to the schema:
```
import {
	GraphQLSchema
} from 'graphql';

import book from './types/bookType';

...

export default new GraphQLSchema({
	...
	types: [
		book
	]
});
```
3. Create a resolver to describe how to fetch the object:
```
import {
	GraphQLList
} from 'graphql';

import bookType from '../../types/bookType';

export default {
	type: new GraphQLList(bookType),
	description: "return all boks",
	resolve() {
		// logic to access DB and return all books
	}
}
```
4. Create a query string to attach to your component and set the fields you wish to retrieve:
```
import gql from 'graphql-tag';

export default gql`
    query {
        books {
            // Set the fields you want back here
            id,
            title
        }
    }
`;
```
5. Add your resolver function to ```rootQuery.js``` to expose the query field name:
```
import {
	GraphQLObjectType
} from 'graphql';

import books from './resolvers/books/getAllBooks';

// This is where our Query names are set and resolve to
export default new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		books, // This is the name of the query field
	})
});
```
see video series for graphql help: see video: https://www.youtube.com/watch?v=07uyIZMqgJM