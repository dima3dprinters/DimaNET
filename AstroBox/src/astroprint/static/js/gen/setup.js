! function(a, h) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? h(a, !0) : function(a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return h(a)
    } : h(a)
}("undefined" != typeof window ? window : this, function(a, h) {
    function f(d) {
        var y = d.length,
            b = g.type(d);
        return "function" === b || g.isWindow(d) ? !1 : 1 === d.nodeType && y ? !0 : "array" === b || 0 === y || "number" == typeof y && 0 < y && y - 1 in d
    }

    function u(d, y, b) {
        if (g.isFunction(y)) return g.grep(d, function(d, g) {
            return !!y.call(d, g,
                d) !== b
        });
        if (y.nodeType) return g.grep(d, function(d) {
            return d === y !== b
        });
        if ("string" == typeof y) {
            if (kb.test(y)) return g.filter(y, d, b);
            y = g.filter(y, d)
        }
        return g.grep(d, function(d) {
            return 0 <= A.call(y, d) !== b
        })
    }

    function x(d, y) {
        for (;
            (d = d[y]) && 1 !== d.nodeType;);
        return d
    }

    function p(d) {
        var y = Oa[d] = {};
        return g.each(d.match(ia) || [], function(d, b) {
            y[b] = !0
        }), y
    }

    function r() {
        K.removeEventListener("DOMContentLoaded", r, !1);
        a.removeEventListener("load", r, !1);
        g.ready()
    }

    function n() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = g.expando + n.uid++
    }

    function w(d, y, b) {
        var c;
        if (void 0 === b && 1 === d.nodeType)
            if (c = "data-" + y.replace(lb, "-$1").toLowerCase(), b = d.getAttribute(c), "string" == typeof b) {
                try {
                    b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : mb.test(b) ? g.parseJSON(b) : b
                } catch (a) {}
                aa.set(d, y, b)
            } else b = void 0;
        return b
    }

    function q() {
        return !0
    }

    function H() {
        return !1
    }

    function I() {
        try {
            return K.activeElement
        } catch (d) {}
    }

    function O(d, b) {
        return g.nodeName(d, "table") && g.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? d.getElementsByTagName("tbody")[0] ||
            d.appendChild(d.ownerDocument.createElement("tbody")) : d
    }

    function D(d) {
        return d.type = (null !== d.getAttribute("type")) + "/" + d.type, d
    }

    function P(d) {
        var b = nb.exec(d.type);
        return b ? d.type = b[1] : d.removeAttribute("type"), d
    }

    function X(d, b) {
        for (var t = 0, g = d.length; g > t; t++) E.set(d[t], "globalEval", !b || E.get(b[t], "globalEval"))
    }

    function B(d, b) {
        var t, c, a, k, e, m;
        if (1 === b.nodeType) {
            if (E.hasData(d) && (t = E.access(d), c = E.set(b, t), m = t.events))
                for (a in delete c.handle, c.events = {}, m)
                    for (t = 0, c = m[a].length; c > t; t++) g.event.add(b,
                        a, m[a][t]);
            aa.hasData(d) && (k = aa.access(d), e = g.extend({}, k), aa.set(b, e))
        }
    }

    function e(d, b) {
        var t = d.getElementsByTagName ? d.getElementsByTagName(b || "*") : d.querySelectorAll ? d.querySelectorAll(b || "*") : [];
        return void 0 === b || b && g.nodeName(d, b) ? g.merge([d], t) : t
    }

    function M(d, b) {
        var t, c = g(b.createElement(d)).appendTo(b.body),
            W = a.getDefaultComputedStyle && (t = a.getDefaultComputedStyle(c[0])) ? t.display : g.css(c[0], "display");
        return c.detach(), W
    }

    function R(d) {
        var b = K,
            t = Pa[d];
        return t || (t = M(d, b), "none" !== t && t || (ya =
            (ya || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ya[0].contentDocument, b.write(), b.close(), t = M(d, b), ya.detach()), Pa[d] = t), t
    }

    function Y(d, b, t) {
        var c, a, k, e, m = d.style;
        return t = t || za(d), t && (e = t.getPropertyValue(b) || t[b]), t && ("" !== e || g.contains(d.ownerDocument, d) || (e = g.style(d, b)), Ga.test(e) && Qa.test(b) && (c = m.width, a = m.minWidth, k = m.maxWidth, m.minWidth = m.maxWidth = m.width = e, e = t.width, m.width = c, m.minWidth = a, m.maxWidth = k)), void 0 !== e ? e + "" : e
    }

    function ja(d, b) {
        return {
            get: function() {
                return d() ?
                    void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function fa(d, b) {
        if (b in d) return b;
        for (var t = b[0].toUpperCase() + b.slice(1), g = b, c = Ra.length; c--;)
            if (b = Ra[c] + t, b in d) return b;
        return g
    }

    function S(d, b, t) {
        return (d = ob.exec(b)) ? Math.max(0, d[1] - (t || 0)) + (d[2] || "px") : b
    }

    function Z(d, b, t, c, a) {
        b = t === (c ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var k = 0; 4 > b; b += 2) "margin" === t && (k += g.css(d, t + ka[b], !0, a)), c ? ("content" === t && (k -= g.css(d, "padding" + ka[b], !0, a)), "margin" !== t && (k -= g.css(d, "border" + ka[b] + "Width", !0, a))) : (k += g.css(d, "padding" + ka[b], !0, a), "padding" !== t && (k += g.css(d, "border" + ka[b] + "Width", !0, a)));
        return k
    }

    function C(d, b, t) {
        var c = !0,
            a = "width" === b ? d.offsetWidth : d.offsetHeight,
            k = za(d),
            e = "border-box" === g.css(d, "boxSizing", !1, k);
        if (0 >= a || null == a) {
            if (a = Y(d, b, k), (0 > a || null == a) && (a = d.style[b]), Ga.test(a)) return a;
            c = e && (F.boxSizingReliable() || a === d.style[b]);
            a = parseFloat(a) || 0
        }
        return a + Z(d, b, t || (e ? "border" : "content"), c, k) + "px"
    }

    function ca(d, b) {
        for (var t, c, a, k = [], e = 0, m = d.length; m > e; e++) c = d[e], c.style &&
            (k[e] = E.get(c, "olddisplay"), t = c.style.display, b ? (k[e] || "none" !== t || (c.style.display = ""), "" === c.style.display && ua(c) && (k[e] = E.access(c, "olddisplay", R(c.nodeName)))) : (a = ua(c), "none" === t && a || E.set(c, "olddisplay", a ? t : g.css(c, "display"))));
        for (e = 0; m > e; e++) c = d[e], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? k[e] || "" : "none"));
        return d
    }

    function L(d, b, t, c, g) {
        return new L.prototype.init(d, b, t, c, g)
    }

    function ba() {
        return setTimeout(function() {
            qa = void 0
        }), qa = g.now()
    }

    function da(d,
        b) {
        var t, c = 0,
            g = {
                height: d
            };
        for (b = b ? 1 : 0; 4 > c; c += 2 - b) t = ka[c], g["margin" + t] = g["padding" + t] = d;
        return b && (g.opacity = g.width = d), g
    }

    function ga(d, b, c) {
        for (var g, a = (va[b] || []).concat(va["*"]), k = 0, e = a.length; e > k; k++)
            if (g = a[k].call(c, b, d)) return g
    }

    function l(d, b) {
        var c, a, k, e, m;
        for (c in d)
            if (a = g.camelCase(c), k = b[a], e = d[c], g.isArray(e) && (k = e[1], e = d[c] = e[0]), c !== a && (d[a] = e, delete d[c]), m = g.cssHooks[a], m && "expand" in m)
                for (c in e = m.expand(e), delete d[a], e) c in d || (d[c] = e[c], b[c] = k);
            else b[a] = k
    }

    function s(d, b, c) {
        var a,
            k = 0,
            e = ra.length,
            m = g.Deferred().always(function() {
                delete A.elem
            }),
            A = function() {
                if (a) return !1;
                for (var b = qa || ba(), b = Math.max(0, f.startTime + f.duration - b), y = 1 - (b / f.duration || 0), c = 0, g = f.tweens.length; g > c; c++) f.tweens[c].run(y);
                return m.notifyWith(d, [f, y, b]), 1 > y && g ? b : (m.resolveWith(d, [f]), !1)
            },
            f = m.promise({
                elem: d,
                props: g.extend({}, b),
                opts: g.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: qa || ba(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, y) {
                    var c = g.Tween(d, f.opts,
                        b, y, f.opts.specialEasing[b] || f.opts.easing);
                    return f.tweens.push(c), c
                },
                stop: function(b) {
                    var y = 0,
                        c = b ? f.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; c > y; y++) f.tweens[y].run(1);
                    return b ? m.resolveWith(d, [f, b]) : m.rejectWith(d, [f, b]), this
                }
            });
        c = f.props;
        for (l(c, f.opts.specialEasing); e > k; k++)
            if (b = ra[k].call(f, d, c, f.opts)) return b;
        return g.map(c, ga, f), g.isFunction(f.opts.start) && f.opts.start.call(d, f), g.fx.timer(g.extend(A, {
            elem: d,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function z(d) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var a, k = 0,
                e = b.toLowerCase().match(ia) || [];
            if (g.isFunction(c))
                for (; a = e[k++];) "+" === a[0] ? (a = a.slice(1) || "*", (d[a] = d[a] || []).unshift(c)) : (d[a] = d[a] || []).push(c)
        }
    }

    function U(d, b, c, a) {
        function k(l) {
            var f;
            return e[l] = !0, g.each(d[l] || [], function(d, g) {
                var l = g(b, c, a);
                return "string" != typeof l || m || e[l] ? m ? !(f = l) : void 0 : (b.dataTypes.unshift(l), k(l), !1)
            }), f
        }
        var e = {},
            m = d === Ha;
        return k(b.dataTypes[0]) || !e["*"] && k("*")
    }

    function G(d, b) {
        var c, a, k = g.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((k[c] ? d : a || (a = {}))[c] = b[c]);
        return a && g.extend(!0, d, a), d
    }

    function Q(d, b, c, a) {
        var k;
        if (g.isArray(b)) g.each(b, function(b, y) {
            c || pb.test(d) ? a(d, y) : Q(d + "[" + ("object" == typeof y ? b : "") + "]", y, c, a)
        });
        else if (c || "object" !== g.type(b)) a(d, b);
        else
            for (k in b) Q(d + "[" + k + "]", b[k], c, a)
    }

    function T(d) {
        return g.isWindow(d) ? d : 9 === d.nodeType && d.defaultView
    }
    var b = [],
        c = b.slice,
        k = b.concat,
        m = b.push,
        A = b.indexOf,
        v = {},
        N = v.toString,
        V = v.hasOwnProperty,
        F = {},
        K = a.document,
        g = function(d, b) {
            return new g.fn.init(d,
                b)
        },
        Ia = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        la = /^-ms-/,
        qb = /-([\da-z])/gi,
        rb = function(d, b) {
            return b.toUpperCase()
        };
    g.fn = g.prototype = {
        jquery: "2.1.3",
        constructor: g,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(d) {
            return null != d ? 0 > d ? this[d + this.length] : this[d] : c.call(this)
        },
        pushStack: function(d) {
            d = g.merge(this.constructor(), d);
            return d.prevObject = this, d.context = this.context, d
        },
        each: function(d, b) {
            return g.each(this, d, b)
        },
        map: function(d) {
            return this.pushStack(g.map(this, function(b,
                c) {
                return d.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(d) {
            var b = this.length;
            d = +d + (0 > d ? b : 0);
            return this.pushStack(0 <= d && b > d ? [this[d]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: m,
        sort: b.sort,
        splice: b.splice
    };
    g.extend = g.fn.extend = function() {
        var d, b, c, a, k, e, m = arguments[0] || {},
            l = 1,
            f = arguments.length,
            A = !1;
        "boolean" == typeof m && (A = m, m = arguments[l] || {}, l++);
        "object" == typeof m || g.isFunction(m) || (m = {});
        for (l === f && (m = this, l--); f > l; l++)
            if (null != (d = arguments[l]))
                for (b in d) c = m[b], a = d[b], m !== a && (A && a && (g.isPlainObject(a) || (k = g.isArray(a))) ? (k ? (k = !1, e = c && g.isArray(c) ? c : []) : e = c && g.isPlainObject(c) ? c : {}, m[b] = g.extend(A, e, a)) : void 0 !== a && (m[b] = a));
        return m
    };
    g.extend({
        expando: "jQuery" + ("2.1.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(d) {
            throw Error(d);
        },
        noop: function() {},
        isFunction: function(d) {
            return "function" === g.type(d)
        },
        isArray: Array.isArray,
        isWindow: function(d) {
            return null != d && d === d.window
        },
        isNumeric: function(d) {
            return !g.isArray(d) && 0 <= d - parseFloat(d) + 1
        },
        isPlainObject: function(d) {
            return "object" !== g.type(d) || d.nodeType || g.isWindow(d) ? !1 : d.constructor && !V.call(d.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(d) {
            for (var b in d) return !1;
            return !0
        },
        type: function(d) {
            return null == d ? d + "" : "object" == typeof d || "function" == typeof d ? v[N.call(d)] || "object" : typeof d
        },
        globalEval: function(d) {
            var b, c = eval;
            (d = g.trim(d)) && (1 === d.indexOf("use strict") ?
                (b = K.createElement("script"), b.text = d, K.head.appendChild(b).parentNode.removeChild(b)) : c(d))
        },
        camelCase: function(d) {
            return d.replace(la, "ms-").replace(qb, rb)
        },
        nodeName: function(d, b) {
            return d.nodeName && d.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(d, b, c) {
            var g, a = 0,
                k = d.length,
                e = f(d);
            if (c)
                if (e)
                    for (; k > a && (g = b.apply(d[a], c), !1 !== g); a++);
                else
                    for (a in d) {
                        if (g = b.apply(d[a], c), !1 === g) break
                    } else if (e)
                        for (; k > a && (g = b.call(d[a], a, d[a]), !1 !== g); a++);
                    else
                        for (a in d)
                            if (g = b.call(d[a], a, d[a]), !1 === g) break;
            return d
        },
        trim: function(d) {
            return null == d ? "" : (d + "").replace(Ia, "")
        },
        makeArray: function(d, b) {
            var c = b || [];
            return null != d && (f(Object(d)) ? g.merge(c, "string" == typeof d ? [d] : d) : m.call(c, d)), c
        },
        inArray: function(d, b, c) {
            return null == b ? -1 : A.call(b, d, c)
        },
        merge: function(d, b) {
            for (var c = +b.length, g = 0, a = d.length; c > g; g++) d[a++] = b[g];
            return d.length = a, d
        },
        grep: function(d, b, c) {
            for (var g = [], a = 0, k = d.length, e = !c; k > a; a++) c = !b(d[a], a), c !== e && g.push(d[a]);
            return g
        },
        map: function(d, b, c) {
            var g, a = 0,
                e = d.length,
                m = [];
            if (f(d))
                for (; e >
                    a; a++) g = b(d[a], a, c), null != g && m.push(g);
            else
                for (a in d) g = b(d[a], a, c), null != g && m.push(g);
            return k.apply([], m)
        },
        guid: 1,
        proxy: function(d, b) {
            var a, k, e;
            return "string" == typeof b && (a = d[b], b = d, d = a), g.isFunction(d) ? (k = c.call(arguments, 2), e = function() {
                return d.apply(b || this, k.concat(c.call(arguments)))
            }, e.guid = d.guid = d.guid || g.guid++, e) : void 0
        },
        now: Date.now,
        support: F
    });
    g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(d, b) {
        v["[object " + b + "]"] = b.toLowerCase()
    });
    var sa =
        function(d) {
            function b(d, c, g, a) {
                var y, t, k, e, m;
                if ((c ? c.ownerDocument || c : M) !== F && B(c), c = c || F, g = g || [], e = c.nodeType, "string" != typeof d || !d || 1 !== e && 9 !== e && 11 !== e) return g;
                if (!a && T) {
                    if (11 !== e && (y = za.exec(d)))
                        if (k = y[1])
                            if (9 === e) {
                                if (t = c.getElementById(k), !t || !t.parentNode) return g;
                                if (t.id === k) return g.push(t), g
                            } else {
                                if (c.ownerDocument && (t = c.ownerDocument.getElementById(k)) && E(c, t) && t.id === k) return g.push(t), g
                            } else {
                        if (y[2]) return la.apply(g, c.getElementsByTagName(d)), g;
                        if ((k = y[3]) && N.getElementsByClassName) return la.apply(g,
                            c.getElementsByClassName(k)), g
                    }
                    if (N.qsa && (!Q || !Q.test(d))) {
                        if (t = y = C, k = c, m = 1 !== e && d, 1 === e && "object" !== c.nodeName.toLowerCase()) {
                            e = I(d);
                            (y = c.getAttribute("id")) ? t = y.replace(Aa, "\\$&"): c.setAttribute("id", t);
                            t = "[id='" + t + "'] ";
                            for (k = e.length; k--;) e[k] = t + h(e[k]);
                            k = ra.test(d) && A(c.parentNode) || c;
                            m = e.join(",")
                        }
                        if (m) try {
                            return la.apply(g, k.querySelectorAll(m)), g
                        } catch (J) {} finally {
                            y || c.removeAttribute("id")
                        }
                    }
                }
                return V(d.replace(ka, "$1"), c, g, a)
            }

            function c() {
                function d(c, g) {
                    return b.push(c + " ") > n.cacheLength &&
                        delete d[b.shift()], d[c + " "] = g
                }
                var b = [];
                return d
            }

            function g(d) {
                return d[C] = !0, d
            }

            function a(d) {
                var b = F.createElement("div");
                try {
                    return !!d(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b)
                }
            }

            function k(d, b) {
                for (var c = d.split("|"), g = d.length; g--;) n.attrHandle[c[g]] = b
            }

            function e(d, b) {
                var c = b && d,
                    g = c && 1 === d.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~d.sourceIndex || -2147483648);
                if (g) return g;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return d ? 1 : -1
            }

            function m(d) {
                return function(b) {
                    return "input" ===
                        b.nodeName.toLowerCase() && b.type === d
                }
            }

            function l(d) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === d
                }
            }

            function f(d) {
                return g(function(b) {
                    return b = +b, g(function(c, g) {
                        for (var a, y = d([], c.length, b), t = y.length; t--;) c[a = y[t]] && (c[a] = !(g[a] = c[a]))
                    })
                })
            }

            function A(d) {
                return d && "undefined" != typeof d.getElementsByTagName && d
            }

            function s() {}

            function h(d) {
                for (var b = 0, c = d.length, g = ""; c > b; b++) g += d[b].value;
                return g
            }

            function v(d, b, c) {
                var g = b.dir,
                    a = c && "parentNode" === g,
                    y = R++;
                return b.first ? function(b, c, y) {
                    for (; b = b[g];)
                        if (1 === b.nodeType || a) return d(b, c, y)
                } : function(b, c, t) {
                    var k, e, m = [L, y];
                    if (t)
                        for (; b = b[g];) {
                            if ((1 === b.nodeType || a) && d(b, c, t)) return !0
                        } else
                            for (; b = b[g];)
                                if (1 === b.nodeType || a) {
                                    if (e = b[C] || (b[C] = {}), (k = e[g]) && k[0] === L && k[1] === y) return m[2] = k[2];
                                    if (e[g] = m, m[2] = d(b, c, t)) return !0
                                }
                }
            }

            function z(d) {
                return 1 < d.length ? function(b, c, g) {
                    for (var a = d.length; a--;)
                        if (!d[a](b, c, g)) return !1;
                    return !0
                } : d[0]
            }

            function q(d, b, c, g, a) {
                for (var y, t = [], k = 0, e = d.length, m = null != b; e > k; k++)(y =
                    d[k]) && (!c || c(y, g, a)) && (t.push(y), m && b.push(k));
                return t
            }

            function p(d, c, a, t, k, e) {
                return t && !t[C] && (t = p(t)), k && !k[C] && (k = p(k, e)), g(function(g, e, m, J) {
                    var l, W, f = [],
                        A = [],
                        ea = e.length,
                        s;
                    if (!(s = g)) {
                        s = c || "*";
                        for (var h = m.nodeType ? [m] : m, Ba = [], v = 0, z = h.length; z > v; v++) b(s, h[v], Ba);
                        s = Ba
                    }
                    s = !d || !g && c ? s : q(s, f, d, m, J);
                    h = a ? k || (g ? d : ea || t) ? [] : e : s;
                    if (a && a(s, h, m, J), t)
                        for (l = q(h, A), t(l, [], m, J), m = l.length; m--;)(W = l[m]) && (h[A[m]] = !(s[A[m]] = W));
                    if (g) {
                        if (k || d) {
                            if (k) {
                                l = [];
                                for (m = h.length; m--;)(W = h[m]) && l.push(s[m] = W);
                                k(null, h = [],
                                    l, J)
                            }
                            for (m = h.length; m--;)(W = h[m]) && -1 < (l = k ? ca(g, W) : f[m]) && (g[l] = !(e[l] = W))
                        }
                    } else h = q(h === e ? h.splice(ea, h.length) : h), k ? k(null, e, h, J) : la.apply(e, h)
                })
            }

            function r(d) {
                var b, c, g, a = d.length,
                    y = n.relative[d[0].type];
                c = y || n.relative[" "];
                for (var t = y ? 1 : 0, k = v(function(d) {
                        return d === b
                    }, c, !0), e = v(function(d) {
                        return -1 < ca(b, d)
                    }, c, !0), m = [function(d, c, g) {
                        d = !y && (g || c !== K) || ((b = c).nodeType ? k(d, c, g) : e(d, c, g));
                        return b = null, d
                    }]; a > t; t++)
                    if (c = n.relative[d[t].type]) m = [v(z(m), c)];
                    else {
                        if (c = n.filter[d[t].type].apply(null, d[t].matches),
                            c[C]) {
                            for (g = ++t; a > g && !n.relative[d[g].type]; g++);
                            return p(1 < t && z(m), 1 < t && h(d.slice(0, t - 1).concat({
                                value: " " === d[t - 2].type ? "*" : ""
                            })).replace(ka, "$1"), c, g > t && r(d.slice(t, g)), a > g && r(d = d.slice(g)), a > g && h(d))
                        }
                        m.push(c)
                    }
                return z(m)
            }

            function U(d, c) {
                var a = 0 < c.length,
                    t = 0 < d.length,
                    k = function(g, k, e, m, J) {
                        var l, W, f, A = 0,
                            ea = "0",
                            s = g && [],
                            h = [],
                            Ba = K,
                            v = g || t && n.find.TAG("*", J),
                            z = L += null == Ba ? 1 : Math.random() || .1,
                            p = v.length;
                        for (J && (K = k !== F && k); ea !== p && null != (l = v[ea]); ea++) {
                            if (t && l) {
                                for (W = 0; f = d[W++];)
                                    if (f(l, k, e)) {
                                        m.push(l);
                                        break
                                    }
                                J && (L = z)
                            }
                            a && ((l = !f && l) && A--, g && s.push(l))
                        }
                        if (A += ea, a && ea !== A) {
                            for (W = 0; f = c[W++];) f(s, h, k, e);
                            if (g) {
                                if (0 < A)
                                    for (; ea--;) s[ea] || h[ea] || (h[ea] = Ia.call(m));
                                h = q(h)
                            }
                            la.apply(m, h);
                            J && !g && 0 < h.length && 1 < A + c.length && b.uniqueSort(m)
                        }
                        return J && (L = z, K = Ba), s
                    };
                return a ? g(k) : k
            }
            var H, N, n, x, G, I, w, V, K, u, O, B, F, D, T, Q, P, X, E, C = "sizzle" + 1 * new Date,
                M = d.document,
                L = 0,
                R = 0,
                S = c(),
                Z = c(),
                ba = c(),
                aa = function(d, b) {
                    return d === b && (O = !0), 0
                },
                da = {}.hasOwnProperty,
                Y = [],
                Ia = Y.pop,
                ga = Y.push,
                la = Y.push,
                fa = Y.slice,
                ca = function(d, b) {
                    for (var c =
                            0, g = d.length; g > c; c++)
                        if (d[c] === b) return c;
                    return -1
                },
                ha = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
                ia = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ha + "))|)[\\x20\\t\\r\\n\\f]*\\]",
                ja = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ia + ")*)|.*)\\)|)",
                ma = /[\x20\t\r\n\f]+/g,
                ka = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                qa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                sa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                ta = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
                ua = new RegExp(ja),
                va = new RegExp("^" + ha + "$"),
                na = {
                    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ia),
                    PSEUDO: new RegExp("^" + ja),
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
                pa = function(d, b, c) {
                    d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                wa = function() {
                    B()
                };
            try {
                la.apply(Y = fa.call(M.childNodes), M.childNodes), Y[M.childNodes.length].nodeType
            } catch (Da) {
                la = {
                    apply: Y.length ? function(d, b) {
                        ga.apply(d, fa.call(b))
                    } : function(d, b) {
                        for (var c = d.length, g = 0; d[c++] = b[g++];);
                        d.length = c - 1
                    }
                }
            }
            N = b.support = {};
            G = b.isXML = function(d) {
                return (d = d && (d.ownerDocument || d).documentElement) ? "HTML" !== d.nodeName : !1
            };
            B = b.setDocument = function(d) {
                var b, c, g = d ? d.ownerDocument ||
                    d : M;
                return g !== F && 9 === g.nodeType && g.documentElement ? (F = g, D = g.documentElement, c = g.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), T = !G(g), N.attributes = a(function(d) {
                        return d.className = "i", !d.getAttribute("className")
                    }), N.getElementsByTagName = a(function(d) {
                        return d.appendChild(g.createComment("")), !d.getElementsByTagName("*").length
                    }), N.getElementsByClassName = Ca.test(g.getElementsByClassName), N.getById = a(function(d) {
                        return D.appendChild(d).id =
                            C, !g.getElementsByName || !g.getElementsByName(C).length
                    }), N.getById ? (n.find.ID = function(d, b) {
                        if ("undefined" != typeof b.getElementById && T) {
                            var c = b.getElementById(d);
                            return c && c.parentNode ? [c] : []
                        }
                    }, n.filter.ID = function(d) {
                        var b = d.replace(oa, pa);
                        return function(d) {
                            return d.getAttribute("id") === b
                        }
                    }) : (delete n.find.ID, n.filter.ID = function(d) {
                        var b = d.replace(oa, pa);
                        return function(d) {
                            return (d = "undefined" != typeof d.getAttributeNode && d.getAttributeNode("id")) && d.value === b
                        }
                    }), n.find.TAG = N.getElementsByTagName ?
                    function(d, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(d) : N.qsa ? b.querySelectorAll(d) : void 0
                    } : function(d, b) {
                        var c, g = [],
                            a = 0,
                            y = b.getElementsByTagName(d);
                        if ("*" === d) {
                            for (; c = y[a++];) 1 === c.nodeType && g.push(c);
                            return g
                        }
                        return y
                    }, n.find.CLASS = N.getElementsByClassName && function(d, b) {
                        return T ? b.getElementsByClassName(d) : void 0
                    }, P = [], Q = [], (N.qsa = Ca.test(g.querySelectorAll)) && (a(function(d) {
                        D.appendChild(d).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\f]' msallowcapture=''><option selected=''></option></select>";
                        d.querySelectorAll("[msallowcapture^='']").length && Q.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        d.querySelectorAll("[selected]").length || Q.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        d.querySelectorAll("[id~=" + C + "-]").length || Q.push("~=");
                        d.querySelectorAll(":checked").length || Q.push(":checked");
                        d.querySelectorAll("a#" + C + "+*").length || Q.push(".#.+[+~]")
                    }), a(function(d) {
                        var b =
                            g.createElement("input");
                        b.setAttribute("type", "hidden");
                        d.appendChild(b).setAttribute("name", "D");
                        d.querySelectorAll("[name=d]").length && Q.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                        d.querySelectorAll(":enabled").length || Q.push(":enabled", ":disabled");
                        d.querySelectorAll("*,:x");
                        Q.push(",.*:")
                    })), (N.matchesSelector = Ca.test(X = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && a(function(d) {
                        N.disconnectedMatch = X.call(d, "div");
                        X.call(d, "[s!='']:x");
                        P.push("!=",
                            ja)
                    }), Q = Q.length && new RegExp(Q.join("|")), P = P.length && new RegExp(P.join("|")), b = Ca.test(D.compareDocumentPosition), E = b || Ca.test(D.contains) ? function(d, b) {
                        var c = 9 === d.nodeType ? d.documentElement : d,
                            g = b && b.parentNode;
                        return d === g || !(!g || 1 !== g.nodeType || !(c.contains ? c.contains(g) : d.compareDocumentPosition && 16 & d.compareDocumentPosition(g)))
                    } : function(d, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === d) return !0;
                        return !1
                    }, aa = b ? function(d, b) {
                        if (d === b) return O = !0, 0;
                        var c = !d.compareDocumentPosition - !b.compareDocumentPosition;
                        return c ? c : (c = (d.ownerDocument || d) === (b.ownerDocument || b) ? d.compareDocumentPosition(b) : 1, 1 & c || !N.sortDetached && b.compareDocumentPosition(d) === c ? d === g || d.ownerDocument === M && E(M, d) ? -1 : b === g || b.ownerDocument === M && E(M, b) ? 1 : u ? ca(u, d) - ca(u, b) : 0 : 4 & c ? -1 : 1)
                    } : function(d, b) {
                        if (d === b) return O = !0, 0;
                        var c, a = 0;
                        c = d.parentNode;
                        var y = b.parentNode,
                            t = [d],
                            k = [b];
                        if (!c || !y) return d === g ? -1 : b === g ? 1 : c ? -1 : y ? 1 : u ? ca(u, d) - ca(u, b) : 0;
                        if (c === y) return e(d, b);
                        for (c = d; c = c.parentNode;) t.unshift(c);
                        for (c = b; c = c.parentNode;) k.unshift(c);
                        for (; t[a] === k[a];) a++;
                        return a ? e(t[a], k[a]) : t[a] === M ? -1 : k[a] === M ? 1 : 0
                    }, g) : F
            };
            b.matches = function(d, c) {
                return b(d, null, null, c)
            };
            b.matchesSelector = function(d, c) {
                if ((d.ownerDocument || d) !== F && B(d), c = c.replace(ta, "='$1']"), !(!N.matchesSelector || !T || P && P.test(c) || Q && Q.test(c))) try {
                    var g = X.call(d, c);
                    if (g || N.disconnectedMatch || d.document && 11 !== d.document.nodeType) return g
                } catch (a) {}
                return 0 < b(c, F, null, [d]).length
            };
            b.contains = function(d, b) {
                return (d.ownerDocument || d) !== F && B(d), E(d, b)
            };
            b.attr = function(d, b) {
                (d.ownerDocument ||
                    d) !== F && B(d);
                var c = n.attrHandle[b.toLowerCase()],
                    c = c && da.call(n.attrHandle, b.toLowerCase()) ? c(d, b, !T) : void 0;
                return void 0 !== c ? c : N.attributes || !T ? d.getAttribute(b) : (c = d.getAttributeNode(b)) && c.specified ? c.value : null
            };
            b.error = function(d) {
                throw Error("Syntax error, unrecognized expression: " + d);
            };
            b.uniqueSort = function(d) {
                var b, c = [],
                    g = 0,
                    a = 0;
                if (O = !N.detectDuplicates, u = !N.sortStable && d.slice(0), d.sort(aa), O) {
                    for (; b = d[a++];) b === d[a] && (g = c.push(a));
                    for (; g--;) d.splice(c[g], 1)
                }
                return u = null, d
            };
            x = b.getText =
                function(d) {
                    var b, c = "",
                        g = 0;
                    if (b = d.nodeType)
                        if (1 === b || 9 === b || 11 === b) {
                            if ("string" == typeof d.textContent) return d.textContent;
                            for (d = d.firstChild; d; d = d.nextSibling) c += x(d)
                        } else {
                            if (3 === b || 4 === b) return d.nodeValue
                        } else
                        for (; b = d[g++];) c += x(b);
                    return c
                };
            n = b.selectors = {
                cacheLength: 50,
                createPseudo: g,
                match: na,
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
                    ATTR: function(d) {
                        return d[1] = d[1].replace(oa,
                            pa), d[3] = (d[3] || d[4] || d[5] || "").replace(oa, pa), "~=" === d[2] && (d[3] = " " + d[3] + " "), d.slice(0, 4)
                    },
                    CHILD: function(d) {
                        return d[1] = d[1].toLowerCase(), "nth" === d[1].slice(0, 3) ? (d[3] || b.error(d[0]), d[4] = +(d[4] ? d[5] + (d[6] || 1) : 2 * ("even" === d[3] || "odd" === d[3])), d[5] = +(d[7] + d[8] || "odd" === d[3])) : d[3] && b.error(d[0]), d
                    },
                    PSEUDO: function(d) {
                        var b, c = !d[6] && d[2];
                        return na.CHILD.test(d[0]) ? null : (d[3] ? d[2] = d[4] || d[5] || "" : c && ua.test(c) && (b = I(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (d[0] = d[0].slice(0, b), d[2] = c.slice(0,
                            b)), d.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(d) {
                        var b = d.replace(oa, pa).toLowerCase();
                        return "*" === d ? function() {
                            return !0
                        } : function(d) {
                            return d.nodeName && d.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(d) {
                        var b = S[d + " "];
                        return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + d + "([\\x20\\t\\r\\n\\f]|$)")) && S(d, function(d) {
                            return b.test("string" == typeof d.className && d.className || "undefined" != typeof d.getAttribute && d.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(d, c, g) {
                        return function(a) {
                            a = b.attr(a, d);
                            return null == a ?
                                "!=" === c : c ? (a += "", "=" === c ? a === g : "!=" === c ? a !== g : "^=" === c ? g && 0 === a.indexOf(g) : "*=" === c ? g && -1 < a.indexOf(g) : "$=" === c ? g && a.slice(-g.length) === g : "~=" === c ? -1 < (" " + a.replace(ma, " ") + " ").indexOf(g) : "|=" === c ? a === g || a.slice(0, g.length + 1) === g + "-" : !1) : !0
                        }
                    },
                    CHILD: function(d, b, c, g, a) {
                        var y = "nth" !== d.slice(0, 3),
                            t = "last" !== d.slice(-4),
                            k = "of-type" === b;
                        return 1 === g && 0 === a ? function(d) {
                            return !!d.parentNode
                        } : function(b, c, e) {
                            var m, J, l, W, f;
                            c = y !== t ? "nextSibling" : "previousSibling";
                            var A = b.parentNode,
                                ea = k && b.nodeName.toLowerCase();
                            e = !e && !k;
                            if (A) {
                                if (y) {
                                    for (; c;) {
                                        for (J = b; J = J[c];)
                                            if (k ? J.nodeName.toLowerCase() === ea : 1 === J.nodeType) return !1;
                                        f = c = "only" === d && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [t ? A.firstChild : A.lastChild], t && e)
                                    for (e = A[C] || (A[C] = {}), m = e[d] || [], W = m[0] === L && m[1], l = m[0] === L && m[2], J = W && A.childNodes[W]; J = ++W && J && J[c] || (l = W = 0) || f.pop();) {
                                        if (1 === J.nodeType && ++l && J === b) {
                                            e[d] = [L, W, l];
                                            break
                                        }
                                    } else if (e && (m = (b[C] || (b[C] = {}))[d]) && m[0] === L) l = m[1];
                                    else
                                        for (;
                                            (J = ++W && J && J[c] || (l = W = 0) || f.pop()) && ((k ? J.nodeName.toLowerCase() !== ea : 1 !== J.nodeType) ||
                                                !++l || (e && ((J[C] || (J[C] = {}))[d] = [L, l]), J !== b)););
                                return l -= a, l === g || 0 === l % g && 0 <= l / g
                            }
                        }
                    },
                    PSEUDO: function(d, c) {
                        var a, t = n.pseudos[d] || n.setFilters[d.toLowerCase()] || b.error("unsupported pseudo: " + d);
                        return t[C] ? t(c) : 1 < t.length ? (a = [d, d, "", c], n.setFilters.hasOwnProperty(d.toLowerCase()) ? g(function(d, b) {
                            for (var g, a = t(d, c), y = a.length; y--;) g = ca(d, a[y]), d[g] = !(b[g] = a[y])
                        }) : function(d) {
                            return t(d, 0, a)
                        }) : t
                    }
                },
                pseudos: {
                    not: g(function(d) {
                        var b = [],
                            c = [],
                            a = w(d.replace(ka, "$1"));
                        return a[C] ? g(function(d, b, c, g) {
                            var y;
                            c = a(d, null, g, []);
                            for (g = d.length; g--;)(y = c[g]) && (d[g] = !(b[g] = y))
                        }) : function(d, g, y) {
                            return b[0] = d, a(b, null, y, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: g(function(d) {
                        return function(c) {
                            return 0 < b(d, c).length
                        }
                    }),
                    contains: g(function(d) {
                        return d = d.replace(oa, pa),
                            function(b) {
                                return -1 < (b.textContent || b.innerText || x(b)).indexOf(d)
                            }
                    }),
                    lang: g(function(d) {
                        return va.test(d || "") || b.error("unsupported lang: " + d), d = d.replace(oa, pa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = T ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c =
                                        c.toLowerCase(), c === d || 0 === c.indexOf(d + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = d.location && d.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(d) {
                        return d === D
                    },
                    focus: function(d) {
                        return d === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(d.type || d.href || ~d.tabIndex)
                    },
                    enabled: function(d) {
                        return !1 === d.disabled
                    },
                    disabled: function(d) {
                        return !0 === d.disabled
                    },
                    checked: function(d) {
                        var b = d.nodeName.toLowerCase();
                        return "input" === b && !!d.checked || "option" === b &&
                            !!d.selected
                    },
                    selected: function(d) {
                        return d.parentNode && d.parentNode.selectedIndex, !0 === d.selected
                    },
                    empty: function(d) {
                        for (d = d.firstChild; d; d = d.nextSibling)
                            if (6 > d.nodeType) return !1;
                        return !0
                    },
                    parent: function(d) {
                        return !n.pseudos.empty(d)
                    },
                    header: function(d) {
                        return ya.test(d.nodeName)
                    },
                    input: function(d) {
                        return xa.test(d.nodeName)
                    },
                    button: function(d) {
                        var b = d.nodeName.toLowerCase();
                        return "input" === b && "button" === d.type || "button" === b
                    },
                    text: function(d) {
                        var b;
                        return "input" === d.nodeName.toLowerCase() && "text" ===
                            d.type && (null == (b = d.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: f(function() {
                        return [0]
                    }),
                    last: f(function(d, b) {
                        return [b - 1]
                    }),
                    eq: f(function(d, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: f(function(d, b) {
                        for (var c = 0; b > c; c += 2) d.push(c);
                        return d
                    }),
                    odd: f(function(d, b) {
                        for (var c = 1; b > c; c += 2) d.push(c);
                        return d
                    }),
                    lt: f(function(d, b, c) {
                        for (b = 0 > c ? c + b : c; 0 <= --b;) d.push(b);
                        return d
                    }),
                    gt: f(function(d, b, c) {
                        for (c = 0 > c ? c + b : c; ++c < b;) d.push(c);
                        return d
                    })
                }
            };
            n.pseudos.nth = n.pseudos.eq;
            for (H in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[H] = m(H);
            for (H in {
                    submit: !0,
                    reset: !0
                }) n.pseudos[H] = l(H);
            s.prototype = n.filters = n.pseudos;
            n.setFilters = new s;
            I = b.tokenize = function(d, c) {
                var g, a, t, k, e, m, J;
                if (e = Z[d + " "]) return c ? 0 : e.slice(0);
                e = d;
                m = [];
                for (J = n.preFilter; e;) {
                    g && !(a = qa.exec(e)) || (a && (e = e.slice(a[0].length) || e), m.push(t = []));
                    g = !1;
                    (a = sa.exec(e)) && (g = a.shift(), t.push({
                        value: g,
                        type: a[0].replace(ka, " ")
                    }), e = e.slice(g.length));
                    for (k in n.filter) !(a = na[k].exec(e)) || J[k] && !(a = J[k](a)) || (g = a.shift(), t.push({
                            value: g,
                            type: k,
                            matches: a
                        }),
                        e = e.slice(g.length));
                    if (!g) break
                }
                return c ? e.length : e ? b.error(d) : Z(d, m).slice(0)
            };
            return w = b.compile = function(d, b) {
                    var c, g = [],
                        a = [],
                        y = ba[d + " "];
                    if (!y) {
                        b || (b = I(d));
                        for (c = b.length; c--;) y = r(b[c]), y[C] ? g.push(y) : a.push(y);
                        y = ba(d, U(a, g));
                        y.selector = d
                    }
                    return y
                }, V = b.select = function(d, b, c, g) {
                    var a, y, t, k, e, m = "function" == typeof d && d,
                        J = !g && I(d = m.selector || d);
                    if (c = c || [], 1 === J.length) {
                        if (y = J[0] = J[0].slice(0), 2 < y.length && "ID" === (t = y[0]).type && N.getById && 9 === b.nodeType && T && n.relative[y[1].type]) {
                            if (b = (n.find.ID(t.matches[0].replace(oa,
                                    pa), b) || [])[0], !b) return c;
                            m && (b = b.parentNode);
                            d = d.slice(y.shift().value.length)
                        }
                        for (a = na.needsContext.test(d) ? 0 : y.length; a-- && (t = y[a], !n.relative[k = t.type]);)
                            if ((e = n.find[k]) && (g = e(t.matches[0].replace(oa, pa), ra.test(y[0].type) && A(b.parentNode) || b))) {
                                if (y.splice(a, 1), d = g.length && h(y), !d) return la.apply(c, g), c;
                                break
                            }
                    }
                    return (m || w(d, J))(g, b, !T, c, ra.test(d) && A(b.parentNode) || b), c
                }, N.sortStable = C.split("").sort(aa).join("") === C, N.detectDuplicates = !!O, B(), N.sortDetached = a(function(d) {
                    return 1 & d.compareDocumentPosition(F.createElement("div"))
                }),
                a(function(d) {
                    return d.innerHTML = "<a href='#'></a>", "#" === d.firstChild.getAttribute("href")
                }) || k("type|href|height|width", function(d, b, c) {
                    return c ? void 0 : d.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), N.attributes && a(function(d) {
                    return d.innerHTML = "<input/>", d.firstChild.setAttribute("value", ""), "" === d.firstChild.getAttribute("value")
                }) || k("value", function(d, b, c) {
                    return c || "input" !== d.nodeName.toLowerCase() ? void 0 : d.defaultValue
                }), a(function(d) {
                    return null == d.getAttribute("disabled")
                }) || k("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    function(d, b, c) {
                        var g;
                        return c ? void 0 : !0 === d[b] ? b.toLowerCase() : (g = d.getAttributeNode(b)) && g.specified ? g.value : null
                    }), b
        }(a);
    g.find = sa;
    g.expr = sa.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique = sa.uniqueSort;
    g.text = sa.getText;
    g.isXMLDoc = sa.isXML;
    g.contains = sa.contains;
    var Sa = g.expr.match.needsContext,
        Ta = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        kb = /^.[^:#\[\.,]*$/;
    g.filter = function(d, b, c) {
        var a = b[0];
        return c && (d = ":not(" + d + ")"), 1 === b.length && 1 === a.nodeType ? g.find.matchesSelector(a, d) ? [a] : [] : g.find.matches(d, g.grep(b,
            function(d) {
                return 1 === d.nodeType
            }))
    };
    g.fn.extend({
        find: function(d) {
            var b, c = this.length,
                a = [],
                k = this;
            if ("string" != typeof d) return this.pushStack(g(d).filter(function() {
                for (b = 0; c > b; b++)
                    if (g.contains(k[b], this)) return !0
            }));
            for (b = 0; c > b; b++) g.find(d, k[b], a);
            return a = this.pushStack(1 < c ? g.unique(a) : a), a.selector = this.selector ? this.selector + " " + d : d, a
        },
        filter: function(d) {
            return this.pushStack(u(this, d || [], !1))
        },
        not: function(d) {
            return this.pushStack(u(this, d || [], !0))
        },
        is: function(d) {
            return !!u(this, "string" ==
                typeof d && Sa.test(d) ? g(d) : d || [], !1).length
        }
    });
    var Aa, tb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (g.fn.init = function(d, b) {
        var c, a;
        if (!d) return this;
        if ("string" == typeof d) {
            if (c = "<" === d[0] && ">" === d[d.length - 1] && 3 <= d.length ? [null, d, null] : tb.exec(d), !c || !c[1] && b) return !b || b.jquery ? (b || Aa).find(d) : this.constructor(b).find(d);
            if (c[1]) {
                if (b = b instanceof g ? b[0] : b, g.merge(this, g.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : K, !0)), Ta.test(c[1]) && g.isPlainObject(b))
                    for (c in b) g.isFunction(this[c]) ? this[c](b[c]) :
                        this.attr(c, b[c]);
                return this
            }
            return a = K.getElementById(c[2]), a && a.parentNode && (this.length = 1, this[0] = a), this.context = K, this.selector = d, this
        }
        return d.nodeType ? (this.context = this[0] = d, this.length = 1, this) : g.isFunction(d) ? "undefined" != typeof Aa.ready ? Aa.ready(d) : d(g) : (void 0 !== d.selector && (this.selector = d.selector, this.context = d.context), g.makeArray(d, this))
    }).prototype = g.fn;
    Aa = g(K);
    var ub = /^(?:parents|prev(?:Until|All))/,
        vb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    g.extend({
        dir: function(d, b, c) {
            for (var a = [], k = void 0 !== c;
                (d = d[b]) && 9 !== d.nodeType;)
                if (1 === d.nodeType) {
                    if (k && g(d).is(c)) break;
                    a.push(d)
                }
            return a
        },
        sibling: function(d, b) {
            for (var c = []; d; d = d.nextSibling) 1 === d.nodeType && d !== b && c.push(d);
            return c
        }
    });
    g.fn.extend({
        has: function(d) {
            var b = g(d, this),
                c = b.length;
            return this.filter(function() {
                for (var d = 0; c > d; d++)
                    if (g.contains(this, b[d])) return !0
            })
        },
        closest: function(d, b) {
            for (var c, a = 0, k = this.length, e = [], m = Sa.test(d) || "string" != typeof d ? g(d, b || this.context) : 0; k > a; a++)
                for (c = this[a]; c && c !== b; c = c.parentNode)
                    if (11 >
                        c.nodeType && (m ? -1 < m.index(c) : 1 === c.nodeType && g.find.matchesSelector(c, d))) {
                        e.push(c);
                        break
                    }
            return this.pushStack(1 < e.length ? g.unique(e) : e)
        },
        index: function(d) {
            return d ? "string" == typeof d ? A.call(g(d), this[0]) : A.call(this, d.jquery ? d[0] : d) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(d, b) {
            return this.pushStack(g.unique(g.merge(this.get(), g(d, b))))
        },
        addBack: function(d) {
            return this.add(null == d ? this.prevObject : this.prevObject.filter(d))
        }
    });
    g.each({
        parent: function(d) {
            return (d =
                d.parentNode) && 11 !== d.nodeType ? d : null
        },
        parents: function(d) {
            return g.dir(d, "parentNode")
        },
        parentsUntil: function(d, b, c) {
            return g.dir(d, "parentNode", c)
        },
        next: function(d) {
            return x(d, "nextSibling")
        },
        prev: function(d) {
            return x(d, "previousSibling")
        },
        nextAll: function(d) {
            return g.dir(d, "nextSibling")
        },
        prevAll: function(d) {
            return g.dir(d, "previousSibling")
        },
        nextUntil: function(d, b, c) {
            return g.dir(d, "nextSibling", c)
        },
        prevUntil: function(d, b, c) {
            return g.dir(d, "previousSibling", c)
        },
        siblings: function(d) {
            return g.sibling((d.parentNode || {}).firstChild, d)
        },
        children: function(d) {
            return g.sibling(d.firstChild)
        },
        contents: function(d) {
            return d.contentDocument || g.merge([], d.childNodes)
        }
    }, function(d, b) {
        g.fn[d] = function(c, a) {
            var k = g.map(this, b, c);
            return "Until" !== d.slice(-5) && (a = c), a && "string" == typeof a && (k = g.filter(a, k)), 1 < this.length && (vb[d] || g.unique(k), ub.test(d) && k.reverse()), this.pushStack(k)
        }
    });
    var ia = /\S+/g,
        Oa = {};
    g.Callbacks = function(d) {
        d = "string" == typeof d ? Oa[d] || p(d) : g.extend({}, d);
        var b, c, a, k, e, m, l = [],
            f = !d.once && [],
            A = function(g) {
                b =
                    d.memory && g;
                c = !0;
                m = k || 0;
                k = 0;
                e = l.length;
                for (a = !0; l && e > m; m++)
                    if (!1 === l[m].apply(g[0], g[1]) && d.stopOnFalse) {
                        b = !1;
                        break
                    }
                a = !1;
                l && (f ? f.length && A(f.shift()) : b ? l = [] : s.disable())
            },
            s = {
                add: function() {
                    if (l) {
                        var c = l.length;
                        ! function sb(b) {
                            g.each(b, function(b, c) {
                                var a = g.type(c);
                                "function" === a ? d.unique && s.has(c) || l.push(c) : c && c.length && "string" !== a && sb(c)
                            })
                        }(arguments);
                        a ? e = l.length : b && (k = c, A(b))
                    }
                    return this
                },
                remove: function() {
                    return l && g.each(arguments, function(d, b) {
                        for (var c; - 1 < (c = g.inArray(b, l, c));) l.splice(c,
                            1), a && (e >= c && e--, m >= c && m--)
                    }), this
                },
                has: function(d) {
                    return d ? -1 < g.inArray(d, l) : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], e = 0, this
                },
                disable: function() {
                    return l = f = b = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return f = void 0, b || s.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(d, b) {
                    return !l || c && !f || (b = b || [], b = [d, b.slice ? b.slice() : b], a ? f.push(b) : A(b)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return s
    };
    g.extend({
        Deferred: function(d) {
            var b = [
                    ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", g.Callbacks("memory")]
                ],
                c = "pending",
                a = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return k.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var d = arguments;
                        return g.Deferred(function(c) {
                            g.each(b, function(b, y) {
                                var t = g.isFunction(d[b]) && d[b];
                                k[y[1]](function() {
                                    var d = t && t.apply(this, arguments);
                                    d && g.isFunction(d.promise) ? d.promise().done(c.resolve).fail(c.reject).progress(c.notify) :
                                        c[y[0] + "With"](this === a ? c.promise() : this, t ? [d] : arguments)
                                })
                            });
                            d = null
                        }).promise()
                    },
                    promise: function(d) {
                        return null != d ? g.extend(d, a) : a
                    }
                },
                k = {};
            return a.pipe = a.then, g.each(b, function(d, g) {
                var e = g[2],
                    m = g[3];
                a[g[1]] = e.add;
                m && e.add(function() {
                    c = m
                }, b[1 ^ d][2].disable, b[2][2].lock);
                k[g[0]] = function() {
                    return k[g[0] + "With"](this === k ? a : this, arguments), this
                };
                k[g[0] + "With"] = e.fireWith
            }), a.promise(k), d && d.call(k, k), k
        },
        when: function(d) {
            var b = 0,
                a = c.call(arguments),
                k = a.length,
                e = 1 !== k || d && g.isFunction(d.promise) ? k : 0,
                m = 1 === e ? d : g.Deferred(),
                l = function(d, b, g) {
                    return function(a) {
                        b[d] = this;
                        g[d] = 1 < arguments.length ? c.call(arguments) : a;
                        g === f ? m.notifyWith(b, g) : --e || m.resolveWith(b, g)
                    }
                },
                f, A, s;
            if (1 < k)
                for (f = Array(k), A = Array(k), s = Array(k); k > b; b++) a[b] && g.isFunction(a[b].promise) ? a[b].promise().done(l(b, s, a)).fail(m.reject).progress(l(b, A, f)) : --e;
            return e || m.resolveWith(s, a), m.promise()
        }
    });
    var wa;
    g.fn.ready = function(d) {
        return g.ready.promise().done(d), this
    };
    g.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(d) {
            d ? g.readyWait++ :
                g.ready(!0)
        },
        ready: function(d) {
            (!0 === d ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== d && 0 < --g.readyWait || (wa.resolveWith(K, [g]), g.fn.triggerHandler && (g(K).triggerHandler("ready"), g(K).off("ready"))))
        }
    });
    g.ready.promise = function(d) {
        return wa || (wa = g.Deferred(), "complete" === K.readyState ? setTimeout(g.ready) : (K.addEventListener("DOMContentLoaded", r, !1), a.addEventListener("load", r, !1))), wa.promise(d)
    };
    g.ready.promise();
    var ma = g.access = function(d, b, c, a, k, e, m) {
        var l = 0,
            f = d.length,
            A = null == c;
        if ("object" === g.type(c))
            for (l in k = !0, c) g.access(d, b, l, c[l], !0, e, m);
        else if (void 0 !== a && (k = !0, g.isFunction(a) || (m = !0), A && (m ? (b.call(d, a), b = null) : (A = b, b = function(d, b, c) {
                return A.call(g(d), c)
            })), b))
            for (; f > l; l++) b(d[l], c, m ? a : a.call(d[l], l, b(d[l], c)));
        return k ? d : A ? b.call(d) : f ? b(d[0], c) : e
    };
    g.acceptData = function(d) {
        return 1 === d.nodeType || 9 === d.nodeType || !+d.nodeType
    };
    n.uid = 1;
    n.accepts = g.acceptData;
    n.prototype = {
        key: function(d) {
            if (!n.accepts(d)) return 0;
            var b = {},
                c = d[this.expando];
            if (!c) {
                c = n.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(d,
                        b)
                } catch (a) {
                    b[this.expando] = c, g.extend(d, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(d, b, c) {
            var a;
            d = this.key(d);
            var k = this.cache[d];
            if ("string" == typeof b) k[b] = c;
            else if (g.isEmptyObject(k)) g.extend(this.cache[d], b);
            else
                for (a in b) k[a] = b[a];
            return k
        },
        get: function(d, b) {
            var c = this.cache[this.key(d)];
            return void 0 === b ? c : c[b]
        },
        access: function(d, b, c) {
            var a;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (a = this.get(d, b), void 0 !== a ? a : this.get(d, g.camelCase(b))) : (this.set(d, b, c), void 0 !==
                c ? c : b)
        },
        remove: function(d, b) {
            var c, a, k = this.key(d),
                e = this.cache[k];
            if (void 0 === b) this.cache[k] = {};
            else
                for (g.isArray(b) ? a = b.concat(b.map(g.camelCase)) : (c = g.camelCase(b), b in e ? a = [b, c] : (a = c, a = a in e ? [a] : a.match(ia) || [])), c = a.length; c--;) delete e[a[c]]
        },
        hasData: function(d) {
            return !g.isEmptyObject(this.cache[d[this.expando]] || {})
        },
        discard: function(d) {
            d[this.expando] && delete this.cache[d[this.expando]]
        }
    };
    var E = new n,
        aa = new n,
        mb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        lb = /([A-Z])/g;
    g.extend({
        hasData: function(d) {
            return aa.hasData(d) ||
                E.hasData(d)
        },
        data: function(d, b, c) {
            return aa.access(d, b, c)
        },
        removeData: function(d, b) {
            aa.remove(d, b)
        },
        _data: function(d, b, c) {
            return E.access(d, b, c)
        },
        _removeData: function(d, b) {
            E.remove(d, b)
        }
    });
    g.fn.extend({
        data: function(d, b) {
            var c, a, k, e = this[0],
                m = e && e.attributes;
            if (void 0 === d) {
                if (this.length && (k = aa.get(e), 1 === e.nodeType && !E.get(e, "hasDataAttrs"))) {
                    for (c = m.length; c--;) m[c] && (a = m[c].name, 0 === a.indexOf("data-") && (a = g.camelCase(a.slice(5)), w(e, a, k[a])));
                    E.set(e, "hasDataAttrs", !0)
                }
                return k
            }
            return "object" ==
                typeof d ? this.each(function() {
                    aa.set(this, d)
                }) : ma(this, function(b) {
                    var c, a = g.camelCase(d);
                    if (e && void 0 === b) {
                        if ((c = aa.get(e, d), void 0 !== c) || (c = aa.get(e, a), void 0 !== c) || (c = w(e, a, void 0), void 0 !== c)) return c
                    } else this.each(function() {
                        var c = aa.get(this, a);
                        aa.set(this, a, b); - 1 !== d.indexOf("-") && void 0 !== c && aa.set(this, d, b)
                    })
                }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(d) {
            return this.each(function() {
                aa.remove(this, d)
            })
        }
    });
    g.extend({
        queue: function(d, b, c) {
            var a;
            return d ? (b = (b || "fx") + "queue", a =
                E.get(d, b), c && (!a || g.isArray(c) ? a = E.access(d, b, g.makeArray(c)) : a.push(c)), a || []) : void 0
        },
        dequeue: function(d, b) {
            b = b || "fx";
            var c = g.queue(d, b),
                a = c.length,
                k = c.shift(),
                e = g._queueHooks(d, b),
                m = function() {
                    g.dequeue(d, b)
                };
            "inprogress" === k && (k = c.shift(), a--);
            k && ("fx" === b && c.unshift("inprogress"), delete e.stop, k.call(d, m, e));
            !a && e && e.empty.fire()
        },
        _queueHooks: function(d, b) {
            var c = b + "queueHooks";
            return E.get(d, c) || E.access(d, c, {
                empty: g.Callbacks("once memory").add(function() {
                    E.remove(d, [b + "queue", c])
                })
            })
        }
    });
    g.fn.extend({
        queue: function(d,
            b) {
            var c = 2;
            return "string" != typeof d && (b = d, d = "fx", c--), arguments.length < c ? g.queue(this[0], d) : void 0 === b ? this : this.each(function() {
                var c = g.queue(this, d, b);
                g._queueHooks(this, d);
                "fx" === d && "inprogress" !== c[0] && g.dequeue(this, d)
            })
        },
        dequeue: function(d) {
            return this.each(function() {
                g.dequeue(this, d)
            })
        },
        clearQueue: function(d) {
            return this.queue(d || "fx", [])
        },
        promise: function(d, b) {
            var c, a = 1,
                k = g.Deferred(),
                e = this,
                m = this.length,
                l = function() {
                    --a || k.resolveWith(e, [e])
                };
            "string" != typeof d && (b = d, d = void 0);
            for (d = d ||
                "fx"; m--;)(c = E.get(e[m], d + "queueHooks")) && c.empty && (a++, c.empty.add(l));
            return l(), k.promise(b)
        }
    });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ka = ["Top", "Right", "Bottom", "Left"],
        ua = function(d, b) {
            return d = b || d, "none" === g.css(d, "display") || !g.contains(d.ownerDocument, d)
        },
        Ua = /^(?:checkbox|radio)$/i;
    ! function() {
        var d = K.createDocumentFragment().appendChild(K.createElement("div")),
            b = K.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name",
            "t");
        d.appendChild(b);
        F.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
        d.innerHTML = "<textarea>x</textarea>";
        F.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue
    }();
    F.focusinBubbles = "onfocusin" in a;
    var wb = /^key/,
        xb = /^(?:mouse|pointer|contextmenu)|click/,
        Va = /^(?:focusinfocus|focusoutblur)$/,
        Wa = /^([^.]*)(?:\.(.+)|)$/;
    g.event = {
        global: {},
        add: function(d, b, c, a, k) {
            var e, m, l, f, A, s, h, v, z, q;
            if (A = E.get(d))
                for (c.handler && (e = c, c = e.handler, k = e.selector), c.guid || (c.guid = g.guid++), (f = A.events) || (f =
                        A.events = {}), (m = A.handle) || (m = A.handle = function(b) {
                        return "undefined" !== typeof g && g.event.triggered !== b.type ? g.event.dispatch.apply(d, arguments) : void 0
                    }), b = (b || "").match(ia) || [""], A = b.length; A--;) l = Wa.exec(b[A]) || [], z = q = l[1], l = (l[2] || "").split(".").sort(), z && (h = g.event.special[z] || {}, z = (k ? h.delegateType : h.bindType) || z, h = g.event.special[z] || {}, s = g.extend({
                    type: z,
                    origType: q,
                    data: a,
                    handler: c,
                    guid: c.guid,
                    selector: k,
                    needsContext: k && g.expr.match.needsContext.test(k),
                    namespace: l.join(".")
                }, e), (v = f[z]) || (v =
                    f[z] = [], v.delegateCount = 0, h.setup && !1 !== h.setup.call(d, a, l, m) || d.addEventListener && d.addEventListener(z, m, !1)), h.add && (h.add.call(d, s), s.handler.guid || (s.handler.guid = c.guid)), k ? v.splice(v.delegateCount++, 0, s) : v.push(s), g.event.global[z] = !0)
        },
        remove: function(d, b, c, a, k) {
            var e, m, l, f, A, s, h, v, z, q, p, n = E.hasData(d) && E.get(d);
            if (n && (f = n.events)) {
                b = (b || "").match(ia) || [""];
                for (A = b.length; A--;)
                    if (l = Wa.exec(b[A]) || [], z = p = l[1], q = (l[2] || "").split(".").sort(), z) {
                        h = g.event.special[z] || {};
                        z = (a ? h.delegateType : h.bindType) ||
                            z;
                        v = f[z] || [];
                        l = l[2] && new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (m = e = v.length; e--;) s = v[e], !k && p !== s.origType || c && c.guid !== s.guid || l && !l.test(s.namespace) || a && a !== s.selector && ("**" !== a || !s.selector) || (v.splice(e, 1), s.selector && v.delegateCount--, h.remove && h.remove.call(d, s));
                        m && !v.length && (h.teardown && !1 !== h.teardown.call(d, q, n.handle) || g.removeEvent(d, z, n.handle), delete f[z])
                    } else
                        for (z in f) g.event.remove(d, z + b[A], c, a, !0);
                g.isEmptyObject(f) && (delete n.handle, E.remove(d, "events"))
            }
        },
        trigger: function(d, b, c, k) {
            var e, m, l, f, A, s, h, v = [c || K],
                z = V.call(d, "type") ? d.type : d;
            e = V.call(d, "namespace") ? d.namespace.split(".") : [];
            if (m = l = c = c || K, 3 !== c.nodeType && 8 !== c.nodeType && !Va.test(z + g.event.triggered) && (0 <= z.indexOf(".") && (e = z.split("."), z = e.shift(), e.sort()), A = 0 > z.indexOf(":") && "on" + z, d = d[g.expando] ? d : new g.Event(z, "object" == typeof d && d), d.isTrigger = k ? 2 : 3, d.namespace = e.join("."), d.namespace_re = d.namespace ? new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d.result = void 0, d.target ||
                    (d.target = c), b = null == b ? [d] : g.makeArray(b, [d]), h = g.event.special[z] || {}, k || !h.trigger || !1 !== h.trigger.apply(c, b))) {
                if (!k && !h.noBubble && !g.isWindow(c)) {
                    f = h.delegateType || z;
                    for (Va.test(f + z) || (m = m.parentNode); m; m = m.parentNode) v.push(m), l = m;
                    l === (c.ownerDocument || K) && v.push(l.defaultView || l.parentWindow || a)
                }
                for (e = 0;
                    (m = v[e++]) && !d.isPropagationStopped();) d.type = 1 < e ? f : h.bindType || z, (s = (E.get(m, "events") || {})[d.type] && E.get(m, "handle")) && s.apply(m, b), (s = A && m[A]) && s.apply && g.acceptData(m) && (d.result = s.apply(m,
                    b), !1 === d.result && d.preventDefault());
                return d.type = z, k || d.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), b) || !g.acceptData(c) || A && g.isFunction(c[z]) && !g.isWindow(c) && (l = c[A], l && (c[A] = null), g.event.triggered = z, c[z](), g.event.triggered = void 0, l && (c[A] = l)), d.result
            }
        },
        dispatch: function(d) {
            d = g.event.fix(d);
            var b, a, k, e, m, l = [],
                f = c.call(arguments);
            b = (E.get(this, "events") || {})[d.type] || [];
            var A = g.event.special[d.type] || {};
            if (f[0] = d, d.delegateTarget = this, !A.preDispatch || !1 !== A.preDispatch.call(this,
                    d)) {
                l = g.event.handlers.call(this, d, b);
                for (b = 0;
                    (e = l[b++]) && !d.isPropagationStopped();)
                    for (d.currentTarget = e.elem, a = 0;
                        (m = e.handlers[a++]) && !d.isImmediatePropagationStopped();) d.namespace_re && !d.namespace_re.test(m.namespace) || (d.handleObj = m, d.data = m.data, k = ((g.event.special[m.origType] || {}).handle || m.handler).apply(e.elem, f), void 0 === k || !1 !== (d.result = k) || (d.preventDefault(), d.stopPropagation()));
                return A.postDispatch && A.postDispatch.call(this, d), d.result
            }
        },
        handlers: function(d, b) {
            var c, a, k, e, m = [],
                l =
                b.delegateCount,
                f = d.target;
            if (l && f.nodeType && (!d.button || "click" !== d.type))
                for (; f !== this; f = f.parentNode || this)
                    if (!0 !== f.disabled || "click" !== d.type) {
                        a = [];
                        for (c = 0; l > c; c++) e = b[c], k = e.selector + " ", void 0 === a[k] && (a[k] = e.needsContext ? 0 <= g(k, this).index(f) : g.find(k, this, null, [f]).length), a[k] && a.push(e);
                        a.length && m.push({
                            elem: f,
                            handlers: a
                        })
                    }
            return l < b.length && m.push({
                elem: this,
                handlers: b.slice(l)
            }), m
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(d, b) {
                return null == d.which && (d.which = null != b.charCode ? b.charCode : b.keyCode), d
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(d, b) {
                var c, a, g, k = b.button;
                return null == d.pageX && null != b.clientX && (c = d.target.ownerDocument || K, a = c.documentElement, g = c.body, d.pageX = b.clientX + (a && a.scrollLeft || g && g.scrollLeft || 0) - (a && a.clientLeft || g && g.clientLeft ||
                    0), d.pageY = b.clientY + (a && a.scrollTop || g && g.scrollTop || 0) - (a && a.clientTop || g && g.clientTop || 0)), d.which || void 0 === k || (d.which = 1 & k ? 1 : 2 & k ? 3 : 4 & k ? 2 : 0), d
            }
        },
        fix: function(d) {
            if (d[g.expando]) return d;
            var b, c, a;
            b = d.type;
            var k = d,
                e = this.fixHooks[b];
            e || (this.fixHooks[b] = e = xb.test(b) ? this.mouseHooks : wb.test(b) ? this.keyHooks : {});
            a = e.props ? this.props.concat(e.props) : this.props;
            d = new g.Event(k);
            for (b = a.length; b--;) c = a[b], d[c] = k[c];
            return d.target || (d.target = K), 3 === d.target.nodeType && (d.target = d.target.parentNode),
                e.filter ? e.filter(d, k) : d
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== I() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === I() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && g.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(d) {
                    return g.nodeName(d.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(d) {
                    void 0 !== d.result && d.originalEvent &&
                        (d.originalEvent.returnValue = d.result)
                }
            }
        },
        simulate: function(d, b, c, a) {
            d = g.extend(new g.Event, c, {
                type: d,
                isSimulated: !0,
                originalEvent: {}
            });
            a ? g.event.trigger(d, null, b) : g.event.dispatch.call(b, d);
            d.isDefaultPrevented() && c.preventDefault()
        }
    };
    g.removeEvent = function(d, b, c) {
        d.removeEventListener && d.removeEventListener(b, c, !1)
    };
    g.Event = function(d, b) {
        return this instanceof g.Event ? (d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || void 0 === d.defaultPrevented && !1 ===
            d.returnValue ? q : H) : this.type = d, b && g.extend(this, b), this.timeStamp = d && d.timeStamp || g.now(), void(this[g.expando] = !0)) : new g.Event(d, b)
    };
    g.Event.prototype = {
        isDefaultPrevented: H,
        isPropagationStopped: H,
        isImmediatePropagationStopped: H,
        preventDefault: function() {
            var d = this.originalEvent;
            this.isDefaultPrevented = q;
            d && d.preventDefault && d.preventDefault()
        },
        stopPropagation: function() {
            var d = this.originalEvent;
            this.isPropagationStopped = q;
            d && d.stopPropagation && d.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var d =
                this.originalEvent;
            this.isImmediatePropagationStopped = q;
            d && d.stopImmediatePropagation && d.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    g.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(d, b) {
        g.event.special[d] = {
            delegateType: b,
            bindType: b,
            handle: function(d) {
                var c, a = d.relatedTarget,
                    k = d.handleObj;
                return (!a || a !== this && !g.contains(this, a)) && (d.type = k.origType, c = k.handler.apply(this, arguments), d.type = b), c
            }
        }
    });
    F.focusinBubbles || g.each({
        focus: "focusin",
        blur: "focusout"
    }, function(d, b) {
        var c = function(d) {
            g.event.simulate(b, d.target, g.event.fix(d), !0)
        };
        g.event.special[b] = {
            setup: function() {
                var a = this.ownerDocument || this,
                    g = E.access(a, b);
                g || a.addEventListener(d, c, !0);
                E.access(a, b, (g || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this,
                    g = E.access(a, b) - 1;
                g ? E.access(a, b, g) : (a.removeEventListener(d, c, !0), E.remove(a, b))
            }
        }
    });
    g.fn.extend({
        on: function(d, b, c, a, k) {
            var e, m;
            if ("object" == typeof d) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (m in d) this.on(m, b, c,
                    d[m], k);
                return this
            }
            if (null == c && null == a ? (a = b, c = b = void 0) : null == a && ("string" == typeof b ? (a = c, c = void 0) : (a = c, c = b, b = void 0)), !1 === a) a = H;
            else if (!a) return this;
            return 1 === k && (e = a, a = function(d) {
                return g().off(d), e.apply(this, arguments)
            }, a.guid = e.guid || (e.guid = g.guid++)), this.each(function() {
                g.event.add(this, d, a, c, b)
            })
        },
        one: function(d, b, c, a) {
            return this.on(d, b, c, a, 1)
        },
        off: function(d, b, c) {
            var a, k;
            if (d && d.preventDefault && d.handleObj) return a = d.handleObj, g(d.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace :
                a.origType, a.selector, a.handler), this;
            if ("object" == typeof d) {
                for (k in d) this.off(k, b, d[k]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = H), this.each(function() {
                g.event.remove(this, d, c, b)
            })
        },
        trigger: function(d, b) {
            return this.each(function() {
                g.event.trigger(d, b, this)
            })
        },
        triggerHandler: function(d, b) {
            var c = this[0];
            return c ? g.event.trigger(d, b, c, !0) : void 0
        }
    });
    var Xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ya = /<([\w:]+)/,
        yb = /<|&#?\w+;/,
        zb =
        /<(?:script|style|link)/i,
        Ab = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Za = /^$|\/(?:java|ecma)script/i,
        nb = /^true\/(.*)/,
        Bb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ha = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ha.optgroup = ha.option;
    ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;
    ha.th = ha.td;
    g.extend({
        clone: function(d,
            b, c) {
            var a, k, m, l, f = d.cloneNode(!0),
                A = g.contains(d.ownerDocument, d);
            if (!(F.noCloneChecked || 1 !== d.nodeType && 11 !== d.nodeType || g.isXMLDoc(d)))
                for (l = e(f), m = e(d), a = 0, k = m.length; k > a; a++) {
                    var s = m[a],
                        h = l[a],
                        v = h.nodeName.toLowerCase();
                    "input" === v && Ua.test(s.type) ? h.checked = s.checked : ("input" === v || "textarea" === v) && (h.defaultValue = s.defaultValue)
                }
            if (b)
                if (c)
                    for (m = m || e(d), l = l || e(f), a = 0, k = m.length; k > a; a++) B(m[a], l[a]);
                else B(d, f);
            return l = e(f, "script"), 0 < l.length && X(l, !A && e(d, "script")), f
        },
        buildFragment: function(d,
            b, c, a) {
            for (var k, m, l, f, A = b.createDocumentFragment(), s = [], h = 0, v = d.length; v > h; h++)
                if (k = d[h], k || 0 === k)
                    if ("object" === g.type(k)) g.merge(s, k.nodeType ? [k] : k);
                    else if (yb.test(k)) {
                m = m || A.appendChild(b.createElement("div"));
                l = (Ya.exec(k) || ["", ""])[1].toLowerCase();
                l = ha[l] || ha._default;
                m.innerHTML = l[1] + k.replace(Xa, "<$1></$2>") + l[2];
                for (l = l[0]; l--;) m = m.lastChild;
                g.merge(s, m.childNodes);
                m = A.firstChild;
                m.textContent = ""
            } else s.push(b.createTextNode(k));
            A.textContent = "";
            for (h = 0; k = s[h++];)
                if ((!a || -1 === g.inArray(k,
                        a)) && (f = g.contains(k.ownerDocument, k), m = e(A.appendChild(k), "script"), f && X(m), c))
                    for (l = 0; k = m[l++];) Za.test(k.type || "") && c.push(k);
            return A
        },
        cleanData: function(d) {
            for (var b, c, a, k, e = g.event.special, m = 0; void 0 !== (c = d[m]); m++) {
                if (g.acceptData(c) && (k = c[E.expando], k && (b = E.cache[k]))) {
                    if (b.events)
                        for (a in b.events) e[a] ? g.event.remove(c, a) : g.removeEvent(c, a, b.handle);
                    E.cache[k] && delete E.cache[k]
                }
                delete aa.cache[c[aa.expando]]
            }
        }
    });
    g.fn.extend({
        text: function(d) {
            return ma(this, function(d) {
                return void 0 === d ?
                    g.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = d)
                    })
            }, null, d, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(d) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || O(this, d).appendChild(d)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(d) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = O(this, d);
                    b.insertBefore(d, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
                function(d) {
                    this.parentNode && this.parentNode.insertBefore(d, this)
                })
        },
        after: function() {
            return this.domManip(arguments, function(d) {
                this.parentNode && this.parentNode.insertBefore(d, this.nextSibling)
            })
        },
        remove: function(d, b) {
            for (var c, a = d ? g.filter(d, this) : this, k = 0; null != (c = a[k]); k++) b || 1 !== c.nodeType || g.cleanData(e(c)), c.parentNode && (b && g.contains(c.ownerDocument, c) && X(e(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var d, b = 0; null != (d = this[b]); b++) 1 === d.nodeType && (g.cleanData(e(d, !1)), d.textContent = "");
            return this
        },
        clone: function(d, b) {
            return d = null == d ? !1 : d, b = null == b ? d : b, this.map(function() {
                return g.clone(this, d, b)
            })
        },
        html: function(d) {
            return ma(this, function(d) {
                    var b = this[0] || {},
                        c = 0,
                        a = this.length;
                    if (void 0 === d && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof d && !zb.test(d) && !ha[(Ya.exec(d) || ["", ""])[1].toLowerCase()]) {
                        d = d.replace(Xa, "<$1></$2>");
                        try {
                            for (; a > c; c++) b = this[c] || {}, 1 === b.nodeType && (g.cleanData(e(b, !1)), b.innerHTML = d);
                            b = 0
                        } catch (k) {}
                    }
                    b && this.empty().append(d)
                },
                null, d, arguments.length)
        },
        replaceWith: function() {
            var d = arguments[0];
            return this.domManip(arguments, function(b) {
                d = this.parentNode;
                g.cleanData(e(this));
                d && d.replaceChild(b, this)
            }), d && (d.length || d.nodeType) ? this : this.remove()
        },
        detach: function(d) {
            return this.remove(d, !0)
        },
        domManip: function(d, b) {
            d = k.apply([], d);
            var c, a, m, l, f = 0,
                A = this.length,
                s = this,
                h = A - 1,
                v = d[0],
                z = g.isFunction(v);
            if (z || 1 < A && "string" == typeof v && !F.checkClone && Ab.test(v)) return this.each(function(c) {
                var a = s.eq(c);
                z && (d[0] = v.call(this, c, a.html()));
                a.domManip(d, b)
            });
            if (A && (c = g.buildFragment(d, this[0].ownerDocument, !1, this), a = c.firstChild, 1 === c.childNodes.length && (c = a), a)) {
                a = g.map(e(c, "script"), D);
                for (m = a.length; A > f; f++) l = c, f !== h && (l = g.clone(l, !0, !0), m && g.merge(a, e(l, "script"))), b.call(this[f], l, f);
                if (m)
                    for (c = a[a.length - 1].ownerDocument, g.map(a, P), f = 0; m > f; f++) l = a[f], Za.test(l.type || "") && !E.access(l, "globalEval") && g.contains(c, l) && (l.src ? g._evalUrl && g._evalUrl(l.src) : g.globalEval(l.textContent.replace(Bb, "")))
            }
            return this
        }
    });
    g.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(d, b) {
        g.fn[d] = function(d) {
            for (var c = [], a = g(d), k = a.length - 1, e = 0; k >= e; e++) d = e === k ? this : this.clone(!0), g(a[e])[b](d), m.apply(c, d.get());
            return this.pushStack(c)
        }
    });
    var ya, Pa = {},
        Qa = /^margin/,
        Ga = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
        za = function(d) {
            return d.ownerDocument.defaultView.opener ? d.ownerDocument.defaultView.getComputedStyle(d, null) : a.getComputedStyle(d, null)
        };
    ! function() {
        var d, b, c = K.documentElement,
            k = K.createElement("div"),
            e = K.createElement("div");
        if (e.style) {
            var m = function() {
                e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                e.innerHTML = "";
                c.appendChild(k);
                var g = a.getComputedStyle(e, null);
                d = "1%" !== g.top;
                b = "4px" === g.width;
                c.removeChild(k)
            };
            e.style.backgroundClip = "content-box";
            e.cloneNode(!0).style.backgroundClip = "";
            F.clearCloneStyle = "content-box" === e.style.backgroundClip;
            k.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            k.appendChild(e);
            a.getComputedStyle && g.extend(F, {
                pixelPosition: function() {
                    return m(), d
                },
                boxSizingReliable: function() {
                    return null == b && m(), b
                },
                reliableMarginRight: function() {
                    var d, b = e.appendChild(K.createElement("div"));
                    return b.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", b.style.marginRight = b.style.width =
                        "0", e.style.width = "1px", c.appendChild(k), d = !parseFloat(a.getComputedStyle(b, null).marginRight), c.removeChild(k), e.removeChild(b), d
                }
            })
        }
    }();
    g.swap = function(d, b, c, a) {
        var g, k = {};
        for (g in b) k[g] = d.style[g], d.style[g] = b[g];
        c = c.apply(d, a || []);
        for (g in b) d.style[g] = k[g];
        return c
    };
    var Cb = /^(none|table(?!-c[ea]).+)/,
        ob = new RegExp("^(" + Da + ")(.*)$", "i"),
        Db = new RegExp("^([+-])=(" + Da + ")", "i"),
        Eb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ra = ["Webkit", "O", "Moz",
            "ms"
        ];
    g.extend({
        cssHooks: {
            opacity: {
                get: function(d, b) {
                    if (b) {
                        var c = Y(d, "opacity");
                        return "" === c ? "1" : c
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
        style: function(d, b, c, a) {
            if (d && 3 !== d.nodeType && 8 !== d.nodeType && d.style) {
                var k, e, m, l = g.camelCase(b),
                    f = d.style;
                return b = g.cssProps[l] || (g.cssProps[l] = fa(f, l)), m = g.cssHooks[b] || g.cssHooks[l], void 0 === c ? m && "get" in m && void 0 !==
                    (k = m.get(d, !1, a)) ? k : f[b] : (e = typeof c, "string" === e && (k = Db.exec(c)) && (c = (k[1] + 1) * k[2] + parseFloat(g.css(d, b)), e = "number"), null != c && c === c && ("number" !== e || g.cssNumber[l] || (c += "px"), F.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (f[b] = "inherit"), m && "set" in m && void 0 === (c = m.set(d, c, a)) || (f[b] = c)), void 0)
            }
        },
        css: function(d, b, c, a) {
            var k, e, m, l = g.camelCase(b);
            return b = g.cssProps[l] || (g.cssProps[l] = fa(d.style, l)), m = g.cssHooks[b] || g.cssHooks[l], m && "get" in m && (k = m.get(d, !0, c)), void 0 === k && (k = Y(d, b, a)),
                "normal" === k && b in $a && (k = $a[b]), "" === c || c ? (e = parseFloat(k), !0 === c || g.isNumeric(e) ? e || 0 : k) : k
        }
    });
    g.each(["height", "width"], function(d, b) {
        g.cssHooks[b] = {
            get: function(d, c, a) {
                return c ? Cb.test(g.css(d, "display")) && 0 === d.offsetWidth ? g.swap(d, Eb, function() {
                    return C(d, b, a)
                }) : C(d, b, a) : void 0
            },
            set: function(d, c, a) {
                var k = a && za(d);
                return S(d, c, a ? Z(d, b, a, "border-box" === g.css(d, "boxSizing", !1, k), k) : 0)
            }
        }
    });
    g.cssHooks.marginRight = ja(F.reliableMarginRight, function(d, b) {
        return b ? g.swap(d, {
            display: "inline-block"
        }, Y, [d, "marginRight"]) : void 0
    });
    g.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(d, b) {
        g.cssHooks[d + b] = {
            expand: function(c) {
                var a = 0,
                    g = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > a; a++) g[d + ka[a] + b] = c[a] || c[a - 2] || c[0];
                return g
            }
        };
        Qa.test(d) || (g.cssHooks[d + b].set = S)
    });
    g.fn.extend({
        css: function(d, b) {
            return ma(this, function(d, b, c) {
                var a, k = {},
                    e = 0;
                if (g.isArray(b)) {
                    c = za(d);
                    for (a = b.length; a > e; e++) k[b[e]] = g.css(d, b[e], !1, c);
                    return k
                }
                return void 0 !== c ? g.style(d, b, c) : g.css(d, b)
            }, d, b, 1 < arguments.length)
        },
        show: function() {
            return ca(this, !0)
        },
        hide: function() {
            return ca(this)
        },
        toggle: function(d) {
            return "boolean" == typeof d ? d ? this.show() : this.hide() : this.each(function() {
                ua(this) ? g(this).show() : g(this).hide()
            })
        }
    });
    g.Tween = L;
    L.prototype = {
        constructor: L,
        init: function(d, b, c, a, k, e) {
            this.elem = d;
            this.prop = c;
            this.easing = k || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = a;
            this.unit = e || (g.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var d = L.propHooks[this.prop];
            return d && d.get ? d.get(this) : L.propHooks._default.get(this)
        },
        run: function(d) {
            var b,
                c = L.propHooks[this.prop];
            return this.pos = b = this.options.duration ? g.easing[this.easing](d, this.options.duration * d, 0, 1, this.options.duration) : d, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
        }
    };
    L.prototype.init.prototype = L.prototype;
    L.propHooks = {
        _default: {
            get: function(d) {
                var b;
                return null == d.elem[d.prop] || d.elem.style && null != d.elem.style[d.prop] ? (b = g.css(d.elem, d.prop, ""), b && "auto" !==
                    b ? b : 0) : d.elem[d.prop]
            },
            set: function(d) {
                g.fx.step[d.prop] ? g.fx.step[d.prop](d) : d.elem.style && (null != d.elem.style[g.cssProps[d.prop]] || g.cssHooks[d.prop]) ? g.style(d.elem, d.prop, d.now + d.unit) : d.elem[d.prop] = d.now
            }
        }
    };
    L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(d) {
            d.elem.nodeType && d.elem.parentNode && (d.elem[d.prop] = d.now)
        }
    };
    g.easing = {
        linear: function(d) {
            return d
        },
        swing: function(d) {
            return .5 - Math.cos(d * Math.PI) / 2
        }
    };
    g.fx = L.prototype.init;
    g.fx.step = {};
    var qa, Ea, Fb = /^(?:toggle|show|hide)$/,
        ab =
        new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
        Gb = /queueHooks$/,
        ra = [function(d, b, c) {
            var a, k, e, m, l, f, A, s = this,
                h = {},
                v = d.style,
                z = d.nodeType && ua(d),
                q = E.get(d, "fxshow");
            c.queue || (m = g._queueHooks(d, "fx"), null == m.unqueued && (m.unqueued = 0, l = m.empty.fire, m.empty.fire = function() {
                m.unqueued || l()
            }), m.unqueued++, s.always(function() {
                s.always(function() {
                    m.unqueued--;
                    g.queue(d, "fx").length || m.empty.fire()
                })
            }));
            1 === d.nodeType && ("height" in b || "width" in b) && (c.overflow = [v.overflow, v.overflowX, v.overflowY], f = g.css(d,
                "display"), A = "none" === f ? E.get(d, "olddisplay") || R(d.nodeName) : f, "inline" === A && "none" === g.css(d, "float") && (v.display = "inline-block"));
            c.overflow && (v.overflow = "hidden", s.always(function() {
                v.overflow = c.overflow[0];
                v.overflowX = c.overflow[1];
                v.overflowY = c.overflow[2]
            }));
            for (a in b)
                if (k = b[a], Fb.exec(k)) {
                    if (delete b[a], e = e || "toggle" === k, k === (z ? "hide" : "show")) {
                        if ("show" !== k || !q || void 0 === q[a]) continue;
                        z = !0
                    }
                    h[a] = q && q[a] || g.style(d, a)
                } else f = void 0;
            if (g.isEmptyObject(h)) "inline" === ("none" === f ? R(d.nodeName) :
                f) && (v.display = f);
            else
                for (a in q ? "hidden" in q && (z = q.hidden) : q = E.access(d, "fxshow", {}), e && (q.hidden = !z), z ? g(d).show() : s.done(function() {
                        g(d).hide()
                    }), s.done(function() {
                        var b;
                        E.remove(d, "fxshow");
                        for (b in h) g.style(d, b, h[b])
                    }), h) b = ga(z ? q[a] : 0, a, s), a in q || (q[a] = b.start, z && (b.end = b.start, b.start = "width" === a || "height" === a ? 1 : 0))
        }],
        va = {
            "*": [function(d, b) {
                var c = this.createTween(d, b),
                    a = c.cur(),
                    k = ab.exec(b),
                    e = k && k[3] || (g.cssNumber[d] ? "" : "px"),
                    m = (g.cssNumber[d] || "px" !== e && +a) && ab.exec(g.css(c.elem, d)),
                    l = 1,
                    f = 20;
                if (m && m[3] !== e) {
                    e = e || m[3];
                    k = k || [];
                    m = +a || 1;
                    do l = l || ".5", m /= l, g.style(c.elem, d, m + e); while (l !== (l = c.cur() / a) && 1 !== l && --f)
                }
                return k && (m = c.start = +m || +a || 0, c.unit = e, c.end = k[1] ? m + (k[1] + 1) * k[2] : +k[2]), c
            }]
        };
    g.Animation = g.extend(s, {
        tweener: function(d, b) {
            g.isFunction(d) ? (b = d, d = ["*"]) : d = d.split(" ");
            for (var c, a = 0, k = d.length; k > a; a++) c = d[a], va[c] = va[c] || [], va[c].unshift(b)
        },
        prefilter: function(d, b) {
            b ? ra.unshift(d) : ra.push(d)
        }
    });
    g.speed = function(d, b, c) {
        var a = d && "object" == typeof d ? g.extend({}, d) : {
            complete: c ||
                !c && b || g.isFunction(d) && d,
            duration: d,
            easing: c && b || b && !g.isFunction(b) && b
        };
        return a.duration = g.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in g.fx.speeds ? g.fx.speeds[a.duration] : g.fx.speeds._default, (null == a.queue || !0 === a.queue) && (a.queue = "fx"), a.old = a.complete, a.complete = function() {
            g.isFunction(a.old) && a.old.call(this);
            a.queue && g.dequeue(this, a.queue)
        }, a
    };
    g.fn.extend({
        fadeTo: function(d, b, c, a) {
            return this.filter(ua).css("opacity", 0).show().end().animate({
                opacity: b
            }, d, c, a)
        },
        animate: function(d,
            b, c, a) {
            var k = g.isEmptyObject(d),
                e = g.speed(b, c, a);
            b = function() {
                var b = s(this, g.extend({}, d), e);
                (k || E.get(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, k || !1 === e.queue ? this.each(b) : this.queue(e.queue, b)
        },
        stop: function(d, b, c) {
            var a = function(b) {
                var d = b.stop;
                delete b.stop;
                d(c)
            };
            return "string" != typeof d && (c = b, b = d, d = void 0), b && !1 !== d && this.queue(d || "fx", []), this.each(function() {
                var b = !0,
                    k = null != d && d + "queueHooks",
                    e = g.timers,
                    m = E.get(this);
                if (k) m[k] && m[k].stop && a(m[k]);
                else
                    for (k in m) m[k] && m[k].stop && Gb.test(k) &&
                        a(m[k]);
                for (k = e.length; k--;) e[k].elem !== this || null != d && e[k].queue !== d || (e[k].anim.stop(c), b = !1, e.splice(k, 1));
                !b && c || g.dequeue(this, d)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c, a = E.get(this),
                    k = a[b + "queue"];
                c = a[b + "queueHooks"];
                var e = g.timers,
                    m = k ? k.length : 0;
                a.finish = !0;
                g.queue(this, b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
                for (c = 0; m > c; c++) k[c] && k[c].finish && k[c].finish.call(this);
                delete a.finish
            })
        }
    });
    g.each(["toggle", "show", "hide"], function(b, c) {
        var a = g.fn[c];
        g.fn[c] = function(b, d, g) {
            return null == b || "boolean" == typeof b ? a.apply(this, arguments) : this.animate(da(c, !0), b, d, g)
        }
    });
    g.each({
        slideDown: da("show"),
        slideUp: da("hide"),
        slideToggle: da("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        g.fn[b] = function(b, d, a) {
            return this.animate(c, b, d, a)
        }
    });
    g.timers = [];
    g.fx.tick = function() {
        var b, c = 0,
            a = g.timers;
        for (qa = g.now(); c < a.length; c++) b = a[c], b() || a[c] !==
            b || a.splice(c--, 1);
        a.length || g.fx.stop();
        qa = void 0
    };
    g.fx.timer = function(b) {
        g.timers.push(b);
        b() ? g.fx.start() : g.timers.pop()
    };
    g.fx.interval = 13;
    g.fx.start = function() {
        Ea || (Ea = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.stop = function() {
        clearInterval(Ea);
        Ea = null
    };
    g.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    g.fn.delay = function(b, c) {
        return b = g.fx ? g.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, a) {
            var g = setTimeout(c, b);
            a.stop = function() {
                clearTimeout(g)
            }
        })
    };
    (function() {
        var b = K.createElement("input"),
            c = K.createElement("select"),
            a = c.appendChild(K.createElement("option"));
        b.type = "checkbox";
        F.checkOn = "" !== b.value;
        F.optSelected = a.selected;
        c.disabled = !0;
        F.optDisabled = !a.disabled;
        b = K.createElement("input");
        b.value = "t";
        b.type = "radio";
        F.radioValue = "t" === b.value
    })();
    var bb, na = g.expr.attrHandle;
    g.fn.extend({
        attr: function(b, c) {
            return ma(this, g.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                g.removeAttr(this, b)
            })
        }
    });
    g.extend({
        attr: function(b, c, a) {
            var k, e, m = b.nodeType;
            if (b &&
                3 !== m && 8 !== m && 2 !== m) return "undefined" === typeof b.getAttribute ? g.prop(b, c, a) : (1 === m && g.isXMLDoc(b) || (c = c.toLowerCase(), k = g.attrHooks[c] || (g.expr.match.bool.test(c) ? bb : void 0)), void 0 === a ? k && "get" in k && null !== (e = k.get(b, c)) ? e : (e = g.find.attr(b, c), null == e ? void 0 : e) : null !== a ? k && "set" in k && void 0 !== (e = k.set(b, a, c)) ? e : (b.setAttribute(c, a + ""), a) : void g.removeAttr(b, c))
        },
        removeAttr: function(b, c) {
            var a, k, e = 0,
                m = c && c.match(ia);
            if (m && 1 === b.nodeType)
                for (; a = m[e++];) k = g.propFix[a] || a, g.expr.match.bool.test(a) && (b[k] = !1), b.removeAttribute(a)
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!F.radioValue && "radio" === c && g.nodeName(b, "input")) {
                        var a = b.value;
                        return b.setAttribute("type", c), a && (b.value = a), c
                    }
                }
            }
        }
    });
    bb = {
        set: function(b, c, a) {
            return !1 === c ? g.removeAttr(b, a) : b.setAttribute(a, a), a
        }
    };
    g.each(g.expr.match.bool.source.match(/\w+/g), function(b, c) {
        var a = na[c] || g.find.attr;
        na[c] = function(b, d, c) {
            var g, k;
            return c || (k = na[d], na[d] = g, g = null != a(b, d, c) ? d.toLowerCase() : null, na[d] = k), g
        }
    });
    var Hb = /^(?:input|select|textarea|button)$/i;
    g.fn.extend({
        prop: function(b, c) {
            return ma(this, g.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[g.propFix[b] || b]
            })
        }
    });
    g.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(b, c, a) {
            var k, e, m, l = b.nodeType;
            if (b && 3 !== l && 8 !== l && 2 !== l) return m = 1 !== l || !g.isXMLDoc(b), m && (c = g.propFix[c] || c, e = g.propHooks[c]), void 0 !== a ? e && "set" in e && void 0 !== (k = e.set(b, a, c)) ? k : b[c] = a : e && "get" in e && null !== (k = e.get(b, c)) ? k : b[c]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    return b.hasAttribute("tabindex") ||
                        Hb.test(b.nodeName) || b.href ? b.tabIndex : -1
                }
            }
        }
    });
    F.optSelected || (g.propHooks.selected = {
        get: function(b) {
            b = b.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    });
    g.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        g.propFix[this.toLowerCase()] = this
    });
    var Ja = /[\t\r\n\f]/g;
    g.fn.extend({
        addClass: function(b) {
            var c, a, k, e, m;
            c = "string" == typeof b && b;
            var l = 0,
                f = this.length;
            if (g.isFunction(b)) return this.each(function(c) {
                g(this).addClass(b.call(this,
                    c, this.className))
            });
            if (c)
                for (c = (b || "").match(ia) || []; f > l; l++)
                    if (a = this[l], k = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(Ja, " ") : " ")) {
                        for (m = 0; e = c[m++];) 0 > k.indexOf(" " + e + " ") && (k += e + " ");
                        k = g.trim(k);
                        a.className !== k && (a.className = k)
                    }
            return this
        },
        removeClass: function(b) {
            var c, a, k, e, m;
            c = 0 === arguments.length || "string" == typeof b && b;
            var l = 0,
                f = this.length;
            if (g.isFunction(b)) return this.each(function(c) {
                g(this).removeClass(b.call(this, c, this.className))
            });
            if (c)
                for (c = (b || "").match(ia) || []; f >
                    l; l++)
                    if (a = this[l], k = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(Ja, " ") : "")) {
                        for (m = 0; e = c[m++];)
                            for (; 0 <= k.indexOf(" " + e + " ");) k = k.replace(" " + e + " ", " ");
                        k = b ? g.trim(k) : "";
                        a.className !== k && (a.className = k)
                    }
            return this
        },
        toggleClass: function(b, c) {
            var a = typeof b;
            return "boolean" == typeof c && "string" === a ? c ? this.addClass(b) : this.removeClass(b) : this.each(g.isFunction(b) ? function(a) {
                g(this).toggleClass(b.call(this, a, this.className, c), c)
            } : function() {
                if ("string" === a)
                    for (var c, k = 0, e = g(this), m = b.match(ia) || []; c = m[k++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c);
                else("undefined" === a || "boolean" === a) && (this.className && E.set(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : E.get(this, "__className__") || "")
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, a = this.length; a > c; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Ja, " ").indexOf(b)) return !0;
            return !1
        }
    });
    var Ib = /\r/g;
    g.fn.extend({
        val: function(b) {
            var c, a, k, e = this[0];
            if (arguments.length) return k = g.isFunction(b),
                this.each(function(a) {
                    var e;
                    1 === this.nodeType && (e = k ? b.call(this, a, g(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : g.isArray(e) && (e = g.map(e, function(b) {
                        return null == b ? "" : b + ""
                    })), c = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, e, "value") || (this.value = e))
                });
            if (e) return c = g.valHooks[e.type] || g.valHooks[e.nodeName.toLowerCase()], c && "get" in c && void 0 !== (a = c.get(e, "value")) ? a : (a = e.value, "string" == typeof a ? a.replace(Ib, "") : null == a ? "" : a)
        }
    });
    g.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c =
                        g.find.attr(b, "value");
                    return null != c ? c : g.trim(g.text(b))
                }
            },
            select: {
                get: function(b) {
                    for (var c, a = b.options, k = b.selectedIndex, e = "select-one" === b.type || 0 > k, m = e ? null : [], l = e ? k + 1 : a.length, f = 0 > k ? l : e ? k : 0; l > f; f++)
                        if (c = a[f], !(!c.selected && f !== k || (F.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && g.nodeName(c.parentNode, "optgroup"))) {
                            if (b = g(c).val(), e) return b;
                            m.push(b)
                        }
                    return m
                },
                set: function(b, c) {
                    for (var a, k, e = b.options, m = g.makeArray(c), l = e.length; l--;) k = e[l], (k.selected = 0 <=
                        g.inArray(k.value, m)) && (a = !0);
                    return a || (b.selectedIndex = -1), m
                }
            }
        }
    });
    g.each(["radio", "checkbox"], function() {
        g.valHooks[this] = {
            set: function(b, c) {
                return g.isArray(c) ? b.checked = 0 <= g.inArray(g(b).val(), c) : void 0
            }
        };
        F.checkOn || (g.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, c) {
            g.fn[c] = function(b, d) {
                return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            }
        });
    g.fn.extend({
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        },
        bind: function(b, c, a) {
            return this.on(b, null, c, a)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        delegate: function(b, c, a, g) {
            return this.on(c, b, a, g)
        },
        undelegate: function(b, c, a) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", a)
        }
    });
    var Ka = g.now(),
        La = /\?/;
    g.parseJSON = function(b) {
        return JSON.parse(b + "")
    };
    g.parseXML =
        function(b) {
            var c, a;
            if (!b || "string" != typeof b) return null;
            try {
                a = new DOMParser, c = a.parseFromString(b, "text/xml")
            } catch (k) {
                c = void 0
            }
            return (!c || c.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + b), c
        };
    var Jb = /#.*$/,
        cb = /([?&])_=[^&]*/,
        Kb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        db = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        eb = {},
        Ha = {},
        fb = "*/".concat("*"),
        Ma = a.location.href,
        ta = db.exec(Ma.toLowerCase()) || [];
    g.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ma,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ta[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": fb,
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
                "text json": g.parseJSON,
                "text xml": g.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? G(G(b, g.ajaxSettings), c) : G(g.ajaxSettings, b)
        },
        ajaxPrefilter: z(eb),
        ajaxTransport: z(Ha),
        ajax: function(b, c) {
            function a(b, d, c, l) {
                var A, h, t, y, r = d;
                if (2 !== x) {
                    x = 2;
                    f && clearTimeout(f);
                    k = void 0;
                    m = l || "";
                    G.readyState = 0 < b ? 4 : 0;
                    l = 200 <= b && 300 > b || 304 === b;
                    if (c) {
                        t = v;
                        for (var H = G, U, I, w, V, K = t.contents, F = t.dataTypes;
                            "*" === F[0];) F.shift(), void 0 === U && (U = t.mimeType || H.getResponseHeader("Content-Type"));
                        if (U)
                            for (I in K)
                                if (K[I] && K[I].test(U)) {
                                    F.unshift(I);
                                    break
                                }
                        if (F[0] in c) w = F[0];
                        else {
                            for (I in c) {
                                if (!F[0] || t.converters[I + " " + F[0]]) {
                                    w = I;
                                    break
                                }
                                V || (V = I)
                            }
                            w = w || V
                        }
                        t = w ? (w !== F[0] && F.unshift(w), c[w]) : void 0
                    }
                    var u;
                    a: {
                        c = v;
                        U = t;
                        I = G;
                        w = l;
                        var B, O, D;
                        t = {};
                        H = c.dataTypes.slice();
                        if (H[1])
                            for (B in c.converters) t[B.toLowerCase()] = c.converters[B];
                        for (V = H.shift(); V;)
                            if (c.responseFields[V] && (I[c.responseFields[V]] = U), !D && w && c.dataFilter && (U = c.dataFilter(U, c.dataType)), D = V, V = H.shift())
                                if ("*" === V) V = D;
                                else if ("*" !== D && D !== V) {
                            if (B = t[D + " " + V] || t["* " + V], !B)
                                for (u in t)
                                    if (O = u.split(" "),
                                        O[1] === V && (B = t[D + " " + O[0]] || t["* " + O[0]])) {
                                        !0 === B ? B = t[u] : !0 !== t[u] && (V = O[0], H.unshift(O[1]));
                                        break
                                    }
                            if (!0 !== B)
                                if (B && c["throws"]) U = B(U);
                                else try {
                                    U = B(U)
                                } catch (Q) {
                                    u = {
                                        state: "parsererror",
                                        error: B ? Q : "No conversion from " + D + " to " + V
                                    };
                                    break a
                                }
                        }
                        u = {
                            state: "success",
                            data: U
                        }
                    }
                    t = u;
                    l ? (v.ifModified && (y = G.getResponseHeader("Last-Modified"), y && (g.lastModified[e] = y), y = G.getResponseHeader("etag"), y && (g.etag[e] = y)), 204 === b || "HEAD" === v.type ? r = "nocontent" : 304 === b ? r = "notmodified" : (r = t.state, A = t.data, h = t.error, l = !h)) : (h = r, (b || !r) && (r = "error", 0 > b && (b = 0)));
                    G.status = b;
                    G.statusText = (d || r) + "";
                    l ? p.resolveWith(z, [A, r, G]) : p.rejectWith(z, [G, r, h]);
                    G.statusCode(N);
                    N = void 0;
                    s && q.trigger(l ? "ajaxSuccess" : "ajaxError", [G, v, l ? A : h]);
                    n.fireWith(z, [G, r]);
                    s && (q.trigger("ajaxComplete", [G, v]), --g.active || g.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (c = b, b = void 0);
            c = c || {};
            var k, e, m, l, f, A, s, h, v = g.ajaxSetup({}, c),
                z = v.context || v,
                q = v.context && (z.nodeType || z.jquery) ? g(z) : g.event,
                p = g.Deferred(),
                n = g.Callbacks("once memory"),
                N = v.statusCode || {},
                r = {},
                H = {},
                x = 0,
                I = "canceled",
                G = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === x) {
                            if (!l)
                                for (l = {}; d = Kb.exec(m);) l[d[1].toLowerCase()] = d[2];
                            d = l[b.toLowerCase()]
                        }
                        return null == d ? null : d
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? m : null
                    },
                    setRequestHeader: function(b, d) {
                        var c = b.toLowerCase();
                        return x || (b = H[c] = H[c] || b, r[b] = d), this
                    },
                    overrideMimeType: function(b) {
                        return x || (v.mimeType = b), this
                    },
                    statusCode: function(b) {
                        var d;
                        if (b)
                            if (2 > x)
                                for (d in b) N[d] = [N[d], b[d]];
                            else G.always(b[G.status]);
                        return this
                    },
                    abort: function(b) {
                        b = b || I;
                        return k && k.abort(b), a(0, b), this
                    }
                };
            if (p.promise(G).complete = n.add, G.success = G.done, G.error = G.fail, v.url = ((b || v.url || Ma) + "").replace(Jb, "").replace(Mb, ta[1] + "//"), v.type = c.method || c.type || v.method || v.type, v.dataTypes = g.trim(v.dataType || "*").toLowerCase().match(ia) || [""], null == v.crossDomain && (A = db.exec(v.url.toLowerCase()), v.crossDomain = !(!A || A[1] === ta[1] && A[2] === ta[2] && (A[3] || ("http:" === A[1] ? "80" : "443")) === (ta[3] || ("http:" === ta[1] ? "80" : "443")))), v.data && v.processData && "string" !=
                typeof v.data && (v.data = g.param(v.data, v.traditional)), U(eb, v, c, G), 2 === x) return G;
            (s = g.event && v.global) && 0 === g.active++ && g.event.trigger("ajaxStart");
            v.type = v.type.toUpperCase();
            v.hasContent = !Lb.test(v.type);
            e = v.url;
            v.hasContent || (v.data && (e = v.url += (La.test(e) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (v.url = cb.test(e) ? e.replace(cb, "$1_=" + Ka++) : e + (La.test(e) ? "&" : "?") + "_=" + Ka++));
            v.ifModified && (g.lastModified[e] && G.setRequestHeader("If-Modified-Since", g.lastModified[e]), g.etag[e] && G.setRequestHeader("If-None-Match",
                g.etag[e]));
            (v.data && v.hasContent && !1 !== v.contentType || c.contentType) && G.setRequestHeader("Content-Type", v.contentType);
            G.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + fb + "; q=0.01" : "") : v.accepts["*"]);
            for (h in v.headers) G.setRequestHeader(h, v.headers[h]);
            if (v.beforeSend && (!1 === v.beforeSend.call(z, G, v) || 2 === x)) return G.abort();
            I = "abort";
            for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) G[h](v[h]);
            if (k = U(Ha, v, c, G)) {
                G.readyState = 1;
                s && q.trigger("ajaxSend", [G, v]);
                v.async && 0 < v.timeout && (f = setTimeout(function() {
                    G.abort("timeout")
                }, v.timeout));
                try {
                    x = 1, k.send(r, a)
                } catch (w) {
                    if (!(2 > x)) throw w;
                    a(-1, w)
                }
            } else a(-1, "No Transport");
            return G
        },
        getJSON: function(b, c, a) {
            return g.get(b, c, a, "json")
        },
        getScript: function(b, c) {
            return g.get(b, void 0, c, "script")
        }
    });
    g.each(["get", "post"], function(b, c) {
        g[c] = function(b, d, a, k) {
            return g.isFunction(d) && (k = k || a, a = d, d = void 0), g.ajax({
                url: b,
                type: c,
                dataType: k,
                data: d,
                success: a
            })
        }
    });
    g._evalUrl = function(b) {
        return g.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    g.fn.extend({
        wrapAll: function(b) {
            var c;
            return g.isFunction(b) ? this.each(function(c) {
                g(this).wrapAll(b.call(this, c))
            }) : (this[0] && (c = g(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                for (var b = this; b.firstElementChild;) b = b.firstElementChild;
                return b
            }).append(this)), this)
        },
        wrapInner: function(b) {
            return this.each(g.isFunction(b) ? function(c) {
                g(this).wrapInner(b.call(this, c))
            } : function() {
                var c = g(this),
                    a = c.contents();
                a.length ? a.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = g.isFunction(b);
            return this.each(function(a) {
                g(this).wrapAll(c ? b.call(this, a) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    g.expr.filters.hidden = function(b) {
        return 0 >= b.offsetWidth && 0 >= b.offsetHeight
    };
    g.expr.filters.visible = function(b) {
        return !g.expr.filters.hidden(b)
    };
    var Nb = /%20/g,
        pb = /\[\]$/,
        gb = /\r?\n/g,
        Ob = /^(?:submit|button|image|reset|file)$/i,
        Pb = /^(?:input|select|textarea|keygen)/i;
    g.param = function(b, c) {
        var a, k = [],
            e = function(b, c) {
                c = g.isFunction(c) ? c() : null == c ? "" : c;
                k[k.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        if (void 0 === c && (c = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(b) || b.jquery && !g.isPlainObject(b)) g.each(b, function() {
            e(this.name, this.value)
        });
        else
            for (a in b) Q(a, b[a], c, e);
        return k.join("&").replace(Nb, "+")
    };
    g.fn.extend({
        serialize: function() {
            return g.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b =
                    g.prop(this, "elements");
                return b ? g.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !g(this).is(":disabled") && Pb.test(this.nodeName) && !Ob.test(b) && (this.checked || !Ua.test(b))
            }).map(function(b, c) {
                var a = g(this).val();
                return null == a ? null : g.isArray(a) ? g.map(a, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(gb, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: a.replace(gb, "\r\n")
                }
            }).get()
        }
    });
    g.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (b) {}
    };
    var Qb = 0,
        Fa = {},
        Rb = {
            0: 200,
            1223: 204
        },
        xa =
        g.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var b in Fa) Fa[b]()
    });
    F.cors = !!xa && "withCredentials" in xa;
    F.ajax = xa = !!xa;
    g.ajaxTransport(function(b) {
        var c;
        return F.cors || xa && !b.crossDomain ? {
            send: function(a, g) {
                var k, e = b.xhr(),
                    m = ++Qb;
                if (e.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (k in b.xhrFields) e[k] = b.xhrFields[k];
                b.mimeType && e.overrideMimeType && e.overrideMimeType(b.mimeType);
                b.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                for (k in a) e.setRequestHeader(k, a[k]);
                c = function(b) {
                    return function() {
                        c && (delete Fa[m], c = e.onload = e.onerror = null, "abort" === b ? e.abort() : "error" === b ? g(e.status, e.statusText) : g(Rb[e.status] || e.status, e.statusText, "string" == typeof e.responseText ? {
                            text: e.responseText
                        } : void 0, e.getAllResponseHeaders()))
                    }
                };
                e.onload = c();
                e.onerror = c("error");
                c = Fa[m] = c("abort");
                try {
                    e.send(b.hasContent && b.data || null)
                } catch (l) {
                    if (c) throw l;
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    });
    g.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(b) {
                return g.globalEval(b), b
            }
        }
    });
    g.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET")
    });
    g.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, a;
            return {
                send: function(k, e) {
                    c = g("<script>").prop({
                        async: !0,
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", a = function(b) {
                        c.remove();
                        a = null;
                        b && e("error" === b.type ? 404 : 200, b.type)
                    });
                    K.head.appendChild(c[0])
                },
                abort: function() {
                    a && a()
                }
            }
        }
    });
    var hb = [],
        Na = /(=)\?(?=&|$)|\?\?/;
    g.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = hb.pop() || g.expando + "_" + Ka++;
            return this[b] = !0, b
        }
    });
    g.ajaxPrefilter("json jsonp", function(b, c, k) {
        var e, m, l, f = !1 !== b.jsonp && (Na.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Na.test(b.data) && "data");
        return f || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = g.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, f ? b[f] = b[f].replace(Na, "$1" +
            e) : !1 !== b.jsonp && (b.url += (La.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return l || g.error(e + " was not called"), l[0]
        }, b.dataTypes[0] = "json", m = a[e], a[e] = function() {
            l = arguments
        }, k.always(function() {
            a[e] = m;
            b[e] && (b.jsonpCallback = c.jsonpCallback, hb.push(e));
            l && g.isFunction(m) && m(l[0]);
            l = m = void 0
        }), "script") : void 0
    });
    g.parseHTML = function(b, c, a) {
        if (!b || "string" != typeof b) return null;
        "boolean" == typeof c && (a = c, c = !1);
        c = c || K;
        var k = Ta.exec(b);
        a = !a && [];
        return k ? [c.createElement(k[1])] :
            (k = g.buildFragment([b], c, a), a && a.length && g(a).remove(), g.merge([], k.childNodes))
    };
    var ib = g.fn.load;
    g.fn.load = function(b, c, a) {
        if ("string" != typeof b && ib) return ib.apply(this, arguments);
        var k, e, m, l = this,
            f = b.indexOf(" ");
        return 0 <= f && (k = g.trim(b.slice(f)), b = b.slice(0, f)), g.isFunction(c) ? (a = c, c = void 0) : c && "object" == typeof c && (e = "POST"), 0 < l.length && g.ajax({
            url: b,
            type: e,
            dataType: "html",
            data: c
        }).done(function(b) {
            m = arguments;
            l.html(k ? g("<div>").append(g.parseHTML(b)).find(k) : b)
        }).complete(a && function(b, c) {
            l.each(a,
                m || [b.responseText, c, b])
        }), this
    };
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        g.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    g.expr.filters.animated = function(b) {
        return g.grep(g.timers, function(c) {
            return b === c.elem
        }).length
    };
    var jb = a.document.documentElement;
    g.offset = {
        setOffset: function(b, c, a) {
            var k, e, m, l, f, A, v = g.css(b, "position"),
                s = g(b),
                h = {};
            "static" === v && (b.style.position = "relative");
            f = s.offset();
            m = g.css(b, "top");
            A = g.css(b, "left");
            ("absolute" === v ||
                "fixed" === v) && -1 < (m + A).indexOf("auto") ? (k = s.position(), l = k.top, e = k.left) : (l = parseFloat(m) || 0, e = parseFloat(A) || 0);
            g.isFunction(c) && (c = c.call(b, a, f));
            null != c.top && (h.top = c.top - f.top + l);
            null != c.left && (h.left = c.left - f.left + e);
            "using" in c ? c.using.call(b, h) : s.css(h)
        }
    };
    g.fn.extend({
        offset: function(b) {
            if (arguments.length) return void 0 === b ? this : this.each(function(c) {
                g.offset.setOffset(this, b, c)
            });
            var c, a, k = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                m = k && k.ownerDocument;
            if (m) return c = m.documentElement, g.contains(c, k) ? ("undefined" !==
                typeof k.getBoundingClientRect && (e = k.getBoundingClientRect()), a = T(m), {
                    top: e.top + a.pageYOffset - c.clientTop,
                    left: e.left + a.pageXOffset - c.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var b, c, a = this[0],
                    k = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === g.css(a, "position") ? c = a.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), g.nodeName(b[0], "html") || (k = b.offset()), k.top += g.css(b[0], "borderTopWidth", !0), k.left += g.css(b[0], "borderLeftWidth", !0)), {
                    top: c.top - k.top - g.css(a, "marginTop", !0),
                    left: c.left - k.left -
                        g.css(a, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || jb; b && !g.nodeName(b, "html") && "static" === g.css(b, "position");) b = b.offsetParent;
                return b || jb
            })
        }
    });
    g.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var k = "pageYOffset" === c;
        g.fn[b] = function(g) {
            return ma(this, function(b, d, g) {
                var e = T(b);
                return void 0 === g ? e ? e[c] : b[d] : void(e ? e.scrollTo(k ? a.pageXOffset : g, k ? g : a.pageYOffset) : b[d] = g)
            }, b, g, arguments.length, null)
        }
    });
    g.each(["top", "left"],
        function(b, c) {
            g.cssHooks[c] = ja(F.pixelPosition, function(b, d) {
                return d ? (d = Y(b, c), Ga.test(d) ? g(b).position()[c] + "px" : d) : void 0
            })
        });
    g.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        g.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(a, k) {
            g.fn[k] = function(k, e) {
                var m = arguments.length && (a || "boolean" != typeof k),
                    l = a || (!0 === k || !0 === e ? "margin" : "border");
                return ma(this, function(c, a, k) {
                    var e;
                    return g.isWindow(c) ? c.document.documentElement["client" + b] : 9 === c.nodeType ? (e = c.documentElement, Math.max(c.body["scroll" +
                        b], e["scroll" + b], c.body["offset" + b], e["offset" + b], e["client" + b])) : void 0 === k ? g.css(c, a, l) : g.style(c, a, k, l)
                }, c, m ? k : void 0, m, null)
            }
        })
    });
    g.fn.size = function() {
        return this.length
    };
    g.fn.andSelf = g.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return g
    });
    var Sb = a.jQuery,
        Tb = a.$;
    return g.noConflict = function(b) {
        return a.$ === g && (a.$ = Tb), b && a.jQuery === g && (a.jQuery = Sb), g
    }, "undefined" === typeof h && (a.jQuery = a.$ = g), g
});
(function() {
    function a(b) {
        return function(c, a, m, l) {
            a = M(a, l, 4);
            var f = !C(c) && e.keys(c),
                s = (f || c).length,
                h = 0 < b ? 0 : s - 1;
            3 > arguments.length && (m = c[f ? f[h] : h], h += b);
            for (var z = a, q = m; 0 <= h && s > h; h += b) var g = f ? f[h] : h,
                q = z(q, c[g], g, c);
            return q
        }
    }

    function h(b) {
        return function(c, a, e) {
            a = R(a, e);
            e = Z(c);
            for (var l = 0 < b ? 0 : e - 1; 0 <= l && e > l; l += b)
                if (a(c[l], l, c)) return l;
            return -1
        }
    }

    function f(b, c, a) {
        return function(m, l, f) {
            var s = 0,
                h = Z(m);
            if ("number" == typeof f) 0 < b ? s = 0 <= f ? f : Math.max(f + h, s) : h = 0 <= f ? Math.min(f + 1, h) : f + h + 1;
            else if (a && f && h) return f =
                a(m, l), m[f] === l ? f : -1;
            if (l !== l) return f = c(q.call(m, s, h), e.isNaN), 0 <= f ? f + s : -1;
            for (f = 0 < b ? s : h - 1; 0 <= f && h > f; f += b)
                if (m[f] === l) return f;
            return -1
        }
    }

    function u(b, c) {
        var a = ga.length,
            m = b.constructor,
            m = e.isFunction(m) && m.prototype || n,
            l = "constructor";
        for (e.has(b, l) && !e.contains(c, l) && c.push(l); a--;) l = ga[a], l in b && b[l] !== m[l] && !e.contains(c, l) && c.push(l)
    }
    var x = this,
        p = x._,
        r = Array.prototype,
        n = Object.prototype,
        w = r.push,
        q = r.slice,
        H = n.toString,
        I = n.hasOwnProperty,
        O = Array.isArray,
        D = Object.keys,
        P = Function.prototype.bind,
        X = Object.create,
        B = function() {},
        e = function(b) {
            return b instanceof e ? b : this instanceof e ? void(this._wrapped = b) : new e(b)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports._ = e) : x._ = e;
    e.VERSION = "1.8.3";
    var M = function(b, c, a) {
            if (void 0 === c) return b;
            switch (null == a ? 3 : a) {
                case 1:
                    return function(a) {
                        return b.call(c, a)
                    };
                case 2:
                    return function(a, k) {
                        return b.call(c, a, k)
                    };
                case 3:
                    return function(a, k, e) {
                        return b.call(c, a, k, e)
                    };
                case 4:
                    return function(a, k, e, l) {
                        return b.call(c,
                            a, k, e, l)
                    }
            }
            return function() {
                return b.apply(c, arguments)
            }
        },
        R = function(b, c, a) {
            return null == b ? e.identity : e.isFunction(b) ? M(b, c, a) : e.isObject(b) ? e.matcher(b) : e.property(b)
        };
    e.iteratee = function(b, c) {
        return R(b, c, 1 / 0)
    };
    var Y = function(b, c) {
            return function(a) {
                var e = arguments.length;
                if (2 > e || null == a) return a;
                for (var l = 1; e > l; l++)
                    for (var f = arguments[l], s = b(f), h = s.length, z = 0; h > z; z++) {
                        var q = s[z];
                        c && void 0 !== a[q] || (a[q] = f[q])
                    }
                return a
            }
        },
        ja = function(b) {
            if (!e.isObject(b)) return {};
            if (X) return X(b);
            B.prototype = b;
            b =
                new B;
            return B.prototype = null, b
        },
        fa = function(b) {
            return function(c) {
                return null == c ? void 0 : c[b]
            }
        },
        S = Math.pow(2, 53) - 1,
        Z = fa("length"),
        C = function(b) {
            b = Z(b);
            return "number" == typeof b && 0 <= b && S >= b
        };
    e.each = e.forEach = function(b, c, a) {
        c = M(c, a);
        var m;
        if (C(b))
            for (a = 0, m = b.length; m > a; a++) c(b[a], a, b);
        else {
            var l = e.keys(b);
            a = 0;
            for (m = l.length; m > a; a++) c(b[l[a]], l[a], b)
        }
        return b
    };
    e.map = e.collect = function(b, c, a) {
        c = R(c, a);
        a = !C(b) && e.keys(b);
        for (var m = (a || b).length, l = Array(m), f = 0; m > f; f++) {
            var s = a ? a[f] : f;
            l[f] = c(b[s], s, b)
        }
        return l
    };
    e.reduce = e.foldl = e.inject = a(1);
    e.reduceRight = e.foldr = a(-1);
    e.find = e.detect = function(b, c, a) {
        var m;
        return m = C(b) ? e.findIndex(b, c, a) : e.findKey(b, c, a), void 0 !== m && -1 !== m ? b[m] : void 0
    };
    e.filter = e.select = function(b, c, a) {
        var m = [];
        return c = R(c, a), e.each(b, function(b, a, k) {
            c(b, a, k) && m.push(b)
        }), m
    };
    e.reject = function(b, c, a) {
        return e.filter(b, e.negate(R(c)), a)
    };
    e.every = e.all = function(b, c, a) {
        c = R(c, a);
        a = !C(b) && e.keys(b);
        for (var m = (a || b).length, l = 0; m > l; l++) {
            var f = a ? a[l] : l;
            if (!c(b[f], f, b)) return !1
        }
        return !0
    };
    e.some =
        e.any = function(b, c, a) {
            c = R(c, a);
            a = !C(b) && e.keys(b);
            for (var m = (a || b).length, l = 0; m > l; l++) {
                var f = a ? a[l] : l;
                if (c(b[f], f, b)) return !0
            }
            return !1
        };
    e.contains = e.includes = e.include = function(b, c, a, m) {
        return C(b) || (b = e.values(b)), ("number" != typeof a || m) && (a = 0), 0 <= e.indexOf(b, c, a)
    };
    e.invoke = function(b, c) {
        var a = q.call(arguments, 2),
            m = e.isFunction(c);
        return e.map(b, function(b) {
            var e = m ? c : b[c];
            return null == e ? e : e.apply(b, a)
        })
    };
    e.pluck = function(b, c) {
        return e.map(b, e.property(c))
    };
    e.where = function(b, c) {
        return e.filter(b,
            e.matcher(c))
    };
    e.findWhere = function(b, c) {
        return e.find(b, e.matcher(c))
    };
    e.max = function(b, c, a) {
        var m, l = -1 / 0,
            f = -1 / 0;
        if (null == c && null != b) {
            b = C(b) ? b : e.values(b);
            for (var s = 0, h = b.length; h > s; s++) a = b[s], a > l && (l = a)
        } else c = R(c, a), e.each(b, function(b, a, g) {
            m = c(b, a, g);
            (m > f || m === -1 / 0 && l === -1 / 0) && (l = b, f = m)
        });
        return l
    };
    e.min = function(b, c, a) {
        var m, l = 1 / 0,
            f = 1 / 0;
        if (null == c && null != b) {
            b = C(b) ? b : e.values(b);
            for (var s = 0, h = b.length; h > s; s++) a = b[s], l > a && (l = a)
        } else c = R(c, a), e.each(b, function(b, a, g) {
            m = c(b, a, g);
            (f > m || 1 / 0 === m && 1 /
                0 === l) && (l = b, f = m)
        });
        return l
    };
    e.shuffle = function(b) {
        for (var c = C(b) ? b : e.values(b), a = c.length, m = Array(a), l = 0; a > l; l++) b = e.random(0, l), b !== l && (m[l] = m[b]), m[b] = c[l];
        return m
    };
    e.sample = function(b, c, a) {
        return null == c || a ? (C(b) || (b = e.values(b)), b[e.random(b.length - 1)]) : e.shuffle(b).slice(0, Math.max(0, c))
    };
    e.sortBy = function(b, c, a) {
        return c = R(c, a), e.pluck(e.map(b, function(b, a, k) {
            return {
                value: b,
                index: a,
                criteria: c(b, a, k)
            }
        }).sort(function(b, c) {
            var a = b.criteria,
                k = c.criteria;
            if (a !== k) {
                if (a > k || void 0 === a) return 1;
                if (k > a || void 0 === k) return -1
            }
            return b.index - c.index
        }), "value")
    };
    var ca = function(b) {
        return function(c, a, m) {
            var l = {};
            return a = R(a, m), e.each(c, function(e, m) {
                var f = a(e, m, c);
                b(l, e, f)
            }), l
        }
    };
    e.groupBy = ca(function(b, c, a) {
        e.has(b, a) ? b[a].push(c) : b[a] = [c]
    });
    e.indexBy = ca(function(b, c, a) {
        b[a] = c
    });
    e.countBy = ca(function(b, c, a) {
        e.has(b, a) ? b[a]++ : b[a] = 1
    });
    e.toArray = function(b) {
        return b ? e.isArray(b) ? q.call(b) : C(b) ? e.map(b, e.identity) : e.values(b) : []
    };
    e.size = function(b) {
        return null == b ? 0 : C(b) ? b.length : e.keys(b).length
    };
    e.partition = function(b, c, a) {
        c = R(c, a);
        var m = [],
            l = [];
        return e.each(b, function(b, a, e) {
            (c(b, a, e) ? m : l).push(b)
        }), [m, l]
    };
    e.first = e.head = e.take = function(b, c, a) {
        return null == b ? void 0 : null == c || a ? b[0] : e.initial(b, b.length - c)
    };
    e.initial = function(b, c, a) {
        return q.call(b, 0, Math.max(0, b.length - (null == c || a ? 1 : c)))
    };
    e.last = function(b, c, a) {
        return null == b ? void 0 : null == c || a ? b[b.length - 1] : e.rest(b, Math.max(0, b.length - c))
    };
    e.rest = e.tail = e.drop = function(b, c, a) {
        return q.call(b, null == c || a ? 1 : c)
    };
    e.compact = function(b) {
        return e.filter(b,
            e.identity)
    };
    var L = function(b, c, a, m) {
        var l = [],
            f = 0;
        m = m || 0;
        for (var s = Z(b); s > m; m++) {
            var h = b[m];
            if (C(h) && (e.isArray(h) || e.isArguments(h))) {
                c || (h = L(h, c, a));
                var z = 0,
                    q = h.length;
                for (l.length += q; q > z;) l[f++] = h[z++]
            } else a || (l[f++] = h)
        }
        return l
    };
    e.flatten = function(b, c) {
        return L(b, c, !1)
    };
    e.without = function(b) {
        return e.difference(b, q.call(arguments, 1))
    };
    e.uniq = e.unique = function(b, c, a, m) {
        e.isBoolean(c) || (m = a, a = c, c = !1);
        null != a && (a = R(a, m));
        m = [];
        for (var l = [], f = 0, s = Z(b); s > f; f++) {
            var h = b[f],
                z = a ? a(h, f, b) : h;
            c ? (f && l ===
                z || m.push(h), l = z) : a ? e.contains(l, z) || (l.push(z), m.push(h)) : e.contains(m, h) || m.push(h)
        }
        return m
    };
    e.union = function() {
        return e.uniq(L(arguments, !0, !0))
    };
    e.intersection = function(b) {
        for (var c = [], a = arguments.length, m = 0, l = Z(b); l > m; m++) {
            var f = b[m];
            if (!e.contains(c, f)) {
                for (var h = 1; a > h && e.contains(arguments[h], f); h++);
                h === a && c.push(f)
            }
        }
        return c
    };
    e.difference = function(b) {
        var c = L(arguments, !0, !0, 1);
        return e.filter(b, function(b) {
            return !e.contains(c, b)
        })
    };
    e.zip = function() {
        return e.unzip(arguments)
    };
    e.unzip = function(b) {
        for (var c =
                b && e.max(b, Z).length || 0, a = Array(c), m = 0; c > m; m++) a[m] = e.pluck(b, m);
        return a
    };
    e.object = function(b, c) {
        for (var a = {}, e = 0, l = Z(b); l > e; e++) c ? a[b[e]] = c[e] : a[b[e][0]] = b[e][1];
        return a
    };
    e.findIndex = h(1);
    e.findLastIndex = h(-1);
    e.sortedIndex = function(b, c, a, e) {
        a = R(a, e, 1);
        c = a(c);
        e = 0;
        for (var l = Z(b); l > e;) {
            var f = Math.floor((e + l) / 2);
            a(b[f]) < c ? e = f + 1 : l = f
        }
        return e
    };
    e.indexOf = f(1, e.findIndex, e.sortedIndex);
    e.lastIndexOf = f(-1, e.findLastIndex);
    e.range = function(b, c, a) {
        null == c && (c = b || 0, b = 0);
        a = a || 1;
        c = Math.max(Math.ceil((c - b) /
            a), 0);
        for (var e = Array(c), l = 0; c > l; l++, b += a) e[l] = b;
        return e
    };
    var ba = function(b, c, a, l, f) {
        if (!(l instanceof c)) return b.apply(a, f);
        c = ja(b.prototype);
        b = b.apply(c, f);
        return e.isObject(b) ? b : c
    };
    e.bind = function(b, c) {
        if (P && b.bind === P) return P.apply(b, q.call(arguments, 1));
        if (!e.isFunction(b)) throw new TypeError("Bind must be called on a function");
        var a = q.call(arguments, 2),
            l = function() {
                return ba(b, l, c, this, a.concat(q.call(arguments)))
            };
        return l
    };
    e.partial = function(b) {
        var c = q.call(arguments, 1),
            a = function() {
                for (var l =
                        0, f = c.length, h = Array(f), s = 0; f > s; s++) h[s] = c[s] === e ? arguments[l++] : c[s];
                for (; l < arguments.length;) h.push(arguments[l++]);
                return ba(b, a, this, this, h)
            };
        return a
    };
    e.bindAll = function(b) {
        var c, a, l = arguments.length;
        if (1 >= l) throw Error("bindAll must be passed function names");
        for (c = 1; l > c; c++) a = arguments[c], b[a] = e.bind(b[a], b);
        return b
    };
    e.memoize = function(b, c) {
        var a = function(l) {
            var f = a.cache,
                h = "" + (c ? c.apply(this, arguments) : l);
            return e.has(f, h) || (f[h] = b.apply(this, arguments)), f[h]
        };
        return a.cache = {}, a
    };
    e.delay =
        function(b, c) {
            var a = q.call(arguments, 2);
            return setTimeout(function() {
                return b.apply(null, a)
            }, c)
        };
    e.defer = e.partial(e.delay, e, 1);
    e.throttle = function(b, c, a) {
        var l, f, h, s = null,
            z = 0;
        a || (a = {});
        var q = function() {
            z = !1 === a.leading ? 0 : e.now();
            s = null;
            h = b.apply(l, f);
            s || (l = f = null)
        };
        return function() {
            var p = e.now();
            z || !1 !== a.leading || (z = p);
            var g = c - (p - z);
            return l = this, f = arguments, 0 >= g || g > c ? (s && (clearTimeout(s), s = null), z = p, h = b.apply(l, f), s || (l = f = null)) : s || !1 === a.trailing || (s = setTimeout(q, g)), h
        }
    };
    e.debounce = function(b,
        c, a) {
        var l, f, h, s, z, q = function() {
            var p = e.now() - s;
            c > p && 0 <= p ? l = setTimeout(q, c - p) : (l = null, a || (z = b.apply(h, f), l || (h = f = null)))
        };
        return function() {
            h = this;
            f = arguments;
            s = e.now();
            var p = a && !l;
            return l || (l = setTimeout(q, c)), p && (z = b.apply(h, f), h = f = null), z
        }
    };
    e.wrap = function(b, c) {
        return e.partial(c, b)
    };
    e.negate = function(b) {
        return function() {
            return !b.apply(this, arguments)
        }
    };
    e.compose = function() {
        var b = arguments,
            c = b.length - 1;
        return function() {
            for (var a = c, e = b[c].apply(this, arguments); a--;) e = b[a].call(this, e);
            return e
        }
    };
    e.after = function(b, c) {
        return function() {
            return 1 > --b ? c.apply(this, arguments) : void 0
        }
    };
    e.before = function(b, c) {
        var a;
        return function() {
            return 0 < --b && (a = c.apply(this, arguments)), 1 >= b && (c = null), a
        }
    };
    e.once = e.partial(e.before, 2);
    var da = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        ga = "valueOf isPrototypeOf toString propertyIsEnumerable hasOwnProperty toLocaleString".split(" ");
    e.keys = function(b) {
        if (!e.isObject(b)) return [];
        if (D) return D(b);
        var c = [],
            a;
        for (a in b) e.has(b, a) && c.push(a);
        return da && u(b, c),
            c
    };
    e.allKeys = function(b) {
        if (!e.isObject(b)) return [];
        var c = [],
            a;
        for (a in b) c.push(a);
        return da && u(b, c), c
    };
    e.values = function(b) {
        for (var c = e.keys(b), a = c.length, l = Array(a), f = 0; a > f; f++) l[f] = b[c[f]];
        return l
    };
    e.mapObject = function(b, c, a) {
        c = R(c, a);
        for (var l = e.keys(b), f = l.length, h = {}, s = 0; f > s; s++) a = l[s], h[a] = c(b[a], a, b);
        return h
    };
    e.pairs = function(b) {
        for (var c = e.keys(b), a = c.length, l = Array(a), f = 0; a > f; f++) l[f] = [c[f], b[c[f]]];
        return l
    };
    e.invert = function(b) {
        for (var c = {}, a = e.keys(b), l = 0, f = a.length; f > l; l++) c[b[a[l]]] =
            a[l];
        return c
    };
    e.functions = e.methods = function(b) {
        var c = [],
            a;
        for (a in b) e.isFunction(b[a]) && c.push(a);
        return c.sort()
    };
    e.extend = Y(e.allKeys);
    e.extendOwn = e.assign = Y(e.keys);
    e.findKey = function(b, c, a) {
        c = R(c, a);
        var l;
        a = e.keys(b);
        for (var f = 0, h = a.length; h > f; f++)
            if (l = a[f], c(b[l], l, b)) return l
    };
    e.pick = function(b, c, a) {
        var l, f, h = {},
            s = b;
        if (null == s) return h;
        e.isFunction(c) ? (f = e.allKeys(s), l = M(c, a)) : (f = L(arguments, !1, !1, 1), l = function(b, c, a) {
            return c in a
        }, s = Object(s));
        for (var z = 0, q = f.length; q > z; z++) {
            var p = f[z],
                g = s[p];
            l(g, p, s) && (h[p] = g)
        }
        return h
    };
    e.omit = function(b, c, a) {
        if (e.isFunction(c)) c = e.negate(c);
        else {
            var l = e.map(L(arguments, !1, !1, 1), String);
            c = function(b, c) {
                return !e.contains(l, c)
            }
        }
        return e.pick(b, c, a)
    };
    e.defaults = Y(e.allKeys, !0);
    e.create = function(b, c) {
        var a = ja(b);
        return c && e.extendOwn(a, c), a
    };
    e.clone = function(b) {
        return e.isObject(b) ? e.isArray(b) ? b.slice() : e.extend({}, b) : b
    };
    e.tap = function(b, c) {
        return c(b), b
    };
    e.isMatch = function(b, c) {
        var a = e.keys(c),
            l = a.length;
        if (null == b) return !l;
        for (var f = Object(b), h =
                0; l > h; h++) {
            var s = a[h];
            if (c[s] !== f[s] || !(s in f)) return !1
        }
        return !0
    };
    var l = function(b, c, a, m) {
        if (b === c) return 0 !== b || 1 / b === 1 / c;
        if (null == b || null == c) return b === c;
        b instanceof e && (b = b._wrapped);
        c instanceof e && (c = c._wrapped);
        var f = H.call(b);
        if (f !== H.call(c)) return !1;
        switch (f) {
            case "[object RegExp]":
            case "[object String]":
                return "" + b == "" + c;
            case "[object Number]":
                return +b !== +b ? +c !== +c : 0 === +b ? 1 / +b === 1 / c : +b === +c;
            case "[object Date]":
            case "[object Boolean]":
                return +b === +c
        }
        f = "[object Array]" === f;
        if (!f) {
            if ("object" !=
                typeof b || "object" != typeof c) return !1;
            var h = b.constructor,
                s = c.constructor;
            if (h !== s && !(e.isFunction(h) && h instanceof h && e.isFunction(s) && s instanceof s) && "constructor" in b && "constructor" in c) return !1
        }
        a = a || [];
        m = m || [];
        for (h = a.length; h--;)
            if (a[h] === b) return m[h] === c;
        if (a.push(b), m.push(c), f) {
            if (h = b.length, h !== c.length) return !1;
            for (; h--;)
                if (!l(b[h], c[h], a, m)) return !1
        } else {
            var z, f = e.keys(b);
            if (h = f.length, e.keys(c).length !== h) return !1;
            for (; h--;)
                if (z = f[h], !e.has(c, z) || !l(b[z], c[z], a, m)) return !1
        }
        return a.pop(),
            m.pop(), !0
    };
    e.isEqual = function(b, c) {
        return l(b, c)
    };
    e.isEmpty = function(b) {
        return null == b ? !0 : C(b) && (e.isArray(b) || e.isString(b) || e.isArguments(b)) ? 0 === b.length : 0 === e.keys(b).length
    };
    e.isElement = function(b) {
        return !(!b || 1 !== b.nodeType)
    };
    e.isArray = O || function(b) {
        return "[object Array]" === H.call(b)
    };
    e.isObject = function(b) {
        var c = typeof b;
        return "function" === c || "object" === c && !!b
    };
    e.each("Arguments Function String Number Date RegExp Error".split(" "), function(b) {
        e["is" + b] = function(c) {
            return H.call(c) === "[object " +
                b + "]"
        }
    });
    e.isArguments(arguments) || (e.isArguments = function(b) {
        return e.has(b, "callee")
    });
    "function" != typeof /./ && "object" != typeof Int8Array && (e.isFunction = function(b) {
        return "function" == typeof b || !1
    });
    e.isFinite = function(b) {
        return isFinite(b) && !isNaN(parseFloat(b))
    };
    e.isNaN = function(b) {
        return e.isNumber(b) && b !== +b
    };
    e.isBoolean = function(b) {
        return !0 === b || !1 === b || "[object Boolean]" === H.call(b)
    };
    e.isNull = function(b) {
        return null === b
    };
    e.isUndefined = function(b) {
        return void 0 === b
    };
    e.has = function(b, c) {
        return null !=
            b && I.call(b, c)
    };
    e.noConflict = function() {
        return x._ = p, this
    };
    e.identity = function(b) {
        return b
    };
    e.constant = function(b) {
        return function() {
            return b
        }
    };
    e.noop = function() {};
    e.property = fa;
    e.propertyOf = function(b) {
        return null == b ? function() {} : function(c) {
            return b[c]
        }
    };
    e.matcher = e.matches = function(b) {
        return b = e.extendOwn({}, b),
            function(c) {
                return e.isMatch(c, b)
            }
    };
    e.times = function(b, c, a) {
        var e = Array(Math.max(0, b));
        c = M(c, a, 1);
        for (a = 0; b > a; a++) e[a] = c(a);
        return e
    };
    e.random = function(b, c) {
        return null == c && (c = b, b = 0), b +
            Math.floor(Math.random() * (c - b + 1))
    };
    e.now = Date.now || function() {
        return (new Date).getTime()
    };
    O = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    Y = e.invert(O);
    fa = function(b) {
        var c = function(c) {
                return b[c]
            },
            a = "(?:" + e.keys(b).join("|") + ")",
            l = RegExp(a),
            f = RegExp(a, "g");
        return function(b) {
            return b = null == b ? "" : "" + b, l.test(b) ? b.replace(f, c) : b
        }
    };
    e.escape = fa(O);
    e.unescape = fa(Y);
    e.result = function(b, c, a) {
        c = null == b ? void 0 : b[c];
        return void 0 === c && (c = a), e.isFunction(c) ? c.call(b) : c
    };
    var s = 0;
    e.uniqueId = function(b) {
        var c = ++s + "";
        return b ? b + c : c
    };
    e.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var z = /(.)^/,
        U = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        G = /\\|'|\r|\n|\u2028|\u2029/g,
        Q = function(b) {
            return "\\" + U[b]
        };
    e.template = function(b, c, a) {
        !c && a && (c = a);
        c = e.defaults({}, c, e.templateSettings);
        a = RegExp([(c.escape || z).source, (c.interpolate || z).source, (c.evaluate || z).source].join("|") + "|$", "g");
        var l = 0,
            f = "__p+='";
        b.replace(a, function(c, a, e, g, k) {
            return f += b.slice(l, k).replace(G, Q), l = k + c.length, a ? f += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'" : e ? f += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), c
        });
        f += "';\n";
        c.variable || (f = "with(obj||{}){\n" + f + "}\n");
        f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var h = new Function(c.variable || "obj", "_", f)
        } catch (s) {
            throw s.source = f, s;
        }
        a = function(b) {
            return h.call(this, b, e)
        };
        return a.source =
            "function(" + (c.variable || "obj") + "){\n" + f + "}", a
    };
    e.chain = function(b) {
        b = e(b);
        return b._chain = !0, b
    };
    var T = function(b, c) {
        return b._chain ? e(c).chain() : c
    };
    e.mixin = function(b) {
        e.each(e.functions(b), function(c) {
            var a = e[c] = b[c];
            e.prototype[c] = function() {
                var b = [this._wrapped];
                return w.apply(b, arguments), T(this, a.apply(e, b))
            }
        })
    };
    e.mixin(e);
    e.each("pop push reverse shift sort splice unshift".split(" "), function(b) {
        var c = r[b];
        e.prototype[b] = function() {
            var a = this._wrapped;
            return c.apply(a, arguments), "shift" !==
                b && "splice" !== b || 0 !== a.length || delete a[0], T(this, a)
        }
    });
    e.each(["concat", "join", "slice"], function(b) {
        var c = r[b];
        e.prototype[b] = function() {
            return T(this, c.apply(this._wrapped, arguments))
        }
    });
    e.prototype.value = function() {
        return this._wrapped
    };
    e.prototype.valueOf = e.prototype.toJSON = e.prototype.value;
    e.prototype.toString = function() {
        return "" + this._wrapped
    };
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return e
    })
}).call(this);
(function(a, h) {
    if ("function" === typeof define && define.amd) define(["underscore", "jquery", "exports"], function(f, x, p) {
        a.Backbone = h(a, p, f, x)
    });
    else if ("undefined" !== typeof exports) {
        var f = require("underscore");
        h(a, exports, f)
    } else a.Backbone = h(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
})(this, function(a, h, f, u) {
    var x = a.Backbone,
        p = [].slice;
    h.VERSION = "1.1.2";
    h.$ = u;
    h.noConflict = function() {
        a.Backbone = x;
        return this
    };
    h.emulateHTTP = !1;
    h.emulateJSON = !1;
    var r = h.Events = {
            on: function(a, e, f) {
                if (!w(this, "on", a, [e, f]) ||
                    !e) return this;
                this._events || (this._events = {});
                (this._events[a] || (this._events[a] = [])).push({
                    callback: e,
                    context: f,
                    ctx: f || this
                });
                return this
            },
            once: function(a, e, h) {
                if (!w(this, "once", a, [e, h]) || !e) return this;
                var q = this,
                    p = f.once(function() {
                        q.off(a, p);
                        e.apply(this, arguments)
                    });
                p._callback = e;
                return this.on(a, p, h)
            },
            off: function(a, e, h) {
                var q, p, n, r, b, c, k, m;
                if (!this._events || !w(this, "off", a, [e, h])) return this;
                if (!a && !e && !h) return this._events = void 0, this;
                r = a ? [a] : f.keys(this._events);
                b = 0;
                for (c = r.length; b < c; b++)
                    if (a =
                        r[b], n = this._events[a]) {
                        this._events[a] = q = [];
                        if (e || h)
                            for (k = 0, m = n.length; k < m; k++) p = n[k], (e && e !== p.callback && e !== p.callback._callback || h && h !== p.context) && q.push(p);
                        q.length || delete this._events[a]
                    }
                return this
            },
            trigger: function(a) {
                if (!this._events) return this;
                var e = p.call(arguments, 1);
                if (!w(this, "trigger", a, e)) return this;
                var f = this._events[a],
                    h = this._events.all;
                f && q(f, e);
                h && q(h, arguments);
                return this
            },
            stopListening: function(a, e, h) {
                var q = this._listeningTo;
                if (!q) return this;
                var p = !e && !h;
                h || "object" !==
                    typeof e || (h = this);
                a && ((q = {})[a._listenId] = a);
                for (var n in q) a = q[n], a.off(e, h, this), (p || f.isEmpty(a._events)) && delete this._listeningTo[n];
                return this
            }
        },
        n = /\s+/,
        w = function(a, e, f, h) {
            if (!f) return !0;
            if ("object" === typeof f) {
                for (var q in f) a[e].apply(a, [q, f[q]].concat(h));
                return !1
            }
            if (n.test(f)) {
                f = f.split(n);
                q = 0;
                for (var p = f.length; q < p; q++) a[e].apply(a, [f[q]].concat(h));
                return !1
            }
            return !0
        },
        q = function(a, e) {
            var f, h = -1,
                q = a.length,
                p = e[0],
                n = e[1],
                b = e[2];
            switch (e.length) {
                case 0:
                    for (; ++h < q;)(f = a[h]).callback.call(f.ctx);
                    break;
                case 1:
                    for (; ++h < q;)(f = a[h]).callback.call(f.ctx, p);
                    break;
                case 2:
                    for (; ++h < q;)(f = a[h]).callback.call(f.ctx, p, n);
                    break;
                case 3:
                    for (; ++h < q;)(f = a[h]).callback.call(f.ctx, p, n, b);
                    break;
                default:
                    for (; ++h < q;)(f = a[h]).callback.apply(f.ctx, e)
            }
        };
    f.each({
        listenTo: "on",
        listenToOnce: "once"
    }, function(a, e) {
        r[e] = function(e, h, s) {
            var q = this._listeningTo || (this._listeningTo = {}),
                p = e._listenId || (e._listenId = f.uniqueId("l"));
            q[p] = e;
            s || "object" !== typeof h || (s = this);
            e[a](h, s, this);
            return this
        }
    });
    r.bind = r.on;
    r.unbind = r.off;
    f.extend(h, r);
    var H = h.Model = function(a, e) {
        var h = a || {};
        e || (e = {});
        this.cid = f.uniqueId("c");
        this.attributes = {};
        e.collection && (this.collection = e.collection);
        e.parse && (h = this.parse(h, e) || {});
        h = f.defaults({}, h, f.result(this, "defaults"));
        this.set(h, e);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    f.extend(H.prototype, r, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(a) {
            return f.clone(this.attributes)
        },
        sync: function() {
            return h.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return f.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, e, h) {
            var q, p, n, r, b, c, k;
            if (null == a) return this;
            "object" === typeof a ? (p = a, h = e) : (p = {})[a] = e;
            h || (h = {});
            if (!this._validate(p, h)) return !1;
            n = h.unset;
            r = h.silent;
            a = [];
            b = this._changing;
            this._changing = !0;
            b || (this._previousAttributes = f.clone(this.attributes), this.changed = {});
            k = this.attributes;
            c = this._previousAttributes;
            this.idAttribute in p && (this.id = p[this.idAttribute]);
            for (q in p) e = p[q], f.isEqual(k[q], e) || a.push(q), f.isEqual(c[q], e) ? delete this.changed[q] : this.changed[q] = e, n ? delete k[q] : k[q] = e;
            if (!r)
                for (a.length && (this._pending = h), e = 0, q = a.length; e < q; e++) this.trigger("change:" + a[e], this, k[a[e]], h);
            if (b) return this;
            if (!r)
                for (; this._pending;) h = this._pending, this._pending = !1, this.trigger("change", this, h);
            this._changing = this._pending = !1;
            return this
        },
        unset: function(a, e) {
            return this.set(a, void 0, f.extend({}, e, {
                unset: !0
            }))
        },
        clear: function(a) {
            var e = {},
                h;
            for (h in this.attributes) e[h] =
                void 0;
            return this.set(e, f.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !f.isEmpty(this.changed) : f.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? f.clone(this.changed) : !1;
            var e, h = !1,
                q = this._changing ? this._previousAttributes : this.attributes,
                p;
            for (p in a) f.isEqual(q[p], e = a[p]) || ((h || (h = {}))[p] = e);
            return h
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return f.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? f.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var e = this,
                h = a.success;
            a.success = function(f) {
                if (!e.set(e.parse(f, a), a)) return !1;
                h && h(e, f, a);
                e.trigger("sync", e, f, a)
            };
            ga(this, a);
            return this.sync("read", this, a)
        },
        save: function(a, e, h) {
            var q, p = this.attributes;
            null == a || "object" === typeof a ? (q = a, h = e) : (q = {})[a] = e;
            h = f.extend({
                validate: !0
            }, h);
            if (q && !h.wait) {
                if (!this.set(q, h)) return !1
            } else if (!this._validate(q, h)) return !1;
            q && h.wait && (this.attributes = f.extend({}, p, q));
            void 0 === h.parse && (h.parse = !0);
            var n = this,
                r = h.success;
            h.success = function(b) {
                n.attributes = p;
                var c = n.parse(b, h);
                h.wait && (c = f.extend(q || {}, c));
                if (f.isObject(c) && !n.set(c, h)) return !1;
                r && r(n, b, h);
                n.trigger("sync", n, b, h)
            };
            ga(this, h);
            a = this.isNew() ? "create" : h.patch ? "patch" : "update";
            "patch" === a && (h.attrs = q);
            a = this.sync(a, this, h);
            q && h.wait && (this.attributes = p);
            return a
        },
        destroy: function(a) {
            a = a ? f.clone(a) : {};
            var e = this,
                h = a.success,
                q = function() {
                    e.trigger("destroy", e, e.collection, a)
                };
            a.success = function(f) {
                (a.wait || e.isNew()) && q();
                h && h(e,
                    f, a);
                e.isNew() || e.trigger("sync", e, f, a)
            };
            if (this.isNew()) return a.success(), !1;
            ga(this, a);
            var p = this.sync("delete", this, a);
            a.wait || q();
            return p
        },
        url: function() {
            var a = f.result(this, "urlRoot") || f.result(this.collection, "url") || da();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(a, e) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(a) {
            return this._validate({}, f.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, e) {
            if (!e.validate || !this.validate) return !0;
            a = f.extend({}, this.attributes, a);
            var h = this.validationError = this.validate(a, e) || null;
            if (!h) return !0;
            this.trigger("invalid", this, h, f.extend(e, {
                validationError: h
            }));
            return !1
        }
    });
    f.each("keys values pairs invert pick omit".split(" "), function(a) {
        H.prototype[a] = function() {
            var e = p.call(arguments);
            e.unshift(this.attributes);
            return f[a].apply(f, e)
        }
    });
    var I = h.Collection = function(a, e) {
            e || (e = {});
            e.model && (this.model = e.model);
            void 0 !== e.comparator && (this.comparator = e.comparator);
            this._reset();
            this.initialize.apply(this, arguments);
            a && this.reset(a, f.extend({
                silent: !0
            }, e))
        },
        O = {
            add: !0,
            remove: !0,
            merge: !0
        },
        D = {
            add: !0,
            remove: !1
        };
    f.extend(I.prototype, r, {
        model: H,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(e) {
                return e.toJSON(a)
            })
        },
        sync: function() {
            return h.sync.apply(this, arguments)
        },
        add: function(a, e) {
            return this.set(a, f.extend({
                merge: !1
            }, e, D))
        },
        remove: function(a, e) {
            var h = !f.isArray(a);
            a = h ? [a] : f.clone(a);
            e ||
                (e = {});
            var q, p, n, r;
            q = 0;
            for (p = a.length; q < p; q++)
                if (r = a[q] = this.get(a[q])) delete this._byId[r.id], delete this._byId[r.cid], n = this.indexOf(r), this.models.splice(n, 1), this.length--, e.silent || (e.index = n, r.trigger("remove", r, this, e)), this._removeReference(r, e);
            return h ? a[0] : a
        },
        set: function(a, e) {
            e = f.defaults({}, e, O);
            e.parse && (a = this.parse(a, e));
            var h = !f.isArray(a);
            a = h ? a ? [a] : [] : f.clone(a);
            var q, p, n, r, b, c, k = e.at,
                m = this.model,
                A = this.comparator && null == k && !1 !== e.sort,
                v = f.isString(this.comparator) ? this.comparator :
                null,
                x = [],
                I = [],
                w = {},
                B = e.add,
                g = e.merge,
                u = e.remove,
                D = !A && B && u ? [] : !1;
            q = 0;
            for (p = a.length; q < p; q++) {
                b = a[q] || {};
                n = b instanceof H ? r = b : b[m.prototype.idAttribute || "id"];
                if (n = this.get(n)) u && (w[n.cid] = !0), g && (b = b === r ? r.attributes : b, e.parse && (b = n.parse(b, e)), n.set(b, e), A && !c && n.hasChanged(v) && (c = !0)), a[q] = n;
                else if (B) {
                    r = a[q] = this._prepareModel(b, e);
                    if (!r) continue;
                    x.push(r);
                    this._addReference(r, e)
                }
                r = n || r;
                !D || !r.isNew() && w[r.id] || D.push(r);
                w[r.id] = !0
            }
            if (u) {
                q = 0;
                for (p = this.length; q < p; ++q) w[(r = this.models[q]).cid] ||
                    I.push(r);
                I.length && this.remove(I, e)
            }
            if (x.length || D && D.length)
                if (A && (c = !0), this.length += x.length, null != k)
                    for (q = 0, p = x.length; q < p; q++) this.models.splice(k + q, 0, x[q]);
                else
                    for (D && (this.models.length = 0), b = D || x, q = 0, p = b.length; q < p; q++) this.models.push(b[q]);
            c && this.sort({
                silent: !0
            });
            if (!e.silent) {
                q = 0;
                for (p = x.length; q < p; q++)(r = x[q]).trigger("add", r, this, e);
                (c || D && D.length) && this.trigger("sort", this, e)
            }
            return h ? a[0] : a
        },
        reset: function(a, e) {
            e || (e = {});
            for (var h = 0, q = this.models.length; h < q; h++) this._removeReference(this.models[h],
                e);
            e.previousModels = this.models;
            this._reset();
            a = this.add(a, f.extend({
                silent: !0
            }, e));
            e.silent || this.trigger("reset", this, e);
            return a
        },
        push: function(a, e) {
            return this.add(a, f.extend({
                at: this.length
            }, e))
        },
        pop: function(a) {
            var e = this.at(this.length - 1);
            this.remove(e, a);
            return e
        },
        unshift: function(a, e) {
            return this.add(a, f.extend({
                at: 0
            }, e))
        },
        shift: function(a) {
            var e = this.at(0);
            this.remove(e, a);
            return e
        },
        slice: function() {
            return p.apply(this.models, arguments)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[a] ||
                this._byId[a.id] || this._byId[a.cid]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, e) {
            return f.isEmpty(a) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                for (var f in a)
                    if (a[f] !== e.get(f)) return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            a || (a = {});
            f.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(f.bind(this.comparator,
                this));
            a.silent || this.trigger("sort", this, a);
            return this
        },
        pluck: function(a) {
            return f.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? f.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var e = a.success,
                h = this;
            a.success = function(f) {
                h[a.reset ? "reset" : "set"](f, a);
                e && e(h, f, a);
                h.trigger("sync", h, f, a)
            };
            ga(this, a);
            return this.sync("read", this, a)
        },
        create: function(a, e) {
            e = e ? f.clone(e) : {};
            if (!(a = this._prepareModel(a, e))) return !1;
            e.wait || this.add(a, e);
            var h = this,
                q = e.success;
            e.success = function(a, f) {
                e.wait && h.add(a,
                    e);
                q && q(a, f, e)
            };
            a.save(null, e);
            return a
        },
        parse: function(a, e) {
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
        _prepareModel: function(a, e) {
            if (a instanceof H) return a;
            e = e ? f.clone(e) : {};
            e.collection = this;
            var h = new this.model(a, e);
            if (!h.validationError) return h;
            this.trigger("invalid", this, h.validationError, e);
            return !1
        },
        _addReference: function(a, e) {
            this._byId[a.cid] = a;
            null != a.id && (this._byId[a.id] = a);
            a.collection || (a.collection =
                this);
            a.on("all", this._onModelEvent, this)
        },
        _removeReference: function(a, e) {
            this === a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, e, f, h) {
            if ("add" !== a && "remove" !== a || f === this) "destroy" === a && this.remove(e, h), e && a === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments)
        }
    });
    f.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without difference indexOf shuffle lastIndexOf isEmpty chain sample".split(" "),
        function(a) {
            I.prototype[a] = function() {
                var e = p.call(arguments);
                e.unshift(this.models);
                return f[a].apply(f, e)
            }
        });
    f.each(["groupBy", "countBy", "sortBy", "indexBy"], function(a) {
        I.prototype[a] = function(e, h) {
            var q = f.isFunction(e) ? e : function(a) {
                return a.get(e)
            };
            return f[a](this.models, q, h)
        }
    });
    u = h.View = function(a) {
        this.cid = f.uniqueId("view");
        a || (a = {});
        f.extend(this, f.pick(a, X));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    };
    var P = /^(\S+)\s*(.*)$/,
        X = "model collection el id attributes className tagName events".split(" ");
    f.extend(u.prototype, r, {
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
        setElement: function(a, e) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof h.$ ? a : h.$(a);
            this.el = this.$el[0];
            !1 !== e && this.delegateEvents();
            return this
        },
        delegateEvents: function(a) {
            if (!a && !(a = f.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var e in a) {
                var h = a[e];
                f.isFunction(h) ||
                    (h = this[a[e]]);
                if (h) {
                    var q = e.match(P),
                        p = q[1],
                        q = q[2],
                        h = f.bind(h, this),
                        p = p + (".delegateEvents" + this.cid);
                    if ("" === q) this.$el.on(p, h);
                    else this.$el.on(p, q, h)
                }
            }
            return this
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        _ensureElement: function() {
            if (this.el) this.setElement(f.result(this, "el"), !1);
            else {
                var a = f.extend({}, f.result(this, "attributes"));
                this.id && (a.id = f.result(this, "id"));
                this.className && (a["class"] = f.result(this, "className"));
                a = h.$("<" + f.result(this, "tagName") +
                    ">").attr(a);
                this.setElement(a, !1)
            }
        }
    });
    h.sync = function(a, q, p) {
        var n = e[a];
        f.defaults(p || (p = {}), {
            emulateHTTP: h.emulateHTTP,
            emulateJSON: h.emulateJSON
        });
        var r = {
            type: n,
            dataType: "json"
        };
        p.url || (r.url = f.result(q, "url") || da());
        null != p.data || !q || "create" !== a && "update" !== a && "patch" !== a || (r.contentType = "application/json", r.data = JSON.stringify(p.attrs || q.toJSON(p)));
        p.emulateJSON && (r.contentType = "application/x-www-form-urlencoded", r.data = r.data ? {
            model: r.data
        } : {});
        if (p.emulateHTTP && ("PUT" === n || "DELETE" === n || "PATCH" ===
                n)) {
            r.type = "POST";
            p.emulateJSON && (r.data._method = n);
            var H = p.beforeSend;
            p.beforeSend = function(a) {
                a.setRequestHeader("X-HTTP-Method-Override", n);
                if (H) return H.apply(this, arguments)
            }
        }
        "GET" === r.type || p.emulateJSON || (r.processData = !1);
        "PATCH" === r.type && B && (r.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        a = p.xhr = h.ajax(f.extend(r, p));
        q.trigger("request", q, a, p);
        return a
    };
    var B = "undefined" !== typeof window && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
        e = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
    h.ajax = function() {
        return h.$.ajax.apply(h.$, arguments)
    };
    var M = h.Router = function(a) {
            a || (a = {});
            a.routes && (this.routes = a.routes);
            this._bindRoutes();
            this.initialize.apply(this, arguments)
        },
        R = /\((.*?)\)/g,
        Y = /(\(\?)?:\w+/g,
        ja = /\*\w+/g,
        fa = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    f.extend(M.prototype, r, {
        initialize: function() {},
        route: function(a, e, q) {
            f.isRegExp(a) || (a = this._routeToRegExp(a));
            f.isFunction(e) && (q = e, e = "");
            q || (q = this[e]);
            var p = this;
            h.history.route(a,
                function(f) {
                    f = p._extractParameters(a, f);
                    p.execute(q, f);
                    p.trigger.apply(p, ["route:" + e].concat(f));
                    p.trigger("route", e, f);
                    h.history.trigger("route", p, e, f)
                });
            return this
        },
        execute: function(a, e) {
            a && a.apply(this, e)
        },
        navigate: function(a, e) {
            h.history.navigate(a, e);
            return this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = f.result(this, "routes");
                for (var a, e = f.keys(this.routes); null != (a = e.pop());) this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(fa, "\\$&").replace(R, "(?:$1)?").replace(Y,
                function(a, e) {
                    return e ? a : "([^/?]+)"
                }).replace(ja, "([^?]*?)");
            return new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(a, e) {
            var h = a.exec(e).slice(1);
            return f.map(h, function(a, e) {
                return e === h.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }
    });
    var S = h.History = function() {
            this.handlers = [];
            f.bindAll(this, "checkUrl");
            "undefined" !== typeof window && (this.location = window.location, this.history = window.history)
        },
        Z = /^[#\/]|\s+$/g,
        C = /^\/+|\/+$/g,
        ca = /msie [\w.]+/,
        L = /\/$/,
        ba = /#.*$/;
    S.started = !1;
    f.extend(S.prototype, r, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(a) {
            return (a = (a || this).location.href.match(/#(.*)$/)) ? a[1] : ""
        },
        getFragment: function(a, e) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || e) {
                    a = decodeURI(this.location.pathname + this.location.search);
                    var f = this.root.replace(L, "");
                    a.indexOf(f) || (a = a.slice(f.length))
                } else a = this.getHash();
            return a.replace(Z, "")
        },
        start: function(a) {
            if (S.started) throw Error("Backbone.history has already been started");
            S.started = !0;
            this.options = f.extend({
                root: "/"
            }, this.options, a);
            this.root = this.options.root;
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            a = this.getFragment();
            var e = document.documentMode,
                e = ca.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
            this.root = ("/" + this.root + "/").replace(C, "/");
            e && this._wantsHashChange && (this.iframe = h.$('<iframe src="javascript:0" tabindex="-1">').hide().appendTo("body")[0].contentWindow,
                this.navigate(a));
            if (this._hasPushState) h.$(window).on("popstate", this.checkUrl);
            else if (this._wantsHashChange && "onhashchange" in window && !e) h.$(window).on("hashchange", this.checkUrl);
            else this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = a;
            a = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                this._hasPushState &&
                    this.atRoot() && a.hash && (this.fragment = this.getHash().replace(Z, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            h.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            this._checkUrlInterval && clearInterval(this._checkUrlInterval);
            S.started = !1
        },
        route: function(a, e) {
            this.handlers.unshift({
                route: a,
                callback: e
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
            return f.any(this.handlers, function(e) {
                if (e.route.test(a)) return e.callback(a), !0
            })
        },
        navigate: function(a, e) {
            if (!S.started) return !1;
            e && !0 !== e || (e = {
                trigger: !!e
            });
            var f = this.root + (a = this.getFragment(a || ""));
            a = a.replace(ba, "");
            if (this.fragment !== a) {
                this.fragment = a;
                "" === a && "/" !== f && (f = f.slice(0, -1));
                if (this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({},
                    document.title, f);
                else if (this._wantsHashChange) this._updateHash(this.location, a, e.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, e.replace));
                else return this.location.assign(f);
                if (e.trigger) return this.loadUrl(a)
            }
        },
        _updateHash: function(a, e, f) {
            f ? (f = a.href.replace(/(javascript:|#).*$/, ""), a.replace(f + "#" + e)) : a.hash = "#" + e
        }
    });
    h.history = new S;
    H.extend = I.extend = M.extend = u.extend = S.extend = function(a,
        e) {
        var h = this,
            q;
        q = a && f.has(a, "constructor") ? a.constructor : function() {
            return h.apply(this, arguments)
        };
        f.extend(q, h, e);
        var p = function() {
            this.constructor = q
        };
        p.prototype = h.prototype;
        q.prototype = new p;
        a && f.extend(q.prototype, a);
        q.__super__ = h.prototype;
        return q
    };
    var da = function() {
            throw Error('A "url" property or function must be specified');
        },
        ga = function(a, e) {
            var f = e.error;
            e.error = function(h) {
                f && f(a, h, e);
                a.trigger("error", a, h, e)
            }
        };
    return h
});
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 1.0.3
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
function FastClick(a, h) {
    function f(a, f) {
        return function() {
            return a.apply(f, arguments)
        }
    }
    var u;
    h = h || {};
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0;
    this.touchBoundary = h.touchBoundary || 10;
    this.layer = a;
    this.tapDelay = h.tapDelay || 200;
    if (!FastClick.notNeeded(a)) {
        for (var x = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), p = 0, r = x.length; p < r; p++) this[x[p]] = f(this[x[p]], this);
        deviceIsAndroid &&
            (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0));
        a.addEventListener("click", this.onClick, !0);
        a.addEventListener("touchstart", this.onTouchStart, !1);
        a.addEventListener("touchmove", this.onTouchMove, !1);
        a.addEventListener("touchend", this.onTouchEnd, !1);
        a.addEventListener("touchcancel", this.onTouchCancel, !1);
        Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(f, h, q) {
            var p = Node.prototype.removeEventListener;
            "click" === f ? p.call(a, f, h.hijacked || h, q) : p.call(a, f, h, q)
        }, a.addEventListener = function(f, h, q) {
            var p = Node.prototype.addEventListener;
            "click" === f ? p.call(a, f, h.hijacked || (h.hijacked = function(a) {
                a.propagationStopped || h(a)
            }), q) : p.call(a, f, h, q)
        });
        "function" === typeof a.onclick && (u = a.onclick, a.addEventListener("click", function(a) {
            u(a)
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
FastClick.prototype.sendClick = function(a, h) {
    var f, u;
    document.activeElement && document.activeElement !== a && document.activeElement.blur();
    u = h.changedTouches[0];
    f = document.createEvent("MouseEvents");
    f.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, u.screenX, u.screenY, u.clientX, u.clientY, !1, !1, !1, !1, 0, null);
    f.forwardedTouchEvent = !0;
    a.dispatchEvent(f)
};
FastClick.prototype.determineEventType = function(a) {
    return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
};
FastClick.prototype.focus = function(a) {
    var h;
    deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (h = a.value.length, a.setSelectionRange(h, h)) : a.focus()
};
FastClick.prototype.updateScrollParent = function(a) {
    var h, f;
    h = a.fastClickScrollParent;
    if (!h || !h.contains(a)) {
        f = a;
        do {
            if (f.scrollHeight > f.offsetHeight) {
                h = f;
                a.fastClickScrollParent = f;
                break
            }
            f = f.parentElement
        } while (f)
    }
    h && (h.fastClickLastScrollTop = h.scrollTop)
};
FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
};
FastClick.prototype.onTouchStart = function(a) {
    var h, f, u;
    if (1 < a.targetTouches.length) return !0;
    h = this.getTargetElementFromEventTarget(a.target);
    f = a.targetTouches[0];
    if (deviceIsIOS) {
        u = window.getSelection();
        if (u.rangeCount && !u.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (f.identifier && f.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
            this.lastTouchIdentifier = f.identifier;
            this.updateScrollParent(h)
        }
    }
    this.trackingClick = !0;
    this.trackingClickStart = a.timeStamp;
    this.targetElement = h;
    this.touchStartX =
        f.pageX;
    this.touchStartY = f.pageY;
    a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault();
    return !0
};
FastClick.prototype.touchHasMoved = function(a) {
    a = a.changedTouches[0];
    var h = this.touchBoundary;
    return Math.abs(a.pageX - this.touchStartX) > h || Math.abs(a.pageY - this.touchStartY) > h ? !0 : !1
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
    var h, f, u = this.targetElement;
    if (!this.trackingClick) return !0;
    if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
    this.cancelNextClick = !1;
    this.lastClickTime = a.timeStamp;
    h = this.trackingClickStart;
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    deviceIsIOSWithBadTarget && (f = a.changedTouches[0], u = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent);
    f = u.tagName.toLowerCase();
    if ("label" === f) {
        if (h = this.findControl(u)) {
            this.focus(u);
            if (deviceIsAndroid) return !1;
            u = h
        }
    } else if (this.needsFocus(u)) {
        if (100 < a.timeStamp - h || deviceIsIOS && window.top !== window && "input" === f) return this.targetElement = null, !1;
        this.focus(u);
        this.sendClick(u, a);
        deviceIsIOS && "select" === f || (this.targetElement = null, a.preventDefault());
        return !1
    }
    if (deviceIsIOS && !deviceIsIOS4 && (h = u.fastClickScrollParent) && h.fastClickLastScrollTop !== h.scrollTop) return !0;
    this.needsClick(u) || (a.preventDefault(),
        this.sendClick(u, a));
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
    var h, f;
    if ("undefined" === typeof window.ontouchstart) return !0;
    if (f = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
        if (deviceIsAndroid) {
            if ((h = document.querySelector("meta[name=viewport]")) && (-1 !== h.content.indexOf("user-scalable=no") || 31 < f && document.documentElement.scrollWidth <= window.outerWidth)) return !0
        } else return !0;
    return deviceIsBlackBerry10 && (h = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= h[1] && 3 <= h[2] && (h = document.querySelector("meta[name=viewport]")) &&
        (-1 !== h.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.msTouchAction ? !0 : !1
};
FastClick.attach = function(a, h) {
    return new FastClick(a, h)
};
"function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    return FastClick
}) : "undefined" !== typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
(function(a, h, f, u) {
    (function(f) {
        for (var h = f.length, p = a("head"); h--;) 0 === p.has("." + f[h]).length && p.append('<meta class="' + f[h] + '" />')
    })("foundation-mq-small foundation-mq-small-only foundation-mq-medium foundation-mq-medium-only foundation-mq-large foundation-mq-large-only foundation-mq-xlarge foundation-mq-xlarge-only foundation-mq-xxlarge foundation-data-attribute-namespace".split(" "));
    a(function() {
        "undefined" !== typeof FastClick && "undefined" !== typeof f.body && FastClick.attach(f.body)
    });
    var x = function(h,
            p) {
            if ("string" === typeof h) {
                if (p) {
                    var r;
                    if (p.jquery) {
                        if (r = p[0], !r) return p
                    } else r = p;
                    return a(r.querySelectorAll(h))
                }
                return a(f.querySelectorAll(h))
            }
            return a(h, p)
        },
        p = function(a) {
            var f = [];
            a || f.push("data");
            0 < this.namespace.length && f.push(this.namespace);
            f.push(this.name);
            return f.join("-")
        },
        r = function(a) {
            a = a.split("-");
            for (var f = a.length, h = []; f--;) 0 !== f ? h.push(a[f]) : 0 < this.namespace.length ? h.push(this.namespace, a[f]) : h.push(a[f]);
            return h.reverse().join("-")
        },
        n = function(f, h) {
            var p = this,
                r = !x(this).data(this.attr_name(!0));
            x(this.scope).is("[" + this.attr_name() + "]") ? (x(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, h || f, this.data_options(x(this.scope)))), r && this.events(this.scope)) : x("[" + this.attr_name() + "]", this.scope).each(function() {
                var r = !x(this).data(p.attr_name(!0) + "-init");
                x(this).data(p.attr_name(!0) + "-init", a.extend({}, p.settings, h || f, p.data_options(x(this))));
                r && p.events(this)
            });
            if ("string" === typeof f) return this[f].call(this, h)
        },
        w = function(a, f) {
            function h() {
                f(a[0])
            }

            function p() {
                this.one("load",
                    h);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var a = this.attr("src"),
                        f = a.match(/\?/) ? "&" : "?",
                        f = f + ("random=" + (new Date).getTime());
                    this.attr("src", a + f)
                }
            }
            a.attr("src") ? a[0].complete || 4 === a[0].readyState ? h() : p.call(a) : h()
        };
    h.matchMedia = h.matchMedia || function(a) {
        var f, h = a.documentElement,
            p = h.firstElementChild || h.firstChild,
            r = a.createElement("body"),
            n = a.createElement("div");
        n.id = "mq-test-1";
        n.style.cssText = "position:absolute;top:-100em";
        r.style.background = "none";
        r.appendChild(n);
        return function(a) {
            n.innerHTML =
                '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>';
            h.insertBefore(r, p);
            f = 42 === n.offsetWidth;
            h.removeChild(r);
            return {
                matches: f,
                media: a
            }
        }
    }(f);
    (function(a) {
        function f() {
            p && (n(f), w && jQuery.fx.tick())
        }
        var p, r = 0;
        a = ["webkit", "moz"];
        for (var n = h.requestAnimationFrame, x = h.cancelAnimationFrame, w = "undefined" !== typeof jQuery.fx; r < a.length && !n; r++) n = h[a[r] + "RequestAnimationFrame"], x = x || h[a[r] + "CancelAnimationFrame"] || h[a[r] + "CancelRequestAnimationFrame"];
        n ? (h.requestAnimationFrame = n, h.cancelAnimationFrame =
            x, w && (jQuery.fx.timer = function(a) {
                a() && jQuery.timers.push(a) && !p && (p = !0, f())
            }, jQuery.fx.stop = function() {
                p = !1
            })) : (h.requestAnimationFrame = function(a) {
            var e = (new Date).getTime(),
                f = Math.max(0, 16 - (e - r)),
                p = h.setTimeout(function() {
                    a(e + f)
                }, f);
            r = e + f;
            return p
        }, h.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    })(jQuery);
    h.Foundation = {
        name: "Foundation",
        version: "{{VERSION}}",
        media_queries: {
            small: x(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "small-only": x(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
                ""),
            medium: x(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "medium-only": x(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: x(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "large-only": x(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: x(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
                ""),
            "xlarge-only": x(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: x(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: u
        },
        init: function(a, f, p, r, n) {
            p = [a, p, r, n];
            r = [];
            this.rtl = /rtl/i.test(x("html").attr("dir"));
            this.scope = a || this.scope;
            this.set_namespace();
            if (f && "string" === typeof f && !/reflow/i.test(f)) this.libs.hasOwnProperty(f) &&
                r.push(this.init_lib(f, p));
            else
                for (var w in this.libs) r.push(this.init_lib(w, f));
            x(h).load(function() {
                x(h).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            });
            return a
        },
        init_lib: function(f, h) {
            if (this.libs.hasOwnProperty(f)) {
                this.patch(this.libs[f]);
                if (h && h.hasOwnProperty(f)) return "undefined" !==
                    typeof this.libs[f].settings ? a.extend(!0, this.libs[f].settings, h[f]) : "undefined" !== typeof this.libs[f].defaults && a.extend(!0, this.libs[f].defaults, h[f]), this.libs[f].init.apply(this.libs[f], [this.scope, h[f]]);
                h = h instanceof Array ? h : Array(h);
                return this.libs[f].init.apply(this.libs[f], h)
            }
            return function() {}
        },
        patch: function(a) {
            a.scope = this.scope;
            a.namespace = this.global.namespace;
            a.rtl = this.rtl;
            a.data_options = this.utils.data_options;
            a.attr_name = p;
            a.add_namespace = r;
            a.bindings = n;
            a.S = this.utils.S
        },
        inherit: function(a,
            f) {
            for (var h = f.split(" "), p = h.length; p--;) this.utils.hasOwnProperty(h[p]) && (a[h[p]] = this.utils[h[p]])
        },
        set_namespace: function() {
            var f = this.global.namespace === u ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = f === u || /false/i.test(f) ? "" : f
        },
        libs: {},
        utils: {
            S: x,
            throttle: function(a, f) {
                var h = null;
                return function() {
                    var p = this,
                        r = arguments;
                    null == h && (h = setTimeout(function() {
                        a.apply(p, r);
                        h = null
                    }, f))
                }
            },
            debounce: function(a, f, h) {
                var p, r;
                return function() {
                    var n =
                        this,
                        x = arguments,
                        w = h && !p;
                    clearTimeout(p);
                    p = setTimeout(function() {
                        p = null;
                        h || (r = a.apply(n, x))
                    }, f);
                    w && (r = a.apply(n, x));
                    return r
                }
            },
            data_options: function(f, h) {
                function p(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && !1 !== a && !0 !== a
                }

                function r(e) {
                    return "string" === typeof e ? a.trim(e) : e
                }
                h = h || "options";
                var n = {},
                    x, w, u;
                x = function(a) {
                    var f = Foundation.global.namespace;
                    return 0 < f.length ? a.data(f + "-" + h) : a.data(h)
                }(f);
                if ("object" === typeof x) return x;
                u = (x || ":").split(";");
                for (x = u.length; x--;) w = u[x].split(":"), w = [w[0], w.slice(1).join(":")],
                    /true/i.test(w[1]) && (w[1] = !0), /false/i.test(w[1]) && (w[1] = !1), p(w[1]) && (-1 === w[1].indexOf(".") ? w[1] = parseInt(w[1], 10) : w[1] = parseFloat(w[1])), 2 === w.length && 0 < w[0].length && (n[r(w[0])] = r(w[1]));
                return n
            },
            register_media: function(f, h) {
                if (Foundation.media_queries[f] === u) {
                    a("head").append('<meta class="' + h + '"/>');
                    var p = Foundation.media_queries,
                        r = a("." + h).css("font-family");
                    if ("string" === typeof r || r instanceof String) r = r.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "");
                    p[f] = r
                }
            },
            add_custom_rule: function(a, f) {
                f ===
                    u && Foundation.stylesheet ? Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length) : Foundation.media_queries[f] !== u && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[f] + "{ " + a + " }")
            },
            image_loaded: function(a, f) {
                var h = this,
                    p = a.length;
                0 === p && f(a);
                a.each(function() {
                    w(h.S(this), function() {
                        --p;
                        0 === p && f(a)
                    })
                })
            },
            random_str: function() {
                this.fidx || (this.fidx = 0);
                this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-");
                return this.prefix + (this.fidx++).toString(36)
            },
            match: function(a) {
                return h.matchMedia(a).matches
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
(function(a, h, f, u) {
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
                equalTo: function(a, h, r) {
                    return f.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value === a.value
                }
            }
        },
        timer: null,
        init: function(a, f, h) {
            this.bindings(f, h)
        },
        events: function(f) {
            var h = this;
            f = h.S(f).attr("novalidate", "novalidate");
            var r = f.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid");
            f.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",
                function(a) {
                    var f = /ajax/i.test(h.S(this).attr(h.attr_name()));
                    return h.validate(h.S(this).find("input, textarea, select").get(), a, f)
                }).on("reset", function() {
                return h.reset(a(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                !0 === r.validate_on_blur && h.validate([this], a)
            }).on("keydown.fndtn.abide", function(a) {
                !0 === r.live_validate && 9 != a.which && (clearTimeout(h.timer), h.timer = setTimeout(function() {
                    h.validate([this], a)
                }.bind(this), r.timeout))
            })
        },
        reset: function(f) {
            f.removeAttr(this.invalid_attr);
            a(this.invalid_attr, f).removeAttr(this.invalid_attr);
            a("." + this.settings.error_class, f).not("small").removeClass(this.settings.error_class)
        },
        validate: function(a, f, h) {
            var n = this.parse_patterns(a),
                w = n.length,
                q = this.S(a[0]).closest("form");
            f = /submit/.test(f.type);
            for (var u = 0; u < w; u++)
                if (!n[u] && (f || h)) return this.settings.focus_on_invalid && a[u].focus(), q.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(a[u]).closest("form").attr(this.invalid_attr,
                    ""), !1;
                (f || h) && q.trigger("valid").trigger("valid.fndtn.abide");
            q.removeAttr(this.invalid_attr);
            return h ? !1 : !0
        },
        parse_patterns: function(a) {
            for (var f = a.length, h = []; f--;) h.push(this.pattern(a[f]));
            return this.check_validation_and_apply_styles(h)
        },
        pattern: function(a) {
            var f = a.getAttribute("type"),
                h = "string" === typeof a.getAttribute("required"),
                n = a.getAttribute("pattern") || "";
            if (this.settings.patterns.hasOwnProperty(n) && 0 < n.length) return [a, this.settings.patterns[n], h];
            if (0 < n.length) return [a, new RegExp(n),
                h
            ];
            if (this.settings.patterns.hasOwnProperty(f)) return [a, this.settings.patterns[f], h];
            n = /.*/;
            return [a, n, h]
        },
        check_validation_and_apply_styles: function(f) {
            var h = f.length,
                r = [];
            for (this.S(f[0][0]).closest("[data-" + this.attr_name(!0) + "]").data(this.attr_name(!0) + "-init"); h--;) {
                var n = f[h][0],
                    w = f[h][2],
                    q = n.value.trim(),
                    u = this.S(n).parent(),
                    I = n.getAttribute(this.add_namespace("data-abide-validator")),
                    O = "radio" === n.type,
                    D = "checkbox" === n.type,
                    P = this.S('label[for="' + n.getAttribute("id") + '"]'),
                    X = w ? 0 < n.value.length :
                    !0,
                    B = [];
                n.getAttribute(this.add_namespace("data-equalto")) && (I = "equalTo");
                u = u.is("label") ? u.parent() : u;
                I && (I = this.settings.validators[I].apply(this, [n, w, u]), B.push(I));
                O && w ? B.push(this.valid_radio(n, w)) : D && w ? B.push(this.valid_checkbox(n, w)) : (f[h][1].test(q) && X || !w && 1 > n.value.length || a(n).attr("disabled") ? B.push(!0) : B.push(!1), B = [B.every(function(a) {
                    return a
                })], B[0] ? (this.S(n).removeAttr(this.invalid_attr), n.setAttribute("aria-invalid", "false"), n.removeAttribute("aria-describedby"), u.removeClass(this.settings.error_class),
                    0 < P.length && this.settings.error_labels && P.removeClass(this.settings.error_class).removeAttr("role"), a(n).triggerHandler("valid")) : (this.S(n).attr(this.invalid_attr, ""), n.setAttribute("aria-invalid", "true"), w = u.find("small." + this.settings.error_class, "span." + this.settings.error_class), w = 0 < w.length ? w[0].id : "", 0 < w.length && n.setAttribute("aria-describedby", w), u.addClass(this.settings.error_class), 0 < P.length && this.settings.error_labels && P.addClass(this.settings.error_class).attr("role", "alert"), a(n).triggerHandler("invalid")));
                r.push(B[0])
            }
            return r = [r.every(function(a) {
                return a
            })]
        },
        valid_checkbox: function(a, f) {
            a = this.S(a);
            var h = a.is(":checked") || !f;
            h ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return h
        },
        valid_radio: function(a, f) {
            for (var h = a.getAttribute("name"), h = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + h + "']"), n = h.length, w = !1, q = 0; q < n; q++) h[q].checked && (w = !0);
            for (q = 0; q < n; q++) w ? this.S(h[q]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) :
                this.S(h[q]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return w
        },
        valid_equal: function(a, h, r) {
            (h = f.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value === a.value) ? (this.S(a).removeAttr(this.invalid_attr), r.removeClass(this.settings.error_class), 0 < label.length && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), r.addClass(this.settings.error_class), 0 < label.length && settings.error_labels && label.addClass(this.settings.error_class));
            return h
        },
        valid_oneof: function(a, f, h, n) {
            a = this.S(a);
            f = this.S("[" + this.add_namespace("data-oneof") + "]");
            (h = 0 < f.filter(":checked").length) ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class): a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            if (!n) {
                var w = this;
                f.each(function() {
                    w.valid_oneof.call(w, this, null, null, !0)
                })
            }
            return h
        }
    }
})(jQuery, window, window.document);
(function(a, h, f, u) {
    function x(a) {
        var f = /fade/i.test(a);
        a = /pop/i.test(a);
        return {
            animate: f || a,
            pop: a,
            fade: f
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
        init: function(f, h, n) {
            a.extend(!0, this.settings, h, n);
            this.bindings(h, n)
        },
        events: function(a) {
            var h = this,
                n = h.S;
            n(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(a) {
                a.preventDefault();
                if (!h.locked) {
                    a = n(this);
                    var f = a.data(h.data_attr("reveal-ajax"));
                    h.locked = !0;
                    "undefined" === typeof f ? h.open.call(h, a) : (f = !0 === f ? a.attr("href") : f, h.open.call(h,
                        a, {
                            url: f
                        }))
                }
            });
            n(f).on("click.fndtn.reveal", this.close_targets(), function(a) {
                a.preventDefault();
                if (!h.locked) {
                    var f = n("[" + h.attr_name() + "].open").data(h.attr_name(!0) + "-init") || h.settings,
                        p = n(a.target)[0] === n("." + f.bg_class)[0];
                    if (p)
                        if (f.close_on_background_click) a.stopPropagation();
                        else return;
                    h.locked = !0;
                    h.close.call(h, p ? n("[" + h.attr_name() + "].open") : n(this).closest("[" + h.attr_name() + "]"))
                }
            });
            if (0 < n("[" + h.attr_name() + "]", this.scope).length) n(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal",
                this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video);
            else n(this.scope).on("open.fndtn.reveal", "[" + h.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + h.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + h.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + h.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal",
                "[" + h.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + h.attr_name() + "]", this.close_video);
            return !0
        },
        key_up_on: function(a) {
            var f = this;
            f.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(a) {
                var h = f.S("[" + f.attr_name() + "].open"),
                    p = h.data(f.attr_name(!0) + "-init") || f.settings;
                p && 27 === a.which && p.close_on_esc && !f.locked && f.close.call(f, h)
            });
            return !0
        },
        key_up_off: function(a) {
            this.S("body").off("keyup.fndtn.reveal");
            return !0
        },
        open: function(f, r) {
            var n = this,
                w;
            f ? "undefined" !==
                typeof f.selector ? w = n.S("#" + f.data(n.data_attr("reveal-id"))).first() : (w = n.S(this.scope), r = f) : w = n.S(this.scope);
            var q = w.data(n.attr_name(!0) + "-init"),
                q = q || this.settings;
            if (w.hasClass("open") && f.attr("data-reveal-id") == w.attr("id")) return n.close(w);
            if (!w.hasClass("open")) {
                var u = n.S("[" + n.attr_name() + "].open");
                "undefined" === typeof w.data("css-top") && w.data("css-top", parseInt(w.css("top"), 10)).data("offset", this.cache_offset(w));
                this.key_up_on(w);
                w.trigger("open").trigger("open.fndtn.reveal");
                1 > u.length &&
                    this.toggle_bg(w, !0);
                "string" === typeof r && (r = {
                    url: r
                });
                if ("undefined" !== typeof r && r.url) {
                    var x = "undefined" !== typeof r.success ? r.success : null;
                    a.extend(r, {
                        success: function(f, h, p) {
                            a.isFunction(x) && (h = x(f, h, p), "string" == typeof h && (f = h));
                            w.html(f);
                            n.S(w).foundation("section", "reflow");
                            n.S(w).children().foundation();
                            0 < u.length && n.hide(u, q.css.close);
                            n.show(w, q.css.open)
                        }
                    });
                    a.ajax(r)
                } else 0 < u.length && this.hide(u, q.css.close), this.show(w, q.css.open)
            }
            n.S(h).trigger("resize")
        },
        close: function(a) {
            a = a && a.length ?
                a : this.S(this.scope);
            var f = this.S("[" + this.attr_name() + "].open"),
                h = a.data(this.attr_name(!0) + "-init") || this.settings;
            0 < f.length && (this.locked = !0, this.key_up_off(a), a.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(a, !1), this.hide(f, h.css.close, h))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(f, h, n) {
            f = (f.data(this.attr_name(!0) + "-init") || this.settings).bg_root_element;
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo(f).hide());
            f = 0 < this.settings.bg.filter(":visible").length;
            n != f && ((n == u ? f : !n) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(f, h) {
            if (h) {
                var n = f.data(this.attr_name(!0) + "-init") || this.settings,
                    w = n.root_element;
                if (0 === f.parent(w).length) {
                    var q = f.wrap('<div style="display: none;" />').parent();
                    f.on("closed.fndtn.reveal.wrapped", function() {
                        f.detach().appendTo(q);
                        f.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    });
                    f.detach().appendTo(w)
                }
                var u = x(n.animation);
                u.animate || (this.locked = !1);
                if (u.pop) {
                    h.top = a(w).scrollTop() - f.data("offset") + "px";
                    var I = {
                        top: a(w).scrollTop() + f.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return f.css(h).animate(I, n.animation_speed, "linear", function() {
                            this.locked = !1;
                            f.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), n.animation_speed / 2)
                }
                return u.fade ? (h.top = a(w).scrollTop() + f.data("css-top") +
                    "px", I = {
                        opacity: 1
                    }, setTimeout(function() {
                        return f.css(h).animate(I, n.animation_speed, "linear", function() {
                            this.locked = !1;
                            f.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), n.animation_speed / 2)) : f.css(h).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            n = this.settings;
            if (x(n.animation).fade) return f.fadeIn(n.animation_speed / 2);
            this.locked = !1;
            return f.show()
        },
        hide: function(f, h) {
            if (h) {
                var n = f.data(this.attr_name(!0) + "-init") ||
                    this.settings,
                    u = n.root_element,
                    q = x(n.animation);
                q.animate || (this.locked = !1);
                if (q.pop) {
                    var H = {
                        top: -a(u).scrollTop() - f.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return f.animate(H, n.animation_speed, "linear", function() {
                            this.locked = !1;
                            f.css(h).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), n.animation_speed / 2)
                }
                return q.fade ? (H = {
                    opacity: 0
                }, setTimeout(function() {
                        return f.animate(H, n.animation_speed, "linear", function() {
                            this.locked = !1;
                            f.css(h).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this),
                    n.animation_speed / 2)) : f.hide().css(h).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            n = this.settings;
            return x(n.animation).fade ? f.fadeOut(n.animation_speed / 2) : f.hide()
        },
        close_video: function(f) {
            f = a(".flex-video", f.target);
            var h = a("iframe", f);
            0 < h.length && (h.attr("data-src", h[0].src), h.attr("src", h.attr("src")), f.hide())
        },
        open_video: function(f) {
            f = a(".flex-video", f.target);
            var h = f.find("iframe");
            if (0 < h.length) {
                if ("string" === typeof h.attr("data-src")) h[0].src = h.attr("data-src");
                else {
                    var n =
                        h[0].src;
                    h[0].src = u;
                    h[0].src = n
                }
                f.show()
            }
        },
        data_attr: function(a) {
            return 0 < this.namespace.length ? this.namespace + "-" + a : a
        },
        cache_offset: function(a) {
            var f = a.show().height() + parseInt(a.css("top"), 10);
            a.hide();
            return f
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
})(jQuery, window, window.document);
"function" !== typeof Object.create && (Object.create = function(a) {
    function h() {}
    h.prototype = a;
    return new h
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
            var h = this;
            $.each(this.options.buttons, function(a, u) {
                var x = $("<button/>").addClass(u.addClass ? u.addClass : "gray").html(u.text).attr("id", u.id ? u.id : "button-" + a).appendTo(h.$bar.find(".noty_buttons")).on("click", function() {
                    $.isFunction(u.onClick) && u.onClick.call(x, h)
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
        if (-1 < $.inArray("click", a.options.closeWith)) a.$bar.css("cursor", "pointer").one("click", function(h) {
            a.stopPropagation(h);
            a.options.callback.onCloseClick && a.options.callback.onCloseClick.apply(a);
            a.close()
        });
        if (-1 < $.inArray("hover", a.options.closeWith)) a.$bar.one("mouseenter", function() {
            a.close()
        });
        if (-1 < $.inArray("button", a.options.closeWith)) a.$closeButton.one("click", function(h) {
            a.stopPropagation(h);
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
                var h = [];
                $.each($.noty.queue, function(f, u) {
                    u.options.id != a.options.id && h.push(u)
                });
                $.noty.queue = h
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
            var h = this;
            this.options.timeout = a;
            h.$bar.delay(h.options.timeout).promise().done(function() {
                h.close()
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
        var h = $("<div/>").addClass("noty_modal").addClass(a.options.theme).data("noty_modal_count", 0);
        a.options.theme.modal && a.options.theme.modal.css && h.css(a.options.theme.modal.css);
        h.prependTo($("body")).fadeIn("fast");
        if (-1 < $.inArray("backdrop", a.options.closeWith)) h.on("click", function(a) {
            $.noty.closeAll()
        })
    }
};
$.notyRenderer.getLayoutCountFor = function(a) {
    return $(a.options.layout.container.selector).data("noty_layout_count") || 0
};
$.notyRenderer.setLayoutCountFor = function(a, h) {
    return $(a.options.layout.container.selector).data("noty_layout_count", $.notyRenderer.getLayoutCountFor(a) + h)
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
$.noty.setText = function(a, h) {
    return $.noty.get(a) ? $.noty.get(a).setText(h) : !1
};
$.noty.setType = function(a, h) {
    return $.noty.get(a) ? $.noty.get(a).setType(h) : !1
};
$.noty.clearQueue = function() {
    $.noty.queue = []
};
$.noty.closeAll = function() {
    $.noty.clearQueue();
    $.each($.noty.store, function(a, h) {
        h.close()
    })
};
var windowAlert = window.alert;
$.noty.consumeAlert = function(a) {
    window.alert = function(h) {
        a ? a.text = h : a = {
            text: h
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
    $.each($.noty.layouts, function(a, h) {
        h.container.style.apply($(h.container.selector))
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
var JSON;
JSON || (JSON = {});
(function() {
    function a(f, n) {
        var u, x, D, P, X = p,
            B, e = n[f];
        e && "object" == typeof e && "function" == typeof e.toJSON && (e = e.toJSON(f));
        "function" == typeof w && (e = w.call(n, f, e));
        switch (typeof e) {
            case "string":
                return h(e);
            case "number":
                return isFinite(e) ? String(e) : "null";
            case "boolean":
            case "null":
                return String(e);
            case "object":
                if (!e) return "null";
                p += r;
                B = [];
                if ("[object Array]" === Object.prototype.toString.apply(e)) {
                    P = e.length;
                    for (u = 0; u < P; u += 1) B[u] = a(u, e) || "null";
                    D = 0 === B.length ? "[]" : p ? "[\n" + p + B.join(",\n" + p) + "\n" + X + "]" :
                        "[" + B.join(",") + "]";
                    p = X;
                    return D
                }
                if (w && "object" == typeof w)
                    for (P = w.length, u = 0; u < P; u += 1) "string" == typeof w[u] && (x = w[u], D = a(x, e), D && B.push(h(x) + (p ? ": " : ":") + D));
                else
                    for (x in e) Object.prototype.hasOwnProperty.call(e, x) && (D = a(x, e), D && B.push(h(x) + (p ? ": " : ":") + D));
                D = 0 === B.length ? "{}" : p ? "{\n" + p + B.join(",\n" + p) + "\n" + X + "}" : "{" + B.join(",") + "}";
                p = X;
                return D
        }
    }

    function h(a) {
        x.lastIndex = 0;
        return x.test(a) ? '"' + a.replace(x, function(a) {
                var f = n[a];
                return "string" == typeof f ? f : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) +
            '"' : '"' + a + '"'
    }

    function f(a) {
        return 10 > a ? "0" + a : a
    }
    "use strict";
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    });
    var u = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        x = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        p, r, n = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        w;
    "function" != typeof JSON.stringify && (JSON.stringify = function(f, h, n) {
        var u;
        r = p = "";
        if ("number" == typeof n)
            for (u = 0; u < n; u += 1) r += " ";
        else "string" == typeof n && (r = n);
        w = h;
        if (!h || "function" == typeof h || "object" == typeof h && "number" == typeof h.length) return a("", {
            "": f
        });
        throw Error("JSON.stringify");
    });
    "function" !=
    typeof JSON.parse && (JSON.parse = function(a, f) {
        function h(a, p) {
            var n, q, e = a[p];
            if (e && "object" == typeof e)
                for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (q = h(e, n), void 0 !== q ? e[n] = q : delete e[n]);
            return f.call(a, p, e)
        }
        var p;
        a = String(a);
        u.lastIndex = 0;
        u.test(a) && (a = a.replace(u, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return p = eval("(" + a + ")"), "function" == typeof f ? h({
            "": p
        }, "") : p;
        throw new SyntaxError("JSON.parse");
    })
})();
SockJS = function() {
    var a = document,
        h = window,
        f = {},
        u = function() {};
    u.prototype.addEventListener = function(b, a) {
        this._listeners || (this._listeners = {});
        b in this._listeners || (this._listeners[b] = []);
        var e = this._listeners[b]; - 1 === f.arrIndexOf(e, a) && e.push(a)
    };
    u.prototype.removeEventListener = function(b, a) {
        if (this._listeners && b in this._listeners) {
            var e = this._listeners[b],
                h = f.arrIndexOf(e, a); - 1 !== h && (1 < e.length ? this._listeners[b] = e.slice(0, h).concat(e.slice(h + 1)) : delete this._listeners[b])
        }
    };
    u.prototype.dispatchEvent =
        function(b) {
            var a = b.type,
                e = Array.prototype.slice.call(arguments, 0);
            this["on" + a] && this["on" + a].apply(this, e);
            if (this._listeners && a in this._listeners)
                for (var f = 0; f < this._listeners[a].length; f++) this._listeners[a][f].apply(this, e)
        };
    var x = function(b, a) {
        this.type = b;
        if ("undefined" != typeof a)
            for (var e in a) a.hasOwnProperty(e) && (this[e] = a[e])
    };
    x.prototype.toString = function() {
        var b = [],
            a;
        for (a in this)
            if (this.hasOwnProperty(a)) {
                var e = this[a];
                "function" == typeof e && (e = "[function]");
                b.push(a + "=" + e)
            }
        return "SimpleEvent(" +
            b.join(", ") + ")"
    };
    var p = function(b) {
        this._events = b || [];
        this._listeners = {}
    };
    p.prototype.emit = function(b) {
        this._verifyType(b);
        if (!this._nuked) {
            var a = Array.prototype.slice.call(arguments, 1);
            this["on" + b] && this["on" + b].apply(this, a);
            if (b in this._listeners)
                for (var e = 0; e < this._listeners[b].length; e++) this._listeners[b][e].apply(this, a)
        }
    };
    p.prototype.on = function(b, a) {
        this._verifyType(b);
        this._nuked || (b in this._listeners || (this._listeners[b] = []), this._listeners[b].push(a))
    };
    p.prototype._verifyType = function(b) {
        -1 ===
            f.arrIndexOf(this._events, b) && f.log("Event " + JSON.stringify(b) + " not listed " + JSON.stringify(this._events) + " in " + this)
    };
    p.prototype.nuke = function() {
        this._nuked = !0;
        for (var b = 0; b < this._events.length; b++) delete this[this._events[b]];
        this._listeners = {}
    };
    f.random_string = function(b, a) {
        a = a || 37;
        var e, f = [];
        for (e = 0; e < b; e++) f.push("abcdefghijklmnopqrstuvwxyz0123456789_".substr(Math.floor(Math.random() * a), 1));
        return f.join("")
    };
    f.random_number = function(b) {
        return Math.floor(Math.random() * b)
    };
    f.random_number_string =
        function(b) {
            var a = ("" + (b - 1)).length;
            return (Array(a + 1).join("0") + f.random_number(b)).slice(-a)
        };
    f.getOrigin = function(b) {
        return (b + "/").split("/").slice(0, 3).join("/")
    };
    f.isSameOriginUrl = function(b, a) {
        return a || (a = h.location.href), b.split("/").slice(0, 3).join("/") === a.split("/").slice(0, 3).join("/")
    };
    f.getParentDomain = function(b) {
        return /^[0-9.]*$/.test(b) || /^\[/.test(b) || !/[.]/.test(b) ? b : b.split(".").slice(1).join(".")
    };
    f.objectExtend = function(b, a) {
        for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]);
        return b
    };
    f.polluteGlobalNamespace = function() {
        "_jp" in h || (h._jp = {})
    };
    f.closeFrame = function(b, a) {
        return "c" + JSON.stringify([b, a])
    };
    f.userSetCode = function(b) {
        return 1E3 === b || 3E3 <= b && 4999 >= b
    };
    f.countRTO = function(b) {
        var a;
        return 100 < b ? a = 3 * b : a = b + 200, a
    };
    f.log = function() {
        h.console && console.log && console.log.apply && console.log.apply(console, arguments)
    };
    f.bind = function(b, a) {
        return b.bind ? b.bind(a) : function() {
            return b.apply(a, arguments)
        }
    };
    f.flatUrl = function(b) {
        return -1 === b.indexOf("?") && -1 === b.indexOf("#")
    };
    f.amendUrl =
        function(b) {
            var c = a.location;
            if (!b) throw Error("Wrong url for SockJS");
            if (!f.flatUrl(b)) throw Error("Only basic urls are supported in SockJS");
            return 0 === b.indexOf("//") && (b = c.protocol + b), 0 === b.indexOf("/") && (b = c.protocol + "//" + c.host + b), b = b.replace(/[/]+$/, ""), b
        };
    f.arrIndexOf = function(b, a) {
        for (var e = 0; e < b.length; e++)
            if (b[e] === a) return e;
        return -1
    };
    f.arrSkip = function(b, a) {
        var e = f.arrIndexOf(b, a);
        return -1 === e ? b.slice() : b.slice(0, e).concat(b.slice(e + 1))
    };
    f.isArray = Array.isArray || function(b) {
        return 0 <= {}.toString.call(b).indexOf("Array")
    };
    f.delay = function(b, a) {
        return "function" == typeof b && (a = b, b = 0), setTimeout(a, b)
    };
    var r = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n = {
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
        w = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        q, H = JSON && JSON.stringify || function(a) {
            return r.lastIndex = 0, r.test(a) && (a = a.replace(r, function(a) {
                return n[a]
            })), '"' + a + '"'
        },
        I = function(a) {
            var c, e = {},
                f = [];
            for (c = 0; 65536 > c; c++) f.push(String.fromCharCode(c));
            return a.lastIndex = 0, f.join("").replace(a, function(a) {
                return e[a] = "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4), ""
            }), a.lastIndex = 0, e
        };
    f.quote = function(a) {
        a = H(a);
        return w.lastIndex = 0, w.test(a) ? (q || (q = I(w)), a.replace(w, function(a) {
            return q[a]
        })) : a
    };
    var O = "websocket xdr-streaming xhr-streaming iframe-eventsource iframe-htmlfile xdr-polling xhr-polling iframe-xhr-polling jsonp-polling".split(" ");
    f.probeProtocols = function() {
        for (var a = {}, c = 0; c < O.length; c++) {
            var f = O[c];
            a[f] = e[f] && e[f].enabled()
        }
        return a
    };
    f.detectProtocols = function(a, c, e) {
        var f = {},
            h = [];
        c || (c = O);
        for (var l = 0; l < c.length; l++) {
            var p = c[l];
            f[p] = a[p]
        }
        var n = function(a) {
            var b = a.shift();
            f[b] ? h.push(b) : 0 < a.length && n(a)
        };
        return !1 !== e.websocket && n(["websocket"]), f["xhr-streaming"] && !e.null_origin ? h.push("xhr-streaming") : !f["xdr-streaming"] || e.cookie_needed || e.null_origin ? n(["iframe-eventsource", "iframe-htmlfile"]) : h.push("xdr-streaming"),
            f["xhr-polling"] && !e.null_origin ? h.push("xhr-polling") : !f["xdr-polling"] || e.cookie_needed || e.null_origin ? n(["iframe-xhr-polling", "jsonp-polling"]) : h.push("xdr-polling"), h
    };
    f.createHook = function() {
        var a = "a" + f.random_string(8);
        if (!("_sockjs_global" in h)) {
            var c = {};
            h._sockjs_global = function(a) {
                return a in c || (c[a] = {
                    id: a,
                    del: function() {
                        delete c[a]
                    }
                }), c[a]
            }
        }
        return h._sockjs_global(a)
    };
    f.attachMessage = function(a) {
        f.attachEvent("message", a)
    };
    f.attachEvent = function(b, c) {
        "undefined" != typeof h.addEventListener ?
            h.addEventListener(b, c, !1) : (a.attachEvent("on" + b, c), h.attachEvent("on" + b, c))
    };
    f.detachMessage = function(a) {
        f.detachEvent("message", a)
    };
    f.detachEvent = function(b, c) {
        "undefined" != typeof h.addEventListener ? h.removeEventListener(b, c, !1) : (a.detachEvent("on" + b, c), h.detachEvent("on" + b, c))
    };
    var D = {},
        P = !1,
        X = function() {
            for (var a in D) D[a](), delete D[a]
        };
    f.attachEvent("unload", function() {
        P || (P = !0, X())
    });
    f.unload_add = function(a) {
        var c = f.random_string(8);
        return D[c] = a, P && f.delay(X), c
    };
    f.unload_del = function(a) {
        a in
            D && delete D[a]
    };
    f.createIframe = function(b, c) {
        var e = a.createElement("iframe"),
            h, l, p = function() {
                clearTimeout(h);
                try {
                    e.onload = null
                } catch (a) {}
                e.onerror = null
            },
            n = function() {
                e && (p(), setTimeout(function() {
                    e && e.parentNode.removeChild(e);
                    e = null
                }, 0), f.unload_del(l))
            };
        return e.src = b, e.style.display = "none", e.style.position = "absolute", e.onerror = function() {
            e && (n(), c("onerror"))
        }, e.onload = function() {
            clearTimeout(h);
            h = setTimeout(function() {
                e && (n(), c("onload timeout"))
            }, 2E3)
        }, a.body.appendChild(e), h = setTimeout(function() {
            e &&
                (n(), c("timeout"))
        }, 15E3), l = f.unload_add(n), {
            post: function(a, b) {
                try {
                    e && e.contentWindow && e.contentWindow.postMessage(a, b)
                } catch (c) {}
            },
            cleanup: n,
            loaded: p
        }
    };
    f.createHtmlfile = function(a, c) {
        var e = new ActiveXObject("htmlfile"),
            m, l, p, n = function() {
                clearTimeout(m)
            },
            q = function() {
                e && (n(), f.unload_del(l), p.parentNode.removeChild(p), p = e = null, CollectGarbage())
            };
        e.open();
        e.write('<html><script>document.domain="' + document.domain + '";\x3c/script></html>');
        e.close();
        e.parentWindow._jp = h._jp;
        var r = e.createElement("div");
        return e.body.appendChild(r), p = e.createElement("iframe"), r.appendChild(p), p.src = a, m = setTimeout(function() {
            e && (q(), c("timeout"))
        }, 15E3), l = f.unload_add(q), {
            post: function(a, b) {
                try {
                    p && p.contentWindow && p.contentWindow.postMessage(a, b)
                } catch (c) {}
            },
            cleanup: q,
            loaded: n
        }
    };
    var B = function() {};
    B.prototype = new p(["chunk", "finish"]);
    B.prototype._start = function(a, c, e, m) {
        var l = this;
        try {
            l.xhr = new XMLHttpRequest
        } catch (p) {}
        if (!l.xhr) try {
            l.xhr = new h.ActiveXObject("Microsoft.XMLHTTP")
        } catch (n) {}
        if (h.ActiveXObject || h.XDomainRequest) c +=
            (-1 === c.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        l.unload_ref = f.unload_add(function() {
            l._cleanup(!0)
        });
        try {
            l.xhr.open(a, c, !0)
        } catch (q) {
            l.emit("finish", 0, "");
            l._cleanup();
            return
        }
        m && m.no_credentials || (l.xhr.withCredentials = "true");
        if (m && m.headers)
            for (var r in m.headers) l.xhr.setRequestHeader(r, m.headers[r]);
        l.xhr.onreadystatechange = function() {
            if (l.xhr) {
                var a = l.xhr;
                switch (a.readyState) {
                    case 3:
                        try {
                            var b = a.status,
                                c = a.responseText
                        } catch (e) {}
                        1223 === b && (b = 204);
                        c && 0 < c.length && l.emit("chunk", b, c);
                        break;
                    case 4:
                        b =
                            a.status, 1223 === b && (b = 204), l.emit("finish", b, a.responseText), l._cleanup(!1)
                }
            }
        };
        l.xhr.send(e)
    };
    B.prototype._cleanup = function(a) {
        if (this.xhr) {
            f.unload_del(this.unload_ref);
            this.xhr.onreadystatechange = function() {};
            if (a) try {
                this.xhr.abort()
            } catch (c) {}
            this.unload_ref = this.xhr = null
        }
    };
    B.prototype.close = function() {
        this.nuke();
        this._cleanup(!0)
    };
    (f.XHRCorsObject = function() {
        var a = this,
            c = arguments;
        f.delay(function() {
            a._start.apply(a, c)
        })
    }).prototype = new B;
    (f.XHRLocalObject = function(a, c, e) {
        var h = this;
        f.delay(function() {
            h._start(a,
                c, e, {
                    no_credentials: !0
                })
        })
    }).prototype = new B;
    B = f.XDRObject = function(a, c, e) {
        var h = this;
        f.delay(function() {
            h._start(a, c, e)
        })
    };
    B.prototype = new p(["chunk", "finish"]);
    B.prototype._start = function(a, c, e) {
        var h = this,
            l = new XDomainRequest;
        c += (-1 === c.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        var p = l.ontimeout = l.onerror = function() {
            h.emit("finish", 0, "");
            h._cleanup(!1)
        };
        l.onprogress = function() {
            h.emit("chunk", 200, l.responseText)
        };
        l.onload = function() {
            h.emit("finish", 200, l.responseText);
            h._cleanup(!1)
        };
        h.xdr = l;
        h.unload_ref =
            f.unload_add(function() {
                h._cleanup(!0)
            });
        try {
            h.xdr.open(a, c), h.xdr.send(e)
        } catch (n) {
            p()
        }
    };
    B.prototype._cleanup = function(a) {
        if (this.xdr) {
            f.unload_del(this.unload_ref);
            this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
            if (a) try {
                this.xdr.abort()
            } catch (c) {}
            this.unload_ref = this.xdr = null
        }
    };
    B.prototype.close = function() {
        this.nuke();
        this._cleanup(!0)
    };
    f.isXHRCorsCapable = function() {
        return h.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : h.XDomainRequest && a.domain ? 2 : C.enabled() ?
            3 : 4
    };
    var e = function(a, c, k) {
        if (this === h) return new e(a, c, k);
        var m = this,
            l;
        m._options = {
            devel: !1,
            debug: !1,
            protocols_whitelist: [],
            info: void 0,
            rtt: void 0
        };
        k && f.objectExtend(m._options, k);
        m._base_url = f.amendUrl(a);
        m._server = m._options.server || f.random_number_string(1E3);
        m._options.protocols_whitelist && m._options.protocols_whitelist.length ? l = m._options.protocols_whitelist : ("string" == typeof c && 0 < c.length ? l = [c] : f.isArray(c) ? l = c : l = null, l && m._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.'));
        m._protocols = [];
        m.protocol = null;
        m.readyState = e.CONNECTING;
        m._ir = s(m._base_url);
        m._ir.onfinish = function(a, b) {
            m._ir = null;
            a ? (m._options.info && (a = f.objectExtend(a, m._options.info)), m._options.rtt && (b = m._options.rtt), m._applyInfo(a, b, l), m._didClose()) : m._didClose(1002, "Can't connect to server", !0)
        }
    };
    e.prototype = new u;
    e.version = "0.3.4";
    e.CONNECTING = 0;
    e.OPEN = 1;
    e.CLOSING = 2;
    e.CLOSED = 3;
    e.prototype._debug = function() {
        this._options.debug && f.log.apply(f, arguments)
    };
    e.prototype._dispatchOpen = function() {
        this.readyState ===
            e.CONNECTING ? (this._transport_tref && (clearTimeout(this._transport_tref), this._transport_tref = null), this.readyState = e.OPEN, this.dispatchEvent(new x("open"))) : this._didClose(1006, "Server lost session")
    };
    e.prototype._dispatchMessage = function(a) {
        this.readyState === e.OPEN && this.dispatchEvent(new x("message", {
            data: a
        }))
    };
    e.prototype._dispatchHeartbeat = function(a) {
        this.readyState === e.OPEN && this.dispatchEvent(new x("heartbeat", {}))
    };
    e.prototype._didClose = function(a, c, h) {
        var m = this;
        if (m.readyState !== e.CONNECTING &&
            m.readyState !== e.OPEN && m.readyState !== e.CLOSING) throw Error("INVALID_STATE_ERR");
        m._ir && (m._ir.nuke(), m._ir = null);
        m._transport && (m._transport.doCleanup(), m._transport = null);
        var l = new x("close", {
            code: a,
            reason: c,
            wasClean: f.userSetCode(a)
        });
        if (!f.userSetCode(a) && m.readyState === e.CONNECTING && !h) {
            if (m._try_next_protocol(l)) return;
            l = new x("close", {
                code: 2E3,
                reason: "All transports failed",
                wasClean: !1,
                last_event: l
            })
        }
        m.readyState = e.CLOSED;
        f.delay(function() {
            m.dispatchEvent(l)
        })
    };
    e.prototype._didMessage = function(a) {
        switch (a.slice(0,
            1)) {
            case "o":
                this._dispatchOpen();
                break;
            case "a":
                a = JSON.parse(a.slice(1) || "[]");
                for (var c = 0; c < a.length; c++) this._dispatchMessage(a[c]);
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
    e.prototype._try_next_protocol = function(b) {
        var c = this;
        c.protocol && (c._debug("Closed transport:", c.protocol, "" + b), c.protocol = null);
        for (c._transport_tref && (clearTimeout(c._transport_tref),
                c._transport_tref = null);;) {
            b = c.protocol = c._protocols.shift();
            if (!b) return !1;
            if (e[b] && !0 === e[b].need_body && (!a.body || "undefined" != typeof a.readyState && "complete" !== a.readyState)) return c._protocols.unshift(b), c.protocol = "waiting-for-load", f.attachEvent("load", function() {
                c._try_next_protocol()
            }), !0;
            if (e[b] && e[b].enabled(c._options)) {
                c._transport_tref = f.delay((c._options.rto || 0) * (e[b].roundTrips || 1) || 5E3, function() {
                    c.readyState === e.CONNECTING && c._didClose(2007, "Transport timeouted")
                });
                var h = f.random_string(8),
                    h = c._base_url + "/" + c._server + "/" + h;
                return c._debug("Opening transport:", b, " url:" + h, " RTO:" + c._options.rto), c._transport = new e[b](c, h, c._base_url), !0
            }
            c._debug("Skipping transport:", b)
        }
    };
    e.prototype.close = function(a, c) {
        if (a && !f.userSetCode(a)) throw Error("INVALID_ACCESS_ERR");
        return this.readyState !== e.CONNECTING && this.readyState !== e.OPEN ? !1 : (this.readyState = e.CLOSING, this._didClose(a || 1E3, c || "Normal closure"), !0)
    };
    e.prototype.send = function(a) {
        if (this.readyState === e.CONNECTING) throw Error("INVALID_STATE_ERR");
        return this.readyState === e.OPEN && this._transport.doSend(f.quote("" + a)), !0
    };
    e.prototype._applyInfo = function(b, c, e) {
        this._options.info = b;
        this._options.rtt = c;
        this._options.rto = f.countRTO(c);
        this._options.info.null_origin = !a.domain;
        c = f.probeProtocols();
        this._protocols = f.detectProtocols(c, e, b)
    };
    B = e.websocket = function(a, c) {
        var e = this,
            m = c + "/websocket";
        "https" === m.slice(0, 5) ? m = "wss" + m.slice(5) : m = "ws" + m.slice(4);
        e.ri = a;
        e.url = m;
        e.ws = new(h.WebSocket || h.MozWebSocket)(e.url);
        e.ws.onmessage = function(a) {
            e.ri._didMessage(a.data)
        };
        e.unload_ref = f.unload_add(function() {
            e.ws.close()
        });
        e.ws.onclose = function() {
            e.ri._didMessage(f.closeFrame(1006, "WebSocket connection broken"))
        }
    };
    B.prototype.doSend = function(a) {
        this.ws.send("[" + a + "]")
    };
    B.prototype.doCleanup = function() {
        var a = this.ws;
        a && (a.onmessage = a.onclose = null, a.close(), f.unload_del(this.unload_ref), this.unload_ref = this.ri = this.ws = null)
    };
    B.enabled = function() {
        return !!h.WebSocket || !!h.MozWebSocket
    };
    B.roundTrips = 2;
    var M = function() {};
    M.prototype.send_constructor = function(a) {
        this.send_buffer = [];
        this.sender = a
    };
    M.prototype.doSend = function(a) {
        this.send_buffer.push(a);
        this.send_stop || this.send_schedule()
    };
    M.prototype.send_schedule_wait = function() {
        var a = this,
            c;
        a.send_stop = function() {
            a.send_stop = null;
            clearTimeout(c)
        };
        c = f.delay(25, function() {
            a.send_stop = null;
            a.send_schedule()
        })
    };
    M.prototype.send_schedule = function() {
        var a = this;
        if (0 < a.send_buffer.length) {
            var c = "[" + a.send_buffer.join(",") + "]";
            a.send_stop = a.sender(a.trans_url, c, function(c, e) {
                a.send_stop = null;
                !1 === c ? a.ri._didClose(1006, "Sending error " +
                    e) : a.send_schedule_wait()
            });
            a.send_buffer = []
        }
    };
    M.prototype.send_destructor = function() {
        this._send_stop && this._send_stop();
        this._send_stop = null
    };
    var R = function(b, c, e) {
            if (!("_send_form" in this)) {
                var h = this._send_form = a.createElement("form"),
                    l = this._send_area = a.createElement("textarea");
                l.name = "d";
                h.style.display = "none";
                h.style.position = "absolute";
                h.method = "POST";
                h.enctype = "application/x-www-form-urlencoded";
                h.acceptCharset = "UTF-8";
                h.appendChild(l);
                a.body.appendChild(h)
            }
            var h = this._send_form,
                l = this._send_area,
                p = "a" + f.random_string(8);
            h.target = p;
            h.action = b + "/jsonp_send?i=" + p;
            var n;
            try {
                n = a.createElement('<iframe name="' + p + '">')
            } catch (q) {
                n = a.createElement("iframe"), n.name = p
            }
            n.id = p;
            h.appendChild(n);
            n.style.display = "none";
            try {
                l.value = c
            } catch (r) {
                f.log("Your browser is seriously broken. Go home! " + r.message)
            }
            h.submit();
            var s = function(a) {
                n.onerror && (n.onreadystatechange = n.onerror = n.onload = null, f.delay(500, function() {
                    n.parentNode.removeChild(n);
                    n = null
                }), l.value = "", e(!0))
            };
            return n.onerror = n.onload = s, n.onreadystatechange =
                function(a) {
                    "complete" == n.readyState && s()
                }, s
        },
        Y = function(a) {
            return function(c, e, f) {
                return (new a("POST", c + "/xhr_send", e)).onfinish = function(a, b) {
                        f(200 === a || 204 === a, "http status " + a)
                    },
                    function(a) {
                        f(!1, a)
                    }
            }
        },
        ja = function(b, c) {
            var e, h = a.createElement("script"),
                l, n = function(a) {
                    l && (l.parentNode.removeChild(l), l = null);
                    h && (clearTimeout(e), h.parentNode.removeChild(h), h.onreadystatechange = h.onerror = h.onload = h.onclick = null, h = null, c(a), c = null)
                },
                p = !1,
                q = null;
            h.id = "a" + f.random_string(8);
            h.src = b;
            h.type = "text/javascript";
            h.charset = "UTF-8";
            h.onerror = function(a) {
                q || (q = setTimeout(function() {
                    p || n(f.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                }, 1E3))
            };
            h.onload = function(a) {
                n(f.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
            };
            h.onreadystatechange = function(a) {
                if (/loaded|closed/.test(h.readyState)) {
                    if (h && h.htmlFor && h.onclick) {
                        p = !0;
                        try {
                            h.onclick()
                        } catch (b) {}
                    }
                    h && n(f.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                }
            };
            if ("undefined" == typeof h.async && a.attachEvent)
                if (/opera/i.test(navigator.userAgent)) l =
                    a.createElement("script"), l.text = "try{var a = document.getElementById('" + h.id + "'); if(a)a.onerror();}catch(x){};", h.async = l.async = !1;
                else {
                    try {
                        h.htmlFor = h.id, h.event = "onclick"
                    } catch (r) {}
                    h.async = !0
                }
                "undefined" != typeof h.async && (h.async = !0);
            e = setTimeout(function() {
                n(f.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
            }, 35E3);
            var s = a.getElementsByTagName("head")[0];
            return s.insertBefore(h, s.firstChild), l && s.insertBefore(l, s.firstChild), n
        },
        B = e["jsonp-polling"] = function(a, c) {
            f.polluteGlobalNamespace();
            this.ri = a;
            this.trans_url = c;
            this.send_constructor(R);
            this._schedule_recv()
        };
    B.prototype = new M;
    B.prototype._schedule_recv = function() {
        var a = this;
        a._recv_stop = fa(a.trans_url + "/jsonp", ja, function(c) {
            a._recv_stop = null;
            c && (a._is_closing || a.ri._didMessage(c));
            a._is_closing || a._schedule_recv()
        })
    };
    B.enabled = function() {
        return !0
    };
    B.need_body = !0;
    B.prototype.doCleanup = function() {
        this._is_closing = !0;
        this._recv_stop && this._recv_stop();
        this.ri = this._recv_stop = null;
        this.send_destructor()
    };
    var fa = function(a, c, e) {
            var m =
                "a" + f.random_string(6);
            a = a + "?c=" + escape("_jp." + m);
            var l = 0;
            c = c(a, function(a) {
                switch (l) {
                    case 0:
                        delete h._jp[m];
                        e(a);
                        break;
                    case 1:
                        e(a);
                        l = 2;
                        break;
                    case 2:
                        delete h._jp[m]
                }
            });
            h._jp[m] = c;
            return function() {
                h._jp[m] && (l = 1, h._jp[m](f.closeFrame(1E3, "JSONP user aborted read")))
            }
        },
        B = function() {};
    B.prototype = new M;
    B.prototype.run = function(a, c, e, f, h) {
        this.ri = a;
        this.trans_url = c;
        this.send_constructor(Y(h));
        this.poll = new z(a, f, c + e, h)
    };
    B.prototype.doCleanup = function() {
        this.poll && (this.poll.abort(), this.poll = null)
    };
    var S = e["xhr-streaming"] = function(a, c) {
        this.run(a, c, "/xhr_streaming", T, f.XHRCorsObject)
    };
    S.prototype = new B;
    S.enabled = function() {
        return h.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
    };
    S.roundTrips = 2;
    S.need_body = !0;
    M = e["xdr-streaming"] = function(a, c) {
        this.run(a, c, "/xhr_streaming", T, f.XDRObject)
    };
    M.prototype = new B;
    M.enabled = function() {
        return !!h.XDomainRequest
    };
    M.roundTrips = 2;
    var Z = e["xhr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", T, f.XHRCorsObject)
    };
    Z.prototype =
        new B;
    Z.enabled = S.enabled;
    Z.roundTrips = 2;
    S = e["xdr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", T, f.XDRObject)
    };
    S.prototype = new B;
    S.enabled = M.enabled;
    S.roundTrips = 2;
    var C = function() {};
    C.prototype.i_constructor = function(a, c, e) {
        var h = this;
        h.ri = a;
        h.origin = f.getOrigin(e);
        h.base_url = e;
        h.trans_url = c;
        a = e + "/iframe.html";
        h.ri._options.devel && (a += "?t=" + +new Date);
        h.window_id = f.random_string(8);
        a += "#" + h.window_id;
        h.iframeObj = f.createIframe(a, function(a) {
            h.ri._didClose(1006, "Unable to load an iframe (" + a + ")")
        });
        h.onmessage_cb = f.bind(h.onmessage, h);
        f.attachMessage(h.onmessage_cb)
    };
    C.prototype.doCleanup = function() {
        if (this.iframeObj) {
            f.detachMessage(this.onmessage_cb);
            try {
                this.iframeObj.iframe.contentWindow && this.postMessage("c")
            } catch (a) {}
            this.iframeObj.cleanup();
            this.onmessage_cb = this.iframeObj = this.iframeObj = null
        }
    };
    C.prototype.onmessage = function(a) {
        if (a.origin === this.origin) {
            var c = a.data.slice(0, 8),
                f = a.data.slice(8, 9);
            a = a.data.slice(9);
            if (c === this.window_id) switch (f) {
                case "s":
                    this.iframeObj.loaded();
                    this.postMessage("s",
                        JSON.stringify([e.version, this.protocol, this.trans_url, this.base_url]));
                    break;
                case "t":
                    this.ri._didMessage(a)
            }
        }
    };
    C.prototype.postMessage = function(a, c) {
        this.iframeObj.post(this.window_id + a + (c || ""), this.origin)
    };
    C.prototype.doSend = function(a) {
        this.postMessage("m", a)
    };
    C.enabled = function() {
        var a = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
        return ("function" == typeof h.postMessage || "object" == typeof h.postMessage) && !a
    };
    var ca, L = function(a, c) {
            parent !== h ? parent.postMessage(ca +
                a + (c || ""), "*") : f.log("Can't postMessage, no parent window.", a, c)
        },
        ba = function() {};
    ba.prototype._didClose = function(a, c) {
        L("t", f.closeFrame(a, c))
    };
    ba.prototype._didMessage = function(a) {
        L("t", a)
    };
    ba.prototype._doSend = function(a) {
        this._transport.doSend(a)
    };
    ba.prototype._doCleanup = function() {
        this._transport.doCleanup()
    };
    f.parent_origin = void 0;
    e.bootstrap_iframe = function() {
        var b;
        ca = a.location.hash.slice(1);
        f.attachMessage(function(a) {
            if (a.source === parent && ("undefined" == typeof f.parent_origin && (f.parent_origin =
                    a.origin), a.origin === f.parent_origin)) {
                var k = a.data.slice(0, 8),
                    m = a.data.slice(8, 9);
                a = a.data.slice(9);
                if (k === ca) switch (m) {
                    case "s":
                        var l = JSON.parse(a),
                            k = l[0],
                            m = l[1];
                        a = l[2];
                        l = l[3];
                        k !== e.version && f.log('Incompatibile SockJS! Main site uses: "' + k + '", the iframe: "' + e.version + '".');
                        if (!f.flatUrl(a) || !f.flatUrl(l)) {
                            f.log("Only basic urls are supported in SockJS");
                            break
                        }
                        if (!f.isSameOriginUrl(a) || !f.isSameOriginUrl(l)) {
                            f.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([h.location.href,
                                a, l
                            ]) + ")");
                            break
                        }
                        b = new ba;
                        b._transport = new ba[m](b, a, l);
                        break;
                    case "m":
                        b._doSend(a);
                        break;
                    case "c":
                        b && b._doCleanup(), b = null
                }
            }
        });
        L("s")
    };
    var da = function(a, c) {
        var e = this;
        f.delay(function() {
            e.doXhr(a, c)
        })
    };
    da.prototype = new p(["finish"]);
    da.prototype.doXhr = function(a, c) {
        var e = this,
            h = (new Date).getTime(),
            l = new c("GET", a + "/info"),
            n = f.delay(8E3, function() {
                l.ontimeout()
            });
        l.onfinish = function(a, b) {
            clearTimeout(n);
            n = null;
            if (200 === a) {
                var c = (new Date).getTime() - h,
                    f = JSON.parse(b);
                "object" != typeof f && (f = {});
                e.emit("finish",
                    f, c)
            } else e.emit("finish")
        };
        l.ontimeout = function() {
            l.close();
            e.emit("finish")
        }
    };
    var ga = function(b) {
        var c = this,
            e = function() {
                var a = new C;
                a.protocol = "w-iframe-info-receiver";
                var e = function(b) {
                    "string" == typeof b && "m" === b.substr(0, 1) ? (b = JSON.parse(b.substr(1)), c.emit("finish", b[0], b[1])) : c.emit("finish");
                    a.doCleanup();
                    a = null
                };
                a.i_constructor({
                    _options: {},
                    _didClose: e,
                    _didMessage: e
                }, b, b)
            };
        a.body ? e() : f.attachEvent("load", e)
    };
    ga.prototype = new p(["finish"]);
    var l = function() {
        var a = this;
        f.delay(function() {
            a.emit("finish", {}, 2E3)
        })
    };
    l.prototype = new p(["finish"]);
    var s = function(a) {
        if (f.isSameOriginUrl(a)) return new da(a, f.XHRLocalObject);
        switch (f.isXHRCorsCapable()) {
            case 1:
                return new da(a, f.XHRLocalObject);
            case 2:
                return new da(a, f.XDRObject);
            case 3:
                return new ga(a);
            default:
                return new l
        }
    };
    (ba["w-iframe-info-receiver"] = function(a, c, e) {
        (new da(e, f.XHRLocalObject)).onfinish = function(c, e) {
            a._didMessage("m" + JSON.stringify([c, e]));
            a._didClose()
        }
    }).prototype.doCleanup = function() {};
    p = e["iframe-eventsource"] = function() {
        this.protocol =
            "w-iframe-eventsource";
        this.i_constructor.apply(this, arguments)
    };
    p.prototype = new C;
    p.enabled = function() {
        return "EventSource" in h && C.enabled()
    };
    p.need_body = !0;
    p.roundTrips = 3;
    (ba["w-iframe-eventsource"] = function(a, c) {
        this.run(a, c, "/eventsource", U, f.XHRLocalObject)
    }).prototype = new B;
    p = e["iframe-xhr-polling"] = function() {
        this.protocol = "w-iframe-xhr-polling";
        this.i_constructor.apply(this, arguments)
    };
    p.prototype = new C;
    p.enabled = function() {
        return h.XMLHttpRequest && C.enabled()
    };
    p.need_body = !0;
    p.roundTrips =
        3;
    (ba["w-iframe-xhr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", T, f.XHRLocalObject)
    }).prototype = new B;
    p = e["iframe-htmlfile"] = function() {
        this.protocol = "w-iframe-htmlfile";
        this.i_constructor.apply(this, arguments)
    };
    p.prototype = new C;
    p.enabled = function() {
        return C.enabled()
    };
    p.need_body = !0;
    p.roundTrips = 3;
    (ba["w-iframe-htmlfile"] = function(a, c) {
        this.run(a, c, "/htmlfile", Q, f.XHRLocalObject)
    }).prototype = new B;
    var z = function(a, c, e, f) {
        this.ri = a;
        this.Receiver = c;
        this.recv_url = e;
        this.AjaxObject = f;
        this._scheduleRecv()
    };
    z.prototype._scheduleRecv = function() {
        var a = this,
            c = a.poll = new a.Receiver(a.recv_url, a.AjaxObject);
        c.onmessage = function(c) {
            a.ri._didMessage(c.data)
        };
        c.onclose = function(e) {
            a.poll = c = c.onmessage = c.onclose = null;
            a.poll_is_closing || ("permanent" === e.reason ? a.ri._didClose(1006, "Polling error (" + e.reason + ")") : a._scheduleRecv())
        }
    };
    z.prototype.abort = function() {
        this.poll_is_closing = !0;
        this.poll && this.poll.abort()
    };
    var U = function(a) {
        var c = this,
            e = new EventSource(a);
        e.onmessage = function(a) {
            c.dispatchEvent(new x("message", {
                data: unescape(a.data)
            }))
        };
        c.es_close = e.onerror = function(a, b) {
            var h = b ? "user" : 2 !== e.readyState ? "network" : "permanent";
            c.es_close = e.onmessage = e.onerror = null;
            e.close();
            e = null;
            f.delay(200, function() {
                c.dispatchEvent(new x("close", {
                    reason: h
                }))
            })
        }
    };
    U.prototype = new u;
    U.prototype.abort = function() {
        this.es_close && this.es_close({}, !0)
    };
    var G, Q = function(a) {
        var c = this;
        f.polluteGlobalNamespace();
        c.id = "a" + f.random_string(6, 26);
        a += (-1 === a.indexOf("?") ? "?" : "&") + "c=" + escape("_jp." + c.id);
        if (void 0 === G)
            if ("ActiveXObject" in
                h) try {
                G = !!new ActiveXObject("htmlfile")
            } catch (e) {} else G = !1;
        var m = G ? f.createHtmlfile : f.createIframe,
            l;
        h._jp[c.id] = {
            start: function() {
                l.loaded()
            },
            message: function(a) {
                c.dispatchEvent(new x("message", {
                    data: a
                }))
            },
            stop: function() {
                c.iframe_close({}, "network")
            }
        };
        c.iframe_close = function(a, b) {
            l.cleanup();
            c.iframe_close = l = null;
            delete h._jp[c.id];
            c.dispatchEvent(new x("close", {
                reason: b
            }))
        };
        l = m(a, function(a) {
            c.iframe_close({}, "permanent")
        })
    };
    Q.prototype = new u;
    Q.prototype.abort = function() {
        this.iframe_close && this.iframe_close({},
            "user")
    };
    var T = function(a, c) {
        var e = this,
            f = 0;
        e.xo = new c("POST", a, null);
        e.xo.onchunk = function(a, b) {
            if (200 === a)
                for (;;) {
                    var c = b.slice(f),
                        h = c.indexOf("\n");
                    if (-1 === h) break;
                    f += h + 1;
                    c = c.slice(0, h);
                    e.dispatchEvent(new x("message", {
                        data: c
                    }))
                }
        };
        e.xo.onfinish = function(a, b) {
            e.xo.onchunk(a, b);
            e.xo = null;
            e.dispatchEvent(new x("close", {
                reason: 200 === a ? "network" : "permanent"
            }))
        }
    };
    return T.prototype = new u, T.prototype.abort = function() {
        this.xo && (this.xo.close(), this.dispatchEvent(new x("close", {
                reason: "user"
            })), this.xo =
            null)
    }, e.getUtils = function() {
        return f
    }, e.getIframeTransport = function() {
        return C
    }, e
}();
"_sockjs_onload" in window && setTimeout(_sockjs_onload, 1);
"function" == typeof define && define.amd && define("sockjs", [], function() {
    return SockJS
});
$.ajaxSetup({
    type: "POST",
    cache: !1,
    headers: {
        "X-Api-Key": UI_API_KEY
    }
});
var StepView = Backbone.View.extend({
        setup_view: null,
        events: {
            "submit form": "_onSubmit",
            "click .submit-action": "_onSubmitClicked"
        },
        initialize: function(a) {
            this.setup_view = a.setup_view
        },
        onHide: function() {},
        onShow: function() {},
        onSubmit: function(a) {},
        _onSubmit: function(a) {
            a.preventDefault();
            a = $(a.currentTarget).serializeArray();
            var h = {};
            _.each(a, function(a) {
                h[a.name] = a.value
            });
            this.onSubmit(h)
        },
        _onSubmitClicked: function() {
            this.$el.find("form").submit();
            return !1
        }
    }),
    StepWelcome = StepView.extend({
        el: "#step-welcome"
    }),
    StepName = StepView.extend({
        el: "#step-name",
        currentName: null,
        constructor: function() {
            this.events["keyup input"] = "onNameChanged";
            this.events["click .failed-state button"] = "onShow";
            StepView.apply(this, arguments)
        },
        onShow: function() {
            this.$el.removeClass("settings failed");
            this.$el.addClass("checking");
            $.ajax({
                url: API_BASEURL + "setup/name",
                method: "GET",
                dataType: "json",
                success: _.bind(function(a) {
                        this.currentName = a.name;
                        this.$el.find("input").val(a.name).focus();
                        this.render();
                        this.$el.addClass("settings")
                    },
                    this),
                error: _.bind(function(a) {
                    this.$el.addClass("failed");
                    this.$el.find(".failed-state h3").text(a.responseText)
                }, this),
                complete: _.bind(function() {
                    this.$el.removeClass("checking")
                }, this)
            })
        },
        render: function(a) {
            void 0 == a && (a = this.$el.find("input").val());
            this.$el.find(".hotspot-name").text(a);
            this.$el.find(".astrobox-url").text(a)
        },
        myIP: function(){ var vi="uses java to get the users local ip number"
            var yip2=java.net.InetAddress.getLocalHost();	
            var yip=yip2.getHostAddress();
            return "hello";//yip;
        },//end myIP
        onNameChanged: function(a) {
            var h = $(a.target).val();
            /^[A-Za-z0-9\-_]+$/.test(h) ? this.render(h) : h ? $(a.target).val($(a.target).val().slice(0, -1)) : this.render("")
        },
        onSubmit: function(a) {
            a.name !=
                this.currentName ? (this.$el.find(".loading-button").addClass("loading"), $.ajax({
                    url: API_BASEURL + "setup/name",
                    method: "post",
                    data: a,
                    success: _.bind(function() {
                        location.href = this.$el.find(".submit-action").attr("href")
                    }, this),
                    error: function(a) {
                        message = 400 == a.status ? a.responseText : "There was an error saving your name";
                        noty({
                            text: message,
                            timeout: 3E3
                        })
                    },
                    complete: _.bind(function() {
                        this.$el.find(".loading-button").removeClass("loading")
                    }, this)
                })) : location.href = this.$el.find(".submit-action").attr("href")
        }
    }),
    StepInternet = StepView.extend({
        el: "#step-internet",
        networkListTemplate: null,
        networks: null,
        passwordDialog: null,
        initialize: function() {
            _.extend(this.events, {
                "click .failed-state button": "onShow",
                "click .settings-state button.connect": "onConnectClicked",
                "change .hotspot-off input": "hotspotOffChanged"
            })
        },
        onShow: function() {
            this.$el.removeClass("success settings failed");
            this.$el.addClass("checking");
            $.ajax({
                url: API_BASEURL + "setup/internet",
                method: "GET",
                dataType: "json",
                success: _.bind(function(a) {
                        if (a && a.connected) this.$el.addClass("success");
                        else {
                            this.networkListTemplate || (this.networkListTemplate = _.template($("#wifi-network-list-template").html()));
                            var h = this.$el.find(".settings-state .wifi-network-list");
                            h.empty();
                            this.networks = _.sortBy(_.uniq(_.sortBy(a.networks, function(a) {
                                return a.name
                            }), !0, function(a) {
                                return a.name
                            }), function(a) {
                                a.active = self.settings && self.settings.network.id == a.id;
                                return -a.signal
                            });
                            h.html(this.networkListTemplate({
                                networks: this.networks
                            }));
                            h.find("ul li").bind("click", _.bind(this.networkSelected, this));
                            this.$el.addClass("settings")
                        }
                    },
                    this),
                error: _.bind(function(a) {
                    this.$el.addClass("failed");
                    this.$el.find(".failed-state h3").text(a.responseText)
                }, this),
                complete: _.bind(function() {
                    this.$el.removeClass("checking")
                }, this)
            })
        },
        networkSelected: function(a) {
            a = $(a.currentTarget);
            this.$el.find(".wifi-network-list li.selected").removeClass("selected");
            a.addClass("selected");
            this.networks[a.data("id")] && this.$el.find(".settings-state button.connect").removeClass("disabled")
        },
        onConnectClicked: function() {
            var a = this.$el.find(".wifi-network-list li.selected");
            1 == a.length && (a = this.networks[a.data("id")], a.secured ? (this.passwordDialog || (this.passwordDialog = new WiFiNetworkPasswordDialog({
                parent: this
            })), this.passwordDialog.open(a.id, a.name)) : this.doConnect({
                id: a.id,
                password: null
            }))
        },
        hotspotOffChanged: function(a) {
            a = $(a.currentTarget);
            $.ajax({
                url: "/api/setup/internet",
                method: "PUT",
                data: JSON.stringify({
                    hotspotOnlyOffline: a.is(":checked")
                }),
                contentType: "application/json",
                dataType: "json"
            }).fail(function() {
                noty({
                    text: "There was an error saving hotspot option.",
                    timeout: 3E3
                })
            })
        },
        doConnect: function(a, h) {
            var f = this.$el.find(".settings-state .loading-button");
            f.addClass("loading");
            $.ajax({
                url: API_BASEURL + "setup/internet",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    id: a.id,
                    password: a.password
                })
            }).done(_.bind(function(a) {
                a.name ? (noty({
                    text: "Your " + PRODUCT_NAME + " is now connected to " + a.name + ".",
                    type: "success",
                    timeout: 3E3
                }), h && h(!1), this.$el.removeClass("settings"), this.$el.addClass("success")) : a.message && (noty({
                    text: a.message,
                    timeout: 3E3
                }), h && h(!0))
            }, this)).fail(function() {
                noty({
                    text: "There was an error connecting.",
                    timeout: 3E3
                });
                h && h(!0)
            }).complete(function() {
                f.removeClass("loading")
            })
        }
    }),
    WiFiNetworkPasswordDialog = Backbone.View.extend({
        el: "#wifi-network-password-modal",
        events: {
            "click button.connect": "connectClicked",
            "submit form": "connectClicked",
            "click a.cancel": "cancelClicked"
        },
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        open: function(a, h) {
            this.$el.find(".network-id-field").val(a);
            this.$el.find(".name").text(h);
            this.$el.foundation("reveal", "open");
            this.$el.one("opened", _.bind(function() {
                this.$el.find(".network-password-field").focus()
            }, this))
        },
        connectClicked: function(a) {
            a.preventDefault();
            a = this.$el.find("form");
            var h = this.$el.find(".loading-button"),
                f = a.find(".network-password-field").val();
            f && (h.addClass("loading"), this.parent.doConnect({
                id: a.find(".network-id-field").val(),
                password: f
            }, _.bind(function(a) {
                h.removeClass("loading");
                a || this.$el.foundation("reveal", "close")
            }, this)))
        },
        cancelClicked: function(a) {
            a.preventDefault();
            this.$el.foundation("reveal", "close")
        }
    }),
    StepAstroprint = StepView.extend({
        el: "#step-astroprint",
        initialize: function() {
            this.events["click a.logout"] = "onLogoutClicked"
        },
        onShow: function() {
            this.$el.removeClass("success settings");
            this.$el.addClass("checking");
            $.ajax({
                url: API_BASEURL + "setup/astroprint",
                method: "GET",
                success: _.bind(function(a) {
                    a.user ? (this.$el.addClass("success"), this.$el.find("span.email").text(a.user)) : (this.$el.addClass("settings"), this.$el.find("#email").focus())
                }, this),
                error: _.bind(function() {
                    this.$el.addClass("settings");
                    this.$el.find("#email").focus()
                }, this),
                complete: _.bind(function() {
                    this.$el.removeClass("checking")
                }, this)
            })
        },
        onSubmit: function(a) {
            this.$el.find(".loading-button").addClass("loading");
            $.ajax({
                url: API_BASEURL + "setup/astroprint",
                method: "post",
                data: a,
                success: _.bind(function() {
                    location.href = this.$el.find(".submit-action").attr("href")
                }, this),
                error: _.bind(function(a) {
                        message = 400 == a.status || 401 == a.status ? a.responseText : "There was an error logging you in";
                        noty({
                            text: message,
                            timeout: 3E3
                        });
                        this.$el.find("#email").focus()
                    },
                    this),
                complete: _.bind(function() {
                    this.$el.find(".loading-button").removeClass("loading")
                }, this)
            })
        },
        onLogoutClicked: function(a) {
            a.preventDefault();
            $.ajax({
                url: API_BASEURL + "setup/astroprint",
                method: "delete",
                success: _.bind(function() {
                    this.$el.removeClass("success");
                    this.$el.addClass("settings")
                }, this),
                error: _.bind(function(a) {
                    noty({
                        text: "Error logging you out",
                        timeout: 3E3
                    })
                }, this)
            })
        }
    }),
    StepConnectPrinter = StepView.extend({
        el: "#step-connect-printer",
        constructor: function() {
            StepView.apply(this, arguments)
        }
    }),
    StepPrinter = StepView.extend({
        el: "#step-printer",
        template: _.template($("#step-printer-template").html()),
        onShow: function() {
            this._checkPrinters()
        },
        render: function(a) {
            this.$("form").html(this.template({
                settings: a
            }))
        },
        onSubmit: function(a) {
            this._setConnecting(!0);
            $.ajax({
                url: API_BASEURL + "setup/printer",
                method: "post",
                data: a,
                success: _.bind(function() {
                    var a = new SockJS(SOCKJS_URI);
                    a.onmessage = _.bind(function(f) {
                        "message" == f.type && f.data.current && (f = f.data.current.state.flags, f.operational ? (a.close(), this._setConnecting(!1),
                            location.href = this.$el.find(".submit-action").attr("href")) : f.error && (noty({
                            text: "There was an error connecting to the printer.",
                            timeout: 3E3
                        }), a.close(), this._setConnecting(!1)))
                    }, this)
                }, this),
                error: _.bind(function(a) {
                    message = 400 == a.status || 401 == a.status ? a.responseText : "There was an error connecting to your printer";
                    noty({
                        text: message,
                        timeout: 3E3
                    });
                    this._setConnecting(!1)
                }, this)
            })
        },
        _checkPrinters: function() {
            this.$el.removeClass("success settings");
            this.$el.addClass("checking");
            $.ajax({
                url: API_BASEURL +
                    "setup/printer",
                method: "GET",
                success: _.bind(function(a) {
                    this.$el.addClass("settings");
                    a.portOptions && (a.baudrateOptions || "s3g" == a.driver) ? (this.render(a), this.delegateEvents(_.extend(this.events, {
                        "click a.retry-ports": "retryPortsClicked",
                        "change #settings-printer-driver": "driverChanged"
                    }))) : noty({
                        text: "Error reading printer connection settings",
                        timeout: 3E3
                    })
                }, this),
                error: _.bind(function(a) {
                    this.$el.addClass("settings");
                    message = 400 == a.status ? a.responseText : "Error reading printer connection settings";
                    noty({
                        text: message,
                        timeout: 3E3
                    })
                }, this),
                complete: _.bind(function() {
                    this.$el.removeClass("checking")
                }, this)
            })
        },
        _setConnecting: function(a) {
            a ? (this.$el.find(".loading-button").addClass("loading"), this.$el.find(".skip-step").hide()) : (this.$el.find(".loading-button").removeClass("loading"), this.$el.find(".skip-step").show())
        },
        retryPortsClicked: function(a) {
            a.preventDefault();
            this.onShow()
        },
        driverChanged: function(a) {
            this.$el.removeClass("success settings");
            this.$el.addClass("checking");
            $.ajax({
                url: API_BASEURL +
                    "setup/printer/profile",
                method: "POST",
                data: {
                    driver: $(a.target).val()
                },
                success: _.bind(function() {
                    this._checkPrinters()
                }, this),
                error: _.bind(function(a) {
                    this.$el.addClass("settings");
                    message = 400 == a.status ? a.responseText : "Error saving printer connection settings";
                    noty({
                        text: message,
                        timeout: 3E3
                    })
                }, this),
                complete: _.bind(function() {
                    this.$el.removeClass("checking")
                }, this)
            })
        }
    }),
    StepShare = StepView.extend({
        el: "#step-share",
        constructor: function() {
            this.events["click .share-button.facebook"] = "onFacebookClicked";
            this.events["click .share-button.twitter"] = "onTwitterClicked";
            this.events["click .setup-done"] = "onSetupDone";
            StepView.apply(this, arguments)
        },
        onFacebookClicked: function(a) {
            a.preventDefault();
            window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareOptions.facebook.link), "facebook", "width=740,height=280,left=300,top=300");
            this.$el.find("a.button.setup-done").show()
        },
        onTwitterClicked: function(a) {
            a.preventDefault();
            window.open("https://twitter.com/share?url=" + encodeURIComponent(shareOptions.twitter.link) +
                "&text=" + encodeURIComponent(shareOptions.twitter.copy), "twitter", "width=740,height=280,left=300,top=300");
            this.$el.find("a.button.setup-done").show()
        },
        onSetupDone: function(a) {
            a.preventDefault();
            $.ajax({
                url: API_BASEURL + "setup/done",
                method: "post",
                success: function() {
                    location.href = "/"
                },
                error: function() {
                    noty({
                        text: "There was an error saving your settings.",
                        timeout: 3E3
                    })
                }
            })
        }
    }),
    SetupView = Backbone.View.extend({
        steps: null,
        current_step: "welcome",
        router: null,
        initialize: function() {
            this.steps = {
                welcome: new StepWelcome({
                    setup_view: this
                }),
                name: new StepName({
                    setup_view: this
                }),
                internet: new StepInternet({
                    setup_view: this
                }),
                astroprint: new StepAstroprint({
                    setup_view: this
                }),
                "connect-printer": new StepConnectPrinter({
                    setup_view: this
                }),
                printer: new StepPrinter({
                    setup_view: this
                }),
                share: new StepShare({
                    setup_view: this
                })
            };
            this.router = new SetupRouter({
                setup_view: this
            })
        },
        setStep: function(a) {
            void 0 != this.steps[a] ? (this.steps[this.current_step].$el.addClass("hide"), this.steps[this.current_step].onHide(), this.steps[a].$el.removeClass("hide"), this.steps[a].onShow(),
                this.current_step = a) : this.router.navigate("", {
                trigger: !0,
                replace: !0
            })
        }
    }),
    SetupRouter = Backbone.Router.extend({
        setup_view: null,
        routes: {
            "": "setStep",
            ":step": "setStep",
            "*notFound": "notFound"
        },
        initialize: function(a) {
            this.setup_view = a.setup_view
        },
        setStep: function(a) {
            this.setup_view.setStep(a || "welcome")
        },
        notFound: function() {
            this.navigate("", {
                trigger: !0,
                replace: !0
            })
        }
    }),
    setup_view = new SetupView;
Backbone.history.start();
