/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "libcoap", "index.html", [
    [ "Modules", "modules.html", "modules" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Manual Pages", "manpage.html", [
      [ "Man Pages Summary", "man_summary.html", [
        [ "coap(7) - Overview of the libcoap library", "man_coap.html", null ],
        [ "coap_address(3) - Work with CoAP Socket Address Types", "man_coap_address.html", null ],
        [ "coap_async(3) - Work with CoAP async support", "man_coap_async.html", null ],
        [ "coap_attribute(3) - Work with CoAP attributes", "man_coap_attribute.html", null ],
        [ "coap_block(3) - Work with CoAP Blocks", "man_coap_block.html", null ],
        [ "coap_cache(3) - Work with CoAP cache functions", "man_coap_cache.html", null ],
        [ "coap_context(3) - Work with CoAP contexts", "man_coap_context.html", null ],
        [ "coap_deprecated(3) - Work with CoAP deprecated functions", "man_coap_deprecated.html", null ],
        [ "coap_encryption(3) - Work with CoAP TLS/DTLS", "man_coap_encryption.html", null ],
        [ "coap_endpoint_client(3) - Work with CoAP client endpoints", "man_coap_endpoint_client.html", null ],
        [ "coap_endpoint_server(3) - Work with CoAP server endpoints", "man_coap_endpoint_server.html", null ],
        [ "coap_handler(3) - Work with CoAP handlers", "man_coap_handler.html", null ],
        [ "coap_init(3) - Work with CoAP initialization", "man_coap_init.html", null ],
        [ "coap_io(3) - Work with CoAP I/O to do the packet send and receives", "man_coap_io.html", null ],
        [ "coap_keepalive(3) - Work with CoAP keepalive", "man_coap_keepalive.html", null ],
        [ "coap_logging(3) - Work with CoAP logging", "man_coap_logging.html", null ],
        [ "coap_lwip(3) - Work with CoAP lwip specific API handler", "man_coap_lwip.html", null ],
        [ "coap_observe(3) - Work with CoAP observe", "man_coap_observe.html", null ],
        [ "coap_oscore(3) - Work with CoAP OSCORE", "man_coap_oscore.html", null ],
        [ "coap_pdu_access(3) - Accessing CoAP PDUs", "man_coap_pdu_access.html", null ],
        [ "coap_pdu_setup(3) - Setting up CoAP PDUs", "man_coap_pdu_setup.html", null ],
        [ "coap_persist(3) - Work with CoAP persist support", "man_coap_persist.html", null ],
        [ "coap_recovery(3) - Work with CoAP packet transmissions", "man_coap_recovery.html", null ],
        [ "coap_resource(3) - Work with CoAP resources", "man_coap_resource.html", null ],
        [ "coap_session(3) - Work with CoAP sessions", "man_coap_session.html", null ],
        [ "coap_string(3) - Work with CoAP string functions", "man_coap_string.html", null ],
        [ "coap_tls_library(3) - Work with CoAP TLS libraries", "man_coap_tls_library.html", null ],
        [ "coap_uri(3) - Work with CoAP URIs", "man_coap_uri.html", null ],
        [ "coap_websockets(3) - Work with CoAP WebSockets", "man_coap_websockets.html", null ],
        [ "coap-client(5) - CoAP Client based on libcoap", "man_coap-client.html", null ],
        [ "coap-oscore-conf(5) - CoAP OSCORE configuration file format", "man_coap-oscore-conf.html", null ],
        [ "coap-rd(5) - CoAP Resource Directory based on libcoap", "man_coap-rd.html", null ],
        [ "coap-server(5) - CoAP Server based on libcoap", "man_coap-server.html", null ]
      ] ],
      [ "Individual Man Pages", "man_individual.html", [
        [ "coap_add_attr(3)", "man_coap_add_attr.html", null ],
        [ "coap_add_data(3)", "man_coap_add_data.html", null ],
        [ "coap_add_data_blocked_response(3)", "man_coap_add_data_blocked_response.html", null ],
        [ "coap_add_data_large_request(3)", "man_coap_add_data_large_request.html", null ],
        [ "coap_add_data_large_response(3)", "man_coap_add_data_large_response.html", null ],
        [ "coap_add_option(3)", "man_coap_add_option.html", null ],
        [ "coap_add_optlist_pdu(3)", "man_coap_add_optlist_pdu.html", null ],
        [ "coap_add_resource(3)", "man_coap_add_resource.html", null ],
        [ "coap_add_token(3)", "man_coap_add_token.html", null ],
        [ "coap_address_copy(3)", "man_coap_address_copy.html", null ],
        [ "coap_address_equals(3)", "man_coap_address_equals.html", null ],
        [ "coap_address_get_port(3)", "man_coap_address_get_port.html", null ],
        [ "coap_address_init(3)", "man_coap_address_init.html", null ],
        [ "coap_address_set_port(3)", "man_coap_address_set_port.html", null ],
        [ "coap_address_set_unix_domain(3)", "man_coap_address_set_unix_domain.html", null ],
        [ "coap_address_t(3)", "man_coap_address_t.html", null ],
        [ "coap_async_get_app_data(3)", "man_coap_async_get_app_data.html", null ],
        [ "coap_async_is_supported(3)", "man_coap_async_is_supported.html", null ],
        [ "coap_async_set_app_data(3)", "man_coap_async_set_app_data.html", null ],
        [ "coap_async_set_delay(3)", "man_coap_async_set_delay.html", null ],
        [ "coap_async_trigger(3)", "man_coap_async_trigger.html", null ],
        [ "coap_attr_get_value(3)", "man_coap_attr_get_value.html", null ],
        [ "coap_binary_equal(3)", "man_coap_binary_equal.html", null ],
        [ "coap_block_build_body(3)", "man_coap_block_build_body.html", null ],
        [ "coap_cache_derive_key(3)", "man_coap_cache_derive_key.html", null ],
        [ "coap_cache_derive_key_w_ignore(3)", "man_coap_cache_derive_key_w_ignore.html", null ],
        [ "coap_cache_get_app_data(3)", "man_coap_cache_get_app_data.html", null ],
        [ "coap_cache_get_by_key(3)", "man_coap_cache_get_by_key.html", null ],
        [ "coap_cache_get_by_pdu(3)", "man_coap_cache_get_by_pdu.html", null ],
        [ "coap_cache_get_pdu(3)", "man_coap_cache_get_pdu.html", null ],
        [ "coap_cache_ignore_options(3)", "man_coap_cache_ignore_options.html", null ],
        [ "coap_cache_set_app_data(3)", "man_coap_cache_set_app_data.html", null ],
        [ "coap_can_exit(3)", "man_coap_can_exit.html", null ],
        [ "coap_cancel_observe(3)", "man_coap_cancel_observe.html", null ],
        [ "coap_check_option(3)", "man_coap_check_option.html", null ],
        [ "coap_cleanup(3)", "man_coap_cleanup.html", null ],
        [ "coap_clear_event_handler(3)", "man_coap_clear_event_handler.html", null ],
        [ "coap_clone_uri(3)", "man_coap_clone_uri.html", null ],
        [ "coap_context_get_coap_fd(3)", "man_coap_context_get_coap_fd.html", null ],
        [ "coap_context_get_csm_timeout(3)", "man_coap_context_get_csm_timeout.html", null ],
        [ "coap_context_get_max_handshake_sessions(3)", "man_coap_context_get_max_handshake_sessions.html", null ],
        [ "coap_context_get_max_idle_sessions(3)", "man_coap_context_get_max_idle_sessions.html", null ],
        [ "coap_context_get_session_timeout(3)", "man_coap_context_get_session_timeout.html", null ],
        [ "coap_context_oscore_server(3)", "man_coap_context_oscore_server.html", null ],
        [ "coap_context_set_block_mode(3)", "man_coap_context_set_block_mode.html", null ],
        [ "coap_context_set_csm_timeout(3)", "man_coap_context_set_csm_timeout.html", null ],
        [ "coap_context_set_keepalive(3)", "man_coap_context_set_keepalive.html", null ],
        [ "coap_context_set_max_handshake_sessions(3)", "man_coap_context_set_max_handshake_sessions.html", null ],
        [ "coap_context_set_max_idle_sessions(3)", "man_coap_context_set_max_idle_sessions.html", null ],
        [ "coap_context_set_max_token_size(3)", "man_coap_context_set_max_token_size.html", null ],
        [ "coap_context_set_pki(3)", "man_coap_context_set_pki.html", null ],
        [ "coap_context_set_pki_root_cas(3)", "man_coap_context_set_pki_root_cas.html", null ],
        [ "coap_context_set_psk(3)", "man_coap_context_set_psk.html", null ],
        [ "coap_context_set_psk2(3)", "man_coap_context_set_psk2.html", null ],
        [ "coap_context_set_session_timeout(3)", "man_coap_context_set_session_timeout.html", null ],
        [ "coap_debug_set_packet_loss(3)", "man_coap_debug_set_packet_loss.html", null ],
        [ "coap_decode_var_bytes(3)", "man_coap_decode_var_bytes.html", null ],
        [ "coap_decode_var_bytes8(3)", "man_coap_decode_var_bytes8.html", null ],
        [ "coap_delete_bin_const(3)", "man_coap_delete_bin_const.html", null ],
        [ "coap_delete_binary(3)", "man_coap_delete_binary.html", null ],
        [ "coap_delete_cache_entry(3)", "man_coap_delete_cache_entry.html", null ],
        [ "coap_delete_cache_key(3)", "man_coap_delete_cache_key.html", null ],
        [ "coap_delete_optlist(3)", "man_coap_delete_optlist.html", null ],
        [ "coap_delete_oscore_conf(3)", "man_coap_delete_oscore_conf.html", null ],
        [ "coap_delete_oscore_recipient(3)", "man_coap_delete_oscore_recipient.html", null ],
        [ "coap_delete_resource(3)", "man_coap_delete_resource.html", null ],
        [ "coap_delete_str_const(3)", "man_coap_delete_str_const.html", null ],
        [ "coap_delete_string(3)", "man_coap_delete_string.html", null ],
        [ "coap_delete_uri(3)", "man_coap_delete_uri.html", null ],
        [ "coap_dtls_cpsk_t(3)", "man_coap_dtls_cpsk_t.html", null ],
        [ "coap_dtls_get_log_level(3)", "man_coap_dtls_get_log_level.html", null ],
        [ "coap_dtls_is_supported(3)", "man_coap_dtls_is_supported.html", null ],
        [ "coap_dtls_log(3)", "man_coap_dtls_log.html", null ],
        [ "coap_dtls_pkcs11_is_supported(3)", "man_coap_dtls_pkcs11_is_supported.html", null ],
        [ "coap_dtls_pki_is_supported(3)", "man_coap_dtls_pki_is_supported.html", null ],
        [ "coap_dtls_pki_t(3)", "man_coap_dtls_pki_t.html", null ],
        [ "coap_dtls_psk_is_supported(3)", "man_coap_dtls_psk_is_supported.html", null ],
        [ "coap_dtls_rpk_is_supported(3)", "man_coap_dtls_rpk_is_supported.html", null ],
        [ "coap_dtls_set_log_level(3)", "man_coap_dtls_set_log_level.html", null ],
        [ "coap_dtls_spsk_t(3)", "man_coap_dtls_spsk_t.html", null ],
        [ "coap_encode_var_bytes(3)", "man_coap_encode_var_bytes.html", null ],
        [ "coap_encode_var_safe(3)", "man_coap_encode_var_safe.html", null ],
        [ "coap_encode_var_safe8(3)", "man_coap_encode_var_safe8.html", null ],
        [ "coap_endpoint_set_default_mtu(3)", "man_coap_endpoint_set_default_mtu.html", null ],
        [ "coap_endpoint_str(3)", "man_coap_endpoint_str.html", null ],
        [ "coap_find_async(3)", "man_coap_find_async.html", null ],
        [ "coap_find_attr(3)", "man_coap_find_attr.html", null ],
        [ "coap_free_address_info(3)", "man_coap_free_address_info.html", null ],
        [ "coap_free_async(3)", "man_coap_free_async.html", null ],
        [ "coap_free_context(3)", "man_coap_free_context.html", null ],
        [ "coap_free_endpoint(3)", "man_coap_free_endpoint.html", null ],
        [ "coap_get_available_scheme_hint_bits(3)", "man_coap_get_available_scheme_hint_bits.html", null ],
        [ "coap_get_data(3)", "man_coap_get_data.html", null ],
        [ "coap_get_data_large(3)", "man_coap_get_data_large.html", null ],
        [ "coap_get_log_level(3)", "man_coap_get_log_level.html", null ],
        [ "coap_get_tls_library_version(3)", "man_coap_get_tls_library_version.html", null ],
        [ "coap_get_uri_path(3)", "man_coap_get_uri_path.html", null ],
        [ "coap_host_is_unix_domain(3)", "man_coap_host_is_unix_domain.html", null ],
        [ "coap_insert_optlist(3)", "man_coap_insert_optlist.html", null ],
        [ "coap_io_do_epoll(3)", "man_coap_io_do_epoll.html", null ],
        [ "coap_io_do_io(3)", "man_coap_io_do_io.html", null ],
        [ "coap_io_pending(3)", "man_coap_io_pending.html", null ],
        [ "coap_io_prepare_epoll(3)", "man_coap_io_prepare_epoll.html", null ],
        [ "coap_io_prepare_io(3)", "man_coap_io_prepare_io.html", null ],
        [ "coap_io_process(3)", "man_coap_io_process.html", null ],
        [ "coap_io_process_with_fds(3)", "man_coap_io_process_with_fds.html", null ],
        [ "coap_is_af_unix(3)", "man_coap_is_af_unix.html", null ],
        [ "coap_is_bcast(3)", "man_coap_is_bcast.html", null ],
        [ "coap_is_mcast(3)", "man_coap_is_mcast.html", null ],
        [ "coap_join_mcast_group_intf(3)", "man_coap_join_mcast_group_intf.html", null ],
        [ "coap_log(3)", "man_coap_log.html", null ],
        [ "coap_log_alert(3)", "man_coap_log_alert.html", null ],
        [ "coap_log_crit(3)", "man_coap_log_crit.html", null ],
        [ "coap_log_debug(3)", "man_coap_log_debug.html", null ],
        [ "coap_log_emerg(3)", "man_coap_log_emerg.html", null ],
        [ "coap_log_err(3)", "man_coap_log_err.html", null ],
        [ "coap_log_info(3)", "man_coap_log_info.html", null ],
        [ "coap_log_notice(3)", "man_coap_log_notice.html", null ],
        [ "coap_log_oscore(3)", "man_coap_log_oscore.html", null ],
        [ "coap_log_warn(3)", "man_coap_log_warn.html", null ],
        [ "coap_lwip_dump_memory_pools(3)", "man_coap_lwip_dump_memory_pools.html", null ],
        [ "coap_lwip_set_input_wait_handler(3)", "man_coap_lwip_set_input_wait_handler.html", null ],
        [ "coap_make_str_const(3)", "man_coap_make_str_const.html", null ],
        [ "coap_mcast_per_resource(3)", "man_coap_mcast_per_resource.html", null ],
        [ "coap_new_bin_const(3)", "man_coap_new_bin_const.html", null ],
        [ "coap_new_binary(3)", "man_coap_new_binary.html", null ],
        [ "coap_new_cache_entry(3)", "man_coap_new_cache_entry.html", null ],
        [ "coap_new_client_session(3)", "man_coap_new_client_session.html", null ],
        [ "coap_new_client_session_oscore(3)", "man_coap_new_client_session_oscore.html", null ],
        [ "coap_new_client_session_oscore_pki(3)", "man_coap_new_client_session_oscore_pki.html", null ],
        [ "coap_new_client_session_oscore_psk(3)", "man_coap_new_client_session_oscore_psk.html", null ],
        [ "coap_new_client_session_pki(3)", "man_coap_new_client_session_pki.html", null ],
        [ "coap_new_client_session_psk(3)", "man_coap_new_client_session_psk.html", null ],
        [ "coap_new_client_session_psk2(3)", "man_coap_new_client_session_psk2.html", null ],
        [ "coap_new_context(3)", "man_coap_new_context.html", null ],
        [ "coap_new_endpoint(3)", "man_coap_new_endpoint.html", null ],
        [ "coap_new_message_id(3)", "man_coap_new_message_id.html", null ],
        [ "coap_new_optlist(3)", "man_coap_new_optlist.html", null ],
        [ "coap_new_oscore_conf(3)", "man_coap_new_oscore_conf.html", null ],
        [ "coap_new_oscore_recipient(3)", "man_coap_new_oscore_recipient.html", null ],
        [ "coap_new_pdu(3)", "man_coap_new_pdu.html", null ],
        [ "coap_new_str_const(3)", "man_coap_new_str_const.html", null ],
        [ "coap_new_string(3)", "man_coap_new_string.html", null ],
        [ "coap_new_uri(3)", "man_coap_new_uri.html", null ],
        [ "coap_opt_length(3)", "man_coap_opt_length.html", null ],
        [ "coap_opt_value(3)", "man_coap_opt_value.html", null ],
        [ "coap_option_clrb(3)", "man_coap_option_clrb.html", null ],
        [ "coap_option_filter_clear(3)", "man_coap_option_filter_clear.html", null ],
        [ "coap_option_filter_get(3)", "man_coap_option_filter_get.html", null ],
        [ "coap_option_filter_set(3)", "man_coap_option_filter_set.html", null ],
        [ "coap_option_filter_unset(3)", "man_coap_option_filter_unset.html", null ],
        [ "coap_option_getb(3)", "man_coap_option_getb.html", null ],
        [ "coap_option_iterator_init(3)", "man_coap_option_iterator_init.html", null ],
        [ "coap_option_next(3)", "man_coap_option_next.html", null ],
        [ "coap_option_setb(3)", "man_coap_option_setb.html", null ],
        [ "coap_oscore_is_supported(3)", "man_coap_oscore_is_supported.html", null ],
        [ "coap_package_build(3)", "man_coap_package_build.html", null ],
        [ "coap_package_name(3)", "man_coap_package_name.html", null ],
        [ "coap_package_version(3)", "man_coap_package_version.html", null ],
        [ "coap_pdu_get_code(3)", "man_coap_pdu_get_code.html", null ],
        [ "coap_pdu_get_mid(3)", "man_coap_pdu_get_mid.html", null ],
        [ "coap_pdu_get_token(3)", "man_coap_pdu_get_token.html", null ],
        [ "coap_pdu_get_type(3)", "man_coap_pdu_get_type.html", null ],
        [ "coap_pdu_init(3)", "man_coap_pdu_init.html", null ],
        [ "coap_pdu_set_code(3)", "man_coap_pdu_set_code.html", null ],
        [ "coap_pdu_set_mid(3)", "man_coap_pdu_set_mid.html", null ],
        [ "coap_pdu_set_type(3)", "man_coap_pdu_set_type.html", null ],
        [ "coap_persist_observe_add(3)", "man_coap_persist_observe_add.html", null ],
        [ "coap_persist_set_observe_num(3)", "man_coap_persist_set_observe_num.html", null ],
        [ "coap_persist_startup(3)", "man_coap_persist_startup.html", null ],
        [ "coap_persist_stop(3)", "man_coap_persist_stop.html", null ],
        [ "coap_persist_track_funcs(3)", "man_coap_persist_track_funcs.html", null ],
        [ "coap_print_addr(3)", "man_coap_print_addr.html", null ],
        [ "coap_print_ip_addr(3)", "man_coap_print_ip_addr.html", null ],
        [ "coap_q_block_is_supported(3)", "man_coap_q_block_is_supported.html", null ],
        [ "coap_read(3)", "man_coap_read.html", null ],
        [ "coap_register_async(3)", "man_coap_register_async.html", null ],
        [ "coap_register_event_handler(3)", "man_coap_register_event_handler.html", null ],
        [ "coap_register_handler(3)", "man_coap_register_handler.html", null ],
        [ "coap_register_nack_handler(3)", "man_coap_register_nack_handler.html", null ],
        [ "coap_register_ping_handler(3)", "man_coap_register_ping_handler.html", null ],
        [ "coap_register_pong_handler(3)", "man_coap_register_pong_handler.html", null ],
        [ "coap_register_request_handler(3)", "man_coap_register_request_handler.html", null ],
        [ "coap_register_response_handler(3)", "man_coap_register_response_handler.html", null ],
        [ "coap_resize_binary(3)", "man_coap_resize_binary.html", null ],
        [ "coap_resolve_address_info(3)", "man_coap_resolve_address_info.html", null ],
        [ "coap_resource_get_uri_path(3)", "man_coap_resource_get_uri_path.html", null ],
        [ "coap_resource_get_userdata(3)", "man_coap_resource_get_userdata.html", null ],
        [ "coap_resource_init(3)", "man_coap_resource_init.html", null ],
        [ "coap_resource_notify_observers(3)", "man_coap_resource_notify_observers.html", null ],
        [ "coap_resource_proxy_uri_init(3)", "man_coap_resource_proxy_uri_init.html", null ],
        [ "coap_resource_proxy_uri_init2(3)", "man_coap_resource_proxy_uri_init2.html", null ],
        [ "coap_resource_release_userdata_handler(3)", "man_coap_resource_release_userdata_handler.html", null ],
        [ "coap_resource_set_dirty(3)", "man_coap_resource_set_dirty.html", null ],
        [ "coap_resource_set_get_observable(3)", "man_coap_resource_set_get_observable.html", null ],
        [ "coap_resource_set_mode(3)", "man_coap_resource_set_mode.html", null ],
        [ "coap_resource_set_userdata(3)", "man_coap_resource_set_userdata.html", null ],
        [ "coap_resource_unknown_init(3)", "man_coap_resource_unknown_init.html", null ],
        [ "coap_resource_unknown_init2(3)", "man_coap_resource_unknown_init2.html", null ],
        [ "coap_run_once(3)", "man_coap_run_once.html", null ],
        [ "coap_send(3)", "man_coap_send.html", null ],
        [ "coap_session_disconnected(3)", "man_coap_session_disconnected.html", null ],
        [ "coap_session_get_ack_random_factor(3)", "man_coap_session_get_ack_random_factor.html", null ],
        [ "coap_session_get_ack_timeout(3)", "man_coap_session_get_ack_timeout.html", null ],
        [ "coap_session_get_addr_local(3)", "man_coap_session_get_addr_local.html", null ],
        [ "coap_session_get_addr_mcast(3)", "man_coap_session_get_addr_mcast.html", null ],
        [ "coap_session_get_addr_remote(3)", "man_coap_session_get_addr_remote.html", null ],
        [ "coap_session_get_app_data(3)", "man_coap_session_get_app_data.html", null ],
        [ "coap_session_get_context(3)", "man_coap_session_get_context.html", null ],
        [ "coap_session_get_default_leisure(3)", "man_coap_session_get_default_leisure.html", null ],
        [ "coap_session_get_ifindex(3)", "man_coap_session_get_ifindex.html", null ],
        [ "coap_session_get_max_payloads(3)", "man_coap_session_get_max_payloads.html", null ],
        [ "coap_session_get_max_retransmit(3)", "man_coap_session_get_max_retransmit.html", null ],
        [ "coap_session_get_non_max_retransmit(3)", "man_coap_session_get_non_max_retransmit.html", null ],
        [ "coap_session_get_non_receive_timeout(3)", "man_coap_session_get_non_receive_timeout.html", null ],
        [ "coap_session_get_non_timeout(3)", "man_coap_session_get_non_timeout.html", null ],
        [ "coap_session_get_nstart(3)", "man_coap_session_get_nstart.html", null ],
        [ "coap_session_get_probing_rate(3)", "man_coap_session_get_probing_rate.html", null ],
        [ "coap_session_get_proto(3)", "man_coap_session_get_proto.html", null ],
        [ "coap_session_get_psk_hint(3)", "man_coap_session_get_psk_hint.html", null ],
        [ "coap_session_get_psk_key(3)", "man_coap_session_get_psk_key.html", null ],
        [ "coap_session_get_state(3)", "man_coap_session_get_state.html", null ],
        [ "coap_session_get_tls(3)", "man_coap_session_get_tls.html", null ],
        [ "coap_session_get_type(3)", "man_coap_session_get_type.html", null ],
        [ "coap_session_init_token(3)", "man_coap_session_init_token.html", null ],
        [ "coap_session_max_pdu_size(3)", "man_coap_session_max_pdu_size.html", null ],
        [ "coap_session_new_token(3)", "man_coap_session_new_token.html", null ],
        [ "coap_session_reference(3)", "man_coap_session_reference.html", null ],
        [ "coap_session_release(3)", "man_coap_session_release.html", null ],
        [ "coap_session_set_ack_random_factor(3)", "man_coap_session_set_ack_random_factor.html", null ],
        [ "coap_session_set_ack_timeout(3)", "man_coap_session_set_ack_timeout.html", null ],
        [ "coap_session_set_app_data(3)", "man_coap_session_set_app_data.html", null ],
        [ "coap_session_set_default_leisure(3)", "man_coap_session_set_default_leisure.html", null ],
        [ "coap_session_set_max_payloads(3)", "man_coap_session_set_max_payloads.html", null ],
        [ "coap_session_set_max_retransmit(3)", "man_coap_session_set_max_retransmit.html", null ],
        [ "coap_session_set_mtu(3)", "man_coap_session_set_mtu.html", null ],
        [ "coap_session_set_no_observe_cancel(3)", "man_coap_session_set_no_observe_cancel.html", null ],
        [ "coap_session_set_non_max_retransmit(3)", "man_coap_session_set_non_max_retransmit.html", null ],
        [ "coap_session_set_non_receive_timeout(3)", "man_coap_session_set_non_receive_timeout.html", null ],
        [ "coap_session_set_non_timeout(3)", "man_coap_session_set_non_timeout.html", null ],
        [ "coap_session_set_nstart(3)", "man_coap_session_set_nstart.html", null ],
        [ "coap_session_set_probing_rate(3)", "man_coap_session_set_probing_rate.html", null ],
        [ "coap_session_set_type_client(3)", "man_coap_session_set_type_client.html", null ],
        [ "coap_session_str(3)", "man_coap_session_str.html", null ],
        [ "coap_set_event_handler(3)", "man_coap_set_event_handler.html", null ],
        [ "coap_set_log_handler(3)", "man_coap_set_log_handler.html", null ],
        [ "coap_set_log_level(3)", "man_coap_set_log_level.html", null ],
        [ "coap_set_show_pdu_output(3)", "man_coap_set_show_pdu_output.html", null ],
        [ "coap_show_pdu(3)", "man_coap_show_pdu.html", null ],
        [ "coap_show_tls_version(3)", "man_coap_show_tls_version.html", null ],
        [ "coap_sockaddr_un(3)", "man_coap_sockaddr_un.html", null ],
        [ "coap_split_path(3)", "man_coap_split_path.html", null ],
        [ "coap_split_proxy_uri(3)", "man_coap_split_proxy_uri.html", null ],
        [ "coap_split_query(3)", "man_coap_split_query.html", null ],
        [ "coap_split_uri(3)", "man_coap_split_uri.html", null ],
        [ "coap_startup(3)", "man_coap_startup.html", null ],
        [ "coap_string_equal(3)", "man_coap_string_equal.html", null ],
        [ "coap_string_tls_support(3)", "man_coap_string_tls_support.html", null ],
        [ "coap_string_tls_version(3)", "man_coap_string_tls_version.html", null ],
        [ "coap_tcp_is_supported(3)", "man_coap_tcp_is_supported.html", null ],
        [ "coap_tls_is_supported(3)", "man_coap_tls_is_supported.html", null ],
        [ "coap_uri_into_options(3)", "man_coap_uri_into_options.html", null ],
        [ "coap_write(3)", "man_coap_write.html", null ],
        [ "coap_ws_is_supported(3)", "man_coap_ws_is_supported.html", null ],
        [ "coap_ws_set_host_request(3)", "man_coap_ws_set_host_request.html", null ],
        [ "coap_wss_is_supported(3)", "man_coap_wss_is_supported.html", null ]
      ] ]
    ] ],
    [ "Deprecated Items", "deprecated.html", null ],
    [ "Upgrading", "upgrading.html", [
      [ "Upgrade from 4.2.1 to 4.3.0", "upg_4-2-1_4-3-0.html", null ],
      [ "Upgrade from 4.3.0 to 4.3.1", "upg_4-3-0_4-3-1.html", null ],
      [ "Upgrade from 4.3.1 to 4.3.2", "upg_4-3-1_4-3-2.html", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"coap__layers__internal_8h.html#adac13fafe7999801de73fbde7485ada3a9e1a8a792a18acdca78e7d001d2352be",
"coap__uri_8h.html#a4bc2bfdba43dc2aaadb9f53d11968f36",
"group__cache__internal.html#gae07eb7cc785f504473cd3b6b81a4890c",
"group__dtls.html#ggacf1b8685e693c4c5fafe2d4d207c2069ac6a7ddf9cabc5273bb9a69de5e6971be",
"group__oscore__cose__internal.html#ga09a762e2ac54d6900f9f0574cefc148a",
"group__pdu.html#ga896dbeafb92ddb9b0694ba277bb22801",
"group__session__internal.html#gae4d00f6cd0c25762c73ab2dea1e35b01",
"man_coap_new_oscore_recipient.html",
"structcoap__context__t.html#a5b84cf24cf4f01e7d59931b86ad75e08",
"structcoap__pdu__t.html#ab8d617da047a9516d66e844d311e0991",
"structoscore__recipient__ctx__t.html#a41a888c87b9fe0a1399a3e4433054a89"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';