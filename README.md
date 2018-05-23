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
5. Add your resolver function to ```rootQuery.js``` to expose the query field name. Throw your errors here:
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
see video series for graphql help: see video: https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f

### Network Status Codes
data.networkStatus is useful if you want to display a different loading indicator (or no indicator at all) depending on your network status as it provides a more detailed view into the state of a network request on your component than data.loading does. data.networkStatus is an enum with different number values between 1 and 8. These number values each represent a different network state.

1. **loading**: The query has never been run before and the request is now pending. A query will still have this network status even if a result was returned from the cache, but a query was dispatched anyway.
2. **setVariables**: If a query’s variables change and a network request was fired then the network status will be setVariables until the result of that query comes back. React users will see this when options.variables changes on their queries.
3. **fetchMore**: Indicates that fetchMore was called on this query and that the network request created is currently in flight.
4. **refetch**: It means that refetch was called on a query and the refetch request is currently in flight.
5. Unused.
6. **poll**: Indicates that a polling query is currently in flight. So for example if you are polling a query every 10 seconds then the network status will switch to poll every 10 seconds whenever a poll request has been sent but not resolved.
7. **ready**: No request is in flight for this query, and no errors happened. Everything is OK.
8. **error**: No request is in flight for this query, but one or more errors were detected.

If the network status is less then 7 then it is equivalent to data.loading being true. In fact you could replace all of your data.loading checks with data.networkStatus < 7 and you would not see a difference. It is recommended that you use data.loading, however.

