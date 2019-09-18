GitHub GraphQL Exercise
=======================

1. Navigate to https://developer.github.com/v4/explorer/ and sign into a GitHub account.

2. On the left hand side there is a box you can type into, this is where you can query GitHub’s GraphQL endpoint. On the right hand side the result of your query will be displayed.  
Copy the query below into the left hand box and click the play button. This will return data about the currently logged in user:


```
query {
  viewer {
    name
    url
  }
}
```


3. Try adding additional fields to your query, for example bio and status.

```
query {
  viewer {
    name
    url
    bio
    status {
      id
      message
    }
  }
}
```

4. Next try querying for an organisation with an argument called login. This will return the name and url of the user with login name github.

query {
  organization(login: "github") {
    name
    url
  }
}

5. Next we will query for the same data with different Try querying for two organisation simultaneously:

```
query {
  organization(login: "github") {
    name
    url
  }
   organization(login: "spotify") {
    name
    url
  }
}
```

This should result in an error like “Field 'organization' has an argument conflict: 
`{login:\"\\\"github\\\"\"} or {login:\”\\\"spotify\\\"\"}?`

This query failed because you have two objects with the same name. We have to give them an alias to make them unique.

```
query {
  github: organization(login: "github") {
    id
    name
    url
  }
  spotify: organization(login: "spotify") {
    id
    name
    url
  }
}
```

6. Up to this point this has been read opeations. Next we will try to update an existing comment with a reaction emoji on GitHub. We use a mutation to do this. The mutation below has an argument of AddReactionInput.

```
mutation addReaction($input: AddReactionInput!){
 addReaction(input: $input){
   clientMutationId
   reaction{
     content
     createdAt
   }
 }
}
```
In order for this to work we will also need to add the variable values which will be used to call the addReaction method. The content value below indicates the emoji which will be posted. Try one out. 

```
{
 "input": {
   "clientMutationId": "$513645863",
   "subjectId": "MDEyOklzc3VlQ29tbWVudDUyNzE2MDYxNQ==",
   "content": "HOORAY"
 }
}
```

8. Now navigate to https://github.com/zobbolino/graphQLStuff/issues/1 to see your reaction reflected on the comment.





