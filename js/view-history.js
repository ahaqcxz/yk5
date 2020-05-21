/*

*/
!
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? exports.AMUI = e(require("jquery")) : t.AMUI = e(t.jQuery)
}(this, function(t) {
	return function(t) {
		function e(n) {
			if (i[n]) return i[n].exports;
			var s = i[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
		}
		var i = {};
		return e.m = t, e.c = i, e.p = "", e(0)
	}([function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2);
		i(3), i(4), i(5), i(6), i(7), i(8), i(9), i(10), i(11), i(14), i(15), i(16), i(17), i(18), i(19), i(20), i(21), i(22), i(24), i(25), i(23), i(27), i(28), i(29), i(30), i(31), i(32), i(33), i(26), i(34), i(35), i(36), i(37), i(38), i(39), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), t.exports = n.AMUI = s
	}, function(e, i) {
		e.exports = t
	}, function(t, e, i) {
		"use strict";
		var n = i(1);
		if ("undefined" == typeof n) throw new Error("Amaze UI 2.x requires jQuery :-(\n\u7231\u4e0a\u4e00\u5339\u91ce\u9a6c\uff0c\u53ef\u4f60\u7684\u5bb6\u91cc\u6ca1\u6709\u8349\u539f\u2026");
		var s = n.AMUI || {},
			o = n(window),
			a = window.document,
			r = n("html");
		s.VERSION = "2.7.2", s.support = {}, s.support.transition = function() {
			var t = function() {
					var t = a.body || a.documentElement,
						e = {
							WebkitTransition: "webkitTransitionEnd",
							MozTransition: "transitionend",
							OTransition: "oTransitionEnd otransitionend",
							transition: "transitionend"
						};
					for (var i in e) if (void 0 !== t.style[i]) return e[i]
				}();
			return t && {
				end: t
			}
		}(), s.support.animation = function() {
			var t = function() {
					var t = a.body || a.documentElement,
						e = {
							WebkitAnimation: "webkitAnimationEnd",
							MozAnimation: "animationend",
							OAnimation: "oAnimationEnd oanimationend",
							animation: "animationend"
						};
					for (var i in e) if (void 0 !== t.style[i]) return e[i]
				}();
			return t && {
				end: t
			}
		}(), s.support.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1, s.support.mutationobserver = window.MutationObserver || window.WebKitMutationObserver || null, s.support.formValidation = "function" == typeof document.createElement("form").checkValidity, s.utils = {}, s.utils.debounce = function(t, e, i) {
			var n;
			return function() {
				var s = this,
					o = arguments,
					a = function() {
						n = null, i || t.apply(s, o)
					},
					r = i && !n;
				clearTimeout(n), n = setTimeout(a, e), r && t.apply(s, o)
			}
		}, s.utils.isInView = function(t, e) {
			var i = n(t),
				s = !(!i.width() && !i.height()) && "none" !== i.css("display");
			if (!s) return !1;
			var a = o.scrollLeft(),
				r = o.scrollTop(),
				l = i.offset(),
				c = l.left,
				u = l.top;
			return e = n.extend({
				topOffset: 0,
				leftOffset: 0
			}, e), u + i.height() >= r && u - e.topOffset <= r + o.height() && c + i.width() >= a && c - e.leftOffset <= a + o.width()
		}, s.utils.parseOptions = s.utils.options = function(t) {
			if (n.isPlainObject(t)) return t;
			var e = t ? t.indexOf("{") : -1,
				i = {};
			if (e != -1) try {
				i = new Function("", "var json = " + t.substr(e) + "; return JSON.parse(JSON.stringify(json));")()
			} catch (s) {}
			return i
		}, s.utils.generateGUID = function(t) {
			var e = t + "-" || "am-";
			do e += Math.random().toString(36).substring(2, 7);
			while (document.getElementById(e));
			return e
		}, s.utils.getAbsoluteUrl = function() {
			var t;
			return function(e) {
				return t || (t = document.createElement("a")), t.href = e, t.href
			}
		}(), s.plugin = function(t, e, i) {
			var o = n.fn[t];
			i = i || {}, n.fn[t] = function(o) {
				var a, r = Array.prototype.slice.call(arguments, 0),
					l = r.slice(1),
					c = this.each(function() {
						var c = n(this),
							u = "amui." + t,
							h = i.dataOptions || "data-am-" + t,
							d = c.data(u),
							p = n.extend({}, s.utils.parseOptions(c.attr(h)), "object" == typeof o && o);
						(d || "destroy" !== o) && (d || c.data(u, d = new e(this, p)), i.methodCall ? i.methodCall.call(c, r, d) : (i.before && i.before.call(c, r, d), "string" == typeof o && (a = "function" == typeof d[o] ? d[o].apply(d, l) : d[o]), i.after && i.after.call(c, r, d)))
					});
				return void 0 === a ? c : a
			}, n.fn[t].Constructor = e, n.fn[t].noConflict = function() {
				return n.fn[t] = o, this
			}, s[t] = e
		}, n.fn.emulateTransitionEnd = function(t) {
			var e = !1,
				i = this;
			n(this).one(s.support.transition.end, function() {
				e = !0
			});
			var o = function() {
					e || n(i).trigger(s.support.transition.end), i.transitionEndTimmer = void 0
				};
			return this.transitionEndTimmer = setTimeout(o, t), this
		}, n.fn.redraw = function() {
			return this.each(function() {
				this.offsetHeight
			})
		}, n.fn.transitionEnd = function(t) {
			function e(s) {
				t.call(this, s), i && n.off(i, e)
			}
			var i = s.support.transition.end,
				n = this;
			return t && i && n.on(i, e), this
		}, n.fn.removeClassRegEx = function() {
			return this.each(function(t) {
				var e = n(this).attr("class");
				if (!e || !t) return !1;
				var i = [];
				e = e.split(" ");
				for (var s = 0, o = e.length; s < o; s++) e[s].match(t) || i.push(e[s]);
				n(this).attr("class", i.join(" "))
			})
		}, n.fn.alterClass = function(t, e) {
			var i = this;
			if (t.indexOf("*") === -1) return i.removeClass(t), e ? i.addClass(e) : i;
			var s = new RegExp("\\s" + t.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
			return i.each(function(t, e) {
				for (var i = " " + e.className + " "; s.test(i);) i = i.replace(s, " ");
				e.className = n.trim(i)
			}), e ? i.addClass(e) : i
		}, s.utils.rAF = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
			function(t) {
				return window.setTimeout(t, 1e3 / 60)
			}
		}(), s.utils.cancelAF = function() {
			return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
			function(t) {
				window.clearTimeout(t)
			}
		}(), s.utils.measureScrollbar = function() {
			if (document.body.clientWidth >= window.innerWidth) return 0;
			var t = n('<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;"></div>');
			n(document.body).append(t);
			var e = t[0].offsetWidth - t[0].clientWidth;
			return t.remove(), e
		}, s.utils.imageLoader = function(t, e) {
			function i() {
				e(t[0])
			}
			function n() {
				if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
					var t = this.attr("src"),
						e = t.match(/\?/) ? "&" : "?";
					e += "random=" + (new Date).getTime(), this.attr("src", t + e)
				}
			}
			return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i()
		}, s.template = function(t, e) {
			var i = s.template;
			return i.cache[t] || (i.cache[t] = function() {
				var e = t,
					n = /^[\w\-]+$/.test(t) ? i.get(t) : (e = "template(string)", t),
					s = 1,
					o = ("try { " + (i.variable ? "var " + i.variable + " = this.stash;" : "with (this.stash) { ") + "this.ret += '" + n.replace(/<%/g, "\x11").replace(/%>/g, "\x13").replace(/'(?![^\x11\x13]+?\x13)/g, "\\x27").replace(/^\s*|\s*$/g, "").replace(/\n/g, function() {
						return "';\nthis.line = " + ++s + "; this.ret += '\\n"
					}).replace(/\x11-(.+?)\x13/g, "' + ($1) + '").replace(/\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g, "'; $1; this.ret += '") + "'; " + (i.variable ? "" : "}") + "return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on " + e + "' + ' line ' + this.line + ')'; } //@ sourceURL=" + e + "\n").replace(/this\.ret \+= '';/g, ""),
					a = new Function(o),
					r = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&#x22;",
						"'": "&#x27;"
					},
					l = function(t) {
						return ("" + t).replace(/[&<>\'\"]/g, function(t) {
							return r[t]
						})
					};
				return function(t) {
					return a.call(i.context = {
						escapeHTML: l,
						line: 1,
						ret: "",
						stash: t
					})
				}
			}()), e ? i.cache[t](e) : i.cache[t]
		}, s.template.cache = {}, s.template.get = function(t) {
			if (t) {
				var e = document.getElementById(t);
				return e && e.innerHTML || ""
			}
		}, s.DOMWatchers = [], s.DOMReady = !1, s.ready = function(t) {
			s.DOMWatchers.push(t), s.DOMReady && t(document)
		}, s.DOMObserve = function(t, e, i) {
			var o = s.support.mutationobserver;
			o && (e = n.isPlainObject(e) ? e : {
				childList: !0,
				subtree: !0
			}, i = "function" == typeof i && i ||
			function() {}, n(t).each(function() {
				var t = this,
					a = n(t);
				if (!a.data("am.observer")) try {
					var r = new o(s.utils.debounce(function(e, n) {
						i.call(t, e, n), a.trigger("changed.dom.amui")
					}, 50));
					r.observe(t, e), a.data("am.observer", r)
				} catch (l) {}
			}))
		}, n.fn.DOMObserve = function(t, e) {
			return this.each(function() {
				s.DOMObserve(this, t, e)
			})
		}, s.support.touch && r.addClass("am-touch"), n(document).on("changed.dom.amui", function(t) {
			var e = t.target;
			n.each(s.DOMWatchers, function(t, i) {
				i(e)
			})
		}), n(function() {
			var t = n(document.body);
			s.DOMReady = !0, n.each(s.DOMWatchers, function(t, e) {
				e(document)
			}), s.DOMObserve("[data-am-observe]"), r.removeClass("no-js").addClass("js"), s.support.animation && r.addClass("cssanimations"), window.navigator.standalone && r.addClass("am-standalone"), n(".am-topbar-fixed-top").length && t.addClass("am-with-topbar-fixed-top"), n(".am-topbar-fixed-bottom").length && t.addClass("am-with-topbar-fixed-bottom");
			var e = n(".am-layout");
			e.find('[class*="md-block-grid"]').alterClass("md-block-grid-*"), e.find('[class*="lg-block-grid"]').alterClass("lg-block-grid"), n("[data-am-widget]").each(function() {
				var t = n(this);
				0 === t.parents(".am-layout").length && t.addClass("am-no-layout")
			})
		}), t.exports = s
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i) {
			return setTimeout(l(t, i), e)
		}
		function s(t, e, i) {
			return !!Array.isArray(t) && (o(t, i[e], i), !0)
		}
		function o(t, e, i) {
			var n;
			if (t) if (t.forEach) t.forEach(e, i);
			else if (void 0 !== t.length) for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
			else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
		}
		function a(t, e, i) {
			var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
			return function() {
				var e = new Error("get-stack-trace"),
					i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
					s = window.console && (window.console.warn || window.console.log);
				return s && s.call(window.console, n, i), t.apply(this, arguments)
			}
		}
		function r(t, e, i) {
			var n, s = e.prototype;
			n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && ut(n, i)
		}
		function l(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		}
		function c(t, e) {
			return typeof t == ft ? t.apply(e ? e[0] || void 0 : void 0, e) : t
		}
		function u(t, e) {
			return void 0 === t ? e : t
		}
		function h(t, e, i) {
			o(f(e), function(e) {
				t.addEventListener(e, i, !1)
			})
		}
		function d(t, e, i) {
			o(f(e), function(e) {
				t.removeEventListener(e, i, !1)
			})
		}
		function p(t, e) {
			for (; t;) {
				if (t == e) return !0;
				t = t.parentNode
			}
			return !1
		}
		function m(t, e) {
			return t.indexOf(e) > -1
		}
		function f(t) {
			return t.trim().split(/\s+/g)
		}
		function v(t, e, i) {
			if (t.indexOf && !i) return t.indexOf(e);
			for (var n = 0; n < t.length;) {
				if (i && t[n][i] == e || !i && t[n] === e) return n;
				n++
			}
			return -1
		}
		function g(t) {
			return Array.prototype.slice.call(t, 0)
		}
		function y(t, e, i) {
			for (var n = [], s = [], o = 0; o < t.length;) {
				var a = e ? t[o][e] : t[o];
				v(s, a) < 0 && n.push(t[o]), s[o] = a, o++
			}
			return i && (n = e ? n.sort(function(t, i) {
				return t[e] > i[e]
			}) : n.sort()), n
		}
		function w(t, e) {
			for (var i, n, s = e[0].toUpperCase() + e.slice(1), o = 0; o < pt.length;) {
				if (i = pt[o], n = i ? i + s : e, n in t) return n;
				o++
			}
		}
		function b() {
			return Tt++
		}
		function T(t) {
			var e = t.ownerDocument || t;
			return e.defaultView || e.parentWindow || window
		}
		function x(t, e) {
			var i = this;
			this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
				c(t.options.enable, [t]) && i.handler(e)
			}, this.init()
		}
		function C(t) {
			var e, i = t.options.inputClass;
			return new(e = i ? i : Et ? _ : St ? q : Ct ? H : L)(t, E)
		}
		function E(t, e, i) {
			var n = i.pointers.length,
				s = i.changedPointers.length,
				o = e & Mt && n - s === 0,
				a = e & (Nt | It) && n - s === 0;
			i.isFirst = !! o, i.isFinal = !! a, o && (t.session = {}), i.eventType = e, S(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
		}
		function S(t, e) {
			var i = t.session,
				n = e.pointers,
				s = n.length;
			i.firstInput || (i.firstInput = F(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = F(e) : 1 === s && (i.firstMultiple = !1);
			var o = i.firstInput,
				a = i.firstMultiple,
				r = a ? a.center : o.center,
				l = e.center = A(n);
			e.timeStamp = yt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = N(r, l), e.distance = P(r, l), k(i, e), e.offsetDirection = M(e.deltaX, e.deltaY);
			var c = $(e.deltaTime, e.deltaX, e.deltaY);
			e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = gt(c.x) > gt(c.y) ? c.x : c.y, e.scale = a ? O(a.pointers, n) : 1, e.rotation = a ? I(a.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, D(i, e);
			var u = t.element;
			p(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
		}
		function k(t, e) {
			var i = e.center,
				n = t.offsetDelta || {},
				s = t.prevDelta || {},
				o = t.prevInput || {};
			e.eventType !== Mt && o.eventType !== Nt || (s = t.prevDelta = {
				x: o.deltaX || 0,
				y: o.deltaY || 0
			}, n = t.offsetDelta = {
				x: i.x,
				y: i.y
			}), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
		}
		function D(t, e) {
			var i, n, s, o, a = t.lastInterval || e,
				r = e.timeStamp - a.timeStamp;
			if (e.eventType != It && (r > $t || void 0 === a.velocity)) {
				var l = e.deltaX - a.deltaX,
					c = e.deltaY - a.deltaY,
					u = $(r, l, c);
				n = u.x, s = u.y, i = gt(u.x) > gt(u.y) ? u.x : u.y, o = M(l, c), t.lastInterval = e
			} else i = a.velocity, n = a.velocityX, s = a.velocityY, o = a.direction;
			e.velocity = i, e.velocityX = n, e.velocityY = s, e.direction = o
		}
		function F(t) {
			for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
				clientX: vt(t.pointers[i].clientX),
				clientY: vt(t.pointers[i].clientY)
			}, i++;
			return {
				timeStamp: yt(),
				pointers: e,
				center: A(e),
				deltaX: t.deltaX,
				deltaY: t.deltaY
			}
		}
		function A(t) {
			var e = t.length;
			if (1 === e) return {
				x: vt(t[0].clientX),
				y: vt(t[0].clientY)
			};
			for (var i = 0, n = 0, s = 0; s < e;) i += t[s].clientX, n += t[s].clientY, s++;
			return {
				x: vt(i / e),
				y: vt(n / e)
			}
		}
		function $(t, e, i) {
			return {
				x: e / t || 0,
				y: i / t || 0
			}
		}
		function M(t, e) {
			return t === e ? Ot : gt(t) >= gt(e) ? t < 0 ? Lt : _t : e < 0 ? zt : Rt
		}
		function P(t, e, i) {
			i || (i = Bt);
			var n = e[i[0]] - t[i[0]],
				s = e[i[1]] - t[i[1]];
			return Math.sqrt(n * n + s * s)
		}
		function N(t, e, i) {
			i || (i = Bt);
			var n = e[i[0]] - t[i[0]],
				s = e[i[1]] - t[i[1]];
			return 180 * Math.atan2(s, n) / Math.PI
		}
		function I(t, e) {
			return N(e[1], e[0], Ut) + N(t[1], t[0], Ut)
		}
		function O(t, e) {
			return P(e[0], e[1], Ut) / P(t[0], t[1], Ut)
		}
		function L() {
			this.evEl = Xt, this.evWin = Yt, this.pressed = !1, x.apply(this, arguments)
		}
		function _() {
			this.evEl = Gt, this.evWin = Kt, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
		}
		function z() {
			this.evTarget = Qt, this.evWin = te, this.started = !1, x.apply(this, arguments)
		}
		function R(t, e) {
			var i = g(t.touches),
				n = g(t.changedTouches);
			return e & (Nt | It) && (i = y(i.concat(n), "identifier", !0)), [i, n]
		}
		function q() {
			this.evTarget = ie, this.targetIds = {}, x.apply(this, arguments)
		}
		function W(t, e) {
			var i = g(t.touches),
				n = this.targetIds;
			if (e & (Mt | Pt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
			var s, o, a = g(t.changedTouches),
				r = [],
				l = this.target;
			if (o = i.filter(function(t) {
				return p(t.target, l)
			}), e === Mt) for (s = 0; s < o.length;) n[o[s].identifier] = !0, s++;
			for (s = 0; s < a.length;) n[a[s].identifier] && r.push(a[s]), e & (Nt | It) && delete n[a[s].identifier], s++;
			return r.length ? [y(o.concat(r), "identifier", !0), r] : void 0
		}
		function H() {
			x.apply(this, arguments);
			var t = l(this.handler, this);
			this.touch = new q(this.manager, t), this.mouse = new L(this.manager, t), this.primaryTouch = null, this.lastTouches = []
		}
		function B(t, e) {
			t & Mt ? (this.primaryTouch = e.changedPointers[0].identifier, U.call(this, e)) : t & (Nt | It) && U.call(this, e)
		}
		function U(t) {
			var e = t.changedPointers[0];
			if (e.identifier === this.primaryTouch) {
				var i = {
					x: e.clientX,
					y: e.clientY
				};
				this.lastTouches.push(i);
				var n = this.lastTouches,
					s = function() {
						var t = n.indexOf(i);
						t > -1 && n.splice(t, 1)
					};
				setTimeout(s, ne)
			}
		}
		function V(t) {
			for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
				var s = this.lastTouches[n],
					o = Math.abs(e - s.x),
					a = Math.abs(i - s.y);
				if (o <= se && a <= se) return !0
			}
			return !1
		}
		function X(t, e) {
			this.manager = t, this.set(e)
		}
		function Y(t) {
			if (m(t, ue)) return ue;
			var e = m(t, he),
				i = m(t, de);
			return e && i ? ue : e || i ? e ? he : de : m(t, ce) ? ce : le
		}
		function j() {
			if (!ae) return !1;
			var t = {},
				e = window.CSS && window.CSS.supports;
			return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
				t[i] = !e || window.CSS.supports("touch-action", i)
			}), t
		}
		function Z(t) {
			this.options = ut({}, this.defaults, t || {}), this.id = b(), this.manager = null, this.options.enable = u(this.options.enable, !0), this.state = me, this.simultaneous = {}, this.requireFail = []
		}
		function G(t) {
			return t & we ? "cancel" : t & ge ? "end" : t & ve ? "move" : t & fe ? "start" : ""
		}
		function K(t) {
			return t == Rt ? "down" : t == zt ? "up" : t == Lt ? "left" : t == _t ? "right" : ""
		}
		function J(t, e) {
			var i = e.manager;
			return i ? i.get(t) : t
		}
		function Q() {
			Z.apply(this, arguments)
		}
		function tt() {
			Q.apply(this, arguments), this.pX = null, this.pY = null
		}
		function et() {
			Q.apply(this, arguments)
		}
		function it() {
			Z.apply(this, arguments), this._timer = null, this._input = null
		}
		function nt() {
			Q.apply(this, arguments)
		}
		function st() {
			Q.apply(this, arguments)
		}
		function ot() {
			Z.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
		}
		function at(t, e) {
			return e = e || {}, e.recognizers = u(e.recognizers, at.defaults.preset), new rt(t, e)
		}
		function rt(t, e) {
			this.options = ut({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = C(this), this.touchAction = new X(this, this.options.touchAction), lt(this, !0), o(this.options.recognizers, function(t) {
				var e = this.add(new t[0](t[1]));
				t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
			}, this)
		}
		function lt(t, e) {
			var i = t.element;
			if (i.style) {
				var n;
				o(t.options.cssProps, function(s, o) {
					n = w(i.style, o), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = s) : i.style[n] = t.oldCssProps[n] || ""
				}), e || (t.oldCssProps = {})
			}
		}
		function ct(t, e) {
			var i = document.createEvent("Event");
			i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
		}
		var ut, ht = i(1),
			dt = i(2),
			pt = ["", "webkit", "Moz", "MS", "ms", "o"],
			mt = document.createElement("div"),
			ft = "function",
			vt = Math.round,
			gt = Math.abs,
			yt = Date.now;
		ut = "function" != typeof Object.assign ?
		function(t) {
			if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
			for (var e = Object(t), i = 1; i < arguments.length; i++) {
				var n = arguments[i];
				if (void 0 !== n && null !== n) for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s])
			}
			return e
		} : Object.assign;
		var wt = a(function(t, e, i) {
			for (var n = Object.keys(e), s = 0; s < n.length;)(!i || i && void 0 === t[n[s]]) && (t[n[s]] = e[n[s]]), s++;
			return t
		}, "extend", "Use `assign`."),
			bt = a(function(t, e) {
				return wt(t, e, !0)
			}, "merge", "Use `assign`."),
			Tt = 1,
			xt = /mobile|tablet|ip(ad|hone|od)|android/i,
			Ct = "ontouchstart" in window,
			Et = void 0 !== w(window, "PointerEvent"),
			St = Ct && xt.test(navigator.userAgent),
			kt = "touch",
			Dt = "pen",
			Ft = "mouse",
			At = "kinect",
			$t = 25,
			Mt = 1,
			Pt = 2,
			Nt = 4,
			It = 8,
			Ot = 1,
			Lt = 2,
			_t = 4,
			zt = 8,
			Rt = 16,
			qt = Lt | _t,
			Wt = zt | Rt,
			Ht = qt | Wt,
			Bt = ["x", "y"],
			Ut = ["clientX", "clientY"];
		x.prototype = {
			handler: function() {},
			init: function() {
				this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(T(this.element), this.evWin, this.domHandler)
			},
			destroy: function() {
				this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(T(this.element), this.evWin, this.domHandler)
			}
		};
		var Vt = {
			mousedown: Mt,
			mousemove: Pt,
			mouseup: Nt
		},
			Xt = "mousedown",
			Yt = "mousemove mouseup";
		r(L, x, {
			handler: function(t) {
				var e = Vt[t.type];
				e & Mt && 0 === t.button && (this.pressed = !0), e & Pt && 1 !== t.which && (e = Nt), this.pressed && (e & Nt && (this.pressed = !1), this.callback(this.manager, e, {
					pointers: [t],
					changedPointers: [t],
					pointerType: Ft,
					srcEvent: t
				}))
			}
		});
		var jt = {
			pointerdown: Mt,
			pointermove: Pt,
			pointerup: Nt,
			pointercancel: It,
			pointerout: It
		},
			Zt = {
				2: kt,
				3: Dt,
				4: Ft,
				5: At
			},
			Gt = "pointerdown",
			Kt = "pointermove pointerup pointercancel";
		window.MSPointerEvent && !window.PointerEvent && (Gt = "MSPointerDown", Kt = "MSPointerMove MSPointerUp MSPointerCancel"), r(_, x, {
			handler: function(t) {
				var e = this.store,
					i = !1,
					n = t.type.toLowerCase().replace("ms", ""),
					s = jt[n],
					o = Zt[t.pointerType] || t.pointerType,
					a = o == kt,
					r = v(e, t.pointerId, "pointerId");
				s & Mt && (0 === t.button || a) ? r < 0 && (e.push(t), r = e.length - 1) : s & (Nt | It) && (i = !0), r < 0 || (e[r] = t, this.callback(this.manager, s, {
					pointers: e,
					changedPointers: [t],
					pointerType: o,
					srcEvent: t
				}), i && e.splice(r, 1))
			}
		});
		var Jt = {
			touchstart: Mt,
			touchmove: Pt,
			touchend: Nt,
			touchcancel: It
		},
			Qt = "touchstart",
			te = "touchstart touchmove touchend touchcancel";
		r(z, x, {
			handler: function(t) {
				var e = Jt[t.type];
				if (e === Mt && (this.started = !0), this.started) {
					var i = R.call(this, t, e);
					e & (Nt | It) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
						pointers: i[0],
						changedPointers: i[1],
						pointerType: kt,
						srcEvent: t
					})
				}
			}
		});
		var ee = {
			touchstart: Mt,
			touchmove: Pt,
			touchend: Nt,
			touchcancel: It
		},
			ie = "touchstart touchmove touchend touchcancel";
		r(q, x, {
			handler: function(t) {
				var e = ee[t.type],
					i = W.call(this, t, e);
				i && this.callback(this.manager, e, {
					pointers: i[0],
					changedPointers: i[1],
					pointerType: kt,
					srcEvent: t
				})
			}
		});
		var ne = 2500,
			se = 25;
		r(H, x, {
			handler: function(t, e, i) {
				var n = i.pointerType == kt,
					s = i.pointerType == Ft;
				if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
					if (n) B.call(this, e, i);
					else if (s && V.call(this, i)) return;
					this.callback(t, e, i)
				}
			},
			destroy: function() {
				this.touch.destroy(), this.mouse.destroy()
			}
		});
		var oe = w(mt.style, "touchAction"),
			ae = void 0 !== oe,
			re = "compute",
			le = "auto",
			ce = "manipulation",
			ue = "none",
			he = "pan-x",
			de = "pan-y",
			pe = j();
		X.prototype = {
			set: function(t) {
				t == re && (t = this.compute()), ae && this.manager.element.style && pe[t] && (this.manager.element.style[oe] = t), this.actions = t.toLowerCase().trim()
			},
			update: function() {
				this.set(this.manager.options.touchAction)
			},
			compute: function() {
				var t = [];
				return o(this.manager.recognizers, function(e) {
					c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
				}), Y(t.join(" "))
			},
			preventDefaults: function(t) {
				var e = t.srcEvent,
					i = t.offsetDirection;
				if (this.manager.session.prevented) return void e.preventDefault();
				var n = this.actions,
					s = m(n, ue) && !pe[ue],
					o = m(n, de) && !pe[de],
					a = m(n, he) && !pe[he];
				if (s) {
					var r = 1 === t.pointers.length,
						l = t.distance < 2,
						c = t.deltaTime < 250;
					if (r && l && c) return
				}
				return a && o ? void 0 : s || o && i & qt || a && i & Wt ? this.preventSrc(e) : void 0
			},
			preventSrc: function(t) {
				this.manager.session.prevented = !0, t.preventDefault()
			}
		};
		var me = 1,
			fe = 2,
			ve = 4,
			ge = 8,
			ye = ge,
			we = 16,
			be = 32;
		Z.prototype = {
			defaults: {},
			set: function(t) {
				return ut(this.options, t), this.manager && this.manager.touchAction.update(), this
			},
			recognizeWith: function(t) {
				if (s(t, "recognizeWith", this)) return this;
				var e = this.simultaneous;
				return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
			},
			dropRecognizeWith: function(t) {
				return s(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this)
			},
			requireFailure: function(t) {
				if (s(t, "requireFailure", this)) return this;
				var e = this.requireFail;
				return t = J(t, this), v(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
			},
			dropRequireFailure: function(t) {
				if (s(t, "dropRequireFailure", this)) return this;
				t = J(t, this);
				var e = v(this.requireFail, t);
				return e > -1 && this.requireFail.splice(e, 1), this
			},
			hasRequireFailures: function() {
				return this.requireFail.length > 0
			},
			canRecognizeWith: function(t) {
				return !!this.simultaneous[t.id]
			},
			emit: function(t) {
				function e(e) {
					i.manager.emit(e, t)
				}
				var i = this,
					n = this.state;
				n < ge && e(i.options.event + G(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ge && e(i.options.event + G(n))
			},
			tryEmit: function(t) {
				return this.canEmit() ? this.emit(t) : void(this.state = be)
			},
			canEmit: function() {
				for (var t = 0; t < this.requireFail.length;) {
					if (!(this.requireFail[t].state & (be | me))) return !1;
					t++
				}
				return !0
			},
			recognize: function(t) {
				var e = ut({}, t);
				return c(this.options.enable, [this, e]) ? (this.state & (ye | we | be) && (this.state = me), this.state = this.process(e), void(this.state & (fe | ve | ge | we) && this.tryEmit(e))) : (this.reset(), void(this.state = be))
			},
			process: function(t) {},
			getTouchAction: function() {},
			reset: function() {}
		}, r(Q, Z, {
			defaults: {
				pointers: 1
			},
			attrTest: function(t) {
				var e = this.options.pointers;
				return 0 === e || t.pointers.length === e
			},
			process: function(t) {
				var e = this.state,
					i = t.eventType,
					n = e & (fe | ve),
					s = this.attrTest(t);
				return n && (i & It || !s) ? e | we : n || s ? i & Nt ? e | ge : e & fe ? e | ve : fe : be
			}
		}), r(tt, Q, {
			defaults: {
				event: "pan",
				threshold: 10,
				pointers: 1,
				direction: Ht
			},
			getTouchAction: function() {
				var t = this.options.direction,
					e = [];
				return t & qt && e.push(de), t & Wt && e.push(he), e
			},
			directionTest: function(t) {
				var e = this.options,
					i = !0,
					n = t.distance,
					s = t.direction,
					o = t.deltaX,
					a = t.deltaY;
				return s & e.direction || (e.direction & qt ? (s = 0 === o ? Ot : o < 0 ? Lt : _t, i = o != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === a ? Ot : a < 0 ? zt : Rt, i = a != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
			},
			attrTest: function(t) {
				return Q.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
			},
			emit: function(t) {
				this.pX = t.deltaX, this.pY = t.deltaY;
				var e = K(t.direction);
				e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
			}
		}), r(et, Q, {
			defaults: {
				event: "pinch",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [ue]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
			},
			emit: function(t) {
				if (1 !== t.scale) {
					var e = t.scale < 1 ? "in" : "out";
					t.additionalEvent = this.options.event + e
				}
				this._super.emit.call(this, t)
			}
		}), r(it, Z, {
			defaults: {
				event: "press",
				pointers: 1,
				time: 251,
				threshold: 9
			},
			getTouchAction: function() {
				return [le]
			},
			process: function(t) {
				var e = this.options,
					i = t.pointers.length === e.pointers,
					s = t.distance < e.threshold,
					o = t.deltaTime > e.time;
				if (this._input = t, !s || !i || t.eventType & (Nt | It) && !o) this.reset();
				else if (t.eventType & Mt) this.reset(), this._timer = n(function() {
					this.state = ye, this.tryEmit()
				}, e.time, this);
				else if (t.eventType & Nt) return ye;
				return be
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function(t) {
				this.state === ye && (t && t.eventType & Nt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = yt(), this.manager.emit(this.options.event, this._input)))
			}
		}), r(nt, Q, {
			defaults: {
				event: "rotate",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [ue]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
			}
		}), r(st, Q, {
			defaults: {
				event: "swipe",
				threshold: 10,
				velocity: .3,
				direction: qt | Wt,
				pointers: 1
			},
			getTouchAction: function() {
				return tt.prototype.getTouchAction.call(this)
			},
			attrTest: function(t) {
				var e, i = this.options.direction;
				return i & (qt | Wt) ? e = t.overallVelocity : i & qt ? e = t.overallVelocityX : i & Wt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Nt
			},
			emit: function(t) {
				var e = K(t.offsetDirection);
				e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
			}
		}), r(ot, Z, {
			defaults: {
				event: "tap",
				pointers: 1,
				taps: 1,
				interval: 300,
				time: 250,
				threshold: 9,
				posThreshold: 10
			},
			getTouchAction: function() {
				return [ce]
			},
			process: function(t) {
				var e = this.options,
					i = t.pointers.length === e.pointers,
					s = t.distance < e.threshold,
					o = t.deltaTime < e.time;
				if (this.reset(), t.eventType & Mt && 0 === this.count) return this.failTimeout();
				if (s && o && i) {
					if (t.eventType != Nt) return this.failTimeout();
					var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
						r = !this.pCenter || P(this.pCenter, t.center) < e.posThreshold;
					this.pTime = t.timeStamp, this.pCenter = t.center, r && a ? this.count += 1 : this.count = 1, this._input = t;
					var l = this.count % e.taps;
					if (0 === l) return this.hasRequireFailures() ? (this._timer = n(function() {
						this.state = ye, this.tryEmit()
					}, e.interval, this), fe) : ye
				}
				return be
			},
			failTimeout: function() {
				return this._timer = n(function() {
					this.state = be
				}, this.options.interval, this), be
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function() {
				this.state == ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}
		}), at.VERSION = "2.0.7", at.defaults = {
			domEvents: !1,
			touchAction: re,
			enable: !0,
			inputTarget: null,
			inputClass: null,
			preset: [
				[nt,
				{
					enable: !1
				}],
				[et,
				{
					enable: !1
				}, ["rotate"]],
				[st,
				{
					direction: qt
				}],
				[tt,
				{
					direction: qt
				}, ["swipe"]],
				[ot],
				[ot,
				{
					event: "doubletap",
					taps: 2
				}, ["tap"]],
				[it]
			],
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		};
		var Te = 1,
			xe = 2;
		rt.prototype = {
			set: function(t) {
				return ut(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
			},
			stop: function(t) {
				this.session.stopped = t ? xe : Te
			},
			recognize: function(t) {
				var e = this.session;
				if (!e.stopped) {
					this.touchAction.preventDefaults(t);
					var i, n = this.recognizers,
						s = e.curRecognizer;
					(!s || s && s.state & ye) && (s = e.curRecognizer = null);
					for (var o = 0; o < n.length;) i = n[o], e.stopped === xe || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (fe | ve | ge) && (s = e.curRecognizer = i), o++
				}
			},
			get: function(t) {
				if (t instanceof Z) return t;
				for (var e = this.recognizers, i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];
				return null
			},
			add: function(t) {
				if (s(t, "add", this)) return this;
				var e = this.get(t.options.event);
				return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
			},
			remove: function(t) {
				if (s(t, "remove", this)) return this;
				if (t = this.get(t)) {
					var e = this.recognizers,
						i = v(e, t);
					i !== -1 && (e.splice(i, 1), this.touchAction.update())
				}
				return this
			},
			on: function(t, e) {
				if (void 0 !== t && void 0 !== e) {
					var i = this.handlers;
					return o(f(t), function(t) {
						i[t] = i[t] || [], i[t].push(e)
					}), this
				}
			},
			off: function(t, e) {
				if (void 0 !== t) {
					var i = this.handlers;
					return o(f(t), function(t) {
						e ? i[t] && i[t].splice(v(i[t], e), 1) : delete i[t]
					}), this
				}
			},
			emit: function(t, e) {
				this.options.domEvents && ct(t, e);
				var i = this.handlers[t] && this.handlers[t].slice();
				if (i && i.length) {
					e.type = t, e.preventDefault = function() {
						e.srcEvent.preventDefault()
					};
					for (var n = 0; n < i.length;) i[n](e), n++
				}
			},
			destroy: function() {
				this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}
		}, ut(at, {
			INPUT_START: Mt,
			INPUT_MOVE: Pt,
			INPUT_END: Nt,
			INPUT_CANCEL: It,
			STATE_POSSIBLE: me,
			STATE_BEGAN: fe,
			STATE_CHANGED: ve,
			STATE_ENDED: ge,
			STATE_RECOGNIZED: ye,
			STATE_CANCELLED: we,
			STATE_FAILED: be,
			DIRECTION_NONE: Ot,
			DIRECTION_LEFT: Lt,
			DIRECTION_RIGHT: _t,
			DIRECTION_UP: zt,
			DIRECTION_DOWN: Rt,
			DIRECTION_HORIZONTAL: qt,
			DIRECTION_VERTICAL: Wt,
			DIRECTION_ALL: Ht,
			Manager: rt,
			Input: x,
			TouchAction: X,
			TouchInput: q,
			MouseInput: L,
			PointerEventInput: _,
			TouchMouseInput: H,
			SingleTouchInput: z,
			Recognizer: Z,
			AttrRecognizer: Q,
			Tap: ot,
			Pan: tt,
			Swipe: st,
			Pinch: et,
			Rotate: nt,
			Press: it,
			on: h,
			off: d,
			each: o,
			merge: bt,
			extend: wt,
			assign: ut,
			inherit: r,
			bindFn: l,
			prefixed: w
		}), function(t, e) {
			function i(i, n) {
				var s = t(i);
				s.data("hammer") || s.data("hammer", new e(s[0], n))
			}
			t.fn.hammer = function(t) {
				return this.each(function() {
					i(this, t)
				})
			}, e.Manager.prototype.emit = function(e) {
				return function(i, n) {
					e.call(this, i, n), t(this.element).trigger({
						type: i,
						gesture: n
					})
				}
			}(e.Manager.prototype.emit)
		}(ht, at), t.exports = dt.Hammer = at
	}, function(t, e, i) {
		"use strict";

		function n() {
			window.removeEventListener("load", n, !1), c = !0
		}
		function s(t) {
			return u = u || new s.Class(t)
		}
		function o(t, e) {
			for (var i in e) t[i] = e[i];
			return t
		}
		function a() {
			"#ath" == document.location.hash && history.replaceState("", window.document.title, document.location.href.split("#")[0]), h.test(document.location.href) && history.replaceState("", window.document.title, document.location.href.replace(h, "$1")), d.test(document.location.search) && history.replaceState("", window.document.title, document.location.href.replace(d, "$2"))
		}
		var r = i(2),
			l = "addEventListener" in window,
			c = !1;
		"complete" === document.readyState ? c = !0 : l && window.addEventListener("load", n, !1);
		var u, h = /\/ath(\/)?$/,
			d = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;
		s.intl = {
			en_us: {
				ios: "To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.",
				android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'
			},
			zh_cn: {
				ios: "\u5982\u8981\u628a\u5e94\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55,\u8bf7\u70b9\u51fb%icon, \u7136\u540e<strong>\u52a0\u81f3\u4e3b\u5c4f\u5e55</strong>",
				android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'
			},
			zh_tw: {
				ios: "\u5982\u8981\u628a\u61c9\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55, \u8acb\u9ede\u64ca%icon, \u7136\u5f8c<strong>\u52a0\u81f3\u4e3b\u5c4f\u5e55</strong>.",
				android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'
			}
		};
		for (var p in s.intl) s.intl[p.substr(0, 2)] = s.intl[p];
		s.defaults = {
			appID: "org.cubiq.addtohome",
			fontSize: 15,
			debug: !1,
			logging: !1,
			modal: !1,
			mandatory: !1,
			autostart: !0,
			skipFirstVisit: !1,
			startDelay: 1,
			lifespan: 15,
			displayPace: 1440,
			maxDisplayCount: 0,
			icon: !0,
			message: "",
			validLocation: [],
			onInit: null,
			onShow: null,
			onRemove: null,
			onAdd: null,
			onPrivate: null,
			privateModeOverride: !1,
			detectHomescreen: !1
		};
		var m = window.navigator.userAgent,
			f = window.navigator;
		o(s, {
			hasToken: "#ath" == document.location.hash || h.test(document.location.href) || d.test(document.location.search),
			isRetina: window.devicePixelRatio && window.devicePixelRatio > 1,
			isIDevice: /iphone|ipod|ipad/i.test(m),
			isMobileChrome: m.indexOf("Android") > -1 && /Chrome\/[.0-9]*/.test(m) && m.indexOf("Version") == -1,
			isMobileIE: m.indexOf("Windows Phone") > -1,
			language: f.language && f.language.toLowerCase().replace("-", "_") || ""
		}), s.language = s.language && s.language in s.intl ? s.language : "en_us", s.isMobileSafari = s.isIDevice && m.indexOf("Safari") > -1 && m.indexOf("CriOS") < 0, s.OS = s.isIDevice ? "ios" : s.isMobileChrome ? "android" : s.isMobileIE ? "windows" : "unsupported", s.OSVersion = m.match(/(OS|Android) (\d+[_\.]\d+)/), s.OSVersion = s.OSVersion && s.OSVersion[2] ? +s.OSVersion[2].replace("_", ".") : 0, s.isStandalone = "standalone" in window.navigator && window.navigator.standalone, s.isTablet = s.isMobileSafari && m.indexOf("iPad") > -1 || s.isMobileChrome && m.indexOf("Mobile") < 0, s.isCompatible = s.isMobileSafari && s.OSVersion >= 6 || s.isMobileChrome;
		var v = {
			lastDisplayTime: 0,
			returningVisitor: !1,
			displayCount: 0,
			optedout: !1,
			added: !1
		};
		s.removeSession = function(t) {
			try {
				if (!localStorage) throw new Error("localStorage is not defined");
				localStorage.removeItem(t || s.defaults.appID)
			} catch (e) {}
		}, s.doLog = function(t) {
			this.options.logging && console.log(t)
		}, s.Class = function(t) {
			if (this.doLog = s.doLog, this.options = o({}, s.defaults), o(this.options, t), this.options.debug && (this.options.logging = !0), l) {
				if (this.options.mandatory = this.options.mandatory && ("standalone" in window.navigator || this.options.debug), this.options.modal = this.options.modal || this.options.mandatory, this.options.mandatory && (this.options.startDelay = -.5), this.options.detectHomescreen = this.options.detectHomescreen === !0 ? "hash" : this.options.detectHomescreen, this.options.debug && (s.isCompatible = !0, s.OS = "string" == typeof this.options.debug ? this.options.debug : "unsupported" == s.OS ? "android" : s.OS, s.OSVersion = "ios" == s.OS ? "8" : "4"), this.container = document.documentElement, this.session = this.getItem(this.options.appID), this.session = this.session ? JSON.parse(this.session) : void 0, !s.hasToken || s.isCompatible && this.session || (s.hasToken = !1, a()), !s.isCompatible) return void this.doLog("Add to homescreen: not displaying callout because device not supported");
				this.session = this.session || v;
				try {
					if (!localStorage) throw new Error("localStorage is not defined");
					localStorage.setItem(this.options.appID, JSON.stringify(this.session)), s.hasLocalStorage = !0
				} catch (e) {
					s.hasLocalStorage = !1, this.options.onPrivate && this.options.onPrivate.call(this)
				}
				for (var i = !this.options.validLocation.length, n = this.options.validLocation.length; n--;) if (this.options.validLocation[n].test(document.location.href)) {
					i = !0;
					break
				}
				if (this.getItem("addToHome") && this.optOut(), this.session.optedout) return void this.doLog("Add to homescreen: not displaying callout because user opted out");
				if (this.session.added) return void this.doLog("Add to homescreen: not displaying callout because already added to the homescreen");
				if (!i) return void this.doLog("Add to homescreen: not displaying callout because not a valid location");
				if (s.isStandalone) return this.session.added || (this.session.added = !0, this.updateSession(), this.options.onAdd && s.hasLocalStorage && this.options.onAdd.call(this)), void this.doLog("Add to homescreen: not displaying callout because in standalone mode");
				if (this.options.detectHomescreen) {
					if (s.hasToken) return a(), this.session.added || (this.session.added = !0, this.updateSession(), this.options.onAdd && s.hasLocalStorage && this.options.onAdd.call(this)), void this.doLog("Add to homescreen: not displaying callout because URL has token, so we are likely coming from homescreen");
					"hash" == this.options.detectHomescreen ? history.replaceState("", window.document.title, document.location.href + "#ath") : "smartURL" == this.options.detectHomescreen ? history.replaceState("", window.document.title, document.location.href.replace(/(\/)?$/, "/ath$1")) : history.replaceState("", window.document.title, document.location.href + (document.location.search ? "&" : "?") + "ath=")
				}
				if (!this.session.returningVisitor && (this.session.returningVisitor = !0, this.updateSession(), this.options.skipFirstVisit)) return void this.doLog("Add to homescreen: not displaying callout because skipping first visit");
				if (!this.options.privateModeOverride && !s.hasLocalStorage) return void this.doLog("Add to homescreen: not displaying callout because browser is in private mode");
				this.ready = !0, this.options.onInit && this.options.onInit.call(this), this.options.autostart && (this.doLog("Add to homescreen: autostart displaying callout"), this.show())
			}
		}, s.Class.prototype = {
			events: {
				load: "_delayedShow",
				error: "_delayedShow",
				orientationchange: "resize",
				resize: "resize",
				scroll: "resize",
				click: "remove",
				touchmove: "_preventDefault",
				transitionend: "_removeElements",
				webkitTransitionEnd: "_removeElements",
				MSTransitionEnd: "_removeElements"
			},
			handleEvent: function(t) {
				var e = this.events[t.type];
				e && this[e](t)
			},
			show: function(t) {
				if (this.options.autostart && !c) return void setTimeout(this.show.bind(this), 50);
				if (this.shown) return void this.doLog("Add to homescreen: not displaying callout because already shown on screen");
				var e = Date.now(),
					i = this.session.lastDisplayTime;
				if (t !== !0) {
					if (!this.ready) return void this.doLog("Add to homescreen: not displaying callout because not ready");
					if (e - i < 6e4 * this.options.displayPace) return void this.doLog("Add to homescreen: not displaying callout because displayed recently");
					if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount) return void this.doLog("Add to homescreen: not displaying callout because displayed too many times already")
				}
				this.shown = !0, this.session.lastDisplayTime = e, this.session.displayCount++, this.updateSession(), this.applicationIcon || ("ios" == s.OS ? this.applicationIcon = document.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]') : this.applicationIcon = document.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]'));
				var n = "";
				"object" == typeof this.options.message && s.language in this.options.message ? n = this.options.message[s.language][s.OS] : "object" == typeof this.options.message && s.OS in this.options.message ? n = this.options.message[s.OS] : this.options.message in s.intl ? n = s.intl[this.options.message][s.OS] : "" !== this.options.message ? n = this.options.message : s.OS in s.intl[s.language] && (n = s.intl[s.language][s.OS]), n = "<p>" + n.replace("%icon", '<span class="ath-action-icon">icon</span>') + "</p>", this.viewport = document.createElement("div"), this.viewport.className = "ath-viewport", this.options.modal && (this.viewport.className += " ath-modal"), this.options.mandatory && (this.viewport.className += " ath-mandatory"), this.viewport.style.position = "absolute", this.element = document.createElement("div"), this.element.className = "ath-container ath-" + s.OS + " ath-" + s.OS + (s.OSVersion + "").substr(0, 1) + " ath-" + (s.isTablet ? "tablet" : "phone"), this.element.style.cssText = "-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;", this.element.style.webkitTransform = "translate3d(0,-" + window.innerHeight + "px,0)", this.element.style.transform = "translate3d(0,-" + window.innerHeight + "px,0)", this.options.icon && this.applicationIcon && (this.element.className += " ath-icon", this.img = document.createElement("img"), this.img.className = "ath-application-icon", this.img.addEventListener("load", this, !1), this.img.addEventListener("error", this, !1), this.img.src = this.applicationIcon.href, this.element.appendChild(this.img)), this.element.innerHTML += n, this.viewport.style.left = "-99999em", this.viewport.appendChild(this.element), this.container.appendChild(this.viewport), this.img ? this.doLog("Add to homescreen: not displaying callout because waiting for img to load") : this._delayedShow()
			},
			_delayedShow: function(t) {
				setTimeout(this._show.bind(this), 1e3 * this.options.startDelay + 500)
			},
			_show: function() {
				var t = this;
				this.updateViewport(), window.addEventListener("resize", this, !1), window.addEventListener("scroll", this, !1), window.addEventListener("orientationchange", this, !1), this.options.modal && document.addEventListener("touchmove", this, !0), this.options.mandatory || setTimeout(function() {
					t.element.addEventListener("click", t, !0)
				}, 1e3), setTimeout(function() {
					t.element.style.webkitTransitionDuration = "1.2s", t.element.style.transitionDuration = "1.2s", t.element.style.webkitTransform = "translate3d(0,0,0)", t.element.style.transform = "translate3d(0,0,0)"
				}, 0), this.options.lifespan && (this.removeTimer = setTimeout(this.remove.bind(this), 1e3 * this.options.lifespan)), this.options.onShow && this.options.onShow.call(this)
			},
			remove: function() {
				clearTimeout(this.removeTimer), this.img && (this.img.removeEventListener("load", this, !1), this.img.removeEventListener("error", this, !1)), window.removeEventListener("resize", this, !1), window.removeEventListener("scroll", this, !1), window.removeEventListener("orientationchange", this, !1), document.removeEventListener("touchmove", this, !0), this.element.removeEventListener("click", this, !0), this.element.addEventListener("transitionend", this, !1), this.element.addEventListener("webkitTransitionEnd", this, !1), this.element.addEventListener("MSTransitionEnd", this, !1), this.element.style.webkitTransitionDuration = "0.3s", this.element.style.opacity = "0"
			},
			_removeElements: function() {
				this.element.removeEventListener("transitionend", this, !1), this.element.removeEventListener("webkitTransitionEnd", this, !1), this.element.removeEventListener("MSTransitionEnd", this, !1), this.container.removeChild(this.viewport), this.shown = !1, this.options.onRemove && this.options.onRemove.call(this)
			},
			updateViewport: function() {
				if (this.shown) {
					this.viewport.style.width = window.innerWidth + "px", this.viewport.style.height = window.innerHeight + "px", this.viewport.style.left = window.scrollX + "px", this.viewport.style.top = window.scrollY + "px";
					var t = document.documentElement.clientWidth;
					this.orientation = t > document.documentElement.clientHeight ? "landscape" : "portrait";
					var e = "ios" == s.OS ? "portrait" == this.orientation ? screen.width : screen.height : screen.width;
					this.scale = screen.width > t ? 1 : e / window.innerWidth, this.element.style.fontSize = this.options.fontSize / this.scale + "px"
				}
			},
			resize: function() {
				clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100)
			},
			updateSession: function() {
				s.hasLocalStorage !== !1 && localStorage && localStorage.setItem(this.options.appID, JSON.stringify(this.session))
			},
			clearSession: function() {
				this.session = v, this.updateSession()
			},
			getItem: function(t) {
				try {
					if (!localStorage) throw new Error("localStorage is not defined");
					return localStorage.getItem(t)
				} catch (e) {
					s.hasLocalStorage = !1
				}
			},
			optOut: function() {
				this.session.optedout = !0, this.updateSession()
			},
			optIn: function() {
				this.session.optedout = !1, this.updateSession()
			},
			clearDisplayCount: function() {
				this.session.displayCount = 0, this.updateSession()
			},
			_preventDefault: function(t) {
				t.preventDefault(), t.stopPropagation()
			}
		}, s.VERSION = "3.2.2", t.exports = r.addToHomescreen = s
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = function(t, e) {
				var i = this;
				this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.$element.addClass("am-fade am-in").on("click.alert.amui", ".am-close", function() {
					i.close()
				})
			};
		o.DEFAULTS = {
			removeElement: !0
		}, o.prototype.close = function() {
			function t() {
				e.trigger("closed.alert.amui").remove()
			}
			var e = this.$element;
			e.trigger("close.alert.amui").removeClass("am-in"), s.support.transition && e.hasClass("am-fade") ? e.one(s.support.transition.end, t).emulateTransitionEnd(200) : t()
		}, s.plugin("alert", o), n(document).on("click.alert.amui.data-api", "[data-am-alert]", function(t) {
			var e = n(t.target);
			e.is(".am-close") && n(this).alert("close")
		}), t.exports = o
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = function(t, e) {
				this.$element = n(t), this.options = n.extend({}, o.DEFAULTS, e), this.isLoading = !1, this.hasSpinner = !1
			};
		o.DEFAULTS = {
			loadingText: "loading...",
			disabledClassName: "am-disabled",
			activeClassName: "am-active",
			spinner: void 0
		}, o.prototype.setState = function(t, e) {
			var i = this.$element,
				o = "disabled",
				a = i.data(),
				r = this.options,
				l = i.is("input") ? "val" : "html",
				c = "am-btn-" + t + " " + r.disabledClassName;
			t += "Text", r.resetText || (r.resetText = i[l]()), s.support.animation && r.spinner && "html" === l && !this.hasSpinner && (r.loadingText = '<span class="am-icon-' + r.spinner + ' am-icon-spin"></span>' + r.loadingText, this.hasSpinner = !0), e = e || (void 0 === a[t] ? r[t] : a[t]), i[l](e), setTimeout(n.proxy(function() {
				"loadingText" === t ? (i.addClass(c).attr(o, o), this.isLoading = !0) : this.isLoading && (i.removeClass(c).removeAttr(o), this.isLoading = !1)
			}, this), 0)
		}, o.prototype.toggle = function() {
			var t = !0,
				e = this.$element,
				i = this.$element.parent('[class*="am-btn-group"]'),
				n = o.DEFAULTS.activeClassName;
			if (i.length) {
				var s = this.$element.find("input");
				"radio" == s.prop("type") && (s.prop("checked") && e.hasClass(n) ? t = !1 : i.find("." + n).removeClass(n)), t && s.prop("checked", !e.hasClass(n)).trigger("change")
			}
			t && (e.toggleClass(n), e.hasClass(n) || e.blur())
		}, s.plugin("button", o, {
			dataOptions: "data-am-loading",
			methodCall: function(t, e) {
				"toggle" === t[0] ? e.toggle() : "string" == typeof t[0] && e.setState.apply(e, t)
			}
		}), n(document).on("click.button.amui.data-api", "[data-am-button]", function(t) {
			t.preventDefault();
			var e = n(t.target);
			e.hasClass("am-btn") || (e = e.closest(".am-btn")), e.button("toggle")
		}), s.ready(function(t) {
			n("[data-am-loading]", t).button(), n("[data-am-button]", t).find("input:checked").each(function() {
				n(this).parent("label").addClass(o.DEFAULTS.activeClassName)
			})
		}), t.exports = s.button = o
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return this.each(function() {
				var e = s(this),
					i = e.data("amui.collapse"),
					n = s.extend({}, a.DEFAULTS, o.utils.options(e.attr("data-am-collapse")), "object" == typeof t && t);
				!i && n.toggle && "open" === t && (t = !t), i || e.data("amui.collapse", i = new a(this, n)), "string" == typeof t && i[t]()
			})
		}
		var s = i(1),
			o = i(2),
			a = function(t, e) {
				this.$element = s(t), this.options = s.extend({}, a.DEFAULTS, e), this.transitioning = null, this.options.parent && (this.$parent = s(this.options.parent)), this.options.toggle && this.toggle()
			};
		a.DEFAULTS = {
			toggle: !0
		}, a.prototype.open = function() {
			if (!this.transitioning && !this.$element.hasClass("am-in")) {
				var t = s.Event("open.collapse.amui");
				if (this.$element.trigger(t), !t.isDefaultPrevented()) {
					var e = this.$parent && this.$parent.find("> .am-panel > .am-in");
					if (e && e.length) {
						var i = e.data("amui.collapse");
						if (i && i.transitioning) return;
						n.call(e, "close"), i || e.data("amui.collapse", null)
					}
					this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0), this.transitioning = 1;
					var a = function() {
							this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height("").trigger("opened.collapse.amui"), this.transitioning = 0
						};
					if (!o.support.transition) return a.call(this);
					var r = this.$element[0].scrollHeight;
					this.$element.one(o.support.transition.end, s.proxy(a, this)).emulateTransitionEnd(300).css({
						height: r
					})
				}
			}
		}, a.prototype.close = function() {
			if (!this.transitioning && this.$element.hasClass("am-in")) {
				var t = s.Event("close.collapse.amui");
				if (this.$element.trigger(t), !t.isDefaultPrevented()) {
					this.$element.height(this.$element.height()).redraw(), this.$element.addClass("am-collapsing").removeClass("am-collapse am-in"), this.transitioning = 1;
					var e = function() {
							this.transitioning = 0, this.$element.trigger("closed.collapse.amui").removeClass("am-collapsing").addClass("am-collapse")
						};
					return o.support.transition ? void this.$element.height(0).one(o.support.transition.end, s.proxy(e, this)).emulateTransitionEnd(300) : e.call(this)
				}
			}
		}, a.prototype.toggle = function() {
			this[this.$element.hasClass("am-in") ? "close" : "open"]()
		}, s.fn.collapse = n, s(document).on("click.collapse.amui.data-api", "[data-am-collapse]", function(t) {
			var e, i = s(this),
				a = o.utils.options(i.attr("data-am-collapse")),
				r = a.target || t.preventDefault() || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
				l = s(r),
				c = l.data("amui.collapse"),
				u = c ? "toggle" : a,
				h = a.parent,
				d = h && s(h);
			c && c.transitioning || (d && d.find("[data-am-collapse]").not(i).addClass("am-collapsed"), i[l.hasClass("am-in") ? "addClass" : "removeClass"]("am-collapsed")), n.call(l, u)
		}), t.exports = o.collapse = a
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = n(document),
			a = function(t, e) {
				if (this.$element = n(t), this.options = n.extend({}, a.DEFAULTS, e), this.format = r.parseFormat(this.options.format), this.$element.data("date", this.options.date), this.language = this.getLocale(this.options.locale), this.theme = this.options.theme, this.$picker = n(r.template).appendTo("body").on({
					click: n.proxy(this.click, this)
				}), this.isInput = this.$element.is("input"), this.component = !! this.$element.is(".am-datepicker-date") && this.$element.find(".am-datepicker-add-on"), this.isInput ? this.$element.on({
					"click.datepicker.amui": n.proxy(this.open, this),
					"keyup.datepicker.amui": n.proxy(this.update, this)
				}) : this.component ? this.component.on("click.datepicker.amui", n.proxy(this.open, this)) : this.$element.on("click.datepicker.amui", n.proxy(this.open, this)), this.minViewMode = this.options.minViewMode, "string" == typeof this.minViewMode) switch (this.minViewMode) {
				case "months":
					this.minViewMode = 1;
					break;
				case "years":
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0
				}
				if (this.viewMode = this.options.viewMode, "string" == typeof this.viewMode) switch (this.viewMode) {
				case "months":
					this.viewMode = 1;
					break;
				case "years":
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0
				}
				this.startViewMode = this.viewMode, this.weekStart = (this.options.weekStart || a.locales[this.language].weekStart || 0) % 7, this.weekEnd = (this.weekStart + 6) % 7, this.onRender = this.options.onRender, this.setTheme(), this.fillDow(), this.fillMonths(), this.update(), this.showMode()
			};
		a.DEFAULTS = {
			locale: "zh_CN",
			format: "yyyy-mm-dd",
			weekStart: void 0,
			viewMode: 0,
			minViewMode: 0,
			date: "",
			theme: "",
			autoClose: 1,
			onRender: function(t) {
				return ""
			}
		}, a.prototype.open = function(t) {
			this.$picker.show(), this.height = this.component ? this.component.outerHeight() : this.$element.outerHeight(), this.place(), n(window).on("resize.datepicker.amui", n.proxy(this.place, this)), t && (t.stopPropagation(), t.preventDefault());
			var e = this;
			o.on("mousedown.datapicker.amui touchstart.datepicker.amui", function(t) {
				0 === n(t.target).closest(".am-datepicker").length && e.close()
			}), this.$element.trigger({
				type: "open.datepicker.amui",
				date: this.date
			})
		}, a.prototype.close = function() {
			this.$picker.hide(), n(window).off("resize.datepicker.amui", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || n(document).off("mousedown.datapicker.amui touchstart.datepicker.amui", this.close), this.$element.trigger({
				type: "close.datepicker.amui",
				date: this.date
			})
		}, a.prototype.set = function() {
			var t, e = r.formatDate(this.date, this.format);
			this.isInput ? t = this.$element.attr("value", e) : (this.component && (t = this.$element.find("input").attr("value", e)), this.$element.data("date", e)), t && t.trigger("change")
		}, a.prototype.setValue = function(t) {
			"string" == typeof t ? this.date = r.parseDate(t, this.format) : this.date = new Date(t), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
		}, a.prototype.place = function() {
			var t = this.component ? this.component.offset() : this.$element.offset(),
				e = this.component ? this.component.width() : this.$element.width(),
				i = t.top + this.height,
				n = t.left,
				s = o.width() - t.left - e,
				a = this.isOutView();
			if (this.$picker.removeClass("am-datepicker-right"), this.$picker.removeClass("am-datepicker-up"), o.width() > 640) {
				if (a.outRight) return this.$picker.addClass("am-datepicker-right"), void this.$picker.css({
					top: i,
					left: "auto",
					right: s
				});
				a.outBottom && (this.$picker.addClass("am-datepicker-up"), i = t.top - this.$picker.outerHeight(!0))
			} else n = 0;
			this.$picker.css({
				top: i,
				left: n
			})
		}, a.prototype.update = function(t) {
			this.date = r.parseDate("string" == typeof t ? t : this.isInput ? this.$element.prop("value") : this.$element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
		}, a.prototype.fillDow = function() {
			for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) e += '<th class="am-datepicker-dow">' + a.locales[this.language].daysMin[t++ % 7] + "</th>";
			e += "</tr>", this.$picker.find(".am-datepicker-days thead").append(e)
		}, a.prototype.fillMonths = function() {
			for (var t = "", e = 0; e < 12;) t += '<span class="am-datepicker-month">' + a.locales[this.language].monthsShort[e++] + "</span>";
			this.$picker.find(".am-datepicker-months td").append(t)
		}, a.prototype.fill = function() {
			var t = new Date(this.viewDate),
				e = t.getFullYear(),
				i = t.getMonth(),
				n = this.date.valueOf(),
				s = new Date(e, i - 1, 28, 0, 0, 0, 0),
				o = r.getDaysInMonth(s.getFullYear(), s.getMonth()),
				l = this.$picker.find(".am-datepicker-days .am-datepicker-select");
			"zh_CN" === this.language ? l.text(e + a.locales[this.language].year[0] + " " + a.locales[this.language].months[i]) : l.text(a.locales[this.language].months[i] + " " + e), s.setDate(o), s.setDate(o - (s.getDay() - this.weekStart + 7) % 7);
			var c = new Date(s);
			c.setDate(c.getDate() + 42), c = c.valueOf();
			for (var u, h, d, p = []; s.valueOf() < c;) s.getDay() === this.weekStart && p.push("<tr>"), u = this.onRender(s, 0), h = s.getFullYear(), d = s.getMonth(), d < i && h === e || h < e ? u += " am-datepicker-old" : (d > i && h === e || h > e) && (u += " am-datepicker-new"), s.valueOf() === n && (u += " am-active"), p.push('<td class="am-datepicker-day ' + u + '">' + s.getDate() + "</td>"), s.getDay() === this.weekEnd && p.push("</tr>"), s.setDate(s.getDate() + 1);
			this.$picker.find(".am-datepicker-days tbody").empty().append(p.join(""));
			var m = this.date.getFullYear(),
				f = this.$picker.find(".am-datepicker-months").find(".am-datepicker-select").text(e);
			f = f.end().find("span").removeClass("am-active").removeClass("am-disabled");
			for (var v = 0; v < 12;) this.onRender(t.setFullYear(e, v), 1) && f.eq(v).addClass("am-disabled"), v++;
			m === e && f.eq(this.date.getMonth()).removeClass("am-disabled").addClass("am-active"), p = "", e = 10 * parseInt(e / 10, 10);
			var g, y = this.$picker.find(".am-datepicker-years").find(".am-datepicker-select").text(e + "-" + (e + 9)).end().find("td"),
				w = new Date(this.viewDate);
			e -= 1;
			for (var b = -1; b < 11; b++) g = this.onRender(w.setFullYear(e), 2), p += '<span class="' + g + (b === -1 || 10 === b ? " am-datepicker-old" : "") + (m === e ? " am-active" : "") + '">' + e + "</span>", e += 1;
			y.html(p)
		}, a.prototype.click = function(t) {
			t.stopPropagation(), t.preventDefault();
			var e, i, s = this.$picker.find(".am-datepicker-days").find(".am-active"),
				o = this.$picker.find(".am-datepicker-months"),
				a = o.find(".am-active").index(),
				l = n(t.target).closest("span, td, th");
			if (1 === l.length) switch (l[0].nodeName.toLowerCase()) {
			case "th":
				switch (l[0].className) {
				case "am-datepicker-switch":
					this.showMode(1);
					break;
				case "am-datepicker-prev":
				case "am-datepicker-next":
					this.viewDate["set" + r.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + r.modes[this.viewMode].navFnc].call(this.viewDate) + r.modes[this.viewMode].navStep * ("am-datepicker-prev" === l[0].className ? -1 : 1)), this.fill(), this.set()
				}
				break;
			case "span":
				if (l.is(".am-disabled")) return;
				l.is(".am-datepicker-month") ? (e = l.parent().find("span").index(l), l.is(".am-active") ? this.viewDate.setMonth(e, s.text()) : this.viewDate.setMonth(e)) : (i = parseInt(l.text(), 10) || 0, l.is(".am-active") ? this.viewDate.setFullYear(i, a, s.text()) : this.viewDate.setFullYear(i)), 0 !== this.viewMode && (this.date = new Date(this.viewDate), this.$element.trigger({
					type: "changeDate.datepicker.amui",
					date: this.date,
					viewMode: r.modes[this.viewMode].clsName
				})), this.showMode(-1), this.fill(), this.set();
				break;
			case "td":
				if (l.is(".am-datepicker-day") && !l.is(".am-disabled")) {
					var c = parseInt(l.text(), 10) || 1;
					e = this.viewDate.getMonth(), l.is(".am-datepicker-old") ? e -= 1 : l.is(".am-datepicker-new") && (e += 1), i = this.viewDate.getFullYear(), this.date = new Date(i, e, c, 0, 0, 0, 0), this.viewDate = new Date(i, e, Math.min(28, c), 0, 0, 0, 0), this.fill(), this.set(), this.$element.trigger({
						type: "changeDate.datepicker.amui",
						date: this.date,
						viewMode: r.modes[this.viewMode].clsName
					}), this.options.autoClose && this.close()
				}
			}
		}, a.prototype.mousedown = function(t) {
			t.stopPropagation(), t.preventDefault()
		}, a.prototype.showMode = function(t) {
			t && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + t))), this.$picker.find(">div").hide().filter(".am-datepicker-" + r.modes[this.viewMode].clsName).show()
		}, a.prototype.isOutView = function() {
			var t = this.component ? this.component.offset() : this.$element.offset(),
				e = {
					outRight: !1,
					outBottom: !1
				},
				i = this.$picker,
				n = t.left + i.outerWidth(!0),
				s = t.top + i.outerHeight(!0) + this.$element.innerHeight();
			return n > o.width() && (e.outRight = !0), s > o.height() && (e.outBottom = !0), e
		}, a.prototype.getLocale = function(t) {
			return t || (t = navigator.language && navigator.language.split("-"), t[1] = t[1].toUpperCase(), t = t.join("_")), a.locales[t] || (t = "en_US"), t
		}, a.prototype.setTheme = function() {
			this.theme && this.$picker.addClass("am-datepicker-" + this.theme)
		}, a.locales = {
			en_US: {
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				weekStart: 0
			},
			zh_CN: {
				days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
				daysShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],
				daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
				months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
				monthsShort: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
				weekStart: 1,
				year: ["\u5e74"]
			}
		};
		var r = {
			modes: [{
				clsName: "days",
				navFnc: "Month",
				navStep: 1
			}, {
				clsName: "months",
				navFnc: "FullYear",
				navStep: 1
			}, {
				clsName: "years",
				navFnc: "FullYear",
				navStep: 10
			}],
			isLeapYear: function(t) {
				return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
			},
			getDaysInMonth: function(t, e) {
				return [31, r.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
			},
			parseFormat: function(t) {
				var e = t.match(/[.\/\-\s].*?/),
					i = t.split(/\W+/);
				if (!e || !i || 0 === i.length) throw new Error("Invalid date format.");
				return {
					separator: e,
					parts: i
				}
			},
			parseDate: function(t, e) {
				var i, n = t.split(e.separator);
				if (t = new Date, t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), n.length === e.parts.length) {
					for (var s = t.getFullYear(), o = t.getDate(), a = t.getMonth(), r = 0, l = e.parts.length; r < l; r++) switch (i = parseInt(n[r], 10) || 1, e.parts[r]) {
					case "dd":
					case "d":
						o = i, t.setDate(i);
						break;
					case "mm":
					case "m":
						a = i - 1, t.setMonth(i - 1);
						break;
					case "yy":
						s = 2e3 + i, t.setFullYear(2e3 + i);
						break;
					case "yyyy":
						s = i, t.setFullYear(i)
					}
					t = new Date(s, a, o, 0, 0, 0)
				}
				return t
			},
			formatDate: function(t, e) {
				var i = {
					d: t.getDate(),
					m: t.getMonth() + 1,
					yy: t.getFullYear().toString().substring(2),
					yyyy: t.getFullYear()
				},
					n = [];
				i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m;
				for (var s = 0, o = e.parts.length; s < o; s++) n.push(i[e.parts[s]]);
				return n.join(e.separator)
			},
			headTemplate: '<thead><tr class="am-datepicker-header"><th class="am-datepicker-prev"><i class="am-datepicker-prev-icon"></i></th><th colspan="5" class="am-datepicker-switch"><div class="am-datepicker-select"></div></th><th class="am-datepicker-next"><i class="am-datepicker-next-icon"></i></th></tr></thead>',
			contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
		};
		r.template = '<div class="am-datepicker am-datepicker-dropdown"><div class="am-datepicker-caret"></div><div class="am-datepicker-days"><table class="am-datepicker-table">' + r.headTemplate + '<tbody></tbody></table></div><div class="am-datepicker-months"><table class="am-datepicker-table">' + r.headTemplate + r.contTemplate + '</table></div><div class="am-datepicker-years"><table class="am-datepicker-table">' + r.headTemplate + r.contTemplate + "</table></div></div>", s.plugin("datepicker", a), s.ready(function(t) {
			n("[data-am-datepicker]").datepicker()
		}), t.exports = s.datepicker = a
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = n(document),
			a = s.support.transition,
			r = function() {
				this.id = s.utils.generateGUID("am-dimmer"), this.$element = n(r.DEFAULTS.tpl, {
					id: this.id
				}), this.inited = !1, this.scrollbarWidth = 0, this.$used = n([])
			};
		r.DEFAULTS = {
			tpl: '<div class="am-dimmer" data-am-dimmer></div>'
		}, r.prototype.init = function() {
			return this.inited || (n(document.body).append(this.$element), this.inited = !0, o.trigger("init.dimmer.amui"), this.$element.on("touchmove.dimmer.amui", function(t) {
				t.preventDefault()
			})), this
		}, r.prototype.open = function(t) {
			this.inited || this.init();
			var e = this.$element;
			return t && (this.$used = this.$used.add(n(t))), this.checkScrollbar().setScrollbar(), e.show().trigger("open.dimmer.amui"), a && e.off(a.end), setTimeout(function() {
				e.addClass("am-active")
			}, 0), this
		}, r.prototype.close = function(t, e) {
			function i() {
				s.hide(), this.resetScrollbar()
			}
			if (this.$used = this.$used.not(n(t)), !e && this.$used.length) return this;
			var s = this.$element;
			return s.removeClass("am-active").trigger("close.dimmer.amui"), i.call(this), this
		}, r.prototype.checkScrollbar = function() {
			return this.scrollbarWidth = s.utils.measureScrollbar(), this
		}, r.prototype.setScrollbar = function() {
			var t = n(document.body),
				e = parseInt(t.css("padding-right") || 0, 10);
			return this.scrollbarWidth && t.css("padding-right", e + this.scrollbarWidth), t.addClass("am-dimmer-active"), this
		}, r.prototype.resetScrollbar = function() {
			return n(document.body).css("padding-right", "").removeClass("am-dimmer-active"), this
		}, t.exports = s.dimmer = new r
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = s.support.animation,
			a = function(t, e) {
				this.options = n.extend({}, a.DEFAULTS, e), e = this.options, this.$element = n(t), this.$toggle = this.$element.find(e.selector.toggle), this.$dropdown = this.$element.find(e.selector.dropdown), this.$boundary = e.boundary === window ? n(window) : this.$element.closest(e.boundary), this.$justify = e.justify && n(e.justify).length && n(e.justify) || void 0, !this.$boundary.length && (this.$boundary = n(window)), this.active = !! this.$element.hasClass("am-active"), this.animating = null, this.events()
			};
		a.DEFAULTS = {
			animation: "am-animation-slide-top-fixed",
			boundary: window,
			justify: void 0,
			selector: {
				dropdown: ".am-dropdown-content",
				toggle: ".am-dropdown-toggle"
			},
			trigger: "click"
		}, a.prototype.toggle = function() {
			this.clear(), this.animating || this[this.active ? "close" : "open"]()
		}, a.prototype.open = function(t) {
			var e = this.$toggle,
				i = this.$element,
				s = this.$dropdown;
			if (!e.is(".am-disabled, :disabled") && !this.active) {
				i.trigger("open.dropdown.amui").addClass("am-active"), e.trigger("focus"), this.checkDimensions(t);
				var a = n.proxy(function() {
					i.trigger("opened.dropdown.amui"), this.active = !0, this.animating = 0
				}, this);
				o ? (this.animating = 1, s.addClass(this.options.animation).on(o.end + ".open.dropdown.amui", n.proxy(function() {
					a(), s.removeClass(this.options.animation)
				}, this))) : a()
			}
		}, a.prototype.close = function() {
			if (this.active) {
				var t = "am-dropdown-animation",
					e = this.$element,
					i = this.$dropdown;
				e.trigger("close.dropdown.amui");
				var s = n.proxy(function() {
					e.removeClass("am-active").trigger("closed.dropdown.amui"), this.active = !1, this.animating = 0, this.$toggle.blur()
				}, this);
				o ? (i.removeClass(this.options.animation), i.addClass(t), this.animating = 1, i.one(o.end + ".close.dropdown.amui", function() {
					i.removeClass(t), s()
				})) : s()
			}
		}, a.prototype.enable = function() {
			this.$toggle.prop("disabled", !1)
		}, a.prototype.disable = function() {
			this.$toggle.prop("disabled", !0)
		}, a.prototype.checkDimensions = function(t) {
			if (this.$dropdown.length) {
				var e = this.$dropdown;
				t && t.offset && e.offset(t.offset);
				var i = e.offset(),
					s = e.outerWidth(),
					o = this.$boundary.width(),
					a = n.isWindow(this.boundary) && this.$boundary.offset() ? this.$boundary.offset().left : 0;
				this.$justify && e.css({
					"min-width": this.$justify.css("width")
				}), s + (i.left - a) > o && this.$element.addClass("am-dropdown-flip")
			}
		}, a.prototype.clear = function() {
			n("[data-am-dropdown]").not(this.$element).each(function() {
				var t = n(this).data("amui.dropdown");
				t && t.close()
			})
		}, a.prototype.events = function() {
			var t = "dropdown.amui",
				e = this.$toggle;
			e.on("click." + t, n.proxy(function(t) {
				t.preventDefault(), this.toggle()
			}, this)), n(document).on("keydown.dropdown.amui", n.proxy(function(t) {
				27 === t.keyCode && this.active && this.close()
			}, this)).on("click.outer.dropdown.amui", n.proxy(function(t) {
				!this.active || this.$element[0] !== t.target && this.$element.find(t.target).length || this.close()
			}, this))
		}, s.plugin("dropdown", a), s.ready(function(t) {
			n("[data-am-dropdown]", t).dropdown()
		}), n(document).on("click.dropdown.amui.data-api", ".am-dropdown form", function(t) {
			t.stopPropagation()
		}), t.exports = s.dropdown = a
	}, function(t, e, i) {
		(function(e) {
			var n = i(1),
				s = i(2),
				o = !0;
			n.flexslider = function(t, i) {
				var s = n(t);
				s.vars = n.extend({}, n.flexslider.defaults, i);
				var a, r = s.vars.namespace,
					l = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
					c = ("ontouchstart" in window || l || window.DocumentTouch && document instanceof DocumentTouch) && s.vars.touch,
					u = "click touchend MSPointerUp keyup",
					h = "",
					d = "vertical" === s.vars.direction,
					p = s.vars.reverse,
					m = s.vars.itemWidth > 0,
					f = "fade" === s.vars.animation,
					v = "" !== s.vars.asNavFor,
					g = {};
				n.data(t, "flexslider", s), g = {
					init: function() {
						s.animating = !1, s.currentSlide = parseInt(s.vars.startAt ? s.vars.startAt : 0, 10), isNaN(s.currentSlide) && (s.currentSlide = 0), s.animatingTo = s.currentSlide, s.atEnd = 0 === s.currentSlide || s.currentSlide === s.last, s.containerSelector = s.vars.selector.substr(0, s.vars.selector.search(" ")), s.slides = n(s.vars.selector, s), s.container = n(s.containerSelector, s), s.count = s.slides.length, s.syncExists = n(s.vars.sync).length > 0, "slide" === s.vars.animation && (s.vars.animation = "swing"), s.prop = d ? "top" : "marginLeft", s.args = {}, s.manualPause = !1, s.stopped = !1, s.started = !1, s.startTimeout = null, s.transitions = !s.vars.video && !f && s.vars.useCSS &&
						function() {
							var t = document.createElement("div"),
								e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
							for (var i in e) if (void 0 !== t.style[e[i]]) return s.pfx = e[i].replace("Perspective", "").toLowerCase(), s.prop = "-" + s.pfx + "-transform", !0;
							return !1
						}(), s.ensureAnimationEnd = "", "" !== s.vars.controlsContainer && (s.controlsContainer = n(s.vars.controlsContainer).length > 0 && n(s.vars.controlsContainer)), "" !== s.vars.manualControls && (s.manualControls = n(s.vars.manualControls).length > 0 && n(s.vars.manualControls)), "" !== s.vars.customDirectionNav && (s.customDirectionNav = 2 === n(s.vars.customDirectionNav).length && n(s.vars.customDirectionNav)), s.vars.randomize && (s.slides.sort(function() {
							return Math.round(Math.random()) - .5
						}), s.container.empty().append(s.slides)), s.doMath(), s.setup("init"), s.vars.controlNav && g.controlNav.setup(), s.vars.directionNav && g.directionNav.setup(), s.vars.keyboard && (1 === n(s.containerSelector).length || s.vars.multipleKeyboard) && n(document).bind("keyup", function(t) {
							var e = t.keyCode;
							if (!s.animating && (39 === e || 37 === e)) {
								var i = 39 === e ? s.getTarget("next") : 37 === e && s.getTarget("prev");
								s.flexAnimate(i, s.vars.pauseOnAction)
							}
						}), s.vars.mousewheel && s.bind("mousewheel", function(t, e, i, n) {
							t.preventDefault();
							var o = e < 0 ? s.getTarget("next") : s.getTarget("prev");
							s.flexAnimate(o, s.vars.pauseOnAction)
						}), s.vars.pausePlay && g.pausePlay.setup(), s.vars.slideshow && s.vars.pauseInvisible && g.pauseInvisible.init(), s.vars.slideshow && (s.vars.pauseOnHover && s.hover(function() {
							s.manualPlay || s.manualPause || s.pause()
						}, function() {
							s.manualPause || s.manualPlay || s.stopped || s.play()
						}), s.vars.pauseInvisible && g.pauseInvisible.isHidden() || (s.vars.initDelay > 0 ? s.startTimeout = setTimeout(s.play, s.vars.initDelay) : s.play())), v && g.asNav.setup(), c && s.vars.touch && g.touch(), (!f || f && s.vars.smoothHeight) && n(window).bind("resize orientationchange focus", g.resize), s.find("img").attr("draggable", "false"), setTimeout(function() {
							s.vars.start(s)
						}, 200)
					},
					asNav: {
						setup: function() {
							s.asNav = !0, s.animatingTo = Math.floor(s.currentSlide / s.move), s.currentItem = s.currentSlide, s.slides.removeClass(r + "active-slide").eq(s.currentItem).addClass(r + "active-slide"), l ? (t._slider = s, s.slides.each(function() {
								var t = this;
								t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(t) {
									t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
								}, !1), t.addEventListener("MSGestureTap", function(t) {
									t.preventDefault();
									var e = n(this),
										i = e.index();
									n(s.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (s.direction = s.currentItem < i ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction, !1, !0, !0))
								})
							})) : s.slides.on(u, function(t) {
								t.preventDefault();
								var e = n(this),
									i = e.index(),
									o = e.offset().left - n(s).scrollLeft();
								o <= 0 && e.hasClass(r + "active-slide") ? s.flexAnimate(s.getTarget("prev"), !0) : n(s.vars.asNavFor).data("flexslider").animating || e.hasClass(r + "active-slide") || (s.direction = s.currentItem < i ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction, !1, !0, !0))
							})
						}
					},
					controlNav: {
						setup: function() {
							s.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
						},
						setupPaging: function() {
							var t, e, i = "thumbnails" === s.vars.controlNav ? "control-thumbs" : "control-paging",
								o = 1;
							if (s.controlNavScaffold = n('<ol class="' + r + "control-nav " + r + i + '"></ol>'), s.pagingCount > 1) for (var a = 0; a < s.pagingCount; a++) {
								e = s.slides.eq(a), void 0 === e.attr("data-thumb-alt") && e.attr("data-thumb-alt", "");
								var l = "" !== e.attr("data-thumb-alt") ? l = ' alt="' + e.attr("data-thumb-alt") + '"' : "";
								if (t = "thumbnails" === s.vars.controlNav ? '<img src="' + e.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + o + "</a>", "thumbnails" === s.vars.controlNav && !0 === s.vars.thumbCaptions) {
									var c = e.attr("data-thumbcaption");
									"" !== c && void 0 !== c && (t += '<span class="' + r + 'caption">' + c + "</span>")
								}
								s.controlNavScaffold.append("<li>" + t + "<i></i></li>"), o++
							}
							s.controlsContainer ? n(s.controlsContainer).append(s.controlNavScaffold) : s.append(s.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), s.controlNavScaffold.delegate("a, img", u, function(t) {
								if (t.preventDefault(), "" === h || h === t.type) {
									var e = n(this),
										i = s.controlNav.index(e);
									e.hasClass(r + "active") || (s.direction = i > s.currentSlide ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction))
								}
								"" === h && (h = t.type), g.setToClearWatchedEvent()
							})
						},
						setupManual: function() {
							s.controlNav = s.manualControls, g.controlNav.active(), s.controlNav.bind(u, function(t) {
								if (t.preventDefault(), "" === h || h === t.type) {
									var e = n(this),
										i = s.controlNav.index(e);
									e.hasClass(r + "active") || (i > s.currentSlide ? s.direction = "next" : s.direction = "prev", s.flexAnimate(i, s.vars.pauseOnAction))
								}
								"" === h && (h = t.type), g.setToClearWatchedEvent()
							})
						},
						set: function() {
							var t = "thumbnails" === s.vars.controlNav ? "img" : "a";
							s.controlNav = n("." + r + "control-nav li " + t, s.controlsContainer ? s.controlsContainer : s)
						},
						active: function() {
							s.controlNav.removeClass(r + "active").eq(s.animatingTo).addClass(r + "active")
						},
						update: function(t, e) {
							s.pagingCount > 1 && "add" === t ? s.controlNavScaffold.append(n('<li><a href="#">' + s.count + "</a></li>")) : 1 === s.pagingCount ? s.controlNavScaffold.find("li").remove() : s.controlNav.eq(e).closest("li").remove(), g.controlNav.set(), s.pagingCount > 1 && s.pagingCount !== s.controlNav.length ? s.update(e, t) : g.controlNav.active()
						}
					},
					directionNav: {
						setup: function() {
							var t = n('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + s.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + s.vars.nextText + "</a></li></ul>");
							s.customDirectionNav ? s.directionNav = s.customDirectionNav : s.controlsContainer ? (n(s.controlsContainer).append(t), s.directionNav = n("." + r + "direction-nav li a", s.controlsContainer)) : (s.append(t), s.directionNav = n("." + r + "direction-nav li a", s)), g.directionNav.update(), s.directionNav.bind(u, function(t) {
								t.preventDefault();
								var e;
								"" !== h && h !== t.type || (e = n(this).hasClass(r + "next") ? s.getTarget("next") : s.getTarget("prev"), s.flexAnimate(e, s.vars.pauseOnAction)), "" === h && (h = t.type), g.setToClearWatchedEvent()
							})
						},
						update: function() {
							var t = r + "disabled";
							1 === s.pagingCount ? s.directionNav.addClass(t).attr("tabindex", "-1") : s.vars.animationLoop ? s.directionNav.removeClass(t).removeAttr("tabindex") : 0 === s.animatingTo ? s.directionNav.removeClass(t).filter("." + r + "prev").addClass(t).attr("tabindex", "-1") : s.animatingTo === s.last ? s.directionNav.removeClass(t).filter("." + r + "next").addClass(t).attr("tabindex", "-1") : s.directionNav.removeClass(t).removeAttr("tabindex")
						}
					},
					pausePlay: {
						setup: function() {
							var t = n('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
							s.controlsContainer ? (s.controlsContainer.append(t), s.pausePlay = n("." + r + "pauseplay a", s.controlsContainer)) : (s.append(t), s.pausePlay = n("." + r + "pauseplay a", s)), g.pausePlay.update(s.vars.slideshow ? r + "pause" : r + "play"), s.pausePlay.bind(u, function(t) {
								t.preventDefault(), "" !== h && h !== t.type || (n(this).hasClass(r + "pause") ? (s.manualPause = !0, s.manualPlay = !1, s.pause()) : (s.manualPause = !1, s.manualPlay = !0, s.play())), "" === h && (h = t.type), g.setToClearWatchedEvent()
							})
						},
						update: function(t) {
							"play" === t ? s.pausePlay.removeClass(r + "pause").addClass(r + "play").html(s.vars.playText) : s.pausePlay.removeClass(r + "play").addClass(r + "pause").html(s.vars.pauseText)
						}
					},
					touch: function() {
						function i(e) {
							e.stopPropagation(), s.animating ? e.preventDefault() : (s.pause(), t._gesture.addPointer(e.pointerId), C = 0, u = d ? s.h : s.w, v = Number(new Date), c = m && p && s.animatingTo === s.last ? 0 : m && p ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : m && s.currentSlide === s.last ? s.limit : m ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : p ? (s.last - s.currentSlide + s.cloneOffset) * u : (s.currentSlide + s.cloneOffset) * u)
						}
						function n(i) {
							i.stopPropagation();
							var n = i.target._slider;
							if (n) {
								var s = -i.translationX,
									o = -i.translationY;
								return C += d ? o : s, h = C, b = d ? Math.abs(C) < Math.abs(-s) : Math.abs(C) < Math.abs(-o), i.detail === i.MSGESTURE_FLAG_INERTIA ? void e(function() {
									t._gesture.stop()
								}) : void((!b || Number(new Date) - v > 500) && (i.preventDefault(), !f && n.transitions && (n.vars.animationLoop || (h = C / (0 === n.currentSlide && C < 0 || n.currentSlide === n.last && C > 0 ? Math.abs(C) / u + 2 : 1)), n.setProps(c + h, "setTouch"))))
							}
						}
						function o(t) {
							t.stopPropagation();
							var e = t.target._slider;
							if (e) {
								if (e.animatingTo === e.currentSlide && !b && null !== h) {
									var i = p ? -h : h,
										n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
									e.canAdvance(n) && (Number(new Date) - v < 550 && Math.abs(i) > 50 || Math.abs(i) > u / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : f || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
								}
								a = null, r = null, h = null, c = null, C = 0
							}
						}
						var a, r, c, u, h, v, g, y, w, b = !1,
							T = 0,
							x = 0,
							C = 0;
						l ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", i, !1), t._slider = s, t.addEventListener("MSGestureChange", n, !1), t.addEventListener("MSGestureEnd", o, !1)) : (g = function(e) {
							s.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (s.pause(), u = d ? s.h : s.w, v = Number(new Date), T = e.touches[0].pageX, x = e.touches[0].pageY, c = m && p && s.animatingTo === s.last ? 0 : m && p ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : m && s.currentSlide === s.last ? s.limit : m ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : p ? (s.last - s.currentSlide + s.cloneOffset) * u : (s.currentSlide + s.cloneOffset) * u, a = d ? x : T, r = d ? T : x, t.addEventListener("touchmove", y, !1), t.addEventListener("touchend", w, !1))
						}, y = function(t) {
							T = t.touches[0].pageX, x = t.touches[0].pageY, h = d ? a - x : a - T, b = d ? Math.abs(h) < Math.abs(T - r) : Math.abs(h) < Math.abs(x - r);
							var e = 500;
							(!b || Number(new Date) - v > e) && (t.preventDefault(), !f && s.transitions && (s.vars.animationLoop || (h /= 0 === s.currentSlide && h < 0 || s.currentSlide === s.last && h > 0 ? Math.abs(h) / u + 2 : 1), s.setProps(c + h, "setTouch")))
						}, w = function(e) {
							if (t.removeEventListener("touchmove", y, !1), s.animatingTo === s.currentSlide && !b && null !== h) {
								var i = p ? -h : h,
									n = i > 0 ? s.getTarget("next") : s.getTarget("prev");
								s.canAdvance(n) && (Number(new Date) - v < 550 && Math.abs(i) > 50 || Math.abs(i) > u / 2) ? s.flexAnimate(n, s.vars.pauseOnAction) : f || s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0)
							}
							t.removeEventListener("touchend", w, !1), a = null, r = null, h = null, c = null
						}, t.addEventListener("touchstart", g, !1))
					},
					resize: function() {
						!s.animating && s.is(":visible") && (m || s.doMath(), f ? g.smoothHeight() : m ? (s.slides.width(s.computedW), s.update(s.pagingCount), s.setProps()) : d ? (s.viewport.height(s.h), s.setProps(s.h, "setTotal")) : (s.vars.smoothHeight && g.smoothHeight(), s.newSlides.width(s.computedW), s.setProps(s.computedW, "setTotal")))
					},
					smoothHeight: function(t) {
						if (!d || f) {
							var e = f ? s : s.viewport;
							t ? e.animate({
								height: s.slides.eq(s.animatingTo).innerHeight()
							}, t) : e.innerHeight(s.slides.eq(s.animatingTo).innerHeight())
						}
					},
					sync: function(t) {
						var e = n(s.vars.sync).data("flexslider"),
							i = s.animatingTo;
						switch (t) {
						case "animate":
							e.flexAnimate(i, s.vars.pauseOnAction, !1, !0);
							break;
						case "play":
							e.playing || e.asNav || e.play();
							break;
						case "pause":
							e.pause()
						}
					},
					uniqueID: function(t) {
						return t.filter("[id]").add(t.find("[id]")).each(function() {
							var t = n(this);
							t.attr("id", t.attr("id") + "_clone")
						}), t
					},
					pauseInvisible: {
						visProp: null,
						init: function() {
							var t = g.pauseInvisible.getHiddenProp();
							if (t) {
								var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
								document.addEventListener(e, function() {
									g.pauseInvisible.isHidden() ? s.startTimeout ? clearTimeout(s.startTimeout) : s.pause() : s.started ? s.play() : s.vars.initDelay > 0 ? setTimeout(s.play, s.vars.initDelay) : s.play()
								})
							}
						},
						isHidden: function() {
							var t = g.pauseInvisible.getHiddenProp();
							return !!t && document[t]
						},
						getHiddenProp: function() {
							var t = ["webkit", "moz", "ms", "o"];
							if ("hidden" in document) return "hidden";
							for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
							return null
						}
					},
					setToClearWatchedEvent: function() {
						clearTimeout(a), a = setTimeout(function() {
							h = ""
						}, 3e3)
					}
				}, s.flexAnimate = function(t, e, i, o, a) {
					if (s.vars.animationLoop || t === s.currentSlide || (s.direction = t > s.currentSlide ? "next" : "prev"), v && 1 === s.pagingCount && (s.direction = s.currentItem < t ? "next" : "prev"), !s.animating && (s.canAdvance(t, a) || i) && s.is(":visible")) {
						if (v && o) {
							var l = n(s.vars.asNavFor).data("flexslider");
							if (s.atEnd = 0 === t || t === s.count - 1, l.flexAnimate(t, !0, !1, !0, a), s.direction = s.currentItem < t ? "next" : "prev", l.direction = s.direction, Math.ceil((t + 1) / s.visible) - 1 === s.currentSlide || 0 === t) return s.currentItem = t, s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
							s.currentItem = t, s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / s.visible)
						}
						if (s.animating = !0, s.animatingTo = t, e && s.pause(), s.vars.before(s), s.syncExists && !a && g.sync("animate"), s.vars.controlNav && g.controlNav.active(), m || s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), s.atEnd = 0 === t || t === s.last, s.vars.directionNav && g.directionNav.update(), t === s.last && (s.vars.end(s), s.vars.animationLoop || s.pause()), f) c ? (s.slides.eq(s.currentSlide).css({
							opacity: 0,
							zIndex: 1
						}), s.slides.eq(t).css({
							opacity: 1,
							zIndex: 2
						}), s.wrapup(w)) : (s.slides.eq(s.currentSlide).css({
							zIndex: 1
						}).animate({
							opacity: 0
						}, s.vars.animationSpeed, s.vars.easing), s.slides.eq(t).css({
							zIndex: 2
						}).animate({
							opacity: 1
						}, s.vars.animationSpeed, s.vars.easing, s.wrapup));
						else {
							var u, h, y, w = d ? s.slides.filter(":first").height() : s.computedW;
							m ? (u = s.vars.itemMargin, y = (s.itemW + u) * s.move * s.animatingTo, h = y > s.limit && 1 !== s.visible ? s.limit : y) : h = 0 === s.currentSlide && t === s.count - 1 && s.vars.animationLoop && "next" !== s.direction ? p ? (s.count + s.cloneOffset) * w : 0 : s.currentSlide === s.last && 0 === t && s.vars.animationLoop && "prev" !== s.direction ? p ? 0 : (s.count + 1) * w : p ? (s.count - 1 - t + s.cloneOffset) * w : (t + s.cloneOffset) * w, s.setProps(h, "", s.vars.animationSpeed), s.transitions ? (s.vars.animationLoop && s.atEnd || (s.animating = !1, s.currentSlide = s.animatingTo), s.container.unbind("webkitTransitionEnd transitionend"), s.container.bind("webkitTransitionEnd transitionend", function() {
								clearTimeout(s.ensureAnimationEnd), s.wrapup(w)
							}), clearTimeout(s.ensureAnimationEnd), s.ensureAnimationEnd = setTimeout(function() {
								s.wrapup(w)
							}, s.vars.animationSpeed + 100)) : s.container.animate(s.args, s.vars.animationSpeed, s.vars.easing, function() {
								s.wrapup(w)
							})
						}
						s.vars.smoothHeight && g.smoothHeight(s.vars.animationSpeed)
					}
				}, s.wrapup = function(t) {
					f || m || (0 === s.currentSlide && s.animatingTo === s.last && s.vars.animationLoop ? s.setProps(t, "jumpEnd") : s.currentSlide === s.last && 0 === s.animatingTo && s.vars.animationLoop && s.setProps(t, "jumpStart")), s.animating = !1, s.currentSlide = s.animatingTo, s.vars.after(s)
				}, s.animateSlides = function() {
					!s.animating && o && s.flexAnimate(s.getTarget("next"))
				}, s.pause = function() {
					clearInterval(s.animatedSlides), s.animatedSlides = null, s.playing = !1, s.vars.pausePlay && g.pausePlay.update("play"), s.syncExists && g.sync("pause")
				}, s.play = function() {
					s.playing && clearInterval(s.animatedSlides), s.animatedSlides = s.animatedSlides || setInterval(s.animateSlides, s.vars.slideshowSpeed), s.started = s.playing = !0, s.vars.pausePlay && g.pausePlay.update("pause"), s.syncExists && g.sync("play")
				}, s.stop = function() {
					s.pause(), s.stopped = !0
				}, s.canAdvance = function(t, e) {
					var i = v ? s.pagingCount - 1 : s.last;
					return !!e || (!(!v || s.currentItem !== s.count - 1 || 0 !== t || "prev" !== s.direction) || (!v || 0 !== s.currentItem || t !== s.pagingCount - 1 || "next" === s.direction) && (!(t === s.currentSlide && !v) && ( !! s.vars.animationLoop || (!s.atEnd || 0 !== s.currentSlide || t !== i || "next" === s.direction) && (!s.atEnd || s.currentSlide !== i || 0 !== t || "next" !== s.direction))))
				}, s.getTarget = function(t) {
					return s.direction = t, "next" === t ? s.currentSlide === s.last ? 0 : s.currentSlide + 1 : 0 === s.currentSlide ? s.last : s.currentSlide - 1
				}, s.setProps = function(t, e, i) {
					var n = function() {
							var i = t ? t : (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo,
								n = function() {
									if (m) return "setTouch" === e ? t : p && s.animatingTo === s.last ? 0 : p ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : s.animatingTo === s.last ? s.limit : i;
									switch (e) {
									case "setTotal":
										return p ? (s.count - 1 - s.currentSlide + s.cloneOffset) * t : (s.currentSlide + s.cloneOffset) * t;
									case "setTouch":
										return p ? t : t;
									case "jumpEnd":
										return p ? t : s.count * t;
									case "jumpStart":
										return p ? s.count * t : t;
									default:
										return t
									}
								}();
							return n * -1 + "px"
						}();
					s.transitions && (n = d ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", s.container.css("-" + s.pfx + "-transition-duration", i), s.container.css("transition-duration", i)), s.args[s.prop] = n, (s.transitions || void 0 === i) && s.container.css(s.args), s.container.css("transform", n)
				}, s.setup = function(t) {
					if (f) s.slides.css({
						width: "100%",
						"float": "left",
						marginRight: "-100%",
						position: "relative"
					}), "init" === t && (c ? s.slides.css({
						opacity: 0,
						display: "block",
						webkitTransition: "opacity " + s.vars.animationSpeed / 1e3 + "s ease",
						zIndex: 1
					}).eq(s.currentSlide).css({
						opacity: 1,
						zIndex: 2
					}) : 0 == s.vars.fadeFirstSlide ? s.slides.css({
						opacity: 0,
						display: "block",
						zIndex: 1
					}).eq(s.currentSlide).css({
						zIndex: 2
					}).css({
						opacity: 1
					}) : s.slides.css({
						opacity: 0,
						display: "block",
						zIndex: 1
					}).eq(s.currentSlide).css({
						zIndex: 2
					}).animate({
						opacity: 1
					}, s.vars.animationSpeed, s.vars.easing)), s.vars.smoothHeight && g.smoothHeight();
					else {
						var e, i;
						"init" === t && (s.viewport = n('<div class="' + r + 'viewport"></div>').css({
							overflow: "hidden",
							position: "relative"
						}).appendTo(s).append(s.container), s.cloneCount = 0, s.cloneOffset = 0, p && (i = n.makeArray(s.slides).reverse(), s.slides = n(i), s.container.empty().append(s.slides))), s.vars.animationLoop && !m && (s.cloneCount = 2, s.cloneOffset = 1, "init" !== t && s.container.find(".clone").remove(), s.container.append(g.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), s.newSlides = n(s.vars.selector, s), e = p ? s.count - 1 - s.currentSlide + s.cloneOffset : s.currentSlide + s.cloneOffset, d && !m ? (s.container.height(200 * (s.count + s.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
							s.newSlides.css({
								display: "block"
							}), s.doMath(), s.viewport.height(s.h), s.setProps(e * s.h, "init")
						}, "init" === t ? 100 : 0)) : (s.container.width(200 * (s.count + s.cloneCount) + "%"), s.setProps(e * s.computedW, "init"), setTimeout(function() {
							s.doMath(), s.newSlides.css({
								width: s.computedW,
								marginRight: s.computedM,
								"float": "left",
								display: "block"
							}), s.vars.smoothHeight && g.smoothHeight()
						}, "init" === t ? 100 : 0))
					}
					m || s.slides.removeClass(r + "active-slide").eq(s.currentSlide).addClass(r + "active-slide"), s.vars.init(s)
				}, s.doMath = function() {
					var t = s.slides.first(),
						e = s.vars.itemMargin,
						i = s.vars.minItems,
						n = s.vars.maxItems;
					s.w = void 0 === s.viewport ? s.width() : s.viewport.width(), s.h = t.height(), s.boxPadding = t.outerWidth() - t.width(), m ? (s.itemT = s.vars.itemWidth + e, s.itemM = e, s.minW = i ? i * s.itemT : s.w, s.maxW = n ? n * s.itemT - e : s.w, s.itemW = s.minW > s.w ? (s.w - e * (i - 1)) / i : s.maxW < s.w ? (s.w - e * (n - 1)) / n : s.vars.itemWidth > s.w ? s.w : s.vars.itemWidth, s.visible = Math.floor(s.w / s.itemW), s.move = s.vars.move > 0 && s.vars.move < s.visible ? s.vars.move : s.visible, s.pagingCount = Math.ceil((s.count - s.visible) / s.move + 1), s.last = s.pagingCount - 1, s.limit = 1 === s.pagingCount ? 0 : s.vars.itemWidth > s.w ? s.itemW * (s.count - 1) + e * (s.count - 1) : (s.itemW + e) * s.count - s.w - e) : (s.itemW = s.w, s.itemM = e, s.pagingCount = s.count, s.last = s.count - 1), s.computedW = s.itemW - s.boxPadding, s.computedM = s.itemM
				}, s.update = function(t, e) {
					s.doMath(), m || (t < s.currentSlide ? s.currentSlide += 1 : t <= s.currentSlide && 0 !== t && (s.currentSlide -= 1), s.animatingTo = s.currentSlide), s.vars.controlNav && !s.manualControls && ("add" === e && !m || s.pagingCount > s.controlNav.length ? g.controlNav.update("add") : ("remove" === e && !m || s.pagingCount < s.controlNav.length) && (m && s.currentSlide > s.last && (s.currentSlide -= 1, s.animatingTo -= 1), g.controlNav.update("remove", s.last))), s.vars.directionNav && g.directionNav.update()
				}, s.addSlide = function(t, e) {
					var i = n(t);
					s.count += 1, s.last = s.count - 1, d && p ? void 0 !== e ? s.slides.eq(s.count - e).after(i) : s.container.prepend(i) : void 0 !== e ? s.slides.eq(e).before(i) : s.container.append(i), s.update(e, "add"), s.slides = n(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.added(s)
				}, s.removeSlide = function(t) {
					var e = isNaN(t) ? s.slides.index(n(t)) : t;
					s.count -= 1, s.last = s.count - 1, isNaN(t) ? n(t, s.slides).remove() : d && p ? s.slides.eq(s.last).remove() : s.slides.eq(t).remove(), s.doMath(), s.update(e, "remove"), s.slides = n(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.removed(s)
				}, g.init()
			}, n(window).blur(function(t) {
				o = !1
			}).focus(function(t) {
				o = !0
			}), n.flexslider.defaults = {
				namespace: "am-",
				selector: ".am-slides > li",
				animation: "slide",
				easing: "swing",
				direction: "horizontal",
				reverse: !1,
				animationLoop: !0,
				smoothHeight: !1,
				startAt: 0,
				slideshow: !0,
				slideshowSpeed: 5e3,
				animationSpeed: 600,
				initDelay: 0,
				randomize: !1,
				fadeFirstSlide: !0,
				thumbCaptions: !1,
				pauseOnAction: !0,
				pauseOnHover: !1,
				pauseInvisible: !0,
				useCSS: !0,
				touch: !0,
				video: !1,
				controlNav: !0,
				directionNav: !0,
				prevText: " ",
				nextText: " ",
				keyboard: !0,
				multipleKeyboard: !1,
				mousewheel: !1,
				pausePlay: !1,
				pauseText: "Pause",
				playText: "Play",
				controlsContainer: "",
				manualControls: "",
				customDirectionNav: "",
				sync: "",
				asNavFor: "",
				itemWidth: 0,
				itemMargin: 0,
				minItems: 1,
				maxItems: 0,
				move: 0,
				allowOneSlide: !0,
				start: function() {},
				before: function() {},
				after: function() {},
				end: function() {},
				added: function() {},
				removed: function() {},
				init: function() {}
			}, n.fn.flexslider = function(t) {
				var e = Array.prototype.slice.call(arguments, 1);
				if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
					var e = n(this),
						i = t.selector ? t.selector : ".am-slides > li",
						s = e.find(i);
					1 === s.length && t.allowOneSlide === !1 || 0 === s.length ? (s.fadeIn(400), t.start && t.start(e)) : void 0 === e.data("flexslider") && new n.flexslider(this, t)
				});
				var i, s = n(this).data("flexslider");
				switch (t) {
				case "next":
					s.flexAnimate(s.getTarget("next"), !0);
					break;
				case "prev":
				case "previous":
					s.flexAnimate(s.getTarget("prev"), !0);
					break;
				default:
					"number" == typeof t ? s.flexAnimate(t, !0) : "string" == typeof t && (i = "function" == typeof s[t] ? s[t].apply(s, e) : s[t])
				}
				return void 0 === i ? this : i
			}, s.ready(function(t) {
				n("[data-am-flexslider]", t).each(function(t, e) {
					var i = n(e),
						o = s.utils.parseOptions(i.data("amFlexslider"));
					o.before = function(t) {
						t._pausedTimer && (window.clearTimeout(t._pausedTimer), t._pausedTimer = null)
					}, o.after = function(t) {
						var e = t.vars.playAfterPaused;
						!e || isNaN(e) || t.playing || t.manualPause || t.manualPlay || t.stopped || (t._pausedTimer = window.setTimeout(function() {
							t.play()
						}, e))
					}, i.flexslider(o)
				})
			}), t.exports = n.flexslider
		}).call(e, i(12).setImmediate)
	}, function(t, e, i) {
		(function(t, n) {
			function s(t, e) {
				this._id = t, this._clearFn = e
			}
			var o = i(13).nextTick,
				a = Function.prototype.apply,
				r = Array.prototype.slice,
				l = {},
				c = 0;
			e.setTimeout = function() {
				return new s(a.call(setTimeout, window, arguments), clearTimeout)
			}, e.setInterval = function() {
				return new s(a.call(setInterval, window, arguments), clearInterval)
			}, e.clearTimeout = e.clearInterval = function(t) {
				t.close()
			}, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() {
				this._clearFn.call(window, this._id)
			}, e.enroll = function(t, e) {
				clearTimeout(t._idleTimeoutId), t._idleTimeout = e
			}, e.unenroll = function(t) {
				clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
			}, e._unrefActive = e.active = function(t) {
				clearTimeout(t._idleTimeoutId);
				var e = t._idleTimeout;
				e >= 0 && (t._idleTimeoutId = setTimeout(function() {
					t._onTimeout && t._onTimeout()
				}, e))
			}, e.setImmediate = "function" == typeof t ? t : function(t) {
				var i = c++,
					n = !(arguments.length < 2) && r.call(arguments, 1);
				return l[i] = !0, o(function() {
					l[i] && (n ? t.apply(null, n) : t.call(null), e.clearImmediate(i))
				}), i
			}, e.clearImmediate = "function" == typeof n ? n : function(t) {
				delete l[t]
			}
		}).call(e, i(12).setImmediate, i(12).clearImmediate)
	}, function(t, e) {
		function i(t) {
			if (l === setTimeout) return setTimeout(t, 0);
			try {
				return l(t, 0)
			} catch (e) {
				try {
					return l.call(null, t, 0)
				} catch (e) {
					return l.call(this, t, 0)
				}
			}
		}
		function n(t) {
			if (c === clearTimeout) return clearTimeout(t);
			try {
				return c(t)
			} catch (e) {
				try {
					return c.call(null, t)
				} catch (e) {
					return c.call(this, t)
				}
			}
		}
		function s() {
			p && h && (p = !1, h.length ? d = h.concat(d) : m = -1, d.length && o())
		}
		function o() {
			if (!p) {
				var t = i(s);
				p = !0;
				for (var e = d.length; e;) {
					for (h = d, d = []; ++m < e;) h && h[m].run();
					m = -1, e = d.length
				}
				h = null, p = !1, n(t)
			}
		}
		function a(t, e) {
			this.fun = t, this.array = e
		}
		function r() {}
		var l, c, u = t.exports = {};
		!
		function() {
			try {
				l = setTimeout
			} catch (t) {
				l = function() {
					throw new Error("setTimeout is not defined")
				}
			}
			try {
				c = clearTimeout
			} catch (t) {
				c = function() {
					throw new Error("clearTimeout is not defined")
				}
			}
		}();
		var h, d = [],
			p = !1,
			m = -1;
		u.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			d.push(new a(t, e)), 1 !== d.length || p || i(o)
		}, a.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = r, u.addListener = r, u.once = r, u.off = r, u.removeListener = r, u.removeAllListeners = r, u.emit = r, u.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, u.cwd = function() {
			return "/"
		}, u.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, u.umask = function() {
			return 0
		}
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			this.wrapper = "string" == typeof t ? document.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
				disablePointer: !a.hasPointer,
				disableTouch: a.hasPointer || !a.hasTouch,
				disableMouse: a.hasPointer || a.hasTouch,
				startX: 0,
				startY: 0,
				scrollY: !0,
				directionLockThreshold: 5,
				momentum: !0,
				bounce: !0,
				bounceTime: 600,
				bounceEasing: "",
				preventDefault: !0,
				preventDefaultException: {
					tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
				},
				HWCompositing: !0,
				useTransition: !0,
				useTransform: !0,
				bindToWrapper: "undefined" == typeof window.onmousedown
			};
			for (var i in e) this.options[i] = e[i];
			this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
		}
		var s = i(2),
			o = s.utils.rAF,
			a = function() {
				function t(t) {
					return n !== !1 && ("" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1))
				}
				var e = {},
					i = document.createElement("div").style,
					n = function() {
						for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, s = e.length; n < s; n++) if (t = e[n] + "ransform", t in i) return e[n].substr(0, e[n].length - 1);
						return !1
					}();
				e.getTime = Date.now ||
				function() {
					return (new Date).getTime()
				}, e.extend = function(t, e) {
					for (var i in e) t[i] = e[i]
				}, e.addEvent = function(t, e, i, n) {
					t.addEventListener(e, i, !! n)
				}, e.removeEvent = function(t, e, i, n) {
					t.removeEventListener(e, i, !! n)
				}, e.prefixPointerEvent = function(t) {
					return window.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
				}, e.momentum = function(t, e, i, n, s, o) {
					var a, r, l = t - e,
						c = Math.abs(l) / i;
					return o = void 0 === o ? 6e-4 : o, a = t + c * c / (2 * o) * (l < 0 ? -1 : 1), r = c / o, a < n ? (a = s ? n - s / 2.5 * (c / 8) : n, l = Math.abs(a - t), r = l / c) : a > 0 && (a = s ? s / 2.5 * (c / 8) : 0, l = Math.abs(t) + a, r = l / c), {
						destination: Math.round(a),
						duration: r
					}
				};
				var s = t("transform");
				return e.extend(e, {
					hasTransform: s !== !1,
					hasPerspective: t("perspective") in i,
					hasTouch: "ontouchstart" in window,
					hasPointer: !(!window.PointerEvent && !window.MSPointerEvent),
					hasTransition: t("transition") in i
				}), e.isBadAndroid = function() {
					var t = window.navigator.appVersion;
					if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
						var e = t.match(/Safari\/(\d+.\d)/);
						return !(e && "object" == typeof e && e.length >= 2) || parseFloat(e[1]) < 535.19
					}
					return !1
				}(), e.extend(e.style = {}, {
					transform: s,
					transitionTimingFunction: t("transitionTimingFunction"),
					transitionDuration: t("transitionDuration"),
					transitionDelay: t("transitionDelay"),
					transformOrigin: t("transformOrigin")
				}), e.hasClass = function(t, e) {
					var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
					return i.test(t.className)
				}, e.addClass = function(t, i) {
					if (!e.hasClass(t, i)) {
						var n = t.className.split(" ");
						n.push(i), t.className = n.join(" ")
					}
				}, e.removeClass = function(t, i) {
					if (e.hasClass(t, i)) {
						var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
						t.className = t.className.replace(n, " ")
					}
				}, e.offset = function(t) {
					for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
					return {
						left: e,
						top: i
					}
				}, e.preventDefaultException = function(t, e) {
					for (var i in e) if (e[i].test(t[i])) return !0;
					return !1
				}, e.extend(e.eventType = {}, {
					touchstart: 1,
					touchmove: 1,
					touchend: 1,
					mousedown: 2,
					mousemove: 2,
					mouseup: 2,
					pointerdown: 3,
					pointermove: 3,
					pointerup: 3,
					MSPointerDown: 3,
					MSPointerMove: 3,
					MSPointerUp: 3
				}), e.extend(e.ease = {}, {
					quadratic: {
						style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						fn: function(t) {
							return t * (2 - t)
						}
					},
					circular: {
						style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
						fn: function(t) {
							return Math.sqrt(1 - --t * t)
						}
					},
					back: {
						style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
						fn: function(t) {
							var e = 4;
							return (t -= 1) * t * ((e + 1) * t + e) + 1
						}
					},
					bounce: {
						style: "",
						fn: function(t) {
							return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
						}
					},
					elastic: {
						style: "",
						fn: function(t) {
							var e = .22,
								i = .4;
							return 0 === t ? 0 : 1 == t ? 1 : i * Math.pow(2, -10 * t) * Math.sin((t - e / 4) * (2 * Math.PI) / e) + 1
						}
					}
				}), e.tap = function(t, e) {
					var i = document.createEvent("Event");
					i.initEvent(e, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i)
				}, e.click = function(t) {
					var e, i = t.target;
					/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event"), e.initEvent("click", !0, !0), e.view = t.view || window, e.detail = 1, e.screenX = i.screenX || 0, e.screenY = i.screenY || 0, e.clientX = i.clientX || 0, e.clientY = i.clientY || 0, e.ctrlKey = !! t.ctrlKey, e.altKey = !! t.altKey, e.shiftKey = !! t.shiftKey, e.metaKey = !! t.metaKey, e.button = 0, e.relatedTarget = null, e._constructed = !0, i.dispatchEvent(e))
				}, e
			}();
		n.prototype = {
			version: "5.2.0",
			_init: function() {
				this._initEvents()
			},
			destroy: function() {
				this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
			},
			_transitionEnd: function(t) {
				t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
			},
			_start: function(t) {
				if (1 != a.eventType[t.type]) {
					var e;
					if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return
				}
				if (this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) {
					!this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
					var i, n = t.touches ? t.touches[0] : t;
					this.initiated = a.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = a.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, i = this.getComputedPosition(), this._translate(Math.round(i.x), Math.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
				}
			},
			_move: function(t) {
				if (this.enabled && a.eventType[t.type] === this.initiated) {
					this.options.preventDefault && t.preventDefault();
					var e, i, n, s, o = t.touches ? t.touches[0] : t,
						r = o.pageX - this.pointX,
						l = o.pageY - this.pointY,
						c = a.getTime();
					if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += r, this.distY += l, n = Math.abs(this.distX), s = Math.abs(this.distY), !(c - this.endTime > 300 && n < 10 && s < 10)) {
						if (this.directionLocked || this.options.freeScroll || (n > s + this.options.directionLockThreshold ? this.directionLocked = "h" : s >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
							if ("vertical" == this.options.eventPassthrough) t.preventDefault();
							else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
							l = 0
						} else if ("v" == this.directionLocked) {
							if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
							else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
							r = 0
						}
						r = this.hasHorizontalScroll ? r : 0, l = this.hasVerticalScroll ? l : 0, e = this.x + r, i = this.y + l, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + r / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = r > 0 ? -1 : r < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
					}
				}
			},
			_end: function(t) {
				if (this.enabled && a.eventType[t.type] === this.initiated) {
					this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
					var e, i, n = (t.changedTouches ? t.changedTouches[0] : t, a.getTime() - this.startTime),
						s = Math.round(this.x),
						o = Math.round(this.y),
						r = Math.abs(s - this.startX),
						l = Math.abs(o - this.startY),
						c = 0,
						u = "";
					if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) return this.scrollTo(s, o), this.moved ? this._events.flick && n < 200 && r < 100 && l < 100 ? void this._execEvent("flick") : (this.options.momentum && n < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
						destination: s,
						duration: 0
					}, i = this.hasVerticalScroll ? a.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
						destination: o,
						duration: 0
					}, s = e.destination, o = i.destination, c = Math.max(e.duration, i.duration), this.isInTransition = 1), s != this.x || o != this.y ? ((s > 0 || s < this.maxScrollX || o > 0 || o < this.maxScrollY) && (u = a.ease.quadratic), void this.scrollTo(s, o, c, u)) : void this._execEvent("scrollEnd")) : (this.options.tap && a.tap(t, this.options.tap), this.options.click && a.click(t), void this._execEvent("scrollCancel"))
				}
			},
			_resize: function() {
				var t = this;
				clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
					t.refresh()
				}, this.options.resizePolling)
			},
			resetPosition: function(t) {
				var e = this.x,
					i = this.y;
				return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
			},
			disable: function() {
				this.enabled = !1
			},
			enable: function() {
				this.enabled = !0
			},
			refresh: function() {
				this.wrapper.offsetHeight;
				this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
			},
			on: function(t, e) {
				this._events[t] || (this._events[t] = []), this._events[t].push(e)
			},
			off: function(t, e) {
				if (this._events[t]) {
					var i = this._events[t].indexOf(e);
					i > -1 && this._events[t].splice(i, 1)
				}
			},
			_execEvent: function(t) {
				if (this._events[t]) {
					var e = 0,
						i = this._events[t].length;
					if (i) for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
				}
			},
			scrollBy: function(t, e, i, n) {
				t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
			},
			scrollTo: function(t, e, i, n) {
				n = n || a.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
				var s = this.options.useTransition && n.style;
				!i || s ? (s && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
			},
			scrollToElement: function(t, e, i, n, s) {
				if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
					var o = a.offset(t);
					o.left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top, i === !0 && (i = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), n === !0 && (n = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), o.left -= i || 0, o.top -= n || 0, o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top, e = void 0 === e || null === e || "auto" === e ? Math.max(Math.abs(this.x - o.left), Math.abs(this.y - o.top)) : e, this.scrollTo(o.left, o.top, e, s)
				}
			},
			_transitionTime: function(t) {
				if (this.options.useTransition) {
					t = t || 0;
					var e = a.style.transitionDuration;
					if (e && (this.scrollerStyle[e] = t + "ms", !t && a.isBadAndroid)) {
						this.scrollerStyle[e] = "0.0001ms";
						var i = this;
						o(function() {
							"0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
						})
					}
				}
			},
			_transitionTimingFunction: function(t) {
				this.scrollerStyle[a.style.transitionTimingFunction] = t
			},
			_translate: function(t, e) {
				this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = Math.round(t), e = Math.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e
			},
			_initEvents: function(t) {
				var e = t ? a.removeEvent : a.addEvent,
					i = this.options.bindToWrapper ? this.wrapper : window;
				e(window, "orientationchange", this), e(window, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), a.hasPointer && !this.options.disablePointer && (e(this.wrapper, a.prefixPointerEvent("pointerdown"), this), e(i, a.prefixPointerEvent("pointermove"), this), e(i, a.prefixPointerEvent("pointercancel"), this), e(i, a.prefixPointerEvent("pointerup"), this)), a.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
			},
			getComputedPosition: function() {
				var t, e, i = window.getComputedStyle(this.scroller, null);
				return this.options.useTransform ? (i = i[a.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), e = +i.top.replace(/[^-\d.]/g, "")), {
					x: t,
					y: e
				}
			},
			_animate: function(t, e, i, n) {
				function s() {
					var d, p, m, f = a.getTime();
					return f >= h ? (r.isAnimating = !1, r._translate(t, e), void(r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"))) : (f = (f - u) / i, m = n(f), d = (t - l) * m + l, p = (e - c) * m + c, r._translate(d, p), void(r.isAnimating && o(s)))
				}
				var r = this,
					l = this.x,
					c = this.y,
					u = a.getTime(),
					h = u + i;
				this.isAnimating = !0, s()
			},
			handleEvent: function(t) {
				switch (t.type) {
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
				case "mousedown":
					this._start(t);
					break;
				case "touchmove":
				case "pointermove":
				case "MSPointerMove":
				case "mousemove":
					this._move(t);
					break;
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseup":
				case "touchcancel":
				case "pointercancel":
				case "MSPointerCancel":
				case "mousecancel":
					this._end(t);
					break;
				case "orientationchange":
				case "resize":
					this._resize();
					break;
				case "transitionend":
				case "webkitTransitionEnd":
				case "oTransitionEnd":
				case "MSTransitionEnd":
					this._transitionEnd(t);
					break;
				case "wheel":
				case "DOMMouseScroll":
				case "mousewheel":
					this._wheel(t);
					break;
				case "keydown":
					this._key(t);
					break;
				case "click":
					this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
				}
			}
		}, n.utils = a, t.exports = s.iScroll = n
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			return this.each(function() {
				var i = s(this),
					n = i.data("amui.modal"),
					o = "object" == typeof t && t;
				n || i.data("amui.modal", n = new c(this, o)), "string" == typeof t ? n[t] && n[t](e) : n.toggle(t && t.relatedTarget || void 0)
			})
		}
		var s = i(1),
			o = i(2),
			a = i(9),
			r = s(document),
			l = o.support.transition,
			c = function(t, e) {
				this.options = s.extend({}, c.DEFAULTS, e || {}), this.$element = s(t), this.$dialog = this.$element.find(".am-modal-dialog"), this.$element.attr("id") || this.$element.attr("id", o.utils.generateGUID("am-modal")), this.isPopup = this.$element.hasClass("am-popup"), this.isActions = this.$element.hasClass("am-modal-actions"), this.isPrompt = this.$element.hasClass("am-modal-prompt"), this.isLoading = this.$element.hasClass("am-modal-loading"), this.active = this.transitioning = this.relatedTarget = null, this.dimmer = this.options.dimmer ? a : {
					open: function() {},
					close: function() {}
				}, this.events()
			};
		c.DEFAULTS = {
			className: {
				active: "am-modal-active",
				out: "am-modal-out"
			},
			selector: {
				modal: ".am-modal",
				active: ".am-modal-active"
			},
			closeViaDimmer: !0,
			cancelable: !0,
			onConfirm: function() {},
			onCancel: function() {},
			closeOnCancel: !0,
			closeOnConfirm: !0,
			dimmer: !0,
			height: void 0,
			width: void 0,
			duration: 300,
			transitionEnd: l && l.end + ".modal.amui"
		}, c.prototype.toggle = function(t) {
			return this.active ? this.close() : this.open(t)
		}, c.prototype.open = function(t) {
			var e = this.$element,
				i = this.options,
				n = this.isPopup,
				o = i.width,
				a = i.height,
				r = {};
			if (!this.active && this.$element.length) {
				t && (this.relatedTarget = t), this.transitioning && (clearTimeout(e.transitionEndTimmer), e.transitionEndTimmer = null, e.trigger(i.transitionEnd).off(i.transitionEnd)), n && this.$element.show(), this.active = !0, e.trigger(s.Event("open.modal.amui", {
					relatedTarget: t
				})), this.dimmer.open(e), e.show().redraw(), n || this.isActions || (o && (r.width = parseInt(o, 10) + "px"), a && (r.height = parseInt(a, 10) + "px"), this.$dialog.css(r)), e.removeClass(i.className.out).addClass(i.className.active), this.transitioning = 1;
				var c = function() {
						e.trigger(s.Event("opened.modal.amui", {
							relatedTarget: t
						})), this.transitioning = 0, this.isPrompt && this.$dialog.find("input").eq(0).focus()
					};
				return l ? void e.one(i.transitionEnd, s.proxy(c, this)).emulateTransitionEnd(i.duration) : c.call(this)
			}
		}, c.prototype.close = function(t) {
			if (this.active) {
				var e = this.$element,
					i = this.options,
					n = this.isPopup;
				this.transitioning && (clearTimeout(e.transitionEndTimmer), e.transitionEndTimmer = null, e.trigger(i.transitionEnd).off(i.transitionEnd), this.dimmer.close(e, !0)), this.$element.trigger(s.Event("close.modal.amui", {
					relatedTarget: t
				})), this.transitioning = 1;
				var o = function() {
						e.trigger("closed.modal.amui"), n && e.removeClass(i.className.out), e.hide(), this.transitioning = 0, this.dimmer.close(e, !1), this.active = !1
					};
				return e.removeClass(i.className.active).addClass(i.className.out), l ? void e.one(i.transitionEnd, s.proxy(o, this)).emulateTransitionEnd(i.duration) : o.call(this)
			}
		}, c.prototype.events = function() {
			var t = this,
				e = this.options,
				i = this.$element,
				n = this.dimmer.$element,
				o = i.find(".am-modal-prompt-input"),
				a = i.find("[data-am-modal-confirm]"),
				r = i.find("[data-am-modal-cancel]"),
				l = function() {
					var t = [];
					return o.each(function() {
						t.push(s(this).val())
					}), 0 === t.length ? void 0 : 1 === t.length ? t[0] : t
				};
			this.options.cancelable && i.on("keyup.modal.amui", function(e) {
				t.active && 27 === e.which && (i.trigger("cancel.modal.amui"), t.close())
			}), this.options.dimmer && this.options.closeViaDimmer && !this.isLoading && n.on("click.dimmer.modal.amui", function() {
				t.close()
			}), i.on("click.close.modal.amui", "[data-am-modal-close], .am-modal-btn", function(i) {
				i.preventDefault();
				var n = s(this);
				n.is(a) ? e.closeOnConfirm && t.close() : n.is(r) ? e.closeOnCancel && t.close() : t.close()
			}).on("click", function(t) {
				s(t.target).is(i) && n.trigger("click.dimmer.modal.amui")
			}), a.on("click.confirm.modal.amui", function() {
				i.trigger(s.Event("confirm.modal.amui", {
					trigger: this
				}))
			}), r.on("click.cancel.modal.amui", function() {
				i.trigger(s.Event("cancel.modal.amui", {
					trigger: this
				}))
			}), i.on("confirm.modal.amui", function(e) {
				e.data = l(), t.options.onConfirm.call(t, e)
			}).on("cancel.modal.amui", function(e) {
				e.data = l(), t.options.onCancel.call(t, e)
			})
		}, s.fn.modal = n, r.on("click.modal.amui.data-api", "[data-am-modal]", function() {
			var t = s(this),
				e = o.utils.parseOptions(t.attr("data-am-modal")),
				i = s(e.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, "")),
				a = i.data("amui.modal") ? "toggle" : e;
			n.call(i, a, this)
		}), t.exports = o.modal = c
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			var i = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var n = s(this),
					o = n.data("amui.offcanvas"),
					a = s.extend({}, "object" == typeof t && t);
				o || (n.data("amui.offcanvas", o = new c(this, a)), (!t || "object" == typeof t) && o.open(e)), "string" == typeof t && o[t] && o[t].apply(o, i)
			})
		}
		var s = i(1),
			o = i(2);
		i(3);
		var a, r = s(window),
			l = s(document),
			c = function(t, e) {
				this.$element = s(t), this.options = s.extend({}, c.DEFAULTS, e), this.active = null, this.bindEvents()
			};
		c.DEFAULTS = {
			duration: 300,
			effect: "overlay"
		}, c.prototype.open = function(t) {
			var e = this,
				i = this.$element;
			if (i.length && !i.hasClass("am-active")) {
				var n = this.options.effect,
					o = s("html"),
					l = s("body"),
					c = i.find(".am-offcanvas-bar").first(),
					u = c.hasClass("am-offcanvas-bar-flip") ? -1 : 1;
				c.addClass("am-offcanvas-bar-" + n), a = {
					x: window.scrollX,
					y: window.scrollY
				}, i.addClass("am-active"), l.css({
					width: window.innerWidth,
					height: r.height()
				}).addClass("am-offcanvas-page"), "overlay" !== n && l.css({
					"margin-left": c.outerWidth() * u
				}).width(), o.css("margin-top", a.y * -1), setTimeout(function() {
					c.addClass("am-offcanvas-bar-active").width()
				}, 0), i.trigger("open.offcanvas.amui"), this.active = 1, i.on("click.offcanvas.amui", function(t) {
					var i = s(t.target);
					i.hasClass("am-offcanvas-bar") || i.parents(".am-offcanvas-bar").first().length || (t.stopImmediatePropagation(), e.close())
				}), o.on("keydown.offcanvas.amui", function(t) {
					27 === t.keyCode && e.close()
				})
			}
		}, c.prototype.close = function(t) {
			function e() {
				r.removeClass("am-offcanvas-page").css({
					width: "",
					height: "",
					"margin-left": "",
					"margin-right": ""
				}), l.removeClass("am-active"), c.removeClass("am-offcanvas-bar-active"), n.css("margin-top", ""), window.scrollTo(a.x, a.y), l.trigger("closed.offcanvas.amui"), i.active = 0
			}
			var i = this,
				n = s("html"),
				r = s("body"),
				l = this.$element,
				c = l.find(".am-offcanvas-bar").first();
			l.length && this.active && l.hasClass("am-active") && (l.trigger("close.offcanvas.amui"), o.support.transition ? (setTimeout(function() {
				c.removeClass("am-offcanvas-bar-active")
			}, 0), r.css("margin-left", "").one(o.support.transition.end, function() {
				e()
			}).emulateTransitionEnd(this.options.duration)) : e(), l.off("click.offcanvas.amui"), n.off(".offcanvas.amui"))
		}, c.prototype.bindEvents = function() {
			var t = this;
			return l.on("click.offcanvas.amui", '[data-am-dismiss="offcanvas"]', function(e) {
				e.preventDefault(), t.close()
			}), r.on("resize.offcanvas.amui orientationchange.offcanvas.amui", function() {
				t.active && t.close()
			}), this.$element.hammer().on("swipeleft swipeleft", function(e) {
				e.preventDefault(), t.close()
			}), this
		}, s.fn.offCanvas = n, l.on("click.offcanvas.amui", "[data-am-offcanvas]", function(t) {
			t.preventDefault();
			var e = s(this),
				i = o.utils.parseOptions(e.data("amOffcanvas")),
				a = s(i.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, "")),
				r = a.data("amui.offcanvas") ? "open" : i;
			n.call(a, r, this)
		}), t.exports = o.offcanvas = c
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = s.utils.rAF,
			a = function(t) {
				var e = function(e, i) {
						this.el = t(e), this.zoomFactor = 1, this.lastScale = 1, this.offset = {
							x: 0,
							y: 0
						}, this.options = t.extend({}, this.defaults, i), this.setupMarkup(), this.bindEvents(), this.update(), this.enable()
					},
					i = function(t, e) {
						return t + e
					},
					n = function(t, e) {
						return t > e - .01 && t < e + .01
					};
				e.prototype = {
					defaults: {
						tapZoomFactor: 2,
						zoomOutFactor: 1.3,
						animationDuration: 300,
						maxZoom: 4,
						minZoom: .5,
						lockDragAxis: !1,
						use2d: !0,
						zoomStartEventName: "pz_zoomstart",
						zoomEndEventName: "pz_zoomend",
						dragStartEventName: "pz_dragstart",
						dragEndEventName: "pz_dragend",
						doubleTapEventName: "pz_doubletap"
					},
					handleDragStart: function(t) {
						this.el.trigger(this.options.dragStartEventName), this.stopAnimation(), this.lastDragPosition = !1, this.hasInteraction = !0, this.handleDrag(t)
					},
					handleDrag: function(t) {
						if (this.zoomFactor > 1) {
							var e = this.getTouches(t)[0];
							this.drag(e, this.lastDragPosition), this.offset = this.sanitizeOffset(this.offset), this.lastDragPosition = e
						}
					},
					handleDragEnd: function() {
						this.el.trigger(this.options.dragEndEventName), this.end()
					},
					handleZoomStart: function(t) {
						this.el.trigger(this.options.zoomStartEventName), this.stopAnimation(), this.lastScale = 1, this.nthZoom = 0, this.lastZoomCenter = !1, this.hasInteraction = !0
					},
					handleZoom: function(t, e) {
						var i = this.getTouchCenter(this.getTouches(t)),
							n = e / this.lastScale;
						this.lastScale = e, this.nthZoom += 1, this.nthZoom > 3 && (this.scale(n, i), this.drag(i, this.lastZoomCenter)), this.lastZoomCenter = i
					},
					handleZoomEnd: function() {
						this.el.trigger(this.options.zoomEndEventName), this.end()
					},
					handleDoubleTap: function(t) {
						var e = this.getTouches(t)[0],
							i = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
							n = this.zoomFactor,
							s = function(t) {
								this.scaleTo(n + t * (i - n), e)
							}.bind(this);
						this.hasInteraction || (n > i && (e = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, s, this.swing), this.el.trigger(this.options.doubleTapEventName))
					},
					sanitizeOffset: function(t) {
						var e = (this.zoomFactor - 1) * this.getContainerX(),
							i = (this.zoomFactor - 1) * this.getContainerY(),
							n = Math.max(e, 0),
							s = Math.max(i, 0),
							o = Math.min(e, 0),
							a = Math.min(i, 0);
						return {
							x: Math.min(Math.max(t.x, o), n),
							y: Math.min(Math.max(t.y, a), s)
						}
					},
					scaleTo: function(t, e) {
						this.scale(t / this.zoomFactor, e)
					},
					scale: function(t, e) {
						t = this.scaleZoomFactor(t), this.addOffset({
							x: (t - 1) * (e.x + this.offset.x),
							y: (t - 1) * (e.y + this.offset.y)
						})
					},
					scaleZoomFactor: function(t) {
						var e = this.zoomFactor;
						return this.zoomFactor *= t, this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)), this.zoomFactor / e
					},
					drag: function(t, e) {
						e && (this.options.lockDragAxis ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? this.addOffset({
							x: -(t.x - e.x),
							y: 0
						}) : this.addOffset({
							y: -(t.y - e.y),
							x: 0
						}) : this.addOffset({
							y: -(t.y - e.y),
							x: -(t.x - e.x)
						}))
					},
					getTouchCenter: function(t) {
						return this.getVectorAvg(t)
					},
					getVectorAvg: function(t) {
						return {
							x: t.map(function(t) {
								return t.x
							}).reduce(i) / t.length,
							y: t.map(function(t) {
								return t.y
							}).reduce(i) / t.length
						}
					},
					addOffset: function(t) {
						this.offset = {
							x: this.offset.x + t.x,
							y: this.offset.y + t.y
						}
					},
					sanitize: function() {
						this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
					},
					isInsaneOffset: function(t) {
						var e = this.sanitizeOffset(t);
						return e.x !== t.x || e.y !== t.y
					},
					sanitizeOffsetAnimation: function() {
						var t = this.sanitizeOffset(this.offset),
							e = {
								x: this.offset.x,
								y: this.offset.y
							},
							i = function(i) {
								this.offset.x = e.x + i * (t.x - e.x), this.offset.y = e.y + i * (t.y - e.y), this.update()
							}.bind(this);
						this.animate(this.options.animationDuration, i, this.swing)
					},
					zoomOutAnimation: function() {
						var t = this.zoomFactor,
							e = 1,
							i = this.getCurrentZoomCenter(),
							n = function(n) {
								this.scaleTo(t + n * (e - t), i)
							}.bind(this);
						this.animate(this.options.animationDuration, n, this.swing)
					},
					updateAspectRatio: function() {
						this.setContainerY(this.getContainerX() / this.getAspectRatio())
					},
					getInitialZoomFactor: function() {
						return this.container[0].offsetWidth / this.el[0].offsetWidth
					},
					getAspectRatio: function() {
						return this.el[0].offsetWidth / this.el[0].offsetHeight
					},
					getCurrentZoomCenter: function() {
						var t = this.container[0].offsetWidth * this.zoomFactor,
							e = this.offset.x,
							i = t - e - this.container[0].offsetWidth,
							n = e / i,
							s = n * this.container[0].offsetWidth / (n + 1),
							o = this.container[0].offsetHeight * this.zoomFactor,
							a = this.offset.y,
							r = o - a - this.container[0].offsetHeight,
							l = a / r,
							c = l * this.container[0].offsetHeight / (l + 1);
						return 0 === i && (s = this.container[0].offsetWidth), 0 === r && (c = this.container[0].offsetHeight), {
							x: s,
							y: c
						}
					},
					canDrag: function() {
						return !n(this.zoomFactor, 1)
					},
					getTouches: function(t) {
						var e = this.container.offset();
						return Array.prototype.slice.call(t.touches).map(function(t) {
							return {
								x: t.pageX - e.left,
								y: t.pageY - e.top
							}
						})
					},
					animate: function(t, e, i, n) {
						var s = (new Date).getTime(),
							a = function() {
								if (this.inAnimation) {
									var r = (new Date).getTime() - s,
										l = r / t;
									r >= t ? (e(1), n && n(), this.update(), this.stopAnimation(), this.update()) : (i && (l = i(l)), e(l), this.update(), o(a))
								}
							}.bind(this);
						this.inAnimation = !0, o(a)
					},
					stopAnimation: function() {
						this.inAnimation = !1
					},
					swing: function(t) {
						return -Math.cos(t * Math.PI) / 2 + .5
					},
					getContainerX: function() {
						return this.container[0].offsetWidth
					},
					getContainerY: function() {
						return this.container[0].offsetHeight
					},
					setContainerY: function(t) {
						return this.container.height(t)
					},
					setupMarkup: function() {
						this.container = t('<div class="pinch-zoom-container"></div>'), this.el.before(this.container), this.container.append(this.el), this.container.css({
							overflow: "hidden",
							position: "relative"
						}), this.el.css({
							"-webkit-transform-origin": "0% 0%",
							"-moz-transform-origin": "0% 0%",
							"-ms-transform-origin": "0% 0%",
							"-o-transform-origin": "0% 0%",
							"transform-origin": "0% 0%",
							position: "absolute"
						})
					},
					end: function() {
						this.hasInteraction = !1, this.sanitize(), this.update()
					},
					bindEvents: function() {
						s(this.container.get(0), this), t(window).on("resize", this.update.bind(this)), t(this.el).find("img").on("load", this.update.bind(this))
					},
					update: function() {
						this.updatePlaned || (this.updatePlaned = !0, setTimeout(function() {
							this.updatePlaned = !1, this.updateAspectRatio();
							var t = this.getInitialZoomFactor() * this.zoomFactor,
								e = -this.offset.x / t,
								i = -this.offset.y / t,
								n = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + i + "px,0px)",
								s = "scale(" + t + ", " + t + ") translate(" + e + "px," + i + "px)",
								o = function() {
									this.clone && (this.clone.remove(), delete this.clone)
								}.bind(this);
							!this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0, o(), this.el.css({
								"-webkit-transform": n,
								"-o-transform": s,
								"-ms-transform": s,
								"-moz-transform": s,
								transform: n
							})) : (this.is3d && (this.clone = this.el.clone(), this.clone.css("pointer-events", "none"), this.clone.appendTo(this.container), setTimeout(o, 200)), this.el.css({
								"-webkit-transform": s,
								"-o-transform": s,
								"-ms-transform": s,
								"-moz-transform": s,
								transform: s
							}), this.is3d = !1)
						}.bind(this), 0))
					},
					enable: function() {
						this.enabled = !0
					},
					disable: function() {
						this.enabled = !1
					}
				};
				var s = function(t, e) {
						var i = null,
							n = 0,
							s = null,
							o = null,
							a = function(t, n) {
								if (i !== t) {
									if (i && !t) switch (i) {
									case "zoom":
										e.handleZoomEnd(n);
										break;
									case "drag":
										e.handleDragEnd(n)
									}
									switch (t) {
									case "zoom":
										e.handleZoomStart(n);
										break;
									case "drag":
										e.handleDragStart(n)
									}
								}
								i = t
							},
							r = function(t) {
								2 === n ? a("zoom") : 1 === n && e.canDrag() ? a("drag", t) : a(null, t)
							},
							l = function(t) {
								return Array.prototype.slice.call(t).map(function(t) {
									return {
										x: t.pageX,
										y: t.pageY
									}
								})
							},
							c = function(t, e) {
								var i, n;
								return i = t.x - e.x, n = t.y - e.y, Math.sqrt(i * i + n * n)
							},
							u = function(t, e) {
								var i = c(t[0], t[1]),
									n = c(e[0], e[1]);
								return n / i
							},
							h = function(t) {
								t.stopPropagation(), t.preventDefault()
							},
							d = function(t) {
								var o = (new Date).getTime();
								if (n > 1 && (s = null), o - s < 300) switch (h(t), e.handleDoubleTap(t), i) {
								case "zoom":
									e.handleZoomEnd(t);
									break;
								case "drag":
									e.handleDragEnd(t)
								}
								1 === n && (s = o)
							},
							p = !0;
						t.addEventListener("touchstart", function(t) {
							e.enabled && (p = !0, n = t.touches.length, d(t))
						}), t.addEventListener("touchmove", function(t) {
							if (e.enabled) {
								if (p) r(t), i && h(t), o = l(t.touches);
								else {
									switch (i) {
									case "zoom":
										e.handleZoom(t, u(o, l(t.touches)));
										break;
									case "drag":
										e.handleDrag(t)
									}
									i && (h(t), e.update())
								}
								p = !1
							}
						}), t.addEventListener("touchend", function(t) {
							e.enabled && (n = t.touches.length, r(t))
						})
					};
				return e
			};
		t.exports = s.pichzoom = a(n)
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = n(window),
			a = function(t, e) {
				this.options = n.extend({}, a.DEFAULTS, e), this.$element = n(t), this.active = null, this.$popover = this.options.target && n(this.options.target) || null, this.init(), this._bindEvents()
			};
		a.DEFAULTS = {
			theme: null,
			trigger: "click",
			content: "",
			open: !1,
			target: null,
			tpl: '<div class="am-popover"><div class="am-popover-inner"></div><div class="am-popover-caret"></div></div>'
		}, a.prototype.init = function() {
			function t() {
				i.sizePopover()
			}
			var e, i = this,
				o = this.$element;
			this.options.target || (this.$popover = this.getPopover(), this.setContent()), e = this.$popover, e.appendTo(n("body")), this.sizePopover(), o.on("open.popover.amui", function() {
				n(window).on("resize.popover.amui", s.utils.debounce(t, 50))
			}), o.on("close.popover.amui", function() {
				n(window).off("resize.popover.amui", t)
			}), this.options.open && this.open()
		}, a.prototype.sizePopover = function() {
			var t = this.$element,
				e = this.$popover;
			if (e && e.length) {
				var i = e.outerWidth(),
					n = e.outerHeight(),
					s = e.find(".am-popover-caret"),
					a = s.outerWidth() / 2 || 8,
					r = n + 8,
					l = t.outerWidth(),
					c = t.outerHeight(),
					u = t.offset(),
					h = t[0].getBoundingClientRect(),
					d = o.height(),
					p = o.width(),
					m = 0,
					f = 0,
					v = 0,
					g = 2,
					y = "top";
				e.css({
					left: "",
					top: ""
				}).removeClass("am-popover-left am-popover-right am-popover-top am-popover-bottom"), r - g < h.top + g ? m = u.top - r - g : r < d - h.top - h.height ? (y = "bottom", m = u.top + c + a + g) : (y = "middle", m = c / 2 + u.top - n / 2), "top" === y || "bottom" === y ? (f = l / 2 + u.left - i / 2, v = f, f < 5 && (f = 5), f + i > p && (f = p - i - 20), "top" === y && e.addClass("am-popover-top"), "bottom" === y && e.addClass("am-popover-bottom"), v -= f) : "middle" === y && (f = u.left - i - a, e.addClass("am-popover-left"), f < 5 && (f = u.left + l + a, e.removeClass("am-popover-left").addClass("am-popover-right")), f + i > p && (f = p - i - 5, e.removeClass("am-popover-left").addClass("am-popover-right"))), e.css({
					top: m + "px",
					left: f + "px"
				})
			}
		}, a.prototype.toggle = function() {
			return this[this.active ? "close" : "open"]()
		}, a.prototype.open = function() {
			var t = this.$popover;
			this.$element.trigger("open.popover.amui"), this.sizePopover(), t.show().addClass("am-active"), this.active = !0
		}, a.prototype.close = function() {
			var t = this.$popover;
			this.$element.trigger("close.popover.amui"), t.removeClass("am-active").trigger("closed.popover.amui").hide(), this.active = !1
		}, a.prototype.getPopover = function() {
			var t = s.utils.generateGUID("am-popover"),
				e = [];
			return this.options.theme && n.each(this.options.theme.split(" "), function(t, i) {
				e.push("am-popover-" + n.trim(i))
			}), n(this.options.tpl).attr("id", t).addClass(e.join(" "))
		}, a.prototype.setContent = function(t) {
			t = t || this.options.content, this.$popover && this.$popover.find(".am-popover-inner").empty().html(t)
		}, a.prototype._bindEvents = function() {
			for (var t = "popover.amui", e = this.options.trigger.split(" "), i = e.length; i--;) {
				var s = e[i];
				if ("click" === s) this.$element.on("click." + t, n.proxy(this.toggle, this));
				else {
					var o = "hover" == s ? "mouseenter" : "focusin",
						a = "hover" == s ? "mouseleave" : "focusout";
					this.$element.on(o + "." + t, n.proxy(this.open, this)), this.$element.on(a + "." + t, n.proxy(this.close, this))
				}
			}
		}, a.prototype.destroy = function() {
			this.$element.off(".popover.amui").removeData("amui.popover"), this.$popover.remove()
		}, s.plugin("popover", a), s.ready(function(t) {
			n("[data-am-popover]", t).popover()
		}), t.exports = a
	}, function(t, e, i) {
		"use strict";
		var n = i(2),
			s = function() {
				function t(t, e, i) {
					return t < e ? e : t > i ? i : t
				}
				function e(t) {
					return 100 * (-1 + t)
				}
				function i(t, i, n) {
					var s;
					return s = "translate3d" === c.positionUsing ? {
						transform: "translate3d(" + e(t) + "%,0,0)"
					} : "translate" === c.positionUsing ? {
						transform: "translate(" + e(t) + "%,0)"
					} : {
						"margin-left": e(t) + "%"
					}, s.transition = "all " + i + "ms " + n, s
				}
				function n(t, e) {
					var i = "string" == typeof t ? t : a(t);
					return i.indexOf(" " + e + " ") >= 0
				}
				function s(t, e) {
					var i = a(t),
						s = i + e;
					n(i, e) || (t.className = s.substring(1))
				}
				function o(t, e) {
					var i, s = a(t);
					n(t, e) && (i = s.replace(" " + e + " ", " "), t.className = i.substring(1, i.length - 1))
				}
				function a(t) {
					return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
				}
				function r(t) {
					t && t.parentNode && t.parentNode.removeChild(t)
				}
				var l = {};
				l.version = "0.2.0";
				var c = l.settings = {
					minimum: .08,
					easing: "ease",
					positionUsing: "",
					speed: 200,
					trickle: !0,
					trickleRate: .02,
					trickleSpeed: 800,
					showSpinner: !0,
					parent: "body",
					barSelector: '[role="nprogress-bar"]',
					spinnerSelector: '[role="nprogress-spinner"]',
					template: '<div class="nprogress-bar" role="nprogress-bar"><div class="nprogress-peg"></div></div><div class="nprogress-spinner" role="nprogress-spinner"><div class="nprogress-spinner-icon"></div></div>'
				};
				l.configure = function(t) {
					var e, i;
					for (e in t) i = t[e], void 0 !== i && t.hasOwnProperty(e) && (c[e] = i);
					return this
				}, l.status = null, l.set = function(e) {
					var n = l.isStarted();
					e = t(e, c.minimum, 1), l.status = 1 === e ? null : e;
					var s = l.render(!n),
						o = s.querySelector(c.barSelector),
						a = c.speed,
						r = c.easing;
					return s.offsetWidth, u(function(t) {
						"" === c.positionUsing && (c.positionUsing = l.getPositioningCSS()), h(o, i(e, a, r)), 1 === e ? (h(s, {
							transition: "none",
							opacity: 1
						}), s.offsetWidth, setTimeout(function() {
							h(s, {
								transition: "all " + a + "ms linear",
								opacity: 0
							}), setTimeout(function() {
								l.remove(), t()
							}, a)
						}, a)) : setTimeout(t, a)
					}), this
				}, l.isStarted = function() {
					return "number" == typeof l.status
				}, l.start = function() {
					l.status || l.set(0);
					var t = function() {
							setTimeout(function() {
								l.status && (l.trickle(), t())
							}, c.trickleSpeed)
						};
					return c.trickle && t(), this
				}, l.done = function(t) {
					return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
				}, l.inc = function(e) {
					var i = l.status;
					return i ? ("number" != typeof e && (e = (1 - i) * t(Math.random() * i, .1, .95)), i = t(i + e, 0, .994), l.set(i)) : l.start()
				}, l.trickle = function() {
					return l.inc(Math.random() * c.trickleRate)
				}, function() {
					var t = 0,
						e = 0;
					l.promise = function(i) {
						return i && "resolved" !== i.state() ? (0 === e && l.start(), t++, e++, i.always(function() {
							e--, 0 === e ? (t = 0, l.done()) : l.set((t - e) / t)
						}), this) : this
					}
				}(), l.render = function(t) {
					if (l.isRendered()) return document.getElementById("nprogress");
					s(document.documentElement, "nprogress-busy");
					var i = document.createElement("div");
					i.id = "nprogress", i.innerHTML = c.template;
					var n, o = i.querySelector(c.barSelector),
						a = t ? "-100" : e(l.status || 0),
						u = document.querySelector(c.parent);
					return h(o, {
						transition: "all 0 linear",
						transform: "translate3d(" + a + "%,0,0)"
					}), c.showSpinner || (n = i.querySelector(c.spinnerSelector), n && r(n)), u != document.body && s(u, "nprogress-custom-parent"), u.appendChild(i), i
				}, l.remove = function() {
					o(document.documentElement, "nprogress-busy"), o(document.querySelector(c.parent), "nprogress-custom-parent");
					var t = document.getElementById("nprogress");
					t && r(t)
				}, l.isRendered = function() {
					return !!document.getElementById("nprogress")
				}, l.getPositioningCSS = function() {
					var t = document.body.style,
						e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
					return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
				};
				var u = function() {
						function t() {
							var i = e.shift();
							i && i(t)
						}
						var e = [];
						return function(i) {
							e.push(i), 1 == e.length && t()
						}
					}(),
					h = function() {
						function t(t) {
							return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
								return e.toUpperCase()
							})
						}
						function e(t) {
							var e = document.body.style;
							if (t in e) return t;
							for (var i, n = s.length, o = t.charAt(0).toUpperCase() + t.slice(1); n--;) if (i = s[n] + o, i in e) return i;
							return t
						}
						function i(i) {
							return i = t(i), o[i] || (o[i] = e(i))
						}
						function n(t, e, n) {
							e = i(e), t.style[e] = n
						}
						var s = ["Webkit", "O", "Moz", "ms"],
							o = {};
						return function(t, e) {
							var i, s, o = arguments;
							if (2 == o.length) for (i in e) s = e[i], void 0 !== s && e.hasOwnProperty(i) && n(t, i, s);
							else n(t, o[1], o[2])
						}
					}();
				return l
			}();
		t.exports = n.progress = s
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = i(17),
			a = i(3),
			r = s.support.animation,
			l = s.support.transition,
			c = function(t, e) {
				this.$element = n(t), this.$body = n(document.body), this.options = n.extend({}, c.DEFAULTS, e), this.$pureview = n(this.options.tpl).attr("id", s.utils.generateGUID("am-pureview")), this.$slides = null, this.transitioning = null, this.scrollbarWidth = 0, this.init()
			};
		c.DEFAULTS = {
			tpl: '<div class="am-pureview am-pureview-bar-active"><ul class="am-pureview-slider"></ul><ul class="am-pureview-direction"><li class="am-pureview-prev"><a href=""></a></li><li class="am-pureview-next"><a href=""></a></li></ul><ol class="am-pureview-nav"></ol><div class="am-pureview-bar am-active"><span class="am-pureview-title"></span><div class="am-pureview-counter"><span class="am-pureview-current"></span> / <span class="am-pureview-total"></span></div></div><div class="am-pureview-actions am-active"><a href="javascript: void(0)" class="am-icon-chevron-left" data-am-close="pureview"></a></div></div>',
			className: {
				prevSlide: "am-pureview-slide-prev",
				nextSlide: "am-pureview-slide-next",
				onlyOne: "am-pureview-only",
				active: "am-active",
				barActive: "am-pureview-bar-active",
				activeBody: "am-pureview-active"
			},
			selector: {
				slider: ".am-pureview-slider",
				close: '[data-am-close="pureview"]',
				total: ".am-pureview-total",
				current: ".am-pureview-current",
				title: ".am-pureview-title",
				actions: ".am-pureview-actions",
				bar: ".am-pureview-bar",
				pinchZoom: ".am-pinch-zoom",
				nav: ".am-pureview-nav"
			},
			shareBtn: !1,
			toggleToolbar: !0,
			target: "img",
			weChatImagePreview: !0
		}, c.prototype.init = function() {
			var t = this,
				e = this.options,
				i = this.$element,
				s = this.$pureview;
			this.refreshSlides(), n("body").append(s), this.$title = s.find(e.selector.title), this.$current = s.find(e.selector.current), this.$bar = s.find(e.selector.bar), this.$actions = s.find(e.selector.actions), e.shareBtn && this.$actions.append('<a href="javascript: void(0)" class="am-icon-share-square-o" data-am-toggle="share"></a>'), this.$element.on("click.pureview.amui", e.target, function(i) {
				i.preventDefault();
				var n = t.$images.index(this);
				e.weChatImagePreview && window.WeixinJSBridge ? window.WeixinJSBridge.invoke("imagePreview", {
					current: t.imgUrls[n],
					urls: t.imgUrls
				}) : t.open(n)
			}), s.find(".am-pureview-direction").on("click.direction.pureview.amui", "li", function(e) {
				e.preventDefault(), n(this).is(".am-pureview-prev") ? t.prevSlide() : t.nextSlide()
			}), s.find(e.selector.nav).on("click.nav.pureview.amui", "li", function() {
				var e = t.$navItems.index(n(this));
				t.activate(t.$slides.eq(e))
			}), s.find(e.selector.close).on("click.close.pureview.amui", function(e) {
				e.preventDefault(), t.close()
			}), this.$slider.hammer().on("swipeleft.pureview.amui", function(e) {
				e.preventDefault(), t.nextSlide()
			}).on("swiperight.pureview.amui", function(e) {
				e.preventDefault(), t.prevSlide()
			}).on("press.pureview.amui", function(i) {
				i.preventDefault(), e.toggleToolbar && t.toggleToolBar()
			}), this.$slider.data("hammer").get("swipe").set({
				direction: a.DIRECTION_HORIZONTAL,
				velocity: .35
			}), i.DOMObserve({
				childList: !0,
				subtree: !0
			}, function(t, e) {}), i.on("changed.dom.amui", function(e) {
				e.stopPropagation(), t.refreshSlides()
			}), n(document).on("keydown.pureview.amui", n.proxy(function(t) {
				var e = t.keyCode;
				37 == e ? this.prevSlide() : 39 == e ? this.nextSlide() : 27 == e && this.close()
			}, this))
		}, c.prototype.refreshSlides = function() {
			this.$images = this.$element.find(this.options.target);
			var t = this,
				e = this.options,
				i = this.$pureview,
				o = n([]),
				a = n([]),
				r = this.$images,
				l = r.length;
			this.$slider = i.find(e.selector.slider), this.$nav = i.find(e.selector.nav);
			var c = "data-am-pureviewed";
			this.imgUrls = this.imgUrls || [], l && (1 === l && i.addClass(e.className.onlyOne), r.not("[" + c + "]").each(function(e, i) {
				var r, l;
				"A" === i.nodeName ? (r = i.href, l = i.title || "") : (r = n(i).data("rel") || i.src, r = s.utils.getAbsoluteUrl(r), l = n(i).attr("alt") || ""), i.setAttribute(c, "1"), t.imgUrls.push(r), o = o.add(n('<li data-src="' + r + '" data-title="' + l + '"></li>')), a = a.add(n("<li>" + (e + 1) + "</li>"))
			}), i.find(e.selector.total).text(l), this.$slider.append(o), this.$nav.append(a), this.$navItems = this.$nav.find("li"), this.$slides = this.$slider.find("li"))
		}, c.prototype.loadImage = function(t, e) {
			var i = "image-appended";
			if (!t.data(i)) {
				var s = n("<img>", {
					src: t.data("src"),
					alt: t.data("title")
				});
				t.html(s).wrapInner('<div class="am-pinch-zoom"></div>').redraw();
				var a = t.find(this.options.selector.pinchZoom);
				a.data("amui.pinchzoom", new o(a[0], {})), t.data("image-appended", !0)
			}
			e && e.call(this)
		}, c.prototype.activate = function(t) {
			var e = this.options,
				i = this.$slides,
				o = i.index(t),
				a = t.data("title") || "",
				r = e.className.active;
			i.find("." + r).is(t) || this.transitioning || (this.loadImage(t, function() {
				s.utils.imageLoader(t.find("img"), function(e) {
					t.find(".am-pinch-zoom").addClass("am-pureview-loaded"), n(e).addClass("am-img-loaded")
				})
			}), this.transitioning = 1, this.$title.text(a), this.$current.text(o + 1), i.removeClass(), t.addClass(r), i.eq(o - 1).addClass(e.className.prevSlide), i.eq(o + 1).addClass(e.className.nextSlide), this.$navItems.removeClass().eq(o).addClass(e.className.active), l ? t.one(l.end, n.proxy(function() {
				this.transitioning = 0
			}, this)).emulateTransitionEnd(300) : this.transitioning = 0)
		}, c.prototype.nextSlide = function() {
			if (1 !== this.$slides.length) {
				var t = this.$slides,
					e = t.filter(".am-active"),
					i = t.index(e),
					n = "am-animation-right-spring";
				i + 1 >= t.length ? r && e.addClass(n).on(r.end, function() {
					e.removeClass(n)
				}) : this.activate(t.eq(i + 1))
			}
		}, c.prototype.prevSlide = function() {
			if (1 !== this.$slides.length) {
				var t = this.$slides,
					e = t.filter(".am-active"),
					i = this.$slides.index(e),
					n = "am-animation-left-spring";
				0 === i ? r && e.addClass(n).on(r.end, function() {
					e.removeClass(n)
				}) : this.activate(t.eq(i - 1))
			}
		}, c.prototype.toggleToolBar = function() {
			this.$pureview.toggleClass(this.options.className.barActive)
		}, c.prototype.open = function(t) {
			var e = t || 0;
			this.checkScrollbar(), this.setScrollbar(), this.activate(this.$slides.eq(e)), this.$pureview.show().redraw().addClass(this.options.className.active), this.$body.addClass(this.options.className.activeBody)
		}, c.prototype.close = function() {
			function t() {
				this.$pureview.hide(), this.$body.removeClass(e.className.activeBody), this.resetScrollbar()
			}
			var e = this.options;
			this.$pureview.removeClass(e.className.active), this.$slides.removeClass(), l ? this.$pureview.one(l.end, n.proxy(t, this)).emulateTransitionEnd(300) : t.call(this)
		}, c.prototype.checkScrollbar = function() {
			this.scrollbarWidth = s.utils.measureScrollbar()
		}, c.prototype.setScrollbar = function() {
			var t = parseInt(this.$body.css("padding-right") || 0, 10);
			this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
		}, c.prototype.resetScrollbar = function() {
			this.$body.css("padding-right", "")
		}, s.plugin("pureview", c), s.ready(function(t) {
			n("[data-am-pureview]", t).pureview()
		}), t.exports = c
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = function(t, e) {
				if (s.support.animation) {
					this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t);
					var i = function() {
							s.utils.rAF.call(window, n.proxy(this.checkView, this))
						}.bind(this);
					this.$window = n(window).on("scroll.scrollspy.amui", i).on("resize.scrollspy.amui orientationchange.scrollspy.amui", s.utils.debounce(i, 50)), this.timer = this.inViewState = this.initInView = null, i()
				}
			};
		o.DEFAULTS = {
			animation: "fade",
			className: {
				inView: "am-scrollspy-inview",
				init: "am-scrollspy-init"
			},
			repeat: !0,
			delay: 0,
			topOffset: 0,
			leftOffset: 0
		}, o.prototype.checkView = function() {
			var t = this.$element,
				e = this.options,
				i = s.utils.isInView(t, e),
				n = e.animation ? " am-animation-" + e.animation : "";
			i && !this.inViewState && (this.timer && clearTimeout(this.timer), this.initInView || (t.addClass(e.className.init), this.offset = t.offset(), this.initInView = !0, t.trigger("init.scrollspy.amui")), this.timer = setTimeout(function() {
				i && t.addClass(e.className.inView + n).width()
			}, e.delay), this.inViewState = !0, t.trigger("inview.scrollspy.amui")), !i && this.inViewState && e.repeat && (t.removeClass(e.className.inView + n), this.inViewState = !1, t.trigger("outview.scrollspy.amui"))
		}, o.prototype.check = function() {
			s.utils.rAF.call(window, n.proxy(this.checkView, this))
		}, s.plugin("scrollspy", o), s.ready(function(t) {
			n("[data-am-scrollspy]", t).scrollspy()
		}), t.exports = o
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2);
		i(23);
		var o = function(t, e) {
				this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.anchors = [], this.$links = this.$element.find('a[href^="#"]').each(function(t, e) {
					this.anchors.push(n(e).attr("href"))
				}.bind(this)), this.$targets = n(this.anchors.join(", "));
				var i = function() {
						s.utils.rAF.call(window, n.proxy(this.process, this))
					}.bind(this);
				this.$window = n(window).on("scroll.scrollspynav.amui", i).on("resize.scrollspynav.amui orientationchange.scrollspynav.amui", s.utils.debounce(i, 50)), i(), this.scrollProcess()
			};
		o.DEFAULTS = {
			className: {
				active: "am-active"
			},
			closest: !1,
			smooth: !0,
			offsetTop: 0
		}, o.prototype.process = function() {
			var t = this.$window.scrollTop(),
				e = this.options,
				i = [],
				o = this.$links,
				a = this.$targets;
			if (a.each(function(t, n) {
				s.utils.isInView(n, e) && i.push(n)
			}), i.length) {
				var r;
				if (n.each(i, function(e, i) {
					if (n(i).offset().top >= t) return r = n(i), !1
				}), !r) return;
				e.closest ? (o.closest(e.closest).removeClass(e.className.active), o.filter('a[href="#' + r.attr("id") + '"]').closest(e.closest).addClass(e.className.active)) : o.removeClass(e.className.active).filter('a[href="#' + r.attr("id") + '"]').addClass(e.className.active)
			}
		}, o.prototype.scrollProcess = function() {
			var t = this.$links,
				e = this.options;
			e.smooth && n.fn.smoothScroll && t.on("click", function(t) {
				t.preventDefault();
				var i = n(this),
					s = n(i.attr("href"));
				if (s) {
					var o = e.offsetTop && !isNaN(parseInt(e.offsetTop)) && parseInt(e.offsetTop) || 0;
					n(window).smoothScroll({
						position: s.offset().top - o
					})
				}
			})
		}, s.plugin("scrollspynav", o), s.ready(function(t) {
			n("[data-am-scrollspynav]", t).scrollspynav()
		}), t.exports = o
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = s.utils.rAF,
			a = s.utils.cancelAF,
			r = !1,
			l = function(t, e) {
				function i(t) {
					return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
				}
				function s() {
					p.off("touchstart.smoothscroll.amui", w), r = !1
				}
				function c(t) {
					r && (u || (u = t), h = Math.min(1, Math.max((t - u) / y, 0)), d = Math.round(f + g * i(h)), g > 0 && d > m && (d = m), g < 0 && d < m && (d = m), v != d && p.scrollTop(d), v = d, d !== m ? (a(b), b = o(c)) : (a(b), s()))
				}
				e = e || {};
				var u, h, d, p = n(t),
					m = parseInt(e.position) || l.DEFAULTS.position,
					f = p.scrollTop(),
					v = f,
					g = m - f,
					y = e.speed || Math.min(750, Math.min(1500, Math.abs(f - m))),
					w = function() {
						s()
					};
				if (!r && 0 !== g) {
					p.on("touchstart.smoothscroll.amui", w), r = !0;
					var b = o(c)
				}
			};
		l.DEFAULTS = {
			position: 0
		}, n.fn.smoothScroll = function(t) {
			return this.each(function() {
				new l(this, t)
			})
		}, n(document).on("click.smoothScroll.amui.data-api", "[data-am-smooth-scroll]", function(t) {
			t.preventDefault();
			var e = s.utils.parseOptions(n(this).data("amSmoothScroll"));
			n(window).smoothScroll(e)
		}), t.exports = l
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2);
		n.expr[":"].containsNC = function(t, e, i, n) {
			return (t.textContent || t.innerText || "").toLowerCase().indexOf((i[3] || "").toLowerCase()) >= 0
		};
		var o = function(t, e) {
				this.$element = n(t), this.options = n.extend({}, o.DEFAULTS, {
					placeholder: t.getAttribute("placeholder") || o.DEFAULTS.placeholder
				}, e), this.$originalOptions = this.$element.find("option"), this.multiple = t.multiple, this.$selector = null, this.initialized = !1, this.init()
			};
		o.DEFAULTS = {
			btnWidth: null,
			btnSize: null,
			btnStyle: "default",
			dropUp: 0,
			maxHeight: null,
			maxChecked: null,
			placeholder: "\u70b9\u51fb\u9009\u62e9...",
			selectedClass: "am-checked",
			disabledClass: "am-disabled",
			searchBox: !1,
			tpl: '<div class="am-selected am-dropdown <%= dropUp ? \'am-dropdown-up\': \'\' %>" id="<%= id %>" data-am-dropdown>  <button type="button" class="am-selected-btn am-btn am-dropdown-toggle">    <span class="am-selected-status am-fl"></span>    <i class="am-selected-icon am-icon-caret-<%= dropUp ? \'up\' : \'down\' %>"></i>  </button>  <div class="am-selected-content am-dropdown-content">    <h2 class="am-selected-header"><span class="am-icon-chevron-left">\u8fd4\u56de</span></h2>   <% if (searchBox) { %>   <div class="am-selected-search">     <input autocomplete="off" class="am-form-field am-input-sm" />   </div>   <% } %>    <ul class="am-selected-list">      <% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames%>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>    </ul>    <div class="am-selected-hint"></div>  </div></div>',
			listTpl: '<% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames %>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>'
		}, o.prototype.init = function() {
			var t = this,
				e = this.$element,
				i = this.options;
			e.hide();
			var o = {
				id: s.utils.generateGUID("am-selected"),
				multiple: this.multiple,
				options: [],
				searchBox: i.searchBox,
				dropUp: i.dropUp,
				placeholder: i.placeholder
			};
			this.$selector = n(s.template(this.options.tpl, o)), this.$selector.css({
				width: this.options.btnWidth
			}), this.$list = this.$selector.find(".am-selected-list"), this.$searchField = this.$selector.find(".am-selected-search input"), this.$hint = this.$selector.find(".am-selected-hint");
			var a = this.$selector.find(".am-selected-btn"),
				r = [];
			i.btnSize && r.push("am-btn-" + i.btnSize), i.btnStyle && r.push("am-btn-" + i.btnStyle), a.addClass(r.join(" ")), this.$selector.dropdown({
				justify: a
			}), e[0].disabled && this.disable(), i.maxHeight && this.$selector.find(".am-selected-list").css({
				"max-height": i.maxHeight,
				"overflow-y": "scroll"
			});
			var l = [],
				c = e.attr("minchecked"),
				u = e.attr("maxchecked") || i.maxChecked;
			this.maxChecked = u || 1 / 0, e[0].required && l.push("\u5fc5\u9009"), (c || u) && (c && l.push("\u81f3\u5c11\u9009\u62e9 " + c + " \u9879"), u && l.push("\u81f3\u591a\u9009\u62e9 " + u + " \u9879")), this.$hint.text(l.join("\uff0c")), this.renderOptions(), this.$element.after(this.$selector), this.dropdown = this.$selector.data("amui.dropdown"), this.$status = this.$selector.find(".am-selected-status"), setTimeout(function() {
				t.syncData(), t.initialized = !0
			}, 0), this.bindEvents()
		}, o.prototype.renderOptions = function() {
			function t(t, e, s) {
				if ("" === e.value) return !0;
				var o = "";
				e.disabled && (o += i.disabledClass), !e.disabled && e.selected && (o += i.selectedClass), n.push({
					group: s,
					index: t,
					classNames: o,
					text: e.text,
					value: e.value
				})
			}
			var e = this.$element,
				i = this.options,
				n = [],
				o = e.find("optgroup");
			this.$originalOptions = this.$element.find("option"), this.multiple || null !== e.val() || this.$originalOptions.length && (this.$originalOptions.get(0).selected = !0), o.length ? o.each(function(e) {
				n.push({
					header: !0,
					group: e + 1,
					text: this.label
				}), o.eq(e).find("option").each(function(i, n) {
					t(i, n, e)
				})
			}) : this.$originalOptions.each(function(e, i) {
				t(e, i, null)
			}), this.$list.html(s.template(i.listTpl, {
				options: n
			})), this.$shadowOptions = this.$list.find("> li").not(".am-selected-list-header")
		}, o.prototype.setChecked = function(t) {
			var e = this.options,
				i = n(t),
				s = i.hasClass(e.selectedClass);
			if (this.multiple) {
				var o = this.$list.find("." + e.selectedClass).length;
				if (!s && this.maxChecked <= o) return this.$element.trigger("checkedOverflow.selected.amui", {
					selected: this
				}), !1
			} else {
				if (this.dropdown.close(), s) return !1;
				this.$shadowOptions.not(i).removeClass(e.selectedClass)
			}
			i.toggleClass(e.selectedClass), this.syncData(t)
		}, o.prototype.syncData = function(t) {
			var e = this,
				i = this.options,
				s = [],
				o = n([]);
			if (this.$shadowOptions.filter("." + i.selectedClass).each(function() {
				var i = n(this);
				s.push(i.find(".am-selected-text").text()), t || (o = o.add(e.$originalOptions.filter('[value="' + i.data("value") + '"]').prop("selected", !0)))
			}), t) {
				var a = n(t);
				this.$originalOptions.filter('[value="' + a.data("value") + '"]').prop("selected", a.hasClass(i.selectedClass))
			} else this.$originalOptions.not(o).prop("selected", !1);
			this.$element.val() || (s = [i.placeholder]), this.$status.text(s.join(", ")), this.initialized && this.$element.trigger("change")
		}, o.prototype.bindEvents = function() {
			var t = this,
				e = "am-selected-list-header",
				i = s.utils.debounce(function(i) {
					t.$shadowOptions.not("." + e).hide().filter(':containsNC("' + i.target.value + '")').show()
				}, 100);
			this.$list.on("click", "> li", function(i) {
				var s = n(this);
				!s.hasClass(t.options.disabledClass) && !s.hasClass(e) && t.setChecked(this)
			}), this.$searchField.on("keyup.selected.amui", i), this.$selector.on("closed.dropdown.amui", function() {
				t.$searchField.val(""), t.$shadowOptions.css({
					display: ""
				})
			}), this.$element.on("validated.field.validator.amui", function(e) {
				if (e.validity) {
					var i = e.validity.valid,
						n = "am-invalid";
					t.$selector[(i ? "remove" : "add") + "Class"](n)
				}
			}), s.support.mutationobserver && (this.observer = new s.support.mutationobserver(function() {
				t.$element.trigger("changed.selected.amui")
			}), this.observer.observe(this.$element[0], {
				childList: !0,
				subtree: !0,
				characterData: !0
			})), this.$element.on("changed.selected.amui", function() {
				t.renderOptions(), t.syncData()
			})
		}, o.prototype.select = function(t) {
			var e;
			e = "number" == typeof t ? this.$list.find("> li").not(".am-selected-list-header").eq(t) : "string" == typeof t ? this.$list.find(t) : n(t), e.trigger("click")
		}, o.prototype.enable = function() {
			this.$element.prop("disable", !1), this.$selector.dropdown("enable")
		}, o.prototype.disable = function() {
			this.$element.prop("disable", !0), this.$selector.dropdown("disable")
		}, o.prototype.destroy = function() {
			this.$element.removeData("amui.selected").show(), this.$selector.remove()
		}, s.plugin("selected", o), s.ready(function(t) {
			n("[data-am-selected]", t).selected()
		}), t.exports = o
	}, function(t, e, i) {
		"use strict";
		i(15);
		var n = i(1),
			s = i(2),
			o = i(26),
			a = document,
			r = n(a),
			l = function(t) {
				this.options = n.extend({}, l.DEFAULTS, t || {}), this.$element = null, this.$wechatQr = null, this.pics = null, this.inited = !1, this.active = !1
			};
		l.DEFAULTS = {
			sns: ["weibo", "qq", "qzone", "tqq", "wechat", "renren"],
			title: "\u5206\u4eab\u5230",
			cancel: "\u53d6\u6d88",
			closeOnShare: !0,
			id: s.utils.generateGUID("am-share"),
			desc: "Hi\uff0c\u5b64\u591c\u89c2\u5929\u8c61\uff0c\u53d1\u73b0\u4e00\u4e2a\u4e0d\u9519\u7684\u897f\u897f\uff0c\u5206\u4eab\u4e00\u4e0b\u4e0b ;-)",
			via: "Amaze UI",
			tpl: '<div class="am-share am-modal-actions" id="<%= id %>"><h3 class="am-share-title"><%= title %></h3><ul class="am-share-sns am-avg-sm-3"><% for(var i = 0; i < sns.length; i++) {%><li><a href="<%= sns[i].shareUrl %>" data-am-share-to="<%= sns[i].id %>" ><i class="am-icon-<%= sns[i].icon %>"></i><span><%= sns[i].title %></span></a></li><% } %></ul><div class="am-share-footer"><button class="am-btn am-btn-default am-btn-block" data-am-share-close><%= cancel %></button></div></div>'
		}, l.SNS = {
			weibo: {
				title: "\u65b0\u6d6a\u5fae\u535a",
				url: "http://service.weibo.com/share/share.php",
				width: 620,
				height: 450,
				icon: "weibo"
			},
			qq: {
				title: "QQ \u597d\u53cb",
				url: "http://connect.qq.com/widget/shareqq/index.html",
				icon: "qq"
			},
			qzone: {
				title: "QQ \u7a7a\u95f4",
				url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
				icon: "star"
			},
			tqq: {
				title: "\u817e\u8baf\u5fae\u535a",
				url: "http://v.t.qq.com/share/share.php",
				icon: "tencent-weibo"
			},
			wechat: {
				title: "\u5fae\u4fe1",
				url: "[qrcode]",
				icon: "wechat"
			},
			renren: {
				title: "\u4eba\u4eba\u7f51",
				url: "http://widget.renren.com/dialog/share",
				icon: "renren"
			},
			douban: {
				title: "\u8c46\u74e3",
				url: "http://www.douban.com/recommend/",
				icon: "share-alt"
			},
			mail: {
				title: "\u90ae\u4ef6\u5206\u4eab",
				url: "mailto:",
				icon: "envelope-o"
			},
			sms: {
				title: "\u77ed\u4fe1\u5206\u4eab",
				url: "sms:",
				icon: "comment"
			}
		}, l.prototype.render = function() {
			var t = this.options,
				e = [],
				i = encodeURIComponent(a.title),
				o = encodeURIComponent(a.location),
				r = "?body=" + i + o;
			return t.sns.forEach(function(n, s) {
				if (l.SNS[n]) {
					var a, c = l.SNS[n];
					c.id = n, a = "mail" === n ? r + "&subject=" + t.desc : "sms" === n ? r : "?url=" + o + "&title=" + i, c.shareUrl = c.url + a, e.push(c)
				}
			}), s.template(t.tpl, n.extend({}, t, {
				sns: e
			}))
		}, l.prototype.init = function() {
			if (!this.inited) {
				var t = this,
					e = "[data-am-share-to]";
				r.ready(n.proxy(function() {
					n("body").append(this.render()), this.$element = n("#" + this.options.id), this.$element.find("[data-am-share-close]").on("click.share.amui", function() {
						t.close()
					})
				}, this)), r.on("click.share.amui", e, n.proxy(function(t) {
					var i = n(t.target),
						s = i.is(e) && i || i.parent(e),
						o = s.attr("data-am-share-to");
					"mail" !== o && "sms" !== o && (t.preventDefault(), this.shareTo(o, this.setData(o))), this.close()
				}, this)), this.inited = !0
			}
		}, l.prototype.open = function() {
			!this.inited && this.init(), this.$element && this.$element.modal("open"), this.$element.trigger("open.share.amui"), this.active = !0
		}, l.prototype.close = function() {
			this.$element && this.$element.modal("close"), this.$element.trigger("close.share.amui"), this.active = !1
		}, l.prototype.toggle = function() {
			this.active ? this.close() : this.open()
		}, l.prototype.setData = function(t) {
			if (t) {
				var e = {
					url: a.location,
					title: a.title
				},
					i = this.options.desc,
					n = this.pics || [],
					s = /^(qzone|qq|tqq)$/;
				if (s.test(t) && !n.length) {
					for (var o = a.images, r = 0; r < o.length && r < 10; r++) !! o[r].src && n.push(encodeURIComponent(o[r].src));
					this.pics = n
				}
				switch (t) {
				case "qzone":
					e.desc = i, e.site = this.options.via, e.pics = n.join("|");
					break;
				case "qq":
					e.desc = i, e.site = this.options.via, e.pics = n[0];
					break;
				case "tqq":
					e.pic = n.join("|")
				}
				return e
			}
		}, l.prototype.shareTo = function(t, e) {
			var i = l.SNS[t];
			if (i) {
				if ("wechat" === t || "weixin" === t) return this.wechatQr();
				var n = [];
				for (var s in e) e[s] && n.push(s.toString() + "=" + ("pic" === s || "pics" === s ? e[s] : encodeURIComponent(e[s])));
				window.open(i.url + "?" + n.join("&"))
			}
		}, l.prototype.wechatQr = function() {
			if (!this.$wechatQr) {
				var t = s.utils.generateGUID("am-share-wechat"),
					e = n('<div class="am-modal am-modal-no-btn am-share-wechat-qr"><div class="am-modal-dialog"><div class="am-modal-hd">\u5206\u4eab\u5230\u5fae\u4fe1 <a href="" class="am-close am-close-spin" data-am-modal-close>&times;</a> </div><div class="am-modal-bd"><div class="am-share-wx-qr"></div><div class="am-share-wechat-tip">\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u5e95\u90e8\u7684<em>\u53d1\u73b0</em>\uff0c<br/> \u4f7f\u7528<em>\u626b\u4e00\u626b</em>\u5c06\u7f51\u9875\u5206\u4eab\u81f3\u670b\u53cb\u5708</div></div></div></div>');
				e.attr("id", t);
				var i = new o({
					render: "canvas",
					correctLevel: 0,
					text: a.location.href,
					width: 180,
					height: 180,
					background: "#fff",
					foreground: "#000"
				});
				e.find(".am-share-wx-qr").html(i), e.appendTo(n("body")), this.$wechatQr = n("#" + t)
			}
			this.$wechatQr.modal("open")
		};
		var c = new l;
		r.on("click.share.amui.data-api", '[data-am-toggle="share"]', function(t) {
			t.preventDefault(), c.toggle()
		}), t.exports = s.share = c
	}, function(t, e, i) {
		function n(t) {
			return t < 128 ? [t] : t < 2048 ? (c0 = 192 + (t >> 6), c1 = 128 + (63 & t), [c0, c1]) : (c0 = 224 + (t >> 12), c1 = 128 + (t >> 6 & 63), c2 = 128 + (63 & t), [c0, c1, c2])
		}
		function s(t) {
			for (var e = [], i = 0; i < t.length; i++) for (var s = t.charCodeAt(i), o = n(s), a = 0; a < o.length; a++) e.push(o[a]);
			return e
		}
		function o(t, e) {
			this.typeNumber = -1, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = t, this.utf8bytes = s(t), this.make()
		}
		function a(t, e) {
			if (void 0 == t.length) throw new Error(t.length + "/" + e);
			for (var i = 0; i < t.length && 0 == t[i];) i++;
			this.num = new Array(t.length - i + e);
			for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
		}
		function r() {
			this.buffer = new Array, this.length = 0
		}
		function n(t) {
			return t < 128 ? [t] : t < 2048 ? (c0 = 192 + (t >> 6), c1 = 128 + (63 & t), [c0, c1]) : (c0 = 224 + (t >> 12), c1 = 128 + (t >> 6 & 63), c2 = 128 + (63 & t), [c0, c1, c2])
		}
		function s(t) {
			for (var e = [], i = 0; i < t.length; i++) for (var s = t.charCodeAt(i), o = n(s), a = 0; a < o.length; a++) e.push(o[a]);
			return e
		}
		function o(t, e) {
			this.typeNumber = -1, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = t, this.utf8bytes = s(t), this.make()
		}
		function a(t, e) {
			if (void 0 == t.length) throw new Error(t.length + "/" + e);
			for (var i = 0; i < t.length && 0 == t[i];) i++;
			this.num = new Array(t.length - i + e);
			for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
		}
		function r() {
			this.buffer = new Array, this.length = 0
		}
		var c = i(1),
			u = i(2),
			h = [],
			d = function(t) {
				"string" == typeof t && (t = {
					text: t
				}), this.options = c.extend({}, {
					text: "",
					render: "",
					width: 256,
					height: 256,
					correctLevel: 3,
					background: "#ffffff",
					foreground: "#000000"
				}, t);
				for (var e = null, i = 0, n = h.length; i < n; i++) if (h[i].text == this.options.text && h[i].text.correctLevel == this.options.correctLevel) {
					e = h[i].obj;
					break
				}
				if (i == n && (e = new o(this.options.text, this.options.correctLevel), h.push({
					text: this.options.text,
					correctLevel: this.options.correctLevel,
					obj: e
				})), this.options.render) switch (this.options.render) {
				case "canvas":
					return this.createCanvas(e);
				case "table":
					return this.createTable(e);
				case "svg":
					return this.createSVG(e);
				default:
					return this.createDefault(e)
				}
				return this.createDefault(e)
			};
		d.prototype.createDefault = function(t) {
			var e = document.createElement("canvas");
			return e.getContext ? this.createCanvas(t) : document.createElementNS && document.createElementNS(SVG_NS, "svg").createSVGRect ? this.createSVG(t) : this.createTable(t)
		}, d.prototype.createCanvas = function(t) {
			var e = document.createElement("canvas");
			e.width = this.options.width, e.height = this.options.height;
			for (var i = e.getContext("2d"), n = (this.options.width / t.getModuleCount()).toPrecision(4), s = this.options.height / t.getModuleCount().toPrecision(4), o = 0; o < t.getModuleCount(); o++) for (var a = 0; a < t.getModuleCount(); a++) {
				i.fillStyle = t.modules[o][a] ? this.options.foreground : this.options.background;
				var r = Math.ceil((a + 1) * n) - Math.floor(a * n),
					l = Math.ceil((o + 1) * n) - Math.floor(o * n);
				i.fillRect(Math.round(a * n), Math.round(o * s), r, l)
			}
			return e
		}, d.prototype.createTable = function(t) {
			var e = [];
			e.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: ' + this.options.background + ';">');
			var i = -1,
				n = -1,
				s = -1,
				o = -1;
			i = s = Math.floor(this.options.width / t.getModuleCount()), n = o = Math.floor(this.options.height / t.getModuleCount()), s <= 0 && (i = t.getModuleCount() < 80 ? 2 : 1), o <= 0 && (n = t.getModuleCount() < 80 ? 2 : 1), foreTd = '<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color: " + this.options.foreground + '"></td>', backTd = '<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color: " + this.options.background + '"></td>', l = t.getModuleCount();
			for (var a = 0; a < l; a++) {
				e.push('<tr style="border:0px; margin:0px; padding:0px; height: ' + n + 'px">');
				for (var r = 0; r < l; r++) e.push(t.modules[a][r] ? foreTd : backTd);
				e.push("</tr>")
			}
			e.push("</table>");
			var c = document.createElement("span");
			return c.innerHTML = e.join(""), c.firstChild
		}, d.prototype.createSVG = function(t) {
			for (var e, i, n, s, o = t.getModuleCount(), a = this.options.height / this.options.width, r = '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.options.width + 'px" height="' + this.options.height + 'px" viewbox="0 0 ' + 10 * o + " " + 10 * o * a + '">', l = "<path ", u = ' style="stroke-width:0.5;stroke:' + this.options.foreground + ";fill:" + this.options.foreground + ';"></path>', h = ' style="stroke-width:0.5;stroke:' + this.options.background + ";fill:" + this.options.background + ';"></path>', d = 0; d < o; d++) for (var p = 0; p < o; p++) e = 10 * p, n = 10 * d * a, i = 10 * (p + 1), s = 10 * (d + 1) * a, r += l + 'd="M ' + e + "," + n + " L " + i + "," + n + " L " + i + "," + s + " L " + e + "," + s + ' Z"', r += t.modules[d][p] ? u : h;
			return r += "</svg>", c(r)[0]
		}, o.prototype = {
			constructor: o,
			getModuleCount: function() {
				return this.moduleCount
			},
			make: function() {
				this.getRightType(), this.dataCache = this.createData(), this.createQrcode()
			},
			makeImpl: function(t) {
				this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
				for (var e = 0; e < this.moduleCount; e++) this.modules[e] = new Array(this.moduleCount);
				this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(!0, t), this.typeNumber >= 7 && this.setupTypeNumber(!0), this.mapData(this.dataCache, t)
			},
			setupPositionProbePattern: function(t, e) {
				for (var i = -1; i <= 7; i++) if (!(t + i <= -1 || this.moduleCount <= t + i)) for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4 ? this.modules[t + i][e + n] = !0 : this.modules[t + i][e + n] = !1)
			},
			createQrcode: function() {
				for (var t = 0, e = 0, i = null, n = 0; n < 8; n++) {
					this.makeImpl(n);
					var s = f.getLostPoint(this);
					(0 == n || t > s) && (t = s, e = n, i = this.modules)
				}
				this.modules = i, this.setupTypeInfo(!1, e), this.typeNumber >= 7 && this.setupTypeNumber(!1)
			},
			setupTimingPattern: function() {
				for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0, null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0))
			},
			setupPositionAdjustPattern: function() {
				for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
					var n = t[e],
						s = t[i];
					if (null == this.modules[n][s]) for (var o = -2; o <= 2; o++) for (var a = -2; a <= 2; a++) o == -2 || 2 == o || a == -2 || 2 == a || 0 == o && 0 == a ? this.modules[n + o][s + a] = !0 : this.modules[n + o][s + a] = !1
				}
			},
			setupTypeNumber: function(t) {
				for (var e = f.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
					var n = !t && 1 == (e >> i & 1);
					this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n, this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
				}
			},
			setupTypeInfo: function(t, e) {
				for (var i = p[this.errorCorrectLevel] << 3 | e, n = f.getBCHTypeInfo(i), s = 0; s < 15; s++) {
					var o = !t && 1 == (n >> s & 1);
					s < 6 ? this.modules[s][8] = o : s < 8 ? this.modules[s + 1][8] = o : this.modules[this.moduleCount - 15 + s][8] = o;
					var o = !t && 1 == (n >> s & 1);
					s < 8 ? this.modules[8][this.moduleCount - s - 1] = o : s < 9 ? this.modules[8][15 - s - 1 + 1] = o : this.modules[8][15 - s - 1] = o
				}
				this.modules[this.moduleCount - 8][8] = !t
			},
			createData: function() {
				var t = new r,
					e = this.typeNumber > 9 ? 16 : 8;
				t.put(4, 4), t.put(this.utf8bytes.length, e);
				for (var i = 0, n = this.utf8bytes.length; i < n; i++) t.put(this.utf8bytes[i], 8);
				for (t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4); t.length % 8 != 0;) t.putBit(!1);
				for (;;) {
					if (t.length >= 8 * this.totalDataCount) break;
					if (t.put(o.PAD0, 8), t.length >= 8 * this.totalDataCount) break;
					t.put(o.PAD1, 8)
				}
				return this.createBytes(t)
			},
			createBytes: function(t) {
				for (var e = 0, i = 0, n = 0, s = this.rsBlock.length / 3, o = new Array, r = 0; r < s; r++) for (var l = this.rsBlock[3 * r + 0], c = this.rsBlock[3 * r + 1], u = this.rsBlock[3 * r + 2], h = 0; h < l; h++) o.push([u, c]);
				for (var d = new Array(o.length), p = new Array(o.length), m = 0; m < o.length; m++) {
					var v = o[m][0],
						g = o[m][1] - v;
					i = Math.max(i, v), n = Math.max(n, g), d[m] = new Array(v);
					for (var r = 0; r < d[m].length; r++) d[m][r] = 255 & t.buffer[r + e];
					e += v;
					var y = f.getErrorCorrectPolynomial(g),
						w = new a(d[m], y.getLength() - 1),
						b = w.mod(y);
					p[m] = new Array(y.getLength() - 1);
					for (var r = 0; r < p[m].length; r++) {
						var T = r + b.getLength() - p[m].length;
						p[m][r] = T >= 0 ? b.get(T) : 0
					}
				}
				for (var x = new Array(this.totalDataCount), C = 0, r = 0; r < i; r++) for (var m = 0; m < o.length; m++) r < d[m].length && (x[C++] = d[m][r]);
				for (var r = 0; r < n; r++) for (var m = 0; m < o.length; m++) r < p[m].length && (x[C++] = p[m][r]);
				return x
			},
			mapData: function(t, e) {
				for (var i = -1, n = this.moduleCount - 1, s = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--;) {
					for (var r = 0; r < 2; r++) if (null == this.modules[n][a - r]) {
						var l = !1;
						o < t.length && (l = 1 == (t[o] >>> s & 1));
						var c = f.getMask(e, n, a - r);
						c && (l = !l), this.modules[n][a - r] = l, s--, s == -1 && (o++, s = 7)
					}
					if (n += i, n < 0 || this.moduleCount <= n) {
						n -= i, i = -i;
						break
					}
				}
			}
		}, o.PAD0 = 236, o.PAD1 = 17;
		for (var p = [1, 0, 3, 2], m = {
			PATTERN000: 0,
			PATTERN001: 1,
			PATTERN010: 2,
			PATTERN011: 3,
			PATTERN100: 4,
			PATTERN101: 5,
			PATTERN110: 6,
			PATTERN111: 7
		}, f = {
			PATTERN_POSITION_TABLE: [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170]
			],
			G15: 1335,
			G18: 7973,
			G15_MASK: 21522,
			getBCHTypeInfo: function(t) {
				for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
				return (t << 10 | e) ^ f.G15_MASK
			},
			getBCHTypeNumber: function(t) {
				for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
				return t << 12 | e
			},
			getBCHDigit: function(t) {
				for (var e = 0; 0 != t;) e++, t >>>= 1;
				return e
			},
			getPatternPosition: function(t) {
				return f.PATTERN_POSITION_TABLE[t - 1]
			},
			getMask: function(t, e, i) {
				switch (t) {
				case m.PATTERN000:
					return (e + i) % 2 == 0;
				case m.PATTERN001:
					return e % 2 == 0;
				case m.PATTERN010:
					return i % 3 == 0;
				case m.PATTERN011:
					return (e + i) % 3 == 0;
				case m.PATTERN100:
					return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
				case m.PATTERN101:
					return e * i % 2 + e * i % 3 == 0;
				case m.PATTERN110:
					return (e * i % 2 + e * i % 3) % 2 == 0;
				case m.PATTERN111:
					return (e * i % 3 + (e + i) % 2) % 2 == 0;
				default:
					throw new Error("bad maskPattern:" + t)
				}
			},
			getErrorCorrectPolynomial: function(t) {
				for (var e = new a([1], 0), i = 0; i < t; i++) e = e.multiply(new a([1, v.gexp(i)], 0));
				return e
			},
			getLostPoint: function(t) {
				for (var e = t.getModuleCount(), i = 0, n = 0, s = 0; s < e; s++) for (var o = 0, a = t.modules[s][0], r = 0; r < e; r++) {
					var l = t.modules[s][r];
					if (r < e - 6 && l && !t.modules[s][r + 1] && t.modules[s][r + 2] && t.modules[s][r + 3] && t.modules[s][r + 4] && !t.modules[s][r + 5] && t.modules[s][r + 6] && (r < e - 10 ? t.modules[s][r + 7] && t.modules[s][r + 8] && t.modules[s][r + 9] && t.modules[s][r + 10] && (i += 40) : r > 3 && t.modules[s][r - 1] && t.modules[s][r - 2] && t.modules[s][r - 3] && t.modules[s][r - 4] && (i += 40)), s < e - 1 && r < e - 1) {
						var c = 0;
						l && c++, t.modules[s + 1][r] && c++, t.modules[s][r + 1] && c++, t.modules[s + 1][r + 1] && c++, 0 != c && 4 != c || (i += 3)
					}
					a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1), l && n++
				}
				for (var r = 0; r < e; r++) for (var o = 0, a = t.modules[0][r], s = 0; s < e; s++) {
					var l = t.modules[s][r];
					s < e - 6 && l && !t.modules[s + 1][r] && t.modules[s + 2][r] && t.modules[s + 3][r] && t.modules[s + 4][r] && !t.modules[s + 5][r] && t.modules[s + 6][r] && (s < e - 10 ? t.modules[s + 7][r] && t.modules[s + 8][r] && t.modules[s + 9][r] && t.modules[s + 10][r] && (i += 40) : s > 3 && t.modules[s - 1][r] && t.modules[s - 2][r] && t.modules[s - 3][r] && t.modules[s - 4][r] && (i += 40)), a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1)
				}
				var u = Math.abs(100 * n / e / e - 50) / 5;
				return i += 10 * u
			}
		}, v = {
			glog: function(t) {
				if (t < 1) throw new Error("glog(" + t + ")");
				return v.LOG_TABLE[t]
			},
			gexp: function(t) {
				for (; t < 0;) t += 255;
				for (; t >= 256;) t -= 255;
				return v.EXP_TABLE[t]
			},
			EXP_TABLE: new Array(256),
			LOG_TABLE: new Array(256)
		}, g = 0; g < 8; g++) v.EXP_TABLE[g] = 1 << g;
		for (var g = 8; g < 256; g++) v.EXP_TABLE[g] = v.EXP_TABLE[g - 4] ^ v.EXP_TABLE[g - 5] ^ v.EXP_TABLE[g - 6] ^ v.EXP_TABLE[g - 8];
		for (var g = 0; g < 255; g++) v.LOG_TABLE[v.EXP_TABLE[g]] = g;
		a.prototype = {
			get: function(t) {
				return this.num[t]
			},
			getLength: function() {
				return this.num.length
			},
			multiply: function(t) {
				for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= v.gexp(v.glog(this.get(i)) + v.glog(t.get(n)));
				return new a(e, 0)
			},
			mod: function(t) {
				var e = this.getLength(),
					i = t.getLength();
				if (e - i < 0) return this;
				for (var n = new Array(e), s = 0; s < e; s++) n[s] = this.get(s);
				for (; n.length >= i;) {
					for (var o = v.glog(n[0]) - v.glog(t.get(0)), s = 0; s < t.getLength(); s++) n[s] ^= v.gexp(v.glog(t.get(s)) + o);
					for (; 0 == n[0];) n.shift()
				}
				return new a(n, 0)
			}
		};
		var y = [
			[1, 26, 19],
			[1, 26, 16],
			[1, 26, 13],
			[1, 26, 9],
			[1, 44, 34],
			[1, 44, 28],
			[1, 44, 22],
			[1, 44, 16],
			[1, 70, 55],
			[1, 70, 44],
			[2, 35, 17],
			[2, 35, 13],
			[1, 100, 80],
			[2, 50, 32],
			[2, 50, 24],
			[4, 25, 9],
			[1, 134, 108],
			[2, 67, 43],
			[2, 33, 15, 2, 34, 16],
			[2, 33, 11, 2, 34, 12],
			[2, 86, 68],
			[4, 43, 27],
			[4, 43, 19],
			[4, 43, 15],
			[2, 98, 78],
			[4, 49, 31],
			[2, 32, 14, 4, 33, 15],
			[4, 39, 13, 1, 40, 14],
			[2, 121, 97],
			[2, 60, 38, 2, 61, 39],
			[4, 40, 18, 2, 41, 19],
			[4, 40, 14, 2, 41, 15],
			[2, 146, 116],
			[3, 58, 36, 2, 59, 37],
			[4, 36, 16, 4, 37, 17],
			[4, 36, 12, 4, 37, 13],
			[2, 86, 68, 2, 87, 69],
			[4, 69, 43, 1, 70, 44],
			[6, 43, 19, 2, 44, 20],
			[6, 43, 15, 2, 44, 16],
			[4, 101, 81],
			[1, 80, 50, 4, 81, 51],
			[4, 50, 22, 4, 51, 23],
			[3, 36, 12, 8, 37, 13],
			[2, 116, 92, 2, 117, 93],
			[6, 58, 36, 2, 59, 37],
			[4, 46, 20, 6, 47, 21],
			[7, 42, 14, 4, 43, 15],
			[4, 133, 107],
			[8, 59, 37, 1, 60, 38],
			[8, 44, 20, 4, 45, 21],
			[12, 33, 11, 4, 34, 12],
			[3, 145, 115, 1, 146, 116],
			[4, 64, 40, 5, 65, 41],
			[11, 36, 16, 5, 37, 17],
			[11, 36, 12, 5, 37, 13],
			[5, 109, 87, 1, 110, 88],
			[5, 65, 41, 5, 66, 42],
			[5, 54, 24, 7, 55, 25],
			[11, 36, 12],
			[5, 122, 98, 1, 123, 99],
			[7, 73, 45, 3, 74, 46],
			[15, 43, 19, 2, 44, 20],
			[3, 45, 15, 13, 46, 16],
			[1, 135, 107, 5, 136, 108],
			[10, 74, 46, 1, 75, 47],
			[1, 50, 22, 15, 51, 23],
			[2, 42, 14, 17, 43, 15],
			[5, 150, 120, 1, 151, 121],
			[9, 69, 43, 4, 70, 44],
			[17, 50, 22, 1, 51, 23],
			[2, 42, 14, 19, 43, 15],
			[3, 141, 113, 4, 142, 114],
			[3, 70, 44, 11, 71, 45],
			[17, 47, 21, 4, 48, 22],
			[9, 39, 13, 16, 40, 14],
			[3, 135, 107, 5, 136, 108],
			[3, 67, 41, 13, 68, 42],
			[15, 54, 24, 5, 55, 25],
			[15, 43, 15, 10, 44, 16],
			[4, 144, 116, 4, 145, 117],
			[17, 68, 42],
			[17, 50, 22, 6, 51, 23],
			[19, 46, 16, 6, 47, 17],
			[2, 139, 111, 7, 140, 112],
			[17, 74, 46],
			[7, 54, 24, 16, 55, 25],
			[34, 37, 13],
			[4, 151, 121, 5, 152, 122],
			[4, 75, 47, 14, 76, 48],
			[11, 54, 24, 14, 55, 25],
			[16, 45, 15, 14, 46, 16],
			[6, 147, 117, 4, 148, 118],
			[6, 73, 45, 14, 74, 46],
			[11, 54, 24, 16, 55, 25],
			[30, 46, 16, 2, 47, 17],
			[8, 132, 106, 4, 133, 107],
			[8, 75, 47, 13, 76, 48],
			[7, 54, 24, 22, 55, 25],
			[22, 45, 15, 13, 46, 16],
			[10, 142, 114, 2, 143, 115],
			[19, 74, 46, 4, 75, 47],
			[28, 50, 22, 6, 51, 23],
			[33, 46, 16, 4, 47, 17],
			[8, 152, 122, 4, 153, 123],
			[22, 73, 45, 3, 74, 46],
			[8, 53, 23, 26, 54, 24],
			[12, 45, 15, 28, 46, 16],
			[3, 147, 117, 10, 148, 118],
			[3, 73, 45, 23, 74, 46],
			[4, 54, 24, 31, 55, 25],
			[11, 45, 15, 31, 46, 16],
			[7, 146, 116, 7, 147, 117],
			[21, 73, 45, 7, 74, 46],
			[1, 53, 23, 37, 54, 24],
			[19, 45, 15, 26, 46, 16],
			[5, 145, 115, 10, 146, 116],
			[19, 75, 47, 10, 76, 48],
			[15, 54, 24, 25, 55, 25],
			[23, 45, 15, 25, 46, 16],
			[13, 145, 115, 3, 146, 116],
			[2, 74, 46, 29, 75, 47],
			[42, 54, 24, 1, 55, 25],
			[23, 45, 15, 28, 46, 16],
			[17, 145, 115],
			[10, 74, 46, 23, 75, 47],
			[10, 54, 24, 35, 55, 25],
			[19, 45, 15, 35, 46, 16],
			[17, 145, 115, 1, 146, 116],
			[14, 74, 46, 21, 75, 47],
			[29, 54, 24, 19, 55, 25],
			[11, 45, 15, 46, 46, 16],
			[13, 145, 115, 6, 146, 116],
			[14, 74, 46, 23, 75, 47],
			[44, 54, 24, 7, 55, 25],
			[59, 46, 16, 1, 47, 17],
			[12, 151, 121, 7, 152, 122],
			[12, 75, 47, 26, 76, 48],
			[39, 54, 24, 14, 55, 25],
			[22, 45, 15, 41, 46, 16],
			[6, 151, 121, 14, 152, 122],
			[6, 75, 47, 34, 76, 48],
			[46, 54, 24, 10, 55, 25],
			[2, 45, 15, 64, 46, 16],
			[17, 152, 122, 4, 153, 123],
			[29, 74, 46, 14, 75, 47],
			[49, 54, 24, 10, 55, 25],
			[24, 45, 15, 46, 46, 16],
			[4, 152, 122, 18, 153, 123],
			[13, 74, 46, 32, 75, 47],
			[48, 54, 24, 14, 55, 25],
			[42, 45, 15, 32, 46, 16],
			[20, 147, 117, 4, 148, 118],
			[40, 75, 47, 7, 76, 48],
			[43, 54, 24, 22, 55, 25],
			[10, 45, 15, 67, 46, 16],
			[19, 148, 118, 6, 149, 119],
			[18, 75, 47, 31, 76, 48],
			[34, 54, 24, 34, 55, 25],
			[20, 45, 15, 61, 46, 16]
		];
		o.prototype.getRightType = function() {
			for (var t = 1; t < 41; t++) {
				var e = y[4 * (t - 1) + this.errorCorrectLevel];
				if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);
				for (var i = e.length / 3, n = 0, s = 0; s < i; s++) {
					var o = e[3 * s + 0],
						a = e[3 * s + 2];
					n += a * o
				}
				var r = t > 9 ? 2 : 1;
				if (this.utf8bytes.length + r < n || 40 == t) {
					this.typeNumber = t, this.rsBlock = e, this.totalDataCount = n;
					break
				}
			}
		}, r.prototype = {
			get: function(t) {
				var e = Math.floor(t / 8);
				return this.buffer[e] >>> 7 - t % 8 & 1
			},
			put: function(t, e) {
				for (var i = 0; i < e; i++) this.putBit(t >>> e - i - 1 & 1)
			},
			putBit: function(t) {
				var e = Math.floor(this.length / 8);
				this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
			}
		}, o.prototype = {
			constructor: o,
			getModuleCount: function() {
				return this.moduleCount
			},
			make: function() {
				this.getRightType(), this.dataCache = this.createData(), this.createQrcode()
			},
			makeImpl: function(t) {
				this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
				for (var e = 0; e < this.moduleCount; e++) this.modules[e] = new Array(this.moduleCount);
				this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(!0, t), this.typeNumber >= 7 && this.setupTypeNumber(!0), this.mapData(this.dataCache, t)
			},
			setupPositionProbePattern: function(t, e) {
				for (var i = -1; i <= 7; i++) if (!(t + i <= -1 || this.moduleCount <= t + i)) for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4 ? this.modules[t + i][e + n] = !0 : this.modules[t + i][e + n] = !1)
			},
			createQrcode: function() {
				for (var t = 0, e = 0, i = null, n = 0; n < 8; n++) {
					this.makeImpl(n);
					var s = f.getLostPoint(this);
					(0 == n || t > s) && (t = s, e = n, i = this.modules)
				}
				this.modules = i, this.setupTypeInfo(!1, e), this.typeNumber >= 7 && this.setupTypeNumber(!1)
			},
			setupTimingPattern: function() {
				for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0, null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0))
			},
			setupPositionAdjustPattern: function() {
				for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
					var n = t[e],
						s = t[i];
					if (null == this.modules[n][s]) for (var o = -2; o <= 2; o++) for (var a = -2; a <= 2; a++) o == -2 || 2 == o || a == -2 || 2 == a || 0 == o && 0 == a ? this.modules[n + o][s + a] = !0 : this.modules[n + o][s + a] = !1
				}
			},
			setupTypeNumber: function(t) {
				for (var e = f.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
					var n = !t && 1 == (e >> i & 1);
					this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n, this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
				}
			},
			setupTypeInfo: function(t, e) {
				for (var i = p[this.errorCorrectLevel] << 3 | e, n = f.getBCHTypeInfo(i), s = 0; s < 15; s++) {
					var o = !t && 1 == (n >> s & 1);
					s < 6 ? this.modules[s][8] = o : s < 8 ? this.modules[s + 1][8] = o : this.modules[this.moduleCount - 15 + s][8] = o;
					var o = !t && 1 == (n >> s & 1);
					s < 8 ? this.modules[8][this.moduleCount - s - 1] = o : s < 9 ? this.modules[8][15 - s - 1 + 1] = o : this.modules[8][15 - s - 1] = o
				}
				this.modules[this.moduleCount - 8][8] = !t
			},
			createData: function() {
				var t = new r,
					e = this.typeNumber > 9 ? 16 : 8;
				t.put(4, 4), t.put(this.utf8bytes.length, e);
				for (var i = 0, n = this.utf8bytes.length; i < n; i++) t.put(this.utf8bytes[i], 8);
				for (t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4); t.length % 8 != 0;) t.putBit(!1);
				for (;;) {
					if (t.length >= 8 * this.totalDataCount) break;
					if (t.put(o.PAD0, 8), t.length >= 8 * this.totalDataCount) break;
					t.put(o.PAD1, 8)
				}
				return this.createBytes(t)
			},
			createBytes: function(t) {
				for (var e = 0, i = 0, n = 0, s = this.rsBlock.length / 3, o = new Array, r = 0; r < s; r++) for (var l = this.rsBlock[3 * r + 0], c = this.rsBlock[3 * r + 1], u = this.rsBlock[3 * r + 2], h = 0; h < l; h++) o.push([u, c]);
				for (var d = new Array(o.length), p = new Array(o.length), m = 0; m < o.length; m++) {
					var v = o[m][0],
						g = o[m][1] - v;
					i = Math.max(i, v), n = Math.max(n, g), d[m] = new Array(v);
					for (var r = 0; r < d[m].length; r++) d[m][r] = 255 & t.buffer[r + e];
					e += v;
					var y = f.getErrorCorrectPolynomial(g),
						w = new a(d[m], y.getLength() - 1),
						b = w.mod(y);
					p[m] = new Array(y.getLength() - 1);
					for (var r = 0; r < p[m].length; r++) {
						var T = r + b.getLength() - p[m].length;
						p[m][r] = T >= 0 ? b.get(T) : 0
					}
				}
				for (var x = new Array(this.totalDataCount), C = 0, r = 0; r < i; r++) for (var m = 0; m < o.length; m++) r < d[m].length && (x[C++] = d[m][r]);
				for (var r = 0; r < n; r++) for (var m = 0; m < o.length; m++) r < p[m].length && (x[C++] = p[m][r]);
				return x
			},
			mapData: function(t, e) {
				for (var i = -1, n = this.moduleCount - 1, s = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--;) {
					for (var r = 0; r < 2; r++) if (null == this.modules[n][a - r]) {
						var l = !1;
						o < t.length && (l = 1 == (t[o] >>> s & 1));
						var c = f.getMask(e, n, a - r);
						c && (l = !l), this.modules[n][a - r] = l, s--, s == -1 && (o++, s = 7)
					}
					if (n += i, n < 0 || this.moduleCount <= n) {
						n -= i, i = -i;
						break
					}
				}
			}
		}, o.PAD0 = 236, o.PAD1 = 17;
		for (var p = [1, 0, 3, 2], m = {
			PATTERN000: 0,
			PATTERN001: 1,
			PATTERN010: 2,
			PATTERN011: 3,
			PATTERN100: 4,
			PATTERN101: 5,
			PATTERN110: 6,
			PATTERN111: 7
		}, f = {
			PATTERN_POSITION_TABLE: [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170]
			],
			G15: 1335,
			G18: 7973,
			G15_MASK: 21522,
			getBCHTypeInfo: function(t) {
				for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
				return (t << 10 | e) ^ f.G15_MASK
			},
			getBCHTypeNumber: function(t) {
				for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
				return t << 12 | e
			},
			getBCHDigit: function(t) {
				for (var e = 0; 0 != t;) e++, t >>>= 1;
				return e
			},
			getPatternPosition: function(t) {
				return f.PATTERN_POSITION_TABLE[t - 1]
			},
			getMask: function(t, e, i) {
				switch (t) {
				case m.PATTERN000:
					return (e + i) % 2 == 0;
				case m.PATTERN001:
					return e % 2 == 0;
				case m.PATTERN010:
					return i % 3 == 0;
				case m.PATTERN011:
					return (e + i) % 3 == 0;
				case m.PATTERN100:
					return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
				case m.PATTERN101:
					return e * i % 2 + e * i % 3 == 0;
				case m.PATTERN110:
					return (e * i % 2 + e * i % 3) % 2 == 0;
				case m.PATTERN111:
					return (e * i % 3 + (e + i) % 2) % 2 == 0;
				default:
					throw new Error("bad maskPattern:" + t)
				}
			},
			getErrorCorrectPolynomial: function(t) {
				for (var e = new a([1], 0), i = 0; i < t; i++) e = e.multiply(new a([1, v.gexp(i)], 0));
				return e
			},
			getLostPoint: function(t) {
				for (var e = t.getModuleCount(), i = 0, n = 0, s = 0; s < e; s++) for (var o = 0, a = t.modules[s][0], r = 0; r < e; r++) {
					var l = t.modules[s][r];
					if (r < e - 6 && l && !t.modules[s][r + 1] && t.modules[s][r + 2] && t.modules[s][r + 3] && t.modules[s][r + 4] && !t.modules[s][r + 5] && t.modules[s][r + 6] && (r < e - 10 ? t.modules[s][r + 7] && t.modules[s][r + 8] && t.modules[s][r + 9] && t.modules[s][r + 10] && (i += 40) : r > 3 && t.modules[s][r - 1] && t.modules[s][r - 2] && t.modules[s][r - 3] && t.modules[s][r - 4] && (i += 40)), s < e - 1 && r < e - 1) {
						var c = 0;
						l && c++, t.modules[s + 1][r] && c++, t.modules[s][r + 1] && c++, t.modules[s + 1][r + 1] && c++, 0 != c && 4 != c || (i += 3)
					}
					a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1), l && n++
				}
				for (var r = 0; r < e; r++) for (var o = 0, a = t.modules[0][r], s = 0; s < e; s++) {
					var l = t.modules[s][r];
					s < e - 6 && l && !t.modules[s + 1][r] && t.modules[s + 2][r] && t.modules[s + 3][r] && t.modules[s + 4][r] && !t.modules[s + 5][r] && t.modules[s + 6][r] && (s < e - 10 ? t.modules[s + 7][r] && t.modules[s + 8][r] && t.modules[s + 9][r] && t.modules[s + 10][r] && (i += 40) : s > 3 && t.modules[s - 1][r] && t.modules[s - 2][r] && t.modules[s - 3][r] && t.modules[s - 4][r] && (i += 40)), a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1)
				}
				var u = Math.abs(100 * n / e / e - 50) / 5;
				return i += 10 * u
			}
		}, v = {
			glog: function(t) {
				if (t < 1) throw new Error("glog(" + t + ")");
				return v.LOG_TABLE[t]
			},
			gexp: function(t) {
				for (; t < 0;) t += 255;
				for (; t >= 256;) t -= 255;
				return v.EXP_TABLE[t]
			},
			EXP_TABLE: new Array(256),
			LOG_TABLE: new Array(256)
		}, g = 0; g < 8; g++) v.EXP_TABLE[g] = 1 << g;
		for (var g = 8; g < 256; g++) v.EXP_TABLE[g] = v.EXP_TABLE[g - 4] ^ v.EXP_TABLE[g - 5] ^ v.EXP_TABLE[g - 6] ^ v.EXP_TABLE[g - 8];
		for (var g = 0; g < 255; g++) v.LOG_TABLE[v.EXP_TABLE[g]] = g;
		a.prototype = {
			get: function(t) {
				return this.num[t]
			},
			getLength: function() {
				return this.num.length
			},
			multiply: function(t) {
				for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < t.getLength(); n++) e[i + n] ^= v.gexp(v.glog(this.get(i)) + v.glog(t.get(n)));
				return new a(e, 0)
			},
			mod: function(t) {
				var e = this.getLength(),
					i = t.getLength();
				if (e - i < 0) return this;
				for (var n = new Array(e), s = 0; s < e; s++) n[s] = this.get(s);
				for (; n.length >= i;) {
					for (var o = v.glog(n[0]) - v.glog(t.get(0)), s = 0; s < t.getLength(); s++) n[s] ^= v.gexp(v.glog(t.get(s)) + o);
					for (; 0 == n[0];) n.shift()
				}
				return new a(n, 0)
			}
		}, y = [
			[1, 26, 19],
			[1, 26, 16],
			[1, 26, 13],
			[1, 26, 9],
			[1, 44, 34],
			[1, 44, 28],
			[1, 44, 22],
			[1, 44, 16],
			[1, 70, 55],
			[1, 70, 44],
			[2, 35, 17],
			[2, 35, 13],
			[1, 100, 80],
			[2, 50, 32],
			[2, 50, 24],
			[4, 25, 9],
			[1, 134, 108],
			[2, 67, 43],
			[2, 33, 15, 2, 34, 16],
			[2, 33, 11, 2, 34, 12],
			[2, 86, 68],
			[4, 43, 27],
			[4, 43, 19],
			[4, 43, 15],
			[2, 98, 78],
			[4, 49, 31],
			[2, 32, 14, 4, 33, 15],
			[4, 39, 13, 1, 40, 14],
			[2, 121, 97],
			[2, 60, 38, 2, 61, 39],
			[4, 40, 18, 2, 41, 19],
			[4, 40, 14, 2, 41, 15],
			[2, 146, 116],
			[3, 58, 36, 2, 59, 37],
			[4, 36, 16, 4, 37, 17],
			[4, 36, 12, 4, 37, 13],
			[2, 86, 68, 2, 87, 69],
			[4, 69, 43, 1, 70, 44],
			[6, 43, 19, 2, 44, 20],
			[6, 43, 15, 2, 44, 16],
			[4, 101, 81],
			[1, 80, 50, 4, 81, 51],
			[4, 50, 22, 4, 51, 23],
			[3, 36, 12, 8, 37, 13],
			[2, 116, 92, 2, 117, 93],
			[6, 58, 36, 2, 59, 37],
			[4, 46, 20, 6, 47, 21],
			[7, 42, 14, 4, 43, 15],
			[4, 133, 107],
			[8, 59, 37, 1, 60, 38],
			[8, 44, 20, 4, 45, 21],
			[12, 33, 11, 4, 34, 12],
			[3, 145, 115, 1, 146, 116],
			[4, 64, 40, 5, 65, 41],
			[11, 36, 16, 5, 37, 17],
			[11, 36, 12, 5, 37, 13],
			[5, 109, 87, 1, 110, 88],
			[5, 65, 41, 5, 66, 42],
			[5, 54, 24, 7, 55, 25],
			[11, 36, 12],
			[5, 122, 98, 1, 123, 99],
			[7, 73, 45, 3, 74, 46],
			[15, 43, 19, 2, 44, 20],
			[3, 45, 15, 13, 46, 16],
			[1, 135, 107, 5, 136, 108],
			[10, 74, 46, 1, 75, 47],
			[1, 50, 22, 15, 51, 23],
			[2, 42, 14, 17, 43, 15],
			[5, 150, 120, 1, 151, 121],
			[9, 69, 43, 4, 70, 44],
			[17, 50, 22, 1, 51, 23],
			[2, 42, 14, 19, 43, 15],
			[3, 141, 113, 4, 142, 114],
			[3, 70, 44, 11, 71, 45],
			[17, 47, 21, 4, 48, 22],
			[9, 39, 13, 16, 40, 14],
			[3, 135, 107, 5, 136, 108],
			[3, 67, 41, 13, 68, 42],
			[15, 54, 24, 5, 55, 25],
			[15, 43, 15, 10, 44, 16],
			[4, 144, 116, 4, 145, 117],
			[17, 68, 42],
			[17, 50, 22, 6, 51, 23],
			[19, 46, 16, 6, 47, 17],
			[2, 139, 111, 7, 140, 112],
			[17, 74, 46],
			[7, 54, 24, 16, 55, 25],
			[34, 37, 13],
			[4, 151, 121, 5, 152, 122],
			[4, 75, 47, 14, 76, 48],
			[11, 54, 24, 14, 55, 25],
			[16, 45, 15, 14, 46, 16],
			[6, 147, 117, 4, 148, 118],
			[6, 73, 45, 14, 74, 46],
			[11, 54, 24, 16, 55, 25],
			[30, 46, 16, 2, 47, 17],
			[8, 132, 106, 4, 133, 107],
			[8, 75, 47, 13, 76, 48],
			[7, 54, 24, 22, 55, 25],
			[22, 45, 15, 13, 46, 16],
			[10, 142, 114, 2, 143, 115],
			[19, 74, 46, 4, 75, 47],
			[28, 50, 22, 6, 51, 23],
			[33, 46, 16, 4, 47, 17],
			[8, 152, 122, 4, 153, 123],
			[22, 73, 45, 3, 74, 46],
			[8, 53, 23, 26, 54, 24],
			[12, 45, 15, 28, 46, 16],
			[3, 147, 117, 10, 148, 118],
			[3, 73, 45, 23, 74, 46],
			[4, 54, 24, 31, 55, 25],
			[11, 45, 15, 31, 46, 16],
			[7, 146, 116, 7, 147, 117],
			[21, 73, 45, 7, 74, 46],
			[1, 53, 23, 37, 54, 24],
			[19, 45, 15, 26, 46, 16],
			[5, 145, 115, 10, 146, 116],
			[19, 75, 47, 10, 76, 48],
			[15, 54, 24, 25, 55, 25],
			[23, 45, 15, 25, 46, 16],
			[13, 145, 115, 3, 146, 116],
			[2, 74, 46, 29, 75, 47],
			[42, 54, 24, 1, 55, 25],
			[23, 45, 15, 28, 46, 16],
			[17, 145, 115],
			[10, 74, 46, 23, 75, 47],
			[10, 54, 24, 35, 55, 25],
			[19, 45, 15, 35, 46, 16],
			[17, 145, 115, 1, 146, 116],
			[14, 74, 46, 21, 75, 47],
			[29, 54, 24, 19, 55, 25],
			[11, 45, 15, 46, 46, 16],
			[13, 145, 115, 6, 146, 116],
			[14, 74, 46, 23, 75, 47],
			[44, 54, 24, 7, 55, 25],
			[59, 46, 16, 1, 47, 17],
			[12, 151, 121, 7, 152, 122],
			[12, 75, 47, 26, 76, 48],
			[39, 54, 24, 14, 55, 25],
			[22, 45, 15, 41, 46, 16],
			[6, 151, 121, 14, 152, 122],
			[6, 75, 47, 34, 76, 48],
			[46, 54, 24, 10, 55, 25],
			[2, 45, 15, 64, 46, 16],
			[17, 152, 122, 4, 153, 123],
			[29, 74, 46, 14, 75, 47],
			[49, 54, 24, 10, 55, 25],
			[24, 45, 15, 46, 46, 16],
			[4, 152, 122, 18, 153, 123],
			[13, 74, 46, 32, 75, 47],
			[48, 54, 24, 14, 55, 25],
			[42, 45, 15, 32, 46, 16],
			[20, 147, 117, 4, 148, 118],
			[40, 75, 47, 7, 76, 48],
			[43, 54, 24, 22, 55, 25],
			[10, 45, 15, 67, 46, 16],
			[19, 148, 118, 6, 149, 119],
			[18, 75, 47, 31, 76, 48],
			[34, 54, 24, 34, 55, 25],
			[20, 45, 15, 61, 46, 16]
		], o.prototype.getRightType = function() {
			for (var t = 1; t < 41; t++) {
				var e = y[4 * (t - 1) + this.errorCorrectLevel];
				if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);
				for (var i = e.length / 3, n = 0, s = 0; s < i; s++) {
					var o = e[3 * s + 0],
						a = e[3 * s + 2];
					n += a * o
				}
				var r = t > 9 ? 2 : 1;
				if (this.utf8bytes.length + r < n || 40 == t) {
					this.typeNumber = t, this.rsBlock = e, this.totalDataCount = n;
					break
				}
			}
		}, r.prototype = {
			get: function(t) {
				var e = Math.floor(t / 8);
				return this.buffer[e] >>> 7 - t % 8 & 1
			},
			put: function(t, e) {
				for (var i = 0; i < e; i++) this.putBit(t >>> e - i - 1 & 1)
			},
			putBit: function(t) {
				var e = Math.floor(this.length / 8);
				this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
			}
		}, c.fn.qrcode = function(t) {
			return this.each(function() {
				c(this).append(new d(t))
			})
		}, t.exports = u.qrcode = d
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = function(t, e) {
				var i = this;
				this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.sticked = null, this.inited = null, this.$holder = void 0, this.$window = n(window).on("scroll.sticky.amui", s.utils.debounce(n.proxy(this.checkPosition, this), 10)).on("resize.sticky.amui orientationchange.sticky.amui", s.utils.debounce(function() {
					i.reset(!0, function() {
						i.checkPosition()
					})
				}, 50)).on("load.sticky.amui", n.proxy(this.checkPosition, this)), this.offset = this.$element.offset(), this.init()
			};
		o.DEFAULTS = {
			top: 0,
			bottom: 0,
			animation: "",
			className: {
				sticky: "am-sticky",
				resetting: "am-sticky-resetting",
				stickyBtm: "am-sticky-bottom",
				animationRev: "am-animation-reverse"
			}
		}, o.prototype.init = function() {
			var t = this.check();
			if (!t) return !1;
			var e = this.$element,
				i = "";
			n.each(e.css(["marginTop", "marginRight", "marginBottom", "marginLeft"]), function(t, e) {
				return i += " " + e
			});
			var s = n('<div class="am-sticky-placeholder"></div>').css({
				height: "absolute" !== e.css("position") ? e.outerHeight() : "",
				"float": "none" != e.css("float") ? e.css("float") : "",
				margin: i
			});
			return this.$holder = e.css("margin", 0).wrap(s).parent(), this.inited = 1, !0
		}, o.prototype.reset = function(t, e) {
			var i = this.options,
				n = this.$element,
				o = i.animation ? " am-animation-" + i.animation : "",
				a = function() {
					n.css({
						position: "",
						top: "",
						width: "",
						left: "",
						margin: 0
					}), n.removeClass([o, i.className.animationRev, i.className.sticky, i.className.resetting].join(" ")), this.animating = !1, this.sticked = !1, this.offset = n.offset(), e && e()
				}.bind(this);
			n.addClass(i.className.resetting), !t && i.animation && s.support.animation ? (this.animating = !0, n.removeClass(o).one(s.support.animation.end, function() {
				a()
			}).width(), n.addClass(o + " " + i.className.animationRev)) : a()
		}, o.prototype.check = function() {
			if (!this.$element.is(":visible")) return !1;
			var t = this.options.media;
			if (t) switch (typeof t) {
			case "number":
				if (window.innerWidth < t) return !1;
				break;
			case "string":
				if (window.matchMedia && !window.matchMedia(t).matches) return !1
			}
			return !0
		}, o.prototype.checkPosition = function() {
			if (!this.inited) {
				var t = this.init();
				if (!t) return
			}
			var e = this.options,
				i = this.$window.scrollTop(),
				n = e.top,
				s = e.bottom,
				o = this.$element,
				a = e.animation ? " am-animation-" + e.animation : "",
				r = [e.className.sticky, a].join(" ");
			"function" == typeof s && (s = s(this.$element));
			var l = i > this.$holder.offset().top;
			!this.sticked && l ? o.addClass(r) : this.sticked && !l && this.reset(), this.$holder.css({
				height: o.is(":visible") && "absolute" !== o.css("position") ? o.outerHeight() : ""
			}), l && o.css({
				top: n,
				left: this.$holder.offset().left,
				width: this.$holder.width()
			}), this.sticked = l
		}, s.plugin("sticky", o), n(window).on("load", function() {
			n("[data-am-sticky]").sticky()
		}), t.exports = o
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			var e, i = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var n = s(this),
					a = n.is(".am-tabs") && n || n.closest(".am-tabs"),
					r = a.data("amui.tabs"),
					l = s.extend({}, o.utils.parseOptions(n.data("amTabs")), s.isPlainObject(t) && t);
				r || a.data("amui.tabs", r = new c(a[0], l)), "string" == typeof t && ("open" === t && n.is(".am-tabs-nav a") ? r.open(n) : e = "function" == typeof r[t] ? r[t].apply(r, i) : r[t])
			}), void 0 === e ? this : e
		}
		var s = i(1),
			o = i(2),
			a = i(3),
			r = o.support.transition,
			l = o.support.animation,
			c = function(t, e) {
				this.$element = s(t), this.options = s.extend({}, c.DEFAULTS, e || {}), this.transitioning = this.activeIndex = null, this.refresh(), this.init()
			};
		c.DEFAULTS = {
			selector: {
				nav: "> .am-tabs-nav",
				content: "> .am-tabs-bd",
				panel: "> .am-tab-panel"
			},
			activeClass: "am-active"
		}, c.prototype.refresh = function() {
			var t = this.options.selector;
			this.$tabNav = this.$element.find(t.nav), this.$navs = this.$tabNav.find("a"), this.$content = this.$element.find(t.content), this.$tabPanels = this.$content.find(t.panel);
			var e = this.$tabNav.find("> ." + this.options.activeClass);
			1 !== e.length ? this.open(0) : this.activeIndex = this.$navs.index(e.children("a"))
		}, c.prototype.init = function() {
			var t = this,
				e = this.options;
			if (this.$element.on("click.tabs.amui", e.selector.nav + " a", function(e) {
				e.preventDefault(), t.open(s(this))
			}), !e.noSwipe) {
				if (!this.$content.length) return this;
				var i = new a.Manager(this.$content[0]),
					n = new a.Swipe({
						direction: a.DIRECTION_HORIZONTAL
					});
				i.add(n), i.on("swipeleft", o.utils.debounce(function(e) {
					e.preventDefault(), t.goTo("next")
				}, 100)), i.on("swiperight", o.utils.debounce(function(e) {
					e.preventDefault(), t.goTo("prev")
				}, 100)), this._hammer = i
			}
		}, c.prototype.open = function(t) {
			var e = this.options.activeClass,
				i = "number" == typeof t ? t : this.$navs.index(s(t));
			if (t = "number" == typeof t ? this.$navs.eq(i) : s(t), t && t.length && !this.transitioning && !t.parent("li").hasClass(e)) {
				var n = this.$tabNav,
					o = t.attr("href"),
					a = /^#.+$/,
					r = a.test(o) && this.$content.find(o) || this.$tabPanels.eq(i),
					l = n.find("." + e + " a")[0],
					c = s.Event("open.tabs.amui", {
						relatedTarget: l
					});
				t.trigger(c), c.isDefaultPrevented() || (this.activate(t.closest("li"), n), this.activate(r, this.$content, function() {
					t.trigger({
						type: "opened.tabs.amui",
						relatedTarget: l
					})
				}), this.activeIndex = i)
			}
		}, c.prototype.activate = function(t, e, i) {
			this.transitioning = !0;
			var n = this.options.activeClass,
				o = e.find("> ." + n),
				a = i && r && !! o.length;
			o.removeClass(n + " am-in"), t.addClass(n), a ? (t.redraw(), t.addClass("am-in")) : t.removeClass("am-fade");
			var l = s.proxy(function() {
				i && i(), this.transitioning = !1
			}, this);
			a && !this.$content.is(".am-tabs-bd-ofv") ? o.one(r.end, l) : l()
		}, c.prototype.goTo = function(t) {
			var e = this.activeIndex,
				i = "next" === t,
				n = i ? "am-animation-right-spring" : "am-animation-left-spring";
			if (i && e + 1 >= this.$navs.length || !i && 0 === e) {
				var s = this.$tabPanels.eq(e);
				l && s.addClass(n).on(l.end, function() {
					s.removeClass(n)
				})
			} else this.open(i ? e + 1 : e - 1)
		}, c.prototype.destroy = function() {
			this.$element.off(".tabs.amui"), a.off(this.$content[0], "swipeleft swiperight"), this._hammer && this._hammer.destroy(), s.removeData(this.$element, "amui.tabs")
		}, s.fn.tabs = n, o.ready(function(t) {
			s("[data-am-tabs]", t).tabs()
		}), s(document).on("click.tabs.amui.data-api", "[data-am-tabs] .am-tabs-nav a", function(t) {
			t.preventDefault(), n.call(s(this), "open")
		}), t.exports = o.tabs = c
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = function(t, e) {
				this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.init()
			};
		o.DEFAULTS = {
			checkboxClass: "am-ucheck-checkbox",
			radioClass: "am-ucheck-radio",
			checkboxTpl: '<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>',
			radioTpl: '<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>'
		}, o.prototype.init = function() {
			var t = this.$element,
				e = t[0],
				i = this.options;
			"checkbox" === e.type ? t.addClass(i.checkboxClass).after(i.checkboxTpl) : "radio" === e.type && t.addClass(i.radioClass).after(i.radioTpl)
		}, o.prototype.check = function() {
			this.$element.prop("checked", !0).trigger("change.ucheck.amui").trigger("checked.ucheck.amui")
		}, o.prototype.uncheck = function() {
			this.$element.prop("checked", !1).trigger("change").trigger("unchecked.ucheck.amui")
		}, o.prototype.toggle = function() {
			this.$element.prop("checked", function(t, e) {
				return !e
			}).trigger("change.ucheck.amui").trigger("toggled.ucheck.amui")
		}, o.prototype.disable = function() {
			this.$element.prop("disabled", !0).trigger("change.ucheck.amui").trigger("disabled.ucheck.amui")
		}, o.prototype.enable = function() {
			this.$element.prop("disabled", !1), this.$element.trigger("change.ucheck.amui").trigger("enabled.ucheck.amui")
		}, o.prototype.destroy = function() {
			this.$element.removeData("amui.ucheck").removeClass(this.options.checkboxClass + " " + this.options.radioClass).next(".am-ucheck-icons").remove().end().trigger("destroyed.ucheck.amui")
		}, s.plugin("uCheck", o, {
			after: function() {
				s.support.touch && this.parent().hover(function() {
					n(this).addClass("am-nohover")
				}, function() {
					n(this).removeClass("am-nohover")
				})
			}
		}), s.ready(function(t) {
			n("[data-am-ucheck]", t).uCheck()
		}), t.exports = o
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = function(t, e) {
				this.options = n.extend({}, o.DEFAULTS, e), this.options.patterns = n.extend({}, o.patterns, this.options.patterns);
				var i = this.options.locales;
				!o.validationMessages[i] && (this.options.locales = "zh_CN"), this.$element = n(t), this.init()
			};
		o.DEFAULTS = {
			debug: !1,
			locales: "zh_CN",
			H5validation: !1,
			H5inputType: ["email", "url", "number"],
			patterns: {},
			patternClassPrefix: "js-pattern-",
			activeClass: "am-active",
			inValidClass: "am-field-error",
			validClass: "am-field-valid",
			validateOnSubmit: !0,
			alwaysRevalidate: !1,
			allFields: ":input:not(:submit, :button, :disabled, .am-novalidate)",
			ignore: ":hidden:not([data-am-selected], .am-validate)",
			customEvents: "validate",
			keyboardFields: ":input:not(:submit, :button, :disabled, .am-novalidate)",
			keyboardEvents: "focusout, change",
			activeKeyup: !1,
			textareaMaxlenthKeyup: !0,
			pointerFields: 'input[type="range"]:not(:disabled, .am-novalidate), input[type="radio"]:not(:disabled, .am-novalidate), input[type="checkbox"]:not(:disabled, .am-novalidate), select:not(:disabled, .am-novalidate), option:not(:disabled, .am-novalidate)',
			pointerEvents: "click",
			onValid: function(t) {},
			onInValid: function(t) {},
			markValid: function(t) {
				var e = this.options,
					i = n(t.field),
					s = i.closest(".am-form-group");
				i.addClass(e.validClass).removeClass(e.inValidClass), s.addClass("am-form-success").removeClass("am-form-error"), e.onValid.call(this, t)
			},
			markInValid: function(t) {
				var e = this.options,
					i = n(t.field),
					s = i.closest(".am-form-group");
				i.addClass(e.inValidClass + " " + e.activeClass).removeClass(e.validClass), s.addClass("am-form-error").removeClass("am-form-success"), e.onInValid.call(this, t)
			},
			validate: function(t) {},
			submit: null
		}, o.VERSION = "2.7.2", o.patterns = {
			email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,
			url: /^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
			number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
			dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
			integer: /^-?\d+$/
		}, o.validationMessages = {
			zh_CN: {
				valueMissing: "\u8bf7\u586b\u5199\uff08\u9009\u62e9\uff09\u6b64\u5b57\u6bb5",
				customError: {
					tooShort: "\u81f3\u5c11\u586b\u5199 %s \u4e2a\u5b57\u7b26",
					checkedOverflow: "\u81f3\u591a\u9009\u62e9 %s \u9879",
					checkedUnderflow: "\u81f3\u5c11\u9009\u62e9 %s \u9879"
				},
				patternMismatch: "\u8bf7\u6309\u7167\u8981\u6c42\u7684\u683c\u5f0f\u586b\u5199",
				rangeOverflow: "\u8bf7\u586b\u5199\u5c0f\u4e8e\u7b49\u4e8e %s \u7684\u503c",
				rangeUnderflow: "\u8bf7\u586b\u5199\u5927\u4e8e\u7b49\u4e8e %s \u7684\u503c",
				stepMismatch: "",
				tooLong: "\u81f3\u591a\u586b\u5199 %s \u4e2a\u5b57\u7b26",
				typeMismatch: "\u8bf7\u6309\u7167\u8981\u6c42\u7684\u7c7b\u578b\u586b\u5199"
			}
		}, o.ERROR_MAP = {
			tooShort: "minlength",
			checkedOverflow: "maxchecked",
			checkedUnderflow: "minchecked",
			rangeOverflow: "max",
			rangeUnderflow: "min",
			tooLong: "maxlength"
		}, o.prototype.init = function() {
			function t(t) {
				var e = t.toString();
				return e.substring(1, e.length - 1)
			}
			function e(t, e, a) {
				var r = e.split(","),
					l = function(t) {
						i.validate(this)
					};
				a && (l = s.utils.debounce(l, a)), n.each(r, function(e, i) {
					o.on(i + ".validator.amui", t, l)
				})
			}
			var i = this,
				o = this.$element,
				a = this.options;
			return (!a.H5validation || !s.support.formValidation) && (o.attr("novalidate", "novalidate"), n.each(a.H5inputType, function(e, i) {
				var n = o.find("input[type=" + i + "]");
				n.attr("pattern") || n.is("[class*=" + a.patternClassPrefix + "]") || n.attr("pattern", t(a.patterns[i]))
			}), n.each(a.patterns, function(e, i) {
				var n = o.find("." + a.patternClassPrefix + e);
				!n.attr("pattern") && n.attr("pattern", t(i))
			}), o.on("submit.validator.amui", function(t) {
				if ("function" == typeof a.submit) return a.submit.call(i, t);
				if (a.validateOnSubmit) {
					var e = i.isFormValid();
					return "boolean" === n.type(e) ? e : !! o.data("amui.checked") || (n.when(e).then(function() {
						o.data("amui.checked", !0).submit()
					}, function() {
						o.data("amui.checked", !1).find("." + a.inValidClass).eq(0).focus()
					}), !1)
				}
			}), e(":input", a.customEvents), e(a.keyboardFields, a.keyboardEvents), e(a.pointerFields, a.pointerEvents), a.textareaMaxlenthKeyup && e("textarea[maxlength]", "keyup", 50), void(a.activeKeyup && e(".am-active", "keyup", 50)))
		}, o.prototype.isValid = function(t) {
			var e = n(t),
				i = this.options;
			return (void 0 === e.data("validity") || i.alwaysRevalidate) && this.validate(t), e.data("validity") && e.data("validity").valid
		}, o.prototype.validate = function(t) {
			var e = this,
				i = this.$element,
				s = this.options,
				o = n(t),
				a = o.data("equalTo");
			a && o.attr("pattern", "^" + i.find(a).val() + "$");
			var r = o.attr("pattern") || !1,
				l = new RegExp(r),
				c = null,
				u = null,
				h = o.is("[type=checkbox]") ? (u = i.find('input[name="' + t.name + '"]')).filter(":checked").length : o.is("[type=radio]") ? (c = this.$element.find('input[name="' + t.name + '"]')).filter(":checked").length > 0 : o.val();
			o = u && u.length ? u.first() : o;
			var d = void 0 !== o.attr("required") && "false" !== o.attr("required"),
				p = parseInt(o.attr("maxlength"), 10),
				m = parseInt(o.attr("minlength"), 10),
				f = Number(o.attr("min")),
				v = Number(o.attr("max")),
				g = this.createValidity({
					field: o[0],
					valid: !0
				});
			if (s.debug && window.console && (console.log("Validate: value -> [" + h + ", regex -> [" + l + "], required -> " + d), console.log("Regex test: " + l.test(h) + ", Pattern: " + r)), !isNaN(p) && h.length > p && (g.valid = !1, g.tooLong = !0), !isNaN(m) && h.length < m && (g.valid = !1, g.customError = "tooShort"), !isNaN(f) && Number(h) < f && (g.valid = !1, g.rangeUnderflow = !0), !isNaN(v) && Number(h) > v && (g.valid = !1, g.rangeOverflow = !0), d && !h) g.valid = !1, g.valueMissing = !0;
			else if ((u || o.is('select[multiple="multiple"]')) && h) {
				h = u ? h : h.length;
				var y = parseInt(o.attr("minchecked"), 10),
					w = parseInt(o.attr("maxchecked"), 10);
				!isNaN(y) && h < y && (g.valid = !1, g.customError = "checkedUnderflow"), !isNaN(w) && h > w && (g.valid = !1, g.customError = "checkedOverflow")
			} else r && !l.test(h) && h && (g.valid = !1, g.patternMismatch = !0);
			var b, T = function(t) {
					this.markField(t);
					var i = n.Event("validated.field.validator.amui");
					i.validity = t, o.trigger(i).data("validity", t);
					var s = c || u;
					return s && s.not(o).data("validity", t).each(function() {
						t.field = this, e.markField(t)
					}), t
				};
			if ("function" == typeof s.validate && (b = s.validate.call(this, g)), b) {
				var x = new n.Deferred;
				return o.data("amui.dfdValidity", x.promise()), n.when(b).always(function(t) {
					x[t.valid ? "resolve" : "reject"](t), T.call(e, t)
				})
			}
			T.call(this, g)
		}, o.prototype.markField = function(t) {
			var e = this.options,
				i = "mark" + (t.valid ? "" : "In") + "Valid";
			e[i] && e[i].call(this, t)
		}, o.prototype.validateForm = function() {
			var t = this,
				e = this.$element,
				i = this.options,
				s = e.find(i.allFields).not(i.ignore),
				o = [],
				a = !0,
				r = [],
				l = n([]),
				c = [],
				u = !1;
			e.trigger("validate.form.validator.amui");
			var h = s.filter(function(t) {
				var e;
				if ("INPUT" === this.tagName && "radio" === this.type) {
					if (e = this.name, o[e] === !0) return !1;
					o[e] = !0
				}
				return !0
			});
			h.each(function() {
				var i = n(this),
					s = t.isValid(this),
					o = i.data("validity");
				a = !! s && a, r.push(o), s || (l = l.add(n(this), e));
				var h = i.data("amui.dfdValidity");
				if (h) c.push(h), u = !0;
				else {
					var d = new n.Deferred;
					c.push(d.promise()), d[s ? "resolve" : "reject"](o)
				}
			});
			var d = {
				valid: a,
				$invalidFields: l,
				validity: r,
				promises: c,
				async: u
			};
			return e.trigger("validated.form.validator.amui", d), d
		}, o.prototype.isFormValid = function() {
			var t = this,
				e = this.validateForm(),
				i = function(e) {
					t.$element.trigger(e + ".validator.amui")
				};
			if (e.async) {
				var s = new n.Deferred;
				return n.when.apply(null, e.promises).then(function() {
					s.resolve(), i("valid")
				}, function() {
					s.reject(), i("invalid")
				}), s.promise()
			}
			if (!e.valid) {
				var o = e.$invalidFields.first();
				return o.is("[data-am-selected]") && (o = o.next(".am-selected").find(".am-selected-btn")), o.focus(), i("invalid"), !1
			}
			return i("valid"), !0
		}, o.prototype.createValidity = function(t) {
			return n.extend({
				customError: t.customError || !1,
				patternMismatch: t.patternMismatch || !1,
				rangeOverflow: t.rangeOverflow || !1,
				rangeUnderflow: t.rangeUnderflow || !1,
				stepMismatch: t.stepMismatch || !1,
				tooLong: t.tooLong || !1,
				typeMismatch: t.typeMismatch || !1,
				valid: t.valid || !0,
				valueMissing: t.valueMissing || !1
			}, t)
		}, o.prototype.getValidationMessage = function(t) {
			var e, i, s = o.validationMessages[this.options.locales],
				a = "%s",
				r = n(t.field);
			return (r.is('[type="checkbox"]') || r.is('[type="radio"]')) && (r = this.$element.find("[name=" + r.attr("name") + "]").first()), n.each(t, function(t, i) {
				return "field" === t || "valid" === t ? t : "customError" === t && i ? (e = i, s = s.customError, !1) : i === !0 ? (e = t, !1) : void 0
			}), i = s[e] || void 0, i && o.ERROR_MAP[e] && (i = i.replace(a, r.attr(o.ERROR_MAP[e]) || "\u89c4\u5b9a\u7684")), i
		}, o.prototype.removeMark = function() {
			this.$element.find(".am-form-success, .am-form-error, ." + this.options.inValidClass + ", ." + this.options.validClass).removeClass(["am-form-success", "am-form-error", this.options.inValidClass, this.options.validClass].join(" "))
		}, o.prototype.destroy = function() {
			this.removeMark(), this.$element.removeData("amui.validator amui.checked").off(".validator.amui").find(this.options.allFields).removeData("validity amui.dfdValidity")
		}, s.plugin("validator", o), s.ready(function(t) {
			n("[data-am-validator]", t).validator()
		}), t.exports = o
	}, function(t, e, i) {
		"use strict";
		var n = i(2),
			s = {
				get: function(t) {
					var e, i = encodeURIComponent(t) + "=",
						n = document.cookie.indexOf(i),
						s = null;
					return n > -1 && (e = document.cookie.indexOf(";", n), e == -1 && (e = document.cookie.length), s = decodeURIComponent(document.cookie.substring(n + i.length, e))), s
				},
				set: function(t, e, i, n, s, o) {
					var a = encodeURIComponent(t) + "=" + encodeURIComponent(e);
					i instanceof Date && (a += "; expires=" + i.toUTCString()), n && (a += "; path=" + n), s && (a += "; domain=" + s), o && (a += "; secure"), document.cookie = a
				},
				unset: function(t, e, i, n) {
					this.set(t, "", new Date(0), e, i, n)
				}
			};
		n.utils = n.utils || {}, t.exports = n.utils.cookie = s
	}, function(t, e, i) {
		"use strict";
		var n = i(2),
			s = function() {
				var t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
					e = function() {
						for (var t, e, i = [
							["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
							["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
							["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
							["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
							["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
						], n = 0, s = i.length, o = {}; n < s; n++) if (t = i[n], t && t[1] in document) {
							for (n = 0, e = t.length; n < e; n++) o[i[0][n]] = t[n];
							return o
						}
						return !1
					}(),
					i = {
						request: function(i) {
							var n = e.requestFullscreen;
							i = i || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? i[n]() : i[n](t && Element.ALLOW_KEYBOARD_INPUT)
						},
						exit: function() {
							document[e.exitFullscreen]()
						},
						toggle: function(t) {
							this.isFullscreen ? this.exit() : this.request(t)
						},
						raw: e
					};
				return !!e && (Object.defineProperties(i, {
					isFullscreen: {
						get: function() {
							return !!document[e.fullscreenElement]
						}
					},
					element: {
						enumerable: !0,
						get: function() {
							return document[e.fullscreenElement]
						}
					},
					enabled: {
						enumerable: !0,
						get: function() {
							return !!document[e.fullscreenEnabled]
						}
					}
				}), i.VERSION = "3.0.0", i)
			}();
		t.exports = n.fullscreen = s
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2);
		s.support.geolocation = window.navigator && window.navigator.geolocation;
		var o = s.support.geolocation,
			a = function(t) {
				this.options = t || {}
			};
		a.MESSAGES = {
			unsupportedBrowser: "Browser does not support location services",
			permissionDenied: "You have rejected access to your location",
			positionUnavailable: "Unable to determine your location",
			timeout: "Service timeout has been reached"
		}, a.ERROR_CODE = {
			0: "unsupportedBrowser",
			1: "permissionDenied",
			2: "positionUnavailable",
			3: "timeout"
		}, a.prototype.get = function(t) {
			var e = this;
			t = n.extend({}, this.options, t);
			var i = new n.Deferred;
			return o ? this.watchID = o.getCurrentPosition(function(t) {
				i.resolve.call(e, t)
			}, function(t) {
				i.reject(a.MESSAGES[a.ERROR_CODE[t.code]])
			}, t) : i.reject(a.MESSAGES.unsupportedBrowser), i.promise()
		}, a.prototype.watch = function(t) {
			if (o && (t = n.extend({}, this.options, t), n.isFunction(t.done))) {
				this.clearWatch();
				var e = n.isFunction(t.fail) ? t.fail : null;
				return this.watchID = o.watchPosition(t.done, e, t), this.watchID
			}
		}, a.prototype.clearWatch = function() {
			o && this.watchID && (o.clearWatch(this.watchID), this.watchID = null)
		}, t.exports = s.Geolocation = a
	}, function(t, e, i) {
		(function(e) {
			"use strict";

			function n() {
				try {
					return l in r && r[l]
				} catch (t) {
					return !1
				}
			}
			var s, o = i(2),
				a = {},
				r = "undefined" != typeof window ? window : e,
				l = "localStorage";
			a.disabled = !1, a.version = "1.3.20", a.set = function(t, e) {}, a.get = function(t, e) {}, a.has = function(t) {
				return void 0 !== a.get(t)
			}, a.remove = function(t) {}, a.clear = function() {}, a.transact = function(t, e, i) {
				null == i && (i = e, e = null), null == e && (e = {});
				var n = a.get(t, e);
				i(n), a.set(t, n)
			}, a.getAll = function() {}, a.forEach = function() {}, a.serialize = function(t) {
				return JSON.stringify(t)
			}, a.deserialize = function(t) {
				if ("string" == typeof t) try {
					return JSON.parse(t)
				} catch (e) {
					return t || void 0
				}
			}, n() && (s = r[l], a.set = function(t, e) {
				return void 0 === e ? a.remove(t) : (s.setItem(t, a.serialize(e)), e)
			}, a.get = function(t, e) {
				var i = a.deserialize(s.getItem(t));
				return void 0 === i ? e : i
			}, a.remove = function(t) {
				s.removeItem(t)
			}, a.clear = function() {
				s.clear()
			}, a.getAll = function() {
				var t = {};
				return a.forEach(function(e, i) {
					t[e] = i
				}), t
			}, a.forEach = function(t) {
				for (var e = 0; e < s.length; e++) {
					var i = s.key(e);
					t(i, a.get(i))
				}
			});
			try {
				var c = "__storejs__";
				a.set(c, c), a.get(c) != c && (a.disabled = !0), a.remove(c)
			} catch (u) {
				a.disabled = !0
			}
			a.enabled = !a.disabled, t.exports = o.store = a
		}).call(e, function() {
			return this
		}())
	}, function(t, e, i) {
		"use strict";

		function n() {
			var t = s('[data-am-widget="accordion"]'),
				e = {
					item: ".am-accordion-item",
					title: ".am-accordion-title",
					body: ".am-accordion-bd",
					disabled: ".am-disabled"
				};
			t.each(function(t, i) {
				var n = o.utils.parseOptions(s(i).attr("data-am-accordion")),
					a = s(i).find(e.title);
				a.on("click.accordion.amui", function() {
					var t = s(this).next(e.body),
						o = s(this).parent(e.item),
						a = t.data("amui.collapse");
					o.is(e.disabled) || (o.toggleClass("am-active"), a ? t.collapse("toggle") : t.collapse(), !n.multiple && s(i).children(".am-active").not(o).not(e.disabled).removeClass("am-active").find(e.body + ".am-in").collapse("close"))
				})
			})
		}
		var s = i(1),
			o = i(2);
		i(7), s(n), t.exports = o.accordion = {
			VERSION: "2.1.0",
			init: n
		}
	}, function(t, e) {
		"use strict";
		t.exports = {
			VERSION: "2.0.1"
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			var t = s(".ds-thread"),
				e = t.parent('[data-am-widget="duoshuo"]').attr("data-ds-short-name"),
				i = ("https:" == document.location.protocol ? "https:" : "http:") + "//static.duoshuo.com/embed.js";
			if (t.length && e && (window.duoshuoQuery = {
				short_name: e
			}, !s('script[src="' + i + '"]').length)) {
				var n = s("<script>", {
					async: !0,
					type: "text/javascript",
					src: i,
					charset: "utf-8"
				});
				s("body").append(n)
			}
		}
		var s = i(1),
			o = i(2);
		s(window).on("load", n), t.exports = o.duoshuo = {
			VERSION: "2.0.1",
			init: n
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			s(".am-figure").each(function(t, e) {
				var i, n = o.utils.parseOptions(s(e).attr("data-am-figure")),
					a = s(e);
				if (n.pureview) if ("auto" === n.pureview) {
					var r = s.isImgZoomAble(a.find("img")[0]);
					r && a.pureview()
				} else a.addClass("am-figure-zoomable").pureview();
				i = a.data("amui.pureview"), i && a.on("click", ":not(img)", function() {
					i.open(0)
				})
			})
		}
		var s = i(1),
			o = i(2);
		i(20), s.isImgZoomAble = function(t) {
			var e = new Image;
			e.src = t.src;
			var i = s(t).width() < e.width;
			return i && s(t).closest(".am-figure").addClass("am-figure-zoomable"), i
		}, s(window).on("load", n), t.exports = o.figure = {
			VERSION: "2.0.3",
			init: n
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			s(".am-footer-ysp").on("click", function() {
				s("#am-footer-modal").modal()
			});
			var t = o.utils.parseOptions(s(".am-footer").data("amFooter"));
			t.addToHS && a(), s('[data-rel="desktop"]').on("click", function(t) {
				t.preventDefault(), window.AMPlatform ? window.AMPlatform.util.goDesktop() : (r.set("allmobilize", "desktop", "", "/"), window.location = window.location)
			})
		}
		var s = i(1),
			o = i(2);
		i(15);
		var a = i(4),
			r = i(31);
		s(n), t.exports = o.footer = {
			VERSION: "3.1.2",
			init: n
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			var t = s('[data-am-widget="gallery"]');
			t.each(function() {
				var t = o.utils.parseOptions(s(this).attr("data-am-gallery"));
				t.pureview && ("object" == typeof t.pureview ? s(this).pureview(t.pureview) : s(this).pureview())
			})
		}
		var s = i(1),
			o = i(2);
		i(20), s(n), t.exports = o.gallery = {
			VERSION: "3.0.0",
			init: n
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			function t() {
				i[(n.scrollTop() > 50 ? "add" : "remove") + "Class"]("am-active")
			}
			var e = s('[data-am-widget="gotop"]'),
				i = e.filter(".am-gotop-fixed"),
				n = s(window);
			e.data("init") || (e.find("a").on("click", function(t) {
				t.preventDefault(), n.smoothScroll()
			}), t(), n.on("scroll.gotop.amui", o.utils.debounce(t, 100)), e.data("init", !0))
		}
		var s = i(1),
			o = i(2);
		i(23), s(n), t.exports = o.gotop = {
			VERSION: "4.0.2",
			init: n
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			s('[data-am-widget="header"]').each(function() {
				if (s(this).hasClass("am-header-fixed")) return s("body").addClass("am-with-fixed-header"), !1
			})
		}
		var s = i(1),
			o = i(2);
		s(n), t.exports = o.header = {
			VERSION: "2.0.0",
			init: n
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(2);
		t.exports = n.intro = {
			VERSION: "4.0.2",
			init: function() {}
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(2);
		t.exports = n.listNews = {
			VERSION: "4.0.0",
			init: function() {}
		}
	}, function(t, e, i) {
		function n(t) {
			var e = o("<script />", {
				id: "am-map-api-0"
			});
			o("body").append(e), e.on("load", function() {
				console.log("load");
				var e = o("<script/>", {
					id: "am-map-api-1"
				});
				o("body").append(e), e.on("load", function() {
					var e = document.createElement("script");
					e.textContent = "(" + t.toString() + ")();", o("body")[0].appendChild(e)
				}).attr("src", "http://api.map.baidu.com/getscript?type=quick&file=feature&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")
			}).attr("src", "http://api.map.baidu.com/getscript?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")
		}
		function s() {
			var t = document.querySelector(".am-map"),
				e = 116.331398,
				i = 39.897445,
				n = t.getAttribute("data-name"),
				s = t.getAttribute("data-address"),
				o = t.getAttribute("data-longitude") || e,
				a = t.getAttribute("data-latitude") || i,
				r = t.getAttribute("data-setZoom") || 17,
				l = t.getAttribute("data-icon"),
				c = new BMap.Map("bd-map"),
				u = new BMap.Point(o, a);
			c.centerAndZoom(u, r), t.getAttribute("data-zoomControl") && c.addControl(new BMap.ZoomControl), t.getAttribute("data-scaleControl") && c.addControl(new BMap.ScaleControl);
			var h = new BMap.Marker(u);
			l && h.setIcon(new BMap.Icon(l, new BMap.Size(40, 40)));
			var d = {
				width: 200,
				title: n
			},
				p = new BMap.InfoWindow("\u5730\u5740\uff1a" + s, d),
				m = new BMap.Geocoder;
			o == e && a == i ? m.getPoint(s, function(t) {
				t && (c.centerAndZoom(t, r), h.setPosition(t), c.addOverlay(h), c.openInfoWindow(p, t))
			}, "") : m.getLocation(u, function(t) {
				c.centerAndZoom(u, r), h.setPosition(u), c.addOverlay(h), s ? c.openInfoWindow(p, u) : c.openInfoWindow(new BMap.InfoWindow(s, d), u)
			})
		}
		var o = i(1),
			a = i(2),
			r = function() {
				o(".am-map").length && n(s)
			};
		o(r), t.exports = a.map = {
			VERSION: "2.0.2",
			init: r
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			if (s("#mechat").length) {
				var t = s('[data-am-widget="mechat"]'),
					e = t.data("am-mechat-unitid"),
					i = s("<script>", {
						charset: "utf-8",
						src: "http://mechatim.com/js/unit/button.js?id=" + e
					});
				s("body").append(i)
			}
		}
		var s = i(1),
			o = i(2);
		s(window).on("load", n), t.exports = o.mechat = {
			VERSION: "2.0.1",
			init: n
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			s = i(2),
			o = i(14);
		i(16), i(7);
		var a = function() {
				var t = n('[data-am-widget="menu"]');
				t.find(".am-menu-nav .am-parent > a").on("click", function(t) {
					t.preventDefault();
					var e = n(this),
						i = e.parent(),
						s = e.next(".am-menu-sub");
					i.toggleClass("am-open"), s.collapse("toggle"), i.siblings(".am-parent").removeClass("am-open").children(".am-menu-sub.am-in").collapse("close")
				}), t.filter("[data-am-menu-collapse]").find("> .am-menu-toggle").on("click", function(t) {
					t.preventDefault();
					var e = n(this),
						i = e.next(".am-menu-nav");
					e.toggleClass("am-active"), i.collapse("toggle")
				}), t.filter("[data-am-menu-offcanvas]").find("> .am-menu-toggle").on("click", function(t) {
					t.preventDefault();
					var e = n(this),
						i = e.next(".am-offcanvas");
					e.toggleClass("am-active"), i.offCanvas("open")
				});
				var e = '.am-offcanvas[data-dismiss-on="click"]',
					i = n(e);
				i.find("a").not(".am-parent>a").on("click", function(t) {
					n(this).parents(e).offCanvas("close")
				}), t.filter(".am-menu-one").each(function(t) {
					var e, i = n(this),
						s = n('<div class="am-menu-nav-sub-wrap"></div>'),
						a = 0,
						r = i.find(".am-menu-nav"),
						l = r.children("li");
					l.filter(".am-parent").each(function(t) {
						n(this).attr("data-rel", "#am-menu-sub-" + t), n(this).find(".am-menu-sub").attr("id", "am-menu-sub-" + t).appendTo(s)
					}), i.append(s), r.wrap('<div class="am-menu-nav-wrap" id="am-menu-' + t + '">'), l.each(function(t) {
						a += parseFloat(n(this).css("width"))
					}), r.width(a);
					var c = new o("#am-menu-" + t, {
						eventPassthrough: !0,
						scrollX: !0,
						scrollY: !1,
						preventDefault: !1
					});
					l.on("click", function() {
						var t = n(this);
						t.addClass("am-active").siblings().removeClass("am-active"), s.find(".am-menu-sub.am-in").collapse("close"), t.is(".am-parent") ? !t.hasClass(".am-open") && s.find(t.attr("data-rel")).collapse("open") : t.siblings().removeClass("am-open"), void 0 === e && (e = n(this).index() ? 0 : 1);
						var o, a = n(this).index() > e,
							l = n(this)[a ? "next" : "prev"](),
							u = l.offset() || n(this).offset(),
							h = i.offset(),
							d = parseInt(i.css("padding-left"));
						(a ? u.left + u.width > h.left + h.width : u.left < h.left) && (o = r.offset(), c.scrollTo(a ? h.width - u.left + o.left - u.width - d : o.left - u.left, 0, 400)), e = n(this).index()
					}), i.on("touchmove", function(t) {
						t.preventDefault()
					})
				})
			};
		n(a), t.exports = s.menu = {
			VERSION: "4.0.3",
			init: a
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			function t() {
				u.append(b), u.find("li").not(".am-navbar-more").slice(i() - 1).appendTo(w), n.append(w)
			}
			function e() {
				return i() >= d ? (b.hide(), void w.find("li").insertBefore(b)) : (!n.find(".am-navbar-actions").length && t(), b.show(), void(u.find("li").length < i() ? w.find("li").slice(0, i() - u.find("li").length).insertBefore(b) : u.find("li").length > i() && (w.find("li").length ? u.find("li").not(b).slice(i() - 1).insertBefore(w.find("li").first()) : u.find("li").not(b).slice(i() - 1).appendTo(w))))
			}
			function i() {
				return Math.floor((l.width() - f) / m)
			}
			var n = s('[data-am-widget="navbar"]');
			if (n.length) {
				var l = s(window),
					c = s("body"),
					u = n.find(".am-navbar-nav"),
					h = n.find("li"),
					d = h.length,
					p = u.attr("class") && parseInt(u.attr("class").match(/am-avg-sm-(\d+)/)[1]) || 3,
					m = 60,
					f = 16,
					v = h.filter("[data-am-navbar-share]"),
					g = h.filter("[data-am-navbar-qrcode]"),
					y = "am-active",
					w = s('<ul class="am-navbar-actions"></ul>', {
						id: o.utils.generateGUID("am-navbar-actions")
					}),
					b = s('<li class="am-navbar-labels am-navbar-more"><a href="javascript: void(0);"><span class="am-icon-angle-up"></span><span class="am-navbar-label">\u66f4\u591a</span></a></li>');
				if ("fixed" == n.css("position") && c.addClass("am-with-fixed-navbar"), g.length) {
					var T = "am-navbar-qrcode";
					if (C = s("#" + T), !C.length) {
						var x = g.attr("data-am-navbar-qrcode"),
							C = s('<div class="am-modal am-modal-no-btn" id=""><div class="am-modal-dialog"><div class="am-modal-bd"></div></div></div>', {
								id: T
							}),
							E = C.find(".am-modal-bd");
						if (x) E.html('<img src="' + x + '"/>');
						else {
							var S = new r({
								render: "canvas",
								correctLevel: 0,
								text: window.location.href,
								width: 200,
								height: 200,
								background: "#fff",
								foreground: "#000"
							});
							E.html(S)
						}
						c.append(C)
					}
					g.on("click", function(t) {
						t.preventDefault(), C.modal()
					})
				}
				d > p && d > i() && t(), n.on("click.navbar.amui", ".am-navbar-more", function(t) {
					t.preventDefault(), b[w.hasClass(y) ? "removeClass" : "addClass"](y), w.toggleClass(y)
				}), v.length && v.on("click.navbar.amui", function(t) {
					t.preventDefault(), a.toggle()
				}), l.on("resize.navbar.amui orientationchange.navbar.amui", o.utils.debounce(e, 150))
			}
		}
		var s = i(1),
			o = i(2),
			a = i(25),
			r = i(26);
		i(15), s(n), t.exports = o.navbar = {
			VERSION: "2.0.2",
			init: n
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(2);
		t.exports = n.pagination = {
			VERSION: "3.0.1"
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			var t = s('[data-am-widget="paragraph"]');
			t.each(function(t) {
				var e = s(this),
					i = o.utils.parseOptions(e.attr("data-am-paragraph")),
					n = t;
				i.pureview && e.pureview(), i.tableScrollable && e.find("table").each(function(t) {
					s(this).width() > s(window).width() && s(this).scrollTable(n + "-" + t)
				})
			})
		}
		var s = i(1),
			o = i(2),
			a = i(14);
		i(20), s.fn.scrollTable = function(t) {
			var e, i = s(this);
			i.wrap('<div class="am-paragraph-table-container" id="am-paragraph-table-' + t + '"><div class="am-paragraph-table-scroller"></div></div>'), e = i.parent(), e.width(i.width()), e.height(i.height()), new a("#am-paragraph-table-" + t, {
				eventPassthrough: !0,
				scrollX: !0,
				scrollY: !1,
				preventDefault: !1
			})
		}, s(window).on("load", n), t.exports = o.paragraph = {
			VERSION: "2.0.1",
			init: n
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			var t = s('[data-am-widget="slider"]');
			t.not(".am-slider-manual").each(function(t, e) {
				var i = o.utils.parseOptions(s(e).attr("data-am-slider"));
				s(e).flexslider(i)
			})
		}
		var s = i(1),
			o = i(2);
		i(11), s(n), t.exports = o.slider = {
			VERSION: "3.0.1",
			init: n
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			s('[data-am-widget="tabs"]').each(function() {
				var t = s(this).data("amTabsNoswipe") ? {
					noSwipe: 1
				} : {};
				s(this).tabs(t)
			})
		}
		var s = i(1),
			o = i(2);
		i(28), s(n), t.exports = o.tab = {
			VERSION: "4.0.1",
			init: n
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(2);
		t.exports = n.titlebar = {
			VERSION: "4.0.1"
		}
	}, function(t, e, i) {
		"use strict";

		function n() {
			var t = s('[data-am-widget="wechatpay"]');
			return a ? void t.on("click", ".am-wechatpay-btn", function(t) {
				t.preventDefault();
				var e = o.utils.parseOptions(s(this).parent().data("wechatPay"));
				return window.wx ? void wx.checkJsApi({
					jsApiList: ["chooseWXPay"],
					success: function(t) {
						t.checkResult.chooseWXPay ? wx.chooseWXPay(e) : alert("\u5fae\u4fe1\u7248\u672c\u4e0d\u652f\u6301\u652f\u4ed8\u63a5\u53e3\u6216\u6ca1\u6709\u5f00\u542f\uff01")
					},
					fail: function() {
						alert("\u8c03\u7528 checkJsApi \u63a5\u53e3\u65f6\u53d1\u751f\u9519\u8bef!")
					}
				}) : void alert("\u6ca1\u6709\u5fae\u4fe1 JS SDK")
			}) : (t.hide(), !1)
		}
		var s = i(1),
			o = i(2),
			a = window.navigator.userAgent.indexOf("MicroMessenger") > -1,
			r = n;
		s(r), t.exports = o.pay = {
			VERSION: "1.0.0",
			init: r
		}
	}])
});
