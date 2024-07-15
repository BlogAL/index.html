"use strict";
PULSE.app.templates.predictedSearchitem = '<button class="searchBar__predicted-search-button btn js-predicted-search-button" data-title="{{ name }}" data-player-id="{{ playerId }}"> {{{ renderString }}} </button> ',
    function(e, t, a) {
        function r() {
            const e = [];
            for (let t = 1; t <= 20; t++) {
                const a = t / 20;
                e.push(a)
            }
            return e.push(0), e
        }
        e.mainNavigation = function(e) {
            const a = this;
            a.element = e, a.mobileMenuExpander = a.element.querySelector(".js-hamburger-toggle"), a.mainSearchButton = a.element.querySelector(".js-header-search-btn"), a.searchBarContainer = a.element.querySelector(".js-search-bar-container"), a.searchInputContainer = a.element.querySelector(".js-search-input"), a.searchInputBtn = a.element.querySelector(".js-search-input-btn"), a.searchOverlay = a.element.querySelector(".js-search-overlay"), a.mainLogoElement = document.querySelector(".js-logo-container"), a.pageLinks = a.element.querySelector(".js-page-links"), a.dropDownLinks = a.element.querySelectorAll(".js-page-links > li:not(.noDrop)"), a.mobileNav = a.pageLinks.querySelectorAll('[role="button"].navLink'), a.navElement = a.element.querySelector(".js-nav-bar"), a.pageLinks = a.element.querySelector(".js-header-search-btn"), a.subNavContainer = document.querySelector(".js-sub-nav"), a.masthead = document.querySelector(".masthead"), a.globalNav = a.masthead.querySelector(".js-fixed-container"), a.clubsList = document.querySelector(".js-club-navigation"), a.navbarOffsetTop = a.navElement.offsetHeight, a.bottom = a.navElement.offsetTop, a.pageOffsetTop = window.pageYOffset;
            const r = {
                navWrap: a.subNavContainer,
                moreLabel: "More"
            };
            a.subNavContainer && (a.moreNav = new t.moreNav(r)), a.setListeners(), a.setHeaderObserver()
        }, e.mainNavigation.prototype.toggleSearch = function() {
            const t = this;
            if (t.mainSearchButton.classList.toggle("active"), t.searchBarContainer.classList.toggle("open"), t.masthead.classList.toggle("searchOpen"), document.body.classList.toggle("u-body-no-scroll"), t.searchBarContainer.classList.contains("open") && t.searchInputContainer.focus(), !t.searchHeaderRedirect) {
                const a = document.querySelector('[data-widget="search-header-redirect"]');
                a && (t.searchHeaderRedirect = new e.SearchHeaderRedirect(a))
            }
        }, e.mainNavigation.prototype.setListeners = function() {
            const t = this;
            t.searchOverlay && t.searchOverlay.addEventListener("click", (function() {
                t.toggleSearch()
            })), t.searchInputBtn && t.searchInputBtn.addEventListener("blur", (function(e) {
                setTimeout((function() {
                    document.activeElement != t.searchInputContainer && t.toggleSearch()
                }), 100)
            })), a.event.listenForMultiple(t.mobileMenuExpander, ["keypress", "click"], (function() {
                document.body.classList.toggle("mastheadOpen"), "true" === t.mobileMenuExpander.getAttribute("aria-expanded") ? t.mobileMenuExpander.setAttribute("aria-expanded", "false") : t.mobileMenuExpander.setAttribute("aria-expanded", "true");
                document.querySelector(".pl-modal.open") && e.modalsController.closeAll()
            }));
            for (let e = 0; e < t.dropDownLinks.length; e++) t.dropDownLinks[e].addEventListener("keypress", (function(a) {
                13 === a.which && (a.preventDefault(), t.dropDownLinks[e].classList.toggle("open"))
            })), t.dropDownLinks[e].addEventListener("blur", (function(e) {
                e.relatedTarget && e.relatedTarget.closest(".dropdown") || t.classList.remove("open")
            }), !0);
            t.mainSearchButton && a.event.listenForMultiple(t.mainSearchButton, ["keypress", "click"], (function() {
                t.toggleSearch(!0)
            })), t.mobileNav.forEach((e => {
                function a(e) {
                    const a = e.currentTarget,
                        r = a.getAttribute("data-nochildrenlink");
                    r ? window.location.href = r : (t.mobileNav.forEach((e => {
                        e.classList.remove("active")
                    })), a.classList.add("active"), a.classList.contains("clubListMobileButton") ? t.clubsList.classList.add("open") : t.clubsList.classList.remove("open"))
                }
                e.addEventListener("click", a), e.addEventListener("keypress", a)
            }))
        }, e.mainNavigation.prototype.setHeaderObserver = function() {
            const e = document.querySelector(".js-club-navigation"),
                t = {
                    root: null,
                    rootMargin: "0px",
                    threshold: r()
                };
            new IntersectionObserver(this.fixNavigation.bind(this), t).observe(e)
        }, e.mainNavigation.prototype.fixNavigation = function(e) {
            const t = this,
                [a] = e;
            a.target.classList.contains("open") || (0 === a.intersectionRatio ? (t.globalNav.classList.add("fixed"), document.body.classList.add("nav-fixed")) : a.intersectionRatio > 0 && (t.globalNav.classList.remove("fixed"), document.body.classList.remove("nav-fixed")))
        };
        document.querySelectorAll('.navContainer[data-script="pl_global-header"]').forEach((t => {
            new e.mainNavigation(t)
        }))
    }(PULSE.app, PULSE.ui, PULSE.core),
    function(e, t, a) {
        const r = function(e, t, a, r) {
            let n = a || [],
                s = 0;
            if (t && t.data && t.data.length > 0)
                for (let a = 0; a < t.data.length; a++) {
                    let i = t.data[a],
                        c = "";
                    if (i.name && (i.name.display || i.name.first || i.name.last) ? c = i.name.display ? i.name.display : i.name.first + " " + i.name.last : i.name && (c = i.name), i.shortName && (c += " " + i.shortName), c.toLowerCase().indexOf(e.toLowerCase()) > -1 && (i.type = t.type, n.push(i), s++, r && r <= s)) return n
                }
            return n
        };
        e.SearchHeaderRedirect = function(e) {
            let t = this;
            t.element = e, t.url = "/search", t.searchInputWrapper = t.element.querySelector(".js-search-input-container"), t.searchInputContainer = t.element.querySelector(".searchInputContainer"), t.searchButtonContainer = t.element.querySelector(".searchButtonContainer"), t.emptyInputBtn = t.element.querySelector(".js-empty-input-btn"), t.predictedSearchContainer = t.element.querySelector(".js-predicted-search-wrapper"), t.predictedSearchContainerLoader = t.element.querySelector(".js-loader"), t.suggestedItems = t.element.querySelectorAll(".js-suggested-item"), t.predictedItemIndex = -1, t.term = "", t.getManagersCache(), t.getClubCache(), t.setListeners()
        }, e.SearchHeaderRedirect.prototype.setListeners = function() {
            let e = this;
            e.searchInputContainer.addEventListener("focusout", (function(a) {
                e.predictedSearchContainer.parentElement.classList.remove("is-active"), e.predictedItemIndex = -1, e.predictedSearchTerm = null, t.style.removeClass(e.searchInputWrapper, "is-active"), e.predictedSearchContainer.querySelector(".is-active") && e.predictedSearchContainer.querySelector(".is-active").classList.remove("is-active")
            })), e.searchInputContainer.addEventListener("focusin", (function() {
                t.style.addClass(e.searchInputWrapper, "is-active"), e.predictedSearchContainer.parentElement.classList.add("is-active")
            })), e.searchInputContainer.addEventListener("keydown", (function(t) {
                let a = t.keyCode || t.which;
                38 !== a && 40 !== a ? 39 !== a && 37 !== a && (13 === a ? (e.predictedSearchTerm && (e.searchInputContainer.value = e.predictedSearchTerm), e.searchInputContainer.value.length > 0 && e.searchTerm()) : (e.predictedSearchContainer.parentElement.classList.remove("is-active"), e.predictedSearchContainer.querySelector(".is-active") && (e.predictedItemIndex = -1, e.predictedSearchTerm = null, e.predictedSearchContainer.querySelector(".is-active").classList.remove("is-active")))) : e.navigateDropdown(40 === a)
            })), e.searchInputContainer.addEventListener("keyup", a.debounce(e.keypressFunction.bind(this), 300)), e.searchButtonContainer.addEventListener("click", (function() {
                e.searchInputContainer.value.length > 0 && e.searchTerm()
            })), e.searchInputContainer.addEventListener("keyup", (() => {
                e.searchInputContainer.value.length > 0 ? e.searchInputWrapper.classList.add("has-value") : e.searchInputWrapper.classList.remove("has-value")
            })), e.emptyInputBtn.addEventListener("click", (() => {
                e.searchInputContainer.value = "", e.searchInputWrapper.classList.remove("has-value"), e.predictedSearchContainer.innerHTML = "", t.style.removeClass(e.searchButtonContainer, "active"), t.style.removeClass(e.searchInputWrapper, "is-active"), e.predictedSearchContainer.parentElement.classList.remove("is-active")
            })), e.suggestedItems.forEach((t => {
                t.addEventListener("click", (function(a) {
                    a.preventDefault(), e.clickedItems(t)
                }))
            }))
        }, e.SearchHeaderRedirect.prototype.keypressFunction = function(e) {
            const a = this;
            let r = e.keyCode || e.which;
            38 !== r && 40 !== r && (a.searchInputContainer.value.length > 0 ? (t.style.addClass(a.searchButtonContainer, "active"), t.style.addClass(a.searchInputWrapper, "is-active")) : (t.style.removeClass(a.searchButtonContainer, "active"), t.style.removeClass(a.searchInputWrapper, "is-active"), a.predictedSearchContainer.parentElement.classList.remove("is-active")), a.searchInputContainer.value.length > 2 && a.getPredictedSearch())
        }, e.SearchHeaderRedirect.prototype.searchTerm = function() {
            let e = this;
            if (t.style.hasClass(e.searchButtonContainer, "active")) {
                let t = e.url,
                    a = e.searchInputContainer.value;
                a && "" !== a && (t += "?term=" + a), window.location.href = t
            }
        }, e.SearchHeaderRedirect.prototype.getPredictedSearch = function() {
            const t = this,
                a = t.searchInputContainer.value;
            t.predictedSearchContainer.innerHTML = "", t.predictedSearchContainer.parentElement.classList.add("is-active"), t.predictedSearchContainerLoader.classList.remove("u-hide");
            fetch(e.common.createSearchPath([a, a + "*"], ["players"], {
                size: 6,
                start: 0,
                fullObjectResponse: !0
            })).then((e => e.json())).then((e => {
                if (e && e.hits && e.hits.hit && e.hits.hit.length || t.clubs || t.managers) {
                    let s = [];
                    e && e.hits && e.hits.hit && e.hits.hit.length && (s = e.hits.hit.filter((e => "FOOTBALL_PERSON" === e.contentType)));
                    const i = r(a, t.clubs),
                        c = r(a, t.managers),
                        o = [...i, ...(n = s, n.sort((function(e, t) {
                            return t.appearances = t.appearances ? t.appearances : 0, e.appearances = e.appearances ? e.appearances : 0, t.response.appearances - e.response.appearances
                        })).slice(0, 3)), ...c];
                    t.renderResults(o)
                }
                var n
            }))
        }, e.SearchHeaderRedirect.prototype.renderResults = function(t) {
            const a = this,
                r = a.searchInputContainer.value;
            let n = "";
            t && (t.slice(0, 6).forEach((t => {
                let a = "",
                    s = "";
                "manager" === t.type ? a = t.name.display || "" : "FOOTBALL_PERSON" === t.contentType ? (a = t.response.name.display || "", s = t.response.id) : "team" === t.type && (a = t.name || "");
                let i = function(e, t) {
                    const a = e.toLowerCase(),
                        r = t.toLowerCase(),
                        n = new RegExp(r, "g");
                    return a.replace(n, "<span>" + r + "</span>")
                }(a, r);
                n += Mustache.render(e.templates.predictedSearchitem, {
                    name: a,
                    renderString: i,
                    playerId: s
                })
            })), a.predictedSearchContainer.innerHTML = n, a.predictedSearchContainerLoader.classList.add("u-hide"), setTimeout((() => {
                a.setPredictedItemListeners()
            }), 200))
        }, e.SearchHeaderRedirect.prototype.setPredictedItemListeners = function() {
            const e = this;
            e.predictedSearchContainer.querySelectorAll(".js-predicted-search-button").forEach((t => {
                t.addEventListener("click", (function(a) {
                    a.preventDefault(), e.clickedItems(t)
                }))
            }))
        }, e.SearchHeaderRedirect.prototype.clickedItems = function(e) {
            let t = this.url,
                a = e.dataset.title,
                r = e.dataset.playerId,
                n = e.dataset.type;
            this.searchInputContainer.value = a, a && "" !== a && (t += "?term=" + a), r && "" !== r && (t += "&playerId=" + r), n && "" !== n && (t += "&isHotTopic=true"), window.location.href = t
        }, e.SearchHeaderRedirect.prototype.navigateDropdown = function(e) {
            const t = this,
                a = t.predictedSearchContainer.querySelectorAll(".js-predicted-search-button"),
                r = t.predictedSearchContainer.querySelector(".js-predicted-search-button.is-active"),
                n = a.length - 1;
            a && a.length && (r && r.classList.remove("is-active"), e && t.predictedItemIndex !== n ? t.predictedItemIndex = t.predictedItemIndex + 1 : e || -1 === t.predictedItemIndex || (t.predictedItemIndex = t.predictedItemIndex - 1, -1 === t.predictedItemIndex && (t.predictedSearchTerm = null)), a[t.predictedItemIndex] && (t.predictedSearchTerm = a[t.predictedItemIndex].dataset.title, a[t.predictedItemIndex].classList.add("is-active")))
        }, e.SearchHeaderRedirect.prototype.getManagersCache = function() {
            let a = {
                    pageSize: 500,
                    type: "manager",
                    comps: e.competition.FIRST,
                    compCodeForActivePlayer: e.defaultCompCode,
                    altIds: !0
                },
                r = {
                    url: e.common.createApiPath("team-officials.all", a),
                    method: "GET",
                    callback: this.storeManagers,
                    target: this
                };
            t.data.manager.add(r)
        }, e.SearchHeaderRedirect.prototype.storeManagers = function(e) {
            let t = this;
            e && e.content && (t.managers = {
                data: e.content,
                type: "manager"
            })
        }, e.SearchHeaderRedirect.prototype.getClubCache = function() {
            let a = {
                    pageSize: 100,
                    comps: e.competition.FIRST,
                    altIds: !0
                },
                r = {
                    url: e.common.createApiPath("teams.all", a),
                    method: "GET",
                    callback: this.storeClubs,
                    target: this
                };
            t.data.manager.add(r)
        }, e.SearchHeaderRedirect.prototype.storeClubs = function(e) {
            let t = this;
            e && e.content && (t.clubs = {
                data: e.content,
                type: "team"
            })
        }
    }(PULSE.app, PULSE.core, PULSE.app.common);