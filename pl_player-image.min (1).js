"use strict";
! function(e, t) {
    e.playerImage = function(e, a) {
        const n = this;
        n.element = e, n.playerId = n.element.getAttribute("data-player"), n.imageSize = n.element.getAttribute("data-size") || "140", n.imgExtension = n.element.getAttribute("data-extension"), t.setPlayerImageLoader(n.playerId, n.imageSize, n.element, n.imgExtension)
    };
    const a = document.querySelectorAll('[data-widget="player-image"]');
    for (let t = 0; t < a.length; t++) new e.playerImage(a[t], {})
}(PULSE.app, PULSE.app.common);