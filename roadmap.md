---
title: Roadmap
---

This document outlines the overall direction that libcoap is
development is envisioned to go.

## Release 4.3

* Separate public API from internal API, code cleanup ✓
* improve fuzzer tests and unit tests
* [OSCORE](https://tools.ietf.org/html/rfc8613)
  support (will be included in Release 4.3.2)
* [Q-Block](https://tools.ietf.org/html/rfc9177)
  support (will be included in Release 4.3.2)
* [RIOT-OS](https://riot-os.org)
  support (will be included in Release 4.3.2)
* [TinyDTLS](https://projects.eclipse.org/projects/iot.tinydtls)
  support for LwIP (will be included in Release 4.3.2)

### RIOT-OS Support ❌

Work is already in progress to update the libcoap package for
[RIOT-OS](https://www.riot-os.org).

### Examples

* Port the resource directory server to the latest specification ❌
* Equip coap-server example with COMI-aligned Host MIB ❌
* possibly add DTLS support to existing examples for Contiki

### Retransmission Tasks for POSIX (✓)

The lwip and Contiki versions are able to handle retransmissions
automatically.  There is code that does this for POSIX as well, but it
needs more testing and a fallback implementation in case the RT timer
API is not available. This might also imply making the libcoap core
MT-safe.

**Update**: A different approach has been taken for the main loop
management. Applications now can select between APIs that do the
complete work and a set of functions that provide fine-grained access
to the retransmission logic.

## Release 4.2  ✓

* (improved) TLS/DTLS support
    * Pre-shared keys, X.509 certificates
    * new session abstraction
* TCP Transport according to [RFC 8323](https://tools.ietf.org/html/rfc8323)
* improved documentation; manual pages
* changes in internal PDU structure
* improved examples (DTLS usage, block-wise transfer)
* docker images for continuous integration
* support for Google OSS fuzzer
* MS Visual Studio project for Windows builds

## Release 4.1.2 ✓

This is the first release with the new directory structure and complete autotools-support for configuration and build.

* White-space cleanup (patches provided by Carsten) ✓
* partial cleanup of ``coap_config.h``  ✓
* Documentation:
* Fix description in ``README`` and ``INSTALL``  ✓
* Write a guideline how to use and implement the library (with a basic example?) ❌
* Build Environment
* Switch the build environment to fully controlled by the autotools ✓
* Change the library to symbols with versions ✓
* Extended platform support ✓
* Currently tested and working i386, amd64, armel, armhf, OS X ... ? ✓
* Move to [GitHub](https://github.com/obgm/libcoap) ✓
* Continuous Integration using [Travis CI](https://travis-ci.org/obgm/libcoap/)  ✓
