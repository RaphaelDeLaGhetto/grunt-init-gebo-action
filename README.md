grunt-init-gebo-action
======================

A grunt-init template that creates a blank gebo action plugin

## Getting Started

### Setup the database

Install MongoDB on your system, if you haven't already:

* [http://docs.mongodb.org/manual/installation/](http://docs.mongodb.org/manual/installation/)

Start MongoDB by executing this at the command line:

```
$ sudo service mongodb start
```

These instructions are also outlined in your new gebo's
[README.md](https://github.com/RaphaelDeLaGhetto/grunt-init-gebo-action/blob/master/root/README.md).

### Setup grunt
if you haven't already, that is... gebo currently depends on Grunt 0.4.1. This requires a bit of prep work.

```
$ sudo npm install grunt-cli -g
$ sudo npm install grunt-init -g
```

The first command enables you to run the grunt installed locally, automatically. The second allows you to call grunt-init on this template.

### Next, install the template

This is going in your `~/.grunt-init/` directory

```
$ git clone https://github.com/RaphaelDeLaGhetto/grunt-init-gebo-action.git ~/.grunt-init/gebo-action
```

### Create a new project:

```
$ mkdir mynewproject
$ cd mynewproject
$ grunt-init gebo-action
$ sudo npm install
```

### Test

```
$ grunt nodeunit 
```

## Contributing

Hit me with it.

## License

MIT
