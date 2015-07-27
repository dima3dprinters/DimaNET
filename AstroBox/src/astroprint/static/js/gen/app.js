! function(a, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? c(a, !0) : function(a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return c(a)
    } : c(a)
}("undefined" != typeof window ? window : this, function(a, c) {
    function b(t) {
        var a = t.length,
            b = h.type(t);
        return "function" === b || h.isWindow(t) ? !1 : 1 === t.nodeType && a ? !0 : "array" === b || 0 === a || "number" == typeof a && 0 < a && a - 1 in t
    }

    function g(t, a, b) {
        if (h.isFunction(a)) return h.grep(t, function(t, e) {
            return !!a.call(t, e,
                t) !== b
        });
        if (a.nodeType) return h.grep(t, function(t) {
            return t === a !== b
        });
        if ("string" == typeof a) {
            if (jb.test(a)) return h.filter(a, t, b);
            a = h.filter(a, t)
        }
        return h.grep(t, function(t) {
            return 0 <= z.call(a, t) !== b
        })
    }

    function d(t, a) {
        for (;
            (t = t[a]) && 1 !== t.nodeType;);
        return t
    }

    function f(a) {
        var b = Na[a] = {};
        return h.each(a.match(ga) || [], function(a, t) {
            b[t] = !0
        }), b
    }

    function m() {
        I.removeEventListener("DOMContentLoaded", m, !1);
        a.removeEventListener("load", m, !1);
        h.ready()
    }

    function p() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = h.expando + p.uid++
    }

    function q(a, b, e) {
        var k;
        if (void 0 === e && 1 === a.nodeType)
            if (k = "data-" + b.replace(kb, "-$1").toLowerCase(), e = a.getAttribute(k), "string" == typeof e) {
                try {
                    e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : +e + "" === e ? +e : lb.test(e) ? h.parseJSON(e) : e
                } catch (c) {}
                V.set(a, b, e)
            } else e = void 0;
        return e
    }

    function s() {
        return !0
    }

    function v() {
        return !1
    }

    function u() {
        try {
            return I.activeElement
        } catch (a) {}
    }

    function B(a, b) {
        return h.nodeName(a, "table") && h.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function y(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function C(a) {
        var b = mb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function O(a, b) {
        for (var e = 0, h = a.length; h > e; e++) F.set(a[e], "globalEval", !b || F.get(b[e], "globalEval"))
    }

    function w(a, b) {
        var e, k, c, d, n, g;
        if (1 === b.nodeType) {
            if (F.hasData(a) && (e = F.access(a), k = F.set(b, e), g = e.events))
                for (c in delete k.handle, k.events = {}, g)
                    for (e = 0, k = g[c].length; k > e; e++) h.event.add(b,
                        c, g[c][e]);
            V.hasData(a) && (d = V.access(a), n = h.extend({}, d), V.set(b, n))
        }
    }

    function l(a, b) {
        var e = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && h.nodeName(a, b) ? h.merge([a], e) : e
    }

    function L(t, b) {
        var e, k = h(b.createElement(t)).appendTo(b.body),
            c = a.getDefaultComputedStyle && (e = a.getDefaultComputedStyle(k[0])) ? e.display : h.css(k[0], "display");
        return k.detach(), c
    }

    function R(a) {
        var b = I,
            e = Oa[a];
        return e || (e = L(a, b), "none" !== e && e || (xa = (xa ||
            h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = xa[0].contentDocument, b.write(), b.close(), e = L(a, b), xa.detach()), Oa[a] = e), e
    }

    function Y(a, b, e) {
        var k, c, d, n, g = a.style;
        return e = e || ya(a), e && (n = e.getPropertyValue(b) || e[b]), e && ("" !== n || h.contains(a.ownerDocument, a) || (n = h.style(a, b)), Ga.test(n) && Pa.test(b) && (k = g.width, c = g.minWidth, d = g.maxWidth, g.minWidth = g.maxWidth = g.width = n, n = e.width, g.width = k, g.minWidth = c, g.maxWidth = d)), void 0 !== n ? n + "" : n
    }

    function ca(a, b) {
        return {
            get: function() {
                return a() ?
                    void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function aa(a, b) {
        if (b in a) return b;
        for (var e = b[0].toUpperCase() + b.slice(1), h = b, k = Qa.length; k--;)
            if (b = Qa[k] + e, b in a) return b;
        return h
    }

    function Q(a, b, e) {
        return (a = nb.exec(b)) ? Math.max(0, a[1] - (e || 0)) + (a[2] || "px") : b
    }

    function U(a, b, e, k, c) {
        b = e === (k ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var d = 0; 4 > b; b += 2) "margin" === e && (d += h.css(a, e + ma[b], !0, c)), k ? ("content" === e && (d -= h.css(a, "padding" + ma[b], !0, c)), "margin" !== e && (d -= h.css(a, "border" + ma[b] + "Width", !0, c))) : (d += h.css(a, "padding" + ma[b], !0, c), "padding" !== e && (d += h.css(a, "border" + ma[b] + "Width", !0, c)));
        return d
    }

    function J(a, b, e) {
        var k = !0,
            c = "width" === b ? a.offsetWidth : a.offsetHeight,
            d = ya(a),
            n = "border-box" === h.css(a, "boxSizing", !1, d);
        if (0 >= c || null == c) {
            if (c = Y(a, b, d), (0 > c || null == c) && (c = a.style[b]), Ga.test(c)) return c;
            k = n && (K.boxSizingReliable() || c === a.style[b]);
            c = parseFloat(c) || 0
        }
        return c + U(a, b, e || (n ? "border" : "content"), k, d) + "px"
    }

    function ba(a, b) {
        for (var e, k, c, d = [], n = 0, g = a.length; g > n; n++) k = a[n], k.style &&
            (d[n] = F.get(k, "olddisplay"), e = k.style.display, b ? (d[n] || "none" !== e || (k.style.display = ""), "" === k.style.display && ta(k) && (d[n] = F.access(k, "olddisplay", R(k.nodeName)))) : (c = ta(k), "none" === e && c || F.set(k, "olddisplay", c ? e : h.css(k, "display"))));
        for (n = 0; g > n; n++) k = a[n], k.style && (b && "none" !== k.style.display && "" !== k.style.display || (k.style.display = b ? d[n] || "" : "none"));
        return a
    }

    function G(a, b, e, k, h) {
        return new G.prototype.init(a, b, e, k, h)
    }

    function H() {
        return setTimeout(function() {
            ia = void 0
        }), ia = h.now()
    }

    function X(a,
        b) {
        var e, k = 0,
            h = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > k; k += 2 - b) e = ma[k], h["margin" + e] = h["padding" + e] = a;
        return b && (h.opacity = h.width = a), h
    }

    function W(a, b, e) {
        for (var k, h = (ua[b] || []).concat(ua["*"]), c = 0, d = h.length; d > c; c++)
            if (k = h[c].call(e, b, a)) return k
    }

    function r(a, b) {
        var e, k, c, d, n;
        for (e in a)
            if (k = h.camelCase(e), c = b[k], d = a[e], h.isArray(d) && (c = d[1], d = a[e] = d[0]), e !== k && (a[k] = d, delete a[e]), n = h.cssHooks[k], n && "expand" in n)
                for (e in d = n.expand(d), delete a[k], d) e in a || (a[e] = d[e], b[e] = c);
            else b[k] = c
    }

    function M(a, b, e) {
        var k,
            c = 0,
            d = za.length,
            n = h.Deferred().always(function() {
                delete g.elem
            }),
            g = function() {
                if (k) return !1;
                for (var b = ia || H(), b = Math.max(0, f.startTime + f.duration - b), e = 1 - (b / f.duration || 0), A = 0, h = f.tweens.length; h > A; A++) f.tweens[A].run(e);
                return n.notifyWith(a, [f, e, b]), 1 > e && h ? b : (n.resolveWith(a, [f]), !1)
            },
            f = n.promise({
                elem: a,
                props: h.extend({}, b),
                opts: h.extend(!0, {
                    specialEasing: {}
                }, e),
                originalProperties: b,
                originalOptions: e,
                startTime: ia || H(),
                duration: e.duration,
                tweens: [],
                createTween: function(b, e) {
                    var A = h.Tween(a, f.opts,
                        b, e, f.opts.specialEasing[b] || f.opts.easing);
                    return f.tweens.push(A), A
                },
                stop: function(b) {
                    var e = 0,
                        A = b ? f.tweens.length : 0;
                    if (k) return this;
                    for (k = !0; A > e; e++) f.tweens[e].run(1);
                    return b ? n.resolveWith(a, [f, b]) : n.rejectWith(a, [f, b]), this
                }
            });
        e = f.props;
        for (r(e, f.opts.specialEasing); d > c; c++)
            if (b = za[c].call(f, a, e, f.opts)) return b;
        return h.map(e, W, f), h.isFunction(f.opts.start) && f.opts.start.call(a, f), h.fx.timer(h.extend(g, {
            elem: a,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function D(a) {
        return function(b, e) {
            "string" != typeof b && (e = b, b = "*");
            var k, c = 0,
                d = b.toLowerCase().match(ga) || [];
            if (h.isFunction(e))
                for (; k = d[c++];) "+" === k[0] ? (k = k.slice(1) || "*", (a[k] = a[k] || []).unshift(e)) : (a[k] = a[k] || []).push(e)
        }
    }

    function T(a, b, e, k) {
        function c(f) {
            var g;
            return d[f] = !0, h.each(a[f] || [], function(a, t) {
                var h = t(b, e, k);
                return "string" != typeof h || n || d[h] ? n ? !(g = h) : void 0 : (b.dataTypes.unshift(h), c(h), !1)
            }), g
        }
        var d = {},
            n = a === Ha;
        return c(b.dataTypes[0]) || !d["*"] && c("*")
    }

    function N(a, b) {
        var e, k, c = h.ajaxSettings.flatOptions || {};
        for (e in b) void 0 !== b[e] && ((c[e] ? a : k || (k = {}))[e] = b[e]);
        return k && h.extend(!0, a, k), a
    }

    function P(a, b, e, k) {
        var c;
        if (h.isArray(b)) h.each(b, function(b, A) {
            e || ob.test(a) ? k(a, A) : P(a + "[" + ("object" == typeof A ? b : "") + "]", A, e, k)
        });
        else if (e || "object" !== h.type(b)) k(a, b);
        else
            for (c in b) P(a + "[" + c + "]", b[c], e, k)
    }

    function Z(a) {
        return h.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var e = [],
        k = e.slice,
        n = e.concat,
        x = e.push,
        z = e.indexOf,
        S = {},
        fa = S.toString,
        ja = S.hasOwnProperty,
        K = {},
        I = a.document,
        h = function(a, b) {
            return new h.fn.init(a,
                b)
        },
        ka = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        na = /^-ms-/,
        pb = /-([\da-z])/gi,
        qb = function(a, b) {
            return b.toUpperCase()
        };
    h.fn = h.prototype = {
        jquery: "2.1.3",
        constructor: h,
        selector: "",
        length: 0,
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : k.call(this)
        },
        pushStack: function(a) {
            a = h.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function(a, b) {
            return h.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(h.map(this, function(b,
                e) {
                return a.call(b, e, b)
            }))
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: x,
        sort: e.sort,
        splice: e.splice
    };
    h.extend = h.fn.extend = function() {
        var a, b, e, k, c, d, n = arguments[0] || {},
            f = 1,
            g = arguments.length,
            l = !1;
        "boolean" == typeof n && (l = n, n = arguments[f] || {}, f++);
        "object" == typeof n || h.isFunction(n) || (n = {});
        for (f === g && (n = this, f--); g > f; f++)
            if (null != (a = arguments[f]))
                for (b in a) e = n[b], k = a[b], n !== k && (l && k && (h.isPlainObject(k) || (c = h.isArray(k))) ? (c ? (c = !1, d = e && h.isArray(e) ? e : []) : d = e && h.isPlainObject(e) ? e : {}, n[b] = h.extend(l, d, k)) : void 0 !== k && (n[b] = k));
        return n
    };
    h.extend({
        expando: "jQuery" + ("2.1.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === h.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !h.isArray(a) && 0 <= a - parseFloat(a) + 1
        },
        isPlainObject: function(a) {
            return "object" !== h.type(a) || a.nodeType || h.isWindow(a) ? !1 : a.constructor && !ja.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? S[fa.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, e = eval;
            (a = h.trim(a)) && (1 === a.indexOf("use strict") ?
                (b = I.createElement("script"), b.text = a, I.head.appendChild(b).parentNode.removeChild(b)) : e(a))
        },
        camelCase: function(a) {
            return a.replace(na, "ms-").replace(pb, qb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, e, k) {
            var h, c = 0,
                d = a.length,
                n = b(a);
            if (k)
                if (n)
                    for (; d > c && (h = e.apply(a[c], k), !1 !== h); c++);
                else
                    for (c in a) {
                        if (h = e.apply(a[c], k), !1 === h) break
                    } else if (n)
                        for (; d > c && (h = e.call(a[c], c, a[c]), !1 !== h); c++);
                    else
                        for (c in a)
                            if (h = e.call(a[c], c, a[c]), !1 === h) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ka, "")
        },
        makeArray: function(a, e) {
            var k = e || [];
            return null != a && (b(Object(a)) ? h.merge(k, "string" == typeof a ? [a] : a) : x.call(k, a)), k
        },
        inArray: function(a, b, e) {
            return null == b ? -1 : z.call(b, a, e)
        },
        merge: function(a, b) {
            for (var e = +b.length, k = 0, h = a.length; e > k; k++) a[h++] = b[k];
            return a.length = h, a
        },
        grep: function(a, b, e) {
            for (var k = [], h = 0, c = a.length, d = !e; c > h; h++) e = !b(a[h], h), e !== d && k.push(a[h]);
            return k
        },
        map: function(a, e, k) {
            var h, c = 0,
                d = a.length,
                f = [];
            if (b(a))
                for (; d >
                    c; c++) h = e(a[c], c, k), null != h && f.push(h);
            else
                for (c in a) h = e(a[c], c, k), null != h && f.push(h);
            return n.apply([], f)
        },
        guid: 1,
        proxy: function(a, b) {
            var e, c, d;
            return "string" == typeof b && (e = a[b], b = a, a = e), h.isFunction(a) ? (c = k.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(k.call(arguments)))
            }, d.guid = a.guid = a.guid || h.guid++, d) : void 0
        },
        now: Date.now,
        support: K
    });
    h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        S["[object " + b + "]"] = b.toLowerCase()
    });
    var qa =
        function(a) {
            function b(a, e, t, k) {
                var h, c, A, d, n;
                if ((e ? e.ownerDocument || e : W) !== C && y(e), e = e || C, t = t || [], d = e.nodeType, "string" != typeof a || !a || 1 !== d && 9 !== d && 11 !== d) return t;
                if (!k && I) {
                    if (11 !== d && (h = za.exec(a)))
                        if (A = h[1])
                            if (9 === d) {
                                if (c = e.getElementById(A), !c || !c.parentNode) return t;
                                if (c.id === A) return t.push(c), t
                            } else {
                                if (e.ownerDocument && (c = e.ownerDocument.getElementById(A)) && X(e, c) && c.id === A) return t.push(c), t
                            } else {
                        if (h[2]) return ka.apply(t, e.getElementsByTagName(a)), t;
                        if ((A = h[3]) && v.getElementsByClassName) return ka.apply(t,
                            e.getElementsByClassName(A)), t
                    }
                    if (v.qsa && (!K || !K.test(a))) {
                        if (c = h = P, A = e, n = 1 !== d && a, 1 === d && "object" !== e.nodeName.toLowerCase()) {
                            d = T(a);
                            (h = e.getAttribute("id")) ? c = h.replace(Aa, "\\$&"): e.setAttribute("id", c);
                            c = "[id='" + c + "'] ";
                            for (A = d.length; A--;) d[A] = c + r(d[A]);
                            A = ra.test(a) && l(e.parentNode) || e;
                            n = d.join(",")
                        }
                        if (n) try {
                            return ka.apply(t, A.querySelectorAll(n)), t
                        } catch (E) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return ja(a.replace(ia, "$1"), e, t, k)
            }

            function e() {
                function a(e, t) {
                    return b.push(e + " ") > D.cacheLength &&
                        delete a[b.shift()], a[e + " "] = t
                }
                var b = [];
                return a
            }

            function k(a) {
                return a[P] = !0, a
            }

            function h(a) {
                var b = C.createElement("div");
                try {
                    return !!a(b)
                } catch (e) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b)
                }
            }

            function c(a, b) {
                for (var e = a.split("|"), t = a.length; t--;) D.attrHandle[e[t]] = b
            }

            function d(a, b) {
                var e = b && a,
                    t = e && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
                if (t) return t;
                if (e)
                    for (; e = e.nextSibling;)
                        if (e === b) return -1;
                return a ? 1 : -1
            }

            function n(a) {
                return function(b) {
                    return "input" ===
                        b.nodeName.toLowerCase() && b.type === a
                }
            }

            function f(a) {
                return function(b) {
                    var e = b.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && b.type === a
                }
            }

            function g(a) {
                return k(function(b) {
                    return b = +b, k(function(e, t) {
                        for (var k, h = a([], e.length, b), c = h.length; c--;) e[k = h[c]] && (e[k] = !(t[k] = e[k]))
                    })
                })
            }

            function l(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function x() {}

            function r(a) {
                for (var b = 0, e = a.length, t = ""; e > b; b++) t += a[b].value;
                return t
            }

            function m(a, b, e) {
                var t = b.dir,
                    k = e && "parentNode" === t,
                    h = F++;
                return b.first ? function(b, e, h) {
                    for (; b = b[t];)
                        if (1 === b.nodeType || k) return a(b, e, h)
                } : function(b, e, c) {
                    var A, d, n = [L, h];
                    if (c)
                        for (; b = b[t];) {
                            if ((1 === b.nodeType || k) && a(b, e, c)) return !0
                        } else
                            for (; b = b[t];)
                                if (1 === b.nodeType || k) {
                                    if (d = b[P] || (b[P] = {}), (A = d[t]) && A[0] === L && A[1] === h) return n[2] = A[2];
                                    if (d[t] = n, n[2] = a(b, e, c)) return !0
                                }
                }
            }

            function z(a) {
                return 1 < a.length ? function(b, e, t) {
                    for (var k = a.length; k--;)
                        if (!a[k](b, e, t)) return !1;
                    return !0
                } : a[0]
            }

            function s(a, b, e, t, k) {
                for (var h, c = [], A = 0, d = a.length, n = null != b; d > A; A++)(h =
                    a[A]) && (!e || e(h, t, k)) && (c.push(h), n && b.push(A));
                return c
            }

            function M(a, e, t, h, c, d) {
                return h && !h[P] && (h = M(h)), c && !c[P] && (c = M(c, d)), k(function(k, d, n, E) {
                    var f, g, ea = [],
                        l = [],
                        x = d.length,
                        r;
                    if (!(r = k)) {
                        r = e || "*";
                        for (var m = n.nodeType ? [n] : n, Ba = [], z = 0, Ea = m.length; Ea > z; z++) b(r, m[z], Ba);
                        r = Ba
                    }
                    r = !a || !k && e ? r : s(r, ea, a, n, E);
                    m = t ? c || (k ? a : x || h) ? [] : d : r;
                    if (t && t(r, m, n, E), h)
                        for (f = s(m, l), h(f, [], n, E), n = f.length; n--;)(g = f[n]) && (m[l[n]] = !(r[l[n]] = g));
                    if (k) {
                        if (c || a) {
                            if (c) {
                                f = [];
                                for (n = m.length; n--;)(g = m[n]) && f.push(r[n] = g);
                                c(null, m = [], f, E)
                            }
                            for (n = m.length; n--;)(g = m[n]) && -1 < (f = c ? na(k, g) : ea[n]) && (k[f] = !(d[f] = g))
                        }
                    } else m = s(m === d ? m.splice(x, m.length) : m), c ? c(null, d, m, E) : ka.apply(d, m)
                })
            }

            function p(a) {
                var b, e, t, k = a.length,
                    h = D.relative[a[0].type];
                e = h || D.relative[" "];
                for (var c = h ? 1 : 0, A = m(function(a) {
                        return a === b
                    }, e, !0), d = m(function(a) {
                        return -1 < na(b, a)
                    }, e, !0), n = [function(a, e, t) {
                        a = !h && (t || e !== G) || ((b = e).nodeType ? A(a, e, t) : d(a, e, t));
                        return b = null, a
                    }]; k > c; c++)
                    if (e = D.relative[a[c].type]) n = [m(z(n), e)];
                    else {
                        if (e = D.filter[a[c].type].apply(null,
                                a[c].matches), e[P]) {
                            for (t = ++c; k > t && !D.relative[a[t].type]; t++);
                            return M(1 < c && z(n), 1 < c && r(a.slice(0, c - 1).concat({
                                value: " " === a[c - 2].type ? "*" : ""
                            })).replace(ia, "$1"), e, t > c && p(a.slice(c, t)), k > t && p(a = a.slice(t)), k > t && r(a))
                        }
                        n.push(e)
                    }
                return z(n)
            }

            function S(a, e) {
                var t = 0 < e.length,
                    h = 0 < a.length,
                    c = function(k, c, d, n, E) {
                        var f, g, ea, l = 0,
                            x = "0",
                            r = k && [],
                            m = [],
                            Ba = G,
                            z = k || h && D.find.TAG("*", E),
                            Ea = L += null == Ba ? 1 : Math.random() || .1,
                            M = z.length;
                        for (E && (G = c !== C && c); x !== M && null != (f = z[x]); x++) {
                            if (h && f) {
                                for (g = 0; ea = a[g++];)
                                    if (ea(f,
                                            c, d)) {
                                        n.push(f);
                                        break
                                    }
                                E && (L = Ea)
                            }
                            t && ((f = !ea && f) && l--, k && r.push(f))
                        }
                        if (l += x, t && x !== l) {
                            for (g = 0; ea = e[g++];) ea(r, m, c, d);
                            if (k) {
                                if (0 < l)
                                    for (; x--;) r[x] || m[x] || (m[x] = aa.call(n));
                                m = s(m)
                            }
                            ka.apply(n, m);
                            E && !k && 0 < m.length && 1 < l + e.length && b.uniqueSort(n)
                        }
                        return E && (L = Ea, G = Ba), r
                    };
                return t ? k(c) : c
            }
            var u, v, D, q, fa, T, B, ja, G, N, H, y, C, w, I, K, Z, O, X, P = "sizzle" + 1 * new Date,
                W = a.document,
                L = 0,
                F = 0,
                J = e(),
                R = e(),
                Q = e(),
                U = function(a, b) {
                    return a === b && (H = !0), 0
                },
                Y = {}.hasOwnProperty,
                V = [],
                aa = V.pop,
                ba = V.push,
                ka = V.push,
                ca = V.slice,
                na = function(a,
                    b) {
                    for (var e = 0, t = a.length; t > e; e++)
                        if (a[e] === b) return e;
                    return -1
                },
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
                ga = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)[\\x20\\t\\r\\n\\f]*\\]",
                ha = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)",
                ma = /[\x20\t\r\n\f]+/g,
                ia = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                qa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                sa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                ta = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
                ua = new RegExp(ha),
                wa = new RegExp("^" + da + "$"),
                la = {
                    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ga),
                    PSEUDO: new RegExp("^" + ha),
                    CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                    bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                    needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                },
                xa = /^(?:input|select|textarea|button)$/i,
                ya = /^h\d$/i,
                Ca = /^[^{]+\{\s*\[native \w/,
                za = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ra = /[+~]/,
                Aa = /'|\\/g,
                oa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
                pa = function(a, b, e) {
                    a = "0x" + b - 65536;
                    return a !== a || e ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                },
                va = function() {
                    y()
                };
            try {
                ka.apply(V = ca.call(W.childNodes), W.childNodes), V[W.childNodes.length].nodeType
            } catch (Da) {
                ka = {
                    apply: V.length ? function(a, b) {
                        ba.apply(a, ca.call(b))
                    } : function(a, b) {
                        for (var e = a.length, t = 0; a[e++] = b[t++];);
                        a.length = e - 1
                    }
                }
            }
            v = b.support = {};
            fa = b.isXML = function(a) {
                return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
            };
            y = b.setDocument = function(a) {
                var b, e, t = a ? a.ownerDocument ||
                    a : W;
                return t !== C && 9 === t.nodeType && t.documentElement ? (C = t, w = t.documentElement, e = t.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", va, !1) : e.attachEvent && e.attachEvent("onunload", va)), I = !fa(t), v.attributes = h(function(a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), v.getElementsByTagName = h(function(a) {
                        return a.appendChild(t.createComment("")), !a.getElementsByTagName("*").length
                    }), v.getElementsByClassName = Ca.test(t.getElementsByClassName), v.getById = h(function(a) {
                        return w.appendChild(a).id =
                            P, !t.getElementsByName || !t.getElementsByName(P).length
                    }), v.getById ? (D.find.ID = function(a, b) {
                        if ("undefined" != typeof b.getElementById && I) {
                            var e = b.getElementById(a);
                            return e && e.parentNode ? [e] : []
                        }
                    }, D.filter.ID = function(a) {
                        var b = a.replace(oa, pa);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete D.find.ID, D.filter.ID = function(a) {
                        var b = a.replace(oa, pa);
                        return function(a) {
                            return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                        }
                    }), D.find.TAG = v.getElementsByTagName ?
                    function(a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                    } : function(a, b) {
                        var e, t = [],
                            k = 0,
                            h = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; e = h[k++];) 1 === e.nodeType && t.push(e);
                            return t
                        }
                        return h
                    }, D.find.CLASS = v.getElementsByClassName && function(a, b) {
                        return I ? b.getElementsByClassName(a) : void 0
                    }, Z = [], K = [], (v.qsa = Ca.test(t.querySelectorAll)) && (h(function(a) {
                        w.appendChild(a).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>";
                        a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        a.querySelectorAll("[selected]").length || K.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        a.querySelectorAll("[id~=" + P + "-]").length || K.push("~=");
                        a.querySelectorAll(":checked").length || K.push(":checked");
                        a.querySelectorAll("a#" + P + "+*").length || K.push(".#.+[+~]")
                    }), h(function(a) {
                        var b =
                            t.createElement("input");
                        b.setAttribute("type", "hidden");
                        a.appendChild(b).setAttribute("name", "D");
                        a.querySelectorAll("[name=d]").length && K.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                        a.querySelectorAll(":enabled").length || K.push(":enabled", ":disabled");
                        a.querySelectorAll("*,:x");
                        K.push(",.*:")
                    })), (v.matchesSelector = Ca.test(O = w.matches || w.webkitMatchesSelector || w.mozMatchesSelector || w.oMatchesSelector || w.msMatchesSelector)) && h(function(a) {
                        v.disconnectedMatch = O.call(a, "div");
                        O.call(a, "[s!='']:x");
                        Z.push("!=",
                            ha)
                    }), K = K.length && new RegExp(K.join("|")), Z = Z.length && new RegExp(Z.join("|")), b = Ca.test(w.compareDocumentPosition), X = b || Ca.test(w.contains) ? function(a, b) {
                        var e = 9 === a.nodeType ? a.documentElement : a,
                            t = b && b.parentNode;
                        return a === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(t)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, U = b ? function(a, b) {
                        if (a === b) return H = !0, 0;
                        var e = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return e ? e : (e = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & e || !v.sortDetached && b.compareDocumentPosition(a) === e ? a === t || a.ownerDocument === W && X(W, a) ? -1 : b === t || b.ownerDocument === W && X(W, b) ? 1 : N ? na(N, a) - na(N, b) : 0 : 4 & e ? -1 : 1)
                    } : function(a, b) {
                        if (a === b) return H = !0, 0;
                        var e, k = 0;
                        e = a.parentNode;
                        var h = b.parentNode,
                            c = [a],
                            A = [b];
                        if (!e || !h) return a === t ? -1 : b === t ? 1 : e ? -1 : h ? 1 : N ? na(N, a) - na(N, b) : 0;
                        if (e === h) return d(a, b);
                        for (e = a; e = e.parentNode;) c.unshift(e);
                        for (e = b; e = e.parentNode;) A.unshift(e);
                        for (; c[k] === A[k];) k++;
                        return k ? d(c[k], A[k]) : c[k] === W ? -1 : A[k] === W ? 1 : 0
                    }, t) : C
            };
            b.matches = function(a, e) {
                return b(a, null, null, e)
            };
            b.matchesSelector = function(a, e) {
                if ((a.ownerDocument || a) !== C && y(a), e = e.replace(ta, "='$1']"), !(!v.matchesSelector || !I || Z && Z.test(e) || K && K.test(e))) try {
                    var t = O.call(a, e);
                    if (t || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return t
                } catch (k) {}
                return 0 < b(e, C, null, [a]).length
            };
            b.contains = function(a, b) {
                return (a.ownerDocument || a) !== C && y(a), X(a, b)
            };
            b.attr = function(a, b) {
                (a.ownerDocument ||
                    a) !== C && y(a);
                var e = D.attrHandle[b.toLowerCase()],
                    e = e && Y.call(D.attrHandle, b.toLowerCase()) ? e(a, b, !I) : void 0;
                return void 0 !== e ? e : v.attributes || !I ? a.getAttribute(b) : (e = a.getAttributeNode(b)) && e.specified ? e.value : null
            };
            b.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a);
            };
            b.uniqueSort = function(a) {
                var b, e = [],
                    t = 0,
                    k = 0;
                if (H = !v.detectDuplicates, N = !v.sortStable && a.slice(0), a.sort(U), H) {
                    for (; b = a[k++];) b === a[k] && (t = e.push(k));
                    for (; t--;) a.splice(e[t], 1)
                }
                return N = null, a
            };
            q = b.getText = function(a) {
                var b,
                    e = "",
                    t = 0;
                if (b = a.nodeType)
                    if (1 === b || 9 === b || 11 === b) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) e += q(a)
                    } else {
                        if (3 === b || 4 === b) return a.nodeValue
                    } else
                    for (; b = a[t++];) e += q(b);
                return e
            };
            D = b.selectors = {
                cacheLength: 50,
                createPseudo: k,
                match: la,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(oa, pa), a[3] = (a[3] ||
                            a[4] || a[5] || "").replace(oa, pa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, e = !a[6] && a[2];
                        return la.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : e && ua.test(e) && (b = T(e, !0)) && (b = e.indexOf(")", e.length - b) - e.length) && (a[0] = a[0].slice(0, b), a[2] = e.slice(0, b)), a.slice(0,
                            3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(oa, pa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = J[a + " "];
                        return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && J(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, e, t) {
                        return function(k) {
                            k = b.attr(k, a);
                            return null == k ? "!=" === e : e ? (k +=
                                "", "=" === e ? k === t : "!=" === e ? k !== t : "^=" === e ? t && 0 === k.indexOf(t) : "*=" === e ? t && -1 < k.indexOf(t) : "$=" === e ? t && k.slice(-t.length) === t : "~=" === e ? -1 < (" " + k.replace(ma, " ") + " ").indexOf(t) : "|=" === e ? k === t || k.slice(0, t.length + 1) === t + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, e, t, k) {
                        var h = "nth" !== a.slice(0, 3),
                            c = "last" !== a.slice(-4),
                            A = "of-type" === b;
                        return 1 === t && 0 === k ? function(a) {
                            return !!a.parentNode
                        } : function(b, e, d) {
                            var n, E, f, g, ea;
                            e = h !== c ? "nextSibling" : "previousSibling";
                            var l = b.parentNode,
                                x = A && b.nodeName.toLowerCase();
                            d = !d &&
                                !A;
                            if (l) {
                                if (h) {
                                    for (; e;) {
                                        for (E = b; E = E[e];)
                                            if (A ? E.nodeName.toLowerCase() === x : 1 === E.nodeType) return !1;
                                        ea = e = "only" === a && !ea && "nextSibling"
                                    }
                                    return !0
                                }
                                if (ea = [c ? l.firstChild : l.lastChild], c && d)
                                    for (d = l[P] || (l[P] = {}), n = d[a] || [], g = n[0] === L && n[1], f = n[0] === L && n[2], E = g && l.childNodes[g]; E = ++g && E && E[e] || (f = g = 0) || ea.pop();) {
                                        if (1 === E.nodeType && ++f && E === b) {
                                            d[a] = [L, g, f];
                                            break
                                        }
                                    } else if (d && (n = (b[P] || (b[P] = {}))[a]) && n[0] === L) f = n[1];
                                    else
                                        for (;
                                            (E = ++g && E && E[e] || (f = g = 0) || ea.pop()) && ((A ? E.nodeName.toLowerCase() !== x : 1 !== E.nodeType) ||
                                                !++f || (d && ((E[P] || (E[P] = {}))[a] = [L, f]), E !== b)););
                                return f -= k, f === t || 0 === f % t && 0 <= f / t
                            }
                        }
                    },
                    PSEUDO: function(a, e) {
                        var t, h = D.pseudos[a] || D.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return h[P] ? h(e) : 1 < h.length ? (t = [a, a, "", e], D.setFilters.hasOwnProperty(a.toLowerCase()) ? k(function(a, b) {
                            for (var t, k = h(a, e), c = k.length; c--;) t = na(a, k[c]), a[t] = !(b[t] = k[c])
                        }) : function(a) {
                            return h(a, 0, t)
                        }) : h
                    }
                },
                pseudos: {
                    not: k(function(a) {
                        var b = [],
                            e = [],
                            t = B(a.replace(ia, "$1"));
                        return t[P] ? k(function(a, b, e, k) {
                            var h;
                            e = t(a, null, k, []);
                            for (k = a.length; k--;)(h = e[k]) && (a[k] = !(b[k] = h))
                        }) : function(a, k, h) {
                            return b[0] = a, t(b, null, h, e), b[0] = null, !e.pop()
                        }
                    }),
                    has: k(function(a) {
                        return function(e) {
                            return 0 < b(a, e).length
                        }
                    }),
                    contains: k(function(a) {
                        return a = a.replace(oa, pa),
                            function(b) {
                                return -1 < (b.textContent || b.innerText || q(b)).indexOf(a)
                            }
                    }),
                    lang: k(function(a) {
                        return wa.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(oa, pa).toLowerCase(),
                            function(b) {
                                var e;
                                do
                                    if (e = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return e =
                                        e.toLowerCase(), e === a || 0 === e.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var e = a.location && a.location.hash;
                        return e && e.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === w
                    },
                    focus: function(a) {
                        return a === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return !1 === a.disabled
                    },
                    disabled: function(a) {
                        return !0 === a.disabled
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b &&
                            !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (6 > a.nodeType) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !D.pseudos.empty(a)
                    },
                    header: function(a) {
                        return ya.test(a.nodeName)
                    },
                    input: function(a) {
                        return xa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" ===
                            a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: g(function() {
                        return [0]
                    }),
                    last: g(function(a, b) {
                        return [b - 1]
                    }),
                    eq: g(function(a, b, e) {
                        return [0 > e ? e + b : e]
                    }),
                    even: g(function(a, b) {
                        for (var e = 0; b > e; e += 2) a.push(e);
                        return a
                    }),
                    odd: g(function(a, b) {
                        for (var e = 1; b > e; e += 2) a.push(e);
                        return a
                    }),
                    lt: g(function(a, b, e) {
                        for (b = 0 > e ? e + b : e; 0 <= --b;) a.push(b);
                        return a
                    }),
                    gt: g(function(a, b, e) {
                        for (e = 0 > e ? e + b : e; ++e < b;) a.push(e);
                        return a
                    })
                }
            };
            D.pseudos.nth = D.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) D.pseudos[u] = n(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) D.pseudos[u] = f(u);
            x.prototype = D.filters = D.pseudos;
            D.setFilters = new x;
            T = b.tokenize = function(a, e) {
                var t, k, h, c, d, n, E;
                if (d = R[a + " "]) return e ? 0 : d.slice(0);
                d = a;
                n = [];
                for (E = D.preFilter; d;) {
                    t && !(k = qa.exec(d)) || (k && (d = d.slice(k[0].length) || d), n.push(h = []));
                    t = !1;
                    (k = sa.exec(d)) && (t = k.shift(), h.push({
                        value: t,
                        type: k[0].replace(ia, " ")
                    }), d = d.slice(t.length));
                    for (c in D.filter) !(k = la[c].exec(d)) || E[c] && !(k = E[c](k)) || (t = k.shift(), h.push({
                            value: t,
                            type: c,
                            matches: k
                        }),
                        d = d.slice(t.length));
                    if (!t) break
                }
                return e ? d.length : d ? b.error(a) : R(a, n).slice(0)
            };
            return B = b.compile = function(a, b) {
                    var e, t = [],
                        k = [],
                        h = Q[a + " "];
                    if (!h) {
                        b || (b = T(a));
                        for (e = b.length; e--;) h = p(b[e]), h[P] ? t.push(h) : k.push(h);
                        h = Q(a, S(k, t));
                        h.selector = a
                    }
                    return h
                }, ja = b.select = function(a, b, e, t) {
                    var k, h, c, A, d, n = "function" == typeof a && a,
                        E = !t && T(a = n.selector || a);
                    if (e = e || [], 1 === E.length) {
                        if (h = E[0] = E[0].slice(0), 2 < h.length && "ID" === (c = h[0]).type && v.getById && 9 === b.nodeType && I && D.relative[h[1].type]) {
                            if (b = (D.find.ID(c.matches[0].replace(oa,
                                    pa), b) || [])[0], !b) return e;
                            n && (b = b.parentNode);
                            a = a.slice(h.shift().value.length)
                        }
                        for (k = la.needsContext.test(a) ? 0 : h.length; k-- && (c = h[k], !D.relative[A = c.type]);)
                            if ((d = D.find[A]) && (t = d(c.matches[0].replace(oa, pa), ra.test(h[0].type) && l(b.parentNode) || b))) {
                                if (h.splice(k, 1), a = t.length && r(h), !a) return ka.apply(e, t), e;
                                break
                            }
                    }
                    return (n || B(a, E))(t, b, !I, e, ra.test(a) && l(b.parentNode) || b), e
                }, v.sortStable = P.split("").sort(U).join("") === P, v.detectDuplicates = !!H, y(), v.sortDetached = h(function(a) {
                    return 1 & a.compareDocumentPosition(C.createElement("div"))
                }),
                h(function(a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || c("type|href|height|width", function(a, b, e) {
                    return e ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), v.attributes && h(function(a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || c("value", function(a, b, e) {
                    return e || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }), h(function(a) {
                    return null == a.getAttribute("disabled")
                }) || c("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    function(a, b, e) {
                        var t;
                        return e ? void 0 : !0 === a[b] ? b.toLowerCase() : (t = a.getAttributeNode(b)) && t.specified ? t.value : null
                    }), b
        }(a);
    h.find = qa;
    h.expr = qa.selectors;
    h.expr[":"] = h.expr.pseudos;
    h.unique = qa.uniqueSort;
    h.text = qa.getText;
    h.isXMLDoc = qa.isXML;
    h.contains = qa.contains;
    var Ra = h.expr.match.needsContext,
        Sa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        jb = /^.[^:#\[\.,]*$/;
    h.filter = function(a, b, e) {
        var k = b[0];
        return e && (a = ":not(" + a + ")"), 1 === b.length && 1 === k.nodeType ? h.find.matchesSelector(k, a) ? [k] : [] : h.find.matches(a, h.grep(b,
            function(a) {
                return 1 === a.nodeType
            }))
    };
    h.fn.extend({
        find: function(a) {
            var b, e = this.length,
                k = [],
                c = this;
            if ("string" != typeof a) return this.pushStack(h(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (h.contains(c[b], this)) return !0
            }));
            for (b = 0; e > b; b++) h.find(a, c[b], k);
            return k = this.pushStack(1 < e ? h.unique(k) : k), k.selector = this.selector ? this.selector + " " + a : a, k
        },
        filter: function(a) {
            return this.pushStack(g(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(g(this, a || [], !0))
        },
        is: function(a) {
            return !!g(this, "string" ==
                typeof a && Ra.test(a) ? h(a) : a || [], !1).length
        }
    });
    var ra, sb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (h.fn.init = function(a, b) {
        var e, k;
        if (!a) return this;
        if ("string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : sb.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || ra).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof h ? b[0] : b, h.merge(this, h.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : I, !0)), Sa.test(e[1]) && h.isPlainObject(b))
                    for (e in b) h.isFunction(this[e]) ? this[e](b[e]) :
                        this.attr(e, b[e]);
                return this
            }
            return k = I.getElementById(e[2]), k && k.parentNode && (this.length = 1, this[0] = k), this.context = I, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : h.isFunction(a) ? "undefined" != typeof ra.ready ? ra.ready(a) : a(h) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
    }).prototype = h.fn;
    ra = h(I);
    var tb = /^(?:parents|prev(?:Until|All))/,
        ub = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    h.extend({
        dir: function(a, b, e) {
            for (var k = [], c = void 0 !== e;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (c && h(a).is(e)) break;
                    k.push(a)
                }
            return k
        },
        sibling: function(a, b) {
            for (var e = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && e.push(a);
            return e
        }
    });
    h.fn.extend({
        has: function(a) {
            var b = h(a, this),
                e = b.length;
            return this.filter(function() {
                for (var a = 0; e > a; a++)
                    if (h.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var e, k = 0, c = this.length, d = [], n = Ra.test(a) || "string" != typeof a ? h(a, b || this.context) : 0; c > k; k++)
                for (e = this[k]; e && e !== b; e = e.parentNode)
                    if (11 >
                        e.nodeType && (n ? -1 < n.index(e) : 1 === e.nodeType && h.find.matchesSelector(e, a))) {
                        d.push(e);
                        break
                    }
            return this.pushStack(1 < d.length ? h.unique(d) : d)
        },
        index: function(a) {
            return a ? "string" == typeof a ? z.call(h(a), this[0]) : z.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(h.unique(h.merge(this.get(), h(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    h.each({
        parent: function(a) {
            return (a =
                a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return h.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, e) {
            return h.dir(a, "parentNode", e)
        },
        next: function(a) {
            return d(a, "nextSibling")
        },
        prev: function(a) {
            return d(a, "previousSibling")
        },
        nextAll: function(a) {
            return h.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return h.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, e) {
            return h.dir(a, "nextSibling", e)
        },
        prevUntil: function(a, b, e) {
            return h.dir(a, "previousSibling", e)
        },
        siblings: function(a) {
            return h.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return h.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || h.merge([], a.childNodes)
        }
    }, function(a, b) {
        h.fn[a] = function(e, k) {
            var c = h.map(this, b, e);
            return "Until" !== a.slice(-5) && (k = e), k && "string" == typeof k && (c = h.filter(k, c)), 1 < this.length && (ub[a] || h.unique(c), tb.test(a) && c.reverse()), this.pushStack(c)
        }
    });
    var ga = /\S+/g,
        Na = {};
    h.Callbacks = function(a) {
        a = "string" == typeof a ? Na[a] || f(a) : h.extend({}, a);
        var b, e, k, c, d, n, g = [],
            l = !a.once && [],
            x = function(h) {
                b =
                    a.memory && h;
                e = !0;
                n = c || 0;
                c = 0;
                d = g.length;
                for (k = !0; g && d > n; n++)
                    if (!1 === g[n].apply(h[0], h[1]) && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                k = !1;
                g && (l ? l.length && x(l.shift()) : b ? g = [] : r.disable())
            },
            r = {
                add: function() {
                    if (g) {
                        var e = g.length;
                        ! function rb(b) {
                            h.each(b, function(b, e) {
                                var k = h.type(e);
                                "function" === k ? a.unique && r.has(e) || g.push(e) : e && e.length && "string" !== k && rb(e)
                            })
                        }(arguments);
                        k ? d = g.length : b && (c = e, x(b))
                    }
                    return this
                },
                remove: function() {
                    return g && h.each(arguments, function(a, b) {
                        for (var e; - 1 < (e = h.inArray(b, g, e));) g.splice(e,
                            1), k && (d >= e && d--, n >= e && n--)
                    }), this
                },
                has: function(a) {
                    return a ? -1 < h.inArray(a, g) : !(!g || !g.length)
                },
                empty: function() {
                    return g = [], d = 0, this
                },
                disable: function() {
                    return g = l = b = void 0, this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return l = void 0, b || r.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(a, b) {
                    return !g || e && !l || (b = b || [], b = [a, b.slice ? b.slice() : b], k ? l.push(b) : x(b)), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return r
    };
    h.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", h.Callbacks("memory")]
                ],
                e = "pending",
                k = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return c.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return h.Deferred(function(e) {
                            h.each(b, function(b, t) {
                                var d = h.isFunction(a[b]) && a[b];
                                c[t[1]](function() {
                                    var a = d && d.apply(this, arguments);
                                    a && h.isFunction(a.promise) ? a.promise().done(e.resolve).fail(e.reject).progress(e.notify) :
                                        e[t[0] + "With"](this === k ? e.promise() : this, d ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? h.extend(a, k) : k
                    }
                },
                c = {};
            return k.pipe = k.then, h.each(b, function(a, t) {
                var h = t[2],
                    d = t[3];
                k[t[1]] = h.add;
                d && h.add(function() {
                    e = d
                }, b[1 ^ a][2].disable, b[2][2].lock);
                c[t[0]] = function() {
                    return c[t[0] + "With"](this === c ? k : this, arguments), this
                };
                c[t[0] + "With"] = h.fireWith
            }), k.promise(c), a && a.call(c, c), c
        },
        when: function(a) {
            var b = 0,
                e = k.call(arguments),
                c = e.length,
                d = 1 !== c || a && h.isFunction(a.promise) ? c : 0,
                n = 1 === d ? a : h.Deferred(),
                g = function(a, b, e) {
                    return function(t) {
                        b[a] = this;
                        e[a] = 1 < arguments.length ? k.call(arguments) : t;
                        e === f ? n.notifyWith(b, e) : --d || n.resolveWith(b, e)
                    }
                },
                f, l, x;
            if (1 < c)
                for (f = Array(c), l = Array(c), x = Array(c); c > b; b++) e[b] && h.isFunction(e[b].promise) ? e[b].promise().done(g(b, x, e)).fail(n.reject).progress(g(b, l, f)) : --d;
            return d || n.resolveWith(x, e), n.promise()
        }
    });
    var Aa;
    h.fn.ready = function(a) {
        return h.ready.promise().done(a), this
    };
    h.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? h.readyWait++ :
                h.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --h.readyWait : h.isReady) || (h.isReady = !0, !0 !== a && 0 < --h.readyWait || (Aa.resolveWith(I, [h]), h.fn.triggerHandler && (h(I).triggerHandler("ready"), h(I).off("ready"))))
        }
    });
    h.ready.promise = function(b) {
        return Aa || (Aa = h.Deferred(), "complete" === I.readyState ? setTimeout(h.ready) : (I.addEventListener("DOMContentLoaded", m, !1), a.addEventListener("load", m, !1))), Aa.promise(b)
    };
    h.ready.promise();
    var ha = h.access = function(a, b, e, k, c, d, n) {
        var g = 0,
            f = a.length,
            l = null == e;
        if ("object" === h.type(e))
            for (g in c = !0, e) h.access(a, b, g, e[g], !0, d, n);
        else if (void 0 !== k && (c = !0, h.isFunction(k) || (n = !0), l && (n ? (b.call(a, k), b = null) : (l = b, b = function(a, b, e) {
                return l.call(h(a), e)
            })), b))
            for (; f > g; g++) b(a[g], e, n ? k : k.call(a[g], g, b(a[g], e)));
        return c ? a : l ? b.call(a) : f ? b(a[0], e) : d
    };
    h.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    p.uid = 1;
    p.accepts = h.acceptData;
    p.prototype = {
        key: function(a) {
            if (!p.accepts(a)) return 0;
            var b = {},
                e = a[this.expando];
            if (!e) {
                e = p.uid++;
                try {
                    b[this.expando] = {
                        value: e
                    }, Object.defineProperties(a,
                        b)
                } catch (k) {
                    b[this.expando] = e, h.extend(a, b)
                }
            }
            return this.cache[e] || (this.cache[e] = {}), e
        },
        set: function(a, b, e) {
            var k;
            a = this.key(a);
            var c = this.cache[a];
            if ("string" == typeof b) c[b] = e;
            else if (h.isEmptyObject(c)) h.extend(this.cache[a], b);
            else
                for (k in b) c[k] = b[k];
            return c
        },
        get: function(a, b) {
            var e = this.cache[this.key(a)];
            return void 0 === b ? e : e[b]
        },
        access: function(a, b, e) {
            var k;
            return void 0 === b || b && "string" == typeof b && void 0 === e ? (k = this.get(a, b), void 0 !== k ? k : this.get(a, h.camelCase(b))) : (this.set(a, b, e), void 0 !==
                e ? e : b)
        },
        remove: function(a, b) {
            var e, k, c = this.key(a),
                d = this.cache[c];
            if (void 0 === b) this.cache[c] = {};
            else
                for (h.isArray(b) ? k = b.concat(b.map(h.camelCase)) : (e = h.camelCase(b), b in d ? k = [b, e] : (k = e, k = k in d ? [k] : k.match(ga) || [])), e = k.length; e--;) delete d[k[e]]
        },
        hasData: function(a) {
            return !h.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var F = new p,
        V = new p,
        lb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        kb = /([A-Z])/g;
    h.extend({
        hasData: function(a) {
            return V.hasData(a) ||
                F.hasData(a)
        },
        data: function(a, b, e) {
            return V.access(a, b, e)
        },
        removeData: function(a, b) {
            V.remove(a, b)
        },
        _data: function(a, b, e) {
            return F.access(a, b, e)
        },
        _removeData: function(a, b) {
            F.remove(a, b)
        }
    });
    h.fn.extend({
        data: function(a, b) {
            var e, k, c, d = this[0],
                n = d && d.attributes;
            if (void 0 === a) {
                if (this.length && (c = V.get(d), 1 === d.nodeType && !F.get(d, "hasDataAttrs"))) {
                    for (e = n.length; e--;) n[e] && (k = n[e].name, 0 === k.indexOf("data-") && (k = h.camelCase(k.slice(5)), q(d, k, c[k])));
                    F.set(d, "hasDataAttrs", !0)
                }
                return c
            }
            return "object" == typeof a ?
                this.each(function() {
                    V.set(this, a)
                }) : ha(this, function(b) {
                    var e, k = h.camelCase(a);
                    if (d && void 0 === b) {
                        if ((e = V.get(d, a), void 0 !== e) || (e = V.get(d, k), void 0 !== e) || (e = q(d, k, void 0), void 0 !== e)) return e
                    } else this.each(function() {
                        var e = V.get(this, k);
                        V.set(this, k, b); - 1 !== a.indexOf("-") && void 0 !== e && V.set(this, a, b)
                    })
                }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                V.remove(this, a)
            })
        }
    });
    h.extend({
        queue: function(a, b, e) {
            var k;
            return a ? (b = (b || "fx") + "queue", k = F.get(a, b), e && (!k ||
                h.isArray(e) ? k = F.access(a, b, h.makeArray(e)) : k.push(e)), k || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var e = h.queue(a, b),
                k = e.length,
                c = e.shift(),
                d = h._queueHooks(a, b),
                n = function() {
                    h.dequeue(a, b)
                };
            "inprogress" === c && (c = e.shift(), k--);
            c && ("fx" === b && e.unshift("inprogress"), delete d.stop, c.call(a, n, d));
            !k && d && d.empty.fire()
        },
        _queueHooks: function(a, b) {
            var e = b + "queueHooks";
            return F.get(a, e) || F.access(a, e, {
                empty: h.Callbacks("once memory").add(function() {
                    F.remove(a, [b + "queue", e])
                })
            })
        }
    });
    h.fn.extend({
        queue: function(a,
            b) {
            var e = 2;
            return "string" != typeof a && (b = a, a = "fx", e--), arguments.length < e ? h.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var e = h.queue(this, a, b);
                h._queueHooks(this, a);
                "fx" === a && "inprogress" !== e[0] && h.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                h.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var e, k = 1,
                c = h.Deferred(),
                d = this,
                n = this.length,
                g = function() {
                    --k || c.resolveWith(d, [d])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a ||
                "fx"; n--;)(e = F.get(d[n], a + "queueHooks")) && e.empty && (k++, e.empty.add(g));
            return g(), c.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ma = ["Top", "Right", "Bottom", "Left"],
        ta = function(a, b) {
            return a = b || a, "none" === h.css(a, "display") || !h.contains(a.ownerDocument, a)
        },
        Ta = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = I.createDocumentFragment().appendChild(I.createElement("div")),
            b = I.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name",
            "t");
        a.appendChild(b);
        K.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        K.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }();
    K.focusinBubbles = "onfocusin" in a;
    var vb = /^key/,
        wb = /^(?:mouse|pointer|contextmenu)|click/,
        Ua = /^(?:focusinfocus|focusoutblur)$/,
        Va = /^([^.]*)(?:\.(.+)|)$/;
    h.event = {
        global: {},
        add: function(a, b, e, k, c) {
            var d, n, g, f, l, x, r, m, z, s;
            if (l = F.get(a))
                for (e.handler && (d = e, e = d.handler, c = d.selector), e.guid || (e.guid = h.guid++), (f = l.events) || (f =
                        l.events = {}), (n = l.handle) || (n = l.handle = function(b) {
                        return "undefined" !== typeof h && h.event.triggered !== b.type ? h.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(ga) || [""], l = b.length; l--;) g = Va.exec(b[l]) || [], z = s = g[1], g = (g[2] || "").split(".").sort(), z && (r = h.event.special[z] || {}, z = (c ? r.delegateType : r.bindType) || z, r = h.event.special[z] || {}, x = h.extend({
                    type: z,
                    origType: s,
                    data: k,
                    handler: e,
                    guid: e.guid,
                    selector: c,
                    needsContext: c && h.expr.match.needsContext.test(c),
                    namespace: g.join(".")
                }, d), (m = f[z]) || (m =
                    f[z] = [], m.delegateCount = 0, r.setup && !1 !== r.setup.call(a, k, g, n) || a.addEventListener && a.addEventListener(z, n, !1)), r.add && (r.add.call(a, x), x.handler.guid || (x.handler.guid = e.guid)), c ? m.splice(m.delegateCount++, 0, x) : m.push(x), h.event.global[z] = !0)
        },
        remove: function(a, b, e, k, c) {
            var d, n, g, f, l, x, r, m, z, s, M, p = F.hasData(a) && F.get(a);
            if (p && (f = p.events)) {
                b = (b || "").match(ga) || [""];
                for (l = b.length; l--;)
                    if (g = Va.exec(b[l]) || [], z = M = g[1], s = (g[2] || "").split(".").sort(), z) {
                        r = h.event.special[z] || {};
                        z = (k ? r.delegateType : r.bindType) ||
                            z;
                        m = f[z] || [];
                        g = g[2] && new RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (n = d = m.length; d--;) x = m[d], !c && M !== x.origType || e && e.guid !== x.guid || g && !g.test(x.namespace) || k && k !== x.selector && ("**" !== k || !x.selector) || (m.splice(d, 1), x.selector && m.delegateCount--, r.remove && r.remove.call(a, x));
                        n && !m.length && (r.teardown && !1 !== r.teardown.call(a, s, p.handle) || h.removeEvent(a, z, p.handle), delete f[z])
                    } else
                        for (z in f) h.event.remove(a, z + b[l], e, k, !0);
                h.isEmptyObject(f) && (delete p.handle, F.remove(a, "events"))
            }
        },
        trigger: function(b, e, k, c) {
            var d, n, g, f, l, x, r, m = [k || I],
                z = ja.call(b, "type") ? b.type : b;
            d = ja.call(b, "namespace") ? b.namespace.split(".") : [];
            if (n = g = k = k || I, 3 !== k.nodeType && 8 !== k.nodeType && !Ua.test(z + h.event.triggered) && (0 <= z.indexOf(".") && (d = z.split("."), z = d.shift(), d.sort()), l = 0 > z.indexOf(":") && "on" + z, b = b[h.expando] ? b : new h.Event(z, "object" == typeof b && b), b.isTrigger = c ? 2 : 3, b.namespace = d.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target ||
                    (b.target = k), e = null == e ? [b] : h.makeArray(e, [b]), r = h.event.special[z] || {}, c || !r.trigger || !1 !== r.trigger.apply(k, e))) {
                if (!c && !r.noBubble && !h.isWindow(k)) {
                    f = r.delegateType || z;
                    for (Ua.test(f + z) || (n = n.parentNode); n; n = n.parentNode) m.push(n), g = n;
                    g === (k.ownerDocument || I) && m.push(g.defaultView || g.parentWindow || a)
                }
                for (d = 0;
                    (n = m[d++]) && !b.isPropagationStopped();) b.type = 1 < d ? f : r.bindType || z, (x = (F.get(n, "events") || {})[b.type] && F.get(n, "handle")) && x.apply(n, e), (x = l && n[l]) && x.apply && h.acceptData(n) && (b.result = x.apply(n,
                    e), !1 === b.result && b.preventDefault());
                return b.type = z, c || b.isDefaultPrevented() || r._default && !1 !== r._default.apply(m.pop(), e) || !h.acceptData(k) || l && h.isFunction(k[z]) && !h.isWindow(k) && (g = k[l], g && (k[l] = null), h.event.triggered = z, k[z](), h.event.triggered = void 0, g && (k[l] = g)), b.result
            }
        },
        dispatch: function(a) {
            a = h.event.fix(a);
            var b, e, c, d, n, g = [],
                f = k.call(arguments);
            b = (F.get(this, "events") || {})[a.type] || [];
            var l = h.event.special[a.type] || {};
            if (f[0] = a, a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this,
                    a)) {
                g = h.event.handlers.call(this, a, b);
                for (b = 0;
                    (d = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = d.elem, e = 0;
                        (n = d.handlers[e++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(n.namespace) || (a.handleObj = n, a.data = n.data, c = ((h.event.special[n.origType] || {}).handle || n.handler).apply(d.elem, f), void 0 === c || !1 !== (a.result = c) || (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var e, k, c, d, n = [],
                g =
                b.delegateCount,
                f = a.target;
            if (g && f.nodeType && (!a.button || "click" !== a.type))
                for (; f !== this; f = f.parentNode || this)
                    if (!0 !== f.disabled || "click" !== a.type) {
                        k = [];
                        for (e = 0; g > e; e++) d = b[e], c = d.selector + " ", void 0 === k[c] && (k[c] = d.needsContext ? 0 <= h(c, this).index(f) : h.find(c, this, null, [f]).length), k[c] && k.push(d);
                        k.length && n.push({
                            elem: f,
                            handlers: k
                        })
                    }
            return g < b.length && n.push({
                elem: this,
                handlers: b.slice(g)
            }), n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var e, k, c, h = b.button;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || I, k = e.documentElement, c = e.body, a.pageX = b.clientX + (k && k.scrollLeft || c && c.scrollLeft || 0) - (k && k.clientLeft || c && c.clientLeft ||
                    0), a.pageY = b.clientY + (k && k.scrollTop || c && c.scrollTop || 0) - (k && k.clientTop || c && c.clientTop || 0)), a.which || void 0 === h || (a.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[h.expando]) return a;
            var b, e, k;
            b = a.type;
            var c = a,
                d = this.fixHooks[b];
            d || (this.fixHooks[b] = d = wb.test(b) ? this.mouseHooks : vb.test(b) ? this.keyHooks : {});
            k = d.props ? this.props.concat(d.props) : this.props;
            a = new h.Event(c);
            for (b = k.length; b--;) e = k[b], a[e] = c[e];
            return a.target || (a.target = I), 3 === a.target.nodeType && (a.target = a.target.parentNode),
                d.filter ? d.filter(a, c) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && h.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return h.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent &&
                        (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, e, k) {
            a = h.extend(new h.Event, e, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            k ? h.event.trigger(a, null, b) : h.event.dispatch.call(b, a);
            a.isDefaultPrevented() && e.preventDefault()
        }
    };
    h.removeEvent = function(a, b, e) {
        a.removeEventListener && a.removeEventListener(b, e, !1)
    };
    h.Event = function(a, b) {
        return this instanceof h.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 ===
            a.returnValue ? s : v) : this.type = a, b && h.extend(this, b), this.timeStamp = a && a.timeStamp || h.now(), void(this[h.expando] = !0)) : new h.Event(a, b)
    };
    h.Event.prototype = {
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = s;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = s;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a =
                this.originalEvent;
            this.isImmediatePropagationStopped = s;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        h.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var e, k = a.relatedTarget,
                    c = a.handleObj;
                return (!k || k !== this && !h.contains(this, k)) && (a.type = c.origType, e = c.handler.apply(this, arguments), a.type = b), e
            }
        }
    });
    K.focusinBubbles || h.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var e = function(a) {
            h.event.simulate(b, a.target, h.event.fix(a), !0)
        };
        h.event.special[b] = {
            setup: function() {
                var k = this.ownerDocument || this,
                    c = F.access(k, b);
                c || k.addEventListener(a, e, !0);
                F.access(k, b, (c || 0) + 1)
            },
            teardown: function() {
                var k = this.ownerDocument || this,
                    c = F.access(k, b) - 1;
                c ? F.access(k, b, c) : (k.removeEventListener(a, e, !0), F.remove(k, b))
            }
        }
    });
    h.fn.extend({
        on: function(a, b, e, k, c) {
            var d, n;
            if ("object" == typeof a) {
                "string" != typeof b && (e = e || b, b = void 0);
                for (n in a) this.on(n, b, e,
                    a[n], c);
                return this
            }
            if (null == e && null == k ? (k = b, e = b = void 0) : null == k && ("string" == typeof b ? (k = e, e = void 0) : (k = e, e = b, b = void 0)), !1 === k) k = v;
            else if (!k) return this;
            return 1 === c && (d = k, k = function(a) {
                return h().off(a), d.apply(this, arguments)
            }, k.guid = d.guid || (d.guid = h.guid++)), this.each(function() {
                h.event.add(this, a, k, e, b)
            })
        },
        one: function(a, b, e, k) {
            return this.on(a, b, e, k, 1)
        },
        off: function(a, b, e) {
            var k, c;
            if (a && a.preventDefault && a.handleObj) return k = a.handleObj, h(a.delegateTarget).off(k.namespace ? k.origType + "." + k.namespace :
                k.origType, k.selector, k.handler), this;
            if ("object" == typeof a) {
                for (c in a) this.off(c, b, a[c]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (e = b, b = void 0), !1 === e && (e = v), this.each(function() {
                h.event.remove(this, a, e, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                h.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var e = this[0];
            return e ? h.event.trigger(a, b, e, !0) : void 0
        }
    });
    var Wa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Xa = /<([\w:]+)/,
        xb = /<|&#?\w+;/,
        yb =
        /<(?:script|style|link)/i,
        zb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ya = /^$|\/(?:java|ecma)script/i,
        mb = /^true\/(.*)/,
        Ab = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        da = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    da.optgroup = da.option;
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
    da.th = da.td;
    h.extend({
        clone: function(a,
            b, e) {
            var k, c, d, n, g = a.cloneNode(!0),
                f = h.contains(a.ownerDocument, a);
            if (!(K.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || h.isXMLDoc(a)))
                for (n = l(g), d = l(a), k = 0, c = d.length; c > k; k++) {
                    var x = d[k],
                        r = n[k],
                        m = r.nodeName.toLowerCase();
                    "input" === m && Ta.test(x.type) ? r.checked = x.checked : ("input" === m || "textarea" === m) && (r.defaultValue = x.defaultValue)
                }
            if (b)
                if (e)
                    for (d = d || l(a), n = n || l(g), k = 0, c = d.length; c > k; k++) w(d[k], n[k]);
                else w(a, g);
            return n = l(g, "script"), 0 < n.length && O(n, !f && l(a, "script")), g
        },
        buildFragment: function(a,
            b, e, k) {
            for (var c, d, n, g, f = b.createDocumentFragment(), x = [], r = 0, m = a.length; m > r; r++)
                if (c = a[r], c || 0 === c)
                    if ("object" === h.type(c)) h.merge(x, c.nodeType ? [c] : c);
                    else if (xb.test(c)) {
                d = d || f.appendChild(b.createElement("div"));
                n = (Xa.exec(c) || ["", ""])[1].toLowerCase();
                n = da[n] || da._default;
                d.innerHTML = n[1] + c.replace(Wa, "<$1></$2>") + n[2];
                for (n = n[0]; n--;) d = d.lastChild;
                h.merge(x, d.childNodes);
                d = f.firstChild;
                d.textContent = ""
            } else x.push(b.createTextNode(c));
            f.textContent = "";
            for (r = 0; c = x[r++];)
                if ((!k || -1 === h.inArray(c,
                        k)) && (g = h.contains(c.ownerDocument, c), d = l(f.appendChild(c), "script"), g && O(d), e))
                    for (n = 0; c = d[n++];) Ya.test(c.type || "") && e.push(c);
            return f
        },
        cleanData: function(a) {
            for (var b, e, k, c, d = h.event.special, n = 0; void 0 !== (e = a[n]); n++) {
                if (h.acceptData(e) && (c = e[F.expando], c && (b = F.cache[c]))) {
                    if (b.events)
                        for (k in b.events) d[k] ? h.event.remove(e, k) : h.removeEvent(e, k, b.handle);
                    F.cache[c] && delete F.cache[c]
                }
                delete V.cache[e[V.expando]]
            }
        }
    });
    h.fn.extend({
        text: function(a) {
            return ha(this, function(a) {
                return void 0 === a ? h.text(this) :
                    this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || B(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = B(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
                function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var e, k = a ? h.filter(a, this) : this, c = 0; null != (e = k[c]); c++) b || 1 !== e.nodeType || h.cleanData(l(e)), e.parentNode && (b && h.contains(e.ownerDocument, e) && O(l(e, "script")), e.parentNode.removeChild(e));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (h.cleanData(l(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return h.clone(this, a, b)
            })
        },
        html: function(a) {
            return ha(this, function(a) {
                    var b = this[0] || {},
                        e = 0,
                        k = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !yb.test(a) && !da[(Xa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Wa, "<$1></$2>");
                        try {
                            for (; k > e; e++) b = this[e] || {}, 1 === b.nodeType && (h.cleanData(l(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (c) {}
                    }
                    b && this.empty().append(a)
                },
                null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode;
                h.cleanData(l(this));
                a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = n.apply([], a);
            var e, k, c, d, g = 0,
                f = this.length,
                x = this,
                r = f - 1,
                m = a[0],
                z = h.isFunction(m);
            if (z || 1 < f && "string" == typeof m && !K.checkClone && zb.test(m)) return this.each(function(e) {
                var k = x.eq(e);
                z && (a[0] = m.call(this, e, k.html()));
                k.domManip(a, b)
            });
            if (f && (e = h.buildFragment(a, this[0].ownerDocument, !1, this), k = e.firstChild, 1 === e.childNodes.length && (e = k), k)) {
                k = h.map(l(e, "script"), y);
                for (c = k.length; f > g; g++) d = e, g !== r && (d = h.clone(d, !0, !0), c && h.merge(k, l(d, "script"))), b.call(this[g], d, g);
                if (c)
                    for (e = k[k.length - 1].ownerDocument, h.map(k, C), g = 0; c > g; g++) d = k[g], Ya.test(d.type || "") && !F.access(d, "globalEval") && h.contains(e, d) && (d.src ? h._evalUrl && h._evalUrl(d.src) : h.globalEval(d.textContent.replace(Ab, "")))
            }
            return this
        }
    });
    h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        h.fn[a] = function(a) {
            for (var e = [], k = h(a), c = k.length - 1, d = 0; c >= d; d++) a = d === c ? this : this.clone(!0), h(k[d])[b](a), x.apply(e, a.get());
            return this.pushStack(e)
        }
    });
    var xa, Oa = {},
        Pa = /^margin/,
        Ga = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        ya = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        var b, e, k = I.documentElement,
            c = I.createElement("div"),
            d = I.createElement("div");
        if (d.style) {
            var n = function() {
                d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                d.innerHTML = "";
                k.appendChild(c);
                var h = a.getComputedStyle(d, null);
                b = "1%" !== h.top;
                e = "4px" === h.width;
                k.removeChild(c)
            };
            d.style.backgroundClip = "content-box";
            d.cloneNode(!0).style.backgroundClip = "";
            K.clearCloneStyle = "content-box" === d.style.backgroundClip;
            c.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            c.appendChild(d);
            a.getComputedStyle && h.extend(K, {
                pixelPosition: function() {
                    return n(), b
                },
                boxSizingReliable: function() {
                    return null == e && n(), e
                },
                reliableMarginRight: function() {
                    var b, e = d.appendChild(I.createElement("div"));
                    return e.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width =
                        "0", d.style.width = "1px", k.appendChild(c), b = !parseFloat(a.getComputedStyle(e, null).marginRight), k.removeChild(c), d.removeChild(e), b
                }
            })
        }
    }();
    h.swap = function(a, b, e, k) {
        var c, h = {};
        for (c in b) h[c] = a.style[c], a.style[c] = b[c];
        e = e.apply(a, k || []);
        for (c in b) a.style[c] = h[c];
        return e
    };
    var Bb = /^(none|table(?!-c[ea]).+)/,
        nb = new RegExp("^(" + va + ")(.*)$", "i"),
        Cb = new RegExp("^([+-])=(" + va + ")", "i"),
        Db = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Za = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qa = ["Webkit", "O", "Moz",
            "ms"
        ];
    h.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var e = Y(a, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, e, k) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var c, d, n, g = h.camelCase(b),
                    f = a.style;
                return b = h.cssProps[g] || (h.cssProps[g] = aa(f, g)), n = h.cssHooks[b] || h.cssHooks[g], void 0 === e ? n && "get" in n && void 0 !==
                    (c = n.get(a, !1, k)) ? c : f[b] : (d = typeof e, "string" === d && (c = Cb.exec(e)) && (e = (c[1] + 1) * c[2] + parseFloat(h.css(a, b)), d = "number"), null != e && e === e && ("number" !== d || h.cssNumber[g] || (e += "px"), K.clearCloneStyle || "" !== e || 0 !== b.indexOf("background") || (f[b] = "inherit"), n && "set" in n && void 0 === (e = n.set(a, e, k)) || (f[b] = e)), void 0)
            }
        },
        css: function(a, b, e, k) {
            var c, d, n, g = h.camelCase(b);
            return b = h.cssProps[g] || (h.cssProps[g] = aa(a.style, g)), n = h.cssHooks[b] || h.cssHooks[g], n && "get" in n && (c = n.get(a, !0, e)), void 0 === c && (c = Y(a, b, k)),
                "normal" === c && b in Za && (c = Za[b]), "" === e || e ? (d = parseFloat(c), !0 === e || h.isNumeric(d) ? d || 0 : c) : c
        }
    });
    h.each(["height", "width"], function(a, b) {
        h.cssHooks[b] = {
            get: function(a, e, k) {
                return e ? Bb.test(h.css(a, "display")) && 0 === a.offsetWidth ? h.swap(a, Db, function() {
                    return J(a, b, k)
                }) : J(a, b, k) : void 0
            },
            set: function(a, e, k) {
                var c = k && ya(a);
                return Q(a, e, k ? U(a, b, k, "border-box" === h.css(a, "boxSizing", !1, c), c) : 0)
            }
        }
    });
    h.cssHooks.marginRight = ca(K.reliableMarginRight, function(a, b) {
        return b ? h.swap(a, {
            display: "inline-block"
        }, Y, [a, "marginRight"]) : void 0
    });
    h.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        h.cssHooks[a + b] = {
            expand: function(e) {
                var k = 0,
                    c = {};
                for (e = "string" == typeof e ? e.split(" ") : [e]; 4 > k; k++) c[a + ma[k] + b] = e[k] || e[k - 2] || e[0];
                return c
            }
        };
        Pa.test(a) || (h.cssHooks[a + b].set = Q)
    });
    h.fn.extend({
        css: function(a, b) {
            return ha(this, function(a, b, e) {
                var k, c = {},
                    d = 0;
                if (h.isArray(b)) {
                    e = ya(a);
                    for (k = b.length; k > d; d++) c[b[d]] = h.css(a, b[d], !1, e);
                    return c
                }
                return void 0 !== e ? h.style(a, b, e) : h.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return ba(this, !0)
        },
        hide: function() {
            return ba(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ta(this) ? h(this).show() : h(this).hide()
            })
        }
    });
    h.Tween = G;
    G.prototype = {
        constructor: G,
        init: function(a, b, e, k, c, d) {
            this.elem = a;
            this.prop = e;
            this.easing = c || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = k;
            this.unit = d || (h.cssNumber[e] ? "" : "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b,
                e = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? h.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : G.propHooks._default.set(this), this
        }
    };
    G.prototype.init.prototype = G.prototype;
    G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = h.css(a.elem, a.prop, ""), b && "auto" !==
                    b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                h.fx.step[a.prop] ? h.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[h.cssProps[a.prop]] || h.cssHooks[a.prop]) ? h.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    h.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    h.fx = G.prototype.init;
    h.fx.step = {};
    var ia, Da, Eb = /^(?:toggle|show|hide)$/,
        $a =
        new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        Fb = /queueHooks$/,
        za = [function(a, b, e) {
            var k, c, d, n, g, f, l, x = this,
                r = {},
                m = a.style,
                z = a.nodeType && ta(a),
                s = F.get(a, "fxshow");
            e.queue || (n = h._queueHooks(a, "fx"), null == n.unqueued && (n.unqueued = 0, g = n.empty.fire, n.empty.fire = function() {
                n.unqueued || g()
            }), n.unqueued++, x.always(function() {
                x.always(function() {
                    n.unqueued--;
                    h.queue(a, "fx").length || n.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (e.overflow = [m.overflow, m.overflowX, m.overflowY], f = h.css(a,
                "display"), l = "none" === f ? F.get(a, "olddisplay") || R(a.nodeName) : f, "inline" === l && "none" === h.css(a, "float") && (m.display = "inline-block"));
            e.overflow && (m.overflow = "hidden", x.always(function() {
                m.overflow = e.overflow[0];
                m.overflowX = e.overflow[1];
                m.overflowY = e.overflow[2]
            }));
            for (k in b)
                if (c = b[k], Eb.exec(c)) {
                    if (delete b[k], d = d || "toggle" === c, c === (z ? "hide" : "show")) {
                        if ("show" !== c || !s || void 0 === s[k]) continue;
                        z = !0
                    }
                    r[k] = s && s[k] || h.style(a, k)
                } else f = void 0;
            if (h.isEmptyObject(r)) "inline" === ("none" === f ? R(a.nodeName) :
                f) && (m.display = f);
            else
                for (k in s ? "hidden" in s && (z = s.hidden) : s = F.access(a, "fxshow", {}), d && (s.hidden = !z), z ? h(a).show() : x.done(function() {
                        h(a).hide()
                    }), x.done(function() {
                        var b;
                        F.remove(a, "fxshow");
                        for (b in r) h.style(a, b, r[b])
                    }), r) b = W(z ? s[k] : 0, k, x), k in s || (s[k] = b.start, z && (b.end = b.start, b.start = "width" === k || "height" === k ? 1 : 0))
        }],
        ua = {
            "*": [function(a, b) {
                var e = this.createTween(a, b),
                    k = e.cur(),
                    c = $a.exec(b),
                    d = c && c[3] || (h.cssNumber[a] ? "" : "px"),
                    n = (h.cssNumber[a] || "px" !== d && +k) && $a.exec(h.css(e.elem, a)),
                    g = 1,
                    f = 20;
                if (n && n[3] !== d) {
                    d = d || n[3];
                    c = c || [];
                    n = +k || 1;
                    do g = g || ".5", n /= g, h.style(e.elem, a, n + d); while (g !== (g = e.cur() / k) && 1 !== g && --f)
                }
                return c && (n = e.start = +n || +k || 0, e.unit = d, e.end = c[1] ? n + (c[1] + 1) * c[2] : +c[2]), e
            }]
        };
    h.Animation = h.extend(M, {
        tweener: function(a, b) {
            h.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var e, k = 0, c = a.length; c > k; k++) e = a[k], ua[e] = ua[e] || [], ua[e].unshift(b)
        },
        prefilter: function(a, b) {
            b ? za.unshift(a) : za.push(a)
        }
    });
    h.speed = function(a, b, e) {
        var k = a && "object" == typeof a ? h.extend({}, a) : {
            complete: e ||
                !e && b || h.isFunction(a) && a,
            duration: a,
            easing: e && b || b && !h.isFunction(b) && b
        };
        return k.duration = h.fx.off ? 0 : "number" == typeof k.duration ? k.duration : k.duration in h.fx.speeds ? h.fx.speeds[k.duration] : h.fx.speeds._default, (null == k.queue || !0 === k.queue) && (k.queue = "fx"), k.old = k.complete, k.complete = function() {
            h.isFunction(k.old) && k.old.call(this);
            k.queue && h.dequeue(this, k.queue)
        }, k
    };
    h.fn.extend({
        fadeTo: function(a, b, e, k) {
            return this.filter(ta).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, e, k)
        },
        animate: function(a,
            b, e, k) {
            var c = h.isEmptyObject(a),
                d = h.speed(b, e, k);
            b = function() {
                var b = M(this, h.extend({}, a), d);
                (c || F.get(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, c || !1 === d.queue ? this.each(b) : this.queue(d.queue, b)
        },
        stop: function(a, b, e) {
            var k = function(a) {
                var b = a.stop;
                delete a.stop;
                b(e)
            };
            return "string" != typeof a && (e = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    d = h.timers,
                    n = F.get(this);
                if (c) n[c] && n[c].stop && k(n[c]);
                else
                    for (c in n) n[c] && n[c].stop && Fb.test(c) &&
                        k(n[c]);
                for (c = d.length; c--;) d[c].elem !== this || null != a && d[c].queue !== a || (d[c].anim.stop(e), b = !1, d.splice(c, 1));
                !b && e || h.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, e = F.get(this),
                    k = e[a + "queue"];
                b = e[a + "queueHooks"];
                var c = h.timers,
                    d = k ? k.length : 0;
                e.finish = !0;
                h.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = c.length; b--;) c[b].elem === this && c[b].queue === a && (c[b].anim.stop(!0), c.splice(b, 1));
                for (b = 0; d > b; b++) k[b] && k[b].finish && k[b].finish.call(this);
                delete e.finish
            })
        }
    });
    h.each(["toggle", "show", "hide"], function(a, b) {
        var e = h.fn[b];
        h.fn[b] = function(a, k, c) {
            return null == a || "boolean" == typeof a ? e.apply(this, arguments) : this.animate(X(b, !0), a, k, c)
        }
    });
    h.each({
        slideDown: X("show"),
        slideUp: X("hide"),
        slideToggle: X("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        h.fn[a] = function(a, e, k) {
            return this.animate(b, a, e, k)
        }
    });
    h.timers = [];
    h.fx.tick = function() {
        var a, b = 0,
            e = h.timers;
        for (ia = h.now(); b < e.length; b++) a = e[b], a() || e[b] !== a ||
            e.splice(b--, 1);
        e.length || h.fx.stop();
        ia = void 0
    };
    h.fx.timer = function(a) {
        h.timers.push(a);
        a() ? h.fx.start() : h.timers.pop()
    };
    h.fx.interval = 13;
    h.fx.start = function() {
        Da || (Da = setInterval(h.fx.tick, h.fx.interval))
    };
    h.fx.stop = function() {
        clearInterval(Da);
        Da = null
    };
    h.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    h.fn.delay = function(a, b) {
        return a = h.fx ? h.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, e) {
            var k = setTimeout(b, a);
            e.stop = function() {
                clearTimeout(k)
            }
        })
    };
    (function() {
        var a = I.createElement("input"),
            b =
            I.createElement("select"),
            e = b.appendChild(I.createElement("option"));
        a.type = "checkbox";
        K.checkOn = "" !== a.value;
        K.optSelected = e.selected;
        b.disabled = !0;
        K.optDisabled = !e.disabled;
        a = I.createElement("input");
        a.value = "t";
        a.type = "radio";
        K.radioValue = "t" === a.value
    })();
    var ab, wa = h.expr.attrHandle;
    h.fn.extend({
        attr: function(a, b) {
            return ha(this, h.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                h.removeAttr(this, a)
            })
        }
    });
    h.extend({
        attr: function(a, b, e) {
            var k, c, d = a.nodeType;
            if (a &&
                3 !== d && 8 !== d && 2 !== d) return "undefined" === typeof a.getAttribute ? h.prop(a, b, e) : (1 === d && h.isXMLDoc(a) || (b = b.toLowerCase(), k = h.attrHooks[b] || (h.expr.match.bool.test(b) ? ab : void 0)), void 0 === e ? k && "get" in k && null !== (c = k.get(a, b)) ? c : (c = h.find.attr(a, b), null == c ? void 0 : c) : null !== e ? k && "set" in k && void 0 !== (c = k.set(a, e, b)) ? c : (a.setAttribute(b, e + ""), e) : void h.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var e, k, c = 0,
                d = b && b.match(ga);
            if (d && 1 === a.nodeType)
                for (; e = d[c++];) k = h.propFix[e] || e, h.expr.match.bool.test(e) && (a[k] = !1), a.removeAttribute(e)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!K.radioValue && "radio" === b && h.nodeName(a, "input")) {
                        var e = a.value;
                        return a.setAttribute("type", b), e && (a.value = e), b
                    }
                }
            }
        }
    });
    ab = {
        set: function(a, b, e) {
            return !1 === b ? h.removeAttr(a, e) : a.setAttribute(e, e), e
        }
    };
    h.each(h.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var e = wa[b] || h.find.attr;
        wa[b] = function(a, b, k) {
            var c, d;
            return k || (d = wa[b], wa[b] = c, c = null != e(a, b, k) ? b.toLowerCase() : null, wa[b] = d), c
        }
    });
    var Gb = /^(?:input|select|textarea|button)$/i;
    h.fn.extend({
        prop: function(a, b) {
            return ha(this, h.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[h.propFix[a] || a]
            })
        }
    });
    h.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, e) {
            var k, c, d, n = a.nodeType;
            if (a && 3 !== n && 8 !== n && 2 !== n) return d = 1 !== n || !h.isXMLDoc(a), d && (b = h.propFix[b] || b, c = h.propHooks[b]), void 0 !== e ? c && "set" in c && void 0 !== (k = c.set(a, e, b)) ? k : a[b] = e : c && "get" in c && null !== (k = c.get(a, b)) ? k : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") ||
                        Gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    K.optSelected || (h.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex, null
        }
    });
    h.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        h.propFix[this.toLowerCase()] = this
    });
    var Ia = /[\t\r\n\f]/g;
    h.fn.extend({
        addClass: function(a) {
            var b, e, k, c, d;
            b = "string" == typeof a && a;
            var n = 0,
                g = this.length;
            if (h.isFunction(a)) return this.each(function(b) {
                h(this).addClass(a.call(this,
                    b, this.className))
            });
            if (b)
                for (b = (a || "").match(ga) || []; g > n; n++)
                    if (e = this[n], k = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(Ia, " ") : " ")) {
                        for (d = 0; c = b[d++];) 0 > k.indexOf(" " + c + " ") && (k += c + " ");
                        k = h.trim(k);
                        e.className !== k && (e.className = k)
                    }
            return this
        },
        removeClass: function(a) {
            var b, e, k, c, d;
            b = 0 === arguments.length || "string" == typeof a && a;
            var n = 0,
                g = this.length;
            if (h.isFunction(a)) return this.each(function(b) {
                h(this).removeClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ga) || []; g >
                    n; n++)
                    if (e = this[n], k = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(Ia, " ") : "")) {
                        for (d = 0; c = b[d++];)
                            for (; 0 <= k.indexOf(" " + c + " ");) k = k.replace(" " + c + " ", " ");
                        k = a ? h.trim(k) : "";
                        e.className !== k && (e.className = k)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var e = typeof a;
            return "boolean" == typeof b && "string" === e ? b ? this.addClass(a) : this.removeClass(a) : this.each(h.isFunction(a) ? function(e) {
                h(this).toggleClass(a.call(this, e, this.className, b), b)
            } : function() {
                if ("string" === e)
                    for (var b, k = 0, c = h(this), d = a.match(ga) || []; b = d[k++];) c.hasClass(b) ? c.removeClass(b) : c.addClass(b);
                else("undefined" === e || "boolean" === e) && (this.className && F.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : F.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, e = this.length; e > b; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ia, " ").indexOf(a)) return !0;
            return !1
        }
    });
    var Hb = /\r/g;
    h.fn.extend({
        val: function(a) {
            var b, e, k, c = this[0];
            if (arguments.length) return k = h.isFunction(a),
                this.each(function(e) {
                    var c;
                    1 === this.nodeType && (c = k ? a.call(this, e, h(this).val()) : a, null == c ? c = "" : "number" == typeof c ? c += "" : h.isArray(c) && (c = h.map(c, function(a) {
                        return null == a ? "" : a + ""
                    })), b = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
                });
            if (c) return b = h.valHooks[c.type] || h.valHooks[c.nodeName.toLowerCase()], b && "get" in b && void 0 !== (e = b.get(c, "value")) ? e : (e = c.value, "string" == typeof e ? e.replace(Hb, "") : null == e ? "" : e)
        }
    });
    h.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b =
                        h.find.attr(a, "value");
                    return null != b ? b : h.trim(h.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, e = a.options, k = a.selectedIndex, c = "select-one" === a.type || 0 > k, d = c ? null : [], n = c ? k + 1 : e.length, g = 0 > k ? n : c ? k : 0; n > g; g++)
                        if (b = e[g], !(!b.selected && g !== k || (K.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && h.nodeName(b.parentNode, "optgroup"))) {
                            if (a = h(b).val(), c) return a;
                            d.push(a)
                        }
                    return d
                },
                set: function(a, b) {
                    for (var e, k, c = a.options, d = h.makeArray(b), n = c.length; n--;) k = c[n], (k.selected = 0 <=
                        h.inArray(k.value, d)) && (e = !0);
                    return e || (a.selectedIndex = -1), d
                }
            }
        }
    });
    h.each(["radio", "checkbox"], function() {
        h.valHooks[this] = {
            set: function(a, b) {
                return h.isArray(b) ? a.checked = 0 <= h.inArray(h(a).val(), b) : void 0
            }
        };
        K.checkOn || (h.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(a, b) {
            h.fn[b] = function(a, e) {
                return 0 < arguments.length ? this.on(b, null, a, e) : this.trigger(b)
            }
        });
    h.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, e) {
            return this.on(a, null, b, e)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, e, k) {
            return this.on(b, a, e, k)
        },
        undelegate: function(a, b, e) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", e)
        }
    });
    var Ja = h.now(),
        Ka = /\?/;
    h.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    h.parseXML =
        function(a) {
            var b, e;
            if (!a || "string" != typeof a) return null;
            try {
                e = new DOMParser, b = e.parseFromString(a, "text/xml")
            } catch (k) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + a), b
        };
    var Ib = /#.*$/,
        bb = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        cb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        db = {},
        Ha = {},
        eb = "*/".concat("*"),
        La = a.location.href,
        sa = cb.exec(La.toLowerCase()) || [];
    h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: La,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(sa[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": eb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": h.parseJSON,
                "text xml": h.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? N(N(a, h.ajaxSettings), b) : N(h.ajaxSettings, a)
        },
        ajaxPrefilter: D(db),
        ajaxTransport: D(Ha),
        ajax: function(a, b) {
            function e(a, b, n, f) {
                var x, t, S, v, u = b;
                if (2 !== D) {
                    D = 2;
                    g && clearTimeout(g);
                    k = void 0;
                    d = f || "";
                    q.readyState = 0 < a ? 4 : 0;
                    f = 200 <= a && 300 > a || 304 === a;
                    if (n) {
                        S = r;
                        for (var fa = q, T, A, B, N, ja = S.contents, G = S.dataTypes;
                            "*" === G[0];) G.shift(), void 0 === T && (T = S.mimeType || fa.getResponseHeader("Content-Type"));
                        if (T)
                            for (A in ja)
                                if (ja[A] && ja[A].test(T)) {
                                    G.unshift(A);
                                    break
                                }
                        if (G[0] in n) B = G[0];
                        else {
                            for (A in n) {
                                if (!G[0] || S.converters[A + " " + G[0]]) {
                                    B = A;
                                    break
                                }
                                N || (N = A)
                            }
                            B = B || N
                        }
                        S = B ? (B !== G[0] && G.unshift(B), n[B]) : void 0
                    }
                    var C;
                    a: {
                        n = r;
                        T = S;
                        A = q;
                        B = f;
                        var H, y, E;
                        S = {};
                        fa = n.dataTypes.slice();
                        if (fa[1])
                            for (H in n.converters) S[H.toLowerCase()] = n.converters[H];
                        for (N = fa.shift(); N;)
                            if (n.responseFields[N] && (A[n.responseFields[N]] = T), !E && B && n.dataFilter && (T = n.dataFilter(T, n.dataType)), E = N, N = fa.shift())
                                if ("*" === N) N = E;
                                else if ("*" !== E && E !== N) {
                            if (H = S[E + " " + N] || S["* " + N], !H)
                                for (C in S)
                                    if (y = C.split(" "),
                                        y[1] === N && (H = S[E + " " + y[0]] || S["* " + y[0]])) {
                                        !0 === H ? H = S[C] : !0 !== S[C] && (N = y[0], fa.unshift(y[1]));
                                        break
                                    }
                            if (!0 !== H)
                                if (H && n["throws"]) T = H(T);
                                else try {
                                    T = H(T)
                                } catch (w) {
                                    C = {
                                        state: "parsererror",
                                        error: H ? w : "No conversion from " + E + " to " + N
                                    };
                                    break a
                                }
                        }
                        C = {
                            state: "success",
                            data: T
                        }
                    }
                    S = C;
                    f ? (r.ifModified && (v = q.getResponseHeader("Last-Modified"), v && (h.lastModified[c] = v), v = q.getResponseHeader("etag"), v && (h.etag[c] = v)), 204 === a || "HEAD" === r.type ? u = "nocontent" : 304 === a ? u = "notmodified" : (u = S.state, x = S.data, t = S.error, f = !t)) : (t = u, (a || !u) && (u = "error", 0 > a && (a = 0)));
                    q.status = a;
                    q.statusText = (b || u) + "";
                    f ? s.resolveWith(m, [x, u, q]) : s.rejectWith(m, [q, u, t]);
                    q.statusCode(p);
                    p = void 0;
                    l && z.trigger(f ? "ajaxSuccess" : "ajaxError", [q, r, f ? x : t]);
                    M.fireWith(m, [q, u]);
                    l && (z.trigger("ajaxComplete", [q, r]), --h.active || h.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var k, c, d, n, g, f, l, x, r = h.ajaxSetup({}, b),
                m = r.context || r,
                z = r.context && (m.nodeType || m.jquery) ? h(m) : h.event,
                s = h.Deferred(),
                M = h.Callbacks("once memory"),
                p = r.statusCode || {},
                S = {},
                v = {},
                D = 0,
                u = "canceled",
                q = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === D) {
                            if (!n)
                                for (n = {}; b = Jb.exec(d);) n[b[1].toLowerCase()] = b[2];
                            b = n[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === D ? d : null
                    },
                    setRequestHeader: function(a, b) {
                        var e = a.toLowerCase();
                        return D || (a = v[e] = v[e] || a, S[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return D || (r.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > D)
                                for (b in a) p[b] = [p[b], a[b]];
                            else q.always(a[q.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || u;
                        return k && k.abort(a), e(0, a), this
                    }
                };
            if (s.promise(q).complete = M.add, q.success = q.done, q.error = q.fail, r.url = ((a || r.url || La) + "").replace(Ib, "").replace(Lb, sa[1] + "//"), r.type = b.method || b.type || r.method || r.type, r.dataTypes = h.trim(r.dataType || "*").toLowerCase().match(ga) || [""], null == r.crossDomain && (f = cb.exec(r.url.toLowerCase()), r.crossDomain = !(!f || f[1] === sa[1] && f[2] === sa[2] && (f[3] || ("http:" === f[1] ? "80" : "443")) === (sa[3] || ("http:" === sa[1] ? "80" : "443")))), r.data && r.processData && "string" !=
                typeof r.data && (r.data = h.param(r.data, r.traditional)), T(db, r, b, q), 2 === D) return q;
            (l = h.event && r.global) && 0 === h.active++ && h.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !Kb.test(r.type);
            c = r.url;
            r.hasContent || (r.data && (c = r.url += (Ka.test(c) ? "&" : "?") + r.data, delete r.data), !1 === r.cache && (r.url = bb.test(c) ? c.replace(bb, "$1_=" + Ja++) : c + (Ka.test(c) ? "&" : "?") + "_=" + Ja++));
            r.ifModified && (h.lastModified[c] && q.setRequestHeader("If-Modified-Since", h.lastModified[c]), h.etag[c] && q.setRequestHeader("If-None-Match",
                h.etag[c]));
            (r.data && r.hasContent && !1 !== r.contentType || b.contentType) && q.setRequestHeader("Content-Type", r.contentType);
            q.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + eb + "; q=0.01" : "") : r.accepts["*"]);
            for (x in r.headers) q.setRequestHeader(x, r.headers[x]);
            if (r.beforeSend && (!1 === r.beforeSend.call(m, q, r) || 2 === D)) return q.abort();
            u = "abort";
            for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) q[x](r[x]);
            if (k = T(Ha, r, b, q)) {
                q.readyState = 1;
                l && z.trigger("ajaxSend", [q, r]);
                r.async && 0 < r.timeout && (g = setTimeout(function() {
                    q.abort("timeout")
                }, r.timeout));
                try {
                    D = 1, k.send(S, e)
                } catch (fa) {
                    if (!(2 > D)) throw fa;
                    e(-1, fa)
                }
            } else e(-1, "No Transport");
            return q
        },
        getJSON: function(a, b, e) {
            return h.get(a, b, e, "json")
        },
        getScript: function(a, b) {
            return h.get(a, void 0, b, "script")
        }
    });
    h.each(["get", "post"], function(a, b) {
        h[b] = function(a, e, k, c) {
            return h.isFunction(e) && (c = c || k, k = e, e = void 0), h.ajax({
                url: a,
                type: b,
                dataType: c,
                data: e,
                success: k
            })
        }
    });
    h._evalUrl = function(a) {
        return h.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    h.fn.extend({
        wrapAll: function(a) {
            var b;
            return h.isFunction(a) ? this.each(function(b) {
                h(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = h(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(h.isFunction(a) ? function(b) {
                h(this).wrapInner(a.call(this, b))
            } : function() {
                var b = h(this),
                    e = b.contents();
                e.length ? e.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = h.isFunction(a);
            return this.each(function(e) {
                h(this).wrapAll(b ? a.call(this, e) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    h.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    };
    h.expr.filters.visible = function(a) {
        return !h.expr.filters.hidden(a)
    };
    var Mb = /%20/g,
        ob = /\[\]$/,
        fb = /\r?\n/g,
        Nb = /^(?:submit|button|image|reset|file)$/i,
        Ob = /^(?:input|select|textarea|keygen)/i;
    h.param = function(a, b) {
        var e, k = [],
            c = function(a, b) {
                b = h.isFunction(b) ? b() : null == b ? "" : b;
                k[k.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(a) || a.jquery && !h.isPlainObject(a)) h.each(a, function() {
            c(this.name, this.value)
        });
        else
            for (e in a) P(e, a[e], b, c);
        return k.join("&").replace(Mb, "+")
    };
    h.fn.extend({
        serialize: function() {
            return h.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a =
                    h.prop(this, "elements");
                return a ? h.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !h(this).is(":disabled") && Ob.test(this.nodeName) && !Nb.test(a) && (this.checked || !Ta.test(a))
            }).map(function(a, b) {
                var e = h(this).val();
                return null == e ? null : h.isArray(e) ? h.map(e, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(fb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: e.replace(fb, "\r\n")
                }
            }).get()
        }
    });
    h.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Pb = 0,
        Fa = {},
        Qb = {
            0: 200,
            1223: 204
        },
        la =
        h.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Fa) Fa[a]()
    });
    K.cors = !!la && "withCredentials" in la;
    K.ajax = la = !!la;
    h.ajaxTransport(function(a) {
        var b;
        return K.cors || la && !a.crossDomain ? {
            send: function(e, k) {
                var c, d = a.xhr(),
                    h = ++Pb;
                if (d.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (c in a.xhrFields) d[c] = a.xhrFields[c];
                a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType);
                a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (c in e) d.setRequestHeader(c, e[c]);
                b = function(a) {
                    return function() {
                        b && (delete Fa[h], b = d.onload = d.onerror = null, "abort" === a ? d.abort() : "error" === a ? k(d.status, d.statusText) : k(Qb[d.status] || d.status, d.statusText, "string" == typeof d.responseText ? {
                            text: d.responseText
                        } : void 0, d.getAllResponseHeaders()))
                    }
                };
                d.onload = b();
                d.onerror = b("error");
                b = Fa[h] = b("abort");
                try {
                    d.send(a.hasContent && a.data || null)
                } catch (n) {
                    if (b) throw n;
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    });
    h.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return h.globalEval(a), a
            }
        }
    });
    h.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    h.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, e;
            return {
                send: function(k, c) {
                    b = h("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", e = function(a) {
                        b.remove();
                        e = null;
                        a && c("error" === a.type ? 404 : 200, a.type)
                    });
                    I.head.appendChild(b[0])
                },
                abort: function() {
                    e && e()
                }
            }
        }
    });
    var gb = [],
        Ma = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = gb.pop() || h.expando + "_" + Ja++;
            return this[a] = !0, a
        }
    });
    h.ajaxPrefilter("json jsonp", function(b, e, k) {
        var c, d, n, g = !1 !== b.jsonp && (Ma.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ma.test(b.data) && "data");
        return g || "jsonp" === b.dataTypes[0] ? (c = b.jsonpCallback = h.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, g ? b[g] = b[g].replace(Ma, "$1" +
            c) : !1 !== b.jsonp && (b.url += (Ka.test(b.url) ? "&" : "?") + b.jsonp + "=" + c), b.converters["script json"] = function() {
            return n || h.error(c + " was not called"), n[0]
        }, b.dataTypes[0] = "json", d = a[c], a[c] = function() {
            n = arguments
        }, k.always(function() {
            a[c] = d;
            b[c] && (b.jsonpCallback = e.jsonpCallback, gb.push(c));
            n && h.isFunction(d) && d(n[0]);
            n = d = void 0
        }), "script") : void 0
    });
    h.parseHTML = function(a, b, e) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (e = b, b = !1);
        b = b || I;
        var k = Sa.exec(a);
        e = !e && [];
        return k ? [b.createElement(k[1])] :
            (k = h.buildFragment([a], b, e), e && e.length && h(e).remove(), h.merge([], k.childNodes))
    };
    var hb = h.fn.load;
    h.fn.load = function(a, b, e) {
        if ("string" != typeof a && hb) return hb.apply(this, arguments);
        var k, c, d, n = this,
            g = a.indexOf(" ");
        return 0 <= g && (k = h.trim(a.slice(g)), a = a.slice(0, g)), h.isFunction(b) ? (e = b, b = void 0) : b && "object" == typeof b && (c = "POST"), 0 < n.length && h.ajax({
            url: a,
            type: c,
            dataType: "html",
            data: b
        }).done(function(a) {
            d = arguments;
            n.html(k ? h("<div>").append(h.parseHTML(a)).find(k) : a)
        }).complete(e && function(a, b) {
            n.each(e,
                d || [a.responseText, b, a])
        }), this
    };
    h.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        h.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    h.expr.filters.animated = function(a) {
        return h.grep(h.timers, function(b) {
            return a === b.elem
        }).length
    };
    var ib = a.document.documentElement;
    h.offset = {
        setOffset: function(a, b, e) {
            var k, c, d, n, g, f, r = h.css(a, "position"),
                l = h(a),
                x = {};
            "static" === r && (a.style.position = "relative");
            g = l.offset();
            d = h.css(a, "top");
            f = h.css(a, "left");
            ("absolute" === r ||
                "fixed" === r) && -1 < (d + f).indexOf("auto") ? (k = l.position(), n = k.top, c = k.left) : (n = parseFloat(d) || 0, c = parseFloat(f) || 0);
            h.isFunction(b) && (b = b.call(a, e, g));
            null != b.top && (x.top = b.top - g.top + n);
            null != b.left && (x.left = b.left - g.left + c);
            "using" in b ? b.using.call(a, x) : l.css(x)
        }
    };
    h.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                h.offset.setOffset(this, a, b)
            });
            var b, e, k = this[0],
                c = {
                    top: 0,
                    left: 0
                },
                d = k && k.ownerDocument;
            if (d) return b = d.documentElement, h.contains(b, k) ? ("undefined" !==
                typeof k.getBoundingClientRect && (c = k.getBoundingClientRect()), e = Z(d), {
                    top: c.top + e.pageYOffset - b.clientTop,
                    left: c.left + e.pageXOffset - b.clientLeft
                }) : c
        },
        position: function() {
            if (this[0]) {
                var a, b, e = this[0],
                    k = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === h.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), h.nodeName(a[0], "html") || (k = a.offset()), k.top += h.css(a[0], "borderTopWidth", !0), k.left += h.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - k.top - h.css(e, "marginTop", !0),
                    left: b.left - k.left -
                        h.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || ib; a && !h.nodeName(a, "html") && "static" === h.css(a, "position");) a = a.offsetParent;
                return a || ib
            })
        }
    });
    h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, e) {
        var k = "pageYOffset" === e;
        h.fn[b] = function(c) {
            return ha(this, function(b, c, d) {
                var h = Z(b);
                return void 0 === d ? h ? h[e] : b[c] : void(h ? h.scrollTo(k ? a.pageXOffset : d, k ? d : a.pageYOffset) : b[c] = d)
            }, b, c, arguments.length, null)
        }
    });
    h.each(["top", "left"],
        function(a, b) {
            h.cssHooks[b] = ca(K.pixelPosition, function(a, e) {
                return e ? (e = Y(a, b), Ga.test(e) ? h(a).position()[b] + "px" : e) : void 0
            })
        });
    h.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        h.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(e, k) {
            h.fn[k] = function(k, c) {
                var d = arguments.length && (e || "boolean" != typeof k),
                    n = e || (!0 === k || !0 === c ? "margin" : "border");
                return ha(this, function(b, e, k) {
                    var c;
                    return h.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" +
                        a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === k ? h.css(b, e, n) : h.style(b, e, k, n)
                }, b, d ? k : void 0, d, null)
            }
        })
    });
    h.fn.size = function() {
        return this.length
    };
    h.fn.andSelf = h.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return h
    });
    var Rb = a.jQuery,
        Sb = a.$;
    return h.noConflict = function(b) {
        return a.$ === h && (a.$ = Sb), b && a.jQuery === h && (a.jQuery = Rb), h
    }, "undefined" === typeof c && (a.jQuery = a.$ = h), h
});
(function(a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function(a) {
    var c = 0,
        b = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
            var f, m, p;
            for (p = 0; null != (m = c[p]); p++) try {
                (f = a._data(m, "events")) && f.remove && a(m).triggerHandler("remove")
            } catch (q) {}
            b(c)
        }
    }(a.cleanData);
    a.widget = function(b, c, f) {
        var m, p, q, s, v = {},
            u = b.split(".")[0];
        b = b.split(".")[1];
        m = u + "-" + b;
        f || (f = c, c = a.Widget);
        a.expr[":"][m.toLowerCase()] = function(b) {
            return !!a.data(b, m)
        };
        a[u] = a[u] || {};
        p = a[u][b];
        q = a[u][b] = function(a, b) {
            if (!this._createWidget) return new q(a, b);
            arguments.length && this._createWidget(a, b)
        };
        a.extend(q, p, {
            version: f.version,
            _proto: a.extend({}, f),
            _childConstructors: []
        });
        s = new c;
        s.options = a.widget.extend({}, s.options);
        a.each(f, function(b, g) {
            a.isFunction(g) ? v[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    f = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b = this._super,
                        c = this._superApply,
                        d;
                    this._super = a;
                    this._superApply = f;
                    d = g.apply(this,
                        arguments);
                    this._super = b;
                    this._superApply = c;
                    return d
                }
            }() : v[b] = g
        });
        q.prototype = a.widget.extend(s, {
            widgetEventPrefix: p ? s.widgetEventPrefix || b : b
        }, v, {
            constructor: q,
            namespace: u,
            widgetName: b,
            widgetFullName: m
        });
        p ? (a.each(p._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, q, c._proto)
        }), delete p._childConstructors) : c._childConstructors.push(q);
        a.widget.bridge(b, q);
        return q
    };
    a.widget.extend = function(c) {
        for (var d = b.call(arguments, 1), f = 0, m = d.length, p, q; f < m; f++)
            for (p in d[f]) q =
                d[f][p], d[f].hasOwnProperty(p) && void 0 !== q && (a.isPlainObject(q) ? c[p] = a.isPlainObject(c[p]) ? a.widget.extend({}, c[p], q) : a.widget.extend({}, q) : c[p] = q);
        return c
    };
    a.widget.bridge = function(c, d) {
        var f = d.prototype.widgetFullName || c;
        a.fn[c] = function(m) {
            var p = "string" === typeof m,
                q = b.call(arguments, 1),
                s = this;
            m = !p && q.length ? a.widget.extend.apply(null, [m].concat(q)) : m;
            p ? this.each(function() {
                var b, d = a.data(this, f);
                if ("instance" === m) return s = d, !1;
                if (!d) return a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" +
                    m + "'");
                if (!a.isFunction(d[m]) || "_" === m.charAt(0)) return a.error("no such method '" + m + "' for " + c + " widget instance");
                b = d[m].apply(d, q);
                if (b !== d && void 0 !== b) return s = b && b.jquery ? s.pushStack(b.get()) : b, !1
            }) : this.each(function() {
                var b = a.data(this, f);
                b ? (b.option(m || {}), b._init && b._init()) : a.data(this, f, new d(m, this))
            });
            return s
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b,
            d) {
            d = a(d || this.defaultElement || this)[0];
            this.element = a(d);
            this.uuid = c++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var f = b,
                m, p, q;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" === typeof b)
                if (f = {}, m = b.split("."), b = m.shift(), m.length) {
                    p = f[b] = a.widget.extend({}, this.options[b]);
                    for (q = 0; q < m.length - 1; q++) p[m[q]] = p[m[q]] || {}, p = p[m[q]];
                    b = m.pop();
                    if (1 === arguments.length) return void 0 === p[b] ? null : p[b];
                    p[b] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[b] ? null :
                        this.options[b];
                    f[b] = c
                }
            this._setOptions(f);
            return this
        },
        _setOptions: function(a) {
            for (var b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            this.options[a] = b;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")));
            return this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(b, c, f) {
            var m,
                p = this;
            "boolean" !== typeof b && (f = c, c = b, b = !1);
            f ? (c = m = a(c), this.bindings = this.bindings.add(c)) : (f = c, c = this.element, m = this.widget());
            a.each(f, function(f, s) {
                function v() {
                    if (b || !0 !== p.options.disabled && !a(this).hasClass("ui-state-disabled")) return ("string" === typeof s ? p[s] : s).apply(p, arguments)
                }
                "string" !== typeof s && (v.guid = s.guid = s.guid || v.guid || a.guid++);
                var u = f.match(/^([\w:-]*)\s*(.*)$/),
                    B = u[1] + p.eventNamespace;
                (u = u[2]) ? m.delegate(u, B, v): c.bind(B, v)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace +
                " ") + this.eventNamespace;
            a.unbind(b).undelegate(b)
        },
        _delay: function(a, b) {
            var c = this;
            return setTimeout(function() {
                return ("string" === typeof a ? c[a] : a).apply(c, arguments)
            }, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b);
            this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b);
            this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, f) {
            var m, p = this.options[b];
            f = f || {};
            c = a.Event(c);
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            c.target = this.element[0];
            if (b = c.originalEvent)
                for (m in b) m in c || (c[m] = b[m]);
            this.element.trigger(c, f);
            return !(a.isFunction(p) && !1 === p.apply(this.element[0], [c].concat(f)) || c.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(f,
            m, p) {
            "string" === typeof m && (m = {
                effect: m
            });
            var q, s = m ? !0 === m || "number" === typeof m ? c : m.effect || c : b;
            m = m || {};
            "number" === typeof m && (m = {
                duration: m
            });
            q = !a.isEmptyObject(m);
            m.complete = p;
            m.delay && f.delay(m.delay);
            if (q && a.effects && a.effects.effect[s]) f[b](m);
            else if (s !== b && f[s]) f[s](m.duration, m.easing, p);
            else f.queue(function(c) {
                a(this)[b]();
                p && p.call(f[0]);
                c()
            })
        }
    })
});
(function() {
    function a(a) {
        return function(b, c, d, f) {
            c = L(c, f, 4);
            var g = !J(b) && l.keys(b),
                r = (g || b).length,
                m = 0 < a ? 0 : r - 1;
            3 > arguments.length && (d = b[g ? g[m] : m], m += a);
            for (var s = c, M = d; 0 <= m && r > m; m += a) var h = g ? g[m] : m,
                M = s(M, b[h], h, b);
            return M
        }
    }

    function c(a) {
        return function(b, c, d) {
            c = R(c, d);
            d = U(b);
            for (var f = 0 < a ? 0 : d - 1; 0 <= f && d > f; f += a)
                if (c(b[f], f, b)) return f;
            return -1
        }
    }

    function b(a, b, c) {
        return function(d, f, g) {
            var r = 0,
                m = U(d);
            if ("number" == typeof g) 0 < a ? r = 0 <= g ? g : Math.max(g + m, r) : m = 0 <= g ? Math.min(g + 1, m) : g + m + 1;
            else if (c && g && m) return g =
                c(d, f), d[g] === f ? g : -1;
            if (f !== f) return g = b(s.call(d, r, m), l.isNaN), 0 <= g ? g + r : -1;
            for (g = 0 < a ? r : m - 1; 0 <= g && m > g; g += a)
                if (d[g] === f) return g;
            return -1
        }
    }

    function g(a, b) {
        var c = W.length,
            d = a.constructor,
            d = l.isFunction(d) && d.prototype || p,
            f = "constructor";
        for (l.has(a, f) && !l.contains(b, f) && b.push(f); c--;) f = W[c], f in a && a[f] !== d[f] && !l.contains(b, f) && b.push(f)
    }
    var d = this,
        f = d._,
        m = Array.prototype,
        p = Object.prototype,
        q = m.push,
        s = m.slice,
        v = p.toString,
        u = p.hasOwnProperty,
        B = Array.isArray,
        y = Object.keys,
        C = Function.prototype.bind,
        O = Object.create,
        w = function() {},
        l = function(a) {
            return a instanceof l ? a : this instanceof l ? void(this._wrapped = a) : new l(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = l), exports._ = l) : d._ = l;
    l.VERSION = "1.8.3";
    var L = function(a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, n) {
                        return a.call(b, c, d, n)
                    };
                case 4:
                    return function(c, d, n, f) {
                        return a.call(b,
                            c, d, n, f)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        R = function(a, b, c) {
            return null == a ? l.identity : l.isFunction(a) ? L(a, b, c) : l.isObject(a) ? l.matcher(a) : l.property(a)
        };
    l.iteratee = function(a, b) {
        return R(a, b, 1 / 0)
    };
    var Y = function(a, b) {
            return function(c) {
                var d = arguments.length;
                if (2 > d || null == c) return c;
                for (var f = 1; d > f; f++)
                    for (var g = arguments[f], r = a(g), l = r.length, m = 0; l > m; m++) {
                        var s = r[m];
                        b && void 0 !== c[s] || (c[s] = g[s])
                    }
                return c
            }
        },
        ca = function(a) {
            if (!l.isObject(a)) return {};
            if (O) return O(a);
            w.prototype = a;
            a =
                new w;
            return w.prototype = null, a
        },
        aa = function(a) {
            return function(b) {
                return null == b ? void 0 : b[a]
            }
        },
        Q = Math.pow(2, 53) - 1,
        U = aa("length"),
        J = function(a) {
            a = U(a);
            return "number" == typeof a && 0 <= a && Q >= a
        };
    l.each = l.forEach = function(a, b, c) {
        b = L(b, c);
        var d;
        if (J(a))
            for (c = 0, d = a.length; d > c; c++) b(a[c], c, a);
        else {
            var f = l.keys(a);
            c = 0;
            for (d = f.length; d > c; c++) b(a[f[c]], f[c], a)
        }
        return a
    };
    l.map = l.collect = function(a, b, c) {
        b = R(b, c);
        c = !J(a) && l.keys(a);
        for (var d = (c || a).length, f = Array(d), g = 0; d > g; g++) {
            var r = c ? c[g] : g;
            f[g] = b(a[r], r, a)
        }
        return f
    };
    l.reduce = l.foldl = l.inject = a(1);
    l.reduceRight = l.foldr = a(-1);
    l.find = l.detect = function(a, b, c) {
        var d;
        return d = J(a) ? l.findIndex(a, b, c) : l.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
    };
    l.filter = l.select = function(a, b, c) {
        var d = [];
        return b = R(b, c), l.each(a, function(a, e, c) {
            b(a, e, c) && d.push(a)
        }), d
    };
    l.reject = function(a, b, c) {
        return l.filter(a, l.negate(R(b)), c)
    };
    l.every = l.all = function(a, b, c) {
        b = R(b, c);
        c = !J(a) && l.keys(a);
        for (var d = (c || a).length, f = 0; d > f; f++) {
            var g = c ? c[f] : f;
            if (!b(a[g], g, a)) return !1
        }
        return !0
    };
    l.some =
        l.any = function(a, b, c) {
            b = R(b, c);
            c = !J(a) && l.keys(a);
            for (var d = (c || a).length, f = 0; d > f; f++) {
                var g = c ? c[f] : f;
                if (b(a[g], g, a)) return !0
            }
            return !1
        };
    l.contains = l.includes = l.include = function(a, b, c, d) {
        return J(a) || (a = l.values(a)), ("number" != typeof c || d) && (c = 0), 0 <= l.indexOf(a, b, c)
    };
    l.invoke = function(a, b) {
        var c = s.call(arguments, 2),
            d = l.isFunction(b);
        return l.map(a, function(a) {
            var e = d ? b : a[b];
            return null == e ? e : e.apply(a, c)
        })
    };
    l.pluck = function(a, b) {
        return l.map(a, l.property(b))
    };
    l.where = function(a, b) {
        return l.filter(a,
            l.matcher(b))
    };
    l.findWhere = function(a, b) {
        return l.find(a, l.matcher(b))
    };
    l.max = function(a, b, c) {
        var d, f = -1 / 0,
            g = -1 / 0;
        if (null == b && null != a) {
            a = J(a) ? a : l.values(a);
            for (var r = 0, m = a.length; m > r; r++) c = a[r], c > f && (f = c)
        } else b = R(b, c), l.each(a, function(a, e, c) {
            d = b(a, e, c);
            (d > g || d === -1 / 0 && f === -1 / 0) && (f = a, g = d)
        });
        return f
    };
    l.min = function(a, b, c) {
        var d, f = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = J(a) ? a : l.values(a);
            for (var r = 0, m = a.length; m > r; r++) c = a[r], f > c && (f = c)
        } else b = R(b, c), l.each(a, function(a, e, c) {
            d = b(a, e, c);
            (g > d || 1 / 0 === d && 1 /
                0 === f) && (f = a, g = d)
        });
        return f
    };
    l.shuffle = function(a) {
        for (var b = J(a) ? a : l.values(a), c = b.length, d = Array(c), f = 0; c > f; f++) a = l.random(0, f), a !== f && (d[f] = d[a]), d[a] = b[f];
        return d
    };
    l.sample = function(a, b, c) {
        return null == b || c ? (J(a) || (a = l.values(a)), a[l.random(a.length - 1)]) : l.shuffle(a).slice(0, Math.max(0, b))
    };
    l.sortBy = function(a, b, c) {
        return b = R(b, c), l.pluck(l.map(a, function(a, e, c) {
            return {
                value: a,
                index: e,
                criteria: b(a, e, c)
            }
        }).sort(function(a, b) {
            var e = a.criteria,
                c = b.criteria;
            if (e !== c) {
                if (e > c || void 0 === e) return 1;
                if (c > e || void 0 === c) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var ba = function(a) {
        return function(b, c, d) {
            var f = {};
            return c = R(c, d), l.each(b, function(d, g) {
                var r = c(d, g, b);
                a(f, d, r)
            }), f
        }
    };
    l.groupBy = ba(function(a, b, c) {
        l.has(a, c) ? a[c].push(b) : a[c] = [b]
    });
    l.indexBy = ba(function(a, b, c) {
        a[c] = b
    });
    l.countBy = ba(function(a, b, c) {
        l.has(a, c) ? a[c]++ : a[c] = 1
    });
    l.toArray = function(a) {
        return a ? l.isArray(a) ? s.call(a) : J(a) ? l.map(a, l.identity) : l.values(a) : []
    };
    l.size = function(a) {
        return null == a ? 0 : J(a) ? a.length : l.keys(a).length
    };
    l.partition = function(a, b, c) {
        b = R(b, c);
        var d = [],
            f = [];
        return l.each(a, function(a, e, c) {
            (b(a, e, c) ? d : f).push(a)
        }), [d, f]
    };
    l.first = l.head = l.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : l.initial(a, a.length - b)
    };
    l.initial = function(a, b, c) {
        return s.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    };
    l.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : l.rest(a, Math.max(0, a.length - b))
    };
    l.rest = l.tail = l.drop = function(a, b, c) {
        return s.call(a, null == b || c ? 1 : b)
    };
    l.compact = function(a) {
        return l.filter(a,
            l.identity)
    };
    var G = function(a, b, c, d) {
        var f = [],
            g = 0;
        d = d || 0;
        for (var r = U(a); r > d; d++) {
            var m = a[d];
            if (J(m) && (l.isArray(m) || l.isArguments(m))) {
                b || (m = G(m, b, c));
                var s = 0,
                    M = m.length;
                for (f.length += M; M > s;) f[g++] = m[s++]
            } else c || (f[g++] = m)
        }
        return f
    };
    l.flatten = function(a, b) {
        return G(a, b, !1)
    };
    l.without = function(a) {
        return l.difference(a, s.call(arguments, 1))
    };
    l.uniq = l.unique = function(a, b, c, d) {
        l.isBoolean(b) || (d = c, c = b, b = !1);
        null != c && (c = R(c, d));
        d = [];
        for (var f = [], g = 0, r = U(a); r > g; g++) {
            var m = a[g],
                s = c ? c(m, g, a) : m;
            b ? (g && f ===
                s || d.push(m), f = s) : c ? l.contains(f, s) || (f.push(s), d.push(m)) : l.contains(d, m) || d.push(m)
        }
        return d
    };
    l.union = function() {
        return l.uniq(G(arguments, !0, !0))
    };
    l.intersection = function(a) {
        for (var b = [], c = arguments.length, d = 0, f = U(a); f > d; d++) {
            var g = a[d];
            if (!l.contains(b, g)) {
                for (var r = 1; c > r && l.contains(arguments[r], g); r++);
                r === c && b.push(g)
            }
        }
        return b
    };
    l.difference = function(a) {
        var b = G(arguments, !0, !0, 1);
        return l.filter(a, function(a) {
            return !l.contains(b, a)
        })
    };
    l.zip = function() {
        return l.unzip(arguments)
    };
    l.unzip = function(a) {
        for (var b =
                a && l.max(a, U).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = l.pluck(a, d);
        return c
    };
    l.object = function(a, b) {
        for (var c = {}, d = 0, f = U(a); f > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    };
    l.findIndex = c(1);
    l.findLastIndex = c(-1);
    l.sortedIndex = function(a, b, c, d) {
        c = R(c, d, 1);
        b = c(b);
        d = 0;
        for (var f = U(a); f > d;) {
            var g = Math.floor((d + f) / 2);
            c(a[g]) < b ? d = g + 1 : f = g
        }
        return d
    };
    l.indexOf = b(1, l.findIndex, l.sortedIndex);
    l.lastIndexOf = b(-1, l.findLastIndex);
    l.range = function(a, b, c) {
        null == b && (b = a || 0, a = 0);
        c = c || 1;
        b = Math.max(Math.ceil((b - a) /
            c), 0);
        for (var d = Array(b), f = 0; b > f; f++, a += c) d[f] = a;
        return d
    };
    var H = function(a, b, c, d, f) {
        if (!(d instanceof b)) return a.apply(c, f);
        b = ca(a.prototype);
        a = a.apply(b, f);
        return l.isObject(a) ? a : b
    };
    l.bind = function(a, b) {
        if (C && a.bind === C) return C.apply(a, s.call(arguments, 1));
        if (!l.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = s.call(arguments, 2),
            d = function() {
                return H(a, d, b, this, c.concat(s.call(arguments)))
            };
        return d
    };
    l.partial = function(a) {
        var b = s.call(arguments, 1),
            c = function() {
                for (var d =
                        0, f = b.length, g = Array(f), r = 0; f > r; r++) g[r] = b[r] === l ? arguments[d++] : b[r];
                for (; d < arguments.length;) g.push(arguments[d++]);
                return H(a, c, this, this, g)
            };
        return c
    };
    l.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (1 >= d) throw Error("bindAll must be passed function names");
        for (b = 1; d > b; b++) c = arguments[b], a[c] = l.bind(a[c], a);
        return a
    };
    l.memoize = function(a, b) {
        var c = function(d) {
            var f = c.cache,
                g = "" + (b ? b.apply(this, arguments) : d);
            return l.has(f, g) || (f[g] = a.apply(this, arguments)), f[g]
        };
        return c.cache = {}, c
    };
    l.delay =
        function(a, b) {
            var c = s.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(null, c)
            }, b)
        };
    l.defer = l.partial(l.delay, l, 1);
    l.throttle = function(a, b, c) {
        var d, f, g, r = null,
            m = 0;
        c || (c = {});
        var s = function() {
            m = !1 === c.leading ? 0 : l.now();
            r = null;
            g = a.apply(d, f);
            r || (d = f = null)
        };
        return function() {
            var M = l.now();
            m || !1 !== c.leading || (m = M);
            var h = b - (M - m);
            return d = this, f = arguments, 0 >= h || h > b ? (r && (clearTimeout(r), r = null), m = M, g = a.apply(d, f), r || (d = f = null)) : r || !1 === c.trailing || (r = setTimeout(s, h)), g
        }
    };
    l.debounce = function(a,
        b, c) {
        var d, f, g, r, m, s = function() {
            var M = l.now() - r;
            b > M && 0 <= M ? d = setTimeout(s, b - M) : (d = null, c || (m = a.apply(g, f), d || (g = f = null)))
        };
        return function() {
            g = this;
            f = arguments;
            r = l.now();
            var M = c && !d;
            return d || (d = setTimeout(s, b)), M && (m = a.apply(g, f), g = f = null), m
        }
    };
    l.wrap = function(a, b) {
        return l.partial(b, a)
    };
    l.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    l.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    };
    l.after = function(a, b) {
        return function() {
            return 1 > --a ? b.apply(this, arguments) : void 0
        }
    };
    l.before = function(a, b) {
        var c;
        return function() {
            return 0 < --a && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
        }
    };
    l.once = l.partial(l.before, 2);
    var X = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        W = "valueOf isPrototypeOf toString propertyIsEnumerable hasOwnProperty toLocaleString".split(" ");
    l.keys = function(a) {
        if (!l.isObject(a)) return [];
        if (y) return y(a);
        var b = [],
            c;
        for (c in a) l.has(a, c) && b.push(c);
        return X && g(a, b), b
    };
    l.allKeys = function(a) {
        if (!l.isObject(a)) return [];
        var b = [],
            c;
        for (c in a) b.push(c);
        return X && g(a, b), b
    };
    l.values = function(a) {
        for (var b = l.keys(a), c = b.length, d = Array(c), f = 0; c > f; f++) d[f] = a[b[f]];
        return d
    };
    l.mapObject = function(a, b, c) {
        b = R(b, c);
        for (var d = l.keys(a), f = d.length, g = {}, r = 0; f > r; r++) c = d[r], g[c] = b(a[c], c, a);
        return g
    };
    l.pairs = function(a) {
        for (var b = l.keys(a), c = b.length, d = Array(c), f = 0; c > f; f++) d[f] = [b[f], a[b[f]]];
        return d
    };
    l.invert = function(a) {
        for (var b = {}, c = l.keys(a), d = 0, f = c.length; f > d; d++) b[a[c[d]]] =
            c[d];
        return b
    };
    l.functions = l.methods = function(a) {
        var b = [],
            c;
        for (c in a) l.isFunction(a[c]) && b.push(c);
        return b.sort()
    };
    l.extend = Y(l.allKeys);
    l.extendOwn = l.assign = Y(l.keys);
    l.findKey = function(a, b, c) {
        b = R(b, c);
        var d;
        c = l.keys(a);
        for (var f = 0, g = c.length; g > f; f++)
            if (d = c[f], b(a[d], d, a)) return d
    };
    l.pick = function(a, b, c) {
        var d, f, g = {},
            r = a;
        if (null == r) return g;
        l.isFunction(b) ? (f = l.allKeys(r), d = L(b, c)) : (f = G(arguments, !1, !1, 1), d = function(a, b, e) {
            return b in e
        }, r = Object(r));
        for (var m = 0, s = f.length; s > m; m++) {
            var M = f[m],
                h = r[M];
            d(h, M, r) && (g[M] = h)
        }
        return g
    };
    l.omit = function(a, b, c) {
        if (l.isFunction(b)) b = l.negate(b);
        else {
            var d = l.map(G(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !l.contains(d, b)
            }
        }
        return l.pick(a, b, c)
    };
    l.defaults = Y(l.allKeys, !0);
    l.create = function(a, b) {
        var c = ca(a);
        return b && l.extendOwn(c, b), c
    };
    l.clone = function(a) {
        return l.isObject(a) ? l.isArray(a) ? a.slice() : l.extend({}, a) : a
    };
    l.tap = function(a, b) {
        return b(a), a
    };
    l.isMatch = function(a, b) {
        var c = l.keys(b),
            d = c.length;
        if (null == a) return !d;
        for (var f = Object(a), g =
                0; d > g; g++) {
            var r = c[g];
            if (b[r] !== f[r] || !(r in f)) return !1
        }
        return !0
    };
    var r = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof l && (a = a._wrapped);
        b instanceof l && (b = b._wrapped);
        var f = v.call(a);
        if (f !== v.call(b)) return !1;
        switch (f) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        f = "[object Array]" === f;
        if (!f) {
            if ("object" !=
                typeof a || "object" != typeof b) return !1;
            var g = a.constructor,
                m = b.constructor;
            if (g !== m && !(l.isFunction(g) && g instanceof g && l.isFunction(m) && m instanceof m) && "constructor" in a && "constructor" in b) return !1
        }
        c = c || [];
        d = d || [];
        for (g = c.length; g--;)
            if (c[g] === a) return d[g] === b;
        if (c.push(a), d.push(b), f) {
            if (g = a.length, g !== b.length) return !1;
            for (; g--;)
                if (!r(a[g], b[g], c, d)) return !1
        } else {
            var s, f = l.keys(a);
            if (g = f.length, l.keys(b).length !== g) return !1;
            for (; g--;)
                if (s = f[g], !l.has(b, s) || !r(a[s], b[s], c, d)) return !1
        }
        return c.pop(),
            d.pop(), !0
    };
    l.isEqual = function(a, b) {
        return r(a, b)
    };
    l.isEmpty = function(a) {
        return null == a ? !0 : J(a) && (l.isArray(a) || l.isString(a) || l.isArguments(a)) ? 0 === a.length : 0 === l.keys(a).length
    };
    l.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    };
    l.isArray = B || function(a) {
        return "[object Array]" === v.call(a)
    };
    l.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    };
    l.each("Arguments Function String Number Date RegExp Error".split(" "), function(a) {
        l["is" + a] = function(b) {
            return v.call(b) === "[object " +
                a + "]"
        }
    });
    l.isArguments(arguments) || (l.isArguments = function(a) {
        return l.has(a, "callee")
    });
    "function" != typeof /./ && "object" != typeof Int8Array && (l.isFunction = function(a) {
        return "function" == typeof a || !1
    });
    l.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    };
    l.isNaN = function(a) {
        return l.isNumber(a) && a !== +a
    };
    l.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" === v.call(a)
    };
    l.isNull = function(a) {
        return null === a
    };
    l.isUndefined = function(a) {
        return void 0 === a
    };
    l.has = function(a, b) {
        return null !=
            a && u.call(a, b)
    };
    l.noConflict = function() {
        return d._ = f, this
    };
    l.identity = function(a) {
        return a
    };
    l.constant = function(a) {
        return function() {
            return a
        }
    };
    l.noop = function() {};
    l.property = aa;
    l.propertyOf = function(a) {
        return null == a ? function() {} : function(b) {
            return a[b]
        }
    };
    l.matcher = l.matches = function(a) {
        return a = l.extendOwn({}, a),
            function(b) {
                return l.isMatch(b, a)
            }
    };
    l.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = L(b, c, 1);
        for (c = 0; a > c; c++) d[c] = b(c);
        return d
    };
    l.random = function(a, b) {
        return null == b && (b = a, a = 0), a +
            Math.floor(Math.random() * (b - a + 1))
    };
    l.now = Date.now || function() {
        return (new Date).getTime()
    };
    B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    Y = l.invert(B);
    aa = function(a) {
        var b = function(b) {
                return a[b]
            },
            c = "(?:" + l.keys(a).join("|") + ")",
            d = RegExp(c),
            f = RegExp(c, "g");
        return function(a) {
            return a = null == a ? "" : "" + a, d.test(a) ? a.replace(f, b) : a
        }
    };
    l.escape = aa(B);
    l.unescape = aa(Y);
    l.result = function(a, b, c) {
        b = null == a ? void 0 : a[b];
        return void 0 === b && (b = c), l.isFunction(b) ? b.call(a) : b
    };
    var M = 0;
    l.uniqueId = function(a) {
        var b = ++M + "";
        return a ? a + b : b
    };
    l.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var D = /(.)^/,
        T = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        N = /\\|'|\r|\n|\u2028|\u2029/g,
        P = function(a) {
            return "\\" + T[a]
        };
    l.template = function(a, b, c) {
        !b && c && (b = c);
        b = l.defaults({}, b, l.templateSettings);
        c = RegExp([(b.escape || D).source, (b.interpolate || D).source, (b.evaluate || D).source].join("|") + "|$", "g");
        var d = 0,
            f = "__p+='";
        a.replace(c, function(b, c, k, h, g) {
            return f += a.slice(d, g).replace(N, P), d = g + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : k ? f += "'+\n((__t=(" + k + "))==null?'':__t)+\n'" : h && (f += "';\n" + h + "\n__p+='"), b
        });
        f += "';\n";
        b.variable || (f = "with(obj||{}){\n" + f + "}\n");
        f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (r) {
            throw r.source = f, r;
        }
        c = function(a) {
            return g.call(this, a, l)
        };
        return c.source =
            "function(" + (b.variable || "obj") + "){\n" + f + "}", c
    };
    l.chain = function(a) {
        a = l(a);
        return a._chain = !0, a
    };
    var Z = function(a, b) {
        return a._chain ? l(b).chain() : b
    };
    l.mixin = function(a) {
        l.each(l.functions(a), function(b) {
            var c = l[b] = a[b];
            l.prototype[b] = function() {
                var a = [this._wrapped];
                return q.apply(a, arguments), Z(this, c.apply(l, a))
            }
        })
    };
    l.mixin(l);
    l.each("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var b = m[a];
        l.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !==
                a && "splice" !== a || 0 !== c.length || delete c[0], Z(this, c)
        }
    });
    l.each(["concat", "join", "slice"], function(a) {
        var b = m[a];
        l.prototype[a] = function() {
            return Z(this, b.apply(this._wrapped, arguments))
        }
    });
    l.prototype.value = function() {
        return this._wrapped
    };
    l.prototype.valueOf = l.prototype.toJSON = l.prototype.value;
    l.prototype.toString = function() {
        return "" + this._wrapped
    };
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return l
    })
}).call(this);
(function(a, c) {
    if ("function" === typeof define && define.amd) define(["underscore", "jquery", "exports"], function(b, d, f) {
        a.Backbone = c(a, f, b, d)
    });
    else if ("undefined" !== typeof exports) {
        var b = require("underscore");
        c(a, exports, b)
    } else a.Backbone = c(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
})(this, function(a, c, b, g) {
    var d = a.Backbone,
        f = [].slice;
    c.VERSION = "1.1.2";
    c.$ = g;
    c.noConflict = function() {
        a.Backbone = d;
        return this
    };
    c.emulateHTTP = !1;
    c.emulateJSON = !1;
    var m = c.Events = {
            on: function(a, b, c) {
                if (!q(this, "on", a, [b, c]) ||
                    !b) return this;
                this._events || (this._events = {});
                (this._events[a] || (this._events[a] = [])).push({
                    callback: b,
                    context: c,
                    ctx: c || this
                });
                return this
            },
            once: function(a, c, d) {
                if (!q(this, "once", a, [c, d]) || !c) return this;
                var f = this,
                    g = b.once(function() {
                        f.off(a, g);
                        c.apply(this, arguments)
                    });
                g._callback = c;
                return this.on(a, g, d)
            },
            off: function(a, c, d) {
                var f, g, l, m, e, k, n, s;
                if (!this._events || !q(this, "off", a, [c, d])) return this;
                if (!a && !c && !d) return this._events = void 0, this;
                m = a ? [a] : b.keys(this._events);
                e = 0;
                for (k = m.length; e < k; e++)
                    if (a =
                        m[e], l = this._events[a]) {
                        this._events[a] = f = [];
                        if (c || d)
                            for (n = 0, s = l.length; n < s; n++) g = l[n], (c && c !== g.callback && c !== g.callback._callback || d && d !== g.context) && f.push(g);
                        f.length || delete this._events[a]
                    }
                return this
            },
            trigger: function(a) {
                if (!this._events) return this;
                var b = f.call(arguments, 1);
                if (!q(this, "trigger", a, b)) return this;
                var c = this._events[a],
                    d = this._events.all;
                c && s(c, b);
                d && s(d, arguments);
                return this
            },
            stopListening: function(a, c, d) {
                var f = this._listeningTo;
                if (!f) return this;
                var g = !c && !d;
                d || "object" !==
                    typeof c || (d = this);
                a && ((f = {})[a._listenId] = a);
                for (var l in f) a = f[l], a.off(c, d, this), (g || b.isEmpty(a._events)) && delete this._listeningTo[l];
                return this
            }
        },
        p = /\s+/,
        q = function(a, b, c, d) {
            if (!c) return !0;
            if ("object" === typeof c) {
                for (var f in c) a[b].apply(a, [f, c[f]].concat(d));
                return !1
            }
            if (p.test(c)) {
                c = c.split(p);
                f = 0;
                for (var g = c.length; f < g; f++) a[b].apply(a, [c[f]].concat(d));
                return !1
            }
            return !0
        },
        s = function(a, b) {
            var c, d = -1,
                f = a.length,
                g = b[0],
                l = b[1],
                e = b[2];
            switch (b.length) {
                case 0:
                    for (; ++d < f;)(c = a[d]).callback.call(c.ctx);
                    break;
                case 1:
                    for (; ++d < f;)(c = a[d]).callback.call(c.ctx, g);
                    break;
                case 2:
                    for (; ++d < f;)(c = a[d]).callback.call(c.ctx, g, l);
                    break;
                case 3:
                    for (; ++d < f;)(c = a[d]).callback.call(c.ctx, g, l, e);
                    break;
                default:
                    for (; ++d < f;)(c = a[d]).callback.apply(c.ctx, b)
            }
        };
    b.each({
        listenTo: "on",
        listenToOnce: "once"
    }, function(a, c) {
        m[c] = function(c, d, f) {
            var g = this._listeningTo || (this._listeningTo = {}),
                l = c._listenId || (c._listenId = b.uniqueId("l"));
            g[l] = c;
            f || "object" !== typeof d || (f = this);
            c[a](d, f, this);
            return this
        }
    });
    m.bind = m.on;
    m.unbind = m.off;
    b.extend(c, m);
    var v = c.Model = function(a, c) {
        var d = a || {};
        c || (c = {});
        this.cid = b.uniqueId("c");
        this.attributes = {};
        c.collection && (this.collection = c.collection);
        c.parse && (d = this.parse(d, c) || {});
        d = b.defaults({}, d, b.result(this, "defaults"));
        this.set(d, c);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    b.extend(v.prototype, m, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(a) {
            return b.clone(this.attributes)
        },
        sync: function() {
            return c.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return b.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, c, d) {
            var f, g, l, m, e, k, n;
            if (null == a) return this;
            "object" === typeof a ? (g = a, d = c) : (g = {})[a] = c;
            d || (d = {});
            if (!this._validate(g, d)) return !1;
            l = d.unset;
            m = d.silent;
            a = [];
            e = this._changing;
            this._changing = !0;
            e || (this._previousAttributes = b.clone(this.attributes), this.changed = {});
            n = this.attributes;
            k = this._previousAttributes;
            this.idAttribute in g && (this.id = g[this.idAttribute]);
            for (f in g) c = g[f], b.isEqual(n[f], c) || a.push(f), b.isEqual(k[f], c) ? delete this.changed[f] : this.changed[f] = c, l ? delete n[f] : n[f] = c;
            if (!m)
                for (a.length && (this._pending = d), c = 0, f = a.length; c < f; c++) this.trigger("change:" + a[c], this, n[a[c]], d);
            if (e) return this;
            if (!m)
                for (; this._pending;) d = this._pending, this._pending = !1, this.trigger("change", this, d);
            this._changing = this._pending = !1;
            return this
        },
        unset: function(a, c) {
            return this.set(a, void 0, b.extend({}, c, {
                unset: !0
            }))
        },
        clear: function(a) {
            var c = {},
                d;
            for (d in this.attributes) c[d] =
                void 0;
            return this.set(c, b.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !b.isEmpty(this.changed) : b.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? b.clone(this.changed) : !1;
            var c, d = !1,
                f = this._changing ? this._previousAttributes : this.attributes,
                g;
            for (g in a) b.isEqual(f[g], c = a[g]) || ((d || (d = {}))[g] = c);
            return d
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return b.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? b.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var c = this,
                d = a.success;
            a.success = function(b) {
                if (!c.set(c.parse(b, a), a)) return !1;
                d && d(c, b, a);
                c.trigger("sync", c, b, a)
            };
            W(this, a);
            return this.sync("read", this, a)
        },
        save: function(a, c, d) {
            var f, g = this.attributes;
            null == a || "object" === typeof a ? (f = a, d = c) : (f = {})[a] = c;
            d = b.extend({
                validate: !0
            }, d);
            if (f && !d.wait) {
                if (!this.set(f, d)) return !1
            } else if (!this._validate(f, d)) return !1;
            f && d.wait && (this.attributes = b.extend({}, g, f));
            void 0 === d.parse && (d.parse = !0);
            var l = this,
                m = d.success;
            d.success = function(a) {
                l.attributes = g;
                var c = l.parse(a, d);
                d.wait && (c = b.extend(f || {}, c));
                if (b.isObject(c) && !l.set(c, d)) return !1;
                m && m(l, a, d);
                l.trigger("sync", l, a, d)
            };
            W(this, d);
            a = this.isNew() ? "create" : d.patch ? "patch" : "update";
            "patch" === a && (d.attrs = f);
            a = this.sync(a, this, d);
            f && d.wait && (this.attributes = g);
            return a
        },
        destroy: function(a) {
            a = a ? b.clone(a) : {};
            var c = this,
                d = a.success,
                f = function() {
                    c.trigger("destroy", c, c.collection, a)
                };
            a.success = function(b) {
                (a.wait || c.isNew()) && f();
                d && d(c,
                    b, a);
                c.isNew() || c.trigger("sync", c, b, a)
            };
            if (this.isNew()) return a.success(), !1;
            W(this, a);
            var g = this.sync("delete", this, a);
            a.wait || f();
            return g
        },
        url: function() {
            var a = b.result(this, "urlRoot") || b.result(this.collection, "url") || X();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(a) {
            return this._validate({}, b.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, c) {
            if (!c.validate || !this.validate) return !0;
            a = b.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, c) || null;
            if (!d) return !0;
            this.trigger("invalid", this, d, b.extend(c, {
                validationError: d
            }));
            return !1
        }
    });
    b.each("keys values pairs invert pick omit".split(" "), function(a) {
        v.prototype[a] = function() {
            var c = f.call(arguments);
            c.unshift(this.attributes);
            return b[a].apply(b, c)
        }
    });
    var u = c.Collection = function(a, c) {
            c || (c = {});
            c.model && (this.model = c.model);
            void 0 !== c.comparator && (this.comparator = c.comparator);
            this._reset();
            this.initialize.apply(this, arguments);
            a && this.reset(a, b.extend({
                silent: !0
            }, c))
        },
        B = {
            add: !0,
            remove: !0,
            merge: !0
        },
        y = {
            add: !0,
            remove: !1
        };
    b.extend(u.prototype, m, {
        model: v,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return c.sync.apply(this, arguments)
        },
        add: function(a, c) {
            return this.set(a, b.extend({
                merge: !1
            }, c, y))
        },
        remove: function(a, c) {
            var d = !b.isArray(a);
            a = d ? [a] : b.clone(a);
            c ||
                (c = {});
            var f, g, l, m;
            f = 0;
            for (g = a.length; f < g; f++)
                if (m = a[f] = this.get(a[f])) delete this._byId[m.id], delete this._byId[m.cid], l = this.indexOf(m), this.models.splice(l, 1), this.length--, c.silent || (c.index = l, m.trigger("remove", m, this, c)), this._removeReference(m, c);
            return d ? a[0] : a
        },
        set: function(a, c) {
            c = b.defaults({}, c, B);
            c.parse && (a = this.parse(a, c));
            var d = !b.isArray(a);
            a = d ? a ? [a] : [] : b.clone(a);
            var f, g, l, m, e, k, n = c.at,
                s = this.model,
                p = this.comparator && null == n && !1 !== c.sort,
                u = b.isString(this.comparator) ? this.comparator :
                null,
                q = [],
                G = [],
                H = {},
                C = c.add,
                h = c.merge,
                y = c.remove,
                w = !p && C && y ? [] : !1;
            f = 0;
            for (g = a.length; f < g; f++) {
                e = a[f] || {};
                l = e instanceof v ? m = e : e[s.prototype.idAttribute || "id"];
                if (l = this.get(l)) y && (H[l.cid] = !0), h && (e = e === m ? m.attributes : e, c.parse && (e = l.parse(e, c)), l.set(e, c), p && !k && l.hasChanged(u) && (k = !0)), a[f] = l;
                else if (C) {
                    m = a[f] = this._prepareModel(e, c);
                    if (!m) continue;
                    q.push(m);
                    this._addReference(m, c)
                }
                m = l || m;
                !w || !m.isNew() && H[m.id] || w.push(m);
                H[m.id] = !0
            }
            if (y) {
                f = 0;
                for (g = this.length; f < g; ++f) H[(m = this.models[f]).cid] ||
                    G.push(m);
                G.length && this.remove(G, c)
            }
            if (q.length || w && w.length)
                if (p && (k = !0), this.length += q.length, null != n)
                    for (f = 0, g = q.length; f < g; f++) this.models.splice(n + f, 0, q[f]);
                else
                    for (w && (this.models.length = 0), e = w || q, f = 0, g = e.length; f < g; f++) this.models.push(e[f]);
            k && this.sort({
                silent: !0
            });
            if (!c.silent) {
                f = 0;
                for (g = q.length; f < g; f++)(m = q[f]).trigger("add", m, this, c);
                (k || w && w.length) && this.trigger("sort", this, c)
            }
            return d ? a[0] : a
        },
        reset: function(a, c) {
            c || (c = {});
            for (var d = 0, f = this.models.length; d < f; d++) this._removeReference(this.models[d],
                c);
            c.previousModels = this.models;
            this._reset();
            a = this.add(a, b.extend({
                silent: !0
            }, c));
            c.silent || this.trigger("reset", this, c);
            return a
        },
        push: function(a, c) {
            return this.add(a, b.extend({
                at: this.length
            }, c))
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        },
        unshift: function(a, c) {
            return this.add(a, b.extend({
                at: 0
            }, c))
        },
        shift: function(a) {
            var b = this.at(0);
            this.remove(b, a);
            return b
        },
        slice: function() {
            return f.apply(this.models, arguments)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[a] ||
                this._byId[a.id] || this._byId[a.cid]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, c) {
            return b.isEmpty(a) ? c ? void 0 : [] : this[c ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c)) return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            a || (a = {});
            b.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(b.bind(this.comparator,
                this));
            a.silent || this.trigger("sort", this, a);
            return this
        },
        pluck: function(a) {
            return b.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? b.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var c = a.success,
                d = this;
            a.success = function(b) {
                d[a.reset ? "reset" : "set"](b, a);
                c && c(d, b, a);
                d.trigger("sync", d, b, a)
            };
            W(this, a);
            return this.sync("read", this, a)
        },
        create: function(a, c) {
            c = c ? b.clone(c) : {};
            if (!(a = this._prepareModel(a, c))) return !1;
            c.wait || this.add(a, c);
            var d = this,
                f = c.success;
            c.success = function(a, b) {
                c.wait && d.add(a,
                    c);
                f && f(a, b, c)
            };
            a.save(null, c);
            return a
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(a, c) {
            if (a instanceof v) return a;
            c = c ? b.clone(c) : {};
            c.collection = this;
            var d = new this.model(a, c);
            if (!d.validationError) return d;
            this.trigger("invalid", this, d.validationError, c);
            return !1
        },
        _addReference: function(a, b) {
            this._byId[a.cid] = a;
            null != a.id && (this._byId[a.id] = a);
            a.collection || (a.collection =
                this);
            a.on("all", this._onModelEvent, this)
        },
        _removeReference: function(a, b) {
            this === a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            if ("add" !== a && "remove" !== a || c === this) "destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments)
        }
    });
    b.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without difference indexOf shuffle lastIndexOf isEmpty chain sample".split(" "),
        function(a) {
            u.prototype[a] = function() {
                var c = f.call(arguments);
                c.unshift(this.models);
                return b[a].apply(b, c)
            }
        });
    b.each(["groupBy", "countBy", "sortBy", "indexBy"], function(a) {
        u.prototype[a] = function(c, d) {
            var f = b.isFunction(c) ? c : function(a) {
                return a.get(c)
            };
            return b[a](this.models, f, d)
        }
    });
    g = c.View = function(a) {
        this.cid = b.uniqueId("view");
        a || (a = {});
        b.extend(this, b.pick(a, O));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    };
    var C = /^(\S+)\s*(.*)$/,
        O = "model collection el id attributes className tagName events".split(" ");
    b.extend(g.prototype, m, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this
        },
        setElement: function(a, b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof c.$ ? a : c.$(a);
            this.el = this.$el[0];
            !1 !== b && this.delegateEvents();
            return this
        },
        delegateEvents: function(a) {
            if (!a && !(a = b.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var c in a) {
                var d = a[c];
                b.isFunction(d) ||
                    (d = this[a[c]]);
                if (d) {
                    var f = c.match(C),
                        g = f[1],
                        f = f[2],
                        d = b.bind(d, this),
                        g = g + (".delegateEvents" + this.cid);
                    if ("" === f) this.$el.on(g, d);
                    else this.$el.on(g, f, d)
                }
            }
            return this
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        _ensureElement: function() {
            if (this.el) this.setElement(b.result(this, "el"), !1);
            else {
                var a = b.extend({}, b.result(this, "attributes"));
                this.id && (a.id = b.result(this, "id"));
                this.className && (a["class"] = b.result(this, "className"));
                a = c.$("<" + b.result(this, "tagName") +
                    ">").attr(a);
                this.setElement(a, !1)
            }
        }
    });
    c.sync = function(a, d, f) {
        var g = l[a];
        b.defaults(f || (f = {}), {
            emulateHTTP: c.emulateHTTP,
            emulateJSON: c.emulateJSON
        });
        var m = {
            type: g,
            dataType: "json"
        };
        f.url || (m.url = b.result(d, "url") || X());
        null != f.data || !d || "create" !== a && "update" !== a && "patch" !== a || (m.contentType = "application/json", m.data = JSON.stringify(f.attrs || d.toJSON(f)));
        f.emulateJSON && (m.contentType = "application/x-www-form-urlencoded", m.data = m.data ? {
            model: m.data
        } : {});
        if (f.emulateHTTP && ("PUT" === g || "DELETE" === g || "PATCH" ===
                g)) {
            m.type = "POST";
            f.emulateJSON && (m.data._method = g);
            var s = f.beforeSend;
            f.beforeSend = function(a) {
                a.setRequestHeader("X-HTTP-Method-Override", g);
                if (s) return s.apply(this, arguments)
            }
        }
        "GET" === m.type || f.emulateJSON || (m.processData = !1);
        "PATCH" === m.type && w && (m.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        a = f.xhr = c.ajax(b.extend(m, f));
        d.trigger("request", d, a, f);
        return a
    };
    var w = "undefined" !== typeof window && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
        l = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
    c.ajax = function() {
        return c.$.ajax.apply(c.$, arguments)
    };
    var L = c.Router = function(a) {
            a || (a = {});
            a.routes && (this.routes = a.routes);
            this._bindRoutes();
            this.initialize.apply(this, arguments)
        },
        R = /\((.*?)\)/g,
        Y = /(\(\?)?:\w+/g,
        ca = /\*\w+/g,
        aa = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    b.extend(L.prototype, m, {
        initialize: function() {},
        route: function(a, d, f) {
            b.isRegExp(a) || (a = this._routeToRegExp(a));
            b.isFunction(d) && (f = d, d = "");
            f || (f = this[d]);
            var g = this;
            c.history.route(a,
                function(b) {
                    b = g._extractParameters(a, b);
                    g.execute(f, b);
                    g.trigger.apply(g, ["route:" + d].concat(b));
                    g.trigger("route", d, b);
                    c.history.trigger("route", g, d, b)
                });
            return this
        },
        execute: function(a, b) {
            a && a.apply(this, b)
        },
        navigate: function(a, b) {
            c.history.navigate(a, b);
            return this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = b.result(this, "routes");
                for (var a, c = b.keys(this.routes); null != (a = c.pop());) this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(aa, "\\$&").replace(R, "(?:$1)?").replace(Y,
                function(a, b) {
                    return b ? a : "([^/?]+)"
                }).replace(ca, "([^?]*?)");
            return new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(a, c) {
            var d = a.exec(c).slice(1);
            return b.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }
    });
    var Q = c.History = function() {
            this.handlers = [];
            b.bindAll(this, "checkUrl");
            "undefined" !== typeof window && (this.location = window.location, this.history = window.history)
        },
        U = /^[#\/]|\s+$/g,
        J = /^\/+|\/+$/g,
        ba = /msie [\w.]+/,
        G = /\/$/,
        H = /#.*$/;
    Q.started = !1;
    b.extend(Q.prototype, m, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(a) {
            return (a = (a || this).location.href.match(/#(.*)$/)) ? a[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = decodeURI(this.location.pathname + this.location.search);
                    var c = this.root.replace(G, "");
                    a.indexOf(c) || (a = a.slice(c.length))
                } else a = this.getHash();
            return a.replace(U, "")
        },
        start: function(a) {
            if (Q.started) throw Error("Backbone.history has already been started");
            Q.started = !0;
            this.options = b.extend({
                root: "/"
            }, this.options, a);
            this.root = this.options.root;
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            a = this.getFragment();
            var d = document.documentMode,
                d = ba.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(J, "/");
            d && this._wantsHashChange && (this.iframe = c.$('<iframe src="javascript:0" tabindex="-1">').hide().appendTo("body")[0].contentWindow,
                this.navigate(a));
            if (this._hasPushState) c.$(window).on("popstate", this.checkUrl);
            else if (this._wantsHashChange && "onhashchange" in window && !d) c.$(window).on("hashchange", this.checkUrl);
            else this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = a;
            a = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                this._hasPushState &&
                    this.atRoot() && a.hash && (this.fragment = this.getHash().replace(U, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            c.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            this._checkUrlInterval && clearInterval(this._checkUrlInterval);
            Q.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function(a) {
            a = this.getFragment();
            a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a === this.fragment) return !1;
            this.iframe && this.navigate(a);
            this.loadUrl()
        },
        loadUrl: function(a) {
            a = this.fragment = this.getFragment(a);
            return b.any(this.handlers, function(b) {
                if (b.route.test(a)) return b.callback(a), !0
            })
        },
        navigate: function(a, b) {
            if (!Q.started) return !1;
            b && !0 !== b || (b = {
                trigger: !!b
            });
            var c = this.root + (a = this.getFragment(a || ""));
            a = a.replace(H, "");
            if (this.fragment !== a) {
                this.fragment = a;
                "" === a && "/" !== c && (c = c.slice(0, -1));
                if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({},
                    document.title, c);
                else if (this._wantsHashChange) this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace));
                else return this.location.assign(c);
                if (b.trigger) return this.loadUrl(a)
            }
        },
        _updateHash: function(a, b, c) {
            c ? (c = a.href.replace(/(javascript:|#).*$/, ""), a.replace(c + "#" + b)) : a.hash = "#" + b
        }
    });
    c.history = new Q;
    v.extend = u.extend = L.extend = g.extend = Q.extend = function(a,
        c) {
        var d = this,
            f;
        f = a && b.has(a, "constructor") ? a.constructor : function() {
            return d.apply(this, arguments)
        };
        b.extend(f, d, c);
        var g = function() {
            this.constructor = f
        };
        g.prototype = d.prototype;
        f.prototype = new g;
        a && b.extend(f.prototype, a);
        f.__super__ = d.prototype;
        return f
    };
    var X = function() {
            throw Error('A "url" property or function must be specified');
        },
        W = function(a, b) {
            var c = b.error;
            b.error = function(d) {
                c && c(a, d, b);
                a.trigger("error", a, d, b)
            }
        };
    return c
});
window.Modernizr = function(a, c, b) {
    function g(a, b) {
        return typeof a === b
    }

    function d(a, c) {
        for (var d in a) {
            var f = a[d];
            if (!~("" + f).indexOf("-") && B[f] !== b) return "pfx" == c ? f : !0
        }
        return !1
    }

    function f(a, c, f) {
        var m = a.charAt(0).toUpperCase() + a.slice(1),
            s = (a + " " + l.join(m + " ") + m).split(" ");
        if (g(c, "string") || g(c, "undefined")) c = d(s, c);
        else a: {
            s = (a + " " + L.join(m + " ") + m).split(" "), a = s;
            for (var p in a)
                if (m = c[a[p]], m !== b) {
                    c = !1 === f ? a[p] : g(m, "function") ? m.bind(f || c) : m;
                    break a
                }
            c = !1
        }
        return c
    }

    function m() {
        s.input = function(b) {
            for (var d =
                    0, f = b.length; f > d; d++) Y[b[d]] = !!(b[d] in y);
            return Y.list && (Y.list = !(!c.createElement("datalist") || !a.HTMLDataListElement)), Y
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        s.inputtypes = function(a) {
            for (var d, f, g, m = 0, l = a.length; l > m; m++) y.setAttribute("type", f = a[m]), (d = "text" !== y.type) && (y.value = C, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && y.style.WebkitAppearance !== b ? (v.appendChild(y), g = c.defaultView, d = g.getComputedStyle &&
                "textfield" !== g.getComputedStyle(y, null).WebkitAppearance && 0 !== y.offsetHeight, v.removeChild(y)) : /^(search|tel)$/.test(f) || (d = /^(url|email)$/.test(f) ? y.checkValidity && !1 === y.checkValidity() : y.value != C)), R[a[m]] = !!d;
            return R
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var p, q, s = {},
        v = c.documentElement,
        u = c.createElement("modernizr"),
        B = u.style,
        y = c.createElement("input"),
        C = ":)",
        O = {}.toString,
        w = " -webkit- -moz- -o- -ms- ".split(" "),
        l = ["Webkit", "Moz",
            "O", "ms"
        ],
        L = ["webkit", "moz", "o", "ms"],
        u = {},
        R = {},
        Y = {},
        ca = [],
        aa = ca.slice,
        Q = function(a, b, d, f) {
            var g, m, l, s, p = c.createElement("div"),
                u = c.body,
                q = u || c.createElement("body");
            if (parseInt(d, 10))
                for (; d--;) l = c.createElement("div"), l.id = f ? f[d] : "modernizr" + (d + 1), p.appendChild(l);
            return g = ['&#173;<style id="smodernizr">', a, "</style>"].join(""), p.id = "modernizr", (u ? p : q).innerHTML += g, q.appendChild(p), u || (q.style.background = "", q.style.overflow = "hidden", s = v.style.overflow, v.style.overflow = "hidden", v.appendChild(q)),
                m = b(p, a), u ? p.parentNode.removeChild(p) : (q.parentNode.removeChild(q), v.style.overflow = s), !!m
        },
        U = function() {
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(d, f) {
                f = f || c.createElement(a[d] || "div");
                d = "on" + d;
                var m = d in f;
                return m || (f.setAttribute || (f = c.createElement("div")), f.setAttribute && f.removeAttribute && (f.setAttribute(d, ""), m = g(f[d], "function"), g(f[d], "undefined") || (f[d] = b), f.removeAttribute(d))), m
            }
        }(),
        J = {}.hasOwnProperty;
    q = g(J, "undefined") ||
        g(J.call, "undefined") ? function(a, b) {
            return b in a && g(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return J.call(a, b)
        };
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = aa.call(arguments, 1),
            d = function() {
                if (this instanceof d) {
                    var f = function() {};
                    f.prototype = b.prototype;
                    var f = new f,
                        g = b.apply(f, c.concat(aa.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(aa.call(arguments)))
            };
        return d
    });
    u.flexbox = function() {
        return f("flexWrap")
    };
    u.flexboxlegacy = function() {
        return f("boxDirection")
    };
    u.canvas = function() {
        var a = c.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    };
    u.canvastext = function() {
        return !(!s.canvas || !g(c.createElement("canvas").getContext("2d").fillText, "function"))
    };
    u.webgl = function() {
        return !!a.WebGLRenderingContext
    };
    u.touch = function() {
        var b;
        return "ontouchstart" in a || a.DocumentTouch && c instanceof DocumentTouch ? b = !0 : Q(["@media (", w.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""),
            function(a) {
                b = 9 === a.offsetTop
            }), b
    };
    u.geolocation = function() {
        return "geolocation" in navigator
    };
    u.postmessage = function() {
        return !!a.postMessage
    };
    u.websqldatabase = function() {
        return !!a.openDatabase
    };
    u.indexedDB = function() {
        return !!f("indexedDB", a)
    };
    u.hashchange = function() {
        return U("hashchange", a) && (c.documentMode === b || 7 < c.documentMode)
    };
    u.history = function() {
        return !(!a.history || !history.pushState)
    };
    u.draganddrop = function() {
        var a = c.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    };
    u.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a
    };
    u.rgba = function() {
        B.cssText = "background-color:rgba(150,255,150,.5)";
        return !!~("" + B.backgroundColor).indexOf("rgba")
    };
    u.hsla = function() {
        B.cssText = "background-color:hsla(120,40%,100%,.5)";
        return !!~("" + B.backgroundColor).indexOf("rgba") || !!~("" + B.backgroundColor).indexOf("hsla")
    };
    u.multiplebgs = function() {
        B.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(B.background)
    };
    u.backgroundsize =
        function() {
            return f("backgroundSize")
        };
    u.borderimage = function() {
        return f("borderImage")
    };
    u.borderradius = function() {
        return f("borderRadius")
    };
    u.boxshadow = function() {
        return f("boxShadow")
    };
    u.textshadow = function() {
        return "" === c.createElement("div").style.textShadow
    };
    u.opacity = function() {
        var a = w.join("opacity:.55;") + "";
        B.cssText = a;
        return /^0.55$/.test(B.opacity)
    };
    u.cssanimations = function() {
        return f("animationName")
    };
    u.csscolumns = function() {
        return f("columnCount")
    };
    u.cssgradients = function() {
        var a = ("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:" +
            w.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        B.cssText = a;
        return !!~("" + B.backgroundImage).indexOf("gradient")
    };
    u.cssreflections = function() {
        return f("boxReflect")
    };
    u.csstransforms = function() {
        return !!f("transform")
    };
    u.csstransforms3d = function() {
        var a = !!f("perspective");
        return a && "webkitPerspective" in v.style && Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    };
    u.csstransitions =
        function() {
            return f("transition")
        };
    u.fontface = function() {
        var a;
        return Q('@font-face {font-family:"font";src:url("https://")}', function(b, d) {
            var f = c.getElementById("smodernizr"),
                f = (f = f.sheet || f.styleSheet) ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(f) && 0 === f.indexOf(d.split(" ")[0])
        }), a
    };
    u.generatedcontent = function() {
        var a;
        return Q(['#modernizr{font:0/0 a}#modernizr:after{content:"', C, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = 3 <= b.offsetHeight
            }),
            a
    };
    u.video = function() {
        var a = c.createElement("video"),
            b = !1;
        try {
            (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (d) {}
        return b
    };
    u.audio = function() {
        var a = c.createElement("audio"),
            b = !1;
        try {
            (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,
                ""), b.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), b.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), b.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (d) {}
        return b
    };
    u.localstorage = function() {
        try {
            return localStorage.setItem("modernizr", "modernizr"), localStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    u.sessionstorage = function() {
        try {
            return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    u.webworkers = function() {
        return !!a.Worker
    };
    u.applicationcache = function() {
        return !!a.applicationCache
    };
    u.svg = function() {
        return !!c.createElementNS && !!c.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    };
    u.inlinesvg = function() {
        var a = c.createElement("div");
        return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == (a.firstChild && a.firstChild.namespaceURI)
    };
    u.smil = function() {
        return !!c.createElementNS && /SVGAnimate/.test(O.call(c.createElementNS("http://www.w3.org/2000/svg", "animate")))
    };
    u.svgclippaths =
        function() {
            return !!c.createElementNS && /SVGClipPath/.test(O.call(c.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
        };
    for (var ba in u) q(u, ba) && (p = ba.toLowerCase(), s[p] = u[ba](), ca.push((s[p] ? "" : "no-") + p));
    s.input || m();
    s.addTest = function(a, c) {
        if ("object" == typeof a)
            for (var d in a) q(a, d) && s.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), s[a] !== b) return s;
            c = "function" == typeof c ? c() : c;
            v.className += " " + (c ? "" : "no-") + a;
            s[a] = c
        }
        return s
    };
    B.cssText = "";
    return u = y = null,
        function(a, b) {
            function c() {
                var a = u.elements;
                return "string" == typeof a ? a.split(" ") : a
            }

            function d(a) {
                var b = x[a[k]];
                return b || (b = {}, n++, a[k] = n, x[n] = b), b
            }

            function f(a, c, k) {
                if (c || (c = b), s) return c.createElement(a);
                k || (k = d(c));
                var g;
                return g = k.cache[a] ? k.cache[a].cloneNode() : e.test(a) ? (k.cache[a] = k.createElem(a)).cloneNode() : k.createElem(a), !g.canHaveChildren || q.test(a) || g.tagUrn ? g : k.frag.appendChild(g)
            }

            function g(a, b) {
                b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag());
                a.createElement = function(c) {
                    return u.shivMethods ?
                        f(c, a, b) : b.createElem(c)
                };
                a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(u, b.frag)
            }

            function m(a) {
                a || (a = b);
                var c = d(a);
                if (u.shivCSS && !l && !c.hasCSS) {
                    var e, f = a;
                    e = f.createElement("p");
                    f = f.getElementsByTagName("head")[0] || f.documentElement;
                    e = (e.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",
                        f.insertBefore(e.lastChild, f.firstChild));
                    c.hasCSS = !!e
                }
                return s || g(a, c), a
            }
            var l, s, p = a.html5 || {},
                q = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                k = "_html5shiv",
                n = 0,
                x = {};
            ! function() {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>";
                    l = "hidden" in a;
                    var c;
                    if (!(c = 1 == a.childNodes.length)) {
                        b.createElement("a");
                        var e = b.createDocumentFragment();
                        c = "undefined" == typeof e.cloneNode ||
                            "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }
                    s = c
                } catch (d) {
                    s = l = !0
                }
            }();
            var u = {
                elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== p.shivCSS,
                supportsUnknownElements: s,
                shivMethods: !1 !== p.shivMethods,
                type: "default",
                shivDocument: m,
                createElement: f,
                createDocumentFragment: function(a, e) {
                    if (a || (a = b),
                        s) return a.createDocumentFragment();
                    e = e || d(a);
                    for (var f = e.frag.cloneNode(), k = 0, g = c(), h = g.length; h > k; k++) f.createElement(g[k]);
                    return f
                }
            };
            a.html5 = u;
            m(b)
        }(this, c), s._version = "2.7.2", s._prefixes = w, s._domPrefixes = L, s._cssomPrefixes = l, s.mq = function(b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b).matches;
            var d;
            return Q("@media " + b + " { #modernizr { position: absolute; } }", function(b) {
                d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
            }), d
        }, s.hasEvent = U, s.testProp =
        function(a) {
            return d([a])
        }, s.testAllProps = f, s.testStyles = Q, s.prefixed = function(a, b, c) {
            return b ? f(a, b, c) : f(a, "pfx")
        }, v.className = v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + ca.join(" ")), s
}(this, this.document);
(function(a, c, b, g) {
    (function(b) {
        for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
    })("foundation-mq-small foundation-mq-small-only foundation-mq-medium foundation-mq-medium-only foundation-mq-large foundation-mq-large-only foundation-mq-xlarge foundation-mq-xlarge-only foundation-mq-xxlarge foundation-data-attribute-namespace".split(" "));
    a(function() {
        "undefined" !== typeof FastClick && "undefined" !== typeof b.body && FastClick.attach(b.body)
    });
    var d = function(c,
            d) {
            if ("string" === typeof c) {
                if (d) {
                    var f;
                    if (d.jquery) {
                        if (f = d[0], !f) return d
                    } else f = d;
                    return a(f.querySelectorAll(c))
                }
                return a(b.querySelectorAll(c))
            }
            return a(c, d)
        },
        f = function(a) {
            var b = [];
            a || b.push("data");
            0 < this.namespace.length && b.push(this.namespace);
            b.push(this.name);
            return b.join("-")
        },
        m = function(a) {
            a = a.split("-");
            for (var b = a.length, c = []; b--;) 0 !== b ? c.push(a[b]) : 0 < this.namespace.length ? c.push(this.namespace, a[b]) : c.push(a[b]);
            return c.reverse().join("-")
        },
        p = function(b, c) {
            var f = this,
                g = !d(this).data(this.attr_name(!0));
            d(this.scope).is("[" + this.attr_name() + "]") ? (d(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(d(this.scope)))), g && this.events(this.scope)) : d("[" + this.attr_name() + "]", this.scope).each(function() {
                var g = !d(this).data(f.attr_name(!0) + "-init");
                d(this).data(f.attr_name(!0) + "-init", a.extend({}, f.settings, c || b, f.data_options(d(this))));
                g && f.events(this)
            });
            if ("string" === typeof b) return this[b].call(this, c)
        },
        q = function(a, b) {
            function c() {
                b(a[0])
            }

            function d() {
                this.one("load",
                    c);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var a = this.attr("src"),
                        b = a.match(/\?/) ? "&" : "?",
                        b = b + ("random=" + (new Date).getTime());
                    this.attr("src", a + b)
                }
            }
            a.attr("src") ? a[0].complete || 4 === a[0].readyState ? c() : d.call(a) : c()
        };
    c.matchMedia = c.matchMedia || function(a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            f = a.createElement("body"),
            g = a.createElement("div");
        g.id = "mq-test-1";
        g.style.cssText = "position:absolute;top:-100em";
        f.style.background = "none";
        f.appendChild(g);
        return function(a) {
            g.innerHTML =
                '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>';
            c.insertBefore(f, d);
            b = 42 === g.offsetWidth;
            c.removeChild(f);
            return {
                matches: b,
                media: a
            }
        }
    }(b);
    (function(a) {
        function b() {
            d && (g(b), p && jQuery.fx.tick())
        }
        var d, f = 0;
        a = ["webkit", "moz"];
        for (var g = c.requestAnimationFrame, m = c.cancelAnimationFrame, p = "undefined" !== typeof jQuery.fx; f < a.length && !g; f++) g = c[a[f] + "RequestAnimationFrame"], m = m || c[a[f] + "CancelAnimationFrame"] || c[a[f] + "CancelRequestAnimationFrame"];
        g ? (c.requestAnimationFrame = g, c.cancelAnimationFrame =
            m, p && (jQuery.fx.timer = function(a) {
                a() && jQuery.timers.push(a) && !d && (d = !0, b())
            }, jQuery.fx.stop = function() {
                d = !1
            })) : (c.requestAnimationFrame = function(a) {
            var b = (new Date).getTime(),
                d = Math.max(0, 16 - (b - f)),
                g = c.setTimeout(function() {
                    a(b + d)
                }, d);
            f = b + d;
            return g
        }, c.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    })(jQuery);
    c.Foundation = {
        name: "Foundation",
        version: "{{VERSION}}",
        media_queries: {
            small: d(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "small-only": d(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
                ""),
            medium: d(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "medium-only": d(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: d(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "large-only": d(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: d(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
                ""),
            "xlarge-only": d(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: d(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: g
        },
        init: function(a, b, f, g, m) {
            f = [a, f, g, m];
            g = [];
            this.rtl = /rtl/i.test(d("html").attr("dir"));
            this.scope = a || this.scope;
            this.set_namespace();
            if (b && "string" === typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) &&
                g.push(this.init_lib(b, f));
            else
                for (var p in this.libs) g.push(this.init_lib(p, b));
            d(c).load(function() {
                d(c).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            });
            return a
        },
        init_lib: function(b, c) {
            if (this.libs.hasOwnProperty(b)) {
                this.patch(this.libs[b]);
                if (c && c.hasOwnProperty(b)) return "undefined" !==
                    typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" !== typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]]);
                c = c instanceof Array ? c : Array(c);
                return this.libs[b].init.apply(this.libs[b], c)
            }
            return function() {}
        },
        patch: function(a) {
            a.scope = this.scope;
            a.namespace = this.global.namespace;
            a.rtl = this.rtl;
            a.data_options = this.utils.data_options;
            a.attr_name = f;
            a.add_namespace = m;
            a.bindings = p;
            a.S = this.utils.S
        },
        inherit: function(a,
            b) {
            for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
        },
        set_namespace: function() {
            var b = this.global.namespace === g ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === g || /false/i.test(b) ? "" : b
        },
        libs: {},
        utils: {
            S: d,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this,
                        f = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, f);
                        c = null
                    }, b))
                }
            },
            debounce: function(a, b, c) {
                var d, f;
                return function() {
                    var g =
                        this,
                        m = arguments,
                        p = c && !d;
                    clearTimeout(d);
                    d = setTimeout(function() {
                        d = null;
                        c || (f = a.apply(g, m))
                    }, b);
                    p && (f = a.apply(g, m));
                    return f
                }
            },
            data_options: function(b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && !1 !== a && !0 !== a
                }

                function f(b) {
                    return "string" === typeof b ? a.trim(b) : b
                }
                c = c || "options";
                var g = {},
                    m, p, q;
                m = function(a) {
                    var b = Foundation.global.namespace;
                    return 0 < b.length ? a.data(b + "-" + c) : a.data(c)
                }(b);
                if ("object" === typeof m) return m;
                q = (m || ":").split(";");
                for (m = q.length; m--;) p = q[m].split(":"), p = [p[0], p.slice(1).join(":")],
                    /true/i.test(p[1]) && (p[1] = !0), /false/i.test(p[1]) && (p[1] = !1), d(p[1]) && (-1 === p[1].indexOf(".") ? p[1] = parseInt(p[1], 10) : p[1] = parseFloat(p[1])), 2 === p.length && 0 < p[0].length && (g[f(p[0])] = f(p[1]));
                return g
            },
            register_media: function(b, c) {
                if (Foundation.media_queries[b] === g) {
                    a("head").append('<meta class="' + c + '"/>');
                    var d = Foundation.media_queries,
                        f = a("." + c).css("font-family");
                    if ("string" === typeof f || f instanceof String) f = f.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "");
                    d[b] = f
                }
            },
            add_custom_rule: function(a, b) {
                b ===
                    g && Foundation.stylesheet ? Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length) : Foundation.media_queries[b] !== g && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
            },
            image_loaded: function(a, b) {
                var c = this,
                    d = a.length;
                0 === d && b(a);
                a.each(function() {
                    q(c.S(this), function() {
                        --d;
                        0 === d && b(a)
                    })
                })
            },
            random_str: function() {
                this.fidx || (this.fidx = 0);
                this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-");
                return this.prefix + (this.fidx++).toString(36)
            },
            match: function(a) {
                return c.matchMedia(a).matches
            },
            is_small_up: function() {
                return this.match(Foundation.media_queries.small)
            },
            is_medium_up: function() {
                return this.match(Foundation.media_queries.medium)
            },
            is_large_up: function() {
                return this.match(Foundation.media_queries.large)
            },
            is_xlarge_up: function() {
                return this.match(Foundation.media_queries.xlarge)
            },
            is_xxlarge_up: function() {
                return this.match(Foundation.media_queries.xxlarge)
            },
            is_small_only: function() {
                return !this.is_medium_up() && !this.is_large_up() &&
                    !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_medium_only: function() {
                return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_large_only: function() {
                return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xxlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
            }
        }
    };
    a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            Foundation.init.apply(Foundation, [this].concat(a));
            return this
        })
    }
})(jQuery, window, window.document);
(function(a, c, b, g) {
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "{{VERSION}}",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = b.S,
                g = "",
                p = "",
                q = "";
            "move" === this.settings.open_method ? (g = "move-", p = "right", q = "left") : "overlap_single" === this.settings.open_method ? (g = "offcanvas-overlap-", p = "right", q = "left") : "overlap" === this.settings.open_method && (g = "offcanvas-overlap");
            c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",
                ".left-off-canvas-toggle",
                function(s) {
                    b.click_toggle_class(s, g + p);
                    "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(g + p);
                    a(".left-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(s) {
                var q = b.get_settings(s),
                    u = c(this).parent();
                !q.close_on_click || u.hasClass("has-submenu") || u.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (s.preventDefault(), c(this).siblings(".left-submenu").toggleClass(g + p)) : u.hasClass("back") &&
                    (s.preventDefault(), u.parent().removeClass(g + p)) : (b.hide.call(b, g + p, b.get_wrapper(s)), u.parent().removeClass(g + p));
                a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(p) {
                b.click_toggle_class(p, g + q);
                "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(g + q);
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(p) {
                var v = b.get_settings(p),
                    u = c(this).parent();
                !v.close_on_click || u.hasClass("has-submenu") || u.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (p.preventDefault(), c(this).siblings(".right-submenu").toggleClass(g + q)) : u.hasClass("back") && (p.preventDefault(), u.parent().removeClass(g + q)) : (b.hide.call(b, g + q, b.get_wrapper(p)), u.parent().removeClass(g + q));
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(s) {
                b.click_remove_class(s, g + q);
                c(".right-submenu").removeClass(g + q);
                p &&
                    (b.click_remove_class(s, g + p), c(".left-submenu").removeClass(g + q));
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, g + q);
                a(".left-off-canvas-toggle").attr("aria-expanded", "false");
                p && (b.click_remove_class(c, g + p), a(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper();
            b.is("." + a) ? this.hide(a, b) : this.show(a, b)
        },
        show: function(a, b) {
            b = b || this.get_wrapper();
            b.trigger("open").trigger("open.fndtn.offcanvas");
            b.addClass(a)
        },
        hide: function(a, b) {
            b = b || this.get_wrapper();
            b.trigger("close").trigger("close.fndtn.offcanvas");
            b.removeClass(a)
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c)
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c)
        },
        get_settings: function(a) {
            return this.S(a.target).closest("[" + this.attr_name() + "]").data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(a) {
            a = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            0 === a.length && (a = this.S(".off-canvas-wrap"));
            return a
        },
        reflow: function() {}
    }
})(jQuery, window, window.document);
(function(a, c, b, g) {
    function d(a) {
        var b = /fade/i.test(a);
        a = /pop/i.test(a);
        return {
            animate: b || a,
            pop: a,
            fade: b
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "{{VERSION}}",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            bg_root_element: "body",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d);
            this.bindings(c, d)
        },
        events: function(a) {
            var c = this,
                d = c.S;
            d(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(a) {
                a.preventDefault();
                if (!c.locked) {
                    a = d(this);
                    var b = a.data(c.data_attr("reveal-ajax"));
                    c.locked = !0;
                    "undefined" === typeof b ? c.open.call(c, a) : (b = !0 === b ? a.attr("href") : b, c.open.call(c,
                        a, {
                            url: b
                        }))
                }
            });
            d(b).on("click.fndtn.reveal", this.close_targets(), function(a) {
                a.preventDefault();
                if (!c.locked) {
                    var b = d("[" + c.attr_name() + "].open").data(c.attr_name(!0) + "-init") || c.settings,
                        f = d(a.target)[0] === d("." + b.bg_class)[0];
                    if (f)
                        if (b.close_on_background_click) a.stopPropagation();
                        else return;
                    c.locked = !0;
                    c.close.call(c, f ? d("[" + c.attr_name() + "].open") : d(this).closest("[" + c.attr_name() + "]"))
                }
            });
            if (0 < d("[" + c.attr_name() + "]", this.scope).length) d(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal",
                this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video);
            else d(this.scope).on("open.fndtn.reveal", "[" + c.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + c.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + c.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + c.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal",
                "[" + c.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + c.attr_name() + "]", this.close_video);
            return !0
        },
        key_up_on: function(a) {
            var b = this;
            b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(a) {
                var c = b.S("[" + b.attr_name() + "].open"),
                    d = c.data(b.attr_name(!0) + "-init") || b.settings;
                d && 27 === a.which && d.close_on_esc && !b.locked && b.close.call(b, c)
            });
            return !0
        },
        key_up_off: function(a) {
            this.S("body").off("keyup.fndtn.reveal");
            return !0
        },
        open: function(b, d) {
            var g = this,
                q;
            b ? "undefined" !==
                typeof b.selector ? q = g.S("#" + b.data(g.data_attr("reveal-id"))).first() : (q = g.S(this.scope), d = b) : q = g.S(this.scope);
            var s = q.data(g.attr_name(!0) + "-init"),
                s = s || this.settings;
            if (q.hasClass("open") && b.attr("data-reveal-id") == q.attr("id")) return g.close(q);
            if (!q.hasClass("open")) {
                var v = g.S("[" + g.attr_name() + "].open");
                "undefined" === typeof q.data("css-top") && q.data("css-top", parseInt(q.css("top"), 10)).data("offset", this.cache_offset(q));
                this.key_up_on(q);
                q.trigger("open").trigger("open.fndtn.reveal");
                1 > v.length &&
                    this.toggle_bg(q, !0);
                "string" === typeof d && (d = {
                    url: d
                });
                if ("undefined" !== typeof d && d.url) {
                    var u = "undefined" !== typeof d.success ? d.success : null;
                    a.extend(d, {
                        success: function(b, c, d) {
                            a.isFunction(u) && (c = u(b, c, d), "string" == typeof c && (b = c));
                            q.html(b);
                            g.S(q).foundation("section", "reflow");
                            g.S(q).children().foundation();
                            0 < v.length && g.hide(v, s.css.close);
                            g.show(q, s.css.open)
                        }
                    });
                    a.ajax(d)
                } else 0 < v.length && this.hide(v, s.css.close), this.show(q, s.css.open)
            }
            g.S(c).trigger("resize")
        },
        close: function(a) {
            a = a && a.length ?
                a : this.S(this.scope);
            var b = this.S("[" + this.attr_name() + "].open"),
                c = a.data(this.attr_name(!0) + "-init") || this.settings;
            0 < b.length && (this.locked = !0, this.key_up_off(a), a.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(a, !1), this.hide(b, c.css.close, c))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(b, c, d) {
            b = (b.data(this.attr_name(!0) + "-init") || this.settings).bg_root_element;
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo(b).hide());
            b = 0 < this.settings.bg.filter(":visible").length;
            d != b && ((d == g ? b : !d) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(b, c) {
            if (c) {
                var g = b.data(this.attr_name(!0) + "-init") || this.settings,
                    q = g.root_element;
                if (0 === b.parent(q).length) {
                    var s = b.wrap('<div style="display: none;" />').parent();
                    b.on("closed.fndtn.reveal.wrapped", function() {
                        b.detach().appendTo(s);
                        b.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    });
                    b.detach().appendTo(q)
                }
                var v = d(g.animation);
                v.animate || (this.locked = !1);
                if (v.pop) {
                    c.top = a(q).scrollTop() - b.data("offset") + "px";
                    var u = {
                        top: a(q).scrollTop() + b.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return b.css(c).animate(u, g.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), g.animation_speed / 2)
                }
                return v.fade ? (c.top = a(q).scrollTop() + b.data("css-top") +
                    "px", u = {
                        opacity: 1
                    }, setTimeout(function() {
                        return b.css(c).animate(u, g.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), g.animation_speed / 2)) : b.css(c).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            g = this.settings;
            if (d(g.animation).fade) return b.fadeIn(g.animation_speed / 2);
            this.locked = !1;
            return b.show()
        },
        hide: function(b, c) {
            if (c) {
                var g = b.data(this.attr_name(!0) + "-init") ||
                    this.settings,
                    q = g.root_element,
                    s = d(g.animation);
                s.animate || (this.locked = !1);
                if (s.pop) {
                    var v = {
                        top: -a(q).scrollTop() - b.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return b.animate(v, g.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.css(c).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), g.animation_speed / 2)
                }
                return s.fade ? (v = {
                    opacity: 0
                }, setTimeout(function() {
                        return b.animate(v, g.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.css(c).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this),
                    g.animation_speed / 2)) : b.hide().css(c).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            g = this.settings;
            return d(g.animation).fade ? b.fadeOut(g.animation_speed / 2) : b.hide()
        },
        close_video: function(b) {
            b = a(".flex-video", b.target);
            var c = a("iframe", b);
            0 < c.length && (c.attr("data-src", c[0].src), c.attr("src", c.attr("src")), b.hide())
        },
        open_video: function(b) {
            b = a(".flex-video", b.target);
            var c = b.find("iframe");
            if (0 < c.length) {
                if ("string" === typeof c.attr("data-src")) c[0].src = c.attr("data-src");
                else {
                    var d =
                        c[0].src;
                    c[0].src = g;
                    c[0].src = d
                }
                b.show()
            }
        },
        data_attr: function(a) {
            return 0 < this.namespace.length ? this.namespace + "-" + a : a
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            a.hide();
            return b
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
})(jQuery, window, window.document);
(function(a, c, b, g) {
    Foundation.libs.abide = {
        name: "abide",
        version: "{{VERSION}}",
        settings: {
            live_validate: !0,
            validate_on_blur: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1E3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(a, c, g) {
                    return b.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value === a.value
                }
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(b) {
            var c = this;
            b = c.S(b).attr("novalidate", "novalidate");
            var g = b.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid");
            b.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",
                function(a) {
                    var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
                    return c.validate(c.S(this).find("input, textarea, select").get(), a, b)
                }).on("reset", function() {
                return c.reset(a(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                !0 === g.validate_on_blur && c.validate([this], a)
            }).on("keydown.fndtn.abide", function(a) {
                !0 === g.live_validate && 9 != a.which && (clearTimeout(c.timer), c.timer = setTimeout(function() {
                    c.validate([this], a)
                }.bind(this), g.timeout))
            })
        },
        reset: function(b) {
            b.removeAttr(this.invalid_attr);
            a(this.invalid_attr, b).removeAttr(this.invalid_attr);
            a("." + this.settings.error_class, b).not("small").removeClass(this.settings.error_class)
        },
        validate: function(a, b, c) {
            var g = this.parse_patterns(a),
                q = g.length,
                s = this.S(a[0]).closest("form");
            b = /submit/.test(b.type);
            for (var v = 0; v < q; v++)
                if (!g[v] && (b || c)) return this.settings.focus_on_invalid && a[v].focus(), s.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(a[v]).closest("form").attr(this.invalid_attr,
                    ""), !1;
                (b || c) && s.trigger("valid").trigger("valid.fndtn.abide");
            s.removeAttr(this.invalid_attr);
            return c ? !1 : !0
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = []; b--;) c.push(this.pattern(a[b]));
            return this.check_validation_and_apply_styles(c)
        },
        pattern: function(a) {
            var b = a.getAttribute("type"),
                c = "string" === typeof a.getAttribute("required"),
                g = a.getAttribute("pattern") || "";
            if (this.settings.patterns.hasOwnProperty(g) && 0 < g.length) return [a, this.settings.patterns[g], c];
            if (0 < g.length) return [a, new RegExp(g),
                c
            ];
            if (this.settings.patterns.hasOwnProperty(b)) return [a, this.settings.patterns[b], c];
            g = /.*/;
            return [a, g, c]
        },
        check_validation_and_apply_styles: function(b) {
            var c = b.length,
                g = [];
            for (this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]").data(this.attr_name(!0) + "-init"); c--;) {
                var p = b[c][0],
                    q = b[c][2],
                    s = p.value.trim(),
                    v = this.S(p).parent(),
                    u = p.getAttribute(this.add_namespace("data-abide-validator")),
                    B = "radio" === p.type,
                    y = "checkbox" === p.type,
                    C = this.S('label[for="' + p.getAttribute("id") + '"]'),
                    O = q ? 0 < p.value.length :
                    !0,
                    w = [];
                p.getAttribute(this.add_namespace("data-equalto")) && (u = "equalTo");
                v = v.is("label") ? v.parent() : v;
                u && (u = this.settings.validators[u].apply(this, [p, q, v]), w.push(u));
                B && q ? w.push(this.valid_radio(p, q)) : y && q ? w.push(this.valid_checkbox(p, q)) : (b[c][1].test(s) && O || !q && 1 > p.value.length || a(p).attr("disabled") ? w.push(!0) : w.push(!1), w = [w.every(function(a) {
                    return a
                })], w[0] ? (this.S(p).removeAttr(this.invalid_attr), p.setAttribute("aria-invalid", "false"), p.removeAttribute("aria-describedby"), v.removeClass(this.settings.error_class),
                    0 < C.length && this.settings.error_labels && C.removeClass(this.settings.error_class).removeAttr("role"), a(p).triggerHandler("valid")) : (this.S(p).attr(this.invalid_attr, ""), p.setAttribute("aria-invalid", "true"), q = v.find("small." + this.settings.error_class, "span." + this.settings.error_class), q = 0 < q.length ? q[0].id : "", 0 < q.length && p.setAttribute("aria-describedby", q), v.addClass(this.settings.error_class), 0 < C.length && this.settings.error_labels && C.addClass(this.settings.error_class).attr("role", "alert"), a(p).triggerHandler("invalid")));
                g.push(w[0])
            }
            return g = [g.every(function(a) {
                return a
            })]
        },
        valid_checkbox: function(a, b) {
            a = this.S(a);
            var c = a.is(":checked") || !b;
            c ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return c
        },
        valid_radio: function(a, b) {
            for (var c = a.getAttribute("name"), c = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + c + "']"), g = c.length, q = !1, s = 0; s < g; s++) c[s].checked && (q = !0);
            for (s = 0; s < g; s++) q ? this.S(c[s]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) :
                this.S(c[s]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return q
        },
        valid_equal: function(a, c, g) {
            (c = b.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value === a.value) ? (this.S(a).removeAttr(this.invalid_attr), g.removeClass(this.settings.error_class), 0 < label.length && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), g.addClass(this.settings.error_class), 0 < label.length && settings.error_labels && label.addClass(this.settings.error_class));
            return c
        },
        valid_oneof: function(a, b, c, g) {
            a = this.S(a);
            b = this.S("[" + this.add_namespace("data-oneof") + "]");
            (c = 0 < b.filter(":checked").length) ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class): a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            if (!g) {
                var q = this;
                b.each(function() {
                    q.valid_oneof.call(q, this, null, null, !0)
                })
            }
            return c
        }
    }
})(jQuery, window, window.document);
var JSON;
JSON || (JSON = {});
(function() {
    function a(b, d) {
        var g, p, y, C, O = f,
            w, l = d[b];
        l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(b));
        "function" == typeof q && (l = q.call(d, b, l));
        switch (typeof l) {
            case "string":
                return c(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l) return "null";
                f += m;
                w = [];
                if ("[object Array]" === Object.prototype.toString.apply(l)) {
                    C = l.length;
                    for (g = 0; g < C; g += 1) w[g] = a(g, l) || "null";
                    y = 0 === w.length ? "[]" : f ? "[\n" + f + w.join(",\n" + f) + "\n" + O + "]" :
                        "[" + w.join(",") + "]";
                    f = O;
                    return y
                }
                if (q && "object" == typeof q)
                    for (C = q.length, g = 0; g < C; g += 1) "string" == typeof q[g] && (p = q[g], y = a(p, l), y && w.push(c(p) + (f ? ": " : ":") + y));
                else
                    for (p in l) Object.prototype.hasOwnProperty.call(l, p) && (y = a(p, l), y && w.push(c(p) + (f ? ": " : ":") + y));
                y = 0 === w.length ? "{}" : f ? "{\n" + f + w.join(",\n" + f) + "\n" + O + "}" : "{" + w.join(",") + "}";
                f = O;
                return y
        }
    }

    function c(a) {
        d.lastIndex = 0;
        return d.test(a) ? '"' + a.replace(d, function(a) {
                var b = p[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) +
            '"' : '"' + a + '"'
    }

    function b(a) {
        return 10 > a ? "0" + a : a
    }
    "use strict";
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    });
    var g = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f, m, p = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        q;
    "function" != typeof JSON.stringify && (JSON.stringify = function(b, c, d) {
        var g;
        m = f = "";
        if ("number" == typeof d)
            for (g = 0; g < d; g += 1) m += " ";
        else "string" == typeof d && (m = d);
        q = c;
        if (!c || "function" == typeof c || "object" == typeof c && "number" == typeof c.length) return a("", {
            "": b
        });
        throw Error("JSON.stringify");
    });
    "function" !=
    typeof JSON.parse && (JSON.parse = function(a, b) {
        function c(a, d) {
            var g, f, l = a[d];
            if (l && "object" == typeof l)
                for (g in l) Object.prototype.hasOwnProperty.call(l, g) && (f = c(l, g), void 0 !== f ? l[g] = f : delete l[g]);
            return b.call(a, d, l)
        }
        var d;
        a = String(a);
        g.lastIndex = 0;
        g.test(a) && (a = a.replace(g, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return d = eval("(" + a + ")"), "function" == typeof b ? c({
            "": d
        }, "") : d;
        throw new SyntaxError("JSON.parse");
    })
})();
SockJS = function() {
    var a = document,
        c = window,
        b = {},
        g = function() {};
    g.prototype.addEventListener = function(a, c) {
        this._listeners || (this._listeners = {});
        a in this._listeners || (this._listeners[a] = []);
        var d = this._listeners[a]; - 1 === b.arrIndexOf(d, c) && d.push(c)
    };
    g.prototype.removeEventListener = function(a, c) {
        if (this._listeners && a in this._listeners) {
            var d = this._listeners[a],
                g = b.arrIndexOf(d, c); - 1 !== g && (1 < d.length ? this._listeners[a] = d.slice(0, g).concat(d.slice(g + 1)) : delete this._listeners[a])
        }
    };
    g.prototype.dispatchEvent =
        function(a) {
            var b = a.type,
                c = Array.prototype.slice.call(arguments, 0);
            this["on" + b] && this["on" + b].apply(this, c);
            if (this._listeners && b in this._listeners)
                for (var d = 0; d < this._listeners[b].length; d++) this._listeners[b][d].apply(this, c)
        };
    var d = function(a, b) {
        this.type = a;
        if ("undefined" != typeof b)
            for (var c in b) b.hasOwnProperty(c) && (this[c] = b[c])
    };
    d.prototype.toString = function() {
        var a = [],
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "function" == typeof c && (c = "[function]");
                a.push(b + "=" + c)
            }
        return "SimpleEvent(" +
            a.join(", ") + ")"
    };
    var f = function(a) {
        this._events = a || [];
        this._listeners = {}
    };
    f.prototype.emit = function(a) {
        this._verifyType(a);
        if (!this._nuked) {
            var b = Array.prototype.slice.call(arguments, 1);
            this["on" + a] && this["on" + a].apply(this, b);
            if (a in this._listeners)
                for (var c = 0; c < this._listeners[a].length; c++) this._listeners[a][c].apply(this, b)
        }
    };
    f.prototype.on = function(a, b) {
        this._verifyType(a);
        this._nuked || (a in this._listeners || (this._listeners[a] = []), this._listeners[a].push(b))
    };
    f.prototype._verifyType = function(a) {
        -1 ===
            b.arrIndexOf(this._events, a) && b.log("Event " + JSON.stringify(a) + " not listed " + JSON.stringify(this._events) + " in " + this)
    };
    f.prototype.nuke = function() {
        this._nuked = !0;
        for (var a = 0; a < this._events.length; a++) delete this[this._events[a]];
        this._listeners = {}
    };
    b.random_string = function(a, b) {
        b = b || 37;
        var c, d = [];
        for (c = 0; c < a; c++) d.push("abcdefghijklmnopqrstuvwxyz0123456789_".substr(Math.floor(Math.random() * b), 1));
        return d.join("")
    };
    b.random_number = function(a) {
        return Math.floor(Math.random() * a)
    };
    b.random_number_string =
        function(a) {
            var c = ("" + (a - 1)).length;
            return (Array(c + 1).join("0") + b.random_number(a)).slice(-c)
        };
    b.getOrigin = function(a) {
        return (a + "/").split("/").slice(0, 3).join("/")
    };
    b.isSameOriginUrl = function(a, b) {
        return b || (b = c.location.href), a.split("/").slice(0, 3).join("/") === b.split("/").slice(0, 3).join("/")
    };
    b.getParentDomain = function(a) {
        return /^[0-9.]*$/.test(a) || /^\[/.test(a) || !/[.]/.test(a) ? a : a.split(".").slice(1).join(".")
    };
    b.objectExtend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    b.polluteGlobalNamespace = function() {
        "_jp" in c || (c._jp = {})
    };
    b.closeFrame = function(a, b) {
        return "c" + JSON.stringify([a, b])
    };
    b.userSetCode = function(a) {
        return 1E3 === a || 3E3 <= a && 4999 >= a
    };
    b.countRTO = function(a) {
        var b;
        return 100 < a ? b = 3 * a : b = a + 200, b
    };
    b.log = function() {
        c.console && console.log && console.log.apply && console.log.apply(console, arguments)
    };
    b.bind = function(a, b) {
        return a.bind ? a.bind(b) : function() {
            return a.apply(b, arguments)
        }
    };
    b.flatUrl = function(a) {
        return -1 === a.indexOf("?") && -1 === a.indexOf("#")
    };
    b.amendUrl =
        function(c) {
            var d = a.location;
            if (!c) throw Error("Wrong url for SockJS");
            if (!b.flatUrl(c)) throw Error("Only basic urls are supported in SockJS");
            return 0 === c.indexOf("//") && (c = d.protocol + c), 0 === c.indexOf("/") && (c = d.protocol + "//" + d.host + c), c = c.replace(/[/]+$/, ""), c
        };
    b.arrIndexOf = function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) return c;
        return -1
    };
    b.arrSkip = function(a, c) {
        var d = b.arrIndexOf(a, c);
        return -1 === d ? a.slice() : a.slice(0, d).concat(a.slice(d + 1))
    };
    b.isArray = Array.isArray || function(a) {
        return 0 <= {}.toString.call(a).indexOf("Array")
    };
    b.delay = function(a, b) {
        return "function" == typeof a && (b = a, a = 0), setTimeout(b, a)
    };
    var m = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        p = {
            "\x00": "\\u0000",
            "\u0001": "\\u0001",
            "\u0002": "\\u0002",
            "\u0003": "\\u0003",
            "\u0004": "\\u0004",
            "\u0005": "\\u0005",
            "\u0006": "\\u0006",
            "\u0007": "\\u0007",
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\u000b",
            "\f": "\\f",
            "\r": "\\r",
            "\u000e": "\\u000e",
            "\u000f": "\\u000f",
            "\u0010": "\\u0010",
            "\u0011": "\\u0011",
            "\u0012": "\\u0012",
            "\u0013": "\\u0013",
            "\u0014": "\\u0014",
            "\u0015": "\\u0015",
            "\u0016": "\\u0016",
            "\u0017": "\\u0017",
            "\u0018": "\\u0018",
            "\u0019": "\\u0019",
            "\u001a": "\\u001a",
            "\u001b": "\\u001b",
            "\u001c": "\\u001c",
            "\u001d": "\\u001d",
            "\u001e": "\\u001e",
            "\u001f": "\\u001f",
            '"': '\\"',
            "\\": "\\\\",
            "\u007f": "\\u007f",
            "\u0080": "\\u0080",
            "\u0081": "\\u0081",
            "\u0082": "\\u0082",
            "\u0083": "\\u0083",
            "\u0084": "\\u0084",
            "\u0085": "\\u0085",
            "\u0086": "\\u0086",
            "\u0087": "\\u0087",
            "\u0088": "\\u0088",
            "\u0089": "\\u0089",
            "\u008a": "\\u008a",
            "\u008b": "\\u008b",
            "\u008c": "\\u008c",
            "\u008d": "\\u008d",
            "\u008e": "\\u008e",
            "\u008f": "\\u008f",
            "\u0090": "\\u0090",
            "\u0091": "\\u0091",
            "\u0092": "\\u0092",
            "\u0093": "\\u0093",
            "\u0094": "\\u0094",
            "\u0095": "\\u0095",
            "\u0096": "\\u0096",
            "\u0097": "\\u0097",
            "\u0098": "\\u0098",
            "\u0099": "\\u0099",
            "\u009a": "\\u009a",
            "\u009b": "\\u009b",
            "\u009c": "\\u009c",
            "\u009d": "\\u009d",
            "\u009e": "\\u009e",
            "\u009f": "\\u009f",
            "\u00ad": "\\u00ad",
            "\u0600": "\\u0600",
            "\u0601": "\\u0601",
            "\u0602": "\\u0602",
            "\u0603": "\\u0603",
            "\u0604": "\\u0604",
            "\u070f": "\\u070f",
            "\u17b4": "\\u17b4",
            "\u17b5": "\\u17b5",
            "\u200c": "\\u200c",
            "\u200d": "\\u200d",
            "\u200e": "\\u200e",
            "\u200f": "\\u200f",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            "\u202a": "\\u202a",
            "\u202b": "\\u202b",
            "\u202c": "\\u202c",
            "\u202d": "\\u202d",
            "\u202e": "\\u202e",
            "\u202f": "\\u202f",
            "\u2060": "\\u2060",
            "\u2061": "\\u2061",
            "\u2062": "\\u2062",
            "\u2063": "\\u2063",
            "\u2064": "\\u2064",
            "\u2065": "\\u2065",
            "\u2066": "\\u2066",
            "\u2067": "\\u2067",
            "\u2068": "\\u2068",
            "\u2069": "\\u2069",
            "\u206a": "\\u206a",
            "\u206b": "\\u206b",
            "\u206c": "\\u206c",
            "\u206d": "\\u206d",
            "\u206e": "\\u206e",
            "\u206f": "\\u206f",
            "\ufeff": "\\ufeff",
            "\ufff0": "\\ufff0",
            "\ufff1": "\\ufff1",
            "\ufff2": "\\ufff2",
            "\ufff3": "\\ufff3",
            "\ufff4": "\\ufff4",
            "\ufff5": "\\ufff5",
            "\ufff6": "\\ufff6",
            "\ufff7": "\\ufff7",
            "\ufff8": "\\ufff8",
            "\ufff9": "\\ufff9",
            "\ufffa": "\\ufffa",
            "\ufffb": "\\ufffb",
            "\ufffc": "\\ufffc",
            "\ufffd": "\\ufffd",
            "\ufffe": "\\ufffe",
            "\uffff": "\\uffff"
        },
        q = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        s, v = JSON && JSON.stringify || function(a) {
            return m.lastIndex = 0, m.test(a) && (a = a.replace(m, function(a) {
                return p[a]
            })), '"' + a + '"'
        },
        u = function(a) {
            var b, c = {},
                d = [];
            for (b = 0; 65536 > b; b++) d.push(String.fromCharCode(b));
            return a.lastIndex = 0, d.join("").replace(a, function(a) {
                return c[a] = "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4), ""
            }), a.lastIndex = 0, c
        };
    b.quote = function(a) {
        a = v(a);
        return q.lastIndex = 0, q.test(a) ? (s || (s = u(q)), a.replace(q, function(a) {
            return s[a]
        })) : a
    };
    var B = "websocket xdr-streaming xhr-streaming iframe-eventsource iframe-htmlfile xdr-polling xhr-polling iframe-xhr-polling jsonp-polling".split(" ");
    b.probeProtocols = function() {
        for (var a = {}, b = 0; b < B.length; b++) {
            var c = B[b];
            a[c] = l[c] && l[c].enabled()
        }
        return a
    };
    b.detectProtocols = function(a, b, c) {
        var d = {},
            g = [];
        b || (b = B);
        for (var f = 0; f < b.length; f++) {
            var l = b[f];
            d[l] = a[l]
        }
        var m = function(a) {
            var b = a.shift();
            d[b] ? g.push(b) : 0 < a.length && m(a)
        };
        return !1 !== c.websocket && m(["websocket"]), d["xhr-streaming"] && !c.null_origin ? g.push("xhr-streaming") : !d["xdr-streaming"] || c.cookie_needed || c.null_origin ? m(["iframe-eventsource", "iframe-htmlfile"]) : g.push("xdr-streaming"),
            d["xhr-polling"] && !c.null_origin ? g.push("xhr-polling") : !d["xdr-polling"] || c.cookie_needed || c.null_origin ? m(["iframe-xhr-polling", "jsonp-polling"]) : g.push("xdr-polling"), g
    };
    b.createHook = function() {
        var a = "a" + b.random_string(8);
        if (!("_sockjs_global" in c)) {
            var d = {};
            c._sockjs_global = function(a) {
                return a in d || (d[a] = {
                    id: a,
                    del: function() {
                        delete d[a]
                    }
                }), d[a]
            }
        }
        return c._sockjs_global(a)
    };
    b.attachMessage = function(a) {
        b.attachEvent("message", a)
    };
    b.attachEvent = function(b, d) {
        "undefined" != typeof c.addEventListener ?
            c.addEventListener(b, d, !1) : (a.attachEvent("on" + b, d), c.attachEvent("on" + b, d))
    };
    b.detachMessage = function(a) {
        b.detachEvent("message", a)
    };
    b.detachEvent = function(b, d) {
        "undefined" != typeof c.addEventListener ? c.removeEventListener(b, d, !1) : (a.detachEvent("on" + b, d), c.detachEvent("on" + b, d))
    };
    var y = {},
        C = !1,
        O = function() {
            for (var a in y) y[a](), delete y[a]
        };
    b.attachEvent("unload", function() {
        C || (C = !0, O())
    });
    b.unload_add = function(a) {
        var c = b.random_string(8);
        return y[c] = a, C && b.delay(O), c
    };
    b.unload_del = function(a) {
        a in
            y && delete y[a]
    };
    b.createIframe = function(c, d) {
        var g = a.createElement("iframe"),
            f, l, m = function() {
                clearTimeout(f);
                try {
                    g.onload = null
                } catch (a) {}
                g.onerror = null
            },
            p = function() {
                g && (m(), setTimeout(function() {
                    g && g.parentNode.removeChild(g);
                    g = null
                }, 0), b.unload_del(l))
            };
        return g.src = c, g.style.display = "none", g.style.position = "absolute", g.onerror = function() {
            g && (p(), d("onerror"))
        }, g.onload = function() {
            clearTimeout(f);
            f = setTimeout(function() {
                g && (p(), d("onload timeout"))
            }, 2E3)
        }, a.body.appendChild(g), f = setTimeout(function() {
            g &&
                (p(), d("timeout"))
        }, 15E3), l = b.unload_add(p), {
            post: function(a, b) {
                try {
                    g && g.contentWindow && g.contentWindow.postMessage(a, b)
                } catch (c) {}
            },
            cleanup: p,
            loaded: m
        }
    };
    b.createHtmlfile = function(a, d) {
        var g = new ActiveXObject("htmlfile"),
            f, l, m, p = function() {
                clearTimeout(f)
            },
            q = function() {
                g && (p(), b.unload_del(l), m.parentNode.removeChild(m), m = g = null, CollectGarbage())
            };
        g.open();
        g.write('<html><script>document.domain="' + document.domain + '";\x3c/script></html>');
        g.close();
        g.parentWindow._jp = c._jp;
        var s = g.createElement("div");
        return g.body.appendChild(s), m = g.createElement("iframe"), s.appendChild(m), m.src = a, f = setTimeout(function() {
            g && (q(), d("timeout"))
        }, 15E3), l = b.unload_add(q), {
            post: function(a, b) {
                try {
                    m && m.contentWindow && m.contentWindow.postMessage(a, b)
                } catch (c) {}
            },
            cleanup: q,
            loaded: p
        }
    };
    var w = function() {};
    w.prototype = new f(["chunk", "finish"]);
    w.prototype._start = function(a, d, g, f) {
        var l = this;
        try {
            l.xhr = new XMLHttpRequest
        } catch (m) {}
        if (!l.xhr) try {
            l.xhr = new c.ActiveXObject("Microsoft.XMLHTTP")
        } catch (p) {}
        if (c.ActiveXObject || c.XDomainRequest) d +=
            (-1 === d.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        l.unload_ref = b.unload_add(function() {
            l._cleanup(!0)
        });
        try {
            l.xhr.open(a, d, !0)
        } catch (q) {
            l.emit("finish", 0, "");
            l._cleanup();
            return
        }
        f && f.no_credentials || (l.xhr.withCredentials = "true");
        if (f && f.headers)
            for (var s in f.headers) l.xhr.setRequestHeader(s, f.headers[s]);
        l.xhr.onreadystatechange = function() {
            if (l.xhr) {
                var a = l.xhr;
                switch (a.readyState) {
                    case 3:
                        try {
                            var b = a.status,
                                c = a.responseText
                        } catch (d) {}
                        1223 === b && (b = 204);
                        c && 0 < c.length && l.emit("chunk", b, c);
                        break;
                    case 4:
                        b =
                            a.status, 1223 === b && (b = 204), l.emit("finish", b, a.responseText), l._cleanup(!1)
                }
            }
        };
        l.xhr.send(g)
    };
    w.prototype._cleanup = function(a) {
        if (this.xhr) {
            b.unload_del(this.unload_ref);
            this.xhr.onreadystatechange = function() {};
            if (a) try {
                this.xhr.abort()
            } catch (c) {}
            this.unload_ref = this.xhr = null
        }
    };
    w.prototype.close = function() {
        this.nuke();
        this._cleanup(!0)
    };
    (b.XHRCorsObject = function() {
        var a = this,
            c = arguments;
        b.delay(function() {
            a._start.apply(a, c)
        })
    }).prototype = new w;
    (b.XHRLocalObject = function(a, c, d) {
        var g = this;
        b.delay(function() {
            g._start(a,
                c, d, {
                    no_credentials: !0
                })
        })
    }).prototype = new w;
    w = b.XDRObject = function(a, c, d) {
        var g = this;
        b.delay(function() {
            g._start(a, c, d)
        })
    };
    w.prototype = new f(["chunk", "finish"]);
    w.prototype._start = function(a, c, d) {
        var g = this,
            f = new XDomainRequest;
        c += (-1 === c.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        var l = f.ontimeout = f.onerror = function() {
            g.emit("finish", 0, "");
            g._cleanup(!1)
        };
        f.onprogress = function() {
            g.emit("chunk", 200, f.responseText)
        };
        f.onload = function() {
            g.emit("finish", 200, f.responseText);
            g._cleanup(!1)
        };
        g.xdr = f;
        g.unload_ref =
            b.unload_add(function() {
                g._cleanup(!0)
            });
        try {
            g.xdr.open(a, c), g.xdr.send(d)
        } catch (m) {
            l()
        }
    };
    w.prototype._cleanup = function(a) {
        if (this.xdr) {
            b.unload_del(this.unload_ref);
            this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
            if (a) try {
                this.xdr.abort()
            } catch (c) {}
            this.unload_ref = this.xdr = null
        }
    };
    w.prototype.close = function() {
        this.nuke();
        this._cleanup(!0)
    };
    b.isXHRCorsCapable = function() {
        return c.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : c.XDomainRequest && a.domain ? 2 : J.enabled() ?
            3 : 4
    };
    var l = function(a, d, g) {
        if (this === c) return new l(a, d, g);
        var f = this,
            m;
        f._options = {
            devel: !1,
            debug: !1,
            protocols_whitelist: [],
            info: void 0,
            rtt: void 0
        };
        g && b.objectExtend(f._options, g);
        f._base_url = b.amendUrl(a);
        f._server = f._options.server || b.random_number_string(1E3);
        f._options.protocols_whitelist && f._options.protocols_whitelist.length ? m = f._options.protocols_whitelist : ("string" == typeof d && 0 < d.length ? m = [d] : b.isArray(d) ? m = d : m = null, m && f._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.'));
        f._protocols = [];
        f.protocol = null;
        f.readyState = l.CONNECTING;
        f._ir = M(f._base_url);
        f._ir.onfinish = function(a, c) {
            f._ir = null;
            a ? (f._options.info && (a = b.objectExtend(a, f._options.info)), f._options.rtt && (c = f._options.rtt), f._applyInfo(a, c, m), f._didClose()) : f._didClose(1002, "Can't connect to server", !0)
        }
    };
    l.prototype = new g;
    l.version = "0.3.4";
    l.CONNECTING = 0;
    l.OPEN = 1;
    l.CLOSING = 2;
    l.CLOSED = 3;
    l.prototype._debug = function() {
        this._options.debug && b.log.apply(b, arguments)
    };
    l.prototype._dispatchOpen = function() {
        this.readyState ===
            l.CONNECTING ? (this._transport_tref && (clearTimeout(this._transport_tref), this._transport_tref = null), this.readyState = l.OPEN, this.dispatchEvent(new d("open"))) : this._didClose(1006, "Server lost session")
    };
    l.prototype._dispatchMessage = function(a) {
        this.readyState === l.OPEN && this.dispatchEvent(new d("message", {
            data: a
        }))
    };
    l.prototype._dispatchHeartbeat = function(a) {
        this.readyState === l.OPEN && this.dispatchEvent(new d("heartbeat", {}))
    };
    l.prototype._didClose = function(a, c, g) {
        var f = this;
        if (f.readyState !== l.CONNECTING &&
            f.readyState !== l.OPEN && f.readyState !== l.CLOSING) throw Error("INVALID_STATE_ERR");
        f._ir && (f._ir.nuke(), f._ir = null);
        f._transport && (f._transport.doCleanup(), f._transport = null);
        var m = new d("close", {
            code: a,
            reason: c,
            wasClean: b.userSetCode(a)
        });
        if (!b.userSetCode(a) && f.readyState === l.CONNECTING && !g) {
            if (f._try_next_protocol(m)) return;
            m = new d("close", {
                code: 2E3,
                reason: "All transports failed",
                wasClean: !1,
                last_event: m
            })
        }
        f.readyState = l.CLOSED;
        b.delay(function() {
            f.dispatchEvent(m)
        })
    };
    l.prototype._didMessage = function(a) {
        switch (a.slice(0,
            1)) {
            case "o":
                this._dispatchOpen();
                break;
            case "a":
                a = JSON.parse(a.slice(1) || "[]");
                for (var b = 0; b < a.length; b++) this._dispatchMessage(a[b]);
                break;
            case "m":
                a = JSON.parse(a.slice(1) || "null");
                this._dispatchMessage(a);
                break;
            case "c":
                a = JSON.parse(a.slice(1) || "[]");
                this._didClose(a[0], a[1]);
                break;
            case "h":
                this._dispatchHeartbeat()
        }
    };
    l.prototype._try_next_protocol = function(c) {
        var d = this;
        d.protocol && (d._debug("Closed transport:", d.protocol, "" + c), d.protocol = null);
        for (d._transport_tref && (clearTimeout(d._transport_tref),
                d._transport_tref = null);;) {
            c = d.protocol = d._protocols.shift();
            if (!c) return !1;
            if (l[c] && !0 === l[c].need_body && (!a.body || "undefined" != typeof a.readyState && "complete" !== a.readyState)) return d._protocols.unshift(c), d.protocol = "waiting-for-load", b.attachEvent("load", function() {
                d._try_next_protocol()
            }), !0;
            if (l[c] && l[c].enabled(d._options)) {
                d._transport_tref = b.delay((d._options.rto || 0) * (l[c].roundTrips || 1) || 5E3, function() {
                    d.readyState === l.CONNECTING && d._didClose(2007, "Transport timeouted")
                });
                var g = b.random_string(8),
                    g = d._base_url + "/" + d._server + "/" + g;
                return d._debug("Opening transport:", c, " url:" + g, " RTO:" + d._options.rto), d._transport = new l[c](d, g, d._base_url), !0
            }
            d._debug("Skipping transport:", c)
        }
    };
    l.prototype.close = function(a, c) {
        if (a && !b.userSetCode(a)) throw Error("INVALID_ACCESS_ERR");
        return this.readyState !== l.CONNECTING && this.readyState !== l.OPEN ? !1 : (this.readyState = l.CLOSING, this._didClose(a || 1E3, c || "Normal closure"), !0)
    };
    l.prototype.send = function(a) {
        if (this.readyState === l.CONNECTING) throw Error("INVALID_STATE_ERR");
        return this.readyState === l.OPEN && this._transport.doSend(b.quote("" + a)), !0
    };
    l.prototype._applyInfo = function(c, d, g) {
        this._options.info = c;
        this._options.rtt = d;
        this._options.rto = b.countRTO(d);
        this._options.info.null_origin = !a.domain;
        d = b.probeProtocols();
        this._protocols = b.detectProtocols(d, g, c)
    };
    w = l.websocket = function(a, d) {
        var g = this,
            f = d + "/websocket";
        "https" === f.slice(0, 5) ? f = "wss" + f.slice(5) : f = "ws" + f.slice(4);
        g.ri = a;
        g.url = f;
        g.ws = new(c.WebSocket || c.MozWebSocket)(g.url);
        g.ws.onmessage = function(a) {
            g.ri._didMessage(a.data)
        };
        g.unload_ref = b.unload_add(function() {
            g.ws.close()
        });
        g.ws.onclose = function() {
            g.ri._didMessage(b.closeFrame(1006, "WebSocket connection broken"))
        }
    };
    w.prototype.doSend = function(a) {
        this.ws.send("[" + a + "]")
    };
    w.prototype.doCleanup = function() {
        var a = this.ws;
        a && (a.onmessage = a.onclose = null, a.close(), b.unload_del(this.unload_ref), this.unload_ref = this.ri = this.ws = null)
    };
    w.enabled = function() {
        return !!c.WebSocket || !!c.MozWebSocket
    };
    w.roundTrips = 2;
    var L = function() {};
    L.prototype.send_constructor = function(a) {
        this.send_buffer = [];
        this.sender = a
    };
    L.prototype.doSend = function(a) {
        this.send_buffer.push(a);
        this.send_stop || this.send_schedule()
    };
    L.prototype.send_schedule_wait = function() {
        var a = this,
            c;
        a.send_stop = function() {
            a.send_stop = null;
            clearTimeout(c)
        };
        c = b.delay(25, function() {
            a.send_stop = null;
            a.send_schedule()
        })
    };
    L.prototype.send_schedule = function() {
        var a = this;
        if (0 < a.send_buffer.length) {
            var b = "[" + a.send_buffer.join(",") + "]";
            a.send_stop = a.sender(a.trans_url, b, function(b, c) {
                a.send_stop = null;
                !1 === b ? a.ri._didClose(1006, "Sending error " +
                    c) : a.send_schedule_wait()
            });
            a.send_buffer = []
        }
    };
    L.prototype.send_destructor = function() {
        this._send_stop && this._send_stop();
        this._send_stop = null
    };
    var R = function(c, d, g) {
            if (!("_send_form" in this)) {
                var f = this._send_form = a.createElement("form"),
                    l = this._send_area = a.createElement("textarea");
                l.name = "d";
                f.style.display = "none";
                f.style.position = "absolute";
                f.method = "POST";
                f.enctype = "application/x-www-form-urlencoded";
                f.acceptCharset = "UTF-8";
                f.appendChild(l);
                a.body.appendChild(f)
            }
            var f = this._send_form,
                l = this._send_area,
                m = "a" + b.random_string(8);
            f.target = m;
            f.action = c + "/jsonp_send?i=" + m;
            var p;
            try {
                p = a.createElement('<iframe name="' + m + '">')
            } catch (q) {
                p = a.createElement("iframe"), p.name = m
            }
            p.id = m;
            f.appendChild(p);
            p.style.display = "none";
            try {
                l.value = d
            } catch (s) {
                b.log("Your browser is seriously broken. Go home! " + s.message)
            }
            f.submit();
            var r = function(a) {
                p.onerror && (p.onreadystatechange = p.onerror = p.onload = null, b.delay(500, function() {
                    p.parentNode.removeChild(p);
                    p = null
                }), l.value = "", g(!0))
            };
            return p.onerror = p.onload = r, p.onreadystatechange =
                function(a) {
                    "complete" == p.readyState && r()
                }, r
        },
        Y = function(a) {
            return function(b, c, d) {
                return (new a("POST", b + "/xhr_send", c)).onfinish = function(a, b) {
                        d(200 === a || 204 === a, "http status " + a)
                    },
                    function(a) {
                        d(!1, a)
                    }
            }
        },
        ca = function(c, d) {
            var g, f = a.createElement("script"),
                l, m = function(a) {
                    l && (l.parentNode.removeChild(l), l = null);
                    f && (clearTimeout(g), f.parentNode.removeChild(f), f.onreadystatechange = f.onerror = f.onload = f.onclick = null, f = null, d(a), d = null)
                },
                p = !1,
                q = null;
            f.id = "a" + b.random_string(8);
            f.src = c;
            f.type = "text/javascript";
            f.charset = "UTF-8";
            f.onerror = function(a) {
                q || (q = setTimeout(function() {
                    p || m(b.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                }, 1E3))
            };
            f.onload = function(a) {
                m(b.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
            };
            f.onreadystatechange = function(a) {
                if (/loaded|closed/.test(f.readyState)) {
                    if (f && f.htmlFor && f.onclick) {
                        p = !0;
                        try {
                            f.onclick()
                        } catch (c) {}
                    }
                    f && m(b.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                }
            };
            if ("undefined" == typeof f.async && a.attachEvent)
                if (/opera/i.test(navigator.userAgent)) l =
                    a.createElement("script"), l.text = "try{var a = document.getElementById('" + f.id + "'); if(a)a.onerror();}catch(x){};", f.async = l.async = !1;
                else {
                    try {
                        f.htmlFor = f.id, f.event = "onclick"
                    } catch (s) {}
                    f.async = !0
                }
                "undefined" != typeof f.async && (f.async = !0);
            g = setTimeout(function() {
                m(b.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
            }, 35E3);
            var r = a.getElementsByTagName("head")[0];
            return r.insertBefore(f, r.firstChild), l && r.insertBefore(l, r.firstChild), m
        },
        w = l["jsonp-polling"] = function(a, c) {
            b.polluteGlobalNamespace();
            this.ri = a;
            this.trans_url = c;
            this.send_constructor(R);
            this._schedule_recv()
        };
    w.prototype = new L;
    w.prototype._schedule_recv = function() {
        var a = this;
        a._recv_stop = aa(a.trans_url + "/jsonp", ca, function(b) {
            a._recv_stop = null;
            b && (a._is_closing || a.ri._didMessage(b));
            a._is_closing || a._schedule_recv()
        })
    };
    w.enabled = function() {
        return !0
    };
    w.need_body = !0;
    w.prototype.doCleanup = function() {
        this._is_closing = !0;
        this._recv_stop && this._recv_stop();
        this.ri = this._recv_stop = null;
        this.send_destructor()
    };
    var aa = function(a, d, g) {
            var f =
                "a" + b.random_string(6);
            a = a + "?c=" + escape("_jp." + f);
            var l = 0;
            d = d(a, function(a) {
                switch (l) {
                    case 0:
                        delete c._jp[f];
                        g(a);
                        break;
                    case 1:
                        g(a);
                        l = 2;
                        break;
                    case 2:
                        delete c._jp[f]
                }
            });
            c._jp[f] = d;
            return function() {
                c._jp[f] && (l = 1, c._jp[f](b.closeFrame(1E3, "JSONP user aborted read")))
            }
        },
        w = function() {};
    w.prototype = new L;
    w.prototype.run = function(a, b, c, d, g) {
        this.ri = a;
        this.trans_url = b;
        this.send_constructor(Y(g));
        this.poll = new D(a, d, b + c, g)
    };
    w.prototype.doCleanup = function() {
        this.poll && (this.poll.abort(), this.poll = null)
    };
    var Q = l["xhr-streaming"] = function(a, c) {
        this.run(a, c, "/xhr_streaming", Z, b.XHRCorsObject)
    };
    Q.prototype = new w;
    Q.enabled = function() {
        return c.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
    };
    Q.roundTrips = 2;
    Q.need_body = !0;
    L = l["xdr-streaming"] = function(a, c) {
        this.run(a, c, "/xhr_streaming", Z, b.XDRObject)
    };
    L.prototype = new w;
    L.enabled = function() {
        return !!c.XDomainRequest
    };
    L.roundTrips = 2;
    var U = l["xhr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", Z, b.XHRCorsObject)
    };
    U.prototype =
        new w;
    U.enabled = Q.enabled;
    U.roundTrips = 2;
    Q = l["xdr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", Z, b.XDRObject)
    };
    Q.prototype = new w;
    Q.enabled = L.enabled;
    Q.roundTrips = 2;
    var J = function() {};
    J.prototype.i_constructor = function(a, c, d) {
        var g = this;
        g.ri = a;
        g.origin = b.getOrigin(d);
        g.base_url = d;
        g.trans_url = c;
        a = d + "/iframe.html";
        g.ri._options.devel && (a += "?t=" + +new Date);
        g.window_id = b.random_string(8);
        a += "#" + g.window_id;
        g.iframeObj = b.createIframe(a, function(a) {
            g.ri._didClose(1006, "Unable to load an iframe (" + a + ")")
        });
        g.onmessage_cb = b.bind(g.onmessage, g);
        b.attachMessage(g.onmessage_cb)
    };
    J.prototype.doCleanup = function() {
        if (this.iframeObj) {
            b.detachMessage(this.onmessage_cb);
            try {
                this.iframeObj.iframe.contentWindow && this.postMessage("c")
            } catch (a) {}
            this.iframeObj.cleanup();
            this.onmessage_cb = this.iframeObj = this.iframeObj = null
        }
    };
    J.prototype.onmessage = function(a) {
        if (a.origin === this.origin) {
            var b = a.data.slice(0, 8),
                c = a.data.slice(8, 9);
            a = a.data.slice(9);
            if (b === this.window_id) switch (c) {
                case "s":
                    this.iframeObj.loaded();
                    this.postMessage("s",
                        JSON.stringify([l.version, this.protocol, this.trans_url, this.base_url]));
                    break;
                case "t":
                    this.ri._didMessage(a)
            }
        }
    };
    J.prototype.postMessage = function(a, b) {
        this.iframeObj.post(this.window_id + a + (b || ""), this.origin)
    };
    J.prototype.doSend = function(a) {
        this.postMessage("m", a)
    };
    J.enabled = function() {
        var a = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
        return ("function" == typeof c.postMessage || "object" == typeof c.postMessage) && !a
    };
    var ba, G = function(a, d) {
            parent !== c ? parent.postMessage(ba +
                a + (d || ""), "*") : b.log("Can't postMessage, no parent window.", a, d)
        },
        H = function() {};
    H.prototype._didClose = function(a, c) {
        G("t", b.closeFrame(a, c))
    };
    H.prototype._didMessage = function(a) {
        G("t", a)
    };
    H.prototype._doSend = function(a) {
        this._transport.doSend(a)
    };
    H.prototype._doCleanup = function() {
        this._transport.doCleanup()
    };
    b.parent_origin = void 0;
    l.bootstrap_iframe = function() {
        var d;
        ba = a.location.hash.slice(1);
        b.attachMessage(function(a) {
            if (a.source === parent && ("undefined" == typeof b.parent_origin && (b.parent_origin =
                    a.origin), a.origin === b.parent_origin)) {
                var g = a.data.slice(0, 8),
                    f = a.data.slice(8, 9);
                a = a.data.slice(9);
                if (g === ba) switch (f) {
                    case "s":
                        var m = JSON.parse(a),
                            g = m[0],
                            f = m[1];
                        a = m[2];
                        m = m[3];
                        g !== l.version && b.log('Incompatibile SockJS! Main site uses: "' + g + '", the iframe: "' + l.version + '".');
                        if (!b.flatUrl(a) || !b.flatUrl(m)) {
                            b.log("Only basic urls are supported in SockJS");
                            break
                        }
                        if (!b.isSameOriginUrl(a) || !b.isSameOriginUrl(m)) {
                            b.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([c.location.href,
                                a, m
                            ]) + ")");
                            break
                        }
                        d = new H;
                        d._transport = new H[f](d, a, m);
                        break;
                    case "m":
                        d._doSend(a);
                        break;
                    case "c":
                        d && d._doCleanup(), d = null
                }
            }
        });
        G("s")
    };
    var X = function(a, c) {
        var d = this;
        b.delay(function() {
            d.doXhr(a, c)
        })
    };
    X.prototype = new f(["finish"]);
    X.prototype.doXhr = function(a, c) {
        var d = this,
            g = (new Date).getTime(),
            f = new c("GET", a + "/info"),
            l = b.delay(8E3, function() {
                f.ontimeout()
            });
        f.onfinish = function(a, b) {
            clearTimeout(l);
            l = null;
            if (200 === a) {
                var c = (new Date).getTime() - g,
                    e = JSON.parse(b);
                "object" != typeof e && (e = {});
                d.emit("finish",
                    e, c)
            } else d.emit("finish")
        };
        f.ontimeout = function() {
            f.close();
            d.emit("finish")
        }
    };
    var W = function(c) {
        var d = this,
            g = function() {
                var a = new J;
                a.protocol = "w-iframe-info-receiver";
                var b = function(b) {
                    "string" == typeof b && "m" === b.substr(0, 1) ? (b = JSON.parse(b.substr(1)), d.emit("finish", b[0], b[1])) : d.emit("finish");
                    a.doCleanup();
                    a = null
                };
                a.i_constructor({
                    _options: {},
                    _didClose: b,
                    _didMessage: b
                }, c, c)
            };
        a.body ? g() : b.attachEvent("load", g)
    };
    W.prototype = new f(["finish"]);
    var r = function() {
        var a = this;
        b.delay(function() {
            a.emit("finish", {}, 2E3)
        })
    };
    r.prototype = new f(["finish"]);
    var M = function(a) {
        if (b.isSameOriginUrl(a)) return new X(a, b.XHRLocalObject);
        switch (b.isXHRCorsCapable()) {
            case 1:
                return new X(a, b.XHRLocalObject);
            case 2:
                return new X(a, b.XDRObject);
            case 3:
                return new W(a);
            default:
                return new r
        }
    };
    (H["w-iframe-info-receiver"] = function(a, c, d) {
        (new X(d, b.XHRLocalObject)).onfinish = function(b, c) {
            a._didMessage("m" + JSON.stringify([b, c]));
            a._didClose()
        }
    }).prototype.doCleanup = function() {};
    f = l["iframe-eventsource"] = function() {
        this.protocol =
            "w-iframe-eventsource";
        this.i_constructor.apply(this, arguments)
    };
    f.prototype = new J;
    f.enabled = function() {
        return "EventSource" in c && J.enabled()
    };
    f.need_body = !0;
    f.roundTrips = 3;
    (H["w-iframe-eventsource"] = function(a, c) {
        this.run(a, c, "/eventsource", T, b.XHRLocalObject)
    }).prototype = new w;
    f = l["iframe-xhr-polling"] = function() {
        this.protocol = "w-iframe-xhr-polling";
        this.i_constructor.apply(this, arguments)
    };
    f.prototype = new J;
    f.enabled = function() {
        return c.XMLHttpRequest && J.enabled()
    };
    f.need_body = !0;
    f.roundTrips = 3;
    (H["w-iframe-xhr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", Z, b.XHRLocalObject)
    }).prototype = new w;
    f = l["iframe-htmlfile"] = function() {
        this.protocol = "w-iframe-htmlfile";
        this.i_constructor.apply(this, arguments)
    };
    f.prototype = new J;
    f.enabled = function() {
        return J.enabled()
    };
    f.need_body = !0;
    f.roundTrips = 3;
    (H["w-iframe-htmlfile"] = function(a, c) {
        this.run(a, c, "/htmlfile", P, b.XHRLocalObject)
    }).prototype = new w;
    var D = function(a, b, c, d) {
        this.ri = a;
        this.Receiver = b;
        this.recv_url = c;
        this.AjaxObject = d;
        this._scheduleRecv()
    };
    D.prototype._scheduleRecv = function() {
        var a = this,
            b = a.poll = new a.Receiver(a.recv_url, a.AjaxObject);
        b.onmessage = function(b) {
            a.ri._didMessage(b.data)
        };
        b.onclose = function(c) {
            a.poll = b = b.onmessage = b.onclose = null;
            a.poll_is_closing || ("permanent" === c.reason ? a.ri._didClose(1006, "Polling error (" + c.reason + ")") : a._scheduleRecv())
        }
    };
    D.prototype.abort = function() {
        this.poll_is_closing = !0;
        this.poll && this.poll.abort()
    };
    var T = function(a) {
        var c = this,
            g = new EventSource(a);
        g.onmessage = function(a) {
            c.dispatchEvent(new d("message", {
                data: unescape(a.data)
            }))
        };
        c.es_close = g.onerror = function(a, e) {
            var f = e ? "user" : 2 !== g.readyState ? "network" : "permanent";
            c.es_close = g.onmessage = g.onerror = null;
            g.close();
            g = null;
            b.delay(200, function() {
                c.dispatchEvent(new d("close", {
                    reason: f
                }))
            })
        }
    };
    T.prototype = new g;
    T.prototype.abort = function() {
        this.es_close && this.es_close({}, !0)
    };
    var N, P = function(a) {
        var g = this;
        b.polluteGlobalNamespace();
        g.id = "a" + b.random_string(6, 26);
        a += (-1 === a.indexOf("?") ? "?" : "&") + "c=" + escape("_jp." + g.id);
        if (void 0 === N)
            if ("ActiveXObject" in
                c) try {
                N = !!new ActiveXObject("htmlfile")
            } catch (f) {} else N = !1;
        var l = N ? b.createHtmlfile : b.createIframe,
            m;
        c._jp[g.id] = {
            start: function() {
                m.loaded()
            },
            message: function(a) {
                g.dispatchEvent(new d("message", {
                    data: a
                }))
            },
            stop: function() {
                g.iframe_close({}, "network")
            }
        };
        g.iframe_close = function(a, b) {
            m.cleanup();
            g.iframe_close = m = null;
            delete c._jp[g.id];
            g.dispatchEvent(new d("close", {
                reason: b
            }))
        };
        m = l(a, function(a) {
            g.iframe_close({}, "permanent")
        })
    };
    P.prototype = new g;
    P.prototype.abort = function() {
        this.iframe_close && this.iframe_close({},
            "user")
    };
    var Z = function(a, b) {
        var c = this,
            g = 0;
        c.xo = new b("POST", a, null);
        c.xo.onchunk = function(a, b) {
            if (200 === a)
                for (;;) {
                    var e = b.slice(g),
                        f = e.indexOf("\n");
                    if (-1 === f) break;
                    g += f + 1;
                    e = e.slice(0, f);
                    c.dispatchEvent(new d("message", {
                        data: e
                    }))
                }
        };
        c.xo.onfinish = function(a, b) {
            c.xo.onchunk(a, b);
            c.xo = null;
            c.dispatchEvent(new d("close", {
                reason: 200 === a ? "network" : "permanent"
            }))
        }
    };
    return Z.prototype = new g, Z.prototype.abort = function() {
        this.xo && (this.xo.close(), this.dispatchEvent(new d("close", {
                reason: "user"
            })), this.xo =
            null)
    }, l.getUtils = function() {
        return b
    }, l.getIframeTransport = function() {
        return J
    }, l
}();
"_sockjs_onload" in window && setTimeout(_sockjs_onload, 1);
"function" == typeof define && define.amd && define("sockjs", [], function() {
    return SockJS
});
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 1.0.3
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
function FastClick(a, c) {
    function b(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    var g;
    c = c || {};
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0;
    this.touchBoundary = c.touchBoundary || 10;
    this.layer = a;
    this.tapDelay = c.tapDelay || 200;
    if (!FastClick.notNeeded(a)) {
        for (var d = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), f = 0, m = d.length; f < m; f++) this[d[f]] = b(this[d[f]], this);
        deviceIsAndroid &&
            (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0));
        a.addEventListener("click", this.onClick, !0);
        a.addEventListener("touchstart", this.onTouchStart, !1);
        a.addEventListener("touchmove", this.onTouchMove, !1);
        a.addEventListener("touchend", this.onTouchEnd, !1);
        a.addEventListener("touchcancel", this.onTouchCancel, !1);
        Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
            var g = Node.prototype.removeEventListener;
            "click" === b ? g.call(a, b, c.hijacked || c, d) : g.call(a, b, c, d)
        }, a.addEventListener = function(b, c, d) {
            var g = Node.prototype.addEventListener;
            "click" === b ? g.call(a, b, c.hijacked || (c.hijacked = function(a) {
                a.propagationStopped || c(a)
            }), d) : g.call(a, b, c, d)
        });
        "function" === typeof a.onclick && (g = a.onclick, a.addEventListener("click", function(a) {
            g(a)
        }, !1), a.onclick = null)
    }
}
var deviceIsAndroid = 0 < navigator.userAgent.indexOf("Android"),
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = 0 < navigator.userAgent.indexOf("BB10");
FastClick.prototype.needsClick = function(a) {
    switch (a.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (a.disabled) return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === a.type || a.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(a.className)
};
FastClick.prototype.needsFocus = function(a) {
    switch (a.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (a.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !a.disabled && !a.readOnly;
        default:
            return /\bneedsfocus\b/.test(a.className)
    }
};
FastClick.prototype.sendClick = function(a, c) {
    var b, g;
    document.activeElement && document.activeElement !== a && document.activeElement.blur();
    g = c.changedTouches[0];
    b = document.createEvent("MouseEvents");
    b.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, g.screenX, g.screenY, g.clientX, g.clientY, !1, !1, !1, !1, 0, null);
    b.forwardedTouchEvent = !0;
    a.dispatchEvent(b)
};
FastClick.prototype.determineEventType = function(a) {
    return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
};
FastClick.prototype.focus = function(a) {
    var c;
    deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (c = a.value.length, a.setSelectionRange(c, c)) : a.focus()
};
FastClick.prototype.updateScrollParent = function(a) {
    var c, b;
    c = a.fastClickScrollParent;
    if (!c || !c.contains(a)) {
        b = a;
        do {
            if (b.scrollHeight > b.offsetHeight) {
                c = b;
                a.fastClickScrollParent = b;
                break
            }
            b = b.parentElement
        } while (b)
    }
    c && (c.fastClickLastScrollTop = c.scrollTop)
};
FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
};
FastClick.prototype.onTouchStart = function(a) {
    var c, b, g;
    if (1 < a.targetTouches.length) return !0;
    c = this.getTargetElementFromEventTarget(a.target);
    b = a.targetTouches[0];
    if (deviceIsIOS) {
        g = window.getSelection();
        if (g.rangeCount && !g.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (b.identifier && b.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
            this.lastTouchIdentifier = b.identifier;
            this.updateScrollParent(c)
        }
    }
    this.trackingClick = !0;
    this.trackingClickStart = a.timeStamp;
    this.targetElement = c;
    this.touchStartX =
        b.pageX;
    this.touchStartY = b.pageY;
    a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault();
    return !0
};
FastClick.prototype.touchHasMoved = function(a) {
    a = a.changedTouches[0];
    var c = this.touchBoundary;
    return Math.abs(a.pageX - this.touchStartX) > c || Math.abs(a.pageY - this.touchStartY) > c ? !0 : !1
};
FastClick.prototype.onTouchMove = function(a) {
    if (!this.trackingClick) return !0;
    if (this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) this.trackingClick = !1, this.targetElement = null;
    return !0
};
FastClick.prototype.findControl = function(a) {
    return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(a) {
    var c, b, g = this.targetElement;
    if (!this.trackingClick) return !0;
    if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
    this.cancelNextClick = !1;
    this.lastClickTime = a.timeStamp;
    c = this.trackingClickStart;
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    deviceIsIOSWithBadTarget && (b = a.changedTouches[0], g = document.elementFromPoint(b.pageX - window.pageXOffset, b.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent);
    b = g.tagName.toLowerCase();
    if ("label" === b) {
        if (c = this.findControl(g)) {
            this.focus(g);
            if (deviceIsAndroid) return !1;
            g = c
        }
    } else if (this.needsFocus(g)) {
        if (100 < a.timeStamp - c || deviceIsIOS && window.top !== window && "input" === b) return this.targetElement = null, !1;
        this.focus(g);
        this.sendClick(g, a);
        deviceIsIOS && "select" === b || (this.targetElement = null, a.preventDefault());
        return !1
    }
    if (deviceIsIOS && !deviceIsIOS4 && (c = g.fastClickScrollParent) && c.fastClickLastScrollTop !== c.scrollTop) return !0;
    this.needsClick(g) || (a.preventDefault(),
        this.sendClick(g, a));
    return !1
};
FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = !1;
    this.targetElement = null
};
FastClick.prototype.onMouse = function(a) {
    return this.targetElement && !a.forwardedTouchEvent && a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
};
FastClick.prototype.onClick = function(a) {
    if (this.trackingClick) return this.targetElement = null, this.trackingClick = !1, !0;
    if ("submit" === a.target.type && 0 === a.detail) return !0;
    a = this.onMouse(a);
    a || (this.targetElement = null);
    return a
};
FastClick.prototype.destroy = function() {
    var a = this.layer;
    deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0));
    a.removeEventListener("click", this.onClick, !0);
    a.removeEventListener("touchstart", this.onTouchStart, !1);
    a.removeEventListener("touchmove", this.onTouchMove, !1);
    a.removeEventListener("touchend", this.onTouchEnd, !1);
    a.removeEventListener("touchcancel", this.onTouchCancel, !1)
};
FastClick.notNeeded = function(a) {
    var c, b;
    if ("undefined" === typeof window.ontouchstart) return !0;
    if (b = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
        if (deviceIsAndroid) {
            if ((c = document.querySelector("meta[name=viewport]")) && (-1 !== c.content.indexOf("user-scalable=no") || 31 < b && document.documentElement.scrollWidth <= window.outerWidth)) return !0
        } else return !0;
    return deviceIsBlackBerry10 && (c = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= c[1] && 3 <= c[2] && (c = document.querySelector("meta[name=viewport]")) &&
        (-1 !== c.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.msTouchAction ? !0 : !1
};
FastClick.attach = function(a, c) {
    return new FastClick(a, c)
};
"function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    return FastClick
}) : "undefined" !== typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
(function(a) {
    "function" === typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], a) : a(window.jQuery)
})(function(a) {
    function c(b) {
        var c = "dragover" === b;
        return function(d) {
            d.dataTransfer = d.originalEvent && d.originalEvent.dataTransfer;
            var f = d.dataTransfer;
            f && -1 !== a.inArray("Files", f.types) && !1 !== this._trigger(b, a.Event(b, {
                delegatedEvent: d
            })) && (d.preventDefault(), c && (f.dropEffect = "copy"))
        }
    }
    a.support.fileInput = !(/(Android (1\.[0156]|2\.[01]))|(Windows Phone (OS 7|8\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1\.0|2\.[05]|3\.0))/.test(window.navigator.userAgent) ||
        a('<input type="file">').prop("disabled"));
    a.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader);
    a.support.xhrFormDataFileUpload = !!window.FormData;
    a.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    a.widget("blueimp.fileupload", {
        options: {
            dropZone: a(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(b, c) {
                b = this.messages[b] || b.toString();
                c && a.each(c, function(a, c) {
                    b = b.replace("{" + a + "}", c)
                });
                return b
            },
            formData: function(a) {
                return a.serializeArray()
            },
            add: function(b,
                c) {
                if (b.isDefaultPrevented()) return !1;
                (c.autoUpload || !1 !== c.autoUpload && a(this).fileupload("option", "autoUpload")) && c.process().done(function() {
                    c.submit()
                })
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: a.support.blobSlice && function() {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
        },
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime();
            this.bitrate = this.loaded =
                0;
            this.getBitrate = function(a, c, d) {
                var f = a - this.timestamp;
                if (!this.bitrate || !d || f > d) this.bitrate = 1E3 / f * (c - this.loaded) * 8, this.loaded = c, this.timestamp = a;
                return this.bitrate
            }
        },
        _isXHRUpload: function(b) {
            return !b.forceIframeTransport && (!b.multipart && a.support.xhrFileUpload || a.support.xhrFormDataFileUpload)
        },
        _getFormData: function(b) {
            var c;
            return "function" === a.type(b.formData) ? b.formData(b.form) : a.isArray(b.formData) ? b.formData : "object" === a.type(b.formData) ? (c = [], a.each(b.formData, function(a, b) {
                c.push({
                    name: a,
                    value: b
                })
            }), c) : []
        },
        _getTotal: function(b) {
            var c = 0;
            a.each(b, function(a, b) {
                c += b.size || 1
            });
            return c
        },
        _initProgressObject: function(b) {
            var c = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            b._progress ? a.extend(b._progress, c) : b._progress = c
        },
        _initResponseObject: function(a) {
            var c;
            if (a._response)
                for (c in a._response) a._response.hasOwnProperty(c) && delete a._response[c];
            else a._response = {}
        },
        _onProgress: function(b, c) {
            if (b.lengthComputable) {
                var d = Date.now ? Date.now() : (new Date).getTime(),
                    f;
                c._time && c.progressInterval && d - c._time < c.progressInterval &&
                    b.loaded !== b.total || (c._time = d, f = Math.floor(b.loaded / b.total * (c.chunkSize || c._progress.total)) + (c.uploadedBytes || 0), this._progress.loaded += f - c._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(d, this._progress.loaded, c.bitrateInterval), c._progress.loaded = c.loaded = f, c._progress.bitrate = c.bitrate = c._bitrateTimer.getBitrate(d, f, c.bitrateInterval), this._trigger("progress", a.Event("progress", {
                        delegatedEvent: b
                    }), c), this._trigger("progressall", a.Event("progressall", {
                            delegatedEvent: b
                        }),
                        this._progress))
            }
        },
        _initProgressListener: function(b) {
            var c = this,
                d = b.xhr ? b.xhr() : a.ajaxSettings.xhr();
            d.upload && (a(d.upload).bind("progress", function(a) {
                var d = a.originalEvent;
                a.lengthComputable = d.lengthComputable;
                a.loaded = d.loaded;
                a.total = d.total;
                c._onProgress(a, b)
            }), b.xhr = function() {
                return d
            })
        },
        _isInstanceOf: function(a, c) {
            return Object.prototype.toString.call(c) === "[object " + a + "]"
        },
        _initXHRData: function(b) {
            var c = this,
                d, f = b.files[0],
                m = b.multipart || !a.support.xhrFileUpload,
                p = "array" === a.type(b.paramName) ?
                b.paramName[0] : b.paramName;
            b.headers = a.extend({}, b.headers);
            b.contentRange && (b.headers["Content-Range"] = b.contentRange);
            m && !b.blob && this._isInstanceOf("File", f) || (b.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(f.name) + '"');
            m ? a.support.xhrFormDataFileUpload && (b.postMessage ? (d = this._getFormData(b), b.blob ? d.push({
                name: p,
                value: b.blob
            }) : a.each(b.files, function(c, g) {
                d.push({
                    name: "array" === a.type(b.paramName) && b.paramName[c] || p,
                    value: g
                })
            })) : (c._isInstanceOf("FormData", b.formData) ? d =
                b.formData : (d = new FormData, a.each(this._getFormData(b), function(a, b) {
                    d.append(b.name, b.value)
                })), b.blob ? d.append(p, b.blob, f.name) : a.each(b.files, function(f, m) {
                    (c._isInstanceOf("File", m) || c._isInstanceOf("Blob", m)) && d.append("array" === a.type(b.paramName) && b.paramName[f] || p, m, m.uploadName || m.name)
                })), b.data = d) : (b.contentType = f.type || "application/octet-stream", b.data = b.blob || f);
            b.blob = null
        },
        _initIframeSettings: function(b) {
            var c = a("<a></a>").prop("href", b.url).prop("host");
            b.dataType = "iframe " + (b.dataType ||
                "");
            b.formData = this._getFormData(b);
            b.redirect && c && c !== location.host && b.formData.push({
                name: b.redirectParamName || "redirect",
                value: b.redirect
            })
        },
        _initDataSettings: function(a) {
            this._isXHRUpload(a) ? (this._chunkedUpload(a, !0) || (a.data || this._initXHRData(a), this._initProgressListener(a)), a.postMessage && (a.dataType = "postmessage " + (a.dataType || ""))) : this._initIframeSettings(a)
        },
        _getParamName: function(b) {
            var c = a(b.fileInput),
                d = b.paramName;
            d ? a.isArray(d) || (d = [d]) : (d = [], c.each(function() {
                for (var b = a(this),
                        c = b.prop("name") || "files[]", b = (b.prop("files") || [1]).length; b;) d.push(c), --b
            }), d.length || (d = [c.prop("name") || "files[]"]));
            return d
        },
        _initFormSettings: function(b) {
            b.form && b.form.length || (b.form = a(b.fileInput.prop("form")), b.form.length || (b.form = a(this.options.fileInput.prop("form"))));
            b.paramName = this._getParamName(b);
            b.url || (b.url = b.form.prop("action") || location.href);
            b.type = (b.type || "string" === a.type(b.form.prop("method")) && b.form.prop("method") || "").toUpperCase();
            "POST" !== b.type && "PUT" !== b.type &&
                "PATCH" !== b.type && (b.type = "POST");
            b.formAcceptCharset || (b.formAcceptCharset = b.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(b) {
            b = a.extend({}, this.options, b);
            this._initFormSettings(b);
            this._initDataSettings(b);
            return b
        },
        _getDeferredState: function(a) {
            return a.state ? a.state() : a.isResolved() ? "resolved" : a.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function(a) {
            a.success = a.done;
            a.error = a.fail;
            a.complete = a.always;
            return a
        },
        _getXHRPromise: function(b, c, d) {
            var f = a.Deferred(),
                m = f.promise();
            c = c || this.options.context || m;
            !0 === b ? f.resolveWith(c, d) : !1 === b && f.rejectWith(c, d);
            m.abort = f.promise;
            return this._enhancePromise(m)
        },
        _addConvenienceMethods: function(b, c) {
            var d = this,
                f = function(b) {
                    return a.Deferred().resolveWith(d, b).promise()
                };
            c.process = function(b, p) {
                if (b || p) c._processQueue = this._processQueue = (this._processQueue || f([this])).pipe(function() {
                    return c.errorThrown ? a.Deferred().rejectWith(d, [c]).promise() : f(arguments)
                }).pipe(b, p);
                return this._processQueue || f([this])
            };
            c.submit = function() {
                "pending" !==
                this.state() && (c.jqXHR = this.jqXHR = !1 !== d._trigger("submit", a.Event("submit", {
                    delegatedEvent: b
                }), this) && d._onSend(b, this));
                return this.jqXHR || d._getXHRPromise()
            };
            c.abort = function() {
                if (this.jqXHR) return this.jqXHR.abort();
                this.errorThrown = "abort";
                d._trigger("fail", null, this);
                return d._getXHRPromise(!1)
            };
            c.state = function() {
                if (this.jqXHR) return d._getDeferredState(this.jqXHR);
                if (this._processQueue) return d._getDeferredState(this._processQueue)
            };
            c.processing = function() {
                return !this.jqXHR && this._processQueue &&
                    "pending" === d._getDeferredState(this._processQueue)
            };
            c.progress = function() {
                return this._progress
            };
            c.response = function() {
                return this._response
            }
        },
        _getUploadedBytes: function(a) {
            return (a = (a = (a = a.getResponseHeader("Range")) && a.split("-")) && 1 < a.length && parseInt(a[1], 10)) && a + 1
        },
        _chunkedUpload: function(b, c) {
            b.uploadedBytes = b.uploadedBytes || 0;
            var d = this,
                f = b.files[0],
                m = f.size,
                p = b.uploadedBytes,
                q = b.maxChunkSize || m,
                s = this._blobSlice,
                v = a.Deferred(),
                u = v.promise(),
                B, y;
            if (!(this._isXHRUpload(b) && s && (p || q < m)) || b.data) return !1;
            if (c) return !0;
            if (p >= m) return f.error = b.i18n("uploadedBytes"), this._getXHRPromise(!1, b.context, [null, "error", f.error]);
            y = function() {
                var c = a.extend({}, b),
                    g = c._progress.loaded;
                c.blob = s.call(f, p, p + q, f.type);
                c.chunkSize = c.blob.size;
                c.contentRange = "bytes " + p + "-" + (p + c.chunkSize - 1) + "/" + m;
                d._initXHRData(c);
                d._initProgressListener(c);
                B = (!1 !== d._trigger("chunksend", null, c) && a.ajax(c) || d._getXHRPromise(!1, c.context)).done(function(f, l, q) {
                    p = d._getUploadedBytes(q) || p + c.chunkSize;
                    g + c.chunkSize - c._progress.loaded &&
                        d._onProgress(a.Event("progress", {
                            lengthComputable: !0,
                            loaded: p - c.uploadedBytes,
                            total: p - c.uploadedBytes
                        }), c);
                    b.uploadedBytes = c.uploadedBytes = p;
                    c.result = f;
                    c.textStatus = l;
                    c.jqXHR = q;
                    d._trigger("chunkdone", null, c);
                    d._trigger("chunkalways", null, c);
                    p < m ? y() : v.resolveWith(c.context, [f, l, q])
                }).fail(function(a, b, g) {
                    c.jqXHR = a;
                    c.textStatus = b;
                    c.errorThrown = g;
                    d._trigger("chunkfail", null, c);
                    d._trigger("chunkalways", null, c);
                    v.rejectWith(c.context, [a, b, g])
                })
            };
            this._enhancePromise(u);
            u.abort = function() {
                return B.abort()
            };
            y();
            return u
        },
        _beforeSend: function(a, c) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0);
            this._initResponseObject(c);
            this._initProgressObject(c);
            c._progress.loaded = c.loaded = c.uploadedBytes || 0;
            c._progress.total = c.total = this._getTotal(c.files) || 1;
            c._progress.bitrate = c.bitrate = 0;
            this._active += 1;
            this._progress.loaded += c.loaded;
            this._progress.total += c.total
        },
        _onDone: function(b, c, d, f) {
            var m = f._progress.total,
                p = f._response;
            f._progress.loaded < m && this._onProgress(a.Event("progress", {
                lengthComputable: !0,
                loaded: m,
                total: m
            }), f);
            p.result = f.result = b;
            p.textStatus = f.textStatus = c;
            p.jqXHR = f.jqXHR = d;
            this._trigger("done", null, f)
        },
        _onFail: function(a, c, d, f) {
            var m = f._response;
            f.recalculateProgress && (this._progress.loaded -= f._progress.loaded, this._progress.total -= f._progress.total);
            m.jqXHR = f.jqXHR = a;
            m.textStatus = f.textStatus = c;
            m.errorThrown = f.errorThrown = d;
            this._trigger("fail", null, f)
        },
        _onAlways: function(a, c, d, f) {
            this._trigger("always",
                null, f)
        },
        _onSend: function(b, c) {
            c.submit || this._addConvenienceMethods(b, c);
            var d = this,
                f, m, p, q, s = d._getAJAXSettings(c),
                v = function() {
                    d._sending += 1;
                    s._bitrateTimer = new d._BitrateTimer;
                    return f = f || ((m || !1 === d._trigger("send", a.Event("send", {
                        delegatedEvent: b
                    }), s)) && d._getXHRPromise(!1, s.context, m) || d._chunkedUpload(s) || a.ajax(s)).done(function(a, b, c) {
                        d._onDone(a, b, c, s)
                    }).fail(function(a, b, c) {
                        d._onFail(a, b, c, s)
                    }).always(function(a, b, c) {
                        d._onAlways(a, b, c, s);
                        --d._sending;
                        --d._active;
                        if (s.limitConcurrentUploads &&
                            s.limitConcurrentUploads > d._sending)
                            for (a = d._slots.shift(); a;) {
                                if ("pending" === d._getDeferredState(a)) {
                                    a.resolve();
                                    break
                                }
                                a = d._slots.shift()
                            }
                        0 === d._active && d._trigger("stop")
                    })
                };
            this._beforeSend(b, s);
            return this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (1 < this.options.limitConcurrentUploads ? (p = a.Deferred(), this._slots.push(p), q = p.pipe(v)) : q = this._sequence = this._sequence.pipe(v, v), q.abort = function() {
                m = [void 0, "abort", "abort"];
                return f ? f.abort() : (p && p.rejectWith(s.context, m), v())
            }, this._enhancePromise(q)) : v()
        },
        _onAdd: function(b, c) {
            var d = this,
                f = !0,
                m = a.extend({}, this.options, c),
                p = c.files,
                q = p.length,
                s = m.limitMultiFileUploads,
                v = m.limitMultiFileUploadSize,
                u = m.limitMultiFileUploadSizeOverhead,
                B = 0,
                y = this._getParamName(m),
                C, O, w = 0;
            !v || q && void 0 !== p[0].size || (v = void 0);
            if ((m.singleFileUploads || s || v) && this._isXHRUpload(m))
                if (m.singleFileUploads || v || !s)
                    if (!m.singleFileUploads && v)
                        for (O = [], C = [], m = 0; m < q; m += 1) {
                            if (B += p[m].size + u, m + 1 ===
                                q || B + p[m + 1].size + u > v || s && m + 1 - w >= s) O.push(p.slice(w, m + 1)), B = y.slice(w, m + 1), B.length || (B = y), C.push(B), w = m + 1, B = 0
                        } else C = y;
                    else
                        for (O = [], C = [], m = 0; m < q; m += s) O.push(p.slice(m, m + s)), B = y.slice(m, m + s), B.length || (B = y), C.push(B);
            else O = [p], C = [y];
            c.originalFiles = p;
            a.each(O || p, function(l, m) {
                var p = a.extend({}, c);
                p.files = O ? m : [m];
                p.paramName = C[l];
                d._initResponseObject(p);
                d._initProgressObject(p);
                d._addConvenienceMethods(b, p);
                return f = d._trigger("add", a.Event("add", {
                    delegatedEvent: b
                }), p)
            });
            return f
        },
        _replaceFileInput: function(b) {
            var c =
                b.fileInput,
                d = c.clone(!0);
            b.fileInputClone = d;
            a("<form></form>").append(d)[0].reset();
            c.after(d).detach();
            a.cleanData(c.unbind("remove"));
            this.options.fileInput = this.options.fileInput.map(function(a, b) {
                return b === c[0] ? d[0] : b
            });
            c[0] === this.element[0] && (this.element = d)
        },
        _handleFileTreeEntry: function(b, c) {
            var d = this,
                f = a.Deferred(),
                m = function(a) {
                    a && !a.entry && (a.entry = b);
                    f.resolve([a])
                },
                p = function(a) {
                    d._handleFileTreeEntries(a, c + b.name + "/").done(function(a) {
                        f.resolve(a)
                    }).fail(m)
                },
                q = function() {
                    s.readEntries(function(a) {
                        a.length ?
                            (v = v.concat(a), q()) : p(v)
                    }, m)
                },
                s, v = [];
            c = c || "";
            b.isFile ? b._file ? (b._file.relativePath = c, f.resolve(b._file)) : b.file(function(a) {
                a.relativePath = c;
                f.resolve(a)
            }, m) : b.isDirectory ? (s = b.createReader(), q()) : f.resolve([]);
            return f.promise()
        },
        _handleFileTreeEntries: function(b, c) {
            var d = this;
            return a.when.apply(a, a.map(b, function(a) {
                return d._handleFileTreeEntry(a, c)
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(b) {
            b = b || {};
            var c = b.items;
            return c && c.length && (c[0].webkitGetAsEntry ||
                c[0].getAsEntry) ? this._handleFileTreeEntries(a.map(c, function(a) {
                var b;
                if (a.webkitGetAsEntry) {
                    if (b = a.webkitGetAsEntry()) b._file = a.getAsFile();
                    return b
                }
                return a.getAsEntry()
            })) : a.Deferred().resolve(a.makeArray(b.files)).promise()
        },
        _getSingleFileInputFiles: function(b) {
            b = a(b);
            var c = b.prop("webkitEntries") || b.prop("entries");
            if (c && c.length) return this._handleFileTreeEntries(c);
            c = a.makeArray(b.prop("files"));
            if (c.length) void 0 === c[0].name && c[0].fileName && a.each(c, function(a, b) {
                b.name = b.fileName;
                b.size =
                    b.fileSize
            });
            else {
                b = b.prop("value");
                if (!b) return a.Deferred().resolve([]).promise();
                c = [{
                    name: b.replace(/^.*\\/, "")
                }]
            }
            return a.Deferred().resolve(c).promise()
        },
        _getFileInputFiles: function(b) {
            return b instanceof a && 1 !== b.length ? a.when.apply(a, a.map(b, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(b)
        },
        _onChange: function(b) {
            var c = this,
                d = {
                    fileInput: a(b.target),
                    form: a(b.target.form)
                };
            this._getFileInputFiles(d.fileInput).always(function(f) {
                d.files =
                    f;
                c.options.replaceFileInput && c._replaceFileInput(d);
                !1 !== c._trigger("change", a.Event("change", {
                    delegatedEvent: b
                }), d) && c._onAdd(b, d)
            })
        },
        _onPaste: function(b) {
            var c = b.originalEvent && b.originalEvent.clipboardData && b.originalEvent.clipboardData.items,
                d = {
                    files: []
                };
            c && c.length && (a.each(c, function(a, b) {
                var c = b.getAsFile && b.getAsFile();
                c && d.files.push(c)
            }), !1 !== this._trigger("paste", a.Event("paste", {
                delegatedEvent: b
            }), d) && this._onAdd(b, d))
        },
        _onDrop: function(b) {
            b.dataTransfer = b.originalEvent && b.originalEvent.dataTransfer;
            var c = this,
                d = b.dataTransfer,
                f = {};
            d && d.files && d.files.length && (b.preventDefault(), this._getDroppedFiles(d).always(function(d) {
                f.files = d;
                !1 !== c._trigger("drop", a.Event("drop", {
                    delegatedEvent: b
                }), f) && c._onAdd(b, f)
            }))
        },
        _onDragOver: c("dragover"),
        _onDragEnter: c("dragenter"),
        _onDragLeave: c("dragleave"),
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            }));
            a.support.fileInput && this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop");
            this._off(this.options.pasteZone, "paste");
            this._off(this.options.fileInput, "change")
        },
        _setOption: function(b, c) {
            var d = -1 !== a.inArray(b, this._specialOptions);
            d && this._destroyEventHandlers();
            this._super(b, c);
            d && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var b =
                this.options;
            void 0 === b.fileInput ? b.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : b.fileInput instanceof a || (b.fileInput = a(b.fileInput));
            b.dropZone instanceof a || (b.dropZone = a(b.dropZone));
            b.pasteZone instanceof a || (b.pasteZone = a(b.pasteZone))
        },
        _getRegExp: function(a) {
            a = a.split("/");
            var c = a.pop();
            a.shift();
            return new RegExp(a.join("/"), c)
        },
        _isRegExpOption: function(b, c) {
            return "url" !== b && "string" === a.type(c) && /^\/.*\/[igm]{0,3}$/.test(c)
        },
        _initDataAttributes: function() {
            var b =
                this,
                c = this.options,
                d = a(this.element[0].cloneNode(!1)),
                f = d.data();
            d.remove();
            a.each(f, function(a, f) {
                var q = "data-" + a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                d.attr(q) && (b._isRegExpOption(a, f) && (f = b._getRegExp(f)), c[a] = f)
            })
        },
        _create: function() {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(!0);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers()
        },
        active: function() {
            return this._active
        },
        progress: function() {
            return this._progress
        },
        add: function(b) {
            var c = this;
            b && !this.options.disabled && (b.fileInput && !b.files ? this._getFileInputFiles(b.fileInput).always(function(a) {
                b.files = a;
                c._onAdd(null, b)
            }) : (b.files = a.makeArray(b.files), this._onAdd(null, b)))
        },
        send: function(b) {
            if (b && !this.options.disabled) {
                if (b.fileInput && !b.files) {
                    var c = this,
                        d = a.Deferred(),
                        f = d.promise(),
                        m, p;
                    f.abort = function() {
                        p = !0;
                        if (m) return m.abort();
                        d.reject(null, "abort", "abort");
                        return f
                    };
                    this._getFileInputFiles(b.fileInput).always(function(a) {
                        p || (a.length ? (b.files = a, m =
                            c._onSend(null, b), m.then(function(a, b, c) {
                                d.resolve(a, b, c)
                            }, function(a, b, c) {
                                d.reject(a, b, c)
                            })) : d.reject())
                    });
                    return this._enhancePromise(f)
                }
                b.files = a.makeArray(b.files);
                if (b.files.length) return this._onSend(null, b)
            }
            return this._getXHRPromise(!1, b && b.context)
        }
    })
});
"function" !== typeof Object.create && (Object.create = function(a) {
    function c() {}
    c.prototype = a;
    return new c
});
var NotyObject = {
    init: function(a) {
        this.options = $.extend({}, $.noty.defaults, a);
        this.options.layout = this.options.custom ? $.noty.layouts.inline : $.noty.layouts[this.options.layout];
        $.noty.themes[this.options.theme] ? this.options.theme = $.noty.themes[this.options.theme] : a.themeClassName = this.options.theme;
        delete a.layout;
        delete a.theme;
        this.options = $.extend({}, this.options, this.options.layout.options);
        this.options.id = "noty_" + (new Date).getTime() * Math.floor(1E6 * Math.random());
        this.options = $.extend({}, this.options,
            a);
        this._build();
        return this
    },
    _build: function() {
        var a = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
        a.append(this.options.template).find(".noty_text").html(this.options.text);
        this.$bar = null !== this.options.layout.parent.object ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append(a) : a;
        this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type);
        if (this.options.buttons) {
            this.options.closeWith = [];
            this.options.timeout = !1;
            a = $("<div/>").addClass("noty_buttons");
            null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(a) : this.$bar.append(a);
            var c = this;
            $.each(this.options.buttons, function(a, g) {
                var d = $("<button/>").addClass(g.addClass ? g.addClass : "gray").html(g.text).attr("id", g.id ? g.id : "button-" + a).appendTo(c.$bar.find(".noty_buttons")).on("click", function() {
                    $.isFunction(g.onClick) && g.onClick.call(d, c)
                })
            })
        }
        this.$message = this.$bar.find(".noty_message");
        this.$closeButton = this.$bar.find(".noty_close");
        this.$buttons = this.$bar.find(".noty_buttons");
        $.noty.store[this.options.id] = this
    },
    show: function() {
        var a = this;
        a.options.custom ? a.options.custom.find(a.options.layout.container.selector).append(a.$bar) : $(a.options.layout.container.selector).append(a.$bar);
        a.options.theme && a.options.theme.style && a.options.theme.style.apply(a);
        "function" === $.type(a.options.layout.css) ? this.options.layout.css.apply(a.$bar) : a.$bar.css(this.options.layout.css || {});
        a.$bar.addClass(a.options.layout.addClass);
        a.options.layout.container.style.apply($(a.options.layout.container.selector));
        a.showing = !0;
        a.options.theme && a.options.theme.style && a.options.theme.callback.onShow.apply(this);
        if (-1 < $.inArray("click", a.options.closeWith)) a.$bar.css("cursor", "pointer").one("click", function(c) {
            a.stopPropagation(c);
            a.options.callback.onCloseClick && a.options.callback.onCloseClick.apply(a);
            a.close()
        });
        if (-1 < $.inArray("hover", a.options.closeWith)) a.$bar.one("mouseenter", function() {
            a.close()
        });
        if (-1 < $.inArray("button", a.options.closeWith)) a.$closeButton.one("click", function(c) {
            a.stopPropagation(c);
            a.close()
        }); - 1 == $.inArray("button", a.options.closeWith) && a.$closeButton.remove();
        a.options.callback.onShow && a.options.callback.onShow.apply(a);
        "string" == typeof a.options.animation.open ? (a.$bar.css("height", a.$bar.innerHeight()), a.$bar.show().addClass(a.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            a.options.callback.afterShow && a.options.callback.afterShow.apply(a);
            a.showing = !1;
            a.shown = !0
        })) : a.$bar.animate(a.options.animation.open,
            a.options.animation.speed, a.options.animation.easing,
            function() {
                a.options.callback.afterShow && a.options.callback.afterShow.apply(a);
                a.showing = !1;
                a.shown = !0
            });
        a.options.timeout && a.$bar.delay(a.options.timeout).promise().done(function() {
            a.close()
        });
        return this
    },
    close: function() {
        if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
            var a = this;
            if (this.showing) a.$bar.queue(function() {
                a.close.apply(a)
            });
            else if (this.$bar.dequeue(), this.shown || this.showing)
                if (a.$bar.addClass("i-am-closing-now"),
                    a.options.callback.onClose && a.options.callback.onClose.apply(a), "string" == typeof a.options.animation.close) a.$bar.addClass(a.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    a.options.callback.afterClose && a.options.callback.afterClose.apply(a);
                    a.closeCleanUp()
                });
                else a.$bar.clearQueue().stop().animate(a.options.animation.close, a.options.animation.speed, a.options.animation.easing, function() {
                    a.options.callback.afterClose && a.options.callback.afterClose.apply(a)
                }).promise().done(function() {
                    a.closeCleanUp()
                });
            else {
                var c = [];
                $.each($.noty.queue, function(b, g) {
                    g.options.id != a.options.id && c.push(g)
                });
                $.noty.queue = c
            }
        }
    },
    closeCleanUp: function() {
        var a = this;
        a.options.modal && ($.notyRenderer.setModalCount(-1), 0 == $.notyRenderer.getModalCount() && $(".noty_modal").fadeOut("fast", function() {
            $(this).remove()
        }));
        $.notyRenderer.setLayoutCountFor(a, -1);
        0 == $.notyRenderer.getLayoutCountFor(a) && $(a.options.layout.container.selector).remove();
        "undefined" !== typeof a.$bar && null !== a.$bar && ("string" == typeof a.options.animation.close ?
            (a.$bar.css("transition", "all 100ms ease").css("border", 0).css("margin", 0).height(0), a.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                a.$bar.remove();
                a.$bar = null;
                a.closed = !0;
                a.options.theme.callback && a.options.theme.callback.onClose && a.options.theme.callback.onClose.apply(a)
            })) : (a.$bar.remove(), a.$bar = null, a.closed = !0));
        delete $.noty.store[a.options.id];
        a.options.theme.callback && a.options.theme.callback.onClose && a.options.theme.callback.onClose.apply(a);
        a.options.dismissQueue ||
            ($.noty.ontap = !0, $.notyRenderer.render());
        0 < a.options.maxVisible && a.options.dismissQueue && $.notyRenderer.render()
    },
    setText: function(a) {
        this.closed || (this.options.text = a, this.$bar.find(".noty_text").html(a));
        return this
    },
    setType: function(a) {
        this.closed || (this.options.type = a, this.options.theme.style.apply(this), this.options.theme.callback.onShow.apply(this));
        return this
    },
    setTimeout: function(a) {
        if (!this.closed) {
            var c = this;
            this.options.timeout = a;
            c.$bar.delay(c.options.timeout).promise().done(function() {
                c.close()
            })
        }
        return this
    },
    stopPropagation: function(a) {
        a = a || window.event;
        "undefined" !== typeof a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    },
    closed: !1,
    showing: !1,
    shown: !1
};
$.notyRenderer = {};
$.notyRenderer.init = function(a) {
    a = Object.create(NotyObject).init(a);
    a.options.killer && $.noty.closeAll();
    a.options.force ? $.noty.queue.unshift(a) : $.noty.queue.push(a);
    $.notyRenderer.render();
    return "object" == $.noty.returns ? a : a.options.id
};
$.notyRenderer.render = function() {
    var a = $.noty.queue[0];
    "object" === $.type(a) ? a.options.dismissQueue ? 0 < a.options.maxVisible ? $(a.options.layout.container.selector + " li").length < a.options.maxVisible && $.notyRenderer.show($.noty.queue.shift()) : $.notyRenderer.show($.noty.queue.shift()) : $.noty.ontap && ($.notyRenderer.show($.noty.queue.shift()), $.noty.ontap = !1) : $.noty.ontap = !0
};
$.notyRenderer.show = function(a) {
    a.options.modal && ($.notyRenderer.createModalFor(a), $.notyRenderer.setModalCount(1));
    a.options.custom ? 0 == a.options.custom.find(a.options.layout.container.selector).length ? a.options.custom.append($(a.options.layout.container.object).addClass("i-am-new")) : a.options.custom.find(a.options.layout.container.selector).removeClass("i-am-new") : 0 == $(a.options.layout.container.selector).length ? $("body").append($(a.options.layout.container.object).addClass("i-am-new")) : $(a.options.layout.container.selector).removeClass("i-am-new");
    $.notyRenderer.setLayoutCountFor(a, 1);
    a.show()
};
$.notyRenderer.createModalFor = function(a) {
    if (0 == $(".noty_modal").length) {
        var c = $("<div/>").addClass("noty_modal").addClass(a.options.theme).data("noty_modal_count", 0);
        a.options.theme.modal && a.options.theme.modal.css && c.css(a.options.theme.modal.css);
        c.prependTo($("body")).fadeIn("fast");
        if (-1 < $.inArray("backdrop", a.options.closeWith)) c.on("click", function(a) {
            $.noty.closeAll()
        })
    }
};
$.notyRenderer.getLayoutCountFor = function(a) {
    return $(a.options.layout.container.selector).data("noty_layout_count") || 0
};
$.notyRenderer.setLayoutCountFor = function(a, c) {
    return $(a.options.layout.container.selector).data("noty_layout_count", $.notyRenderer.getLayoutCountFor(a) + c)
};
$.notyRenderer.getModalCount = function() {
    return $(".noty_modal").data("noty_modal_count") || 0
};
$.notyRenderer.setModalCount = function(a) {
    return $(".noty_modal").data("noty_modal_count", $.notyRenderer.getModalCount() + a)
};
$.fn.noty = function(a) {
    a.custom = $(this);
    return $.notyRenderer.init(a)
};
$.noty = {};
$.noty.queue = [];
$.noty.ontap = !0;
$.noty.layouts = {};
$.noty.themes = {};
$.noty.returns = "object";
$.noty.store = {};
$.noty.get = function(a) {
    return $.noty.store.hasOwnProperty(a) ? $.noty.store[a] : !1
};
$.noty.close = function(a) {
    return $.noty.get(a) ? $.noty.get(a).close() : !1
};
$.noty.setText = function(a, c) {
    return $.noty.get(a) ? $.noty.get(a).setText(c) : !1
};
$.noty.setType = function(a, c) {
    return $.noty.get(a) ? $.noty.get(a).setType(c) : !1
};
$.noty.clearQueue = function() {
    $.noty.queue = []
};
$.noty.closeAll = function() {
    $.noty.clearQueue();
    $.each($.noty.store, function(a, c) {
        c.close()
    })
};
var windowAlert = window.alert;
$.noty.consumeAlert = function(a) {
    window.alert = function(c) {
        a ? a.text = c : a = {
            text: c
        };
        $.notyRenderer.init(a)
    }
};
$.noty.stopConsumeAlert = function() {
    window.alert = windowAlert
};
$.noty.defaults = {
    layout: "top",
    theme: "defaultTheme",
    type: "alert",
    text: "",
    dismissQueue: !0,
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    animation: {
        open: {
            height: "toggle"
        },
        close: {
            height: "toggle"
        },
        easing: "swing",
        speed: 500
    },
    timeout: !1,
    force: !1,
    modal: !1,
    maxVisible: 5,
    killer: !1,
    closeWith: ["click"],
    callback: {
        onShow: function() {},
        afterShow: function() {},
        onClose: function() {},
        afterClose: function() {},
        onCloseClick: function() {}
    },
    buttons: !1
};
$(window).on("resize", function() {
    $.each($.noty.layouts, function(a, c) {
        c.container.style.apply($(c.container.selector))
    })
});
window.noty = function(a) {
    return jQuery.notyRenderer.init(a)
};
$.noty.layouts.top = {
    name: "top",
    options: {},
    container: {
        object: '<ul id="noty_top_layout_container" />',
        selector: "ul#noty_top_layout_container",
        style: function() {
            $(this).css({
                top: 0,
                left: "5%",
                position: "fixed",
                width: "90%",
                height: "auto",
                margin: 0,
                padding: 0,
                listStyleType: "none",
                zIndex: 9999999
            })
        }
    },
    parent: {
        object: "<li />",
        selector: "li",
        css: {}
    },
    css: {
        display: "none"
    },
    addClass: ""
};
(function(a) {
    function c(a) {
        this.init(a)
    }
    c.prototype = {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {
            gradient: ["#3aeabb", "#fdd250"]
        },
        emptyFill: "rgba(0, 0, 0, .1)",
        animation: {
            duration: 1200,
            easing: "circleProgressEasing"
        },
        animationStartValue: 0,
        reverse: !1,
        lineCap: "butt",
        constructor: c,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0,
        arcFill: null,
        lastFrameValue: 0,
        init: function(b) {
            a.extend(this, b);
            this.radius = this.size / 2;
            this.initWidget();
            this.initFill();
            this.draw()
        },
        initWidget: function() {
            var b = this.canvas =
                this.canvas || a("<canvas>").prependTo(this.el)[0];
            b.width = this.size;
            b.height = this.size;
            this.ctx = b.getContext("2d")
        },
        initFill: function() {
            function b() {
                var b = a("<canvas>")[0];
                b.width = c.size;
                b.height = c.size;
                b.getContext("2d").drawImage(u, 0, 0, m, m);
                c.arcFill = c.ctx.createPattern(b, "no-repeat");
                c.drawFrame(c.lastFrameValue)
            }
            var c = this,
                d = this.fill,
                f = this.ctx,
                m = this.size;
            if (!d) throw Error("The fill is not specified!");
            d.color && (this.arcFill = d.color);
            if (d.gradient) {
                var p = d.gradient;
                if (1 == p.length) this.arcFill =
                    p[0];
                else if (1 < p.length) {
                    for (var q = d.gradientAngle || 0, q = d.gradientDirection || [m / 2 * (1 - Math.cos(q)), m / 2 * (1 + Math.sin(q)), m / 2 * (1 + Math.cos(q)), m / 2 * (1 - Math.sin(q))], f = f.createLinearGradient.apply(f, q), q = 0; q < p.length; q++) {
                        var s = p[q],
                            v = q / (p.length - 1);
                        a.isArray(s) && (v = s[1], s = s[0]);
                        f.addColorStop(v, s)
                    }
                    this.arcFill = f
                }
            }
            if (d.image) {
                var u;
                d.image instanceof Image ? u = d.image : (u = new Image, u.src = d.image);
                u.complete ? b() : u.onload = b
            }
        },
        draw: function() {
            this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
        },
        drawFrame: function(a) {
            this.lastFrameValue = a;
            this.ctx.clearRect(0, 0, this.size, this.size);
            this.drawEmptyArc(a);
            this.drawArc(a)
        },
        drawArc: function(a) {
            var c = this.ctx,
                d = this.radius,
                f = this.getThickness(),
                m = this.startAngle;
            c.save();
            c.beginPath();
            this.reverse ? c.arc(d, d, d - f / 2, m - 2 * Math.PI * a, m) : c.arc(d, d, d - f / 2, m, m + 2 * Math.PI * a);
            c.lineWidth = f;
            c.lineCap = this.lineCap;
            c.strokeStyle = this.arcFill;
            c.stroke();
            c.restore()
        },
        drawEmptyArc: function(a) {
            var c = this.ctx,
                d = this.radius,
                f = this.getThickness(),
                m = this.startAngle;
            1 >
                a && (c.save(), c.beginPath(), 0 >= a ? c.arc(d, d, d - f / 2, 0, 2 * Math.PI) : this.reverse ? c.arc(d, d, d - f / 2, m, m - 2 * Math.PI * a) : c.arc(d, d, d - f / 2, m + 2 * Math.PI * a, m), c.lineWidth = f, c.strokeStyle = this.emptyFill, c.stroke(), c.restore())
        },
        drawAnimated: function(b) {
            var c = this,
                d = this.el;
            d.trigger("circle-animation-start");
            a(this.canvas).stop(!0, !0).css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, a.extend({}, this.animation, {
                step: function(a) {
                    var m = c.animationStartValue * (1 - a) + b * a;
                    c.drawFrame(m);
                    d.trigger("circle-animation-progress", [a, m])
                },
                complete: function() {
                    d.trigger("circle-animation-end")
                }
            }))
        },
        getThickness: function() {
            return a.isNumeric(this.thickness) ? this.thickness : this.size / 14
        }
    };
    a.circleProgress = {
        defaults: c.prototype
    };
    a.easing.circleProgressEasing = function(a, c, d, f, m) {
        return 1 > (c /= m / 2) ? f / 2 * c * c * c + d : f / 2 * ((c -= 2) * c * c + 2) + d
    };
    a.fn.circleProgress = function(b) {
        if ("widget" == b) {
            var g = this.data("circle-progress");
            return g && g.canvas
        }
        return this.each(function() {
            var d = a(this),
                f = d.data("circle-progress"),
                g = a.isPlainObject(b) ? b : {};
            f ? f.init(g) :
                (g.el = d, f = new c(g), d.data("circle-progress", f))
        })
    }
})(jQuery);
var SocketData = Backbone.Model.extend({
    connectionView: null,
    _socket: null,
    _autoReconnectTrial: 0,
    _nextReconnectAttempt: null,
    _autoReconnectTimeouts: [1, 1, 2, 3, 5, 8, 13, 20, 40, 100],
    currentState: 0,
    loggedUser: LOGGED_USER,
    defaults: {
        online: !1,
        printing: !1,
        paused: !1,
        camera: !1,
        printing_progress: {
            percent: 0,
            time_left: 0
        },
        temps: {
            bed: {
                actual: 0,
                target: 0
            },
            extruder: {
                actual: 0,
                target: 0
            }
        },
        astroprint: {
            status: null
        },
        printer: {
            status: null
        },
        print_capture: null
    },
    initialize: function() {
        this.set("printing", initial_states.printing);
        this.set("paused",
            initial_states.paused);
        this.set("online", initial_states.online);
        this.set("print_capture", initial_states.print_capture)
    },
    connect: function() {
        this.connectionView.setServerConnection("blink-animation");
        var a = {};
        SOCKJS_DEBUG && (a.debug = !0);
        this._socket = new SockJS(SOCKJS_URI, void 0, a);
        this._socket.onopen = _.bind(this._onConnect, this);
        this._socket.onclose = _.bind(this._onClose, this);
        this._socket.onmessage = _.bind(this._onMessage, this)
    },
    reconnect: function() {
        this._socket.close();
        delete this._socket;
        this.connect()
    },
    _onConnect: function() {
        this._nextReconnectAttempt && (clearTimeout(this._nextReconnectAttempt), this._nextReconnectAttempt = null);
        this._autoReconnectTrial = 0;
        this.connectionView.setServerConnection("connected")
    },
    _onClose: function(a) {
        1E3 != a.code && (this.connectionView.setServerConnection("failed"), this.connectionView.setPrinterConnection("failed"), this.connectionView.setAstroprintConnection("failed"), this._currentState = 0, this._autoReconnectTrial < this._autoReconnectTimeouts.length ? (a = this._autoReconnectTimeouts[this._autoReconnectTrial],
            console.log("Reconnect trial #" + this._autoReconnectTrial + ", waiting " + a + "s"), this._nextReconnectAttempt = setTimeout(_.bind(this.reconnect, this), 1E3 * a), this._autoReconnectTrial++) : this._onReconnectFailed())
    },
    _onReconnectFailed: function() {
        console.error("reconnect failed")
    },
    _onMessage: function(a) {
        for (var c in a.data) {
            var b = a.data[c];
            switch (c) {
                case "connected":
                    UI_API_KEY = b.apikey;
                    $.ajaxSetup({
                        headers: {
                            "X-Api-Key": UI_API_KEY
                        }
                    });
                    this.connectionView.connect();
                    break;
                case "current":
                    var g = b.state.flags;
                    if (b.temps.length) {
                        var d =
                            b.temps[b.temps.length - 1];
                        this.set("temps", {
                            bed: d.bed,
                            extruder: d.tool0
                        })
                    }
                    if (b.state && b.state.text != this.currentState) {
                        this.currentState = b.state.text;
                        var d = "blink-animation",
                            f = "connecting";
                        g.error ? f = d = "failed" : g.operational && (f = d = "connected");
                        this.connectionView.setPrinterConnection(d);
                        this.set("printer", {
                            status: f
                        })
                    }
                    g.paused || this.set("printing", g.printing);
                    this.set("paused", g.paused);
                    this.set("camera", g.camera);
                    g.printing && (d = b.progress, this.set("printing_progress", {
                        filename: b.job.file.name,
                        rendered_image: b.job.file.rendered_image,
                        layer_count: b.job.layerCount,
                        current_layer: d.currentLayer,
                        percent: d.completion ? d.completion.toFixed(1) : 0,
                        time_left: b.progress.printTimeLeft,
                        time_elapsed: d.printTime ? d.printTime : 0,
                        heating_up: g.heatingUp
                    }));
                    break;
                case "event":
                    switch (g = b.type, b = b.payload, g) {
                        case "MetadataAnalysisFinished":
                            app.eventManager.trigger("astrobox:MetadataAnalysisFinished", b);
                            break;
                        case "CloudDownloadEvent":
                            app.eventManager.trigger("astrobox:cloudDownloadEvent", b);
                            break;
                        case "AstroPrintStatus":
                            switch (b) {
                                case "connecting":
                                    this.connectionView.setAstroprintConnection("blink-animation");
                                    break;
                                case "connected":
                                    this.connectionView.setAstroprintConnection("connected");
                                    break;
                                case "disconnected":
                                case "error":
                                    this.connectionView.setAstroprintConnection("failed");
                                    break;
                                default:
                                    console.log("astroprintStatus unkonwn event: " + b)
                            }
                            this.set("astroprint", {
                                status: b
                            });
                            break;
                        case "LockStatusChanged":
                            b != this.loggedUser && location.reload();
                            break;
                        case "PrintCaptureInfoChanged":
                            this.set("print_capture", b);
                            break;
                        case "NetworkStatus":
                            this.set("online", "online" == b);
                            break;
                        default:
                            console.warn("Unkonwn event received: " +
                                g)
                    }
            }
        }
    }
});
var PrintFile = Backbone.Model.extend({
        defaults: {
            name: "",
            images: []
        }
    }),
    PrintFileCollection = Backbone.Collection.extend({
        model: PrintFile,
        url: API_BASEURL + "astroprint/print-files",
        syncCloud: function(a) {
            a || (a = {});
            a.data = {
                forceSyncCloud: !0
            };
            this.fetch(a)
        }
    });
var PrinterProfile = Backbone.Model.extend({
    url: API_BASEURL + "printer-profile",
    defaults: {
        id: "profile",
        extruder_count: 1,
        max_nozzle_temp: 280,
        max_bed_temp: 140,
        heated_bed: !0
    }
});
var Utils = function() {
    var a = "Jan Feb Mar Apr May Jun Jul Aug Sep Nov Oct Dec".split(" ");
    return {
        timeFormat: function(a) {
            if (isNaN(a)) return "-- : -- : --";
            a = parseInt(a, 10);
            var b = Math.floor(a / 3600),
                g = Math.floor((a - 3600 * b) / 60);
            a = a - 3600 * b - 60 * g;
            10 > b && (b = "0" + b);
            10 > g && (g = "0" + g);
            10 > a && (a = "0" + a);
            return b + ":" + g + ":" + a
        },
        dateFormat: function(c) {
            return a[c.getMonth()] + " " + c.getDate() + ", " + c.getFullYear()
        },
        sizeFormat: function(a) {
            var b = -1;
            do a /= 1024, b++; while (1024 < a);
            return Math.max(a, .1).toFixed(1) + " kB; MB; GB; TB;PB;EB;ZB;YB".split(";")[b]
        }
    }
};
var TempBarView = Backbone.View.extend({
    containerDimensions: null,
    scale: null,
    type: null,
    dragging: !1,
    lastSent: null,
    lastSentTimestamp: null,
    waitAfterSent: 2E3,
    events: {
        "touchstart .temp-target span.label": "onTouchStart",
        "mousedown .temp-target span.label": "onTouchStart",
        touchmove: "onTouchMove",
        mousemove: "onTouchMove",
        "touchend .temp-target": "onTouchEnd",
        "mouseup .temp-target": "onTouchEnd",
        "mouseout .temp-target": "onTouchEnd",
        "click .temp-target a.temp-edit": "onEditClicked",
        "change .temp-target input": "onTempFieldChanged",
        "blur .temp-target input": "onTempFieldBlur"
    },
    initialize: function(a) {
        this.scale = a.scale;
        this.type = a.type;
        $(window).bind("resize.app", _.bind(this.onResize, this))
    },
    remove: function() {
        $(window).unbind("resize.app");
        Backbone.View.prototype.remove.call(this)
    },
    turnOff: function(a) {
        this._sendToolCommand("target", this.type, 0);
        this.setHandle(0)
    },
    setMax: function(a) {
        if (this.scale[1] != a) {
            this.scale[1] = a;
            this.onResize();
            var c = parseInt(this.$el.find(".temp-target span.label").text());
            isNaN(c) || this.setHandle(Math.min(c,
                a))
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.dragging = !0;
        $(a.currentTarget).closest(".temp-target").addClass("moving")
    },
    onTouchEnd: function(a) {
        a.preventDefault();
        a.stopPropagation();
        $(a.currentTarget).removeClass("moving");
        this._sendToolCommand("target", this.type, this.$el.find(".temp-target span.label").text());
        this.dragging = !1
    },
    onEditClicked: function(a) {
        a.preventDefault();
        a.stopPropagation();
        a = $(a.target).closest(".temp-target");
        var c = a.find("span.label");
        c.addClass("hide");
        a.find("input").removeClass("hide").val(c.text()).focus()
    },
    onTempFieldChanged: function(a) {
        a = $(a.target);
        var c = a.val();
        c == this.lastSent || isNaN(c) || (c = Math.min(Math.max(c, this.scale[0]), this.scale[1]), this._sendToolCommand("target", this.type, c), a.blur(), this.setHandle(c))
    },
    onTempFieldBlur: function(a) {
        a = $(a.target);
        a.addClass("hide");
        a.closest(".temp-target").find("span.label").removeClass("hide")
    },
    _sendToolCommand: function(a, c, b, g, d) {
        if (b != this.lastSent) {
            var f = {
                command: a
            };
            if ("bed" == c) {
                if ("target" ==
                    a) f.target = parseInt(b);
                else if ("offset" == a) f.offset = parseInt(b);
                else return;
                c = "bed"
            } else {
                if ("target" == a) a = "targets";
                else if ("offset" == a) a = "offsets";
                else return;
                f[a] = {};
                f[a][c] = parseInt(b);
                c = "tool"
            }
            $.ajax({
                url: API_BASEURL + "printer/" + c,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(f),
                success: function() {
                    void 0 !== g && g()
                },
                error: function() {
                    void 0 !== d && d()
                }
            });
            this.lastSentTimestamp = (new Date).getTime();
            this.lastSent = b
        }
    },
    setTemps: function(a, c) {
        var b = (new Date).getTime();
        null !== this.lastSent && this.lastSentTimestamp > b - this.waitAfterSent && (c = this.lastSent);
        isNaN(a) && (a = null);
        isNaN(c) && (c = null);
        this.renderTemps(a, c)
    },
    setHandle: function(a) {},
    onTouchMove: function(a) {},
    onClicked: function(a) {},
    onResize: function() {},
    renderTemps: function(a, c) {},
    _temp2px: function(a) {},
    _px2temp: function(a) {}
});
var FileUploadBase = Backbone.View.extend({
        events: {
            fileuploadadd: "onFileAdded",
            fileuploadsubmit: "onFileSubmit",
            fileuploadprogress: "onUploadProgress",
            fileuploadfail: "onUploadFail",
            fileuploadalways: "onUploadAlways",
            fileuploaddone: "onUploadDone"
        },
        acceptFileTypes: null,
        signatureUrl: null,
        signatureData: {},
        uploadUrl: null,
        uploadData: {},
        initialize: function(a) {
            this.$el.fileupload()
        },
        beforeSubmit: function(a, c) {
            if (this.signatureUrl) {
                this.progress(1);
                var b = this.signatureData;
                _.extend(b, {
                    file: c.files[0].name
                });
                var g = [];
                _.each(b, function(a, b) {
                    g.push(b + "=" + encodeURIComponent(a))
                });
                $.getJSON(this.signatureUrl + "?" + g.join("&"), _.bind(function(b) {
                    b.url && b.params ? (c.formData = b.params, c.url = b.url, c.redirect = b.redirect, this.progress(2), $(a.currentTarget).fileupload("send", c)) : (this.failed("There was an error getting upload parameters (1)."), this.always())
                }, this)).fail(_.bind(function(a) {
                    this.failed("There was an error getting upload parameters (2).");
                    this.always()
                }, this))
            } else this.progress(1), $(a.currentTarget).fileupload("send",
                c);
            return !1
        },
        onFileAdded: function(a, c) {
            if (this.acceptFileTypes) {
                var b = [],
                    g = this.acceptFileTypes;
                c.originalFiles[0].name.length && !g.test(c.originalFiles[0].name) && b.push("Not a valid file");
                return 0 < b.length ? (this.failed("There was an error uploading: " + b.join("<br/>")), this.always(), !1) : !0
            }
            console.error("acceptFileTypes not set")
        },
        onFileSubmit: function(a, c) {
            c.files.length && (this.started(c), this.progress(0), this.signatureUrl || (c.url = this.uploadUrl, c.formData = this.uploadData), this.beforeSubmit(a, c) &&
                $(a.currentTarget).fileupload("send", c));
            return !1
        },
        onUploadProgress: function(a, c) {
            this.progress(Math.max(c.loaded / c.total * 95, 2))
        },
        onUploadFail: function(a, c) {
            this.failed("There was an error uploading your file: " + c.errorThrown)
        },
        onUploadAlways: function(a, c) {
            this.always()
        },
        onUploadDone: function(a, c) {
            this.success(c)
        },
        started: function(a) {},
        progress: function(a) {},
        failed: function(a) {},
        success: function(a) {},
        always: function() {}
    }),
    FileUploadCombined = FileUploadBase.extend({
        fileTypes: {
            design: ["stl"],
            print: ["x3g",
                "gcode", "gco"
            ]
        },
        currentFileType: null,
        initialize: function(a) {
            FileUploadBase.prototype.initialize.call(this, a);
            this.refreshAccept()
        },
        refreshAccept: function() {
            "s3g" == app.printerProfile.get("driver") ? (this.$el.attr("accept", ".stl, .x3g"), this.acceptFileTypes = /(\.|\/)(stl|x3g)$/i) : (this.$el.attr("accept", ".stl, .gcode, .gco"), this.acceptFileTypes = /(\.|\/)(stl|gcode|gco)$/i)
        },
        started: function(a) {
            if (a.files && 0 < a.files.length) {
                a = a.files[0].name;
                var c = a.substr(a.lastIndexOf(".") + 1);
                this.currentFileType = _.findKey(this.fileTypes,
                    function(a, g) {
                        return void 0 != _.find(a, function(a) {
                            return a == c
                        })
                    });
                if (void 0 == this.currentFileType) this.currentFileType = null, this.failed("File Type [" + c + "] not supported");
                else switch (this.currentFileType) {
                    case "design":
                        this.uploadUrl = null;
                        this.signatureUrl = "/api/astroprint/upload-data";
                        this.signatureData = {
                            file: a
                        };
                        break;
                    case "print":
                        this.signatureUrl = null, this.signatureData = {}, this.uploadUrl = "/api/files/local"
                }
            }
        },
        success: function(a) {
            switch (this.currentFileType) {
                case "design":
                    this.progress(98);
                    a.redirect ?
                        window.location.href = a.redirect : this.failed("Missing redirect url");
                    break;
                case "print":
                    this.progress(100), noty({
                        text: "Fichero subido correctamente",
                        type: "success",
                        timeout: 3E3
                    }), app.router.navigate("files", {
                        trigger: !0,
                        replace: !0
                    }), app.router.filesView.refreshPrintFiles(!0), app.router.filesView.printFilesListView.storage_control_view.selectStorage("local")
            }
        }
    });
var FileUploadDashboard = FileUploadCombined.extend({
        container: null,
        circleProgress: null,
        initialize: function(a) {
            FileUploadCombined.prototype.initialize.call(this, a);
            this.container = this.$el.closest(".upload-btn")
        },
        render: function() {
            this.refreshAccept()
        },
        started: function(a) {
            if (a.files && 0 < a.files.length && (this.container.addClass("uploading"), FileUploadCombined.prototype.started.call(this, a), null === this.circleProgress)) {
                var c = this.container.find(".app-image");
                this.circleProgress = this.container.find(".progress").circleProgress({
                    value: 0,
                    animation: !1,
                    size: c.innerWidth() - 12,
                    fill: {
                        color: "white"
                    }
                });
                $(window).bind("resize", _.bind(function() {
                    this.container.hasClass("uploading") && this.circleProgress.circleProgress({
                        size: c.innerWidth() - 12
                    })
                }, this))
            }
        },
        progress: function(a) {
            this.container.find(".progress span").html(Math.round(a) + "<i>%</i>");
            this.circleProgress.circleProgress({
                value: a / 100
            })
        },
        failed: function(a) {
            this.container.addClass("failed").removeClass("uploading");
            setTimeout(_.bind(function() {
                    this.container.removeClass("failed")
                }, this),
                3E3);
            console.error(a)
        },
        success: function(a) {
            FileUploadCombined.prototype.success.call(this, a);
            "design" != this.currentFileType && this.container.removeClass("uploading")
        }
    }),
    HomeView = Backbone.View.extend({
        el: "#home-view",
        uploadBtn: null,
        events: {
            show: "onShow"
        },
        initialize: function() {
            this.uploadBtn = new FileUploadDashboard({
                el: "#home-view #app-container .upload-btn .file-upload"
            })
        },
        onShow: function() {
            this.uploadBtn.refreshAccept()
        }
    });
var PrintFileInfoDialog = Backbone.View.extend({
        el: "#print-file-info",
        file_list_view: null,
        template: _.template($("#printfile-info-template").html()),
        print_file_view: null,
        events: {
            "click .actions a.remove": "onDeleteClicked",
            "click .actions a.print": "onPrintClicked",
            "click .actions a.download": "onDownloadClicked"
        },
        initialize: function(a) {
            this.file_list_view = a.file_list_view
        },
        render: function() {
            this.$el.find(".dlg-content").html(this.template({
                p: this.print_file_view.print_file.toJSON(),
                time_format: app.utils.timeFormat
            }))
        },
        open: function(a) {
            this.print_file_view = a;
            this.render();
            this.$el.foundation("reveal", "open")
        },
        onDeleteClicked: function(a) {
            a.preventDefault();
            var c = this.print_file_view.print_file;
            if (c) {
                var b = c.get("local_filename");
                c.get("id");
                var g = $(a.currentTarget).closest(".loading-button");
                g.addClass("loading");
                $.ajax({
                    url: "/api/files/local/" + b,
                    type: "DELETE",
                    success: _.bind(function() {
                        c.get("local_only") ? this.file_list_view.file_list.remove(c) : c.set("local_filename", !1);
                        noty({
                            text: b + " borrado de tu " + PRODUCT_NAME,
                            type: "success",
                            timeout: 3E3
                        });
                        this.print_file_view.render();
                        this.$el.foundation("reveal", "close")
                    }, this),
                    error: function() {
                        noty({
                            text: "Error al eliminar " + b,
                            timeout: 3E3
                        })
                    },
                    always: function() {
                        g.removeClass("loading")
                    }
                })
            }
        },
        onPrintClicked: function(a) {
            this.print_file_view.printClicked(a);
            this.$el.foundation("reveal", "close")
        },
        onDownloadClicked: function(a) {
            this.print_file_view.downloadClicked(a);
            this.$el.foundation("reveal", "close")
        }
    }),
    FileUploadFiles = FileUploadCombined.extend({
        progressBar: null,
        buttonContainer: null,
        initialize: function(a) {
            this.progressBar = a.progressBar;
            this.buttonContainer = a.buttonContainer;
            FileUploadCombined.prototype.initialize.call(this, a)
        },
        started: function(a) {
            a.files && 0 < a.files.length && (this.buttonContainer.hide(), this.progressBar.show(), FileUploadCombined.prototype.started.call(this, a))
        },
        progress: function(a, c) {
            var b = Math.round(a);
            this.progressBar.find(".meter").css("width", b + "%");
            c || (c = "Uploading (" + b + "%)");
            this.progressBar.find(".progress-message span").text(c)
        },
        failed: function(a) {
            noty({
                text: a,
                timeout: 3E3
            })
        },
        success: function(a) {
            FileUploadCombined.prototype.success.call(this, a)
        },
        always: function() {
            "print" == this.currentFileType && (this.progressBar.hide(), this.buttonContainer.show(), this.progress(0))
        }
    }),
    UploadView = Backbone.View.extend({
        uploadBtn: null,
        progressBar: null,
        buttonContainer: null,
        initialize: function() {
            this.progressBar = this.$(".upload-progress");
            this.buttonContainer = this.$(".upload-buttons");
            this.uploadBtn = new FileUploadFiles({
                el: "#files-view .file-upload-view .file-upload",
                progressBar: this.$(".upload-progress"),
                buttonContainer: this.$(".file-upload-button")
            });
            this.render()
        },
        render: function() {
            var a = this.$(".file-upload-button");
            "s3g" == app.printerProfile.get("driver") ? (a.find(".extensions").text("stl, x3g"), a.find("input").attr("accept", ".stl, .x3g")) : (a.find(".extensions").text("stl, gcode"), a.find("input").attr("accept", ".stl, .gcode, .gco"));
            this.uploadBtn.refreshAccept()
        }
    }),
    PrintFileView = Backbone.View.extend({
        template: _.template($("#print-file-template").html()),
        print_file: null,
        list: null,
        printWhenDownloaded: !1,
        downloadProgress: null,
        initialize: function(a) {
            this.list = a.list;
            this.print_file = a.print_file
        },
        render: function() {
            var a = this.print_file.toJSON();
            a.local_filename ? this.$el.removeClass("remote") : this.$el.addClass("remote");
            this.$el.empty();
            this.downloadProgress = null;
            this.$el.html(this.template({
                p: a,
                time_format: app.utils.timeFormat,
                size_format: app.utils.sizeFormat
            }));
            this.delegateEvents({
                "click .left-section, .middle-section": "infoClicked",
                "click a.print": "printClicked",
                "click a.download": "downloadClicked",
                "click a.dw-cancel": "cancelDownloadClicked"
            })
        },
        infoClicked: function(a) {
            a && a.preventDefault();
            this.list.info_dialog.open(this)
        },
        downloadClicked: function(a) {
            a && a.preventDefault();
            $.getJSON("/api/astroprint/print-files/" + this.print_file.get("id") + "/download").fail(function() {
                noty({
                    text: "No se pudo descargar el fichero de impresión.",
                    timeout: 3E3
                })
            })
        },
        cancelDownloadClicked: function(a) {
            a.preventDefault();
            $.ajax({
                url: "/api/astroprint/print-files/" + this.print_file.get("id") + "/download",
                method: "DELETE"
            }).fail(function() {
                noty({
                    text: "No se pudo cancelar la descarga.",
                    timeout: 3E3
                })
            })
        },
        printClicked: function(a) {
            a && a.preventDefault();
            if (a = this.print_file.get("local_filename")) {
                var c = this.$(".loading-button.print");
                c.addClass("loading");
                $.ajax({
                    url: "/api/files/local/" + a,
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify({
                        command: "select",
                        print: !0
                    })
                }).done(_.bind(function() {
                    setTimeout(function() {
                        c.removeClass("loading")
                    }, 2E3)
                }, this)).fail(function(a) {
                    var g = null;
                    409 == a.status && (g = a.responseText);
                    noty({
                        text: g ? g : "Hubo un error al comenzar la impresión",
                        timeout: 3E3
                    });
                    c.removeClass("loading")
                })
            } else this.printWhenDownloaded = !0, this.downloadClicked()
        }
    }),
    StorageControlView = Backbone.View.extend({
        print_file_view: null,
        events: {
            "click a.local": "localClicked",
            "click a.cloud": "cloudClicked"
        },
        selected: null,
        initialize: function(a) {
            this.print_file_view = a.print_file_view
        },
        selectStorage: function(a) {
            this.$("a.active").removeClass("active");
            this.$("a." + a).addClass("active");
            this.selected = a;
            this.print_file_view.render()
        },
        localClicked: function(a) {
            a.preventDefault();
            this.selectStorage("local")
        },
        cloudClicked: function(a) {
            a.preventDefault();
            LOGGED_USER ? this.selectStorage("cloud") : $("#login-modal").foundation("reveal", "open")
        }
    }),
    PrintFilesListView = Backbone.View.extend({
        info_dialog: null,
        print_file_views: [],
        storage_control_view: null,
        file_list: null,
        refresh_threshold: 1E3,
        last_refresh: 0,
        events: {
            "click .list-header button.sync": "forceSync"
        },
        initialize: function(a) {
            this.file_list = new PrintFileCollection;
            this.info_dialog = new PrintFileInfoDialog({
                file_list_view: this
            });
            this.storage_control_view =
                new StorageControlView({
                    el: this.$(".list-header ul.storage"),
                    print_file_view: this
                });
            app.eventManager.on("astrobox:cloudDownloadEvent", this.downloadProgress, this);
            app.eventManager.on("astrobox:MetadataAnalysisFinished", _.bind(this.onMetadataAnalysisFinished, this));
            this.listenTo(this.file_list, "remove", this.onFileRemoved);
            this.refresh(a.forceSync, a.syncCompleted)
        },
        render: function() {
            var a = this.$(".design-list-container"),
                c = this.storage_control_view.selected;
            a.children().detach();
            var b = c ? _.filter(this.print_file_views,
                function(a) {
                    if ("local" == c) {
                        if (a.print_file.get("local_filename")) return !0
                    } else if (!a.print_file.get("local_only")) return !0;
                    return !1
                }) : this.print_file_views;
            b.length ? _.each(b, function(b) {
                a.append(b.$el)
            }) : a.html('<div class="empty panel radius" align="center">\t<i class="icon-inbox empty-icon"></i>\t<h3>Aún no hay nada aquí.</h3></div>')
        },
        refresh: function(a, c) {
            var b = (new Date).getTime();
            if (this.last_refresh < b - this.refresh_threshold) {
                this.last_refresh = b;
                var g = this.$(".loading-button.sync");
                if (!g.hasClass("loading")) {
                    g.addClass("loading");
                    var b = _.bind(function() {
                            this.print_file_views = [];
                            this.file_list.each(_.bind(function(a, b) {
                                var c = new PrintFileView({
                                    list: this,
                                    print_file: a,
                                    attributes: {
                                        "class": "row" + (b % 2 ? " dark" : "")
                                    }
                                });
                                c.render();
                                this.print_file_views.push(c)
                            }, this));
                            this.$(".design-list-container").empty();
                            this.render();
                            g.removeClass("loading");
                            _.isFunction(c) && c(!0)
                        }, this),
                        d = function() {
                            noty({
                                text: "Hubo un error al descargar la lista de diseños",
                                timeout: 3E3
                            });
                            g.removeClass("loading");
                            _.isFunction(c) && c(!1)
                        };
                    a ? this.file_list.syncCloud({
                        success: b,
                        error: d
                    }) : this.file_list.fetch({
                        success: b,
                        error: d
                    })
                }
            }
        },
        downloadProgress: function(a) {
            var c = _.find(this.print_file_views, function(b) {
                return b.print_file.get("id") == a.id
            });
            if (c) {
                var b = c.$(".print-file-options");
                switch (a.type) {
                    case "progress":
                        b.hasClass("downloading") || b.addClass("downloading");
                        if (c.downloadProgress) c.downloadProgress.circleProgress({
                            value: a.progress / 100
                        });
                        else {
                            var g = b.find(".download-progress");
                            c.downloadProgress = g.circleProgress({
                                value: 0,
                                animation: !1,
                                size: b.innerWidth() - 25,
                                fill: {
                                    color: "black"
                                }
                            })
                        }
                        c.$(".download-progress span").html(Math.floor(a.progress) +
                            "<i>%</i>");
                        break;
                    case "success":
                        if (b = c.print_file) b.set("local_filename", a.filename), b.set("print_time", a.print_time), b.set("layer_count", a.layer_count), c.render(), c.printWhenDownloaded && (c.printWhenDownloaded = !1, c.printClicked());
                        break;
                    case "error":
                        b.removeClass("downloading");
                        noty({
                            text: "No se pudo descargar el fichero de impresión.",
                            timeout: 3E3
                        });
                        console.error("Error al descargar fichero: " + a.reason);
                        break;
                    case "cancelled":
                        b.removeClass("downloading")
                }
            }
        },
        forceSync: function() {
            this.refresh(!0)
        },
        onFileRemoved: function(a) {
            var c =
                _.find(this.print_file_views, function(b) {
                    return b.print_file == a
                });
            c && (c.remove(), this.print_file_views.splice(this.print_file_views.indexOf(c), 1))
        },
        onMetadataAnalysisFinished: function(a) {
            var c = _.find(this.print_file_views, function(b) {
                return b.print_file.get("name") == a.file
            });
            c && (c.print_file.set("info", a.result), c.render())
        }
    }),
    FilesView = Backbone.View.extend({
        el: "#files-view",
        uploadView: null,
        printFilesListView: null,
        events: {
            show: "onShow"
        },
        initialize: function(a) {
            this.uploadView = new UploadView({
                el: this.$el.find(".file-upload-view")
            });
            this.printFilesListView = new PrintFilesListView({
                el: this.$el.find(".design-list"),
                forceSync: a.forceSync,
                syncCompleted: a.syncCompleted
            });
            this.listenTo(app.printerProfile, "change:driver", this.onDriverChanged)
        },
        refreshPrintFiles: function() {
            this.printFilesListView.refresh(!0)
        },
        fileInfo: function(a) {
            var c = _.find(this.printFilesListView.print_file_views, function(b) {
                return b.print_file.get("id") == a
            });
            c && (this.printFilesListView.storage_control_view.selectStorage("cloud"), c.infoClicked())
        },
        onShow: function() {
            this.printFilesListView.refresh(!1)
        },
        onDriverChanged: function() {
            this.uploadView.render();
            this.printFilesListView.refresh(!0)
        }
    });
var TempBarVerticalView = TempBarView.extend({
        containerDimensions: null,
        scale: null,
        type: null,
        dragging: !1,
        events: _.extend(TempBarView.prototype.events, {
            "click .temp-bar": "onClicked",
            "click button.temp-off": "turnOff"
        }),
        setHandle: function(a) {
            if (!this.dragging) {
                var c = this._temp2px(a),
                    b = this.$el.find(".temp-target");
                b.css({
                    transition: "top 0.5s"
                });
                b.css({
                    top: c + "px"
                });
                b.find("span.label").text(a);
                setTimeout(function() {
                    b.css({
                        transition: ""
                    })
                }, 800)
            }
        },
        onTouchMove: function(a) {
            if (this.dragging) {
                a.preventDefault();
                a.stopPropagation();
                var c = this.$(".temp-target");
                a = ("mousemove" == a.type ? a.originalEvent.pageY : a.originalEvent.changedTouches[0].clientY + $(document).scrollTop()) - this.containerDimensions.top - c.innerHeight() / 2;
                a = Math.min(Math.max(a, 0), this.containerDimensions.maxTop);
                c.css({
                    top: a + "px"
                });
                c.find("span.label").text(this._px2temp(a))
            }
        },
        onClicked: function(a) {
            a.preventDefault();
            var c = this.$el.find(".temp-target");
            a = a.pageY - this.containerDimensions.top - c.innerHeight() / 2;
            a = Math.min(Math.max(a, 0), this.containerDimensions.maxTop);
            a = this._px2temp(a);
            this.setHandle(a);
            this._sendToolCommand("target", this.type, a)
        },
        onResize: function() {
            var a = this.$el.find(".temp-bar"),
                c = a.find(".temp-target"),
                b = a.find("label"),
                g = a.height(),
                c = g - c.innerHeight() - b.innerHeight();
            this.containerDimensions = {
                top: a.offset().top,
                height: g,
                maxTop: c,
                px4degree: c / (this.scale[1] - this.scale[0])
            }
        },
        renderTemps: function(a, c) {
            var b = this.$el.find(".temp-target").innerHeight();
            null !== a && (this.$el.find(".current-temp-top").html(Math.round(a) + "&deg;"), this.$el.find(".current-temp").css({
                top: this._temp2px(a) +
                    b / 2 + "px"
            }));
            null !== c && this.setHandle(Math.min(Math.round(c), this.scale[1]))
        },
        _temp2px: function(a) {
            return this.containerDimensions.maxTop - a * this.containerDimensions.px4degree
        },
        _px2temp: function(a) {
            return Math.round((this.containerDimensions.maxTop - a) / this.containerDimensions.px4degree)
        }
    }),
    TempView = Backbone.View.extend({
        el: "#temp-control",
        nozzleTempBar: null,
        bedTempBar: null,
        initialize: function() {
            this.nozzleTempBar = new TempBarVerticalView({
                scale: [0, app.printerProfile.get("max_nozzle_temp")],
                el: this.$el.find(".temp-control-cont.nozzle"),
                type: "tool0"
            });
            this.bedTempBar = new TempBarVerticalView({
                scale: [0, app.printerProfile.get("max_bed_temp")],
                el: this.$el.find(".temp-control-cont.bed"),
                type: "bed"
            })
        },
        render: function() {
            var a = app.printerProfile.toJSON();
            this.nozzleTempBar.setMax(a.max_nozzle_temp);
            a.heated_bed ? (this.bedTempBar.setMax(a.max_bed_temp), this.bedTempBar.$el.removeClass("disabled")) : this.bedTempBar.$el.addClass("disabled")
        },
        resetBars: function() {
            this.nozzleTempBar.onResize();
            this.bedTempBar.onResize()
        },
        updateBars: function(a) {
            this.nozzleTempBar.setTemps(a.extruder.actual,
                a.extruder.target);
            this.bedTempBar.setTemps(a.bed.actual, a.bed.target)
        }
    }),
    DistanceControl = Backbone.View.extend({
        el: "#distance-control",
        selected: 10,
        events: {
            "click button": "selectDistance"
        },
        selectDistance: function(a) {
            a = $(a.currentTarget);
            this.$el.find(".success").removeClass("success").addClass("secondary");
            a.addClass("success").removeClass("secondary");
            this.selected = a.attr("data-value")
        }
    }),
    MovementControlView = Backbone.View.extend({
        distanceControl: null,
        initialize: function(a) {
            this.distanceControl = a.distanceControl
        },
        sendJogCommand: function(a, c, b) {
            "undefined" === typeof b && (b = 10);
            var g = {
                command: "jog"
            };
            g[a] = b * c;
            $.ajax({
                url: API_BASEURL + "printer/printhead",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(g)
            })
        },
        sendHomeCommand: function(a) {
            $.ajax({
                url: API_BASEURL + "printer/printhead",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: "home",
                    axes: a
                })
            })
        }
    }),
    XYControlView = MovementControlView.extend({
        el: "#xy-controls",
        events: {
            "click .control_btn_x_plus": "xPlusTapped",
            "click .control_btn_x_minus": "xMinusTapped",
            "click .control_btn_y_plus": "yPlusTapped",
            "click .control_btn_y_minus": "yMinusTapped",
            "click .home_z": "homeTapped"
        },
        xPlusTapped: function() {
            this.sendJogCommand("x", 1, this.distanceControl.selected)
        },
        xMinusTapped: function() {
            this.sendJogCommand("x", -1, this.distanceControl.selected)
        },
        yPlusTapped: function() {
            this.sendJogCommand("y", 1, this.distanceControl.selected)
        },
        yMinusTapped: function() {
            this.sendJogCommand("y", -1, this.distanceControl.selected)
        },
        homeTapped: function() {
            app.socketData.get("paused") ||
                this.sendHomeCommand(["x", "y"])
        }
    }),
    ZControlView = MovementControlView.extend({
        el: "#z-controls",
        events: {
            "click .control_btn_z_plus": "zPlusTapped",
            "click .control_btn_z_minus": "zMinusTapped",
            "click .home_z": "homeTapped"
        },
        zPlusTapped: function() {
            this.sendJogCommand("z", 1, this.distanceControl.selected)
        },
        zMinusTapped: function() {
            this.sendJogCommand("z", -1, this.distanceControl.selected)
        },
        homeTapped: function() {
            app.socketData.get("paused") || this.sendHomeCommand("z")
        }
    }),
    ExtrusionControlView = Backbone.View.extend({
        el: "#extrusion-control",
        template: null,
        initialize: function() {
            this.template = _.template(this.$("#extruder-switch-template").html())
        },
        render: function() {
            var a = app.printerProfile.toJSON();
            this.$(".row.extruder-switch").html(this.template({
                profile: a
            }));
            var c = {
                "click .extrude": "extrudeTapped",
                "click .retract": "retractTapped",
                "change .extrusion-length": "lengthChanged"
            };
            1 < a.extruder_count && (c["change .extruder-number"] = "extruderChanged");
            this.delegateEvents(c)
        },
        extrudeTapped: function() {
            this._checkAmount() && this._sendExtrusionCommand(1)
        },
        retractTapped: function() {
            this._checkAmount() && this._sendExtrusionCommand(-1)
        },
        lengthChanged: function(a) {
            a = $(a.target);
            "other" == a.val() ? (a.addClass("hide"), this.$(".other").removeClass("hide").focus(), this.$(".other").focus()) : this.$('input[name="extrusion-length"]').val(a.val())
        },
        extruderChanged: function(a) {
            this._sendChangeToolCommand($(a.target).val())
        },
        _sendChangeToolCommand: function(a) {
            $.ajax({
                url: API_BASEURL + "printer/tool",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: "select",
                    tool: "tool" + a
                })
            })
        },
        _checkAmount: function() {
            return !isNaN(this.$el.find('input[name="extrusion-length"]').val())
        },
        _sendExtrusionCommand: function(a) {
            a = {
                command: "extrude",
                amount: this.$el.find('input[name="extrusion-length"]').val() * a
            };
            $.ajax({
                url: API_BASEURL + "printer/tool",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(a)
            })
        }
    }),
    FanControlView = Backbone.View.extend({
        el: "#temp-control .fan-control",
        events: {
            "click button.fan-on": "fanOn",
            "click button.fan-off": "fanOff"
        },
        fanOn: function() {
            this._setFanSpeed(255);
            this.$(".fan_icon").addClass("animate-spin")
        },
        fanOff: function() {
            this._setFanSpeed(0);
            this.$(".fan_icon").removeClass("animate-spin")
        },
        _setFanSpeed: function(a) {
            $.ajax({
                url: API_BASEURL + "printer/fan",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: "set",
                    tool: 0,
                    speed: a
                })
            })
        }
    }),
    ControlView = Backbone.View.extend({
        el: "#control-view",
        events: {
            "click .back-to-print button": "resumePrinting",
            show: "render"
        },
        tempView: null,
        distanceControl: null,
        xyControlView: null,
        zControlView: null,
        extrusionView: null,
        fanView: null,
        initialize: function() {
            this.tempView = new TempView;
            this.distanceControl = new DistanceControl;
            this.xyControlView = new XYControlView({
                distanceControl: this.distanceControl
            });
            this.zControlView = new ZControlView({
                distanceControl: this.distanceControl
            });
            this.extrusionView = new ExtrusionControlView;
            this.fanView = new FanControlView;
            this.listenTo(app.socketData, "change:temps", this.updateTemps)
        },
        updateTemps: function(a,
            c) {
            this.$el.hasClass("hide") || this.tempView.updateBars(c)
        },
        render: function() {
            app.socketData.get("paused") ? this.$el.addClass("print-paused") : this.$el.removeClass("print-paused");
            this.extrusionView.render();
            this.tempView.render()
        },
        resumePrinting: function(a) {
            app.router.printingView.togglePausePrint(a);
            app.showPrinting();
            this.$el.addClass("hide")
        }
    });
var SettingsPage = Backbone.View.extend({
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        show: function() {
            this.parent.$el.find(".settings-page").addClass("hide");
            this.$el.removeClass("hide")
        }
    }),
    PrinterConnectionView = SettingsPage.extend({
        el: "#printer-connection",
        template: _.template($("#printer-connection-settings-page-template").html()),
        settings: null,
        initialize: function(a) {
            this.listenTo(app.socketData, "change:printer", this.printerStatusChanged);
            SettingsPage.prototype.initialize.call(this, a)
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.settings ? this.render() : this.getInfo()
        },
        getInfo: function() {
            this.$("a.retry-ports i").addClass("animate-spin");
            $.getJSON(API_BASEURL + "settings/printer", null, _.bind(function(a) {
                a.serial ? (this.settings = a, this.render()) : noty({
                    text: "No se encontró una configuración serial.",
                    timeout: 3E3
                })
            }, this)).fail(function() {
                noty({
                    text: "Hubo un error al recuperar las opciones serial.",
                    timeout: 3E3
                });
                this.$("a.retry-ports i").removeClass("animate-spin")
            })
        },
        render: function() {
            this.$("form").html(this.template({
                settings: this.settings
            }));
            this.printerStatusChanged(app.socketData, app.socketData.get("printer"));
            this.delegateEvents({
                "change #settings-baudrate": "saveConnectionSettings",
                "change #settings-serial-port": "saveConnectionSettings",
                "click a.retry-ports": "retryPortsClicked",
                "click .loading-button.test-connection button": "testConnection"
            })
        },
        retryPortsClicked: function(a) {
            a.preventDefault();
            this.getInfo()
        },
        saveConnectionSettings: function(a) {
            var c = {};
            _.each(this.$("form").serializeArray(), function(a) {
                c[a.name] = a.value
            });
            c.port && (this.$(".loading-button.test-connection").addClass("loading"),
                this.$(".connection-status").removeClass("failed connected").addClass("connecting"), $.ajax({
                    url: API_BASEURL + "connection",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify({
                        command: "connect",
                        driver: c.driver,
                        port: c.port,
                        baudrate: c.baudrate ? parseInt(c.baudrate) : null,
                        autoconnect: !0,
                        save: !0
                    })
                }).fail(function() {
                    noty({
                        text: "Hubo un error al comprobar las opciones de conexión.",
                        timeout: 3E3
                    })
                }))
        },
        printerStatusChanged: function(a, c) {
            this.$(".connection-status").removeClass("connecting failed connected").addClass(c.status);
            "connecting" != c.status && this.$(".loading-button.test-connection").removeClass("loading")
        },
        testConnection: function(a) {
            a.preventDefault();
            this.saveConnectionSettings()
        }
    }),
    PrinterProfileView = SettingsPage.extend({
        el: "#printer-profile",
        template: _.template($("#printer-profile-settings-page-template").html()),
        settings: null,
        initialize: function(a) {
            SettingsPage.prototype.initialize.call(this, a);
            this.settings = app.printerProfile
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.render()
        },
        render: function() {
            this.$el.html(this.template({
                settings: this.settings.toJSON()
            }));
            this.$el.foundation();
            this.$("#extruder-count").val(this.settings.get("extruder_count"));
            this.delegateEvents({
                "invalid.fndtn.abide form": "invalidForm",
                "valid.fndtn.abide form": "validForm",
                "change input[name='heated_bed']": "heatedBedChanged"
            })
        },
        heatedBedChanged: function(a) {
            a = $(a.currentTarget);
            var c = this.$(".input-wrapper.max_bed_temp");
            a.is(":checked") ? c.removeClass("hide") : c.addClass("hide")
        },
        invalidForm: function(a) {
            "abide.fndtn" === a.namespace && noty({
                text: "Por favor, comprueba tus errores",
                timeout: 3E3
            })
        },
        validForm: function(a) {
            if ("abide.fndtn" === a.namespace) {
                a = this.$("form");
                var c = a.find(".loading-button"),
                    b = {};
                c.addClass("loading");
                a.find("input, select").each(function(a, c) {
                    var f = null;
                    c = $(c);
                    f = c.is('input[type="radio"], input[type="checkbox"]') ? c.is(":checked") : c.val();
                    b[c.attr("name")] = f
                });
                this.settings.save(b, {
                    patch: !0,
                    success: _.bind(function() {
                        noty({
                            text: "Los cambios en el perfil se han guardado",
                            timeout: 3E3,
                            type: "success"
                        });
                        c.removeClass("loading");
                        this.parent.subviews["printer-connection"].settings = null
                    }, this),
                    error: function() {
                        noty({
                            text: "Hubo un fallo al guardar los cambios en el perfil de impresora",
                            timeout: 3E3
                        });
                        c.removeClass("loading")
                    }
                })
            }
        }
    }),
    InternetConnectionView = SettingsPage.extend({
        el: "#internet-connection",
        template: _.template($("#internet-connection-settings-page-template").html()),
        networksDlg: null,
        settings: null,
        events: {
            "click .loading-button.start-hotspot button": "startHotspotClicked",
            "click .loading-button.stop-hotspot button": "stopHotspotClicked",
            "click .loading-button.list-networks button": "listNetworksClicked",
            "change .hotspot-off input": "hotspotOffChanged"
        },
        initialize: function(a) {
            SettingsPage.prototype.initialize.apply(this, arguments);
            this.networksDlg = new WiFiNetworksDialog({
                parent: this
            })
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.settings || $.getJSON(API_BASEURL + "settings/internet", null, _.bind(function(a) {
                this.settings = a;
                this.render()
            }, this)).fail(function() {
                noty({
                    text: "Hubo un error al recuperar la configuración Wi-Fi.",
                    timeout: 3E3
                })
            })
        },
        render: function() {
            this.$el.html(this.template({
                settings: this.settings
            }))
        },
        startHotspotClicked: function(a) {
            var c =
                $(a.target).closest(".loading-button");
            c.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/internet/hotspot",
                type: "POST",
                success: _.bind(function(a, c, d) {
                    noty({
                        text: "Tu " + PRODUCT_NAME + " ha creado un punto de acceso. Conéctate a <b>" + this.settings.hotspot.name + "</b>.",
                        type: "success",
                        timeout: 3E3
                    });
                    this.settings.hotspot.active = !0;
                    this.render()
                }, this),
                error: function(a) {
                    noty({
                        text: a.responseText,
                        timeout: 3E3
                    })
                },
                complete: function() {
                    c.removeClass("loading")
                }
            })
        },
        stopHotspotClicked: function(a) {
            var c = $(a.target).closest(".loading-button");
            c.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/internet/hotspot",
                type: "DELETE",
                success: _.bind(function(a, c, d) {
                    noty({
                        text: "El punto de acceso ha sido detenido",
                        type: "success",
                        timeout: 3E3
                    });
                    this.settings.hotspot.active = !1;
                    this.render()
                }, this),
                error: function(a) {
                    noty({
                        text: a.responseText,
                        timeout: 3E3
                    })
                },
                complete: function() {
                    c.removeClass("loading")
                }
            })
        },
        listNetworksClicked: function(a) {
            var c = $(a.target).closest(".loading-button");
            c.addClass("loading");
            $.getJSON(API_BASEURL + "settings/internet/wifi-networks",
                _.bind(function(a) {
                    if (a.message) noty({
                        text: a.message
                    });
                    else if (a.networks) {
                        var c = this;
                        this.networksDlg.open(_.sortBy(_.uniq(_.sortBy(a.networks, function(a) {
                            return a.name
                        }), !0, function(a) {
                            return a.name
                        }), function(a) {
                            a.active = c.settings.networks.wireless && c.settings.networks.wireless.id == a.id;
                            return -a.signal
                        }))
                    }
                }, this)).fail(function() {
                noty({
                    text: "Hubo un error al detectar redes.",
                    timeout: 3E3
                })
            }).complete(function() {
                c.removeClass("loading")
            })
        },
        hotspotOffChanged: function(a) {
            a = $(a.currentTarget);
            $.ajax({
                url: "/api/settings/internet/hotspot",
                method: "PUT",
                data: JSON.stringify({
                    hotspotOnlyOffline: a.is(":checked")
                }),
                contentType: "application/json",
                dataType: "json"
            }).fail(function() {
                noty({
                    text: "Hubo un error al guardar las opciones del punto de acceso.",
                    timeout: 3E3
                })
            })
        }
    }),
    WiFiNetworkPasswordDialog = Backbone.View.extend({
        el: "#wifi-network-password-modal",
        events: {
            "click button.connect": "connectClicked",
            "submit form": "connectClicked"
        },
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        open: function(a, c) {
            this.$el.find(".network-id-field").val(a);
            this.$el.find(".name").text(c);
            this.$el.foundation("reveal", "open");
            this.$el.one("opened", _.bind(function() {
                this.$el.find(".network-password-field").focus()
            }, this))
        },
        connectClicked: function(a) {
            a.preventDefault();
            var c = this.$el.find("form");
            this.connect($(a.target), c.find(".network-id-field").val(), c.find(".network-password-field").val())
        },
        connect: function(a, c, b) {
            var g = a.closest(".loading-button"),
                d = this;
            g.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/internet/active",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    id: c,
                    password: b
                })
            }).done(function(a) {
                a.name && a.signal && a.ip ? (noty({
                    text: "Tu " + PRODUCT_NAME + " está ahora conectada a " + a.name + ".",
                    type: "success",
                    timeout: 3E3
                }), d.$el.foundation("reveal", "close"), d.parent.settings.networks.wireless = a, d.parent.render()) : a.message && noty({
                    text: a.message
                })
            }).fail(function() {
                noty({
                    text: "Hubo un error guardando la configuración.",
                    timeout: 3E3
                });
                d.$el.foundation("reveal", "close")
            }).complete(function() {
                g.removeClass("loading")
            })
        }
    }),
    WiFiNetworksDialog =
    Backbone.View.extend({
        el: "#wifi-network-list-modal",
        networksTemplate: _.template($("#wifi-network-modal-row").html()),
        passwordDlg: null,
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        open: function(a) {
            var c = this.$el.find(".modal-content");
            c.empty();
            c.html(this.networksTemplate({
                networks: a
            }));
            c.find("button").bind("click", _.bind(this.networkSelected, this));
            this.$el.foundation("reveal", "open")
        },
        networkSelected: function(a) {
            a.preventDefault();
            a = $(a.target);
            this.passwordDlg || (this.passwordDlg = new WiFiNetworkPasswordDialog({
                parent: this.parent
            }));
            "1" == a.data("secured") ? this.passwordDlg.open(a.data("id"), a.data("name")) : this.passwordDlg.connect(a, a.data("id"), null)
        }
    }),
    SoftwareUpdateView = SettingsPage.extend({
        el: "#software-update",
        events: {
            "click .loading-button.check button": "onCheckClicked"
        },
        updateDialog: null,
        onCheckClicked: function(a) {
            var c = this.$el.find(".loading-button.check");
            c.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/software/check",
                type: "GET",
                dataType: "json",
                success: _.bind(function(a) {
                    this.updateDialog || (this.updateDialog =
                        new SoftwareUpdateDialog);
                    this.updateDialog.open(a)
                }, this),
                error: function(a) {
                    400 == a.status ? noty({
                        text: a.responseText,
                        timeout: 3E3
                    }) : noty({
                        text: "Hubo un problema comprobando nuevo software.",
                        timeout: 3E3
                    })
                },
                complete: function() {
                    c.removeClass("loading")
                }
            })
        }
    }),
    SoftwareUpdateDialog = Backbone.View.extend({
        el: "#software-update-modal",
        data: null,
        contentTemplate: null,
        open: function(a) {
            this.contentTemplate || (this.contentTemplate = _.template($("#software-update-modal-content").html()));
            this.data = a;
            var c = this.$el.find(".content");
            c.empty();
            c.html(this.contentTemplate({
                data: a,
                date_format: app.utils.dateFormat
            }));
            c.find("button.cancel").bind("click", _.bind(this.close, this));
            c.find("button.go").bind("click", _.bind(this.doUpdate, this));
            this.$el.foundation("reveal", "open")
        },
        close: function() {
            this.$el.foundation("reveal", "close")
        },
        doUpdate: function() {
            var a = this.$el.find(".loading-button");
            a.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/software/update",
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    release_id: this.data.release.id
                }),
                success: function() {
                    location.reload()
                },
                error: function(c) {
                    400 == c.status ? noty({
                        text: c.responseText,
                        timeout: 3E3
                    }) : noty({
                        text: "Hubo un problema al actualizar a la nueva versión.",
                        timeout: 3E3
                    });
                    a.removeClass("loading")
                }
            })
        }
    }),
    SoftwareAdvancedView = SettingsPage.extend({
        el: "#software-advanced",
        template: _.template($("#software-advanced-content-template").html()),
        resetConfirmDialog: null,
        sendLogDialog: null,
        clearLogDialog: null,
        settings: null,
        events: {
            "change #serial-logs": "serialLogChanged"
        },
        initialize: function(a) {
            SettingsPage.prototype.initialize.apply(this,
                arguments);
            this.resetConfirmDialog = new ResetConfirmDialog;
            this.sendLogDialog = new SendLogDialog;
            this.clearLogDialog = new ClearLogsDialog({
                parent: this
            })
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.settings || $.getJSON(API_BASEURL + "settings/software/advanced", null, _.bind(function(a) {
                this.settings = a;
                this.render()
            }, this)).fail(function() {
                noty({
                    text: "Hubo un error al recuperar las opciones avanzadas de software.",
                    timeout: 3E3
                })
            })
        },
        render: function() {
            this.$el.html(this.template({
                data: this.settings,
                size_format: app.utils.sizeFormat
            }))
        },
        serialLogChanged: function(a) {
            var c = $(a.currentTarget).is(":checked");
            $.ajax({
                url: "/api/settings/software/logs/serial",
                method: "PUT",
                data: JSON.stringify({
                    active: c
                }),
                contentType: "application/json",
                dataType: "json"
            }).done(function() {
                c ? $("#app").addClass("serial-log") : $("#app").removeClass("serial-log")
            }).fail(function() {
                noty({
                    text: "Hubo un error cambiando los logs serial.",
                    timeout: 3E3
                })
            })
        }
    }),
    SendLogDialog = Backbone.View.extend({
        el: "#send-logs-modal",
        events: {
            "click button.secondary": "doClose",
            "click button.success": "doSend",
            "open.fndtn.reveal": "onOpen"
        },
        onOpen: function() {
            this.$("input[name=ticket]").val("");
            this.$("textarea[name=message]").val("")
        },
        doClose: function() {
            this.$el.foundation("reveal", "close");
            this.$("input[name=ticket]").val("");
            this.$("textarea[name=message]").val("")
        },
        doSend: function() {
            var a = this.$(".loading-button"),
                c = {
                    ticket: this.$("input[name=ticket]").val(),
                    message: this.$("textarea[name=message]").val()
                };
            a.addClass("loading");
            $.post(API_BASEURL + "settings/software/logs",
                c).done(_.bind(function() {
                noty({
                    text: "Logs enviados a AstroPrint",
                    type: "success",
                    timeout: 3E3
                });
                this.$el.foundation("reveal", "close");
                this.$("input[name=ticket]").val("");
                this.$("textarea[name=message]").val("")
            }, this)).fail(function() {
                noty({
                    text: "Hubo un problema enviando tus logs.",
                    timeout: 3E3
                })
            }).always(function() {
                a.removeClass("loading")
            })
        }
    }),
    ClearLogsDialog = Backbone.View.extend({
        el: "#delete-logs-modal",
        events: {
            "click button.secondary": "doClose",
            "click button.alert": "doDelete",
            "open.fndtn.reveal": "onOpen"
        },
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        doClose: function() {
            this.$el.foundation("reveal", "close")
        },
        doDelete: function() {
            this.$(".loading-button").addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/software/logs",
                type: "DELETE",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({}),
                success: _.bind(function() {
                    this.parent.$(".size").text("0 kB");
                    this.doClose()
                }, this),
                error: function() {
                    noty({
                        text: "Hubo un problema al limpiar tus logs.",
                        timeout: 3E3
                    })
                },
                complete: _.bind(function() {
                        this.$(".loading-button").removeClass("loading")
                    },
                    this)
            })
        }
    }),
    ResetConfirmDialog = Backbone.View.extend({
        el: "#restore-confirm-modal",
        events: {
            "click button.secondary": "doClose",
            "click button.alert": "doReset",
            "open.fndtn.reveal": "onOpen"
        },
        onOpen: function() {
            this.$("input").val("")
        },
        doClose: function() {
            this.$el.foundation("reveal", "close")
        },
        doReset: function() {
            "RESET" == this.$("input").val() && (this.$(".loading-button").addClass("loading"), $.ajax({
                url: API_BASEURL + "settings/software/settings",
                type: "DELETE",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({}),
                success: function() {
                    location.href = ""
                },
                complete: _.bind(function() {
                    this.$(".loading-button").removeClass("loading")
                }, this)
            }))
        }
    }),
    SettingsMenu = Backbone.View.extend({
        el: "#settings-side-bar",
        subviews: null,
        initialize: function(a) {
            a.subviews && (this.subviews = a.subviews)
        },
        changeActive: function(a) {
            var c = this.$el.find("li." + a);
            this.$el.find("li.active").removeClass("active");
            c.closest("li").addClass("active");
            this.subviews[a].show()
        }
    }),
    SettingsView = Backbone.View.extend({
        el: "#settings-view",
        menu: null,
        subviews: null,
        initialize: function() {
            this.subviews = {
                "printer-connection": new PrinterConnectionView({
                    parent: this
                }),
                "printer-profile": new PrinterProfileView({
                    parent: this
                }),
                "internet-connection": new InternetConnectionView({
                    parent: this
                }),
                "software-update": new SoftwareUpdateView({
                    parent: this
                }),
                "software-advanced": new SoftwareAdvancedView({
                    parent: this
                })
            };
            this.menu = new SettingsMenu({
                subviews: this.subviews
            })
        },
        onShow: function() {
            this.subviews["printer-connection"].show()
        }
    });
var ConnectionView = Backbone.View.extend({
    el: "#connection-view",
    events: {
        "click i.printer": "printerTapped",
        "click i.server": "serverTapped",
        "click i.astroprint": "astroprintTapped",
        "mouseover i": "onMouseOver",
        "mouseout i": "onMouseOut",
        "mouseover a.offline": "onMouseOver",
        "mouseout a.offline": "onMouseOut"
    },
    socketData: null,
    tooltip: null,
    connect: function(a) {
        var c = this;
        $.ajax({
            url: API_BASEURL + "connection",
            method: "GET",
            dataType: "json",
            success: function(b) {
                if ("Error" == b.current.state.substr(0, 5) || "Closed" == b.current.state ||
                    "Offline" == b.current.state) {
                    "Error" == b.current.state.substr(0, 5) && console.error("Printer connection had error: " + b.current.state);
                    var g = b.options.portPreference;
                    b.options.ports && !_.has(b.options.ports, g) && (g = _.keys(b.options.ports)[0]);
                    g ? (b = {
                        command: "connect",
                        port: g,
                        baudrate: b.options.baudratePreference,
                        autoconnect: !0
                    }, c.setPrinterConnection("blink-animation"), $.ajax({
                        url: API_BASEURL + "connection",
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json; charset=UTF-8",
                        data: JSON.stringify(b),
                        error: function() {
                            c.setPrinterConnection("failed");
                            a && (app.router.navigate("settings/printer-connection", {
                                trigger: !0,
                                replace: !0
                            }), noty({
                                text: "Comprobar opciones de conexión.",
                                type: "information",
                                timeout: 3E3
                            }))
                        }
                    })) : a && (app.router.navigate("settings/printer-connection", {
                        trigger: !0,
                        replace: !0
                    }), noty({
                        text: "Comprobar opciones de conexión.",
                        type: "information",
                        timeout: 3E3
                    }))
                } else "Connecting" != b.current.state ? ("Printing" != b.current.state && "Paused" != b.current.state || app.showPrinting(), c.setPrinterConnection("connected")) : c.setPrinterConnection("blink-animation")
            }
        })
    },
    disconnect: function() {
        $.ajax({
            url: API_BASEURL + "connection",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify({
                command: "disconnect"
            }),
            success: function(a) {
                self.$el.removeClass("connected")
            }
        })
    },
    setServerConnection: function(a) {
        var c = this.$el.find("i.server"),
            b = "";
        c.removeClass("blink-animation connected failed").addClass(a);
        switch (a) {
            case "blink-animation":
                b = "Conectando a <b>" + ASTROBOX_NAME + "</b>...";
                break;
            case "connected":
                b = "Conectado a <b>" + ASTROBOX_NAME +
                    "</b>";
                break;
            case "failed":
                b = "No se puede acceder a <b>" + ASTROBOX_NAME + "</b>"
        }
        c.data("title", b)
    },
    setPrinterConnection: function(a) {
        var c = this.$el.find("i.printer"),
            b = "";
        c.removeClass("blink-animation connected failed").addClass(a);
        switch (a) {
            case "blink-animation":
                b = "Conectando a la impresora...";
                break;
            case "connected":
                b = "Conectado a la impresora";
                break;
            case "failed":
                b = "La impresora no está conectada"
        }
        c.data("title", b)
    },
    setAstroprintConnection: function(a) {
        var c = this.$el.find("i.astroprint"),
            b = "";
        c.removeClass("blink-animation connected failed").addClass(a);
        switch (a) {
            case "blink-animation":
                b = "Conectando a astroprint.com...";
                break;
            case "connected":
                b = "Conectado a astroprint.com";
                break;
            case "failed":
                b = "No conectado a astroprint.com"
        }
        c.data("title", b)
    },
    printerTapped: function(a) {
        a.stopPropagation();
        $(a.target).hasClass("failed") && this.connect(!0)
    },
    serverTapped: function(a) {
        a.stopPropagation();
        $(a.target).hasClass("failed") && (this.socketData.reconnect(), this.connect())
    },
    astroprintTapped: function(a) {
        a.stopPropagation();
        var c = $(a.target);
        c.hasClass("failed") &&
            (LOGGED_USER ? (c.addClass("blink-animation"), $.ajax({
                url: API_BASEURL + "boxrouter",
                method: "POST",
                dataType: "json",
                complete: function(a) {
                    c.removeClass("blink-animation")
                }
            })) : $("#login-modal").foundation("reveal", "open"))
    },
    onMouseOver: function(a) {
        if (!$("html").hasClass("touch")) {
            a = $(a.currentTarget);
            this.tooltip || (this.tooltip = $('<div class="tooltip radius"><span class="pip"></span><div class="text"></div></div>'), $("body").append(this.tooltip));
            var c = a.offset(),
                b = $(document).width(),
                g = c.top + a.height() -
                5,
                c = b - (c.left + a.outerWidth() / 2 + 10);
            this.tooltip.css("top", g).css("right", c).css("background", a.css("color")).removeClass("hide").find(".text").html(a.data("title"));
            this.tooltip.find(".pip").css("border-color", "transparent transparent " + a.css("color") + " transparent")
        }
    },
    onMouseOut: function(a) {
        this.tooltip.addClass("hide");
        this.tooltip.find(".text").html("")
    }
});
var TurnoffConfirmationModal = Backbone.View.extend({
        el: "#turnoff-modal",
        turnoffView: null,
        events: {
            "click button.alert": "onConfirm",
            "click button.secondary": "close"
        },
        onConfirm: function() {
            this.$el.foundation("reveal", "close");
            this.turnoffView || (this.turnoffView = new TurnoffView);
            app.router.selectView(this.turnoffView);
            this.turnoffView.doTurnoff()
        },
        open: function() {
            this.$el.foundation("reveal", "open")
        },
        close: function() {
            this.$el.foundation("reveal", "close")
        }
    }),
    TurnoffView = Backbone.View.extend({
        el: "#turnoff-view",
        doTurnoff: function() {
            $.ajax({
                url: API_BASEURL + "system",
                type: "POST",
                data: {
                    action: "shutdown"
                },
                success: _.bind(function() {
                    setTimeout(_.bind(function() {
                        this.$el.addClass("done");
                        this.$el.find(".icon-off").removeClass("blink-animation")
                    }, this), 6E3)
                }, this),
                error: _.bind(function() {
                    this.$el.find(".icon-off").removeClass("blink-animation");
                    noty({
                        text: "Hubo un error al comenzar la secuencia de apagado.",
                        timeout: 5E3
                    })
                }, this)
            })
        }
    });
var TempBarHorizontalView = TempBarView.extend({
        containerDimensions: null,
        scale: null,
        type: null,
        dragging: !1,
        lastSent: null,
        events: _.extend(TempBarView.prototype.events, {
            click: "onClicked"
        }),
        setHandle: function(a) {
            if (!this.dragging) {
                var c = this._temp2px(a),
                    b = this.$el.find(".temp-target");
                b.find("span.label").text(a);
                b.css({
                    transition: "left 0.5s"
                });
                b.css({
                    left: c + "px"
                });
                setTimeout(function() {
                    b.css({
                        transition: ""
                    })
                }, 800)
            }
        },
        onTouchMove: function(a) {
            if (this.dragging) {
                a.preventDefault();
                a.stopPropagation();
                var c =
                    this.$(".temp-target");
                a = ("mousemove" == a.type ? a.originalEvent.pageX : a.originalEvent.changedTouches[0].clientX) - this.containerDimensions.left - c.innerWidth() / 2;
                a = Math.min(Math.max(a, this.containerDimensions.minLeft), this.containerDimensions.maxLeft);
                c.find("span.label").text(this._px2temp(a));
                c.css({
                    left: a + "px"
                })
            }
        },
        onClicked: function(a) {
            a.preventDefault();
            var c = this.$el.find(".temp-target");
            a = a.pageX - this.containerDimensions.left - c.innerWidth() / 2;
            a = Math.min(Math.max(a, this.containerDimensions.minLeft),
                this.containerDimensions.maxLeft);
            a = this._px2temp(a);
            this.setHandle(a);
            this._sendToolCommand("target", this.type, a)
        },
        onResize: function() {
            var a = this.$el,
                c = a.find(".temp-target"),
                b = a.find(".temp-current"),
                g = a.find("label"),
                d = a.width(),
                c = b.position().left - 1.7 * c.innerWidth(),
                g = g.innerWidth();
            this.containerDimensions = {
                left: a.offset().left,
                width: d,
                maxLeft: c,
                minLeft: g,
                px4degree: (c - g) / (this.scale[1] - this.scale[0])
            }
        },
        renderTemps: function(a, c) {
            var b = this.$el.find(".temp-target"),
                g = b.innerWidth();
            null !== c && c !=
                b.find("span.label").text() && this.setHandle(Math.min(Math.round(c), this.scale[1]));
            null !== a && (this.$el.find(".temp-current").html(Math.round(a) + "&deg;"), this.$el.find(".temp-curret-line").css({
                left: this._temp2px(a) + g / 2 + "px"
            }))
        },
        _temp2px: function(a) {
            return this.containerDimensions.minLeft + a * this.containerDimensions.px4degree
        },
        _px2temp: function(a) {
            return Math.round((a - this.containerDimensions.minLeft) / this.containerDimensions.px4degree)
        }
    }),
    PhotoView = Backbone.View.extend({
        el: "#printing-view .camera-view",
        events: {
            "click button.take-pic": "refreshPhoto",
            "change .timelapse select": "timelapseFreqChanged"
        },
        parent: null,
        print_capture: null,
        photoSeq: 0,
        initialize: function(a) {
            this.parent = a.parent;
            this.listenTo(app.socketData, "change:print_capture", this.onPrintCaptureChanged);
            this.listenTo(app.socketData, "change:printing_progress", this.onPrintingProgressChanged);
            this.listenTo(app.socketData, "change:camera", this.onCameraChanged);
            this.onCameraChanged(app.socketData, app.socketData.get("camera"))
        },
        render: function() {
            var a =
                this.$(".camera-image"),
                c = null;
            this.print_capture && this.print_capture.last_photo ? c = this.print_capture.last_photo : this.parent.printing_progress && this.parent.printing_progress.rendered_image && (c = this.parent.printing_progress.rendered_image);
            a.attr("src") != c && a.attr("src", c);
            !this.print_capture || this.print_capture.paused && "layer" != this.print_capture.freq ? this.$(".timelapse .dot").removeClass("blink-animation") : this.$(".timelapse .dot").addClass("blink-animation");
            this.parent.paused ? this.$(".timelapse .overlay").show() :
                this.$(".timelapse .overlay").hide();
            a = 0;
            this.print_capture && (a = this.print_capture.freq);
            this.$(".timelapse select").val(a)
        },
        onCameraChanged: function(a, c) {
            var b = this.$(".camera-controls");
            c ? b.hasClass("hide") && b.removeClass("hide") : b.hasClass("hide") || b.addClass("hide")
        },
        onPrintCaptureChanged: function(a, c) {
            this.print_capture = c;
            this.render()
        },
        onPrintingProgressChanged: function(a, c) {
            !this.$(".camera-image").attr("src") && c && c.rendered_image && setTimeout(_.bind(function() {
                this.render()
            }, this), 1)
        },
        refreshPhoto: function(a) {
            var c =
                $(a.target).closest(".loading-button");
            a = this.parent.printing_progress;
            c.addClass("loading");
            a = Math.floor(a.percent) + "% - Layer " + (a.current_layer ? a.current_layer : "1") + (a.layer_count ? "/" + a.layer_count : "");
            var b = this.$(".camera-image");
            b.one("load", function() {
                c.removeClass("loading")
            });
            b.one("error", function() {
                c.removeClass("loading");
                $(this).attr("src", null)
            });
            b.attr("src", "/camera/snapshot?text=" + encodeURIComponent(a) + "&seq=" + this.photoSeq++)
        },
        timelapseFreqChanged: function(a) {
            a = $(a.target).val();
            this.print_capture && a == this.print_capture.freq || $.ajax({
                url: API_BASEURL + "camera/timelapse",
                type: "POST",
                dataType: "json",
                data: {
                    freq: a
                }
            }).fail(function() {
                noty({
                    text: "Hubo un error ajustando tu captura de impresión.",
                    timeout: 3E3
                })
            })
        }
    }),
    PrintingView = Backbone.View.extend({
        el: "#printing-view",
        events: {
            "click button.stop-print": "stopPrint",
            "click button.pause-print": "togglePausePrint",
            "click button.controls": "showControlPage",
            show: "show"
        },
        nozzleBar: null,
        bedBar: null,
        photoView: null,
        printing_progress: null,
        paused: null,
        initialize: function() {
            this.nozzleBar = new TempBarHorizontalView({
                scale: [0, app.printerProfile.get("max_nozzle_temp")],
                el: this.$el.find(".temp-bar.nozzle"),
                type: "tool0"
            });
            this.bedBar = new TempBarHorizontalView({
                scale: [0, app.printerProfile.get("max_bed_temp")],
                el: this.$el.find(".temp-bar.bed"),
                type: "bed"
            });
            this.photoView = new PhotoView({
                parent: this
            });
            this.listenTo(app.socketData, "change:temps", this.onTempsChanged);
            this.listenTo(app.socketData, "change:paused", this.onPausedChanged);
            this.listenTo(app.socketData,
                "change:printing_progress", this.onProgressChanged)
        },
        render: function() {
            var a = this.$(".progress .filename");
            this.printing_progress && (a.text() != this.printing_progress.filename && a.text(this.printing_progress.filename), this.$el.find(".progress .meter").css("width", this.printing_progress.percent + "%"), this.$el.find(".progress .progress-label").text(this.printing_progress.percent + "%"), a = this._formatTime(this.printing_progress.time_left), this.$el.find(".estimated-hours").text(a[0]), this.$el.find(".estimated-minutes").text(a[1]),
                this.$el.find(".estimated-seconds").text(a[2]), this.$el.find(".current-layer").text(this.printing_progress.current_layer), this.printing_progress.layer_count && this.$el.find(".layer-count").text(this.printing_progress.layer_count), this.printing_progress.heating_up ? this.$el.addClass("heating-up") : this.$el.removeClass("heating-up"));
            var a = this.$el.find("button.pause-print"),
                c = this.$el.find("button.controls");
            this.paused ? (a.html('<i class="icon-play"></i> Resume Print'), c.show()) : (a.html('<i class="icon-pause"></i> Pause Print'),
                c.hide());
            a = app.printerProfile.toJSON();
            this.nozzleBar.setMax(a.max_nozzle_temp);
            a.heated_bed ? (this.bedBar.setMax(a.max_bed_temp), this.bedBar.$el.removeClass("hide")) : this.bedBar.$el.addClass("hide")
        },
        onTempsChanged: function(a, c) {
            this.$el.hasClass("hide") || (this.nozzleBar.setTemps(c.extruder.actual, c.extruder.target), this.bedBar.setTemps(c.bed.actual, c.bed.target))
        },
        onProgressChanged: function(a, c) {
            this.printing_progress = c;
            this.render()
        },
        onPausedChanged: function(a, c) {
            this.paused = c;
            this.render();
            this.photoView.render()
        },
        _formatTime: function(a) {
            if (null == a || isNaN(a)) return ["--", "--", "--"];
            a = parseInt(a, 10);
            var c = Math.floor(a / 3600),
                b = Math.floor((a - 3600 * c) / 60);
            a = a - 3600 * c - 60 * b;
            10 > c && (c = "0" + c);
            10 > b && (b = "0" + b);
            10 > a && (a = "0" + a);
            return [c, b, a]
        },
        show: function() {
            this.nozzleBar.onResize();
            this.bedBar.onResize();
            this.printing_progress = app.socketData.get("printing_progress");
            this.paused = app.socketData.get("paused");
            this.render();
            this.photoView.print_capture = app.socketData.get("print_capture");
            this.photoView.render()
        },
        stopPrint: function(a) {
            var c =
                $(a.target).closest(".loading-button");
            c.addClass("loading");
            this._jobCommand("cancel", _.bind(function(a) {
                a && _.has(a, "error") ? console.error(a.error) : app.socketData.set({
                    printing: !1,
                    paused: !1
                });
                setTimeout(function() {
                    c.removeClass("loading")
                }, 2E3)
            }, this))
        },
        togglePausePrint: function(a) {
            var c = $(a.target).closest(".loading-button"),
                b = app.socketData.get("paused");
            c.addClass("loading");
            this._jobCommand("pause", _.bind(function(a) {
                a && _.has(a, "error") ? console.error(a.error) : app.socketData.set("paused", !b);
                c.removeClass("loading")
            }, this))
        },
        showControlPage: function() {
            app.router.navigate("control", {
                trigger: !0,
                replace: !0
            });
            this.$el.addClass("hide")
        },
        _jobCommand: function(a, c) {
            $.ajax({
                url: API_BASEURL + "job",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: a
                })
            }).done(function(a) {
                c && c(a)
            }).fail(function(a) {
                c && c({
                    error: a.responseText
                })
            })
        }
    });
var AppRouter = Backbone.Router.extend({
    homeView: null,
    filesView: null,
    controlView: null,
    settingsView: null,
    printingView: null,
    routes: {
        "": "home",
        files: "files",
        "file-info/:fileId": "fileInfo",
        control: "control",
        printing: "printing",
        settings: "settings",
        "settings/:page": "settings",
        "*notFound": "notFound"
    },
    turningOff: !1,
    execute: function(a, c) {
        if (a) {
            is_paused = app.socketData.get("paused");
            if (app.socketData.get("printing") || is_paused) {
                if (a != this.printing && (a != this.control || !is_paused)) {
                    this.navigate("printing", {
                        trigger: !0,
                        replace: !0
                    });
                    return
                }
            } else if (a == this.printing) {
                this.navigate("", {
                    trigger: !0,
                    replace: !0
                });
                return
            }
            a.apply(this, c)
        }
    },
    home: function() {
        this.homeView || (this.homeView = new HomeView({
            forceSync: !1
        }));
        this.selectView(this.homeView);
        app.selectQuickNav("dash")
    },
    files: function() {
        this.filesView || (this.filesView = new FilesView({
            forceSync: !1
        }));
        this.selectView(this.filesView);
        app.selectQuickNav("files")
    },
    fileInfo: function(a) {
        var c = _.bind(function(b) {
            b && this.filesView.fileInfo(a)
        }, this);
        this.filesView ? this.filesView.printFilesListView.refresh(!0,
            c) : this.filesView = new FilesView({
            forceSync: !0,
            syncCompleted: c
        });
        this.navigate("files", {
            trigger: !0,
            replace: !0
        })
    },
    control: function() {
        this.controlView || (this.controlView = new ControlView);
        this.selectView(this.controlView);
        app.selectQuickNav("control")
    },
    printing: function() {
        this.printingView || (this.printingView = new PrintingView);
        this.selectView(this.printingView);
        app.$(".quick-nav").hide()
    },
    settings: function(a) {
        this.settingsView || (this.settingsView = new SettingsView);
        this.selectView(this.settingsView);
        this.settingsView.menu.changeActive(a ||
            "printer-connection");
        app.selectQuickNav("settings")
    },
    selectView: function(a) {
        var c = app.$el.find(".app-view.active"),
            b = a.$el;
        b.data("fullscreen") && $("#app").addClass("hide");
        c.addClass("hide").removeClass("active");
        b.removeClass("hide").addClass("active");
        c.trigger("hide");
        b.trigger("show");
        "control-view" == a.$el.attr("id") && this.controlView.tempView.resetBars()
    },
    notFound: function() {
        this.navigate("", {
            trigger: !0,
            replace: !0
        })
    }
});
$.ajaxSetup({
    type: "POST",
    cache: !1,
    headers: {
        "X-Api-Key": UI_API_KEY
    }
});
var AppMenu = Backbone.View.extend({
        el: "#main-menu",
        turnOffModal: null,
        events: {
            "click li.logout": "logoutClicked"
        },
        logoutClicked: function(a) {
            a.preventDefault();
            var c = $(a.currentTarget).find(".icon-rocket-spinner");
            c.removeClass("hide");
            $.ajax({
                url: API_BASEURL + "astroprint",
                type: "DELETE",
                success: function() {
                    location.reload()
                },
                complete: function() {
                    c.addClass("hide")
                }
            })
        }
    }),
    AstroBoxApp = Backbone.View.extend({
        el: "body",
        eventManager: null,
        appMenu: null,
        socketData: null,
        utils: null,
        router: null,
        connectionView: null,
        turnOffModal: null,
        printerProfile: null,
        events: {
            "click button.turn-off": "turnOffClicked"
        },
        initialize: function() {
            this.socketData = new SocketData;
            this.appMenu = new AppMenu;
            this.utils = new Utils;
            this.router = new AppRouter;
            this.connectionView = new ConnectionView;
            this.turnOffModal = new TurnoffConfirmationModal;
            this.printerProfile = new PrinterProfile(initial_printer_profile);
            this.eventManager = Backbone.Events;
            this.socketData.connectionView = this.connectionView;
            this.connectionView.socketData = this.socketData;
            this.socketData.connect();
            this.listenTo(this.socketData, "change:printing", this.reportPrintingChange);
            this.listenTo(this.socketData, "change:online", this.onlineStatusChange)
        },
        turnOffClicked: function() {
            this.turnOffModal.open()
        },
        reportPrintingChange: function(a, c) {
            c ? (this.$(".quick-nav").hide(), this.showPrinting()) : (this.socketData.set({
                printing_progress: null,
                print_capture: null
            }, {
                silent: !0
            }), this.$(".tab-bar .left-small").show(), this.$(".quick-nav").show(), this.router.navigate("control", {
                replace: !0,
                trigger: !0
            }))
        },
        selectQuickNav: function(a) {
            var c =
                this.$(".quick-nav");
            c.find("li.active").removeClass("active");
            c.find("li." + a).addClass("active")
        },
        onlineStatusChange: function(a, c) {
            c ? this.$("#app").addClass("online").removeClass("offline") : this.$("#app").addClass("offline").removeClass("online")
        },
        showPrinting: function() {
            this.$el.find(".tab-bar .left-small").hide();
            this.router.navigate("printing", {
                replace: !0,
                trigger: !0
            })
        }
    });
app = new AstroBoxApp;
Backbone.history.start();
