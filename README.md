# setup vendri utility

The intent is to create a useful user interface to deal with vendri 
setup objects.  By extension this could deal with a any number of 
javascript objects.

## what it does
The server is called for a copy of the text of the config.json

The the response from the server is parsed into an object that JavaScript
can work with, allowing the code to explore what's there.

