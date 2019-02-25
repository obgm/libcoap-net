---
title: Getting Started
---

libcoap currently is available only as source archive or (preferably)
can be cloned via Git. A debian package is being worked on.

## Get the Code {#code}

Latest development releases are available as package for
[download](https://github.com/obgm/libcoap/archive/develop.zip), or from the
[git repository](https://github.com/obgm/libcoap.git).

There is also a [stable master version](https://github.com/obgm/libcoap/archive/master.zip) which can also be cloned from [git](https://github.com/obgm/libcoap.git).

(Note that the former SF repository is outdated. Please submit bugs
and pull requests on the [github pages for libcoap](https://github.com/obgm/libcoap)).

## Configuration
On platforms where POSIX system calls are available, the installation
follows the usual configure/make cycle as described below.

### Linux, Mac OSX and other POSIX platforms
If you have cloned the sources via git, you need to run
```./autogen.sh``` to generate the build scripts. This step is
optional when a source archive is used.

Next, say ```./configure``` followed by ```make``` and ```make install```.

Besides common GNU options, the configure script provides the following
switches to control the build process:

* ```--enable-tests``` Will build the provided unit tests. This option
requires [cunit](http://cunit.sourceforge.net/) and its header files.
* ```--enable-examples``` Will build the included POSIX examples.
* ```--enable-documentation``` Will generate documentation for libcoap
provided that [doxygen](http://doxygen.org/) or [a2x](http://asciidoc.org/) are available.

### Contiki

If you have cloned the sources via git, you need to run
```./autogen.sh``` to generate the build scripts. This step is
optional when a source archive is used.

Next, say ```./configure --with-contiki``` to prepare the Makefiles
required to build libcoap as Contiki app. To make this work, libcoap
usually is unpacked in the directory ```contiki/apps```.

### LwIP
Using libcoap with LwIP requires a hand-crafted Makefile. Please refer
to ```examples/lwip/Makefile``` to see how this is done.

### TinyOS

The usage of libcoap with TinyOS is documented in the [TinyOS
Wiki](http://tinyos.stanford.edu/tinyos-wiki/index.php/CoAP). Note
that this implements an outdated version of the protocol.
