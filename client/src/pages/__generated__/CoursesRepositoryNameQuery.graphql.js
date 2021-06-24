/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CoursesRepositoryNameQueryVariables = {|
  id?: ?string
|};
export type CoursesRepositoryNameQueryResponse = {|
  +user: ?{|
    +id: string,
    +name: ?string,
    +email: ?string,
    +courses: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +title: ?string,
        |}
      |}>
    |},
  |}
|};
export type CoursesRepositoryNameQuery = {|
  variables: CoursesRepositoryNameQueryVariables,
  response: CoursesRepositoryNameQueryResponse,
|};
*/


/*
query CoursesRepositoryNameQuery(
  $id: String
) {
  user(id: $id) {
    id
    name
    email
    courses {
      edges {
        node {
          id
          title
        }
      }
    }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
      (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CourseConnection",
        "kind": "LinkedField",
        "name": "courses",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CourseEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Course",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "CoursesRepositoryNameQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CoursesRepositoryNameQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f751fffc8b9f5681c5c4e95e594da234",
    "id": null,
    "metadata": {},
    "name": "CoursesRepositoryNameQuery",
    "operationKind": "query",
    "text": "query CoursesRepositoryNameQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    name\n    email\n    courses {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7e7843018295c85103ab84454aa35766';

module.exports = node;
