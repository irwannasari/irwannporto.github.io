!(function (e) {
  function t(t) {
    for (
      var o, i, c = t[0], s = t[1], d = t[2], u = 0, p = [];
      u < c.length;
      u++
    )
      (i = c[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]),
        (r[i] = 0);
    for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    for (l && l(t); p.length; ) p.shift()();
    return a.push.apply(a, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== r[s] && (o = !1);
      }
      o && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 1: 0 },
    a = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var d = 0; d < c.length; d++) t(c[d]);
  var l = s;
  a.push([8, 2]), n();
})([
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    n(15), (e.exports = n(13));
  },
  function (e, t) {
    !(function () {
      const e = document.querySelectorAll(".btn-toggle-mode");
      function t({ type: e = "light" }) {
        localStorage.setItem("mode", e),
          (function ({ type: e }) {
            const t = document.querySelector("html");
            t && t.setAttribute("data-mode", e);
          })({ type: e });
      }
      function n() {
        const e = localStorage.getItem("mode");
        return (
          e ||
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")
        );
      }
      e &&
        e.forEach((e) => {
          e.addEventListener("click", function () {
            t("light" === n() ? { type: "dark" } : {});
          });
        }),
        (function () {
          const e = n();
          t(e ? { type: e } : {});
        })();
    })();
  },
  ,
  ,
  function (e, t) {
    window.addEventListener("load", function () {
      document.body.classList.add("page-loaded");
    });
  },
  function (e, t, n) {},
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(14), n(9);
    var o = n(3),
      r = n(4),
      a = n.n(r);
    !(function () {
      const e = document.querySelector("[data-scroll-container]"),
        t = new o.a({
          el: e,
          smooth: !0,
          offset: ["17.5%"],
          repeat: !0,
          class: "animate",
          smartphone: { smooth: !0 },
          tablet: { smooth: !0 },
        });
      window.addEventListener("resize", () => {
        t.update();
      }),
        a()(e, { background: !0 }, () => {
          t.update();
        });
    })();
    var i = n(30),
      c = n(19),
      s = n(20),
      d = n(21),
      l = n(22),
      u = n(23),
      p = n(24),
      f = n(25),
      w = n(26),
      y = n(27),
      m = n(28),
      h = n(29);
    i.a.use([c.a, s.a, d.a, l.a, u.a, p.a, f.a, w.a, y.a, m.a, h.a]),
      document.addEventListener("DOMContentLoaded", () => {
        (document.querySelectorAll("[data-swiper]") || []).forEach((e) => {
          let t =
            e.dataset && e.dataset.options ? JSON.parse(e.dataset.options) : {};
          new i.a(e, t);
        });
        var e = new i.a(".swiper-linked-top", {
          spaceBetween: 23,
          breakpoints: {
            300: { slidesPerView: 2 },
            999: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          },
          navigation: { nextEl: ".swiper-next", prevEl: ".swiper-prev" },
        });
        new i.a(".swiper-linked-bottom", {
          spaceBetween: 0,
          slidesPerView: 1,
          parallax: !0,
          thumbs: { swiper: e },
          effect: "fade",
          fadeEffect: { crossFade: !0 },
        });
      });
    var b = n(5),
      v = n.n(b);
    (document.querySelectorAll("[data-typed]") || []).forEach((e) => {
      const t = {
        typeSpeed: 50,
        backSpeed: 35,
        backDelay: 1e3,
        loop: !0,
        ...(e.dataset.typed ? JSON.parse(e.dataset.typed) : {}),
      };
      new v.a(e, t);
    });
    n(12);
  },
]);


//video player
const videos = document.querySelectorAll('.video-toggle');

videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

//----------------------------------vertical navbar------------------------------------*/
