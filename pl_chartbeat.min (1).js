"use strict";
! function(t) {
    t.chartbeatArticle = function(t) {
        const e = this;
        e.container = t, e.articleTitle = t.dataset.articleTitle, e.chartbeatUID = t.dataset.chartbeatUid, e.articleAuthor = t.dataset.articleAuthor, e.articleSection = t.dataset.articleSection;
        let a = !0;
        "undefined" != typeof OneTrust && (OnetrustActiveGroups && OnetrustActiveGroups.includes("C0002") ? a = !1 : OneTrust.OnConsentChanged((() => {
            OnetrustActiveGroups && OnetrustActiveGroups.includes("C0002") && (a = !1)
        })));
        let n = window._sf_async_config = window._sf_async_config || {};
        n.uid = e.chartbeatUID, n.domain = window.location.domain, n.title = e.articleTitle, n.useCanonical = !0, n.useCanonicalDomain = !0, n.sections = e.articleSection, n.authors = e.articleAuthor, n.noCookies = a;
        let i = document.createElement("script"),
            c = document.getElementsByTagName("script")[0];
        i.type = "text/javascript", i.async = !0, i.src = "//static.chartbeat.com/js/chartbeat.js", c.parentNode.insertBefore(i, c)
    };
    let e = document.querySelectorAll('[data-widget="chartbeat-article"]');
    for (let a = 0; a < e.length; a++) new t.chartbeatArticle(e[a], {})
}(PULSE.app),
function(t) {
    t.chartbeatGeneric = function(t) {
        const e = this;
        e.container = t, e.pageTitle = t.dataset.pageTitle, e.chartbeatUID = t.dataset.chartbeatUid, e.pageSection = t.dataset.pageSection;
        let a = !0;
        "undefined" != typeof OneTrust && (OnetrustActiveGroups && OnetrustActiveGroups.includes("C0002") ? a = !1 : OneTrust.OnConsentChanged((() => {
            OnetrustActiveGroups && OnetrustActiveGroups.includes("C0002") && (a = !1)
        })));
        let n = window._sf_async_config = window._sf_async_config || {};
        n.uid = e.chartbeatUID, n.domain = window.location.domain, n.title = e.pageTitle, n.useCanonical = !0, n.useCanonicalDomain = !0, n.sections = e.pageSection, n.authors = "", n.noCookies = a;
        let i = document.createElement("script"),
            c = document.getElementsByTagName("script")[0];
        i.type = "text/javascript", i.async = !0, i.src = "//static.chartbeat.com/js/chartbeat.js", c.parentNode.insertBefore(i, c)
    };
    let e = document.querySelectorAll('[data-widget="chartbeat-generic"]');
    for (let a = 0; a < e.length; a++) new t.chartbeatGeneric(e[a], {})
}(PULSE.app),
function(t) {
    t.chartbeatVideo = function(t) {
        const e = this;
        e.container = t, e.videoTitle = t.dataset.videoTitle, e.chartbeatUID = t.dataset.chartbeatUid, e.videoSection = t.dataset.videoSection;
        let a = !0;
        "undefined" != typeof OneTrust && (OnetrustActiveGroups && OnetrustActiveGroups.includes("C0002") ? a = !1 : OneTrust.OnConsentChanged((() => {
            OnetrustActiveGroups && OnetrustActiveGroups.includes("C0002") && (a = !1)
        })));
        let n = window._sf_async_config = window._sf_async_config || {};
        n.uid = e.chartbeatUID, n.domain = window.location.domain, n.title = e.videoTitle, n.useCanonical = !0, n.useCanonicalDomain = !0, n.sections = e.videoSection, n.authors = "", n.noCookies = a;
        let i = document.createElement("script"),
            c = document.getElementsByTagName("script")[0];
        i.type = "text/javascript", i.async = !0, i.src = "//static.chartbeat.com/js/chartbeat_video.js", c.parentNode.insertBefore(i, c)
    };
    let e = document.querySelectorAll('[data-widget="chartbeat-video"]');
    for (let a = 0; a < e.length; a++) new t.chartbeatVideo(e[a], {})
}(PULSE.app);