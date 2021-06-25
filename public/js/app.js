/*! For license information please see app.js.LICENSE.txt */
(() => {
  var e,
    t = {
      9669: (e, t, n) => {
        e.exports = n(1609);
      },
      5448: (e, t, n) => {
        "use strict";
        var a = n(4867),
          s = n(6026),
          r = n(4372),
          i = n(5327),
          o = n(4097),
          d = n(4109),
          _ = n(7985),
          u = n(5061);
        e.exports = function (e) {
          return new Promise(function (t, n) {
            var m = e.data,
              l = e.headers;
            a.isFormData(m) && delete l["Content-Type"];
            var c = new XMLHttpRequest();
            if (e.auth) {
              var h = e.auth.username || "",
                M = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              l.Authorization = "Basic " + btoa(h + ":" + M);
            }
            var f = o(e.baseURL, e.url);
            if (
              (c.open(
                e.method.toUpperCase(),
                i(f, e.params, e.paramsSerializer),
                !0
              ),
              (c.timeout = e.timeout),
              (c.onreadystatechange = function () {
                if (
                  c &&
                  4 === c.readyState &&
                  (0 !== c.status ||
                    (c.responseURL && 0 === c.responseURL.indexOf("file:")))
                ) {
                  var a =
                      "getAllResponseHeaders" in c
                        ? d(c.getAllResponseHeaders())
                        : null,
                    r = {
                      data:
                        e.responseType && "text" !== e.responseType
                          ? c.response
                          : c.responseText,
                      status: c.status,
                      statusText: c.statusText,
                      headers: a,
                      config: e,
                      request: c,
                    };
                  s(t, n, r), (c = null);
                }
              }),
              (c.onabort = function () {
                c &&
                  (n(u("Request aborted", e, "ECONNABORTED", c)), (c = null));
              }),
              (c.onerror = function () {
                n(u("Network Error", e, null, c)), (c = null);
              }),
              (c.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(u(t, e, "ECONNABORTED", c)),
                  (c = null);
              }),
              a.isStandardBrowserEnv())
            ) {
              var y =
                (e.withCredentials || _(f)) && e.xsrfCookieName
                  ? r.read(e.xsrfCookieName)
                  : void 0;
              y && (l[e.xsrfHeaderName] = y);
            }
            if (
              ("setRequestHeader" in c &&
                a.forEach(l, function (e, t) {
                  void 0 === m && "content-type" === t.toLowerCase()
                    ? delete l[t]
                    : c.setRequestHeader(t, e);
                }),
              a.isUndefined(e.withCredentials) ||
                (c.withCredentials = !!e.withCredentials),
              e.responseType)
            )
              try {
                c.responseType = e.responseType;
              } catch (t) {
                if ("json" !== e.responseType) throw t;
              }
            "function" == typeof e.onDownloadProgress &&
              c.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress &&
                c.upload &&
                c.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                  c && (c.abort(), n(e), (c = null));
                }),
              m || (m = null),
              c.send(m);
          });
        };
      },
      1609: (e, t, n) => {
        "use strict";
        var a = n(4867),
          s = n(1849),
          r = n(321),
          i = n(7185);
        function o(e) {
          var t = new r(e),
            n = s(r.prototype.request, t);
          return a.extend(n, r.prototype, t), a.extend(n, t), n;
        }
        var d = o(n(5655));
        (d.Axios = r),
          (d.create = function (e) {
            return o(i(d.defaults, e));
          }),
          (d.Cancel = n(5263)),
          (d.CancelToken = n(4972)),
          (d.isCancel = n(6502)),
          (d.all = function (e) {
            return Promise.all(e);
          }),
          (d.spread = n(8713)),
          (d.isAxiosError = n(6268)),
          (e.exports = d),
          (e.exports.default = d);
      },
      5263: (e) => {
        "use strict";
        function t(e) {
          this.message = e;
        }
        (t.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (t.prototype.__CANCEL__ = !0),
          (e.exports = t);
      },
      4972: (e, t, n) => {
        "use strict";
        var a = n(5263);
        function s(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var n = this;
          e(function (e) {
            n.reason || ((n.reason = new a(e)), t(n.reason));
          });
        }
        (s.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (s.source = function () {
            var e;
            return {
              token: new s(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = s);
      },
      6502: (e) => {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      321: (e, t, n) => {
        "use strict";
        var a = n(4867),
          s = n(5327),
          r = n(782),
          i = n(3572),
          o = n(7185);
        function d(e) {
          (this.defaults = e),
            (this.interceptors = { request: new r(), response: new r() });
        }
        (d.prototype.request = function (e) {
          "string" == typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = o(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var t = [i, void 0],
            n = Promise.resolve(e);
          for (
            this.interceptors.request.forEach(function (e) {
              t.unshift(e.fulfilled, e.rejected);
            }),
              this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected);
              });
            t.length;

          )
            n = n.then(t.shift(), t.shift());
          return n;
        }),
          (d.prototype.getUri = function (e) {
            return (
              (e = o(this.defaults, e)),
              s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          a.forEach(["delete", "get", "head", "options"], function (e) {
            d.prototype[e] = function (t, n) {
              return this.request(
                o(n || {}, { method: e, url: t, data: (n || {}).data })
              );
            };
          }),
          a.forEach(["post", "put", "patch"], function (e) {
            d.prototype[e] = function (t, n, a) {
              return this.request(o(a || {}, { method: e, url: t, data: n }));
            };
          }),
          (e.exports = d);
      },
      782: (e, t, n) => {
        "use strict";
        var a = n(4867);
        function s() {
          this.handlers = [];
        }
        (s.prototype.use = function (e, t) {
          return (
            this.handlers.push({ fulfilled: e, rejected: t }),
            this.handlers.length - 1
          );
        }),
          (s.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (s.prototype.forEach = function (e) {
            a.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = s);
      },
      4097: (e, t, n) => {
        "use strict";
        var a = n(1793),
          s = n(7303);
        e.exports = function (e, t) {
          return e && !a(t) ? s(e, t) : t;
        };
      },
      5061: (e, t, n) => {
        "use strict";
        var a = n(481);
        e.exports = function (e, t, n, s, r) {
          var i = new Error(e);
          return a(i, t, n, s, r);
        };
      },
      3572: (e, t, n) => {
        "use strict";
        var a = n(4867),
          s = n(8527),
          r = n(6502),
          i = n(5655);
        function o(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
          return (
            o(e),
            (e.headers = e.headers || {}),
            (e.data = s(e.data, e.headers, e.transformRequest)),
            (e.headers = a.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            a.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || i.adapter)(e).then(
              function (t) {
                return (
                  o(e), (t.data = s(t.data, t.headers, e.transformResponse)), t
                );
              },
              function (t) {
                return (
                  r(t) ||
                    (o(e),
                    t &&
                      t.response &&
                      (t.response.data = s(
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      481: (e) => {
        "use strict";
        e.exports = function (e, t, n, a, s) {
          return (
            (e.config = t),
            n && (e.code = n),
            (e.request = a),
            (e.response = s),
            (e.isAxiosError = !0),
            (e.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
              };
            }),
            e
          );
        };
      },
      7185: (e, t, n) => {
        "use strict";
        var a = n(4867);
        e.exports = function (e, t) {
          t = t || {};
          var n = {},
            s = ["url", "method", "data"],
            r = ["headers", "auth", "proxy", "params"],
            i = [
              "baseURL",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "timeoutMessage",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "decompress",
              "maxContentLength",
              "maxBodyLength",
              "maxRedirects",
              "transport",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
              "responseEncoding",
            ],
            o = ["validateStatus"];
          function d(e, t) {
            return a.isPlainObject(e) && a.isPlainObject(t)
              ? a.merge(e, t)
              : a.isPlainObject(t)
              ? a.merge({}, t)
              : a.isArray(t)
              ? t.slice()
              : t;
          }
          function _(s) {
            a.isUndefined(t[s])
              ? a.isUndefined(e[s]) || (n[s] = d(void 0, e[s]))
              : (n[s] = d(e[s], t[s]));
          }
          a.forEach(s, function (e) {
            a.isUndefined(t[e]) || (n[e] = d(void 0, t[e]));
          }),
            a.forEach(r, _),
            a.forEach(i, function (s) {
              a.isUndefined(t[s])
                ? a.isUndefined(e[s]) || (n[s] = d(void 0, e[s]))
                : (n[s] = d(void 0, t[s]));
            }),
            a.forEach(o, function (a) {
              a in t
                ? (n[a] = d(e[a], t[a]))
                : a in e && (n[a] = d(void 0, e[a]));
            });
          var u = s.concat(r).concat(i).concat(o),
            m = Object.keys(e)
              .concat(Object.keys(t))
              .filter(function (e) {
                return -1 === u.indexOf(e);
              });
          return a.forEach(m, _), n;
        };
      },
      6026: (e, t, n) => {
        "use strict";
        var a = n(5061);
        e.exports = function (e, t, n) {
          var s = n.config.validateStatus;
          n.status && s && !s(n.status)
            ? t(
                a(
                  "Request failed with status code " + n.status,
                  n.config,
                  null,
                  n.request,
                  n
                )
              )
            : e(n);
        };
      },
      8527: (e, t, n) => {
        "use strict";
        var a = n(4867);
        e.exports = function (e, t, n) {
          return (
            a.forEach(n, function (n) {
              e = n(e, t);
            }),
            e
          );
        };
      },
      5655: (e, t, n) => {
        "use strict";
        var a = n(4155),
          s = n(4867),
          r = n(6016),
          i = { "Content-Type": "application/x-www-form-urlencoded" };
        function o(e, t) {
          !s.isUndefined(e) &&
            s.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var d,
          _ = {
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                (void 0 !== a &&
                  "[object process]" === Object.prototype.toString.call(a))) &&
                (d = n(5448)),
              d),
            transformRequest: [
              function (e, t) {
                return (
                  r(t, "Accept"),
                  r(t, "Content-Type"),
                  s.isFormData(e) ||
                  s.isArrayBuffer(e) ||
                  s.isBuffer(e) ||
                  s.isStream(e) ||
                  s.isFile(e) ||
                  s.isBlob(e)
                    ? e
                    : s.isArrayBufferView(e)
                    ? e.buffer
                    : s.isURLSearchParams(e)
                    ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"),
                      e.toString())
                    : s.isObject(e)
                    ? (o(t, "application/json;charset=utf-8"),
                      JSON.stringify(e))
                    : e
                );
              },
            ],
            transformResponse: [
              function (e) {
                if ("string" == typeof e)
                  try {
                    e = JSON.parse(e);
                  } catch (e) {}
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
          };
        (_.headers = {
          common: { Accept: "application/json, text/plain, */*" },
        }),
          s.forEach(["delete", "get", "head"], function (e) {
            _.headers[e] = {};
          }),
          s.forEach(["post", "put", "patch"], function (e) {
            _.headers[e] = s.merge(i);
          }),
          (e.exports = _);
      },
      1849: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
              n[a] = arguments[a];
            return e.apply(t, n);
          };
        };
      },
      5327: (e, t, n) => {
        "use strict";
        var a = n(4867);
        function s(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
          if (!t) return e;
          var r;
          if (n) r = n(t);
          else if (a.isURLSearchParams(t)) r = t.toString();
          else {
            var i = [];
            a.forEach(t, function (e, t) {
              null != e &&
                (a.isArray(e) ? (t += "[]") : (e = [e]),
                a.forEach(e, function (e) {
                  a.isDate(e)
                    ? (e = e.toISOString())
                    : a.isObject(e) && (e = JSON.stringify(e)),
                    i.push(s(t) + "=" + s(e));
                }));
            }),
              (r = i.join("&"));
          }
          if (r) {
            var o = e.indexOf("#");
            -1 !== o && (e = e.slice(0, o)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
          }
          return e;
        };
      },
      7303: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      4372: (e, t, n) => {
        "use strict";
        var a = n(4867);
        e.exports = a.isStandardBrowserEnv()
          ? {
              write: function (e, t, n, s, r, i) {
                var o = [];
                o.push(e + "=" + encodeURIComponent(t)),
                  a.isNumber(n) &&
                    o.push("expires=" + new Date(n).toGMTString()),
                  a.isString(s) && o.push("path=" + s),
                  a.isString(r) && o.push("domain=" + r),
                  !0 === i && o.push("secure"),
                  (document.cookie = o.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      1793: (e) => {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
      },
      6268: (e) => {
        "use strict";
        e.exports = function (e) {
          return "object" == typeof e && !0 === e.isAxiosError;
        };
      },
      7985: (e, t, n) => {
        "use strict";
        var a = n(4867);
        e.exports = a.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function s(e) {
                var a = e;
                return (
                  t && (n.setAttribute("href", a), (a = n.href)),
                  n.setAttribute("href", a),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = s(window.location.href)),
                function (t) {
                  var n = a.isString(t) ? s(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      6016: (e, t, n) => {
        "use strict";
        var a = n(4867);
        e.exports = function (e, t) {
          a.forEach(e, function (n, a) {
            a !== t &&
              a.toUpperCase() === t.toUpperCase() &&
              ((e[t] = n), delete e[a]);
          });
        };
      },
      4109: (e, t, n) => {
        "use strict";
        var a = n(4867),
          s = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        e.exports = function (e) {
          var t,
            n,
            r,
            i = {};
          return e
            ? (a.forEach(e.split("\n"), function (e) {
                if (
                  ((r = e.indexOf(":")),
                  (t = a.trim(e.substr(0, r)).toLowerCase()),
                  (n = a.trim(e.substr(r + 1))),
                  t)
                ) {
                  if (i[t] && s.indexOf(t) >= 0) return;
                  i[t] =
                    "set-cookie" === t
                      ? (i[t] ? i[t] : []).concat([n])
                      : i[t]
                      ? i[t] + ", " + n
                      : n;
                }
              }),
              i)
            : i;
        };
      },
      8713: (e) => {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      4867: (e, t, n) => {
        "use strict";
        var a = n(1849),
          s = Object.prototype.toString;
        function r(e) {
          return "[object Array]" === s.call(e);
        }
        function i(e) {
          return void 0 === e;
        }
        function o(e) {
          return null !== e && "object" == typeof e;
        }
        function d(e) {
          if ("[object Object]" !== s.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function _(e) {
          return "[object Function]" === s.call(e);
        }
        function u(e, t) {
          if (null != e)
            if (("object" != typeof e && (e = [e]), r(e)))
              for (var n = 0, a = e.length; n < a; n++)
                t.call(null, e[n], n, e);
            else
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) &&
                  t.call(null, e[s], s, e);
        }
        e.exports = {
          isArray: r,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === s.call(e);
          },
          isBuffer: function (e) {
            return (
              null !== e &&
              !i(e) &&
              null !== e.constructor &&
              !i(e.constructor) &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isObject: o,
          isPlainObject: d,
          isUndefined: i,
          isDate: function (e) {
            return "[object Date]" === s.call(e);
          },
          isFile: function (e) {
            return "[object File]" === s.call(e);
          },
          isBlob: function (e) {
            return "[object Blob]" === s.call(e);
          },
          isFunction: _,
          isStream: function (e) {
            return o(e) && _(e.pipe);
          },
          isURLSearchParams: function (e) {
            return (
              "undefined" != typeof URLSearchParams &&
              e instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: u,
          merge: function e() {
            var t = {};
            function n(n, a) {
              d(t[a]) && d(n)
                ? (t[a] = e(t[a], n))
                : d(n)
                ? (t[a] = e({}, n))
                : r(n)
                ? (t[a] = n.slice())
                : (t[a] = n);
            }
            for (var a = 0, s = arguments.length; a < s; a++)
              u(arguments[a], n);
            return t;
          },
          extend: function (e, t, n) {
            return (
              u(t, function (t, s) {
                e[s] = n && "function" == typeof t ? a(t, n) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
        };
      },
      6763: (e, t, n) => {
        "use strict";
        var a = n(9669),
          s = n.n(a),
          r = n(2854),
          i = n.n(r),
          o = n(381),
          d = n.n(o);
        function _(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function u(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var m = document.querySelectorAll(".add-to-cart"),
          l = document.querySelector("#cartCounter");
        m.forEach(function (e) {
          e.addEventListener("click", function (t) {
            !(function (e) {
              s()
                .post("/update-cart", e)
                .then(function (e) {
                  (l.innerText = e.data.totalQty),
                    new (i())({
                      type: "success",
                      timeout: 100,
                      text: "Item added to cart",
                      progressBar: !1,
                    }).show();
                })
                .catch(function (e) {
                  new (i())({
                    type: "error",
                    timeout: 1e3,
                    text: "Something went wrong",
                    progressBar: !1,
                  }).show();
                });
            })(JSON.parse(e.dataset.pizza));
          });
        });
        var c = document.querySelector("#success-alert");
        c &&
          setTimeout(function () {
            c.remove();
          }, 1e3);
        var h = document.querySelectorAll(".status_line"),
          M = document.querySelector("#hiddenInput"),
          f = M ? M.value : null;
        f = JSON.parse(f);
        var y = document.createElement("small");
        function L(e) {
          h.forEach(function (e) {
            e.classList.remove("step-completed"), e.classList.remove("current");
          });
          var t = !0;
          h.forEach(function (n) {
            var a = n.dataset.status;
            t && n.classList.add("step-completed"),
              a === e.status &&
                ((t = !1),
                (y.innerText = d()(e.updatedAt).format("hh:mm A")),
                n.appendChild(y),
                n.nextElementSibling &&
                  n.nextElementSibling.classList.add("current"));
          });
        }
        L(f);
        var Y = io();
        f && Y.emit("join", "order_".concat(f._id)),
          window.location.pathname.includes("admin") &&
            (!(function (e) {
              var t,
                n = document.querySelector("#orderTableBody"),
                a = [];
              function r(e) {
                return e
                  .map(function (e) {
                    return '\n                <tr>\n                <td class="border px-4 py-2 text-green-900">\n                    <p>'
                      .concat(e._id, "</p>\n                    <div>")
                      .concat(
                        ((t = e.items),
                        Object.values(t)
                          .map(function (e) {
                            return "\n                <p>"
                              .concat(e.item.name, " - ")
                              .concat(e.qty, " pcs </p>\n            ");
                          })
                          .join("")),
                        '</div>\n                </td>\n                <td class="border px-4 py-2">'
                      )
                      .concat(
                        e.customerId.name,
                        '</td>\n                <td class="border px-4 py-2">'
                      )
                      .concat(
                        e.address,
                        '</td>\n                <td class="border px-4 py-2">\n                    <div class="inline-block relative w-64">\n                        <form action="/admin/order/status" method="POST">\n                            <input type="hidden" name="orderId" value="'
                      )
                      .concat(
                        e._id,
                        '">\n                            <select name="status" onchange="this.form.submit()"\n                                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">\n                                <option value="order_placed"\n                                    '
                      )
                      .concat(
                        "order_placed" === e.status ? "selected" : "",
                        '>\n                                    Placed</option>\n                                <option value="confirmed" '
                      )
                      .concat(
                        "confirmed" === e.status ? "selected" : "",
                        '>\n                                    Confirmed</option>\n                                <option value="prepared" '
                      )
                      .concat(
                        "prepared" === e.status ? "selected" : "",
                        '>\n                                    Prepared</option>\n                                <option value="delivered" '
                      )
                      .concat(
                        "delivered" === e.status ? "selected" : "",
                        '>\n                                    Delivered\n                                </option>\n                                <option value="completed" '
                      )
                      .concat(
                        "completed" === e.status ? "selected" : "",
                        '>\n                                    Completed\n                                </option>\n                            </select>\n                        </form>\n                        <div\n                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">\n                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"\n                                viewBox="0 0 20 20">\n                                <path\n                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />\n                            </svg>\n                        </div>\n                    </div>\n                </td>\n                <td class="border px-4 py-2">\n                    '
                      )
                      .concat(
                        d()(e.createdAt).format("hh:mm A"),
                        '\n                </td>\n                <td class="border px-4 py-2">\n                    '
                      )
                      .concat(
                        e.paymentStatus ? "paid" : "Not paid",
                        "\n                </td>\n            </tr>\n        "
                      );
                    var t;
                  })
                  .join("");
              }
              s()
                .get("/admin/orders", {
                  headers: { "X-Requested-With": "XMLHttpRequest" },
                })
                .then(function (e) {
                  (a = e.data), (t = r(a)), (n.innerHTML = t);
                })
                .catch(function (e) {
                  console.log(e);
                }),
                e.on("orderPlaced", function (e) {
                  new (i())({
                    type: "success",
                    timeout: 1e3,
                    text: "New order!",
                    progressBar: !1,
                  }).show(),
                    a.unshift(e),
                    (n.innerHTML = ""),
                    (n.innerHTML = r(a));
                });
            })(Y),
            Y.emit("join", "adminRoom")),
          Y.on("orderUpdated", function (e) {
            var t = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? _(Object(n), !0).forEach(function (t) {
                      u(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : _(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, f);
            (t.updatedAt = d()().format()),
              (t.status = e.status),
              L(t),
              new (i())({
                type: "success",
                timeout: 1e3,
                text: "Order updated",
                progressBar: !1,
              }).show();
          });
      },
      3835: () => {},
      2786: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("af", {
            months:
              "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays:
              "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
                "_"
              ),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
              return /^nm$/i.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "vm" : "VM") : n ? "nm" : "NM";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Vandag om] LT",
              nextDay: "[Môre om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[Gister om] LT",
              lastWeek: "[Laas] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "oor %s",
              past: "%s gelede",
              s: "'n paar sekondes",
              ss: "%d sekondes",
              m: "'n minuut",
              mm: "%d minute",
              h: "'n uur",
              hh: "%d ure",
              d: "'n dag",
              dd: "%d dae",
              M: "'n maand",
              MM: "%d maande",
              y: "'n jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      4130: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 2 === e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5;
            },
            n = {
              s: [
                "أقل من ثانية",
                "ثانية واحدة",
                ["ثانيتان", "ثانيتين"],
                "%d ثوان",
                "%d ثانية",
                "%d ثانية",
              ],
              m: [
                "أقل من دقيقة",
                "دقيقة واحدة",
                ["دقيقتان", "دقيقتين"],
                "%d دقائق",
                "%d دقيقة",
                "%d دقيقة",
              ],
              h: [
                "أقل من ساعة",
                "ساعة واحدة",
                ["ساعتان", "ساعتين"],
                "%d ساعات",
                "%d ساعة",
                "%d ساعة",
              ],
              d: [
                "أقل من يوم",
                "يوم واحد",
                ["يومان", "يومين"],
                "%d أيام",
                "%d يومًا",
                "%d يوم",
              ],
              M: [
                "أقل من شهر",
                "شهر واحد",
                ["شهران", "شهرين"],
                "%d أشهر",
                "%d شهرا",
                "%d شهر",
              ],
              y: [
                "أقل من عام",
                "عام واحد",
                ["عامان", "عامين"],
                "%d أعوام",
                "%d عامًا",
                "%d عام",
              ],
            },
            a = function (e) {
              return function (a, s, r, i) {
                var o = t(a),
                  d = n[e][t(a)];
                return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, a);
              };
            },
            s = [
              "جانفي",
              "فيفري",
              "مارس",
              "أفريل",
              "ماي",
              "جوان",
              "جويلية",
              "أوت",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
            ];
          e.defineLocale("ar-dz", {
            months: s,
            monthsShort: s,
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: a("s"),
              ss: a("s"),
              m: a("m"),
              mm: a("m"),
              h: a("h"),
              hh: a("h"),
              d: a("d"),
              dd: a("d"),
              M: a("M"),
              MM: a("M"),
              y: a("y"),
              yy: a("y"),
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 0, doy: 4 },
          });
        })(n(381));
      },
      6135: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-kw", {
            months:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            week: { dow: 0, doy: 12 },
          });
        })(n(381));
      },
      6440: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              0: "0",
            },
            n = function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 2 === e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5;
            },
            a = {
              s: [
                "أقل من ثانية",
                "ثانية واحدة",
                ["ثانيتان", "ثانيتين"],
                "%d ثوان",
                "%d ثانية",
                "%d ثانية",
              ],
              m: [
                "أقل من دقيقة",
                "دقيقة واحدة",
                ["دقيقتان", "دقيقتين"],
                "%d دقائق",
                "%d دقيقة",
                "%d دقيقة",
              ],
              h: [
                "أقل من ساعة",
                "ساعة واحدة",
                ["ساعتان", "ساعتين"],
                "%d ساعات",
                "%d ساعة",
                "%d ساعة",
              ],
              d: [
                "أقل من يوم",
                "يوم واحد",
                ["يومان", "يومين"],
                "%d أيام",
                "%d يومًا",
                "%d يوم",
              ],
              M: [
                "أقل من شهر",
                "شهر واحد",
                ["شهران", "شهرين"],
                "%d أشهر",
                "%d شهرا",
                "%d شهر",
              ],
              y: [
                "أقل من عام",
                "عام واحد",
                ["عامان", "عامين"],
                "%d أعوام",
                "%d عامًا",
                "%d عام",
              ],
            },
            s = function (e) {
              return function (t, s, r, i) {
                var o = n(t),
                  d = a[e][n(t)];
                return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, t);
              };
            },
            r = [
              "يناير",
              "فبراير",
              "مارس",
              "أبريل",
              "مايو",
              "يونيو",
              "يوليو",
              "أغسطس",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
            ];
          e.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: s("s"),
              ss: s("s"),
              m: s("m"),
              mm: s("m"),
              h: s("h"),
              hh: s("h"),
              d: s("d"),
              dd: s("d"),
              M: s("M"),
              MM: s("M"),
              y: s("y"),
              yy: s("y"),
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(381));
      },
      7702: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-ma", {
            months:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      6040: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            };
          e.defineLocale("ar-sa", {
            months:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      7100: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-tn", {
            months:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            monthsShort:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      867: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            },
            a = function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 2 === e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5;
            },
            s = {
              s: [
                "أقل من ثانية",
                "ثانية واحدة",
                ["ثانيتان", "ثانيتين"],
                "%d ثوان",
                "%d ثانية",
                "%d ثانية",
              ],
              m: [
                "أقل من دقيقة",
                "دقيقة واحدة",
                ["دقيقتان", "دقيقتين"],
                "%d دقائق",
                "%d دقيقة",
                "%d دقيقة",
              ],
              h: [
                "أقل من ساعة",
                "ساعة واحدة",
                ["ساعتان", "ساعتين"],
                "%d ساعات",
                "%d ساعة",
                "%d ساعة",
              ],
              d: [
                "أقل من يوم",
                "يوم واحد",
                ["يومان", "يومين"],
                "%d أيام",
                "%d يومًا",
                "%d يوم",
              ],
              M: [
                "أقل من شهر",
                "شهر واحد",
                ["شهران", "شهرين"],
                "%d أشهر",
                "%d شهرا",
                "%d شهر",
              ],
              y: [
                "أقل من عام",
                "عام واحد",
                ["عامان", "عامين"],
                "%d أعوام",
                "%d عامًا",
                "%d عام",
              ],
            },
            r = function (e) {
              return function (t, n, r, i) {
                var o = a(t),
                  d = s[e][a(t)];
                return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
              };
            },
            i = [
              "يناير",
              "فبراير",
              "مارس",
              "أبريل",
              "مايو",
              "يونيو",
              "يوليو",
              "أغسطس",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
            ];
          e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: r("s"),
              ss: r("s"),
              m: r("m"),
              mm: r("m"),
              h: r("h"),
              hh: r("h"),
              d: r("d"),
              dd: r("d"),
              M: r("M"),
              MM: r("M"),
              y: r("y"),
              yy: r("y"),
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(381));
      },
      1083: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı",
          };
          e.defineLocale("az", {
            months:
              "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
                "_"
              ),
            monthsShort:
              "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays:
              "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
                "_"
              ),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[sabah saat] LT",
              nextWeek: "[gələn həftə] dddd [saat] LT",
              lastDay: "[dünən] LT",
              lastWeek: "[keçən həftə] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s əvvəl",
              s: "bir neçə saniyə",
              ss: "%d saniyə",
              m: "bir dəqiqə",
              mm: "%d dəqiqə",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir il",
              yy: "%d il",
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
              return /^(gündüz|axşam)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "gecə"
                : e < 12
                ? "səhər"
                : e < 17
                ? "gündüz"
                : "axşam";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
              if (0 === e) return e + "-ıncı";
              var n = e % 10,
                a = (e % 100) - n,
                s = e >= 100 ? 100 : null;
              return e + (t[n] || t[a] || t[s]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      9808: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11
              ? n[0]
              : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? n[1]
              : n[2];
          }
          function n(e, n, a) {
            return "m" === a
              ? n
                ? "хвіліна"
                : "хвіліну"
              : "h" === a
              ? n
                ? "гадзіна"
                : "гадзіну"
              : e +
                " " +
                t(
                  {
                    ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў",
                  }[a],
                  +e
                );
          }
          e.defineLocale("be", {
            months: {
              format:
                "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
                  "_"
                ),
              standalone:
                "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
                  "_"
                ),
            },
            monthsShort:
              "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split(
                "_"
              ),
            weekdays: {
              format:
                "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
                  "_"
                ),
              standalone:
                "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
                  "_"
                ),
              isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., HH:mm",
              LLLL: "dddd, D MMMM YYYY г., HH:mm",
            },
            calendar: {
              sameDay: "[Сёння ў] LT",
              nextDay: "[Заўтра ў] LT",
              lastDay: "[Учора ў] LT",
              nextWeek: function () {
                return "[У] dddd [ў] LT";
              },
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return "[У мінулую] dddd [ў] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[У мінулы] dddd [ў] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "праз %s",
              past: "%s таму",
              s: "некалькі секунд",
              m: n,
              mm: n,
              h: n,
              hh: n,
              d: "дзень",
              dd: n,
              M: "месяц",
              MM: n,
              y: "год",
              yy: n,
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
              return /^(дня|вечара)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ночы"
                : e < 12
                ? "раніцы"
                : e < 17
                ? "дня"
                : "вечара";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                  return (e % 10 != 2 && e % 10 != 3) ||
                    e % 100 == 12 ||
                    e % 100 == 13
                    ? e + "-ы"
                    : e + "-і";
                case "D":
                  return e + "-га";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      8338: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("bg", {
            months:
              "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
                "_"
              ),
            monthsShort:
              "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays:
              "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split(
                "_"
              ),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Днес в] LT",
              nextDay: "[Утре в] LT",
              nextWeek: "dddd [в] LT",
              lastDay: "[Вчера в] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Миналата] dddd [в] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Миналия] dddd [в] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "след %s",
              past: "преди %s",
              s: "няколко секунди",
              ss: "%d секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дена",
              w: "седмица",
              ww: "%d седмици",
              M: "месец",
              MM: "%d месеца",
              y: "година",
              yy: "%d години",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
              var t = e % 10,
                n = e % 100;
              return 0 === e
                ? e + "-ев"
                : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                ? e + "-ти"
                : 1 === t
                ? e + "-ви"
                : 2 === t
                ? e + "-ри"
                : 7 === t || 8 === t
                ? e + "-ми"
                : e + "-ти";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      7438: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("bm", {
            months:
              "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
                "_"
              ),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
              "_"
            ),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "MMMM [tile] D [san] YYYY",
              LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
              LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            },
            calendar: {
              sameDay: "[Bi lɛrɛ] LT",
              nextDay: "[Sini lɛrɛ] LT",
              nextWeek: "dddd [don lɛrɛ] LT",
              lastDay: "[Kunu lɛrɛ] LT",
              lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s kɔnɔ",
              past: "a bɛ %s bɔ",
              s: "sanga dama dama",
              ss: "sekondi %d",
              m: "miniti kelen",
              mm: "miniti %d",
              h: "lɛrɛ kelen",
              hh: "lɛrɛ %d",
              d: "tile kelen",
              dd: "tile %d",
              M: "kalo kelen",
              MM: "kalo %d",
              y: "san kelen",
              yy: "san %d",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      6225: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "১",
              2: "২",
              3: "৩",
              4: "৪",
              5: "৫",
              6: "৬",
              7: "৭",
              8: "৮",
              9: "৯",
              0: "০",
            },
            n = {
              "১": "1",
              "২": "2",
              "৩": "3",
              "৪": "4",
              "৫": "5",
              "৬": "6",
              "৭": "7",
              "৮": "8",
              "৯": "9",
              "০": "0",
            };
          e.defineLocale("bn-bd", {
            months:
              "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
                "_"
              ),
            monthsShort:
              "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
                "_"
              ),
            weekdays:
              "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
                "_"
              ),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm সময়",
              LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
            },
            calendar: {
              sameDay: "[আজ] LT",
              nextDay: "[আগামীকাল] LT",
              nextWeek: "dddd, LT",
              lastDay: "[গতকাল] LT",
              lastWeek: "[গত] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কয়েক সেকেন্ড",
              ss: "%d সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর",
            },
            preparse: function (e) {
              return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "রাত" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ভোর" === t || "সকাল" === t
                  ? e
                  : "দুপুর" === t
                  ? e >= 3
                    ? e
                    : e + 12
                  : "বিকাল" === t || "সন্ধ্যা" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "রাত"
                : e < 6
                ? "ভোর"
                : e < 12
                ? "সকাল"
                : e < 15
                ? "দুপুর"
                : e < 18
                ? "বিকাল"
                : e < 20
                ? "সন্ধ্যা"
                : "রাত";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      8905: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "১",
              2: "২",
              3: "৩",
              4: "৪",
              5: "৫",
              6: "৬",
              7: "৭",
              8: "৮",
              9: "৯",
              0: "০",
            },
            n = {
              "১": "1",
              "২": "2",
              "৩": "3",
              "৪": "4",
              "৫": "5",
              "৬": "6",
              "৭": "7",
              "৮": "8",
              "৯": "9",
              "০": "0",
            };
          e.defineLocale("bn", {
            months:
              "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
                "_"
              ),
            monthsShort:
              "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
                "_"
              ),
            weekdays:
              "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
                "_"
              ),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm সময়",
              LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
            },
            calendar: {
              sameDay: "[আজ] LT",
              nextDay: "[আগামীকাল] LT",
              nextWeek: "dddd, LT",
              lastDay: "[গতকাল] LT",
              lastWeek: "[গত] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কয়েক সেকেন্ড",
              ss: "%d সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর",
            },
            preparse: function (e) {
              return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                ("রাত" === t && e >= 4) ||
                ("দুপুর" === t && e < 5) ||
                "বিকাল" === t
                  ? e + 12
                  : e
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "রাত"
                : e < 10
                ? "সকাল"
                : e < 17
                ? "দুপুর"
                : e < 20
                ? "বিকাল"
                : "রাত";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      1560: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "༡",
              2: "༢",
              3: "༣",
              4: "༤",
              5: "༥",
              6: "༦",
              7: "༧",
              8: "༨",
              9: "༩",
              0: "༠",
            },
            n = {
              "༡": "1",
              "༢": "2",
              "༣": "3",
              "༤": "4",
              "༥": "5",
              "༦": "6",
              "༧": "7",
              "༨": "8",
              "༩": "9",
              "༠": "0",
            };
          e.defineLocale("bo", {
            months:
              "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
                "_"
              ),
            monthsShort:
              "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split(
                "_"
              ),
            monthsShortRegex: /^(ཟླ་\d{1,2})/,
            monthsParseExact: !0,
            weekdays:
              "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
                "_"
              ),
            weekdaysShort:
              "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[དི་རིང] LT",
              nextDay: "[སང་ཉིན] LT",
              nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
              lastDay: "[ཁ་སང] LT",
              lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ལ་",
              past: "%s སྔན་ལ",
              s: "ལམ་སང",
              ss: "%d སྐར་ཆ།",
              m: "སྐར་མ་གཅིག",
              mm: "%d སྐར་མ",
              h: "ཆུ་ཚོད་གཅིག",
              hh: "%d ཆུ་ཚོད",
              d: "ཉིན་གཅིག",
              dd: "%d ཉིན་",
              M: "ཟླ་བ་གཅིག",
              MM: "%d ཟླ་བ",
              y: "ལོ་གཅིག",
              yy: "%d ལོ",
            },
            preparse: function (e) {
              return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                ("མཚན་མོ" === t && e >= 4) ||
                ("ཉིན་གུང" === t && e < 5) ||
                "དགོང་དག" === t
                  ? e + 12
                  : e
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "མཚན་མོ"
                : e < 10
                ? "ཞོགས་ཀས"
                : e < 17
                ? "ཉིན་གུང"
                : e < 20
                ? "དགོང་དག"
                : "མཚན་མོ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      1278: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            return (
              e + " " + s({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e)
            );
          }
          function n(e) {
            switch (a(e)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";
              default:
                return e + " vloaz";
            }
          }
          function a(e) {
            return e > 9 ? a(e % 10) : e;
          }
          function s(e, t) {
            return 2 === t ? r(e) : e;
          }
          function r(e) {
            var t = { m: "v", b: "v", d: "z" };
            return void 0 === t[e.charAt(0)]
              ? e
              : t[e.charAt(0)] + e.substring(1);
          }
          var i = [
              /^gen/i,
              /^c[ʼ\']hwe/i,
              /^meu/i,
              /^ebr/i,
              /^mae/i,
              /^(mez|eve)/i,
              /^gou/i,
              /^eos/i,
              /^gwe/i,
              /^her/i,
              /^du/i,
              /^ker/i,
            ],
            o =
              /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            d =
              /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
            _ = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            u = [
              /^sul/i,
              /^lun/i,
              /^meurzh/i,
              /^merc[ʼ\']her/i,
              /^yaou/i,
              /^gwener/i,
              /^sadorn/i,
            ],
            m = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
            l = [
              /^Su/i,
              /^Lu/i,
              /^Me([^r]|$)/i,
              /^Mer/i,
              /^Ya/i,
              /^Gw/i,
              /^Sa/i,
            ];
          e.defineLocale("br", {
            months:
              "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
                "_"
              ),
            monthsShort:
              "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: l,
            fullWeekdaysParse: u,
            shortWeekdaysParse: m,
            minWeekdaysParse: l,
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: d,
            monthsShortStrictRegex: _,
            monthsParse: i,
            longMonthsParse: i,
            shortMonthsParse: i,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [a viz] MMMM YYYY",
              LLL: "D [a viz] MMMM YYYY HH:mm",
              LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hiziv da] LT",
              nextDay: "[Warcʼhoazh da] LT",
              nextWeek: "dddd [da] LT",
              lastDay: "[Decʼh da] LT",
              lastWeek: "dddd [paset da] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "a-benn %s",
              past: "%s ʼzo",
              s: "un nebeud segondennoù",
              ss: "%d eilenn",
              m: "ur vunutenn",
              mm: t,
              h: "un eur",
              hh: "%d eur",
              d: "un devezh",
              dd: t,
              M: "ur miz",
              MM: t,
              y: "ur bloaz",
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
              return e + (1 === e ? "añ" : "vet");
            },
            week: { dow: 1, doy: 4 },
            meridiemParse: /a.m.|g.m./,
            isPM: function (e) {
              return "g.m." === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "a.m." : "g.m.";
            },
          });
        })(n(381));
      },
      622: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return (a +=
                  1 === e
                    ? "sekunda"
                    : 2 === e || 3 === e || 4 === e
                    ? "sekunde"
                    : "sekundi");
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (a +=
                  1 === e
                    ? "minuta"
                    : 2 === e || 3 === e || 4 === e
                    ? "minute"
                    : "minuta");
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (a +=
                  1 === e
                    ? "sat"
                    : 2 === e || 3 === e || 4 === e
                    ? "sata"
                    : "sati");
              case "dd":
                return (a += 1 === e ? "dan" : "dana");
              case "MM":
                return (a +=
                  1 === e
                    ? "mjesec"
                    : 2 === e || 3 === e || 4 === e
                    ? "mjeseca"
                    : "mjeseci");
              case "yy":
                return (a +=
                  1 === e
                    ? "godina"
                    : 2 === e || 3 === e || 4 === e
                    ? "godine"
                    : "godina");
            }
          }
          e.defineLocale("bs", {
            months:
              "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";
                  case 6:
                    return "[prošle] [subote] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: "dan",
              dd: t,
              M: "mjesec",
              MM: t,
              y: "godinu",
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      2468: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ca", {
            months: {
              standalone:
                "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
                  "_"
                ),
              format:
                "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
                  "_"
                ),
              isFormat: /D[oD]?(\s)+MMMM/,
            },
            monthsShort:
              "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
                "_"
              ),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [de] YYYY",
              ll: "D MMM YYYY",
              LLL: "D MMMM [de] YYYY [a les] H:mm",
              lll: "D MMM YYYY, H:mm",
              LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
              llll: "ddd D MMM YYYY, H:mm",
            },
            calendar: {
              sameDay: function () {
                return (
                  "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              nextDay: function () {
                return (
                  "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              nextWeek: function () {
                return (
                  "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              lastDay: function () {
                return (
                  "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              lastWeek: function () {
                return (
                  "[el] dddd [passat a " +
                  (1 !== this.hours() ? "les" : "la") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "d'aquí %s",
              past: "fa %s",
              s: "uns segons",
              ss: "%d segons",
              m: "un minut",
              mm: "%d minuts",
              h: "una hora",
              hh: "%d hores",
              d: "un dia",
              dd: "%d dies",
              M: "un mes",
              MM: "%d mesos",
              y: "un any",
              yy: "%d anys",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
              var n =
                1 === e
                  ? "r"
                  : 2 === e
                  ? "n"
                  : 3 === e
                  ? "r"
                  : 4 === e
                  ? "t"
                  : "è";
              return ("w" !== t && "W" !== t) || (n = "a"), e + n;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5822: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
                "_"
              ),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            a = [
              /^led/i,
              /^úno/i,
              /^bře/i,
              /^dub/i,
              /^kvě/i,
              /^(čvn|červen$|června)/i,
              /^(čvc|červenec|července)/i,
              /^srp/i,
              /^zář/i,
              /^říj/i,
              /^lis/i,
              /^pro/i,
            ],
            s =
              /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
          function r(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10);
          }
          function i(e, t, n, a) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || a ? "pár sekund" : "pár sekundami";
              case "ss":
                return t || a
                  ? s + (r(e) ? "sekundy" : "sekund")
                  : s + "sekundami";
              case "m":
                return t ? "minuta" : a ? "minutu" : "minutou";
              case "mm":
                return t || a
                  ? s + (r(e) ? "minuty" : "minut")
                  : s + "minutami";
              case "h":
                return t ? "hodina" : a ? "hodinu" : "hodinou";
              case "hh":
                return t || a
                  ? s + (r(e) ? "hodiny" : "hodin")
                  : s + "hodinami";
              case "d":
                return t || a ? "den" : "dnem";
              case "dd":
                return t || a ? s + (r(e) ? "dny" : "dní") : s + "dny";
              case "M":
                return t || a ? "měsíc" : "měsícem";
              case "MM":
                return t || a ? s + (r(e) ? "měsíce" : "měsíců") : s + "měsíci";
              case "y":
                return t || a ? "rok" : "rokem";
              case "yy":
                return t || a ? s + (r(e) ? "roky" : "let") : s + "lety";
            }
          }
          e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex:
              /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split(
              "_"
            ),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd D. MMMM YYYY H:mm",
              l: "D. M. YYYY",
            },
            calendar: {
              sameDay: "[dnes v] LT",
              nextDay: "[zítra v] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v neděli v] LT";
                  case 1:
                  case 2:
                    return "[v] dddd [v] LT";
                  case 3:
                    return "[ve středu v] LT";
                  case 4:
                    return "[ve čtvrtek v] LT";
                  case 5:
                    return "[v pátek v] LT";
                  case 6:
                    return "[v sobotu v] LT";
                }
              },
              lastDay: "[včera v] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[minulou neděli v] LT";
                  case 1:
                  case 2:
                    return "[minulé] dddd [v] LT";
                  case 3:
                    return "[minulou středu v] LT";
                  case 4:
                  case 5:
                    return "[minulý] dddd [v] LT";
                  case 6:
                    return "[minulou sobotu v] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "před %s",
              s: i,
              ss: i,
              m: i,
              mm: i,
              h: i,
              hh: i,
              d: i,
              dd: i,
              M: i,
              MM: i,
              y: i,
              yy: i,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      877: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("cv", {
            months:
              "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
                "_"
              ),
            monthsShort:
              "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays:
              "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
                "_"
              ),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
              LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
              LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            },
            calendar: {
              sameDay: "[Паян] LT [сехетре]",
              nextDay: "[Ыран] LT [сехетре]",
              lastDay: "[Ӗнер] LT [сехетре]",
              nextWeek: "[Ҫитес] dddd LT [сехетре]",
              lastWeek: "[Иртнӗ] dddd LT [сехетре]",
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return (
                  e +
                  (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                );
              },
              past: "%s каялла",
              s: "пӗр-ик ҫеккунт",
              ss: "%d ҫеккунт",
              m: "пӗр минут",
              mm: "%d минут",
              h: "пӗр сехет",
              hh: "%d сехет",
              d: "пӗр кун",
              dd: "%d кун",
              M: "пӗр уйӑх",
              MM: "%d уйӑх",
              y: "пӗр ҫул",
              yy: "%d ҫул",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      7373: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("cy", {
            months:
              "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
                "_"
              ),
            monthsShort:
              "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays:
              "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
                "_"
              ),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Heddiw am] LT",
              nextDay: "[Yfory am] LT",
              nextWeek: "dddd [am] LT",
              lastDay: "[Ddoe am] LT",
              lastWeek: "dddd [diwethaf am] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "mewn %s",
              past: "%s yn ôl",
              s: "ychydig eiliadau",
              ss: "%d eiliad",
              m: "munud",
              mm: "%d munud",
              h: "awr",
              hh: "%d awr",
              d: "diwrnod",
              dd: "%d diwrnod",
              M: "mis",
              MM: "%d mis",
              y: "blwyddyn",
              yy: "%d flynedd",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
              var t = "";
              return (
                e > 20
                  ? (t =
                      40 === e || 50 === e || 60 === e || 80 === e || 100 === e
                        ? "fed"
                        : "ain")
                  : e > 0 &&
                    (t = [
                      "",
                      "af",
                      "il",
                      "ydd",
                      "ydd",
                      "ed",
                      "ed",
                      "ed",
                      "fed",
                      "fed",
                      "fed",
                      "eg",
                      "fed",
                      "eg",
                      "eg",
                      "fed",
                      "eg",
                      "eg",
                      "fed",
                      "eg",
                      "fed",
                    ][e]),
                e + t
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      4780: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("da", {
            months:
              "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays:
              "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[i dag kl.] LT",
              nextDay: "[i morgen kl.] LT",
              nextWeek: "på dddd [kl.] LT",
              lastDay: "[i går kl.] LT",
              lastWeek: "[i] dddd[s kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "få sekunder",
              ss: "%d sekunder",
              m: "et minut",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dage",
              M: "en måned",
              MM: "%d måneder",
              y: "et år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      217: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              w: ["eine Woche", "einer Woche"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"],
            };
            return t ? s[n][0] : s[n][1];
          }
          e.defineLocale("de-at", {
            months:
              "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]",
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              ss: "%d Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              w: t,
              ww: "%d Wochen",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      894: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              w: ["eine Woche", "einer Woche"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"],
            };
            return t ? s[n][0] : s[n][1];
          }
          e.defineLocale("de-ch", {
            months:
              "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]",
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              ss: "%d Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              w: t,
              ww: "%d Wochen",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      9740: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              w: ["eine Woche", "einer Woche"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"],
            };
            return t ? s[n][0] : s[n][1];
          }
          e.defineLocale("de", {
            months:
              "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]",
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              ss: "%d Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              w: t,
              ww: "%d Wochen",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5300: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "ޖެނުއަރީ",
              "ފެބްރުއަރީ",
              "މާރިޗު",
              "އޭޕްރީލު",
              "މޭ",
              "ޖޫން",
              "ޖުލައި",
              "އޯގަސްޓު",
              "ސެޕްޓެމްބަރު",
              "އޮކްޓޯބަރު",
              "ނޮވެމްބަރު",
              "ޑިސެމްބަރު",
            ],
            n = [
              "އާދިއްތަ",
              "ހޯމަ",
              "އަންގާރަ",
              "ބުދަ",
              "ބުރާސްފަތި",
              "ހުކުރު",
              "ހޮނިހިރު",
            ];
          e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/M/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
              return "މފ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "މކ" : "މފ";
            },
            calendar: {
              sameDay: "[މިއަދު] LT",
              nextDay: "[މާދަމާ] LT",
              nextWeek: "dddd LT",
              lastDay: "[އިއްޔެ] LT",
              lastWeek: "[ފާއިތުވި] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ތެރޭގައި %s",
              past: "ކުރިން %s",
              s: "ސިކުންތުކޮޅެއް",
              ss: "d% ސިކުންތު",
              m: "މިނިޓެއް",
              mm: "މިނިޓު %d",
              h: "ގަޑިއިރެއް",
              hh: "ގަޑިއިރު %d",
              d: "ދުވަހެއް",
              dd: "ދުވަސް %d",
              M: "މަހެއް",
              MM: "މަސް %d",
              y: "އަހަރެއް",
              yy: "އަހަރު %d",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 7, doy: 12 },
          });
        })(n(381));
      },
      837: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e) {
            return (
              ("undefined" != typeof Function && e instanceof Function) ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          e.defineLocale("el", {
            monthsNominativeEl:
              "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
                "_"
              ),
            monthsGenitiveEl:
              "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
                "_"
              ),
            months: function (e, t) {
              return e
                ? "string" == typeof t &&
                  /D/.test(t.substring(0, t.indexOf("MMMM")))
                  ? this._monthsGenitiveEl[e.month()]
                  : this._monthsNominativeEl[e.month()]
                : this._monthsNominativeEl;
            },
            monthsShort:
              "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays:
              "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split(
                "_"
              ),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "μμ" : "ΜΜ") : n ? "πμ" : "ΠΜ";
            },
            isPM: function (e) {
              return "μ" === (e + "").toLowerCase()[0];
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendarEl: {
              sameDay: "[Σήμερα {}] LT",
              nextDay: "[Αύριο {}] LT",
              nextWeek: "dddd [{}] LT",
              lastDay: "[Χθες {}] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 6:
                    return "[το προηγούμενο] dddd [{}] LT";
                  default:
                    return "[την προηγούμενη] dddd [{}] LT";
                }
              },
              sameElse: "L",
            },
            calendar: function (e, n) {
              var a = this._calendarEl[e],
                s = n && n.hours();
              return (
                t(a) && (a = a.apply(n)),
                a.replace("{}", s % 12 == 1 ? "στη" : "στις")
              );
            },
            relativeTime: {
              future: "σε %s",
              past: "%s πριν",
              s: "λίγα δευτερόλεπτα",
              ss: "%d δευτερόλεπτα",
              m: "ένα λεπτό",
              mm: "%d λεπτά",
              h: "μία ώρα",
              hh: "%d ώρες",
              d: "μία μέρα",
              dd: "%d μέρες",
              M: "ένας μήνας",
              MM: "%d μήνες",
              y: "ένας χρόνος",
              yy: "%d χρόνια",
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      8348: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-au", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 0, doy: 4 },
          });
        })(n(381));
      },
      7925: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-ca", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "YYYY-MM-DD",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
          });
        })(n(381));
      },
      2243: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-gb", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      6436: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-ie", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      7207: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-il", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
          });
        })(n(381));
      },
      4175: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-in", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      6319: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-nz", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      1662: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-sg", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      2915: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("eo", {
            months:
              "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
            weekdays:
              "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "[la] D[-an de] MMMM, YYYY",
              LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
              LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
              llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
              return "p" === e.charAt(0).toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e > 11
                ? n
                  ? "p.t.m."
                  : "P.T.M."
                : n
                ? "a.t.m."
                : "A.T.M.";
            },
            calendar: {
              sameDay: "[Hodiaŭ je] LT",
              nextDay: "[Morgaŭ je] LT",
              nextWeek: "dddd[n je] LT",
              lastDay: "[Hieraŭ je] LT",
              lastWeek: "[pasintan] dddd[n je] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "post %s",
              past: "antaŭ %s",
              s: "kelkaj sekundoj",
              ss: "%d sekundoj",
              m: "unu minuto",
              mm: "%d minutoj",
              h: "unu horo",
              hh: "%d horoj",
              d: "unu tago",
              dd: "%d tagoj",
              M: "unu monato",
              MM: "%d monatoj",
              y: "unu jaro",
              yy: "%d jaroj",
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      5251: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es-do", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      6112: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es-mx", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 0, doy: 4 },
            invalidDate: "Fecha inválida",
          });
        })(n(381));
      },
      1146: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es-us", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "MM/DD/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      7093: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
            invalidDate: "Fecha inválida",
          });
        })(n(381));
      },
      5603: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
              ss: [e + "sekundi", e + "sekundit"],
              m: ["ühe minuti", "üks minut"],
              mm: [e + " minuti", e + " minutit"],
              h: ["ühe tunni", "tund aega", "üks tund"],
              hh: [e + " tunni", e + " tundi"],
              d: ["ühe päeva", "üks päev"],
              M: ["kuu aja", "kuu aega", "üks kuu"],
              MM: [e + " kuu", e + " kuud"],
              y: ["ühe aasta", "aasta", "üks aasta"],
              yy: [e + " aasta", e + " aastat"],
            };
            return t ? (s[n][2] ? s[n][2] : s[n][1]) : a ? s[n][0] : s[n][1];
          }
          e.defineLocale("et", {
            months:
              "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
                "_"
              ),
            monthsShort:
              "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
                "_"
              ),
            weekdays:
              "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
                "_"
              ),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Täna,] LT",
              nextDay: "[Homme,] LT",
              nextWeek: "[Järgmine] dddd LT",
              lastDay: "[Eile,] LT",
              lastWeek: "[Eelmine] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s pärast",
              past: "%s tagasi",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: "%d päeva",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      7763: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("eu", {
            months:
              "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
                "_"
              ),
            monthsShort:
              "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
                "_"
              ),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY[ko] MMMM[ren] D[a]",
              LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
              LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
              l: "YYYY-M-D",
              ll: "YYYY[ko] MMM D[a]",
              lll: "YYYY[ko] MMM D[a] HH:mm",
              llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
            },
            calendar: {
              sameDay: "[gaur] LT[etan]",
              nextDay: "[bihar] LT[etan]",
              nextWeek: "dddd LT[etan]",
              lastDay: "[atzo] LT[etan]",
              lastWeek: "[aurreko] dddd LT[etan]",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s barru",
              past: "duela %s",
              s: "segundo batzuk",
              ss: "%d segundo",
              m: "minutu bat",
              mm: "%d minutu",
              h: "ordu bat",
              hh: "%d ordu",
              d: "egun bat",
              dd: "%d egun",
              M: "hilabete bat",
              MM: "%d hilabete",
              y: "urte bat",
              yy: "%d urte",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      6959: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "۱",
              2: "۲",
              3: "۳",
              4: "۴",
              5: "۵",
              6: "۶",
              7: "۷",
              8: "۸",
              9: "۹",
              0: "۰",
            },
            n = {
              "۱": "1",
              "۲": "2",
              "۳": "3",
              "۴": "4",
              "۵": "5",
              "۶": "6",
              "۷": "7",
              "۸": "8",
              "۹": "9",
              "۰": "0",
            };
          e.defineLocale("fa", {
            months:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            monthsShort:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            weekdays:
              "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort:
              "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
              return /بعد از ظهر/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
            },
            calendar: {
              sameDay: "[امروز ساعت] LT",
              nextDay: "[فردا ساعت] LT",
              nextWeek: "dddd [ساعت] LT",
              lastDay: "[دیروز ساعت] LT",
              lastWeek: "dddd [پیش] [ساعت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "در %s",
              past: "%s پیش",
              s: "چند ثانیه",
              ss: "%d ثانیه",
              m: "یک دقیقه",
              mm: "%d دقیقه",
              h: "یک ساعت",
              hh: "%d ساعت",
              d: "یک روز",
              dd: "%d روز",
              M: "یک ماه",
              MM: "%d ماه",
              y: "یک سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e
                .replace(/[۰-۹]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: { dow: 6, doy: 12 },
          });
        })(n(381));
      },
      1897: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
                " "
              ),
            n = [
              "nolla",
              "yhden",
              "kahden",
              "kolmen",
              "neljän",
              "viiden",
              "kuuden",
              t[7],
              t[8],
              t[9],
            ];
          function a(e, t, n, a) {
            var r = "";
            switch (n) {
              case "s":
                return a ? "muutaman sekunnin" : "muutama sekunti";
              case "ss":
                r = a ? "sekunnin" : "sekuntia";
                break;
              case "m":
                return a ? "minuutin" : "minuutti";
              case "mm":
                r = a ? "minuutin" : "minuuttia";
                break;
              case "h":
                return a ? "tunnin" : "tunti";
              case "hh":
                r = a ? "tunnin" : "tuntia";
                break;
              case "d":
                return a ? "päivän" : "päivä";
              case "dd":
                r = a ? "päivän" : "päivää";
                break;
              case "M":
                return a ? "kuukauden" : "kuukausi";
              case "MM":
                r = a ? "kuukauden" : "kuukautta";
                break;
              case "y":
                return a ? "vuoden" : "vuosi";
              case "yy":
                r = a ? "vuoden" : "vuotta";
            }
            return (r = s(e, a) + " " + r);
          }
          function s(e, a) {
            return e < 10 ? (a ? n[e] : t[e]) : e;
          }
          e.defineLocale("fi", {
            months:
              "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
                "_"
              ),
            monthsShort:
              "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
                "_"
              ),
            weekdays:
              "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
                "_"
              ),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM[ta] YYYY",
              LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
              LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
              l: "D.M.YYYY",
              ll: "Do MMM YYYY",
              lll: "Do MMM YYYY, [klo] HH.mm",
              llll: "ddd, Do MMM YYYY, [klo] HH.mm",
            },
            calendar: {
              sameDay: "[tänään] [klo] LT",
              nextDay: "[huomenna] [klo] LT",
              nextWeek: "dddd [klo] LT",
              lastDay: "[eilen] [klo] LT",
              lastWeek: "[viime] dddd[na] [klo] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s päästä",
              past: "%s sitten",
              s: a,
              ss: a,
              m: a,
              mm: a,
              h: a,
              hh: a,
              d: a,
              dd: a,
              M: a,
              MM: a,
              y: a,
              yy: a,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      2549: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fil", {
            months:
              "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
                "_"
              ),
            monthsShort:
              "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays:
              "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
                "_"
              ),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm",
            },
            calendar: {
              sameDay: "LT [ngayong araw]",
              nextDay: "[Bukas ng] LT",
              nextWeek: "LT [sa susunod na] dddd",
              lastDay: "LT [kahapon]",
              lastWeek: "LT [noong nakaraang] dddd",
              sameElse: "L",
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              ss: "%d segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      4694: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fo", {
            months:
              "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays:
              "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
                "_"
              ),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D. MMMM, YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Í dag kl.] LT",
              nextDay: "[Í morgin kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[Í gjár kl.] LT",
              lastWeek: "[síðstu] dddd [kl] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "um %s",
              past: "%s síðani",
              s: "fá sekund",
              ss: "%d sekundir",
              m: "ein minuttur",
              mm: "%d minuttir",
              h: "ein tími",
              hh: "%d tímar",
              d: "ein dagur",
              dd: "%d dagar",
              M: "ein mánaður",
              MM: "%d mánaðir",
              y: "eitt ár",
              yy: "%d ár",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      3049: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fr-ca", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
              switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
          });
        })(n(381));
      },
      2330: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fr-ch", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
              switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      4470: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            n =
              /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
            a =
              /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            s = [
              /^janv/i,
              /^févr/i,
              /^mars/i,
              /^avr/i,
              /^mai/i,
              /^juin/i,
              /^juil/i,
              /^août/i,
              /^sept/i,
              /^oct/i,
              /^nov/i,
              /^déc/i,
            ];
          e.defineLocale("fr", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: t,
            monthsShortStrictRegex: n,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              w: "une semaine",
              ww: "%d semaines",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5044: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
          e.defineLocale("fy", {
            months:
              "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsParseExact: !0,
            weekdays:
              "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
                "_"
              ),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[hjoed om] LT",
              nextDay: "[moarn om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[juster om] LT",
              lastWeek: "[ôfrûne] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "oer %s",
              past: "%s lyn",
              s: "in pear sekonden",
              ss: "%d sekonden",
              m: "ien minút",
              mm: "%d minuten",
              h: "ien oere",
              hh: "%d oeren",
              d: "ien dei",
              dd: "%d dagen",
              M: "ien moanne",
              MM: "%d moannen",
              y: "ien jier",
              yy: "%d jierren",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      9295: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "Eanáir",
              "Feabhra",
              "Márta",
              "Aibreán",
              "Bealtaine",
              "Meitheamh",
              "Iúil",
              "Lúnasa",
              "Meán Fómhair",
              "Deireadh Fómhair",
              "Samhain",
              "Nollaig",
            ],
            n = [
              "Ean",
              "Feabh",
              "Márt",
              "Aib",
              "Beal",
              "Meith",
              "Iúil",
              "Lún",
              "M.F.",
              "D.F.",
              "Samh",
              "Noll",
            ],
            a = [
              "Dé Domhnaigh",
              "Dé Luain",
              "Dé Máirt",
              "Dé Céadaoin",
              "Déardaoin",
              "Dé hAoine",
              "Dé Sathairn",
            ],
            s = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
            r = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"];
          e.defineLocale("ga", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: a,
            weekdaysShort: s,
            weekdaysMin: r,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Inniu ag] LT",
              nextDay: "[Amárach ag] LT",
              nextWeek: "dddd [ag] LT",
              lastDay: "[Inné ag] LT",
              lastWeek: "dddd [seo caite] [ag] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "i %s",
              past: "%s ó shin",
              s: "cúpla soicind",
              ss: "%d soicind",
              m: "nóiméad",
              mm: "%d nóiméad",
              h: "uair an chloig",
              hh: "%d uair an chloig",
              d: "lá",
              dd: "%d lá",
              M: "mí",
              MM: "%d míonna",
              y: "bliain",
              yy: "%d bliain",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      2101: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "Am Faoilleach",
              "An Gearran",
              "Am Màrt",
              "An Giblean",
              "An Cèitean",
              "An t-Ògmhios",
              "An t-Iuchar",
              "An Lùnastal",
              "An t-Sultain",
              "An Dàmhair",
              "An t-Samhain",
              "An Dùbhlachd",
            ],
            n = [
              "Faoi",
              "Gear",
              "Màrt",
              "Gibl",
              "Cèit",
              "Ògmh",
              "Iuch",
              "Lùn",
              "Sult",
              "Dàmh",
              "Samh",
              "Dùbh",
            ],
            a = [
              "Didòmhnaich",
              "Diluain",
              "Dimàirt",
              "Diciadain",
              "Diardaoin",
              "Dihaoine",
              "Disathairne",
            ],
            s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            r = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
          e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: a,
            weekdaysShort: s,
            weekdaysMin: r,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[An-diugh aig] LT",
              nextDay: "[A-màireach aig] LT",
              nextWeek: "dddd [aig] LT",
              lastDay: "[An-dè aig] LT",
              lastWeek: "dddd [seo chaidh] [aig] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ann an %s",
              past: "bho chionn %s",
              s: "beagan diogan",
              ss: "%d diogan",
              m: "mionaid",
              mm: "%d mionaidean",
              h: "uair",
              hh: "%d uairean",
              d: "latha",
              dd: "%d latha",
              M: "mìos",
              MM: "%d mìosan",
              y: "bliadhna",
              yy: "%d bliadhna",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      8794: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("gl", {
            months:
              "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
                "_"
              ),
            monthsShort:
              "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split(
              "_"
            ),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            calendar: {
              sameDay: function () {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextDay: function () {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextWeek: function () {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
              },
              lastDay: function () {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[o] dddd [pasado " +
                  (1 !== this.hours() ? "ás" : "a") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return 0 === e.indexOf("un") ? "n" + e : "en " + e;
              },
              past: "hai %s",
              s: "uns segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "unha hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      7884: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
              ss: [e + " सॅकंडांनी", e + " सॅकंड"],
              m: ["एका मिणटान", "एक मिनूट"],
              mm: [e + " मिणटांनी", e + " मिणटां"],
              h: ["एका वरान", "एक वर"],
              hh: [e + " वरांनी", e + " वरां"],
              d: ["एका दिसान", "एक दीस"],
              dd: [e + " दिसांनी", e + " दीस"],
              M: ["एका म्हयन्यान", "एक म्हयनो"],
              MM: [e + " म्हयन्यानी", e + " म्हयने"],
              y: ["एका वर्सान", "एक वर्स"],
              yy: [e + " वर्सांनी", e + " वर्सां"],
            };
            return a ? s[n][0] : s[n][1];
          }
          e.defineLocale("gom-deva", {
            months: {
              standalone:
                "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                  "_"
                ),
              format:
                "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
                  "_"
                ),
              isFormat: /MMMM(\s)+D[oD]?/,
            },
            monthsShort:
              "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
            weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split(
              "_"
            ),
            weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "A h:mm [वाजतां]",
              LTS: "A h:mm:ss [वाजतां]",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY A h:mm [वाजतां]",
              LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
              llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
            },
            calendar: {
              sameDay: "[आयज] LT",
              nextDay: "[फाल्यां] LT",
              nextWeek: "[फुडलो] dddd[,] LT",
              lastDay: "[काल] LT",
              lastWeek: "[फाटलो] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s",
              past: "%s आदीं",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + "वेर";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                  return e;
              }
            },
            week: { dow: 0, doy: 3 },
            meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "राती" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सकाळीं" === t
                  ? e
                  : "दनपारां" === t
                  ? e > 12
                    ? e
                    : e + 12
                  : "सांजे" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "राती"
                : e < 12
                ? "सकाळीं"
                : e < 16
                ? "दनपारां"
                : e < 20
                ? "सांजे"
                : "राती";
            },
          });
        })(n(381));
      },
      3168: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["thoddea sekondamni", "thodde sekond"],
              ss: [e + " sekondamni", e + " sekond"],
              m: ["eka mintan", "ek minut"],
              mm: [e + " mintamni", e + " mintam"],
              h: ["eka voran", "ek vor"],
              hh: [e + " voramni", e + " voram"],
              d: ["eka disan", "ek dis"],
              dd: [e + " disamni", e + " dis"],
              M: ["eka mhoinean", "ek mhoino"],
              MM: [e + " mhoineamni", e + " mhoine"],
              y: ["eka vorsan", "ek voros"],
              yy: [e + " vorsamni", e + " vorsam"],
            };
            return a ? s[n][0] : s[n][1];
          }
          e.defineLocale("gom-latn", {
            months: {
              standalone:
                "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
                  "_"
                ),
              format:
                "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
                  "_"
                ),
              isFormat: /MMMM(\s)+D[oD]?/,
            },
            monthsShort:
              "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "A h:mm [vazta]",
              LTS: "A h:mm:ss [vazta]",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY A h:mm [vazta]",
              LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
              llll: "ddd, D MMM YYYY, A h:mm [vazta]",
            },
            calendar: {
              sameDay: "[Aiz] LT",
              nextDay: "[Faleam] LT",
              nextWeek: "[Fuddlo] dddd[,] LT",
              lastDay: "[Kal] LT",
              lastWeek: "[Fattlo] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s",
              past: "%s adim",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                  return e;
              }
            },
            week: { dow: 0, doy: 3 },
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "rati" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "sokallim" === t
                  ? e
                  : "donparam" === t
                  ? e > 12
                    ? e
                    : e + 12
                  : "sanje" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "rati"
                : e < 12
                ? "sokallim"
                : e < 16
                ? "donparam"
                : e < 20
                ? "sanje"
                : "rati";
            },
          });
        })(n(381));
      },
      5349: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "૧",
              2: "૨",
              3: "૩",
              4: "૪",
              5: "૫",
              6: "૬",
              7: "૭",
              8: "૮",
              9: "૯",
              0: "૦",
            },
            n = {
              "૧": "1",
              "૨": "2",
              "૩": "3",
              "૪": "4",
              "૫": "5",
              "૬": "6",
              "૭": "7",
              "૮": "8",
              "૯": "9",
              "૦": "0",
            };
          e.defineLocale("gu", {
            months:
              "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
                "_"
              ),
            monthsShort:
              "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
                "_"
              ),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
              LT: "A h:mm વાગ્યે",
              LTS: "A h:mm:ss વાગ્યે",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm વાગ્યે",
              LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
            },
            calendar: {
              sameDay: "[આજ] LT",
              nextDay: "[કાલે] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ગઇકાલે] LT",
              lastWeek: "[પાછલા] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s મા",
              past: "%s પહેલા",
              s: "અમુક પળો",
              ss: "%d સેકંડ",
              m: "એક મિનિટ",
              mm: "%d મિનિટ",
              h: "એક કલાક",
              hh: "%d કલાક",
              d: "એક દિવસ",
              dd: "%d દિવસ",
              M: "એક મહિનો",
              MM: "%d મહિનો",
              y: "એક વર્ષ",
              yy: "%d વર્ષ",
            },
            preparse: function (e) {
              return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "રાત" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "સવાર" === t
                  ? e
                  : "બપોર" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "સાંજ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "રાત"
                : e < 10
                ? "સવાર"
                : e < 17
                ? "બપોર"
                : e < 20
                ? "સાંજ"
                : "રાત";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      4206: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("he", {
            months:
              "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
                "_"
              ),
            monthsShort:
              "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
                "_"
              ),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [ב]MMMM YYYY",
              LLL: "D [ב]MMMM YYYY HH:mm",
              LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
              l: "D/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[היום ב־]LT",
              nextDay: "[מחר ב־]LT",
              nextWeek: "dddd [בשעה] LT",
              lastDay: "[אתמול ב־]LT",
              lastWeek: "[ביום] dddd [האחרון בשעה] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "בעוד %s",
              past: "לפני %s",
              s: "מספר שניות",
              ss: "%d שניות",
              m: "דקה",
              mm: "%d דקות",
              h: "שעה",
              hh: function (e) {
                return 2 === e ? "שעתיים" : e + " שעות";
              },
              d: "יום",
              dd: function (e) {
                return 2 === e ? "יומיים" : e + " ימים";
              },
              M: "חודש",
              MM: function (e) {
                return 2 === e ? "חודשיים" : e + " חודשים";
              },
              y: "שנה",
              yy: function (e) {
                return 2 === e
                  ? "שנתיים"
                  : e % 10 == 0 && 10 !== e
                  ? e + " שנה"
                  : e + " שנים";
              },
            },
            meridiemParse:
              /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
              return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 5
                ? "לפנות בוקר"
                : e < 10
                ? "בבוקר"
                : e < 12
                ? n
                  ? 'לפנה"צ'
                  : "לפני הצהריים"
                : e < 18
                ? n
                  ? 'אחה"צ'
                  : "אחרי הצהריים"
                : "בערב";
            },
          });
        })(n(381));
      },
      94: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            },
            a = [
              /^जन/i,
              /^फ़र|फर/i,
              /^मार्च/i,
              /^अप्रै/i,
              /^मई/i,
              /^जून/i,
              /^जुल/i,
              /^अग/i,
              /^सितं|सित/i,
              /^अक्टू/i,
              /^नव|नवं/i,
              /^दिसं|दिस/i,
            ],
            s = [
              /^जन/i,
              /^फ़र/i,
              /^मार्च/i,
              /^अप्रै/i,
              /^मई/i,
              /^जून/i,
              /^जुल/i,
              /^अग/i,
              /^सित/i,
              /^अक्टू/i,
              /^नव/i,
              /^दिस/i,
            ];
          e.defineLocale("hi", {
            months: {
              format:
                "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
                  "_"
                ),
              standalone:
                "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split(
                  "_"
                ),
            },
            monthsShort:
              "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
                "_"
              ),
            weekdays:
              "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm बजे",
              LTS: "A h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
            },
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: s,
            monthsRegex:
              /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsShortRegex:
              /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsStrictRegex:
              /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
            monthsShortStrictRegex:
              /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[कल] LT",
              nextWeek: "dddd, LT",
              lastDay: "[कल] LT",
              lastWeek: "[पिछले] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s में",
              past: "%s पहले",
              s: "कुछ ही क्षण",
              ss: "%d सेकंड",
              m: "एक मिनट",
              mm: "%d मिनट",
              h: "एक घंटा",
              hh: "%d घंटे",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महीने",
              MM: "%d महीने",
              y: "एक वर्ष",
              yy: "%d वर्ष",
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "रात" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सुबह" === t
                  ? e
                  : "दोपहर" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "शाम" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "रात"
                : e < 10
                ? "सुबह"
                : e < 17
                ? "दोपहर"
                : e < 20
                ? "शाम"
                : "रात";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      316: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return (a +=
                  1 === e
                    ? "sekunda"
                    : 2 === e || 3 === e || 4 === e
                    ? "sekunde"
                    : "sekundi");
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (a +=
                  1 === e
                    ? "minuta"
                    : 2 === e || 3 === e || 4 === e
                    ? "minute"
                    : "minuta");
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (a +=
                  1 === e
                    ? "sat"
                    : 2 === e || 3 === e || 4 === e
                    ? "sata"
                    : "sati");
              case "dd":
                return (a += 1 === e ? "dan" : "dana");
              case "MM":
                return (a +=
                  1 === e
                    ? "mjesec"
                    : 2 === e || 3 === e || 4 === e
                    ? "mjeseca"
                    : "mjeseci");
              case "yy":
                return (a +=
                  1 === e
                    ? "godina"
                    : 2 === e || 3 === e || 4 === e
                    ? "godine"
                    : "godina");
            }
          }
          e.defineLocale("hr", {
            months: {
              format:
                "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
                  "_"
                ),
              standalone:
                "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
                  "_"
                ),
            },
            monthsShort:
              "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM YYYY",
              LLL: "Do MMMM YYYY H:mm",
              LLLL: "dddd, Do MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[prošlu] [nedjelju] [u] LT";
                  case 3:
                    return "[prošlu] [srijedu] [u] LT";
                  case 6:
                    return "[prošle] [subote] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: "dan",
              dd: t,
              M: "mjesec",
              MM: t,
              y: "godinu",
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      2138: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
            "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
              " "
            );
          function n(e, t, n, a) {
            var s = e;
            switch (n) {
              case "s":
                return a || t ? "néhány másodperc" : "néhány másodperce";
              case "ss":
                return s + (a || t) ? " másodperc" : " másodperce";
              case "m":
                return "egy" + (a || t ? " perc" : " perce");
              case "mm":
                return s + (a || t ? " perc" : " perce");
              case "h":
                return "egy" + (a || t ? " óra" : " órája");
              case "hh":
                return s + (a || t ? " óra" : " órája");
              case "d":
                return "egy" + (a || t ? " nap" : " napja");
              case "dd":
                return s + (a || t ? " nap" : " napja");
              case "M":
                return "egy" + (a || t ? " hónap" : " hónapja");
              case "MM":
                return s + (a || t ? " hónap" : " hónapja");
              case "y":
                return "egy" + (a || t ? " év" : " éve");
              case "yy":
                return s + (a || t ? " év" : " éve");
            }
            return "";
          }
          function a(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
          }
          e.defineLocale("hu", {
            months:
              "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY. MMMM D.",
              LLL: "YYYY. MMMM D. H:mm",
              LLLL: "YYYY. MMMM D., dddd H:mm",
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
              return "u" === e.charAt(1).toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
            },
            calendar: {
              sameDay: "[ma] LT[-kor]",
              nextDay: "[holnap] LT[-kor]",
              nextWeek: function () {
                return a.call(this, !0);
              },
              lastDay: "[tegnap] LT[-kor]",
              lastWeek: function () {
                return a.call(this, !1);
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "%s múlva",
              past: "%s",
              s: n,
              ss: n,
              m: n,
              mm: n,
              h: n,
              hh: n,
              d: n,
              dd: n,
              M: n,
              MM: n,
              y: n,
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      1423: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("hy-am", {
            months: {
              format:
                "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
                  "_"
                ),
              standalone:
                "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
                  "_"
                ),
            },
            monthsShort:
              "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays:
              "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
                "_"
              ),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY թ.",
              LLL: "D MMMM YYYY թ., HH:mm",
              LLLL: "dddd, D MMMM YYYY թ., HH:mm",
            },
            calendar: {
              sameDay: "[այսօր] LT",
              nextDay: "[վաղը] LT",
              lastDay: "[երեկ] LT",
              nextWeek: function () {
                return "dddd [օրը ժամը] LT";
              },
              lastWeek: function () {
                return "[անցած] dddd [օրը ժամը] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "%s հետո",
              past: "%s առաջ",
              s: "մի քանի վայրկյան",
              ss: "%d վայրկյան",
              m: "րոպե",
              mm: "%d րոպե",
              h: "ժամ",
              hh: "%d ժամ",
              d: "օր",
              dd: "%d օր",
              M: "ամիս",
              MM: "%d ամիս",
              y: "տարի",
              yy: "%d տարի",
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
              return /^(ցերեկվա|երեկոյան)$/.test(e);
            },
            meridiem: function (e) {
              return e < 4
                ? "գիշերվա"
                : e < 12
                ? "առավոտվա"
                : e < 17
                ? "ցերեկվա"
                : "երեկոյան";
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
              switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                  return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      9218: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("id", {
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "siang" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sore" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "siang"
                : e < 19
                ? "sore"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Besok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kemarin pukul] LT",
              lastWeek: "dddd [lalu pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lalu",
              s: "beberapa detik",
              ss: "%d detik",
              m: "semenit",
              mm: "%d menit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      135: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e) {
            return e % 100 == 11 || e % 10 != 1;
          }
          function n(e, n, a, s) {
            var r = e + " ";
            switch (a) {
              case "s":
                return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
              case "ss":
                return t(e)
                  ? r + (n || s ? "sekúndur" : "sekúndum")
                  : r + "sekúnda";
              case "m":
                return n ? "mínúta" : "mínútu";
              case "mm":
                return t(e)
                  ? r + (n || s ? "mínútur" : "mínútum")
                  : n
                  ? r + "mínúta"
                  : r + "mínútu";
              case "hh":
                return t(e)
                  ? r + (n || s ? "klukkustundir" : "klukkustundum")
                  : r + "klukkustund";
              case "d":
                return n ? "dagur" : s ? "dag" : "degi";
              case "dd":
                return t(e)
                  ? n
                    ? r + "dagar"
                    : r + (s ? "daga" : "dögum")
                  : n
                  ? r + "dagur"
                  : r + (s ? "dag" : "degi");
              case "M":
                return n ? "mánuður" : s ? "mánuð" : "mánuði";
              case "MM":
                return t(e)
                  ? n
                    ? r + "mánuðir"
                    : r + (s ? "mánuði" : "mánuðum")
                  : n
                  ? r + "mánuður"
                  : r + (s ? "mánuð" : "mánuði");
              case "y":
                return n || s ? "ár" : "ári";
              case "yy":
                return t(e)
                  ? r + (n || s ? "ár" : "árum")
                  : r + (n || s ? "ár" : "ári");
            }
          }
          e.defineLocale("is", {
            months:
              "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays:
              "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
                "_"
              ),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
            },
            calendar: {
              sameDay: "[í dag kl.] LT",
              nextDay: "[á morgun kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[í gær kl.] LT",
              lastWeek: "[síðasta] dddd [kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "eftir %s",
              past: "fyrir %s síðan",
              s: n,
              ss: n,
              m: n,
              mm: n,
              h: "klukkustund",
              hh: n,
              d: n,
              dd: n,
              M: n,
              MM: n,
              y: n,
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      150: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("it-ch", {
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            monthsShort:
              "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
                "_"
              ),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Oggi alle] LT",
              nextDay: "[Domani alle] LT",
              nextWeek: "dddd [alle] LT",
              lastDay: "[Ieri alle] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[la scorsa] dddd [alle] LT";
                  default:
                    return "[lo scorso] dddd [alle] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
              },
              past: "%s fa",
              s: "alcuni secondi",
              ss: "%d secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      626: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("it", {
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            monthsShort:
              "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
                "_"
              ),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: function () {
                return (
                  "[Oggi a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              nextDay: function () {
                return (
                  "[Domani a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              nextWeek: function () {
                return (
                  "dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              lastDay: function () {
                return (
                  "[Ieri a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return (
                      "[La scorsa] dddd [a" +
                      (this.hours() > 1
                        ? "lle "
                        : 0 === this.hours()
                        ? " "
                        : "ll'") +
                      "]LT"
                    );
                  default:
                    return (
                      "[Lo scorso] dddd [a" +
                      (this.hours() > 1
                        ? "lle "
                        : 0 === this.hours()
                        ? " "
                        : "ll'") +
                      "]LT"
                    );
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "tra %s",
              past: "%s fa",
              s: "alcuni secondi",
              ss: "%d secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              w: "una settimana",
              ww: "%d settimane",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      9183: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ja", {
            eras: [
              {
                since: "2019-05-01",
                offset: 1,
                name: "令和",
                narrow: "㋿",
                abbr: "R",
              },
              {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "平成",
                narrow: "㍻",
                abbr: "H",
              },
              {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "昭和",
                narrow: "㍼",
                abbr: "S",
              },
              {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "大正",
                narrow: "㍽",
                abbr: "T",
              },
              {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "明治",
                narrow: "㍾",
                abbr: "M",
              },
              {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "西暦",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "紀元前",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            eraYearOrdinalRegex: /(元|\d+)年/,
            eraYearOrdinalParse: function (e, t) {
              return "元" === t[1] ? 1 : parseInt(t[1] || e, 10);
            },
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split(
              "_"
            ),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日 dddd HH:mm",
              l: "YYYY/MM/DD",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日(ddd) HH:mm",
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
              return "午後" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "午前" : "午後";
            },
            calendar: {
              sameDay: "[今日] LT",
              nextDay: "[明日] LT",
              nextWeek: function (e) {
                return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
              },
              lastDay: "[昨日] LT",
              lastWeek: function (e) {
                return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT";
              },
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
              switch (t) {
                case "y":
                  return 1 === e ? "元年" : e + "年";
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "数秒",
              ss: "%d秒",
              m: "1分",
              mm: "%d分",
              h: "1時間",
              hh: "%d時間",
              d: "1日",
              dd: "%d日",
              M: "1ヶ月",
              MM: "%dヶ月",
              y: "1年",
              yy: "%d年",
            },
          });
        })(n(381));
      },
      4286: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("jv", {
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "enjing" === t
                  ? e
                  : "siyang" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sonten" === t || "ndalu" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "enjing"
                : e < 15
                ? "siyang"
                : e < 19
                ? "sonten"
                : "ndalu";
            },
            calendar: {
              sameDay: "[Dinten puniko pukul] LT",
              nextDay: "[Mbenjang pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kala wingi pukul] LT",
              lastWeek: "dddd [kepengker pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "wonten ing %s",
              past: "%s ingkang kepengker",
              s: "sawetawis detik",
              ss: "%d detik",
              m: "setunggal menit",
              mm: "%d menit",
              h: "setunggal jam",
              hh: "%d jam",
              d: "sedinten",
              dd: "%d dinten",
              M: "sewulan",
              MM: "%d wulan",
              y: "setaun",
              yy: "%d taun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      2105: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ka", {
            months:
              "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
                "_"
              ),
            monthsShort:
              "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
              standalone:
                "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
                  "_"
                ),
              format:
                "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
                  "_"
                ),
              isFormat: /(წინა|შემდეგ)/,
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[დღეს] LT[-ზე]",
              nextDay: "[ხვალ] LT[-ზე]",
              lastDay: "[გუშინ] LT[-ზე]",
              nextWeek: "[შემდეგ] dddd LT[-ზე]",
              lastWeek: "[წინა] dddd LT-ზე",
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return e.replace(
                  /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
                  function (e, t, n) {
                    return "ი" === n ? t + "ში" : t + n + "ში";
                  }
                );
              },
              past: function (e) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                  ? e.replace(/(ი|ე)$/, "ის წინ")
                  : /წელი/.test(e)
                  ? e.replace(/წელი$/, "წლის წინ")
                  : e;
              },
              s: "რამდენიმე წამი",
              ss: "%d წამი",
              m: "წუთი",
              mm: "%d წუთი",
              h: "საათი",
              hh: "%d საათი",
              d: "დღე",
              dd: "%d დღე",
              M: "თვე",
              MM: "%d თვე",
              y: "წელი",
              yy: "%d წელი",
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
              return 0 === e
                ? e
                : 1 === e
                ? e + "-ლი"
                : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
                ? "მე-" + e
                : e + "-ე";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      7772: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші",
          };
          e.defineLocale("kk", {
            months:
              "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
                "_"
              ),
            monthsShort:
              "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays:
              "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split(
                "_"
              ),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Бүгін сағат] LT",
              nextDay: "[Ертең сағат] LT",
              nextWeek: "dddd [сағат] LT",
              lastDay: "[Кеше сағат] LT",
              lastWeek: "[Өткен аптаның] dddd [сағат] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ішінде",
              past: "%s бұрын",
              s: "бірнеше секунд",
              ss: "%d секунд",
              m: "бір минут",
              mm: "%d минут",
              h: "бір сағат",
              hh: "%d сағат",
              d: "бір күн",
              dd: "%d күн",
              M: "бір ай",
              MM: "%d ай",
              y: "бір жыл",
              yy: "%d жыл",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
              var n = e % 10,
                a = e >= 100 ? 100 : null;
              return e + (t[e] || t[n] || t[a]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      8758: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "១",
              2: "២",
              3: "៣",
              4: "៤",
              5: "៥",
              6: "៦",
              7: "៧",
              8: "៨",
              9: "៩",
              0: "០",
            },
            n = {
              "១": "1",
              "២": "2",
              "៣": "3",
              "៤": "4",
              "៥": "5",
              "៦": "6",
              "៧": "7",
              "៨": "8",
              "៩": "9",
              "០": "0",
            };
          e.defineLocale("km", {
            months:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            monthsShort:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split(
              "_"
            ),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (e) {
              return "ល្ងាច" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ព្រឹក" : "ល្ងាច";
            },
            calendar: {
              sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
              nextDay: "[ស្អែក ម៉ោង] LT",
              nextWeek: "dddd [ម៉ោង] LT",
              lastDay: "[ម្សិលមិញ ម៉ោង] LT",
              lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sទៀត",
              past: "%sមុន",
              s: "ប៉ុន្មានវិនាទី",
              ss: "%d វិនាទី",
              m: "មួយនាទី",
              mm: "%d នាទី",
              h: "មួយម៉ោង",
              hh: "%d ម៉ោង",
              d: "មួយថ្ងៃ",
              dd: "%d ថ្ងៃ",
              M: "មួយខែ",
              MM: "%d ខែ",
              y: "មួយឆ្នាំ",
              yy: "%d ឆ្នាំ",
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function (e) {
              return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      9282: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "೧",
              2: "೨",
              3: "೩",
              4: "೪",
              5: "೫",
              6: "೬",
              7: "೭",
              8: "೮",
              9: "೯",
              0: "೦",
            },
            n = {
              "೧": "1",
              "೨": "2",
              "೩": "3",
              "೪": "4",
              "೫": "5",
              "೬": "6",
              "೭": "7",
              "೮": "8",
              "೯": "9",
              "೦": "0",
            };
          e.defineLocale("kn", {
            months:
              "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
                "_"
              ),
            monthsShort:
              "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split(
                "_"
              ),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[ಇಂದು] LT",
              nextDay: "[ನಾಳೆ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ನಿನ್ನೆ] LT",
              lastWeek: "[ಕೊನೆಯ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ನಂತರ",
              past: "%s ಹಿಂದೆ",
              s: "ಕೆಲವು ಕ್ಷಣಗಳು",
              ss: "%d ಸೆಕೆಂಡುಗಳು",
              m: "ಒಂದು ನಿಮಿಷ",
              mm: "%d ನಿಮಿಷ",
              h: "ಒಂದು ಗಂಟೆ",
              hh: "%d ಗಂಟೆ",
              d: "ಒಂದು ದಿನ",
              dd: "%d ದಿನ",
              M: "ಒಂದು ತಿಂಗಳು",
              MM: "%d ತಿಂಗಳು",
              y: "ಒಂದು ವರ್ಷ",
              yy: "%d ವರ್ಷ",
            },
            preparse: function (e) {
              return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ರಾತ್ರಿ" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ಬೆಳಿಗ್ಗೆ" === t
                  ? e
                  : "ಮಧ್ಯಾಹ್ನ" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "ಸಂಜೆ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ರಾತ್ರಿ"
                : e < 10
                ? "ಬೆಳಿಗ್ಗೆ"
                : e < 17
                ? "ಮಧ್ಯಾಹ್ನ"
                : e < 20
                ? "ಸಂಜೆ"
                : "ರಾತ್ರಿ";
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
              return e + "ನೇ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      3730: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
              "_"
            ),
            monthsShort:
              "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split(
              "_"
            ),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY년 MMMM D일",
              LLL: "YYYY년 MMMM D일 A h:mm",
              LLLL: "YYYY년 MMMM D일 dddd A h:mm",
              l: "YYYY.MM.DD.",
              ll: "YYYY년 MMMM D일",
              lll: "YYYY년 MMMM D일 A h:mm",
              llll: "YYYY년 MMMM D일 dddd A h:mm",
            },
            calendar: {
              sameDay: "오늘 LT",
              nextDay: "내일 LT",
              nextWeek: "dddd LT",
              lastDay: "어제 LT",
              lastWeek: "지난주 dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s 후",
              past: "%s 전",
              s: "몇 초",
              ss: "%d초",
              m: "1분",
              mm: "%d분",
              h: "한 시간",
              hh: "%d시간",
              d: "하루",
              dd: "%d일",
              M: "한 달",
              MM: "%d달",
              y: "일 년",
              yy: "%d년",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "일";
                case "M":
                  return e + "월";
                case "w":
                case "W":
                  return e + "주";
                default:
                  return e;
              }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
              return "오후" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "오전" : "오후";
            },
          });
        })(n(381));
      },
      1408: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            },
            a = [
              "کانونی دووەم",
              "شوبات",
              "ئازار",
              "نیسان",
              "ئایار",
              "حوزەیران",
              "تەمموز",
              "ئاب",
              "ئەیلوول",
              "تشرینی یەكەم",
              "تشرینی دووەم",
              "كانونی یەکەم",
            ];
          e.defineLocale("ku", {
            months: a,
            monthsShort: a,
            weekdays:
              "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
                "_"
              ),
            weekdaysShort:
              "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split(
                "_"
              ),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (e) {
              return /ئێواره‌/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "به‌یانی" : "ئێواره‌";
            },
            calendar: {
              sameDay: "[ئه‌مرۆ كاتژمێر] LT",
              nextDay: "[به‌یانی كاتژمێر] LT",
              nextWeek: "dddd [كاتژمێر] LT",
              lastDay: "[دوێنێ كاتژمێر] LT",
              lastWeek: "dddd [كاتژمێر] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "له‌ %s",
              past: "%s",
              s: "چه‌ند چركه‌یه‌ك",
              ss: "چركه‌ %d",
              m: "یه‌ك خوله‌ك",
              mm: "%d خوله‌ك",
              h: "یه‌ك كاتژمێر",
              hh: "%d كاتژمێر",
              d: "یه‌ك ڕۆژ",
              dd: "%d ڕۆژ",
              M: "یه‌ك مانگ",
              MM: "%d مانگ",
              y: "یه‌ك ساڵ",
              yy: "%d ساڵ",
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(381));
      },
      3291: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү",
          };
          e.defineLocale("ky", {
            months:
              "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                "_"
              ),
            monthsShort:
              "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays:
              "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split(
                "_"
              ),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Бүгүн саат] LT",
              nextDay: "[Эртең саат] LT",
              nextWeek: "dddd [саат] LT",
              lastDay: "[Кечээ саат] LT",
              lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ичинде",
              past: "%s мурун",
              s: "бирнече секунд",
              ss: "%d секунд",
              m: "бир мүнөт",
              mm: "%d мүнөт",
              h: "бир саат",
              hh: "%d саат",
              d: "бир күн",
              dd: "%d күн",
              M: "бир ай",
              MM: "%d ай",
              y: "бир жыл",
              yy: "%d жыл",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
              var n = e % 10,
                a = e >= 100 ? 100 : null;
              return e + (t[e] || t[n] || t[a]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      6841: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eng Minutt", "enger Minutt"],
              h: ["eng Stonn", "enger Stonn"],
              d: ["een Dag", "engem Dag"],
              M: ["ee Mount", "engem Mount"],
              y: ["ee Joer", "engem Joer"],
            };
            return t ? s[n][0] : s[n][1];
          }
          function n(e) {
            return s(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
          }
          function a(e) {
            return s(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
          }
          function s(e) {
            if (((e = parseInt(e, 10)), isNaN(e))) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
              var t = e % 10;
              return s(0 === t ? e / 10 : t);
            }
            if (e < 1e4) {
              for (; e >= 10; ) e /= 10;
              return s(e);
            }
            return s((e /= 1e3));
          }
          e.defineLocale("lb", {
            months:
              "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
                "_"
              ),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm [Auer]",
              LTS: "H:mm:ss [Auer]",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm [Auer]",
              LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
            },
            calendar: {
              sameDay: "[Haut um] LT",
              sameElse: "L",
              nextDay: "[Muer um] LT",
              nextWeek: "dddd [um] LT",
              lastDay: "[Gëschter um] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 2:
                  case 4:
                    return "[Leschten] dddd [um] LT";
                  default:
                    return "[Leschte] dddd [um] LT";
                }
              },
            },
            relativeTime: {
              future: n,
              past: a,
              s: "e puer Sekonnen",
              ss: "%d Sekonnen",
              m: t,
              mm: "%d Minutten",
              h: t,
              hh: "%d Stonnen",
              d: t,
              dd: "%d Deeg",
              M: t,
              MM: "%d Méint",
              y: t,
              yy: "%d Joer",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5466: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("lo", {
            months:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            monthsShort:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "ວັນdddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
              return "ຕອນແລງ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
            },
            calendar: {
              sameDay: "[ມື້ນີ້ເວລາ] LT",
              nextDay: "[ມື້ອື່ນເວລາ] LT",
              nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
              lastDay: "[ມື້ວານນີ້ເວລາ] LT",
              lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ອີກ %s",
              past: "%sຜ່ານມາ",
              s: "ບໍ່ເທົ່າໃດວິນາທີ",
              ss: "%d ວິນາທີ",
              m: "1 ນາທີ",
              mm: "%d ນາທີ",
              h: "1 ຊົ່ວໂມງ",
              hh: "%d ຊົ່ວໂມງ",
              d: "1 ມື້",
              dd: "%d ມື້",
              M: "1 ເດືອນ",
              MM: "%d ເດືອນ",
              y: "1 ປີ",
              yy: "%d ປີ",
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
              return "ທີ່" + e;
            },
          });
        })(n(381));
      },
      7010: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus",
          };
          function n(e, t, n, a) {
            return t
              ? "kelios sekundės"
              : a
              ? "kelių sekundžių"
              : "kelias sekundes";
          }
          function a(e, t, n, a) {
            return t ? r(n)[0] : a ? r(n)[1] : r(n)[2];
          }
          function s(e) {
            return e % 10 == 0 || (e > 10 && e < 20);
          }
          function r(e) {
            return t[e].split("_");
          }
          function i(e, t, n, i) {
            var o = e + " ";
            return 1 === e
              ? o + a(e, t, n[0], i)
              : t
              ? o + (s(e) ? r(n)[1] : r(n)[0])
              : i
              ? o + r(n)[1]
              : o + (s(e) ? r(n)[1] : r(n)[2]);
          }
          e.defineLocale("lt", {
            months: {
              format:
                "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
                  "_"
                ),
              standalone:
                "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
                  "_"
                ),
              isFormat:
                /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
            },
            monthsShort:
              "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
              format:
                "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
                  "_"
                ),
              standalone:
                "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
                  "_"
                ),
              isFormat: /dddd HH:mm/,
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY [m.] MMMM D [d.]",
              LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
              l: "YYYY-MM-DD",
              ll: "YYYY [m.] MMMM D [d.]",
              lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
            },
            calendar: {
              sameDay: "[Šiandien] LT",
              nextDay: "[Rytoj] LT",
              nextWeek: "dddd LT",
              lastDay: "[Vakar] LT",
              lastWeek: "[Praėjusį] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "po %s",
              past: "prieš %s",
              s: n,
              ss: i,
              m: a,
              mm: i,
              h: a,
              hh: i,
              d: a,
              dd: i,
              M: a,
              MM: i,
              y: a,
              yy: i,
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
              return e + "-oji";
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      7595: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_"),
          };
          function n(e, t, n) {
            return n
              ? t % 10 == 1 && t % 100 != 11
                ? e[2]
                : e[3]
              : t % 10 == 1 && t % 100 != 11
              ? e[0]
              : e[1];
          }
          function a(e, a, s) {
            return e + " " + n(t[s], e, a);
          }
          function s(e, a, s) {
            return n(t[s], e, a);
          }
          function r(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm";
          }
          e.defineLocale("lv", {
            months:
              "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays:
              "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
                "_"
              ),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY.",
              LL: "YYYY. [gada] D. MMMM",
              LLL: "YYYY. [gada] D. MMMM, HH:mm",
              LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
            },
            calendar: {
              sameDay: "[Šodien pulksten] LT",
              nextDay: "[Rīt pulksten] LT",
              nextWeek: "dddd [pulksten] LT",
              lastDay: "[Vakar pulksten] LT",
              lastWeek: "[Pagājušā] dddd [pulksten] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "pēc %s",
              past: "pirms %s",
              s: r,
              ss: a,
              m: s,
              mm: a,
              h: s,
              hh: a,
              d: s,
              dd: a,
              M: s,
              MM: a,
              y: s,
              yy: a,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      9861: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["sekund", "sekunda", "sekundi"],
              m: ["jedan minut", "jednog minuta"],
              mm: ["minut", "minuta", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mjesec", "mjeseca", "mjeseci"],
              yy: ["godina", "godine", "godina"],
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, a) {
              var s = t.words[a];
              return 1 === a.length
                ? n
                  ? s[0]
                  : s[1]
                : e + " " + t.correctGrammaticalCase(e, s);
            },
          };
          e.defineLocale("me", {
            months:
              "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sjutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedjelje] [u] LT",
                  "[prošlog] [ponedjeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srijede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mjesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      5493: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("mi", {
            months:
              "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
                "_"
              ),
            monthsShort:
              "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
                "_"
              ),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split(
              "_"
            ),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [i] HH:mm",
              LLLL: "dddd, D MMMM YYYY [i] HH:mm",
            },
            calendar: {
              sameDay: "[i teie mahana, i] LT",
              nextDay: "[apopo i] LT",
              nextWeek: "dddd [i] LT",
              lastDay: "[inanahi i] LT",
              lastWeek: "dddd [whakamutunga i] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "i roto i %s",
              past: "%s i mua",
              s: "te hēkona ruarua",
              ss: "%d hēkona",
              m: "he meneti",
              mm: "%d meneti",
              h: "te haora",
              hh: "%d haora",
              d: "he ra",
              dd: "%d ra",
              M: "he marama",
              MM: "%d marama",
              y: "he tau",
              yy: "%d tau",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5966: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("mk", {
            months:
              "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
                "_"
              ),
            monthsShort:
              "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays:
              "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
                "_"
              ),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Денес во] LT",
              nextDay: "[Утре во] LT",
              nextWeek: "[Во] dddd [во] LT",
              lastDay: "[Вчера во] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Изминатата] dddd [во] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Изминатиот] dddd [во] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "пред %s",
              s: "неколку секунди",
              ss: "%d секунди",
              m: "една минута",
              mm: "%d минути",
              h: "еден час",
              hh: "%d часа",
              d: "еден ден",
              dd: "%d дена",
              M: "еден месец",
              MM: "%d месеци",
              y: "една година",
              yy: "%d години",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
              var t = e % 10,
                n = e % 100;
              return 0 === e
                ? e + "-ев"
                : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                ? e + "-ти"
                : 1 === t
                ? e + "-ви"
                : 2 === t
                ? e + "-ри"
                : 7 === t || 8 === t
                ? e + "-ми"
                : e + "-ти";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      7341: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ml", {
            months:
              "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
                "_"
              ),
            monthsShort:
              "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
                "_"
              ),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split(
              "_"
            ),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
              LT: "A h:mm -നു",
              LTS: "A h:mm:ss -നു",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm -നു",
              LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
            },
            calendar: {
              sameDay: "[ഇന്ന്] LT",
              nextDay: "[നാളെ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ഇന്നലെ] LT",
              lastWeek: "[കഴിഞ്ഞ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s കഴിഞ്ഞ്",
              past: "%s മുൻപ്",
              s: "അൽപ നിമിഷങ്ങൾ",
              ss: "%d സെക്കൻഡ്",
              m: "ഒരു മിനിറ്റ്",
              mm: "%d മിനിറ്റ്",
              h: "ഒരു മണിക്കൂർ",
              hh: "%d മണിക്കൂർ",
              d: "ഒരു ദിവസം",
              dd: "%d ദിവസം",
              M: "ഒരു മാസം",
              MM: "%d മാസം",
              y: "ഒരു വർഷം",
              yy: "%d വർഷം",
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                ("രാത്രി" === t && e >= 4) ||
                "ഉച്ച കഴിഞ്ഞ്" === t ||
                "വൈകുന്നേരം" === t
                  ? e + 12
                  : e
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "രാത്രി"
                : e < 12
                ? "രാവിലെ"
                : e < 17
                ? "ഉച്ച കഴിഞ്ഞ്"
                : e < 20
                ? "വൈകുന്നേരം"
                : "രാത്രി";
            },
          });
        })(n(381));
      },
      5115: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            switch (n) {
              case "s":
                return t ? "хэдхэн секунд" : "хэдхэн секундын";
              case "ss":
                return e + (t ? " секунд" : " секундын");
              case "m":
              case "mm":
                return e + (t ? " минут" : " минутын");
              case "h":
              case "hh":
                return e + (t ? " цаг" : " цагийн");
              case "d":
              case "dd":
                return e + (t ? " өдөр" : " өдрийн");
              case "M":
              case "MM":
                return e + (t ? " сар" : " сарын");
              case "y":
              case "yy":
                return e + (t ? " жил" : " жилийн");
              default:
                return e;
            }
          }
          e.defineLocale("mn", {
            months:
              "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
                "_"
              ),
            monthsShort:
              "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY оны MMMMын D",
              LLL: "YYYY оны MMMMын D HH:mm",
              LLLL: "dddd, YYYY оны MMMMын D HH:mm",
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function (e) {
              return "ҮХ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ҮӨ" : "ҮХ";
            },
            calendar: {
              sameDay: "[Өнөөдөр] LT",
              nextDay: "[Маргааш] LT",
              nextWeek: "[Ирэх] dddd LT",
              lastDay: "[Өчигдөр] LT",
              lastWeek: "[Өнгөрсөн] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s дараа",
              past: "%s өмнө",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + " өдөр";
                default:
                  return e;
              }
            },
          });
        })(n(381));
      },
      370: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            };
          function a(e, t, n, a) {
            var s = "";
            if (t)
              switch (n) {
                case "s":
                  s = "काही सेकंद";
                  break;
                case "ss":
                  s = "%d सेकंद";
                  break;
                case "m":
                  s = "एक मिनिट";
                  break;
                case "mm":
                  s = "%d मिनिटे";
                  break;
                case "h":
                  s = "एक तास";
                  break;
                case "hh":
                  s = "%d तास";
                  break;
                case "d":
                  s = "एक दिवस";
                  break;
                case "dd":
                  s = "%d दिवस";
                  break;
                case "M":
                  s = "एक महिना";
                  break;
                case "MM":
                  s = "%d महिने";
                  break;
                case "y":
                  s = "एक वर्ष";
                  break;
                case "yy":
                  s = "%d वर्षे";
              }
            else
              switch (n) {
                case "s":
                  s = "काही सेकंदां";
                  break;
                case "ss":
                  s = "%d सेकंदां";
                  break;
                case "m":
                  s = "एका मिनिटा";
                  break;
                case "mm":
                  s = "%d मिनिटां";
                  break;
                case "h":
                  s = "एका तासा";
                  break;
                case "hh":
                  s = "%d तासां";
                  break;
                case "d":
                  s = "एका दिवसा";
                  break;
                case "dd":
                  s = "%d दिवसां";
                  break;
                case "M":
                  s = "एका महिन्या";
                  break;
                case "MM":
                  s = "%d महिन्यां";
                  break;
                case "y":
                  s = "एका वर्षा";
                  break;
                case "yy":
                  s = "%d वर्षां";
              }
            return s.replace(/%d/i, e);
          }
          e.defineLocale("mr", {
            months:
              "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                "_"
              ),
            monthsShort:
              "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm वाजता",
              LTS: "A h:mm:ss वाजता",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm वाजता",
              LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[उद्या] LT",
              nextWeek: "dddd, LT",
              lastDay: "[काल] LT",
              lastWeek: "[मागील] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sमध्ये",
              past: "%sपूर्वी",
              s: a,
              ss: a,
              m: a,
              mm: a,
              h: a,
              hh: a,
              d: a,
              dd: a,
              M: a,
              MM: a,
              y: a,
              yy: a,
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "पहाटे" === t || "सकाळी" === t
                  ? e
                  : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t
                  ? e >= 12
                    ? e
                    : e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e >= 0 && e < 6
                ? "पहाटे"
                : e < 12
                ? "सकाळी"
                : e < 17
                ? "दुपारी"
                : e < 20
                ? "सायंकाळी"
                : "रात्री";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      1237: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ms-my", {
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "tengahari" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "tengahari"
                : e < 19
                ? "petang"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              ss: "%d saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      9847: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ms", {
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "tengahari" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "tengahari"
                : e < 19
                ? "petang"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              ss: "%d saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      2126: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("mt", {
            months:
              "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
                "_"
              ),
            monthsShort:
              "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays:
              "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
                "_"
              ),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Illum fil-]LT",
              nextDay: "[Għada fil-]LT",
              nextWeek: "dddd [fil-]LT",
              lastDay: "[Il-bieraħ fil-]LT",
              lastWeek: "dddd [li għadda] [fil-]LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "f’ %s",
              past: "%s ilu",
              s: "ftit sekondi",
              ss: "%d sekondi",
              m: "minuta",
              mm: "%d minuti",
              h: "siegħa",
              hh: "%d siegħat",
              d: "ġurnata",
              dd: "%d ġranet",
              M: "xahar",
              MM: "%d xhur",
              y: "sena",
              yy: "%d sni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      6165: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "၁",
              2: "၂",
              3: "၃",
              4: "၄",
              5: "၅",
              6: "၆",
              7: "၇",
              8: "၈",
              9: "၉",
              0: "၀",
            },
            n = {
              "၁": "1",
              "၂": "2",
              "၃": "3",
              "၄": "4",
              "၅": "5",
              "၆": "6",
              "၇": "7",
              "၈": "8",
              "၉": "9",
              "၀": "0",
            };
          e.defineLocale("my", {
            months:
              "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
                "_"
              ),
            monthsShort:
              "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays:
              "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
                "_"
              ),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[ယနေ.] LT [မှာ]",
              nextDay: "[မနက်ဖြန်] LT [မှာ]",
              nextWeek: "dddd LT [မှာ]",
              lastDay: "[မနေ.က] LT [မှာ]",
              lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
              sameElse: "L",
            },
            relativeTime: {
              future: "လာမည့် %s မှာ",
              past: "လွန်ခဲ့သော %s က",
              s: "စက္ကန်.အနည်းငယ်",
              ss: "%d စက္ကန့်",
              m: "တစ်မိနစ်",
              mm: "%d မိနစ်",
              h: "တစ်နာရီ",
              hh: "%d နာရီ",
              d: "တစ်ရက်",
              dd: "%d ရက်",
              M: "တစ်လ",
              MM: "%d လ",
              y: "တစ်နှစ်",
              yy: "%d နှစ်",
            },
            preparse: function (e) {
              return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      4924: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("nb", {
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[i dag kl.] LT",
              nextDay: "[i morgen kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[i går kl.] LT",
              lastWeek: "[forrige] dddd [kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "noen sekunder",
              ss: "%d sekunder",
              m: "ett minutt",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dager",
              w: "en uke",
              ww: "%d uker",
              M: "en måned",
              MM: "%d måneder",
              y: "ett år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      6744: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            };
          e.defineLocale("ne", {
            months:
              "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
                "_"
              ),
            monthsShort:
              "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
                "_"
              ),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "Aको h:mm बजे",
              LTS: "Aको h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, Aको h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "राति" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "बिहान" === t
                  ? e
                  : "दिउँसो" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "साँझ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 3
                ? "राति"
                : e < 12
                ? "बिहान"
                : e < 16
                ? "दिउँसो"
                : e < 20
                ? "साँझ"
                : "राति";
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[भोलि] LT",
              nextWeek: "[आउँदो] dddd[,] LT",
              lastDay: "[हिजो] LT",
              lastWeek: "[गएको] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sमा",
              past: "%s अगाडि",
              s: "केही क्षण",
              ss: "%d सेकेण्ड",
              m: "एक मिनेट",
              mm: "%d मिनेट",
              h: "एक घण्टा",
              hh: "%d घण्टा",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महिना",
              MM: "%d महिना",
              y: "एक बर्ष",
              yy: "%d बर्ष",
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      9814: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [
              /^jan/i,
              /^feb/i,
              /^maart|mrt.?$/i,
              /^apr/i,
              /^mei$/i,
              /^jun[i.]?$/i,
              /^jul[i.]?$/i,
              /^aug/i,
              /^sep/i,
              /^okt/i,
              /^nov/i,
              /^dec/i,
            ],
            s =
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
          e.defineLocale("nl-be", {
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex:
              /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      3901: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [
              /^jan/i,
              /^feb/i,
              /^maart|mrt.?$/i,
              /^apr/i,
              /^mei$/i,
              /^jun[i.]?$/i,
              /^jul[i.]?$/i,
              /^aug/i,
              /^sep/i,
              /^okt/i,
              /^nov/i,
              /^dec/i,
            ],
            s =
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
          e.defineLocale("nl", {
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex:
              /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              w: "één week",
              ww: "%d weken",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      3877: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("nn", {
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[I dag klokka] LT",
              nextDay: "[I morgon klokka] LT",
              nextWeek: "dddd [klokka] LT",
              lastDay: "[I går klokka] LT",
              lastWeek: "[Føregåande] dddd [klokka] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s sidan",
              s: "nokre sekund",
              ss: "%d sekund",
              m: "eit minutt",
              mm: "%d minutt",
              h: "ein time",
              hh: "%d timar",
              d: "ein dag",
              dd: "%d dagar",
              w: "ei veke",
              ww: "%d veker",
              M: "ein månad",
              MM: "%d månader",
              y: "eit år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      2135: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("oc-lnc", {
            months: {
              standalone:
                "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
                  "_"
                ),
              format:
                "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
                  "_"
                ),
              isFormat: /D[oD]?(\s)+MMMM/,
            },
            monthsShort:
              "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split(
                "_"
              ),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [de] YYYY",
              ll: "D MMM YYYY",
              LLL: "D MMMM [de] YYYY [a] H:mm",
              lll: "D MMM YYYY, H:mm",
              LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
              llll: "ddd D MMM YYYY, H:mm",
            },
            calendar: {
              sameDay: "[uèi a] LT",
              nextDay: "[deman a] LT",
              nextWeek: "dddd [a] LT",
              lastDay: "[ièr a] LT",
              lastWeek: "dddd [passat a] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "d'aquí %s",
              past: "fa %s",
              s: "unas segondas",
              ss: "%d segondas",
              m: "una minuta",
              mm: "%d minutas",
              h: "una ora",
              hh: "%d oras",
              d: "un jorn",
              dd: "%d jorns",
              M: "un mes",
              MM: "%d meses",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
              var n =
                1 === e
                  ? "r"
                  : 2 === e
                  ? "n"
                  : 3 === e
                  ? "r"
                  : 4 === e
                  ? "t"
                  : "è";
              return ("w" !== t && "W" !== t) || (n = "a"), e + n;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5858: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "੧",
              2: "੨",
              3: "੩",
              4: "੪",
              5: "੫",
              6: "੬",
              7: "੭",
              8: "੮",
              9: "੯",
              0: "੦",
            },
            n = {
              "੧": "1",
              "੨": "2",
              "੩": "3",
              "੪": "4",
              "੫": "5",
              "੬": "6",
              "੭": "7",
              "੮": "8",
              "੯": "9",
              "੦": "0",
            };
          e.defineLocale("pa-in", {
            months:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            monthsShort:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            weekdays:
              "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split(
                "_"
              ),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
              LT: "A h:mm ਵਜੇ",
              LTS: "A h:mm:ss ਵਜੇ",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
              LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
            },
            calendar: {
              sameDay: "[ਅਜ] LT",
              nextDay: "[ਕਲ] LT",
              nextWeek: "[ਅਗਲਾ] dddd, LT",
              lastDay: "[ਕਲ] LT",
              lastWeek: "[ਪਿਛਲੇ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ਵਿੱਚ",
              past: "%s ਪਿਛਲੇ",
              s: "ਕੁਝ ਸਕਿੰਟ",
              ss: "%d ਸਕਿੰਟ",
              m: "ਇਕ ਮਿੰਟ",
              mm: "%d ਮਿੰਟ",
              h: "ਇੱਕ ਘੰਟਾ",
              hh: "%d ਘੰਟੇ",
              d: "ਇੱਕ ਦਿਨ",
              dd: "%d ਦਿਨ",
              M: "ਇੱਕ ਮਹੀਨਾ",
              MM: "%d ਮਹੀਨੇ",
              y: "ਇੱਕ ਸਾਲ",
              yy: "%d ਸਾਲ",
            },
            preparse: function (e) {
              return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ਰਾਤ" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ਸਵੇਰ" === t
                  ? e
                  : "ਦੁਪਹਿਰ" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "ਸ਼ਾਮ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ਰਾਤ"
                : e < 10
                ? "ਸਵੇਰ"
                : e < 17
                ? "ਦੁਪਹਿਰ"
                : e < 20
                ? "ਸ਼ਾਮ"
                : "ਰਾਤ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      4495: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
                "_"
              ),
            n =
              "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
                "_"
              ),
            a = [
              /^sty/i,
              /^lut/i,
              /^mar/i,
              /^kwi/i,
              /^maj/i,
              /^cze/i,
              /^lip/i,
              /^sie/i,
              /^wrz/i,
              /^paź/i,
              /^lis/i,
              /^gru/i,
            ];
          function s(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
          }
          function r(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return a + (s(e) ? "sekundy" : "sekund");
              case "m":
                return t ? "minuta" : "minutę";
              case "mm":
                return a + (s(e) ? "minuty" : "minut");
              case "h":
                return t ? "godzina" : "godzinę";
              case "hh":
                return a + (s(e) ? "godziny" : "godzin");
              case "ww":
                return a + (s(e) ? "tygodnie" : "tygodni");
              case "MM":
                return a + (s(e) ? "miesiące" : "miesięcy");
              case "yy":
                return a + (s(e) ? "lata" : "lat");
            }
          }
          e.defineLocale("pl", {
            months: function (e, a) {
              return e ? (/D MMMM/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsShort:
              "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
                "_"
              ),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Dziś o] LT",
              nextDay: "[Jutro o] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[W niedzielę o] LT";
                  case 2:
                    return "[We wtorek o] LT";
                  case 3:
                    return "[W środę o] LT";
                  case 6:
                    return "[W sobotę o] LT";
                  default:
                    return "[W] dddd [o] LT";
                }
              },
              lastDay: "[Wczoraj o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[W zeszłą niedzielę o] LT";
                  case 3:
                    return "[W zeszłą środę o] LT";
                  case 6:
                    return "[W zeszłą sobotę o] LT";
                  default:
                    return "[W zeszły] dddd [o] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "%s temu",
              s: "kilka sekund",
              ss: r,
              m: r,
              mm: r,
              h: r,
              hh: r,
              d: "1 dzień",
              dd: "%d dni",
              w: "tydzień",
              ww: r,
              M: "miesiąc",
              MM: r,
              y: "rok",
              yy: r,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      7971: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("pt-br", {
            months:
              "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                "_"
              ),
            monthsShort:
              "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays:
              "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
                "_"
              ),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day()
                  ? "[Último] dddd [às] LT"
                  : "[Última] dddd [às] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "poucos segundos",
              ss: "%d segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            invalidDate: "Data inválida",
          });
        })(n(381));
      },
      9520: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("pt", {
            months:
              "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                "_"
              ),
            monthsShort:
              "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays:
              "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
                "_"
              ),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day()
                  ? "[Último] dddd [às] LT"
                  : "[Última] dddd [às] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "segundos",
              ss: "%d segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              w: "uma semana",
              ww: "%d semanas",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      6459: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = " ";
            return (
              (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (a = " de "),
              e +
                a +
                {
                  ss: "secunde",
                  mm: "minute",
                  hh: "ore",
                  dd: "zile",
                  ww: "săptămâni",
                  MM: "luni",
                  yy: "ani",
                }[n]
            );
          }
          e.defineLocale("ro", {
            months:
              "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
                "_"
              ),
            monthsShort:
              "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split(
              "_"
            ),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[azi la] LT",
              nextDay: "[mâine la] LT",
              nextWeek: "dddd [la] LT",
              lastDay: "[ieri la] LT",
              lastWeek: "[fosta] dddd [la] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "peste %s",
              past: "%s în urmă",
              s: "câteva secunde",
              ss: t,
              m: "un minut",
              mm: t,
              h: "o oră",
              hh: t,
              d: "o zi",
              dd: t,
              w: "o săptămână",
              ww: t,
              M: "o lună",
              MM: t,
              y: "un an",
              yy: t,
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      238: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11
              ? n[0]
              : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? n[1]
              : n[2];
          }
          function n(e, n, a) {
            return "m" === a
              ? n
                ? "минута"
                : "минуту"
              : e +
                  " " +
                  t(
                    {
                      ss: n
                        ? "секунда_секунды_секунд"
                        : "секунду_секунды_секунд",
                      mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                      hh: "час_часа_часов",
                      dd: "день_дня_дней",
                      ww: "неделя_недели_недель",
                      MM: "месяц_месяца_месяцев",
                      yy: "год_года_лет",
                    }[a],
                    +e
                  );
          }
          var a = [
            /^янв/i,
            /^фев/i,
            /^мар/i,
            /^апр/i,
            /^ма[йя]/i,
            /^июн/i,
            /^июл/i,
            /^авг/i,
            /^сен/i,
            /^окт/i,
            /^ноя/i,
            /^дек/i,
          ];
          e.defineLocale("ru", {
            months: {
              format:
                "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
                  "_"
                ),
              standalone:
                "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                  "_"
                ),
            },
            monthsShort: {
              format:
                "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
                  "_"
                ),
              standalone:
                "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
                  "_"
                ),
            },
            weekdays: {
              standalone:
                "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
                  "_"
                ),
              format:
                "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
                  "_"
                ),
              isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            monthsRegex:
              /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex:
              /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex:
              /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex:
              /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., H:mm",
              LLLL: "dddd, D MMMM YYYY г., H:mm",
            },
            calendar: {
              sameDay: "[Сегодня, в] LT",
              nextDay: "[Завтра, в] LT",
              lastDay: "[Вчера, в] LT",
              nextWeek: function (e) {
                if (e.week() === this.week())
                  return 2 === this.day()
                    ? "[Во] dddd, [в] LT"
                    : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В следующее] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В следующий] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В следующую] dddd, [в] LT";
                }
              },
              lastWeek: function (e) {
                if (e.week() === this.week())
                  return 2 === this.day()
                    ? "[Во] dddd, [в] LT"
                    : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В прошлое] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В прошлый] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В прошлую] dddd, [в] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "через %s",
              past: "%s назад",
              s: "несколько секунд",
              ss: n,
              m: n,
              mm: n,
              h: "час",
              hh: n,
              d: "день",
              dd: n,
              w: "неделя",
              ww: n,
              M: "месяц",
              MM: n,
              y: "год",
              yy: n,
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
              return /^(дня|вечера)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ночи"
                : e < 12
                ? "утра"
                : e < 17
                ? "дня"
                : "вечера";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                  return e + "-й";
                case "D":
                  return e + "-го";
                case "w":
                case "W":
                  return e + "-я";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      950: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "جنوري",
              "فيبروري",
              "مارچ",
              "اپريل",
              "مئي",
              "جون",
              "جولاءِ",
              "آگسٽ",
              "سيپٽمبر",
              "آڪٽوبر",
              "نومبر",
              "ڊسمبر",
            ],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
          e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "صبح" : "شام";
            },
            calendar: {
              sameDay: "[اڄ] LT",
              nextDay: "[سڀاڻي] LT",
              nextWeek: "dddd [اڳين هفتي تي] LT",
              lastDay: "[ڪالهه] LT",
              lastWeek: "[گزريل هفتي] dddd [تي] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s پوء",
              past: "%s اڳ",
              s: "چند سيڪنڊ",
              ss: "%d سيڪنڊ",
              m: "هڪ منٽ",
              mm: "%d منٽ",
              h: "هڪ ڪلاڪ",
              hh: "%d ڪلاڪ",
              d: "هڪ ڏينهن",
              dd: "%d ڏينهن",
              M: "هڪ مهينو",
              MM: "%d مهينا",
              y: "هڪ سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      490: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("se", {
            months:
              "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
                "_"
              ),
            monthsShort:
              "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
                "_"
              ),
            weekdays:
              "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
                "_"
              ),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "MMMM D. [b.] YYYY",
              LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
              LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
            },
            calendar: {
              sameDay: "[otne ti] LT",
              nextDay: "[ihttin ti] LT",
              nextWeek: "dddd [ti] LT",
              lastDay: "[ikte ti] LT",
              lastWeek: "[ovddit] dddd [ti] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s geažes",
              past: "maŋit %s",
              s: "moadde sekunddat",
              ss: "%d sekunddat",
              m: "okta minuhta",
              mm: "%d minuhtat",
              h: "okta diimmu",
              hh: "%d diimmut",
              d: "okta beaivi",
              dd: "%d beaivvit",
              M: "okta mánnu",
              MM: "%d mánut",
              y: "okta jahki",
              yy: "%d jagit",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      124: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("si", {
            months:
              "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
                "_"
              ),
            monthsShort:
              "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split(
                "_"
              ),
            weekdays:
              "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
                "_"
              ),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "a h:mm",
              LTS: "a h:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY MMMM D",
              LLL: "YYYY MMMM D, a h:mm",
              LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
            },
            calendar: {
              sameDay: "[අද] LT[ට]",
              nextDay: "[හෙට] LT[ට]",
              nextWeek: "dddd LT[ට]",
              lastDay: "[ඊයේ] LT[ට]",
              lastWeek: "[පසුගිය] dddd LT[ට]",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sකින්",
              past: "%sකට පෙර",
              s: "තත්පර කිහිපය",
              ss: "තත්පර %d",
              m: "මිනිත්තුව",
              mm: "මිනිත්තු %d",
              h: "පැය",
              hh: "පැය %d",
              d: "දිනය",
              dd: "දින %d",
              M: "මාසය",
              MM: "මාස %d",
              y: "වසර",
              yy: "වසර %d",
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
              return e + " වැනි";
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
              return "ප.ව." === e || "පස් වරු" === e;
            },
            meridiem: function (e, t, n) {
              return e > 11
                ? n
                  ? "ප.ව."
                  : "පස් වරු"
                : n
                ? "පෙ.ව."
                : "පෙර වරු";
            },
          });
        })(n(381));
      },
      4249: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
                "_"
              ),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
          function a(e) {
            return e > 1 && e < 5;
          }
          function s(e, t, n, s) {
            var r = e + " ";
            switch (n) {
              case "s":
                return t || s ? "pár sekúnd" : "pár sekundami";
              case "ss":
                return t || s
                  ? r + (a(e) ? "sekundy" : "sekúnd")
                  : r + "sekundami";
              case "m":
                return t ? "minúta" : s ? "minútu" : "minútou";
              case "mm":
                return t || s
                  ? r + (a(e) ? "minúty" : "minút")
                  : r + "minútami";
              case "h":
                return t ? "hodina" : s ? "hodinu" : "hodinou";
              case "hh":
                return t || s
                  ? r + (a(e) ? "hodiny" : "hodín")
                  : r + "hodinami";
              case "d":
                return t || s ? "deň" : "dňom";
              case "dd":
                return t || s ? r + (a(e) ? "dni" : "dní") : r + "dňami";
              case "M":
                return t || s ? "mesiac" : "mesiacom";
              case "MM":
                return t || s
                  ? r + (a(e) ? "mesiace" : "mesiacov")
                  : r + "mesiacmi";
              case "y":
                return t || s ? "rok" : "rokom";
              case "yy":
                return t || s ? r + (a(e) ? "roky" : "rokov") : r + "rokmi";
            }
          }
          e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays:
              "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[dnes o] LT",
              nextDay: "[zajtra o] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v nedeľu o] LT";
                  case 1:
                  case 2:
                    return "[v] dddd [o] LT";
                  case 3:
                    return "[v stredu o] LT";
                  case 4:
                    return "[vo štvrtok o] LT";
                  case 5:
                    return "[v piatok o] LT";
                  case 6:
                    return "[v sobotu o] LT";
                }
              },
              lastDay: "[včera o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[minulú nedeľu o] LT";
                  case 1:
                  case 2:
                    return "[minulý] dddd [o] LT";
                  case 3:
                    return "[minulú stredu o] LT";
                  case 4:
                  case 5:
                    return "[minulý] dddd [o] LT";
                  case 6:
                    return "[minulú sobotu o] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "pred %s",
              s,
              ss: s,
              m: s,
              mm: s,
              h: s,
              hh: s,
              d: s,
              dd: s,
              M: s,
              MM: s,
              y: s,
              yy: s,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      4985: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || a ? "nekaj sekund" : "nekaj sekundami";
              case "ss":
                return (s +=
                  1 === e
                    ? t
                      ? "sekundo"
                      : "sekundi"
                    : 2 === e
                    ? t || a
                      ? "sekundi"
                      : "sekundah"
                    : e < 5
                    ? t || a
                      ? "sekunde"
                      : "sekundah"
                    : "sekund");
              case "m":
                return t ? "ena minuta" : "eno minuto";
              case "mm":
                return (s +=
                  1 === e
                    ? t
                      ? "minuta"
                      : "minuto"
                    : 2 === e
                    ? t || a
                      ? "minuti"
                      : "minutama"
                    : e < 5
                    ? t || a
                      ? "minute"
                      : "minutami"
                    : t || a
                    ? "minut"
                    : "minutami");
              case "h":
                return t ? "ena ura" : "eno uro";
              case "hh":
                return (s +=
                  1 === e
                    ? t
                      ? "ura"
                      : "uro"
                    : 2 === e
                    ? t || a
                      ? "uri"
                      : "urama"
                    : e < 5
                    ? t || a
                      ? "ure"
                      : "urami"
                    : t || a
                    ? "ur"
                    : "urami");
              case "d":
                return t || a ? "en dan" : "enim dnem";
              case "dd":
                return (s +=
                  1 === e
                    ? t || a
                      ? "dan"
                      : "dnem"
                    : 2 === e
                    ? t || a
                      ? "dni"
                      : "dnevoma"
                    : t || a
                    ? "dni"
                    : "dnevi");
              case "M":
                return t || a ? "en mesec" : "enim mesecem";
              case "MM":
                return (s +=
                  1 === e
                    ? t || a
                      ? "mesec"
                      : "mesecem"
                    : 2 === e
                    ? t || a
                      ? "meseca"
                      : "mesecema"
                    : e < 5
                    ? t || a
                      ? "mesece"
                      : "meseci"
                    : t || a
                    ? "mesecev"
                    : "meseci");
              case "y":
                return t || a ? "eno leto" : "enim letom";
              case "yy":
                return (s +=
                  1 === e
                    ? t || a
                      ? "leto"
                      : "letom"
                    : 2 === e
                    ? t || a
                      ? "leti"
                      : "letoma"
                    : e < 5
                    ? t || a
                      ? "leta"
                      : "leti"
                    : t || a
                    ? "let"
                    : "leti");
            }
          }
          e.defineLocale("sl", {
            months:
              "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danes ob] LT",
              nextDay: "[jutri ob] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v] [nedeljo] [ob] LT";
                  case 3:
                    return "[v] [sredo] [ob] LT";
                  case 6:
                    return "[v] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[v] dddd [ob] LT";
                }
              },
              lastDay: "[včeraj ob] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[prejšnjo] [nedeljo] [ob] LT";
                  case 3:
                    return "[prejšnjo] [sredo] [ob] LT";
                  case 6:
                    return "[prejšnjo] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prejšnji] dddd [ob] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "čez %s",
              past: "pred %s",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      1104: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sq", {
            months:
              "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
                "_"
              ),
            monthsShort:
              "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays:
              "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
                "_"
              ),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
              return "M" === e.charAt(0);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "PD" : "MD";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Sot në] LT",
              nextDay: "[Nesër në] LT",
              nextWeek: "dddd [në] LT",
              lastDay: "[Dje në] LT",
              lastWeek: "dddd [e kaluar në] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "në %s",
              past: "%s më parë",
              s: "disa sekonda",
              ss: "%d sekonda",
              m: "një minutë",
              mm: "%d minuta",
              h: "një orë",
              hh: "%d orë",
              d: "një ditë",
              dd: "%d ditë",
              M: "një muaj",
              MM: "%d muaj",
              y: "një vit",
              yy: "%d vite",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      9915: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["секунда", "секунде", "секунди"],
              m: ["један минут", "једне минуте"],
              mm: ["минут", "минуте", "минута"],
              h: ["један сат", "једног сата"],
              hh: ["сат", "сата", "сати"],
              dd: ["дан", "дана", "дана"],
              MM: ["месец", "месеца", "месеци"],
              yy: ["година", "године", "година"],
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, a) {
              var s = t.words[a];
              return 1 === a.length
                ? n
                  ? s[0]
                  : s[1]
                : e + " " + t.correctGrammaticalCase(e, s);
            },
          };
          e.defineLocale("sr-cyrl", {
            months:
              "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
                "_"
              ),
            monthsShort:
              "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
            calendar: {
              sameDay: "[данас у] LT",
              nextDay: "[сутра у] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[у] [недељу] [у] LT";
                  case 3:
                    return "[у] [среду] [у] LT";
                  case 6:
                    return "[у] [суботу] [у] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[у] dddd [у] LT";
                }
              },
              lastDay: "[јуче у] LT",
              lastWeek: function () {
                return [
                  "[прошле] [недеље] [у] LT",
                  "[прошлог] [понедељка] [у] LT",
                  "[прошлог] [уторка] [у] LT",
                  "[прошле] [среде] [у] LT",
                  "[прошлог] [четвртка] [у] LT",
                  "[прошлог] [петка] [у] LT",
                  "[прошле] [суботе] [у] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "пре %s",
              s: "неколико секунди",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "дан",
              dd: t.translate,
              M: "месец",
              MM: t.translate,
              y: "годину",
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      9131: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["sekunda", "sekunde", "sekundi"],
              m: ["jedan minut", "jedne minute"],
              mm: ["minut", "minute", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mesec", "meseca", "meseci"],
              yy: ["godina", "godine", "godina"],
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, a) {
              var s = t.words[a];
              return 1 === a.length
                ? n
                  ? s[0]
                  : s[1]
                : e + " " + t.correctGrammaticalCase(e, s);
            },
          };
          e.defineLocale("sr", {
            months:
              "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedelju] [u] LT";
                  case 3:
                    return "[u] [sredu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedelje] [u] LT",
                  "[prošlog] [ponedeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "pre %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      5893: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ss", {
            months:
              "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
                "_"
              ),
            monthsShort:
              "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays:
              "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
                "_"
              ),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Namuhla nga] LT",
              nextDay: "[Kusasa nga] LT",
              nextWeek: "dddd [nga] LT",
              lastDay: "[Itolo nga] LT",
              lastWeek: "dddd [leliphelile] [nga] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "nga %s",
              past: "wenteka nga %s",
              s: "emizuzwana lomcane",
              ss: "%d mzuzwana",
              m: "umzuzu",
              mm: "%d emizuzu",
              h: "lihora",
              hh: "%d emahora",
              d: "lilanga",
              dd: "%d emalanga",
              M: "inyanga",
              MM: "%d tinyanga",
              y: "umnyaka",
              yy: "%d iminyaka",
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, n) {
              return e < 11
                ? "ekuseni"
                : e < 15
                ? "emini"
                : e < 19
                ? "entsambama"
                : "ebusuku";
            },
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ekuseni" === t
                  ? e
                  : "emini" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "entsambama" === t || "ebusuku" === t
                  ? 0 === e
                    ? 0
                    : e + 12
                  : void 0
              );
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      8760: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sv", {
            months:
              "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
              "_"
            ),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Idag] LT",
              nextDay: "[Imorgon] LT",
              lastDay: "[Igår] LT",
              nextWeek: "[På] dddd LT",
              lastWeek: "[I] dddd[s] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "för %s sedan",
              s: "några sekunder",
              ss: "%d sekunder",
              m: "en minut",
              mm: "%d minuter",
              h: "en timme",
              hh: "%d timmar",
              d: "en dag",
              dd: "%d dagar",
              M: "en månad",
              MM: "%d månader",
              y: "ett år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? ":e"
                  : 1 === t || 2 === t
                  ? ":a"
                  : ":e")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      1172: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sw", {
            months:
              "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays:
              "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
                "_"
              ),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "hh:mm A",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[leo saa] LT",
              nextDay: "[kesho saa] LT",
              nextWeek: "[wiki ijayo] dddd [saat] LT",
              lastDay: "[jana] LT",
              lastWeek: "[wiki iliyopita] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s baadaye",
              past: "tokea %s",
              s: "hivi punde",
              ss: "sekunde %d",
              m: "dakika moja",
              mm: "dakika %d",
              h: "saa limoja",
              hh: "masaa %d",
              d: "siku moja",
              dd: "siku %d",
              M: "mwezi mmoja",
              MM: "miezi %d",
              y: "mwaka mmoja",
              yy: "miaka %d",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      7333: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "௧",
              2: "௨",
              3: "௩",
              4: "௪",
              5: "௫",
              6: "௬",
              7: "௭",
              8: "௮",
              9: "௯",
              0: "௦",
            },
            n = {
              "௧": "1",
              "௨": "2",
              "௩": "3",
              "௪": "4",
              "௫": "5",
              "௬": "6",
              "௭": "7",
              "௮": "8",
              "௯": "9",
              "௦": "0",
            };
          e.defineLocale("ta", {
            months:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            monthsShort:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            weekdays:
              "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
                "_"
              ),
            weekdaysShort:
              "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, HH:mm",
              LLLL: "dddd, D MMMM YYYY, HH:mm",
            },
            calendar: {
              sameDay: "[இன்று] LT",
              nextDay: "[நாளை] LT",
              nextWeek: "dddd, LT",
              lastDay: "[நேற்று] LT",
              lastWeek: "[கடந்த வாரம்] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s இல்",
              past: "%s முன்",
              s: "ஒரு சில விநாடிகள்",
              ss: "%d விநாடிகள்",
              m: "ஒரு நிமிடம்",
              mm: "%d நிமிடங்கள்",
              h: "ஒரு மணி நேரம்",
              hh: "%d மணி நேரம்",
              d: "ஒரு நாள்",
              dd: "%d நாட்கள்",
              M: "ஒரு மாதம்",
              MM: "%d மாதங்கள்",
              y: "ஒரு வருடம்",
              yy: "%d ஆண்டுகள்",
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
              return e + "வது";
            },
            preparse: function (e) {
              return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
              return e < 2
                ? " யாமம்"
                : e < 6
                ? " வைகறை"
                : e < 10
                ? " காலை"
                : e < 14
                ? " நண்பகல்"
                : e < 18
                ? " எற்பாடு"
                : e < 22
                ? " மாலை"
                : " யாமம்";
            },
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "யாமம்" === t
                  ? e < 2
                    ? e
                    : e + 12
                  : "வைகறை" === t ||
                    "காலை" === t ||
                    ("நண்பகல்" === t && e >= 10)
                  ? e
                  : e + 12
              );
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      3110: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("te", {
            months:
              "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
                "_"
              ),
            monthsShort:
              "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
                "_"
              ),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[నేడు] LT",
              nextDay: "[రేపు] LT",
              nextWeek: "dddd, LT",
              lastDay: "[నిన్న] LT",
              lastWeek: "[గత] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s లో",
              past: "%s క్రితం",
              s: "కొన్ని క్షణాలు",
              ss: "%d సెకన్లు",
              m: "ఒక నిమిషం",
              mm: "%d నిమిషాలు",
              h: "ఒక గంట",
              hh: "%d గంటలు",
              d: "ఒక రోజు",
              dd: "%d రోజులు",
              M: "ఒక నెల",
              MM: "%d నెలలు",
              y: "ఒక సంవత్సరం",
              yy: "%d సంవత్సరాలు",
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "రాత్రి" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ఉదయం" === t
                  ? e
                  : "మధ్యాహ్నం" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "సాయంత్రం" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "రాత్రి"
                : e < 10
                ? "ఉదయం"
                : e < 17
                ? "మధ్యాహ్నం"
                : e < 20
                ? "సాయంత్రం"
                : "రాత్రి";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(381));
      },
      2095: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tet", {
            months:
              "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
                "_"
              ),
            monthsShort:
              "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split(
              "_"
            ),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Ohin iha] LT",
              nextDay: "[Aban iha] LT",
              nextWeek: "dddd [iha] LT",
              lastDay: "[Horiseik iha] LT",
              lastWeek: "dddd [semana kotuk] [iha] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "iha %s",
              past: "%s liuba",
              s: "segundu balun",
              ss: "segundu %d",
              m: "minutu ida",
              mm: "minutu %d",
              h: "oras ida",
              hh: "oras %d",
              d: "loron ida",
              dd: "loron %d",
              M: "fulan ida",
              MM: "fulan %d",
              y: "tinan ida",
              yy: "tinan %d",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      7321: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум",
          };
          e.defineLocale("tg", {
            months: {
              format:
                "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split(
                  "_"
                ),
              standalone:
                "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                  "_"
                ),
            },
            monthsShort:
              "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays:
              "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split(
                "_"
              ),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Имрӯз соати] LT",
              nextDay: "[Фардо соати] LT",
              lastDay: "[Дирӯз соати] LT",
              nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
              lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "баъди %s",
              past: "%s пеш",
              s: "якчанд сония",
              m: "як дақиқа",
              mm: "%d дақиқа",
              h: "як соат",
              hh: "%d соат",
              d: "як рӯз",
              dd: "%d рӯз",
              M: "як моҳ",
              MM: "%d моҳ",
              y: "як сол",
              yy: "%d сол",
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "шаб" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "субҳ" === t
                  ? e
                  : "рӯз" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "бегоҳ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "шаб"
                : e < 11
                ? "субҳ"
                : e < 16
                ? "рӯз"
                : e < 19
                ? "бегоҳ"
                : "шаб";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (e) {
              var n = e % 10,
                a = e >= 100 ? 100 : null;
              return e + (t[e] || t[n] || t[a]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      9041: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("th", {
            months:
              "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
                "_"
              ),
            monthsShort:
              "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split(
              "_"
            ),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split(
              "_"
            ),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY เวลา H:mm",
              LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
              return "หลังเที่ยง" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
            },
            calendar: {
              sameDay: "[วันนี้ เวลา] LT",
              nextDay: "[พรุ่งนี้ เวลา] LT",
              nextWeek: "dddd[หน้า เวลา] LT",
              lastDay: "[เมื่อวานนี้ เวลา] LT",
              lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "อีก %s",
              past: "%sที่แล้ว",
              s: "ไม่กี่วินาที",
              ss: "%d วินาที",
              m: "1 นาที",
              mm: "%d นาที",
              h: "1 ชั่วโมง",
              hh: "%d ชั่วโมง",
              d: "1 วัน",
              dd: "%d วัน",
              w: "1 สัปดาห์",
              ww: "%d สัปดาห์",
              M: "1 เดือน",
              MM: "%d เดือน",
              y: "1 ปี",
              yy: "%d ปี",
            },
          });
        })(n(381));
      },
      9005: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'ünji",
            4: "'ünji",
            100: "'ünji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy",
          };
          e.defineLocale("tk", {
            months:
              "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
                "_"
              ),
            monthsShort:
              "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
            weekdays:
              "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split(
                "_"
              ),
            weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
            weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün sagat] LT",
              nextDay: "[ertir sagat] LT",
              nextWeek: "[indiki] dddd [sagat] LT",
              lastDay: "[düýn] LT",
              lastWeek: "[geçen] dddd [sagat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s soň",
              past: "%s öň",
              s: "birnäçe sekunt",
              m: "bir minut",
              mm: "%d minut",
              h: "bir sagat",
              hh: "%d sagat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir aý",
              MM: "%d aý",
              y: "bir ýyl",
              yy: "%d ýyl",
            },
            ordinal: function (e, n) {
              switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'unjy";
                  var a = e % 10,
                    s = (e % 100) - a,
                    r = e >= 100 ? 100 : null;
                  return e + (t[a] || t[s] || t[r]);
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      5768: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tl-ph", {
            months:
              "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
                "_"
              ),
            monthsShort:
              "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays:
              "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
                "_"
              ),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm",
            },
            calendar: {
              sameDay: "LT [ngayong araw]",
              nextDay: "[Bukas ng] LT",
              nextWeek: "LT [sa susunod na] dddd",
              lastDay: "LT [kahapon]",
              lastWeek: "LT [noong nakaraang] dddd",
              sameElse: "L",
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              ss: "%d segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      9444: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
          function n(e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "leS"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "waQ"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "nem"
                : t + " pIq");
          }
          function a(e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "Hu’"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "wen"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "ben"
                : t + " ret");
          }
          function s(e, t, n, a) {
            var s = r(e);
            switch (n) {
              case "ss":
                return s + " lup";
              case "mm":
                return s + " tup";
              case "hh":
                return s + " rep";
              case "dd":
                return s + " jaj";
              case "MM":
                return s + " jar";
              case "yy":
                return s + " DIS";
            }
          }
          function r(e) {
            var n = Math.floor((e % 1e3) / 100),
              a = Math.floor((e % 100) / 10),
              s = e % 10,
              r = "";
            return (
              n > 0 && (r += t[n] + "vatlh"),
              a > 0 && (r += ("" !== r ? " " : "") + t[a] + "maH"),
              s > 0 && (r += ("" !== r ? " " : "") + t[s]),
              "" === r ? "pagh" : r
            );
          }
          e.defineLocale("tlh", {
            months:
              "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
                "_"
              ),
            monthsShort:
              "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            weekdaysShort:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            weekdaysMin:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[DaHjaj] LT",
              nextDay: "[wa’leS] LT",
              nextWeek: "LLL",
              lastDay: "[wa’Hu’] LT",
              lastWeek: "LLL",
              sameElse: "L",
            },
            relativeTime: {
              future: n,
              past: a,
              s: "puS lup",
              ss: s,
              m: "wa’ tup",
              mm: s,
              h: "wa’ rep",
              hh: s,
              d: "wa’ jaj",
              dd: s,
              M: "wa’ jar",
              MM: s,
              y: "wa’ DIS",
              yy: s,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      2397: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı",
          };
          e.defineLocale("tr", {
            months:
              "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
                "_"
              ),
            monthsShort:
              "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays:
              "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
                "_"
              ),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "öö" : "ÖÖ") : n ? "ös" : "ÖS";
            },
            meridiemParse: /öö|ÖÖ|ös|ÖS/,
            isPM: function (e) {
              return "ös" === e || "ÖS" === e;
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[yarın saat] LT",
              nextWeek: "[gelecek] dddd [saat] LT",
              lastDay: "[dün] LT",
              lastWeek: "[geçen] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s önce",
              s: "birkaç saniye",
              ss: "%d saniye",
              m: "bir dakika",
              mm: "%d dakika",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              w: "bir hafta",
              ww: "%d hafta",
              M: "bir ay",
              MM: "%d ay",
              y: "bir yıl",
              yy: "%d yıl",
            },
            ordinal: function (e, n) {
              switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'ıncı";
                  var a = e % 10,
                    s = (e % 100) - a,
                    r = e >= 100 ? 100 : null;
                  return e + (t[a] || t[s] || t[r]);
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      8254: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["viensas secunds", "'iensas secunds"],
              ss: [e + " secunds", e + " secunds"],
              m: ["'n míut", "'iens míut"],
              mm: [e + " míuts", e + " míuts"],
              h: ["'n þora", "'iensa þora"],
              hh: [e + " þoras", e + " þoras"],
              d: ["'n ziua", "'iensa ziua"],
              dd: [e + " ziuas", e + " ziuas"],
              M: ["'n mes", "'iens mes"],
              MM: [e + " mesen", e + " mesen"],
              y: ["'n ar", "'iens ar"],
              yy: [e + " ars", e + " ars"],
            };
            return a || t ? s[n][0] : s[n][1];
          }
          e.defineLocale("tzl", {
            months:
              "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
                "_"
              ),
            monthsShort:
              "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays:
              "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM [dallas] YYYY",
              LLL: "D. MMMM [dallas] YYYY HH.mm",
              LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
              return "d'o" === e.toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
            },
            calendar: {
              sameDay: "[oxhi à] LT",
              nextDay: "[demà à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[ieiri à] LT",
              lastWeek: "[sür el] dddd [lasteu à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "osprei %s",
              past: "ja%s",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      699: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tzm-latn", {
            months:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            monthsShort:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
              "_"
            ),
            weekdaysShort:
              "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin:
              "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[asdkh g] LT",
              nextDay: "[aska g] LT",
              nextWeek: "dddd [g] LT",
              lastDay: "[assant g] LT",
              lastWeek: "dddd [g] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dadkh s yan %s",
              past: "yan %s",
              s: "imik",
              ss: "%d imik",
              m: "minuḍ",
              mm: "%d minuḍ",
              h: "saɛa",
              hh: "%d tassaɛin",
              d: "ass",
              dd: "%d ossan",
              M: "ayowr",
              MM: "%d iyyirn",
              y: "asgas",
              yy: "%d isgasn",
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(381));
      },
      1106: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tzm", {
            months:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            monthsShort:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
              "_"
            ),
            weekdaysShort:
              "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin:
              "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
              nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
              nextWeek: "dddd [ⴴ] LT",
              lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
              lastWeek: "dddd [ⴴ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
              past: "ⵢⴰⵏ %s",
              s: "ⵉⵎⵉⴽ",
              ss: "%d ⵉⵎⵉⴽ",
              m: "ⵎⵉⵏⵓⴺ",
              mm: "%d ⵎⵉⵏⵓⴺ",
              h: "ⵙⴰⵄⴰ",
              hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
              d: "ⴰⵙⵙ",
              dd: "%d oⵙⵙⴰⵏ",
              M: "ⴰⵢoⵓⵔ",
              MM: "%d ⵉⵢⵢⵉⵔⵏ",
              y: "ⴰⵙⴳⴰⵙ",
              yy: "%d ⵉⵙⴳⴰⵙⵏ",
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(381));
      },
      9288: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ug-cn", {
            months:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            monthsShort:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            weekdays:
              "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split(
                "_"
              ),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
              LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
              LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t
                  ? e
                  : "چۈشتىن كېيىن" === t || "كەچ" === t
                  ? e + 12
                  : e >= 11
                  ? e
                  : e + 12
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "يېرىم كېچە"
                : a < 900
                ? "سەھەر"
                : a < 1130
                ? "چۈشتىن بۇرۇن"
                : a < 1230
                ? "چۈش"
                : a < 1800
                ? "چۈشتىن كېيىن"
                : "كەچ";
            },
            calendar: {
              sameDay: "[بۈگۈن سائەت] LT",
              nextDay: "[ئەتە سائەت] LT",
              nextWeek: "[كېلەركى] dddd [سائەت] LT",
              lastDay: "[تۆنۈگۈن] LT",
              lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s كېيىن",
              past: "%s بۇرۇن",
              s: "نەچچە سېكونت",
              ss: "%d سېكونت",
              m: "بىر مىنۇت",
              mm: "%d مىنۇت",
              h: "بىر سائەت",
              hh: "%d سائەت",
              d: "بىر كۈن",
              dd: "%d كۈن",
              M: "بىر ئاي",
              MM: "%d ئاي",
              y: "بىر يىل",
              yy: "%d يىل",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "-كۈنى";
                case "w":
                case "W":
                  return e + "-ھەپتە";
                default:
                  return e;
              }
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      7691: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11
              ? n[0]
              : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? n[1]
              : n[2];
          }
          function n(e, n, a) {
            return "m" === a
              ? n
                ? "хвилина"
                : "хвилину"
              : "h" === a
              ? n
                ? "година"
                : "годину"
              : e +
                " " +
                t(
                  {
                    ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років",
                  }[a],
                  +e
                );
          }
          function a(e, t) {
            var n = {
              nominative:
                "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                  "_"
                ),
              accusative:
                "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                  "_"
                ),
              genitive:
                "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                  "_"
                ),
            };
            return !0 === e
              ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1))
              : e
              ? n[
                  /(\[[ВвУу]\]) ?dddd/.test(t)
                    ? "accusative"
                    : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                    ? "genitive"
                    : "nominative"
                ][e.day()]
              : n.nominative;
          }
          function s(e) {
            return function () {
              return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
            };
          }
          e.defineLocale("uk", {
            months: {
              format:
                "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
                  "_"
                ),
              standalone:
                "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
                  "_"
                ),
            },
            monthsShort:
              "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split(
                "_"
              ),
            weekdays: a,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY р.",
              LLL: "D MMMM YYYY р., HH:mm",
              LLLL: "dddd, D MMMM YYYY р., HH:mm",
            },
            calendar: {
              sameDay: s("[Сьогодні "),
              nextDay: s("[Завтра "),
              lastDay: s("[Вчора "),
              nextWeek: s("[У] dddd ["),
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return s("[Минулої] dddd [").call(this);
                  case 1:
                  case 2:
                  case 4:
                    return s("[Минулого] dddd [").call(this);
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "%s тому",
              s: "декілька секунд",
              ss: n,
              m: n,
              mm: n,
              h: "годину",
              hh: n,
              d: "день",
              dd: n,
              M: "місяць",
              MM: n,
              y: "рік",
              yy: n,
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
              return /^(дня|вечора)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ночі"
                : e < 12
                ? "ранку"
                : e < 17
                ? "дня"
                : "вечора";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                  return e + "-й";
                case "D":
                  return e + "-го";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      3795: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "جنوری",
              "فروری",
              "مارچ",
              "اپریل",
              "مئی",
              "جون",
              "جولائی",
              "اگست",
              "ستمبر",
              "اکتوبر",
              "نومبر",
              "دسمبر",
            ],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
          e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "صبح" : "شام";
            },
            calendar: {
              sameDay: "[آج بوقت] LT",
              nextDay: "[کل بوقت] LT",
              nextWeek: "dddd [بوقت] LT",
              lastDay: "[گذشتہ روز بوقت] LT",
              lastWeek: "[گذشتہ] dddd [بوقت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s بعد",
              past: "%s قبل",
              s: "چند سیکنڈ",
              ss: "%d سیکنڈ",
              m: "ایک منٹ",
              mm: "%d منٹ",
              h: "ایک گھنٹہ",
              hh: "%d گھنٹے",
              d: "ایک دن",
              dd: "%d دن",
              M: "ایک ماہ",
              MM: "%d ماہ",
              y: "ایک سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      588: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("uz-latn", {
            months:
              "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
                "_"
              ),
            monthsShort:
              "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays:
              "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
                "_"
              ),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            calendar: {
              sameDay: "[Bugun soat] LT [da]",
              nextDay: "[Ertaga] LT [da]",
              nextWeek: "dddd [kuni soat] LT [da]",
              lastDay: "[Kecha soat] LT [da]",
              lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
              sameElse: "L",
            },
            relativeTime: {
              future: "Yaqin %s ichida",
              past: "Bir necha %s oldin",
              s: "soniya",
              ss: "%d soniya",
              m: "bir daqiqa",
              mm: "%d daqiqa",
              h: "bir soat",
              hh: "%d soat",
              d: "bir kun",
              dd: "%d kun",
              M: "bir oy",
              MM: "%d oy",
              y: "bir yil",
              yy: "%d yil",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      6791: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("uz", {
            months:
              "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                "_"
              ),
            monthsShort:
              "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays:
              "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            calendar: {
              sameDay: "[Бугун соат] LT [да]",
              nextDay: "[Эртага] LT [да]",
              nextWeek: "dddd [куни соат] LT [да]",
              lastDay: "[Кеча соат] LT [да]",
              lastWeek: "[Утган] dddd [куни соат] LT [да]",
              sameElse: "L",
            },
            relativeTime: {
              future: "Якин %s ичида",
              past: "Бир неча %s олдин",
              s: "фурсат",
              ss: "%d фурсат",
              m: "бир дакика",
              mm: "%d дакика",
              h: "бир соат",
              hh: "%d соат",
              d: "бир кун",
              dd: "%d кун",
              M: "бир ой",
              MM: "%d ой",
              y: "бир йил",
              yy: "%d йил",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(381));
      },
      5666: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("vi", {
            months:
              "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
                "_"
              ),
            monthsShort:
              "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split(
                "_"
              ),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
              return /^ch$/i.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [năm] YYYY",
              LLL: "D MMMM [năm] YYYY HH:mm",
              LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
              l: "DD/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hôm nay lúc] LT",
              nextDay: "[Ngày mai lúc] LT",
              nextWeek: "dddd [tuần tới lúc] LT",
              lastDay: "[Hôm qua lúc] LT",
              lastWeek: "dddd [tuần trước lúc] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s tới",
              past: "%s trước",
              s: "vài giây",
              ss: "%d giây",
              m: "một phút",
              mm: "%d phút",
              h: "một giờ",
              hh: "%d giờ",
              d: "một ngày",
              dd: "%d ngày",
              w: "một tuần",
              ww: "%d tuần",
              M: "một tháng",
              MM: "%d tháng",
              y: "một năm",
              yy: "%d năm",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      4378: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("x-pseudo", {
            months:
              "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
                "_"
              ),
            monthsShort:
              "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
                "_"
              ),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[T~ódá~ý át] LT",
              nextDay: "[T~ómó~rró~w át] LT",
              nextWeek: "dddd [át] LT",
              lastDay: "[Ý~ést~érdá~ý át] LT",
              lastWeek: "[L~ást] dddd [át] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "í~ñ %s",
              past: "%s á~gó",
              s: "á ~féw ~sécó~ñds",
              ss: "%d s~écóñ~ds",
              m: "á ~míñ~úté",
              mm: "%d m~íñú~tés",
              h: "á~ñ hó~úr",
              hh: "%d h~óúrs",
              d: "á ~dáý",
              dd: "%d d~áýs",
              M: "á ~móñ~th",
              MM: "%d m~óñt~hs",
              y: "á ~ýéár",
              yy: "%d ý~éárs",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5805: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("yo", {
            months:
              "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
                "_"
              ),
            monthsShort:
              "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Ònì ni] LT",
              nextDay: "[Ọ̀la ni] LT",
              nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
              lastDay: "[Àna ni] LT",
              lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ní %s",
              past: "%s kọjá",
              s: "ìsẹjú aayá die",
              ss: "aayá %d",
              m: "ìsẹjú kan",
              mm: "ìsẹjú %d",
              h: "wákati kan",
              hh: "wákati %d",
              d: "ọjọ́ kan",
              dd: "ọjọ́ %d",
              M: "osù kan",
              MM: "osù %d",
              y: "ọdún kan",
              yy: "ọdún %d",
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      3839: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-cn", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日Ah点mm分",
              LLLL: "YYYY年M月D日ddddAh点mm分",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : e >= 11
                  ? e
                  : e + 12
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1130
                ? "上午"
                : a < 1230
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: function (e) {
                return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
              },
              lastDay: "[昨天]LT",
              lastWeek: function (e) {
                return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT";
              },
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "周";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s后",
              past: "%s前",
              s: "几秒",
              ss: "%d 秒",
              m: "1 分钟",
              mm: "%d 分钟",
              h: "1 小时",
              hh: "%d 小时",
              d: "1 天",
              dd: "%d 天",
              w: "1 周",
              ww: "%d 周",
              M: "1 个月",
              MM: "%d 个月",
              y: "1 年",
              yy: "%d 年",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(381));
      },
      5726: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-hk", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1200
                ? "上午"
                : 1200 === a
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: "[下]ddddLT",
              lastDay: "[昨天]LT",
              lastWeek: "[上]ddddLT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(381));
      },
      9807: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-mo", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "D/M/YYYY",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1130
                ? "上午"
                : a < 1230
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天] LT",
              nextDay: "[明天] LT",
              nextWeek: "[下]dddd LT",
              lastDay: "[昨天] LT",
              lastWeek: "[上]dddd LT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s內",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(381));
      },
      4152: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-tw", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1130
                ? "上午"
                : a < 1230
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天] LT",
              nextDay: "[明天] LT",
              nextWeek: "[下]dddd LT",
              lastDay: "[昨天] LT",
              lastWeek: "[上]dddd LT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(381));
      },
      6700: (e, t, n) => {
        var a = {
          "./af": 2786,
          "./af.js": 2786,
          "./ar": 867,
          "./ar-dz": 4130,
          "./ar-dz.js": 4130,
          "./ar-kw": 6135,
          "./ar-kw.js": 6135,
          "./ar-ly": 6440,
          "./ar-ly.js": 6440,
          "./ar-ma": 7702,
          "./ar-ma.js": 7702,
          "./ar-sa": 6040,
          "./ar-sa.js": 6040,
          "./ar-tn": 7100,
          "./ar-tn.js": 7100,
          "./ar.js": 867,
          "./az": 1083,
          "./az.js": 1083,
          "./be": 9808,
          "./be.js": 9808,
          "./bg": 8338,
          "./bg.js": 8338,
          "./bm": 7438,
          "./bm.js": 7438,
          "./bn": 8905,
          "./bn-bd": 6225,
          "./bn-bd.js": 6225,
          "./bn.js": 8905,
          "./bo": 1560,
          "./bo.js": 1560,
          "./br": 1278,
          "./br.js": 1278,
          "./bs": 622,
          "./bs.js": 622,
          "./ca": 2468,
          "./ca.js": 2468,
          "./cs": 5822,
          "./cs.js": 5822,
          "./cv": 877,
          "./cv.js": 877,
          "./cy": 7373,
          "./cy.js": 7373,
          "./da": 4780,
          "./da.js": 4780,
          "./de": 9740,
          "./de-at": 217,
          "./de-at.js": 217,
          "./de-ch": 894,
          "./de-ch.js": 894,
          "./de.js": 9740,
          "./dv": 5300,
          "./dv.js": 5300,
          "./el": 837,
          "./el.js": 837,
          "./en-au": 8348,
          "./en-au.js": 8348,
          "./en-ca": 7925,
          "./en-ca.js": 7925,
          "./en-gb": 2243,
          "./en-gb.js": 2243,
          "./en-ie": 6436,
          "./en-ie.js": 6436,
          "./en-il": 7207,
          "./en-il.js": 7207,
          "./en-in": 4175,
          "./en-in.js": 4175,
          "./en-nz": 6319,
          "./en-nz.js": 6319,
          "./en-sg": 1662,
          "./en-sg.js": 1662,
          "./eo": 2915,
          "./eo.js": 2915,
          "./es": 7093,
          "./es-do": 5251,
          "./es-do.js": 5251,
          "./es-mx": 6112,
          "./es-mx.js": 6112,
          "./es-us": 1146,
          "./es-us.js": 1146,
          "./es.js": 7093,
          "./et": 5603,
          "./et.js": 5603,
          "./eu": 7763,
          "./eu.js": 7763,
          "./fa": 6959,
          "./fa.js": 6959,
          "./fi": 1897,
          "./fi.js": 1897,
          "./fil": 2549,
          "./fil.js": 2549,
          "./fo": 4694,
          "./fo.js": 4694,
          "./fr": 4470,
          "./fr-ca": 3049,
          "./fr-ca.js": 3049,
          "./fr-ch": 2330,
          "./fr-ch.js": 2330,
          "./fr.js": 4470,
          "./fy": 5044,
          "./fy.js": 5044,
          "./ga": 9295,
          "./ga.js": 9295,
          "./gd": 2101,
          "./gd.js": 2101,
          "./gl": 8794,
          "./gl.js": 8794,
          "./gom-deva": 7884,
          "./gom-deva.js": 7884,
          "./gom-latn": 3168,
          "./gom-latn.js": 3168,
          "./gu": 5349,
          "./gu.js": 5349,
          "./he": 4206,
          "./he.js": 4206,
          "./hi": 94,
          "./hi.js": 94,
          "./hr": 316,
          "./hr.js": 316,
          "./hu": 2138,
          "./hu.js": 2138,
          "./hy-am": 1423,
          "./hy-am.js": 1423,
          "./id": 9218,
          "./id.js": 9218,
          "./is": 135,
          "./is.js": 135,
          "./it": 626,
          "./it-ch": 150,
          "./it-ch.js": 150,
          "./it.js": 626,
          "./ja": 9183,
          "./ja.js": 9183,
          "./jv": 4286,
          "./jv.js": 4286,
          "./ka": 2105,
          "./ka.js": 2105,
          "./kk": 7772,
          "./kk.js": 7772,
          "./km": 8758,
          "./km.js": 8758,
          "./kn": 9282,
          "./kn.js": 9282,
          "./ko": 3730,
          "./ko.js": 3730,
          "./ku": 1408,
          "./ku.js": 1408,
          "./ky": 3291,
          "./ky.js": 3291,
          "./lb": 6841,
          "./lb.js": 6841,
          "./lo": 5466,
          "./lo.js": 5466,
          "./lt": 7010,
          "./lt.js": 7010,
          "./lv": 7595,
          "./lv.js": 7595,
          "./me": 9861,
          "./me.js": 9861,
          "./mi": 5493,
          "./mi.js": 5493,
          "./mk": 5966,
          "./mk.js": 5966,
          "./ml": 7341,
          "./ml.js": 7341,
          "./mn": 5115,
          "./mn.js": 5115,
          "./mr": 370,
          "./mr.js": 370,
          "./ms": 9847,
          "./ms-my": 1237,
          "./ms-my.js": 1237,
          "./ms.js": 9847,
          "./mt": 2126,
          "./mt.js": 2126,
          "./my": 6165,
          "./my.js": 6165,
          "./nb": 4924,
          "./nb.js": 4924,
          "./ne": 6744,
          "./ne.js": 6744,
          "./nl": 3901,
          "./nl-be": 9814,
          "./nl-be.js": 9814,
          "./nl.js": 3901,
          "./nn": 3877,
          "./nn.js": 3877,
          "./oc-lnc": 2135,
          "./oc-lnc.js": 2135,
          "./pa-in": 5858,
          "./pa-in.js": 5858,
          "./pl": 4495,
          "./pl.js": 4495,
          "./pt": 9520,
          "./pt-br": 7971,
          "./pt-br.js": 7971,
          "./pt.js": 9520,
          "./ro": 6459,
          "./ro.js": 6459,
          "./ru": 238,
          "./ru.js": 238,
          "./sd": 950,
          "./sd.js": 950,
          "./se": 490,
          "./se.js": 490,
          "./si": 124,
          "./si.js": 124,
          "./sk": 4249,
          "./sk.js": 4249,
          "./sl": 4985,
          "./sl.js": 4985,
          "./sq": 1104,
          "./sq.js": 1104,
          "./sr": 9131,
          "./sr-cyrl": 9915,
          "./sr-cyrl.js": 9915,
          "./sr.js": 9131,
          "./ss": 5893,
          "./ss.js": 5893,
          "./sv": 8760,
          "./sv.js": 8760,
          "./sw": 1172,
          "./sw.js": 1172,
          "./ta": 7333,
          "./ta.js": 7333,
          "./te": 3110,
          "./te.js": 3110,
          "./tet": 2095,
          "./tet.js": 2095,
          "./tg": 7321,
          "./tg.js": 7321,
          "./th": 9041,
          "./th.js": 9041,
          "./tk": 9005,
          "./tk.js": 9005,
          "./tl-ph": 5768,
          "./tl-ph.js": 5768,
          "./tlh": 9444,
          "./tlh.js": 9444,
          "./tr": 2397,
          "./tr.js": 2397,
          "./tzl": 8254,
          "./tzl.js": 8254,
          "./tzm": 1106,
          "./tzm-latn": 699,
          "./tzm-latn.js": 699,
          "./tzm.js": 1106,
          "./ug-cn": 9288,
          "./ug-cn.js": 9288,
          "./uk": 7691,
          "./uk.js": 7691,
          "./ur": 3795,
          "./ur.js": 3795,
          "./uz": 6791,
          "./uz-latn": 588,
          "./uz-latn.js": 588,
          "./uz.js": 6791,
          "./vi": 5666,
          "./vi.js": 5666,
          "./x-pseudo": 4378,
          "./x-pseudo.js": 4378,
          "./yo": 5805,
          "./yo.js": 5805,
          "./zh-cn": 3839,
          "./zh-cn.js": 3839,
          "./zh-hk": 5726,
          "./zh-hk.js": 5726,
          "./zh-mo": 9807,
          "./zh-mo.js": 9807,
          "./zh-tw": 4152,
          "./zh-tw.js": 4152,
        };
        function s(e) {
          var t = r(e);
          return n(t);
        }
        function r(e) {
          if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return a[e];
        }
        (s.keys = function () {
          return Object.keys(a);
        }),
          (s.resolve = r),
          (e.exports = s),
          (s.id = 6700);
      },
      381: function (e, t, n) {
        (e = n.nmd(e)).exports = (function () {
          "use strict";
          var t, a;
          function s() {
            return t.apply(null, arguments);
          }
          function r(e) {
            t = e;
          }
          function i(e) {
            return (
              e instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(e)
            );
          }
          function o(e) {
            return (
              null != e &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          }
          function d(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function _(e) {
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (d(e, t)) return !1;
            return !0;
          }
          function u(e) {
            return void 0 === e;
          }
          function m(e) {
            return (
              "number" == typeof e ||
              "[object Number]" === Object.prototype.toString.call(e)
            );
          }
          function l(e) {
            return (
              e instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(e)
            );
          }
          function c(e, t) {
            var n,
              a = [];
            for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
            return a;
          }
          function h(e, t) {
            for (var n in t) d(t, n) && (e[n] = t[n]);
            return (
              d(t, "toString") && (e.toString = t.toString),
              d(t, "valueOf") && (e.valueOf = t.valueOf),
              e
            );
          }
          function M(e, t, n, a) {
            return Bn(e, t, n, a, !0).utc();
          }
          function f() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: !1,
              weekdayMismatch: !1,
            };
          }
          function y(e) {
            return null == e._pf && (e._pf = f()), e._pf;
          }
          function L(e) {
            if (null == e._isValid) {
              var t = y(e),
                n = a.call(t.parsedDateParts, function (e) {
                  return null != e;
                }),
                s =
                  !isNaN(e._d.getTime()) &&
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidEra &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && n));
              if (
                (e._strict &&
                  (s =
                    s &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
              )
                return s;
              e._isValid = s;
            }
            return e._isValid;
          }
          function Y(e) {
            var t = M(NaN);
            return null != e ? h(y(t), e) : (y(t).userInvalidated = !0), t;
          }
          a = Array.prototype.some
            ? Array.prototype.some
            : function (e) {
                var t,
                  n = Object(this),
                  a = n.length >>> 0;
                for (t = 0; t < a; t++)
                  if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1;
              };
          var p = (s.momentProperties = []),
            k = !1;
          function D(e, t) {
            var n, a, s;
            if (
              (u(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              u(t._i) || (e._i = t._i),
              u(t._f) || (e._f = t._f),
              u(t._l) || (e._l = t._l),
              u(t._strict) || (e._strict = t._strict),
              u(t._tzm) || (e._tzm = t._tzm),
              u(t._isUTC) || (e._isUTC = t._isUTC),
              u(t._offset) || (e._offset = t._offset),
              u(t._pf) || (e._pf = y(t)),
              u(t._locale) || (e._locale = t._locale),
              p.length > 0)
            )
              for (n = 0; n < p.length; n++)
                u((s = t[(a = p[n])])) || (e[a] = s);
            return e;
          }
          function g(e) {
            D(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === k && ((k = !0), s.updateOffset(this), (k = !1));
          }
          function w(e) {
            return e instanceof g || (null != e && null != e._isAMomentObject);
          }
          function v(e) {
            !1 === s.suppressDeprecationWarnings &&
              "undefined" != typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + e);
          }
          function T(e, t) {
            var n = !0;
            return h(function () {
              if (
                (null != s.deprecationHandler && s.deprecationHandler(null, e),
                n)
              ) {
                var a,
                  r,
                  i,
                  o = [];
                for (r = 0; r < arguments.length; r++) {
                  if (((a = ""), "object" == typeof arguments[r])) {
                    for (i in ((a += "\n[" + r + "] "), arguments[0]))
                      d(arguments[0], i) &&
                        (a += i + ": " + arguments[0][i] + ", ");
                    a = a.slice(0, -2);
                  } else a = arguments[r];
                  o.push(a);
                }
                v(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(o).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (n = !1);
              }
              return t.apply(this, arguments);
            }, t);
          }
          var b,
            S = {};
          function H(e, t) {
            null != s.deprecationHandler && s.deprecationHandler(e, t),
              S[e] || (v(t), (S[e] = !0));
          }
          function j(e) {
            return (
              ("undefined" != typeof Function && e instanceof Function) ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          function x(e) {
            var t, n;
            for (n in e)
              d(e, n) && (j((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
            (this._config = e),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }
          function O(e, t) {
            var n,
              a = h({}, e);
            for (n in t)
              d(t, n) &&
                (o(e[n]) && o(t[n])
                  ? ((a[n] = {}), h(a[n], e[n]), h(a[n], t[n]))
                  : null != t[n]
                  ? (a[n] = t[n])
                  : delete a[n]);
            for (n in e) d(e, n) && !d(t, n) && o(e[n]) && (a[n] = h({}, a[n]));
            return a;
          }
          function P(e) {
            null != e && this.set(e);
          }
          (s.suppressDeprecationWarnings = !1),
            (s.deprecationHandler = null),
            (b = Object.keys
              ? Object.keys
              : function (e) {
                  var t,
                    n = [];
                  for (t in e) d(e, t) && n.push(t);
                  return n;
                });
          var E = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          };
          function W(e, t, n) {
            var a = this._calendar[e] || this._calendar.sameElse;
            return j(a) ? a.call(t, n) : a;
          }
          function A(e, t, n) {
            var a = "" + Math.abs(e),
              s = t - a.length;
            return (
              (e >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, s)).toString().substr(1) +
              a
            );
          }
          var F =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            N = {},
            C = {};
          function R(e, t, n, a) {
            var s = a;
            "string" == typeof a &&
              (s = function () {
                return this[a]();
              }),
              e && (C[e] = s),
              t &&
                (C[t[0]] = function () {
                  return A(s.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (C[n] = function () {
                  return this.localeData().ordinal(s.apply(this, arguments), e);
                });
          }
          function J(e) {
            return e.match(/\[[\s\S]/)
              ? e.replace(/^\[|\]$/g, "")
              : e.replace(/\\/g, "");
          }
          function I(e) {
            var t,
              n,
              a = e.match(F);
            for (t = 0, n = a.length; t < n; t++)
              C[a[t]] ? (a[t] = C[a[t]]) : (a[t] = J(a[t]));
            return function (t) {
              var s,
                r = "";
              for (s = 0; s < n; s++) r += j(a[s]) ? a[s].call(t, e) : a[s];
              return r;
            };
          }
          function U(e, t) {
            return e.isValid()
              ? ((t = q(t, e.localeData())), (N[t] = N[t] || I(t)), N[t](e))
              : e.localeData().invalidDate();
          }
          function q(e, t) {
            var n = 5;
            function a(e) {
              return t.longDateFormat(e) || e;
            }
            for (z.lastIndex = 0; n >= 0 && z.test(e); )
              (e = e.replace(z, a)), (z.lastIndex = 0), (n -= 1);
            return e;
          }
          var G = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          };
          function V(e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n
                  .match(F)
                  .map(function (e) {
                    return "MMMM" === e ||
                      "MM" === e ||
                      "DD" === e ||
                      "dddd" === e
                      ? e.slice(1)
                      : e;
                  })
                  .join("")),
                this._longDateFormat[e]);
          }
          var B = "Invalid date";
          function K() {
            return this._invalidDate;
          }
          var $ = "%d",
            Z = /\d{1,2}/;
          function Q(e) {
            return this._ordinal.replace("%d", e);
          }
          var X = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          };
          function ee(e, t, n, a) {
            var s = this._relativeTime[n];
            return j(s) ? s(e, t, n, a) : s.replace(/%d/i, e);
          }
          function te(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return j(n) ? n(t) : n.replace(/%s/i, t);
          }
          var ne = {};
          function ae(e, t) {
            var n = e.toLowerCase();
            ne[n] = ne[n + "s"] = ne[t] = e;
          }
          function se(e) {
            return "string" == typeof e ? ne[e] || ne[e.toLowerCase()] : void 0;
          }
          function re(e) {
            var t,
              n,
              a = {};
            for (n in e) d(e, n) && (t = se(n)) && (a[t] = e[n]);
            return a;
          }
          var ie = {};
          function oe(e, t) {
            ie[e] = t;
          }
          function de(e) {
            var t,
              n = [];
            for (t in e) d(e, t) && n.push({ unit: t, priority: ie[t] });
            return (
              n.sort(function (e, t) {
                return e.priority - t.priority;
              }),
              n
            );
          }
          function _e(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          function ue(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function me(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = ue(t)), n;
          }
          function le(e, t) {
            return function (n) {
              return null != n
                ? (he(this, e, n), s.updateOffset(this, t), this)
                : ce(this, e);
            };
          }
          function ce(e, t) {
            return e.isValid()
              ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
              : NaN;
          }
          function he(e, t, n) {
            e.isValid() &&
              !isNaN(n) &&
              ("FullYear" === t &&
              _e(e.year()) &&
              1 === e.month() &&
              29 === e.date()
                ? ((n = me(n)),
                  e._d["set" + (e._isUTC ? "UTC" : "") + t](
                    n,
                    e.month(),
                    et(n, e.month())
                  ))
                : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
          }
          function Me(e) {
            return j(this[(e = se(e))]) ? this[e]() : this;
          }
          function fe(e, t) {
            if ("object" == typeof e) {
              var n,
                a = de((e = re(e)));
              for (n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
            } else if (j(this[(e = se(e))])) return this[e](t);
            return this;
          }
          var ye,
            Le = /\d/,
            Ye = /\d\d/,
            pe = /\d{3}/,
            ke = /\d{4}/,
            De = /[+-]?\d{6}/,
            ge = /\d\d?/,
            we = /\d\d\d\d?/,
            ve = /\d\d\d\d\d\d?/,
            Te = /\d{1,3}/,
            be = /\d{1,4}/,
            Se = /[+-]?\d{1,6}/,
            He = /\d+/,
            je = /[+-]?\d+/,
            xe = /Z|[+-]\d\d:?\d\d/gi,
            Oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Pe = /[+-]?\d+(\.\d{1,3})?/,
            Ee =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
          function We(e, t, n) {
            ye[e] = j(t)
              ? t
              : function (e, a) {
                  return e && n ? n : t;
                };
          }
          function Ae(e, t) {
            return d(ye, e) ? ye[e](t._strict, t._locale) : new RegExp(Fe(e));
          }
          function Fe(e) {
            return ze(
              e
                .replace("\\", "")
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (e, t, n, a, s) {
                    return t || n || a || s;
                  }
                )
            );
          }
          function ze(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          ye = {};
          var Ne = {};
          function Ce(e, t) {
            var n,
              a = t;
            for (
              "string" == typeof e && (e = [e]),
                m(t) &&
                  (a = function (e, n) {
                    n[t] = me(e);
                  }),
                n = 0;
              n < e.length;
              n++
            )
              Ne[e[n]] = a;
          }
          function Re(e, t) {
            Ce(e, function (e, n, a, s) {
              (a._w = a._w || {}), t(e, a._w, a, s);
            });
          }
          function Je(e, t, n) {
            null != t && d(Ne, e) && Ne[e](t, n._a, n, e);
          }
          var Ie,
            Ue = 0,
            qe = 1,
            Ge = 2,
            Ve = 3,
            Be = 4,
            Ke = 5,
            $e = 6,
            Ze = 7,
            Qe = 8;
          function Xe(e, t) {
            return ((e % t) + t) % t;
          }
          function et(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n = Xe(t, 12);
            return (
              (e += (t - n) / 12),
              1 === n ? (_e(e) ? 29 : 28) : 31 - ((n % 7) % 2)
            );
          }
          (Ie = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            R("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            R("MMM", 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            R("MMMM", 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            ae("month", "M"),
            oe("month", 8),
            We("M", ge),
            We("MM", ge, Ye),
            We("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            We("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            Ce(["M", "MM"], function (e, t) {
              t[qe] = me(e) - 1;
            }),
            Ce(["MMM", "MMMM"], function (e, t, n, a) {
              var s = n._locale.monthsParse(e, a, n._strict);
              null != s ? (t[qe] = s) : (y(n).invalidMonth = e);
            });
          var tt =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            at = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            st = Ee,
            rt = Ee;
          function it(e, t) {
            return e
              ? i(this._months)
                ? this._months[e.month()]
                : this._months[
                    (this._months.isFormat || at).test(t)
                      ? "format"
                      : "standalone"
                  ][e.month()]
              : i(this._months)
              ? this._months
              : this._months.standalone;
          }
          function ot(e, t) {
            return e
              ? i(this._monthsShort)
                ? this._monthsShort[e.month()]
                : this._monthsShort[at.test(t) ? "format" : "standalone"][
                    e.month()
                  ]
              : i(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }
          function dt(e, t, n) {
            var a,
              s,
              r,
              i = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  a = 0;
                a < 12;
                ++a
              )
                (r = M([2e3, a])),
                  (this._shortMonthsParse[a] = this.monthsShort(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[a] = this.months(
                    r,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === t
                ? -1 !== (s = Ie.call(this._shortMonthsParse, i))
                  ? s
                  : null
                : -1 !== (s = Ie.call(this._longMonthsParse, i))
                ? s
                : null
              : "MMM" === t
              ? -1 !== (s = Ie.call(this._shortMonthsParse, i)) ||
                -1 !== (s = Ie.call(this._longMonthsParse, i))
                ? s
                : null
              : -1 !== (s = Ie.call(this._longMonthsParse, i)) ||
                -1 !== (s = Ie.call(this._shortMonthsParse, i))
              ? s
              : null;
          }
          function _t(e, t, n) {
            var a, s, r;
            if (this._monthsParseExact) return dt.call(this, e, t, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                a = 0;
              a < 12;
              a++
            ) {
              if (
                ((s = M([2e3, a])),
                n &&
                  !this._longMonthsParse[a] &&
                  ((this._longMonthsParse[a] = new RegExp(
                    "^" + this.months(s, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[a] = new RegExp(
                    "^" + this.monthsShort(s, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[a] ||
                  ((r =
                    "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
                  (this._monthsParse[a] = new RegExp(r.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[a].test(e))
              )
                return a;
              if (n && "MMM" === t && this._shortMonthsParse[a].test(e))
                return a;
              if (!n && this._monthsParse[a].test(e)) return a;
            }
          }
          function ut(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
              if (/^\d+$/.test(t)) t = me(t);
              else if (!m((t = e.localeData().monthsParse(t)))) return e;
            return (
              (n = Math.min(e.date(), et(e.year(), t))),
              e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
              e
            );
          }
          function mt(e) {
            return null != e
              ? (ut(this, e), s.updateOffset(this, !0), this)
              : ce(this, "Month");
          }
          function lt() {
            return et(this.year(), this.month());
          }
          function ct(e) {
            return this._monthsParseExact
              ? (d(this, "_monthsRegex") || Mt.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = st),
                this._monthsShortStrictRegex && e
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }
          function ht(e) {
            return this._monthsParseExact
              ? (d(this, "_monthsRegex") || Mt.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex)
              : (d(this, "_monthsRegex") || (this._monthsRegex = rt),
                this._monthsStrictRegex && e
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }
          function Mt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a = [],
              s = [],
              r = [];
            for (t = 0; t < 12; t++)
              (n = M([2e3, t])),
                a.push(this.monthsShort(n, "")),
                s.push(this.months(n, "")),
                r.push(this.months(n, "")),
                r.push(this.monthsShort(n, ""));
            for (a.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++)
              (a[t] = ze(a[t])), (s[t] = ze(s[t]));
            for (t = 0; t < 24; t++) r[t] = ze(r[t]);
            (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + a.join("|") + ")",
                "i"
              ));
          }
          function ft(e) {
            return _e(e) ? 366 : 365;
          }
          R("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? A(e, 4) : "+" + e;
          }),
            R(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            R(0, ["YYYY", 4], 0, "year"),
            R(0, ["YYYYY", 5], 0, "year"),
            R(0, ["YYYYYY", 6, !0], 0, "year"),
            ae("year", "y"),
            oe("year", 1),
            We("Y", je),
            We("YY", ge, Ye),
            We("YYYY", be, ke),
            We("YYYYY", Se, De),
            We("YYYYYY", Se, De),
            Ce(["YYYYY", "YYYYYY"], Ue),
            Ce("YYYY", function (e, t) {
              t[Ue] = 2 === e.length ? s.parseTwoDigitYear(e) : me(e);
            }),
            Ce("YY", function (e, t) {
              t[Ue] = s.parseTwoDigitYear(e);
            }),
            Ce("Y", function (e, t) {
              t[Ue] = parseInt(e, 10);
            }),
            (s.parseTwoDigitYear = function (e) {
              return me(e) + (me(e) > 68 ? 1900 : 2e3);
            });
          var yt = le("FullYear", !0);
          function Lt() {
            return _e(this.year());
          }
          function Yt(e, t, n, a, s, r, i) {
            var o;
            return (
              e < 100 && e >= 0
                ? ((o = new Date(e + 400, t, n, a, s, r, i)),
                  isFinite(o.getFullYear()) && o.setFullYear(e))
                : (o = new Date(e, t, n, a, s, r, i)),
              o
            );
          }
          function pt(e) {
            var t, n;
            return (
              e < 100 && e >= 0
                ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                  (t = new Date(Date.UTC.apply(null, n))),
                  isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
                : (t = new Date(Date.UTC.apply(null, arguments))),
              t
            );
          }
          function kt(e, t, n) {
            var a = 7 + t - n;
            return (-(7 + pt(e, 0, a).getUTCDay() - t) % 7) + a - 1;
          }
          function Dt(e, t, n, a, s) {
            var r,
              i,
              o = 1 + 7 * (t - 1) + ((7 + n - a) % 7) + kt(e, a, s);
            return (
              o <= 0
                ? (i = ft((r = e - 1)) + o)
                : o > ft(e)
                ? ((r = e + 1), (i = o - ft(e)))
                : ((r = e), (i = o)),
              { year: r, dayOfYear: i }
            );
          }
          function gt(e, t, n) {
            var a,
              s,
              r = kt(e.year(), t, n),
              i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
            return (
              i < 1
                ? (a = i + wt((s = e.year() - 1), t, n))
                : i > wt(e.year(), t, n)
                ? ((a = i - wt(e.year(), t, n)), (s = e.year() + 1))
                : ((s = e.year()), (a = i)),
              { week: a, year: s }
            );
          }
          function wt(e, t, n) {
            var a = kt(e, t, n),
              s = kt(e + 1, t, n);
            return (ft(e) - a + s) / 7;
          }
          function vt(e) {
            return gt(e, this._week.dow, this._week.doy).week;
          }
          R("w", ["ww", 2], "wo", "week"),
            R("W", ["WW", 2], "Wo", "isoWeek"),
            ae("week", "w"),
            ae("isoWeek", "W"),
            oe("week", 5),
            oe("isoWeek", 5),
            We("w", ge),
            We("ww", ge, Ye),
            We("W", ge),
            We("WW", ge, Ye),
            Re(["w", "ww", "W", "WW"], function (e, t, n, a) {
              t[a.substr(0, 1)] = me(e);
            });
          var Tt = { dow: 0, doy: 6 };
          function bt() {
            return this._week.dow;
          }
          function St() {
            return this._week.doy;
          }
          function Ht(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function jt(e) {
            var t = gt(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function xt(e, t) {
            return "string" != typeof e
              ? e
              : isNaN(e)
              ? "number" == typeof (e = t.weekdaysParse(e))
                ? e
                : null
              : parseInt(e, 10);
          }
          function Ot(e, t) {
            return "string" == typeof e
              ? t.weekdaysParse(e) % 7 || 7
              : isNaN(e)
              ? null
              : e;
          }
          function Pt(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          R("d", 0, "do", "day"),
            R("dd", 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            R("ddd", 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            R("dddd", 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            R("e", 0, 0, "weekday"),
            R("E", 0, 0, "isoWeekday"),
            ae("day", "d"),
            ae("weekday", "e"),
            ae("isoWeekday", "E"),
            oe("day", 11),
            oe("weekday", 11),
            oe("isoWeekday", 11),
            We("d", ge),
            We("e", ge),
            We("E", ge),
            We("dd", function (e, t) {
              return t.weekdaysMinRegex(e);
            }),
            We("ddd", function (e, t) {
              return t.weekdaysShortRegex(e);
            }),
            We("dddd", function (e, t) {
              return t.weekdaysRegex(e);
            }),
            Re(["dd", "ddd", "dddd"], function (e, t, n, a) {
              var s = n._locale.weekdaysParse(e, a, n._strict);
              null != s ? (t.d = s) : (y(n).invalidWeekday = e);
            }),
            Re(["d", "e", "E"], function (e, t, n, a) {
              t[a] = me(e);
            });
          var Et =
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            Wt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            At = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Ft = Ee,
            zt = Ee,
            Nt = Ee;
          function Ct(e, t) {
            var n = i(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  e && !0 !== e && this._weekdays.isFormat.test(t)
                    ? "format"
                    : "standalone"
                ];
            return !0 === e ? Pt(n, this._week.dow) : e ? n[e.day()] : n;
          }
          function Rt(e) {
            return !0 === e
              ? Pt(this._weekdaysShort, this._week.dow)
              : e
              ? this._weekdaysShort[e.day()]
              : this._weekdaysShort;
          }
          function Jt(e) {
            return !0 === e
              ? Pt(this._weekdaysMin, this._week.dow)
              : e
              ? this._weekdaysMin[e.day()]
              : this._weekdaysMin;
          }
          function It(e, t, n) {
            var a,
              s,
              r,
              i = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  a = 0;
                a < 7;
                ++a
              )
                (r = M([2e3, 1]).day(a)),
                  (this._minWeekdaysParse[a] = this.weekdaysMin(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[a] = this.weekdaysShort(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[a] = this.weekdays(
                    r,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === t
                ? -1 !== (s = Ie.call(this._weekdaysParse, i))
                  ? s
                  : null
                : "ddd" === t
                ? -1 !== (s = Ie.call(this._shortWeekdaysParse, i))
                  ? s
                  : null
                : -1 !== (s = Ie.call(this._minWeekdaysParse, i))
                ? s
                : null
              : "dddd" === t
              ? -1 !== (s = Ie.call(this._weekdaysParse, i)) ||
                -1 !== (s = Ie.call(this._shortWeekdaysParse, i)) ||
                -1 !== (s = Ie.call(this._minWeekdaysParse, i))
                ? s
                : null
              : "ddd" === t
              ? -1 !== (s = Ie.call(this._shortWeekdaysParse, i)) ||
                -1 !== (s = Ie.call(this._weekdaysParse, i)) ||
                -1 !== (s = Ie.call(this._minWeekdaysParse, i))
                ? s
                : null
              : -1 !== (s = Ie.call(this._minWeekdaysParse, i)) ||
                -1 !== (s = Ie.call(this._weekdaysParse, i)) ||
                -1 !== (s = Ie.call(this._shortWeekdaysParse, i))
              ? s
              : null;
          }
          function Ut(e, t, n) {
            var a, s, r;
            if (this._weekdaysParseExact) return It.call(this, e, t, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                a = 0;
              a < 7;
              a++
            ) {
              if (
                ((s = M([2e3, 1]).day(a)),
                n &&
                  !this._fullWeekdaysParse[a] &&
                  ((this._fullWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[a] ||
                  ((r =
                    "^" +
                    this.weekdays(s, "") +
                    "|^" +
                    this.weekdaysShort(s, "") +
                    "|^" +
                    this.weekdaysMin(s, "")),
                  (this._weekdaysParse[a] = new RegExp(
                    r.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === t && this._fullWeekdaysParse[a].test(e))
              )
                return a;
              if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e))
                return a;
              if (n && "dd" === t && this._minWeekdaysParse[a].test(e))
                return a;
              if (!n && this._weekdaysParse[a].test(e)) return a;
            }
          }
          function qt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e
              ? ((e = xt(e, this.localeData())), this.add(e - t, "d"))
              : t;
          }
          function Gt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }
          function Vt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              var t = Ot(e, this.localeData());
              return this.day(this.day() % 7 ? t : t - 7);
            }
            return this.day() || 7;
          }
          function Bt(e) {
            return this._weekdaysParseExact
              ? (d(this, "_weekdaysRegex") || Zt.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Ft),
                this._weekdaysStrictRegex && e
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }
          function Kt(e) {
            return this._weekdaysParseExact
              ? (d(this, "_weekdaysRegex") || Zt.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (d(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = zt),
                this._weekdaysShortStrictRegex && e
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }
          function $t(e) {
            return this._weekdaysParseExact
              ? (d(this, "_weekdaysRegex") || Zt.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Nt),
                this._weekdaysMinStrictRegex && e
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }
          function Zt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a,
              s,
              r,
              i = [],
              o = [],
              d = [],
              _ = [];
            for (t = 0; t < 7; t++)
              (n = M([2e3, 1]).day(t)),
                (a = ze(this.weekdaysMin(n, ""))),
                (s = ze(this.weekdaysShort(n, ""))),
                (r = ze(this.weekdays(n, ""))),
                i.push(a),
                o.push(s),
                d.push(r),
                _.push(a),
                _.push(s),
                _.push(r);
            i.sort(e),
              o.sort(e),
              d.sort(e),
              _.sort(e),
              (this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + d.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              ));
          }
          function Qt() {
            return this.hours() % 12 || 12;
          }
          function Xt() {
            return this.hours() || 24;
          }
          function en(e, t) {
            R(e, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function tn(e, t) {
            return t._meridiemParse;
          }
          function nn(e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }
          R("H", ["HH", 2], 0, "hour"),
            R("h", ["hh", 2], 0, Qt),
            R("k", ["kk", 2], 0, Xt),
            R("hmm", 0, 0, function () {
              return "" + Qt.apply(this) + A(this.minutes(), 2);
            }),
            R("hmmss", 0, 0, function () {
              return (
                "" +
                Qt.apply(this) +
                A(this.minutes(), 2) +
                A(this.seconds(), 2)
              );
            }),
            R("Hmm", 0, 0, function () {
              return "" + this.hours() + A(this.minutes(), 2);
            }),
            R("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
              );
            }),
            en("a", !0),
            en("A", !1),
            ae("hour", "h"),
            oe("hour", 13),
            We("a", tn),
            We("A", tn),
            We("H", ge),
            We("h", ge),
            We("k", ge),
            We("HH", ge, Ye),
            We("hh", ge, Ye),
            We("kk", ge, Ye),
            We("hmm", we),
            We("hmmss", ve),
            We("Hmm", we),
            We("Hmmss", ve),
            Ce(["H", "HH"], Ve),
            Ce(["k", "kk"], function (e, t, n) {
              var a = me(e);
              t[Ve] = 24 === a ? 0 : a;
            }),
            Ce(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            Ce(["h", "hh"], function (e, t, n) {
              (t[Ve] = me(e)), (y(n).bigHour = !0);
            }),
            Ce("hmm", function (e, t, n) {
              var a = e.length - 2;
              (t[Ve] = me(e.substr(0, a))),
                (t[Be] = me(e.substr(a))),
                (y(n).bigHour = !0);
            }),
            Ce("hmmss", function (e, t, n) {
              var a = e.length - 4,
                s = e.length - 2;
              (t[Ve] = me(e.substr(0, a))),
                (t[Be] = me(e.substr(a, 2))),
                (t[Ke] = me(e.substr(s))),
                (y(n).bigHour = !0);
            }),
            Ce("Hmm", function (e, t, n) {
              var a = e.length - 2;
              (t[Ve] = me(e.substr(0, a))), (t[Be] = me(e.substr(a)));
            }),
            Ce("Hmmss", function (e, t, n) {
              var a = e.length - 4,
                s = e.length - 2;
              (t[Ve] = me(e.substr(0, a))),
                (t[Be] = me(e.substr(a, 2))),
                (t[Ke] = me(e.substr(s)));
            });
          var an = /[ap]\.?m?\.?/i,
            sn = le("Hours", !0);
          function rn(e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }
          var on,
            dn = {
              calendar: E,
              longDateFormat: G,
              invalidDate: B,
              ordinal: $,
              dayOfMonthOrdinalParse: Z,
              relativeTime: X,
              months: tt,
              monthsShort: nt,
              week: Tt,
              weekdays: Et,
              weekdaysMin: At,
              weekdaysShort: Wt,
              meridiemParse: an,
            },
            _n = {},
            un = {};
          function mn(e, t) {
            var n,
              a = Math.min(e.length, t.length);
            for (n = 0; n < a; n += 1) if (e[n] !== t[n]) return n;
            return a;
          }
          function ln(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function cn(e) {
            for (var t, n, a, s, r = 0; r < e.length; ) {
              for (
                t = (s = ln(e[r]).split("-")).length,
                  n = (n = ln(e[r + 1])) ? n.split("-") : null;
                t > 0;

              ) {
                if ((a = hn(s.slice(0, t).join("-")))) return a;
                if (n && n.length >= t && mn(s, n) >= t - 1) break;
                t--;
              }
              r++;
            }
            return on;
          }
          function hn(t) {
            var a = null;
            if (void 0 === _n[t] && e && e.exports)
              try {
                (a = on._abbr), n(6700)("./" + t), Mn(a);
              } catch (e) {
                _n[t] = null;
              }
            return _n[t];
          }
          function Mn(e, t) {
            var n;
            return (
              e &&
                ((n = u(t) ? Ln(e) : fn(e, t))
                  ? (on = n)
                  : "undefined" != typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + e + " not found. Did you forget to load it?"
                    )),
              on._abbr
            );
          }
          function fn(e, t) {
            if (null !== t) {
              var n,
                a = dn;
              if (((t.abbr = e), null != _n[e]))
                H(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (a = _n[e]._config);
              else if (null != t.parentLocale)
                if (null != _n[t.parentLocale]) a = _n[t.parentLocale]._config;
                else {
                  if (null == (n = hn(t.parentLocale)))
                    return (
                      un[t.parentLocale] || (un[t.parentLocale] = []),
                      un[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  a = n._config;
                }
              return (
                (_n[e] = new P(O(a, t))),
                un[e] &&
                  un[e].forEach(function (e) {
                    fn(e.name, e.config);
                  }),
                Mn(e),
                _n[e]
              );
            }
            return delete _n[e], null;
          }
          function yn(e, t) {
            if (null != t) {
              var n,
                a,
                s = dn;
              null != _n[e] && null != _n[e].parentLocale
                ? _n[e].set(O(_n[e]._config, t))
                : (null != (a = hn(e)) && (s = a._config),
                  (t = O(s, t)),
                  null == a && (t.abbr = e),
                  ((n = new P(t)).parentLocale = _n[e]),
                  (_n[e] = n)),
                Mn(e);
            } else
              null != _n[e] &&
                (null != _n[e].parentLocale
                  ? ((_n[e] = _n[e].parentLocale), e === Mn() && Mn(e))
                  : null != _n[e] && delete _n[e]);
            return _n[e];
          }
          function Ln(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return on;
            if (!i(e)) {
              if ((t = hn(e))) return t;
              e = [e];
            }
            return cn(e);
          }
          function Yn() {
            return b(_n);
          }
          function pn(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === y(e).overflow &&
                ((t =
                  n[qe] < 0 || n[qe] > 11
                    ? qe
                    : n[Ge] < 1 || n[Ge] > et(n[Ue], n[qe])
                    ? Ge
                    : n[Ve] < 0 ||
                      n[Ve] > 24 ||
                      (24 === n[Ve] &&
                        (0 !== n[Be] || 0 !== n[Ke] || 0 !== n[$e]))
                    ? Ve
                    : n[Be] < 0 || n[Be] > 59
                    ? Be
                    : n[Ke] < 0 || n[Ke] > 59
                    ? Ke
                    : n[$e] < 0 || n[$e] > 999
                    ? $e
                    : -1),
                y(e)._overflowDayOfYear && (t < Ue || t > Ge) && (t = Ge),
                y(e)._overflowWeeks && -1 === t && (t = Ze),
                y(e)._overflowWeekday && -1 === t && (t = Qe),
                (y(e).overflow = t)),
              e
            );
          }
          var kn =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Dn =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            gn = /Z|[+-]\d\d(?::?\d\d)?/,
            wn = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
              ["YYYYMM", /\d{6}/, !1],
              ["YYYY", /\d{4}/, !1],
            ],
            vn = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            Tn = /^\/?Date\((-?\d+)/i,
            bn =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            Sn = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480,
            };
          function Hn(e) {
            var t,
              n,
              a,
              s,
              r,
              i,
              o = e._i,
              d = kn.exec(o) || Dn.exec(o);
            if (d) {
              for (y(e).iso = !0, t = 0, n = wn.length; t < n; t++)
                if (wn[t][1].exec(d[1])) {
                  (s = wn[t][0]), (a = !1 !== wn[t][2]);
                  break;
                }
              if (null == s) return void (e._isValid = !1);
              if (d[3]) {
                for (t = 0, n = vn.length; t < n; t++)
                  if (vn[t][1].exec(d[3])) {
                    r = (d[2] || " ") + vn[t][0];
                    break;
                  }
                if (null == r) return void (e._isValid = !1);
              }
              if (!a && null != r) return void (e._isValid = !1);
              if (d[4]) {
                if (!gn.exec(d[4])) return void (e._isValid = !1);
                i = "Z";
              }
              (e._f = s + (r || "") + (i || "")), Rn(e);
            } else e._isValid = !1;
          }
          function jn(e, t, n, a, s, r) {
            var i = [
              xn(e),
              nt.indexOf(t),
              parseInt(n, 10),
              parseInt(a, 10),
              parseInt(s, 10),
            ];
            return r && i.push(parseInt(r, 10)), i;
          }
          function xn(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          function On(e) {
            return e
              .replace(/\([^)]*\)|[\n\t]/g, " ")
              .replace(/(\s\s+)/g, " ")
              .replace(/^\s\s*/, "")
              .replace(/\s\s*$/, "");
          }
          function Pn(e, t, n) {
            return (
              !e ||
              Wt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
              ((y(n).weekdayMismatch = !0), (n._isValid = !1), !1)
            );
          }
          function En(e, t, n) {
            if (e) return Sn[e];
            if (t) return 0;
            var a = parseInt(n, 10),
              s = a % 100;
            return ((a - s) / 100) * 60 + s;
          }
          function Wn(e) {
            var t,
              n = bn.exec(On(e._i));
            if (n) {
              if (
                ((t = jn(n[4], n[3], n[2], n[5], n[6], n[7])), !Pn(n[1], t, e))
              )
                return;
              (e._a = t),
                (e._tzm = En(n[8], n[9], n[10])),
                (e._d = pt.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (y(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function An(e) {
            var t = Tn.exec(e._i);
            null === t
              ? (Hn(e),
                !1 === e._isValid &&
                  (delete e._isValid,
                  Wn(e),
                  !1 === e._isValid &&
                    (delete e._isValid,
                    e._strict
                      ? (e._isValid = !1)
                      : s.createFromInputFallback(e))))
              : (e._d = new Date(+t[1]));
          }
          function Fn(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function zn(e) {
            var t = new Date(s.now());
            return e._useUTC
              ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
              : [t.getFullYear(), t.getMonth(), t.getDate()];
          }
          function Nn(e) {
            var t,
              n,
              a,
              s,
              r,
              i = [];
            if (!e._d) {
              for (
                a = zn(e),
                  e._w && null == e._a[Ge] && null == e._a[qe] && Cn(e),
                  null != e._dayOfYear &&
                    ((r = Fn(e._a[Ue], a[Ue])),
                    (e._dayOfYear > ft(r) || 0 === e._dayOfYear) &&
                      (y(e)._overflowDayOfYear = !0),
                    (n = pt(r, 0, e._dayOfYear)),
                    (e._a[qe] = n.getUTCMonth()),
                    (e._a[Ge] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = i[t] = a[t];
              for (; t < 7; t++)
                e._a[t] = i[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[Ve] &&
                0 === e._a[Be] &&
                0 === e._a[Ke] &&
                0 === e._a[$e] &&
                ((e._nextDay = !0), (e._a[Ve] = 0)),
                (e._d = (e._useUTC ? pt : Yt).apply(null, i)),
                (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[Ve] = 24),
                e._w &&
                  void 0 !== e._w.d &&
                  e._w.d !== s &&
                  (y(e).weekdayMismatch = !0);
            }
          }
          function Cn(e) {
            var t, n, a, s, r, i, o, d, _;
            null != (t = e._w).GG || null != t.W || null != t.E
              ? ((r = 1),
                (i = 4),
                (n = Fn(t.GG, e._a[Ue], gt(Kn(), 1, 4).year)),
                (a = Fn(t.W, 1)),
                ((s = Fn(t.E, 1)) < 1 || s > 7) && (d = !0))
              : ((r = e._locale._week.dow),
                (i = e._locale._week.doy),
                (_ = gt(Kn(), r, i)),
                (n = Fn(t.gg, e._a[Ue], _.year)),
                (a = Fn(t.w, _.week)),
                null != t.d
                  ? ((s = t.d) < 0 || s > 6) && (d = !0)
                  : null != t.e
                  ? ((s = t.e + r), (t.e < 0 || t.e > 6) && (d = !0))
                  : (s = r)),
              a < 1 || a > wt(n, r, i)
                ? (y(e)._overflowWeeks = !0)
                : null != d
                ? (y(e)._overflowWeekday = !0)
                : ((o = Dt(n, a, s, r, i)),
                  (e._a[Ue] = o.year),
                  (e._dayOfYear = o.dayOfYear));
          }
          function Rn(e) {
            if (e._f !== s.ISO_8601)
              if (e._f !== s.RFC_2822) {
                (e._a = []), (y(e).empty = !0);
                var t,
                  n,
                  a,
                  r,
                  i,
                  o,
                  d = "" + e._i,
                  _ = d.length,
                  u = 0;
                for (
                  a = q(e._f, e._locale).match(F) || [], t = 0;
                  t < a.length;
                  t++
                )
                  (r = a[t]),
                    (n = (d.match(Ae(r, e)) || [])[0]) &&
                      ((i = d.substr(0, d.indexOf(n))).length > 0 &&
                        y(e).unusedInput.push(i),
                      (d = d.slice(d.indexOf(n) + n.length)),
                      (u += n.length)),
                    C[r]
                      ? (n ? (y(e).empty = !1) : y(e).unusedTokens.push(r),
                        Je(r, n, e))
                      : e._strict && !n && y(e).unusedTokens.push(r);
                (y(e).charsLeftOver = _ - u),
                  d.length > 0 && y(e).unusedInput.push(d),
                  e._a[Ve] <= 12 &&
                    !0 === y(e).bigHour &&
                    e._a[Ve] > 0 &&
                    (y(e).bigHour = void 0),
                  (y(e).parsedDateParts = e._a.slice(0)),
                  (y(e).meridiem = e._meridiem),
                  (e._a[Ve] = Jn(e._locale, e._a[Ve], e._meridiem)),
                  null !== (o = y(e).era) &&
                    (e._a[Ue] = e._locale.erasConvertYear(o, e._a[Ue])),
                  Nn(e),
                  pn(e);
              } else Wn(e);
            else Hn(e);
          }
          function Jn(e, t, n) {
            var a;
            return null == n
              ? t
              : null != e.meridiemHour
              ? e.meridiemHour(t, n)
              : null != e.isPM
              ? ((a = e.isPM(n)) && t < 12 && (t += 12),
                a || 12 !== t || (t = 0),
                t)
              : t;
          }
          function In(e) {
            var t,
              n,
              a,
              s,
              r,
              i,
              o = !1;
            if (0 === e._f.length)
              return (y(e).invalidFormat = !0), void (e._d = new Date(NaN));
            for (s = 0; s < e._f.length; s++)
              (r = 0),
                (i = !1),
                (t = D({}, e)),
                null != e._useUTC && (t._useUTC = e._useUTC),
                (t._f = e._f[s]),
                Rn(t),
                L(t) && (i = !0),
                (r += y(t).charsLeftOver),
                (r += 10 * y(t).unusedTokens.length),
                (y(t).score = r),
                o
                  ? r < a && ((a = r), (n = t))
                  : (null == a || r < a || i) &&
                    ((a = r), (n = t), i && (o = !0));
            h(e, n || t);
          }
          function Un(e) {
            if (!e._d) {
              var t = re(e._i),
                n = void 0 === t.day ? t.date : t.day;
              (e._a = c(
                [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
                function (e) {
                  return e && parseInt(e, 10);
                }
              )),
                Nn(e);
            }
          }
          function qn(e) {
            var t = new g(pn(Gn(e)));
            return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
          }
          function Gn(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || Ln(e._l)),
              null === t || (void 0 === n && "" === t)
                ? Y({ nullInput: !0 })
                : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                  w(t)
                    ? new g(pn(t))
                    : (l(t) ? (e._d = t) : i(n) ? In(e) : n ? Rn(e) : Vn(e),
                      L(e) || (e._d = null),
                      e))
            );
          }
          function Vn(e) {
            var t = e._i;
            u(t)
              ? (e._d = new Date(s.now()))
              : l(t)
              ? (e._d = new Date(t.valueOf()))
              : "string" == typeof t
              ? An(e)
              : i(t)
              ? ((e._a = c(t.slice(0), function (e) {
                  return parseInt(e, 10);
                })),
                Nn(e))
              : o(t)
              ? Un(e)
              : m(t)
              ? (e._d = new Date(t))
              : s.createFromInputFallback(e);
          }
          function Bn(e, t, n, a, s) {
            var r = {};
            return (
              (!0 !== t && !1 !== t) || ((a = t), (t = void 0)),
              (!0 !== n && !1 !== n) || ((a = n), (n = void 0)),
              ((o(e) && _(e)) || (i(e) && 0 === e.length)) && (e = void 0),
              (r._isAMomentObject = !0),
              (r._useUTC = r._isUTC = s),
              (r._l = n),
              (r._i = e),
              (r._f = t),
              (r._strict = a),
              qn(r)
            );
          }
          function Kn(e, t, n, a) {
            return Bn(e, t, n, a, !1);
          }
          (s.createFromInputFallback = T(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            (s.ISO_8601 = function () {}),
            (s.RFC_2822 = function () {});
          var $n = T(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Kn.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : Y();
              }
            ),
            Zn = T(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Kn.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : Y();
              }
            );
          function Qn(e, t) {
            var n, a;
            if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length))
              return Kn();
            for (n = t[0], a = 1; a < t.length; ++a)
              (t[a].isValid() && !t[a][e](n)) || (n = t[a]);
            return n;
          }
          function Xn() {
            return Qn("isBefore", [].slice.call(arguments, 0));
          }
          function ea() {
            return Qn("isAfter", [].slice.call(arguments, 0));
          }
          var ta = function () {
              return Date.now ? Date.now() : +new Date();
            },
            na = [
              "year",
              "quarter",
              "month",
              "week",
              "day",
              "hour",
              "minute",
              "second",
              "millisecond",
            ];
          function aa(e) {
            var t,
              n,
              a = !1;
            for (t in e)
              if (
                d(e, t) &&
                (-1 === Ie.call(na, t) || (null != e[t] && isNaN(e[t])))
              )
                return !1;
            for (n = 0; n < na.length; ++n)
              if (e[na[n]]) {
                if (a) return !1;
                parseFloat(e[na[n]]) !== me(e[na[n]]) && (a = !0);
              }
            return !0;
          }
          function sa() {
            return this._isValid;
          }
          function ra() {
            return Sa(NaN);
          }
          function ia(e) {
            var t = re(e),
              n = t.year || 0,
              a = t.quarter || 0,
              s = t.month || 0,
              r = t.week || t.isoWeek || 0,
              i = t.day || 0,
              o = t.hour || 0,
              d = t.minute || 0,
              _ = t.second || 0,
              u = t.millisecond || 0;
            (this._isValid = aa(t)),
              (this._milliseconds = +u + 1e3 * _ + 6e4 * d + 1e3 * o * 60 * 60),
              (this._days = +i + 7 * r),
              (this._months = +s + 3 * a + 12 * n),
              (this._data = {}),
              (this._locale = Ln()),
              this._bubble();
          }
          function oa(e) {
            return e instanceof ia;
          }
          function da(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function _a(e, t, n) {
            var a,
              s = Math.min(e.length, t.length),
              r = Math.abs(e.length - t.length),
              i = 0;
            for (a = 0; a < s; a++)
              ((n && e[a] !== t[a]) || (!n && me(e[a]) !== me(t[a]))) && i++;
            return i + r;
          }
          function ua(e, t) {
            R(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return (
                e < 0 && ((e = -e), (n = "-")),
                n + A(~~(e / 60), 2) + t + A(~~e % 60, 2)
              );
            });
          }
          ua("Z", ":"),
            ua("ZZ", ""),
            We("Z", Oe),
            We("ZZ", Oe),
            Ce(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = la(Oe, e));
            });
          var ma = /([\+\-]|\d\d)/gi;
          function la(e, t) {
            var n,
              a,
              s = (t || "").match(e);
            return null === s
              ? null
              : 0 ===
                (a =
                  60 *
                    (n = ((s[s.length - 1] || []) + "").match(ma) || [
                      "-",
                      0,
                      0,
                    ])[1] +
                  me(n[2]))
              ? 0
              : "+" === n[0]
              ? a
              : -a;
          }
          function ca(e, t) {
            var n, a;
            return t._isUTC
              ? ((n = t.clone()),
                (a =
                  (w(e) || l(e) ? e.valueOf() : Kn(e).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + a),
                s.updateOffset(n, !1),
                n)
              : Kn(e).local();
          }
          function ha(e) {
            return -Math.round(e._d.getTimezoneOffset());
          }
          function Ma(e, t, n) {
            var a,
              r = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              if ("string" == typeof e) {
                if (null === (e = la(Oe, e))) return this;
              } else Math.abs(e) < 16 && !n && (e *= 60);
              return (
                !this._isUTC && t && (a = ha(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != a && this.add(a, "m"),
                r !== e &&
                  (!t || this._changeInProgress
                    ? Pa(this, Sa(e - r, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      s.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? r : ha(this);
          }
          function fa(e, t) {
            return null != e
              ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
              : -this.utcOffset();
          }
          function ya(e) {
            return this.utcOffset(0, e);
          }
          function La(e) {
            return (
              this._isUTC &&
                (this.utcOffset(0, e),
                (this._isUTC = !1),
                e && this.subtract(ha(this), "m")),
              this
            );
          }
          function Ya() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var e = la(xe, this._i);
              null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
          }
          function pa(e) {
            return (
              !!this.isValid() &&
              ((e = e ? Kn(e).utcOffset() : 0),
              (this.utcOffset() - e) % 60 == 0)
            );
          }
          function ka() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }
          function Da() {
            if (!u(this._isDSTShifted)) return this._isDSTShifted;
            var e,
              t = {};
            return (
              D(t, this),
              (t = Gn(t))._a
                ? ((e = t._isUTC ? M(t._a) : Kn(t._a)),
                  (this._isDSTShifted =
                    this.isValid() && _a(t._a, e.toArray()) > 0))
                : (this._isDSTShifted = !1),
              this._isDSTShifted
            );
          }
          function ga() {
            return !!this.isValid() && !this._isUTC;
          }
          function wa() {
            return !!this.isValid() && this._isUTC;
          }
          function va() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          s.updateOffset = function () {};
          var Ta = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            ba =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Sa(e, t) {
            var n,
              a,
              s,
              r = e,
              i = null;
            return (
              oa(e)
                ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
                : m(e) || !isNaN(+e)
                ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
                : (i = Ta.exec(e))
                ? ((n = "-" === i[1] ? -1 : 1),
                  (r = {
                    y: 0,
                    d: me(i[Ge]) * n,
                    h: me(i[Ve]) * n,
                    m: me(i[Be]) * n,
                    s: me(i[Ke]) * n,
                    ms: me(da(1e3 * i[$e])) * n,
                  }))
                : (i = ba.exec(e))
                ? ((n = "-" === i[1] ? -1 : 1),
                  (r = {
                    y: Ha(i[2], n),
                    M: Ha(i[3], n),
                    w: Ha(i[4], n),
                    d: Ha(i[5], n),
                    h: Ha(i[6], n),
                    m: Ha(i[7], n),
                    s: Ha(i[8], n),
                  }))
                : null == r
                ? (r = {})
                : "object" == typeof r &&
                  ("from" in r || "to" in r) &&
                  ((s = xa(Kn(r.from), Kn(r.to))),
                  ((r = {}).ms = s.milliseconds),
                  (r.M = s.months)),
              (a = new ia(r)),
              oa(e) && d(e, "_locale") && (a._locale = e._locale),
              oa(e) && d(e, "_isValid") && (a._isValid = e._isValid),
              a
            );
          }
          function Ha(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function ja(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, "M").isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function xa(e, t) {
            var n;
            return e.isValid() && t.isValid()
              ? ((t = ca(t, e)),
                e.isBefore(t)
                  ? (n = ja(e, t))
                  : (((n = ja(t, e)).milliseconds = -n.milliseconds),
                    (n.months = -n.months)),
                n)
              : { milliseconds: 0, months: 0 };
          }
          function Oa(e, t) {
            return function (n, a) {
              var s;
              return (
                null === a ||
                  isNaN(+a) ||
                  (H(
                    t,
                    "moment()." +
                      t +
                      "(period, number) is deprecated. Please use moment()." +
                      t +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (s = n),
                  (n = a),
                  (a = s)),
                Pa(this, Sa(n, a), e),
                this
              );
            };
          }
          function Pa(e, t, n, a) {
            var r = t._milliseconds,
              i = da(t._days),
              o = da(t._months);
            e.isValid() &&
              ((a = null == a || a),
              o && ut(e, ce(e, "Month") + o * n),
              i && he(e, "Date", ce(e, "Date") + i * n),
              r && e._d.setTime(e._d.valueOf() + r * n),
              a && s.updateOffset(e, i || o));
          }
          (Sa.fn = ia.prototype), (Sa.invalid = ra);
          var Ea = Oa(1, "add"),
            Wa = Oa(-1, "subtract");
          function Aa(e) {
            return "string" == typeof e || e instanceof String;
          }
          function Fa(e) {
            return w(e) || l(e) || Aa(e) || m(e) || Na(e) || za(e) || null == e;
          }
          function za(e) {
            var t,
              n,
              a = o(e) && !_(e),
              s = !1,
              r = [
                "years",
                "year",
                "y",
                "months",
                "month",
                "M",
                "days",
                "day",
                "d",
                "dates",
                "date",
                "D",
                "hours",
                "hour",
                "h",
                "minutes",
                "minute",
                "m",
                "seconds",
                "second",
                "s",
                "milliseconds",
                "millisecond",
                "ms",
              ];
            for (t = 0; t < r.length; t += 1) (n = r[t]), (s = s || d(e, n));
            return a && s;
          }
          function Na(e) {
            var t = i(e),
              n = !1;
            return (
              t &&
                (n =
                  0 ===
                  e.filter(function (t) {
                    return !m(t) && Aa(e);
                  }).length),
              t && n
            );
          }
          function Ca(e) {
            var t,
              n,
              a = o(e) && !_(e),
              s = !1,
              r = [
                "sameDay",
                "nextDay",
                "lastDay",
                "nextWeek",
                "lastWeek",
                "sameElse",
              ];
            for (t = 0; t < r.length; t += 1) (n = r[t]), (s = s || d(e, n));
            return a && s;
          }
          function Ra(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
              ? "lastWeek"
              : n < 0
              ? "lastDay"
              : n < 1
              ? "sameDay"
              : n < 2
              ? "nextDay"
              : n < 7
              ? "nextWeek"
              : "sameElse";
          }
          function Ja(e, t) {
            1 === arguments.length &&
              (arguments[0]
                ? Fa(arguments[0])
                  ? ((e = arguments[0]), (t = void 0))
                  : Ca(arguments[0]) && ((t = arguments[0]), (e = void 0))
                : ((e = void 0), (t = void 0)));
            var n = e || Kn(),
              a = ca(n, this).startOf("day"),
              r = s.calendarFormat(this, a) || "sameElse",
              i = t && (j(t[r]) ? t[r].call(this, n) : t[r]);
            return this.format(i || this.localeData().calendar(r, this, Kn(n)));
          }
          function Ia() {
            return new g(this);
          }
          function Ua(e, t) {
            var n = w(e) ? e : Kn(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = se(t) || "millisecond")
                ? this.valueOf() > n.valueOf()
                : n.valueOf() < this.clone().startOf(t).valueOf())
            );
          }
          function qa(e, t) {
            var n = w(e) ? e : Kn(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = se(t) || "millisecond")
                ? this.valueOf() < n.valueOf()
                : this.clone().endOf(t).valueOf() < n.valueOf())
            );
          }
          function Ga(e, t, n, a) {
            var s = w(e) ? e : Kn(e),
              r = w(t) ? t : Kn(t);
            return (
              !!(this.isValid() && s.isValid() && r.isValid()) &&
              ("(" === (a = a || "()")[0]
                ? this.isAfter(s, n)
                : !this.isBefore(s, n)) &&
              (")" === a[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
            );
          }
          function Va(e, t) {
            var n,
              a = w(e) ? e : Kn(e);
            return (
              !(!this.isValid() || !a.isValid()) &&
              ("millisecond" === (t = se(t) || "millisecond")
                ? this.valueOf() === a.valueOf()
                : ((n = a.valueOf()),
                  this.clone().startOf(t).valueOf() <= n &&
                    n <= this.clone().endOf(t).valueOf()))
            );
          }
          function Ba(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }
          function Ka(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }
          function $a(e, t, n) {
            var a, s, r;
            if (!this.isValid()) return NaN;
            if (!(a = ca(e, this)).isValid()) return NaN;
            switch (
              ((s = 6e4 * (a.utcOffset() - this.utcOffset())), (t = se(t)))
            ) {
              case "year":
                r = Za(this, a) / 12;
                break;
              case "month":
                r = Za(this, a);
                break;
              case "quarter":
                r = Za(this, a) / 3;
                break;
              case "second":
                r = (this - a) / 1e3;
                break;
              case "minute":
                r = (this - a) / 6e4;
                break;
              case "hour":
                r = (this - a) / 36e5;
                break;
              case "day":
                r = (this - a - s) / 864e5;
                break;
              case "week":
                r = (this - a - s) / 6048e5;
                break;
              default:
                r = this - a;
            }
            return n ? r : ue(r);
          }
          function Za(e, t) {
            if (e.date() < t.date()) return -Za(t, e);
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              a = e.clone().add(n, "months");
            return (
              -(
                n +
                (t - a < 0
                  ? (t - a) / (a - e.clone().add(n - 1, "months"))
                  : (t - a) / (e.clone().add(n + 1, "months") - a))
              ) || 0
            );
          }
          function Qa() {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }
          function Xa(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
              n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? U(
                  n,
                  t
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : j(Date.prototype.toISOString)
              ? t
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", U(n, "Z"))
              : U(
                  n,
                  t
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }
          function es() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e,
              t,
              n,
              a,
              s = "moment",
              r = "";
            return (
              this.isLocal() ||
                ((s =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (r = "Z")),
              (e = "[" + s + '("]'),
              (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              (n = "-MM-DD[T]HH:mm:ss.SSS"),
              (a = r + '[")]'),
              this.format(e + t + n + a)
            );
          }
          function ts(e) {
            e || (e = this.isUtc() ? s.defaultFormatUtc : s.defaultFormat);
            var t = U(this, e);
            return this.localeData().postformat(t);
          }
          function ns(e, t) {
            return this.isValid() && ((w(e) && e.isValid()) || Kn(e).isValid())
              ? Sa({ to: this, from: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function as(e) {
            return this.from(Kn(), e);
          }
          function ss(e, t) {
            return this.isValid() && ((w(e) && e.isValid()) || Kn(e).isValid())
              ? Sa({ from: this, to: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function rs(e) {
            return this.to(Kn(), e);
          }
          function is(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = Ln(e)) && (this._locale = t), this);
          }
          (s.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (s.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var os = T(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function ds() {
            return this._locale;
          }
          var _s = 1e3,
            us = 60 * _s,
            ms = 60 * us,
            ls = 3506328 * ms;
          function cs(e, t) {
            return ((e % t) + t) % t;
          }
          function hs(e, t, n) {
            return e < 100 && e >= 0
              ? new Date(e + 400, t, n) - ls
              : new Date(e, t, n).valueOf();
          }
          function Ms(e, t, n) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, t, n) - ls
              : Date.UTC(e, t, n);
          }
          function fs(e) {
            var t, n;
            if (
              void 0 === (e = se(e)) ||
              "millisecond" === e ||
              !this.isValid()
            )
              return this;
            switch (((n = this._isUTC ? Ms : hs), e)) {
              case "year":
                t = n(this.year(), 0, 1);
                break;
              case "quarter":
                t = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                t = n(this.year(), this.month(), 1);
                break;
              case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                t = n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date());
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t -= cs(t + (this._isUTC ? 0 : this.utcOffset() * us), ms));
                break;
              case "minute":
                (t = this._d.valueOf()), (t -= cs(t, us));
                break;
              case "second":
                (t = this._d.valueOf()), (t -= cs(t, _s));
            }
            return this._d.setTime(t), s.updateOffset(this, !0), this;
          }
          function ys(e) {
            var t, n;
            if (
              void 0 === (e = se(e)) ||
              "millisecond" === e ||
              !this.isValid()
            )
              return this;
            switch (((n = this._isUTC ? Ms : hs), e)) {
              case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                t =
                  n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t +=
                    ms -
                    cs(t + (this._isUTC ? 0 : this.utcOffset() * us), ms) -
                    1);
                break;
              case "minute":
                (t = this._d.valueOf()), (t += us - cs(t, us) - 1);
                break;
              case "second":
                (t = this._d.valueOf()), (t += _s - cs(t, _s) - 1);
            }
            return this._d.setTime(t), s.updateOffset(this, !0), this;
          }
          function Ls() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }
          function Ys() {
            return Math.floor(this.valueOf() / 1e3);
          }
          function ps() {
            return new Date(this.valueOf());
          }
          function ks() {
            var e = this;
            return [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
              e.millisecond(),
            ];
          }
          function Ds() {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds(),
            };
          }
          function gs() {
            return this.isValid() ? this.toISOString() : null;
          }
          function ws() {
            return L(this);
          }
          function vs() {
            return h({}, y(this));
          }
          function Ts() {
            return y(this).overflow;
          }
          function bs() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }
          function Ss(e, t) {
            var n,
              a,
              r,
              i = this._eras || Ln("en")._eras;
            for (n = 0, a = i.length; n < a; ++n) {
              switch (typeof i[n].since) {
                case "string":
                  (r = s(i[n].since).startOf("day")),
                    (i[n].since = r.valueOf());
              }
              switch (typeof i[n].until) {
                case "undefined":
                  i[n].until = 1 / 0;
                  break;
                case "string":
                  (r = s(i[n].until).startOf("day").valueOf()),
                    (i[n].until = r.valueOf());
              }
            }
            return i;
          }
          function Hs(e, t, n) {
            var a,
              s,
              r,
              i,
              o,
              d = this.eras();
            for (e = e.toUpperCase(), a = 0, s = d.length; a < s; ++a)
              if (
                ((r = d[a].name.toUpperCase()),
                (i = d[a].abbr.toUpperCase()),
                (o = d[a].narrow.toUpperCase()),
                n)
              )
                switch (t) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (i === e) return d[a];
                    break;
                  case "NNNN":
                    if (r === e) return d[a];
                    break;
                  case "NNNNN":
                    if (o === e) return d[a];
                }
              else if ([r, i, o].indexOf(e) >= 0) return d[a];
          }
          function js(e, t) {
            var n = e.since <= e.until ? 1 : -1;
            return void 0 === t
              ? s(e.since).year()
              : s(e.since).year() + (t - e.offset) * n;
          }
          function xs() {
            var e,
              t,
              n,
              a = this.localeData().eras();
            for (e = 0, t = a.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                a[e].since <= n && n <= a[e].until)
              )
                return a[e].name;
              if (a[e].until <= n && n <= a[e].since) return a[e].name;
            }
            return "";
          }
          function Os() {
            var e,
              t,
              n,
              a = this.localeData().eras();
            for (e = 0, t = a.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                a[e].since <= n && n <= a[e].until)
              )
                return a[e].narrow;
              if (a[e].until <= n && n <= a[e].since) return a[e].narrow;
            }
            return "";
          }
          function Ps() {
            var e,
              t,
              n,
              a = this.localeData().eras();
            for (e = 0, t = a.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                a[e].since <= n && n <= a[e].until)
              )
                return a[e].abbr;
              if (a[e].until <= n && n <= a[e].since) return a[e].abbr;
            }
            return "";
          }
          function Es() {
            var e,
              t,
              n,
              a,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e)
              if (
                ((n = r[e].since <= r[e].until ? 1 : -1),
                (a = this.clone().startOf("day").valueOf()),
                (r[e].since <= a && a <= r[e].until) ||
                  (r[e].until <= a && a <= r[e].since))
              )
                return (this.year() - s(r[e].since).year()) * n + r[e].offset;
            return this.year();
          }
          function Ws(e) {
            return (
              d(this, "_erasNameRegex") || Js.call(this),
              e ? this._erasNameRegex : this._erasRegex
            );
          }
          function As(e) {
            return (
              d(this, "_erasAbbrRegex") || Js.call(this),
              e ? this._erasAbbrRegex : this._erasRegex
            );
          }
          function Fs(e) {
            return (
              d(this, "_erasNarrowRegex") || Js.call(this),
              e ? this._erasNarrowRegex : this._erasRegex
            );
          }
          function zs(e, t) {
            return t.erasAbbrRegex(e);
          }
          function Ns(e, t) {
            return t.erasNameRegex(e);
          }
          function Cs(e, t) {
            return t.erasNarrowRegex(e);
          }
          function Rs(e, t) {
            return t._eraYearOrdinalRegex || He;
          }
          function Js() {
            var e,
              t,
              n = [],
              a = [],
              s = [],
              r = [],
              i = this.eras();
            for (e = 0, t = i.length; e < t; ++e)
              a.push(ze(i[e].name)),
                n.push(ze(i[e].abbr)),
                s.push(ze(i[e].narrow)),
                r.push(ze(i[e].name)),
                r.push(ze(i[e].abbr)),
                r.push(ze(i[e].narrow));
            (this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i")),
              (this._erasNameRegex = new RegExp("^(" + a.join("|") + ")", "i")),
              (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
              (this._erasNarrowRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
              ));
          }
          function Is(e, t) {
            R(0, [e, e.length], 0, t);
          }
          function Us(e) {
            return $s.call(
              this,
              e,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }
          function qs(e) {
            return $s.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }
          function Gs() {
            return wt(this.year(), 1, 4);
          }
          function Vs() {
            return wt(this.isoWeekYear(), 1, 4);
          }
          function Bs() {
            var e = this.localeData()._week;
            return wt(this.year(), e.dow, e.doy);
          }
          function Ks() {
            var e = this.localeData()._week;
            return wt(this.weekYear(), e.dow, e.doy);
          }
          function $s(e, t, n, a, s) {
            var r;
            return null == e
              ? gt(this, a, s).year
              : (t > (r = wt(e, a, s)) && (t = r),
                Zs.call(this, e, t, n, a, s));
          }
          function Zs(e, t, n, a, s) {
            var r = Dt(e, t, n, a, s),
              i = pt(r.year, 0, r.dayOfYear);
            return (
              this.year(i.getUTCFullYear()),
              this.month(i.getUTCMonth()),
              this.date(i.getUTCDate()),
              this
            );
          }
          function Qs(e) {
            return null == e
              ? Math.ceil((this.month() + 1) / 3)
              : this.month(3 * (e - 1) + (this.month() % 3));
          }
          R("N", 0, 0, "eraAbbr"),
            R("NN", 0, 0, "eraAbbr"),
            R("NNN", 0, 0, "eraAbbr"),
            R("NNNN", 0, 0, "eraName"),
            R("NNNNN", 0, 0, "eraNarrow"),
            R("y", ["y", 1], "yo", "eraYear"),
            R("y", ["yy", 2], 0, "eraYear"),
            R("y", ["yyy", 3], 0, "eraYear"),
            R("y", ["yyyy", 4], 0, "eraYear"),
            We("N", zs),
            We("NN", zs),
            We("NNN", zs),
            We("NNNN", Ns),
            We("NNNNN", Cs),
            Ce(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, a) {
              var s = n._locale.erasParse(e, a, n._strict);
              s ? (y(n).era = s) : (y(n).invalidEra = e);
            }),
            We("y", He),
            We("yy", He),
            We("yyy", He),
            We("yyyy", He),
            We("yo", Rs),
            Ce(["y", "yy", "yyy", "yyyy"], Ue),
            Ce(["yo"], function (e, t, n, a) {
              var s;
              n._locale._eraYearOrdinalRegex &&
                (s = e.match(n._locale._eraYearOrdinalRegex)),
                n._locale.eraYearOrdinalParse
                  ? (t[Ue] = n._locale.eraYearOrdinalParse(e, s))
                  : (t[Ue] = parseInt(e, 10));
            }),
            R(0, ["gg", 2], 0, function () {
              return this.weekYear() % 100;
            }),
            R(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            Is("gggg", "weekYear"),
            Is("ggggg", "weekYear"),
            Is("GGGG", "isoWeekYear"),
            Is("GGGGG", "isoWeekYear"),
            ae("weekYear", "gg"),
            ae("isoWeekYear", "GG"),
            oe("weekYear", 1),
            oe("isoWeekYear", 1),
            We("G", je),
            We("g", je),
            We("GG", ge, Ye),
            We("gg", ge, Ye),
            We("GGGG", be, ke),
            We("gggg", be, ke),
            We("GGGGG", Se, De),
            We("ggggg", Se, De),
            Re(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
              t[a.substr(0, 2)] = me(e);
            }),
            Re(["gg", "GG"], function (e, t, n, a) {
              t[a] = s.parseTwoDigitYear(e);
            }),
            R("Q", 0, "Qo", "quarter"),
            ae("quarter", "Q"),
            oe("quarter", 7),
            We("Q", Le),
            Ce("Q", function (e, t) {
              t[qe] = 3 * (me(e) - 1);
            }),
            R("D", ["DD", 2], "Do", "date"),
            ae("date", "D"),
            oe("date", 9),
            We("D", ge),
            We("DD", ge, Ye),
            We("Do", function (e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            Ce(["D", "DD"], Ge),
            Ce("Do", function (e, t) {
              t[Ge] = me(e.match(ge)[0]);
            });
          var Xs = le("Date", !0);
          function er(e) {
            var t =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == e ? t : this.add(e - t, "d");
          }
          R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            ae("dayOfYear", "DDD"),
            oe("dayOfYear", 4),
            We("DDD", Te),
            We("DDDD", pe),
            Ce(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = me(e);
            }),
            R("m", ["mm", 2], 0, "minute"),
            ae("minute", "m"),
            oe("minute", 14),
            We("m", ge),
            We("mm", ge, Ye),
            Ce(["m", "mm"], Be);
          var tr = le("Minutes", !1);
          R("s", ["ss", 2], 0, "second"),
            ae("second", "s"),
            oe("second", 15),
            We("s", ge),
            We("ss", ge, Ye),
            Ce(["s", "ss"], Ke);
          var nr,
            ar,
            sr = le("Seconds", !1);
          for (
            R("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              R(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              R(0, ["SSS", 3], 0, "millisecond"),
              R(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              R(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              R(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              R(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              R(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              R(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              ae("millisecond", "ms"),
              oe("millisecond", 16),
              We("S", Te, Le),
              We("SS", Te, Ye),
              We("SSS", Te, pe),
              nr = "SSSS";
            nr.length <= 9;
            nr += "S"
          )
            We(nr, He);
          function rr(e, t) {
            t[$e] = me(1e3 * ("0." + e));
          }
          for (nr = "S"; nr.length <= 9; nr += "S") Ce(nr, rr);
          function ir() {
            return this._isUTC ? "UTC" : "";
          }
          function or() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }
          (ar = le("Milliseconds", !1)),
            R("z", 0, 0, "zoneAbbr"),
            R("zz", 0, 0, "zoneName");
          var dr = g.prototype;
          function _r(e) {
            return Kn(1e3 * e);
          }
          function ur() {
            return Kn.apply(null, arguments).parseZone();
          }
          function mr(e) {
            return e;
          }
          (dr.add = Ea),
            (dr.calendar = Ja),
            (dr.clone = Ia),
            (dr.diff = $a),
            (dr.endOf = ys),
            (dr.format = ts),
            (dr.from = ns),
            (dr.fromNow = as),
            (dr.to = ss),
            (dr.toNow = rs),
            (dr.get = Me),
            (dr.invalidAt = Ts),
            (dr.isAfter = Ua),
            (dr.isBefore = qa),
            (dr.isBetween = Ga),
            (dr.isSame = Va),
            (dr.isSameOrAfter = Ba),
            (dr.isSameOrBefore = Ka),
            (dr.isValid = ws),
            (dr.lang = os),
            (dr.locale = is),
            (dr.localeData = ds),
            (dr.max = Zn),
            (dr.min = $n),
            (dr.parsingFlags = vs),
            (dr.set = fe),
            (dr.startOf = fs),
            (dr.subtract = Wa),
            (dr.toArray = ks),
            (dr.toObject = Ds),
            (dr.toDate = ps),
            (dr.toISOString = Xa),
            (dr.inspect = es),
            "undefined" != typeof Symbol &&
              null != Symbol.for &&
              (dr[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">";
              }),
            (dr.toJSON = gs),
            (dr.toString = Qa),
            (dr.unix = Ys),
            (dr.valueOf = Ls),
            (dr.creationData = bs),
            (dr.eraName = xs),
            (dr.eraNarrow = Os),
            (dr.eraAbbr = Ps),
            (dr.eraYear = Es),
            (dr.year = yt),
            (dr.isLeapYear = Lt),
            (dr.weekYear = Us),
            (dr.isoWeekYear = qs),
            (dr.quarter = dr.quarters = Qs),
            (dr.month = mt),
            (dr.daysInMonth = lt),
            (dr.week = dr.weeks = Ht),
            (dr.isoWeek = dr.isoWeeks = jt),
            (dr.weeksInYear = Bs),
            (dr.weeksInWeekYear = Ks),
            (dr.isoWeeksInYear = Gs),
            (dr.isoWeeksInISOWeekYear = Vs),
            (dr.date = Xs),
            (dr.day = dr.days = qt),
            (dr.weekday = Gt),
            (dr.isoWeekday = Vt),
            (dr.dayOfYear = er),
            (dr.hour = dr.hours = sn),
            (dr.minute = dr.minutes = tr),
            (dr.second = dr.seconds = sr),
            (dr.millisecond = dr.milliseconds = ar),
            (dr.utcOffset = Ma),
            (dr.utc = ya),
            (dr.local = La),
            (dr.parseZone = Ya),
            (dr.hasAlignedHourOffset = pa),
            (dr.isDST = ka),
            (dr.isLocal = ga),
            (dr.isUtcOffset = wa),
            (dr.isUtc = va),
            (dr.isUTC = va),
            (dr.zoneAbbr = ir),
            (dr.zoneName = or),
            (dr.dates = T(
              "dates accessor is deprecated. Use date instead.",
              Xs
            )),
            (dr.months = T(
              "months accessor is deprecated. Use month instead",
              mt
            )),
            (dr.years = T(
              "years accessor is deprecated. Use year instead",
              yt
            )),
            (dr.zone = T(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              fa
            )),
            (dr.isDSTShifted = T(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              Da
            ));
          var lr = P.prototype;
          function cr(e, t, n, a) {
            var s = Ln(),
              r = M().set(a, t);
            return s[n](r, e);
          }
          function hr(e, t, n) {
            if ((m(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
              return cr(e, t, n, "month");
            var a,
              s = [];
            for (a = 0; a < 12; a++) s[a] = cr(e, a, n, "month");
            return s;
          }
          function Mr(e, t, n, a) {
            "boolean" == typeof e
              ? (m(t) && ((n = t), (t = void 0)), (t = t || ""))
              : ((n = t = e),
                (e = !1),
                m(t) && ((n = t), (t = void 0)),
                (t = t || ""));
            var s,
              r = Ln(),
              i = e ? r._week.dow : 0,
              o = [];
            if (null != n) return cr(t, (n + i) % 7, a, "day");
            for (s = 0; s < 7; s++) o[s] = cr(t, (s + i) % 7, a, "day");
            return o;
          }
          function fr(e, t) {
            return hr(e, t, "months");
          }
          function yr(e, t) {
            return hr(e, t, "monthsShort");
          }
          function Lr(e, t, n) {
            return Mr(e, t, n, "weekdays");
          }
          function Yr(e, t, n) {
            return Mr(e, t, n, "weekdaysShort");
          }
          function pr(e, t, n) {
            return Mr(e, t, n, "weekdaysMin");
          }
          (lr.calendar = W),
            (lr.longDateFormat = V),
            (lr.invalidDate = K),
            (lr.ordinal = Q),
            (lr.preparse = mr),
            (lr.postformat = mr),
            (lr.relativeTime = ee),
            (lr.pastFuture = te),
            (lr.set = x),
            (lr.eras = Ss),
            (lr.erasParse = Hs),
            (lr.erasConvertYear = js),
            (lr.erasAbbrRegex = As),
            (lr.erasNameRegex = Ws),
            (lr.erasNarrowRegex = Fs),
            (lr.months = it),
            (lr.monthsShort = ot),
            (lr.monthsParse = _t),
            (lr.monthsRegex = ht),
            (lr.monthsShortRegex = ct),
            (lr.week = vt),
            (lr.firstDayOfYear = St),
            (lr.firstDayOfWeek = bt),
            (lr.weekdays = Ct),
            (lr.weekdaysMin = Jt),
            (lr.weekdaysShort = Rt),
            (lr.weekdaysParse = Ut),
            (lr.weekdaysRegex = Bt),
            (lr.weekdaysShortRegex = Kt),
            (lr.weekdaysMinRegex = $t),
            (lr.isPM = nn),
            (lr.meridiem = rn),
            Mn("en", {
              eras: [
                {
                  since: "0001-01-01",
                  until: 1 / 0,
                  offset: 1,
                  name: "Anno Domini",
                  narrow: "AD",
                  abbr: "AD",
                },
                {
                  since: "0000-12-31",
                  until: -1 / 0,
                  offset: 1,
                  name: "Before Christ",
                  narrow: "BC",
                  abbr: "BC",
                },
              ],
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return (
                  e +
                  (1 === me((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th")
                );
              },
            }),
            (s.lang = T(
              "moment.lang is deprecated. Use moment.locale instead.",
              Mn
            )),
            (s.langData = T(
              "moment.langData is deprecated. Use moment.localeData instead.",
              Ln
            ));
          var kr = Math.abs;
          function Dr() {
            var e = this._data;
            return (
              (this._milliseconds = kr(this._milliseconds)),
              (this._days = kr(this._days)),
              (this._months = kr(this._months)),
              (e.milliseconds = kr(e.milliseconds)),
              (e.seconds = kr(e.seconds)),
              (e.minutes = kr(e.minutes)),
              (e.hours = kr(e.hours)),
              (e.months = kr(e.months)),
              (e.years = kr(e.years)),
              this
            );
          }
          function gr(e, t, n, a) {
            var s = Sa(t, n);
            return (
              (e._milliseconds += a * s._milliseconds),
              (e._days += a * s._days),
              (e._months += a * s._months),
              e._bubble()
            );
          }
          function wr(e, t) {
            return gr(this, e, t, 1);
          }
          function vr(e, t) {
            return gr(this, e, t, -1);
          }
          function Tr(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function br() {
            var e,
              t,
              n,
              a,
              s,
              r = this._milliseconds,
              i = this._days,
              o = this._months,
              d = this._data;
            return (
              (r >= 0 && i >= 0 && o >= 0) ||
                (r <= 0 && i <= 0 && o <= 0) ||
                ((r += 864e5 * Tr(Hr(o) + i)), (i = 0), (o = 0)),
              (d.milliseconds = r % 1e3),
              (e = ue(r / 1e3)),
              (d.seconds = e % 60),
              (t = ue(e / 60)),
              (d.minutes = t % 60),
              (n = ue(t / 60)),
              (d.hours = n % 24),
              (i += ue(n / 24)),
              (o += s = ue(Sr(i))),
              (i -= Tr(Hr(s))),
              (a = ue(o / 12)),
              (o %= 12),
              (d.days = i),
              (d.months = o),
              (d.years = a),
              this
            );
          }
          function Sr(e) {
            return (4800 * e) / 146097;
          }
          function Hr(e) {
            return (146097 * e) / 4800;
          }
          function jr(e) {
            if (!this.isValid()) return NaN;
            var t,
              n,
              a = this._milliseconds;
            if ("month" === (e = se(e)) || "quarter" === e || "year" === e)
              switch (
                ((t = this._days + a / 864e5), (n = this._months + Sr(t)), e)
              ) {
                case "month":
                  return n;
                case "quarter":
                  return n / 3;
                case "year":
                  return n / 12;
              }
            else
              switch (((t = this._days + Math.round(Hr(this._months))), e)) {
                case "week":
                  return t / 7 + a / 6048e5;
                case "day":
                  return t + a / 864e5;
                case "hour":
                  return 24 * t + a / 36e5;
                case "minute":
                  return 1440 * t + a / 6e4;
                case "second":
                  return 86400 * t + a / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * t) + a;
                default:
                  throw new Error("Unknown unit " + e);
              }
          }
          function xr() {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * me(this._months / 12)
              : NaN;
          }
          function Or(e) {
            return function () {
              return this.as(e);
            };
          }
          var Pr = Or("ms"),
            Er = Or("s"),
            Wr = Or("m"),
            Ar = Or("h"),
            Fr = Or("d"),
            zr = Or("w"),
            Nr = Or("M"),
            Cr = Or("Q"),
            Rr = Or("y");
          function Jr() {
            return Sa(this);
          }
          function Ir(e) {
            return (e = se(e)), this.isValid() ? this[e + "s"]() : NaN;
          }
          function Ur(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var qr = Ur("milliseconds"),
            Gr = Ur("seconds"),
            Vr = Ur("minutes"),
            Br = Ur("hours"),
            Kr = Ur("days"),
            $r = Ur("months"),
            Zr = Ur("years");
          function Qr() {
            return ue(this.days() / 7);
          }
          var Xr = Math.round,
            ei = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
          function ti(e, t, n, a, s) {
            return s.relativeTime(t || 1, !!n, e, a);
          }
          function ni(e, t, n, a) {
            var s = Sa(e).abs(),
              r = Xr(s.as("s")),
              i = Xr(s.as("m")),
              o = Xr(s.as("h")),
              d = Xr(s.as("d")),
              _ = Xr(s.as("M")),
              u = Xr(s.as("w")),
              m = Xr(s.as("y")),
              l =
                (r <= n.ss && ["s", r]) ||
                (r < n.s && ["ss", r]) ||
                (i <= 1 && ["m"]) ||
                (i < n.m && ["mm", i]) ||
                (o <= 1 && ["h"]) ||
                (o < n.h && ["hh", o]) ||
                (d <= 1 && ["d"]) ||
                (d < n.d && ["dd", d]);
            return (
              null != n.w &&
                (l = l || (u <= 1 && ["w"]) || (u < n.w && ["ww", u])),
              ((l = l ||
                (_ <= 1 && ["M"]) ||
                (_ < n.M && ["MM", _]) ||
                (m <= 1 && ["y"]) || ["yy", m])[2] = t),
              (l[3] = +e > 0),
              (l[4] = a),
              ti.apply(null, l)
            );
          }
          function ai(e) {
            return void 0 === e ? Xr : "function" == typeof e && ((Xr = e), !0);
          }
          function si(e, t) {
            return (
              void 0 !== ei[e] &&
              (void 0 === t
                ? ei[e]
                : ((ei[e] = t), "s" === e && (ei.ss = t - 1), !0))
            );
          }
          function ri(e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n,
              a,
              s = !1,
              r = ei;
            return (
              "object" == typeof e && ((t = e), (e = !1)),
              "boolean" == typeof e && (s = e),
              "object" == typeof t &&
                ((r = Object.assign({}, ei, t)),
                null != t.s && null == t.ss && (r.ss = t.s - 1)),
              (a = ni(this, !s, r, (n = this.localeData()))),
              s && (a = n.pastFuture(+this, a)),
              n.postformat(a)
            );
          }
          var ii = Math.abs;
          function oi(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function di() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n,
              a,
              s,
              r,
              i,
              o,
              d = ii(this._milliseconds) / 1e3,
              _ = ii(this._days),
              u = ii(this._months),
              m = this.asSeconds();
            return m
              ? ((e = ue(d / 60)),
                (t = ue(e / 60)),
                (d %= 60),
                (e %= 60),
                (n = ue(u / 12)),
                (u %= 12),
                (a = d ? d.toFixed(3).replace(/\.?0+$/, "") : ""),
                (s = m < 0 ? "-" : ""),
                (r = oi(this._months) !== oi(m) ? "-" : ""),
                (i = oi(this._days) !== oi(m) ? "-" : ""),
                (o = oi(this._milliseconds) !== oi(m) ? "-" : ""),
                s +
                  "P" +
                  (n ? r + n + "Y" : "") +
                  (u ? r + u + "M" : "") +
                  (_ ? i + _ + "D" : "") +
                  (t || e || d ? "T" : "") +
                  (t ? o + t + "H" : "") +
                  (e ? o + e + "M" : "") +
                  (d ? o + a + "S" : ""))
              : "P0D";
          }
          var _i = ia.prototype;
          return (
            (_i.isValid = sa),
            (_i.abs = Dr),
            (_i.add = wr),
            (_i.subtract = vr),
            (_i.as = jr),
            (_i.asMilliseconds = Pr),
            (_i.asSeconds = Er),
            (_i.asMinutes = Wr),
            (_i.asHours = Ar),
            (_i.asDays = Fr),
            (_i.asWeeks = zr),
            (_i.asMonths = Nr),
            (_i.asQuarters = Cr),
            (_i.asYears = Rr),
            (_i.valueOf = xr),
            (_i._bubble = br),
            (_i.clone = Jr),
            (_i.get = Ir),
            (_i.milliseconds = qr),
            (_i.seconds = Gr),
            (_i.minutes = Vr),
            (_i.hours = Br),
            (_i.days = Kr),
            (_i.weeks = Qr),
            (_i.months = $r),
            (_i.years = Zr),
            (_i.humanize = ri),
            (_i.toISOString = di),
            (_i.toString = di),
            (_i.toJSON = di),
            (_i.locale = is),
            (_i.localeData = ds),
            (_i.toIsoString = T(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              di
            )),
            (_i.lang = os),
            R("X", 0, 0, "unix"),
            R("x", 0, 0, "valueOf"),
            We("x", je),
            We("X", Pe),
            Ce("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e));
            }),
            Ce("x", function (e, t, n) {
              n._d = new Date(me(e));
            }),
            (s.version = "2.29.1"),
            r(Kn),
            (s.fn = dr),
            (s.min = Xn),
            (s.max = ea),
            (s.now = ta),
            (s.utc = M),
            (s.unix = _r),
            (s.months = fr),
            (s.isDate = l),
            (s.locale = Mn),
            (s.invalid = Y),
            (s.duration = Sa),
            (s.isMoment = w),
            (s.weekdays = Lr),
            (s.parseZone = ur),
            (s.localeData = Ln),
            (s.isDuration = oa),
            (s.monthsShort = yr),
            (s.weekdaysMin = pr),
            (s.defineLocale = fn),
            (s.updateLocale = yn),
            (s.locales = Yn),
            (s.weekdaysShort = Yr),
            (s.normalizeUnits = se),
            (s.relativeTimeRounding = ai),
            (s.relativeTimeThreshold = si),
            (s.calendarFormat = Ra),
            (s.prototype = dr),
            (s.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            s
          );
        })();
      },
      2854: function (e) {
        var t;
        (t = function () {
          return (function (e) {
            var t = {};
            function n(a) {
              if (t[a]) return t[a].exports;
              var s = (t[a] = { i: a, l: !1, exports: {} });
              return (
                e[a].call(s.exports, s, s.exports, n), (s.l = !0), s.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.i = function (e) {
                return e;
              }),
              (n.d = function (e, t, a) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: a,
                  });
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, "a", t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ""),
              n((n.s = 6))
            );
          })([
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.css = t.deepExtend = t.animationEndEvents = void 0);
              var a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    };
              (t.inArray = function (e, t, n) {
                var a = void 0;
                if (n) {
                  for (a in t) if (t.hasOwnProperty(a) && t[a] === e) return !0;
                } else
                  for (a in t) if (t.hasOwnProperty(a) && t[a] === e) return !0;
                return !1;
              }),
                (t.stopPropagation = function (e) {
                  void 0 !== (e = e || window.event).stopPropagation
                    ? e.stopPropagation()
                    : (e.cancelBubble = !0);
                }),
                (t.generateID = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t = "noty_" + e + "_";
                  return (t += "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (e) {
                      var t = (16 * Math.random()) | 0;
                      return ("x" === e ? t : (3 & t) | 8).toString(16);
                    }
                  ));
                }),
                (t.outerHeight = function (e) {
                  var t = e.offsetHeight,
                    n = window.getComputedStyle(e);
                  return (t +=
                    parseInt(n.marginTop) + parseInt(n.marginBottom));
                }),
                (t.addListener = r),
                (t.hasClass = i),
                (t.addClass = function (e, t) {
                  var n = d(e),
                    a = n + t;
                  i(n, t) || (e.className = a.substring(1));
                }),
                (t.removeClass = function (e, t) {
                  var n = d(e),
                    a = void 0;
                  i(e, t) &&
                    ((a = n.replace(" " + t + " ", " ")),
                    (e.className = a.substring(1, a.length - 1)));
                }),
                (t.remove = o),
                (t.classList = d),
                (t.visibilityChangeFlow = function () {
                  var e = void 0,
                    t = void 0;
                  function n() {
                    s.PageHidden
                      ? setTimeout(function () {
                          Object.keys(s.Store).forEach(function (e) {
                            s.Store.hasOwnProperty(e) &&
                              s.Store[e].options.visibilityControl &&
                              s.Store[e].stop();
                          });
                        }, 100)
                      : setTimeout(function () {
                          Object.keys(s.Store).forEach(function (e) {
                            s.Store.hasOwnProperty(e) &&
                              s.Store[e].options.visibilityControl &&
                              s.Store[e].resume();
                          }),
                            s.queueRenderAll();
                        }, 100);
                  }
                  void 0 !== document.hidden
                    ? ((e = "hidden"), (t = "visibilitychange"))
                    : void 0 !== document.msHidden
                    ? ((e = "msHidden"), (t = "msvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((e = "webkitHidden"), (t = "webkitvisibilitychange")),
                    t &&
                      r(document, t, function () {
                        (s.PageHidden = document[e]), n();
                      }),
                    r(window, "blur", function () {
                      (s.PageHidden = !0), n();
                    }),
                    r(window, "focus", function () {
                      (s.PageHidden = !1), n();
                    });
                }),
                (t.createAudioElements = function (e) {
                  if (e.hasSound) {
                    var t = document.createElement("audio");
                    e.options.sounds.sources.forEach(function (e) {
                      var n = document.createElement("source");
                      (n.src = e),
                        (n.type = "audio/" + e.match(/\.([^.]+)$/)[1]),
                        t.appendChild(n);
                    }),
                      e.barDom
                        ? e.barDom.appendChild(t)
                        : document.querySelector("body").appendChild(t),
                      (t.volume = e.options.sounds.volume),
                      e.soundPlayed || (t.play(), (e.soundPlayed = !0)),
                      (t.onended = function () {
                        o(t);
                      });
                  }
                });
              var s = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
              })(n(1));
              function r(e, t, n) {
                var a =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                t = t.split(" ");
                for (var s = 0; s < t.length; s++)
                  document.addEventListener
                    ? e.addEventListener(t[s], n, a)
                    : document.attachEvent && e.attachEvent("on" + t[s], n);
              }
              function i(e, t) {
                return (
                  ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
                );
              }
              function o(e) {
                e.parentNode && e.parentNode.removeChild(e);
              }
              function d(e) {
                return (" " + ((e && e.className) || "") + " ").replace(
                  /\s+/gi,
                  " "
                );
              }
              (t.animationEndEvents =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"),
                (t.deepExtend = function e(t) {
                  t = t || {};
                  for (var n = 1; n < arguments.length; n++) {
                    var s = arguments[n];
                    if (s)
                      for (var r in s)
                        s.hasOwnProperty(r) &&
                          (Array.isArray(s[r])
                            ? (t[r] = s[r])
                            : "object" === a(s[r]) && null !== s[r]
                            ? (t[r] = e(t[r], s[r]))
                            : (t[r] = s[r]));
                  }
                  return t;
                }),
                (t.css = (function () {
                  var e = ["Webkit", "O", "Moz", "ms"],
                    t = {};
                  function n(n) {
                    return (
                      (n = n
                        .replace(/^-ms-/, "ms-")
                        .replace(/-([\da-z])/gi, function (e, t) {
                          return t.toUpperCase();
                        })),
                      t[n] ||
                        (t[n] = (function (t) {
                          var n = document.body.style;
                          if (t in n) return t;
                          for (
                            var a = e.length,
                              s = t.charAt(0).toUpperCase() + t.slice(1),
                              r = void 0;
                            a--;

                          )
                            if ((r = e[a] + s) in n) return r;
                          return t;
                        })(n))
                    );
                  }
                  function a(e, t, a) {
                    (t = n(t)), (e.style[t] = a);
                  }
                  return function (e, t) {
                    var n = arguments,
                      s = void 0,
                      r = void 0;
                    if (2 === n.length)
                      for (s in t)
                        t.hasOwnProperty(s) &&
                          void 0 !== (r = t[s]) &&
                          t.hasOwnProperty(s) &&
                          a(e, s, r);
                    else a(e, n[1], n[2]);
                  };
                })());
            },
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.Defaults =
                  t.Store =
                  t.Queues =
                  t.DefaultMaxVisible =
                  t.docTitle =
                  t.DocModalCount =
                  t.PageHidden =
                    void 0),
                (t.getQueueCounts = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "global",
                    t = 0,
                    n = o;
                  return (
                    d.hasOwnProperty(e) &&
                      ((n = d[e].maxVisible),
                      Object.keys(_).forEach(function (n) {
                        _[n].options.queue !== e || _[n].closed || t++;
                      })),
                    { current: t, maxVisible: n }
                  );
                }),
                (t.addToQueue = function (e) {
                  d.hasOwnProperty(e.options.queue) ||
                    (d[e.options.queue] = { maxVisible: o, queue: [] }),
                    d[e.options.queue].queue.push(e);
                }),
                (t.removeFromQueue = function (e) {
                  if (d.hasOwnProperty(e.options.queue)) {
                    var t = [];
                    Object.keys(d[e.options.queue].queue).forEach(function (n) {
                      d[e.options.queue].queue[n].id !== e.id &&
                        t.push(d[e.options.queue].queue[n]);
                    }),
                      (d[e.options.queue].queue = t);
                  }
                }),
                (t.queueRender = u),
                (t.queueRenderAll = function () {
                  Object.keys(d).forEach(function (e) {
                    u(e);
                  });
                }),
                (t.ghostFix = function (e) {
                  var t = a.generateID("ghost"),
                    n = document.createElement("div");
                  n.setAttribute("id", t),
                    a.css(n, { height: a.outerHeight(e.barDom) + "px" }),
                    e.barDom.insertAdjacentHTML("afterend", n.outerHTML),
                    a.remove(e.barDom),
                    (n = document.getElementById(t)),
                    a.addClass(n, "noty_fix_effects_height"),
                    a.addListener(n, a.animationEndEvents, function () {
                      a.remove(n);
                    });
                }),
                (t.build = function (e) {
                  !(function (e) {
                    if (e.options.container)
                      e.layoutDom = document.querySelector(e.options.container);
                    else {
                      var t = "noty_layout__" + e.options.layout;
                      (e.layoutDom = document.querySelector("div#" + t)),
                        e.layoutDom ||
                          ((e.layoutDom = document.createElement("div")),
                          e.layoutDom.setAttribute("id", t),
                          e.layoutDom.setAttribute("role", "alert"),
                          e.layoutDom.setAttribute("aria-live", "polite"),
                          a.addClass(e.layoutDom, "noty_layout"),
                          document
                            .querySelector("body")
                            .appendChild(e.layoutDom));
                    }
                  })(e);
                  var t =
                    '<div class="noty_body">' +
                    e.options.text +
                    "</div>" +
                    (function (e) {
                      if (m(e)) {
                        var t = document.createElement("div");
                        return (
                          a.addClass(t, "noty_buttons"),
                          Object.keys(e.options.buttons).forEach(function (n) {
                            t.appendChild(e.options.buttons[n].dom);
                          }),
                          e.options.buttons.forEach(function (e) {
                            t.appendChild(e.dom);
                          }),
                          t.outerHTML
                        );
                      }
                      return "";
                    })(e) +
                    '<div class="noty_progressbar"></div>';
                  (e.barDom = document.createElement("div")),
                    e.barDom.setAttribute("id", e.id),
                    a.addClass(
                      e.barDom,
                      "noty_bar noty_type__" +
                        e.options.type +
                        " noty_theme__" +
                        e.options.theme
                    ),
                    (e.barDom.innerHTML = t),
                    h(e, "onTemplate");
                }),
                (t.hasButtons = m),
                (t.handleModal = function (e) {
                  var n, r;
                  e.options.modal &&
                    (0 === s &&
                      ((n = document.querySelector("body")),
                      (r = document.createElement("div")),
                      a.addClass(r, "noty_modal"),
                      n.insertBefore(r, n.firstChild),
                      a.addClass(r, "noty_modal_open"),
                      a.addListener(r, a.animationEndEvents, function () {
                        a.removeClass(r, "noty_modal_open");
                      })),
                    (t.DocModalCount = s += 1));
                }),
                (t.handleModalClose = function (e) {
                  if (
                    e.options.modal &&
                    s > 0 &&
                    ((t.DocModalCount = s -= 1), s <= 0)
                  ) {
                    var n = document.querySelector(".noty_modal");
                    n &&
                      (a.removeClass(n, "noty_modal_open"),
                      a.addClass(n, "noty_modal_close"),
                      a.addListener(n, a.animationEndEvents, function () {
                        a.remove(n);
                      }));
                  }
                }),
                (t.queueClose = l),
                (t.dequeueClose = c),
                (t.fire = h),
                (t.openFlow = function (e) {
                  h(e, "afterShow"),
                    l(e),
                    a.addListener(e.barDom, "mouseenter", function () {
                      c(e);
                    }),
                    a.addListener(e.barDom, "mouseleave", function () {
                      l(e);
                    });
                }),
                (t.closeFlow = function (e) {
                  delete _[e.id],
                    (e.closing = !1),
                    h(e, "afterClose"),
                    a.remove(e.barDom),
                    0 !== e.layoutDom.querySelectorAll(".noty_bar").length ||
                      e.options.container ||
                      a.remove(e.layoutDom),
                    (a.inArray("docVisible", e.options.titleCount.conditions) ||
                      a.inArray(
                        "docHidden",
                        e.options.titleCount.conditions
                      )) &&
                      i.decrement(),
                    u(e.options.queue);
                });
              var a = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
              })(n(0));
              t.PageHidden = !1;
              var s = (t.DocModalCount = 0),
                r = { originalTitle: null, count: 0, changed: !1, timer: -1 },
                i = (t.docTitle = {
                  increment: function () {
                    r.count++, i._update();
                  },
                  decrement: function () {
                    r.count--, r.count <= 0 ? i._clear() : i._update();
                  },
                  _update: function () {
                    var e = document.title;
                    r.changed
                      ? (document.title =
                          "(" + r.count + ") " + r.originalTitle)
                      : ((r.originalTitle = e),
                        (document.title = "(" + r.count + ") " + e),
                        (r.changed = !0));
                  },
                  _clear: function () {
                    r.changed &&
                      ((r.count = 0),
                      (document.title = r.originalTitle),
                      (r.changed = !1));
                  },
                }),
                o = (t.DefaultMaxVisible = 5),
                d = (t.Queues = { global: { maxVisible: o, queue: [] } }),
                _ = (t.Store = {});
              function u() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "global";
                if (d.hasOwnProperty(e)) {
                  var t = d[e].queue.shift();
                  t && t.show();
                }
              }
              function m(e) {
                return !(
                  !e.options.buttons || !Object.keys(e.options.buttons).length
                );
              }
              function l(e) {
                e.options.timeout &&
                  (e.options.progressBar &&
                    e.progressDom &&
                    a.css(e.progressDom, {
                      transition: "width " + e.options.timeout + "ms linear",
                      width: "0%",
                    }),
                  clearTimeout(e.closeTimer),
                  (e.closeTimer = setTimeout(function () {
                    e.close();
                  }, e.options.timeout)));
              }
              function c(e) {
                e.options.timeout &&
                  e.closeTimer &&
                  (clearTimeout(e.closeTimer),
                  (e.closeTimer = -1),
                  e.options.progressBar &&
                    e.progressDom &&
                    a.css(e.progressDom, {
                      transition: "width 0ms linear",
                      width: "100%",
                    }));
              }
              function h(e, t) {
                e.listeners.hasOwnProperty(t) &&
                  e.listeners[t].forEach(function (t) {
                    "function" == typeof t && t.apply(e);
                  });
              }
              t.Defaults = {
                type: "alert",
                layout: "topRight",
                theme: "mint",
                text: "",
                timeout: !1,
                progressBar: !0,
                closeWith: ["click"],
                animation: {
                  open: "noty_effects_open",
                  close: "noty_effects_close",
                },
                id: !1,
                force: !1,
                killer: !1,
                queue: "global",
                container: !1,
                buttons: [],
                callbacks: {
                  beforeShow: null,
                  onShow: null,
                  afterShow: null,
                  onClose: null,
                  afterClose: null,
                  onClick: null,
                  onHover: null,
                  onTemplate: null,
                },
                sounds: { sources: [], volume: 1, conditions: [] },
                titleCount: { conditions: [] },
                modal: !1,
                visibilityControl: !1,
              };
            },
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.NotyButton = void 0);
              var a = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
              })(n(0));
              function s(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              t.NotyButton = function e(t, n, r) {
                var i = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                return (
                  s(this, e),
                  (this.dom = document.createElement("button")),
                  (this.dom.innerHTML = t),
                  (this.id = o.id = o.id || a.generateID("button")),
                  (this.cb = r),
                  Object.keys(o).forEach(function (e) {
                    i.dom.setAttribute(e, o[e]);
                  }),
                  a.addClass(this.dom, n || "noty_btn"),
                  this
                );
              };
            },
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var a = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    (a.enumerable = a.enumerable || !1),
                      (a.configurable = !0),
                      "value" in a && (a.writable = !0),
                      Object.defineProperty(e, a.key, a);
                  }
                }
                return function (t, n, a) {
                  return n && e(t.prototype, n), a && e(t, a), t;
                };
              })();
              function s(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              t.Push = (function () {
                function e() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "/service-worker.js";
                  return (
                    s(this, e),
                    (this.subData = {}),
                    (this.workerPath = t),
                    (this.listeners = {
                      onPermissionGranted: [],
                      onPermissionDenied: [],
                      onSubscriptionSuccess: [],
                      onSubscriptionCancel: [],
                      onWorkerError: [],
                      onWorkerSuccess: [],
                      onWorkerNotSupported: [],
                    }),
                    this
                  );
                }
                return (
                  a(e, [
                    {
                      key: "on",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : function () {};
                        return (
                          "function" == typeof t &&
                            this.listeners.hasOwnProperty(e) &&
                            this.listeners[e].push(t),
                          this
                        );
                      },
                    },
                    {
                      key: "fire",
                      value: function (e) {
                        var t = this,
                          n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : [];
                        this.listeners.hasOwnProperty(e) &&
                          this.listeners[e].forEach(function (e) {
                            "function" == typeof e && e.apply(t, n);
                          });
                      },
                    },
                    {
                      key: "create",
                      value: function () {
                        console.log("NOT IMPLEMENTED YET");
                      },
                    },
                    {
                      key: "isSupported",
                      value: function () {
                        var e = !1;
                        try {
                          e =
                            window.Notification ||
                            window.webkitNotifications ||
                            navigator.mozNotification ||
                            (window.external &&
                              void 0 !== window.external.msIsSiteMode());
                        } catch (e) {}
                        return e;
                      },
                    },
                    {
                      key: "getPermissionStatus",
                      value: function () {
                        var e = "default";
                        if (
                          window.Notification &&
                          window.Notification.permissionLevel
                        )
                          e = window.Notification.permissionLevel;
                        else if (
                          window.webkitNotifications &&
                          window.webkitNotifications.checkPermission
                        )
                          switch (
                            window.webkitNotifications.checkPermission()
                          ) {
                            case 1:
                              e = "default";
                              break;
                            case 0:
                              e = "granted";
                              break;
                            default:
                              e = "denied";
                          }
                        else
                          window.Notification && window.Notification.permission
                            ? (e = window.Notification.permission)
                            : navigator.mozNotification
                            ? (e = "granted")
                            : window.external &&
                              void 0 !== window.external.msIsSiteMode() &&
                              (e = window.external.msIsSiteMode()
                                ? "granted"
                                : "default");
                        return e.toString().toLowerCase();
                      },
                    },
                    {
                      key: "getEndpoint",
                      value: function (e) {
                        var t = e.endpoint,
                          n = e.subscriptionId;
                        return n && -1 === t.indexOf(n) && (t += "/" + n), t;
                      },
                    },
                    {
                      key: "isSWRegistered",
                      value: function () {
                        try {
                          return (
                            "activated" ===
                            navigator.serviceWorker.controller.state
                          );
                        } catch (e) {
                          return !1;
                        }
                      },
                    },
                    {
                      key: "unregisterWorker",
                      value: function () {
                        var e = this;
                        "serviceWorker" in navigator &&
                          navigator.serviceWorker
                            .getRegistrations()
                            .then(function (t) {
                              var n = !0,
                                a = !1,
                                s = void 0;
                              try {
                                for (
                                  var r, i = t[Symbol.iterator]();
                                  !(n = (r = i.next()).done);
                                  n = !0
                                )
                                  r.value.unregister(),
                                    e.fire("onSubscriptionCancel");
                              } catch (e) {
                                (a = !0), (s = e);
                              } finally {
                                try {
                                  !n && i.return && i.return();
                                } finally {
                                  if (a) throw s;
                                }
                              }
                            });
                      },
                    },
                    {
                      key: "requestSubscription",
                      value: function () {
                        var e = this,
                          t =
                            !(
                              arguments.length > 0 && void 0 !== arguments[0]
                            ) || arguments[0],
                          n = this,
                          a = this.getPermissionStatus(),
                          s = function (a) {
                            "granted" === a
                              ? (e.fire("onPermissionGranted"),
                                "serviceWorker" in navigator
                                  ? navigator.serviceWorker
                                      .register(e.workerPath)
                                      .then(function () {
                                        navigator.serviceWorker.ready.then(
                                          function (e) {
                                            n.fire("onWorkerSuccess"),
                                              e.pushManager
                                                .subscribe({
                                                  userVisibleOnly: t,
                                                })
                                                .then(function (e) {
                                                  var t = e.getKey("p256dh"),
                                                    a = e.getKey("auth");
                                                  (n.subData = {
                                                    endpoint: n.getEndpoint(e),
                                                    p256dh: t
                                                      ? window.btoa(
                                                          String.fromCharCode.apply(
                                                            null,
                                                            new Uint8Array(t)
                                                          )
                                                        )
                                                      : null,
                                                    auth: a
                                                      ? window.btoa(
                                                          String.fromCharCode.apply(
                                                            null,
                                                            new Uint8Array(a)
                                                          )
                                                        )
                                                      : null,
                                                  }),
                                                    n.fire(
                                                      "onSubscriptionSuccess",
                                                      [n.subData]
                                                    );
                                                })
                                                .catch(function (e) {
                                                  n.fire("onWorkerError", [e]);
                                                });
                                          }
                                        );
                                      })
                                  : n.fire("onWorkerNotSupported"))
                              : "denied" === a &&
                                (e.fire("onPermissionDenied"),
                                e.unregisterWorker());
                          };
                        "default" === a
                          ? window.Notification &&
                            window.Notification.requestPermission
                            ? window.Notification.requestPermission(s)
                            : window.webkitNotifications &&
                              window.webkitNotifications.checkPermission &&
                              window.webkitNotifications.requestPermission(s)
                          : s(a);
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            function (e, t, n) {
              (function (t, a) {
                var s;
                (s = function () {
                  "use strict";
                  function e(e) {
                    return "function" == typeof e;
                  }
                  var s = Array.isArray
                      ? Array.isArray
                      : function (e) {
                          return (
                            "[object Array]" ===
                            Object.prototype.toString.call(e)
                          );
                        },
                    r = 0,
                    i = void 0,
                    o = void 0,
                    d = function (e, t) {
                      (M[r] = e),
                        (M[r + 1] = t),
                        2 === (r += 2) && (o ? o(f) : k());
                    },
                    _ = "undefined" != typeof window ? window : void 0,
                    u = _ || {},
                    m = u.MutationObserver || u.WebKitMutationObserver,
                    l =
                      "undefined" == typeof self &&
                      void 0 !== t &&
                      "[object process]" === {}.toString.call(t),
                    c =
                      "undefined" != typeof Uint8ClampedArray &&
                      "undefined" != typeof importScripts &&
                      "undefined" != typeof MessageChannel;
                  function h() {
                    var e = setTimeout;
                    return function () {
                      return e(f, 1);
                    };
                  }
                  var M = new Array(1e3);
                  function f() {
                    for (var e = 0; e < r; e += 2)
                      (0, M[e])(M[e + 1]), (M[e] = void 0), (M[e + 1] = void 0);
                    r = 0;
                  }
                  var y,
                    L,
                    Y,
                    p,
                    k = void 0;
                  function D(e, t) {
                    var n = arguments,
                      a = this,
                      s = new this.constructor(v);
                    void 0 === s[w] && C(s);
                    var r,
                      i = a._state;
                    return (
                      i
                        ? ((r = n[i - 1]),
                          d(function () {
                            return z(i, s, r, a._result);
                          }))
                        : E(a, s, e, t),
                      s
                    );
                  }
                  function g(e) {
                    if (e && "object" == typeof e && e.constructor === this)
                      return e;
                    var t = new this(v);
                    return j(t, e), t;
                  }
                  l
                    ? (k = function () {
                        return t.nextTick(f);
                      })
                    : m
                    ? ((L = 0),
                      (Y = new m(f)),
                      (p = document.createTextNode("")),
                      Y.observe(p, { characterData: !0 }),
                      (k = function () {
                        p.data = L = ++L % 2;
                      }))
                    : c
                    ? (((y = new MessageChannel()).port1.onmessage = f),
                      (k = function () {
                        return y.port2.postMessage(0);
                      }))
                    : (k =
                        void 0 === _
                          ? (function () {
                              try {
                                var e = n(9);
                                return void 0 !==
                                  (i = e.runOnLoop || e.runOnContext)
                                  ? function () {
                                      i(f);
                                    }
                                  : h();
                              } catch (e) {
                                return h();
                              }
                            })()
                          : h());
                  var w = Math.random().toString(36).substring(16);
                  function v() {}
                  var T = void 0,
                    b = new A();
                  function S(e) {
                    try {
                      return e.then;
                    } catch (e) {
                      return (b.error = e), b;
                    }
                  }
                  function H(t, n, a) {
                    n.constructor === t.constructor &&
                    a === D &&
                    n.constructor.resolve === g
                      ? (function (e, t) {
                          1 === t._state
                            ? O(e, t._result)
                            : 2 === t._state
                            ? P(e, t._result)
                            : E(
                                t,
                                void 0,
                                function (t) {
                                  return j(e, t);
                                },
                                function (t) {
                                  return P(e, t);
                                }
                              );
                        })(t, n)
                      : a === b
                      ? (P(t, b.error), (b.error = null))
                      : void 0 === a
                      ? O(t, n)
                      : e(a)
                      ? (function (e, t, n) {
                          d(function (e) {
                            var a = !1,
                              s = (function (e, t, n, a) {
                                try {
                                  e.call(t, n, a);
                                } catch (e) {
                                  return e;
                                }
                              })(
                                n,
                                t,
                                function (n) {
                                  a || ((a = !0), t !== n ? j(e, n) : O(e, n));
                                },
                                function (t) {
                                  a || ((a = !0), P(e, t));
                                },
                                e._label
                              );
                            !a && s && ((a = !0), P(e, s));
                          }, e);
                        })(t, n, a)
                      : O(t, n);
                  }
                  function j(e, t) {
                    var n, a;
                    e === t
                      ? P(
                          e,
                          new TypeError(
                            "You cannot resolve a promise with itself"
                          )
                        )
                      : ((a = typeof (n = t)),
                        null === n || ("object" !== a && "function" !== a)
                          ? O(e, t)
                          : H(e, t, S(t)));
                  }
                  function x(e) {
                    e._onerror && e._onerror(e._result), W(e);
                  }
                  function O(e, t) {
                    e._state === T &&
                      ((e._result = t),
                      (e._state = 1),
                      0 !== e._subscribers.length && d(W, e));
                  }
                  function P(e, t) {
                    e._state === T &&
                      ((e._state = 2), (e._result = t), d(x, e));
                  }
                  function E(e, t, n, a) {
                    var s = e._subscribers,
                      r = s.length;
                    (e._onerror = null),
                      (s[r] = t),
                      (s[r + 1] = n),
                      (s[r + 2] = a),
                      0 === r && e._state && d(W, e);
                  }
                  function W(e) {
                    var t = e._subscribers,
                      n = e._state;
                    if (0 !== t.length) {
                      for (
                        var a = void 0, s = void 0, r = e._result, i = 0;
                        i < t.length;
                        i += 3
                      )
                        (a = t[i]), (s = t[i + n]), a ? z(n, a, s, r) : s(r);
                      e._subscribers.length = 0;
                    }
                  }
                  function A() {
                    this.error = null;
                  }
                  var F = new A();
                  function z(t, n, a, s) {
                    var r = e(a),
                      i = void 0,
                      o = void 0,
                      d = void 0,
                      _ = void 0;
                    if (r) {
                      if (
                        ((i = (function (e, t) {
                          try {
                            return e(t);
                          } catch (e) {
                            return (F.error = e), F;
                          }
                        })(a, s)) === F
                          ? ((_ = !0), (o = i.error), (i.error = null))
                          : (d = !0),
                        n === i)
                      )
                        return void P(
                          n,
                          new TypeError(
                            "A promises callback cannot return that same promise."
                          )
                        );
                    } else (i = s), (d = !0);
                    n._state !== T ||
                      (r && d
                        ? j(n, i)
                        : _
                        ? P(n, o)
                        : 1 === t
                        ? O(n, i)
                        : 2 === t && P(n, i));
                  }
                  var N = 0;
                  function C(e) {
                    (e[w] = N++),
                      (e._state = void 0),
                      (e._result = void 0),
                      (e._subscribers = []);
                  }
                  function R(e, t) {
                    (this._instanceConstructor = e),
                      (this.promise = new e(v)),
                      this.promise[w] || C(this.promise),
                      s(t)
                        ? ((this.length = t.length),
                          (this._remaining = t.length),
                          (this._result = new Array(this.length)),
                          0 === this.length
                            ? O(this.promise, this._result)
                            : ((this.length = this.length || 0),
                              this._enumerate(t),
                              0 === this._remaining &&
                                O(this.promise, this._result)))
                        : P(
                            this.promise,
                            new Error("Array Methods must be provided an Array")
                          );
                  }
                  function J(e) {
                    (this[w] = N++),
                      (this._result = this._state = void 0),
                      (this._subscribers = []),
                      v !== e &&
                        ("function" != typeof e &&
                          (function () {
                            throw new TypeError(
                              "You must pass a resolver function as the first argument to the promise constructor"
                            );
                          })(),
                        this instanceof J
                          ? (function (e, t) {
                              try {
                                t(
                                  function (t) {
                                    j(e, t);
                                  },
                                  function (t) {
                                    P(e, t);
                                  }
                                );
                              } catch (t) {
                                P(e, t);
                              }
                            })(this, e)
                          : (function () {
                              throw new TypeError(
                                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                              );
                            })());
                  }
                  return (
                    (R.prototype._enumerate = function (e) {
                      for (var t = 0; this._state === T && t < e.length; t++)
                        this._eachEntry(e[t], t);
                    }),
                    (R.prototype._eachEntry = function (e, t) {
                      var n = this._instanceConstructor,
                        a = n.resolve;
                      if (a === g) {
                        var s = S(e);
                        if (s === D && e._state !== T)
                          this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof s)
                          this._remaining--, (this._result[t] = e);
                        else if (n === J) {
                          var r = new n(v);
                          H(r, e, s), this._willSettleAt(r, t);
                        } else
                          this._willSettleAt(
                            new n(function (t) {
                              return t(e);
                            }),
                            t
                          );
                      } else this._willSettleAt(a(e), t);
                    }),
                    (R.prototype._settledAt = function (e, t, n) {
                      var a = this.promise;
                      a._state === T &&
                        (this._remaining--,
                        2 === e ? P(a, n) : (this._result[t] = n)),
                        0 === this._remaining && O(a, this._result);
                    }),
                    (R.prototype._willSettleAt = function (e, t) {
                      var n = this;
                      E(
                        e,
                        void 0,
                        function (e) {
                          return n._settledAt(1, t, e);
                        },
                        function (e) {
                          return n._settledAt(2, t, e);
                        }
                      );
                    }),
                    (J.all = function (e) {
                      return new R(this, e).promise;
                    }),
                    (J.race = function (e) {
                      var t = this;
                      return s(e)
                        ? new t(function (n, a) {
                            for (var s = e.length, r = 0; r < s; r++)
                              t.resolve(e[r]).then(n, a);
                          })
                        : new t(function (e, t) {
                            return t(
                              new TypeError("You must pass an array to race.")
                            );
                          });
                    }),
                    (J.resolve = g),
                    (J.reject = function (e) {
                      var t = new this(v);
                      return P(t, e), t;
                    }),
                    (J._setScheduler = function (e) {
                      o = e;
                    }),
                    (J._setAsap = function (e) {
                      d = e;
                    }),
                    (J._asap = d),
                    (J.prototype = {
                      constructor: J,
                      then: D,
                      catch: function (e) {
                        return this.then(null, e);
                      },
                    }),
                    (J.polyfill = function () {
                      var e = void 0;
                      if (void 0 !== a) e = a;
                      else if ("undefined" != typeof self) e = self;
                      else
                        try {
                          e = Function("return this")();
                        } catch (e) {
                          throw new Error(
                            "polyfill failed because global object is unavailable in this environment"
                          );
                        }
                      var t = e.Promise;
                      if (t) {
                        var n = null;
                        try {
                          n = Object.prototype.toString.call(t.resolve());
                        } catch (e) {}
                        if ("[object Promise]" === n && !t.cast) return;
                      }
                      e.Promise = J;
                    }),
                    (J.Promise = J),
                    J
                  );
                }),
                  (e.exports = s());
              }.call(t, n(7), n(8)));
            },
            function (e, t) {},
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var a = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    (a.enumerable = a.enumerable || !1),
                      (a.configurable = !0),
                      "value" in a && (a.writable = !0),
                      Object.defineProperty(e, a.key, a);
                  }
                }
                return function (t, n, a) {
                  return n && e(t.prototype, n), a && e(t, a), t;
                };
              })();
              n(5);
              var s,
                r = n(4),
                i = (s = r) && s.__esModule ? s : { default: s },
                o = m(n(0)),
                d = m(n(1)),
                _ = n(2),
                u = n(3);
              function m(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
              }
              function l(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              var c = (function () {
                function e() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    l(this, e),
                    (this.options = o.deepExtend({}, d.Defaults, t)),
                    d.Store[this.options.id]
                      ? d.Store[this.options.id]
                      : ((this.id = this.options.id || o.generateID("bar")),
                        (this.closeTimer = -1),
                        (this.barDom = null),
                        (this.layoutDom = null),
                        (this.progressDom = null),
                        (this.showing = !1),
                        (this.shown = !1),
                        (this.closed = !1),
                        (this.closing = !1),
                        (this.killable =
                          this.options.timeout ||
                          this.options.closeWith.length > 0),
                        (this.hasSound =
                          this.options.sounds.sources.length > 0),
                        (this.soundPlayed = !1),
                        (this.listeners = {
                          beforeShow: [],
                          onShow: [],
                          afterShow: [],
                          onClose: [],
                          afterClose: [],
                          onClick: [],
                          onHover: [],
                          onTemplate: [],
                        }),
                        (this.promises = { show: null, close: null }),
                        this.on(
                          "beforeShow",
                          this.options.callbacks.beforeShow
                        ),
                        this.on("onShow", this.options.callbacks.onShow),
                        this.on("afterShow", this.options.callbacks.afterShow),
                        this.on("onClose", this.options.callbacks.onClose),
                        this.on(
                          "afterClose",
                          this.options.callbacks.afterClose
                        ),
                        this.on("onClick", this.options.callbacks.onClick),
                        this.on("onHover", this.options.callbacks.onHover),
                        this.on(
                          "onTemplate",
                          this.options.callbacks.onTemplate
                        ),
                        this)
                  );
                }
                return (
                  a(
                    e,
                    [
                      {
                        key: "on",
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : function () {};
                          return (
                            "function" == typeof t &&
                              this.listeners.hasOwnProperty(e) &&
                              this.listeners[e].push(t),
                            this
                          );
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          var t = this;
                          if (this.showing || this.shown) return this;
                          !0 === this.options.killer
                            ? e.closeAll()
                            : "string" == typeof this.options.killer &&
                              e.closeAll(this.options.killer);
                          var n = d.getQueueCounts(this.options.queue);
                          if (
                            n.current >= n.maxVisible ||
                            (d.PageHidden && this.options.visibilityControl)
                          )
                            return (
                              d.addToQueue(this),
                              d.PageHidden &&
                                this.hasSound &&
                                o.inArray(
                                  "docHidden",
                                  this.options.sounds.conditions
                                ) &&
                                o.createAudioElements(this),
                              d.PageHidden &&
                                o.inArray(
                                  "docHidden",
                                  this.options.titleCount.conditions
                                ) &&
                                d.docTitle.increment(),
                              this
                            );
                          if (
                            ((d.Store[this.id] = this),
                            d.fire(this, "beforeShow"),
                            (this.showing = !0),
                            this.closing)
                          )
                            return (this.showing = !1), this;
                          if (
                            (d.build(this),
                            d.handleModal(this),
                            this.options.force
                              ? this.layoutDom.insertBefore(
                                  this.barDom,
                                  this.layoutDom.firstChild
                                )
                              : this.layoutDom.appendChild(this.barDom),
                            this.hasSound &&
                              !this.soundPlayed &&
                              o.inArray(
                                "docVisible",
                                this.options.sounds.conditions
                              ) &&
                              o.createAudioElements(this),
                            o.inArray(
                              "docVisible",
                              this.options.titleCount.conditions
                            ) && d.docTitle.increment(),
                            (this.shown = !0),
                            (this.closed = !1),
                            d.hasButtons(this) &&
                              Object.keys(this.options.buttons).forEach(
                                function (e) {
                                  var n = t.barDom.querySelector(
                                    "#" + t.options.buttons[e].id
                                  );
                                  o.addListener(n, "click", function (n) {
                                    o.stopPropagation(n),
                                      t.options.buttons[e].cb(t);
                                  });
                                }
                              ),
                            (this.progressDom =
                              this.barDom.querySelector(".noty_progressbar")),
                            o.inArray("click", this.options.closeWith) &&
                              (o.addClass(this.barDom, "noty_close_with_click"),
                              o.addListener(
                                this.barDom,
                                "click",
                                function (e) {
                                  o.stopPropagation(e),
                                    d.fire(t, "onClick"),
                                    t.close();
                                },
                                !1
                              )),
                            o.addListener(
                              this.barDom,
                              "mouseenter",
                              function () {
                                d.fire(t, "onHover");
                              },
                              !1
                            ),
                            this.options.timeout &&
                              o.addClass(this.barDom, "noty_has_timeout"),
                            this.options.progressBar &&
                              o.addClass(this.barDom, "noty_has_progressbar"),
                            o.inArray("button", this.options.closeWith))
                          ) {
                            o.addClass(this.barDom, "noty_close_with_button");
                            var a = document.createElement("div");
                            o.addClass(a, "noty_close_button"),
                              (a.innerHTML = "×"),
                              this.barDom.appendChild(a),
                              o.addListener(
                                a,
                                "click",
                                function (e) {
                                  o.stopPropagation(e), t.close();
                                },
                                !1
                              );
                          }
                          return (
                            d.fire(this, "onShow"),
                            null === this.options.animation.open
                              ? (this.promises.show = new i.default(function (
                                  e
                                ) {
                                  e();
                                }))
                              : "function" == typeof this.options.animation.open
                              ? (this.promises.show = new i.default(
                                  this.options.animation.open.bind(this)
                                ))
                              : (o.addClass(
                                  this.barDom,
                                  this.options.animation.open
                                ),
                                (this.promises.show = new i.default(function (
                                  e
                                ) {
                                  o.addListener(
                                    t.barDom,
                                    o.animationEndEvents,
                                    function () {
                                      o.removeClass(
                                        t.barDom,
                                        t.options.animation.open
                                      ),
                                        e();
                                    }
                                  );
                                }))),
                            this.promises.show.then(function () {
                              var e = t;
                              setTimeout(function () {
                                d.openFlow(e);
                              }, 100);
                            }),
                            this
                          );
                        },
                      },
                      {
                        key: "stop",
                        value: function () {
                          return d.dequeueClose(this), this;
                        },
                      },
                      {
                        key: "resume",
                        value: function () {
                          return d.queueClose(this), this;
                        },
                      },
                      {
                        key: "setTimeout",
                        value: (function (e) {
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return (
                            (t.toString = function () {
                              return e.toString();
                            }),
                            t
                          );
                        })(function (e) {
                          if (
                            (this.stop(),
                            (this.options.timeout = e),
                            this.barDom)
                          ) {
                            this.options.timeout
                              ? o.addClass(this.barDom, "noty_has_timeout")
                              : o.removeClass(this.barDom, "noty_has_timeout");
                            var t = this;
                            setTimeout(function () {
                              t.resume();
                            }, 100);
                          }
                          return this;
                        }),
                      },
                      {
                        key: "setText",
                        value: function (e) {
                          var t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                          return (
                            this.barDom &&
                              (this.barDom.querySelector(
                                ".noty_body"
                              ).innerHTML = e),
                            t && (this.options.text = e),
                            this
                          );
                        },
                      },
                      {
                        key: "setType",
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1];
                          if (this.barDom) {
                            var a = o.classList(this.barDom).split(" ");
                            a.forEach(function (e) {
                              "noty_type__" === e.substring(0, 11) &&
                                o.removeClass(t.barDom, e);
                            }),
                              o.addClass(this.barDom, "noty_type__" + e);
                          }
                          return n && (this.options.type = e), this;
                        },
                      },
                      {
                        key: "setTheme",
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1];
                          if (this.barDom) {
                            var a = o.classList(this.barDom).split(" ");
                            a.forEach(function (e) {
                              "noty_theme__" === e.substring(0, 12) &&
                                o.removeClass(t.barDom, e);
                            }),
                              o.addClass(this.barDom, "noty_theme__" + e);
                          }
                          return n && (this.options.theme = e), this;
                        },
                      },
                      {
                        key: "close",
                        value: function () {
                          var e = this;
                          return this.closed
                            ? this
                            : this.shown
                            ? (d.fire(this, "onClose"),
                              (this.closing = !0),
                              null === this.options.animation.close ||
                              !1 === this.options.animation.close
                                ? (this.promises.close = new i.default(
                                    function (e) {
                                      e();
                                    }
                                  ))
                                : "function" ==
                                  typeof this.options.animation.close
                                ? (this.promises.close = new i.default(
                                    this.options.animation.close.bind(this)
                                  ))
                                : (o.addClass(
                                    this.barDom,
                                    this.options.animation.close
                                  ),
                                  (this.promises.close = new i.default(
                                    function (t) {
                                      o.addListener(
                                        e.barDom,
                                        o.animationEndEvents,
                                        function () {
                                          e.options.force
                                            ? o.remove(e.barDom)
                                            : d.ghostFix(e),
                                            t();
                                        }
                                      );
                                    }
                                  ))),
                              this.promises.close.then(function () {
                                d.closeFlow(e), d.handleModalClose(e);
                              }),
                              (this.closed = !0),
                              this)
                            : (d.removeFromQueue(this), this);
                        },
                      },
                    ],
                    [
                      {
                        key: "closeAll",
                        value: function () {
                          var e =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0];
                          return (
                            Object.keys(d.Store).forEach(function (t) {
                              e
                                ? d.Store[t].options.queue === e &&
                                  d.Store[t].killable &&
                                  d.Store[t].close()
                                : d.Store[t].killable && d.Store[t].close();
                            }),
                            this
                          );
                        },
                      },
                      {
                        key: "clearQueue",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "global";
                          return (
                            d.Queues.hasOwnProperty(e) &&
                              (d.Queues[e].queue = []),
                            this
                          );
                        },
                      },
                      {
                        key: "overrideDefaults",
                        value: function (e) {
                          return (
                            (d.Defaults = o.deepExtend({}, d.Defaults, e)), this
                          );
                        },
                      },
                      {
                        key: "setMaxVisible",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : d.DefaultMaxVisible,
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "global";
                          return (
                            d.Queues.hasOwnProperty(t) ||
                              (d.Queues[t] = { maxVisible: e, queue: [] }),
                            (d.Queues[t].maxVisible = e),
                            this
                          );
                        },
                      },
                      {
                        key: "button",
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null,
                            n = arguments[2],
                            a =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : {};
                          return new _.NotyButton(e, t, n, a);
                        },
                      },
                      {
                        key: "version",
                        value: function () {
                          return "3.2.0-beta";
                        },
                      },
                      {
                        key: "Push",
                        value: function (e) {
                          return new u.Push(e);
                        },
                      },
                      {
                        key: "Queues",
                        get: function () {
                          return d.Queues;
                        },
                      },
                      {
                        key: "PageHidden",
                        get: function () {
                          return d.PageHidden;
                        },
                      },
                    ]
                  ),
                  e
                );
              })();
              (t.default = c),
                "undefined" != typeof window && o.visibilityChangeFlow(),
                (e.exports = t.default);
            },
            function (e, t) {
              var n,
                a,
                s = (e.exports = {});
              function r() {
                throw new Error("setTimeout has not been defined");
              }
              function i() {
                throw new Error("clearTimeout has not been defined");
              }
              function o(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === r || !n) && setTimeout)
                  return (n = setTimeout), setTimeout(e, 0);
                try {
                  return n(e, 0);
                } catch (t) {
                  try {
                    return n.call(null, e, 0);
                  } catch (t) {
                    return n.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  n = "function" == typeof setTimeout ? setTimeout : r;
                } catch (e) {
                  n = r;
                }
                try {
                  a = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  a = i;
                }
              })();
              var d,
                _ = [],
                u = !1,
                m = -1;
              function l() {
                u &&
                  d &&
                  ((u = !1),
                  d.length ? (_ = d.concat(_)) : (m = -1),
                  _.length && c());
              }
              function c() {
                if (!u) {
                  var e = o(l);
                  u = !0;
                  for (var t = _.length; t; ) {
                    for (d = _, _ = []; ++m < t; ) d && d[m].run();
                    (m = -1), (t = _.length);
                  }
                  (d = null),
                    (u = !1),
                    (function (e) {
                      if (a === clearTimeout) return clearTimeout(e);
                      if ((a === i || !a) && clearTimeout)
                        return (a = clearTimeout), clearTimeout(e);
                      try {
                        a(e);
                      } catch (t) {
                        try {
                          return a.call(null, e);
                        } catch (t) {
                          return a.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h(e, t) {
                (this.fun = e), (this.array = t);
              }
              function M() {}
              (s.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                _.push(new h(e, t)), 1 !== _.length || u || o(c);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (s.title = "browser"),
                (s.browser = !0),
                (s.env = {}),
                (s.argv = []),
                (s.version = ""),
                (s.versions = {}),
                (s.on = M),
                (s.addListener = M),
                (s.once = M),
                (s.off = M),
                (s.removeListener = M),
                (s.removeAllListeners = M),
                (s.emit = M),
                (s.prependListener = M),
                (s.prependOnceListener = M),
                (s.listeners = function (e) {
                  return [];
                }),
                (s.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (s.cwd = function () {
                  return "/";
                }),
                (s.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (s.umask = function () {
                  return 0;
                });
            },
            function (e, t) {
              var n;
              n = (function () {
                return this;
              })();
              try {
                n = n || Function("return this")() || (0, eval)("this");
              } catch (e) {
                "object" == typeof window && (n = window);
              }
              e.exports = n;
            },
            function (e, t) {},
          ]);
        }),
          (e.exports = t());
      },
      4155: (e) => {
        var t,
          n,
          a = (e.exports = {});
        function s() {
          throw new Error("setTimeout has not been defined");
        }
        function r() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === s || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : s;
          } catch (e) {
            t = s;
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : r;
          } catch (e) {
            n = r;
          }
        })();
        var o,
          d = [],
          _ = !1,
          u = -1;
        function m() {
          _ &&
            o &&
            ((_ = !1),
            o.length ? (d = o.concat(d)) : (u = -1),
            d.length && l());
        }
        function l() {
          if (!_) {
            var e = i(m);
            _ = !0;
            for (var t = d.length; t; ) {
              for (o = d, d = []; ++u < t; ) o && o[u].run();
              (u = -1), (t = d.length);
            }
            (o = null),
              (_ = !1),
              (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === r || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(e);
                try {
                  n(e);
                } catch (t) {
                  try {
                    return n.call(null, e);
                  } catch (t) {
                    return n.call(this, e);
                  }
                }
              })(e);
          }
        }
        function c(e, t) {
          (this.fun = e), (this.array = t);
        }
        function h() {}
        (a.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          d.push(new c(e, t)), 1 !== d.length || _ || i(l);
        }),
          (c.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (a.title = "browser"),
          (a.browser = !0),
          (a.env = {}),
          (a.argv = []),
          (a.version = ""),
          (a.versions = {}),
          (a.on = h),
          (a.addListener = h),
          (a.once = h),
          (a.off = h),
          (a.removeListener = h),
          (a.removeAllListeners = h),
          (a.emit = h),
          (a.prependListener = h),
          (a.prependOnceListener = h),
          (a.listeners = function (e) {
            return [];
          }),
          (a.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (a.cwd = function () {
            return "/";
          }),
          (a.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (a.umask = function () {
            return 0;
          });
      },
    },
    n = {};
  function a(e) {
    var s = n[e];
    if (void 0 !== s) return s.exports;
    var r = (n[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, a), (r.loaded = !0), r.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, n, s, r) => {
      if (!n) {
        var i = 1 / 0;
        for (_ = 0; _ < e.length; _++) {
          for (var [n, s, r] = e[_], o = !0, d = 0; d < n.length; d++)
            (!1 & r || i >= r) && Object.keys(a.O).every((e) => a.O[e](n[d]))
              ? n.splice(d--, 1)
              : ((o = !1), r < i && (i = r));
          o && (e.splice(_--, 1), (t = s()));
        }
        return t;
      }
      r = r || 0;
      for (var _ = e.length; _ > 0 && e[_ - 1][2] > r; _--) e[_] = e[_ - 1];
      e[_] = [n, s, r];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = { 177: 0, 879: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var s,
            r,
            [i, o, d] = n,
            _ = 0;
          for (s in o) a.o(o, s) && (a.m[s] = o[s]);
          if (d) var u = d(a);
          for (t && t(n); _ < i.length; _++)
            (r = i[_]), a.o(e, r) && e[r] && e[r][0](), (e[i[_]] = 0);
          return a.O(u);
        },
        n = (self.webpackChunkrealtime_pizza =
          self.webpackChunkrealtime_pizza || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    a.O(void 0, [879], () => a(6763));
  var s = a.O(void 0, [879], () => a(3835));
  s = a.O(s);
})();
