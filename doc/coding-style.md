---
title: Coding Style
---
You can find the official libcoap coding style in the file
[CONTRIBUTE](//raw.githubusercontent.com/obgm/libcoap/master/CONTRIBUTE).
The following cites the most important parts:

```
As every FOSS project the libcoap project needs also some rules for coding.
There are loss but the main of them are important!

5.1 License and Copyright
-------------------------
Every new file must contain a license and the copyright holder(s). Please
take a look into existing files and adopt the needed changes to your new
file(s).

5.2 Source Code Indentation
---------------------------
* For better reading the indentation is set to 2 characters as spaces, this
  is depended on the often used nested functions like 'if-else'. Don't use
  TABs any there! Avoid trailing white spaces at the end of a line.
  It's appropriate to set up a modline like this one at first line within
  the source file:

--8<----
/* -*- Mode: C; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
--->8--

* Single lines within the source code should not be longer then 78
  characters.

* If there a functions with a lot of parameters that do not fit into the above
  rule split the declaration (in the *.h) and the implementation (in the *.c)
  into single lines per parameter. For example like this (from src/block.c):

--8<----
int
coap_add_block(coap_pdu_t *pdu,
               unsigned int len,
               const unsigned char *data,
               unsigned int block_num,
               unsigned char block_szx);
--->8--

5.3 Source Code Documentation
-----------------------------
* A useful source code documentation is mandatory. Mostly to be done within the
  source code files, but more complex description should be done in extra
  README files.

* Please set up/adjust the doxygen documentation if you create new functions or
  change existing functions. The doxygen documentation has to be done in the
  header files as they are the public part of the libcoap and only use the
  @-syntax for doxygen commands (akin to javadoc).

5.4 API Changes
---------------
* Never break the API!
  Don't remove old functions and if there some changes are needed in some kind
  always provide a wrapper for the old call to let the library be backward
  compatible and mark the old function as @deprecated in the doxygen comment.
  Please discuss needed changes on the mailing list.

5.5 Patches and Commits
-----------------------
* Git commits must be atomic and contain a declarative subject line (max 50
  characters if possible) and a body for a statement if needed.
  Use the possibility to write a good explanation why your patch/commit is
  handle the changes in the way you have done. Remind that other user can
  read your code but not necessary understand why the code is written this
  way. Don't use something to generic like "bugfix commit".

* A patch/commit or a series of patches/commits have to ensure that the
  whole project is able to build up every thing, in short: Do not break
  any make target and test your work.

* Every patch/commit should handle one single logical change. If more than
  one patch/commit is needed for a change explain it, respect the point
  above. If your subject line become much larger than 50 characters then
  typically your patch is to big for one single commit.

* Commit message should begin with a submodule or unit the commit is for. By
  this your commit message helps to find thematic other changes. If you have
  to search and find something with 'git log | grep [foo]' you will see why
  this is useful. Examples:

    rd.c: Fixed type-specifier warning
    Makefile.am: Added missing src/address.c
    address.[hc]: make coap_address_equals() not inline on POSIX
```
