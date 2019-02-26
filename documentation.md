---
title: Documentation
---

We are trying to improve the libcoap documentation but this will take
time. Meanwhile, you can [contribute](contribute.html) if you like.

## Quick Start

A short quick start guide to get you up to speed fast.

<a class="btn btn-primary btn-lg" href="install.html" role="button">View details</a>

## Reference

The doxygen-generated documentation for various versions
of the application programming interface:

<div class="btn-group" role="group" aria-label="API">
  <button type="button" class="btn btn-primary">API Reference</button>
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
        {%- for ref in site.versions -%}
      <a class="dropdown-item" href="{{ ref | prepend: "doc/reference/" | relative_url }} ">Version {{ ref }}</a>
        {% endfor -%}
    </div>
  </div>
</div>
<br>

## Minimal Code Example

The GitHub project
[libcoap-minimal](//github.com/obgm/libcoap-minimal) provides a
minimal client and server example in C++.
