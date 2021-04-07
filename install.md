---
title: Getting Started
---

libcoap currently is available only as source archive or (preferably)
can be cloned via Git. A debian package is being worked on.

## Get the Code {#code}

Latest development releases are available as package for
[download](https://github.com/obgm/libcoap/archive/develop.zip), or from the
[git repository](https://github.com/obgm/libcoap.git).

There is also a [stable version](https://github.com/obgm/libcoap/archive/main.zip) which can also be cloned from [git](https://github.com/obgm/libcoap.git).

(Note that the former SF repository is outdated.)

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
  provided that [doxygen](http://doxygen.org/), [a2x](http://asciidoc.org/),
  and the [docbook](https://docbook.org/) XML and XSL packages are available.
  This option enables manual page generation and doxygen-based API reference
  generation. Selective override (enable or disable, respectively is possible
  with the following two switches:
    * ```--enable-manpages``` generate manual pages.
    * ```--enable-doxygen``` generate the doxygen-based API reference.
      generation.
* ```--enable-dtls``` enables linking against a DTLS library. By default,
  this option is enabled and will look for GnuTLS version 3.3.0 or higher,
  OpenSSL version 1.1.0 or higher, or tinyDTLS, in that order. The following
  switches allow selecting a specific DTLS library manually:
    * ```--with-gnutls``` select a GnuTLS library.
    * ```--with-openssl``` select an OpenSSL library.
    * ```--with-mbedtls``` select an Mbed TLS library.
    * ```--with-tinydtls``` select tinyDTLS.
* ```--enable-gcov``` enable gcov test coverage support.

### Contiki

An example Contiki application can be found in `examples/contiki`. You
need to run `configure` (possibly preceded by `autogen.sh` when cloned
from git). The example Makefile will clone a the [Contiki
repository](https://github.com/contiki-os/contiki) and create a
symbolic link in Contiki's `apps` directory to the libcoap root
directory where `Makefile.libcoap` is located. After that, a simple
server application is build by `Makefile.contiki`.

There is currently no DTLS support for libcoap with Contiki.

### LwIP

Using libcoap with LwIP requires a hand-crafted Makefile. Please refer
to ```examples/lwip/Makefile``` to see how this is done.

There is currently no DTLS support for libcoap with LwIP.

### TinyOS

The usage of libcoap with TinyOS is documented in the [TinyOS
Wiki](http://tinyos.stanford.edu/tinyos-wiki/index.php/CoAP). Note
that this implements an outdated version of the protocol.

There is no DTLS support for libcoap with TinyOS.
