# Dynamics Chat POC

There are 2 folders setup with webpack one with TS (widget-ts) and one without (widget-js)

````
npm start
````

When using ```@babel/plugin-transform-modules-commonjs``` (this is currently a core dependency in another project until some tech debt has been adressed)
in the ```widget-js``` folder an error occurs

````
ReferenceError: exports is not defined at ./node_modules/@microsoft/omnichannel-chat-widget/lib/cjs/index.js
````

This is resolved by removing this ```"type": "module”,```

From package.json for omnichannel-chat-widget and the omnichannel-chat-component libraries

According to [this blog post](https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html) There are
some issues when combing the ```exports``` and ```type``` field