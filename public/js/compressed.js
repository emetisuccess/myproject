/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        c = { type: !0, src: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i = (t = t || E).createElement("script");
        if (i.text = e, n)
            for (r in c) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var k = function(e, t) { return new k.fn.init(e, t) },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: "3.3.1",
        constructor: k,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = k.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return k.each(this, e) },
        map: function(n) { return this.pushStack(k.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1, n && Array.isArray(n) ? n : []) : n && k.isPlainObject(n) ? n : {}, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || a.call(n) !== l)) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e) { b(e) },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(f, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ae(),
            x = ae(),
            D = ae(),
            N = function(e, t) { return e === t && (l = !0), 0 },
            A = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            q = t.push,
            L = t.push,
            H = t.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            re = function() { T() },
            ie = me(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { L.apply(t = H.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (n) {
            L = {
                apply: t.length ? function(e, t) { q.apply(e, H.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : m) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (u = J.exec(e)))
                    if (i = u[1]) { if (9 === p) { if (!(a = t.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n } else { if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n; if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n }
                if (d.qsa && !D[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + ye(l[o]);
                        c = l.join(","), f = K.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try { return L.apply(n, f.querySelectorAll(c)), n } catch (e) {} finally { s === k && t.removeAttribute("id") }
                }
            }
            return g(e.replace(B, "$1"), t, n, r)
        }

        function ae() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function se(e) { return e[k] = !0, e }

        function ue(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function le(e, t) { for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function pe(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function de(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function he(a) { return se(function(o) { return o = +o, se(function(e, t) { for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ge(e) { return e && void 0 !== e.getElementsByTagName && e }
        for (e in d = oe.support = {}, i = oe.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, T = oe.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), d.attributes = ue(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ue(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = Q.test(C.getElementsByClassName), d.getById = ue(function(e) { return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if (void 0 !== t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(Z, ee); return function(e) { var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = Q.test(C.querySelectorAll)) && (ue(function(e) { a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]") }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), y = t || Q.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, N = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                    if (i === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ce(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, oe.matches = function(e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), d.matchesSelector && E && !D[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) {}
                return 0 < oe(t, C, null, [e]).length
            }, oe.contains = function(e, t) { return (e.ownerDocument || e) !== C && T(e), y(e, t) }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && A.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, oe.escape = function(e) { return (e + "").replace(te, ne) }, oe.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(N), l) { for (; t = e[i++];) t === e[i] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) }
                return u = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = oe.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    for (d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [S, s, d]; break }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    for (;
                                        (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a !== e)););
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e); return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) { for (var n, r = a(e, o), i = r.length; i--;) e[n = O(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return a(e, 0, t) }) : a }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? se(function(e, t, n, r) { for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i)) }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: se(function(t) { return function(e) { return 0 < oe(t, e).length } }),
                    contains: se(function(t) {
                        return t = t.replace(Z, ee),
                            function(e) { return -1 < (e.textContent || e.innerText || o(e)).indexOf(t) }
                    }),
                    lang: se(function(n) {
                        return U.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !b.pseudos.empty(e) },
                    header: function(e) { return Y.test(e.nodeName) },
                    input: function(e) { return G.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: he(function() { return [0] }),
                    last: he(function(e, t) { return [t - 1] }),
                    eq: he(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: he(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: he(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: he(function(e, t, n) { for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r); return e }),
                    gt: he(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = fe(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = pe(e);

        function ve() {}

        function ye(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function me(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function xe(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function be(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function we(d, h, g, v, y, e) {
            return v && !v[k] && (v = we(v)), y && !y[k] && (y = we(y, e)), se(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : be(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v)
                    for (i = be(p, u), v(i, [], n, r), o = i.length; o--;)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (y || d) {
                        if (y) {
                            for (i = [], o = p.length; o--;)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(a = p[o]) && -1 < (i = y ? O(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = be(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : L.apply(t, p)
            })
        }

        function Te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = me(function(e) { return e === i }, a, !0), l = me(function(e) { return -1 < O(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [me(xe(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) { for (n = ++s; n < r && !b.relative[e[n].type]; n++); return we(1 < s && xe(c), 1 < s && ye(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Te(e.slice(s, n)), n < r && Te(e = e.slice(n)), n < r && ye(e)) }
                    c.push(t)
                }
            return xe(c)
        }
        return ve.prototype = b.filters = b.pseudos, b.setFilters = new ve, h = oe.tokenize = function(e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); for (a = e, s = [], u = b.preFilter; a;) { for (o in n && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = V[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? oe.error(e) : x(e, s).slice(0) }, f = oe.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = D[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;)(a = Te(t[n]))[k] ? i.push(a) : o.push(a);
                (a = D(e, (v = o, y = i, m = 0 < y.length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = v[a++];)
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        for (a = 0; s = y[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = j.call(r));
                            f = be(f)
                        }
                        L.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && oe.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? se(r) : r))).selector = e
            }
            return a
        }, g = oe.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && ge(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && ye(o))) return L.apply(n, r), n; break }
            }
            return (l || f(e, c))(r, t, !E, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(N).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ue(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ue(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || le("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ue(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || le("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ue(function(e) { return null == e.getAttribute("disabled") }) || le(P, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe
    }(C);
    k.find = d, k.expr = d.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = d.uniqueSort, k.text = d.getText, k.isXMLDoc = d.isXML, k.contains = d.contains, k.escapeSelector = d.escape;
    var h = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        S = k.expr.match.needsContext;

    function D(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, n, r) { return m(n) ? k.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? k.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? k.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : k.filter(n, e, r) }
    k.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) { return 1 === e.nodeType })) }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(A(this, e || [], !1)) },
        not: function(e) { return this.pushStack(A(this, e || [], !0)) },
        is: function(e) { return !!A(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && k.isPlainObject(t))
                for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = k.fn, j = k(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), k.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), k.merge([], e.childNodes)) } }, function(r, i) { k.fn[r] = function(e, t) { var n = k.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (H[r] || k.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } });
    var P = /[^\x20\t\r\n\f]+/g;

    function M(e) { return e }

    function R(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { k.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return k.each(arguments, function(e, t) { for (var n; - 1 < (n = k.inArray(t, s, n));) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < k.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    catch: function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, R, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : R)) }).promise()
                    },
                    promise: function(e) { return null != e ? k.extend(e, a) : a }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            for (; t--;) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, k.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var $ = k.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready() }
    k.fn.ready = function(e) { return $.then(e).catch(function(e) { k.readyException(e) }), this }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait || $.resolveWith(E, [k]))
        }
    }), k.ready.then = $.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var F = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) F(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) { return l.call(k(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function X(e, t) { return t.toUpperCase() }

    function U(e) { return e.replace(_, "ms-").replace(z, X) }
    var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = k.expando + G.uid++ }
    G.uid = 1, G.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[U(t)] = n;
            else
                for (r in t) i[U(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(P) || []).length; for (; n--;) delete r[t[n]] }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !k.isEmptyObject(t) }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : F(this, function(e) { var t; if (o && void 0 === e) { if (void 0 !== (t = Q.get(o, n))) return t; if (void 0 !== (t = Z(o, n))) return t } else this.each(function() { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)), Z(o, r, i[r]));
                Y.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) { return this.each(function() { Q.remove(this, e) }) }
    }), k.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, k.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { k.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: k.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { k.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display") },
        ie = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };

    function oe(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return k.css(e, t, "") },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = (k.cssNumber[t] || "px" !== l && +u) && te.exec(k.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ae = {};

    function se(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && re(r) && (i[o] = (f = l = u = void 0, l = (s = r).ownerDocument, c = s.nodeName, (f = ae[c]) || (u = l.body.appendChild(l.createElement(c)), f = k.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), ae[c] = f)))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n))); var s, u, l, c, f; for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]); return e }
    k.fn.extend({ show: function() { return se(this, !0) }, hide: function() { return se(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { re(this) ? k(this).show() : k(this).hide() }) } });
    var ue = /^(?:checkbox|radio)$/i,
        le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ce = /^$|^module$|\/(?:java|ecma)script/i,
        fe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function pe(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? k.merge([e], n) : n }

    function de(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
    var he, ge, ve = /<|&#?\w+;/;

    function ye(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (le.exec(o) || ["", ""])[1].toLowerCase(), u = fe[s] || fe._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = k.contains(o.ownerDocument, o), a = pe(f.appendChild(o), "script"), l && de(a), n)
            for (c = 0; o = a[c++];) ce.test(o.type || "") && n.push(o);
        return f
    }
    he = E.createDocumentFragment().appendChild(E.createElement("div")), (ge = E.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var me = E.documentElement,
        xe = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function Te() { return !0 }

    function Ce() { return !1 }

    function Ee() { try { return E.activeElement } catch (e) {} }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return k().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = k.guid++)), e.each(function() { k.event.add(this, t, i, r, n) })
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(me, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) { return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; l--;) d = g = (s = we.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--;)
                    if (d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Y.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = k.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[k.expando] ? e : new k.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== Ee() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === Ee() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1 }, _default: function(e) { return D(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, k.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, k.event.addProp), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() { k.event.remove(this, e, n, t) }); for (i in e) this.off(i, t, e[i]); return this } });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) { return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e }

    function qe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Le(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function He(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), a = Y.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            Q.hasData(e) && (s = Q.access(e), u = k.extend({}, s), Q.set(t, u))
        }
    }

    function Oe(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ne.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Oe(t, r, i, o)
        });
        if (f && (t = (e = ye(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(pe(e, "script"), qe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, pe(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Le), c = 0; c < s; c++) u = a[c], ce.test(u.type || "") && !Y.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(u.src) : b(u.textContent.replace(Ae, ""), l, u))
        }
        return n
    }

    function Pe(e, t, n) { for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(pe(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && de(pe(r, "script")), r.parentNode.removeChild(r)); return e }
    k.extend({
        htmlPrefilter: function(e) { return e.replace(Se, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = k.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = pe(c), r = 0, i = (o = pe(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && ue.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || pe(e), a = a || pe(c), r = 0, i = o.length; r < i; r++) He(o[r], a[r]);
                else He(e, c);
            return 0 < (a = pe(c, "script")).length && de(a, !f && pe(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) { return Pe(this, e, !0) },
        remove: function(e) { return Pe(this, e) },
        text: function(e) { return F(this, function(e) { return void 0 === e ? k.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Oe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) },
        prepend: function() {
            return Oe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Oe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Oe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(pe(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return k.clone(this, e, t) }) },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Oe(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { k.fn[e] = function(e) { for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", me.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 36 === u.offsetWidth || "absolute", me.removeChild(s), u = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), a }, scrollboxSize: function() { return e(), i } }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        _e = { position: "absolute", visibility: "hidden", display: "block" },
        ze = { letterSpacing: "0", fontWeight: "400" },
        Xe = ["Webkit", "Moz", "ms"],
        Ue = E.createElement("div").style;

    function Ve(e) {
        var t = k.cssProps[e];
        return t || (t = k.cssProps[e] = function(e) {
            if (e in Ue) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ue) return e
        }(e) || e), t
    }

    function Ge(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ye(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + ne[a] + "Width", !0, i))) : (u += k.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += k.css(e, "border" + ne[a] + "Width", !0, i) : s += k.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function Qe(e, t, n) {
        var r = Re(e),
            i = We(e, t, r),
            o = "border-box" === k.css(e, "boxSizing", !1, r),
            a = o;
        if (Me.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (y.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === k.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ye(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    function Je(e, t, n, r, i) { return new Je.prototype.init(e, t, n, r, i) }
    k.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = We(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = U(t),
                    u = Fe.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = oe(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = U(t); return Fe.test(t) || (t = Ve(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in ze && (i = ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), k.each(["height", "width"], function(e, s) {
        k.cssHooks[s] = {
            get: function(e, t, n) { if (t) return !Be.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, s, n) : ie(e, _e, function() { return Qe(e, s, n) }) },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = "border-box" === k.css(e, "boxSizing", !1, i),
                    a = n && Ye(e, s, n, o, i);
                return o && y.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - Ye(e, s, "border", !1, i) - .5)), a && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = k.css(e, s)), Ge(0, t, a)
            }
        }
    }), k.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), k.each({ margin: "", padding: "", border: "Width" }, function(i, o) { k.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (k.cssHooks[i + o].set = Ge) }), k.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r); return o }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = Je).prototype = { constructor: Je, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px") }, cur: function() { var e = Je.propHooks[this.prop]; return e && e.get ? e.get(this) : Je.propHooks._default.get(this) }, run: function(e) { var t, n = Je.propHooks[this.prop]; return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this } }).init.prototype = Je.prototype, (Je.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Je.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, k.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, k.fx = Je.prototype.init, k.fx.step = {};
    var Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

    function it() { Ze && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(it) : C.setTimeout(it, k.fx.interval), k.fx.tick()) }

    function ot() { return C.setTimeout(function() { Ke = void 0 }), Ke = Date.now() }

    function at(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function st(e, t, n) {
        for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ut(o, e, t) {
        var n, a, r = 0,
            i = ut.prefilters.length,
            s = k.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = Ke || ot(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ke || ot(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = U(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ut.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, st, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    k.Animation = k.extend(ut, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return oe(n.elem, e, te.exec(t), n), n }] },
        tweener: function(e, t) { for (var n, r = 0, i = (e = m(e) ? (t = e, ["*"]) : e.match(P)).length; r < i; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && re(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, k.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], nt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (se([e], !0), l = e.style.display || l, c = k.css(e, "display"), se([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && se([e], !0), p.done(function() { for (r in g || se([e]), Y.remove(e, "fxshow"), d) k.style(e, r, d[r]) })), u = st(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? ut.prefilters.unshift(e) : ut.prefilters.push(e) }
    }), k.speed = function(e, t, n) { var r = e && "object" == typeof e ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = ut(this, k.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && rt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(at(r, !0), e, t, n) }
    }), k.each({ slideDown: at("show"), slideUp: at("hide"), slideToggle: at("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { k.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), Ke = void 0
    }, k.fx.timer = function(e) { k.timers.push(e), k.fx.start() }, k.fx.interval = 13, k.fx.start = function() { Ze || (Ze = !0, it()) }, k.fx.stop = function() { Ze = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, et = E.createElement("input"), tt = E.createElement("select").appendChild(E.createElement("option")), et.type = "checkbox", y.checkOn = "" !== et.value, y.optSelected = tt.selected, (et = E.createElement("input")).value = "t", et.type = "radio", y.radioValue = "t" === et.value;
    var lt, ct = k.expr.attrHandle;
    k.fn.extend({ attr: function(e, t) { return F(this, k.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { k.removeAttr(this, e) }) } }), k.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && D(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), lt = { set: function(e, t, n) { return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n } }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ct[t] || k.find.attr;
        ct[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ct[o], ct[o] = r, r = null != a(e, t, n) ? o : null, ct[o] = i), r }
    });
    var ft = /^(?:input|select|textarea|button)$/i,
        pt = /^(?:a|area)$/i;

    function dt(e) { return (e.match(P) || []).join(" ") }

    function ht(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function gt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    k.fn.extend({ prop: function(e, t) { return F(this, k.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[k.propFix[e] || e] }) } }), k.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = k.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), y.optSelected || (k.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { k.propFix[this.toLowerCase()] = this }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).addClass(t.call(this, e, ht(this))) });
            if ((e = gt(t)).length)
                for (; n = this[u++];)
                    if (i = ht(n), r = 1 === n.nodeType && " " + dt(i) + " ") {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = dt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).removeClass(t.call(this, e, ht(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = gt(t)).length)
                for (; n = this[u++];)
                    if (i = ht(n), r = 1 === n.nodeType && " " + dt(i) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = dt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { k(this).toggleClass(i.call(this, e, ht(this), t), t) }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = k(this), r = gt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = ht(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + dt(ht(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) { return null == e ? "" : e + "" })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: { get: function(e) { var t = k.find.attr(e, "value"); return null != t ? t : dt(k.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) { for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o }
            }
        }
    }), k.each(["radio", "checkbox"], function() { k.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t) } }, y.checkOn || (k.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        mt = function(e) { e.stopPropagation() };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, yt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0;
                    (o = p[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, mt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, mt), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, { type: e, isSimulated: !0 });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({ trigger: function(e, t) { return this.each(function() { k.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return k.event.trigger(e, t, n, !0) } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { k.event.simulate(r, e.target, k.event.fix(e)) };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var xt = C.location,
        bt = Date.now(),
        wt = /\?/;
    k.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t };
    var Tt = /\[\]$/,
        Ct = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function St(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) { r || Tt.test(n) ? i(n, t) : St(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) St(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) St(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({ serialize: function() { return k.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = k.prop(this, "elements"); return e ? k.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !k(this).is(":disabled") && kt.test(this.nodeName) && !Et.test(e) && (this.checked || !ue.test(e)) }).map(function(e, t) { var n = k(this).val(); return null == n ? null : Array.isArray(n) ? k.map(n, function(e) { return { name: t.name, value: e.replace(Ct, "\r\n") } }) : { name: t.name, value: n.replace(Ct, "\r\n") } }).get() } });
    var Dt = /%20/g,
        Nt = /#.*$/,
        At = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Ht = {},
        Ot = {},
        Pt = "*/".concat("*"),
        Mt = E.createElement("a");

    function Rt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function It(t, i, o, a) {
        var s = {},
            u = t === Ot;

        function l(e) { var r; return s[e] = !0, k.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Wt(e, t) { var n, r, i = k.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && k.extend(!0, e, r), e }
    Mt.href = xt.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: xt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Pt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? Wt(Wt(e, k.ajaxSettings), t) : Wt(k.ajaxSettings, e) },
        ajaxPrefilter: Rt(Ht),
        ajaxTransport: Rt(Ot),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = jt.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || xt.href) + "").replace(Lt, xt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), It(Ht, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !qt.test(v.type), f = v.url.replace(Nt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Dt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (wt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(At, "$1"), o = (wt.test(f) ? "&" : "?") + "_=" + bt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = It(Ot, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return k.get(e, t, n, "json") },
        getScript: function(e, t) { return k.get(e, void 0, t, "script") }
    }), k.each(["get", "post"], function(e, i) { k[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e)) } }), k._evalUrl = function(e) { return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, k.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) { k(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = m(t); return this.each(function(e) { k(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { k(this).replaceWith(this.childNodes) }), this }
    }), k.expr.pseudos.hidden = function(e) { return !k.expr.pseudos.visible(e) }, k.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, k.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var $t = { 0: 200, 1223: 204 },
        Bt = k.ajaxSettings.xhr();
    y.cors = !!Bt && "withCredentials" in Bt, y.ajax = Bt = !!Bt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Bt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t($t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), k.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return k.globalEval(e), e } } }), k.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), k.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain) return { send: function(e, t) { r = k("<script>").prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Ft, _t = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = _t.pop() || k.expando + "_" + bt++; return this[e] = !0, e } }), k.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(zt, "$1" + r) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || k.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, _t.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Ft = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), k.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = ye([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))); var r, i, o }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = dt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { k.fn[t] = function(e) { return this.on(t, e) } }), k.expr.pseudos.animated = function(t) { return k.grep(k.timers, function(e) { return t === e.elem }).length }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { k.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent; return e || me }) }
    }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) { k.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = We(e, n), Me.test(t) ? k(e).position()[n] + "px" : t }) }), k.each({ Height: "height", Width: "width" }, function(a, s) {
        k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { k.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), k.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), k.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), k.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || k.guid++, i }, k.holdReady = function(e) { e ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = D, k.isFunction = m, k.isWindow = x, k.camelCase = U, k.type = w, k.now = Date.now, k.isNumeric = function(e) { var t = k.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return k });
    var Xt = C.jQuery,
        Ut = C.$;
    return k.noConflict = function(e) { return C.$ === k && (C.$ = Ut), e && C.jQuery === k && (C.jQuery = Xt), k }, e || (C.jQuery = C.$ = k), k
});
/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery) }(this, function(t, e) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

    function c(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function(t) { return Object.getOwnPropertyDescriptor(o, t).enumerable }))), e.forEach(function(t) {
                var e, n, i;
                e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i
            })
        }
        return r
    }
    for (var r, n, o, a, l, h, f, u, d, p, g, m, _, v, y, E, b, w, C, T, D, I, S, A, O, N, k, x, P, L, j, H, F, M, W, R, U, B, K, Q, Y, V, q, z, G, J, Z, X, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ft, ut, dt, pt, gt, mt, _t, vt, yt, Et, bt, wt = function(i) {
            var e = "transitionend";

            function t(t) {
                var e = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || l.triggerTransitionEnd(e) }, t), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try { return 0 < i(document).find(e).length ? e : null } catch (t) { return null }
                },
                getTransitionDurationFromElement: function(t) { if (!t) return 0; var e = i(t).css("transition-duration"); return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0 },
                reflow: function(t) { return t.offsetHeight },
                triggerTransitionEnd: function(t) { i(t).trigger(e) },
                supportsTransitionEnd: function() { return Boolean(e) },
                isElement: function(t) { return (t[0] || t).nodeType },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = e[i],
                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                        }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t) { if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }, l
        }(e = e && e.hasOwnProperty("default") ? e.default : e), Ct = (n = "alert", a = "." + (o = "bs.alert"), l = (r = e).fn[n], h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", u = "fade", d = "show", p = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() { r.removeData(this._element, o), this._element = null }, t._getRootElement = function(t) {
                var e = wt.getSelectorFromElement(t),
                    n = !1;
                return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function(t) { var e = r.Event(h.CLOSE); return r(t).trigger(e), e }, t._removeElement = function(e) {
                var n = this;
                if (r(e).removeClass(d), r(e).hasClass(u)) {
                    var t = wt.getTransitionDurationFromElement(e);
                    r(e).one(wt.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) { r(t).detach().trigger(h.CLOSED).remove() }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = r(this),
                        e = t.data(o);
                    e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), i
        }(), r(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function() { return r.fn[n] = l, p._jQueryInterface }, p), Tt = (m = "button", v = "." + (_ = "bs.button"), y = ".data-api", E = (g = e).fn[m], b = "active", w = "btn", T = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', I = "input", S = ".active", A = ".btn", O = { CLICK_DATA_API: "click" + v + y, FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y }, N = function() {
            function n(t) { this._element = t }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = g(this._element).closest(D)[0];
                if (n) {
                    var i = g(this._element).find(I)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && g(this._element).hasClass(b)) t = !1;
                            else {
                                var r = g(n).find(S)[0];
                                r && g(r).removeClass(b)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !g(this._element).hasClass(b), g(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b)
            }, t.dispose = function() { g.removeData(this._element, _), this._element = null }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(_);
                    t || (t = new n(this), g(this).data(_, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), n
        }(), g(document).on(O.CLICK_DATA_API, T, function(t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(w) || (e = g(e).closest(A)), N._jQueryInterface.call(g(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, T, function(t) {
            var e = g(t.target).closest(A)[0];
            g(e).toggleClass(C, /^focus(in)?$/.test(t.type))
        }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function() { return g.fn[m] = E, N._jQueryInterface }, N), Dt = (x = "carousel", L = "." + (P = "bs.carousel"), j = ".data-api", H = (k = e).fn[x], F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, M = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, W = "next", R = "prev", U = "left", B = "right", K = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + j, CLICK_DATA_API: "click" + L + j }, Q = "carousel", Y = "active", V = "slide", q = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", $ = ".carousel-item", tt = ".carousel-item-next, .carousel-item-prev", et = ".carousel-indicators", nt = "[data-slide], [data-slide-to]", it = '[data-ride="carousel"]', rt = function() {
            function o(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(et)[0], this._addEventListeners() }
            var t = o.prototype;
            return t.next = function() { this._isSliding || this._slide(W) }, t.nextWhenVisible = function() {!document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next() }, t.prev = function() { this._isSliding || this._slide(R) }, t.pause = function(t) { t || (this._isPaused = !0), k(this._element).find(tt)[0] && (wt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function(t) {
                var e = this;
                this._activeElement = k(this._element).find(X)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) k(this._element).one(K.SLID, function() { return e.to(t) });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? W : R;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() { k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function(t) { return t = c({}, F, t), wt.typeCheckConfig(x, t, M), t }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && k(this._element).on(K.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function(t) { return e.pause(t) }).on(K.MOUSELEAVE, function(t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && k(this._element).on(K.TOUCHEND, function() { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval) }))
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) { return this._items = k.makeArray(k(t).parent().find($)), this._items.indexOf(t) }, t._getItemByDirection = function(t, e) {
                var n = t === W,
                    i = t === R,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                var s = (r + (t === R ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(k(this._element).find(X)[0]),
                    r = k.Event(K.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                return k(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    k(this._indicatorsElement).find(Z).removeClass(Y);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && k(e).addClass(Y)
                }
            }, t._slide = function(t, e) {
                var n, i, r, o = this,
                    s = k(this._element).find(X)[0],
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (r = t === W ? (n = z, i = G, U) : (n = q, i = J, B), l && k(l).hasClass(Y)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var f = k.Event(K.SLID, { relatedTarget: l, direction: r, from: a, to: c });
                    if (k(this._element).hasClass(V)) {
                        k(l).addClass(i), wt.reflow(l), k(s).addClass(n), k(l).addClass(n);
                        var u = wt.getTransitionDurationFromElement(s);
                        k(s).one(wt.TRANSITION_END, function() { k(l).removeClass(n + " " + i).addClass(Y), k(s).removeClass(Y + " " + i + " " + n), o._isSliding = !1, setTimeout(function() { return k(o._element).trigger(f) }, 0) }).emulateTransitionEnd(u)
                    } else k(s).removeClass(Y), k(l).addClass(Y), this._isSliding = !1, k(this._element).trigger(f);
                    h && this.cycle()
                }
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = k(this).data(P),
                        e = c({}, F, k(this).data());
                    "object" == typeof i && (e = c({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new o(this, e), k(this).data(P, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, o._dataApiClickHandler = function(t) {
                var e = wt.getSelectorFromElement(this);
                if (e) {
                    var n = k(e)[0];
                    if (n && k(n).hasClass(Q)) {
                        var i = c({}, k(n).data(), k(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), t.preventDefault()
                    }
                }
            }, s(o, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return F } }]), o
        }(), k(document).on(K.CLICK_DATA_API, nt, rt._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function() {
            k(it).each(function() {
                var t = k(this);
                rt._jQueryInterface.call(t, t.data())
            })
        }), k.fn[x] = rt._jQueryInterface, k.fn[x].Constructor = rt, k.fn[x].noConflict = function() { return k.fn[x] = H, rt._jQueryInterface }, rt), It = (st = "collapse", lt = "." + (at = "bs.collapse"), ct = (ot = e).fn[st], ht = { toggle: !0, parent: "" }, ft = { toggle: "boolean", parent: "(string|element)" }, ut = { SHOW: "show" + lt, SHOWN: "shown" + lt, HIDE: "hide" + lt, HIDDEN: "hidden" + lt, CLICK_DATA_API: "click" + lt + ".data-api" }, dt = "show", pt = "collapse", gt = "collapsing", mt = "collapsed", _t = "width", vt = "height", yt = ".show, .collapsing", Et = '[data-toggle="collapse"]', bt = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = ot.makeArray(ot('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = ot(Et), i = 0; i < n.length; i++) {
                    var r = n[i],
                        o = wt.getSelectorFromElement(r);
                    null !== o && 0 < ot(o).filter(t).length && (this._selector = o, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() { ot(this._element).hasClass(dt) ? this.hide() : this.show() }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !ot(this._element).hasClass(dt) && (this._parent && 0 === (t = ot.makeArray(ot(this._parent).find(yt).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = ot(t).not(this._selector).data(at)) && e._isTransitioning))) {
                    var i = ot.Event(ut.SHOW);
                    if (ot(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(ot(t).not(this._selector), "hide"), e || ot(t).data(at, null));
                        var r = this._getDimension();
                        ot(this._element).removeClass(pt).addClass(gt), (this._element.style[r] = 0) < this._triggerArray.length && ot(this._triggerArray).removeClass(mt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = wt.getTransitionDurationFromElement(this._element);
                        ot(this._element).one(wt.TRANSITION_END, function() { ot(n._element).removeClass(gt).addClass(pt).addClass(dt), n._element.style[r] = "", n.setTransitioning(!1), ot(n._element).trigger(ut.SHOWN) }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && ot(this._element).hasClass(dt)) {
                    var e = ot.Event(ut.HIDE);
                    if (ot(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", wt.reflow(this._element), ot(this._element).addClass(gt).removeClass(pt).removeClass(dt), 0 < this._triggerArray.length)
                            for (var i = 0; i < this._triggerArray.length; i++) {
                                var r = this._triggerArray[i],
                                    o = wt.getSelectorFromElement(r);
                                if (null !== o) ot(o).hasClass(dt) || ot(r).addClass(mt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var s = wt.getTransitionDurationFromElement(this._element);
                        ot(this._element).one(wt.TRANSITION_END, function() { t.setTransitioning(!1), ot(t._element).removeClass(gt).addClass(pt).trigger(ut.HIDDEN) }).emulateTransitionEnd(s)
                    }
                }
            }, t.setTransitioning = function(t) { this._isTransitioning = t }, t.dispose = function() { ot.removeData(this._element, at), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function(t) { return (t = c({}, ht, t)).toggle = Boolean(t.toggle), wt.typeCheckConfig(st, t, ft), t }, t._getDimension = function() { return ot(this._element).hasClass(_t) ? _t : vt }, t._getParent = function() {
                var n = this,
                    t = null;
                wt.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = ot(this._config.parent)[0];
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return ot(t).find(e).each(function(t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = ot(t).hasClass(dt);
                    0 < e.length && ot(e).toggleClass(mt, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(t) { var e = wt.getSelectorFromElement(t); return e ? ot(e)[0] : null }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = ot(this),
                        e = t.data(at),
                        n = c({}, ht, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(at, e)), "string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return ht } }]), a
        }(), ot(document).on(ut.CLICK_DATA_API, Et, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = ot(this),
                e = wt.getSelectorFromElement(this);
            ot(e).each(function() {
                var t = ot(this),
                    e = t.data(at) ? "toggle" : n.data();
                bt._jQueryInterface.call(t, e)
            })
        }), ot.fn[st] = bt._jQueryInterface, ot.fn[st].Constructor = bt, ot.fn[st].noConflict = function() { return ot.fn[st] = ct, bt._jQueryInterface }, bt), St = "undefined" != typeof window && "undefined" != typeof document, At = ["Edge", "Trident", "Firefox"], Ot = 0, Nt = 0; Nt < At.length; Nt += 1)
        if (St && 0 <= navigator.userAgent.indexOf(At[Nt])) { Ot = 1; break }
    var kt = St && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then(function() { e = !1, t() })) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, Ot)) } };

    function xt(t) { return t && "[object Function]" === {}.toString.call(t) }

    function Pt(t, e) { if (1 !== t.nodeType) return []; var n = getComputedStyle(t, null); return e ? n[e] : n }

    function Lt(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function jt(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = Pt(t),
            n = e.overflow,
            i = e.overflowX,
            r = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? t : jt(Lt(t))
    }
    var Ht = St && !(!window.MSInputMethodContext || !document.documentMode),
        Ft = St && /MSIE 10/.test(navigator.userAgent);

    function Mt(t) { return 11 === t ? Ht : 10 === t ? Ft : Ht || Ft }

    function Wt(t) { if (!t) return document.documentElement; for (var e = Mt(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pt(n, "position") ? Wt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }

    function Rt(t) { return null !== t.parentNode ? Rt(t.parentNode) : t }

    function Ut(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Wt(s.firstElementChild) !== s ? Wt(l) : l;
        var c = Rt(t);
        return c.host ? Ut(c.host, e) : Ut(t, Rt(e).host)
    }

    function Bt(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" !== n && "HTML" !== n) return t[e];
        var i = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || i)[e]
    }

    function Kt(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function Qt(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Mt(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0) }

    function Yt() {
        var t = document.body,
            e = document.documentElement,
            n = Mt(10) && getComputedStyle(e);
        return { height: Qt("Height", t, e, n), width: Qt("Width", t, e, n) }
    }
    var Vt = function() {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }
        }(),
        qt = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
        zt = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t };

    function Gt(t) { return zt({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function Jt(t) {
        var e = {};
        try {
            if (Mt(10)) {
                e = t.getBoundingClientRect();
                var n = Bt(t, "top"),
                    i = Bt(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            o = "HTML" === t.nodeName ? Yt() : {},
            s = o.width || t.clientWidth || r.right - r.left,
            a = o.height || t.clientHeight || r.bottom - r.top,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var h = Pt(t);
            l -= Kt(h, "x"), c -= Kt(h, "y"), r.width -= l, r.height -= c
        }
        return Gt(r)
    }

    function Zt(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Mt(10),
            r = "HTML" === e.nodeName,
            o = Jt(t),
            s = Jt(e),
            a = jt(t),
            l = Pt(e),
            c = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === e.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = Gt({ top: o.top - s.top - c, left: o.left - s.left - h, width: o.width, height: o.height });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var u = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            f.top -= c - u, f.bottom -= c - u, f.left -= h - d, f.right -= h - d, f.marginTop = u, f.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (f = function(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Bt(e, "top"),
                r = Bt(e, "left"),
                o = n ? -1 : 1;
            return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
        }(f, e)), f
    }

    function Xt(t) { if (!t || !t.parentElement || Mt()) return document.documentElement; for (var e = t.parentElement; e && "none" === Pt(e, "transform");) e = e.parentElement; return e || document.documentElement }

    function $t(t, e, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = r ? Xt(t) : Ut(t, e);
        if ("viewport" === i) o = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = Zt(t, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : Bt(n),
                a = e ? 0 : Bt(n, "left");
            return Gt({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = jt(Lt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = Zt(a, s, r);
            if ("HTML" !== a.nodeName || function t(e) { var n = e.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === Pt(e, "position") || t(Lt(e))) }(s)) o = l;
            else {
                var c = Yt(),
                    h = c.height,
                    f = c.width;
                o.top += l.top - l.marginTop, o.bottom = h + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function te(t, e, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = $t(i, n, o, r),
            a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
            l = Object.keys(a).map(function(t) { return zt({ key: t }, a[t], { area: (e = a[t], e.width * e.height) }); var e }).sort(function(t, e) { return e.area - t.area }),
            c = l.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            h = 0 < c.length ? c[0].key : l[0].key,
            f = t.split("-")[1];
        return h + (f ? "-" + f : "")
    }

    function ee(t, e, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return Zt(n, i ? Xt(e) : Ut(e, n), i) }

    function ne(t) {
        var e = getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return { width: t.offsetWidth + i, height: t.offsetHeight + n }
    }

    function ie(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

    function re(t, e, n) {
        n = n.split("-")[0];
        var i = ne(t),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[ie(a)], r
    }

    function oe(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function se(t, n, e) {
        return (void 0 === e ? t : t.slice(0, function(t, e, n) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === n }); var i = oe(t, function(t) { return t[e] === n }); return t.indexOf(i) }(t, "name", e))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t.function || t.fn;
            t.enabled && xt(e) && (n.offsets.popper = Gt(n.offsets.popper), n.offsets.reference = Gt(n.offsets.reference), n = e(n, t))
        }), n
    }

    function ae(t, n) { return t.some(function(t) { var e = t.name; return t.enabled && e === n }) }

    function le(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function ce(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

    function he(t, e, n, i) {
        n.updateBound = i, ce(t).addEventListener("resize", n.updateBound, { passive: !0 });
        var r = jt(t);
        return function t(e, n, i, r) {
            var o = "BODY" === e.nodeName,
                s = o ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, { passive: !0 }), o || t(jt(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function fe() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ce(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function ue(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function de(n, i) { Object.keys(i).forEach(function(t) { var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ue(i[t]) && (e = "px"), n.style[t] = i[t] + e }) }

    function pe(t, e, n) {
        var i = oe(t, function(t) { return t.name === e }),
            r = !!i && t.some(function(t) { return t.name === n && t.enabled && t.order < i.order });
        if (!r) {
            var o = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var ge = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        me = ge.slice(3);

    function _e(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = me.indexOf(t),
            i = me.slice(n + 1).concat(me.slice(0, n));
        return e ? i.reverse() : i
    }
    var ve = "flip",
        ye = "clockwise",
        Ee = "counterclockwise";

    function be(t, r, o, e) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(e),
            n = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
            i = n.indexOf(oe(n, function(t) { return -1 !== t.search(/,|\s/) }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(t, e) {
            var n = (1 === e ? !a : a) ? "height" : "width",
                i = !1;
            return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e) }, []).map(function(t) {
                return function(t, e, n, i) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return t;
                    if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? o : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    var a = void 0;
                    switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                    }
                    return Gt(a)[e] / 100 * o
                }(t, n, r, o)
            })
        })).forEach(function(n, i) { n.forEach(function(t, e) { ue(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1)) }) }), s
    }
    var we = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var r = t.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = { start: qt({}, l, o[l]), end: qt({}, l, o[l] + o[c] - s[c]) };
                            t.offsets.popper = zt({}, s, h[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            r = t.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ue(+n) ? [+n, 0] : be(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, i) {
                        var e = i.boundariesElement || Wt(t.instance.popper);
                        t.instance.reference === e && (e = Wt(e));
                        var n = le("transform"),
                            r = t.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = $t(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                        var c = i.priority,
                            h = t.offsets.popper,
                            f = {
                                primary: function(t) { var e = h[t]; return h[t] < l[t] && !i.escapeWithReference && (e = Math.max(h[t], l[t])), qt({}, t, e) },
                                secondary: function(t) {
                                    var e = "right" === t ? "left" : "top",
                                        n = h[e];
                                    return h[t] > l[t] && !i.escapeWithReference && (n = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))), qt({}, e, n)
                                }
                            };
                        return c.forEach(function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            h = zt({}, h, f[e](t))
                        }), t.offsets.popper = h, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!pe(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) { if (!(i = t.instance.popper.querySelector(i))) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0],
                            o = t.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            f = h.toLowerCase(),
                            u = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = ne(i)[c];
                        a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]), t.offsets.popper = Gt(t.offsets.popper);
                        var g = a[f] + a[c] / 2 - p / 2,
                            m = Pt(t.instance.popper),
                            _ = parseFloat(m["margin" + h], 10),
                            v = parseFloat(m["border" + h + "Width"], 10),
                            y = g - t.offsets.popper[f] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), t.arrowElement = i, t.offsets.arrow = (qt(n = {}, f, Math.round(y)), qt(n, u, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(p, g) {
                        if (ae(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var m = $t(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = ie(_),
                            y = p.placement.split("-")[1] || "",
                            E = [];
                        switch (g.behavior) {
                            case ve:
                                E = [_, v];
                                break;
                            case ye:
                                E = _e(_);
                                break;
                            case Ee:
                                E = _e(_, !0);
                                break;
                            default:
                                E = g.behavior
                        }
                        return E.forEach(function(t, e) {
                            if (_ !== t || E.length === e + 1) return p;
                            _ = p.placement.split("-")[0], v = ie(_);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                                a = o(i.left) < o(m.left),
                                l = o(i.right) > o(m.right),
                                c = o(i.top) < o(m.top),
                                h = o(i.bottom) > o(m.bottom),
                                f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && h,
                                u = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!g.flipVariations && (u && "start" === y && a || u && "end" === y && l || !u && "start" === y && c || !u && "end" === y && h);
                            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[e + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = zt({}, p.offsets.popper, re(p.instance.popper, p.offsets.reference, p.placement)), p = se(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = ie(e), t.offsets.popper = Gt(r), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!pe(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = oe(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            r = t.offsets.popper,
                            o = oe(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : e.gpuAcceleration,
                            a = Jt(Wt(t.instance.popper)),
                            l = { position: r.position },
                            c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
                            h = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            u = le("transform"),
                            d = void 0,
                            p = void 0;
                        if (p = "bottom" === h ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[h] = 0, l[f] = 0, l.willChange = "transform";
                        else {
                            var g = "bottom" === h ? -1 : 1,
                                m = "right" === f ? -1 : 1;
                            l[h] = p * g, l[f] = d * m, l.willChange = h + ", " + f
                        }
                        var _ = { "x-placement": t.placement };
                        return t.attributes = zt({}, _, t.attributes), t.styles = zt({}, l, t.styles), t.arrowStyles = zt({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) { var e, n; return de(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) }), t.arrowElement && Object.keys(t.arrowStyles).length && de(t.arrowElement, t.arrowStyles), t },
                    onLoad: function(t, e, n, i, r) {
                        var o = ee(r, e, t, n.positionFixed),
                            s = te(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), de(e, { position: n.positionFixed ? "fixed" : "absolute" }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ce = function() {
            function o(t, e) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, o), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = kt(this.update.bind(this)), this.options = zt({}, o.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(zt({}, o.Defaults.modifiers, i.modifiers)).forEach(function(t) { n.options.modifiers[t] = zt({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return zt({ name: t }, n.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(t) { t.enabled && xt(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state) }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Vt(o, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            t.offsets.reference = ee(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = te(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = re(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = se(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, ae(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[le("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = he(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return fe.call(this) } }]), o
        }();
    Ce.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ce.placements = ge, Ce.Defaults = we;
    var Te, De, Ie, Se, Ae, Oe, Ne, ke, xe, Pe, Le, je, He, Fe, Me, We, Re, Ue, Be, Ke, Qe, Ye, Ve, qe, ze, Ge, Je, Ze, Xe, $e, tn, en, nn, rn, on, sn, an, ln, cn, hn, fn, un, dn, pn, gn, mn, _n, vn, yn, En, bn, wn, Cn, Tn, Dn, In, Sn, An, On, Nn, kn, xn, Pn, Ln, jn, Hn, Fn, Mn, Wn, Rn, Un, Bn, Kn, Qn, Yn, Vn, qn, zn, Gn, Jn, Zn, Xn, $n, ti, ei, ni, ii, ri, oi, si, ai, li, ci, hi, fi, ui, di, pi, gi, mi, _i, vi, yi, Ei, bi, wi, Ci, Ti, Di, Ii, Si, Ai, Oi, Ni, ki, xi, Pi, Li, ji, Hi, Fi, Mi, Wi, Ri, Ui, Bi, Ki = (De = "dropdown", Se = "." + (Ie = "bs.dropdown"), Ae = ".data-api", Oe = (Te = e).fn[De], Ne = new RegExp("38|40|27"), ke = { HIDE: "hide" + Se, HIDDEN: "hidden" + Se, SHOW: "show" + Se, SHOWN: "shown" + Se, CLICK: "click" + Se, CLICK_DATA_API: "click" + Se + Ae, KEYDOWN_DATA_API: "keydown" + Se + Ae, KEYUP_DATA_API: "keyup" + Se + Ae }, xe = "disabled", Pe = "show", Le = "dropup", je = "dropright", He = "dropleft", Fe = "dropdown-menu-right", Me = "position-static", We = '[data-toggle="dropdown"]', Re = ".dropdown form", Ue = ".dropdown-menu", Be = ".navbar-nav", Ke = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Qe = "top-start", Ye = "top-end", Ve = "bottom-start", qe = "bottom-end", ze = "right-start", Ge = "left-start", Je = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Ze = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Xe = function() {
            function l(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var t = l.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !Te(this._element).hasClass(xe)) {
                    var t = l._getParentFromElement(this._element),
                        e = Te(this._menu).hasClass(Pe);
                    if (l._clearMenus(), !e) {
                        var n = { relatedTarget: this._element },
                            i = Te.Event(ke.SHOW, n);
                        if (Te(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if (void 0 === Ce) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = t : wt.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && Te(t).addClass(Me), this._popper = new Ce(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === Te(t).closest(Be).length && Te(document.body).children().on("mouseover", null, Te.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Te(this._menu).toggleClass(Pe), Te(t).toggleClass(Pe).trigger(Te.Event(ke.SHOWN, n)) }
                    }
                }
            }, t.dispose = function() { Te.removeData(this._element, Ie), Te(this._element).off(Se), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function() {
                var e = this;
                Te(this._element).on(ke.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })
            }, t._getConfig = function(t) { return t = c({}, this.constructor.Default, Te(this._element).data(), t), wt.typeCheckConfig(De, t, this.constructor.DefaultType), t }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = Te(t).find(Ue)[0]
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = Te(this._element).parent(),
                    e = Ve;
                return t.hasClass(Le) ? (e = Qe, Te(this._menu).hasClass(Fe) && (e = Ye)) : t.hasClass(je) ? e = ze : t.hasClass(He) ? e = Ge : Te(this._menu).hasClass(Fe) && (e = qe), e
            }, t._detectNavbar = function() { return 0 < Te(this._element).closest(".navbar").length }, t._getPopperConfig = function() {
                var e = this,
                    t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = c({}, t.offsets, e._config.offset(t.offsets) || {}), t } : t.offset = this._config.offset;
                var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n
            }, l._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = Te(this).data(Ie);
                    if (t || (t = new l(this, "object" == typeof e ? e : null), Te(this).data(Ie, t)), "string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, l._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = Te.makeArray(Te(We)), n = 0; n < e.length; n++) {
                        var i = l._getParentFromElement(e[n]),
                            r = Te(e[n]).data(Ie),
                            o = { relatedTarget: e[n] };
                        if (r) {
                            var s = r._menu;
                            if (Te(i).hasClass(Pe) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && Te.contains(i, t.target))) {
                                var a = Te.Event(ke.HIDE, o);
                                Te(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Te(document.body).children().off("mouseover", null, Te.noop), e[n].setAttribute("aria-expanded", "false"), Te(s).removeClass(Pe), Te(i).removeClass(Pe).trigger(Te.Event(ke.HIDDEN, o)))
                            }
                        }
                    }
            }, l._getParentFromElement = function(t) { var e, n = wt.getSelectorFromElement(t); return n && (e = Te(n)[0]), e || t.parentNode }, l._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || Te(t.target).closest(Ue).length)) : Ne.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !Te(this).hasClass(xe))) {
                    var e = l._getParentFromElement(this),
                        n = Te(e).hasClass(Pe);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = Te(e).find(Ke).get();
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var o = Te(e).find(We)[0];
                            Te(o).trigger("focus")
                        }
                        Te(this).trigger("click")
                    }
                }
            }, s(l, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Je } }, { key: "DefaultType", get: function() { return Ze } }]), l
        }(), Te(document).on(ke.KEYDOWN_DATA_API, We, Xe._dataApiKeydownHandler).on(ke.KEYDOWN_DATA_API, Ue, Xe._dataApiKeydownHandler).on(ke.CLICK_DATA_API + " " + ke.KEYUP_DATA_API, Xe._clearMenus).on(ke.CLICK_DATA_API, We, function(t) { t.preventDefault(), t.stopPropagation(), Xe._jQueryInterface.call(Te(this), "toggle") }).on(ke.CLICK_DATA_API, Re, function(t) { t.stopPropagation() }), Te.fn[De] = Xe._jQueryInterface, Te.fn[De].Constructor = Xe, Te.fn[De].noConflict = function() { return Te.fn[De] = Oe, Xe._jQueryInterface }, Xe),
        Qi = (tn = "modal", nn = "." + (en = "bs.modal"), rn = ($e = e).fn[tn], on = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, sn = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, an = { HIDE: "hide" + nn, HIDDEN: "hidden" + nn, SHOW: "show" + nn, SHOWN: "shown" + nn, FOCUSIN: "focusin" + nn, RESIZE: "resize" + nn, CLICK_DISMISS: "click.dismiss" + nn, KEYDOWN_DISMISS: "keydown.dismiss" + nn, MOUSEUP_DISMISS: "mouseup.dismiss" + nn, MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn, CLICK_DATA_API: "click" + nn + ".data-api" }, ln = "modal-scrollbar-measure", cn = "modal-backdrop", hn = "modal-open", fn = "fade", un = "show", dn = ".modal-dialog", pn = '[data-toggle="modal"]', gn = '[data-dismiss="modal"]', mn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", vn = ".navbar-toggler", yn = function() {
            function r(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = $e(t).find(dn)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 }
            var t = r.prototype;
            return t.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function(t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    $e(this._element).hasClass(fn) && (this._isTransitioning = !0);
                    var n = $e.Event(an.SHOW, { relatedTarget: t });
                    $e(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $e(document.body).addClass(hn), this._setEscapeEvent(), this._setResizeEvent(), $e(this._element).on(an.CLICK_DISMISS, gn, function(t) { return e.hide(t) }), $e(this._dialog).on(an.MOUSEDOWN_DISMISS, function() { $e(e._element).one(an.MOUSEUP_DISMISS, function(t) { $e(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = $e.Event(an.HIDE);
                    if ($e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = $e(this._element).hasClass(fn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $e(document).off(an.FOCUSIN), $e(this._element).removeClass(un), $e(this._element).off(an.CLICK_DISMISS), $e(this._dialog).off(an.MOUSEDOWN_DISMISS), i) {
                            var r = wt.getTransitionDurationFromElement(this._element);
                            $e(this._element).one(wt.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() { $e.removeData(this._element, en), $e(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, t.handleUpdate = function() { this._adjustDialog() }, t._getConfig = function(t) { return t = c({}, on, t), wt.typeCheckConfig(tn, t, sn), t }, t._showElement = function(t) {
                var e = this,
                    n = $e(this._element).hasClass(fn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && wt.reflow(this._element), $e(this._element).addClass(un), this._config.focus && this._enforceFocus();
                var i = $e.Event(an.SHOWN, { relatedTarget: t }),
                    r = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, $e(e._element).trigger(i) };
                if (n) {
                    var o = wt.getTransitionDurationFromElement(this._element);
                    $e(this._dialog).one(wt.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, t._enforceFocus = function() {
                var e = this;
                $e(document).off(an.FOCUSIN).on(an.FOCUSIN, function(t) { document !== t.target && e._element !== t.target && 0 === $e(e._element).has(t.target).length && e._element.focus() })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? $e(this._element).on(an.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || $e(this._element).off(an.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? $e(window).on(an.RESIZE, function(t) { return e.handleUpdate(t) }) : $e(window).off(an.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { $e(document.body).removeClass(hn), t._resetAdjustments(), t._resetScrollbar(), $e(t._element).trigger(an.HIDDEN) })
            }, t._removeBackdrop = function() { this._backdrop && ($e(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function(t) {
                var e = this,
                    n = $e(this._element).hasClass(fn) ? fn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = cn, n && $e(this._backdrop).addClass(n), $e(this._backdrop).appendTo(document.body), $e(this._element).on(an.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && wt.reflow(this._backdrop), $e(this._backdrop).addClass(un), !t) return;
                    if (!n) return void t();
                    var i = wt.getTransitionDurationFromElement(this._backdrop);
                    $e(this._backdrop).one(wt.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    $e(this._backdrop).removeClass(un);
                    var r = function() { e._removeBackdrop(), t && t() };
                    if ($e(this._element).hasClass(fn)) {
                        var o = wt.getTransitionDurationFromElement(this._backdrop);
                        $e(this._backdrop).one(wt.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    $e(mn).each(function(t, e) {
                        var n = $e(e)[0].style.paddingRight,
                            i = $e(e).css("padding-right");
                        $e(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), $e(_n).each(function(t, e) {
                        var n = $e(e)[0].style.marginRight,
                            i = $e(e).css("margin-right");
                        $e(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    }), $e(vn).each(function(t, e) {
                        var n = $e(e)[0].style.marginRight,
                            i = $e(e).css("margin-right");
                        $e(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight,
                        e = $e(document.body).css("padding-right");
                    $e(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function() {
                $e(mn).each(function(t, e) {
                    var n = $e(e).data("padding-right");
                    void 0 !== n && $e(e).css("padding-right", n).removeData("padding-right")
                }), $e(_n + ", " + vn).each(function(t, e) {
                    var n = $e(e).data("margin-right");
                    void 0 !== n && $e(e).css("margin-right", n).removeData("margin-right")
                });
                var t = $e(document.body).data("padding-right");
                void 0 !== t && $e(document.body).css("padding-right", t).removeData("padding-right")
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = ln, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = $e(this).data(en),
                        e = c({}, on, $e(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new r(this, e), $e(this).data(en, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(r, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return on } }]), r
        }(), $e(document).on(an.CLICK_DATA_API, pn, function(t) {
            var e, n = this,
                i = wt.getSelectorFromElement(this);
            i && (e = $e(i)[0]);
            var r = $e(e).data(en) ? "toggle" : c({}, $e(e).data(), $e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var o = $e(e).one(an.SHOW, function(t) { t.isDefaultPrevented() || o.one(an.HIDDEN, function() { $e(n).is(":visible") && n.focus() }) });
            yn._jQueryInterface.call($e(e), r, this)
        }), $e.fn[tn] = yn._jQueryInterface, $e.fn[tn].Constructor = yn, $e.fn[tn].noConflict = function() { return $e.fn[tn] = rn, yn._jQueryInterface }, yn),
        Yi = (bn = "tooltip", Cn = "." + (wn = "bs.tooltip"), Tn = (En = e).fn[bn], Dn = "bs-tooltip", In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"), On = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(An = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(Sn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, kn = "out", xn = { HIDE: "hide" + Cn, HIDDEN: "hidden" + Cn, SHOW: (Nn = "show") + Cn, SHOWN: "shown" + Cn, INSERTED: "inserted" + Cn, CLICK: "click" + Cn, FOCUSIN: "focusin" + Cn, FOCUSOUT: "focusout" + Cn, MOUSEENTER: "mouseenter" + Cn, MOUSELEAVE: "mouseleave" + Cn }, Pn = "fade", Ln = "show", jn = ".tooltip-inner", Hn = ".arrow", Fn = "hover", Mn = "focus", Wn = "click", Rn = "manual", Un = function() {
            function i(t, e) {
                if (void 0 === Ce) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() { this._isEnabled = !0 }, t.disable = function() { this._isEnabled = !1 }, t.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = En(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), En(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (En(this.getTipElement()).hasClass(Ln)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() { clearTimeout(this._timeout), En.removeData(this.element, this.constructor.DATA_KEY), En(this.element).off(this.constructor.EVENT_KEY), En(this.element).closest(".modal").off("hide.bs.modal"), this.tip && En(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function() {
                var e = this;
                if ("none" === En(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = En.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    En(this.element).trigger(t);
                    var n = En.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = wt.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && En(i).addClass(Pn);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : En(this.config.container);
                    En(i).data(this.constructor.DATA_KEY, this), En.contains(this.element.ownerDocument.documentElement, this.tip) || En(i).appendTo(a), En(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ce(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Hn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { e._handlePopperPlacementChange(t) } }), En(i).addClass(Ln), "ontouchstart" in document.documentElement && En(document.body).children().on("mouseover", null, En.noop);
                    var l = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, En(e.element).trigger(e.constructor.Event.SHOWN), t === kn && e._leave(null, e)
                    };
                    if (En(this.tip).hasClass(Pn)) {
                        var c = wt.getTransitionDurationFromElement(this.tip);
                        En(this.tip).one(wt.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = En.Event(this.constructor.Event.HIDE),
                    r = function() { e._hoverState !== Nn && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), En(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() };
                if (En(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (En(n).removeClass(Ln), "ontouchstart" in document.documentElement && En(document.body).children().off("mouseover", null, En.noop), this._activeTrigger[Wn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Fn] = !1, En(this.tip).hasClass(Pn)) {
                        var o = wt.getTransitionDurationFromElement(n);
                        En(n).one(wt.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function() { return Boolean(this.getTitle()) }, t.addAttachmentClass = function(t) { En(this.getTipElement()).addClass(Dn + "-" + t) }, t.getTipElement = function() { return this.tip = this.tip || En(this.config.template)[0], this.tip }, t.setContent = function() {
                var t = En(this.getTipElement());
                this.setElementContent(t.find(jn), this.getTitle()), t.removeClass(Pn + " " + Ln)
            }, t.setElementContent = function(t, e) { var n = this.config.html; "object" == typeof e && (e.nodeType || e.jquery) ? n ? En(e).parent().is(t) || t.empty().append(e) : t.text(En(e).text()) : t[n ? "html" : "text"](e) }, t.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getAttachment = function(t) { return An[t.toUpperCase()] }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) En(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) { return i.toggle(t) });
                    else if (t !== Rn) {
                        var e = t === Fn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Fn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        En(i.element).on(e, i.config.selector, function(t) { return i._enter(t) }).on(n, i.config.selector, function(t) { return i._leave(t) })
                    }
                    En(i.element).closest(".modal").on("hide.bs.modal", function() { return i.hide() })
                }), this.config.selector ? this.config = c({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || En(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), En(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Mn : Fn] = !0), En(e.getTipElement()).hasClass(Ln) || e._hoverState === Nn ? e._hoverState = Nn : (clearTimeout(e._timeout), e._hoverState = Nn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === Nn && e.show() }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || En(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), En(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Mn : Fn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = kn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === kn && e.hide() }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) { return "number" == typeof(t = c({}, this.constructor.Default, En(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), wt.typeCheckConfig(bn, t, this.constructor.DefaultType), t }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = En(this.getTipElement()),
                    e = t.attr("class").match(In);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (En(t).removeClass(Pn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = En(this).data(wn),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), En(this).data(wn, t)), "string" == typeof n)) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return On } }, { key: "NAME", get: function() { return bn } }, { key: "DATA_KEY", get: function() { return wn } }, { key: "Event", get: function() { return xn } }, { key: "EVENT_KEY", get: function() { return Cn } }, { key: "DefaultType", get: function() { return Sn } }]), i
        }(), En.fn[bn] = Un._jQueryInterface, En.fn[bn].Constructor = Un, En.fn[bn].noConflict = function() { return En.fn[bn] = Tn, Un._jQueryInterface }, Un),
        Vi = (Kn = "popover", Yn = "." + (Qn = "bs.popover"), Vn = (Bn = e).fn[Kn], qn = "bs-popover", zn = new RegExp("(^|\\s)" + qn + "\\S+", "g"), Gn = c({}, Yi.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Jn = c({}, Yi.DefaultType, { content: "(string|element|function)" }), Zn = "fade", $n = ".popover-header", ti = ".popover-body", ei = { HIDE: "hide" + Yn, HIDDEN: "hidden" + Yn, SHOW: (Xn = "show") + Yn, SHOWN: "shown" + Yn, INSERTED: "inserted" + Yn, CLICK: "click" + Yn, FOCUSIN: "focusin" + Yn, FOCUSOUT: "focusout" + Yn, MOUSEENTER: "mouseenter" + Yn, MOUSELEAVE: "mouseleave" + Yn }, ni = function(t) {
            var e, n;

            function i() { return t.apply(this, arguments) || this }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(t) { Bn(this.getTipElement()).addClass(qn + "-" + t) }, r.getTipElement = function() { return this.tip = this.tip || Bn(this.config.template)[0], this.tip }, r.setContent = function() {
                var t = Bn(this.getTipElement());
                this.setElementContent(t.find($n), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ti), e), t.removeClass(Zn + " " + Xn)
            }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() {
                var t = Bn(this.getTipElement()),
                    e = t.attr("class").match(zn);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = Bn(this).data(Qn),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Bn(this).data(Qn, t)), "string" == typeof n)) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Gn } }, { key: "NAME", get: function() { return Kn } }, { key: "DATA_KEY", get: function() { return Qn } }, { key: "Event", get: function() { return ei } }, { key: "EVENT_KEY", get: function() { return Yn } }, { key: "DefaultType", get: function() { return Jn } }]), i
        }(Yi), Bn.fn[Kn] = ni._jQueryInterface, Bn.fn[Kn].Constructor = ni, Bn.fn[Kn].noConflict = function() { return Bn.fn[Kn] = Vn, ni._jQueryInterface }, ni),
        qi = (ri = "scrollspy", si = "." + (oi = "bs.scrollspy"), ai = (ii = e).fn[ri], li = { offset: 10, method: "auto", target: "" }, ci = { offset: "number", method: "string", target: "(string|element)" }, hi = { ACTIVATE: "activate" + si, SCROLL: "scroll" + si, LOAD_DATA_API: "load" + si + ".data-api" }, fi = "dropdown-item", ui = "active", di = '[data-spy="scroll"]', pi = ".active", gi = ".nav, .list-group", mi = ".nav-link", _i = ".nav-item", vi = ".list-group-item", yi = ".dropdown", Ei = ".dropdown-item", bi = ".dropdown-toggle", wi = "offset", Ci = "position", Ti = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " a," + this._config.target + " " + mi + "," + this._config.target + " " + vi + "," + this._config.target + " " + Ei, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ii(this._scrollElement).on(hi.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? wi : Ci,
                    r = "auto" === this._config.method ? t : this._config.method,
                    o = r === Ci ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), ii.makeArray(ii(this._selector)).map(function(t) { var e, n = wt.getSelectorFromElement(t); if (n && (e = ii(n)[0]), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [ii(e)[r]().top + o, n] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })
            }, t.dispose = function() { ii.removeData(this._element, oi), ii(this._scrollElement).off(si), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function(t) {
                if ("string" != typeof(t = c({}, li, "object" == typeof t && t ? t : {})).target) {
                    var e = ii(t.target).attr("id");
                    e || (e = wt.getUID(ri), ii(t.target).attr("id", e)), t.target = "#" + e
                }
                return wt.typeCheckConfig(ri, t, ci), t
            }, t._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' });
                var n = ii(t.join(","));
                n.hasClass(fi) ? (n.closest(yi).find(bi).addClass(ui), n.addClass(ui)) : (n.addClass(ui), n.parent().is("li") && n.parent().addClass(ui), n.parents(gi).prev(mi + ", " + vi).addClass(ui), n.parents(gi).prev(_i).children(mi).addClass(ui)), ii(this._scrollElement).trigger(hi.ACTIVATE, { relatedTarget: e })
            }, t._clear = function() { ii(this._selector).filter(pi).removeClass(ui).parent().removeClass(ui) }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = ii(this).data(oi);
                    if (t || (t = new n(this, "object" == typeof e && e), ii(this).data(oi, t)), "string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return li } }]), n
        }(), ii(window).on(hi.LOAD_DATA_API, function() {
            for (var t = ii.makeArray(ii(di)), e = t.length; e--;) {
                var n = ii(t[e]);
                Ti._jQueryInterface.call(n, n.data())
            }
        }), ii.fn[ri] = Ti._jQueryInterface, ii.fn[ri].Constructor = Ti, ii.fn[ri].noConflict = function() { return ii.fn[ri] = ai, Ti._jQueryInterface }, Ti),
        zi = (Si = "." + (Ii = "bs.tab"), Ai = (Di = e).fn.tab, Oi = { HIDE: "hide" + Si, HIDDEN: "hidden" + Si, SHOW: "show" + Si, SHOWN: "shown" + Si, CLICK_DATA_API: "click" + Si + ".data-api" }, Ni = "dropdown-menu", ki = "active", xi = "disabled", Pi = "fade", Li = "show", ji = ".dropdown", Hi = ".nav, .list-group", Fi = ".active", Mi = "> li > .active", Wi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ri = ".dropdown-toggle", Ui = "> .dropdown-menu .active", Bi = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Di(this._element).hasClass(ki) || Di(this._element).hasClass(xi))) {
                    var t, i, e = Di(this._element).closest(Hi)[0],
                        r = wt.getSelectorFromElement(this._element);
                    if (e) {
                        var o = "UL" === e.nodeName ? Mi : Fi;
                        i = (i = Di.makeArray(Di(e).find(o)))[i.length - 1]
                    }
                    var s = Di.Event(Oi.HIDE, { relatedTarget: this._element }),
                        a = Di.Event(Oi.SHOW, { relatedTarget: i });
                    if (i && Di(i).trigger(s), Di(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (t = Di(r)[0]), this._activate(this._element, e);
                        var l = function() {
                            var t = Di.Event(Oi.HIDDEN, { relatedTarget: n._element }),
                                e = Di.Event(Oi.SHOWN, { relatedTarget: i });
                            Di(i).trigger(t), Di(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() { Di.removeData(this._element, Ii), this._element = null }, t._activate = function(t, e, n) {
                var i = this,
                    r = ("UL" === e.nodeName ? Di(e).find(Mi) : Di(e).children(Fi))[0],
                    o = n && r && Di(r).hasClass(Pi),
                    s = function() { return i._transitionComplete(t, r, n) };
                if (r && o) {
                    var a = wt.getTransitionDurationFromElement(r);
                    Di(r).one(wt.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    Di(e).removeClass(Li + " " + ki);
                    var i = Di(e.parentNode).find(Ui)[0];
                    i && Di(i).removeClass(ki), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (Di(t).addClass(ki), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), wt.reflow(t), Di(t).addClass(Li), t.parentNode && Di(t.parentNode).hasClass(Ni)) {
                    var r = Di(t).closest(ji)[0];
                    r && Di(r).find(Ri).addClass(ki), t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = Di(this),
                        e = t.data(Ii);
                    if (e || (e = new i(this), t.data(Ii, e)), "string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), i
        }(), Di(document).on(Oi.CLICK_DATA_API, Wi, function(t) { t.preventDefault(), Bi._jQueryInterface.call(Di(this), "show") }), Di.fn.tab = Bi._jQueryInterface, Di.fn.tab.Constructor = Bi, Di.fn.tab.noConflict = function() { return Di.fn.tab = Ai, Bi._jQueryInterface }, Bi);
    ! function(t) { if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = wt, t.Alert = Ct, t.Button = Tt, t.Carousel = Dt, t.Collapse = It, t.Dropdown = Ki, t.Modal = Qi, t.Popover = Vi, t.Scrollspy = qi, t.Tab = zi, t.Tooltip = Yi, Object.defineProperty(t, "__esModule", { value: !0 })
});
/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
! function(h) {
    "use strict";
    var r = function(t, i) { this.options = h.extend({}, r.DEFAULTS, i), this.$target = h(this.options.target).on("scroll.bs.affix.data-api", h.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", h.proxy(this.checkPositionWithEventLoop, this)), this.$element = h(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };

    function e(o) {
        return this.each(function() {
            var t = h(this),
                i = t.data("bs.affix"),
                e = "object" == typeof o && o;
            i || t.data("bs.affix", i = new r(this, e)), "string" == typeof o && i[o]()
        })
    }
    r.VERSION = "3.3.7", r.RESET = "affix affix-top affix-bottom", r.DEFAULTS = { offset: 0, target: window }, r.prototype.getState = function(t, i, e, o) {
        var f = this.$target.scrollTop(),
            n = this.$element.offset(),
            s = this.$target.height();
        if (null != e && "top" == this.affixed) return f < e && "top";
        if ("bottom" == this.affixed) return null != e ? !(f + this.unpin <= n.top) && "bottom" : !(f + s <= t - o) && "bottom";
        var a = null == this.affixed,
            h = a ? f : n.top;
        return null != e && f <= e ? "top" : null != o && t - o <= h + (a ? s : i) && "bottom"
    }, r.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(r.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, r.prototype.checkPositionWithEventLoop = function() { setTimeout(h.proxy(this.checkPosition, this), 1) }, r.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                e = i.top,
                o = i.bottom,
                f = Math.max(h(document).height(), h(document.body).height());
            "object" != typeof i && (o = e = i), "function" == typeof e && (e = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var n = this.getState(f, t, e, o);
            if (this.affixed != n) {
                null != this.unpin && this.$element.css("top", "");
                var s = "affix" + (n ? "-" + n : ""),
                    a = h.Event(s + ".bs.affix");
                if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                this.affixed = n, this.unpin = "bottom" == n ? this.getPinnedOffset() : null, this.$element.removeClass(r.RESET).addClass(s).trigger(s.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == n && this.$element.offset({ top: f - t - o })
        }
    };
    var t = h.fn.affix;
    h.fn.affix = e, h.fn.affix.Constructor = r, h.fn.affix.noConflict = function() { return h.fn.affix = t, this }, h(window).on("load", function() {
        h('[data-spy="affix"]').each(function() {
            var t = h(this),
                i = t.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(t, i)
        })
    })
}(jQuery);
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
! function(f) {
    var n = [],
        o = !1,
        p = !1,
        s = { interval: 250, force_process: !1 },
        u = f(window),
        c = [];

    function l() {
        p = !1;
        for (var e = 0, r = n.length; e < r; e++) {
            var t = (a = n[e], f(a).filter(function() { return f(this).is(":appeared") }));
            if (t.trigger("appear", [t]), c[e]) {
                var i = c[e].not(t);
                i.trigger("disappear", [i])
            }
            c[e] = t
        }
        var a
    }
    f.expr[":"].appeared = function(e) {
        var r = f(e);
        if (!r.is(":visible")) return !1;
        var t = u.scrollLeft(),
            i = u.scrollTop(),
            a = r.offset(),
            n = a.left,
            o = a.top;
        return o + r.height() >= i && o - (r.data("appear-top-offset") || 0) <= i + u.height() && n + r.width() >= t && n - (r.data("appear-left-offset") || 0) <= t + u.width()
    }, f.fn.extend({
        appear: function(e) {
            var r, t = f.extend({}, s, e || {}),
                i = this.selector || this;
            if (!o) {
                var a = function() { p || (p = !0, setTimeout(l, t.interval)) };
                f(window).scroll(a).resize(a), o = !0
            }
            return t.force_process && setTimeout(l, t.interval), r = i, n.push(r), c.push(), f(i)
        }
    }), f.extend({ force_appear: function() { return !!o && (l(), !0) } })
}("undefined" != typeof module ? require("jquery") : jQuery);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery) }(function(x) {
    var i = /\+/g;

    function l(e) { return k.raw ? e : encodeURIComponent(e) }

    function v(e, n) { var o = k.raw ? e : function(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(i, " ")), k.json ? JSON.parse(e) : e } catch (e) {} }(e); return x.isFunction(n) ? n(o) : o }
    var k = x.cookie = function(e, n, o) {
        if (1 < arguments.length && !x.isFunction(n)) {
            if ("number" == typeof(o = x.extend({}, k.defaults, o)).expires) {
                var i = o.expires,
                    r = o.expires = new Date;
                r.setTime(+r + 864e5 * i)
            }
            return document.cookie = [l(e), "=", (t = n, l(k.json ? JSON.stringify(t) : String(t))), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
        }
        for (var t, c, u = e ? void 0 : {}, a = document.cookie ? document.cookie.split("; ") : [], d = 0, f = a.length; d < f; d++) {
            var p = a[d].split("="),
                s = (c = p.shift(), k.raw ? c : decodeURIComponent(c)),
                m = p.join("=");
            if (e && e === s) { u = v(m, n); break }
            e || void 0 === (m = v(m)) || (u[s] = m)
        }
        return u
    };
    k.defaults = {}, x.removeCookie = function(e, n) { return void 0 !== x.cookie(e) && (x.cookie(e, "", x.extend({}, n, { expires: -1 })), !x.cookie(e)) }
});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, u, a) { return jQuery.easing[jQuery.easing.def](n, e, t, u, a) },
    easeInQuad: function(n, e, t, u, a) { return u * (e /= a) * e + t },
    easeOutQuad: function(n, e, t, u, a) { return -u * (e /= a) * (e - 2) + t },
    easeInOutQuad: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t },
    easeInCubic: function(n, e, t, u, a) { return u * (e /= a) * e * e + t },
    easeOutCubic: function(n, e, t, u, a) { return u * ((e = e / a - 1) * e * e + 1) + t },
    easeInOutCubic: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t },
    easeInQuart: function(n, e, t, u, a) { return u * (e /= a) * e * e * e + t },
    easeOutQuart: function(n, e, t, u, a) { return -u * ((e = e / a - 1) * e * e * e - 1) + t },
    easeInOutQuart: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t },
    easeInQuint: function(n, e, t, u, a) { return u * (e /= a) * e * e * e * e + t },
    easeOutQuint: function(n, e, t, u, a) { return u * ((e = e / a - 1) * e * e * e * e + 1) + t },
    easeInOutQuint: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t },
    easeInSine: function(n, e, t, u, a) { return -u * Math.cos(e / a * (Math.PI / 2)) + u + t },
    easeOutSine: function(n, e, t, u, a) { return u * Math.sin(e / a * (Math.PI / 2)) + t },
    easeInOutSine: function(n, e, t, u, a) { return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t },
    easeInExpo: function(n, e, t, u, a) { return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t },
    easeOutExpo: function(n, e, t, u, a) { return e == a ? t + u : u * (1 - Math.pow(2, -10 * e / a)) + t },
    easeInOutExpo: function(n, e, t, u, a) { return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (2 - Math.pow(2, -10 * --e)) + t },
    easeInCirc: function(n, e, t, u, a) { return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t },
    easeOutCirc: function(n, e, t, u, a) { return u * Math.sqrt(1 - (e = e / a - 1) * e) + t },
    easeInOutCirc: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t },
    easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * -.5 + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function(n, e, t, u, a, r) { return null == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t },
    easeOutBack: function(n, e, t, u, a, r) { return null == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t },
    easeInOutBack: function(n, e, t, u, a, r) { return null == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : u / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t },
    easeInBounce: function(n, e, t, u, a) { return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t },
    easeOutBounce: function(n, e, t, u, a) { return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t },
    easeInOutBounce: function(n, e, t, u, a) { return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t }
});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery) }(function(a) {
    "use strict";
    var o, r, u = { interval: 100, sensitivity: 6, timeout: 0 },
        s = 0,
        f = function(e) { o = e.pageX, r = e.pageY },
        d = function(e, t, n, i) {
            if (Math.sqrt((n.pX - o) * (n.pX - o) + (n.pY - r) * (n.pY - r)) < i.sensitivity) return t.off(n.event, f), delete n.timeoutId, n.isActive = !0, e.pageX = o, e.pageY = r, delete n.pX, delete n.pY, i.over.apply(t[0], [e]);
            n.pX = o, n.pY = r, n.timeoutId = setTimeout(function() { d(e, t, n, i) }, i.interval)
        };
    a.fn.hoverIntent = function(e, t, n) {
        var i = s++,
            v = a.extend({}, u);
        a.isPlainObject(e) ? (v = a.extend(v, e), a.isFunction(v.out) || (v.out = v.over)) : v = a.isFunction(t) ? a.extend(v, { over: e, out: t, selector: n }) : a.extend(v, { over: e, out: e, selector: t });
        var o = function(e) {
            var o = a.extend({}, e),
                r = a(this),
                t = r.data("hoverIntent");
            t || r.data("hoverIntent", t = {});
            var u = t[i];
            u || (t[i] = u = { id: i }), u.timeoutId && (u.timeoutId = clearTimeout(u.timeoutId));
            var n = u.event = "mousemove.hoverIntent.hoverIntent" + i;
            if ("mouseenter" === e.type) {
                if (u.isActive) return;
                u.pX = o.pageX, u.pY = o.pageY, r.off(n, f).on(n, f), u.timeoutId = setTimeout(function() { d(o, r, u, v) }, v.interval)
            } else {
                if (!u.isActive) return;
                r.off(n, f), u.timeoutId = setTimeout(function() {
                    var e, t, n, i;
                    e = o, t = r, n = u, i = v.out, delete t.data("hoverIntent")[n.id], i.apply(t[0], [e])
                }, v.timeout)
            }
        };
        return this.on({ "mouseenter.hoverIntent": o, "mouseleave.hoverIntent": o }, v.selector)
    }
});
/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
! function(i, e) {
    "use strict";
    var s, o, r, n, t, a, h, l, p, u, f, c, d, v, m, y, C, w, g = (r = "sf-breadcrumb", n = "sf-js-enabled", t = "sf-with-ul", a = "sf-arrows", (o = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent)) && i("html").css("cursor", "pointer").on("click", i.noop), h = o, l = "behavior" in (s = document.documentElement.style) && "fill" in s && /iemobile/i.test(navigator.userAgent), p = !!e.PointerEvent, u = function(e, s, o) {
        var t = n;
        s.cssArrows && (t += " " + a), e[o ? "addClass" : "removeClass"](t)
    }, f = function(e, s) {
        var o = s ? "addClass" : "removeClass";
        e.children("a")[o](t)
    }, c = function(e) {
        var s = e.css("ms-touch-action"),
            o = e.css("touch-action");
        o = "pan-y" === (o = o || s) ? "auto" : "pan-y", e.css({ "ms-touch-action": o, "touch-action": o })
    }, d = function(e) { return e.closest("." + n) }, v = function(e) { return d(e).data("sfOptions") }, m = function() {
        var e = i(this),
            s = v(e);
        clearTimeout(s.sfTimer), e.siblings().superfish("hide").end().superfish("show")
    }, y = function(e) { e.retainPath = -1 < i.inArray(this[0], e.$path), this.superfish("hide"), this.parents("." + e.hoverClass).length || (e.onIdle.call(d(this)), e.$path.length && i.proxy(m, e.$path)()) }, C = function() {
        var e = i(this),
            s = v(e);
        h ? i.proxy(y, e, s)() : (clearTimeout(s.sfTimer), s.sfTimer = setTimeout(i.proxy(y, e, s), s.delay))
    }, w = function(e) {
        var s = i(this),
            o = v(s),
            t = s.siblings(e.data.popUpSelector);
        if (!1 === o.onHandleTouch.call(t)) return this;
        0 < t.length && t.is(":hidden") && (s.one("click.superfish", !1), "MSPointerDown" === e.type || "pointerdown" === e.type ? s.trigger("focus") : i.proxy(m, s.parent("li"))())
    }, {
        hide: function(e) {
            if (this.length) {
                var s = v(this);
                if (!s) return this;
                var o = !0 === s.retainPath ? s.$path : "",
                    t = this.find("li." + s.hoverClass).add(this).not(o).removeClass(s.hoverClass).children(s.popUpSelector),
                    n = s.speedOut;
                if (e && (t.show(), n = 0), (s.retainPath = !1) === s.onBeforeHide.call(t)) return this;
                t.stop(!0, !0).animate(s.animationOut, n, function() {
                    var e = i(this);
                    s.onHide.call(e)
                })
            }
            return this
        },
        show: function() { var e = v(this); if (!e) return this; var s = this.addClass(e.hoverClass).children(e.popUpSelector); return !1 === e.onBeforeShow.call(s) || s.stop(!0, !0).animate(e.animation, e.speed, function() { e.onShow.call(s) }), this },
        destroy: function() {
            return this.each(function() {
                var e, s = i(this),
                    o = s.data("sfOptions");
                if (!o) return !1;
                e = s.find(o.popUpSelector).parent("li"), clearTimeout(o.sfTimer), u(s, o), f(e), c(s), s.off(".superfish").off(".hoverIntent"), e.children(o.popUpSelector).attr("style", function(e, s) { return s.replace(/display[^;]+;?/g, "") }), o.$path.removeClass(o.hoverClass + " " + r).addClass(o.pathClass), s.find("." + o.hoverClass).removeClass(o.hoverClass), o.onDestroy.call(s), s.removeData("sfOptions")
            })
        },
        init: function(n) {
            return this.each(function() {
                var e = i(this);
                if (e.data("sfOptions")) return !1;
                var s, o = i.extend({}, i.fn.superfish.defaults, n),
                    t = e.find(o.popUpSelector).parent("li");
                o.$path = (s = o, e.find("li." + s.pathClass).slice(0, s.pathLevels).addClass(s.hoverClass + " " + r).filter(function() { return i(this).children(s.popUpSelector).hide().show().length }).removeClass(s.pathClass)), e.data("sfOptions", o), u(e, o, !0), f(t, !0), c(e),
                    function(e, s) {
                        var o = "li:has(" + s.popUpSelector + ")";
                        i.fn.hoverIntent && !s.disableHI ? e.hoverIntent(m, C, o) : e.on("mouseenter.superfish", o, m).on("mouseleave.superfish", o, C);
                        var t = "MSPointerDown.superfish";
                        p && (t = "pointerdown.superfish"), h || (t += " touchend.superfish"), l && (t += " mousedown.superfish"), e.on("focusin.superfish", "li", m).on("focusout.superfish", "li", C).on(t, "a", s, w)
                    }(e, o), t.not("." + r).superfish("hide", !0), o.onInit.call(this)
            })
        }
    });
    i.fn.superfish = function(e, s) { return g[e] ? g[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? i.error("Method " + e + " does not exist on jQuery.fn.superfish") : g.init.apply(this, arguments) }, i.fn.superfish.defaults = { popUpSelector: "ul,.sf-mega", hoverClass: "sfHover", pathClass: "overrideThisToUse", pathLevels: 1, delay: 800, animation: { opacity: "show" }, animationOut: { opacity: "hide" }, speed: "normal", speedOut: "fast", cssArrows: !0, disableHI: !1, onInit: i.noop, onBeforeShow: i.noop, onShow: i.noop, onBeforeHide: i.noop, onHide: i.noop, onIdle: i.noop, onDestroy: i.noop, onHandleTouch: i.noop }
}(jQuery, window);
/*! bootstrap-progressbar v0.9.0 | Copyright (c) 2012-2015 Stephan Groß | MIT license | http://www.minddust.com */
! function(a) {
    "use strict";
    var i = function(t, e) { this.$element = a(t), this.options = a.extend({}, i.defaults, e) };
    i.defaults = { transition_delay: 300, refresh_speed: 50, display_text: "none", use_percentage: !0, percent_format: function(t) { return t + "%" }, amount_format: function(t, e) { return t + " / " + e }, update: a.noop, done: a.noop, fail: a.noop }, i.prototype.transition = function() {
        var r = this.$element,
            o = r.parent(),
            h = this.$back_text,
            d = this.$front_text,
            f = this.options,
            p = parseInt(r.attr("data-transitiongoal")),
            c = parseInt(r.attr("aria-valuemin")) || 0,
            u = parseInt(r.attr("aria-valuemax")) || 100,
            l = o.hasClass("vertical"),
            g = f.update && "function" == typeof f.update ? f.update : i.defaults.update,
            _ = f.done && "function" == typeof f.done ? f.done : i.defaults.done,
            t = f.fail && "function" == typeof f.fail ? f.fail : i.defaults.fail;
        if (isNaN(p)) t("data-transitiongoal not set");
        else {
            var e, x = Math.round(100 * (p - c) / (u - c));
            if ("center" === f.display_text && !h && !d) this.$back_text = h = a("<span>").addClass("progressbar-back-text").prependTo(o), this.$front_text = d = a("<span>").addClass("progressbar-front-text").prependTo(r), l ? (e = o.css("height"), h.css({ height: e, "line-height": e }), d.css({ height: e, "line-height": e }), a(window).resize(function() { e = o.css("height"), h.css({ height: e, "line-height": e }), d.css({ height: e, "line-height": e }) })) : (e = o.css("width"), d.css({ width: e }), a(window).resize(function() { e = o.css("width"), d.css({ width: e }) }));
            setTimeout(function() {
                var t, e, n, s, a;
                l ? r.css("height", x + "%") : r.css("width", x + "%");
                var i = setInterval(function() { s = l ? (n = r.height(), o.height()) : (n = r.width(), o.width()), t = Math.round(100 * n / s), e = Math.round(c + n / s * (u - c)), x <= t && (t = x, e = p, _(r), clearInterval(i)), "none" !== f.display_text && (a = f.use_percentage ? f.percent_format(t) : f.amount_format(e, u, c), "fill" === f.display_text ? r.text(a) : "center" === f.display_text && (h.text(a), d.text(a))), r.attr("aria-valuenow", e), g(t, r) }, f.refresh_speed)
            }, f.transition_delay)
        }
    };
    var t = a.fn.progressbar;
    a.fn.progressbar = function(s) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.progressbar"),
                n = "object" == typeof s && s;
            e && n && a.extend(e.options, n), e || t.data("bs.progressbar", e = new i(this, n)), e.transition()
        })
    }, a.fn.progressbar.Constructor = i, a.fn.progressbar.noConflict = function() { return a.fn.progressbar = t, this }
}(window.jQuery);
/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
! function() {
    "use strict";
    var p = !1;
    window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function e(t) {
        function i() {!p && this._init && this._init.apply(this, arguments) }
        var n = this.prototype;
        p = !0;
        var s = new this;
        for (var o in p = !1, t)
            if ("function" == typeof t[o] && "function" == typeof n[o]) s[o] = function(i, s) {
                return function() {
                    var e = this._super;
                    this._super = function(e) { return n[i].apply(this, e || []) };
                    var t = s.apply(this, arguments);
                    return this._super = e, t
                }
            }(o, t[o]);
            else if ("object" == typeof t[o] && "object" == typeof n[o] && "defaultOptions" === o) {
            var a, r = n[o],
                l = t[o],
                _ = {};
            for (a in r) _[a] = r[a];
            for (a in l) _[a] = l[a];
            s[o] = _
        } else s[o] = t[o];
        return ((i.prototype = s).constructor = i).extend = e, i
    }
}(),
/*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
function($) {
    "use strict";

    function camelCase(e) { return e.replace(/-([a-z])/g, function(e, t) { return t.toUpperCase() }) }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        deepMerge: !0,
        _getMarker: function() { return "is-" + this.name },
        _init: function() {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var o = camelCase(this.name);
            $[o] = this, $.fn[o] = function(t) {
                var i = Array.prototype.slice.call(arguments, 1),
                    s = this,
                    n = this;
                return this.each(function() { if ("string" == typeof t) { if ("_" === t[0] || !$[o][t]) throw "Unknown method: " + t; var e = $[o][t].apply($[o], [this].concat(i)); if (e !== s && void 0 !== e) return n = e, !1 } else $[o]._attach(this, t) }), n
            }
        },
        setDefaults: function(e) { $.extend(this.defaultOptions, e || {}) },
        _attach: function(e, t) {
            if (!(e = $(e)).hasClass(this._getMarker())) {
                e.addClass(this._getMarker()), t = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(e), t || {});
                var i = $.extend({ name: this.name, elem: e, options: t }, this._instSettings(e, t));
                e.data(this.name, i), this._postAttach(e, i), this.option(e, t)
            }
        },
        _instSettings: function(e, t) { return {} },
        _postAttach: function(e, t) {},
        _getMetadata: function(elem) {
            try {
                var data = elem.data(this.name.toLowerCase()) || "";
                for (var key in data = data.replace(/(\\?)'/g, function(e, t) { return t ? "'" : '"' }).replace(/([a-zA-Z0-9]+):/g, function(e, t, i) { var s = data.substring(0, i).match(/"/g); return s && s.length % 2 != 0 ? t + ":" : '"' + t + '":' }).replace(/\\:/g, ":"), data = $.parseJSON("{" + data + "}"), data)
                    if (data.hasOwnProperty(key)) { var value = data[key]; "string" == typeof value && value.match(/^new Date\(([-0-9,\s]*)\)$/) && (data[key] = eval(value)) }
                return data
            } catch (e) { return {} }
        },
        _getInst: function(e) { return $(e).data(this.name) || {} },
        option: function(e, t, i) {
            var s = (e = $(e)).data(this.name),
                n = t || {};
            return !t || "string" == typeof t && void 0 === i ? (n = (s || {}).options) && t ? n[t] : n : void(e.hasClass(this._getMarker()) && ("string" == typeof t && ((n = {})[t] = i), this._optionsChanged(e, s, n), $.extend(s.options, n)))
        },
        _optionsChanged: function(e, t, i) {},
        destroy: function(e) {
            (e = $(e)).hasClass(this._getMarker()) && (this._preDestroy(e, this._getInst(e)), e.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function(e, t) {}
    }), $.JQPlugin = {
        createPlugin: function(e, t) {
            "object" == typeof e && (t = e, e = "JQPlugin"), e = camelCase(e);
            var i = camelCase(t.name);
            JQClass.classes[i] = JQClass.classes[e].extend(t), new JQClass.classes[i]
        }
    }
}(jQuery),
function(m) {
    "use strict";
    var e = "countdown";
    m.JQPlugin.createPlugin({
        name: e,
        defaultOptions: { until: null, since: null, timezone: null, serverSync: null, format: "dHMS", layout: "", compact: !1, padZeroes: !1, significant: 0, description: "", expiryUrl: "", expiryText: "", alwaysExpire: !1, onExpiry: null, onTick: null, tickInterval: 1 },
        regionalOptions: { "": { labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"], labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"], compactLabels: ["y", "m", "w", "d"], whichLabels: null, digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], timeSeparator: ":", isRTL: !1 } },
        _rtlClass: e + "-rtl",
        _sectionClass: e + "-section",
        _amountClass: e + "-amount",
        _periodClass: e + "-period",
        _rowClass: e + "-row",
        _holdingClass: e + "-holding",
        _showClass: e + "-show",
        _descrClass: e + "-descr",
        _timerElems: [],
        _init: function() {
            var s = this;
            this._super(), this._serverSyncs = [];
            var n = "function" == typeof Date.now ? Date.now : function() { return (new Date).getTime() },
                o = window.performance && "function" == typeof window.performance.now,
                a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                r = 0;
            !a || m.noRequestAnimationFrame ? (m.noRequestAnimationFrame = null, m.countdown._timer = setInterval(function() { s._updateElems() }, 1e3)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(), a(function e(t) {
                var i = t < 1e12 ? o ? window.performance.now() + window.performance.timing.navigationStart : n() : t || n();
                1e3 <= i - r && (s._updateElems(), r = i), a(e)
            }))
        },
        UTCDate: function(e, t, i, s, n, o, a, r) { "object" == typeof t && t instanceof Date && (r = t.getMilliseconds(), a = t.getSeconds(), o = t.getMinutes(), n = t.getHours(), s = t.getDate(), i = t.getMonth(), t = t.getFullYear()); var l = new Date; return l.setUTCFullYear(t), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(s || 1), l.setUTCHours(n || 0), l.setUTCMinutes((o || 0) - (Math.abs(e) < 30 ? 60 * e : e)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(r || 0), l },
        periodsToSeconds: function(e) { return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6] },
        resync: function() {
            var n = this;
            m("." + this._getMarker()).each(function() {
                var e = m.data(this, n.name);
                if (e.options.serverSync) {
                    for (var t = null, i = 0; i < n._serverSyncs.length; i++)
                        if (n._serverSyncs[i][0] === e.options.serverSync) { t = n._serverSyncs[i]; break }
                    if (n._eqNull(t[2])) {
                        var s = m.isFunction(e.options.serverSync) ? e.options.serverSync.apply(this, []) : null;
                        t[2] = (s ? (new Date).getTime() - s.getTime() : 0) - t[1]
                    }
                    e._since && e._since.setMilliseconds(e._since.getMilliseconds() + t[2]), e._until.setMilliseconds(e._until.getMilliseconds() + t[2])
                }
            });
            for (var e = 0; e < n._serverSyncs.length; e++) n._eqNull(n._serverSyncs[e][2]) || (n._serverSyncs[e][1] += n._serverSyncs[e][2], delete n._serverSyncs[e][2])
        },
        _instSettings: function(e, t) { return { _periods: [0, 0, 0, 0, 0, 0, 0] } },
        _addElem: function(e) { this._hasElem(e) || this._timerElems.push(e) },
        _hasElem: function(e) { return -1 < m.inArray(e, this._timerElems) },
        _removeElem: function(t) { this._timerElems = m.map(this._timerElems, function(e) { return e === t ? null : e }) },
        _updateElems: function() { for (var e = this._timerElems.length - 1; 0 <= e; e--) this._updateCountdown(this._timerElems[e]) },
        _optionsChanged: function(e, t, i) {
            i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(t.options, i);
            var s = t.options.timezone !== i.timezone;
            m.extend(t.options, i), this._adjustSettings(e, t, !this._eqNull(i.until) || !this._eqNull(i.since) || s);
            var n = new Date;
            (t._since && t._since < n || t._until && t._until > n) && this._addElem(e[0]), this._updateCountdown(e, t)
        },
        _updateCountdown: function(e, t) {
            if (e = e.jquery ? e : m(e), t = t || this._getInst(e)) {
                if (e.html(this._generateHTML(t)).toggleClass(this._rtlClass, t.options.isRTL), "pause" !== t._hold && m.isFunction(t.options.onTick)) {
                    var i = "lap" !== t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
                    1 !== t.options.tickInterval && this.periodsToSeconds(i) % t.options.tickInterval != 0 || t.options.onTick.apply(e[0], [i])
                }
                if ("pause" !== t._hold && (t._since ? t._now.getTime() < t._since.getTime() : t._now.getTime() >= t._until.getTime()) && !t._expiring) {
                    if (t._expiring = !0, this._hasElem(e[0]) || t.options.alwaysExpire) {
                        if (this._removeElem(e[0]), m.isFunction(t.options.onExpiry) && t.options.onExpiry.apply(e[0], []), t.options.expiryText) {
                            var s = t.options.layout;
                            t.options.layout = t.options.expiryText, this._updateCountdown(e[0], t), t.options.layout = s
                        }
                        t.options.expiryUrl && (window.location = t.options.expiryUrl)
                    }
                    t._expiring = !1
                } else "pause" === t._hold && this._removeElem(e[0])
            }
        },
        _resetExtraLabels: function(e, t) { var i = null; for (i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && (e[i] = t[i]); for (i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && void 0 === t[i] && (e[i] = null) },
        _eqNull: function(e) { return null == e },
        _adjustSettings: function(e, t, i) {
            for (var s = null, n = 0; n < this._serverSyncs.length; n++)
                if (this._serverSyncs[n][0] === t.options.serverSync) { s = this._serverSyncs[n][1]; break }
            var o = null,
                a = null;
            if (this._eqNull(s)) {
                var r = m.isFunction(t.options.serverSync) ? t.options.serverSync.apply(e[0], []) : null;
                o = new Date, a = r ? o.getTime() - r.getTime() : 0, this._serverSyncs.push([t.options.serverSync, a])
            } else o = new Date, a = t.options.serverSync ? s : 0;
            var l = t.options.timezone;
            l = this._eqNull(l) ? -o.getTimezoneOffset() : l, (i || !i && this._eqNull(t._until) && this._eqNull(t._since)) && (t._since = t.options.since, this._eqNull(t._since) || (t._since = this.UTCDate(l, this._determineTime(t._since, null)), t._since && a && t._since.setMilliseconds(t._since.getMilliseconds() + a)), t._until = this.UTCDate(l, this._determineTime(t.options.until, o)), a && t._until.setMilliseconds(t._until.getMilliseconds() + a)), t._show = this._determineShow(t)
        },
        _preDestroy: function(e, t) { this._removeElem(e[0]), e.empty() },
        pause: function(e) { this._hold(e, "pause") },
        lap: function(e) { this._hold(e, "lap") },
        resume: function(e) { this._hold(e, null) },
        toggle: function(e) { this[(m.data(e, this.name) || {})._hold ? "resume" : "pause"](e) },
        toggleLap: function(e) { this[(m.data(e, this.name) || {})._hold ? "resume" : "lap"](e) },
        _hold: function(e, t) {
            var i = m.data(e, this.name);
            if (i) {
                if ("pause" === i._hold && !t) {
                    i._periods = i._savePeriods;
                    var s = i._since ? "-" : "+";
                    i[i._since ? "_since" : "_until"] = this._determineTime(s + i._periods[0] + "y" + s + i._periods[1] + "o" + s + i._periods[2] + "w" + s + i._periods[3] + "d" + s + i._periods[4] + "h" + s + i._periods[5] + "m" + s + i._periods[6] + "s"), this._addElem(e)
                }
                i._hold = t, i._savePeriods = "pause" === t ? i._periods : null, m.data(e, this.name, i), this._updateCountdown(e, i)
            }
        },
        getTimes: function(e) { var t = m.data(e, this.name); return t ? "pause" === t._hold ? t._savePeriods : t._hold ? this._calculatePeriods(t, t._show, t.options.significant, new Date) : t._periods : null },
        _determineTime: function(e, t) {
            var i, s, p = this,
                n = this._eqNull(e) ? t : "string" == typeof e ? function(e) {
                    e = e.toLowerCase();
                    for (var t = new Date, i = t.getFullYear(), s = t.getMonth(), n = t.getDate(), o = t.getHours(), a = t.getMinutes(), r = t.getSeconds(), l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, _ = l.exec(e); _;) {
                        switch (_[2] || "s") {
                            case "s":
                                r += parseInt(_[1], 10);
                                break;
                            case "m":
                                a += parseInt(_[1], 10);
                                break;
                            case "h":
                                o += parseInt(_[1], 10);
                                break;
                            case "d":
                                n += parseInt(_[1], 10);
                                break;
                            case "w":
                                n += 7 * parseInt(_[1], 10);
                                break;
                            case "o":
                                s += parseInt(_[1], 10), n = Math.min(n, p._getDaysInMonth(i, s));
                                break;
                            case "y":
                                i += parseInt(_[1], 10), n = Math.min(n, p._getDaysInMonth(i, s))
                        }
                        _ = l.exec(e)
                    }
                    return new Date(i, s, n, o, a, r, 0)
                }(e) : "number" == typeof e ? (i = e, (s = new Date).setTime(s.getTime() + 1e3 * i), s) : e;
            return n && n.setMilliseconds(0), n
        },
        _getDaysInMonth: function(e, t) { return 32 - new Date(e, t, 32).getDate() },
        _normalLabels: function(e) { return e },
        _generateHTML: function(i) {
            var s = this;
            i._periods = i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
            var e = !1,
                t = 0,
                n = i.options.significant,
                o = m.extend({}, i._show),
                a = null;
            for (a = 0; a <= 6; a++) e = e || "?" === i._show[a] && 0 < i._periods[a], o[a] = "?" !== i._show[a] || e ? i._show[a] : null, t += o[a] ? 1 : 0, n -= 0 < i._periods[a] ? 1 : 0;
            var r = [!1, !1, !1, !1, !1, !1, !1];
            for (a = 6; 0 <= a; a--) i._show[a] && (i._periods[a] ? r[a] = !0 : (r[a] = 0 < n, n--));
            var l = i.options.compact ? i.options.compactLabels : i.options.labels,
                _ = i.options.whichLabels || this._normalLabels,
                p = function(e) { var t = i.options["compactLabels" + _(i._periods[e])]; return o[e] ? s._translateDigits(i, i._periods[e]) + (t ? t[e] : l[e]) + " " : "" },
                c = i.options.padZeroes ? 2 : 1,
                u = function(e) { var t = i.options["labels" + _(i._periods[e])]; return !i.options.significant && o[e] || i.options.significant && r[e] ? '<span class="' + s._sectionClass + '"><span class="' + s._amountClass + '">' + s._minDigits(i, i._periods[e], c) + '</span><span class="' + s._periodClass + '">' + (t ? t[e] : l[e]) + "</span></span>" : "" };
            return i.options.layout ? this._buildLayout(i, o, i.options.layout, i.options.compact, i.options.significant, r) : (i.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (i._hold ? " " + this._holdingClass : "") + '">' + p(0) + p(1) + p(2) + p(3) + (o[4] ? this._minDigits(i, i._periods[4], 2) : "") + (o[5] ? (o[4] ? i.options.timeSeparator : "") + this._minDigits(i, i._periods[5], 2) : "") + (o[6] ? (o[4] || o[5] ? i.options.timeSeparator : "") + this._minDigits(i, i._periods[6], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (i.options.significant || t) + (i._hold ? " " + this._holdingClass : "") + '">' + u(0) + u(1) + u(2) + u(3) + u(4) + u(5) + u(6)) + "</span>" + (i.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + i.options.description + "</span>" : "")
        },
        _buildLayout: function(i, e, t, s, n, o) {
            for (var a = i.options[s ? "compactLabels" : "labels"], r = i.options.whichLabels || this._normalLabels, l = function(e) { return (i.options[(s ? "compactLabels" : "labels") + r(i._periods[e])] || a)[e] }, _ = function(e, t) { return i.options.digits[Math.floor(e / t) % 10] }, p = { desc: i.options.description, sep: i.options.timeSeparator, yl: l(0), yn: this._minDigits(i, i._periods[0], 1), ynn: this._minDigits(i, i._periods[0], 2), ynnn: this._minDigits(i, i._periods[0], 3), y1: _(i._periods[0], 1), y10: _(i._periods[0], 10), y100: _(i._periods[0], 100), y1000: _(i._periods[0], 1e3), ol: l(1), on: this._minDigits(i, i._periods[1], 1), onn: this._minDigits(i, i._periods[1], 2), onnn: this._minDigits(i, i._periods[1], 3), o1: _(i._periods[1], 1), o10: _(i._periods[1], 10), o100: _(i._periods[1], 100), o1000: _(i._periods[1], 1e3), wl: l(2), wn: this._minDigits(i, i._periods[2], 1), wnn: this._minDigits(i, i._periods[2], 2), wnnn: this._minDigits(i, i._periods[2], 3), w1: _(i._periods[2], 1), w10: _(i._periods[2], 10), w100: _(i._periods[2], 100), w1000: _(i._periods[2], 1e3), dl: l(3), dn: this._minDigits(i, i._periods[3], 1), dnn: this._minDigits(i, i._periods[3], 2), dnnn: this._minDigits(i, i._periods[3], 3), d1: _(i._periods[3], 1), d10: _(i._periods[3], 10), d100: _(i._periods[3], 100), d1000: _(i._periods[3], 1e3), hl: l(4), hn: this._minDigits(i, i._periods[4], 1), hnn: this._minDigits(i, i._periods[4], 2), hnnn: this._minDigits(i, i._periods[4], 3), h1: _(i._periods[4], 1), h10: _(i._periods[4], 10), h100: _(i._periods[4], 100), h1000: _(i._periods[4], 1e3), ml: l(5), mn: this._minDigits(i, i._periods[5], 1), mnn: this._minDigits(i, i._periods[5], 2), mnnn: this._minDigits(i, i._periods[5], 3), m1: _(i._periods[5], 1), m10: _(i._periods[5], 10), m100: _(i._periods[5], 100), m1000: _(i._periods[5], 1e3), sl: l(6), sn: this._minDigits(i, i._periods[6], 1), snn: this._minDigits(i, i._periods[6], 2), snnn: this._minDigits(i, i._periods[6], 3), s1: _(i._periods[6], 1), s10: _(i._periods[6], 10), s100: _(i._periods[6], 100), s1000: _(i._periods[6], 1e3) }, c = t, u = 0; u <= 6; u++) {
                var h = "yowdhms".charAt(u),
                    d = new RegExp("\\{" + h + "<\\}([\\s\\S]*)\\{" + h + ">\\}", "g");
                c = c.replace(d, !n && e[u] || n && o[u] ? "$1" : "")
            }
            return m.each(p, function(e, t) {
                var i = new RegExp("\\{" + e + "\\}", "g");
                c = c.replace(i, t)
            }), c
        },
        _minDigits: function(e, t, i) { return (t = "" + t).length >= i ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - i))) },
        _translateDigits: function(t, e) { return ("" + e).replace(/[0-9]/g, function(e) { return t.options.digits[e] }) },
        _determineShow: function(e) {
            var t = e.options.format,
                i = [];
            return i[0] = t.match("y") ? "?" : t.match("Y") ? "!" : null, i[1] = t.match("o") ? "?" : t.match("O") ? "!" : null, i[2] = t.match("w") ? "?" : t.match("W") ? "!" : null, i[3] = t.match("d") ? "?" : t.match("D") ? "!" : null, i[4] = t.match("h") ? "?" : t.match("H") ? "!" : null, i[5] = t.match("m") ? "?" : t.match("M") ? "!" : null, i[6] = t.match("s") ? "?" : t.match("S") ? "!" : null, i
        },
        _calculatePeriods: function(e, i, t, s) {
            e._now = s, e._now.setMilliseconds(0);
            var n = new Date(e._now.getTime());
            e._since ? s.getTime() < e._since.getTime() ? e._now = s = n : s = e._since : (n.setTime(e._until.getTime()), s.getTime() > e._until.getTime() && (e._now = s = n));
            var o = [0, 0, 0, 0, 0, 0, 0];
            if (i[0] || i[1]) {
                var a = this._getDaysInMonth(s.getFullYear(), s.getMonth()),
                    r = this._getDaysInMonth(n.getFullYear(), n.getMonth()),
                    l = n.getDate() === s.getDate() || n.getDate() >= Math.min(a, r) && s.getDate() >= Math.min(a, r),
                    _ = function(e) { return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds() },
                    p = Math.max(0, 12 * (n.getFullYear() - s.getFullYear()) + n.getMonth() - s.getMonth() + (n.getDate() < s.getDate() && !l || l && _(n) < _(s) ? -1 : 0));
                o[0] = i[0] ? Math.floor(p / 12) : 0, o[1] = i[1] ? p - 12 * o[0] : 0;
                var c = (s = new Date(s.getTime())).getDate() === a,
                    u = this._getDaysInMonth(s.getFullYear() + o[0], s.getMonth() + o[1]);
                s.getDate() > u && s.setDate(u), s.setFullYear(s.getFullYear() + o[0]), s.setMonth(s.getMonth() + o[1]), c && s.setDate(u)
            }
            var h = Math.floor((n.getTime() - s.getTime()) / 1e3),
                d = null,
                m = function(e, t) { o[e] = i[e] ? Math.floor(h / t) : 0, h -= o[e] * t };
            if (m(2, 604800), m(3, 86400), m(4, 3600), m(5, 60), m(6, 1), 0 < h && !e._since) {
                var g = [1, 12, 4.3482, 7, 24, 60, 60],
                    f = 6,
                    w = 1;
                for (d = 6; 0 <= d; d--) i[d] && (o[f] >= w && (o[f] = 0, h = 1), 0 < h && (o[d]++, h = 0, f = d, w = 1)), w *= g[d]
            }
            if (t)
                for (d = 0; d <= 6; d++) t && o[d] ? t-- : t || (o[d] = 0);
            return o
        }
    })
}(jQuery);
! function(s) {
    s.fn.countTo = function(c) {
        return c = c || {}, s(this).each(function() {
            var a = s.extend({}, s.fn.countTo.defaults, { from: s(this).data("from"), to: s(this).data("to"), speed: s(this).data("speed"), refreshInterval: s(this).data("refresh-interval"), decimals: s(this).data("decimals") }, c),
                t = Math.ceil(a.speed / a.refreshInterval),
                e = (a.to - a.from) / t,
                n = this,
                o = s(this),
                r = 0,
                l = a.from,
                f = o.data("countTo") || {};

            function i(t) {
                var e = a.formatter.call(n, t, a);
                o.text(e)
            }
            o.data("countTo", f), f.interval && clearInterval(f.interval), f.interval = setInterval(function() {
                r++, i(l += e), "function" == typeof a.onUpdate && a.onUpdate.call(n, l);
                t <= r && (o.removeData("countTo"), clearInterval(f.interval), l = a.to, "function" == typeof a.onComplete && a.onComplete.call(n, l))
            }, a.refreshInterval), i(l)
        })
    }, s.fn.countTo.defaults = { from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: function(t, e) { return t.toFixed(e.decimals) }, onUpdate: null, onComplete: null }
}(jQuery);
! function(e, t) { "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery) }(this, function(n) {
    var o = function(e, o) {
            var n, t = document.createElement("canvas");
            e.appendChild(t), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(t);
            var i = t.getContext("2d");
            t.width = t.height = o.size;
            var a = 1;
            1 < window.devicePixelRatio && (a = window.devicePixelRatio, t.style.width = t.style.height = [o.size, "px"].join(""), t.width = t.height = o.size * a, i.scale(a, a)), i.translate(o.size / 2, o.size / 2), i.rotate((o.rotate / 180 - .5) * Math.PI);
            var r = (o.size - o.lineWidth) / 2;
            o.scaleColor && o.scaleLength && (r -= o.scaleLength + 2), Date.now = Date.now || function() { return +new Date };
            var s = function(e, t, n) {
                    var a = (n = Math.min(Math.max(-1, n || 0), 1)) <= 0;
                    i.beginPath(), i.arc(0, 0, r, 0, 2 * Math.PI * n, a), i.strokeStyle = e, i.lineWidth = t, i.stroke()
                },
                d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) { window.setTimeout(e, 1e3 / 60) },
                h = function() {
                    o.scaleColor && function() {
                        var e, t;
                        i.lineWidth = 1, i.fillStyle = o.scaleColor, i.save();
                        for (var n = 24; 0 < n; --n) e = n % 6 == 0 ? (t = o.scaleLength, 0) : (t = .6 * o.scaleLength, o.scaleLength - t), i.fillRect(-o.size / 2 + e, 0, t, 1), i.rotate(Math.PI / 12);
                        i.restore()
                    }(), o.trackColor && s(o.trackColor, o.lineWidth, 1)
                };
            this.getCanvas = function() { return t }, this.getCtx = function() { return i }, this.clear = function() { i.clearRect(o.size / -2, o.size / -2, o.size, o.size) }, this.draw = function(e) {
                var t;
                o.scaleColor || o.trackColor ? i.getImageData && i.putImageData ? n ? i.putImageData(n, 0, 0) : (h(), n = i.getImageData(0, 0, o.size * a, o.size * a)) : (this.clear(), h()) : this.clear(), i.lineCap = o.lineCap, t = "function" == typeof o.barColor ? o.barColor(e) : o.barColor, s(t, o.lineWidth, e / 100)
            }.bind(this), this.animate = function(n, a) {
                var i = Date.now();
                o.onStart(n, a);
                var r = function() {
                    var e = Math.min(Date.now() - i, o.animate.duration),
                        t = o.easing(this, e, n, a - n, o.animate.duration);
                    this.draw(t), o.onStep(n, a, t), e >= o.animate.duration ? o.onStop(n, a) : d(r)
                }.bind(this);
                d(r)
            }.bind(this)
        },
        a = function(t, n) {
            var a = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function(e, t, n, a, i) { return (t /= i / 2) < 1 ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n }, onStart: function() {}, onStep: function() {}, onStop: function() {} };
            if (void 0 !== o) a.renderer = o;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                a.renderer = SVGRenderer
            }
            var i = {},
                r = 0,
                e = function() {
                    for (var e in this.el = t, this.options = i, a) a.hasOwnProperty(e) && (i[e] = n && void 0 !== n[e] ? n[e] : a[e], "function" == typeof i[e] && (i[e] = i[e].bind(this)));
                    i.easing = "string" == typeof i.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[i.easing]) ? jQuery.easing[i.easing] : a.easing, "number" == typeof i.animate && (i.animate = { duration: i.animate, enabled: !0 }), "boolean" != typeof i.animate || i.animate || (i.animate = { duration: 1e3, enabled: i.animate }), this.renderer = new i.renderer(t, i), this.renderer.draw(r), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
                }.bind(this);
            this.update = function(e) { return e = parseFloat(e), i.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this }.bind(this), this.disableAnimation = function() { return i.animate.enabled = !1, this }, this.enableAnimation = function() { return i.animate.enabled = !0, this }, e()
        };
    n.fn.easyPieChart = function(t) {
        return this.each(function() {
            var e;
            n.data(this, "easyPieChart") || (e = n.extend({}, t, n(this).data()), n.data(this, "easyPieChart", new a(this, e)))
        })
    }
});
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.11
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
! function(l, e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof exports ? require("jquery") : l.jQuery) }(this, function(b) {
    "use strict";

    function s(l) {
        if (x.webkit && !l) return { height: 0, width: 0 };
        if (!x.data.outer) {
            var e = { border: "none", "box-sizing": "content-box", height: "200px", margin: "0", padding: "0", width: "200px" };
            x.data.inner = b("<div>").css(b.extend({}, e)), x.data.outer = b("<div>").css(b.extend({ left: "-1000px", overflow: "scroll", position: "absolute", top: "-1000px" }, e)).append(x.data.inner).appendTo("body")
        }
        return x.data.outer.scrollLeft(1e3).scrollTop(1e3), { height: Math.ceil(x.data.outer.offset().top - x.data.inner.offset().top || 0), width: Math.ceil(x.data.outer.offset().left - x.data.inner.offset().left || 0) }
    }

    function g(l) { var e = l.originalEvent; return !(e.axis && e.axis === e.HORIZONTAL_AXIS || e.wheelDeltaX) }
    var x = { data: { index: 0, name: "scrollbar" }, firefox: /firefox/i.test(navigator.userAgent), macosx: /mac/i.test(navigator.platform), msedge: /edge\/\d+/i.test(navigator.userAgent), msie: /(msie|trident)/i.test(navigator.userAgent), mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent), overlay: null, scroll: null, scrolls: [], webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent) };
    x.scrolls.add = function(l) { this.remove(l).push(l) };
    var o = { autoScrollSize: !0, autoUpdate: !0, debug: !(x.scrolls.remove = function(l) { for (; 0 <= b.inArray(l, this);) this.splice(b.inArray(l, this), 1); return this }), disableBodyScroll: !1, duration: 200, ignoreMobile: !1, ignoreOverlay: !1, isRtl: !1, scrollStep: 30, showArrows: !1, stepScrolling: !0, scrollx: null, scrolly: null, onDestroy: null, onFallback: null, onInit: null, onScroll: null, onUpdate: null },
        l = function(l) {
            var e;
            x.scroll || (x.overlay = !((e = s(!0)).height || e.width), x.scroll = s(), c(), b(window).resize(function() {
                var l = !1;
                if (x.scroll && (x.scroll.height || x.scroll.width)) {
                    var e = s();
                    e.height === x.scroll.height && e.width === x.scroll.width || (x.scroll = e, l = !0)
                }
                c(l)
            })), this.container = l, this.namespace = ".scrollbar_" + x.data.index++, this.options = b.extend({}, o, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, l.data(x.data.name, this), x.scrolls.add(this)
        };
    l.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(x.data.name), x.scrolls.remove(this);
                var l = this.container.scrollLeft(),
                    e = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({ height: "", margin: "", "max-height": "" }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(l).scrollTop(e), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), b(document).add("body").off(this.namespace), b.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function(l) {
            var u = this,
                p = this.container,
                r = this.containerWrapper || p,
                f = this.namespace,
                v = b.extend(this.options, l || {}),
                m = { x: this.scrollx, y: this.scrolly },
                s = this.wrapper,
                e = {},
                o = { scrollLeft: p.scrollLeft(), scrollTop: p.scrollTop() };
            if (x.mobile && v.ignoreMobile || x.overlay && v.ignoreOverlay || x.macosx && !x.webkit) return b.isFunction(v.onFallback) && v.onFallback.apply(this, [p]), !1;
            if (s)(e = { height: "auto", "margin-bottom": -1 * x.scroll.height + "px", "max-height": "" })[v.isRtl ? "margin-left" : "margin-right"] = -1 * x.scroll.width + "px", r.css(e);
            else {
                if (this.wrapper = s = b("<div>").addClass("scroll-wrapper").addClass(p.attr("class")).css("position", "absolute" === p.css("position") ? "absolute" : "relative").insertBefore(p).append(p), v.isRtl && s.addClass("scroll--rtl"), p.is("textarea") && (this.containerWrapper = r = b("<div>").insertBefore(p).append(p), s.addClass("scroll-textarea")), (e = { height: "auto", "margin-bottom": -1 * x.scroll.height + "px", "max-height": "" })[v.isRtl ? "margin-left" : "margin-right"] = -1 * x.scroll.width + "px", r.addClass("scroll-content").css(e), p.on("scroll" + f, function(l) {
                        var e = p.scrollLeft(),
                            s = p.scrollTop();
                        if (v.isRtl) switch (!0) {
                            case x.firefox:
                                e = Math.abs(e);
                            case x.msedge || x.msie:
                                e = p[0].scrollWidth - p[0].clientWidth - e
                        }
                        b.isFunction(v.onScroll) && v.onScroll.call(u, { maxScroll: m.y.maxScrollOffset, scroll: s, size: m.y.size, visible: m.y.visible }, { maxScroll: m.x.maxScrollOffset, scroll: e, size: m.x.size, visible: m.x.visible }), m.x.isVisible && m.x.scroll.bar.css("left", e * m.x.kx + "px"), m.y.isVisible && m.y.scroll.bar.css("top", s * m.y.kx + "px")
                    }), s.on("scroll" + f, function() { s.scrollTop(0).scrollLeft(0) }), v.disableBodyScroll) {
                    var t = function(l) { g(l) ? m.y.isVisible && m.y.mousewheel(l) : m.x.isVisible && m.x.mousewheel(l) };
                    s.on("MozMousePixelScroll" + f, t), s.on("mousewheel" + f, t), x.mobile && s.on("touchstart" + f, function(l) {
                        var e = l.originalEvent.touches && l.originalEvent.touches[0] || l,
                            s = e.pageX,
                            o = e.pageY,
                            r = p.scrollLeft(),
                            t = p.scrollTop();
                        b(document).on("touchmove" + f, function(l) {
                            var e = l.originalEvent.targetTouches && l.originalEvent.targetTouches[0] || l;
                            p.scrollLeft(r + s - e.pageX), p.scrollTop(t + o - e.pageY), l.preventDefault()
                        }), b(document).on("touchend" + f, function() { b(document).off(f) })
                    })
                }
                b.isFunction(v.onInit) && v.onInit.apply(this, [p])
            }
            b.each(m, function(r, t) {
                var i = null,
                    n = 1,
                    a = "x" === r ? "scrollLeft" : "scrollTop",
                    c = v.scrollStep,
                    d = function() {
                        var l = p[a]();
                        p[a](l + c), 1 == n && h <= l + c && (l = p[a]()), -1 == n && l + c <= h && (l = p[a]()), p[a]() == l && i && i()
                    },
                    h = 0;
                t.scroll || (t.scroll = u._getScroll(v["scroll" + r]).addClass("scroll-" + r), v.showArrows && t.scroll.addClass("scroll-element_arrows_visible"), t.mousewheel = function(l) {
                    if (!t.isVisible || "x" === r && g(l)) return !0;
                    if ("y" === r && !g(l)) return m.x.mousewheel(l), !0;
                    var e = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
                        s = t.size - t.visible - t.offset;
                    return e || ("x" === r && l.originalEvent.deltaX ? e = 40 * l.originalEvent.deltaX : "y" === r && l.originalEvent.deltaY && (e = 40 * l.originalEvent.deltaY)), (0 < e && h < s || e < 0 && 0 < h) && ((h += e) < 0 && (h = 0), s < h && (h = s), u.scrollTo = u.scrollTo || {}, u.scrollTo[a] = h, setTimeout(function() { u.scrollTo && (p.stop().animate(u.scrollTo, 240, "linear", function() { h = p[a]() }), u.scrollTo = null) }, 1)), l.preventDefault(), !1
                }, t.scroll.on("MozMousePixelScroll" + f, t.mousewheel).on("mousewheel" + f, t.mousewheel).on("mouseenter" + f, function() { h = p[a]() }), t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + f, function(l) {
                    if (1 != l.which) return !0;
                    n = 1;
                    var e = { eventOffset: l["x" === r ? "pageX" : "pageY"], maxScrollValue: t.size - t.visible - t.offset, scrollbarOffset: t.scroll.bar.offset()["x" === r ? "left" : "top"], scrollbarSize: t.scroll.bar["x" === r ? "outerWidth" : "outerHeight"]() },
                        s = 0,
                        o = 0;
                    if (b(this).hasClass("scroll-arrow")) {
                        if (n = b(this).hasClass("scroll-arrow_more") ? 1 : -1, c = v.scrollStep * n, h = 0 < n ? e.maxScrollValue : 0, v.isRtl) switch (!0) {
                            case x.firefox:
                                h = 0 < n ? 0 : -1 * e.maxScrollValue;
                                break;
                            case x.msie || x.msedge:
                        }
                    } else n = e.scrollbarOffset + e.scrollbarSize < e.eventOffset ? 1 : e.eventOffset < e.scrollbarOffset ? -1 : 0, "x" === r && v.isRtl && (x.msie || x.msedge) && (n *= -1), c = Math.round(.75 * t.visible) * n, h = e.eventOffset - e.scrollbarOffset - (v.stepScrolling ? 1 == n ? e.scrollbarSize : 0 : Math.round(e.scrollbarSize / 2)), h = p[a]() + h / t.kx;
                    return u.scrollTo = u.scrollTo || {}, u.scrollTo[a] = v.stepScrolling ? p[a]() + c : h, v.stepScrolling && (i = function() { h = p[a](), clearInterval(o), clearTimeout(s), o = s = 0 }, s = setTimeout(function() { o = setInterval(d, 40) }, v.duration + 100)), setTimeout(function() { u.scrollTo && (p.animate(u.scrollTo, v.duration), u.scrollTo = null) }, 1), u._handleMouseDown(i, l)
                }), t.scroll.bar.on("mousedown" + f, function(l) {
                    if (1 != l.which) return !0;
                    var s = l["x" === r ? "pageX" : "pageY"],
                        o = p[a]();
                    return t.scroll.addClass("scroll-draggable"), b(document).on("mousemove" + f, function(l) { var e = parseInt((l["x" === r ? "pageX" : "pageY"] - s) / t.kx, 10); "x" === r && v.isRtl && (x.msie || x.msedge) && (e *= -1), p[a](o + e) }), u._handleMouseDown(function() { t.scroll.removeClass("scroll-draggable"), h = p[a]() }, l)
                }))
            }), b.each(m, function(l, e) {
                var s = "scroll-scroll" + l + "_visible",
                    o = "x" == l ? m.y : m.x;
                e.scroll.removeClass(s), o.scroll.removeClass(s), r.removeClass(s)
            }), b.each(m, function(l, e) { b.extend(e, "x" == l ? { offset: parseInt(p.css("left"), 10) || 0, size: p.prop("scrollWidth"), visible: s.width() } : { offset: parseInt(p.css("top"), 10) || 0, size: p.prop("scrollHeight"), visible: s.height() }) }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), b.isFunction(v.onUpdate) && v.onUpdate.apply(this, [p]), b.each(m, function(l, e) {
                var s = "x" === l ? "left" : "top",
                    o = "x" === l ? "outerWidth" : "outerHeight",
                    r = "x" === l ? "width" : "height",
                    t = parseInt(p.css(s), 10) || 0,
                    i = e.size,
                    n = e.visible + t,
                    a = e.scroll.size[o]() + (parseInt(e.scroll.size.css(s), 10) || 0);
                v.autoScrollSize && (e.scrollbarSize = parseInt(a * n / i, 10), e.scroll.bar.css(r, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[o](), e.kx = (a - e.scrollbarSize) / (i - n) || 1, e.maxScrollOffset = i - n
            }), p.scrollLeft(o.scrollLeft).scrollTop(o.scrollTop).trigger("scroll")
        },
        _getScroll: function(l) { var e = { advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""), simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("") }; return e[l] && (l = e[l]), l || (l = e.simple), l = "string" == typeof l ? b(l).appendTo(this.wrapper) : b(l), b.extend(l, { bar: l.find(".scroll-bar"), size: l.find(".scroll-element_size"), track: l.find(".scroll-element_track") }), l },
        _handleMouseDown: function(l, e) { var s = this.namespace; return b(document).on("blur" + s, function() { b(document).add("body").off(s), l && l() }), b(document).on("dragstart" + s, function(l) { return l.preventDefault(), !1 }), b(document).on("mouseup" + s, function() { b(document).add("body").off(s), l && l() }), b("body").on("selectstart" + s, function(l) { return l.preventDefault(), !1 }), e && e.preventDefault(), !1 },
        _updateScroll: function(l, e) {
            var s = this.container,
                o = this.containerWrapper || s,
                r = "scroll-scroll" + l + "_visible",
                t = "x" === l ? this.scrolly : this.scrollx,
                i = parseInt(this.container.css("x" === l ? "left" : "top"), 10) || 0,
                n = this.wrapper,
                a = e.size,
                c = e.visible + i;
            e.isVisible = 1 < a - c, e.isVisible ? (e.scroll.addClass(r), t.scroll.addClass(r), o.addClass(r)) : (e.scroll.removeClass(r), t.scroll.removeClass(r), o.removeClass(r)), "y" === l && (s.is("textarea") || a < c ? o.css({ height: c + x.scroll.height + "px", "max-height": "none" }) : o.css({ "max-height": c + x.scroll.height + "px" })), e.size == s.prop("scrollWidth") && t.size == s.prop("scrollHeight") && e.visible == n.width() && t.visible == n.height() && e.offset == (parseInt(s.css("left"), 10) || 0) && t.offset == (parseInt(s.css("top"), 10) || 0) || (b.extend(this.scrollx, { offset: parseInt(s.css("left"), 10) || 0, size: s.prop("scrollWidth"), visible: n.width() }), b.extend(this.scrolly, { offset: parseInt(s.css("top"), 10) || 0, size: this.container.prop("scrollHeight"), visible: n.height() }), this._updateScroll("x" === l ? "y" : "x", t))
        }
    };
    var r = l;
    b.fn.scrollbar = function(s, o) {
        return "string" != typeof s && (o = s, s = "init"), void 0 === o && (o = []), b.isArray(o) || (o = [o]), this.not("body, .scroll-wrapper").each(function() {
            var l = b(this),
                e = l.data(x.data.name);
            (e || "init" === s) && (e || (e = new r(l)), e[s] && e[s].apply(e, o))
        }), this
    }, b.fn.scrollbar.options = o;
    var a, t, c = (a = 0, function(l) {
        var e, s, o, r, t, i, n;
        for (e = 0; e < x.scrolls.length; e++) s = (r = x.scrolls[e]).container, o = r.options, t = r.wrapper, i = r.scrollx, n = r.scrolly, (l || o.autoUpdate && t && t.is(":visible") && (s.prop("scrollWidth") != i.size || s.prop("scrollHeight") != n.size || t.width() != i.visible || t.height() != n.visible)) && (r.init(), o.debug && window.console && console.log({ scrollHeight: s.prop("scrollHeight") + ":" + r.scrolly.size, scrollWidth: s.prop("scrollWidth") + ":" + r.scrollx.size, visibleHeight: t.height() + ":" + r.scrolly.visible, visibleWidth: t.width() + ":" + r.scrollx.visible }, !0));
        clearTimeout(a), a = setTimeout(c, 300)
    });
    window.angular && (t = window.angular).module("jQueryScrollbar", []).provider("jQueryScrollbar", function() { var e = o; return { setOptions: function(l) { t.extend(e, l) }, $get: function() { return { options: t.copy(e) } } } }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(r, t) {
        return {
            restrict: "AC",
            link: function(l, e, s) {
                var o = t(s.jqueryScrollbar)(l);
                e.scrollbar(o || r.options).on("$destroy", function() { e.scrollbar("destroy") })
            }
        }
    }])
});
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.0.0
 */
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function(s) {
    function n(e, t, o) {
        var n = t.hash.slice(1),
            i = document.getElementById(n) || document.getElementsByName(n)[0];
        if (i) {
            e && e.preventDefault();
            var a = s(o.target);
            if (!(o.lock && a.is(":animated") || o.onBefore && !1 === o.onBefore(e, i, a))) {
                if (o.stop && a.stop(!0), o.hash) {
                    var l = i.id === n ? "id" : "name",
                        r = s("<a> </a>").attr(l, n).css({ position: "absolute", top: s(window).scrollTop(), left: s(window).scrollLeft() });
                    i[l] = "", s("body").prepend(r), location.hash = t.hash, r.remove(), i[l] = n
                }
                a.scrollTo(i, o).trigger("notify.serialScroll", [i])
            }
        }
    }
    var e = location.href.replace(/#.*/, ""),
        i = s.localScroll = function(e) { s("body").localScroll(e) };
    return i.defaults = { duration: 1e3, axis: "y", event: "click", stop: !0, target: window, autoscroll: !0 }, s.fn.localScroll = function(t) {
        function o() { return !!this.href && !!this.hash && this.href.replace(this.hash, "") === e && (!t.filter || s(this).is(t.filter)) }
        return (t = s.extend({}, i.defaults, t)).autoscroll && t.hash && location.hash && (t.target && window.scrollTo(0, 0), n(0, location, t)), t.lazy ? this.on(t.event, "a,area", function(e) { o.call(this) && n(e, this, t) }) : this.find("a,area").filter(o).bind(t.event, function(e) { n(e, this, t) }).end().end()
    }, i.hash = function() {}, i
});
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(s) {
    "use strict";

    function v(e) { return !e.nodeName || -1 !== s.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) }

    function t(e) { return s.isFunction(e) || s.isPlainObject(e) ? e : { top: e, left: e } }
    var w = s.scrollTo = function(e, t, o) { return s(window).scrollTo(e, t, o) };
    return w.defaults = { axis: "xy", duration: 0, limit: !0 }, s.fn.scrollTo = function(e, o, h) {
        "object" == typeof o && (h = o, o = 0), "function" == typeof h && (h = { onAfter: h }), "max" === e && (e = 9e9), h = s.extend({}, w.defaults, h), o = o || h.duration;
        var x = h.queue && 1 < h.axis.length;
        return x && (o /= 2), h.offset = t(h.offset), h.over = t(h.over), this.each(function() {
            function a(e) {
                var t = s.extend({}, h, { queue: !0, duration: o, complete: e && function() { e.call(c, d, h) } });
                l.animate(m, t)
            }
            if (null !== e) {
                var u, f = v(this),
                    c = f ? this.contentWindow || window : this,
                    l = s(c),
                    d = e,
                    m = {};
                switch (typeof d) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) { d = t(d); break }
                        d = f ? s(d) : s(d, c);
                    case "object":
                        if (0 === d.length) return;
                        (d.is || d.style) && (u = (d = s(d)).offset())
                }
                var p = s.isFunction(h.offset) && h.offset(c, d) || h.offset;
                s.each(h.axis.split(""), function(e, t) {
                    var o = "x" === t ? "Left" : "Top",
                        n = o.toLowerCase(),
                        r = "scroll" + o,
                        i = l[r](),
                        s = w.max(c, t);
                    u ? (m[r] = u[n] + (f ? 0 : i - l.offset()[n]), h.margin && (m[r] -= parseInt(d.css("margin" + o), 10) || 0, m[r] -= parseInt(d.css("border" + o + "Width"), 10) || 0), m[r] += p[n] || 0, h.over[n] && (m[r] += d["x" === t ? "width" : "height"]() * h.over[n])) : (o = d[n], m[r] = o.slice && "%" === o.slice(-1) ? parseFloat(o) / 100 * s : o), h.limit && /^\d+$/.test(m[r]) && (m[r] = m[r] <= 0 ? 0 : Math.min(m[r], s)), !e && 1 < h.axis.length && (i === m[r] ? m = {} : x && (a(h.onAfterFirst), m = {}))
                }), a(h.onAfter)
            }
        })
    }, w.max = function(e, t) {
        var o = "scroll" + (n = "x" === t ? "Width" : "Height");
        if (!v(e)) return e[o] - s(e)[n.toLowerCase()]();
        var n = "client" + n,
            r = (i = e.ownerDocument || e.document).documentElement,
            i = i.body;
        return Math.max(r[o], i[o]) - Math.min(r[n], i[n])
    }, s.Tween.propHooks.scrollLeft = s.Tween.propHooks.scrollTop = {
        get: function(e) { return s(e.elem)[e.prop]() },
        set: function(e) {
            var t = this.get(e);
            if (e.options.interrupt && e._last && e._last !== t) return s(e.elem).stop();
            var o = Math.round(e.now);
            t !== o && (s(e.elem)[e.prop](o), e._last = this.get(e))
        }
    }, w
});
! function(i) {
    i.fn.UItoTop = function(o) {
        var n = i.extend({ text: "To Top", min: 200, inDelay: 600, outDelay: 400, containerID: "toTop", containerHoverID: "toTopHover", scrollSpeed: 1200, easingType: "linear" }, o),
            e = "#" + n.containerID,
            t = "#" + n.containerHoverID;
        i("body").append('<a href="#" id="' + n.containerID + '">' + n.text + "</a>"), i(e).hide().on("click.UItoTop", function() { return i("html, body").animate({ scrollTop: 0 }, n.scrollSpeed, n.easingType), i("#" + n.containerHoverID, this).stop().animate({ opacity: 0 }, n.inDelay, n.easingType), !1 }).prepend('<span id="' + n.containerHoverID + '"></span>').hover(function() { i(t, this).stop().animate({ opacity: 1 }, 600, "linear") }, function() { i(t, this).stop().animate({ opacity: 0 }, 700, "linear") }), i(window).scroll(function() {
            var o = i(window).scrollTop();
            void 0 === document.body.style.maxHeight && i(e).css({ position: "absolute", top: o + i(window).height() - 50 }), o > n.min ? i(e).fadeIn(n.inDelay) : i(e).fadeOut(n.Outdelay)
        })
    }
}(jQuery);
! function(l) {
    var c = l(window),
        f = c.height();
    c.resize(function() { f = c.height() }), l.fn.parallax = function(i, e, n) {
        var r, u, h = l(this);

        function t() {
            var o = c.scrollTop();
            h.each(function() {
                var n = l(this),
                    t = n.offset().top;
                t + r(n) < o || o + f < t || h.css("backgroundPosition", i + " " + Math.round((u - o) * e) + "px")
            })
        }
        h.each(function() { u = h.offset().top }), r = n ? function(n) { return n.outerHeight(!0) } : function(n) { return n.height() }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === n) && (n = !0), c.bind("scroll", t).resize(t), t()
    }
}(jQuery);
/*!
 * Isotope PACKAGED v3.0.3
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
! function(e, i) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery) }(window, function(t, e) {
    "use strict";

    function i(h, n, d) {
        (d = d || e || t.jQuery) && (n.prototype.option || (n.prototype.option = function(t) { d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t)) }), d.fn[h] = function(t) {
            if ("string" != typeof t) return o = t, this.each(function(t, e) {
                var i = d.data(e, h);
                i ? (i.option(o), i._init()) : (i = new n(e, o), d.data(e, h, i))
            }), this;
            var e, s, r, a, u, o, i = l.call(arguments, 1);
            return r = i, u = "$()." + h + '("' + (s = t) + '")', (e = this).each(function(t, e) {
                var i = d.data(e, h);
                if (i) {
                    var o = i[s];
                    if (o && "_" != s.charAt(0)) {
                        var n = o.apply(i, r);
                        a = void 0 === a ? n : a
                    } else f(u + " is not a valid method")
                } else f(h + " not initialized. Cannot call methods, i.e. " + u)
            }), void 0 !== a ? a : e
        }, o(d))
    }

    function o(t) {!t || t && t.bridget || (t.bridget = i) }
    var l = Array.prototype.slice,
        n = t.console,
        f = void 0 === n ? function() {} : function(t) { n.error(t) };
    return o(e || t.jQuery), i
}),
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return -1 == o.indexOf(e) && o.push(e), this
        }
    }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}; return (i[t] = i[t] || {})[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var o = i.indexOf(e); return -1 != o && i.splice(o, 1), this } }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = 0,
                n = i[o];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                var r = s && s[n];
                r && (this.off(t, n), delete s[n]), n.apply(this, e), n = i[o += r ? 0 : 1]
            }
            return this
        }
    }, t
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() {
    "use strict";

    function g(t) { var e = parseFloat(t); return -1 == t.indexOf("%") && !isNaN(e) && e }

    function v(t) { var e = getComputedStyle(t); return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

    function _(t) {
        if (function() {
                if (!x) {
                    x = !0;
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                    var e = document.body || document.documentElement;
                    e.appendChild(t);
                    var i = v(t);
                    _.isBoxSizeOuter = I = 200 == g(i.width), e.removeChild(t)
                }
            }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = v(t);
            if ("none" == e.display) return function() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < S; e++) t[z[e]] = 0; return t }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var o = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < S; n++) {
                var s = z[n],
                    r = e[s],
                    a = parseFloat(r);
                i[s] = isNaN(a) ? 0 : a
            }
            var u = i.paddingLeft + i.paddingRight,
                h = i.paddingTop + i.paddingBottom,
                d = i.marginLeft + i.marginRight,
                l = i.marginTop + i.marginBottom,
                f = i.borderLeftWidth + i.borderRightWidth,
                m = i.borderTopWidth + i.borderBottomWidth,
                c = o && I,
                p = g(e.width);
            !1 !== p && (i.width = p + (c ? 0 : u + f));
            var y = g(e.height);
            return !1 !== y && (i.height = y + (c ? 0 : h + m)), i.innerWidth = i.width - (u + f), i.innerHeight = i.height - (h + m), i.outerWidth = i.width + d, i.outerHeight = i.height + l, i
        }
    }
    var I, i = "undefined" == typeof console ? function() {} : function(t) { console.error(t) },
        z = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        S = z.length,
        x = !1;
    return _
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() { "use strict"; var i = function() { var t = window.Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var o = e[i] + "MatchesSelector"; if (t[o]) return o } }(); return function(t, e) { return t[i](e) } }),
function(e, i) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector) }(window, function(h, s) {
    var d = {
            extend: function(t, e) { for (var i in e) t[i] = e[i]; return t },
            modulo: function(t, e) { return (t % e + e) % e },
            makeArray: function(t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (t && "object" == typeof t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e
            },
            removeFrom: function(t, e) { var i = t.indexOf(e); - 1 != i && t.splice(i, 1) },
            getParent: function(t, e) {
                for (; t != document.body;)
                    if (t = t.parentNode, s(t, e)) return t
            },
            getQueryElement: function(t) { return "string" == typeof t ? document.querySelector(t) : t },
            handleEvent: function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            },
            filterFindElements: function(t, o) {
                t = d.makeArray(t);
                var n = [];
                return t.forEach(function(t) {
                    if (t instanceof HTMLElement) {
                        if (!o) return void n.push(t);
                        s(t, o) && n.push(t);
                        for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) n.push(e[i])
                    }
                }), n
            },
            debounceMethod: function(t, e, o) {
                var n = t.prototype[e],
                    s = e + "Timeout";
                t.prototype[e] = function() {
                    var t = this[s];
                    t && clearTimeout(t);
                    var e = arguments,
                        i = this;
                    this[s] = setTimeout(function() { n.apply(i, e), delete i[s] }, o || 100)
                }
            },
            docReady: function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) },
            toDashed: function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() }
        },
        l = h.console;
    return d.htmlInit = function(a, u) {
        d.docReady(function() {
            var t = d.toDashed(u),
                n = "data-" + t,
                e = document.querySelectorAll("[" + n + "]"),
                i = document.querySelectorAll(".js-" + t),
                o = d.makeArray(e).concat(d.makeArray(i)),
                s = n + "-options",
                r = h.jQuery;
            o.forEach(function(e) {
                var t, i = e.getAttribute(n) || e.getAttribute(s);
                try { t = i && JSON.parse(i) } catch (t) { return void(l && l.error("Error parsing " + n + " on " + e.className + ": " + t)) }
                var o = new a(e, t);
                r && r.data(e, u, o)
            })
        })
    }, d
}),
function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) {
    "use strict";

    function i(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }
    var o = document.documentElement.style,
        n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        r = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[n],
        a = { transform: s, transition: n, transitionDuration: n + "Duration", transitionProperty: n + "Property", transitionDelay: n + "Delay" },
        u = i.prototype = Object.create(t.prototype);
    u.constructor = i, u._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, u.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, u.getSize = function() { this.size = e(this.element) }, u.css = function(t) { var e = this.element.style; for (var i in t) { e[a[i] || i] = t[i] } }, u.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, u.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, u.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, u.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, u._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), !r || this.isTransitioning) {
            var a = t - i,
                u = e - o,
                h = {};
            h.transform = this.getTranslate(a, u), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
        } else this.layoutPosition()
    }, u.getTranslate = function(t, e) { return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)" }, u.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, u.moveTo = u._transitionTo, u.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, u._nonTransition = function(t) { for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, u.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var h = "opacity," + s.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() });
    u.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(r, this, !1)
        }
    }, u.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, u.onotransitionend = function(t) { this.ontransitionend(t) };
    var d = { "-webkit-transform": "transform" };
    u.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = d[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function(t) { for (var e in t) return !1; return !0 }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, u.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1 }, u._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var l = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
    return u.removeTransitionStyles = function() { this.css(l) }, u.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, u.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, u.remove = function() { return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, u.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
    }, u.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, u.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, u.hide = function() {
        this.isHidden = !0, this.css({ display: "" });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
    }, u.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, u.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, i
}),
function(n, s) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, i, o) { return s(n, t, e, i, o) }) : "object" == typeof module && module.exports ? module.exports = s(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = s(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item) }(window, function(t, e, n, s, o) {
    "use strict";

    function r(t, e) {
        var i = s.getQueryElement(t);
        if (i) {
            this.element = i, h && (this.$element = h(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
            var o = ++d;
            this.element.outlayerGUID = o, (l[o] = this)._create(), this._getOption("initLayout") && this.layout()
        } else u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }

    function a(t) {
        function e() { t.apply(this, arguments) }
        return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    var u = t.console,
        h = t.jQuery,
        i = function() {},
        d = 0,
        l = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
    var f = r.prototype;
    s.extend(f, e.prototype), f.option = function(t) { s.extend(this.options, t) }, f._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, f._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize() }, f.reloadItems = function() { this.items = this._itemize(this.element.children) }, f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = new i(e[n], this);
            o.push(s)
        }
        return o
    }, f._filterFindItemElements = function(t) { return s.filterFindElements(t, this.options.itemSelector) }, f.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() { this.getSize() }, f.getSize = function() { this.size = n(this.element) }, f._getMeasurement = function(t, e) {
        var i, o = this.options[t];
        this[t] = o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), i ? n(i)[e] : o) : 0
    }, f.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, f._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, f._layoutItems = function(t, i) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var o = [];
            t.forEach(function(t) {
                var e = this._getItemLayoutPosition(t);
                e.item = t, e.isInstant = i || t.isLayoutInstant, o.push(e)
            }, this), this._processLayoutQueue(o)
        }
    }, f._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, f._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, f.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            return i.length ? (i = parseFloat(i)) * (m[o] || 1) : 0
        }(t), this.stagger)
    }, f._positionItem = function(t, e, i, o, n) { o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i)) }, f._postLayout = function() { this.resizeContainer() }, f.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, f._getContainerSize = i, f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, f._emitCompleteOnItems = function(e, t) {
        function i() { n.dispatchEvent(e + "Complete", null, [t]) }

        function o() {++r == s && i() }
        var n = this,
            s = t.length;
        if (t && s) {
            var r = 0;
            t.forEach(function(t) { t.once(e, o) })
        } else i()
    }, f.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, f.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, f.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) { s.removeFrom(this.stamps, t), this.unignore(t) }, this)
    }, f._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), s.makeArray(t) }, f._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
    }, f._manageStamp = i, f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(t);
        return { left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom }
    }, f.handleEvent = s.handleEvent, f.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, f.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, f.onresize = function() { this.resize() }, s.debounceMethod(r, "onresize", 100), f.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, f.needsResizeLayout = function() { var t = n(this.element); return this.size && t && t.innerWidth !== this.size.innerWidth }, f.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var i = this.updateStagger();
            t.forEach(function(t, e) { t.stagger(e * i), t.reveal() })
        }
    }, f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var i = this.updateStagger();
            t.forEach(function(t, e) { t.stagger(e * i), t.hide() })
        }
    }, f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, f.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, f.getItems = function(t) {
        t = s.makeArray(t);
        var i = [];
        return t.forEach(function(t) {
            var e = this.getItem(t);
            e && i.push(e)
        }, this), i
    }, f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), s.removeFrom(this.items, t) }, this)
    }, f.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) { var e = (t = s.getQueryElement(t)) && t.outlayerGUID; return e && l[e] }, r.create = function(t, e) { var i = a(r); return i.defaults = s.extend({}, r.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = a(o), s.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i };
    var m = { ms: 1, s: 1e3 };
    return r.Item = o, r
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) {
    "use strict";

    function e() { t.Item.apply(this, arguments) }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() { this.id = this.layout.itemGUID++, o.call(this), this.sortData = {} }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() { n.apply(this, arguments), this.css({ display: "" }) }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(e, i) {
    "use strict";

    function o(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = o.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) { n[t] = function() { return i.prototype[t].apply(this.isotope, arguments) } }), n.needsVerticalResizeLayout = function() { var t = e(this.isotope.element); return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight }, n._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, n.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, n.getRowHeight = function() { this.getSegmentSize("row", "Height") }, n.getSegmentSize = function(t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() { var t = this.isotope.filteredItems[0]; return t && t.element && e(t.element) }, n.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, n.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, o.modes = {}, o.create = function(t, e) {
        function i() { o.apply(this, arguments) }
        return (i.prototype = Object.create(n)).constructor = i, e && (i.options = e), o.modes[i.prototype.namespace = t] = i
    }, o
}),
function(t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, h) {
    var e = t.create("masonry");
    return e.compatOptions.fitWidth = "isFitWidth", e.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, e.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                e = t && t.element;
            this.columnWidth = e && h(e).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            n = o / i,
            s = i - o % i;
        n = Math[s && s < 1 ? "round" : "floor"](n), this.cols = Math.max(n, 1)
    }, e.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            e = h(t);
        this.containerWidth = e && e.innerWidth
    }, e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var o = this._getColGroup(i), n = Math.min.apply(Math, o), s = o.indexOf(n), r = { x: this.columnWidth * s, y: n }, a = n + t.size.outerHeight, u = this.cols + 1 - o.length, h = 0; h < u; h++) this.colYs[s + h] = a;
        return r
    }, e.prototype._getColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
            var n = this.colYs.slice(o, o + t);
            e[o] = Math.max.apply(Math, n)
        }
        return e
    }, e.prototype._manageStamp = function(t) {
        var e = h(t),
            i = this._getElementOffset(t),
            o = this._getOption("originLeft") ? i.left : i.right,
            n = o + e.outerWidth,
            s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var r = Math.floor(n / this.columnWidth);
        r -= n % this.columnWidth ? 0 : 1, r = Math.min(this.cols - 1, r);
        for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, u = s; u <= r; u++) this.colYs[u] = Math.max(a, this.colYs[u])
    }, e.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, e.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, e.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) };
    var a = o._getOption;
    return o._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = { x: this.x, y: this.y };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function() { return { height: this.maxY } }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype;
    return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, { x: e, y: i }
    }, i._getContainerSize = function() { return { height: this.y } }, e
}),
function(r, a) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(t, e, i, o, n, s) { return a(r, t, e, i, o, n, s) }) : "object" == typeof module && module.exports ? module.exports = a(r, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode) }(window, function(t, i, e, o, s, n, r) {
    var a = t.jQuery,
        h = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
        d = i.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    d.Item = n, d.LayoutMode = r;
    var u = d.prototype;
    u._create = function() { for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t) }, u.reloadItems = function() { this.itemGUID = 0, i.prototype.reloadItems.call(this) }, u._itemize = function() { for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) { t[e].id = this.itemGUID++ } return this._updateItemsSortData(t), t }, u._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, u.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, u._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, u.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, u._init = u.arrange, u._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, u._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e
    }, u._bindArrangeComplete = function() {
        function t() { e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]) }
        var e, i, o, n = this;
        this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { o = !0, t() })
    }, u._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return { matches: i, needReveal: o, needHide: n }
    }, u._getFilterTest = function(e) { return a && this.options.isJQueryFiltering ? function(t) { return a(t.element).is(e) } : "function" == typeof e ? function(t) { return e(t.element) } : function(t) { return o(t.element, e) } }, u.updateSortData = function(t) {
        var e;
        e = t ? (t = s.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(e)
    }, u._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = l(i)
        }
    }, u._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && i < e; i++) { t[i].updateSortData() } };
    var l = function(t) {
        if ("string" != typeof t) return t;
        var e, i, o = h(t).split(" "),
            n = o[0],
            s = n.match(/^\[(.+)\]$/),
            r = s && s[1],
            a = (i = n, (e = r) ? function(t) { return t.getAttribute(e) } : function(t) { var e = t.querySelector(i); return e && e.textContent }),
            u = d.sortDataParsers[o[1]];
        return u ? function(t) { return t && u(a(t)) } : function(t) { return t && a(t) }
    };
    d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, u._sort = function() {
        if (this.options.sortBy) {
            var t = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = (r = this.sortHistory, a = this.options.sortAscending, function(t, e) {
                for (var i = 0; i < r.length; i++) {
                    var o = r[i],
                        n = t.sortData[o],
                        s = e.sortData[o];
                    if (s < n || n < s) return (s < n ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1)
                }
                return 0
            });
            this.filteredItems.sort(e)
        }
        var r, a
    }, u._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, u._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, u._resetLayout = function() { i.prototype._resetLayout.call(this), this._mode()._resetLayout() }, u._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, u._manageStamp = function(t) { this._mode()._manageStamp(t) }, u._getContainerSize = function() { return this._mode()._getContainerSize() }, u.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, u.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, u.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, u._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, u.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var f = u.remove;
    return u.remove = function(t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var n = e[o];
            s.removeFrom(this.filteredItems, n)
        }
    }, u.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) { this.items[t].sortData.random = Math.random() }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, u._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, u.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, d
});
/*
 * jQuery FlexSlider v2.6.3
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
! function(b) {
    var a = !0;
    b.flexslider = function(p, e) {
        var m = b(p);
        m.vars = b.extend({}, b.flexslider.defaults, e);
        var t, d = m.vars.namespace,
            f = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            u = ("ontouchstart" in window || f || window.DocumentTouch && document instanceof DocumentTouch) && m.vars.touch,
            o = "click touchend MSPointerUp keyup",
            l = "",
            g = "vertical" === m.vars.direction,
            h = m.vars.reverse,
            S = 0 < m.vars.itemWidth,
            y = "fade" === m.vars.animation,
            v = "" !== m.vars.asNavFor,
            x = {};
        b.data(p, "flexslider", m), x = {
            init: function() {
                m.animating = !1, m.currentSlide = parseInt(m.vars.startAt ? m.vars.startAt : 0, 10), isNaN(m.currentSlide) && (m.currentSlide = 0), m.animatingTo = m.currentSlide, m.atEnd = 0 === m.currentSlide || m.currentSlide === m.last, m.containerSelector = m.vars.selector.substr(0, m.vars.selector.search(" ")), m.slides = b(m.vars.selector, m), m.container = b(m.containerSelector, m), m.count = m.slides.length, m.syncExists = 0 < b(m.vars.sync).length, "slide" === m.vars.animation && (m.vars.animation = "swing"), m.prop = g ? "top" : "marginLeft", m.args = {}, m.manualPause = !1, m.stopped = !1, m.started = !1, m.startTimeout = null, m.transitions = !m.vars.video && !y && m.vars.useCSS && function() {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t)
                        if (void 0 !== e.style[t[a]]) return m.pfx = t[a].replace("Perspective", "").toLowerCase(), m.prop = "-" + m.pfx + "-transform", !0;
                    return !1
                }(), (m.ensureAnimationEnd = "") !== m.vars.controlsContainer && (m.controlsContainer = 0 < b(m.vars.controlsContainer).length && b(m.vars.controlsContainer)), "" !== m.vars.manualControls && (m.manualControls = 0 < b(m.vars.manualControls).length && b(m.vars.manualControls)), "" !== m.vars.customDirectionNav && (m.customDirectionNav = 2 === b(m.vars.customDirectionNav).length && b(m.vars.customDirectionNav)), m.vars.randomize && (m.slides.sort(function() { return Math.round(Math.random()) - .5 }), m.container.empty().append(m.slides)), m.doMath(), m.setup("init"), m.vars.controlNav && x.controlNav.setup(), m.vars.directionNav && x.directionNav.setup(), m.vars.keyboard && (1 === b(m.containerSelector).length || m.vars.multipleKeyboard) && b(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!m.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? m.getTarget("next") : 37 === t && m.getTarget("prev");
                        m.flexAnimate(a, m.vars.pauseOnAction)
                    }
                }), m.vars.mousewheel && m.bind("mousewheel", function(e, t, a, n) {
                    e.preventDefault();
                    var i = t < 0 ? m.getTarget("next") : m.getTarget("prev");
                    m.flexAnimate(i, m.vars.pauseOnAction)
                }), m.vars.pausePlay && x.pausePlay.setup(), m.vars.slideshow && m.vars.pauseInvisible && x.pauseInvisible.init(), m.vars.slideshow && (m.vars.pauseOnHover && m.hover(function() { m.manualPlay || m.manualPause || m.pause() }, function() { m.manualPause || m.manualPlay || m.stopped || m.play() }), m.vars.pauseInvisible && x.pauseInvisible.isHidden() || (0 < m.vars.initDelay ? m.startTimeout = setTimeout(m.play, m.vars.initDelay) : m.play())), v && x.asNav.setup(), u && m.vars.touch && x.touch(), (!y || y && m.vars.smoothHeight) && b(window).bind("resize orientationchange focus", x.resize), m.find("img").attr("draggable", "false"), setTimeout(function() { m.vars.start(m) }, 200)
            },
            asNav: {
                setup: function() {
                    m.asNav = !0, m.animatingTo = Math.floor(m.currentSlide / m.move), m.currentItem = m.currentSlide, m.slides.removeClass(d + "active-slide").eq(m.currentItem).addClass(d + "active-slide"), f ? (p._slider = m).slides.each(function() {
                        var e = this;
                        e._gesture = new MSGesture, (e._gesture.target = e).addEventListener("MSPointerDown", function(e) { e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId) }, !1), e.addEventListener("MSGestureTap", function(e) {
                            e.preventDefault();
                            var t = b(this),
                                a = t.index();
                            b(m.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (m.direction = m.currentItem < a ? "next" : "prev", m.flexAnimate(a, m.vars.pauseOnAction, !1, !0, !0))
                        })
                    }) : m.slides.on(o, function(e) {
                        e.preventDefault();
                        var t = b(this),
                            a = t.index();
                        t.offset().left - b(m).scrollLeft() <= 0 && t.hasClass(d + "active-slide") ? m.flexAnimate(m.getTarget("prev"), !0) : b(m.vars.asNavFor).data("flexslider").animating || t.hasClass(d + "active-slide") || (m.direction = m.currentItem < a ? "next" : "prev", m.flexAnimate(a, m.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() { m.manualControls ? x.controlNav.setupManual() : x.controlNav.setupPaging() },
                setupPaging: function() {
                    var e, t, a = "thumbnails" === m.vars.controlNav ? "control-thumbs" : "control-paging",
                        n = 1;
                    if (m.controlNavScaffold = b('<ol class="' + d + "control-nav " + d + a + '"></ol>'), 1 < m.pagingCount)
                        for (var i = 0; i < m.pagingCount; i++) {
                            void 0 === (t = m.slides.eq(i)).attr("data-thumb-alt") && t.attr("data-thumb-alt", "");
                            var s = "" !== t.attr("data-thumb-alt") ? s = ' alt="' + t.attr("data-thumb-alt") + '"' : "";
                            if (e = "thumbnails" === m.vars.controlNav ? '<img src="' + t.attr("data-thumb") + '"' + s + "/>" : '<a href="#">' + n + "</a>", "thumbnails" === m.vars.controlNav && !0 === m.vars.thumbCaptions) { var r = t.attr("data-thumbcaption"); "" !== r && void 0 !== r && (e += '<span class="' + d + 'caption">' + r + "</span>") }
                            m.controlNavScaffold.append("<li>" + e + "</li>"), n++
                        }
                    m.controlsContainer ? b(m.controlsContainer).append(m.controlNavScaffold) : m.append(m.controlNavScaffold), x.controlNav.set(), x.controlNav.active(), m.controlNavScaffold.delegate("a, img", o, function(e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = b(this),
                                a = m.controlNav.index(t);
                            t.hasClass(d + "active") || (m.direction = a > m.currentSlide ? "next" : "prev", m.flexAnimate(a, m.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), x.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    m.controlNav = m.manualControls, x.controlNav.active(), m.controlNav.bind(o, function(e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = b(this),
                                a = m.controlNav.index(t);
                            t.hasClass(d + "active") || (a > m.currentSlide ? m.direction = "next" : m.direction = "prev", m.flexAnimate(a, m.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), x.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var e = "thumbnails" === m.vars.controlNav ? "img" : "a";
                    m.controlNav = b("." + d + "control-nav li " + e, m.controlsContainer ? m.controlsContainer : m)
                },
                active: function() { m.controlNav.removeClass(d + "active").eq(m.animatingTo).addClass(d + "active") },
                update: function(e, t) { 1 < m.pagingCount && "add" === e ? m.controlNavScaffold.append(b('<li><a href="#">' + m.count + "</a></li>")) : 1 === m.pagingCount ? m.controlNavScaffold.find("li").remove() : m.controlNav.eq(t).closest("li").remove(), x.controlNav.set(), 1 < m.pagingCount && m.pagingCount !== m.controlNav.length ? m.update(t, e) : x.controlNav.active() }
            },
            directionNav: {
                setup: function() {
                    var e = b('<ul class="' + d + 'direction-nav"><li class="' + d + 'nav-prev"><a class="' + d + 'prev" href="#">' + m.vars.prevText + '</a></li><li class="' + d + 'nav-next"><a class="' + d + 'next" href="#">' + m.vars.nextText + "</a></li></ul>");
                    m.customDirectionNav ? m.directionNav = m.customDirectionNav : m.controlsContainer ? (b(m.controlsContainer).append(e), m.directionNav = b("." + d + "direction-nav li a", m.controlsContainer)) : (m.append(e), m.directionNav = b("." + d + "direction-nav li a", m)), x.directionNav.update(), m.directionNav.bind(o, function(e) {
                        var t;
                        e.preventDefault(), "" !== l && l !== e.type || (t = b(this).hasClass(d + "next") ? m.getTarget("next") : m.getTarget("prev"), m.flexAnimate(t, m.vars.pauseOnAction)), "" === l && (l = e.type), x.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = d + "disabled";
                    1 === m.pagingCount ? m.directionNav.addClass(e).attr("tabindex", "-1") : m.vars.animationLoop ? m.directionNav.removeClass(e).removeAttr("tabindex") : 0 === m.animatingTo ? m.directionNav.removeClass(e).filter("." + d + "prev").addClass(e).attr("tabindex", "-1") : m.animatingTo === m.last ? m.directionNav.removeClass(e).filter("." + d + "next").addClass(e).attr("tabindex", "-1") : m.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var e = b('<div class="' + d + 'pauseplay"><a href="#"></a></div>');
                    m.controlsContainer ? (m.controlsContainer.append(e), m.pausePlay = b("." + d + "pauseplay a", m.controlsContainer)) : (m.append(e), m.pausePlay = b("." + d + "pauseplay a", m)), x.pausePlay.update(m.vars.slideshow ? d + "pause" : d + "play"), m.pausePlay.bind(o, function(e) { e.preventDefault(), "" !== l && l !== e.type || (b(this).hasClass(d + "pause") ? (m.manualPause = !0, m.manualPlay = !1, m.pause()) : (m.manualPause = !1, m.manualPlay = !0, m.play())), "" === l && (l = e.type), x.setToClearWatchedEvent() })
                },
                update: function(e) { "play" === e ? m.pausePlay.removeClass(d + "pause").addClass(d + "play").html(m.vars.playText) : m.pausePlay.removeClass(d + "play").addClass(d + "pause").html(m.vars.pauseText) }
            },
            touch: function() {
                var i, s, r, o, l, c, e, n, d, u = !1,
                    t = 0,
                    a = 0,
                    v = 0;
                f ? (p.style.msTouchAction = "none", p._gesture = new MSGesture, (p._gesture.target = p).addEventListener("MSPointerDown", function(e) { e.stopPropagation(), m.animating ? e.preventDefault() : (m.pause(), p._gesture.addPointer(e.pointerId), v = 0, o = g ? m.h : m.w, c = Number(new Date), r = S && h && m.animatingTo === m.last ? 0 : S && h ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo : S && m.currentSlide === m.last ? m.limit : S ? (m.itemW + m.vars.itemMargin) * m.move * m.currentSlide : h ? (m.last - m.currentSlide + m.cloneOffset) * o : (m.currentSlide + m.cloneOffset) * o) }, !1), p._slider = m, p.addEventListener("MSGestureChange", function(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        var a = -e.translationX,
                            n = -e.translationY;
                        return l = v += g ? n : a, u = g ? Math.abs(v) < Math.abs(-a) : Math.abs(v) < Math.abs(-n), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() { p._gesture.stop() }) : void((!u || 500 < Number(new Date) - c) && (e.preventDefault(), !y && t.transitions && (t.vars.animationLoop || (l = v / (0 === t.currentSlide && v < 0 || t.currentSlide === t.last && 0 < v ? Math.abs(v) / o + 2 : 1)), t.setProps(r + l, "setTouch"))))
                    }
                }, !1), p.addEventListener("MSGestureEnd", function(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !u && null !== l) {
                            var a = h ? -l : l,
                                n = 0 < a ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - c < 550 && 50 < Math.abs(a) || Math.abs(a) > o / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : y || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        r = l = s = i = null, v = 0
                    }
                }, !1)) : (e = function(e) { m.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (m.pause(), o = g ? m.h : m.w, c = Number(new Date), t = e.touches[0].pageX, a = e.touches[0].pageY, r = S && h && m.animatingTo === m.last ? 0 : S && h ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo : S && m.currentSlide === m.last ? m.limit : S ? (m.itemW + m.vars.itemMargin) * m.move * m.currentSlide : h ? (m.last - m.currentSlide + m.cloneOffset) * o : (m.currentSlide + m.cloneOffset) * o, i = g ? a : t, s = g ? t : a, p.addEventListener("touchmove", n, !1), p.addEventListener("touchend", d, !1)) }, n = function(e) {
                    t = e.touches[0].pageX, a = e.touches[0].pageY, l = g ? i - a : i - t;
                    (!(u = g ? Math.abs(l) < Math.abs(t - s) : Math.abs(l) < Math.abs(a - s)) || 500 < Number(new Date) - c) && (e.preventDefault(), !y && m.transitions && (m.vars.animationLoop || (l /= 0 === m.currentSlide && l < 0 || m.currentSlide === m.last && 0 < l ? Math.abs(l) / o + 2 : 1), m.setProps(r + l, "setTouch")))
                }, d = function(e) {
                    if (p.removeEventListener("touchmove", n, !1), m.animatingTo === m.currentSlide && !u && null !== l) {
                        var t = h ? -l : l,
                            a = 0 < t ? m.getTarget("next") : m.getTarget("prev");
                        m.canAdvance(a) && (Number(new Date) - c < 550 && 50 < Math.abs(t) || Math.abs(t) > o / 2) ? m.flexAnimate(a, m.vars.pauseOnAction) : y || m.flexAnimate(m.currentSlide, m.vars.pauseOnAction, !0)
                    }
                    p.removeEventListener("touchend", d, !1), r = l = s = i = null
                }, p.addEventListener("touchstart", e, !1))
            },
            resize: function() {!m.animating && m.is(":visible") && (S || m.doMath(), y ? x.smoothHeight() : S ? (m.slides.width(m.computedW), m.update(m.pagingCount), m.setProps()) : g ? (m.viewport.height(m.h), m.setProps(m.h, "setTotal")) : (m.vars.smoothHeight && x.smoothHeight(), m.newSlides.width(m.computedW), m.setProps(m.computedW, "setTotal"))) },
            smoothHeight: function(e) {
                if (!g || y) {
                    var t = y ? m : m.viewport;
                    e ? t.animate({ height: m.slides.eq(m.animatingTo).innerHeight() }, e) : t.innerHeight(m.slides.eq(m.animatingTo).innerHeight())
                }
            },
            sync: function(e) {
                var t = b(m.vars.sync).data("flexslider"),
                    a = m.animatingTo;
                switch (e) {
                    case "animate":
                        t.flexAnimate(a, m.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        t.playing || t.asNav || t.play();
                        break;
                    case "pause":
                        t.pause()
                }
            },
            uniqueID: function(e) {
                return e.filter("[id]").add(e.find("[id]")).each(function() {
                    var e = b(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = x.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function() { x.pauseInvisible.isHidden() ? m.startTimeout ? clearTimeout(m.startTimeout) : m.pause() : m.started ? m.play() : 0 < m.vars.initDelay ? setTimeout(m.play, m.vars.initDelay) : m.play() })
                    }
                },
                isHidden: function() { var e = x.pauseInvisible.getHiddenProp(); return !!e && document[e] },
                getHiddenProp: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() { clearTimeout(t), t = setTimeout(function() { l = "" }, 3e3) }
        }, m.flexAnimate = function(e, t, a, n, i) {
            if (m.vars.animationLoop || e === m.currentSlide || (m.direction = e > m.currentSlide ? "next" : "prev"), v && 1 === m.pagingCount && (m.direction = m.currentItem < e ? "next" : "prev"), !m.animating && (m.canAdvance(e, i) || a) && m.is(":visible")) {
                if (v && n) {
                    var s = b(m.vars.asNavFor).data("flexslider");
                    if (m.atEnd = 0 === e || e === m.count - 1, s.flexAnimate(e, !0, !1, !0, i), m.direction = m.currentItem < e ? "next" : "prev", s.direction = m.direction, Math.ceil((e + 1) / m.visible) - 1 === m.currentSlide || 0 === e) return m.currentItem = e, m.slides.removeClass(d + "active-slide").eq(e).addClass(d + "active-slide"), !1;
                    m.currentItem = e, m.slides.removeClass(d + "active-slide").eq(e).addClass(d + "active-slide"), e = Math.floor(e / m.visible)
                }
                if (m.animating = !0, m.animatingTo = e, t && m.pause(), m.vars.before(m), m.syncExists && !i && x.sync("animate"), m.vars.controlNav && x.controlNav.active(), S || m.slides.removeClass(d + "active-slide").eq(e).addClass(d + "active-slide"), m.atEnd = 0 === e || e === m.last, m.vars.directionNav && x.directionNav.update(), e === m.last && (m.vars.end(m), m.vars.animationLoop || m.pause()), y) u ? (m.slides.eq(m.currentSlide).css({ opacity: 0, zIndex: 1 }), m.slides.eq(e).css({ opacity: 1, zIndex: 2 }), m.wrapup(c)) : (m.slides.eq(m.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, m.vars.animationSpeed, m.vars.easing), m.slides.eq(e).css({ zIndex: 2 }).animate({ opacity: 1 }, m.vars.animationSpeed, m.vars.easing, m.wrapup));
                else {
                    var r, o, l, c = g ? m.slides.filter(":first").height() : m.computedW;
                    o = S ? (r = m.vars.itemMargin, (l = (m.itemW + r) * m.move * m.animatingTo) > m.limit && 1 !== m.visible ? m.limit : l) : 0 === m.currentSlide && e === m.count - 1 && m.vars.animationLoop && "next" !== m.direction ? h ? (m.count + m.cloneOffset) * c : 0 : m.currentSlide === m.last && 0 === e && m.vars.animationLoop && "prev" !== m.direction ? h ? 0 : (m.count + 1) * c : h ? (m.count - 1 - e + m.cloneOffset) * c : (e + m.cloneOffset) * c, m.setProps(o, "", m.vars.animationSpeed), m.transitions ? (m.vars.animationLoop && m.atEnd || (m.animating = !1, m.currentSlide = m.animatingTo), m.container.unbind("webkitTransitionEnd transitionend"), m.container.bind("webkitTransitionEnd transitionend", function() { clearTimeout(m.ensureAnimationEnd), m.wrapup(c) }), clearTimeout(m.ensureAnimationEnd), m.ensureAnimationEnd = setTimeout(function() { m.wrapup(c) }, m.vars.animationSpeed + 100)) : m.container.animate(m.args, m.vars.animationSpeed, m.vars.easing, function() { m.wrapup(c) })
                }
                m.vars.smoothHeight && x.smoothHeight(m.vars.animationSpeed)
            }
        }, m.wrapup = function(e) { y || S || (0 === m.currentSlide && m.animatingTo === m.last && m.vars.animationLoop ? m.setProps(e, "jumpEnd") : m.currentSlide === m.last && 0 === m.animatingTo && m.vars.animationLoop && m.setProps(e, "jumpStart")), m.animating = !1, m.currentSlide = m.animatingTo, m.vars.after(m) }, m.animateSlides = function() {!m.animating && a && m.flexAnimate(m.getTarget("next")) }, m.pause = function() { clearInterval(m.animatedSlides), m.animatedSlides = null, m.playing = !1, m.vars.pausePlay && x.pausePlay.update("play"), m.syncExists && x.sync("pause") }, m.play = function() { m.playing && clearInterval(m.animatedSlides), m.animatedSlides = m.animatedSlides || setInterval(m.animateSlides, m.vars.slideshowSpeed), m.started = m.playing = !0, m.vars.pausePlay && x.pausePlay.update("pause"), m.syncExists && x.sync("play") }, m.stop = function() { m.pause(), m.stopped = !0 }, m.canAdvance = function(e, t) { var a = v ? m.pagingCount - 1 : m.last; return !!t || (!(!v || m.currentItem !== m.count - 1 || 0 !== e || "prev" !== m.direction) || (!v || 0 !== m.currentItem || e !== m.pagingCount - 1 || "next" === m.direction) && (!(e === m.currentSlide && !v) && (!!m.vars.animationLoop || (!m.atEnd || 0 !== m.currentSlide || e !== a || "next" === m.direction) && (!m.atEnd || m.currentSlide !== a || 0 !== e || "next" !== m.direction)))) }, m.getTarget = function(e) { return "next" === (m.direction = e) ? m.currentSlide === m.last ? 0 : m.currentSlide + 1 : 0 === m.currentSlide ? m.last : m.currentSlide - 1 }, m.setProps = function(e, t, a) {
            var n, i = (n = e || (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo, -1 * function() {
                if (S) return "setTouch" === t ? e : h && m.animatingTo === m.last ? 0 : h ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo : m.animatingTo === m.last ? m.limit : n;
                switch (t) {
                    case "setTotal":
                        return h ? (m.count - 1 - m.currentSlide + m.cloneOffset) * e : (m.currentSlide + m.cloneOffset) * e;
                    case "setTouch":
                        return e;
                    case "jumpEnd":
                        return h ? e : m.count * e;
                    case "jumpStart":
                        return h ? m.count * e : e;
                    default:
                        return e
                }
            }() + "px");
            m.transitions && (i = g ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", m.container.css("-" + m.pfx + "-transition-duration", a), m.container.css("transition-duration", a)), m.args[m.prop] = i, (m.transitions || void 0 === a) && m.container.css(m.args), m.container.css("transform", i)
        }, m.setup = function(e) {
            var t, a;
            y ? (m.slides.css({ width: "100%", float: "left", marginRight: "-100%", position: "relative" }), "init" === e && (u ? m.slides.css({ opacity: 0, display: "block", webkitTransition: "opacity " + m.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 }).eq(m.currentSlide).css({ opacity: 1, zIndex: 2 }) : 0 == m.vars.fadeFirstSlide ? m.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(m.currentSlide).css({ zIndex: 2 }).css({ opacity: 1 }) : m.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(m.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, m.vars.animationSpeed, m.vars.easing)), m.vars.smoothHeight && x.smoothHeight()) : ("init" === e && (m.viewport = b('<div class="' + d + 'viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(m).append(m.container), m.cloneCount = 0, m.cloneOffset = 0, h && (a = b.makeArray(m.slides).reverse(), m.slides = b(a), m.container.empty().append(m.slides))), m.vars.animationLoop && !S && (m.cloneCount = 2, m.cloneOffset = 1, "init" !== e && m.container.find(".clone").remove(), m.container.append(x.uniqueID(m.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(x.uniqueID(m.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), m.newSlides = b(m.vars.selector, m), t = h ? m.count - 1 - m.currentSlide + m.cloneOffset : m.currentSlide + m.cloneOffset, g && !S ? (m.container.height(200 * (m.count + m.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() { m.newSlides.css({ display: "block" }), m.doMath(), m.viewport.height(m.h), m.setProps(t * m.h, "init") }, "init" === e ? 100 : 0)) : (m.container.width(200 * (m.count + m.cloneCount) + "%"), m.setProps(t * m.computedW, "init"), setTimeout(function() { m.doMath(), m.newSlides.css({ width: m.computedW, marginRight: m.computedM, float: "left", display: "block" }), m.vars.smoothHeight && x.smoothHeight() }, "init" === e ? 100 : 0)));
            S || m.slides.removeClass(d + "active-slide").eq(m.currentSlide).addClass(d + "active-slide"), m.vars.init(m)
        }, m.doMath = function() {
            var e = m.slides.first(),
                t = m.vars.itemMargin,
                a = m.vars.minItems,
                n = m.vars.maxItems;
            m.w = void 0 === m.viewport ? m.width() : m.viewport.width(), m.h = e.height(), m.boxPadding = e.outerWidth() - e.width(), S ? (m.itemT = m.vars.itemWidth + t, m.itemM = t, m.minW = a ? a * m.itemT : m.w, m.maxW = n ? n * m.itemT - t : m.w, m.itemW = m.minW > m.w ? (m.w - t * (a - 1)) / a : m.maxW < m.w ? (m.w - t * (n - 1)) / n : m.vars.itemWidth > m.w ? m.w : m.vars.itemWidth, m.visible = Math.floor(m.w / m.itemW), m.move = 0 < m.vars.move && m.vars.move < m.visible ? m.vars.move : m.visible, m.pagingCount = Math.ceil((m.count - m.visible) / m.move + 1), m.last = m.pagingCount - 1, m.limit = 1 === m.pagingCount ? 0 : m.vars.itemWidth > m.w ? m.itemW * (m.count - 1) + t * (m.count - 1) : (m.itemW + t) * m.count - m.w - t) : (m.itemW = m.w, m.itemM = t, m.pagingCount = m.count, m.last = m.count - 1), m.computedW = m.itemW - m.boxPadding, m.computedM = m.itemM
        }, m.update = function(e, t) { m.doMath(), S || (e < m.currentSlide ? m.currentSlide += 1 : e <= m.currentSlide && 0 !== e && (m.currentSlide -= 1), m.animatingTo = m.currentSlide), m.vars.controlNav && !m.manualControls && ("add" === t && !S || m.pagingCount > m.controlNav.length ? x.controlNav.update("add") : ("remove" === t && !S || m.pagingCount < m.controlNav.length) && (S && m.currentSlide > m.last && (m.currentSlide -= 1, m.animatingTo -= 1), x.controlNav.update("remove", m.last))), m.vars.directionNav && x.directionNav.update() }, m.addSlide = function(e, t) {
            var a = b(e);
            m.count += 1, m.last = m.count - 1, g && h ? void 0 !== t ? m.slides.eq(m.count - t).after(a) : m.container.prepend(a) : void 0 !== t ? m.slides.eq(t).before(a) : m.container.append(a), m.update(t, "add"), m.slides = b(m.vars.selector + ":not(.clone)", m), m.setup(), m.vars.added(m)
        }, m.removeSlide = function(e) {
            var t = isNaN(e) ? m.slides.index(b(e)) : e;
            m.count -= 1, m.last = m.count - 1, isNaN(e) ? b(e, m.slides).remove() : g && h ? m.slides.eq(m.last).remove() : m.slides.eq(e).remove(), m.doMath(), m.update(t, "remove"), m.slides = b(m.vars.selector + ":not(.clone)", m), m.setup(), m.vars.removed(m)
        }, x.init()
    }, b(window).blur(function(e) { a = !1 }).focus(function(e) { a = !0 }), b.flexslider.defaults = { namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, fadeFirstSlide: !0, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function() {}, before: function() {}, after: function() {}, end: function() {}, added: function() {}, removed: function() {}, init: function() {} }, b.fn.flexslider = function(n) {
        if (void 0 === n && (n = {}), "object" == typeof n) return this.each(function() {
            var e = b(this),
                t = n.selector ? n.selector : ".slides > li",
                a = e.find(t);
            1 === a.length && !1 === n.allowOneSlide || 0 === a.length ? (a.fadeIn(400), n.start && n.start(e)) : void 0 === e.data("flexslider") && new b.flexslider(this, n)
        });
        var e = b(this).data("flexslider");
        switch (n) {
            case "play":
                e.play();
                break;
            case "pause":
                e.pause();
                break;
            case "stop":
                e.stop();
                break;
            case "next":
                e.flexAnimate(e.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                e.flexAnimate(e.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof n && e.flexAnimate(n, !0)
        }
    }
}(jQuery);
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
! function(h, i, n, o) {
    function l(t, e) { this.settings = null, this.options = h.extend({}, l.Defaults, e), this.$element = h(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, h.each(["onResize", "onThrottledResize"], h.proxy(function(t, e) { this._handlers[e] = h.proxy(this[e], this) }, this)), h.each(l.Plugins, h.proxy(function(t, e) { this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this) }, this)), h.each(l.Workers, h.proxy(function(t, e) { this._pipe.push({ filter: e.filter, run: h.proxy(e.run, this) }) }, this)), this.setup(), this.initialize() }
    l.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: i, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, l.Width = { Default: "default", Inner: "inner", Outer: "outer" }, l.Type = { Event: "event", State: "state" }, l.Plugins = {}, l.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                n = { width: "auto", "margin-left": s ? e : "", "margin-right": s ? "" : e };
            !i && this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = { merge: !1, width: e }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                e = this._items,
                i = this.settings,
                s = Math.max(2 * i.items, 4),
                n = 2 * Math.ceil(e.length / 2),
                o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0,
                r = "",
                a = "";
            for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), r += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
            this._clones = t, h(r).addClass("cloned").appendTo(this.$stage), h(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], l.prototype.initialize = function() {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.$element.addClass(this.options.loadingClass), this.$stage = h("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, l.prototype.setup = function() {
        var e = this.viewport(),
            t = this.options.responsive,
            i = -1,
            s = null;
        t ? (h.each(t, function(t) { t <= e && i < t && (i = Number(t)) }), "function" == typeof(s = h.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = h.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: s } }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
    }, l.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, l.prototype.prepare = function(t) { var e = this.trigger("prepare", { content: t }); return e.data || (e.data = h("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", { content: e.data }), e.data }, l.prototype.update = function() {
        for (var t = 0, e = this._pipe.length, i = h.proxy(function(t) { return this[t] }, this._invalidated), s = {}; t < e;)(this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, l.prototype.width = function(t) {
        switch (t = t || l.Width.Default) {
            case l.Width.Inner:
            case l.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, l.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, l.prototype.onThrottledResize = function() { i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, l.prototype.onResize = function() { return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) }, l.prototype.registerEventHandlers = function() { h.support.transition && this.$stage.on(h.support.transition.end + ".owl.core", h.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", h.proxy(this.onDragEnd, this))) }, l.prototype.onDragStart = function(t) {
        var e = null;
        3 !== t.which && (e = h.support.transform ? { x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4], y: e[16 === e.length ? 13 : 5] } : (e = this.$stage.position(), { x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left, y: e.top }), this.is("animating") && (h.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = h(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), h(n).on("mouseup.owl.core touchend.owl.core", h.proxy(this.onDragEnd, this)), h(n).one("mousemove.owl.core touchmove.owl.core", h.proxy(function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(n).on("mousemove.owl.core touchmove.owl.core", h.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, l.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, l.prototype.onDragEnd = function(t) {
        var e = this.difference(this._drag.pointer, this.pointer(t)),
            i = this._drag.stage.current,
            s = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        h(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, l.prototype.closest = function(i, s) {
        var n = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || h.each(r, h.proxy(function(t, e) { return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] || e - o) && (n = "left" === s ? t + 1 : t), -1 === n }, this)), this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())), n
    }, l.prototype.animate = function(t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), h.support.transform3d && h.support.transition ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : e ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, h.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: t + "px" })
    }, l.prototype.is = function(t) { return this._states.current[t] && 0 < this._states.current[t] }, l.prototype.current = function(t) {
        if (t === o) return this._current;
        if (0 === this._items.length) return o;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", { property: { name: "position", value: t } });
            e.data !== o && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    }, l.prototype.invalidate = function(t) { return "string" === h.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), h.map(this._invalidated, function(t, e) { return e }) }, l.prototype.reset = function(t) {
        (t = this.normalize(t)) !== o && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, l.prototype.normalize = function(t, e) {
        var i = this._items.length,
            s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = o : (t < 0 || i + s <= t) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, l.prototype.relative = function(t) { return t -= this._clones.length / 2, this.normalize(t, !0) }, l.prototype.maximum = function(t) {
        var e, i, s, n = this.settings,
            o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            for (e = this._items.length, i = this._items[--e].width(), s = this.$element.width(); e-- && !(s < (i += this._items[e].width() + this.settings.margin)););
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, l.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, l.prototype.items = function(t) { return t === o ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, l.prototype.mergers = function(t) { return t === o ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, l.prototype.clones = function(i) {
        var e = this._clones.length / 2,
            s = e + this._items.length,
            n = function(t) { return t % 2 == 0 ? s + t / 2 : e - (t + 1) / 2 };
        return i === o ? h.map(this._clones, function(t, e) { return n(e) }) : h.map(this._clones, function(t, e) { return t === i ? n(e) : null })
    }, l.prototype.speed = function(t) { return t !== o && (this._speed = t), this._speed }, l.prototype.coordinates = function(t) {
        var e, i = 1,
            s = t - 1;
        return t === o ? h.map(this._coordinates, h.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0, e = Math.ceil(e))
    }, l.prototype.duration = function(t, e, i) { return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, l.prototype.to = function(t, e) {
        var i = this.current(),
            s = null,
            n = t - this.relative(i),
            o = (0 < n) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && 0 < s - n && (i = s - n, t = s, this.reset(i))) : t = this.settings.rewind ? (t % (h += 1) + h) % h : Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, l.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, l.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, l.prototype.onTransitionEnd = function(t) {
        if (t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, l.prototype.viewport = function() { var t; return this.options.responsiveBaseElement !== i ? t = h(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? t = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), t }, l.prototype.replace = function(t) { this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : h(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() { return 1 === this.nodeType }).each(h.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, l.prototype.add = function(t, e) {
        var i = this.relative(this._current);
        e = e === o ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : h(t), this.trigger("add", { content: t, position: e }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", { content: t, position: e })
    }, l.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== o && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }))
    }, l.prototype.preloadAutoWidthImages = function(t) { t.each(h.proxy(function(t, e) { this.enter("pre-loading"), e = h(e), h(new Image).one("load", h.proxy(function(t) { e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")) }, this)) }, l.prototype.destroy = function() {
        for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), h(n).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, l.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? i < t : t < i;
            case ">":
                return s ? t < i : i < t;
            case ">=":
                return s ? t <= i : i <= t;
            case "<=":
                return s ? i <= t : t <= i
        }
    }, l.prototype.on = function(t, e, i, s) { t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i) }, l.prototype.off = function(t, e, i, s) { t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i) }, l.prototype.trigger = function(t, e, i, s, n) {
        var o = { item: { count: this._items.length, index: this.current() } },
            r = h.camelCase(h.grep(["on", t, i], function(t) { return t }).join("-").toLowerCase()),
            a = h.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), h.extend({ relatedTarget: this }, o, e));
        return this._supress[t] || (h.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(a) }), this.register({ type: l.Type.Event, name: t }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
    }, l.prototype.enter = function(t) { h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) { this._states.current[e] === o && (this._states.current[e] = 0), this._states.current[e]++ }, this)) }, l.prototype.leave = function(t) { h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) { this._states.current[e]-- }, this)) }, l.prototype.register = function(i) {
        if (i.type === l.Type.Event) {
            if (h.event.special[i.name] || (h.event.special[i.name] = {}), !h.event.special[i.name].owl) {
                var e = h.event.special[i.name]._default;
                h.event.special[i.name]._default = function(t) { return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments) }, h.event.special[i.name].owl = !0
            }
        } else i.type === l.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = h.grep(this._states.tags[i.name], h.proxy(function(t, e) { return h.inArray(t, this._states.tags[i.name]) === e }, this)))
    }, l.prototype.suppress = function(t) { h.each(t, h.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, l.prototype.release = function(t) { h.each(t, h.proxy(function(t, e) { delete this._supress[e] }, this)) }, l.prototype.pointer = function(t) { var e = { x: null, y: null }; return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e }, l.prototype.isNumeric = function(t) { return !isNaN(parseFloat(t)) }, l.prototype.difference = function(t, e) { return { x: t.x - e.x, y: t.y - e.y } }, h.fn.owlCarousel = function(e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var t = h(this),
                i = t.data("owl.carousel");
            i || (i = new l(this, "object" == typeof e && e), t.data("owl.carousel", i), h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) { i.register({ type: l.Type.Event, name: e }), i.$element.on(e + ".owl.carousel.core", h.proxy(function(t) { t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e])) }, i)) })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
        })
    }, h.fn.owlCarousel.Constructor = l
}(window.Zepto || window.jQuery, window, document),
function(e, i, t, s) {
    var n = function(t) { this._core = t, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": e.proxy(function(t) { t.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, n.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, n.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, n.prototype.destroy = function() { var t, e; for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function(a, o, t, e) {
    var i = function(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, s = e.center && -1 * i || 0, n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s, o = this._core.clones().length, r = a.proxy(function(t, e) { this.load(e) }, this); s++ < i;) this.load(o / 2 + this._core.relative(n)), o && a.each(this._core.clones(this._core.relative(n)), r), n++
            }, this)
        }, this._core.options = a.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = { lazyLoad: !1 }, i.prototype.load = function(t) {
        var e = this._core.$stage.children().eq(t),
            i = e && e.find(".owl-lazy");
        !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
            var i, s = a(e),
                n = 1 < o.devicePixelRatio && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", { element: s, url: n }, "lazy"), s.is("img") ? s.one("load.owl.lazy", a.proxy(function() { s.css("opacity", 1), this._core.trigger("loaded", { element: s, url: n }, "lazy") }, this)).attr("src", n) : ((i = new Image).onload = a.proxy(function() { s.css({ "background-image": 'url("' + n + '")', opacity: "1" }), this._core.trigger("loaded", { element: s, url: n }, "lazy") }, this), i.src = n)
        }, this)), this._loaded.push(e.get(0)))
    }, i.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(o, t, e, i) {
    var s = function(t) { this._core = t, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function(t) { t.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": o.proxy(function(t) { t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": o.proxy(function(t) { t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = o.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, s.prototype.update = function() {
        var t, e = this._core._current,
            i = e + this._core.settings.items,
            s = this._core.$stage.children().toArray().slice(e, i),
            n = [];
        o.each(s, function(t, e) { n.push(o(e).height()) }), t = Math.max.apply(null, n), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(c, t, e, i) {
    var s = function(t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": c.proxy(function(t) { t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
            "resize.owl.carousel": c.proxy(function(t) { t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault() }, this),
            "refreshed.owl.carousel": c.proxy(function(t) { t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this),
            "changed.owl.carousel": c.proxy(function(t) { t.namespace && "position" === t.property.name && this._playing && this.stop() }, this),
            "prepared.owl.carousel": c.proxy(function(t) {
                if (t.namespace) {
                    var e = c(t.content).find(".owl-video");
                    e.length && (e.css("display", "none"), this.fetch(e, c(t.content)))
                }
            }, this)
        }, this._core.options = c.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(t) { this.play(t) }, this))
    };
    s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, s.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
        else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
        else {
            if (!(-1 < s[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = { type: i, id: s, width: n, height: o }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function(e, t) {
        var i, s, n = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
            o = e.find("img"),
            r = "src",
            a = "",
            h = this._core.settings,
            l = function(t) { '<div class="owl-video-play-icon"></div>', i = h.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + r + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after('<div class="owl-video-play-icon"></div>') };
        if (e.wrap('<div class="owl-video-wrapper"' + n + "></div>"), this._core.settings.lazyLoad && (r = "data-src", a = "owl-lazy"), o.length) return l(o.attr(r)), o.remove(), !1;
        "youtube" === t.type ? (s = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", l(s)) : "vimeo" === t.type ? c.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + t.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { s = t[0].thumbnail_large, l(s) } }) : "vzaar" === t.type && c.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + t.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { s = t.framegrab_url, l(s) } })
    }, s.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, s.prototype.play = function(t) {
        var e, i = c(t.target).closest("." + this._core.settings.itemClass),
            s = this._videos[i.attr("data-video")],
            n = s.width || "100%",
            o = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === s.type ? e = '<iframe width="' + n + '" height="' + o + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&rel=0&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? e = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + n + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (e = '<iframe frameborder="0"height="' + o + '"width="' + n + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), c('<div class="owl-video-frame">' + e + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function() { var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement; return t && c(t).parent().hasClass("owl-video-frame") }, s.prototype.destroy = function() { var t, e; for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, c.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(r, t, e, i) {
    var s = function(t) { this.core = t, this.core.options = r.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = { "change.owl.carousel": r.proxy(function(t) { t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function(t) { t.namespace && (this.swapping = "translated" == t.type) }, this), "translate.owl.carousel": r.proxy(function(t) { t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    s.Defaults = { animateOut: !1, animateIn: !1 }, s.prototype.swap = function() {
        if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
            this.core.speed(0);
            var t, e = r.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                n = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({ left: t + "px" }).addClass("animated owl-animated-out").addClass(o)), n && s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n))
        }
    }, s.prototype.clear = function(t) { r(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, s.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, r.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(i, s, n, t) {
    var e = function(t) { this._core = t, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": i.proxy(function(t) { t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": i.proxy(function(t) { t.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": i.proxy(function(t, e, i) { t.namespace && this.play(e, i) }, this), "stop.owl.autoplay": i.proxy(function(t) { t.namespace && this.stop() }, this), "mouseover.owl.autoplay": i.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": i.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": i.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": i.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = i.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function(t, e) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function(t, e) { return this._timeout && s.clearTimeout(this._timeout), s.setTimeout(i.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), t || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, e.prototype.stop = function() { this._core.is("rotating") && (s.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function() { var t, e; for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, i.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(o, t, e, i) {
    "use strict";
    var s = function(t) { this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": o.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": o.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": o.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "changed.owl.carousel": o.proxy(function(t) { t.namespace && "position" == t.property.name && this.draw() }, this), "initialized.owl.carousel": o.proxy(function(t) { t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": o.proxy(function(t) { t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = o.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers) };
    s.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, s.prototype.initialize = function() {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function(t) { this.prev(i.navSpeed) }, this)), this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function(t) { this.next(i.navSpeed) }, this)), i.dotsData || (this._templates = [o("<div>").addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", o.proxy(function(t) {
                var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
                t.preventDefault(), this.to(e, i.dotsSpeed)
            }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
    }, s.prototype.destroy = function() { var t, e, i, s; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) this._controls[e].remove(); for (s in this.overides) this._core[s] = this._overrides[s]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, s.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            s = i + this._core.items().length,
            n = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0; t < s; t++) {
                if (r <= e || 0 === e) {
                    if (this._pages.push({ start: Math.min(n, t - i), end: t - i + r - 1 }), Math.min(n, t - i) === n) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, s.prototype.draw = function() {
        var t, e = this._core.settings,
            i = this._core.items().length <= e.items,
            s = this._core.relative(this._core.current()),
            n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !n && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function(t) {
        var e = this._core.settings;
        t.page = { index: o.inArray(this.current(), this._pages), count: this._pages.length, size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items) }
    }, s.prototype.current = function() { var i = this._core.relative(this._core.current()); return o.grep(this._pages, o.proxy(function(t, e) { return t.start <= i && t.end >= i }, this)).pop() }, s.prototype.getPosition = function(t) { var e, i, s = this._core.settings; return "page" == s.slideBy ? (e = o.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += s.slideBy : e -= s.slideBy), e }, s.prototype.next = function(t) { o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t) }, s.prototype.prev = function(t) { o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t) }, s.prototype.to = function(t, e, i) { var s;!i && this._pages.length ? (s = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, e)) : o.proxy(this._overrides.to, this._core)(t, e) }, o.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document),
function(s, n, t, e) {
    "use strict";
    var i = function(t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": s.proxy(function(t) { t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": s.proxy(function(t) {
                if (t.namespace) {
                    var e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!e) return;
                    this._hashes[e] = t.content
                }
            }, this),
            "changed.owl.carousel": s.proxy(function(t) {
                if (t.namespace && "position" === t.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        e = s.map(this._hashes, function(t, e) { return t === i ? e : null }).join();
                    if (!e || n.location.hash.slice(1) === e) return;
                    n.location.hash = e
                }
            }, this)
        }, this._core.options = s.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), s(n).on("hashchange.owl.navigation", s.proxy(function(t) {
            var e = n.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    i.Defaults = { URLhashListener: !1 }, i.prototype.destroy = function() { var t, e; for (t in s(n).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, s.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, e, o) {
    function i(t, i) {
        var s = !1,
            e = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) { if (r[e] !== o) return s = !i || e, !1 }), s
    }

    function s(t) { return i(t, !0) }
    var r = n("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        h = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        l = function() { return !!i("transform") },
        c = function() { return !!i("perspective") },
        p = function() { return !!i("animation") };
    (function() { return !!i("transition") })() && (n.support.transition = new String(s("transition")), n.support.transition.end = h.transition.end[n.support.transition]), p() && (n.support.animation = new String(s("animation")), n.support.animation.end = h.animation.end[n.support.animation]), l() && (n.support.transform = new String(s("transform")), n.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document);
/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
! function(e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t() }(this, function() {
    "use strict";
    return function(m, i, e, t) {
        var f = {
            features: null,
            bind: function(e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1)
            },
            isArray: function(e) { return e instanceof Array },
            createEl: function(e, t) { var n = document.createElement(t || "div"); return e && (n.className = e), n },
            getScrollY: function() { var e = window.pageYOffset; return void 0 !== e ? e : document.documentElement.scrollTop },
            unbind: function(e, t, n) { f.bind(e, t, n, !0) },
            removeClass: function(e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(e, t) { f.hasClass(e, t) || (e.className += (e.className ? " " : "") + t) },
            hasClass: function(e, t) { return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className) },
            getChildByClass: function(e, t) {
                for (var n = e.firstChild; n;) {
                    if (f.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function(e, t, n) {
                for (var i = e.length; i--;)
                    if (e[i][n] === t) return i;
                return -1
            },
            extend: function(e, t, n) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i)) continue;
                        e[i] = t[i]
                    }
            },
            easing: { sine: { out: function(e) { return Math.sin(e * (Math.PI / 2)) }, inOut: function(e) { return -(Math.cos(Math.PI * e) - 1) / 2 } }, cubic: { out: function(e) { return --e * e * e + 1 } } },
            detectFeatures: function() {
                if (f.features) return f.features;
                var e = f.createEl().style,
                    t = "",
                    n = {};
                if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                    var i = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        o && 0 < o.length && 1 <= (o = parseInt(o[1], 10)) && o < 8 && (n.isOldIOSPhone = !0)
                    }
                    var a = i.match(/Android\s([0-9\.]*)/),
                        r = a ? a[1] : 0;
                    1 <= (r = parseFloat(r)) && (r < 4.4 && (n.isOldAndroid = !0), n.androidVersion = r), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                }
                for (var l, s, u = ["transform", "perspective", "animationName"], c = ["", "webkit", "Moz", "ms", "O"], d = 0; d < 4; d++) {
                    t = c[d];
                    for (var p = 0; p < 3; p++) l = u[p], s = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !n[l] && s in e && (n[l] = s);
                    t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var m = 0;
                    n.raf = function(e) {
                        var t = (new Date).getTime(),
                            n = Math.max(0, 16 - (t - m)),
                            i = window.setTimeout(function() { e(t + n) }, n);
                        return m = t + n, i
                    }, n.caf = function(e) { clearTimeout(e) }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, f.features = n
            }
        };
        f.detectFeatures(), f.features.oldIE && (f.bind = function(e, t, n, i) {
            t = t.split(" ");
            for (var o, a = (i ? "detach" : "attach") + "Event", r = function() { n.handleEvent.call(n) }, l = 0; l < t.length; l++)
                if (o = t[l])
                    if ("object" == typeof n && n.handleEvent) {
                        if (i) { if (!n["oldIE" + o]) return !1 } else n["oldIE" + o] = r;
                        e[a]("on" + o, n["oldIE" + o])
                    } else e[a]("on" + o, n)
        });
        var h = this,
            y = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(e) { return "A" === e.tagName }, getDoubleTapZoom: function(e, t) { return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
        f.extend(y, t);
        var s, o, a, x, r, l, u, c, d, v, p, g, w, b, I, C, D, T, M, S, A, E, O, k, R, Z, P, F, L, z, _, N, U, H, Y, W, B, G, X, V, K, q, n, $, j, J, Q, ee, te, ne, ie, oe, ae, re, le, se, ue = { x: 0, y: 0 },
            ce = { x: 0, y: 0 },
            de = { x: 0, y: 0 },
            pe = {},
            me = 0,
            fe = {},
            he = { x: 0, y: 0 },
            ye = 0,
            xe = !0,
            ve = [],
            ge = {},
            we = !1,
            be = function(e, t) { f.extend(h, t.publicMethods), ve.push(e) },
            Ie = function(e) { var t = Ht(); return t - 1 < e ? e - t : e < 0 ? t + e : e },
            Ce = {},
            De = function(e, t) { return Ce[e] || (Ce[e] = []), Ce[e].push(t) },
            Te = function(e) {
                var t = Ce[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(h, n)
                }
            },
            Me = function() { return (new Date).getTime() },
            Se = function(e) { re = e, h.bg.style.opacity = e * y.bgOpacity },
            Ae = function(e, t, n, i, o) {
                (!we || o && o !== h.currItem) && (i /= o ? o.fitRatio : h.currItem.fitRatio), e[E] = g + t + "px, " + n + "px" + w + " scale(" + i + ")"
            },
            Ee = function(e) { te && (e && (v > h.currItem.fitRatio ? we || ($t(h.currItem, !1, !0), we = !0) : we && ($t(h.currItem), we = !1)), Ae(te, de.x, de.y, v)) },
            Oe = function(e) { e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e) },
            ke = function(e, t) { t[E] = g + e + "px, 0px" + w },
            Re = function(e, t) {
                if (!y.loop && t) {
                    var n = x + (he.x * me - e) / he.x,
                        i = Math.round(e - ct.x);
                    (n < 0 && 0 < i || n >= Ht() - 1 && i < 0) && (e = ct.x + i * y.mainScrollEndFriction)
                }
                ct.x = e, ke(e, r)
            },
            Ze = function(e, t) { var n = dt[e] - fe[e]; return ce[e] + ue[e] + n - n * (t / p) },
            Pe = function(e, t) { e.x = t.x, e.y = t.y, t.id && (e.id = t.id) },
            Fe = function(e) { e.x = Math.round(e.x), e.y = Math.round(e.y) },
            Le = null,
            ze = function() { Le && (f.unbind(document, "mousemove", ze), f.addClass(m, "pswp--has_mouse"), y.mouseUsed = !0, Te("mouseUsed")), Le = setTimeout(function() { Le = null }, 100) },
            _e = function(e, t) { var n = Xt(h.currItem, pe, e); return t && (ee = n), n },
            Ne = function(e) { return e || (e = h.currItem), e.initialZoomLevel },
            Ue = function(e) { return e || (e = h.currItem), 0 < e.w ? y.maxSpreadZoom : 1 },
            He = function(e, t, n, i) { return i === h.currItem.initialZoomLevel ? (n[e] = h.currItem.initialPosition[e], !0) : (n[e] = Ze(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0)) },
            Ye = function(e) {
                var t = "";
                y.escKey && 27 === e.keyCode ? t = "close" : y.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, h[t]()))
            },
            We = function(e) { e && (q || K || ne || B) && (e.preventDefault(), e.stopPropagation()) },
            Be = function() { h.setScrollOffset(0, f.getScrollY()) },
            Ge = {},
            Xe = 0,
            Ve = function(e) { Ge[e] && (Ge[e].raf && Z(Ge[e].raf), Xe--, delete Ge[e]) },
            Ke = function(e) { Ge[e] && Ve(e), Ge[e] || (Xe++, Ge[e] = {}) },
            qe = function() { for (var e in Ge) Ge.hasOwnProperty(e) && Ve(e) },
            $e = function(e, t, n, i, o, a, r) {
                var l, s = Me();
                Ke(e);
                var u = function() {
                    if (Ge[e]) {
                        if (l = Me() - s, i <= l) return Ve(e), a(n), void(r && r());
                        a((n - t) * o(l / i) + t), Ge[e].raf = R(u)
                    }
                };
                u()
            },
            je = {
                shout: Te,
                listen: De,
                viewportSize: pe,
                options: y,
                isMainScrollAnimating: function() { return ne },
                getZoomLevel: function() { return v },
                getCurrentIndex: function() { return x },
                isDragging: function() { return X },
                isZooming: function() { return J },
                setScrollOffset: function(e, t) { fe.x = e, z = fe.y = t, Te("updateScrollOffset", fe) },
                applyZoomPan: function(e, t, n, i) { de.x = t, de.y = n, v = e, Ee(i) },
                init: function() {
                    if (!s && !o) {
                        var e;
                        h.framework = f, h.template = m, h.bg = f.getChildByClass(m, "pswp__bg"), P = m.className, s = !0, _ = f.detectFeatures(), R = _.raf, Z = _.caf, E = _.transform, L = _.oldIE, h.scrollWrap = f.getChildByClass(m, "pswp__scroll-wrap"), h.container = f.getChildByClass(h.scrollWrap, "pswp__container"), r = h.container.style, h.itemHolders = C = [{ el: h.container.children[0], wrap: 0, index: -1 }, { el: h.container.children[1], wrap: 0, index: -1 }, { el: h.container.children[2], wrap: 0, index: -1 }], C[0].el.style.display = C[2].el.style.display = "none",
                            function() {
                                if (E) { var e = _.perspective && !k; return g = "translate" + (e ? "3d(" : "("), w = _.perspective ? ", 0px)" : ")" }
                                E = "left", f.addClass(m, "pswp--ie"), ke = function(e, t) { t.left = e + "px" }, Oe = function(e) {
                                    var t = 1 < e.fitRatio ? 1 : e.fitRatio,
                                        n = e.container.style,
                                        i = t * e.w,
                                        o = t * e.h;
                                    n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                                }, Ee = function() {
                                    if (te) {
                                        var e = te,
                                            t = h.currItem,
                                            n = 1 < t.fitRatio ? 1 : t.fitRatio,
                                            i = n * t.w,
                                            o = n * t.h;
                                        e.width = i + "px", e.height = o + "px", e.left = de.x + "px", e.top = de.y + "px"
                                    }
                                }
                            }(), d = { resize: h.updateSize, orientationchange: function() { clearTimeout(N), N = setTimeout(function() { pe.x !== h.scrollWrap.clientWidth && h.updateSize() }, 500) }, scroll: Be, keydown: Ye, click: We };
                        var t = _.isOldIOSPhone || _.isOldAndroid || _.isMobileOpera;
                        for (_.animationName && _.transform && !t || (y.showAnimationDuration = y.hideAnimationDuration = 0), e = 0; e < ve.length; e++) h["init" + ve[e]]();
                        i && (h.ui = new i(h, f)).init(), Te("firstUpdate"), x = x || y.index || 0, (isNaN(x) || x < 0 || x >= Ht()) && (x = 0), h.currItem = Ut(x), (_.isOldIOSPhone || _.isOldAndroid) && (xe = !1), m.setAttribute("aria-hidden", "false"), y.modal && (xe ? m.style.position = "fixed" : (m.style.position = "absolute", m.style.top = f.getScrollY() + "px")), void 0 === z && (Te("initialLayout"), z = F = f.getScrollY());
                        var n = "pswp--open ";
                        for (y.mainClass && (n += y.mainClass + " "), y.showHideOpacity && (n += "pswp--animate_opacity "), n += k ? "pswp--touch" : "pswp--notouch", n += _.animationName ? " pswp--css_animation" : "", n += _.svg ? " pswp--svg" : "", f.addClass(m, n), h.updateSize(), l = -1, ye = null, e = 0; e < 3; e++) ke((e + l) * he.x, C[e].el.style);
                        L || f.bind(h.scrollWrap, c, h), De("initialZoomInEnd", function() { h.setContent(C[0], x - 1), h.setContent(C[2], x + 1), C[0].el.style.display = C[2].el.style.display = "block", y.focus && m.focus(), f.bind(document, "keydown", h), _.transform && f.bind(h.scrollWrap, "click", h), y.mouseUsed || f.bind(document, "mousemove", ze), f.bind(window, "resize scroll orientationchange", h), Te("bindEvents") }), h.setContent(C[1], x), h.updateCurrItem(), Te("afterInit"), xe || (b = setInterval(function() { Xe || X || J || v !== h.currItem.initialZoomLevel || h.updateSize() }, 1e3)), f.addClass(m, "pswp--visible")
                    }
                },
                close: function() { s && (o = !(s = !1), Te("close"), f.unbind(window, "resize scroll orientationchange", h), f.unbind(window, "scroll", d.scroll), f.unbind(document, "keydown", h), f.unbind(document, "mousemove", ze), _.transform && f.unbind(h.scrollWrap, "click", h), X && f.unbind(window, u, h), clearTimeout(N), Te("unbindEvents"), Yt(h.currItem, null, !0, h.destroy)) },
                destroy: function() { Te("destroy"), Lt && clearTimeout(Lt), m.setAttribute("aria-hidden", "true"), m.className = P, b && clearInterval(b), f.unbind(h.scrollWrap, c, h), f.unbind(window, "scroll", h), ft(), qe(), Ce = null },
                panTo: function(e, t, n) { n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, Ee() },
                handleEvent: function(e) { e = e || window.event, d[e.type] && d[e.type](e) },
                goTo: function(e) {
                    var t = (e = Ie(e)) - x;
                    ye = t, x = e, h.currItem = Ut(x), me -= t, Re(he.x * me), qe(), ne = !1, h.updateCurrItem()
                },
                next: function() { h.goTo(x + 1) },
                prev: function() { h.goTo(x - 1) },
                updateCurrZoomItem: function(e) {
                    if (e && Te("beforeChange", 0), C[1].el.children.length) {
                        var t = C[1].el.children[0];
                        te = f.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else te = null;
                    ee = h.currItem.bounds, p = v = h.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && Te("afterChange")
                },
                invalidateCurrItems: function() { I = !0; for (var e = 0; e < 3; e++) C[e].item && (C[e].item.needsUpdate = !0) },
                updateCurrItem: function(e) {
                    if (0 !== ye) {
                        var t, n = Math.abs(ye);
                        if (!(e && n < 2)) {
                            h.currItem = Ut(x), we = !1, Te("beforeChange", ye), 3 <= n && (l += ye + (0 < ye ? -3 : 3), n = 3);
                            for (var i = 0; i < n; i++) 0 < ye ? (t = C.shift(), C[2] = t, ke((++l + 2) * he.x, t.el.style), h.setContent(t, x - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), ke(--l * he.x, t.el.style), h.setContent(t, x + n - i - 1 - 1));
                            if (te && 1 === Math.abs(ye)) {
                                var o = Ut(D);
                                o.initialZoomLevel !== v && (Xt(o, pe), $t(o), Oe(o))
                            }
                            ye = 0, h.updateCurrZoomItem(), D = x, Te("afterChange")
                        }
                    }
                },
                updateSize: function(e) {
                    if (!xe && y.modal) {
                        var t = f.getScrollY();
                        if (z !== t && (m.style.top = t + "px", z = t), !e && ge.x === window.innerWidth && ge.y === window.innerHeight) return;
                        ge.x = window.innerWidth, ge.y = window.innerHeight, m.style.height = ge.y + "px"
                    }
                    if (pe.x = h.scrollWrap.clientWidth, pe.y = h.scrollWrap.clientHeight, Be(), he.x = pe.x + Math.round(pe.x * y.spacing), he.y = pe.y, Re(he.x * me), Te("beforeResize"), void 0 !== l) {
                        for (var n, i, o, a = 0; a < 3; a++) n = C[a], ke((a + l) * he.x, n.el.style), o = x + a - 1, y.loop && 2 < Ht() && (o = Ie(o)), (i = Ut(o)) && (I || i.needsUpdate || !i.bounds) ? (h.cleanSlide(i), h.setContent(n, o), 1 === a && (h.currItem = i, h.updateCurrZoomItem(!0)), i.needsUpdate = !1) : -1 === n.index && 0 <= o && h.setContent(n, o), i && i.container && (Xt(i, pe), $t(i), Oe(i));
                        I = !1
                    }
                    p = v = h.currItem.initialZoomLevel, (ee = h.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Ee(!0)), Te("resize")
                },
                zoomTo: function(t, e, n, i, o) {
                    e && (p = v, dt.x = Math.abs(e.x) - de.x, dt.y = Math.abs(e.y) - de.y, Pe(ce, de));
                    var a = _e(t, !1),
                        r = {};
                    He("x", a, r, t), He("y", a, r, t);
                    var l = v,
                        s = de.x,
                        u = de.y;
                    Fe(r);
                    var c = function(e) { de.y = 1 === e ? (v = t, de.x = r.x, r.y) : (v = (t - l) * e + l, de.x = (r.x - s) * e + s, (r.y - u) * e + u), o && o(e), Ee(1 === e) };
                    n ? $e("customZoomTo", 0, 1, n, i || f.easing.sine.inOut, c) : c(1)
                }
            },
            Je = {},
            Qe = {},
            et = {},
            tt = {},
            nt = {},
            it = [],
            ot = {},
            at = [],
            rt = {},
            lt = 0,
            st = { x: 0, y: 0 },
            ut = 0,
            ct = { x: 0, y: 0 },
            dt = { x: 0, y: 0 },
            pt = { x: 0, y: 0 },
            mt = function(e, t) { return rt.x = Math.abs(e.x - t.x), rt.y = Math.abs(e.y - t.y), Math.sqrt(rt.x * rt.x + rt.y * rt.y) },
            ft = function() { n && (Z(n), n = null) },
            ht = function() { X && (n = R(ht), Et()) },
            yt = function(e, t) { return !(!e || e === document) && !(e.getAttribute("class") && -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")) && (t(e) ? e : yt(e.parentNode, t)) },
            xt = {},
            vt = function(e, t) { return xt.prevent = !yt(e.target, y.isClickableElement), Te("preventDragEvent", e, t, xt), xt.prevent },
            gt = function(e, t) { return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t },
            wt = function(e, t, n) { n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y) },
            bt = function() { var e = de.y - h.currItem.initialPosition.y; return 1 - Math.abs(e / (pe.y / 2)) },
            It = {},
            Ct = {},
            Dt = [],
            Tt = function(e) { for (; 0 < Dt.length;) Dt.pop(); return O ? (se = 0, it.forEach(function(e) { 0 === se ? Dt[0] = e : 1 === se && (Dt[1] = e), se++ })) : -1 < e.type.indexOf("touch") ? e.touches && 0 < e.touches.length && (Dt[0] = gt(e.touches[0], It), 1 < e.touches.length && (Dt[1] = gt(e.touches[1], Ct))) : (It.x = e.pageX, It.y = e.pageY, It.id = "", Dt[0] = It), Dt },
            Mt = function(e, t) {
                var n, i, o, a, r = de[e] + t[e],
                    l = 0 < t[e],
                    s = ct.x + t.x,
                    u = ct.x - ot.x;
                if (n = r > ee.min[e] || r < ee.max[e] ? y.panEndFriction : 1, r = de[e] + t[e] * n, (y.allowPanToNext || v === h.currItem.initialZoomLevel) && (te ? "h" !== ie || "x" !== e || K || (l ? (r > ee.min[e] && (n = y.panEndFriction, ee.min[e], i = ee.min[e] - ce[e]), (i <= 0 || u < 0) && 1 < Ht() ? (a = s, u < 0 && s > ot.x && (a = ot.x)) : ee.min.x !== ee.max.x && (o = r)) : (r < ee.max[e] && (n = y.panEndFriction, ee.max[e], i = ce[e] - ee.max[e]), (i <= 0 || 0 < u) && 1 < Ht() ? (a = s, 0 < u && s < ot.x && (a = ot.x)) : ee.min.x !== ee.max.x && (o = r))) : a = s, "x" === e)) return void 0 !== a && (Re(a, !0), $ = a !== ot.x), ee.min.x !== ee.max.x && (void 0 !== o ? de.x = o : $ || (de.x += t.x * n)), void 0 !== a;
                ne || $ || v > h.currItem.fitRatio && (de[e] += t[e] * n)
            },
            St = function(e) {
                if (!("mousedown" === e.type && 0 < e.button))
                    if (Nt) e.preventDefault();
                    else if (!G || "mousedown" !== e.type) {
                    if (vt(e, !0) && e.preventDefault(), Te("pointerDown"), O) {
                        var t = f.arraySearch(it, e.pointerId, "id");
                        t < 0 && (t = it.length), it[t] = { x: e.pageX, y: e.pageY, id: e.pointerId }
                    }
                    var n = Tt(e),
                        i = n.length;
                    j = null, qe(), X && 1 !== i || (X = oe = !0, f.bind(window, u, h), W = le = ae = B = $ = q = V = K = !1, ie = null, Te("firstTouchStart", n), Pe(ce, de), ue.x = ue.y = 0, Pe(tt, n[0]), Pe(nt, tt), ot.x = he.x * me, at = [{ x: tt.x, y: tt.y }], H = U = Me(), _e(v, !0), ft(), ht()), !J && 1 < i && !ne && !$ && (p = v, J = V = !(K = !1), ue.y = ue.x = 0, Pe(ce, de), Pe(Je, n[0]), Pe(Qe, n[1]), wt(Je, Qe, pt), dt.x = Math.abs(pt.x) - de.x, dt.y = Math.abs(pt.y) - de.y, Q = mt(Je, Qe))
                }
            },
            At = function(e) {
                if (e.preventDefault(), O) {
                    var t = f.arraySearch(it, e.pointerId, "id");
                    if (-1 < t) {
                        var n = it[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (X) {
                    var i = Tt(e);
                    if (ie || q || J) j = i;
                    else if (ct.x !== he.x * me) ie = "h";
                    else {
                        var o = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
                        10 <= Math.abs(o) && (ie = 0 < o ? "h" : "v", j = i)
                    }
                }
            },
            Et = function() {
                if (j) {
                    var e, t, n = j.length;
                    if (0 !== n)
                        if (Pe(Je, j[0]), et.x = Je.x - tt.x, et.y = Je.y - tt.y, J && 1 < n) {
                            if (tt.x = Je.x, tt.y = Je.y, !et.x && !et.y && (e = j[1], t = Qe, e.x === t.x && e.y === t.y)) return;
                            Pe(Qe, j[1]), K || (K = !0, Te("zoomGestureStarted"));
                            var i = mt(Je, Qe),
                                o = Pt(i);
                            o > h.currItem.initialZoomLevel + h.currItem.initialZoomLevel / 15 && (le = !0);
                            var a = 1,
                                r = Ne(),
                                l = Ue();
                            if (o < r)
                                if (y.pinchToClose && !le && p <= h.currItem.initialZoomLevel) {
                                    var s = 1 - (r - o) / (r / 1.2);
                                    Se(s), Te("onPinchClose", s), ae = !0
                                } else 1 < (a = (r - o) / r) && (a = 1), o = r - a * (r / 3);
                            else l < o && (1 < (a = (o - l) / (6 * r)) && (a = 1), o = l + a * r);
                            a < 0 && (a = 0), wt(Je, Qe, st), ue.x += st.x - pt.x, ue.y += st.y - pt.y, Pe(pt, st), de.x = Ze("x", o), de.y = Ze("y", o), W = v < o, v = o, Ee()
                        } else {
                            if (!ie) return;
                            if (oe && (oe = !1, 10 <= Math.abs(et.x) && (et.x -= j[0].x - nt.x), 10 <= Math.abs(et.y) && (et.y -= j[0].y - nt.y)), tt.x = Je.x, tt.y = Je.y, 0 === et.x && 0 === et.y) return;
                            if ("v" === ie && y.closeOnVerticalDrag && "fit" === y.scaleMode && v === h.currItem.initialZoomLevel) { ue.y += et.y, de.y += et.y; var u = bt(); return B = !0, Te("onVerticalDrag", u), Se(u), void Ee() }! function(e, t, n) {
                                if (50 < e - H) {
                                    var i = 2 < at.length ? at.shift() : {};
                                    i.x = t, i.y = n, at.push(i), H = e
                                }
                            }(Me(), Je.x, Je.y), q = !0, ee = h.currItem.bounds, Mt("x", et) || (Mt("y", et), Fe(de), Ee())
                        }
                }
            },
            Ot = function(e) {
                if (_.isOldAndroid) { if (G && "mouseup" === e.type) return; - 1 < e.type.indexOf("touch") && (clearTimeout(G), G = setTimeout(function() { G = 0 }, 600)) }
                var t;
                if (Te("pointerUp"), vt(e, !1) && e.preventDefault(), O) { var n = f.arraySearch(it, e.pointerId, "id"); - 1 < n && (t = it.splice(n, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = { 4: "mouse", 2: "touch", 3: "pen" }[e.pointerType], t.type || (t.type = e.pointerType || "mouse"))) }
                var i, o = Tt(e),
                    a = o.length;
                if ("mouseup" === e.type && (a = 0), 2 === a) return !(j = null);
                1 === a && Pe(nt, o[0]), 0 !== a || ie || ne || (t || ("mouseup" === e.type ? t = { x: e.pageX, y: e.pageY, type: "mouse" } : e.changedTouches && e.changedTouches[0] && (t = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" })), Te("touchRelease", e, t));
                var r = -1;
                if (0 === a && (X = !1, f.unbind(window, u, h), ft(), J ? r = 0 : -1 !== ut && (r = Me() - ut)), ut = 1 === a ? Me() : -1, i = -1 !== r && r < 150 ? "zoom" : "swipe", J && a < 2 && (J = !1, 1 === a && (i = "zoomPointerUp"), Te("zoomGestureEnded")), j = null, q || K || ne || B)
                    if (qe(), Y || (Y = kt()), Y.calculateSwipeSpeed("x"), B)
                        if (bt() < y.verticalDragRange) h.close();
                        else {
                            var l = de.y,
                                s = re;
                            $e("verticalDrag", 0, 1, 300, f.easing.cubic.out, function(e) { de.y = (h.currItem.initialPosition.y - l) * e + l, Se((1 - s) * e + s), Ee() }), Te("onVerticalDrag", 1)
                        }
                else {
                    if (($ || ne) && 0 === a) {
                        if (Zt(i, Y)) return;
                        i = "zoomPointerUp"
                    }
                    ne || ("swipe" === i ? !$ && v > h.currItem.fitRatio && Rt(Y) : Ft())
                }
            },
            kt = function() { var t, n, i = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(e) { n = 1 < at.length ? (t = Me() - H + 50, at[at.length - 2][e]) : (t = Me() - U, nt[e]), i.lastFlickOffset[e] = tt[e] - n, i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e]), 20 < i.lastFlickDist[e] ? i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t : i.lastFlickSpeed[e] = 0, Math.abs(i.lastFlickSpeed[e]) < .1 && (i.lastFlickSpeed[e] = 0), i.slowDownRatio[e] = .95, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatio[e] = 1 }, calculateOverBoundsAnimOffset: function(t, e) { i.backAnimStarted[t] || (de[t] > ee.min[t] ? i.backAnimDestination[t] = ee.min[t] : de[t] < ee.max[t] && (i.backAnimDestination[t] = ee.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, $e("bounceZoomPan" + t, de[t], i.backAnimDestination[t], e || 300, f.easing.sine.out, function(e) { de[t] = e, Ee() })))) }, calculateAnimOffset: function(e) { i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, de[e] += i.distanceOffset[e]) }, panAnimLoop: function() { if (Ge.zoomPan && (Ge.zoomPan.raf = R(i.panAnimLoop), i.now = Me(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Ee(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return de.x = Math.round(de.x), de.y = Math.round(de.y), Ee(), void Ve("zoomPan") } }; return i },
            Rt = function(e) {
                if (e.calculateSwipeSpeed("y"), ee = h.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                Ke("zoomPan"), e.lastNow = Me(), e.panAnimLoop()
            },
            Zt = function(e, t) {
                var n, i, o;
                if (ne || (lt = x), "swipe" === e) {
                    var a = tt.x - nt.x,
                        r = t.lastFlickDist.x < 10;
                    30 < a && (r || 20 < t.lastFlickOffset.x) ? i = -1 : a < -30 && (r || t.lastFlickOffset.x < -20) && (i = 1)
                }
                i && ((x += i) < 0 ? (x = y.loop ? Ht() - 1 : 0, o = !0) : x >= Ht() && (x = y.loop ? 0 : Ht() - 1, o = !0), o && !y.loop || (ye += i, me -= i, n = !0));
                var l, s = he.x * me,
                    u = Math.abs(s - ct.x);
                return l = n || s > ct.x == 0 < t.lastFlickSpeed.x ? (l = 0 < Math.abs(t.lastFlickSpeed.x) ? u / Math.abs(t.lastFlickSpeed.x) : 333, l = Math.min(l, 400), Math.max(l, 250)) : 333, lt === x && (n = !1), ne = !0, Te("mainScrollAnimStart"), $e("mainScroll", ct.x, s, l, f.easing.cubic.out, Re, function() { qe(), ne = !1, lt = -1, (n || lt !== x) && h.updateCurrItem(), Te("mainScrollAnimComplete") }), n && h.updateCurrItem(!0), n
            },
            Pt = function(e) { return 1 / Q * e * p },
            Ft = function() {
                var e = v,
                    t = Ne(),
                    n = Ue();
                v < t ? e = t : n < v && (e = n);
                var i, o = re;
                return ae && !W && !le && v < t ? h.close() : (ae && (i = function(e) { Se((1 - o) * e + o) }), h.zoomTo(e, 0, 200, f.easing.cubic.out, i)), !0
            };
        be("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var e = function(e, t, n, i, o) { T = e + t, M = e + n, S = e + i, A = o ? e + o : "" };
                    (O = _.pointerEvent) && _.touch && (_.touch = !1), O ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : _.touch ? (e("touch", "start", "move", "end", "cancel"), k = !0) : e("mouse", "down", "move", "up"), u = M + " " + S + " " + A, c = T, O && !k && (k = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints), h.likelyTouchDevice = k, d[T] = St, d[M] = At, d[S] = Ot, A && (d[A] = d[S]), _.touch && (c += " mousedown", u += " mousemove mouseup", d.mousedown = d[T], d.mousemove = d[M], d.mouseup = d[S]), k || (y.allowPanToNext = !1)
                }
            }
        });
        var Lt, zt, _t, Nt, Ut, Ht, Yt = function(r, e, l, t) {
                var s;
                Lt && clearTimeout(Lt), _t = Nt = !0, r.initialLayout ? (s = r.initialLayout, r.initialLayout = null) : s = y.getThumbBoundsFn && y.getThumbBoundsFn(x);
                var u, c, d = l ? y.hideAnimationDuration : y.showAnimationDuration,
                    p = function() { Ve("initialZoom"), l ? (h.template.removeAttribute("style"), h.bg.removeAttribute("style")) : (Se(1), e && (e.style.display = "block"), f.addClass(m, "pswp--animated-in"), Te("initialZoom" + (l ? "OutEnd" : "InEnd"))), t && t(), Nt = !1 };
                if (!d || !s || void 0 === s.x) return Te("initialZoom" + (l ? "Out" : "In")), v = r.initialZoomLevel, Pe(de, r.initialPosition), Ee(), m.style.opacity = l ? 0 : 1, Se(1), void(d ? setTimeout(function() { p() }, d) : p());
                u = a, c = !h.currItem.src || h.currItem.loadError || y.showHideOpacity, r.miniImg && (r.miniImg.style.webkitBackfaceVisibility = "hidden"), l || (v = s.w / r.w, de.x = s.x, de.y = s.y - F, h[c ? "template" : "bg"].style.opacity = .001, Ee()), Ke("initialZoom"), l && !u && f.removeClass(m, "pswp--animated-in"), c && (l ? f[(u ? "remove" : "add") + "Class"](m, "pswp--animate_opacity") : setTimeout(function() { f.addClass(m, "pswp--animate_opacity") }, 30)), Lt = setTimeout(function() {
                    if (Te("initialZoom" + (l ? "Out" : "In")), l) {
                        var t = s.w / r.w,
                            n = de.x,
                            i = de.y,
                            o = v,
                            a = re,
                            e = function(e) { de.y = 1 === e ? (v = t, de.x = s.x, s.y - z) : (v = (t - o) * e + o, de.x = (s.x - n) * e + n, (s.y - z - i) * e + i), Ee(), c ? m.style.opacity = 1 - e : Se(a - e * a) };
                        u ? $e("initialZoom", 0, 1, d, f.easing.cubic.out, e, p) : (e(1), Lt = setTimeout(p, d + 20))
                    } else v = r.initialZoomLevel, Pe(de, r.initialPosition), Ee(), Se(1), c ? m.style.opacity = 1 : Se(1), Lt = setTimeout(p, d + 20)
                }, l ? 25 : 90)
            },
            Wt = {},
            Bt = [],
            Gt = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() { return zt.length } },
            Xt = function(e, t, n) {
                if (!e.src || e.loadError) return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } }, e.initialPosition = e.bounds.center, e.bounds;
                var i, o, a, r, l = !n;
                if (l && (e.vGap || (e.vGap = { top: 0, bottom: 0 }), Te("parseVerticalMargin", e)), Wt.x = t.x, Wt.y = t.y - e.vGap.top - e.vGap.bottom, l) {
                    var s = Wt.x / e.w,
                        u = Wt.y / e.h;
                    e.fitRatio = s < u ? s : u;
                    var c = y.scaleMode;
                    "orig" === c ? n = 1 : "fit" === c && (n = e.fitRatio), 1 < n && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } })
                }
                return n ? (o = (i = e).w * n, a = e.h * n, (r = i.bounds).center.x = Math.round((Wt.x - o) / 2), r.center.y = Math.round((Wt.y - a) / 2) + i.vGap.top, r.max.x = o > Wt.x ? Math.round(Wt.x - o) : r.center.x, r.max.y = a > Wt.y ? Math.round(Wt.y - a) + i.vGap.top : r.center.y, r.min.x = o > Wt.x ? 0 : r.center.x, r.min.y = a > Wt.y ? i.vGap.top : r.center.y, l && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds) : void 0
            },
            Vt = function(e, t, n, i, o, a) { t.loadError || i && (t.imageAppended = !0, $t(t, i, t === h.currItem && we), n.appendChild(i), a && setTimeout(function() { t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null) }, 500)) },
            Kt = function(e) {
                e.loading = !0, e.loaded = !1;
                var t = e.img = f.createEl("pswp__img", "img"),
                    n = function() { e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null };
                return t.onload = n, t.onerror = function() { e.loadError = !0, n() }, t.src = e.src, t
            },
            qt = function(e, t) { if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = y.errorMsg.replace("%url%", e.src), !0 },
            $t = function(e, t, n) {
                if (e.src) {
                    t || (t = e.container.lastChild);
                    var i = n ? e.w : Math.round(e.w * e.fitRatio),
                        o = n ? e.h : Math.round(e.h * e.fitRatio);
                    e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
                }
            },
            jt = function() {
                if (Bt.length) {
                    for (var e, t = 0; t < Bt.length; t++)(e = Bt[t]).holder.index === e.index && Vt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                    Bt = []
                }
            };
        be("Controller", {
            publicMethods: {
                lazyLoadItem: function(e) {
                    e = Ie(e);
                    var t = Ut(e);
                    t && (!t.loaded && !t.loading || I) && (Te("gettingData", e, t), t.src && Kt(t))
                },
                initController: function() {
                    f.extend(y, Gt, !0), h.items = zt = e, Ut = h.getItemAt, Ht = y.getNumItemsFn, y.loop, Ht() < 3 && (y.loop = !1), De("beforeChange", function(e) {
                        var t, n = y.preload,
                            i = null === e || 0 <= e,
                            o = Math.min(n[0], Ht()),
                            a = Math.min(n[1], Ht());
                        for (t = 1; t <= (i ? a : o); t++) h.lazyLoadItem(x + t);
                        for (t = 1; t <= (i ? o : a); t++) h.lazyLoadItem(x - t)
                    }), De("initialLayout", function() { h.currItem.initialLayout = y.getThumbBoundsFn && y.getThumbBoundsFn(x) }), De("mainScrollAnimComplete", jt), De("initialZoomInEnd", jt), De("destroy", function() {
                        for (var e, t = 0; t < zt.length; t++)(e = zt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        Bt = null
                    })
                },
                getItemAt: function(e) { return 0 <= e && void 0 !== zt[e] && zt[e] },
                allowProgressiveImg: function() { return y.forceProgressiveLoading || !k || y.mouseUsed || 1200 < screen.width },
                setContent: function(t, n) {
                    y.loop && (n = Ie(n));
                    var e = h.getItemAt(t.index);
                    e && (e.container = null);
                    var i, o = h.getItemAt(n);
                    if (o) {
                        Te("gettingData", n, o), t.index = n;
                        var a = (t.item = o).container = f.createEl("pswp__zoom-wrap");
                        if (!o.src && o.html && (o.html.tagName ? a.appendChild(o.html) : a.innerHTML = o.html), qt(o), Xt(o, pe), !o.src || o.loadError || o.loaded) o.src && !o.loadError && ((i = f.createEl("pswp__img", "img")).style.opacity = 1, i.src = o.src, $t(o, i), Vt(0, o, a, i));
                        else {
                            if (o.loadComplete = function(e) {
                                    if (s) {
                                        if (t && t.index === n) {
                                            if (qt(e, !0)) return e.loadComplete = e.img = null, Xt(e, pe), Oe(e), void(t.index === x && h.updateCurrZoomItem());
                                            e.imageAppended ? !Nt && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null) : _.transform && (ne || Nt) ? Bt.push({ item: e, baseDiv: a, img: e.img, index: n, holder: t, clearPlaceholder: !0 }) : Vt(0, e, a, e.img, 0, !0)
                                        }
                                        e.loadComplete = null, e.img = null, Te("imageLoadComplete", n, e)
                                    }
                                }, f.features.transform) {
                                var r = "pswp__img pswp__img--placeholder";
                                r += o.msrc ? "" : " pswp__img--placeholder--blank";
                                var l = f.createEl(r, o.msrc ? "img" : "");
                                o.msrc && (l.src = o.msrc), $t(o, l), a.appendChild(l), o.placeholder = l
                            }
                            o.loading || Kt(o), h.allowProgressiveImg() && (!_t && _.transform ? Bt.push({ item: o, baseDiv: a, img: o.img, index: n, holder: t }) : Vt(0, o, a, o.img, 0, !0))
                        }
                        _t || n !== x ? Oe(o) : (te = a.style, Yt(o, i || o.img)), t.el.innerHTML = "", t.el.appendChild(a)
                    } else t.el.innerHTML = ""
                },
                cleanSlide: function(e) { e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1 }
            }
        });
        var Jt, Qt, en = {},
            tn = function(e, t, n) {
                var i = document.createEvent("CustomEvent"),
                    o = { origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch" };
                i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
            };
        be("Tap", {
            publicMethods: {
                initTap: function() { De("firstTouchStart", h.onTapStart), De("touchRelease", h.onTapRelease), De("destroy", function() { en = {}, Jt = null }) },
                onTapStart: function(e) { 1 < e.length && (clearTimeout(Jt), Jt = null) },
                onTapRelease: function(e, t) {
                    var n, i;
                    if (t && !q && !V && !Xe) {
                        var o = t;
                        if (Jt && (clearTimeout(Jt), Jt = null, n = o, i = en, Math.abs(n.x - i.x) < 25 && Math.abs(n.y - i.y) < 25)) return void Te("doubleTap", o);
                        if ("mouse" === t.type) return void tn(e, t, "mouse");
                        if ("BUTTON" === e.target.tagName.toUpperCase() || f.hasClass(e.target, "pswp__single-tap")) return void tn(e, t);
                        Pe(en, o), Jt = setTimeout(function() { tn(e, t), Jt = null }, 300)
                    }
                }
            }
        }), be("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() { L || (k ? De("mouseUsed", function() { h.setupDesktopZoom() }) : h.setupDesktopZoom(!0)) },
                setupDesktopZoom: function(e) {
                    Qt = {};
                    var t = "wheel mousewheel DOMMouseScroll";
                    De("bindEvents", function() { f.bind(m, t, h.handleMouseWheel) }), De("unbindEvents", function() { Qt && f.unbind(m, t, h.handleMouseWheel) }), h.mouseZoomedIn = !1;
                    var n, i = function() { h.mouseZoomedIn && (f.removeClass(m, "pswp--zoomed-in"), h.mouseZoomedIn = !1), v < 1 ? f.addClass(m, "pswp--zoom-allowed") : f.removeClass(m, "pswp--zoom-allowed"), o() },
                        o = function() { n && (f.removeClass(m, "pswp--dragging"), n = !1) };
                    De("resize", i), De("afterChange", i), De("pointerDown", function() { h.mouseZoomedIn && (n = !0, f.addClass(m, "pswp--dragging")) }), De("pointerUp", o), e || i()
                },
                handleMouseWheel: function(e) {
                    if (v <= h.currItem.fitRatio) return y.modal && (!y.closeOnScroll || Xe || X ? e.preventDefault() : E && 2 < Math.abs(e.deltaY) && (a = !0, h.close())), !0;
                    if (e.stopPropagation(), Qt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Qt.x = 18 * e.deltaX, Qt.y = 18 * e.deltaY) : (Qt.x = e.deltaX, Qt.y = e.deltaY);
                    else if ("wheelDelta" in e) e.wheelDeltaX && (Qt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Qt.y = -.16 * e.wheelDeltaY : Qt.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail" in e)) return;
                        Qt.y = e.detail
                    }
                    _e(v, !0);
                    var t = de.x - Qt.x,
                        n = de.y - Qt.y;
                    (y.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), h.panTo(t, n)
                },
                toggleDesktopZoom: function(e) {
                    e = e || { x: pe.x / 2 + fe.x, y: pe.y / 2 + fe.y };
                    var t = y.getDoubleTapZoom(!0, h.currItem),
                        n = v === t;
                    h.mouseZoomedIn = !n, h.zoomTo(n ? h.currItem.initialZoomLevel : t, e, 333), f[(n ? "remove" : "add") + "Class"](m, "pswp--zoomed-in")
                }
            }
        });
        var nn, on, an, rn, ln, sn, un, cn, dn, pn, mn, fn, hn = { history: !0, galleryUID: 1 },
            yn = function() { return mn.hash.substring(1) },
            xn = function() { nn && clearTimeout(nn), an && clearTimeout(an) },
            vn = function() {
                var e = yn(),
                    t = {};
                if (e.length < 5) return t;
                var n, i = e.split("&");
                for (n = 0; n < i.length; n++)
                    if (i[n]) {
                        var o = i[n].split("=");
                        o.length < 2 || (t[o[0]] = o[1])
                    }
                if (y.galleryPIDs) {
                    var a = t.pid;
                    for (n = t.pid = 0; n < zt.length; n++)
                        if (zt[n].pid === a) { t.pid = n; break }
                } else t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0), t
            },
            gn = function() {
                if (an && clearTimeout(an), Xe || X) an = setTimeout(gn, 500);
                else {
                    rn ? clearTimeout(on) : rn = !0;
                    var e = x + 1,
                        t = Ut(x);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var n = un + "&gid=" + y.galleryUID + "&pid=" + e;
                    cn || -1 === mn.hash.indexOf(n) && (pn = !0);
                    var i = mn.href.split("#")[0] + "#" + n;
                    fn ? "#" + n !== window.location.hash && history[cn ? "replaceState" : "pushState"]("", document.title, i) : cn ? mn.replace(i) : mn.hash = n, cn = !0, on = setTimeout(function() { rn = !1 }, 60)
                }
            };
        be("History", {
            publicMethods: {
                initHistory: function() {
                    if (f.extend(y, hn, !0), y.history) {
                        mn = window.location, cn = dn = pn = !1, un = yn(), fn = "pushState" in history, -1 < un.indexOf("gid=") && (un = (un = un.split("&gid=")[0]).split("?gid=")[0]), De("afterChange", h.updateURL), De("unbindEvents", function() { f.unbind(window, "hashchange", h.onHashChange) });
                        var e = function() { sn = !0, dn || (pn ? history.back() : un ? mn.hash = un : fn ? history.pushState("", document.title, mn.pathname + mn.search) : mn.hash = ""), xn() };
                        De("unbindEvents", function() { a && e() }), De("destroy", function() { sn || e() }), De("firstUpdate", function() { x = vn().pid });
                        var t = un.indexOf("pid="); - 1 < t && "&" === (un = un.substring(0, t)).slice(-1) && (un = un.slice(0, -1)), setTimeout(function() { s && f.bind(window, "hashchange", h.onHashChange) }, 40)
                    }
                },
                onHashChange: function() {
                    if (yn() === un) return dn = !0, void h.close();
                    rn || (ln = !0, h.goTo(vn().pid), ln = !1)
                },
                updateURL: function() { xn(), ln || (cn ? nn = setTimeout(gn, 800) : gn()) }
            }
        }), f.extend(h, je)
    }
});
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
! function(e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t() }(this, function() {
    "use strict";
    return function(l, s) {
        var n, a, r, i, t, o, u, c, p, e, d, m, f, h, w, g, v, b, _ = this,
            C = !1,
            T = !0,
            I = !0,
            E = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(e, t) { return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() { return l.currItem.src || "" }, getPageURLForShare: function() { return window.location.href }, getTextForShare: function() { return l.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
            F = function(e) {
                if (g) return !0;
                e = e || window.event, w.timeToIdle && w.mouseUsed && !p && z();
                for (var t, n, o = (e.target || e.srcElement).getAttribute("class") || "", l = 0; l < P.length; l++)(t = P[l]).onTap && -1 < o.indexOf("pswp__" + t.name) && (t.onTap(), n = !0);
                if (n) {
                    e.stopPropagation && e.stopPropagation(), g = !0;
                    var r = s.features.isOldAndroid ? 600 : 30;
                    setTimeout(function() { g = !1 }, r)
                }
            },
            x = function(e, t, n) { s[(n ? "add" : "remove") + "Class"](e, "pswp__" + t) },
            S = function() {
                var e = 1 === w.getNumItemsFn();
                e !== h && (x(a, "ui--one-slide", e), h = e)
            },
            k = function() { x(u, "share-modal--hidden", I) },
            K = function() { return (I = !I) ? (s.removeClass(u, "pswp__share-modal--fade-in"), setTimeout(function() { I && k() }, 300)) : (k(), setTimeout(function() { I || s.addClass(u, "pswp__share-modal--fade-in") }, 30)), I || O(), !1 },
            L = function(e) { var t = (e = e || window.event).target || e.srcElement; return l.shout("shareLinkClick", e, t), !(!t.href || !t.hasAttribute("download") && (window.open(t.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), I || K(), 1)) },
            O = function() {
                for (var e, t, n, o, l = "", r = 0; r < w.shareButtons.length; r++) e = w.shareButtons[r], t = w.getImageURLForShare(e), n = w.getPageURLForShare(e), o = w.getTextForShare(e), l += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(o)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", w.parseShareButtonOut && (l = w.parseShareButtonOut(e, l));
                u.children[0].innerHTML = l, u.children[0].onclick = L
            },
            R = function(e) {
                for (var t = 0; t < w.closeElClasses.length; t++)
                    if (s.hasClass(e, "pswp__" + w.closeElClasses[t])) return !0
            },
            y = 0,
            z = function() { clearTimeout(b), y = 0, p && _.setIdle(!1) },
            M = function(e) {
                var t = (e = e || window.event).relatedTarget || e.toElement;
                t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function() { _.setIdle(!0) }, w.timeToIdleOutside))
            },
            D = function(e) { m !== e && (x(d, "preloader--active", !e), m = e) },
            A = function(e) {
                var t = e.vGap;
                if (!l.likelyTouchDevice || w.mouseUsed || screen.width > w.fitControlsWidth) {
                    var n = w.barsSize;
                    if (w.captionEl && "auto" === n.bottom)
                        if (i || ((i = s.createEl("pswp__caption pswp__caption--fake")).appendChild(s.createEl("pswp__caption__center")), a.insertBefore(i, r), s.addClass(a, "pswp__ui--fit")), w.addCaptionHTMLFn(e, i, !0)) {
                            var o = i.clientHeight;
                            t.bottom = parseInt(o, 10) || 44
                        } else t.bottom = n.top;
                    else t.bottom = "auto" === n.bottom ? 0 : n.bottom;
                    t.top = n.top
                } else t.top = t.bottom = 0
            },
            P = [{ name: "caption", option: "captionEl", onInit: function(e) { r = e } }, { name: "share-modal", option: "shareEl", onInit: function(e) { u = e }, onTap: function() { K() } }, { name: "button--share", option: "shareEl", onInit: function(e) { o = e }, onTap: function() { K() } }, { name: "button--zoom", option: "zoomEl", onTap: l.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(e) { t = e } }, { name: "button--close", option: "closeEl", onTap: l.close }, { name: "button--arrow--left", option: "arrowEl", onTap: l.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: l.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { n.isFullscreen() ? n.exit() : n.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(e) { d = e } }];
        _.init = function() {
            var t;
            s.extend(l.options, E, !0), w = l.options, a = s.getChildByClass(l.scrollWrap, "pswp__ui"), (e = l.listen)("onVerticalDrag", function(e) { T && e < .95 ? _.hideControls() : !T && .95 <= e && _.showControls() }), e("onPinchClose", function(e) { T && e < .9 ? (_.hideControls(), t = !0) : t && !T && .9 < e && _.showControls() }), e("zoomGestureEnded", function() {
                    (t = !1) && !T && _.showControls()
                }), e("beforeChange", _.update), e("doubleTap", function(e) {
                    var t = l.currItem.initialZoomLevel;
                    l.getZoomLevel() !== t ? l.zoomTo(t, e, 333) : l.zoomTo(w.getDoubleTapZoom(!1, l.currItem), e, 333)
                }), e("preventDragEvent", function(e, t, n) {
                    var o = e.target || e.srcElement;
                    o && o.getAttribute("class") && -1 < e.type.indexOf("mouse") && (0 < o.getAttribute("class").indexOf("__caption") || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
                }), e("bindEvents", function() { s.bind(a, "pswpTap click", F), s.bind(l.scrollWrap, "pswpTap", _.onGlobalTap), l.likelyTouchDevice || s.bind(l.scrollWrap, "mouseover", _.onMouseOver) }), e("unbindEvents", function() { I || K(), v && clearInterval(v), s.unbind(document, "mouseout", M), s.unbind(document, "mousemove", z), s.unbind(a, "pswpTap click", F), s.unbind(l.scrollWrap, "pswpTap", _.onGlobalTap), s.unbind(l.scrollWrap, "mouseover", _.onMouseOver), n && (s.unbind(document, n.eventK, _.updateFullscreen), n.isFullscreen() && (w.hideAnimationDuration = 0, n.exit()), n = null) }), e("destroy", function() { w.captionEl && (i && a.removeChild(i), s.removeClass(r, "pswp__caption--empty")), u && (u.children[0].onclick = null), s.removeClass(a, "pswp__ui--over-close"), s.addClass(a, "pswp__ui--hidden"), _.setIdle(!1) }), w.showAnimationDuration || s.removeClass(a, "pswp__ui--hidden"), e("initialZoomIn", function() { w.showAnimationDuration && s.removeClass(a, "pswp__ui--hidden") }), e("initialZoomOut", function() { s.addClass(a, "pswp__ui--hidden") }), e("parseVerticalMargin", A),
                function() {
                    var l, r, i, e = function(e) {
                        if (e)
                            for (var t = e.length, n = 0; n < t; n++) { l = e[n], r = l.className; for (var o = 0; o < P.length; o++) i = P[o], -1 < r.indexOf("pswp__" + i.name) && (w[i.option] ? (s.removeClass(l, "pswp__element--disabled"), i.onInit && i.onInit(l)) : s.addClass(l, "pswp__element--disabled")) }
                    };
                    e(a.children);
                    var t = s.getChildByClass(a, "pswp__top-bar");
                    t && e(t.children)
                }(), w.shareEl && o && u && (I = !0), S(), w.timeToIdle && e("mouseUsed", function() { s.bind(document, "mousemove", z), s.bind(document, "mouseout", M), v = setInterval(function() { 2 == ++y && _.setIdle(!0) }, w.timeToIdle / 2) }), w.fullscreenEl && !s.features.isOldAndroid && (n || (n = _.getFullscreenAPI()), n ? (s.bind(document, n.eventK, _.updateFullscreen), _.updateFullscreen(), s.addClass(l.template, "pswp--supports-fs")) : s.removeClass(l.template, "pswp--supports-fs")), w.preloaderEl && (D(!0), e("beforeChange", function() { clearTimeout(f), f = setTimeout(function() { l.currItem && l.currItem.loading ? (!l.allowProgressiveImg() || l.currItem.img && !l.currItem.img.naturalWidth) && D(!1) : D(!0) }, w.loadingIndicatorDelay) }), e("imageLoadComplete", function(e, t) { l.currItem === t && D(!0) }))
        }, _.setIdle = function(e) { x(a, "ui--idle", p = e) }, _.update = function() { C = !(!T || !l.currItem || (_.updateIndexIndicator(), w.captionEl && (w.addCaptionHTMLFn(l.currItem, r), x(r, "caption--empty", !l.currItem.title)), 0)), I || K(), S() }, _.updateFullscreen = function(e) { e && setTimeout(function() { l.setScrollOffset(0, s.getScrollY()) }, 50), s[(n.isFullscreen() ? "add" : "remove") + "Class"](l.template, "pswp--fs") }, _.updateIndexIndicator = function() { w.counterEl && (t.innerHTML = l.getCurrentIndex() + 1 + w.indexIndicatorSep + w.getNumItemsFn()) }, _.onGlobalTap = function(e) {
            var t = (e = e || window.event).target || e.srcElement;
            if (!g)
                if (e.detail && "mouse" === e.detail.pointerType) {
                    if (R(t)) return void l.close();
                    s.hasClass(t, "pswp__img") && (1 === l.getZoomLevel() && l.getZoomLevel() <= l.currItem.fitRatio ? w.clickToCloseNonZoomable && l.close() : l.toggleDesktopZoom(e.detail.releasePoint))
                } else if (w.tapToToggleControls && (T ? _.hideControls() : _.showControls()), w.tapToClose && (s.hasClass(t, "pswp__img") || R(t))) return void l.close()
        }, _.onMouseOver = function(e) {
            var t = (e = e || window.event).target || e.srcElement;
            x(a, "ui--over-close", R(t))
        }, _.hideControls = function() { s.addClass(a, "pswp__ui--hidden"), T = !1 }, _.showControls = function() { T = !0, C || _.update(), s.removeClass(a, "pswp__ui--hidden") }, _.supportsFullscreen = function() { var e = document; return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen) }, _.getFullscreenAPI = function() {
            var e, t = document.documentElement,
                n = "fullscreenchange";
            return t.requestFullscreen ? e = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: n } : t.mozRequestFullScreen ? e = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + n } : t.webkitRequestFullscreen ? e = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + n } : t.msRequestFullscreen && (e = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), e && (e.enter = function() { return c = w.closeOnScroll, w.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? l.template[this.enterK]() : void l.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, e.exit = function() { return w.closeOnScroll = c, document[this.exitK]() }, e.isFullscreen = function() { return document[this.elementK] }), e
        }
    }
});
/*
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */
! function(c) {
    c.fn.jflickrfeed = function(p, i) {
        var e = (p = c.extend(!0, { flickrbase: "http://api.flickr.com/services/feeds/", feedapi: "photos_public.gne", limit: 20, qstrings: { lang: "en-us", format: "json", jsoncallback: "?" }, cleanDescription: !0, useTemplate: !0, itemTemplate: "", itemCallback: function() {} }, p)).flickrbase + p.feedapi + "?",
            a = !0;
        for (var t in p.qstrings) a || (e += "&"), e += t + "=" + p.qstrings[t], a = !1;
        return c(this).each(function() {
            var r = c(this),
                l = this;
            c.getJSON(e, function(e) {
                c.each(e.items, function(e, i) {
                    if (e < p.limit) {
                        if (p.cleanDescription) {
                            var a = /<p>(.*?)<\/p>/g,
                                t = i.description;
                            a.test(t) && (i.description = t.match(a)[2], null != i.description && (i.description = i.description.replace("<p>", "").replace("</p>", "")))
                        }
                        if (i.image_s = i.media.m.replace("_m", "_s"), i.image_t = i.media.m.replace("_m", "_t"), i.image_m = i.media.m.replace("_m", "_m"), i.image = i.media.m.replace("_m", ""), i.image_b = i.media.m.replace("_m", "_b"), delete i.media, p.useTemplate) {
                            var c = p.itemTemplate;
                            for (var n in i) {
                                var m = new RegExp("{{" + n + "}}", "g");
                                c = c.replace(m, i[n])
                            }
                            r.append(c)
                        }
                        p.itemCallback.call(l, i)
                    }
                }), c.isFunction(i) && i.call(l, e)
            })
        })
    }
}(jQuery);
"function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(u, t, e, s) {
        var a = {
            API_URL: "https://api.instagram.com/v1",
            initialize: function(t, e) { this.elem = e, this.$elem = u(e), this.accessToken = u.fn.spectragram.accessData.accessToken, this.options = u.extend({}, u.fn.spectragram.options, t), this.endpoints = this.setEndpoints(), this.messages = { defaultImageAltText: "Instagram Photo related with " + this.options.query, notFound: "This user account is private or doesn't have any photos." } },
            setEndpoints: function() { return { usersSelf: "/users/self/?access_token=" + this.accessToken, usersMediaRecent: "/users/self/media/recent/?&count=" + this.options.max + "&access_token=" + this.accessToken, tagsMediaRecent: "/tags/" + this.options.query + "/media/recent?&count=" + this.options.max + "&access_token=" + this.accessToken } },
            getPhotos: function(t) {
                var s = this;
                s.fetch(t).done(function(t) {
                    var e = s.options.query || "User";
                    t.data.length ? s.display(t) : u.error("Spectragram.js - Error: " + e + " does not have photos.")
                })
            },
            getUserFeed: function() { this.getPhotos(this.endpoints.usersMediaRecent) },
            getRecentTagged: function() { this.getPhotos(this.endpoints.tagsMediaRecent) },
            fetch: function(t) { var e = this.API_URL + t; return u.ajax({ type: "GET", dataType: "jsonp", cache: !1, url: e }) },
            display: function(t) {
                var e, s, a, i, n, o, r, c, h, d = [];
                if (a = 0 === u(this.options.wrapEachWith).length, void 0 === t.data || 200 !== t.meta.code || 0 === t.data.length) a ? this.$elem.append(this.messages.notFound) : this.$elem.append(u(this.options.wrapEachWith).append(this.messages.notFound));
                else {
                    r = this.options.max >= t.data.length ? t.data.length : this.options.max, c = this.options.size;
                    for (var p = 0; p < r; p++) o = "small" === c ? (h = t.data[p].images.thumbnail.url, n = t.data[p].images.thumbnail.height, t.data[p].images.thumbnail.width) : "medium" === c ? (h = t.data[p].images.low_resolution.url, n = t.data[p].images.low_resolution.height, t.data[p].images.low_resolution.width) : (h = t.data[p].images.standard_resolution.url, n = t.data[p].images.standard_resolution.height, t.data[p].images.standard_resolution.width), i = null !== t.data[p].caption ? u("<span>").text(t.data[p].caption.text).html() : this.messages.defaultImageAltText, s = u("<img>", { alt: i, attr: { height: n, width: o }, src: h }), e = u("<a>", { href: t.data[p].link, target: "_blank", title: i }).append(s), a ? d.push(e) : d.push(u(this.options.wrapEachWith).append(e));
                    this.$elem.append(d)
                }
                "function" == typeof this.options.complete && this.options.complete.call(this)
            }
        };
        jQuery.fn.spectragram = function(e, s) {
            jQuery.fn.spectragram.accessData.accessToken ? this.each(function() {
                var t = Object.create(a);
                if (t.initialize(s, this), t[e]) return t[e](this);
                u.error("Method " + e + " does not exist on jQuery.spectragram")
            }) : u.error("You must define an accessToken on jQuery.spectragram")
        }, jQuery.fn.spectragram.options = { complete: null, max: 20, query: "instagram", size: "medium", wrapEachWith: "<li></li>" }, jQuery.fn.spectragram.accessData = { accessToken: null }
    }(jQuery, window, document);
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function(c) {
    c.fn.tweet = function(e) {
        var o = c.extend({ modpath: "/twitter/", username: null, list_id: null, list: null, favorites: !1, query: null, avatar_size: null, count: 3, fetch: null, page: 1, retweets: !0, intro_text: null, outro_text: null, join_text: null, auto_join_text_default: "i said,", auto_join_text_ed: "i", auto_join_text_ing: "i am", auto_join_text_reply: "i replied to", auto_join_text_url: "i was looking at", loading_text: null, refresh_interval: null, twitter_url: "twitter.com", twitter_api_url: "api.twitter.com", twitter_search_url: "api.twitter.com", template: "{avatar}{time}{join}{text}", comparator: function(e, t) { return t.tweet_time - e.tweet_time }, filter: function(e) { return !0 } }, e),
            s = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

        function _(e, t) {
            if ("string" != typeof e) return e(t);
            var r = e;
            for (var a in t) {
                var n = t[a];
                r = r.replace(new RegExp("{" + a + "}", "g"), null === n ? "" : n)
            }
            return r
        }

        function t(t, r) { return function() { var e = []; return this.each(function() { e.push(this.replace(t, r)) }), c(e) } }

        function u(e) { return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;") }

        function l(e) {
            var t, r, a, i, n = {};
            return n.item = e, n.source = e.source, n.name = e.from_user_name || e.user.name, n.screen_name = e.from_user || e.user.screen_name, n.avatar_size = o.avatar_size, n.avatar_url = function e(t, r) { return r ? "user" in t ? t.user.profile_image_url_https : e(t, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : t.profile_image_url || t.user.profile_image_url }(e, "https:" === document.location.protocol), n.retweet = void 0 !== e.retweeted_status, n.tweet_time = (t = e.created_at, Date.parse(t.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))), n.join_text = "auto" == o.join_text ? (r = e.text).match(/^(@([A-Za-z0-9-_]+)) .*/i) ? o.auto_join_text_reply : r.match(s) ? o.auto_join_text_url : r.match(/^((\w+ed)|just) .*/im) ? o.auto_join_text_ed : r.match(/^(\w*ing) .*/i) ? o.auto_join_text_ing : o.auto_join_text_default : o.join_text, n.tweet_id = e.id_str, n.twitter_base = "http://" + o.twitter_url + "/", n.user_url = n.twitter_base + n.screen_name, n.tweet_url = n.user_url + "/status/" + n.tweet_id, n.reply_url = n.twitter_base + "intent/tweet?in_reply_to=" + n.tweet_id, n.retweet_url = n.twitter_base + "intent/retweet?tweet_id=" + n.tweet_id, n.favorite_url = n.twitter_base + "intent/favorite?tweet_id=" + n.tweet_id, n.retweeted_screen_name = n.retweet && e.retweeted_status.user.screen_name, n.tweet_relative_time = function(e) {
                var t = 1 < arguments.length ? arguments[1] : new Date,
                    r = parseInt((t.getTime() - e) / 1e3, 10);
                return r < 1 ? "just now" : r < 60 ? r + " seconds ago" : r < 120 ? "about a minute ago" : r < 2700 ? "about " + parseInt(r / 60, 10).toString() + " minutes ago" : r < 7200 ? "about an hour ago" : r < 86400 ? "about " + parseInt(r / 3600, 10).toString() + " hours ago" : r < 172800 ? "about a day ago" : "about " + parseInt(r / 86400, 10).toString() + " days ago"
            }(n.tweet_time), n.entities = e.entities ? (e.entities.urls || []).concat(e.entities.media || []) : [], n.tweet_raw_text = n.retweet ? "RT @" + n.retweeted_screen_name + " " + e.retweeted_status.text : e.text, n.tweet_text = c([(a = n.tweet_raw_text, i = n.entities, a.replace(s, function(e) { for (var t = /^[a-z]+:/i.test(e) ? e : "http://" + e, r = e, a = 0; a < i.length; ++a) { var n = i[a]; if (n.url == t && n.expanded_url) { t = n.expanded_url, r = n.display_url; break } } return '<a href="' + u(t) + '">' + u(r) + "</a>" }))]).linkUser().linkHash()[0], n.tweet_text_fancy = c([n.tweet_text]).makeHeart()[0], n.user = _('<a class="tweet_user" href="{user_url}">{screen_name}</a>', n), n.join = o.join_text ? _(' <span class="tweet_join">{join_text}</span> ', n) : " ", n.avatar = n.avatar_size ? _('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', n) : "", n.time = _('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', n), n.text = _('<span class="tweet_text">{tweet_text_fancy}</span>', n), n.reply_action = _('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', n), n.retweet_action = _('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', n), n.favorite_action = _('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', n), n
        }
        return c.extend({ tweet: { t: _ } }), c.fn.extend({ linkUser: t(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + o.twitter_url + '/$2">$2</a>'), linkHash: t(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="https://twitter.com/search?q=%23$1' + (o.username && 1 == o.username.length && !o.list ? "&from=" + o.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'), makeHeart: t(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>") }), this.each(function(e, n) {
            var i = c('<ul class="tweet_list">'),
                s = '<p class="tweet_intro">' + o.intro_text + "</p>",
                u = '<p class="tweet_outro">' + o.outro_text + "</p>",
                t = c('<p class="loading">' + o.loading_text + "</p>");
            o.username && "string" == typeof o.username && (o.username = [o.username]), c(n).unbind("tweet:load").bind("tweet:load", function() {
                o.loading_text && c(n).empty().append(t), c.ajax({
                    dataType: "json",
                    type: "post",
                    async: !0,
                    url: o.modpath || "/twitter/",
                    data: {
                        request: function() {
                            o.modpath;
                            var e = null === o.fetch ? o.count : o.fetch,
                                t = { include_entities: 1 };
                            if (o.list) return { host: o.twitter_api_url, url: "/1.1/lists/statuses.json", parameters: c.extend({}, t, { list_id: o.list_id, slug: o.list, owner_screen_name: o.username, page: o.page, count: e, include_rts: o.retweets ? 1 : 0 }) };
                            if (o.favorites) return { host: o.twitter_api_url, url: "/1.1/favorites/list.json", parameters: c.extend({}, t, { list_id: o.list_id, screen_name: o.username, page: o.page, count: e }) };
                            if (null === o.query && 1 === o.username.length) return { host: o.twitter_api_url, url: "/1.1/statuses/user_timeline.json", parameters: c.extend({}, t, { screen_name: o.username, page: o.page, count: e, include_rts: o.retweets ? 1 : 0 }) };
                            var r = o.query || "from:" + o.username.join(" OR from:");
                            return { host: o.twitter_search_url, url: "/1.1/search/tweets.json", parameters: c.extend({}, t, { q: r, count: e }) }
                        }()
                    },
                    success: function(e, t) {
                        e.message && console.log(e.message);
                        var r = e.response;
                        c(n).empty().append(i), o.intro_text && i.before(s), i.empty(), void 0 !== r.statuses ? resp = r.statuses : void 0 !== r.results ? resp = r.results : resp = r;
                        var a = c.map(resp, l);
                        a = c.grep(a, o.filter).sort(o.comparator).slice(0, o.count), i.append(c.map(a, function(e) { return "<li>" + _(o.template, e) + "</li>" }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"), o.outro_text && i.after(u), c(n).trigger("loaded").trigger(a ? "empty" : "full"), o.refresh_interval && window.setTimeout(function() { c(n).trigger("tweet:load") }, 1e3 * o.refresh_interval)
                    }
                })
            }).trigger("tweet:load")
        })
    }
});

function hexToRgb(e) { e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, i) { return t + t + a + a + i + i }); var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null }

function clamp(e, t, a) { return Math.min(Math.max(e, t), a) }

function isInArray(e, t) { return -1 < t.indexOf(e) }
var pJS = function(e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = { canvas: { el: a, w: a.offsetWidth, h: a.offsetHeight }, particles: { number: { value: 400, density: { enable: !0, value_area: 800 } }, color: { value: "#fff" }, shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } }, size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } }, line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 }, move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } }, array: [] }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: .4 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }, mouse: {} }, retina_detect: !1, fn: { interact: {}, modes: {}, vendors: {} }, tmp: {} };
    var m = this.pJS;
    t && Object.deepExtend(m, t), m.tmp.obj = { size_value: m.particles.size.value, size_anim_speed: m.particles.size.anim.speed, move_speed: m.particles.move.speed, line_linked_distance: m.particles.line_linked.distance, line_linked_width: m.particles.line_linked.width, mode_grab_distance: m.interactivity.modes.grab.distance, mode_bubble_distance: m.interactivity.modes.bubble.distance, mode_bubble_size: m.interactivity.modes.bubble.size, mode_repulse_distance: m.interactivity.modes.repulse.distance }, m.fn.retinaInit = function() { m.retina_detect && 1 < window.devicePixelRatio ? (m.canvas.pxratio = window.devicePixelRatio, m.tmp.retina = !0) : (m.canvas.pxratio = 1, m.tmp.retina = !1), m.canvas.w = m.canvas.el.offsetWidth * m.canvas.pxratio, m.canvas.h = m.canvas.el.offsetHeight * m.canvas.pxratio, m.particles.size.value = m.tmp.obj.size_value * m.canvas.pxratio, m.particles.size.anim.speed = m.tmp.obj.size_anim_speed * m.canvas.pxratio, m.particles.move.speed = m.tmp.obj.move_speed * m.canvas.pxratio, m.particles.line_linked.distance = m.tmp.obj.line_linked_distance * m.canvas.pxratio, m.interactivity.modes.grab.distance = m.tmp.obj.mode_grab_distance * m.canvas.pxratio, m.interactivity.modes.bubble.distance = m.tmp.obj.mode_bubble_distance * m.canvas.pxratio, m.particles.line_linked.width = m.tmp.obj.line_linked_width * m.canvas.pxratio, m.interactivity.modes.bubble.size = m.tmp.obj.mode_bubble_size * m.canvas.pxratio, m.interactivity.modes.repulse.distance = m.tmp.obj.mode_repulse_distance * m.canvas.pxratio }, m.fn.canvasInit = function() { m.canvas.ctx = m.canvas.el.getContext("2d") }, m.fn.canvasSize = function() { m.canvas.el.width = m.canvas.w, m.canvas.el.height = m.canvas.h, m && m.interactivity.events.resize && window.addEventListener("resize", function() { m.canvas.w = m.canvas.el.offsetWidth, m.canvas.h = m.canvas.el.offsetHeight, m.tmp.retina && (m.canvas.w *= m.canvas.pxratio, m.canvas.h *= m.canvas.pxratio), m.canvas.el.width = m.canvas.w, m.canvas.el.height = m.canvas.h, m.particles.move.enable || (m.fn.particlesEmpty(), m.fn.particlesCreate(), m.fn.particlesDraw(), m.fn.vendors.densityAutoParticles()), m.fn.vendors.densityAutoParticles() }) }, m.fn.canvasPaint = function() { m.canvas.ctx.fillRect(0, 0, m.canvas.w, m.canvas.h) }, m.fn.canvasClear = function() { m.canvas.ctx.clearRect(0, 0, m.canvas.w, m.canvas.h) }, m.fn.particle = function(e, t, a) {
        if (this.radius = (m.particles.size.random ? Math.random() : 1) * m.particles.size.value, m.particles.size.anim.enable && (this.size_status = !1, this.vs = m.particles.size.anim.speed / 100, m.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = a ? a.x : Math.random() * m.canvas.w, this.y = a ? a.y : Math.random() * m.canvas.h, this.x > m.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > m.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), m.particles.move.bounce && m.fn.vendors.checkOverlap(this, a), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var i = e.value[Math.floor(Math.random() * m.particles.color.value.length)];
                this.color.rgb = hexToRgb(i)
            } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
        else "random" == e.value ? this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (m.particles.opacity.random ? Math.random() : 1) * m.particles.opacity.value, m.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = m.particles.opacity.anim.speed / 100, m.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var s = {};
        switch (m.particles.move.direction) {
            case "top":
                s = { x: 0, y: -1 };
                break;
            case "top-right":
                s = { x: .5, y: -.5 };
                break;
            case "right":
                s = { x: 1, y: -0 };
                break;
            case "bottom-right":
                s = { x: .5, y: .5 };
                break;
            case "bottom":
                s = { x: 0, y: 1 };
                break;
            case "bottom-left":
                s = { x: -.5, y: 1 };
                break;
            case "left":
                s = { x: -1, y: 0 };
                break;
            case "top-left":
                s = { x: -.5, y: -.5 };
                break;
            default:
                s = { x: 0, y: 0 }
        }
        m.particles.move.straight ? (this.vx = s.x, this.vy = s.y, m.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var n = m.particles.shape.type;
        if ("object" == typeof n) {
            if (n instanceof Array) {
                var r = n[Math.floor(Math.random() * n.length)];
                this.shape = r
            }
        } else this.shape = n;
        if ("image" == this.shape) {
            var c = m.particles.shape;
            this.img = { src: c.image.src, ratio: c.image.width / c.image.height }, this.img.ratio || (this.img.ratio = 1), "svg" == m.tmp.img_type && null != m.tmp.source_svg && (m.fn.vendors.createSvgImg(this), m.tmp.pushing && (this.img.loaded = !1))
        }
    }, m.fn.particle.prototype.draw = function() {
        var e = this;
        if (null != e.radius_bubble) var t = e.radius_bubble;
        else t = e.radius;
        if (null != e.opacity_bubble) var a = e.opacity_bubble;
        else a = e.opacity;
        if (e.color.rgb) var i = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + a + ")";
        else i = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + a + ")";
        switch (m.canvas.ctx.fillStyle = i, m.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                m.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                m.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                m.fn.vendors.drawShape(m.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                m.fn.vendors.drawShape(m.canvas.ctx, e.x - t / (m.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (m.particles.shape.polygon.nb_sides / 3), m.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                m.fn.vendors.drawShape(m.canvas.ctx, e.x - 2 * t / (m.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (m.particles.shape.polygon.nb_sides / 3), m.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == m.tmp.img_type) var s = e.img.obj;
                else s = m.tmp.img_obj;
                s && m.canvas.ctx.drawImage(s, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        m.canvas.ctx.closePath(), 0 < m.particles.shape.stroke.width && (m.canvas.ctx.strokeStyle = m.particles.shape.stroke.color, m.canvas.ctx.lineWidth = m.particles.shape.stroke.width, m.canvas.ctx.stroke()), m.canvas.ctx.fill()
    }, m.fn.particlesCreate = function() { for (var e = 0; e < m.particles.number.value; e++) m.particles.array.push(new m.fn.particle(m.particles.color, m.particles.opacity.value)) }, m.fn.particlesUpdate = function() {
        for (var e = 0; e < m.particles.array.length; e++) {
            var t = m.particles.array[e];
            if (m.particles.move.enable) {
                var a = m.particles.move.speed / 2;
                t.x += t.vx * a, t.y += t.vy * a
            }
            if (m.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= m.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= m.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), m.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= m.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= m.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == m.particles.move.out_mode) var i = { x_left: t.radius, x_right: m.canvas.w, y_top: t.radius, y_bottom: m.canvas.h };
            else i = { x_left: -t.radius, x_right: m.canvas.w + t.radius, y_top: -t.radius, y_bottom: m.canvas.h + t.radius };
            switch (t.x - t.radius > m.canvas.w ? (t.x = i.x_left, t.y = Math.random() * m.canvas.h) : t.x + t.radius < 0 && (t.x = i.x_right, t.y = Math.random() * m.canvas.h), t.y - t.radius > m.canvas.h ? (t.y = i.y_top, t.x = Math.random() * m.canvas.w) : t.y + t.radius < 0 && (t.y = i.y_bottom, t.x = Math.random() * m.canvas.w), m.particles.move.out_mode) {
                case "bounce":
                    t.x + t.radius > m.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > m.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", m.interactivity.events.onhover.mode) && m.fn.modes.grabParticle(t), (isInArray("bubble", m.interactivity.events.onhover.mode) || isInArray("bubble", m.interactivity.events.onclick.mode)) && m.fn.modes.bubbleParticle(t), (isInArray("repulse", m.interactivity.events.onhover.mode) || isInArray("repulse", m.interactivity.events.onclick.mode)) && m.fn.modes.repulseParticle(t), m.particles.line_linked.enable || m.particles.move.attract.enable)
                for (var s = e + 1; s < m.particles.array.length; s++) {
                    var n = m.particles.array[s];
                    m.particles.line_linked.enable && m.fn.interact.linkParticles(t, n), m.particles.move.attract.enable && m.fn.interact.attractParticles(t, n), m.particles.move.bounce && m.fn.interact.bounceParticles(t, n)
                }
        }
    }, m.fn.particlesDraw = function() { m.canvas.ctx.clearRect(0, 0, m.canvas.w, m.canvas.h), m.fn.particlesUpdate(); for (var e = 0; e < m.particles.array.length; e++) { m.particles.array[e].draw() } }, m.fn.particlesEmpty = function() { m.particles.array = [] }, m.fn.particlesRefresh = function() { cancelRequestAnimFrame(m.fn.checkAnimFrame), cancelRequestAnimFrame(m.fn.drawAnimFrame), m.tmp.source_svg = void 0, m.tmp.img_obj = void 0, m.tmp.count_svg = 0, m.fn.particlesEmpty(), m.fn.canvasClear(), m.fn.vendors.start() }, m.fn.interact.linkParticles = function(e, t) {
        var a = e.x - t.x,
            i = e.y - t.y,
            s = Math.sqrt(a * a + i * i);
        if (s <= m.particles.line_linked.distance) {
            var n = m.particles.line_linked.opacity - s / (1 / m.particles.line_linked.opacity) / m.particles.line_linked.distance;
            if (0 < n) {
                var r = m.particles.line_linked.color_rgb_line;
                m.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", m.canvas.ctx.lineWidth = m.particles.line_linked.width, m.canvas.ctx.beginPath(), m.canvas.ctx.moveTo(e.x, e.y), m.canvas.ctx.lineTo(t.x, t.y), m.canvas.ctx.stroke(), m.canvas.ctx.closePath()
            }
        }
    }, m.fn.interact.attractParticles = function(e, t) {
        var a = e.x - t.x,
            i = e.y - t.y;
        if (Math.sqrt(a * a + i * i) <= m.particles.line_linked.distance) {
            var s = a / (1e3 * m.particles.move.attract.rotateX),
                n = i / (1e3 * m.particles.move.attract.rotateY);
            e.vx -= s, e.vy -= n, t.vx += s, t.vy += n
        }
    }, m.fn.interact.bounceParticles = function(e, t) {
        var a = e.x - t.x,
            i = e.y - t.y;
        Math.sqrt(a * a + i * i) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, m.fn.modes.pushParticles = function(e, t) { m.tmp.pushing = !0; for (var a = 0; a < e; a++) m.particles.array.push(new m.fn.particle(m.particles.color, m.particles.opacity.value, { x: t ? t.pos_x : Math.random() * m.canvas.w, y: t ? t.pos_y : Math.random() * m.canvas.h })), a == e - 1 && (m.particles.move.enable || m.fn.particlesDraw(), m.tmp.pushing = !1) }, m.fn.modes.removeParticles = function(e) { m.particles.array.splice(0, e), m.particles.move.enable || m.fn.particlesDraw() }, m.fn.modes.bubbleParticle = function(c) {
        function e() { c.opacity_bubble = c.opacity, c.radius_bubble = c.radius }

        function t(e, t, a, i, s) {
            if (e != t)
                if (m.tmp.bubble_duration_end) { if (null != a) r = e + (e - (i - v * (i - e) / m.interactivity.modes.bubble.duration)), "size" == s && (c.radius_bubble = r), "opacity" == s && (c.opacity_bubble = r) } else if (l <= m.interactivity.modes.bubble.distance) {
                if (null != a) var n = a;
                else n = i;
                if (n != e) { var r = i - v * (i - e) / m.interactivity.modes.bubble.duration; "size" == s && (c.radius_bubble = r), "opacity" == s && (c.opacity_bubble = r) }
            } else "size" == s && (c.radius_bubble = void 0), "opacity" == s && (c.opacity_bubble = void 0)
        }
        if (m.interactivity.events.onhover.enable && isInArray("bubble", m.interactivity.events.onhover.mode)) {
            var a = c.x - m.interactivity.mouse.pos_x,
                i = c.y - m.interactivity.mouse.pos_y,
                s = 1 - (l = Math.sqrt(a * a + i * i)) / m.interactivity.modes.bubble.distance;
            if (l <= m.interactivity.modes.bubble.distance) {
                if (0 <= s && "mousemove" == m.interactivity.status) {
                    if (m.interactivity.modes.bubble.size != m.particles.size.value)
                        if (m.interactivity.modes.bubble.size > m.particles.size.value) { 0 <= (r = c.radius + m.interactivity.modes.bubble.size * s) && (c.radius_bubble = r) } else {
                            var n = c.radius - m.interactivity.modes.bubble.size,
                                r = c.radius - n * s;
                            c.radius_bubble = 0 < r ? r : 0
                        }
                    if (m.interactivity.modes.bubble.opacity != m.particles.opacity.value)
                        if (m.interactivity.modes.bubble.opacity > m.particles.opacity.value) {
                            (o = m.interactivity.modes.bubble.opacity * s) > c.opacity && o <= m.interactivity.modes.bubble.opacity && (c.opacity_bubble = o)
                        } else {
                            var o;
                            (o = c.opacity - (m.particles.opacity.value - m.interactivity.modes.bubble.opacity) * s) < c.opacity && o >= m.interactivity.modes.bubble.opacity && (c.opacity_bubble = o)
                        }
                }
            } else e();
            "mouseleave" == m.interactivity.status && e()
        } else if (m.interactivity.events.onclick.enable && isInArray("bubble", m.interactivity.events.onclick.mode)) {
            if (m.tmp.bubble_clicking) {
                a = c.x - m.interactivity.mouse.click_pos_x, i = c.y - m.interactivity.mouse.click_pos_y;
                var l = Math.sqrt(a * a + i * i),
                    v = ((new Date).getTime() - m.interactivity.mouse.click_time) / 1e3;
                v > m.interactivity.modes.bubble.duration && (m.tmp.bubble_duration_end = !0), v > 2 * m.interactivity.modes.bubble.duration && (m.tmp.bubble_clicking = !1, m.tmp.bubble_duration_end = !1)
            }
            m.tmp.bubble_clicking && (t(m.interactivity.modes.bubble.size, m.particles.size.value, c.radius_bubble, c.radius, "size"), t(m.interactivity.modes.bubble.opacity, m.particles.opacity.value, c.opacity_bubble, c.opacity, "opacity"))
        }
    }, m.fn.modes.repulseParticle = function(i) {
        if (m.interactivity.events.onhover.enable && isInArray("repulse", m.interactivity.events.onhover.mode) && "mousemove" == m.interactivity.status) {
            var e = i.x - m.interactivity.mouse.pos_x,
                t = i.y - m.interactivity.mouse.pos_y,
                a = Math.sqrt(e * e + t * t),
                s = e / a,
                n = t / a,
                r = clamp(1 / (o = m.interactivity.modes.repulse.distance) * (-1 * Math.pow(a / o, 2) + 1) * o * 100, 0, 50),
                c = { x: i.x + s * r, y: i.y + n * r };
            "bounce" == m.particles.move.out_mode ? (0 < c.x - i.radius && c.x + i.radius < m.canvas.w && (i.x = c.x), 0 < c.y - i.radius && c.y + i.radius < m.canvas.h && (i.y = c.y)) : (i.x = c.x, i.y = c.y)
        } else if (m.interactivity.events.onclick.enable && isInArray("repulse", m.interactivity.events.onclick.mode))
            if (m.tmp.repulse_finish || (m.tmp.repulse_count++, m.tmp.repulse_count == m.particles.array.length && (m.tmp.repulse_finish = !0)), m.tmp.repulse_clicking) {
                var o = Math.pow(m.interactivity.modes.repulse.distance / 6, 3),
                    l = m.interactivity.mouse.click_pos_x - i.x,
                    v = m.interactivity.mouse.click_pos_y - i.y,
                    p = l * l + v * v,
                    d = -o / p * 1;
                p <= o && function() {
                    var e = Math.atan2(v, l);
                    if (i.vx = d * Math.cos(e), i.vy = d * Math.sin(e), "bounce" == m.particles.move.out_mode) {
                        var t = i.x + i.vx,
                            a = i.y + i.vy;
                        t + i.radius > m.canvas.w ? i.vx = -i.vx : t - i.radius < 0 && (i.vx = -i.vx), a + i.radius > m.canvas.h ? i.vy = -i.vy : a - i.radius < 0 && (i.vy = -i.vy)
                    }
                }()
            } else 0 == m.tmp.repulse_clicking && (i.vx = i.vx_i, i.vy = i.vy_i)
    }, m.fn.modes.grabParticle = function(e) {
        if (m.interactivity.events.onhover.enable && "mousemove" == m.interactivity.status) {
            var t = e.x - m.interactivity.mouse.pos_x,
                a = e.y - m.interactivity.mouse.pos_y,
                i = Math.sqrt(t * t + a * a);
            if (i <= m.interactivity.modes.grab.distance) {
                var s = m.interactivity.modes.grab.line_linked.opacity - i / (1 / m.interactivity.modes.grab.line_linked.opacity) / m.interactivity.modes.grab.distance;
                if (0 < s) {
                    var n = m.particles.line_linked.color_rgb_line;
                    m.canvas.ctx.strokeStyle = "rgba(" + n.r + "," + n.g + "," + n.b + "," + s + ")", m.canvas.ctx.lineWidth = m.particles.line_linked.width, m.canvas.ctx.beginPath(), m.canvas.ctx.moveTo(e.x, e.y), m.canvas.ctx.lineTo(m.interactivity.mouse.pos_x, m.interactivity.mouse.pos_y), m.canvas.ctx.stroke(), m.canvas.ctx.closePath()
                }
            }
        }
    }, m.fn.vendors.eventsListeners = function() {
        "window" == m.interactivity.detect_on ? m.interactivity.el = window : m.interactivity.el = m.canvas.el, (m.interactivity.events.onhover.enable || m.interactivity.events.onclick.enable) && (m.interactivity.el.addEventListener("mousemove", function(e) {
            if (m.interactivity.el == window) var t = e.clientX,
                a = e.clientY;
            else t = e.offsetX || e.clientX, a = e.offsetY || e.clientY;
            m.interactivity.mouse.pos_x = t, m.interactivity.mouse.pos_y = a, m.tmp.retina && (m.interactivity.mouse.pos_x *= m.canvas.pxratio, m.interactivity.mouse.pos_y *= m.canvas.pxratio), m.interactivity.status = "mousemove"
        }), m.interactivity.el.addEventListener("mouseleave", function(e) { m.interactivity.mouse.pos_x = null, m.interactivity.mouse.pos_y = null, m.interactivity.status = "mouseleave" })), m.interactivity.events.onclick.enable && m.interactivity.el.addEventListener("click", function() {
            if (m.interactivity.mouse.click_pos_x = m.interactivity.mouse.pos_x, m.interactivity.mouse.click_pos_y = m.interactivity.mouse.pos_y, m.interactivity.mouse.click_time = (new Date).getTime(), m.interactivity.events.onclick.enable) switch (m.interactivity.events.onclick.mode) {
                case "push":
                    m.particles.move.enable ? m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb, m.interactivity.mouse) : 1 == m.interactivity.modes.push.particles_nb ? m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb, m.interactivity.mouse) : 1 < m.interactivity.modes.push.particles_nb && m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    m.fn.modes.removeParticles(m.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    m.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    m.tmp.repulse_clicking = !0, m.tmp.repulse_count = 0, m.tmp.repulse_finish = !1, setTimeout(function() { m.tmp.repulse_clicking = !1 }, 1e3 * m.interactivity.modes.repulse.duration)
            }
        })
    }, m.fn.vendors.densityAutoParticles = function() {
        if (m.particles.number.density.enable) {
            var e = m.canvas.el.width * m.canvas.el.height / 1e3;
            m.tmp.retina && (e /= 2 * m.canvas.pxratio);
            var t = e * m.particles.number.value / m.particles.number.density.value_area,
                a = m.particles.array.length - t;
            a < 0 ? m.fn.modes.pushParticles(Math.abs(a)) : m.fn.modes.removeParticles(a)
        }
    }, m.fn.vendors.checkOverlap = function(e, t) {
        for (var a = 0; a < m.particles.array.length; a++) {
            var i = m.particles.array[a],
                s = e.x - i.x,
                n = e.y - i.y;
            Math.sqrt(s * s + n * n) <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * m.canvas.w, e.y = t ? t.y : Math.random() * m.canvas.h, m.fn.vendors.checkOverlap(e))
        }
    }, m.fn.vendors.createSvgImg = function(n) {
        var e = m.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, t, a, i) {
                if (n.color.rgb) var s = "rgba(" + n.color.rgb.r + "," + n.color.rgb.g + "," + n.color.rgb.b + "," + n.opacity + ")";
                else s = "hsla(" + n.color.hsl.h + "," + n.color.hsl.s + "%," + n.color.hsl.l + "%," + n.opacity + ")";
                return s
            }),
            t = new Blob([e], { type: "image/svg+xml;charset=utf-8" }),
            a = window.URL || window.webkitURL || window,
            i = a.createObjectURL(t),
            s = new Image;
        s.addEventListener("load", function() { n.img.obj = s, n.img.loaded = !0, a.revokeObjectURL(i), m.tmp.count_svg++ }), s.src = i
    }, m.fn.vendors.destroypJS = function() { cancelAnimationFrame(m.fn.drawAnimFrame), a.remove(), pJSDom = null }, m.fn.vendors.drawShape = function(e, t, a, i, s, n) {
        var r = s * n,
            c = s / n,
            o = 180 * (c - 2) / c,
            l = Math.PI - Math.PI * o / 180;
        e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
        for (var v = 0; v < r; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore()
    }, m.fn.vendors.exportImg = function() { window.open(m.canvas.el.toDataURL("image/png"), "_blank") }, m.fn.vendors.loadImg = function(e) {
        if (m.tmp.img_error = void 0, "" != m.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", m.particles.shape.image.src), t.onreadystatechange = function(e) { 4 == t.readyState && (200 == t.status ? (m.tmp.source_svg = e.currentTarget.response, m.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), m.tmp.img_error = !0)) }, t.send()
            } else {
                var a = new Image;
                a.addEventListener("load", function() { m.tmp.img_obj = a, m.fn.vendors.checkBeforeDraw() }), a.src = m.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), m.tmp.img_error = !0
    }, m.fn.vendors.draw = function() { "image" == m.particles.shape.type ? "svg" == m.tmp.img_type ? m.tmp.count_svg >= m.particles.number.value ? (m.fn.particlesDraw(), m.particles.move.enable ? m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw) : cancelRequestAnimFrame(m.fn.drawAnimFrame)) : m.tmp.img_error || (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw)) : null != m.tmp.img_obj ? (m.fn.particlesDraw(), m.particles.move.enable ? m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw) : cancelRequestAnimFrame(m.fn.drawAnimFrame)) : m.tmp.img_error || (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw)) : (m.fn.particlesDraw(), m.particles.move.enable ? m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw) : cancelRequestAnimFrame(m.fn.drawAnimFrame)) }, m.fn.vendors.checkBeforeDraw = function() { "image" == m.particles.shape.type ? "svg" == m.tmp.img_type && null == m.tmp.source_svg ? m.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(m.tmp.checkAnimFrame), m.tmp.img_error || (m.fn.vendors.init(), m.fn.vendors.draw())) : (m.fn.vendors.init(), m.fn.vendors.draw()) }, m.fn.vendors.init = function() { m.fn.retinaInit(), m.fn.canvasInit(), m.fn.canvasSize(), m.fn.canvasPaint(), m.fn.particlesCreate(), m.fn.vendors.densityAutoParticles(), m.particles.line_linked.color_rgb_line = hexToRgb(m.particles.line_linked.color) }, m.fn.vendors.start = function() { isInArray("image", m.particles.shape.type) ? (m.tmp.img_type = m.particles.shape.image.src.substr(m.particles.shape.image.src.length - 3), m.fn.vendors.loadImg(m.tmp.img_type)) : m.fn.vendors.checkBeforeDraw() }, m.fn.vendors.eventsListeners(), m.fn.vendors.start()
};
Object.deepExtend = function(e, t) { for (var a in t) t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {}, arguments.callee(e[a], t[a])) : e[a] = t[a]; return e }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { window.setTimeout(e, 1e3 / 60) }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var a = document.getElementById(e),
        i = "particles-js-canvas-el",
        s = a.getElementsByClassName(i);
    if (s.length)
        for (; 0 < s.length;) a.removeChild(s[0]);
    var n = document.createElement("canvas");
    n.className = i, n.style.width = "100%", n.style.height = "100%", null != document.getElementById(e).appendChild(n) && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function(a, e, i) {
    var s = new XMLHttpRequest;
    s.open("GET", e), s.onreadystatechange = function(e) {
        if (4 == s.readyState)
            if (200 == s.status) {
                var t = JSON.parse(e.currentTarget.response);
                window.particlesJS(a, t), i && i()
            } else console.log("Error pJS - XMLHttpRequest status: " + s.status), console.log("Error pJS - File config not found")
    }, s.send()
};
/**
 * jquery.hoverdir.js v1.1.2
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
! function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(s) {
    "use strict";

    function o(t, e) { this.$el = s(t), this.options = s.extend(!0, {}, this.defaults, e), this.isVisible = !1, this.$hoverElem = this.$el.find(this.options.hoverElem), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = this._supportsTransitions(), this._loadEvents() }
    o.prototype = {
        defaults: { speed: 300, easing: "ease", hoverDelay: 0, inverse: !1, hoverElem: "div" },
        constructor: o,
        _supportsTransitions: function() {
            if ("undefined" != typeof Modernizr) return Modernizr.csstransitions;
            var t = (document.body || document.documentElement).style,
                e = "transition";
            if ("string" == typeof t[e]) return !0;
            var i = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
            e = e.charAt(0).toUpperCase() + e.substr(1);
            for (var s = 0; s < i.length; s++)
                if ("string" == typeof t[i[s] + e]) return !0;
            return !1
        },
        _loadEvents: function() { this.$el.on("mouseenter.hoverdir mouseleave.hoverdir", s.proxy(function(t) { this.direction = this._getDir({ x: t.pageX, y: t.pageY }), "mouseenter" === t.type ? this._showHover() : this._hideHover() }, this)) },
        _showHover: function() {
            var t = this._getStyle(this.direction);
            this.support && this.$hoverElem.css("transition", ""), this.$hoverElem.hide().css(t.from), clearTimeout(this.tmhover), this.tmhover = setTimeout(s.proxy(function() { this.$hoverElem.show(0, s.proxy(function() { this.support && this.$hoverElem.css("transition", this.transitionProp), this._applyAnimation(t.to) }, this)) }, this), this.options.hoverDelay), this.isVisible = !0
        },
        _hideHover: function() {
            var t = this._getStyle(this.direction);
            this.support && this.$hoverElem.css("transition", this.transitionProp), clearTimeout(this.tmhover), this._applyAnimation(t.from), this.isVisible = !1
        },
        _getDir: function(t) {
            var e = this.$el.width(),
                i = this.$el.height(),
                s = (t.x - this.$el.offset().left - e / 2) * (i < e ? i / e : 1),
                o = (t.y - this.$el.offset().top - i / 2) * (e < i ? e / i : 1);
            return Math.round((Math.atan2(o, s) * (180 / Math.PI) + 180) / 90 + 3) % 4
        },
        _getStyle: function(t) {
            var e, i, s = { left: "0", top: "-100%" },
                o = { left: "0", top: "100%" },
                r = { left: "-100%", top: "0" },
                n = { left: "100%", top: "0" },
                h = { top: "0" },
                a = { left: "0" };
            switch (t) {
                case 0:
                case "top":
                    e = this.options.inverse ? o : s, i = h;
                    break;
                case 1:
                case "right":
                    e = this.options.inverse ? r : n, i = a;
                    break;
                case 2:
                case "bottom":
                    e = this.options.inverse ? s : o, i = h;
                    break;
                case 3:
                case "left":
                    e = this.options.inverse ? n : r, i = a
            }
            return { from: e, to: i }
        },
        _applyAnimation: function(t) { s.fn.applyStyle = this.support ? s.fn.css : s.fn.animate, this.$hoverElem.stop().applyStyle(t, s.extend(!0, [], { duration: this.options.speed })) },
        show: function(t) { this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"), this.isVisible || (this.direction = t || "top", this._showHover()) },
        hide: function(t) { this.rebuild(), this.isVisible && (this.direction = t || "bottom", this._hideHover()) },
        setOptions: function(t) { this.options = s.extend(!0, {}, this.defaults, this.options, t) },
        destroy: function() { this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"), this.$el.data("hoverdir", null) },
        rebuild: function(t) { "object" == typeof t && this.setOptions(t), this._loadEvents() }
    }, s.fn.hoverdir = function(e, i) {
        return this.each(function() {
            var t = s(this).data("hoverdir");
            t || (t = new o(this, "object" == typeof e && e), s(this).data("hoverdir", t)), "string" == typeof e && (t[e](i), "destroy" === e && s(this).data("hoverdir", !1))
        })
    }, s.fn.hoverdir.Constructor = o
});
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e() }(this, function() {
    return function(s) {
        var n = {};

        function i(t) { if (n[t]) return n[t].exports; var e = n[t] = { exports: {}, id: t, loaded: !1 }; return s[t].call(e.exports, e, e.exports, i), e.loaded = !0, e.exports }
        return i.m = s, i.c = n, i.p = "", i(0)
    }([function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function() {
            function n(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(t, e, s) { return e && n(t.prototype, e), s && n(t, s), t }
        }();
        var i = s(1),
            u = s(3),
            r = function() {
                function s(t, e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, s), i.initializer.load(this, e, t), this.begin() }
                return n(s, [{ key: "toggle", value: function() { this.pause.status ? this.start() : this.stop() } }, { key: "stop", value: function() { this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this)) } }, { key: "start", value: function() { this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this)) } }, { key: "destroy", value: function() { this.reset(!1), this.options.onDestroy(this) } }, {
                    key: "reset",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                    }
                }, {
                    key: "begin",
                    value: function() {
                        var t = this;
                        this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() { t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) }, this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function(i, r) {
                        var o = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var t = this.humanizer(this.typeSpeed),
                            a = 1;
                        !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                            r = u.htmlParser.typeHtmlChars(i, r, o);
                            var t = 0,
                                e = i.substr(r);
                            if ("^" === e.charAt(0) && /^\^\d+/.test(e)) {
                                var s = 1;
                                s += (e = /\d+/.exec(e)[0]).length, t = parseInt(e), o.temporaryPause = !0, o.options.onTypingPaused(o.arrayPos, o), i = i.substring(0, r) + i.substring(r + s), o.toggleBlinking(!0)
                            }
                            if ("`" === e.charAt(0)) {
                                for (;
                                    "`" !== i.substr(r + a).charAt(0) && !(r + ++a > i.length););
                                var n = i.substring(0, r);
                                i = n + i.substring(n.length + 1, r + a) + i.substring(r + a + 1), a--
                            }
                            o.timeout = setTimeout(function() { o.toggleBlinking(!1), r >= i.length ? o.doneTyping(i, r) : o.keepTyping(i, r, a), o.temporaryPause && (o.temporaryPause = !1, o.options.onTypingResumed(o.arrayPos, o)) }, t)
                        }, t) : this.setPauseStatus(i, r, !0)
                    }
                }, {
                    key: "keepTyping",
                    value: function(t, e, s) {
                        0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                        var n = t.substr(0, e);
                        this.replaceText(n), this.typewrite(t, e)
                    }
                }, {
                    key: "doneTyping",
                    value: function(t, e) {
                        var s = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() { s.backspace(t, e) }, this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function(s, n) {
                        var i = this;
                        if (!0 !== this.pause.status) {
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var t = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function() {
                                n = u.htmlParser.backSpaceHtmlChars(s, n, i);
                                var t = s.substr(0, n);
                                if (i.replaceText(t), i.smartBackspace) {
                                    var e = i.strings[i.arrayPos + 1];
                                    e && t === e.substr(0, n) ? i.stopNum = n : i.stopNum = 0
                                }
                                n > i.stopNum ? (n--, i.backspace(s, n)) : n <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], n))
                            }, t)
                        } else this.setPauseStatus(s, n, !0)
                    }
                }, { key: "complete", value: function() { this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0 } }, { key: "setPauseStatus", value: function(t, e, s) { this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e } }, { key: "toggleBlinking", value: function(t) { this.cursor && (this.pause.status || this.cursorBlinking !== t && ((this.cursorBlinking = t) ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink"))) } }, { key: "humanizer", value: function(t) { return Math.round(Math.random() * t / 2) + t } }, { key: "shuffleStringsIfNeeded", value: function() { this.shuffle && (this.sequence = this.sequence.sort(function() { return Math.random() - .5 })) } }, { key: "initFadeOut", value: function() { var t = this; return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() { t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0) }, this.fadeOutDelay) } }, { key: "replaceText", value: function(t) { this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t } }, {
                    key: "bindFocusEvents",
                    value: function() {
                        var e = this;
                        this.isInput && (this.el.addEventListener("focus", function(t) { e.stop() }), this.el.addEventListener("blur", function(t) { e.el.value && 0 !== e.el.value.length || e.start() }))
                    }
                }, { key: "insertCursor", value: function() { this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling))) } }]), s
            }();
        e.default = r, t.exports = e.default
    }, function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var s = arguments[e]; for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]) } return t },
            n = function() {
                function n(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(t, e, s) { return e && n(t.prototype, e), s && n(t, s), t }
            }();
        var i, r = s(2),
            u = (i = r) && i.__esModule ? i : { default: i },
            o = function() {
                function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) }
                return n(t, [{
                    key: "load",
                    value: function(t, e, s) {
                        if (t.el = "string" == typeof s ? document.querySelector(s) : s, t.options = a({}, u.default, e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function(t) { return t.trim() }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                            t.strings = [], t.stringsElement.style.display = "none";
                            var n = Array.prototype.slice.apply(t.stringsElement.children),
                                i = n.length;
                            if (i)
                                for (var r = 0; r < i; r += 1) {
                                    var o = n[r];
                                    t.strings.push(o.innerHTML.trim())
                                }
                        }
                        for (var r in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }, t.typingComplete = !1, t.strings) t.sequence[r] = r;
                        t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                    }
                }, { key: "getCurrentElContent", value: function(t) { return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent } }, {
                    key: "appendAnimationCss",
                    value: function(t) {
                        var e = "data-typed-js-css";
                        if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                            var s = document.createElement("style");
                            s.type = "text/css", s.setAttribute(e, !0);
                            var n = "";
                            t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s))
                        }
                    }
                }]), t
            }(),
            l = new(e.default = o);
        e.initializer = l
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: "|", autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: "html", onComplete: function(t) {}, preStringTyped: function(t, e) {}, onStringTyped: function(t, e) {}, onLastStringBackspaced: function(t) {}, onTypingPaused: function(t, e) {}, onTypingResumed: function(t, e) {}, onReset: function(t) {}, onStop: function(t, e) {}, onStart: function(t, e) {}, onDestroy: function(t) {} };
        e.default = s, t.exports = e.default
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = function() {
            function n(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(t, e, s) { return e && n(t.prototype, e), s && n(t, s), t }
        }();
        var n = function() {
                function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) }
                return s(t, [{
                    key: "typeHtmlChars",
                    value: function(t, e, s) {
                        if ("html" !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if ("<" === n || "&" === n) {
                            var i = "";
                            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && !(++e + 1 > t.length););
                            e++
                        }
                        return e
                    }
                }, {
                    key: "backSpaceHtmlChars",
                    value: function(t, e, s) {
                        if ("html" !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if (">" === n || ";" === n) {
                            var i = "";
                            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && !(--e < 0););
                            e--
                        }
                        return e
                    }
                }]), t
            }(),
            i = new(e.default = n);
        e.htmlParser = i
    }])
});