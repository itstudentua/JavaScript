const someString = `Now, before learning anything about React

and even before setting up our development environment,

let's build our very first small React app.

It's a tiny app, but you will already meet many

of the fundamental ingredients

that all React applications are built upon.

So this is gonna be a lot of fun already.

And so let's get started.

And remember how I said that we don't even need

to set up our development environment?

And that's right.

We can actually write our very first React app right here

in basically this online code editor called codesandbox.io.

So right now you can go to codesandbox.io.

And there, they will ask you to try this app for free,

but you can do it even more easily,

which is to open up a new tab

and simply write react.new.

So that's it, react.new. Hit Enter.

And this will then automatically create

a brand-new CodeSandbox for you already

with the React starter template.

Now, by the time you're watching this,

the CodeSandbox app might look a little bit different,

but the idea is probably going to be the same.

So here, on the left side, you'll have some files.

Here's some info about the template

that doesn't really matter.

Then in the middle, you will have a code editor,

where you can open these files.

So just like VS Code.

And on the right, you will have your output

and even your console down here.

So this is, again, just like VS Code.

And in fact,

this whole app is actually really built on VS Code.

And this is actually so helpful

and useful that we will use CodeSandbox a lot of times

throughout this course.

For example, for the coding challenges

that are included in this course.

But anyway, you see here that it has already created a bunch

of folders and files for us.

And let's start by deleting the styles.css.

We're not going to use this.

And we have this index.js and app.js.

And of course, later,

we will learn what all of this code here is and does.

But for now, let's open up simply app.js

and delete everything.

And so with this, we can then start from scratch.

So let's start by building our very first React component,

which is essentially a piece of the user interface.

Again, more about all that later.

So just write function.

And by default,

we call our main component the App component.

And as you see,

a component in React is really just a function.

Now, these functions in React,

so these components, can return something called JSX,

which is a syntax that looks like HTML

and which will basically describe what we can see

on the screen.

So just like HTML.

So let's return a div. Let's close it here.

Then let's, for example, write an h1 here.

Hello World!

So that's the traditional first line of code

that we always write.

And then we also will want a button a bit later.

And here, let's say, "Get advice,"

because we are going to build a very small app,

which will fetch some advice from an API

and will display it over here on the screen.

So let's give this a save.

And you see that it all nicely formats here,

which is because behind the scenes here,

we have the Prettier extension already included

into the starter template here.

And now all we need to do

is to export this function from here because you see

that this index.js file actually imports it here.

So export default, give it a save,

and then let's just manually reload here on the right side.

And after some time, you should then,

yeah, so you should see your "Hello World!" and the button.

Beautiful.

So that's our very first React component.

But of course, nothing happens, for example,

when I click here on this button.

And so let's change that.

And again, what I want to do

is whenever I click on this button,

we want to get a new advice from an API.

So basically, we want to fetch some data from an API

and display it on our user interface.

So let's actually write a new function right in here.

So inside App,

we will write an async function

so that we can use async/await.

And so you should be familiar with this basic JavaScript.

And if not, don't worry.

There is actually a section

that reviews the most essential JavaScript

that you need to know for React.

Now here, I'm missing, of course, the function name.

So let's say getAdvice.

And then here, let's fire off a fetch request.

And here, I'm just going to type out the URL of this API.

So https,

then api.adviceslip.com/advice.

Okay?

Then we can await this promise

and store it inside of some variable.

And again, all of this should be nothing new

for you at this point.

Let's just give ourselves a little bit more space.

But also, as I said, if this is new stuff,

just type out the JavaScript that I'm writing here,

and it all will make sense in that review

of essential JavaScript.

But anyway, let's now basically convert

that response to JSON,

and then let's log it to the console.

All right.

So inside our component,

which again is this App function here.

So inside that component,

we now have this getAdvice function.

But we're not calling it anywhere, right?

So how do we call this function

when we click on this button?

Well, we can specify the onClick attribute here.

So onClick equals

and then just open these curly braces.

And here, we simply write getAdvice.

All right.

Let's maybe reload, just to make sure.

And then let's click.

And, well, we got something. Nice.

So here we have this slip, then slip again,

and then in there we have the advice.

And so here we have some piece of advice:

A problem shared is a problem halved.

So what we're looking for

is actually data.slip.advice, right?

So let's try that again.

Yeah. So now you get this advice directly here.

And all we have to do now is to basically get this string.

So this text here into our user interface.

So we want it to be displayed right here.

So here in this place.

Now, how do we do that?

Well, for that we need a concept called state.

And state is the most fundamental concept of React.

So whenever we need something to change

in the user interface, we change the state.

So we update something that we call state.

So to create a new state,

we need to do it here at the top level in the function,

and we write it like this.

So advice and setAdvice

and then useState.

And we start off with an empty string.

So you see that, automatically,

useState got imported from the React library.

And if, for you, this didn't happen automatically,

then please go ahead and write this line of code here.

All right.

So this useState here is a function in React,

which returns an array.

And so here, we are destructuring that array.

So in the first position of the array,

we have the value of the state that we call advice here.

And the second value is a setter function.

So a function that we can use

to update the piece of state.

Okay?

And so right here, in this getAdvice function,

we can now use this setAdvice function to update the state.

And then whenever this piece of state is updated,

the user interface will also be updated.

So let's call setAdvice right here.

So after we receive the data.

And now all we have to do is

to then use this advice right here in this JSX.

So remember that I said that this is called JSX,

which is basically just like HTML,

but we can add some JavaScript to it as well.

So each time we want some JavaScript,

we can basically enter JavaScript mode

by using these curly braces.

And we already did that down here.

So we have this onClick attribute here.

And then here, we opened JavaScript

and passed in the function.

So this function will then get called

whenever we click this button.

So here, now we can simply place this advice variable.

And then let's see the magic happening.

And it works. Beautiful.

Let's click again. And then we get another one.

Beautiful. So it's already working.

So this is already your first working React application,

already with a piece of state,

which, again, is one of the fundamental aspects of React.

And of course, right now all of this seems really confusing,

but of course, you will understand it

as we go through the course.

So basically, what happens is we click this button here,

and we said here that whenever we click the button,

the getAdvice function should be called.

And so then, indeed, it gets called, it fetches our data,

and then we update the state.

So we update the state by calling setAdvice.

And then whenever we do that, so when we update state,

then this function here, so this whole component,

is executed again,

and then the advice here has been changed.

And therefore, it then changes here on the user interface.

Nice.

So what I want to do next is to display down here some text,

which tells us how many times, basically,

we have clicked this button.

So which tells us how many pieces

of advice we have already read.

So basically, we want a paragraph here,

which says something like, "You have read."

Then here, we can write any HTML.

Like, we can make it strong.

Let's, for now, just use some placeholder value here.

Pieces of advice.

And let's close that here.

But now, of course,

we want to make this number dynamic, right?

And so this is another place where we need some state

because we want this value here to be updated over time.

So we create more state.

So useState again.

And now the initial value should be zero.

And then, again, this returns an array,

which we can immediately destructure into,

for example, count and setCount.

And of course, we can use any names that we want here.

So what we do then here is to also update the count.

So we can use our setCount function.

And then here, I will do something a bit strange.

So we will update now in a different way,

but this doesn't really matter.

So it simply takes the current count and then adds one,

and that will become the new count.

Okay?

And now here, let's replace that placeholder

with the actual count value.

And if we reload now,

then, yeah, it increased.

And it keeps increasing. So that works just fine.

Nice.

Now, maybe you noticed that when we load this

for the first time, we have no advice here at all,

and of course, we start at zero.

So let's change that so that whenever we open up the app

for the first time,

we already are greeted here

with our very first piece of advice.

And we can do that with something called an effect.

So we can use useEffect.

And again, it needs to be imported here.

So make sure that useEffect is up here.

And then into useEffect, we pass a function.

So what do we want to happen here?

Well, basically, exactly the same thing as here.

So we can simply call getAdvice.

Right?

Now, you're seeing

that it's getting completely out of control,

and that's because we have a bug in our code.

So here, we need this empty array.

And as soon as I save this, you see that it stopped.

So useEffect takes two arguments.

First, a function that we want to get executed

at the beginning.

So when this component first gets loaded, basically.

And then a second argument,

which is called the dependency array.

But that doesn't matter for now.

So we will learn all about this later, but for now,

just make sure that you have this empty array here now.

All right?

And if we reload now, you see that very soon

you get this very first advice automatically.

Now, down here, we also get two pieces of advice,

even though it should be only one.

But again, we will worry about that later.

This is just because

of something called strict mode in development.

Now, if we keep clicking,

then, of course, it keeps increasing normally.

But when we load for the first time,

basically, this effect will be executed twice.

And so then this increases two times. Nice.

And this is actually all the functionality

that I wanted already for this little application.

To make it just a little bit more real world,

so to say, let's create a new component

for this message down here.

So in React,

we try to divide user interfaces into components.

And so let's kind of do this already here.

So let's call this component Message.

And notice how it is uppercase here.

So just like App, this one also needs to be uppercase.

That's a convention in React for all components.

So here, all we want to return is basically just this.

So we cut it from here,

and then here, we simply include Message.

Now, you see that we have this error there,

but we will take care of that in a minute.

And so now, we can basically include this component,

so actually, message,

just as if it was another HTML element.

So Message, and then we can close it immediately like this.

But now we have a problem

because here, we are using this count value.

And, well, right now this component has no way of knowing

about the value of this variable.

And so what we need to do is

to pass it right into the component.

So we do that using something called props.

And the prop is basically just like parameters

to a function.

So let's say we wanted to call this prop count,

and then we pass in the count value.

And again, here we are entering this JavaScript mode

by using the curly braces.

And so now here, we can accept that, but not like this.

So it's not like a normal function

where we simply accept count.

Instead, what we accept is an object called props.

And it's on this props object

that count is now a property.

And again, if this sounds too confusing,

well, it is actually pretty simple,

as you will see when we learn this all step by step

and not all at once.

So here, I just want us to have a little bit of fun

and very briefly get

to know all these different ingredients of React.

But you don't need to worry about learning any

of this right now.

Just type the code and have some fun

and, yeah, see the application here coming together.

So now it actually works.

So if we reload, then all these errors will be gone,

and the application is back to working.

So beautiful.

And actually, this is all that I wanted to do

for this small application,

which still already has a lot of the React ingredients

that real-world React applications will have.

So we have state, we have effects, we have props,

we have, of course, JSX here.

We created two components.

And so that's already pretty nice.

So I hope that this was fun

and that you also got this application to work.

And if not, so if for some reason you run into some trouble,

I will attach a link

to this CodeSandbox right onto this Udemy lecture.

And with that being said, after this small introduction,

it's now time to actually set up our system a little bit

and really start learning about what React actually is,

why it exists, and yeah, start learning really React.`;

const splitString = someString.split("\n").join(" ").split(",").join("").split(".").join("").split("!").join("").split("?").join("").split(":").join("").split(";").join("").toLowerCase().split(' '); // remove . , ! ? :

while (splitString.indexOf("") !== -1) {
    splitString.splice(splitString.indexOf(""), 1); // deleting of an empty elements
}

const makeUniq = (arr) => {
    const uniqSet = new Set(arr); // unique list
    return [...uniqSet]; 
}


const newArr = makeUniq(splitString).map( (el) => {
    return {0: el};
})

module.exports.newArr = newArr;