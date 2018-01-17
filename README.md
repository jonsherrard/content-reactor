# Content Reactor

ContentReactor is a Firebase powered component that allows you to create reaction widgets against any type of content.

Pass in a unique reference ID, your Firebase IDs, and array of components that will increment when clicked, and decrement when unclicked.

The users current selection is stored as a cookie against the ID, so if they revist from same browser the selection will remain.

## Usage

```js

import React, { Fragment } from 'react'
import ContentReactor from 'content-reactor'

var firebaseAppConfig = { /* Copy from the Firebase console */
  apiKey: "unreadablestuff",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: "123123123123"
}

const Clapper = ({active, count}) =>
  <Fragment>
    {active ? <bold> : null}
    👏 <span>{count}</span>
    {active ? </bold> : null}
  </Fragment>

// currentURL: /posts/2018/01/01/my-fresh-hot-content/12383

const Article = ({postData, routeParams}) =>
  <Fragment>
    <h1>{postData.title}</h1>
    <p>{postData.body}</h1>
    <ContentReactor
      firebaseAppConfig={firebaseAppConfig} 
      contentIdentifier={routeParams.id}
    >
      <Clapper  />
    </ContentReactor>
  </Fragment>

```

