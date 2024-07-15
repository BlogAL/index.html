"use strict";
! function(e, o) {
    e.footerCorporate = function(e, o) {
        let t = this;
        t.element = e, t.backToTop = t.element.getElementsByClassName("backToTopContainer"), t.setListeners()
    }, e.footerCorporate.prototype.setListeners = function() {
        let e = this;
        e.backToTop && e.backToTop.length > 0 && Array.prototype.map.call(e.backToTop, (function(e) {
            e.addEventListener("click", (function(e) {
                e.preventDefault(), window.scrollTo(0, 0)
            }))
        }))
    };
    let t = document.querySelectorAll('[data-widget="footer-corporate"]');
    for (let o = 0; o < t.length; o++) new e.footerCorporate(t[o], {})
}(PULSE.app, PULSE.app.common);