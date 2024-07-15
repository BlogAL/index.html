"use strict";
! function(t, a) {
    t.GenericTabsNav = function(t) {
        this.setMoreDropdown(t)
    }, t.GenericTabsNav.prototype.setMoreDropdown = function(t) {
        let e = {
            navWrap: t,
            moreLabel: "More",
            activeClass: "is-active"
        };
        new a.moreNav(e)
    };
    document.querySelectorAll('[data-widget="generic-tabs-nav"]').forEach((a => new t.GenericTabsNav(a)))
}(PULSE.app, PULSE.ui),
function(t, a, e, l, b) {
    t.homeTabs = function(t, e) {
        let l = this;
        l.tabMatches = b.lookup("label.hometab.matches"), l.tabLatest = b.lookup("label.hometab.latest");
        let n = {
            tabItems: function() {
                let t = [],
                    a = document.getElementById("mainContent"),
                    e = a.querySelectorAll(".sidebarPush")[0];
                e.setAttribute("data-ui-tab", l.tabLatest);
                let b = a.querySelectorAll(".fixedSidebar")[0];
                return b.setAttribute("data-ui-tab", l.tabMatches), t.push.apply(t, [e, b]), t
            }(),
            tabLinkWrap: t.querySelector(t.getAttribute("data-tab-wrap")),
            builtClass: "tabbedHome",
            defaultIndex: 0
        };
        l.tabs = new a.tab(n)
    };
    let n = document.querySelectorAll('[data-widget="home-tabs"]');
    Array.prototype.map.call(n, (function(a) {
        a = new t.homeTabs(a, {})
    }))
}(PULSE.app, PULSE.ui, PULSE.app.common, PULSE.core, PULSE.I18N),
function(t, a, e) {
    t.tabbedContent = function(l, b) {
        let n = this,
            o = function(t) {
                return console.log(t), "#comment" !== t.nodeName && null !== t.getAttribute && t.getAttribute("data-ui-tab")
            },
            r = [];
        r = b.tabClass ? document.getElementsByClassName(b.tabClass) : e.dom.getNextSiblings(l, o), 0 === r.length && (r = document.querySelectorAll("[data-ui-tab]")), t.updateTabParam = b.updateTabParam;
        let i = {
            tabItems: r,
            tabLinkWrap: l.querySelector(b.tabWrap),
            tabParam: b.tabParam,
            builtClass: b.builtClass,
            buildCallback: b.buildCallback,
            tabCallback: b.tabCallback
        };
        n.tabs = new a.tab(i);
        let u = e.url.getParameterByName("team");
        if (u)
            for (let a = 0; a < n.tabs.config.tabItems.length; a++)
                if (n.tabs.config.tabItems[a].getAttribute("data-filter-list").toLowerCase() === u.toLowerCase()) {
                    n.tabs.showTabByIndex(a), setTimeout((function() {
                        t.globalTabbedContentCallback(n.tabs, b)
                    }), 750);
                    break
                }
    }, t.globalTabbedContentBuildCallback = function(t) {
        t.config.tabs.forEach((t => {
            t.activator.dataset.text = t.title
        })), t.config.current.content.setAttribute("data-tab-aware-default", "true")
    }, t.globalTabbedContentCallback = function(a, l) {
        if (t.tabAwareWidgets && t.tabAwareWidgets.length && t.tabAwareWidgets.map((function(t) {
                t.match(a.config.current.content) && t.activate()
            })), t.updateTabParam) {
            let t = a.config.tabItems;
            for (let a = 0; a < t.length; a++)
                if (e.style.hasClass(t[a], "active")) {
                    let l = e.url.updateUrlStringParam(window.location.href, "team", t[a].getAttribute("data-filter-list"));
                    window.history.pushState({}, document.title, l);
                    break
                }
        }
    };
    let l = document.querySelectorAll('[data-widget="tabbed-content"]');
    Array.prototype.map.call(l, (function(a) {
        let e = {
            tabWrap: a.getAttribute("data-tab-wrap"),
            tabParam: a.getAttribute("data-tab-param"),
            builtClass: a.getAttribute("data-built-class") || "tabbedContent",
            tabClass: a.getAttribute("data-tab-class"),
            buildCallback: t.globalTabbedContentBuildCallback,
            tabCallback: t.globalTabbedContentCallback,
            updateTabParam: a.getAttribute("data-update-tab-param")
        };
        a = new t.tabbedContent(a, e)
    }))
}(PULSE.app, PULSE.ui, PULSE.core);