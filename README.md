# setup vendri utility

The intent is to create a useful user interface to deal with vendri 
setup objects.  By extension this could deal with a any number of 
javascript objects.

## what it does
The server is called for a copy of the text of the config.json

The the response from the server is parsed into an object that JavaScript
can work with, allowing the code to explore what's there.

In the console only, for now, is a demo of destructuring the vendri setup 
object via the ES6 ({n}) method.

There is a superclass that gets extended for the specifics of these vendri
type objects.  

## Todo
get a graphical interface.
demo maps, features, and reduce using the vendri object.
demo use of the => notation for anonymous objects i.e.
```javascript
const face_enabled = cards.map( ( ( x )=>{
    switch( x.value ){
        case 1:
            x.value = 'A';
            break;
        case 10:
            x.value = 'J';
            break;
        case 11:
            x.value = 'Q';
            break;
        case 12:
            x.value = 'K';
            break;
        default:
            // shouldn't be here!
            break;
    }
    return { suit: x.suit, value: x.value };
} ) );
```