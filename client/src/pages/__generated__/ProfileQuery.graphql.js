/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProfileQueryVariables = {|
  id?: ?string
|};
export type ProfileQueryResponse = {|
  +user: ?{|
    +id: string,
    +name: ?string,
    +email: ?string,
  |}
|};
export type ProfileQuery = {|
  variables: ProfileQueryVariables,
  response: ProfileQueryResponse,
|};
*/


/*
query ProfileQuery(
  $id: String
) {
  user(id: $id) {
    id
    name
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ed3ceb38c72d41f91bd13430bda30434",
    "id": null,
    "metadata": {},
    "name": "ProfileQuery",
    "operationKind": "query",
    "text": "query ProfileQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    name\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a47f19291a42e8bd8cd677c8be15559a';

module.exports = node;
