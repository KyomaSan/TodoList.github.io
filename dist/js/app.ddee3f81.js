(function(t) {
    function e(e) {
        for (var n, r, a = e[0], d = e[1], c = e[2], u = 0, h = []; u < a.length; u++) r = a[u], Object.prototype.hasOwnProperty.call(i, r) && i[r] && h.push(i[r][0]), i[r] = 0;
        for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (t[n] = d[n]);
        l && l(e);
        while (h.length) h.shift()();
        return s.push.apply(s, c || []), o()
    }

    function o() {
        for (var t, e = 0; e < s.length; e++) {
            for (var o = s[e], n = !0, a = 1; a < o.length; a++) {
                var d = o[a];
                0 !== i[d] && (n = !1)
            }
            n && (s.splice(e--, 1), t = r(r.s = o[0]))
        }
        return t
    }
    var n = {},
        i = { app: 0 },
        s = [];

    function r(e) { if (n[e]) return n[e].exports; var o = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports }
    r.m = t, r.c = n, r.d = function(t, e, o) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, r.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(o, n, function(e) { return t[e] }.bind(null, n));
        return o
    }, r.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "/";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var c = 0; c < a.length; c++) e(a[c]);
    var l = d;
    s.push([0, "chunk-vendors"]), o()
})({
    0: function(t, e, o) { t.exports = o("56d7") },
    "034f": function(t, e, o) {
        "use strict";
        o("85ec")
    },
    1205: function(t, e, o) {},
    2642: function(t, e, o) {
        "use strict";
        o("8751")
    },
    "476d": function(t, e, o) {
        "use strict";
        o("1205")
    },
    "479a": function(t, e, o) {},
    "56d7": function(t, e, o) {
        "use strict";
        o.r(e);
        o("e260"), o("e6cf"), o("cca6"), o("a79d");
        var n = o("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { attrs: { id: "root" } }, [o("div", { staticClass: "todo-container" }, [o("div", { staticClass: "todo-wrap" }, [o("MyHeader", { on: { addTodo: t.addTodo } }), o("MyList", { attrs: { todos: t.todos } }), o("MyFooter", { attrs: { todos: t.todos, isShow: t.isShow }, on: { checkAllTodo: t.checkAllTodo, clearAllTodo: t.clearAllTodo } })], 1)])])
            },
            s = [],
            r = (o("d3b7"), o("159b"), o("4de4"), o("e9c4"), o("911a")),
            a = o.n(r),
            d = function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "todo-header" }, [o("input", { attrs: { type: "text", placeholder: "请输入你的任务名称，按回车键确认" }, on: { keyup: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.add.apply(null, arguments) } } })])
            },
            c = [],
            l = (o("498a"), o("e1bd")),
            u = {
                name: "MyHeader",
                methods: {
                    add: function(t) {
                        if (!t.target.value.trim()) return alert("输入不能为空");
                        var e = { id: Object(l["a"])(), title: t.target.value, done: !1 };
                        this.$emit("addTodo", e), t.target.value = ""
                    }
                }
            },
            h = u,
            f = (o("edb5"), o("2877")),
            p = Object(f["a"])(h, d, c, !1, null, "67ec3c2d", null),
            v = p.exports,
            m = function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("ul", { staticClass: "todo-main" }, t._l(t.todos, (function(t) { return o("MyItem", { key: t.id, attrs: { todo: t } }) })), 1)
            },
            b = [],
            y = function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("transition", { attrs: { appear: !0, name: "animate__animated animate__bounce", "enter-active-class": "animate__bounceInRight", "leave-active-class": "animate__bounceOutRight" } }, [o("li", [o("label", [o("input", { attrs: { type: "checkbox" }, domProps: { checked: t.todo.done }, on: { change: function(e) { return t.handleCheck(t.todo.id) } } }), o("span", { directives: [{ name: "show", rawName: "v-show", value: !t.todo.isEdit, expression: "!todo.isEdit" }] }, [t._v(t._s(t.todo.title))]), o("input", { directives: [{ name: "show", rawName: "v-show", value: t.todo.isEdit, expression: "todo.isEdit" }], ref: "inputTitle", attrs: { type: "text" }, domProps: { value: t.todo.title }, on: { keyup: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleBlur(t.todo, e) }, blur: function(e) { return t.handleBlur(t.todo, e) } } })]), o("button", { staticClass: "btn btn-danger", on: { click: function(e) { return t.handleDelete(t.todo.id) } } }, [t._v(" 删除 ")]), o("button", { directives: [{ name: "show", rawName: "v-show", value: !t.todo.isEdit, expression: "!todo.isEdit" }], staticClass: "btn btn-editor", on: { click: function(e) { return t.handleEdit(t.todo) } } }, [t._v(" 编辑 ")])])])
            },
            w = [],
            _ = (o("77ed"), {
                name: "MyItem",
                props: ["todo"],
                data: function() { return {} },
                methods: {
                    handleCheck: function(t) { this.$bus.$emit("checkTodo", t) },
                    handleDelete: function(t) { confirm("确定删除吗?") && a.a.publish("deleteTodo", t) },
                    handleEdit: function(t) { t.hasOwnProperty("isEdit") ? t.isEdit = !0 : this.$set(t, "isEdit", !0), this.$nextTick((function() { this.$refs.inputTitle.focus() })) },
                    handleBlur: function(t, e) {
                        if (t.isEdit = !1, !e.target.value.trim()) return alert("输入不能修改为空!");
                        this.$bus.$emit("updateTodo", t.id, e.target.value)
                    }
                }
            }),
            g = _,
            k = (o("476d"), Object(f["a"])(g, y, w, !1, null, "685cfac2", null)),
            T = k.exports,
            S = { name: "MyList", components: { MyItem: T }, props: ["todos"] },
            x = S,
            A = (o("2642"), Object(f["a"])(x, m, b, !1, null, "ed413b04", null)),
            O = A.exports,
            $ = function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { directives: [{ name: "show", rawName: "v-show", value: t.total, expression: "total" }], staticClass: "todo-footer" }, [o("label", [o("input", {
                    directives: [{ name: "model", rawName: "v-model", value: t.isAll, expression: "isAll" }],
                    attrs: { type: "checkbox" },
                    domProps: { checked: Array.isArray(t.isAll) ? t._i(t.isAll, null) > -1 : t.isAll },
                    on: {
                        change: function(e) {
                            var o = t.isAll,
                                n = e.target,
                                i = !!n.checked;
                            if (Array.isArray(o)) {
                                var s = null,
                                    r = t._i(o, s);
                                n.checked ? r < 0 && (t.isAll = o.concat([s])) : r > -1 && (t.isAll = o.slice(0, r).concat(o.slice(r + 1)))
                            } else t.isAll = i
                        }
                    }
                })]), o("span", [o("span", [t._v("已完成" + t._s(t.doneTotal))]), t._v(" / 全部" + t._s(t.total))]), o("button", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "btn btn-danger", on: { click: t.clearAll } }, [t._v(" 清除已完成任务 ")])])
            },
            E = [],
            M = { name: "MyFooter", props: ["todos", "isShow"], computed: { total: function() { return this.todos.length }, doneTotal: function() { return this.todos.reduce((function(t, e) { return t + (e.done ? 1 : 0) }), 0) }, isAll: { get: function() { return this.doneTotal === this.total && this.total > 0 }, set: function(t) { this.$emit("checkAllTodo", t) } } }, methods: { clearAll: function() { this.$emit("clearAllTodo") } } },
            j = M,
            C = (o("c47a"), Object(f["a"])(j, $, E, !1, null, "4cda32af", null)),
            P = C.exports,
            I = {
                name: "App",
                components: { MyHeader: v, MyList: O, MyFooter: P },
                data: function() { return { todos: JSON.parse(localStorage.getItem("todos")) || [], isShow: JSON.parse(localStorage.getItem("isShow")) || !1 } },
                methods: {
                    addTodo: function(t) { this.todos.unshift(t) },
                    checkTodo: function(t) {
                        var e = this;
                        this.todos.forEach((function(o) {
                            var n = [];
                            o.id === t && (0 == o.done ? (o.done = !o.done, e.isShow = o.done) : 1 == o.done && (o.done = !o.done, e.todos.forEach((function(t, o) { n.push(e.todos[o].done) })), -1 != n.indexOf(!0) ? e.isShow = !0 : e.isShow = !1))
                        }))
                    },
                    updateTodo: function(t, e) { this.todos.forEach((function(o) { o.id === t && (o.title = e) })) },
                    deleteTodo: function(t, e) { this.todos = this.todos.filter((function(t) { return t.id !== e })) },
                    checkAllTodo: function(t) {
                        var e = this;
                        this.todos.forEach((function(o) { o.done = t, e.isShow = o.done }))
                    },
                    clearAllTodo: function() {
                        var t = this;
                        this.todos.length > 0 && confirm("确定清除已完成的吗?") && (this.todos = this.todos.filter((function(e) { return t.isShow = !1, !e.done }))), console.log(this.isShow)
                    }
                },
                watch: { todos: { deep: !0, handler: function(t, e) { localStorage.setItem("todos", JSON.stringify(t)) } }, isShow: function(t, e) { localStorage.setItem("isShow", t) } },
                mounted: function() { this.$bus.$on("checkTodo", this.checkTodo), this.$bus.$on("updateTodo", this.updateTodo), this.pubId = a.a.subscribe("deleteTodo", this.deleteTodo) },
                beforeDestroy: function() { this.$bus.$off("checkTodo"), this.$bus.$off("updateTodo"), a.a.unsubscribe(this.pubId) }
            },
            N = I,
            J = (o("034f"), Object(f["a"])(N, i, s, !1, null, null, null)),
            B = J.exports;
        n["a"].config.productionTip = !1, new n["a"]({ render: function(t) { return t(B) }, beforeCreate: function() { n["a"].prototype.$bus = this } }).$mount("#app")
    },
    "85ec": function(t, e, o) {},
    8751: function(t, e, o) {},
    c47a: function(t, e, o) {
        "use strict";
        o("f552")
    },
    edb5: function(t, e, o) {
        "use strict";
        o("479a")
    },
    f552: function(t, e, o) {}
});
//# sourceMappingURL=app.ddee3f81.js.map