{%= name %}
================

{%= description %}

## Setup

### your database (MongoDB)

Install MongoDB on your system, if you haven't already:

* [http://docs.mongodb.org/manual/installation/](http://docs.mongodb.org/manual/installation/)

Start MongoDB by executing this at the command line:

```
$ sudo service mongodb start
```

### your actions module 

First, install your npm modules:

```
$ sudo npm install
```

## Test 

```
$ grunt nodeunit
```

## License

Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
{%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
