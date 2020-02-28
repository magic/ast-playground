---
@state {
  "title": "@magic/core concepts",
  "description": [
    "@magic/core conceptual information.",
    "explains the main concepts that make the @magic work."
  ]
}
---

# @magic/core concepts

magic concepts. These are the building blocks of every module in a magic app

<h2 id='modules'>@magic-modules</h2>

modules are the main building block of magic.

a page is a module, a button is a module, a link is a module, an image is a module.
even a theme is a module.

a @magic app contains modules containing modules that contain modules.
this can lead to inception.

## module building blocks

<h3 id='state'>state</h2>

state is a javascript object.
state can be mutated by actions or effects.
every rendering step, the state determines the output of the views


<h2 id='actions'>actions</h2>

actions are an object containing functions

those functions get the state and their props and may return a new full, but changed, state.

<h2 id='effects'>effects</h2>

effects are an object containing functions, just like actions.

they behave like actions, get a state and props and may return a new full, but changed, state.',

the big difference?

effects may be impure and trigger sideeffects outside of hyperapp.

<h2 id='views'>views</h2>

views render the state to html
whenever an action triggers a change in the state, this then triggers a view change.


<h2 id='styles'>styles</h2>

every module can have a style object attached to it.
magic will automagically merge all styles into one global css file.
in the future, it will also remove unused styles for you.

style merge order from lowest to highest, last overwrites first:
module.style < page.style < app.style < theme.style

<h3 id='styles-magic-css'>@magic/css</h3>

internally, magic uses it's own css-in-js library.

to find out more, click the following link:
[@magic/css](https://magic.github.io/css/)


<h2 id='globals'>global</h2>

every module can set a global object, containing state and action properties.

every state and/or action name in the global object with a value that equals true gets merged into the main app state/actions.

<h2 id='lambdas'>server lambdas</h2>

this is the serverside magic.
you can define functions that get transpiled into serverside lambdas.
server side lambdas will be available for GET and/or POST requests.

the server side function signature is (req, res) => {},
as it is in most nodejs http servers,
with the addition of req.body being async => awaited before execution of the lambda.