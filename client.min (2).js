! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 30)
}([function(t, e, n) {
    var r = n(27),
        o = n(10);
    t.exports = function(t, e) {
        var n = o(t, e, "get");
        return r(t, n)
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, n) {
    var r = n(28),
        o = n(10);
    t.exports = function(t, e, n) {
        var i = o(t, e, "set");
        return r(t, i, n), n
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, n) {
    var r, o;
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ! function(i) {
        if (void 0 === (o = "function" == typeof(r = i) ? r.call(e, n, e, t) : r) || (t.exports = o), !0, t.exports = i(), !!0) {
            var a = window.Cookies,
                s = window.Cookies = i();
            s.noConflict = function() {
                return window.Cookies = a, s
            }
        }
    }((function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) e[r] = n[r]
            }
            return e
        }

        function e(t) {
            return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function n(r) {
            function o() {}

            function i(e, n, i) {
                if ("undefined" != typeof document) {
                    "number" == typeof(i = t({
                        path: "/"
                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        var a = JSON.stringify(n);
                        /^[\{\[]/.test(a) && (n = a)
                    } catch (t) {}
                    n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var u in i) i[u] && (s += "; " + u, !0 !== i[u] && (s += "=" + i[u].split(";")[0]));
                    return document.cookie = e + "=" + n + s
                }
            }

            function a(t, n) {
                if ("undefined" != typeof document) {
                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                        var s = i[a].split("="),
                            u = s.slice(1).join("=");
                        n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                        try {
                            var c = e(s[0]);
                            if (u = (r.read || r)(u, c) || e(u), n) try {
                                u = JSON.parse(u)
                            } catch (t) {}
                            if (o[c] = u, t === c) break
                        } catch (t) {}
                    }
                    return t ? o[t] : o
                }
            }
            return o.set = i, o.get = function(t) {
                return a(t, !1)
            }, o.getJSON = function(t) {
                return a(t, !0)
            }, o.remove = function(e, n) {
                i(e, "", t(n, {
                    expires: -1
                }))
            }, o.defaults = {}, o.withConverter = n, o
        }((function() {}))
    }))
}, function(t, e, n) {
    var r = n(16);
    t.exports = function(t, e, n) {
        return (e = r(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var o;
    "undefined" != typeof window ? o = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), o = void 0) : o = self;
    var i = n(18),
        a = n(19),
        s = n(20),
        u = n(9),
        c = n(21),
        l = n(23);

    function d() {}
    t.exports = function(t, n) {
        return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 === arguments.length ? new e.Request("GET", t) : new e.Request(t, n)
    };
    var h = e = t.exports;
    e.Request = w, h.getXHR = function() {
        if (o.XMLHttpRequest && (!o.location || "file:" !== o.location.protocol || !o.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {}
        throw new Error("Browser-only version of superagent could not find XHR")
    };
    var f = "".trim ? function(t) {
        return t.trim()
    } : function(t) {
        return t.replace(/(^\s*|\s*$)/g, "")
    };

    function p(t) {
        if (!u(t)) return t;
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && m(e, n, t[n]);
        return e.join("&")
    }

    function m(t, e, n) {
        if (void 0 !== n)
            if (null !== n)
                if (Array.isArray(n)) n.forEach((function(n) {
                    m(t, e, n)
                }));
                else if (u(n))
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && m(t, "".concat(e, "[").concat(r, "]"), n[r]);
        else t.push(encodeURI(e) + "=" + encodeURIComponent(n));
        else t.push(encodeURI(e))
    }

    function y(t) {
        for (var e, n, r = {}, o = t.split("&"), i = 0, a = o.length; i < a; ++i) - 1 === (n = (e = o[i]).indexOf("=")) ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));
        return r
    }

    function v(t) {
        return /[/+]json($|[^-\w])/.test(t)
    }

    function g(t) {
        this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
        var e = this.xhr.status;
        1223 === e && (e = 204), this._setStatusProperties(e), this.headers = function(t) {
            for (var e, n, r, o, i = t.split(/\r?\n/), a = {}, s = 0, u = i.length; s < u; ++s) - 1 !== (e = (n = i[s]).indexOf(":")) && (r = n.slice(0, e).toLowerCase(), o = f(n.slice(e + 1)), a[r] = o);
            return a
        }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
    }

    function w(t, e) {
        var n = this;
        this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", (function() {
            var t, e = null,
                r = null;
            try {
                r = new g(n)
            } catch (t) {
                return (e = new Error("Parser is unable to parse the response")).parse = !0, e.original = t, n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), n.callback(e)
            }
            n.emit("response", r);
            try {
                n._isResponseOK(r) || (t = new Error(r.statusText || r.text || "Unsuccessful HTTP response"))
            } catch (e) {
                t = e
            }
            t ? (t.original = e, t.response = r, t.status = r.status, n.callback(t, r)) : n.callback(null, r)
        }))
    }

    function b(t, e, n) {
        var r = h("DELETE", t);
        return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }
    h.serializeObject = p, h.parseString = y, h.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, h.serialize = {
        "application/x-www-form-urlencoded": p,
        "application/json": a
    }, h.parse = {
        "application/x-www-form-urlencoded": y,
        "application/json": JSON.parse
    }, c(g.prototype), g.prototype._parseBody = function(t) {
        var e = h.parse[this.type];
        return this.req._parser ? this.req._parser(this, t) : (!e && v(this.type) && (e = h.parse["application/json"]), e && t && (t.length > 0 || t instanceof Object) ? e(t) : null)
    }, g.prototype.toError = function() {
        var t = this.req,
            e = t.method,
            n = t.url,
            r = "cannot ".concat(e, " ").concat(n, " (").concat(this.status, ")"),
            o = new Error(r);
        return o.status = this.status, o.method = e, o.url = n, o
    }, h.Response = g, i(w.prototype), s(w.prototype), w.prototype.type = function(t) {
        return this.set("Content-Type", h.types[t] || t), this
    }, w.prototype.accept = function(t) {
        return this.set("Accept", h.types[t] || t), this
    }, w.prototype.auth = function(t, e, n) {
        1 === arguments.length && (e = ""), "object" === r(e) && null !== e && (n = e, e = ""), n || (n = {
            type: "function" == typeof btoa ? "basic" : "auto"
        });
        var o = function(t) {
            if ("function" == typeof btoa) return btoa(t);
            throw new Error("Cannot use basic auth, btoa is not a function")
        };
        return this._auth(t, e, n, o)
    }, w.prototype.query = function(t) {
        return "string" != typeof t && (t = p(t)), t && this._query.push(t), this
    }, w.prototype.attach = function(t, e, n) {
        if (e) {
            if (this._data) throw new Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(t, e, n || e.name)
        }
        return this
    }, w.prototype._getFormData = function() {
        return this._formData || (this._formData = new o.FormData), this._formData
    }, w.prototype.callback = function(t, e) {
        if (this._shouldRetry(t, e)) return this._retry();
        var n = this._callback;
        this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e)
    }, w.prototype.crossDomainError = function() {
        var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
    }, w.prototype.agent = function() {
        return console.warn("This is not supported in browser version of superagent"), this
    }, w.prototype.ca = w.prototype.agent, w.prototype.buffer = w.prototype.ca, w.prototype.write = function() {
        throw new Error("Streaming is not supported in browser version of superagent")
    }, w.prototype.pipe = w.prototype.write, w.prototype._isHost = function(t) {
        return t && "object" === r(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
    }, w.prototype.end = function(t) {
        this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || d, this._finalizeQueryString(), this._end()
    }, w.prototype._setUploadTimeout = function() {
        var t = this;
        this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout((function() {
            t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT")
        }), this._uploadTimeout))
    }, w.prototype._end = function() {
        if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
        var t = this;
        this.xhr = h.getXHR();
        var e = this.xhr,
            n = this._formData || this._data;
        this._setTimeouts(), e.onreadystatechange = function() {
            var n = e.readyState;
            if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === n) {
                var r;
                try {
                    r = e.status
                } catch (t) {
                    r = 0
                }
                if (!r) {
                    if (t.timedout || t._aborted) return;
                    return t.crossDomainError()
                }
                t.emit("end")
            }
        };
        var r = function(e, n) {
            n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(t._uploadTimeoutTimer)), n.direction = e, t.emit("progress", n)
        };
        if (this.hasListeners("progress")) try {
            e.addEventListener("progress", r.bind(null, "download")), e.upload && e.upload.addEventListener("progress", r.bind(null, "upload"))
        } catch (t) {}
        e.upload && this._setUploadTimeout();
        try {
            this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
        } catch (t) {
            return this.callback(t)
        }
        if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
            var o = this._header["content-type"],
                i = this._serializer || h.serialize[o ? o.split(";")[0] : ""];
            !i && v(o) && (i = h.serialize["application/json"]), i && (n = i(n))
        }
        for (var a in this.header) null !== this.header[a] && Object.prototype.hasOwnProperty.call(this.header, a) && e.setRequestHeader(a, this.header[a]);
        this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 === n ? null : n)
    }, h.agent = function() {
        return new l
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach((function(t) {
        l.prototype[t.toLowerCase()] = function(e, n) {
            var r = new h.Request(t, e);
            return this._setDefaults(r), n && r.end(n), r
        }
    })), l.prototype.del = l.prototype.delete, h.get = function(t, e, n) {
        var r = h("GET", t);
        return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
    }, h.head = function(t, e, n) {
        var r = h("HEAD", t);
        return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
    }, h.options = function(t, e, n) {
        var r = h("OPTIONS", t);
        return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, h.del = b, h.delete = b, h.patch = function(t, e, n) {
        var r = h("PATCH", t);
        return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, h.post = function(t, e, n) {
        var r = h("POST", t);
        return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, h.put = function(t, e, n) {
        var r = h("PUT", t);
        return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }
}, function(t, e, n) {
    var r, o;
    ! function(i, a, s) {
        "use strict";
        "undefined" != typeof window && n(29) ? void 0 === (o = "function" == typeof(r = s) ? r.call(e, n, e, t) : r) || (t.exports = o) : t.exports ? t.exports = s() : a.exports ? a.exports = s() : a.Fingerprint2 = s()
    }(0, this, (function() {
        "use strict";
        void 0 === Array.isArray && (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        });
        var t = function(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            e = function(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            n = function(t, e) {
                return 32 === (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
            },
            r = function(t, e) {
                return 0 === (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
            },
            o = function(t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]]
            },
            i = function(t) {
                return t = o(t, [0, t[0] >>> 1]), t = e(t, [4283543511, 3981806797]), t = o(t, [0, t[0] >>> 1]), t = e(t, [3301882366, 444984403]), t = o(t, [0, t[0] >>> 1])
            },
            a = function(a, s) {
                s = s || 0;
                for (var u = (a = a || "").length % 16, c = a.length - u, l = [0, s], d = [0, s], h = [0, 0], f = [0, 0], p = [2277735313, 289559509], m = [1291169091, 658871167], y = 0; y < c; y += 16) h = [255 & a.charCodeAt(y + 4) | (255 & a.charCodeAt(y + 5)) << 8 | (255 & a.charCodeAt(y + 6)) << 16 | (255 & a.charCodeAt(y + 7)) << 24, 255 & a.charCodeAt(y) | (255 & a.charCodeAt(y + 1)) << 8 | (255 & a.charCodeAt(y + 2)) << 16 | (255 & a.charCodeAt(y + 3)) << 24], f = [255 & a.charCodeAt(y + 12) | (255 & a.charCodeAt(y + 13)) << 8 | (255 & a.charCodeAt(y + 14)) << 16 | (255 & a.charCodeAt(y + 15)) << 24, 255 & a.charCodeAt(y + 8) | (255 & a.charCodeAt(y + 9)) << 8 | (255 & a.charCodeAt(y + 10)) << 16 | (255 & a.charCodeAt(y + 11)) << 24], h = e(h, p), h = n(h, 31), h = e(h, m), l = o(l, h), l = n(l, 27), l = t(l, d), l = t(e(l, [0, 5]), [0, 1390208809]), f = e(f, m), f = n(f, 33), f = e(f, p), d = o(d, f), d = n(d, 31), d = t(d, l), d = t(e(d, [0, 5]), [0, 944331445]);
                switch (h = [0, 0], f = [0, 0], u) {
                    case 15:
                        f = o(f, r([0, a.charCodeAt(y + 14)], 48));
                    case 14:
                        f = o(f, r([0, a.charCodeAt(y + 13)], 40));
                    case 13:
                        f = o(f, r([0, a.charCodeAt(y + 12)], 32));
                    case 12:
                        f = o(f, r([0, a.charCodeAt(y + 11)], 24));
                    case 11:
                        f = o(f, r([0, a.charCodeAt(y + 10)], 16));
                    case 10:
                        f = o(f, r([0, a.charCodeAt(y + 9)], 8));
                    case 9:
                        f = o(f, [0, a.charCodeAt(y + 8)]), f = e(f, m), f = n(f, 33), f = e(f, p), d = o(d, f);
                    case 8:
                        h = o(h, r([0, a.charCodeAt(y + 7)], 56));
                    case 7:
                        h = o(h, r([0, a.charCodeAt(y + 6)], 48));
                    case 6:
                        h = o(h, r([0, a.charCodeAt(y + 5)], 40));
                    case 5:
                        h = o(h, r([0, a.charCodeAt(y + 4)], 32));
                    case 4:
                        h = o(h, r([0, a.charCodeAt(y + 3)], 24));
                    case 3:
                        h = o(h, r([0, a.charCodeAt(y + 2)], 16));
                    case 2:
                        h = o(h, r([0, a.charCodeAt(y + 1)], 8));
                    case 1:
                        h = o(h, [0, a.charCodeAt(y)]), h = e(h, p), h = n(h, 31), h = e(h, m), l = o(l, h)
                }
                return l = o(l, [0, a.length]), d = o(d, [0, a.length]), l = t(l, d), d = t(d, l), l = i(l), d = i(d), l = t(l, d), d = t(d, l), ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
            },
            s = {
                preprocessor: null,
                audio: {
                    timeout: 1e3,
                    excludeIOS11: !0
                },
                fonts: {
                    swfContainerId: "fingerprintjs2",
                    swfPath: "flash/compiled/FontList.swf",
                    userDefinedFonts: [],
                    extendedJsFonts: !1
                },
                screen: {
                    detectScreenOrientation: !0
                },
                plugins: {
                    sortPluginsFor: [/palemoon/i],
                    excludeIE: !1
                },
                extraComponents: [],
                excludes: {
                    enumerateDevices: !0,
                    pixelRatio: !0,
                    doNotTrack: !0,
                    fontsFlash: !0,
                    adBlock: !0
                },
                NOT_AVAILABLE: "not available",
                ERROR: "error",
                EXCLUDED: "excluded"
            },
            u = function(t, e) {
                if (Array.prototype.forEach && t.forEach === Array.prototype.forEach) t.forEach(e);
                else if (t.length === +t.length)
                    for (var n = 0, r = t.length; n < r; n++) e(t[n], n, t);
                else
                    for (var o in t) t.hasOwnProperty(o) && e(t[o], o, t)
            },
            c = function(t, e) {
                var n = [];
                return null == t ? n : Array.prototype.map && t.map === Array.prototype.map ? t.map(e) : (u(t, (function(t, r, o) {
                    n.push(e(t, r, o))
                })), n)
            },
            l = function() {
                return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
            },
            d = function(t) {
                var e = [window.screen.width, window.screen.height];
                return t.screen.detectScreenOrientation && e.sort().reverse(), e
            },
            h = function(t) {
                if (window.screen.availWidth && window.screen.availHeight) {
                    var e = [window.screen.availHeight, window.screen.availWidth];
                    return t.screen.detectScreenOrientation && e.sort().reverse(), e
                }
                return t.NOT_AVAILABLE
            },
            f = function(t) {
                if (null == navigator.plugins) return t.NOT_AVAILABLE;
                for (var e = [], n = 0, r = navigator.plugins.length; n < r; n++) navigator.plugins[n] && e.push(navigator.plugins[n]);
                return m(t) && (e = e.sort((function(t, e) {
                    return t.name > e.name ? 1 : t.name < e.name ? -1 : 0
                }))), c(e, (function(t) {
                    var e = c(t, (function(t) {
                        return [t.type, t.suffixes]
                    }));
                    return [t.name, t.description, e]
                }))
            },
            p = function(t) {
                var e = [];
                if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                    e = c(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(e) {
                        try {
                            return new window.ActiveXObject(e), e
                        } catch (e) {
                            return t.ERROR
                        }
                    }))
                } else e.push(t.NOT_AVAILABLE);
                return navigator.plugins && (e = e.concat(f(t))), e
            },
            m = function(t) {
                for (var e = !1, n = 0, r = t.plugins.sortPluginsFor.length; n < r; n++) {
                    var o = t.plugins.sortPluginsFor[n];
                    if (navigator.userAgent.match(o)) {
                        e = !0;
                        break
                    }
                }
                return e
            },
            y = function(t) {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return t.ERROR
                }
            },
            v = function(t) {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return t.ERROR
                }
            },
            g = function(t) {
                if (R()) return t.EXCLUDED;
                try {
                    return !!window.indexedDB
                } catch (e) {
                    return t.ERROR
                }
            },
            w = function(t) {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : t.NOT_AVAILABLE
            },
            b = function(t) {
                return navigator.cpuClass || t.NOT_AVAILABLE
            },
            T = function(t) {
                return navigator.platform ? navigator.platform : t.NOT_AVAILABLE
            },
            E = function(t) {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : t.NOT_AVAILABLE
            },
            O = function() {
                var t, e = 0;
                void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), t = !0
                } catch (e) {
                    t = !1
                }
                return [e, t, "ontouchstart" in window]
            },
            S = function(t) {
                var e = [],
                    n = document.createElement("canvas");
                n.width = 2e3, n.height = 200, n.style.display = "inline";
                var r = n.getContext("2d");
                return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", t.dontUseFakeFontInCanvas ? r.font = "11pt Arial" : r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), n.toDataURL && e.push("canvas fp:" + n.toDataURL()), e
            },
            A = function() {
                var t, e = function(e) {
                    return t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), "[" + e[0] + ", " + e[1] + "]"
                };
                if (!(t = U())) return null;
                var n = [],
                    r = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, r);
                var o = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                t.bufferData(t.ARRAY_BUFFER, o, t.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
                var i = t.createProgram(),
                    a = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), t.compileShader(a);
                var s = t.createShader(t.FRAGMENT_SHADER);
                t.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), t.compileShader(s), t.attachShader(i, a), t.attachShader(i, s), t.linkProgram(i), t.useProgram(i), i.vertexPosAttrib = t.getAttribLocation(i, "attrVertex"), i.offsetUniform = t.getUniformLocation(i, "uniformOffset"), t.enableVertexAttribArray(i.vertexPosArray), t.vertexAttribPointer(i.vertexPosAttrib, r.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(i.offsetUniform, 1, 1), t.drawArrays(t.TRIANGLE_STRIP, 0, r.numItems);
                try {
                    n.push(t.canvas.toDataURL())
                } catch (t) {}
                n.push("extensions:" + (t.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + e(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + e(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + t.getParameter(t.ALPHA_BITS)), n.push("webgl antialiasing:" + (t.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + t.getParameter(t.BLUE_BITS)), n.push("webgl depth bits:" + t.getParameter(t.DEPTH_BITS)), n.push("webgl green bits:" + t.getParameter(t.GREEN_BITS)), n.push("webgl max anisotropy:" + function(t) {
                    var e = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (e) {
                        var n = t.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return 0 === n && (n = 2), n
                    }
                    return null
                }(t)), n.push("webgl max combined texture image units:" + t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + t.getParameter(t.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + t.getParameter(t.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + t.getParameter(t.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + t.getParameter(t.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + e(t.getParameter(t.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + t.getParameter(t.RED_BITS)), n.push("webgl renderer:" + t.getParameter(t.RENDERER)), n.push("webgl shading language version:" + t.getParameter(t.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + t.getParameter(t.STENCIL_BITS)), n.push("webgl vendor:" + t.getParameter(t.VENDOR)), n.push("webgl version:" + t.getParameter(t.VERSION));
                try {
                    var c = t.getExtension("WEBGL_debug_renderer_info");
                    c && (n.push("webgl unmasked vendor:" + t.getParameter(c.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + t.getParameter(c.UNMASKED_RENDERER_WEBGL)))
                } catch (t) {}
                return t.getShaderPrecisionFormat ? (u(["FLOAT", "INT"], (function(e) {
                    u(["VERTEX", "FRAGMENT"], (function(r) {
                        u(["HIGH", "MEDIUM", "LOW"], (function(o) {
                            u(["precision", "rangeMin", "rangeMax"], (function(i) {
                                var a = t.getShaderPrecisionFormat(t[r + "_SHADER"], t[o + "_" + e])[i];
                                "precision" !== i && (i = "precision " + i);
                                var s = ["webgl ", r.toLowerCase(), " shader ", o.toLowerCase(), " ", e.toLowerCase(), " ", i, ":", a].join("");
                                n.push(s)
                            }))
                        }))
                    }))
                })), F(t), n) : (F(t), n)
            },
            C = function() {
                try {
                    var t = U(),
                        e = t.getExtension("WEBGL_debug_renderer_info"),
                        n = t.getParameter(e.UNMASKED_VENDOR_WEBGL) + "~" + t.getParameter(e.UNMASKED_RENDERER_WEBGL);
                    return F(t), n
                } catch (t) {
                    return null
                }
            },
            P = function() {
                var t = document.createElement("div");
                t.innerHTML = "&nbsp;", t.className = "adsbox";
                var e = !1;
                try {
                    document.body.appendChild(t), e = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(t)
                } catch (t) {
                    e = !1
                }
                return e
            },
            _ = function() {
                if (void 0 !== navigator.languages) try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                } catch (t) {
                    return !0
                }
                return !1
            },
            x = function() {
                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
            },
            I = function() {
                var t, e = navigator.userAgent.toLowerCase(),
                    n = navigator.oscpu,
                    r = navigator.platform.toLowerCase();
                if (t = e.indexOf("windows phone") >= 0 ? "Windows Phone" : e.indexOf("windows") >= 0 || e.indexOf("win16") >= 0 || e.indexOf("win32") >= 0 || e.indexOf("win64") >= 0 || e.indexOf("win95") >= 0 || e.indexOf("win98") >= 0 || e.indexOf("winnt") >= 0 || e.indexOf("wow64") >= 0 ? "Windows" : e.indexOf("android") >= 0 ? "Android" : e.indexOf("linux") >= 0 || e.indexOf("cros") >= 0 || e.indexOf("x11") >= 0 ? "Linux" : e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 || e.indexOf("ipod") >= 0 || e.indexOf("crios") >= 0 || e.indexOf("fxios") >= 0 ? "iOS" : e.indexOf("macintosh") >= 0 || e.indexOf("mac_powerpc)") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows" !== t && "Windows Phone" !== t && "Android" !== t && "iOS" !== t && "Other" !== t && -1 === e.indexOf("cros")) return !0;
                if (void 0 !== n) {
                    if ((n = n.toLowerCase()).indexOf("win") >= 0 && "Windows" !== t && "Windows Phone" !== t) return !0;
                    if (n.indexOf("linux") >= 0 && "Linux" !== t && "Android" !== t) return !0;
                    if (n.indexOf("mac") >= 0 && "Mac" !== t && "iOS" !== t) return !0;
                    if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === t)) return !0
                }
                return r.indexOf("win") >= 0 && "Windows" !== t && "Windows Phone" !== t || ((r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== t && "Android" !== t || ((r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== t && "iOS" !== t || !(r.indexOf("arm") >= 0 && "Windows Phone" === t) && (!(r.indexOf("pike") >= 0 && e.indexOf("opera mini") >= 0) && ((r.indexOf("win") < 0 && r.indexOf("linux") < 0 && r.indexOf("mac") < 0 && r.indexOf("iphone") < 0 && r.indexOf("ipad") < 0 && r.indexOf("ipod") < 0) !== ("Other" === t) || void 0 === navigator.plugins && "Windows" !== t && "Windows Phone" !== t))))
            },
            k = function() {
                var t, e = navigator.userAgent.toLowerCase(),
                    n = navigator.productSub;
                if (e.indexOf("edge/") >= 0 || e.indexOf("iemobile/") >= 0) return !1;
                if (e.indexOf("opera mini") >= 0) return !1;
                if (("Chrome" === (t = e.indexOf("firefox/") >= 0 ? "Firefox" : e.indexOf("opera/") >= 0 || e.indexOf(" opr/") >= 0 ? "Opera" : e.indexOf("chrome/") >= 0 ? "Chrome" : e.indexOf("safari/") >= 0 ? e.indexOf("android 1.") >= 0 || e.indexOf("android 2.") >= 0 || e.indexOf("android 3.") >= 0 || e.indexOf("android 4.") >= 0 ? "AOSP" : "Safari" : e.indexOf("trident/") >= 0 ? "Internet Explorer" : "Other") || "Safari" === t || "Opera" === t) && "20030107" !== n) return !0;
                var r, o = eval.toString().length;
                if (37 === o && "Safari" !== t && "Firefox" !== t && "Other" !== t) return !0;
                if (39 === o && "Internet Explorer" !== t && "Other" !== t) return !0;
                if (33 === o && "Chrome" !== t && "AOSP" !== t && "Opera" !== t && "Other" !== t) return !0;
                try {
                    throw "a"
                } catch (t) {
                    try {
                        t.toSource(), r = !0
                    } catch (t) {
                        r = !1
                    }
                }
                return r && "Firefox" !== t && "Other" !== t
            },
            B = function() {
                var t = document.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            },
            D = function() {
                if (!B()) return !1;
                var t = U(),
                    e = !!window.WebGLRenderingContext && !!t;
                return F(t), e
            },
            M = function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            },
            R = function() {
                return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2
            },
            L = function() {
                return void 0 !== window.swfobject
            },
            N = function() {
                return window.swfobject.hasFlashPlayerVersion("9.0.0")
            },
            j = function(t, e) {
                window.___fp_swf_loaded = function(e) {
                    t(e)
                };
                var n = e.fonts.swfContainerId;
                ! function(t) {
                    var e = document.createElement("div");
                    e.setAttribute("id", t.fonts.swfContainerId), document.body.appendChild(e)
                }();
                var r = {
                    onReady: "___fp_swf_loaded"
                };
                window.swfobject.embedSWF(e.fonts.swfPath, n, "1", "1", "9.0.0", !1, r, {
                    allowScriptAccess: "always",
                    menu: "false"
                }, {})
            },
            U = function() {
                var t = document.createElement("canvas"),
                    e = null;
                try {
                    e = t.getContext("webgl") || t.getContext("experimental-webgl")
                } catch (t) {}
                return e || (e = null), e
            },
            F = function(t) {
                var e = t.getExtension("WEBGL_lose_context");
                null != e && e.loseContext()
            },
            G = [{
                key: "userAgent",
                getData: function(t) {
                    t(navigator.userAgent)
                }
            }, {
                key: "webdriver",
                getData: function(t, e) {
                    t(null == navigator.webdriver ? e.NOT_AVAILABLE : navigator.webdriver)
                }
            }, {
                key: "language",
                getData: function(t, e) {
                    t(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || e.NOT_AVAILABLE)
                }
            }, {
                key: "colorDepth",
                getData: function(t, e) {
                    t(window.screen.colorDepth || e.NOT_AVAILABLE)
                }
            }, {
                key: "deviceMemory",
                getData: function(t, e) {
                    t(navigator.deviceMemory || e.NOT_AVAILABLE)
                }
            }, {
                key: "pixelRatio",
                getData: function(t, e) {
                    t(window.devicePixelRatio || e.NOT_AVAILABLE)
                }
            }, {
                key: "hardwareConcurrency",
                getData: function(t, e) {
                    t(w(e))
                }
            }, {
                key: "screenResolution",
                getData: function(t, e) {
                    t(d(e))
                }
            }, {
                key: "availableScreenResolution",
                getData: function(t, e) {
                    t(h(e))
                }
            }, {
                key: "timezoneOffset",
                getData: function(t) {
                    t((new Date).getTimezoneOffset())
                }
            }, {
                key: "timezone",
                getData: function(t, e) {
                    window.Intl && window.Intl.DateTimeFormat ? t((new window.Intl.DateTimeFormat).resolvedOptions().timeZone || e.NOT_AVAILABLE) : t(e.NOT_AVAILABLE)
                }
            }, {
                key: "sessionStorage",
                getData: function(t, e) {
                    t(y(e))
                }
            }, {
                key: "localStorage",
                getData: function(t, e) {
                    t(v(e))
                }
            }, {
                key: "indexedDb",
                getData: function(t, e) {
                    t(g(e))
                }
            }, {
                key: "addBehavior",
                getData: function(t) {
                    t(!!window.HTMLElement.prototype.addBehavior)
                }
            }, {
                key: "openDatabase",
                getData: function(t) {
                    t(!!window.openDatabase)
                }
            }, {
                key: "cpuClass",
                getData: function(t, e) {
                    t(b(e))
                }
            }, {
                key: "platform",
                getData: function(t, e) {
                    t(T(e))
                }
            }, {
                key: "doNotTrack",
                getData: function(t, e) {
                    t(E(e))
                }
            }, {
                key: "plugins",
                getData: function(t, e) {
                    M() ? e.plugins.excludeIE ? t(e.EXCLUDED) : t(p(e)) : t(f(e))
                }
            }, {
                key: "canvas",
                getData: function(t, e) {
                    B() ? t(S(e)) : t(e.NOT_AVAILABLE)
                }
            }, {
                key: "webgl",
                getData: function(t, e) {
                    D() ? t(A()) : t(e.NOT_AVAILABLE)
                }
            }, {
                key: "webglVendorAndRenderer",
                getData: function(t) {
                    D() ? t(C()) : t()
                }
            }, {
                key: "adBlock",
                getData: function(t) {
                    t(P())
                }
            }, {
                key: "hasLiedLanguages",
                getData: function(t) {
                    t(_())
                }
            }, {
                key: "hasLiedResolution",
                getData: function(t) {
                    t(x())
                }
            }, {
                key: "hasLiedOs",
                getData: function(t) {
                    t(I())
                }
            }, {
                key: "hasLiedBrowser",
                getData: function(t) {
                    t(k())
                }
            }, {
                key: "touchSupport",
                getData: function(t) {
                    t(O())
                }
            }, {
                key: "fonts",
                getData: function(t, e) {
                    var n = ["monospace", "sans-serif", "serif"],
                        r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                    if (e.fonts.extendedJsFonts) {
                        r = r.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
                    }
                    r = (r = r.concat(e.fonts.userDefinedFonts)).filter((function(t, e) {
                        return r.indexOf(t) === e
                    }));
                    var o = document.getElementsByTagName("body")[0],
                        i = document.createElement("div"),
                        a = document.createElement("div"),
                        s = {},
                        u = {},
                        c = function() {
                            var t = document.createElement("span");
                            return t.style.position = "absolute", t.style.left = "-9999px", t.style.fontSize = "72px", t.style.fontStyle = "normal", t.style.fontWeight = "normal", t.style.letterSpacing = "normal", t.style.lineBreak = "auto", t.style.lineHeight = "normal", t.style.textTransform = "none", t.style.textAlign = "left", t.style.textDecoration = "none", t.style.textShadow = "none", t.style.whiteSpace = "normal", t.style.wordBreak = "normal", t.style.wordSpacing = "normal", t.innerHTML = "mmmmmmmmmmlli", t
                        },
                        l = function(t, e) {
                            var n = c();
                            return n.style.fontFamily = "'" + t + "'," + e, n
                        },
                        d = function(t) {
                            for (var e = !1, r = 0; r < n.length; r++)
                                if (e = t[r].offsetWidth !== s[n[r]] || t[r].offsetHeight !== u[n[r]]) return e;
                            return e
                        },
                        h = function() {
                            for (var t = [], e = 0, r = n.length; e < r; e++) {
                                var o = c();
                                o.style.fontFamily = n[e], i.appendChild(o), t.push(o)
                            }
                            return t
                        }();
                    o.appendChild(i);
                    for (var f = 0, p = n.length; f < p; f++) s[n[f]] = h[f].offsetWidth, u[n[f]] = h[f].offsetHeight;
                    var m = function() {
                        for (var t = {}, e = 0, o = r.length; e < o; e++) {
                            for (var i = [], s = 0, u = n.length; s < u; s++) {
                                var c = l(r[e], n[s]);
                                a.appendChild(c), i.push(c)
                            }
                            t[r[e]] = i
                        }
                        return t
                    }();
                    o.appendChild(a);
                    for (var y = [], v = 0, g = r.length; v < g; v++) d(m[r[v]]) && y.push(r[v]);
                    o.removeChild(a), o.removeChild(i), t(y)
                },
                pauseBefore: !0
            }, {
                key: "fontsFlash",
                getData: function(t, e) {
                    return L() ? N() ? e.fonts.swfPath ? void j((function(e) {
                        t(e)
                    }), e) : t("missing options.fonts.swfPath") : t("flash not installed") : t("swf object not loaded")
                },
                pauseBefore: !0
            }, {
                key: "audio",
                getData: function(t, e) {
                    var n = e.audio;
                    if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return t(e.EXCLUDED);
                    var r = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    if (null == r) return t(e.NOT_AVAILABLE);
                    var o = new r(1, 44100, 44100),
                        i = o.createOscillator();
                    i.type = "triangle", i.frequency.setValueAtTime(1e4, o.currentTime);
                    var a = o.createDynamicsCompressor();
                    u([
                        ["threshold", -50],
                        ["knee", 40],
                        ["ratio", 12],
                        ["reduction", -20],
                        ["attack", 0],
                        ["release", .25]
                    ], (function(t) {
                        void 0 !== a[t[0]] && "function" == typeof a[t[0]].setValueAtTime && a[t[0]].setValueAtTime(t[1], o.currentTime)
                    })), i.connect(a), a.connect(o.destination), i.start(0), o.startRendering();
                    var s = setTimeout((function() {
                        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".'), o.oncomplete = function() {}, o = null, t("audioTimeout")
                    }), n.timeout);
                    o.oncomplete = function(e) {
                        var n;
                        try {
                            clearTimeout(s), n = e.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(t, e) {
                                return t + Math.abs(e)
                            }), 0).toString(), i.disconnect(), a.disconnect()
                        } catch (e) {
                            return void t(e)
                        }
                        t(n)
                    }
                }
            }, {
                key: "enumerateDevices",
                getData: function(t, e) {
                    if (!l()) return t(e.NOT_AVAILABLE);
                    navigator.mediaDevices.enumerateDevices().then((function(e) {
                        t(e.map((function(t) {
                            return "id=" + t.deviceId + ";gid=" + t.groupId + ";" + t.kind + ";" + t.label
                        })))
                    })).catch((function(e) {
                        t(e)
                    }))
                }
            }],
            H = function(t) {
                throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")
            };
        return H.get = function(t, e) {
            e ? t || (t = {}) : (e = t, t = {}),
                function(t, e) {
                    if (null == e) return t;
                    var n, r;
                    for (r in e) null == (n = e[r]) || Object.prototype.hasOwnProperty.call(t, r) || (t[r] = n)
                }(t, s), t.components = t.extraComponents.concat(G);
            var n = {
                    data: [],
                    addPreprocessedComponent: function(e, r) {
                        "function" == typeof t.preprocessor && (r = t.preprocessor(e, r)), n.data.push({
                            key: e,
                            value: r
                        })
                    }
                },
                r = -1,
                o = function(i) {
                    if ((r += 1) >= t.components.length) e(n.data);
                    else {
                        var a = t.components[r];
                        if (t.excludes[a.key]) o(!1);
                        else {
                            if (!i && a.pauseBefore) return r -= 1, void setTimeout((function() {
                                o(!0)
                            }), 1);
                            try {
                                a.getData((function(t) {
                                    n.addPreprocessedComponent(a.key, t), o(!1)
                                }), t)
                            } catch (t) {
                                n.addPreprocessedComponent(a.key, String(t)), o(!1)
                            }
                        }
                    }
                };
            o(!1)
        }, H.getPromise = function(t) {
            return new Promise((function(e, n) {
                H.get(t, e)
            }))
        }, H.getV18 = function(t, e) {
            return null == e && (e = t, t = {}), H.get(t, (function(n) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var i = n[o];
                    if (i.value === (t.NOT_AVAILABLE || "not available")) r.push({
                        key: i.key,
                        value: "unknown"
                    });
                    else if ("plugins" === i.key) r.push({
                        key: "plugins",
                        value: c(i.value, (function(t) {
                            var e = c(t[2], (function(t) {
                                return t.join ? t.join("~") : t
                            })).join(",");
                            return [t[0], t[1], e].join("::")
                        }))
                    });
                    else if (-1 !== ["canvas", "webgl"].indexOf(i.key) && Array.isArray(i.value)) r.push({
                        key: i.key,
                        value: i.value.join("~")
                    });
                    else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)) {
                        if (!i.value) continue;
                        r.push({
                            key: i.key,
                            value: 1
                        })
                    } else i.value ? r.push(i.value.join ? {
                        key: i.key,
                        value: i.value.join(";")
                    } : i) : r.push({
                        key: i.key,
                        value: i.value
                    })
                }
                var s = a(c(r, (function(t) {
                    return t.value
                })).join("~~~"), 31);
                e(s, r)
            }))
        }, H.x64hash128 = a, H.VERSION = "2.1.4", H
    }))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", (function() {
            return V
        })), n.d(e, "b", (function() {
            return Ft
        }));
        var r = Object.freeze({
            __proto__: null,
            get start() {
                return Ft
            },
            get ensureJQuerySupport() {
                return pt
            },
            get setBootstrapMaxTime() {
                return K
            },
            get setMountMaxTime() {
                return $
            },
            get setUnmountMaxTime() {
                return J
            },
            get setUnloadMaxTime() {
                return Q
            },
            get registerApplication() {
                return Ct
            },
            get unregisterApplication() {
                return _t
            },
            get getMountedApps() {
                return Ot
            },
            get getAppStatus() {
                return At
            },
            get unloadApplication() {
                return xt
            },
            get checkActivityFunctions() {
                return Pt
            },
            get getAppNames() {
                return St
            },
            get pathToActiveWhen() {
                return Bt
            },
            get navigateToUrl() {
                return it
            },
            get triggerAppChange() {
                return Lt
            },
            get addErrorHandler() {
                return l
            },
            get removeErrorHandler() {
                return d
            },
            get mountRootParcel() {
                return V
            },
            get NOT_LOADED() {
                return p
            },
            get LOADING_SOURCE_CODE() {
                return m
            },
            get NOT_BOOTSTRAPPED() {
                return y
            },
            get BOOTSTRAPPING() {
                return v
            },
            get NOT_MOUNTED() {
                return g
            },
            get MOUNTING() {
                return w
            },
            get UPDATING() {
                return T
            },
            get LOAD_ERROR() {
                return S
            },
            get MOUNTED() {
                return b
            },
            get UNLOADING() {
                return O
            },
            get UNMOUNTING() {
                return E
            },
            get SKIP_BECAUSE_BROKEN() {
                return A
            }
        });

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).CustomEvent,
            s = function() {
                try {
                    var t = new a("cat", {
                        detail: {
                            foo: "bar"
                        }
                    });
                    return "cat" === t.type && "bar" === t.detail.foo
                } catch (t) {}
                return !1
            }() ? a : "undefined" != typeof document && "function" == typeof document.createEvent ? function(t, e) {
                var n = document.createEvent("CustomEvent");
                return e ? n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail) : n.initCustomEvent(t, !1, !1, void 0), n
            } : function(t, e) {
                var n = document.createEventObject();
                return n.type = t, e ? (n.bubbles = Boolean(e.bubbles), n.cancelable = Boolean(e.cancelable), n.detail = e.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n
            },
            u = [];

        function c(t, e, n) {
            var r = f(t, e, n);
            u.length ? u.forEach((function(t) {
                return t(r)
            })) : setTimeout((function() {
                throw r
            }))
        }

        function l(t) {
            if ("function" != typeof t) throw Error(h(28, !1));
            u.push(t)
        }

        function d(t) {
            if ("function" != typeof t) throw Error(h(29, !1));
            var e = !1;
            return u = u.filter((function(n) {
                var r = n === t;
                return e = e || r, !r
            })), e
        }

        function h(t, e) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
            return "single-spa minified message #".concat(t, ": ").concat(e ? e + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(r.length ? "&arg=".concat(r.join("&arg=")) : "")
        }

        function f(t, e, n) {
            var r, o = "".concat(I(e), " '").concat(_(e), "' died in status ").concat(e.status, ": ");
            if (t instanceof Error) {
                try {
                    t.message = o + t.message
                } catch (t) {}
                r = t
            } else {
                console.warn(h(30, !1, e.status, _(e)));
                try {
                    r = Error(o + JSON.stringify(t))
                } catch (e) {
                    r = t
                }
            }
            return r.appOrParcelName = _(e), e.status = n, r
        }
        var p = "NOT_LOADED",
            m = "LOADING_SOURCE_CODE",
            y = "NOT_BOOTSTRAPPED",
            v = "BOOTSTRAPPING",
            g = "NOT_MOUNTED",
            w = "MOUNTING",
            b = "MOUNTED",
            T = "UPDATING",
            E = "UNMOUNTING",
            O = "UNLOADING",
            S = "LOAD_ERROR",
            A = "SKIP_BECAUSE_BROKEN";

        function C(t) {
            return t.status === b
        }

        function P(t) {
            try {
                return t.activeWhen(window.location)
            } catch (e) {
                return c(e, t, A), !1
            }
        }

        function _(t) {
            return t.name
        }

        function x(t) {
            return Boolean(t.unmountThisParcel)
        }

        function I(t) {
            return x(t) ? "parcel" : "application"
        }

        function k() {
            for (var t = arguments.length - 1; t > 0; t--)
                for (var e in arguments[t]) "__proto__" !== e && (arguments[t - 1][e] = arguments[t][e]);
            return arguments[0]
        }

        function B(t, e) {
            for (var n = 0; n < t.length; n++)
                if (e(t[n])) return t[n];
            return null
        }

        function D(t) {
            return t && ("function" == typeof t || (e = t, Array.isArray(e) && !B(e, (function(t) {
                return "function" != typeof t
            }))));
            var e
        }

        function M(t, e) {
            var n = t[e] || [];
            0 === (n = Array.isArray(n) ? n : [n]).length && (n = [function() {
                return Promise.resolve()
            }]);
            var r = I(t),
                o = _(t);
            return function(t) {
                return n.reduce((function(n, i, a) {
                    return n.then((function() {
                        var n = i(t);
                        return R(n) ? n : Promise.reject(h(15, !1, r, o, e, a))
                    }))
                }), Promise.resolve())
            }
        }

        function R(t) {
            return t && "function" == typeof t.then && "function" == typeof t.catch
        }

        function L(t, e) {
            return Promise.resolve().then((function() {
                return t.status !== y ? t : (t.status = v, t.bootstrap ? Z(t, "bootstrap").then(n).catch((function(n) {
                    if (e) throw f(n, t, A);
                    return c(n, t, A), t
                })) : Promise.resolve().then(n))
            }));

            function n() {
                return t.status = g, t
            }
        }

        function N(t, e) {
            return Promise.resolve().then((function() {
                if (t.status !== b) return t;
                t.status = E;
                var n = Object.keys(t.parcels).map((function(e) {
                    return t.parcels[e].unmountThisParcel()
                }));
                return Promise.all(n).then(r, (function(n) {
                    return r().then((function() {
                        var r = Error(n.message);
                        if (e) throw f(r, t, A);
                        c(r, t, A)
                    }))
                })).then((function() {
                    return t
                }));

                function r() {
                    return Z(t, "unmount").then((function() {
                        t.status = g
                    })).catch((function(n) {
                        if (e) throw f(n, t, A);
                        c(n, t, A)
                    }))
                }
            }))
        }
        var j = !1,
            U = !1;

        function F(t, e) {
            return Promise.resolve().then((function() {
                return t.status !== g ? t : (j || (window.dispatchEvent(new s("single-spa:before-first-mount")), j = !0), Z(t, "mount").then((function() {
                    return t.status = b, U || (window.dispatchEvent(new s("single-spa:first-mount")), U = !0), t
                })).catch((function(n) {
                    return t.status = b, N(t, !0).then(r, r);

                    function r() {
                        if (e) throw f(n, t, A);
                        return c(n, t, A), t
                    }
                })))
            }))
        }
        var G = 0,
            H = {
                parcels: {}
            };

        function V() {
            return W.apply(H, arguments)
        }

        function W(t, e) {
            var n = this;
            if (!t || "object" !== o(t) && "function" != typeof t) throw Error(h(2, !1));
            if (t.name && "string" != typeof t.name) throw Error(h(3, !1, o(t.name)));
            if ("object" !== o(e)) throw Error(h(4, !1, name, o(e)));
            if (!e.domElement) throw Error(h(5, !1, name));
            var r, i = G++,
                a = "function" == typeof t,
                s = a ? t : function() {
                    return Promise.resolve(t)
                },
                u = {
                    id: i,
                    parcels: {},
                    status: a ? m : y,
                    customProps: e,
                    parentName: _(n),
                    unmountThisParcel: function() {
                        return v.then((function() {
                            if (u.status !== b) throw Error(h(6, !1, name, u.status));
                            return N(u, !0)
                        })).then((function(t) {
                            return u.parentName && delete n.parcels[u.id], t
                        })).then((function(t) {
                            return l(t), t
                        })).catch((function(t) {
                            throw u.status = A, d(t), t
                        }))
                    }
                };
            n.parcels[i] = u;
            var c = s();
            if (!c || "function" != typeof c.then) throw Error(h(7, !1));
            var l, d, p = (c = c.then((function(t) {
                    if (!t) throw Error(h(8, !1));
                    var e = t.name || "parcel-".concat(i);
                    if (Object.prototype.hasOwnProperty.call(t, "bootstrap") && !D(t.bootstrap)) throw Error(h(9, !1, e));
                    if (!D(t.mount)) throw Error(h(10, !1, e));
                    if (!D(t.unmount)) throw Error(h(11, !1, e));
                    if (t.update && !D(t.update)) throw Error(h(12, !1, e));
                    var n = M(t, "bootstrap"),
                        o = M(t, "mount"),
                        a = M(t, "unmount");
                    u.status = y, u.name = e, u.bootstrap = n, u.mount = o, u.unmount = a, u.timeouts = Y(t.timeouts), t.update && (u.update = M(t, "update"), r.update = function(t) {
                        return u.customProps = t, z(function(t) {
                            return Promise.resolve().then((function() {
                                if (t.status !== b) throw Error(h(32, !1, _(t)));
                                return t.status = T, Z(t, "update").then((function() {
                                    return t.status = b, t
                                })).catch((function(e) {
                                    throw f(e, t, A)
                                }))
                            }))
                        }(u))
                    })
                }))).then((function() {
                    return L(u, !0)
                })),
                v = p.then((function() {
                    return F(u, !0)
                })),
                w = new Promise((function(t, e) {
                    l = t, d = e
                }));
            return r = {
                mount: function() {
                    return z(Promise.resolve().then((function() {
                        if (u.status !== g) throw Error(h(13, !1, name, u.status));
                        return n.parcels[i] = u, F(u)
                    })))
                },
                unmount: function() {
                    return z(u.unmountThisParcel())
                },
                getStatus: function() {
                    return u.status
                },
                loadPromise: z(c),
                bootstrapPromise: z(p),
                mountPromise: z(v),
                unmountPromise: z(w)
            }
        }

        function z(t) {
            return t.then((function() {
                return null
            }))
        }

        function q(t) {
            var e = _(t),
                n = "function" == typeof t.customProps ? t.customProps(e, window.location) : t.customProps;
            ("object" !== o(n) || null === n || Array.isArray(n)) && (n = {}, console.warn(h(40, !1), e, n));
            var i = k({}, n, {
                name: e,
                mountParcel: W.bind(t),
                singleSpa: r
            });
            return x(t) && (i.unmountSelf = t.unmountThisParcel), i
        }
        var X = {
            bootstrap: {
                millis: 4e3,
                dieOnTimeout: !1,
                warningMillis: 1e3
            },
            mount: {
                millis: 3e3,
                dieOnTimeout: !1,
                warningMillis: 1e3
            },
            unmount: {
                millis: 3e3,
                dieOnTimeout: !1,
                warningMillis: 1e3
            },
            unload: {
                millis: 3e3,
                dieOnTimeout: !1,
                warningMillis: 1e3
            },
            update: {
                millis: 3e3,
                dieOnTimeout: !1,
                warningMillis: 1e3
            }
        };

        function K(t, e, n) {
            if ("number" != typeof t || t <= 0) throw Error(h(16, !1));
            X.bootstrap = {
                millis: t,
                dieOnTimeout: e,
                warningMillis: n || 1e3
            }
        }

        function $(t, e, n) {
            if ("number" != typeof t || t <= 0) throw Error(h(17, !1));
            X.mount = {
                millis: t,
                dieOnTimeout: e,
                warningMillis: n || 1e3
            }
        }

        function J(t, e, n) {
            if ("number" != typeof t || t <= 0) throw Error(h(18, !1));
            X.unmount = {
                millis: t,
                dieOnTimeout: e,
                warningMillis: n || 1e3
            }
        }

        function Q(t, e, n) {
            if ("number" != typeof t || t <= 0) throw Error(h(19, !1));
            X.unload = {
                millis: t,
                dieOnTimeout: e,
                warningMillis: n || 1e3
            }
        }

        function Z(t, e) {
            var n = t.timeouts[e],
                r = n.warningMillis,
                o = I(t);
            return new Promise((function(i, a) {
                var s = !1,
                    u = !1;
                t[e](q(t)).then((function(t) {
                    s = !0, i(t)
                })).catch((function(t) {
                    s = !0, a(t)
                })), setTimeout((function() {
                    return l(1)
                }), r), setTimeout((function() {
                    return l(!0)
                }), n.millis);
                var c = h(31, !1, e, o, _(t), n.millis);

                function l(t) {
                    if (!s)
                        if (!0 === t) u = !0, n.dieOnTimeout ? a(Error(c)) : console.error(c);
                        else if (!u) {
                        var e = t,
                            o = e * r;
                        console.warn(c), o + r < n.millis && setTimeout((function() {
                            return l(e + 1)
                        }), r)
                    }
                }
            }))
        }

        function Y(t) {
            var e = {};
            for (var n in X) e[n] = k({}, X[n], t && t[n] || {});
            return e
        }

        function tt(t) {
            return Promise.resolve().then((function() {
                return t.loadPromise ? t.loadPromise : t.status !== p && t.status !== S ? t : (t.status = m, t.loadPromise = Promise.resolve().then((function() {
                    var r = t.loadApp(q(t));
                    if (!R(r)) throw n = !0, Error(h(33, !1, _(t)));
                    return r.then((function(n) {
                        var r;
                        t.loadErrorTime = null, "object" !== o(e = n) && (r = 34), Object.prototype.hasOwnProperty.call(e, "bootstrap") && !D(e.bootstrap) && (r = 35), D(e.mount) || (r = 36), D(e.unmount) || (r = 37);
                        var i = I(e);
                        if (r) {
                            var a;
                            try {
                                a = JSON.stringify(e)
                            } catch (t) {}
                            return console.error(h(r, !1, i, _(t), a), e), c(void 0, t, A), t
                        }
                        return e.devtools && e.devtools.overlays && (t.devtools.overlays = k({}, t.devtools.overlays, e.devtools.overlays)), t.status = y, t.bootstrap = M(e, "bootstrap"), t.mount = M(e, "mount"), t.unmount = M(e, "unmount"), t.unload = M(e, "unload"), t.timeouts = Y(e.timeouts), delete t.loadPromise, t
                    }))
                })).catch((function(e) {
                    var r;
                    return delete t.loadPromise, n ? r = A : (r = S, t.loadErrorTime = (new Date).getTime()), c(e, t, r), t
                })));
                var e, n
            }))
        }
        var et, nt = "undefined" != typeof window,
            rt = {
                hashchange: [],
                popstate: []
            },
            ot = ["hashchange", "popstate"];

        function it(t) {
            var e;
            if ("string" == typeof t) e = t;
            else if (this && this.href) e = this.href;
            else {
                if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(h(14, !1));
                e = t.currentTarget.href, t.preventDefault()
            }
            var n = ht(window.location.href),
                r = ht(e);
            0 === e.indexOf("#") ? window.location.hash = r.hash : n.host !== r.host && r.host ? window.location.href = e : r.pathname === n.pathname && r.search === n.search ? window.location.hash = r.hash : window.history.pushState(null, null, e)
        }

        function at(t) {
            var e = this;
            if (t) {
                var n = t[0].type;
                ot.indexOf(n) >= 0 && rt[n].forEach((function(n) {
                    try {
                        n.apply(e, t)
                    } catch (t) {
                        setTimeout((function() {
                            throw t
                        }))
                    }
                }))
            }
        }

        function st() {
            Nt([], arguments)
        }

        function ut(t, e) {
            return function() {
                var n = window.location.href,
                    r = t.apply(this, arguments),
                    o = window.location.href;
                return et && n === o || (Gt() ? window.dispatchEvent(ct(window.history.state, e)) : Nt([])), r
            }
        }

        function ct(t, e) {
            var n;
            try {
                n = new PopStateEvent("popstate", {
                    state: t
                })
            } catch (e) {
                (n = document.createEvent("PopStateEvent")).initPopStateEvent("popstate", !1, !1, t)
            }
            return n.singleSpa = !0, n.singleSpaTrigger = e, n
        }
        if (nt) {
            window.addEventListener("hashchange", st), window.addEventListener("popstate", st);
            var lt = window.addEventListener,
                dt = window.removeEventListener;
            window.addEventListener = function(t, e) {
                if (!("function" == typeof e && ot.indexOf(t) >= 0) || B(rt[t], (function(t) {
                        return t === e
                    }))) return lt.apply(this, arguments);
                rt[t].push(e)
            }, window.removeEventListener = function(t, e) {
                if (!("function" == typeof e && ot.indexOf(t) >= 0)) return dt.apply(this, arguments);
                rt[t] = rt[t].filter((function(t) {
                    return t !== e
                }))
            }, window.history.pushState = ut(window.history.pushState, "pushState"), window.history.replaceState = ut(window.history.replaceState, "replaceState"), window.singleSpaNavigate ? console.warn(h(41, !1)) : window.singleSpaNavigate = it
        }

        function ht(t) {
            var e = document.createElement("a");
            return e.href = t, e
        }
        var ft = !1;

        function pt() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;
            if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !ft) {
                var e = t.fn.on,
                    n = t.fn.off;
                t.fn.on = function(t, n) {
                    return mt.call(this, e, window.addEventListener, t, n, arguments)
                }, t.fn.off = function(t, e) {
                    return mt.call(this, n, window.removeEventListener, t, e, arguments)
                }, ft = !0
            }
        }

        function mt(t, e, n, r, o) {
            return "string" != typeof n ? t.apply(this, o) : (n.split(/\s+/).forEach((function(t) {
                ot.indexOf(t) >= 0 && (e(t, r), n = n.replace(t, ""))
            })), "" === n.trim() ? this : t.apply(this, o))
        }
        var yt = {};

        function vt(t) {
            return Promise.resolve().then((function() {
                var e = yt[_(t)];
                if (!e) return t;
                if (t.status === p) return gt(t, e), t;
                if (t.status === O) return e.promise.then((function() {
                    return t
                }));
                if (t.status !== g && t.status !== S) return t;
                var n = t.status === S ? Promise.resolve() : Z(t, "unload");
                return t.status = O, n.then((function() {
                    return gt(t, e), t
                })).catch((function(n) {
                    return function(t, e, n) {
                        delete yt[_(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, c(n, t, A), e.reject(n)
                    }(t, e, n), t
                }))
            }))
        }

        function gt(t, e) {
            delete yt[_(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = p, e.resolve()
        }

        function wt(t, e, n, r) {
            yt[_(t)] = {
                app: t,
                resolve: n,
                reject: r
            }, Object.defineProperty(yt[_(t)], "promise", {
                get: e
            })
        }

        function bt(t) {
            return yt[t]
        }
        var Tt = [];

        function Et() {
            var t = [],
                e = [],
                n = [],
                r = [],
                o = (new Date).getTime();
            return Tt.forEach((function(i) {
                var a = i.status !== A && P(i);
                switch (i.status) {
                    case S:
                        a && o - i.loadErrorTime >= 200 && n.push(i);
                        break;
                    case p:
                    case m:
                        a && n.push(i);
                        break;
                    case y:
                    case g:
                        !a && bt(_(i)) ? t.push(i) : a && r.push(i);
                        break;
                    case b:
                        a || e.push(i)
                }
            })), {
                appsToUnload: t,
                appsToUnmount: e,
                appsToLoad: n,
                appsToMount: r
            }
        }

        function Ot() {
            return Tt.filter(C).map(_)
        }

        function St() {
            return Tt.map(_)
        }

        function At(t) {
            var e = B(Tt, (function(e) {
                return _(e) === t
            }));
            return e ? e.status : null
        }

        function Ct(t, e, n, r) {
            var i = function(t, e, n, r) {
                var i, a = {
                    name: null,
                    loadApp: null,
                    activeWhen: null,
                    customProps: null
                };
                return "object" === o(t) ? (function(t) {
                    if (Array.isArray(t) || null === t) throw Error(h(39, !1));
                    var e = ["name", "app", "activeWhen", "customProps"],
                        n = Object.keys(t).reduce((function(t, n) {
                            return e.indexOf(n) >= 0 ? t : t.concat(n)
                        }), []);
                    if (0 !== n.length) throw Error(h(38, !1, e.join(", "), n.join(", ")));
                    if ("string" != typeof t.name || 0 === t.name.length) throw Error(h(20, !1));
                    if ("object" !== o(t.app) && "function" != typeof t.app) throw Error(h(20, !1));
                    var r = function(t) {
                        return "string" == typeof t || "function" == typeof t
                    };
                    if (!(r(t.activeWhen) || Array.isArray(t.activeWhen) && t.activeWhen.every(r))) throw Error(h(24, !1));
                    if (!kt(t.customProps)) throw Error(h(22, !1))
                }(t), a.name = t.name, a.loadApp = t.app, a.activeWhen = t.activeWhen, a.customProps = t.customProps) : (function(t, e, n, r) {
                    if ("string" != typeof t || 0 === t.length) throw Error(h(20, !1));
                    if (!e) throw Error(h(23, !1));
                    if ("function" != typeof n) throw Error(h(24, !1));
                    if (!kt(r)) throw Error(h(22, !1))
                }(t, e, n, r), a.name = t, a.loadApp = e, a.activeWhen = n, a.customProps = r), a.loadApp = "function" != typeof(i = a.loadApp) ? function() {
                    return Promise.resolve(i)
                } : i, a.customProps = function(t) {
                    return t || {}
                }(a.customProps), a.activeWhen = function(t) {
                    var e = Array.isArray(t) ? t : [t];
                    return e = e.map((function(t) {
                            return "function" == typeof t ? t : Bt(t)
                        })),
                        function(t) {
                            return e.some((function(e) {
                                return e(t)
                            }))
                        }
                }(a.activeWhen), a
            }(t, e, n, r);
            if (-1 !== St().indexOf(i.name)) throw Error(h(21, !1, i.name));
            Tt.push(k({
                loadErrorTime: null,
                status: p,
                parcels: {},
                devtools: {
                    overlays: {
                        options: {},
                        selectors: []
                    }
                }
            }, i)), nt && (pt(), Nt())
        }

        function Pt() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location;
            return Tt.filter((function(e) {
                return e.activeWhen(t)
            })).map(_)
        }

        function _t(t) {
            if (0 === Tt.filter((function(e) {
                    return _(e) === t
                })).length) throw Error(h(25, !1, t));
            return xt(t).then((function() {
                var e = Tt.map(_).indexOf(t);
                Tt.splice(e, 1)
            }))
        }

        function xt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                waitForUnmount: !1
            };
            if ("string" != typeof t) throw Error(h(26, !1));
            var n = B(Tt, (function(e) {
                return _(e) === t
            }));
            if (!n) throw Error(h(27, !1, t));
            var r, o = bt(_(n));
            if (e && e.waitForUnmount) {
                if (o) return o.promise;
                var i = new Promise((function(t, e) {
                    wt(n, (function() {
                        return i
                    }), t, e)
                }));
                return i
            }
            return o ? (r = o.promise, It(n, o.resolve, o.reject)) : r = new Promise((function(t, e) {
                wt(n, (function() {
                    return r
                }), t, e), It(n, t, e)
            })), r
        }

        function It(t, e, n) {
            N(t).then(vt).then((function() {
                e(), setTimeout((function() {
                    Nt()
                }))
            })).catch(n)
        }

        function kt(t) {
            return !t || "function" == typeof t || "object" === o(t) && null !== t && !Array.isArray(t)
        }

        function Bt(t, e) {
            var n = function(t, e) {
                var n = 0,
                    r = !1,
                    o = "^";
                "/" !== t[0] && (t = "/" + t);
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    (!r && ":" === a || r && "/" === a) && s(i)
                }
                return s(t.length), new RegExp(o, "i");

                function s(i) {
                    var a = t.slice(n, i).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
                    if (o += r ? "[^/]+/?" : a, i === t.length)
                        if (r) e && (o += "$");
                        else {
                            var s = e ? "" : ".*";
                            o = "/" === o.charAt(o.length - 1) ? "".concat(o).concat(s, "$") : "".concat(o, "(/").concat(s, ")?(#.*)?$")
                        }
                    r = !r, n = i
                }
            }(t, e);
            return function(t) {
                var e = t.origin;
                e || (e = "".concat(t.protocol, "//").concat(t.host));
                var r = t.href.replace(e, "").replace(t.search, "").split("?")[0];
                return n.test(r)
            }
        }
        var Dt = !1,
            Mt = [],
            Rt = nt && window.location.href;

        function Lt() {
            return Nt()
        }

        function Nt() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = arguments.length > 1 ? arguments[1] : void 0;
            if (Dt) return new Promise((function(t, n) {
                Mt.push({
                    resolve: t,
                    reject: n,
                    eventArguments: e
                })
            }));
            var n, r = Et(),
                o = r.appsToUnload,
                a = r.appsToUnmount,
                u = r.appsToLoad,
                c = r.appsToMount,
                l = !1,
                d = Rt,
                h = Rt = window.location.href;
            return Gt() ? (Dt = !0, n = o.concat(u, a, c), y()) : (n = u, m());

            function f() {
                l = !0
            }

            function m() {
                return Promise.resolve().then((function() {
                    var t = u.map(tt);
                    return Promise.all(t).then(w).then((function() {
                        return []
                    })).catch((function(t) {
                        throw w(), t
                    }))
                }))
            }

            function y() {
                return Promise.resolve().then((function() {
                    if (window.dispatchEvent(new s(0 === n.length ? "single-spa:before-no-app-change" : "single-spa:before-app-change", T(!0))), window.dispatchEvent(new s("single-spa:before-routing-event", T(!0, {
                            cancelNavigation: f
                        }))), l) return window.dispatchEvent(new s("single-spa:before-mount-routing-event", T(!0))), v(), void it(d);
                    var e = o.map(vt),
                        r = a.map(N).map((function(t) {
                            return t.then(vt)
                        })).concat(e),
                        i = Promise.all(r);
                    i.then((function() {
                        window.dispatchEvent(new s("single-spa:before-mount-routing-event", T(!0)))
                    }));
                    var h = u.map((function(t) {
                            return tt(t).then((function(t) {
                                return jt(t, i)
                            }))
                        })),
                        p = c.filter((function(t) {
                            return u.indexOf(t) < 0
                        })).map((function(t) {
                            return jt(t, i)
                        }));
                    return i.catch((function(t) {
                        throw w(), t
                    })).then((function() {
                        return w(), Promise.all(h.concat(p)).catch((function(e) {
                            throw t.forEach((function(t) {
                                return t.reject(e)
                            })), e
                        })).then(v)
                    }))
                }))
            }

            function v() {
                var e = Ot();
                t.forEach((function(t) {
                    return t.resolve(e)
                }));
                try {
                    var r = 0 === n.length ? "single-spa:no-app-change" : "single-spa:app-change";
                    window.dispatchEvent(new s(r, T())), window.dispatchEvent(new s("single-spa:routing-event", T()))
                } catch (t) {
                    setTimeout((function() {
                        throw t
                    }))
                }
                if (Dt = !1, Mt.length > 0) {
                    var o = Mt;
                    Mt = [], Nt(o)
                }
                return e
            }

            function w() {
                t.forEach((function(t) {
                    at(t.eventArguments)
                })), at(e)
            }

            function T() {
                var t, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    s = arguments.length > 1 ? arguments[1] : void 0,
                    f = {},
                    m = (i(t = {}, b, []), i(t, g, []), i(t, p, []), i(t, A, []), t);
                r ? (u.concat(c).forEach((function(t, e) {
                    v(t, b)
                })), o.forEach((function(t) {
                    v(t, p)
                })), a.forEach((function(t) {
                    v(t, g)
                }))) : n.forEach((function(t) {
                    v(t)
                }));
                var y = {
                    detail: {
                        newAppStatuses: f,
                        appsByNewStatus: m,
                        totalAppChanges: n.length,
                        originalEvent: null == e ? void 0 : e[0],
                        oldUrl: d,
                        newUrl: h,
                        navigationIsCanceled: l
                    }
                };
                return s && k(y.detail, s), y;

                function v(t, e) {
                    var n = _(t);
                    e = e || At(n), f[n] = e, (m[e] = m[e] || []).push(n)
                }
            }
        }

        function jt(t, e) {
            return P(t) ? L(t).then((function(t) {
                return e.then((function() {
                    return P(t) ? F(t) : t
                }))
            })) : e.then((function() {
                return t
            }))
        }
        var Ut = !1;

        function Ft(t) {
            var e;
            Ut = !0, t && t.urlRerouteOnly && (e = t.urlRerouteOnly, et = e), nt && Nt()
        }

        function Gt() {
            return Ut
        }
        nt && setTimeout((function() {
            Ut || console.warn(h(1, !1))
        }), 5e3);
        var Ht = {
            getRawAppData: function() {
                return [].concat(Tt)
            },
            reroute: Nt,
            NOT_LOADED: p,
            toLoadPromise: tt,
            toBootstrapPromise: L,
            unregisterApplication: _t
        };
        nt && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Ht)
    }).call(this, n(7))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e) {
    function n(e) {
        return t.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t.exports.__esModule = !0, t.exports.default = t.exports, n(e)
    }
    t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = function(t) {
        return null !== t && "object" === r(t)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return e.get(t)
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, n) {
    "use strict";
    /*!
     Copyright 2018 Google Inc. All Rights Reserved.
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    /*! lifecycle.mjs v0.1.1 */
    let r;
    n.r(e);
    try {
        new EventTarget, r = !0
    } catch (t) {
        r = !1
    }
    var o = r ? EventTarget : class {
        constructor() {
            this.e = {}
        }
        addEventListener(t, e, n = !1) {
            this.t(t).push(e)
        }
        removeEventListener(t, e, n = !1) {
            const r = this.t(t),
                o = r.indexOf(e);
            o > -1 && r.splice(o, 1)
        }
        dispatchEvent(t) {
            return t.target = this, Object.freeze(t), this.t(t.type).forEach(e => e(t)), !0
        }
        t(t) {
            return this.e[t] = this.e[t] || []
        }
    };
    var i = r ? Event : class {
        constructor(t) {
            this.type = t
        }
    };
    class a extends i {
        constructor(t, e) {
            super(t), this.newState = e.newState, this.oldState = e.oldState, this.originalEvent = e.originalEvent
        }
    }
    const s = "active",
        u = "passive",
        c = "hidden",
        l = "frozen",
        d = "terminated",
        h = "object" == typeof safari && safari.pushNotification,
        f = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "onpageshow" in self ? "pagehide" : "unload"],
        p = t => (t.preventDefault(), t.returnValue = "Are you sure?"),
        m = [
            [s, u, c, d],
            [s, u, c, l],
            [c, u, s],
            [l, c],
            [l, s],
            [l, u]
        ].map(t => t.reduce((t, e, n) => (t[e] = n, t), {})),
        y = () => document.visibilityState === c ? c : document.hasFocus() ? s : u;
    var v = new class extends o {
        constructor() {
            super();
            const t = y();
            this.s = t, this.i = [], this.a = this.a.bind(this), f.forEach(t => addEventListener(t, this.a, !0)), h && addEventListener("beforeunload", t => {
                this.n = setTimeout(() => {
                    t.defaultPrevented || t.returnValue.length > 0 || this.r(t, c)
                }, 0)
            })
        }
        get state() {
            return this.s
        }
        get pageWasDiscarded() {
            return document.wasDiscarded || !1
        }
        addUnsavedChanges(t) {
            !this.i.indexOf(t) > -1 && (0 === this.i.length && addEventListener("beforeunload", p), this.i.push(t))
        }
        removeUnsavedChanges(t) {
            const e = this.i.indexOf(t);
            e > -1 && (this.i.splice(e, 1), 0 === this.i.length && removeEventListener("beforeunload", p))
        }
        r(t, e) {
            if (e !== this.s) {
                const n = ((t, e) => {
                    for (let n, r = 0; n = m[r]; ++r) {
                        const r = n[t],
                            o = n[e];
                        if (r >= 0 && o >= 0 && o > r) return Object.keys(n).slice(r, o + 1)
                    }
                    return []
                })(this.s, e);
                for (let e = 0; e < n.length - 1; ++e) {
                    const r = n[e],
                        o = n[e + 1];
                    this.s = o, this.dispatchEvent(new a("statechange", {
                        oldState: r,
                        newState: o,
                        originalEvent: t
                    }))
                }
            }
        }
        a(t) {
            switch (h && clearTimeout(this.n), t.type) {
                case "pageshow":
                case "resume":
                    this.r(t, y());
                    break;
                case "focus":
                    this.r(t, s);
                    break;
                case "blur":
                    this.s === s && this.r(t, y());
                    break;
                case "pagehide":
                case "unload":
                    this.r(t, t.persisted ? l : d);
                    break;
                case "visibilitychange":
                    this.s !== l && this.s !== d && this.r(t, y());
                    break;
                case "freeze":
                    this.r(t, l)
            }
        }
    };
    e.default = v
}, function(t, e, n) {
    "use strict";
    e.decode = e.parse = n(24), e.encode = e.stringify = n(25)
}, function(t, e) {
    ! function() {
        if ("undefined" != typeof window) try {
            var t = new window.CustomEvent("test", {
                cancelable: !0
            });
            if (t.preventDefault(), !0 !== t.defaultPrevented) throw new Error("Could not prevent default")
        } catch (t) {
            var e = function(t, e) {
                var n, r;
                return (e = e || {}).bubbles = !!e.bubbles, e.cancelable = !!e.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), r = n.preventDefault, n.preventDefault = function() {
                    r.call(this);
                    try {
                        Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        })
                    } catch (t) {
                        this.defaultPrevented = !0
                    }
                }, n
            };
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }
    }()
}, function(t, e) {
    window.requestIdleCallback = window.requestIdleCallback || function(t) {
        var e = Date.now();
        return setTimeout((function() {
            t({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - e))
                }
            })
        }), 1)
    }, window.cancelIdleCallback = window.cancelIdleCallback || function(t) {
        clearTimeout(t)
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var e = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== t && t || {},
            n = "URLSearchParams" in e,
            r = "Symbol" in e && "iterator" in Symbol,
            o = "FileReader" in e && "Blob" in e && function() {
                try {
                    return new Blob, !0
                } catch (t) {
                    return !1
                }
            }(),
            i = "FormData" in e,
            a = "ArrayBuffer" in e;
        if (a) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            u = ArrayBuffer.isView || function(t) {
                return t && s.indexOf(Object.prototype.toString.call(t)) > -1
            };

        function c(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"');
            return t.toLowerCase()
        }

        function l(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function d(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return r && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function h(t) {
            this.map = {}, t instanceof h ? t.forEach((function(t, e) {
                this.append(e, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
                if (2 != t.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
                this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                this.append(e, t[e])
            }), this)
        }

        function f(t) {
            if (!t._noBody) return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0)
        }

        function p(t) {
            return new Promise((function(e, n) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    n(t.error)
                }
            }))
        }

        function m(t) {
            var e = new FileReader,
                n = p(e);
            return e.readAsArrayBuffer(t), n
        }

        function y(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function v() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                var e;
                this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : o && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : a && o && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = y(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t)) ? this._bodyArrayBuffer = y(t) : this._bodyText = t = Object.prototype.toString.call(t) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, o && (this.blob = function() {
                var t = f(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }), this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                    var t = f(this);
                    return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                }
                if (o) return this.blob().then(m);
                throw new Error("could not read as ArrayBuffer")
            }, this.text = function() {
                var t, e, n, r, o, i = f(this);
                if (i) return i;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = p(e), r = /charset=([A-Za-z0-9_-]+)/.exec(t.type), o = r ? r[1] : "utf-8", e.readAsText(t, o), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, i && (this.formData = function() {
                return this.text().then(b)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }
        h.prototype.append = function(t, e) {
            t = c(t), e = l(e);
            var n = this.map[t];
            this.map[t] = n ? n + ", " + e : e
        }, h.prototype.delete = function(t) {
            delete this.map[c(t)]
        }, h.prototype.get = function(t) {
            return t = c(t), this.has(t) ? this.map[t] : null
        }, h.prototype.has = function(t) {
            return this.map.hasOwnProperty(c(t))
        }, h.prototype.set = function(t, e) {
            this.map[c(t)] = l(e)
        }, h.prototype.forEach = function(t, e) {
            for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
        }, h.prototype.keys = function() {
            var t = [];
            return this.forEach((function(e, n) {
                t.push(n)
            })), d(t)
        }, h.prototype.values = function() {
            var t = [];
            return this.forEach((function(e) {
                t.push(e)
            })), d(t)
        }, h.prototype.entries = function() {
            var t = [];
            return this.forEach((function(e, n) {
                t.push([n, e])
            })), d(t)
        }, r && (h.prototype[Symbol.iterator] = h.prototype.entries);
        var g = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

        function w(t, n) {
            if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, o, i = (n = n || {}).body;
            if (t instanceof w) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, n.headers || (this.headers = new h(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = n.credentials || this.credentials || "same-origin", !n.headers && this.headers || (this.headers = new h(n.headers)), this.method = (r = n.method || this.method || "GET", o = r.toUpperCase(), g.indexOf(o) > -1 ? o : r), this.mode = n.mode || this.mode || null, this.signal = n.signal || this.signal || function() {
                    if ("AbortController" in e) return (new AbortController).signal
                }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== n.cache && "no-cache" !== n.cache)) {
                var a = /([?&])_=[^&]*/;
                if (a.test(this.url)) this.url = this.url.replace(a, "$1_=" + (new Date).getTime());
                else {
                    this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                }
            }
        }

        function b(t) {
            var e = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var n = t.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            })), e
        }

        function T(t, e) {
            if (!(this instanceof T)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === e.statusText ? "" : "" + e.statusText, this.headers = new h(e.headers), this.url = e.url || "", this._initBody(t)
        }
        w.prototype.clone = function() {
            return new w(this, {
                body: this._bodyInit
            })
        }, v.call(w.prototype), v.call(T.prototype), T.prototype.clone = function() {
            return new T(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new h(this.headers),
                url: this.url
            })
        }, T.error = function() {
            var t = new T(null, {
                status: 200,
                statusText: ""
            });
            return t.status = 0, t.type = "error", t
        };
        var E = [301, 302, 303, 307, 308];
        T.redirect = function(t, e) {
            if (-1 === E.indexOf(e)) throw new RangeError("Invalid status code");
            return new T(null, {
                status: e,
                headers: {
                    location: t
                }
            })
        };
        var O = e.DOMException;
        try {
            new O
        } catch (t) {
            (O = function(t, e) {
                this.message = t, this.name = e;
                var n = Error(t);
                this.stack = n.stack
            }).prototype = Object.create(Error.prototype), O.prototype.constructor = O
        }

        function S(t, n) {
            return new Promise((function(r, i) {
                var s = new w(t, n);
                if (s.signal && s.signal.aborted) return i(new O("Aborted", "AbortError"));
                var u = new XMLHttpRequest;

                function d() {
                    u.abort()
                }
                if (u.onload = function() {
                        var t, e, n = {
                            statusText: u.statusText,
                            headers: (t = u.getAllResponseHeaders() || "", e = new h, t.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(t) {
                                return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                            })).forEach((function(t) {
                                var n = t.split(":"),
                                    r = n.shift().trim();
                                if (r) {
                                    var o = n.join(":").trim();
                                    try {
                                        e.append(r, o)
                                    } catch (t) {
                                        console.warn("Response " + t.message)
                                    }
                                }
                            })), e)
                        };
                        s.url.startsWith("file://") && (u.status < 200 || u.status > 599) ? n.status = 200 : n.status = u.status, n.url = "responseURL" in u ? u.responseURL : n.headers.get("X-Request-URL");
                        var o = "response" in u ? u.response : u.responseText;
                        setTimeout((function() {
                            r(new T(o, n))
                        }), 0)
                    }, u.onerror = function() {
                        setTimeout((function() {
                            i(new TypeError("Network request failed"))
                        }), 0)
                    }, u.ontimeout = function() {
                        setTimeout((function() {
                            i(new TypeError("Network request timed out"))
                        }), 0)
                    }, u.onabort = function() {
                        setTimeout((function() {
                            i(new O("Aborted", "AbortError"))
                        }), 0)
                    }, u.open(s.method, function(t) {
                        try {
                            return "" === t && e.location.href ? e.location.href : t
                        } catch (e) {
                            return t
                        }
                    }(s.url), !0), "include" === s.credentials ? u.withCredentials = !0 : "omit" === s.credentials && (u.withCredentials = !1), "responseType" in u && (o ? u.responseType = "blob" : a && (u.responseType = "arraybuffer")), n && "object" == typeof n.headers && !(n.headers instanceof h || e.Headers && n.headers instanceof e.Headers)) {
                    var f = [];
                    Object.getOwnPropertyNames(n.headers).forEach((function(t) {
                        f.push(c(t)), u.setRequestHeader(t, l(n.headers[t]))
                    })), s.headers.forEach((function(t, e) {
                        -1 === f.indexOf(e) && u.setRequestHeader(e, t)
                    }))
                } else s.headers.forEach((function(t, e) {
                    u.setRequestHeader(e, t)
                }));
                s.signal && (s.signal.addEventListener("abort", d), u.onreadystatechange = function() {
                    4 === u.readyState && s.signal.removeEventListener("abort", d)
                }), u.send(void 0 === s._bodyInit ? null : s._bodyInit)
            }))
        }
        S.polyfill = !0, e.fetch || (e.fetch = S, e.Headers = h, e.Request = w, e.Response = T)
    }).call(this, n(7))
}, function(t, e, n) {
    var r = n(8).default,
        o = n(17);
    t.exports = function(t) {
        var e = o(t, "string");
        return "symbol" === r(e) ? e : String(e)
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, n) {
    var r = n(8).default;
    t.exports = function(t, e) {
        if ("object" !== r(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var o = n.call(t, e || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, n) {
    function r(t) {
        if (t) return function(t) {
            for (var e in r.prototype) t[e] = r.prototype[e];
            return t
        }(t)
    }
    t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, r.prototype.once = function(t, e) {
        function n() {
            this.off(t, n), e.apply(this, arguments)
        }
        return n.fn = e, this.on(t, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + t];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === e || n.fn === e) {
                r.splice(o, 1);
                break
            }
        return 0 === r.length && delete this._callbacks["$" + t], this
    }, r.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e)
        }
        return this
    }, r.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, r.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
    }
}, function(t, e) {
    t.exports = i, i.default = i, i.stable = u, i.stableStringify = u;
    var n = [],
        r = [];

    function o() {
        return {
            depthLimit: Number.MAX_SAFE_INTEGER,
            edgesLimit: Number.MAX_SAFE_INTEGER
        }
    }

    function i(t, e, i, s) {
        var u;
        void 0 === s && (s = o()),
            function t(e, n, r, o, i, s, u) {
                var c;
                if (s += 1, "object" == typeof e && null !== e) {
                    for (c = 0; c < o.length; c++)
                        if (o[c] === e) return void a("[Circular]", e, n, i);
                    if (void 0 !== u.depthLimit && s > u.depthLimit) return void a("[...]", e, n, i);
                    if (void 0 !== u.edgesLimit && r + 1 > u.edgesLimit) return void a("[...]", e, n, i);
                    if (o.push(e), Array.isArray(e))
                        for (c = 0; c < e.length; c++) t(e[c], c, c, o, e, s, u);
                    else {
                        var l = Object.keys(e);
                        for (c = 0; c < l.length; c++) {
                            var d = l[c];
                            t(e[d], d, c, o, e, s, u)
                        }
                    }
                    o.pop()
                }
            }(t, "", 0, [], void 0, 0, s);
        try {
            u = 0 === r.length ? JSON.stringify(t, e, i) : JSON.stringify(t, c(e), i)
        } catch (t) {
            return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
        } finally {
            for (; 0 !== n.length;) {
                var l = n.pop();
                4 === l.length ? Object.defineProperty(l[0], l[1], l[3]) : l[0][l[1]] = l[2]
            }
        }
        return u
    }

    function a(t, e, o, i) {
        var a = Object.getOwnPropertyDescriptor(i, o);
        void 0 !== a.get ? a.configurable ? (Object.defineProperty(i, o, {
            value: t
        }), n.push([i, o, e, a])) : r.push([e, o, t]) : (i[o] = t, n.push([i, o, e]))
    }

    function s(t, e) {
        return t < e ? -1 : t > e ? 1 : 0
    }

    function u(t, e, i, u) {
        void 0 === u && (u = o());
        var l, d = function t(e, r, o, i, u, c, l) {
            var d;
            if (c += 1, "object" == typeof e && null !== e) {
                for (d = 0; d < i.length; d++)
                    if (i[d] === e) return void a("[Circular]", e, r, u);
                try {
                    if ("function" == typeof e.toJSON) return
                } catch (t) {
                    return
                }
                if (void 0 !== l.depthLimit && c > l.depthLimit) return void a("[...]", e, r, u);
                if (void 0 !== l.edgesLimit && o + 1 > l.edgesLimit) return void a("[...]", e, r, u);
                if (i.push(e), Array.isArray(e))
                    for (d = 0; d < e.length; d++) t(e[d], d, d, i, e, c, l);
                else {
                    var h = {},
                        f = Object.keys(e).sort(s);
                    for (d = 0; d < f.length; d++) {
                        var p = f[d];
                        t(e[p], p, d, i, e, c, l), h[p] = e[p]
                    }
                    if (void 0 === u) return h;
                    n.push([u, r, e]), u[r] = h
                }
                i.pop()
            }
        }(t, "", 0, [], void 0, 0, u) || t;
        try {
            l = 0 === r.length ? JSON.stringify(d, e, i) : JSON.stringify(d, c(e), i)
        } catch (t) {
            return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
        } finally {
            for (; 0 !== n.length;) {
                var h = n.pop();
                4 === h.length ? Object.defineProperty(h[0], h[1], h[3]) : h[0][h[1]] = h[2]
            }
        }
        return l
    }

    function c(t) {
        return t = void 0 !== t ? t : function(t, e) {
                return e
            },
            function(e, n) {
                if (r.length > 0)
                    for (var o = 0; o < r.length; o++) {
                        var i = r[o];
                        if (i[1] === e && i[0] === n) {
                            n = i[2], r.splice(o, 1);
                            break
                        }
                    }
                return t.call(this, e, n)
            }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var o = n(9);

    function i(t) {
        if (t) return function(t) {
            for (var e in i.prototype) Object.prototype.hasOwnProperty.call(i.prototype, e) && (t[e] = i.prototype[e]);
            return t
        }(t)
    }
    t.exports = i, i.prototype.clearTimeout = function() {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
    }, i.prototype.parse = function(t) {
        return this._parser = t, this
    }, i.prototype.responseType = function(t) {
        return this._responseType = t, this
    }, i.prototype.serialize = function(t) {
        return this._serializer = t, this
    }, i.prototype.timeout = function(t) {
        if (!t || "object" !== r(t)) return this._timeout = t, this._responseTimeout = 0, this._uploadTimeout = 0, this;
        for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) switch (e) {
                case "deadline":
                    this._timeout = t.deadline;
                    break;
                case "response":
                    this._responseTimeout = t.response;
                    break;
                case "upload":
                    this._uploadTimeout = t.upload;
                    break;
                default:
                    console.warn("Unknown timeout option", e)
            }
        return this
    }, i.prototype.retry = function(t, e) {
        return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
    };
    var a = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    i.prototype._shouldRetry = function(t, e) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
        if (this._retryCallback) try {
            var n = this._retryCallback(t, e);
            if (!0 === n) return !0;
            if (!1 === n) return !1
        } catch (t) {
            console.error(t)
        }
        if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;
        if (t) {
            if (t.code && a.includes(t.code)) return !0;
            if (t.timeout && "ECONNABORTED" === t.code) return !0;
            if (t.crossDomain) return !0
        }
        return !1
    }, i.prototype._retry = function() {
        return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end()
    }, i.prototype.then = function(t, e) {
        var n = this;
        if (!this._fullfilledPromise) {
            var r = this;
            this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise((function(t, e) {
                r.on("abort", (function() {
                    if (!(n._maxRetries && n._maxRetries > n._retries))
                        if (n.timedout && n.timedoutError) e(n.timedoutError);
                        else {
                            var t = new Error("Aborted");
                            t.code = "ABORTED", t.status = n.status, t.method = n.method, t.url = n.url, e(t)
                        }
                })), r.end((function(n, r) {
                    n ? e(n) : t(r)
                }))
            }))
        }
        return this._fullfilledPromise.then(t, e)
    }, i.prototype.catch = function(t) {
        return this.then(void 0, t)
    }, i.prototype.use = function(t) {
        return t(this), this
    }, i.prototype.ok = function(t) {
        if ("function" != typeof t) throw new Error("Callback required");
        return this._okCallback = t, this
    }, i.prototype._isResponseOK = function(t) {
        return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
    }, i.prototype.get = function(t) {
        return this._header[t.toLowerCase()]
    }, i.prototype.getHeader = i.prototype.get, i.prototype.set = function(t, e) {
        if (o(t)) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.set(n, t[n]);
            return this
        }
        return this._header[t.toLowerCase()] = e, this.header[t] = e, this
    }, i.prototype.unset = function(t) {
        return delete this._header[t.toLowerCase()], delete this.header[t], this
    }, i.prototype.field = function(t, e) {
        if (null == t) throw new Error(".field(name, val) name can not be empty");
        if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        if (o(t)) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.field(n, t[n]);
            return this
        }
        if (Array.isArray(e)) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && this.field(t, e[r]);
            return this
        }
        if (null == e) throw new Error(".field(name, val) val can not be empty");
        return "boolean" == typeof e && (e = String(e)), this._getFormData().append(t, e), this
    }, i.prototype.abort = function() {
        return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this
    }, i.prototype._auth = function(t, e, n, r) {
        switch (n.type) {
            case "basic":
                this.set("Authorization", "Basic ".concat(r("".concat(t, ":").concat(e))));
                break;
            case "auto":
                this.username = t, this.password = e;
                break;
            case "bearer":
                this.set("Authorization", "Bearer ".concat(t))
        }
        return this
    }, i.prototype.withCredentials = function(t) {
        return void 0 === t && (t = !0), this._withCredentials = t, this
    }, i.prototype.redirects = function(t) {
        return this._maxRedirects = t, this
    }, i.prototype.maxResponseSize = function(t) {
        if ("number" != typeof t) throw new TypeError("Invalid argument");
        return this._maxResponseSize = t, this
    }, i.prototype.toJSON = function() {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        }
    }, i.prototype.send = function(t) {
        var e = o(t),
            n = this._header["content-type"];
        if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
        else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
        if (e && o(this._data))
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (this._data[r] = t[r]);
        else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" === n ? this._data ? "".concat(this._data, "&").concat(t) : t : (this._data || "") + t) : this._data = t;
        return !e || this._isHost(t) || n || this.type("json"), this
    }, i.prototype.sortQuery = function(t) {
        return this._sort = void 0 === t || t, this
    }, i.prototype._finalizeQueryString = function() {
        var t = this._query.join("&");
        if (t && (this.url += (this.url.includes("?") ? "&" : "?") + t), this._query.length = 0, this._sort) {
            var e = this.url.indexOf("?");
            if (e >= 0) {
                var n = this.url.slice(e + 1).split("&");
                "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.slice(0, e) + "?" + n.join("&")
            }
        }
    }, i.prototype._appendQueryString = function() {
        console.warn("Unsupported")
    }, i.prototype._timeoutError = function(t, e, n) {
        if (!this._aborted) {
            var r = new Error("".concat(t + e, "ms exceeded"));
            r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.timedoutError = r, this.abort(), this.callback(r)
        }
    }, i.prototype._setTimeouts = function() {
        var t = this;
        this._timeout && !this._timer && (this._timer = setTimeout((function() {
            t._timeoutError("Timeout of ", t._timeout, "ETIME")
        }), this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout((function() {
            t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
        }), this._responseTimeout))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(22);

    function o(t) {
        if (t) return function(t) {
            for (var e in o.prototype) Object.prototype.hasOwnProperty.call(o.prototype, e) && (t[e] = o.prototype[e]);
            return t
        }(t)
    }
    t.exports = o, o.prototype.get = function(t) {
        return this.header[t.toLowerCase()]
    }, o.prototype._setHeaderProperties = function(t) {
        var e = t["content-type"] || "";
        this.type = r.type(e);
        var n = r.params(e);
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (this[o] = n[o]);
        this.links = {};
        try {
            t.link && (this.links = r.parseLinks(t.link))
        } catch (t) {}
    }, o.prototype._setStatusProperties = function(t) {
        var e = t / 100 | 0;
        this.statusCode = t, this.status = this.statusCode, this.statusType = e, this.info = 1 === e, this.ok = 2 === e, this.redirect = 3 === e, this.clientError = 4 === e, this.serverError = 5 === e, this.error = (4 === e || 5 === e) && this.toError(), this.created = 201 === t, this.accepted = 202 === t, this.noContent = 204 === t, this.badRequest = 400 === t, this.unauthorized = 401 === t, this.notAcceptable = 406 === t, this.forbidden = 403 === t, this.notFound = 404 === t, this.unprocessableEntity = 422 === t
    }
}, function(t, e, n) {
    "use strict";
    e.type = function(t) {
        return t.split(/ *; */).shift()
    }, e.params = function(t) {
        return t.split(/ *; */).reduce((function(t, e) {
            var n = e.split(/ *= */),
                r = n.shift(),
                o = n.shift();
            return r && o && (t[r] = o), t
        }), {})
    }, e.parseLinks = function(t) {
        return t.split(/ *, */).reduce((function(t, e) {
            var n = e.split(/ *; */),
                r = n[0].slice(1, -1);
            return t[n[1].split(/ *= */)[1].slice(1, -1)] = r, t
        }), {})
    }, e.cleanHeader = function(t, e) {
        return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && (delete t.authorization, delete t.cookie), t
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return function(t) {
            if (Array.isArray(t)) return o(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return o(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function i() {
        this._defaults = []
    }["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach((function(t) {
        i.prototype[t] = function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return this._defaults.push({
                fn: t,
                args: n
            }), this
        }
    })), i.prototype._setDefaults = function(t) {
        this._defaults.forEach((function(e) {
            t[e.fn].apply(t, r(e.args))
        }))
    }, t.exports = i
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, n, i) {
        e = e || "&", n = n || "=";
        var a = {};
        if ("string" != typeof t || 0 === t.length) return a;
        var s = /\+/g;
        t = t.split(e);
        var u = 1e3;
        i && "number" == typeof i.maxKeys && (u = i.maxKeys);
        var c = t.length;
        u > 0 && c > u && (c = u);
        for (var l = 0; l < c; ++l) {
            var d, h, f, p, m = t[l].replace(s, "%20"),
                y = m.indexOf(n);
            y >= 0 ? (d = m.substr(0, y), h = m.substr(y + 1)) : (d = m, h = ""), f = decodeURIComponent(d), p = decodeURIComponent(h), r(a, f) ? o(a[f]) ? a[f].push(p) : a[f] = [a[f], p] : a[f] = p
        }
        return a
    };
    var o = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = function(t) {
        switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
        }
    };
    t.exports = function(t, e, n, s) {
        return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? i(a(t), (function(a) {
            var s = encodeURIComponent(r(a)) + n;
            return o(t[a]) ? i(t[a], (function(t) {
                return s + encodeURIComponent(r(t))
            })).join(e) : s + encodeURIComponent(r(t[a]))
        })).join(e) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(t)) : ""
    };
    var o = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };

    function i(t, e) {
        if (t.map) return t.map(e);
        for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
        return n
    }
    var a = Object.keys || function(t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }
}, function(t, e) {}, function(t, e) {
    t.exports = function(t, e) {
        return e.get ? e.get.call(t) : e.value
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (e.set) e.set.call(t, n);
        else {
            if (!e.writable) throw new TypeError("attempted to set read only private field");
            e.value = n
        }
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(13), n(14), n(15);
    const r = () => {};
    var o = n(3),
        i = n.n(o);
    const a = t => void 0 === t;
    var s = n(4),
        u = n.n(s),
        c = n(12),
        l = n.n(c);
    class d {
        constructor(t = "https://events.fdp.pulselive.com") {
            this.basePath = t.replace(/\/+$/, ""), this.authentications = {}, this.defaultHeaders = {
                "User-Agent": "OpenAPI-Generator/0.1.0-dev/Javascript"
            }, this.timeout = 6e4, this.cache = !0, this.enableCookies = !1, "undefined" == typeof window && (this.agent = new u.a.agent), this.requestAgent = null, this.plugins = null
        }
        paramToString(t) {
            return null == t || null == t ? "" : t instanceof Date ? t.toJSON() : d.canBeJsonified(t) ? JSON.stringify(t) : t.toString()
        }
        static canBeJsonified(t) {
            if ("string" != typeof t && "object" != typeof t) return !1;
            try {
                const e = t.toString();
                return "[object Object]" === e || "[object Array]" === e
            } catch (t) {
                return !1
            }
        }
        buildUrl(t, e, n) {
            t.match(/^\//) || (t = "/" + t);
            var r = this.basePath + t;
            return null != n && (r = n + t), r = r.replace(/\{([\w-\.]+)\}/g, (t, n) => {
                var r;
                return r = e.hasOwnProperty(n) ? this.paramToString(e[n]) : t, encodeURIComponent(r)
            })
        }
        isJsonMime(t) {
            return Boolean(null != t && t.match(/^application\/json(;.*)?$/i))
        }
        jsonPreferredMime(t) {
            for (var e = 0; e < t.length; e++)
                if (this.isJsonMime(t[e])) return t[e];
            return t[0]
        }
        isFileParam(t) {
            {
                let e;
                try {
                    e = n(26)
                } catch (t) {}
                if (e && e.ReadStream && t instanceof e.ReadStream) return !0
            }
            return "function" == typeof Buffer && t instanceof Buffer || ("function" == typeof Blob && t instanceof Blob || "function" == typeof File && t instanceof File)
        }
        normalizeParams(t) {
            var e = {};
            for (var n in t)
                if (t.hasOwnProperty(n) && null != t[n] && null != t[n]) {
                    var r = t[n];
                    this.isFileParam(r) || Array.isArray(r) ? e[n] = r : e[n] = this.paramToString(r)
                }
            return e
        }
        buildCollectionParam(t, e) {
            if (null == t) return null;
            switch (e) {
                case "csv":
                    return t.map(this.paramToString, this).join(",");
                case "ssv":
                    return t.map(this.paramToString, this).join(" ");
                case "tsv":
                    return t.map(this.paramToString, this).join("\t");
                case "pipes":
                    return t.map(this.paramToString, this).join("|");
                case "multi":
                    return t.map(this.paramToString, this);
                case "passthrough":
                    return t;
                default:
                    throw new Error("Unknown collection format: " + e)
            }
        }
        applyAuthToRequest(t, e) {
            e.forEach(e => {
                var n = this.authentications[e];
                switch (n.type) {
                    case "basic":
                        (n.username || n.password) && t.auth(n.username || "", n.password || "");
                        break;
                    case "bearer":
                        if (n.accessToken) {
                            var r = "function" == typeof n.accessToken ? n.accessToken() : n.accessToken;
                            t.set({
                                Authorization: "Bearer " + r
                            })
                        }
                        break;
                    case "apiKey":
                        if (n.apiKey) {
                            var o = {};
                            n.apiKeyPrefix ? o[n.name] = n.apiKeyPrefix + " " + n.apiKey : o[n.name] = n.apiKey, "header" === n.in ? t.set(o) : t.query(o)
                        }
                        break;
                    case "oauth2":
                        n.accessToken && t.set({
                            Authorization: "Bearer " + n.accessToken
                        });
                        break;
                    default:
                        throw new Error("Unknown authentication type: " + n.type)
                }
            })
        }
        deserialize(t, e) {
            if (null == t || null == e || 204 == t.status) return null;
            var n = t.body;
            return (null == n || "object" == typeof n && void 0 === n.length && !Object.keys(n).length) && (n = t.text), d.convertToType(n, e)
        }
        callApi(t, e, n, r, o, i, a, s, c, d, h, f) {
            var p = this.buildUrl(t, n, f),
                m = u()(e, p);
            if (null !== this.plugins)
                for (var y in this.plugins) this.plugins.hasOwnProperty(y) && m.use(this.plugins[y]);
            this.applyAuthToRequest(m, s), "GET" === e.toUpperCase() && !1 === this.cache && (r._ = (new Date).getTime()), m.query(this.normalizeParams(r)), m.set(this.defaultHeaders).set(this.normalizeParams(o)), this.requestAgent && m.agent(this.requestAgent), m.timeout(this.timeout);
            var v = this.jsonPreferredMime(c);
            if (v && "multipart/form-data" != v && m.type(v), "application/x-www-form-urlencoded" === v) m.send(l.a.stringify(this.normalizeParams(i)));
            else if ("multipart/form-data" == v) {
                var g = this.normalizeParams(i);
                for (var w in g)
                    if (g.hasOwnProperty(w)) {
                        let t = g[w];
                        this.isFileParam(t) ? m.attach(w, t) : Array.isArray(t) && t.length && this.isFileParam(t[0]) ? t.forEach(t => m.attach(w, t)) : m.field(w, t)
                    }
            } else null != a && (m.header["Content-Type"] || m.type("application/json"), m.send(a));
            var b = this.jsonPreferredMime(d);
            return b && m.accept(b), "Blob" === h ? m.responseType("blob") : "String" === h && m.responseType("string"), this.enableCookies && ("undefined" == typeof window ? this.agent._attachCookies(m) : m.withCredentials()), new Promise((t, e) => {
                m.end((n, r) => {
                    if (n) {
                        var o = {};
                        r && (o.status = r.status, o.statusText = r.statusText, o.body = r.body, o.response = r), o.error = n, e(o)
                    } else try {
                        var i = this.deserialize(r, h);
                        this.enableCookies && "undefined" == typeof window && this.agent._saveCookies(r), t({
                            data: i,
                            response: r
                        })
                    } catch (o) {
                        e(o)
                    }
                })
            })
        }
        static parseDate(t) {
            return isNaN(t) ? new Date(t.replace(/(\d)(T)(\d)/i, "$1 $3")) : new Date(+t)
        }
        static convertToType(t, e) {
            if (null == t) return t;
            switch (e) {
                case "Boolean":
                    return Boolean(t);
                case "Integer":
                    return parseInt(t, 10);
                case "Number":
                    return parseFloat(t);
                case "String":
                    return String(t);
                case "Date":
                    return d.parseDate(String(t));
                case "Blob":
                    return t;
                default:
                    if (e === Object) return t;
                    if ("function" == typeof e.constructFromObject) return e.constructFromObject(t);
                    if (Array.isArray(e)) {
                        var n = e[0];
                        return t.map(t => d.convertToType(t, n))
                    }
                    if ("object" == typeof e) {
                        var r, o;
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                r = i, o = e[i];
                                break
                            }
                        var a = {};
                        for (var i in t)
                            if (t.hasOwnProperty(i)) {
                                var s = d.convertToType(i, r),
                                    u = d.convertToType(t[i], o);
                                a[s] = u
                            }
                        return a
                    }
                    return t
            }
        }
        hostSettings() {
            return [{
                url: "https://events.fdp.pulselive.com",
                description: "No description provided"
            }]
        }
        getBasePathFromSettings(t, e = {}) {
            var n = this.hostSettings();
            if (t < 0 || t >= n.length) throw new Error("Invalid index " + t + " when selecting the host settings. Must be less than " + n.length);
            var r = n[t],
                o = r.url;
            for (var i in r.variables)
                if (i in e) {
                    let t = r.variables[i];
                    if ("enum_values" in t && !t.enum_values.includes(e[i])) throw new Error("The variable `" + i + "` in the host URL has invalid value " + e[i] + ". Must be " + r.variables[i].enum_values + ".");
                    o = o.replace("{" + i + "}", e[i])
                } else o = o.replace("{" + i + "}", r.variables[i].default_value);
            return o
        }
        static constructFromObject(t, e, n) {
            if (Array.isArray(t))
                for (var r = 0; r < t.length; r++) t.hasOwnProperty(r) && (e[r] = d.convertToType(t[r], n));
            else
                for (var o in t) t.hasOwnProperty(o) && (e[o] = d.convertToType(t[o], n))
        }
    }
    d.CollectionFormatEnum = {
        CSV: ",",
        SSV: " ",
        TSV: "\t",
        PIPES: "|",
        MULTI: "multi"
    }, d.instance = new d;
    var h = d;
    class f {
        constructor(t, e) {
            f.initialize(this, t, e)
        }
        static initialize(t, e, n) {
            t.ssoId = e, t.ssoProvider = n
        }
        static constructFromObject(t, e) {
            return t && (e = e || new f, t.hasOwnProperty("ssoId") && (e.ssoId = h.convertToType(t.ssoId, "String")), t.hasOwnProperty("ssoProvider") && (e.ssoProvider = h.convertToType(t.ssoProvider, "String"))), e
        }
    }
    f.prototype.ssoId = void 0, f.prototype.ssoProvider = void 0;
    var p = f;
    class m {
        constructor(t, e) {
            m.initialize(this, t, e)
        }
        static initialize(t, e, n) {
            t.deviceIdentifier = e, t.sessionId = n
        }
        static constructFromObject(t, e) {
            return t && (e = e || new m, t.hasOwnProperty("deviceIdentifier") && (e.deviceIdentifier = h.convertToType(t.deviceIdentifier, "String")), t.hasOwnProperty("sessionId") && (e.sessionId = h.convertToType(t.sessionId, "String")), t.hasOwnProperty("identity") && (e.identity = p.constructFromObject(t.identity)), t.hasOwnProperty("apiKey") && (e.apiKey = h.convertToType(t.apiKey, "String")), t.hasOwnProperty("cookies") && (e.cookies = h.convertToType(t.cookies, {
                String: "String"
            }))), e
        }
    }
    m.prototype.deviceIdentifier = void 0, m.prototype.sessionId = void 0, m.prototype.identity = void 0, m.prototype.apiKey = void 0, m.prototype.cookies = void 0;
    var y = m;
    class v {
        constructor(t, e, n) {
            v.initialize(this, t, e, n)
        }
        static initialize(t, e, n, r) {
            t.metadata = e, t.tcString = n, t.type = r
        }
        static constructFromObject(t, e) {
            return t && (e = e || new v, t.hasOwnProperty("metadata") && (e.metadata = y.constructFromObject(t.metadata)), t.hasOwnProperty("tcString") && (e.tcString = h.convertToType(t.tcString, "String")), t.hasOwnProperty("type") && (e.type = h.convertToType(t.type, "String")), t.hasOwnProperty("timestamp") && (e.timestamp = h.convertToType(t.timestamp, "Number"))), e
        }
    }
    v.prototype.metadata = void 0, v.prototype.tcString = void 0, v.prototype.type = void 0, v.prototype.timestamp = void 0, v.TypeEnum = {
        GRANT: "GRANT",
        REVOKE: "REVOKE"
    };
    var g = v;
    class w {
        constructor(t) {
            w.initialize(this, t)
        }
        static initialize(t, e) {
            t.itemId = e
        }
        static constructFromObject(t, e) {
            return t && (e = e || new w, t.hasOwnProperty("itemId") && (e.itemId = h.convertToType(t.itemId, "String")), t.hasOwnProperty("sourceId") && (e.sourceId = h.convertToType(t.sourceId, "String"))), e
        }
    }
    w.prototype.itemId = void 0, w.prototype.sourceId = void 0;
    var b = w;
    class T {
        constructor(t, e) {
            T.initialize(this, t, e)
        }
        static initialize(t, e, n) {
            t.label = e, t.payload = n
        }
        static constructFromObject(t, e) {
            return t && (e = e || new T, t.hasOwnProperty("label") && (e.label = h.convertToType(t.label, "String")), t.hasOwnProperty("payload") && (e.payload = h.convertToType(t.payload, {
                String: Object
            })), t.hasOwnProperty("content") && (e.content = b.constructFromObject(t.content)), t.hasOwnProperty("timestamp") && (e.timestamp = h.convertToType(t.timestamp, "Number"))), e
        }
    }
    T.prototype.label = void 0, T.prototype.payload = void 0, T.prototype.content = void 0, T.prototype.timestamp = void 0;
    var E = T;
    class O {
        constructor(t, e, n) {
            O.initialize(this, t, e, n)
        }
        static initialize(t, e, n, r) {
            t.events = e, t.source = n, t.metadata = r
        }
        static constructFromObject(t, e) {
            return t && (e = e || new O, t.hasOwnProperty("events") && (e.events = h.convertToType(t.events, [E])), t.hasOwnProperty("source") && (e.source = h.convertToType(t.source, "String")), t.hasOwnProperty("metadata") && (e.metadata = y.constructFromObject(t.metadata)), t.hasOwnProperty("accountId") && (e.accountId = h.convertToType(t.accountId, "String"))), e
        }
    }
    O.prototype.events = void 0, O.prototype.source = void 0, O.prototype.metadata = void 0, O.prototype.accountId = void 0;
    var S = O;
    class A {
        constructor(t) {
            A.initialize(this, t)
        }
        static initialize(t, e) {
            t.providerToken = e
        }
        static constructFromObject(t, e) {
            return t && (e = e || new A, t.hasOwnProperty("providerToken") && (e.providerToken = h.convertToType(t.providerToken, "String")), t.hasOwnProperty("provider") && (e.provider = h.convertToType(t.provider, "String")), t.hasOwnProperty("deviceIdentifier") && (e.deviceIdentifier = h.convertToType(t.deviceIdentifier, "String")), t.hasOwnProperty("identity") && (e.identity = p.constructFromObject(t.identity))), e
        }
    }
    A.prototype.providerToken = void 0, A.prototype.provider = void 0, A.prototype.deviceIdentifier = void 0, A.prototype.identity = void 0, A.ProviderEnum = {
        FIREBASE: "FIREBASE"
    };
    class C {
        constructor(t) {
            this.apiClient = t || h.instance
        }
        consentsPostWithHttpInfo(t) {
            let e = (t = t || {}).consent;
            return this.apiClient.callApi("/consents", "POST", {}, {}, {}, {}, e, [], ["application/json"], [], null, null)
        }
        consentsPost(t) {
            return this.consentsPostWithHttpInfo(t).then((function(t) {
                return t.data
            }))
        }
        eventsPostWithHttpInfo(t) {
            let e = (t = t || {}).eventDigest;
            return this.apiClient.callApi("/events", "POST", {}, {}, {}, {}, e, [], ["application/json"], [], null, null)
        }
        eventsPost(t) {
            return this.eventsPostWithHttpInfo(t).then((function(t) {
                return t.data
            }))
        }
    }
    class P extends h {
        constructor() {
            super(), this.basePath = "https://footballapi.pulselive.com/fdp-events", this.enableCookies = !0
        }
        callApi(t, e, n, r, o, i, s, u, c, l, d, h, f) {
            const p = [...arguments];
            if ("beacon" === e && a(window.navigator.sendBeacon) && (p[1] = "POST"), "beacon" !== p[1]) return super.callApi(...p);
            const m = this.buildUrl(t, n, h),
                y = { ...o,
                    type: "application/json"
                },
                v = new Blob([JSON.stringify(s)], y);
            return navigator.sendBeacon(m, v)
        }
    }
    class _ extends C {
        constructor(t) {
            super(t)
        }
        eventsBeacon(t = {}) {
            const e = t.eventDigest;
            return this.apiClient.callApi("/events", "beacon", {}, {}, {}, {}, e, [], ["application/json"], [], null, null, null)
        }
    }
    var x = n(0),
        I = n.n(x),
        k = n(1),
        B = n.n(k);

    function D(t, e, n) {
        ! function(t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t, e), e.set(t, n)
    }
    var M = new WeakMap,
        R = new WeakMap;
    class L {
        constructor(t, e = {}) {
            D(this, M, {
                writable: !0,
                value: void 0
            }), D(this, R, {
                writable: !0,
                value: void 0
            }), this.externalConfiguration = e, B()(this, R, t), B()(this, M, {}), this.assignConfiguration()
        }
        assignConfiguration() {
            B()(this, M, Object.assign({}, I()(this, R), this.externalConfiguration))
        }
        get defaults() {
            return I()(this, R)
        }
        get state() {
            return I()(this, M)
        }
        set state(t = {}) {
            return Object.assign(I()(this, M), t)
        }
    }
    const N = new class extends L {
            constructor() {
                super({
                    debug: !1,
                    tcf: !0,
                    autoInit: !0,
                    gtmEvents: !1
                }), this.assignConfiguration()
            }
        },
        j = new L;

    function U(t, e, n) {
        ! function(t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t, e), e.set(t, n)
    }

    function F(t, e = "info") {
        !0 === N.state.debug && console[e](t)
    }
    var G = new WeakMap;
    const H = new class {
        constructor() {
            U(this, G, {
                writable: !0,
                value: void 0
            }), B()(this, G, [])
        }
        log(t) {
            I()(this, G).push(t)
        }
        get contents() {
            return I()(this, G)
        }
    };
    var V = n(5),
        W = n.n(V);
    const z = t => t.map(t => t.value).join("");
    async function q() {
        const t = j.state.fingerprint;
        return a(t) ? await async function() {
            const t = await W.a.getPromise().then(z);
            return W.a.x64hash128(t, 17)
        }() : t
    }

    function X(t, e, n) {
        ! function(t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t, e), e.set(t, n)
    }
    var K = new WeakMap;
    class $ {
        constructor() {
            X(this, K, {
                writable: !0,
                value: void 0
            }), B()(this, K, []), this.clearQueueInterval = null, this.api = new C(new P)
        }
        requiredData() {
            return !a(j.state.fingerprint)
        }
        clearQueuedConsents() {
            if (!this.requiredData()) return;
            if (0 === I()(this, K).length) return clearInterval(this.clearQueueInterval), void(this.clearQueueInterval = null);
            const t = [...I()(this, K)];
            B()(this, K, []), t.forEach(t => this.send(t.tcString, t.type))
        }
        async send(t, e) {
            if (!this.requiredData()) return I()(this, K).push({
                tcString: t,
                type: e
            }), this.clearQueueInterval || (this.clearQueueInterval = setInterval(this.clearQueuedConsents.bind(this), 1e3)), null;
            const n = new y(await q(), j.state.sessionId);
            a(j.state.identity) || (n.identity = j.state.identity);
            const r = new g(n, t, e);
            return r.timestamp = Date.now(), this.api.consentsPost({
                consent: r
            }), F(r), r
        }
    }
    var J = n(2),
        Q = n.n(J);

    function Z(t, e) {
        tt(t, e), e.add(t)
    }

    function Y(t, e, n) {
        tt(t, e), e.set(t, n)
    }

    function tt(t, e) {
        if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function et(t, e, n) {
        if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
        return n
    }
    const nt = "fdp-".toUpperCase() + "SDK_READY_EVENT";
    var rt = new WeakMap,
        ot = new WeakMap,
        it = new WeakSet,
        at = new WeakSet,
        st = new WeakSet;

    function ut() {
        var t;
        !1 !== (null === (t = window.FDP) || void 0 === t || null === (t = t.config) || void 0 === t || null === (t = t.state) || void 0 === t ? void 0 : t.tcf) ? this.tcfEnabled() : I()(this, ot).forEach(t => t())
    }

    function ct(t, e) {
        e ? (B()(this, rt, t), I()(this, ot).forEach(t => t(I()(this, rt))), "useractioncomplete" === t.eventStatus && et(this, st, lt).call(this)) : console.warn("FDP Could not get TC Data. Check passed vendor IDs are valid")
    }

    function lt(t) {
        let e;
        if (a(t)) {
            const t = I()(this, rt).purpose.consents;
            e = Object.keys(I()(this, rt).purpose.consents).map(e => t[e]).join(",")
        } else e = t.toString();
        const n = window.localStorage.getItem("fdp-tc-user-consent");
        if (e !== n || !n) {
            let n;
            a(t) ? (n = this.blanketConsent() ? "GRANT" : "REVOKE", this.consentEmitter.send(I()(this, rt).tcString, n)) : (n = t ? "GRANT" : "REVOKE", this.consentEmitter.send(null, n)), window.localStorage.setItem("fdp-tc-user-consent", e)
        }
    }
    const dt = new class {
        constructor() {
            Z(this, st), Z(this, at), Z(this, it), Y(this, rt, {
                writable: !0,
                value: void 0
            }), Y(this, ot, {
                writable: !0,
                value: void 0
            }), B()(this, ot, []), this.consentEmitter = new $, document.body.addEventListener(nt, et(this, it, ut).bind(this))
        }
        tcfEnabled() {
            this.enabled = !a(window.__tcfapi), this.enabled ? window.__tcfapi("addEventListener", 2, et(this, at, ct).bind(this)) : requestAnimationFrame(this.tcfEnabled.bind(this))
        }
        addEventListener(t) {
            I()(this, ot).push(t), a(I()(this, rt)) || t(I()(this, rt))
        }
        blanketConsent() {
            var t;
            if ("function" == typeof N.state.oobConsentCallback) {
                const t = N.state.oobConsentCallback();
                return et(this, st, lt).call(this, t), t
            }
            if (N.state.oobVendorId && N.state.oobVendorCookie) {
                const t = Q.a.get(N.state.oobVendorCookie);
                if (void 0 === t) return !1;
                const e = JSON.parse(t),
                    n = Object.keys(e).find(t => t === N.state.oobVendorId);
                if (void 0 === e[n] || !1 === e[n]) return !1
            }
            if (null === (t = I()(this, rt)) || void 0 === t || !t.purpose) return !1;
            const e = Object.values(I()(this, rt).purpose.consents);
            return 10 === e.length && e.every(t => !0 === t)
        }
    };

    function ht() {
        const t = new URLSearchParams(window.location.search);
        return {
            placementId: t.get("placementId"),
            variantId: t.get("variantId")
        }
    }

    function ft(t, e, n) {
        ! function(t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t, e), e.set(t, n)
    }
    var pt = new WeakMap;
    class mt {
        constructor() {
            ft(this, pt, {
                writable: !0,
                value: void 0
            }), B()(this, pt, []), this.clearQueueInterval = null
        }
        clearQueuedEvents() {
            if (!this.consentAndRequiredData()) return [];
            if (0 === I()(this, pt).length) return this.clearQueueInterval && clearInterval(this.clearQueueInterval), this.clearQueueInterval = null, [];
            const t = [...I()(this, pt)];
            return B()(this, pt, []), t
        }
        consentAndRequiredData() {
            return dt.blanketConsent() && !a(j.state.fingerprint) && !a(j.state.sessionId) && ! function() {
                const {
                    placementId: t,
                    variantId: e
                } = ht();
                return !!t || !!e
            }()
        }
        beacon() {
            if (!this.consentAndRequiredData()) return I()(this, pt).push(...arguments), void(this.clearQueueInterval || (this.clearQueueInterval = setInterval(this.clearQueuedEvents.bind(this), 1e3)));
            F(Array.from(arguments)), F(Q.a.get())
        }
    }
    class yt extends mt {
        constructor() {
            super(), this.api = new _(new P)
        }
        clearQueuedEvents() {
            const t = super.clearQueuedEvents();
            return this.beacon(...t), t
        }
        async beacon() {
            super.beacon(...arguments);
            const t = y.constructFromObject({
                deviceIdentifier: await q(),
                sessionId: j.state.sessionId,
                cookies: {}
            }, null);
            a(j.state.identity) || (t.identity = j.state.identity);
            const e = new S(Array.from(arguments), "web", t);
            return F(e), this.consentAndRequiredData() ? (this.api.eventsBeacon({
                eventDigest: e
            }), e) : []
        }
    }
    class vt extends mt {
        clearQueuedEvents() {
            var t;
            const e = super.clearQueuedEvents();
            return null === (t = window.dataLayer) || void 0 === t || t.push(...e), e
        }
        beacon() {
            var t;
            !0 === N.state.gtmEvents && (super.beacon(...arguments), this.consentAndRequiredData() && (null === (t = window.dataLayer) || void 0 === t || t.push(...arguments)))
        }
    }

    function gt() {
        var t;
        const e = null === (t = document.querySelector('link[rel="canonical"]')) || void 0 === t ? void 0 : t.getAttribute("href");
        return e || window.location.href
    }
    class wt extends yt {
        constructor() {
            switch (super(), document.readyState) {
                case "interactive":
                case "complete":
                    this.process();
                    break;
                default:
                    document.addEventListener("DOMContentLoaded", this.process.bind(this))
            }
        }
        process() {
            const t = E.constructFromObject({
                label: "view",
                payload: {
                    url: gt()
                }
            }, null);
            return this.beacon(t), t
        }
    }
    const bt = {
        ARTICLE: "Article",
        VIDEO: "Video"
    };
    class Tt extends yt {
        constructor({
            contentFormat: t,
            contentId: e,
            contentTags: n
        }, r) {
            super();
            const o = Object.values(bt);
            if (!o.includes(t)) return console.warn("Invalid content format provided to FDP.viewContent(). Must be one of: " + o.join(", ")), this;
            if ("string" != typeof e || 0 === e.trim().length) return console.warn("Invalid content ID provided to FDP.viewContent()."), this;
            if (!Array.isArray(n)) return console.warn("Invalid content tags provided to FDP.viewContent(). Must be an array of strings"), this;
            const i = n.filter(t => "string" == typeof t);
            switch (i.length !== n.length && console.warn("One or more invalid content tags provided to FDP.viewContent(). Tag values should be strings. All other values will be ignored."), this.viewContentData = {
                contentFormat: t,
                contentId: e,
                contentTags: i
            }, this.onBeacon = r, document.readyState) {
                case "interactive":
                case "complete":
                    this.process();
                    break;
                default:
                    document.addEventListener("DOMContentLoaded", this.process.bind(this))
            }
        }
        process() {
            var t;
            if (!this.viewContentData) return null;
            const e = E.constructFromObject({
                label: "view-content",
                payload: {
                    url: gt(),
                    ...this.viewContentData
                }
            }, null);
            return null === (t = this.onBeacon) || void 0 === t || t.call(this, this.viewContentData.contentId), this.beacon(e), e
        }
    }
    class Et extends yt {
        constructor() {
            super()
        }
        url(t) {
            const e = E.constructFromObject({
                label: "share",
                payload: {
                    url: t
                }
            }, null);
            return this.beacon(e), e
        }
    }
    class Ot extends yt {
        constructor() {
            super();
            n(11).default.addEventListener("statechange", function(t) {
                "hidden" === t.newState && this.process()
            }.bind(this))
        }
        process() {
            const t = E.constructFromObject({
                label: "unload",
                payload: {
                    url: gt()
                }
            }, null);
            return this.beacon(t), t
        }
    }

    function St(t, e, n) {
        ! function(t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t, e), e.set(t, n)
    }
    var At = new WeakMap,
        Ct = new WeakMap,
        Pt = new WeakMap;
    class _t extends yt {
        constructor() {
            super(), St(this, At, {
                writable: !0,
                value: void 0
            }), St(this, Ct, {
                writable: !0,
                value: void 0
            }), St(this, Pt, {
                writable: !0,
                value: void 0
            }), B()(this, At, Date.now());
            n(11).default.addEventListener("statechange", function(t) {
                "hidden" === t.newState && this.process()
            }.bind(this))
        }
        process() {
            B()(this, Ct, Date.now()), B()(this, Pt, I()(this, Ct) - I()(this, At));
            const t = E.constructFromObject({
                label: "view duration",
                payload: {
                    viewStart: I()(this, At),
                    viewEnd: I()(this, Ct),
                    viewDuration: I()(this, Pt),
                    url: gt()
                }
            }, null);
            return this.beacon(t), t
        }
    }
    class xt extends E {
        constructor(t, e) {
            super();
            let n = "";
            n = t.toLowerCase().replace("@", ""), n = n.replace(/[^a-z-]/g, "-"), E.initialize(this, n, e)
        }
    }
    var It = n(6);
    class kt {
        constructor(t, e) {
            i()(this, "placements", []), i()(this, "placementElements", []), this.placementElements = t, this.init(e)
        }
        init(t) {
            this.embed(t)
        }
        embed(t) {
            this.placementElements.length && this.placementElements.forEach(async e => {
                const n = e.getAttribute("data-fdp-placement");
                if (n) {
                    this.placements.push(n);
                    const r = await this.hashString(t);
                    this.getWidgetData(e, n, r)
                }
            })
        }
        async hashString(t) {
            const e = t.userIdentity || t.fingerprint,
                n = (new TextEncoder).encode(e),
                r = await crypto.subtle.digest("SHA-256", n);
            return Array.from(new Uint8Array(r)).map(t => t.toString(16).padStart(2, "0")).join("")
        }
        getLanguage(t) {
            const e = window.navigator.language || window.navigator.userLanguage;
            if (t[e]) return e;
            const n = e.split("-")[0],
                r = Object.keys(t).find(t => t.includes(n + "-"));
            return r || null
        }
        getWidgetData(t, e, n) {
            const r = a(j.state.identity) ? "ANONYMOUS" : "REGISTERED";
            fetch(`${"https://widget-configuration."+{}.HOSTNAME}/widgets?placementId=${e}&userIdentifier=${n}&userType=${r}`, {
                method: "GET",
                headers: new Headers({
                    "x-fdp-sdk-platform": "web"
                })
            }).then(t => {
                if (H.log(`${t.status} ${t.url}`), !t.ok) throw new Error("FDP placement unsuccessful");
                return t.json()
            }).then(({
                config: e,
                ...n
            }) => {
                window.System.import(e.widget.microFrontend).then(r => {
                    this.createAndMountParcel(r, t, n, e)
                })
            }).catch(t => {
                F(t, "warn")
            })
        }
        createParcelProps(t, e, n, r) {
            if (!n.placementId) throw new Error("placementId is a required argument of createParcelProps()");
            if (!n.variantId) throw new Error("variantId is a required argument of createParcelProps()");
            if (!e) throw new Error("language is a required argument of createParcelProps()");
            if (!r.translations[e]) throw new Error("Missing translations for language: " + e);
            const {
                translations: o,
                widget: i
            } = r;
            return {
                domElement: t.attachShadow({
                    mode: "open"
                }),
                externalConfiguration: o[e],
                eventData: {
                    id: n.placementId,
                    variant: n.variantId,
                    language: e,
                    ...n
                },
                widget: i
            }
        }
        createAndMountParcel(t, e, n, r) {
            var o;
            const i = null !== (o = this.getLanguage(r.translations)) && void 0 !== o ? o : t.defaultProps.defaultLanguage,
                s = this.createParcelProps(e, i, n, r);
            a(N.state.zIndex) || (s.zIndex = Number(N.state.zIndex)), It.a(t.PromoParcel, s), It.b()
        }
    }
    class Bt extends kt {
        embed() {
            const t = this.placementElements[0],
                {
                    placementId: e,
                    variantId: n
                } = ht();
            var r;
            if (!t || !e || !n) throw new Error(`Failed to get embed. Missing one of placementId: ${e}, variantId: ${n}, container: ${null==t||null===(r=t.dataset)||void 0===r?void 0:r["data-fdp-placement"]}`);
            this.placements.push(e), this.getWidgetData(t, e, n)
        }
        getURLParameterByName(t, e = window.location.search) {
            return new URLSearchParams(e).get(t)
        }
        getWidgetData(t, e, n) {
            if (!n) return void console.warn("Development mode detected but no variantId passed to widget renderer");
            fetch(`${"https://widget-configuration."+{}.HOSTNAME}/variants/${n}`, {
                method: "GET",
                headers: new Headers({
                    "x-fdp-sdk-platform": "web"
                })
            }).then(t => {
                if (H.log(`${t.status} ${t.url}`), !t.ok) throw new Error("FDP placement unsuccessful");
                return t.json()
            }).then(r => {
                window.System.import(r.widget.microFrontend).then(o => {
                    this.createAndMountParcel(o, t, {
                        placementId: e,
                        variantId: n
                    }, {
                        translations: r.translations,
                        widget: r.widget
                    })
                })
            }).catch(t => {
                F(t, "warn")
            })
        }
    }

    function Dt(t, e) {
        ! function(t, e) {
            if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t, e), e.add(t)
    }
    const Mt = {
            debug: !1,
            tcf: !0,
            autoInit: !0
        },
        Rt = "fdp-".toUpperCase() + "SDK_READY_EVENT";
    var Lt, Nt = new WeakSet;
    class jt {
        constructor(t = Mt) {
            Dt(this, Nt), i()(this, "CONTENT_FORMAT", bt), this.config = N, this.Event = xt, this.eventMetadata = j, this.config.state = t, this.widgetsInitialised = !1, this.rendererInstances = {
                dev: null,
                prod: null
            }, this._viewContentEventContentIds = []
        }
        init(t = r) {
            var e;
            this.share = new Et, this.emit = new yt, this.emitGtmEvent = new vt, null !== (e = this.config.state) && void 0 !== e && e.telemetryEvents && (new Ot, new _t), dt.addEventListener(() => {
                (function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return n
                })(this, Nt, Ut).call(this)
            }), t.call(this), document.body.dispatchEvent(new window.CustomEvent(Rt))
        }
        attachIdentity(t, e) {
            const n = () => {
                j.state = {
                    identity: dt.blanketConsent() ? new p(t, e) : null
                }
            };
            this.config.state.tcf ? dt.addEventListener(n) : n()
        }
        set debug(t) {
            N.state = {
                debug: t
            }
        }
        get debug() {
            return N.state.debug
        }
        set oobVendorId(t) {
            N.state = {
                oobVendorId: t
            }
        }
        get oobVendorId() {
            return N.state.oobVendorId
        }
        set oobVendorCookie(t) {
            N.state = {
                oobVendorCookie: t
            }
        }
        get oobVendorCookie() {
            return N.state.oobVendorCookie
        }
        set oobConsentCallback(t) {
            N.state = {
                oobConsentCallback: t
            }
        }
        get oobConsentCallback() {
            return N.state.oobConsentCallback
        }
        get viewContentEventContentIds() {
            return this._viewContentEventContentIds
        }
        view() {
            return new wt
        }
        viewContent(t) {
            return this.viewContentEventContentIds.some(e => e === t.contentId) ? null : new Tt(t, t => {
                this._viewContentEventContentIds.push(t)
            })
        }
        diagnostics() {
            var t, e;
            const n = [{
                name: "Consent Signal",
                value: dt.blanketConsent(),
                description: 'This value must be true before the SDK will process events and placements. \n\nPlease see the "Recipes" section in the documentation for further information.',
                style: t => t ? "background-color: lightgreen;" : "background-color: pink;"
            }, {
                name: "Fingerprint",
                value: (null === (t = j.state) || void 0 === t ? void 0 : t.fingerprint) || "Not set",
                description: 'The fingerprint attached to events. \n\n If this is "Not set", check "Consent Signal" is true.',
                style: t => "Not set" !== t ? "background-color: lightgreen;" : "background-color: pink;"
            }, {
                name: "SSO ID",
                value: (null === (e = j.state) || void 0 === e || null === (e = e.identity) || void 0 === e ? void 0 : e.ssoId) || "Not set",
                description: 'The user identifier attached to events. \n\nIf this is "Not set", an identity has not been attached to the SDK instance. See the "attachIdentity" function in the documentation.',
                style: t => "Not set" !== t ? "background-color: lightgreen;" : "background-color: pink;"
            }, {
                name: "Placements",
                value: () => {
                    var t, e, n, r;
                    if (!this.rendererInstances.dev && !this.rendererInstances.prod) return "Not initialised";
                    const o = [...null !== (t = null === (e = this.rendererInstances.dev) || void 0 === e ? void 0 : e.placements) && void 0 !== t ? t : [], ...null !== (n = null === (r = this.rendererInstances.prod) || void 0 === r ? void 0 : r.placements) && void 0 !== n ? n : []];
                    return 0 === o.length ? "No placements found" : o.join(", ")
                },
                description: 'The IDs of the placements found on this page. \n\nIf placements are "Not initialised", check "Consent Signal" is true and "Fingerprint" is set.',
                style: t => "Not initialised" !== t ? "background-color: lightgreen;" : "background-color: pink;"
            }, {
                name: "Widget HTTP Requests",
                value: H.contents.length ? H.contents : "No HTTP requests made",
                description: "The HTTP Status and URL of requests made to the widget endpoint. \n\n404: User or placement not found. \n200: User found for placement"
            }, {
                name: "Debug Mode",
                value: this.debug
            }];
            console.group("FDP Diagnostics"), n.forEach(t => {
                if (console.group(t.name), Array.isArray(t.value)) t.value.forEach(t => console.log(t));
                else switch (typeof t.value) {
                    case "function":
                        console.log(`${t.style?"%c":""}${t.name}: ${t.value()}`, "" + (t.style ? t.style(t.value()) : ""));
                        break;
                    default:
                        console.log(`${t.style?"%c":""}${t.name}: ${t.value}`, "" + (t.style ? t.style(t.value) : ""))
                }
                t.description && (console.groupCollapsed("%cHelp", "color: grey;"), console.log("%c" + t.description, "color: grey; font-style: italic;"), console.groupEnd()), console.groupEnd()
            }), console.groupEnd()
        }
    }
    async function Ut() {
        var t;
        if (!dt.blanketConsent() || this.widgetsInitialised) return;
        const e = document.querySelectorAll("[data-fdp-placement]");
        if (!e.length) return;
        const n = [...e].reduce((t, e) => {
                const n = function(t) {
                    const {
                        placementId: e,
                        variantId: n
                    } = ht();
                    return !!e && e === t && !!n
                }(e.dataset.fdpPlacement) ? "dev" : "prod";
                return { ...t,
                    [n]: [...t[n], e]
                }
            }, {
                dev: [],
                prod: []
            }),
            r = {
                userIdentity: (null === (t = this.eventMetadata.state.identity) || void 0 === t ? void 0 : t.ssoId) || null,
                fingerprint: await q()
            };
        n.dev.length && (this.rendererInstances.dev = new Bt(n.dev, r)), this.rendererInstances.prod = new kt(n.prod, r), this.widgetsInitialised = !0
    }
    var Ft = new Uint8Array(16);

    function Gt() {
        if (!Lt && !(Lt = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Lt(Ft)
    }
    var Ht = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (var Vt = function(t) {
            return "string" == typeof t && Ht.test(t)
        }, Wt = [], zt = 0; zt < 256; ++zt) Wt.push((zt + 256).toString(16).substr(1));
    var qt = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = (Wt[t[e + 0]] + Wt[t[e + 1]] + Wt[t[e + 2]] + Wt[t[e + 3]] + "-" + Wt[t[e + 4]] + Wt[t[e + 5]] + "-" + Wt[t[e + 6]] + Wt[t[e + 7]] + "-" + Wt[t[e + 8]] + Wt[t[e + 9]] + "-" + Wt[t[e + 10]] + Wt[t[e + 11]] + Wt[t[e + 12]] + Wt[t[e + 13]] + Wt[t[e + 14]] + Wt[t[e + 15]]).toLowerCase();
        if (!Vt(n)) throw TypeError("Stringified UUID is invalid");
        return n
    };
    var Xt = function(t, e, n) {
        var r = (t = t || {}).random || (t.rng || Gt)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {
            n = n || 0;
            for (var o = 0; o < 16; ++o) e[n + o] = r[o];
            return e
        }
        return qt(r)
    };
    const Kt = {
        secure: !0,
        sameSite: "strict"
    };

    function $t(t, e, n = {}) {
        return Q.a.set(t, e, { ...Kt,
            ...n
        })
    }

    function Jt() {
        const t = Q.a.get("fdp-session");
        if (!a(t)) return void(j.state = {
            sessionId: t
        });
        const e = Xt();
        j.state = {
                sessionId: e
            },
            function(t) {
                $t("fdp-session", t)
            }(e)
    }
    Kt.domain = function() {
        if ("undefined" == typeof window) return null;
        const t = window.location.hostname.split(".").reduceRight((t, e) => (t.push(`${e}${t.length>0?".":""}${t.slice(-1)}`), t), []);
        for (let e of t)
            if ($t("fdp-test", "Root domain test", { ...Kt,
                    domain: e
                }), Q.a.get("fdp-test")) return Q.a.remove("fdp-test", { ...Kt,
                domain: e
            }), e;
        return window.location.hostname
    }();

    function Qt() {
        dt.blanketConsent() || Q.a.remove("fdp-fingerprint");
        const t = Q.a.get("fdp-fingerprint");
        a(t) || (j.state = {
            fingerprint: t
        })
    }

    function Zt() {
        dt.blanketConsent() || Q.a.remove("fdp-session")
    }
    async function Yt() {
        const t = await q();
        return j.state = {
                fingerprint: t
            },
            function(t) {
                $t("fdp-fingerprint", t, {
                    expires: 30
                })
            }(t), t
    }
    const te = [];

    function ee() {
        if (requestIdleCallback(Yt, {
                timeout: 500
            }), dt.addEventListener(Qt), Jt(), dt.addEventListener(Zt), a(window.FDP)) window.FDP = new jt;
        else {
            const t = window.FDP.onInit || r;
            window.FDP = new jt(window.FDP.options), window.FDP.config.state.autoInit ? (window.FDP.init(t), window.FDP.view()) : te.length && te.forEach(t => t())
        }
    }
    switch (document.readyState) {
        case "interactive":
        case "complete":
            ee();
            break;
        default:
            window.FDP && (window.FDP.init = (...t) => {
                te.push(() => window.FDP.init(...t))
            }, window.FDP.view = () => {
                te.push(() => window.FDP.view())
            }, window.FDP.viewContent = (...t) => {
                te.push(() => window.FDP.viewContent(...t))
            }, window.FDP.attachIdentity = (...t) => {
                te.push(() => window.FDP.attachIdentity(...t))
            }), document.addEventListener("DOMContentLoaded", ee)
    }
}]);
//# sourceMappingURL=client.min.js.map