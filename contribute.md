---
title: How to Get Involved
slug: Get Involved
---
<div class="container">
  <div class="row">
    <div class="col-lg-12">
<!--      <h1>How to Get Involved</h1>-->

      <p>You can contribute to libcoap in several ways.</p>
    </div>
  </div>
 
  <div class="row">
    <div class="col-lg-6">
      <h2>Mailing Lists</h2>
      <p>
      You are welcome to subscribe to the libcoap developers'
      mailing list and ask questions, discuss the latest
      features or report bugs.
      </p>
      <p><a class="btn btn-primary btn-lg" href="https://lists.sourceforge.net/lists/listinfo/libcoap-developers"
  role="button">View details &raquo;</a></p>

    <h2>Report Bugs</h2>
    <p>
      If you have encountered bugs or want to request a new feature,
      you can open a new ticket at the libcoap bug tracking tool.
    </p>
    <p><a class="btn btn-primary btn-lg" href="https://github.com/obgm/libcoap/issues"
  role="button">Bug Tracker</a></p>

    <h2>Fix Bugs</h2>
    <p>
      If you encounter bugs in the master tree please include a patch or
      a link to your fork with your bug tracker ticket. You can also
      start a discussion on the
      <a href="https://lists.sourceforge.net/lists/listinfo/libcoap-developers">mailing list</a>.
    </p>
    </div>
    
    <div class="col-lg-6">
      <h2>Write Documentation</h2>
    <p>Howtos, more API documentation
      <br/>
      platform-specific documentation
    </p>
    
    <h3>User Guides</h3>
    <p>
    User guides and howtos are collected
    <a href="{{ "documentation.html" | relative_url }}">here</a>.
    </p>
    <h3>API Reference</h3>
    <p>
      {%- assign api = site.versions | first | prepend: "doc/reference/" | relative_url -%}
      A doxygen-generated API reference is available
      <a href="{{ api }}">here</a>
    </p>
    
    <h3>Cleanup Code</h3>
    <p>
      As the library has evolved while no explicit coding style 
      was published, the code style has become inconsistent and
      cluttered with whitespace here and there. You can help by
      cleaning it up!
    </p>
    <p><a class="btn btn-primary btn-lg" href="{{ "doc/coding-style.html" | relative_url }}" role="button">View details &raquo;</a></p>
    </div>
    
    <div class="col-lg-6">
      <h2>Develop Code</h2>
      <p>
      New features are developed in topic branches and will be
      merged into the develop branch once they are tested and agreed
      to. Please make sure that your contribution adheres to the
      libcoap <a href="{{ "doc/coding-style.html" | relative_url }}">coding
      style</a> and that you
      have read and understood the rules given in the <tt>CONTRIBUTE</tt>
      document of the library.
      </p>
      <h3>Write Tests</h3>
      <p>
      libcoap comes with a set of unit tests to check the core
      functionality. As always, more tests are needed, including
      a port of the ETSI CoAP plugtest specs to the CUnit test
      framework used my libcoap.
      </p>
      <p>
        Moreover, libcoap is part of the <a
        href="https://github.com/google/oss-fuzz">Continuous Fuzzing
        for Open Source Software</a> activity. More fuzzing tests are
        needed (see <a
        href="//github.com/obgm/libcoap/tree/develop/tests/oss-fuzz">tests/oss-fuzz</a>
        in the libcoap repository).
      </p>
      
    <h3>Branching Model</h3>
    <p>
      libcoap follows a branching model presented in
      <a href="//nvie.com/posts/a-successful-git-branching-model/">this post</a>
      by Vincent Driessen. The main branches are the <code>master</code>
      where stable releases go. A release being in preparation
      lives in branch <code>release</code>, while the current development
      branch is <code>develop</code>.
    </p>
      <h3>Roadmap</h3>
      If you want to engage in developing libcoap features, please have a
      look at the <a href="{{ "roadmap.html" | relative_url }}">Roadmap</a>
      document for additional guidance on the bigger plan.
    </div>
  </div>
</div>
