---
layout: home
---

<!--
<div class="alert alert-dismissible alert-success">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<a href="//github.com/obgm/libcoap/releases/tag/v4.3.0" class="alert-link">Version 4.3</a> is out! <strong>Try now!</strong>
 </div>
 -->

<div class="jumbotron">

  <h1>C-Implementation of CoAP</h1>

  <p class="lead"><a href="//github.com/obgm/libcoap">libcoap</a> implements a lightweight
  application-protocol for devices that are constrained their
  resources such as computing power, RF range, memory, bandwith, or
  network packet sizes.</p>

  <hr class="my-4">

  <p>The Constrained Application Protocol (CoAP) was standardized in the
  <a href="//ietf.org">Internet Engineering Task Force (IETF)</a> as <a
  href="//tools.ietf.org/html/rfc7252">RFC 7252</a>.</p>

  <p><a class="btn btn-primary btn-lg" href="http://coap.technology/"
  role="button">Learn more</a></p>
</div>

<hr class="my-4">

  <div class="row">
    <div class="col-lg-6">
      <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">Operating System</div>
        <div class="card-body">
          <h4 class="card-title">Multi-platform</h4>
          <p class="card-text">libcoap is designed to run on embedded devices as well as high-end
          computer systems with POSIX OS. Thus, you can develop and test your
          CoAP applications on your laptop and then move it to your target
          platform easily.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">Testing</div>
        <div class="card-body">
          <h4 class="card-title">Interoperability</h4>
          <p class="card-text">libcoap has successfully participated in several ETSI IoT CoAP
          plugtests and is in daily use by various IOT projects in industry and
          academia. Tools to test against can also be found at
          <a href="http://coap.technology/">coap.technology</a>.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-6">
      <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">Features</div>
        <div class="card-body">
          <h4 class="card-title">CoAP-Extensions</h4>
          <p class="card-text">The library provides the core functionality for development of
          resource-efficient CoAP servers and clients, including
          <a href="//tools.ietf.org/html/rfc7641">resource observation</a>,
          <a href="//tools.ietf.org/html/rfc7959">block-wise transfer</a>,
          <a href="//tools.ietf.org/html/rfc8132">FETCH/PATCH</a>,
          <a href="https://tools.ietf.org/html/rfc7967">No-Response</a>,
          <a href="https://tools.ietf.org/html/rfc8323">TCP</a>, and
          <a href="//tools.ietf.org/html/rfc8768">Hop-Limit</a>.
          Example
          implementations show how these features can be used in applications.
          </p>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">Tools</div>
        <div class="card-body">
          <h4 class="card-title">Code Examples</h4>
          <p class="card-text"><code>coap-client</code> is a
          <a href="//www.gnu.org/software/wget/wget.html">wget</a>-like
          tool to
          generate simple requests for retrieval and modification of resources
          on a remote server. <code>coap-server</code> is a basic server application that
          illustrates various server-side features of libcoap, while <code>coap-rd</code>
          implements a simple <a href="//tools.ietf.org/html/draft-ietf-core-resource-directory">CoAP
          Resource Directory</a>.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-6">
      <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">Security</div>
        <div class="card-body">
          <h4 class="card-title">TLS-Support</h4>
          <p class="card-text">The library is designed to support transport
          layer security utilizing frameworks such as <a href="//gnutls.org">GnuTLS</a>,
          <a href="//openssl.org">OpenSSL</a>, <a href="//tls.mbed.org">Mbed TLS</a>, or
          <a href="//www.eclipse.org/tinydtls">tinydtls</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
