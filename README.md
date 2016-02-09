# Go to File - Chrome


Go to File - Chrome is an extension that enables one to right click on any element in chrome and directly go
to the source file which is responsible for the code of that element.

## Use Case

This is a plugin that enables you to go directly from chrome to the right file
in your editor (atom right now!).

Imagine you are working on a web application that has many pages and hence you have
organized your code into many files. Assume that you want to edit your login form.
Run your application, Connect chrome and atom (shown below), navigate
to login section, right click on the appropriate element, Go To File - should open
the right file responsible for the code for that element. This provides a more visual way
to jump between sections of your application.

## Setup

Firstly, you need to add this babel plugin [babel-plugin-transform-jsx-include-source](https://github.com/ganarajpr/babel-plugin-transform-jsx-include-source). The link has the instructions of how to add it and setup the `.babelrc`.

Once this is setup, please ensure that the final rendered html (most elements)
 has a `data-source` property by Inspecting elements.

Now install this [Chrome Plugin](https://chrome.google.com/webstore/detail/gotofile/dailfineomdkebihodfameiejgbnglil) and this [Atom Plugin] (https://atom.io/packages/gotofile-atom). The Atom plugin can also be installed as `apm install gotofile-atom`. ( You might need to install Shell Commands from atom before using the shell command.)

Once all the plugins are installed, open the project folder from Atom ( assuming this is your editor, it should
  already be open). Now, start the `Go to File` server by activating it through the menu / context-menu (see screenshot).



## Road map
- [x] - ~~Communicate between content script and background script~~
- [x] - ~~Handle context menu~~
- [x] - ~~Connect to socket server and send data.~~
- [x] - ~~Conditionally enable context menu if able to connect to socket server.~~
- [x] - ~~Read `data-*` from the current selected element.~~
- [x] - ~~Read data from all parents of current selected element.~~
- [ ] - Allow configuration of server port (Optional)


## Licence

Go to File - Chrome is released under the [MIT License](http://www.opensource.org/licenses/MIT).
