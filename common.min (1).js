"use strict";
PULSE.app.templates.pagination = '<div class="paginationBtn paginationPreviousContainer"> <div class="icn paginationBtn__left"> <svg viewBox="0 0 100 100"><path d="M74.363,56.363l-36,36C36.605,94.121,34.303,95,32,95s-4.605-0.879-6.363-2.637  c-3.516-3.513-3.516-9.214,0-12.727L55.273,50L25.637,20.363c-3.516-3.513-3.516-9.214,0-12.727c3.516-3.516,9.211-3.516,12.727,0  l36,36C77.879,47.149,77.879,52.851,74.363,56.363z"></path></svg> </div> <div class="visuallyHidden">Previous</div> </div> <div class="paginationBtn paginationNextContainer inactive"> <div class="icn"> <svg viewBox="0 0 100 100"><path d="M74.363,56.363l-36,36C36.605,94.121,34.303,95,32,95s-4.605-0.879-6.363-2.637  c-3.516-3.513-3.516-9.214,0-12.727L55.273,50L25.637,20.363c-3.516-3.513-3.516-9.214,0-12.727c3.516-3.516,9.211-3.516,12.727,0  l36,36C77.879,47.149,77.879,52.851,74.363,56.363z"></path></svg> </div> <div class="visuallyHidden">Next</div> </div>', PULSE.app.templates.playerCardLoader = '<li class="statsCard statsCard--skeleton"> <ul class="statsList"> <li class="statsHero"></li> <li class="statsRow"></li> </ul> <span class="statsLink"></span> </li>', PULSE.app.templates.thumbnailLoader = '{{#totalResults}} <li> <div class="thumbnail placeholder thumbnail--skeleton {{cssClass}}"> <figure> <span class="image"></span> <figcaption> <span class="tag"></span> <span class="title"> </span> <span class="text"></span> </figcaption> </figure> </div> </li> {{/totalResults}}', PULSE.app.templates.commonmatchbroadcaster = '{{#multipleBroadcasters}} <div class="broadcasterContainer"> {{#fixtureHasLiveStream}} <div class="liveStream js-multipleBroadcasters-{{fixtureId}}"> <svg class="liveStream__play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 40"> <path d="M0 3.29C0 .743 2.805-.835 5.017.468l28.361 16.71c2.163 1.273 2.163 4.373 0 5.645L5.018 39.533C2.804 40.836 0 39.257 0 36.709V3.291z"/> </svg> </div> {{/fixtureHasLiveStream}} <div class="multipleBroadcastersContainer"> <span class="global-btn global-btn--small multipleBroadcastersButton js-multipleBroadcasters-{{fixtureId}}" tabindex="0"> <span class="icn tv-sm"></span> {{ multipleBroadcasters }}<span class="visuallyHidden">Open multiple broadcasters modal</span> </span> </div> </div> {{/multipleBroadcasters}} {{^multipleBroadcasters}} {{#broadcasters}} <div class="broadcasterContainer {{ #broadcasterSize }}broadcasterContainer__multiple{{/broadcasterSize}}"> {{#liveStreaming.broadcasterHasLiveStream}} <div class="liveStream-play-container"> <div class="liveStream"> <svg class="liveStream__play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 40"> <path d="M0 3.29C0 .743 2.805-.835 5.017.468l28.361 16.71c2.163 1.273 2.163 4.373 0 5.645L5.018 39.533C2.804 40.836 0 39.257 0 36.709V3.291z"/> </svg> </div> </div> {{/liveStreaming.broadcasterHasLiveStream}} <span class="logo broadcaster-image-container"> <img class="broadcaster-image js-broadcaster-logo" src="{{ logoSrc }}" srcset="{{ logoSrc }}, {{ logoSrcRetina }} 2x"> </span> </div> {{/broadcasters}} {{/multipleBroadcasters}}', PULSE.app.templates.matchmodalbroadcasters = ' {{#broadcasters}} <div class="modalBroadcasterRow"> <div class="modalBroadcasterLinkContainer"> <div class="modalBroadcasterInfo"> <div class="modalBroadcasterLink"> {{^url}} <div class="modalBroadcasterLinkInfo"></div> {{/url}} {{#url}} <div class="modalBroadcasterLinkInfo"> <a href="{{url}}?utm_source=premier-league-website&utm_campaign=website&utm_medium=link" target="_blank" class="global-btn global-btn__text"> <div class="logo broadcaster-image-container broadcasterLogo"> <img class="broadcaster-image js-broadcaster-logo" src="{{ logoSrc }}" srcset="{{ logoSrc }}, {{ logoSrcRetina }} 2x"> </div> <span class="broadcastersButtonText"> {{ name }} {{{ externalIcon }}} </span> </a> </div> {{/url}} </div> </div> <div class="modalBroadcasterLiveStreamContainer"> <div class="modalBroadcasterLiveStream"> <span class="matchCentreLiveStreamContainer {{^liveStreaming.hasLiveStream}}matchCentreLiveStreamContainerEmpty{{/liveStreaming.hasLiveStream}}"> {{#liveStreaming.hasLiveStream}} <a href="{{ liveStreaming.liveStreamURL}}?utm_source=premier-league-website&utm_campaign=website&utm_medium=link" target="_blank" alt="External stream link from {{name}}"> {{ liveStreaming.liveStreamLabel }} <span class="visuallyHidden">Live stream available for this match.</span> <span class="icn external-lg-w"><span class="visuallyHidden">{{ externalLinkText }}</span></span> </a> {{/liveStreaming.hasLiveStream}} </span> </div> </div> </div> </div> {{/broadcasters}}', PULSE.app.templates.matchnavscore = '<div class="score">{{ scores.0 }}<span>-</span>{{ scores.1 }}</div>', PULSE.app.templates.search = '<div class="searchInputContainer" role="search"> <label for="search-input" class="visuallyHidden">{{ placeholder }}</label> <input id="search-input" type="text" value="{{ term }}" placeholder="{{ placeholder }}" class="searchTextContainer searchInput"> <button class="search-input__button js-empty-input-btn"> <svg class="search-input__icon"> <use class="icon" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/resources/{{ resourceVersion }}/i/svg-output/icons.svg#icn-close"></use> </svg> </button> <div class="searchIconContainer searchCommit" role="button" tabindex="0" aria-label="Submit search"> <div alt="" class="icn search-sm-g"><span class="visuallyHidden">{{ accessibleSearchPhrase }}</span></div> </div> </div>', PULSE.app.templates.listfilter = ' <div class="dropDown inactive {{#visibleOnMobile}}mobile{{/visibleOnMobile}} {{#dropdown.additionalClass}}{{dropdown.additionalClass}}{{/dropdown.additionalClass}}" data-dropdown-block="{{dropdown.name}}" data-dropdown-default="{{dropdown.defaultOption}}"> <div class="label js-dropdown-label" id="dd-{{dropdown.name}}"> {{#dropdown.mobileLabel}} <span class="u-hide-tablet"> {{dropdown.label}} </span> <span class="u-show-tablet"> {{dropdown.mobileLabel}} </span> {{/dropdown.mobileLabel}} {{^dropdown.mobileLabel}} {{dropdown.label}} {{/dropdown.mobileLabel}} </div> {{#defaultItem}} <div class="current" data-dropdown-current="{{dropdown.name}}" role="button" tabindex="0" aria-expanded="false" aria-labelledby="dd-{{dropdown.name}}"> {{defaultItem.optionName}} </div> {{/defaultItem}} {{^defaultItem}} <div class="current" data-dropdown-current="{{dropdown.name}}" role="button" tabindex="0" aria-expanded="false" aria-labelledby="dd-{{dropdown.name}}"> {{dropdown.defaultOption}} </div> {{/defaultItem}} <div class="dropdownListContainer"> <header class="dropdownMobileHeader"> <button class="dropdownMobileHeaderButton js-dropdown-close"> <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.926016 5.01732C0.938708 4.74167 1.02892 4.45424 1.24084 4.2603C1.24115 4.2603 1.24146 4.25999 1.24177 4.25968L2.41825 3.0832L4.2987 1.20275L4.72967 0.771778C4.92345 0.577997 5.21305 0.458021 5.48669 0.456956C5.74963 0.456976 6.06328 0.573122 6.24376 0.771893C6.42982 0.975935 6.56952 1.24307 6.55869 1.52896C6.54662 1.81361 6.4499 2.07995 6.24387 2.28598L5.06429 3.46556L4.58402 3.94583L6.21051 3.9458C7.41328 3.94589 8.61854 3.94598 9.82007 3.94607C10.8582 3.94615 11.8938 3.94623 12.9329 3.9463C13.4355 3.94634 13.9419 3.94018 14.4445 3.94642L14.4662 3.94642C14.7425 3.94644 15.0278 4.06584 15.2233 4.26135C15.4099 4.44803 15.5486 4.75006 15.5382 5.01842C15.5257 5.29392 15.4355 5.58166 15.2234 5.77544C15.0116 5.96922 14.7541 6.09091 14.4664 6.09026L13.2214 6.09017L10.2539 6.0901L6.64415 6.08967C5.95579 6.08962 5.26743 6.08957 4.57938 6.08952L5.8131 7.32324L6.24444 7.75458C6.43825 7.94839 6.55811 8.23785 6.55938 8.51165C6.55924 8.77443 6.44314 9.08806 6.2444 9.26851C6.04038 9.45454 5.77342 9.59436 5.48753 9.58349C5.20413 9.56889 4.93575 9.47384 4.73047 9.26855L3.55055 8.08864L1.66997 6.20806L1.23878 5.77687C1.12916 5.66725 1.05132 5.5367 1.00031 5.39701C0.95115 5.27282 0.921219 5.14181 0.926016 5.01732Z"/> </svg> <span>Back</span> </button> <h4> {{dropdown.label}}</h4> </header> <ul class="dropdownList" data-dropdown-list="{{dropdown.name}}" role="listbox" aria-labelledby="dd-{{dropdown.name}}"> {{#dropdown.data}} <li role="option" tabindex="0" data-option-name="{{optionName}}" data-option-id="{{optionId}}" data-option-index="{{#getIndex}}{{/getIndex}}">{{optionName}}</li> {{/dropdown.data}} </ul> </div> </div> ', PULSE.app.templates.listfilteroption = '{{#config.defaultOption}} <li role="option" tabindex="0" data-option-name="{{config.defaultOption}}" data-option-id="-1" data-option-index="-1" class="{{class}}">{{config.defaultOption}}</li> {{/config.defaultOption}} {{#optionData}} <li role="option" tabindex="0" data-option-name="{{optionName}}" data-option-id="{{optionId}}" data-option-index="{{#getIndex}}{{/getIndex}}" class="{{class}}">{{optionName}}</li> {{/optionData}}', PULSE.app.templates.loader = '<div class="loader-small" data-dropdown-loader="active"> <div class="line"></div> </div>', PULSE.app.templates.mobilefooter = '<div class="pageFilter__container"> <div class="pageFilter__filter-btn" tabindex="0" role="button">{{ filterText }}</div> <div class="global-btn filter-button filter-button--apply" role="button" tabindex="0">{{ showResultsText }}</div> <div class="global-btn filter-button filter-button--reset js-reset-button" role="button" tabindex="0"> <span class="filter-button__text">{{ resetText }}</span> </div> </div>', PULSE.app.templates.mobileheader = '<header class="mobileHeader js-mobile-header"> <h4>{{title}}</h4> <button class="close" role="button"> Cancel <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"> <path d="M13.878.304a.98.98 0 0 0-1.418 0L7.09 5.673 1.723.303a.98.98 0 0 0-1.418 0 .98.98 0 0 0 0 1.42L5.673 7.09.303 12.46a.98.98 0 0 0 0 1.418c.203.203.406.304.71.304.304 0 .506-.101.71-.304L7.09 8.509l5.369 5.369c.202.203.506.304.709.304.202 0 .506-.101.709-.304a.98.98 0 0 0 0-1.418L8.509 7.09l5.369-5.368a.98.98 0 0 0 0-1.418z" fill-rule="evenodd"/> </svg> </button> </header>', PULSE.app.templates.resetbutton = '<div class="filter-button filter-button--reset u-hide-desktop" role="button" tabindex="0"> <div class="filter-button__icon"> <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0796 0.5C8.60097 0.5 4.15932 5.06693 4.15932 10.7C4.15932 11.3213 4.219 11.9261 4.32237 12.5167L0.878126 8.97313L0 9.87602L4.9608 14.9767L4.964 14.9723L5.39987 15.4216L5.83468 14.9723L5.83788 14.9767L10.7987 9.87602L9.92055 8.97313L5.76018 13.2531C5.52147 12.4291 5.39999 11.5733 5.39999 10.7C5.39999 5.77801 9.29301 1.77548 14.0798 1.77548C18.8665 1.77548 22.7595 5.77829 22.7595 10.7C22.7595 15.6218 18.8665 19.6246 14.0798 19.6246V20.9C19.5584 20.9 24 16.3331 24 10.7C24 5.0669 19.5584 0.5 14.0798 0.5"/> </svg> </div> <span class="filter-button__text">{{#translator}}action.resetfilters{{/translator}}</span> </div> <div class="filter-button filter-button--reset js-reset-button" role="button" tabindex="0"> <span class="filter-button__text">{{ buttonText }}</span> </div> ', PULSE.app.templates.scrollloader = '{{ load }}<div class="loader-small"> <div class="line"></div> </div>',
    function(e, t) {
        const n = ["click", "keypress"],
            a = ["mousedown", "touchdown"],
            o = 13,
            i = 32;
        e.addAriaClickListener = function(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            const s = i ? n.filter((e => "click" !== e)).concat(a) : n,
                c = i ? a : "click",
                d = e => r(e, o, c) ? t(e) : null;
            for (let t = 0; t < s.length; t++) e.addEventListener(s[t], d, l);
            return d
        }, e.addMultiAriaClickListener = function(t, n) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            Array.prototype.slice.call(t).forEach((t => e.addAriaClickListener(t, n, a, o)))
        }, e.removeAriaClickListener = function(e, t) {
            const o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? n.filter((e => "click" !== e)).concat(a) : n;
            for (let n = 0; n < o.length; n++) e.removeEventListener(o[n], t)
        }, e.resetAriaMenuAttributes = e => {
            e.setAttribute("aria-expanded", "false"), e.setAttribute("aria-hidden", "true")
        }, e.toggleAriaMenuAttributes = e => {
            const t = e.getAttribute("aria-expanded"),
                n = e.getAttribute("aria-hidden");
            if (void 0 !== t) {
                const n = "true" === t ? "false" : "true";
                e.setAttribute("aria-expanded", n)
            }
            if (void 0 !== n) {
                const t = "true" === n ? "false" : "true";
                e.setAttribute("aria-hidden", t)
            }
        }, e.toggleZIndex = function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "a";
            const a = [].slice.call(e.querySelectorAll(n));
            for (let e = 0; e < a.length; e++) {
                const o = "-1" === a[e].getAttribute("tabindex");
                t.style.hasClass(a[e], "js-no-keyboard-focus") || (o && l(n) ? a[e].removeAttribute("tabindex") : o ? a[e].setAttribute("tabindex", "0") : a[e].setAttribute("tabindex", "-1"))
            }
        };
        const l = e => "a" === e,
            r = (e, t, n) => {
                const a = Array.isArray(n) ? n.includes(e.type) : e.type === n;
                return !(e.which !== o && !a) || !(!t || e.which !== i)
            }
    }(PULSE.app.common, PULSE.core),
    function(e) {
        const t = [],
            n = function(e) {
                let n;
                for (let a = 0; a < t.length; a++) n = t[a], !n || e.target === n.preventTriggerOn || n.preventTriggerOn && n.preventTriggerOn.contains(e.target) || n.element === e.target || n.preventTriggerOn === e.target || "function" != typeof n.callback || n.callback(n.element)
            };
        e.closeOnOutsideClick = {
            addElement: function(e, a, o) {
                0 === t.length && document.addEventListener("click", n), t.push({
                    element: e,
                    callback: a,
                    preventTriggerOn: o
                })
            },
            removeElement: function(e) {
                for (let n = 0; n < t.length; n++) t[n] && t[n].element === e && t.splice(n, 1);
                0 === t.length && document.removeEventListener("click", n)
            }
        }
    }(PULSE.app.common),
    function(e) {
        void 0 === e.constants && (e.constants = {}), e.constants.VIDEO_JWT = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NpZCI6IjI1MDg2ODkwMjUwMDEiLCJpYXQiOjE2ODkxNjEwODIsImV4cCI6MTY5MDg4NzYwMH0.CvBVzBqkXxtAXhMhGe3OkhL2b8PrZrw4AoOBuji-HVCGX8RHqrHOCxYfiprAlU-_m0gEt0ES60mImazeBa6UqsaDqoLy3eF8YJUeOvs6wY25HxpffSu-i0YR_-MOaTMGoFLuJbzzlIDhHqUPuxs4DMLrrgY8qy7sRExlEG-slTgAnwmu2PqeeOSZeyd6Z9g8DIBmZeaQ4uBHlTC5tJ7JkyNQcF8awe0Js95oCsiO-R3FurNrIQkguBWotVwWZDit6z6VL1olP7bXAU5HIJc0gChuwyOYIiaPnjNb4hdxLfZtycd6Bdlg7dhqo9JFwgp0Dw036ZBRP31WOby__BYL9Q", e.constants.InfiniteScrollWidget = {
            READY: "app.InfiniteScrollWidget.ready"
        }, e.constants.Search = {
            SEARCH_FIRED: "search.fired"
        }, e.constants.footballMatchTimeline = {}, e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS = {
            GOAL: "G",
            YELLOW_CARD: "Y",
            YELLOW_RED_CARD: "YR",
            RED_CARD: "R",
            OWN_GOAL: "O",
            SUB_OFF: "OFF",
            SUB_SIMPLE: "sub",
            SUB_ON: "ON",
            PENALTY: "P",
            PENALTY_MISSED: "M",
            PENALTY_SAVED: "S"
        }, e.constants.footballFixtureType = {
            REGULAR: "REGULAR",
            FIRST_LEG: "FIRST_LEG",
            SECOND_LEG: "SECOND_LEG"
        }, e.constants.footballDetailMapping = {
            BASIC: 0,
            STANDARD: 1,
            DETAILED: 2
        }, e.constants.footballOrderMapping = {
            ASCENDING: "asc",
            DESCENDING: "desc"
        }, e.constants.playerPositions = {
            F: "FWD",
            M: "MID",
            D: "DEF",
            G: "GKP"
        }, e.constants.footballMatchTimeline.EVENT_LABELS = {
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.GOAL]: "label.timeline.event.goal",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.YELLOW_CARD]: "label.timeline.event.yellowcard",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.YELLOW_RED_CARD]: "label.timeline.event.yellowred",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.RED_CARD]: "label.timeline.event.redcard",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.OWN_GOAL]: "label.timeline.event.owngoal",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.SUB_OFF]: "label.timeline.event.suboff",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.SUB_SIMPLE]: "label.timeline.event.sub",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.SUB_ON]: "label.timeline.event.subon",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.PENALTY]: "label.timeline.event.goal",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.PENALTY_MISSED]: "label.timeline.event.misspen",
            [e.constants.footballMatchTimeline.EVENT_DESCRIPTIONS.PENALTY_SAVED]: "label.timeline.event.misspen"
        }, e.constants.footballMatchTimeline.TIMELINE_PHASE = {
            FIRST_HALF: "1",
            HALF_TIME: "H",
            SECOND_HALF: "2",
            FIRST_HALF_EXTRA_TIME: "X1",
            SECOND_HALF_EXTRA_TIME: "X2",
            FULL_TIME: "F"
        }, e.constants.footballMatchTimeline.TIMELINE_PHASES = [{
            phase: e.constants.footballMatchTimeline.TIMELINE_PHASE.FIRST_HALF,
            min: 0,
            max: 45,
            label: "label.HT"
        }, {
            phase: e.constants.footballMatchTimeline.TIMELINE_PHASE.SECOND_HALF,
            min: 45,
            max: 90,
            label: "label.FT"
        }, {
            phase: e.constants.footballMatchTimeline.TIMELINE_PHASE.FIRST_HALF_EXTRA_TIME,
            min: 90,
            max: 105,
            label: "label.HTET"
        }, {
            phase: e.constants.footballMatchTimeline.TIMELINE_PHASE.SECOND_HALF_EXTRA_TIME,
            min: 105,
            max: 120,
            label: "label.AET"
        }], e.constants.teamOfTheSeason = {
            POSITION_KEYS: ["GK", "DEF", "MID", "FWD"],
            NUMBER_OF_VOTES: {
                goalkeeper: 1,
                defender: 4,
                midfielder: 4,
                forward: 2
            }
        }, e.constants.clubColours = {
            t3: {
                colours: ["#ff0203", "#be000a"],
                inverted: !0
            },
            t7: {
                colours: ["#7d1142", "#a6245f"]
            },
            t94: {
                colours: ["#ff1c24", "#c10000"],
                inverted: !0
            },
            t36: {
                colours: ["#0054a6", "#1471cc"]
            },
            t91: {
                colours: ["#df1e26", "#af0c13"],
                inverted: !0
            },
            t8: {
                colours: ["#2145f6", "#1934be"],
                inverted: !0
            },
            t31: {
                colours: ["#0d5dba", "#093466"],
                inverted: !0
            },
            t11: {
                colours: ["#00019e", "#3334b1"]
            },
            t54: {
                colours: ["#fff", "#e3e3e3"]
            },
            t2: {
                colours: ["#fff", "#e3e3e3"]
            },
            t13: {
                colours: ["#003090", "#0b56a4"],
                inverted: !0
            },
            t14: {
                colours: ["#dc0714", "#911712"],
                inverted: !0
            },
            t43: {
                colours: ["#98c5e9", "#6a9bc2"],
                inverted: !0
            },
            t1: {
                colours: ["#ea0c0c", "#b40808"],
                inverted: !0
            },
            t4: {
                colours: ["#444041", "#231f20"],
                inverted: !0
            },
            t17: {
                colours: ["#d93d56", "#c2112e"],
                inverted: !0
            },
            t20: {
                colours: ["#c80028", "#FC2651"],
                inverted: !0
            },
            t6: {
                colours: ["#fff", "#e3e3e3"]
            },
            t21: {
                colours: ["#963849", "#6f2130"],
                inverted: !0
            },
            t39: {
                colours: ["#f99808", "#ffca5e"],
                inverted: !0
            },
            t49: {
                colours: ["#fa3844", "#e30613"]
            },
            t90: {
                colours: ["#81204c", "#500024"]
            },
            t102: {
                colours: ["#fa4616", "#de3c11"]
            },
            t40: {
                colours: ["#0333a0", "#0D4DDE"]
            }
        }, e.constants.footballMatchTimeline.TIMELINE_PHASES_NORMAL = [e.constants.footballMatchTimeline.TIMELINE_PHASES[0], e.constants.footballMatchTimeline.TIMELINE_PHASES[1]], e.constants.footballMatchTimeline.TIMELINE_PHASES_EXTRA = [e.constants.footballMatchTimeline.TIMELINE_PHASES[2], e.constants.footballMatchTimeline.TIMELINE_PHASES[3]], e.constants.footballMatchTimeline.PHASE_ORDERING = [e.constants.footballMatchTimeline.TIMELINE_PHASE.FIRST_HALF, e.constants.footballMatchTimeline.TIMELINE_PHASE.HALF_TIME, e.constants.footballMatchTimeline.TIMELINE_PHASE.SECOND_HALF, e.constants.footballMatchTimeline.TIMELINE_PHASE.FIRST_HALF_EXTRA_TIME, e.constants.footballMatchTimeline.TIMELINE_PHASE.SECOND_HALF_EXTRA_TIME, e.constants.footballMatchTimeline.TIMELINE_PHASE.FULL_TIME], e.constants.dataCapture = {}, e.constants.dataCapture.DEFAULT_FORM_ELEMENTS = [{
            questionId: "firstName",
            elementType: "text",
            title: "firstName",
            mandatory: !0,
            signedIn: !1,
            additionalProperties: {}
        }, {
            questionId: "lastName",
            elementType: "text",
            title: "lastName",
            mandatory: !1,
            signedIn: !1,
            additionalProperties: {}
        }, {
            questionId: "dateOfBirth",
            elementType: "dateofbirth",
            title: "dateOfBirth",
            mandatory: !1,
            signedIn: !1,
            additionalProperties: {}
        }, {
            questionId: "email",
            elementType: "email",
            title: "emailAddress",
            mandatory: !0,
            signedIn: !1,
            additionalProperties: {}
        }, {
            questionId: "phoneNumber",
            elementType: "tel",
            title: "phoneNumber",
            mandatory: !1,
            signedIn: !1,
            additionalProperties: {}
        }, {
            questionId: "gender",
            elementType: "gender",
            title: "gender",
            mandatory: !1,
            signedIn: !1,
            additionalProperties: {}
        }, {
            questionId: "country",
            elementType: "country",
            title: "country",
            mandatory: !1,
            additionalProperties: {}
        }, {
            questionId: "postcode",
            elementType: "postcode",
            title: "postcode",
            mandatory: !1,
            signedIn: !1,
            additionalProperties: {}
        }, {
            elementType: "container",
            class: "js-favourite-club-container",
            signedIn: !0
        }, {
            elementType: "container",
            containerType: "customTextField",
            class: ""
        }, {
            elementType: "container",
            containerType: "customDropdownField",
            class: ""
        }, {
            elementType: "container",
            containerType: "dataCaptureTypeSpecificFields",
            class: ""
        }, {
            elementType: "container",
            class: "data-capture-modal__opt-in-container js-opt-in-container",
            signedIn: !0
        }, {
            elementType: "container",
            containerType: "customCheckboxField",
            class: ""
        }, {
            elementType: "container",
            class: "data-capture-modal__opt-in-container js-club-opt-in-container",
            signedIn: !0
        }, {
            questionId: "terms",
            elementType: "checkbox",
            title: "terms.generic",
            mandatory: !0,
            signedIn: !0,
            campaignSpecificTitle: !0,
            additionalProperties: {}
        }], e.constants.dataCapture.CUSTOM_TEXT_ELEMENT = {
            questionId: "customTextField",
            elementType: "text",
            title: "customTextField",
            campaignSpecificTitle: !0,
            signedIn: !0,
            mandatory: !0,
            additionalProperties: {},
            additionalClass: "data-capture-modal__custom-field-container"
        }, e.constants.dataCapture.CUSTOM_CHECKBOX_ELEMENT = {
            questionId: "customCheckboxField",
            elementType: "checkbox",
            title: "customCheckboxField",
            campaignSpecificTitle: !0,
            mandatory: !0,
            signedIn: !0,
            additionalProperties: {},
            additionalClass: "data-capture-modal__custom-field-container"
        }, e.constants.dataCapture.CUSTOM_DROPDOWN_ELEMENT = {
            questionId: "customDropdownField",
            elementType: "dropdown",
            title: "customDropdownField",
            campaignSpecificTitle: !0,
            mandatory: !0,
            signedIn: !0,
            additionalProperties: {}
        }, e.constants.dataCapture.PL_MORNINGS_LIVE = {}, e.constants.dataCapture.PL_MORNINGS_LIVE.FIELDS = [{
            elementType: "container",
            containerType: "guestsContainer",
            class: ""
        }, {
            questionId: "numberOfGuestsUnder18",
            elementType: "dropdown",
            title: "numberOfGuestsUnder18",
            mandatory: !0,
            signedIn: !0,
            additionalProperties: {
                dropdownOptions: "0,1,2,3"
            },
            additionalInputClass: "js-guest-dropdown",
            hideSelectOption: !0
        }], e.constants.dataCapture.PL_MORNINGS_LIVE.GUEST_OBJECT = [{
            questionId: "guestDateOfBirth",
            elementType: "dateofbirth",
            title: "guestDateOfBirth",
            campaignSpecificTitle: !1,
            mandatory: !0,
            signedIn: !0,
            additionalProperties: {},
            additionalClass: "js-guest-dob u-hide"
        }, {
            questionId: "guestEmail",
            elementType: "email",
            title: "guestEmail",
            campaignSpecificTitle: !1,
            mandatory: !0,
            signedIn: !0,
            additionalProperties: {},
            additionalClass: "js-guest-email u-hide"
        }, {
            questionId: "guestName",
            elementType: "text",
            title: "guestName",
            campaignSpecificTitle: !1,
            mandatory: !0,
            signedIn: !0,
            additionalProperties: {},
            additionalClass: "js-guest-name u-hide"
        }], e.constants.dataCapture.PL_MORNINGS_LIVE_CLUBS = {
            questionId: "clubAccessCode",
            elementType: "text",
            title: "clubAccessCode",
            campaignSpecificTitle: !1,
            mandatory: !0,
            signedIn: !0,
            additionalProperties: {},
            additionalInputClass: "js-club-access-code-input",
            additionalClass: "js-club-access-code"
        }, e.constants.dataCapture.VALID_ACCESS_CODES = ["arsenal_plml_nsh", "bournemouth_plml_nsh", "brentford_plml_nsh", "brighton_plml_nsh", "burnley_plml_nsh", "chelsea_plml_nsh", "crystalpalace_plml_nsh", "everton_plml_nsh", "forest_plml_nsh", "fulham_plml_nsh", "luton_plml_nsh", "liverpool_plml_nsh", "mancity_plml_nsh", "manu_plml_nsh", "newcastle_plml_nsh", "sheffieldu_plml_nsh", "spurs_plml_nsh", "villa_plml_nsh", "westham_plml_nsh", "wolves_plml_nsh", "nashvillesc_plml_nsh"]
    }(PULSE.app.common),
    function(e, t) {
        t.content = {};
        const n = [1, 2];
        t.content.hasTag = function(e, t) {
            let n = !1;
            return e.tags.length > 0 && e.tags.forEach((function(e) {
                void 0 !== e.label && e.label === t && (n = !0)
            })), n
        }, t.content.getContentModel = function(e, n, o) {
            if ("photo" !== e.type) {
                const i = t.content.getImageFromContentItem(e);
                e.mediaQueryConfig = a(i, n), e.link = t.generateContentUrl(e.type, e, o)
            } else e.mediaQueryConfig = a(e, n), e.playlist ? (e.link = t.generateContentUrl(e.playlist.type, e.playlist, "PHOTO"), e.link += t.generateContentUrl(e.type, e, o)) : e.link = "";
            return e
        }, t.content.getTotalDuration = function(e) {
            let n = e.reduce((function(e, t) {
                return e + t.duration
            }), 0);
            return t.durationToTime(n)
        }, t.content.getVariantUrls = function(e, n) {
            let a, o = {},
                i = function(n, a) {
                    let i = t.image.getVariantByTag(e, n);
                    i && (o[a] = i.url)
                };
            if (e.length)
                if (_.isArray(n)) n.forEach((function(e) {
                    e.tags.forEach((function(t, n) {
                        let a = e.name + (0 === n ? "" : "Retina");
                        i(t, a)
                    }))
                }));
                else if ("object" == typeof n)
                for (a in n)({}).hasOwnProperty.call(n, a) && i(n[a], a);
            return o
        }, t.content.getVariants = function(e) {
            let t = e.leadMedia || e.coverItem || e.thumbnail;
            if (t)
                if ("video" === t.type) {
                    if (null !== t.thumbnail && null !== t.thumbnail.variants && t.thumbnail.variants.length > 0) return t.thumbnail.variants
                } else if (null !== t.variants || t.variants.length > 0) return t.variants;
            return []
        }, t.content.getImageFromContentItem = function(e) {
            let t;
            if ("photo" === e.type) t = e;
            else if ("video" === e.type && e.thumbnail) t = e.thumbnail;
            else {
                let n = e.leadMedia || e.coverItem || e.promoItem;
                "playlist" === e.type && e.coverItem && "playlist" === e.coverItem.type && (n = e.coverItem.coverItem), n && ("photo" === n.type ? t = n : "video" === n.type && n.thumbnail && (t = n.thumbnail))
            }
            return t
        };
        const a = function(e, a) {
            if (e && e.onDemandUrl && Array.isArray(a)) return a.map((a => {
                let o = { ...a
                };
                const i = o.multipliers || n;
                return o.variantUrls = i.map((n => {
                    const a = (o.size.height || 0) * n,
                        i = (o.size.width || 0) * n;
                    return t.image.getOnDemandImageUrl(e, a, i)
                })), o
            }))
        }
    }(PULSE.app, PULSE.app.common),
    function(e, t, n, a) {
        const o = 60,
            i = 60;
        e.momentGetDaysFromRange = function(e, n, o, i) {
            let l = e instanceof Date ? e : new Date(e),
                r = n instanceof Date ? n : new Date(n),
                s = [],
                c = l.getTime();
            i && l.toLocaleDateString() !== r.toLocaleDateString() && s.push({
                date: l,
                string: a && o ? a(l).locale(t.language).format(o) : l.toLocaleDateString(),
                std: !!a && a(l).format("DD-MM-YYYY")
            });
            do {
                c += 864e5;
                let e = new Date(c);
                s.push({
                    date: e,
                    string: a && o ? a(e).locale(t.language).format(o) : e.toLocaleDateString(),
                    std: !!a && a(e).format("DD-MM-YYYY")
                })
            } while (c < r.getTime());
            return s
        }, e.getTime = function(e) {
            if (e) {
                let t = "string" == typeof e ? new Date(e) : e,
                    n = t.getHours(),
                    a = t.getMinutes();
                const o = 10;
                return n < o && (n = "0" + n), a < o && (a = "0" + a), n + ":" + a
            }
            return null
        }, e.getSinceString = function(e, t) {
            if (e) {
                let n, a = new Date,
                    o = Math.floor((a - e) / 1e3);
                return o <= 0 ? t ? t.justNow : "just now" : o < i ? (n = Math.round(o), n + (t ? t.seconds : "s")) : o < 3600 ? (n = Math.round(o / i), n + (t ? t.minutes : "m")) : o < 86400 ? (n = Math.round(o / 3600), n + (t ? t.hours : "h")) : (n = Math.round(o / 86400), n + (t ? t.days : "d"))
            }
            return ""
        }, e.durationToTime = function(e) {
            let t = parseInt(e, 10);
            const n = 3600;
            if (t) {
                let e = Math.floor(t / n),
                    a = Math.floor((t - e * n) / o),
                    i = t - e * n - a * o;
                const l = 10;
                e < l && (e = "0" + e), a < l && (a = "0" + a), i < l && (i = "0" + i);
                let r = a + ":" + i;
                return e > 0 ? e + ":" + r : r
            }
            return "00:00"
        }
    }(PULSE.app.common, PULSE.app, PULSE.core, moment), PULSE.app.common.debounce = function(e) {
        let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
        return function(a) {
            t && clearTimeout(t), t = setTimeout(e, n, a)
        }
    }, PULSE.app.common.fireEvent = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.body).dispatchEvent(new CustomEvent(e, {
            detail: t
        }))
    },
    function(e) {
        e.icon = {}, e.icon.renderSVG = function(e) {
            return `<svg class=${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"icon"}>\n                    <use class='icon' xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${window.BASE_RESOURCE_URL}/${window.RESOURCE_VERSION}/i/elements/icons/${e}.svg"></use>\n                </svg>`
        }, e.icon.renderSpriteSVG = function(e, t, n) {
            return `<svg class=${n}>\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${window.BASE_RESOURCE_URL}/${window.RESOURCE_VERSION}/i/svg-output/icons.svg#${t}-${e}"></use>\n                </svg>`
        };
        const t = [
            ["32.55%", "#FFFFFF"],
            ["64.38%", "#F5F2F5"]
        ];
        e.icon.brandGradientSVG = function(e) {
            return `<svg class="${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg-gradient"}" viewBox="${e}" fill="none" xmlns="http://www.w3.org/2000/svg" >\n                    <defs> \n                        <linearGradient id="svg-gradient-var" x1="671.5" y1="-2543.5" x2="2774.42" y2="-903.522" gradientUnits="userSpaceOnUse">\n                            ${(arguments.length>2&&void 0!==arguments[2]?arguments[2]:t).map((e=>`<stop offset='${e[0]}' stop-color='${e[1]}' />`))}\n                        </linearGradient>\n                    </defs>\n                    <path d="M1476.18 343.773C1417.62 314.292 1359.88 282.402 1303.25 247.956H1370.01C1238.91 168.211 1113.73 74.8191 997.693 -33.3461H1053.33C1037.45 -48.144 1021.68 -63.1311 1006.15 -78.4882C930.279 -153.539 860.623 -232.469 797.157 -314.639H841.666C772.051 -404.776 709.962 -498.833 655.282 -595.941H688.664C637.256 -687.236 592.418 -781.22 554.223 -877.242H576.478C543.418 -960.341 515.278 -1044.94 492.109 -1130.61L520.117 -1158.54C554.586 -1062.74 595.542 -968.768 642.869 -877.242H620.615C670.679 -780.455 727.914 -686.422 792.377 -595.941H758.995C829.022 -497.649 907.547 -403.542 994.602 -314.639H950.093C959.003 -305.547 967.971 -296.487 977.054 -287.501C1073.1 -192.49 1175.92 -107.911 1283.7 -33.3378H1228.07C1356.01 55.1788 1490.99 129.53 1630.08 190.268L1476.18 343.781V343.773ZM1448.17 371.708C1309.06 310.97 1174.09 236.619 1046.15 148.102H1101.78C994.008 73.5283 891.194 -11.0503 795.138 -106.062C786.055 -115.047 777.079 -124.107 768.177 -133.199H812.686C725.63 -222.103 647.106 -316.21 577.079 -414.501H610.461C545.997 -504.982 488.763 -599.007 438.699 -695.803H460.953C413.618 -787.328 372.67 -881.304 338.201 -977.104L310.193 -949.169C333.362 -863.505 361.502 -778.901 394.562 -695.803H372.307C410.51 -599.78 455.349 -505.796 506.748 -414.501H473.366C528.046 -317.393 590.143 -223.336 659.75 -133.199H615.241C678.707 -51.0295 748.363 27.9094 824.233 102.952C839.762 118.309 855.529 133.296 871.412 148.094H815.776C931.82 256.25 1057 349.651 1188.1 429.395H1121.34C1177.97 463.842 1235.71 495.731 1294.26 525.212L1448.17 371.7V371.708ZM1812 8.81189C1672.89 -51.9257 1537.93 -126.277 1409.98 -214.794H1465.62C1357.84 -289.368 1255.03 -373.946 1158.97 -468.958C1149.89 -477.943 1140.91 -487.003 1132.01 -496.096H1176.52C1089.46 -584.999 1010.94 -679.105 940.911 -777.397H974.293C909.83 -867.878 852.595 -961.903 802.531 -1058.7H824.785C777.45 -1150.22 736.502 -1244.2 702.033 -1340L674.025 -1312.06C697.194 -1226.4 725.334 -1141.8 758.394 -1058.7H736.139C774.342 -962.676 819.181 -868.692 870.58 -777.397H837.198C891.878 -680.289 953.975 -586.232 1023.58 -496.096H979.073C1042.54 -413.926 1112.19 -334.987 1188.07 -259.944C1203.59 -244.587 1219.36 -229.6 1235.24 -214.802H1179.61C1295.65 -106.645 1420.83 -13.2455 1551.93 66.4993H1485.17C1541.8 100.946 1599.54 132.835 1658.09 162.316L1812 8.80359V8.81189ZM901.983 916.487C762.877 855.75 627.91 781.398 499.964 692.882H555.6C447.823 618.308 345.009 533.729 248.953 438.718C239.87 429.732 230.894 420.673 221.992 411.58H266.501C179.445 322.677 100.921 228.57 30.8943 130.279H64.2756C-0.187485 39.7971 -57.4221 -54.2277 -107.486 -151.023H-85.2316C-132.567 -242.548 -173.515 -336.524 -207.984 -432.324L-236 -404.381C-212.831 -318.717 -184.692 -234.114 -151.632 -151.015H-173.886C-135.683 -54.9922 -90.8447 38.9915 -39.4456 130.287H-72.827C-18.1475 227.395 43.9501 321.452 113.556 411.588H69.0479C132.514 493.758 202.169 572.697 278.04 647.74C293.568 663.097 309.336 678.084 325.219 692.882H269.583C385.627 801.038 510.803 894.438 641.905 974.183H575.142C631.775 1008.63 689.513 1040.52 748.066 1070L901.975 916.487H901.983ZM1265.81 553.592C1126.71 492.854 991.742 418.502 863.796 329.986H919.432C811.655 255.412 708.841 170.833 612.785 75.822C603.702 66.8364 594.726 57.7767 585.824 48.6842H630.333C543.277 -40.2189 464.753 -134.326 394.726 -232.617H428.108C363.645 -323.099 306.41 -417.124 256.346 -513.919H278.6C231.265 -605.444 190.317 -699.42 155.848 -795.22L127.84 -767.285C151.009 -681.621 179.149 -597.018 212.209 -513.919H189.954C228.157 -417.896 272.996 -323.913 324.395 -232.617H291.013C345.693 -135.51 407.79 -41.452 477.397 48.6842H432.888C496.354 130.854 566.01 209.793 641.88 284.835C657.409 300.192 673.176 315.18 689.059 329.978H633.424C749.467 438.134 874.643 531.534 1005.75 611.279H938.983C995.616 645.725 1053.35 677.615 1111.91 707.096L1265.81 553.583V553.592ZM1083.9 735.04C944.793 674.302 809.826 599.95 681.88 511.434H737.516C629.739 436.86 526.925 352.281 430.869 257.27C421.786 248.284 412.81 239.225 403.908 230.132H448.417C361.361 141.229 282.837 47.1221 212.81 -51.1694H246.192C181.729 -141.651 124.494 -235.676 74.4301 -332.471H96.6844C49.3488 -423.996 8.401 -517.972 -26.0683 -613.772L-54.0757 -585.837C-30.9066 -500.173 -2.76733 -415.57 30.2926 -332.471H8.03833C46.2414 -236.448 91.0796 -142.465 142.479 -51.1694H109.097C163.777 45.9382 225.874 139.996 295.481 230.132H250.972C314.438 312.302 384.094 391.241 459.964 466.283C475.493 481.641 491.26 496.627 507.143 511.425H451.508C567.551 619.582 692.727 712.982 823.829 792.727H757.067C813.699 827.173 871.437 859.063 929.99 888.544L1083.9 735.031V735.04Z" \n                        fill="url(#svg-gradient-var)"/>\n                </svg>`
        }, e.icon.colouredBrandSVG = function(e) {
            return `<svg class="${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg-gradient"}" viewBox="${e}" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M1476.18 343.773C1417.62 314.292 1359.88 282.402 1303.25 247.956H1370.01C1238.91 168.211 1113.73 74.8191 997.693 -33.3461H1053.33C1037.45 -48.144 1021.68 -63.1311 1006.15 -78.4882C930.279 -153.539 860.623 -232.469 797.157 -314.639H841.666C772.051 -404.776 709.962 -498.833 655.282 -595.941H688.664C637.256 -687.236 592.418 -781.22 554.223 -877.242H576.478C543.418 -960.341 515.278 -1044.94 492.109 -1130.61L520.117 -1158.54C554.586 -1062.74 595.542 -968.768 642.869 -877.242H620.615C670.679 -780.455 727.914 -686.422 792.377 -595.941H758.995C829.022 -497.649 907.547 -403.542 994.602 -314.639H950.093C959.003 -305.547 967.971 -296.487 977.054 -287.501C1073.1 -192.49 1175.92 -107.911 1283.7 -33.3378H1228.07C1356.01 55.1788 1490.99 129.53 1630.08 190.268L1476.18 343.781V343.773ZM1448.17 371.708C1309.06 310.97 1174.09 236.619 1046.15 148.102H1101.78C994.008 73.5283 891.194 -11.0503 795.138 -106.062C786.055 -115.047 777.079 -124.107 768.177 -133.199H812.686C725.63 -222.103 647.106 -316.21 577.079 -414.501H610.461C545.997 -504.982 488.763 -599.007 438.699 -695.803H460.953C413.618 -787.328 372.67 -881.304 338.201 -977.104L310.193 -949.169C333.362 -863.505 361.502 -778.901 394.562 -695.803H372.307C410.51 -599.78 455.349 -505.796 506.748 -414.501H473.366C528.046 -317.393 590.143 -223.336 659.75 -133.199H615.241C678.707 -51.0295 748.363 27.9094 824.233 102.952C839.762 118.309 855.529 133.296 871.412 148.094H815.776C931.82 256.25 1057 349.651 1188.1 429.395H1121.34C1177.97 463.842 1235.71 495.731 1294.26 525.212L1448.17 371.7V371.708ZM1812 8.81189C1672.89 -51.9257 1537.93 -126.277 1409.98 -214.794H1465.62C1357.84 -289.368 1255.03 -373.946 1158.97 -468.958C1149.89 -477.943 1140.91 -487.003 1132.01 -496.096H1176.52C1089.46 -584.999 1010.94 -679.105 940.911 -777.397H974.293C909.83 -867.878 852.595 -961.903 802.531 -1058.7H824.785C777.45 -1150.22 736.502 -1244.2 702.033 -1340L674.025 -1312.06C697.194 -1226.4 725.334 -1141.8 758.394 -1058.7H736.139C774.342 -962.676 819.181 -868.692 870.58 -777.397H837.198C891.878 -680.289 953.975 -586.232 1023.58 -496.096H979.073C1042.54 -413.926 1112.19 -334.987 1188.07 -259.944C1203.59 -244.587 1219.36 -229.6 1235.24 -214.802H1179.61C1295.65 -106.645 1420.83 -13.2455 1551.93 66.4993H1485.17C1541.8 100.946 1599.54 132.835 1658.09 162.316L1812 8.80359V8.81189ZM901.983 916.487C762.877 855.75 627.91 781.398 499.964 692.882H555.6C447.823 618.308 345.009 533.729 248.953 438.718C239.87 429.732 230.894 420.673 221.992 411.58H266.501C179.445 322.677 100.921 228.57 30.8943 130.279H64.2756C-0.187485 39.7971 -57.4221 -54.2277 -107.486 -151.023H-85.2316C-132.567 -242.548 -173.515 -336.524 -207.984 -432.324L-236 -404.381C-212.831 -318.717 -184.692 -234.114 -151.632 -151.015H-173.886C-135.683 -54.9922 -90.8447 38.9915 -39.4456 130.287H-72.827C-18.1475 227.395 43.9501 321.452 113.556 411.588H69.0479C132.514 493.758 202.169 572.697 278.04 647.74C293.568 663.097 309.336 678.084 325.219 692.882H269.583C385.627 801.038 510.803 894.438 641.905 974.183H575.142C631.775 1008.63 689.513 1040.52 748.066 1070L901.975 916.487H901.983ZM1265.81 553.592C1126.71 492.854 991.742 418.502 863.796 329.986H919.432C811.655 255.412 708.841 170.833 612.785 75.822C603.702 66.8364 594.726 57.7767 585.824 48.6842H630.333C543.277 -40.2189 464.753 -134.326 394.726 -232.617H428.108C363.645 -323.099 306.41 -417.124 256.346 -513.919H278.6C231.265 -605.444 190.317 -699.42 155.848 -795.22L127.84 -767.285C151.009 -681.621 179.149 -597.018 212.209 -513.919H189.954C228.157 -417.896 272.996 -323.913 324.395 -232.617H291.013C345.693 -135.51 407.79 -41.452 477.397 48.6842H432.888C496.354 130.854 566.01 209.793 641.88 284.835C657.409 300.192 673.176 315.18 689.059 329.978H633.424C749.467 438.134 874.643 531.534 1005.75 611.279H938.983C995.616 645.725 1053.35 677.615 1111.91 707.096L1265.81 553.583V553.592ZM1083.9 735.04C944.793 674.302 809.826 599.95 681.88 511.434H737.516C629.739 436.86 526.925 352.281 430.869 257.27C421.786 248.284 412.81 239.225 403.908 230.132H448.417C361.361 141.229 282.837 47.1221 212.81 -51.1694H246.192C181.729 -141.651 124.494 -235.676 74.4301 -332.471H96.6844C49.3488 -423.996 8.401 -517.972 -26.0683 -613.772L-54.0757 -585.837C-30.9066 -500.173 -2.76733 -415.57 30.2926 -332.471H8.03833C46.2414 -236.448 91.0796 -142.465 142.479 -51.1694H109.097C163.777 45.9382 225.874 139.996 295.481 230.132H250.972C314.438 312.302 384.094 391.241 459.964 466.283C475.493 481.641 491.26 496.627 507.143 511.425H451.508C567.551 619.582 692.727 712.982 823.829 792.727H757.067C813.699 827.173 871.437 859.063 929.99 888.544L1083.9 735.031V735.04Z" />\n                </svg>`
        }
    }(PULSE.app.common),
    function(e, t) {
        t.getEventTypeClass = function(e) {
            switch (e.type) {
                case "PS":
                    return "time-w";
                case "PE":
                    return "1" === e.phase ? "time-half-w" : "time-full-w"
            }
            switch (e.description) {
                case "R":
                    return "icn-red-card";
                case "YR":
                    return "icn-card-yellow-red";
                case "O":
                    return "icn-og";
                case "G":
                case "P":
                    return "icn-ball";
                default:
                    return ""
            }
        }, t.getEventLabel = function(e) {
            switch (e.type) {
                case "PS":
                    return "1" === e.phase ? "Kick Off" : "Second Half";
                case "PE":
                    return "1" === e.phase ? "Half Time" : "Full Time"
            }
            switch (e.description) {
                case "G":
                case "P":
                    return "Goal";
                case "O":
                    return "Own Goal";
                case "Y":
                    return "Yellow Card";
                case "R":
                case "YR":
                    return "Red Card";
                case "S":
                case "M":
                    return "Pen. Missed";
                case "sub":
                case "OFF":
                case "ON":
                    return "Substitution";
                default:
                    return ""
            }
        }, t.getTeamModel = function(e, t) {
            let n = {};
            return e.team && e.team.club && e.team.club.shortName ? n.name = e.team.club.shortName : n.name = e.team.name, e.team && e.team.club && (e.team.club.abbr ? n.abbr = e.team.club.abbr : e.team.altIds ? n.abbr = e.team.altIds.opta : n.abbr = ""), "C" === t && (n.score = e.score), n
        }, t.getEventTime = function(e) {
            let t = Math.floor(e.clock.secs / 60);
            return "1" === e.phase && t > 45 ? t = "45 +" + (t - 45) : "2" === e.phase && t > 90 && (t = "90 +" + (t - 90)), t + "'"
        }, t.getPlayerForType = function(e, n, a, o) {
            let i = n.clock.secs,
                l = t.getEventTime(n);
            return e[a] || (e[a] = {}), "Y" !== n.description && ("P" === n.description ? l += " (pen)" : "O" === n.description && (l += " (og)"), e[a][o] || (e[a][o] = []), e[a][o].push({
                label: l,
                val: i
            })), e
        }, t.getPlayerForEvent = function(e, t) {
            for (let n = 0; n < e.length; n++) {
                let a = e[n];
                if (a.lineup)
                    for (let e = 0; e < a.lineup.length; e++)
                        if (a.lineup[e].id === t) return a.lineup[e];
                if (a.substitutes)
                    for (let e = 0; e < a.substitutes.length; e++)
                        if (a.substitutes[e].id === t) return a.substitutes[e]
            }
        }, t.getTeamEventsMap = function(e, n, a) {
            let o = {
                matchEvents: [
                    [],
                    []
                ],
                assists: [
                    [],
                    []
                ]
            };
            return e && e.length > 0 && e.forEach((function(e) {
                if (void 0 !== e.teamId && e.type && ("G" === e.description || "Y" === e.description || "YR" === e.description || "R" === e.description || "P" === e.description || "O" === e.description)) {
                    let s = t.getEventTypeClass(e),
                        c = e.description;
                    if ("P" === c && (c = "G"), !!(!!(a && a[e.personId] && a[e.personId][c]) && (a[e.personId][c].length > 0 && a[e.personId][c][0].val === e.clock.secs)) && !("Y" === c && a[e.personId].YR)) {
                        var i = 0;
                        n[1].teamId === e.teamId && (i = 1);
                        var l = t.getPlayerForEvent(n, e.personId);
                        if (l) {
                            "G" === c && a[e.personId][c].length > 1 && (s = "icn-ball");
                            var r = " " + a[e.personId][c].map((function(e) {
                                return e.label
                            })).join(", ");
                            o.matchEvents[i].push({
                                teamId: e.teamId,
                                typeClass: s,
                                playerName: l.name.display,
                                playerShortName: l.name.first.substring(0, 1) + ". " + l.name.last,
                                playerUrl: t.generateUrl("player", l.id, "", l.name.display.replace(new RegExp(" ", "g"), "-")),
                                eventTimes: r
                            })
                        }
                    }
                    let d = !!(a && a[e.assistId] && a[e.assistId].AS && a[e.assistId].AS.length > 0) && a[e.assistId].AS[0].val === e.clock.secs;
                    e.teamId && "G" === e.description && e.assistId && d && (i = 0, n[1].teamId === e.teamId && (i = 1), (l = t.getPlayerForEvent(n, e.assistId)) && (r = " " + a[e.assistId].AS.map((function(e) {
                        return e.label
                    })).join(",") + " ", o.assists[i].push({
                        playerName: l.name.display,
                        playerUrl: t.generateUrl("player", l.id, l.name.display.replace(new RegExp(" ", "g"), "-")),
                        eventTimes: r
                    })))
                }
            })), o
        }, t.match = {}, t.match.getTeamAbbreviation = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e && e.club && e.club.abbr ? e.club.abbr : PULSE.I18N.lookup("label.team.tbc")
        }, t.match.getMatchLink = function() {
            return `/match/${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}`
        }, t.match.getTeamName = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e && e.shortName ? e.shortName : PULSE.I18N.lookup("label.team.tbc")
        }, t.match.getFormattedMatchDateTime = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "HH:mm";
            return e.kickoff && e.kickoff.millis ? moment(e.kickoff.millis).format(t) : e.provisionalKickoff && e.provisionalKickoff.millis ? moment(e.provisionalKickoff).format(t) : PULSE.I18N.lookup("label.time.tbc")
        }, t.match.getPenaltiesString = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            const {
                shootout: n,
                penaltyShootouts: a
            } = e;
            if (!n || !a.length) return;
            const o = [0, 0];
            return a.forEach((e => {
                o[e.teamId === t ? 0 : 1] = e.score
            })), o.join(" - ")
        }, t.match.getAggregateScore = function(e) {
            if (!e || !e.aggregateDetails || !e.aggregateDetails.legs.length || e.fixtureType !== t.constants.footballFixtureType.SECOND_LEG) return;
            const n = e.aggregateDetails.legs[0],
                {
                    0: {
                        score: a
                    },
                    1: {
                        score: o
                    }
                } = n.teams,
                {
                    0: {
                        score: i
                    },
                    1: {
                        score: l
                    }
                } = e.teams;
            return `${o+i} - ${a+l}`
        };
        t.match.groupFunctions = {
            byDay: e => {
                return n = t.match.getFormattedMatchDateTime(e, ""), moment(n).startOf("day").unix();
                var n
            },
            byMonth: e => {
                return n = t.match.getFormattedMatchDateTime(e, ""), moment(n).startOf("month").unix();
                var n
            }
        }, t.match.groupMatches = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.match.groupFunctions.byMonth,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.constants.footballOrderMapping.ASCENDING;
            const o = {
                mapping: {},
                iterationOrder: []
            };
            o.mapping = e.reduce(((e, t) => {
                const a = n(t);
                return e[a] || (e[a] = []), e[a].push(t), e
            }), {});
            const i = Object.keys(o.mapping);
            if (t.constants.footballOrderMapping[a] === t.constants.footballOrderMapping.ASCENDING) o.iterationOrder = i.sort();
            else o.iterationOrder = i.sort().reverse();
            return o
        }, t.match.getRenderModel = function(e) {
            const {
                0: {
                    team: n,
                    score: a
                },
                1: {
                    team: o,
                    score: i
                }
            } = e.teams, l = e.gameweek.compSeason.competition;
            return {
                status: e.status,
                matchLink: t.match.getMatchLink(e),
                compAbbreviation: l.abbreviation,
                ground: e.ground,
                clock: e.clock,
                homeTeamName: t.match.getTeamName(n),
                homeTeamAbbreviation: t.match.getTeamAbbreviation(n),
                awayTeamName: t.match.getTeamName(o),
                awayTeamAbbreviation: t.match.getTeamAbbreviation(o),
                homeTeamScore: a,
                awayTeamScore: i,
                formattedMatchTime: t.match.getFormattedMatchDateTime(e, "HH:mm"),
                formattedMatchDateTime: t.match.getFormattedMatchDateTime(e, "DD MM YYYY"),
                finalScoreModel: {
                    penalties: t.match.getPenaltiesString(e, n.id),
                    aggregateScore: t.match.getAggregateScore(e),
                    extraTime: e.extraTime
                }
            }
        }
    }(PULSE.app, PULSE.app.common),
    function(e, t) {
        t.metadata = {}, t.metadata.setTitles = function(e) {
            if (!e) return;
            let t = document.head.querySelector("title"),
                n = document.head.querySelector('meta[name="twitter:title"]') || null,
                a = document.head.querySelector('meta[property="og:title"]') || null;
            t && t.textContent !== e && (t.textContent = e, n && n.setAttribute("content", e), a && a.setAttribute("content", e))
        }, t.metadata.setDescriptions = function(e) {
            if (!e) return;
            let t = document.head.querySelector('meta[name="description"]') || null,
                n = document.head.querySelector('meta[name="twitter:description"]') || null,
                a = document.head.querySelector('meta[property="og:description"]') || null;
            t && t.getAttribute("content") !== e && (t.setAttribute("content", e), n && n.setAttribute("content", e), a && a.setAttribute("content", e))
        }
    }(PULSE.app, PULSE.app.common), PULSE.app.common.prepareParams = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = [];
        for (let n in e)
            if (e.hasOwnProperty(n)) {
                let a = e[n];
                if (void 0 === a) {
                    console.warn(`Value for '${n}' in object 'params' was undefined. The key '${n}' has been omitted from the query string. Please be explicit with values, e.g. boolean or empty string`);
                    continue
                }
                const o = [n, encodeURIComponent(a)];
                t.push(o.join("="))
            }
        return t.length > 0 ? "?" + t.join("&") : ""
    },
    function(e) {
        void 0 === e.security && (e.security = {}), e.security.sanitize = e => e.replace(/(&|<|"|\/|>|\(|\)|;)/g, "")
    }(PULSE.app.common),
    function(e) {
        e.template = {}, e.template.cleanString = function(e) {
            return _.escape(JSON.stringify(e || ""))
        }, e.template.getNumberWithCommas = function(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }, e.template.getSourceConfig = function(e) {
            let t = "";
            t = e.variantUrls.length > 1 ? `${e.variantUrls.join(", ")} 2x` : e.variantUrls.join("");
            let n = [];
            return void 0 !== e.minWidth && n.push(`(min-width: ${e.minWidth}px)`), void 0 !== e.maxWidth && n.push(`(max-width: ${e.maxWidth}px)`), {
                srcset: t,
                mediaQuery: n.join(" and ")
            }
        }, e.template.stringToElement = function(e) {
            const t = document.createElement("div");
            return t.innerHTML = e.trim(), t.firstChild
        }, e.template.formatTitle = function(e) {
            let t = e;
            if (-1 === t.indexOf("|")) {
                let e = t.split(" ");
                return e[0] = `<strong>${e[0]}</strong>`, e.join(" ")
            }
            t.split("|").length % 2 == 0 && (t += "|");
            const n = e.match(/(\|)([^|]+)(\|)/g);
            return n && n.forEach((e => {
                let n = `<strong>${e.substring(1,e.length-1)}</strong>`;
                t = t.split(e).join(n)
            })), t
        }, e.template.pluralise = function(e, t, n, a) {
            return (a ? e + " " : "") + ("1" === e.toString() ? t : n)
        }, e.template.separateCharacters = function(e, t) {
            let n = "";
            if (void 0 !== e) {
                let a = e.toString().split(""),
                    o = t || "";
                for (let e = 0; e < a.length; e++) n += '<span class="' + o + '">' + a[e] + "</span>"
            }
            return n
        }, e.template.seoTitle = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (e) {
                const t = e.replace('"', "");
                return `title="${t}" aria-label="${t}"`
            }
            return e
        }
    }(PULSE.app.common),
    function(e, t) {
        t.urlHelpers = {}, t.urlHelpers.removeURLParam = function(e) {
            const t = new URL(window.location.href),
                n = new URLSearchParams(t.search);
            n.delete(e);
            const a = t.origin + t.pathname + `?${n.toString()}`;
            history.replaceState(null, "", a)
        }
    }(PULSE.app, PULSE.app.common),
    function(e, t, n) {
        let a = function(e) {
            let t = [];
            for (let n in e) void 0 !== e[n] && "" !== e[n] && t.push(n + "=" + e[n]);
            return t
        };
        t.createApiPath = function(t, a) {
            let o = n.object.objectByString(e.apiPath, t),
                i = [];
            for (let e in a) o.indexOf("{" + e + "}") > -1 ? o = o.replace("{" + e + "}", a[e]) : void 0 !== a[e] && null !== a[e] && i.push(e + "=" + a[e]);
            let l = e.environment.api + "/football" + o;
            return i.length > 0 && (l += "?" + i.join("&")), l
        }, t.createVotingApiPath = function(t, a) {
            let o = n.object.objectByString(e.apiPath, t),
                i = [];
            for (let e in a) o.indexOf("{" + e + "}") > -1 ? o = o.replace("{" + e + "}", a[e]) : void 0 !== a[e] && i.push(e + "=" + a[e]);
            let l = e.environment.api + o;
            return i.length > 0 && (l += "?" + i.join("&")), l
        }, t.createContentPath = function(t, n, o, i) {
            let l = e.environment.api + "/content/" + e.account + "/" + t + "/" + (o || e.defaultLanguage) + "/" + (i || "");
            if (n) {
                let e = a(n);
                e.length > 0 && (l += "?" + e.join("&"))
            }
            return l
        }, t.createLiveBlogPath = function(t, n, o, i) {
            let l = e.environment.api + "/liveblog/" + e.account + "/" + n + "/" + (t || e.defaultLanguage);
            if (void 0 === i || isNaN(i) || (l += "/below/" + i), o) {
                let e = a(o);
                e.length > 0 && (l += "?" + e.join("&"))
            }
            return l
        }, t.createCanaryPathFromReference = function(t, n) {
            return e.environment.canary + "account/" + e.canaryAccount + "/contentref/" + t + ":" + n + "/posts"
        }, t.createCanaryPathFromId = function(t) {
            return e.environment.canary + "stream/" + t + "/posts"
        }, t.createSearchPath = function(t, n, o) {
            let i = e.environment.api + "/search/" + e.account + "/";
            if (i += "?terms=" + t.join(","), n && n.length > 0 && (n.map((function(e) {
                    e = e.toUpperCase()
                })), i += "&type=" + n.join(",")), o) {
                let e = a(o);
                e.length > 0 && (i += "&" + e.join("&"))
            }
            return i
        }, t.createPollQuestionUrl = function(t) {
            return e.environment.pollQuestions + "/" + t + "/poll.js"
        }, t.createPollAnswerUrl = function(t, n) {
            return e.environment.pollAnswer + "?id=" + t + "&option=" + n + "&callback=JSON_CALLBACK"
        }, t.generateContentUrl = function(t, n, a, o) {
            let i = "//" + e.environment.domain;
            switch (a && (a = a.replace(" ", "-")), t) {
                case "text":
                    return i + "/news/" + n;
                case "player":
                    return i + "/players/" + n + "/" + (a = a || "player") + "/overview";
                case "club":
                case "team":
                    return i + "/clubs/" + n + "/" + (a = a || "club") + "/overview";
                case "stadium":
                    return i + "/clubs/" + n + "/" + (a = a || "club") + "/stadium";
                case "manager":
                    return i + "/managers/" + n + "/" + a + "/overview";
                case "referee":
                    return i + "/referees/" + n + "/" + a + "/overview";
                case "match":
                    {
                        let e = "";
                        return a && (e = "/" + a),
                        i + "/match/" + n + e
                    }
                case "video":
                    return i + "/" + t + "/single/" + n;
                default:
                    return i + "/" + t + "/" + n
            }
        }, t.getMatchCentreUrl = function(n, a) {
            if (a = a || n.gameweek.compSeason) {
                let l;
                if ("U21" === a.competition.level && e.statCompSeasons.U21.indexOf(a.id) > -1) return l = ["premier-league-2", o(a), i(n)].join("/").toLowerCase(), t.generateContentUrl("match", n.id, l);
                if ("U18" === a.competition.level && e.statCompSeasons.U18.indexOf(a.id) > -1) return l = ["u18-premier-league", o(a), i(n)].join("/").toLowerCase(), t.generateContentUrl("match", n.id, l);
                if ("U21" !== a.competition.level && "U18" !== a.competition.level && e.competitionMatchCentres.indexOf(a.competition.id) > -1) return t.generateContentUrl("match", n.id)
            }
            return ""
        };
        const o = function(e) {
                let t = e.label.split(" ");
                return t[t.length - 1].replace("/", "-")
            },
            i = function(e) {
                let t = "";
                if (e.teams && 2 === e.teams.length) {
                    let n = PULSE.I18N.lookup("label.team.tbc");
                    e.teams[0] && e.teams[0].team ? t += e.teams[0].team.shortName || e.teams[0].team.name : t += n, t += "-v-", e.teams[1] && e.teams[1].team ? t += e.teams[1].team.shortName || e.teams[1].team.name : t += n
                }
                return t.trim().split(" ").join("-")
            }
    }(PULSE.app, PULSE.app.common, PULSE.core),
    function(e, t) {
        t.widget = {}, t.widget.getNumberAttribute = function(e, t) {
            let n = parseInt(t.getAttribute(e), 10);
            if (!1 === isNaN(n)) return n
        }, t.widget.getArrayAttribute = function(e, t) {
            let n = t.getAttribute(e);
            if (n) return n.split(",").map((function(e) {
                return e.trim()
            })).filter((function(e) {
                return void 0 !== e && "" !== e
            }))
        }
    }(PULSE.app, PULSE.app.common),
    function(e) {
        void 0 === e.endpoints && (e.endpoints = {});
        const t = e.prepareParams;
        e.endpoints.football = {
            awards: {
                historic: (e, n, a) => `/football/competitions/${e}/awards/${n}${t(a)}`,
                compSeason: (e, n) => `/football/compseasons/${e}/awards${t(n)}`,
                season: (e, n) => `/football/seasons/${e}/awards${t(n)}`
            },
            clubs: {
                all: e => `/football/clubs${t(e)}`,
                single: (e, n) => `/football/clubs/${e}${t(n)}`
            },
            competition: {
                all: e => `/football/competitions${t(e)}`,
                single: (e, n) => `/football/competitions/${e}${t(n)}`,
                compseason: (e, n) => `/football/competitions/${e}/compseasons${t(n)}`,
                current: (e, n) => `/football/competitions/${e}/compseasons/current${t(n)}`
            },
            competitionSeason: {
                single: (e, n) => `/football/compseasons/${e}${t(n)}`,
                gameweeks: {
                    all: (e, n) => `/football/compseasons/${e}/gameweeks${t(n)}`,
                    single: (e, n, a) => `/football/compseasons/${e}/gameweeks/${n}${t(a)}`,
                    current: (e, n) => `/football/compseasons/${e}/gameweeks/current${t(n)}`,
                    events: {
                        single: (e, n, a) => `/football/compseasons/${e}/gameweeks/${n}/events${t(a)}`,
                        current: (e, n) => `/football/compseasons/${e}/gameweeks/current/events${t(n)}`
                    },
                    fixtures: (e, n) => `/football/compseasons/${e}/gameweeks/current/fixtures${t(n)}`
                },
                standings: {
                    all: (e, n) => `/football/compseasons/${e}/standings${t(n)}`,
                    team: (e, n, a) => `/football/compseasons/${e}/standings/team/{teamId}${t(a)}`
                },
                structure: e => `/football/compseasons/${e}/structure`,
                teams: {
                    all: (e, n) => `/football/compseasons/${e}/teams${t(n)}`,
                    single: (e, n, a) => `/football/compseasons/${e}/teams/{teamId}${t(a)}`,
                    performance: (e, n, a) => `/football/compseasons/${e}/teams/{teamId}/performance${t(a)}`
                }
            },
            fixtures: {
                all: e => `/football/fixtures${t(e)}`,
                headtohead: e => `/football/fixtures/headtohead${t(e)}`,
                single: (e, n) => `/football/fixtures/${e}${t(n)}`,
                summary: (e, n) => `/football/fixtures/${e}/summary${t(n)}`,
                textstream: (e, n, a) => `/football/fixtures/${e}/textstream/${n}${t(a)}`
            },
            gameweeks: {
                single: (e, n) => `/football/gameweeks/${e}${t(n)}`
            },
            grounds: {
                all: e => `/football/grounds${t(e)}`,
                single: (e, n) => `/football/grounds/${e}${t(n)}`
            },
            players: {
                all: e => `/football/players${t(e)}`,
                single: (e, n) => `/football/players/${e}${t(n)}`,
                history: (e, n) => `/football/players/${e}/history${t(n)}`
            },
            season: {
                all: e => `/football/seasons${t(e)}`
            },
            standings: {
                all: e => `/football/standings${t(e)}`
            },
            stats: {
                headtohead: e => `/football/stats/headtohead${t(e)}`,
                match: (e, n) => `/football/stats/match/${e}${t(n)}`,
                player: (e, n) => `/football/stats/player/${e}${t(n)}`,
                playerFixtures: (e, n) => `/football/stats/player/${e}/fixtures${t(n)}`,
                ranked: {
                    players: (e, n) => `/football/stats/ranked/players/${e}${t(n)}`,
                    teams: (e, n) => `/football/stats/ranked/teams/${e}${t(n)}`
                },
                team: (e, n) => `/football/stats/team/${e}${t(n)}`
            },
            teams: {
                all: e => `/football/teams${t(e)}`,
                single: {
                    team: (e, n) => `/football/teams/${e}${t(n)}`,
                    staff: (e, n, a) => `/football/teams/${e}/compseasons/${n}/staff${t(a)}`,
                    stats: (e, n, a) => `/football/teams/${e}/compseasons/${n}/stats${t(a)}`,
                    seasonStaff: (e, n, a) => `/football/teams/${e}/seasons/${n}/staff${t(a)}`
                }
            },
            teamOfficials: {
                all: e => `/football/teamofficials${t(e)}`,
                single: (e, n) => `/football/teamofficials/${e}${t(n)}`
            },
            broadcastingSchedule: {
                countries: () => "/broadcasting-schedule/countries",
                all: e => `/football/broadcasting-schedule/fixtures${t(e)}`,
                single: (e, n) => `/football/broadcasting-schedule/fixtures/${e}${t(n)}`,
                highlights: e => `/football/broadcasting-schedule/highlights-programs${t(e)}`
            },
            matchOfficials: {
                all: e => `/football/matchofficials${t(e)}`,
                single: (e, n) => `/football/matchofficials/${e}${t(n)}`
            }
        }
    }(PULSE.app.common),
    function(e, t, n, a) {
        let o = function(e, t) {
            if (e && e.length > 0)
                for (let n = 0; n < e.length; n++)
                    if (e[n].fixture && e[n].fixture.id && e[n].fixture.id == t) return e[n]
        };
        e.getBroadcasters = function(e, t, n) {
            let a = this;
            a.element = e, a.config = t || {}, a.multipleBroadcastersModals = [], a.thisCountry = a.element.getAttribute("data-location") || "";
            let o = t.containerClass ? t.containerClass : "mcNavBroadcasterContainer";
            a.template = t.template ? t.template : "commonmatchbroadcaster", a.matchBroadcasterContainer = a.element.getElementsByClassName(o);
            let i = [],
                l = n && n.comps ? n.comps : 1;
            if (n && n.hideBroadcasters) a.setListeners();
            else {
                for (let e = 0; e < a.matchBroadcasterContainer.length; e++) {
                    let t = a.matchBroadcasterContainer[e].getAttribute("data-id");
                    t && -1 === i.indexOf(t) && i.push(t), a.matchBroadcasterContainer[e].getAttribute("data-comp") && (l = a.matchBroadcasterContainer[e].getAttribute("data-comp"))
                }
                a.urlConfig = function(e, t, n) {
                    return (n = n || {}).pageSize || (n.pageSize = 100), n.fixtureIds || (n.fixtureIds = e), n.comps || (n.comps = t), n
                }(i, l, n), a.urlConfig.fixtureIds.length > 0 && a.initBroadcastData(a.urlConfig), a.setListeners()
            }
        }, e.getBroadcasters.prototype.initBroadcastData = function(e) {
            let a = {
                url: t.common.createApiPath("broadcasting-schedule.all", e),
                method: "GET",
                callback: this.renderBroadcastingSchedule,
                target: this,
                forceCallback: !0
            };
            n.data.manager.add(a)
        }, e.getBroadcasters.prototype.renderBroadcastingSchedule = function(n) {
            let i = this;
            if (n && n.content && n.content.length > 0 && i.matchBroadcasterContainer) {
                i.liveStreaming || (i.liveStreaming = new t.liveStreaming(i.element)), i.thisCountry = n && n.countryCode ? n.countryCode : i.thisCountry;
                let l = e.removeRadioBroadcasters(n.content);
                i.liveStreaming.saveStreamingURLs(l, i.thisCountry), i.saveBroadcastModals(l);
                for (let n = 0; n < i.matchBroadcasterContainer.length; n++) {
                    let r = o(l, i.matchBroadcasterContainer[n].getAttribute("data-id"));
                    if (r && r.broadcasters && r.broadcasters.length > 0) {
                        let o = i.liveStreaming.getFixturesStreamingURLs(r.fixture.id, r.fixture.kickoff.millis),
                            l = {
                                broadcasters: r.broadcasters,
                                broadcasterSize: 2 === r.broadcasters.length,
                                fixtureHasLiveStream: o.length > 0,
                                fixtureId: r.fixture.id
                            };
                        for (let t = 0; t < l.broadcasters.length; t++) {
                            let n = l.broadcasters[t];
                            n.liveStreaming = i.liveStreaming.getLiveStreamData(n, l.fixtureHasLiveStream), n.logoSrc = e.getBroadcasterLogo(n.abbreviation, "global"), n.logoSrcRetina = e.getBroadcasterLogo(n.abbreviation, "global", !0)
                        }
                        r.broadcasters.length > 2 && (l.multipleBroadcasters = a.lookup("label.multiplebroadcasters")), i.matchBroadcasterContainer[n].innerHTML = Mustache.render(t.templates[i.template], l), new t.broadcasterLogo(i.matchBroadcasterContainer[n], !0)
                    }
                }
                i.initBroadcastModals()
            }
        }, e.getBroadcasters.prototype.saveBroadcastModals = function(e) {
            let n = this,
                a = e.length;
            for (let o = 0; o < a; o++) {
                let a = e[o],
                    i = a.fixture.id;
                if (a.broadcasters.length > 2) {
                    let e = n.liveStreaming.getFixturesStreamingURLs(i, a.fixture.kickoff.millis),
                        o = new t.multipleBroadcastersModal(a.broadcasters, e, i);
                    n.multipleBroadcastersModals.push(o)
                }
            }
        }, e.getBroadcasters.prototype.initBroadcastModals = function() {
            let e = this;
            for (let t = 0; t < e.multipleBroadcastersModals.length; t++) {
                let n = e.multipleBroadcastersModals[t];
                n.init(), n.update()
            }
        }, e.getBroadcasters.prototype.setListeners = function() {
            let t = new e.fixtureListener;
            this.element.addEventListener("click", t.redirectToMatchCenter), this.element.addEventListener("keypress", t.redirectToMatchCenter)
        }
    }(PULSE.app.common, PULSE.app, PULSE.core, PULSE.I18N),
    function(e, t, n, a) {
        let o = function(e) {
                e.stopPropagation(), e.preventDefault();
                let t = e.type,
                    a = e.keyCode || e.charCode;
                "keypress" === t && 13 !== a || (this.update(), n.style.addClass(this.broadcastModal[0], "open"))
            },
            i = function(e) {
                let t = e.type,
                    a = e.keyCode || e.charCode;
                ("keypress" !== t && "keyup" !== t || 27 === a) && l.call(this) && n.style.removeClass(this.broadcastModal[0], "open")
            },
            l = function() {
                return this.broadcastModal[0].className.indexOf("open") > -1
            };
        e.multipleBroadcastersModal = function(e, t, n) {
            let a = this;
            a.liveStreams = t || [], a.broadcastData = e, a.broadcastModal = document.getElementsByClassName("plBroadcastModal"), a.broadcastModalClose = document.getElementsByClassName("broadcastModalCloseButton"), a.jsButtonClass = "js-multipleBroadcasters", void 0 !== n && (a.jsButtonClass += "-" + n)
        }, e.multipleBroadcastersModal.prototype.init = function() {
            let e = this;
            e.modalOpener = document.getElementsByClassName(e.jsButtonClass), 0 !== e.broadcastModal.length && 0 !== e.broadcastModalClose.length && 0 !== e.modalOpener.length && (e.broadcastModalClose[0].addEventListener("click", i.bind(e)), e.broadcastModalClose[0].addEventListener("keypress", i.bind(e)), e.broadcastModal[0].addEventListener("keyup", i.bind(e)), Array.prototype.map.call(e.modalOpener, (function(t) {
                t.addEventListener("click", o.bind(e)), t.addEventListener("keypress", o.bind(e))
            })), document.body.insertBefore(e.broadcastModal[0], document.body.firstChild))
        }, e.multipleBroadcastersModal.prototype.getLiveStreamData = function(e) {
            let n = e.tvShows[0].streamingURLs;
            0 === this.liveStreams.length && (n = []);
            let a = n && n.length > 0;
            return {
                hasLiveStream: a,
                liveStreamLabel: t.lookup("label.livestream"),
                liveStreamURL: a ? n[0] : null
            }
        }, e.multipleBroadcastersModal.prototype.updateModel = function() {
            let e = this;
            return e.broadcastData.map((function(t) {
                let n = t.name.split("-");
                return n = n.length > 1 ? n[1].trim() : n[0].trim(), t.name = n, t.liveStreaming = e.getLiveStreamData(t), t.logoSrc = a.getBroadcasterLogo(t.abbreviation, "large"), t.logoSrcRetina = a.getBroadcasterLogo(t.abbreviation, "large", !0), t
            }))
        }, e.multipleBroadcastersModal.prototype.update = function() {
            let n = this,
                o = t.lookup("label.visitsite"),
                i = n.broadcastModal[0].getElementsByClassName("allBroadcastersModalContainer");
            if (0 === i.length || !n.broadcastData || 0 === n.broadcastData.length) return;
            let l = n.updateModel();
            i[0].innerHTML = Mustache.render(e.templates.matchmodalbroadcasters, {
                broadcasters: l,
                visitSiteLabel: o,
                broadcastersLabel: t.lookup("label.broadcaster"),
                moreInforLabel: t.lookup("label.more-info"),
                liveStreamLabel: t.lookup("label.live-stream"),
                externalIcon: a.icon.renderSpriteSVG("external-square", "icn", "svg")
            }), new e.broadcasterLogo(i[0], !0)
        }
    }(PULSE.app, PULSE.I18N, PULSE.core, PULSE.app.common),
    function(e) {
        e.filterDropdownDelegate = function() {}, e.filterDropdownDelegate.prototype.didUpdate = function(e) {}, e.filterDropdownDelegate.prototype.didFinishUpdate = function(e) {}, e.filterDropdownDelegate.prototype.didClear = function(e) {}, e.filterDropdownDelegate.prototype.didOpen = function(e) {}, e.filterDropdownDelegate.prototype.didClose = function(e) {}, e.filterDropdownDelegate.prototype.didOptionSelect = function(e) {}
    }(PULSE.app.common),
    function(e) {
        e.filterControllerDelegate = function() {}, e.filterControllerDelegate.prototype.filterCleared = function() {}, e.filterControllerDelegate.prototype.dropDownOpened = function() {}, e.filterControllerDelegate.prototype.dropDownOptionSelected = function() {}, e.filterControllerDelegate.prototype.filterUpdated = function(e) {}
    }(PULSE.app.common),
    function(e, t, n, a, o) {
        let i = function(e, i) {
                i.label && (i.label = o.lookup("label." + i.label)), i.mobileLabel && (i.mobileLabel = o.lookup("label." + i.mobileLabel)), i.defaultOption && (i.defaultOption = o.lookup("label." + i.defaultOption)), i.data && i.data.length > 0 && i.data.map((function(e) {
                    e.optionLabel && (e.optionName = o.lookup("label." + e.optionLabel))
                })), a.dom.appendDomString(e.container, Mustache.render(n.listfilter, {
                    dropdown: i,
                    defaultItem: undefined,
                    visibleOnMobile: e.config.visibleMobile || !1,
                    getIndex: function() {
                        let e = 0;
                        return function() {
                            return function(t, n) {
                                return e++
                            }
                        }
                    }(),
                    renderSVG: () => e => t.icon.renderSVG(e)
                })), e.element = e.container.querySelector('[data-dropdown-block="' + e.config.name + '"]'), e.current = e.container.querySelector('[data-dropdown-current="' + e.config.name + '"]'), e.list = e.container.querySelector('[data-dropdown-list="' + e.config.name + '"]'), e.defaultOptionId && !e.autoInitStateId && (e.autoInitStateId = e.defaultOptionId)
            },
            l = function(e) {
                for (let t = 0; t < e.length; t++) a.style.removeClass(e[t], "highlight")
            },
            r = function(e, n) {
                let o = n.getAttribute("data-dropdown-list");
                var i, l;
                t.scrollElementAnimated('[data-dropdown-list="' + o + '"]', e, 0, 90), i = e, l = n, a.style.addClass(i, "highlight"), i.addEventListener("mouseout", (function(e) {
                    a.style.removeClass(i, "highlight")
                })), l.addEventListener("mouseover", (function(e) {
                    e.target.getAttribute("data-option-name") !== i.getAttribute("data-option-name") && a.style.removeClass(i, "highlight")
                }))
            },
            s = function(e) {
                let t = this;
                if ("keypress" === e.type && (e.code.indexOf("Key") > -1 && e.key || e.code.indexOf("Digit") > -1)) {
                    let n = t.querySelector("[data-dropdown-list]"),
                        a = function(e, t) {
                            let n, a = e.children;
                            for (let e = 0; e < a.length; e++)
                                if (a[e].getAttribute("data-option-name").charAt(0).toLowerCase() === t.toLowerCase()) {
                                    n = a[e];
                                    break
                                }
                            return n
                        }(n, e.key);
                    l(n.children), a && r(a, n)
                }
            },
            c = function(e) {
                ["keypress", "click"].forEach((function(t) {
                    let n = e.element.querySelector("[data-dropdown-current]"),
                        a = s.bind(e.element),
                        o = e.element.querySelector("[data-dropdown-list]"),
                        i = e.element.querySelector(".js-dropdown-close");
                    e.element && !e.element.getAttribute("data-listen-" + t) && (e.element.addEventListener(t, (function(t) {
                        if (!t.target.closest(".dropdownListContainer") && (13 === t.which || "click" === t.type)) {
                            e.showHide(), "true" === n.getAttribute("aria-expanded") ? (n.blur(), document.addEventListener("keypress", a)) : (l(o.children), document.removeEventListener("keypress", a))
                        }
                    })), e.element.setAttribute("data-listen-" + t, !0)), i && !i.getAttribute("data-listen-" + t) && (i.addEventListener(t, (function() {
                        e.showHide()
                    })), i.setAttribute("data-listen-" + t, !0)), o && !o.getAttribute("data-listen-" + t) && (o.addEventListener(t, (function(t) {
                        if (13 === t.which || "click" === t.type) {
                            let n = t.target;
                            n.getAttribute("data-option-name") && n.getAttribute("data-option-id") && n.getAttribute("data-option-index") && (e.state.setState(!1, n.getAttribute("data-option-name"), n.getAttribute("data-option-id"), !1, n.getAttribute("data-option-index")), e.setOption(e.state.name), e.delegate.didOptionSelect(e.state.name), e.delegate.didFinishUpdate(!0), e.showHide())
                        }
                    })), o.setAttribute("data-listen-" + t, !0))
                }))
            };
        t.dropDownItem = function(n, a, o) {
            let l = this;
            if (l.container = n, l.delegate = a, l.config = o, l.element = !1, l.current = !1, l.openClass = "open", l.state = new t.dropDownItemState, l.dependencyMap = !1, l.currentListData = !1, l.subscriber = {
                    target: l,
                    headers: [e.accountHeader],
                    method: "GET",
                    callback: l.renderOptions,
                    constant: !0,
                    forceCallback: !0
                }, l.autoInitStateId = void 0, l.defaultOptionId = o.defaultOptionId || !1, l.config.dependencies && l.config.dependencies.length > 0) {
                l.dependencyMap = {};
                for (let e = 0; e < l.config.dependencies.length; e++) l.dependencyMap[l.config.dependencies[e]] = new t.dropDownItemState
            }
            l.config && l.config.name && i(l, l.config)
        }, t.dropDownItem.prototype.init = function() {
            ! function(e) {
                if (e.initialisedOptions = !1, e.config.urlParameter) {
                    let t = a.url.getParam(e.config.urlParameter);
                    t && (e.autoInitStateId = t)
                }
                e.defaultOptionId && !e.autoInitStateId && (e.autoInitStateId = e.defaultOptionId), e.config.data && (!e.config.dependencies || e.config.dependencies.length < 1) && e.renderOptions(), !e.config.dataUrl || e.config.dependencies && 0 !== e.config.dependencies.length || e.config.dataDependency || (e.setLoading(), e.subscriber.url = e.config.dataUrl, a.data.manager.add(e.subscriber))
            }(this)
        }, t.dropDownItem.prototype.updateOptionsFromDependencies = function(t, n) {
            let o = this;
            if (o.displayDefaultOption(!1, !1, !0), o.setInactive(), o.delegate && o.delegate.dropdownRendered(o.config.index), !o.isloading) {
                if (o.dependencyMap[t] && (o.dependencyMap[t] = n), o.config.dependancyCheck && "function" == typeof o.config.dependancyCheck) {
                    if (!o.config.dependancyCheck(o.dependencyMap)) return
                }
                if (o.config.dataDependency && t === o.config.dataDependency && n.list) return -1 !== n.index ? (o.renderOptions(n.list[n.index]), o.setActive()) : (o.state.list = [], o.setInactive(), o.displayDefaultOption(!1, !1, !0)), o.autoInitStateId && !o.defaultItem || o.displayDefaultOption(), void(o.autoInitStateId = void 0);
                o.subscriber.url = function(t) {
                    let n = t.config.dataUrl || !1,
                        a = 0;
                    for (let e = 0; e < t.config.dependencies.length; e++)
                        if (n) {
                            let o = t.config.dependencies[e];
                            if (a = t.config.depMethods && t.config.depMethods[e].default && -1 === parseInt(t.dependencyMap[o].id) ? t.config.depMethods[e].default : t.dependencyMap[o].id, -1 === parseInt(a)) return t.list.innerHTML = "", !1;
                            n = n.replace("{{" + o + "}}", a)
                        }
                    if (t.config.depMethods)
                        for (let o = 0; o < t.config.depMethods.length; o++) {
                            let i = t.config.depMethods[o];
                            i.method && e.filterData[i.method] && (n = n.replace("{{" + i.label + "}}", e.filterData[i.method](a)))
                        }
                    return n
                }(o), o.subscriber.url && (o.setLoading(), a.data.manager.add(o.subscriber)), o.config.data && o.renderOptions(void 0, void 0, !0)
            }
        }, t.dropDownItem.prototype.getAutoOptionIndex = function() {
            let e = this;
            if (e.autoInitStateId && e.options && e.options.length > 0)
                for (let t = 0; t < e.options.length; t++)
                    if (e.options[t].optionId === parseInt(e.autoInitStateId) || e.options[t].optionId === e.autoInitStateId) return t;
            return -1
        }, t.dropDownItem.prototype.displayDefaultOption = function(e, t, n) {
            let o = this,
                i = o.getAutoOptionIndex();
            if (i > -1 && o.options[i] && t) {
                let e = o.options[i];
                o.state.setState(!1, e.optionName, e.optionId, !1, i), o.setOption(e.optionName)
            } else if (!o.config.defaultOption || "-1" !== o.autoInitStateId && !n && (void 0 !== o.config.defaultIndex || o.defaultOptionId && -1 !== o.defaultOptionId && 0 !== o.state.list.length)) {
                if (o.defaultOptionId && o.defaultItem) {
                    let e = !1;
                    for (let t = 0; t < o.state.list.length; t++) a.object.getNestedItemFromPath(o.config.dataIdPath, o.state.list[t]) === o.defaultItem.optionId && (e = !0);
                    e ? o.state.setState(!1, o.defaultItem.optionName, o.defaultItem.optionId, !1, o.defaultItemIndex) : o.state.setState(!1, a.object.getNestedItemFromPath(o.config.dataNamePath, o.state.list[0]), a.object.getNestedItemFromPath(o.config.dataIdPath, o.state.list[0]), !1, 0), o.setOption(o.state.name)
                } else if (o.state.list && o.state.list.length > 0) {
                    let e = o.config.defaultIndex || 0;
                    e > o.state.list.length && (e = o.state.list.length - 1), e < 0 && (e = 0), o.state.setState(!1, a.object.getNestedItemFromPath(o.config.dataNamePath, o.state.list[e]), a.object.getNestedItemFromPath(o.config.dataIdPath, o.state.list[e]), !1, e), o.setOption(o.state.name)
                }
            } else o.state.setState(!1, o.config.defaultOption, -1, !1, -1), o.setOption(o.config.defaultOption);
            o.hide()
        }, t.dropDownItem.prototype.setOption = function(e) {
            let t = this;
            t.current.textContent = e, t.checkActive(), t.delegate.didUpdate(t)
        }, t.dropDownItem.prototype.checkActive = function() {
            let e = this; - 1 !== e.state.index ? a.style.addClass(e.element, "active") : a.style.removeClass(e.element, "active")
        }, t.dropDownItem.prototype.restoreOptions = function(e) {
            let n = this;
            n.initialisedOptions = !1, n.state = e;
            let o = Object.keys(e);
            for (n.state = new t.dropDownItemState, d = 0; d < o.length; d++) n.state[o[d]] = e[o[d]];
            if (n.config.urlParameter) {
                let e = a.url.getParam(n.config.urlParameter);
                e && (n.autoInitStateId = e)
            }
            n.checkActive(), n.renderOptions(!1, !1, !0)
        }, t.dropDownItem.prototype.renderOptions = function(e, t, o) {
            let i = this;
            !i.initialisedOptions && i.config.data && (e = i.config.data), o || (i.state.list = a.object.getNestedItemFromPath(i.config.dataListPath, e)), i.config.listTransform && "function" == typeof i.config.listTransform && (i.state.list = i.config.listTransform(i.state.list, i.element, i)), !i.state.list && e && (i.state.list = e), i.options = [];
            for (let e = 0; e < i.state.list.length; e++) i.state.list[e].hasOwnProperty("gameweek") && "U" === i.state.list[e].status || (i.options.push({
                optionName: a.object.getNestedItemFromPath(i.config.dataNamePath, i.state.list[e]),
                optionId: a.object.getNestedItemFromPath(i.config.dataIdPath, i.state.list[e]),
                class: i.state.list[e].class || i.config.defaultClass
            }), i.autoInitStateId && !i.initialisedOptions && i.options[e].optionId === i.autoInitStateId && (i.defaultItem = i.options[e], i.defaultItemIndex = e, i.state.setState(!1, i.defaultItem.optionName, i.defaultItem.optionId, !1, e), i.setOption(i.state.name)));
            i.config.hasOwnProperty("displayDefaultOption") || i.config.displayDefaultOption || i.displayDefaultOption(!1, !0), i.list.innerHTML = Mustache.render(n.listfilteroption, {
                config: i.config,
                optionData: i.options,
                getIndex: function() {
                    let e = 0;
                    return function() {
                        return function(t, n) {
                            return e++
                        }
                    }
                }()
            }), o && (i.autoInitStateId = void 0), i.setActive(), i.isloading && i.stopLoading(), i.initialisedOptions = !0, i.delegate && i.delegate.dropdownRendered(i.config.index), c(i)
        }, t.dropDownItem.prototype.setLoading = function() {
            let e = this;
            e.isloading = !0, e.loaderElement || (e.loaderElement = document.createElement("div"), e.loaderElement && (e.loaderElement.innerHTML = n.loader, e.loaderElement = e.loaderElement.children[0])), e.element.insertBefore(e.loaderElement, e.element.firstChild)
        }, t.dropDownItem.prototype.stopLoading = function() {
            let e = this;
            e.isloading = !1, e.loaderElement && (e.element.removeChild(e.loaderElement), e.loaderElement = void 0)
        }, t.dropDownItem.prototype.setActive = function() {
            let e = this;
            e.element.classList.remove("inactive"), e.list.removeAttribute("aria-disabled"), e.current.removeAttribute("aria-disabled"), e.current.setAttribute("tabindex", "0")
        }, t.dropDownItem.prototype.setInactive = function() {
            let e = this;
            e.element.classList.add("inactive"), e.list.setAttribute("aria-disabled", "true"), e.current.setAttribute("aria-disabled", "true"), e.current.setAttribute("tabindex", "-1")
        }, t.dropDownItem.prototype.openDropdown = function(e) {
            let t = this;
            a.style.addClass(e, t.openClass), a.event.listenForOutsideClick.addElement(e, t.closeDropdown.bind(t), e)
        }, t.dropDownItem.prototype.closeDropdown = function(e) {
            a.style.removeClass(e, this.openClass), a.event.listenForOutsideClick.removeElement(e, this.closeDropdown)
        }, t.dropDownItem.prototype.showHide = function() {
            let e = this,
                t = e.element.getElementsByClassName("current"),
                n = e.container.getElementsByClassName("dropDown");
            for (let t = 0; t < n.length; t++) n[t] !== e.element && (n[t].classList.remove("open"), n[t].getElementsByClassName("current")[0].setAttribute("aria-expanded", "false"));
            if (e.list.children.length > 0 && e.isActive()) {
                if (e.list.children[0].focus(), a.style.hasClass(e.element, e.openClass) ? e.closeDropdown(e.element) : e.openDropdown(e.element), e.state.open = e.element.classList.contains(e.openClass), "true" === t[0].getAttribute("aria-expanded") ? t[0].setAttribute("aria-expanded", "false") : t[0].setAttribute("aria-expanded", "true"), e.state.open) return void e.delegate.didOpen(e);
                e.delegate.didClose(e)
            }
        }, t.dropDownItem.prototype.isActive = function() {
            return !this.element.classList.contains("inactive")
        }, t.dropDownItem.prototype.hide = function() {
            let e = this;
            e.element.classList.remove(e.openClass), e.state.open = !1, e.delegate.didClose(e)
        }
    }(PULSE.app, PULSE.app.common, PULSE.app.templates, PULSE.core, PULSE.I18N),
    function(e) {
        e.dropDownItemState = function(e, t, n, a, o) {
            this.open = e || !1, this.name = t || !1, this.id = n || -1, this.list = a || !1, this.index = o || -1
        }, e.dropDownItemState.prototype.setState = function(e, t, n, a, o) {
            this.open = e, this.name = t, this.id = n || this.id, this.list = a || this.list, this.index = "number" == typeof parseInt(o) ? o : this.index
        }
    }(PULSE.app.common),
    function(e, t, n) {
        n.listFilterClubSeasons = function(e, a, o) {
            let i = this;
            i.list = e, i.team = a, i.filterController = o;
            let l = {
                url: n.createApiPath("clubs.single", {
                    id: i.team
                }),
                method: "GET",
                callback: i.filterCompSeasons,
                forceCallback: !0,
                target: this
            };
            t.data.manager.add(l)
        }, n.listFilterClubSeasons.prototype.filterCompSeasons = function(e) {
            let t = e.teams[0].grounds,
                n = [],
                a = [];
            t.forEach((function(e) {
                n = n.concat(e.compSeasonIds)
            })), a = this.list.filter((function(e) {
                return n.find((function(t) {
                    return t === e.id
                }))
            })), this.filterController.dropdowns.compSeasons.renderOptions(a)
        }
    }(PULSE.app, PULSE.core, PULSE.app.common),
    function(e, t, n, a, o) {
        let i = function(e) {
            let t = Object.keys(e.dropdowns);
            e.url = window.location.href, t.map((function(t) {
                let a = e.dropdowns[t];
                if (a.config.urlParameter) {
                    let t = a.isActive() ? a.state.id : -1;
                    e.url = n.url.updateUrlStringParam(e.url, a.config.urlParameter, t)
                }
            }));
            let a = e.getState();
            a && (a = JSON.parse(JSON.stringify(a))), history.pushState(a, "", e.url)
        };
        t.listFilterController = function(e, i) {
            let l = this;
            if (l.element = e, l.config = i, l.intervalChecker = !1, l.dropdowns = {}, l.delegate = l.config.delegate || !1, l.tracking = l.config.tracking || !1, l.noInit = l.config.noInit, l.updateUrl = this.element.getAttribute("data-use-history") || this.element.getAttribute("data-use-basic-history") || !1, l.basicHistory = this.element.getAttribute("data-use-basic-history") || !1, l.defaultItemIds = l.element.getAttribute("data-filter-default-ids") || !1, l.url = !1, function(e, i, l) {
                    e.mobileHeader = n.dom.appendDomString(e.element, Mustache.render(a.mobileheader, {
                        title: o.lookup("label.filters"),
                        buttonText: o.lookup("label.reset")
                    })), e.defaultItemIds && (e.defaultItemIds = e.defaultItemIds.split(",")), e.renderedDropdowns = [], e.dropdownsRendered = !1, 1 == i.length && n.style.addClass(e.element, "singleFilter");
                    for (var r = 0; r < i.length; r++) {
                        let n = i[r];
                        e.defaultItemIds && e.defaultItemIds[r] && !n.defaultOptionId && (n.defaultOptionId = e.defaultItemIds[r]), n.index = r, n.visibleMobile = r === i.length - 1, e.dropdowns[n.name] = new t.dropDownItem(e.element, e, n)
                    }
                    for (r = 0; r < i.length; r++) {
                        let t = i[r];
                        e.dropdowns[t.name].init()
                    }
                    e.advancedFilterButtons = n.dom.appendDomString(e.element, Mustache.render(a.mobilefooter, {
                        filterText: o.lookup("label.filter"),
                        showResultsText: o.lookup("label.applyFilters"),
                        resetText: o.lookup("label.resetfilters")
                    }), !0, !0), e.didFinishUpdate(!0, !0)
                }(l, i.dropdowns, l.config), "true" === l.element.getAttribute("data-reset-available")) {
                let e = document.createElement("div");
                e.innerHTML = Mustache.render(a.resetbutton, {
                    translator: function() {
                        return function(e, t) {
                            return o.lookup(e)
                        }
                    },
                    theme: l.config.theme || null
                }), e.children[0].addEventListener("click", (function() {
                    l.resetAll()
                })), e.children[0].addEventListener("keypress", (function(e) {
                    13 === (e.keyCode || e.which) && l.resetAll()
                })), l.element.appendChild(e.children[0])
            }! function(e) {
                if (window.onpopstate = function(t) {
                        if (t.state && t.state.length)
                            for (let n = 0; n < t.state.length; n++) e.dropdowns[t.state[n].name].restoreOptions(t.state[n].state);
                        e.didFinishUpdate(!1)
                    }, e.advancedFilterButtons && e.advancedFilterButtons.length > 0 && ["click", "keypress"].forEach((t => {
                        e.advancedFilterButtons[0].addEventListener(t, (function(n) {
                            ("click" === t || "keypress" === t && "Enter" === n.key) && (document.body.classList.toggle("u-body-no-scroll"), e.element.classList.toggle("open"))
                        }))
                    })), e.advancedFilterButtons && e.advancedFilterButtons.length > 1 && ["click", "keypress"].forEach((t => {
                        e.advancedFilterButtons[1].addEventListener(t, (function(n) {
                            ("click" === t || "keypress" === t && "Enter" === n.key) && (e.element.classList.remove("open"), document.body.classList.remove("u-body-no-scroll"))
                        }))
                    })), "true" === e.element.getAttribute("data-reset-available")) {
                    let t = e.element.querySelector(".js-reset-button");
                    t.addEventListener("click", (function() {
                        e.resetAll()
                    })), t.addEventListener("keypress", (function(t) {
                        13 === (t.keyCode || t.which) && e.resetAll()
                    }))
                }
                e.mobileHeader && e.mobileHeader.addEventListener("click", (function(t) {
                    e.element.classList.remove("open"), document.body.classList.remove("u-body-no-scroll")
                }))
            }(l)
        }, t.listFilterController.prototype = Object.create(t.filterDropdownDelegate.prototype), t.listFilterController.prototype.resetAll = function() {
            let e = this,
                t = Object.keys(e.dropdowns);
            for (let n = 0; n < t.length; n++) e.dropdowns[t[n]].displayDefaultOption(!0);
            e.delegate && e.delegate.filterCleared(e.getState()), e.updateUrl && i(e), e.delegate && e.waitForLoadComplete((function() {
                e.delegate.filterUpdated(e.getState())
            }))
        }, t.listFilterController.prototype.setPageLoading = function(t, a, i) {
            if (i) {
                let e = i.class || "";
                n.style.addClass(a, e)
            }
            t.loaderMarkup = t.loaderMarkup || Mustache.render(e.templates.scrollloader, {
                load: o.lookup("label.loadingmore")
            }), a.innerHTML = '<div class="loader">' + t.loaderMarkup + "</div>"
        }, t.listFilterController.prototype.getState = function() {
            let e = this;
            return Object.keys(e.dropdowns).map((function(t) {
                return e.basicHistory ? {
                    name: e.dropdowns[t].config.name,
                    state: e.dropdowns[t].state,
                    active: e.dropdowns[t].isActive()
                } : {
                    name: e.dropdowns[t].config.name,
                    state: e.dropdowns[t].state,
                    config: e.dropdowns[t].config,
                    autoId: e.dropdowns[t].autoInitStateId,
                    active: e.dropdowns[t].isActive()
                }
            }))
        }, t.listFilterController.prototype.didUpdate = function(e) {
            ! function(e, t) {
                let n = Object.keys(e.dropdowns);
                for (let a = 0; a < n.length; a++) e.dropdowns[n[a]].config.dependencies && e.dropdowns[n[a]].config.dependencies.indexOf(t.config.name) > -1 && e.dropdowns[n[a]].updateOptionsFromDependencies(t.config.name, t.state)
            }(this, e)
        }, t.listFilterController.prototype.didFinishUpdate = function(e, t) {
            let n = this;
            !n.delegate || n.noInit && t ? n.updateUrl && e && !t && i(n) : n.waitForLoadComplete((function() {
                n.updateUrl && e && !t && i(n), n.delegate.filterUpdated(n.getState(), t)
            }))
        }, t.listFilterController.prototype.waitForLoadComplete = function(e) {
            let t = this;
            t.intervalChecker || (t.intervalChecker = setInterval((function() {
                let n = !0,
                    a = Object.keys(t.dropdowns);
                for (let e = 0; e < a.length; e++) t.dropdowns[a[e]].isloading && (n = !1);
                n && (clearInterval(t.intervalChecker), t.intervalChecker = null, e())
            }), 500))
        }, t.listFilterController.prototype.dropdownRendered = function(e) {
            let t = this;
            t.renderedDropdowns.indexOf(e) < 0 && t.renderedDropdowns.push(e)
        }, t.listFilterController.prototype.didOpen = function(e) {
            let t = this;
            t.delegate && t.tracking && t.delegate.dropDownOpened(e)
        }, t.listFilterController.prototype.didOptionSelect = function(e) {
            let t = this;
            t.delegate && t.tracking && t.delegate.dropDownOptionSelected(e)
        }, t.listFilterController.prototype.hasUrlUpdate = function() {
            return this.updateUrl
        }, t.listFilterController.prototype.hide = function() {
            this.element.style.display = "none"
        }, t.listFilterController.prototype.show = function() {
            this.element.style.display = ""
        }
    }(PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N),
    function(e) {
        e.scrollLoaderDelegate = function() {}, e.scrollLoaderDelegate.prototype.didRequestLoad = function() {}
    }(PULSE.app.common),
    function(e, t, n, a) {
        let o = function(e) {
                e.element = t.dom.appendDomString(e.container, '<div class="loader" data-scroll-loader style="min-height:10px;" ></div>')
            },
            i = function(e) {
                (e.boundary || document).addEventListener("scroll", (function(t) {
                    if (!e.loading && e.element) {
                        let t;
                        t = e.boundary ? e.element.getBoundingClientRect().top - e.boundary.getBoundingClientRect().top : e.element.getBoundingClientRect().top, (e.boundary.clientHeight || window.innerHeight) - t >= e.limit && 0 !== e.element.offsetHeight && (e.loading = !0, r(e), e.delegate && e.delegate.didRequestLoad())
                    }
                }))
            };
        var l = function(e) {
            e.element.style.display = "block", r(e)
        };
        var r = function(e) {
            if (e.element) {
                let t = a ? a.lookup("label.loadingmore") : "Loading More...";
                e.element.innerHTML = Mustache.render(n.scrollloader, {
                    load: t
                })
            }
        };
        e.scrollLoader = function(e, t, n, a) {
            let l = this;
            l.delegate = t, l.container = e, l.boundary = a || !1, l.loading = !1, l.element = !1, l.limit = 0, o(l), i(l)
        }, e.scrollLoader.prototype.reAppend = function() {
            o(this), i(this)
        }, e.scrollLoader.prototype.contentLoaded = function() {
            this.loading = !1
        }, e.scrollLoader.prototype.removeLoader = function() {
            let e = this;
            e.element && e.element.parentNode && e.element.parentNode.removeChild(e.element), e.element = !1
        }, e.scrollLoader.prototype.newLoader = function() {
            let e = this;
            e.element || o(e)
        }, e.scrollLoader.prototype.completedDataLoad = function(e) {
            let t = this;
            t.loading = !1, e ? t.removeLoader() : function(e) {
                e.element && e.container && (e.container.appendChild(e.element), l(e))
            }(t)
        }
    }(PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N),
    function(e, t, n, a) {
        a.pageShare = function(a, o) {
            let i = this;
            if (i.element = a, i.render = i.element.getAttribute("data-render"), i.bodyContent = i.element.getAttribute("data-body"), i.defaultOpen = i.element.getAttribute("data-open"), i.url = i.element.getAttribute("data-link-to") ? window.location.hostname + i.element.getAttribute("data-link-to") : o, i.render && e.templates[i.render]) {
                let t = {
                    share: n.lookup("label.share"),
                    shareWhatsapp: n.lookup("action.share.whatsApp"),
                    shareTwitter: n.lookup("action.share.twitter"),
                    shareFacebook: n.lookup("action.share.facebook"),
                    shareGoogle: n.lookup("action.share.googleplus"),
                    shareCopy: n.lookup("action.share.copy"),
                    shareEmail: n.lookup("action.share.email")
                };
                i.element.innerHTML = Mustache.render(e.templates[i.render], t)
            }
            i.shareButton = i.element.getElementsByClassName("socialShareBtn")[0], i.shareButton && (i.hoverElem = i.shareButton.parentElement), i.defaultOpen && t.style.toggleClass(i.hoverElem, "open"), i.setListeners()
        }, a.pageShare.prototype.copyUrl = function(e, t, n) {
            let a = document.createElement("input"),
                o = document.createElement("span"),
                i = e.querySelector("." + t);
            document.body.appendChild(a), a.value = n, a.select(), document.execCommand("copy"), document.body.removeChild(a), i.appendChild(o), o.className = "option__actionlabel", o.innerHTML = "Link copied", setTimeout((function() {
                i.removeChild(o)
            }), 1e3)
        }, a.pageShare.prototype.getSocialDataset = function(e) {
            let t = e;
            if (this.element.getAttribute("data-social-service")) return this.element.dataset;
            do {
                if (t.getAttribute("data-social-service")) return t.dataset;
                t = t.parentElement
            } while (t !== this.element);
            return !1
        }, a.pageShare.prototype.setUrl = function(e) {
            this.url = e
        }, a.pageShare.prototype.setListeners = function() {
            let n = this;
            n.shareButton && ["keypress", "click"].forEach((function(e) {
                n.shareButton.addEventListener(e, (function(e) {
                    13 !== e.which && "click" !== e.type || (e.preventDefault(), t.style.toggleClass(n.hoverElem, "open"))
                }))
            })), this.element.addEventListener("click", (function(t) {
                let a = n.getSocialDataset(t.target);
                a && a.socialService && (dataLayer.push({
                    event: "share_button_click",
                    socialNetwork: a.socialService,
                    signedInUser: e.UserData.loggedin ? "signedIn" : "signedOut"
                }), "copy" === a.socialService ? n.copyUrl(this, a.socialService, n.url) : e.socialHelpers[a.socialService].sharePage(n.url, !1, n.bodyContent))
            }))
        }
    }(PULSE.app, PULSE.core, PULSE.I18N, PULSE.app.common),
    function(e, t) {
        e.analytics.trackEvent = function(e) {
            if (e) {
                const n = {
                    event: "click",
                    contentType: "widget"
                };
                let a = t.object.extend(n, e);
                void 0 !== window.dataLayer ? dataLayer.push(a) : console.warn("dataLayer not found when trying to track event")
            }
        }, e.analytics.addEventTracking = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            [].slice.call(t.querySelectorAll(".js-tracked-event")).filter((e => "click" === e.getAttribute("data-event-type"))).forEach((t => {
                e.common.addAriaClickListener(t, n)
            }))
        };
        const n = function(t) {
            const n = t.currentTarget;
            e.analytics.trackEvent({
                eventCategory: n.getAttribute("data-event-category"),
                eventLabel: n.getAttribute("data-event-label"),
                eventAction: n.getAttribute("data-event-action")
            })
        };
        e.analytics.addEventTracking()
    }(PULSE.app, PULSE.core),
    function(e) {
        e.MediaThumbnailTracking = function(e) {
            const t = this;
            t.collectionTitle = e.dataset.collectionTitle, t.collectionFocus = e.dataset.collectionFocus, t.collectionCategory = e.dataset.collectionCategory, t.mediaTitle = e.dataset.title, t.mediaType = e.dataset.contentType, t.itemIndex = e.dataset.itemIndex, t.theme = e.dataset.theme, t.optaId = e.dataset.optaId, t.isExternal = "true" === e.dataset.isExternal, e.addEventListener("click", (n => {
                n.preventDefault(), dataLayer.push({
                    event: "clickEvent",
                    collectionTitle: t.collectionTitle,
                    collectionFocus: t.collectionFocus,
                    collectionCategory: t.collectionCategory,
                    contentType: t.mediaType,
                    title: t.mediaTitle,
                    itemIndex: t.itemIndex,
                    theme: t.theme,
                    optaId: t.optaId,
                    eventCallback: function() {
                        e.dataset.modalActive || (t.isExternal ? window.open(e.getAttribute("href"), "_blank").focus() : window.location = e.getAttribute("href"))
                    }
                })
            }))
        }, e.widgetInitialiser.addMultipleWidgetsByName("media-thumbnail-tracking", e.MediaThumbnailTracking)
    }(PULSE.app),
    function(e, t) {
        t.trackQuizView = function() {
            n("quizView", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
        }, t.trackQuizQuestionAnswered = function() {
            n("quizQuestionAnswered", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
        }, t.trackQuizCompleted = function() {
            n("quizCompleted", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
        }, t.trackArticleView = function() {
            n("article_started", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
        }, t.trackArticleCompleted = function() {
            n("article_finished", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
        };
        const n = function(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = e.tracking.getSiteDetails();
            if (void 0 !== window.dataLayer) {
                let e = Object.assign({
                    event: t
                }, a, n);
                dataLayer.push(e)
            } else console.warn("dataLayer not found when trying to track articleView")
        }
    }(PULSE.app, PULSE.app.common),
    function(e) {
        e.articleTable = function(e) {
            this.tables = e.querySelectorAll("table"), this.tables.forEach((e => {
                e.parentElement.classList.contains("article__body") && (e.outerHTML = '<div class="article__table">' + e.outerHTML + "</div>")
            }))
        };
        document.querySelectorAll(".standardArticle").forEach((t => new e.articleTable(t)))
    }(PULSE.app.common),
    function(e, t) {
        e.broadcasterLogo = function(t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            let a;
            if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                if (a = t.querySelectorAll(".js-broadcaster-logo"), !a.length && n < 5) return void setTimeout((function() {
                    e.broadcasterLogo(t, !0, n + 1)
                }), 500)
            } else a = t.querySelectorAll("img");
            for (let e = 0; e < a.length; e++) {
                let t = a[e];
                if (t.complete) {
                    if (0 === t.naturalHeight && 0 === t.naturalWidth) {
                        t.parentElement.dataset.size;
                        t.srcset && t.srcset.length && (t.src = t.srcset.split(",")[0]), this.removeAttribute("srcset")
                    }
                } else t.onerror = function() {
                    this.srcset && this.srcset.length && (this.src = this.srcset.split(",")[0]), this.removeAttribute("srcset")
                }
            }
        };
        let n = document.querySelectorAll('[data-widget="broadcaster-logo-image"]');
        for (let t = 0; t < n.length; t++) new e.broadcasterLogo(n[t])
    }(PULSE.app, PULSE.app.common),
    function(e, t) {
        e.checkGameweek = function(e) {
            let t = this;
            t.config = e || {}, t.compSeason = t.config.compSeason, t.gameWeek = t.config.gameWeek, t.callback = t.config.callback, t.target = t.config.target, t.getCurrentWeek()
        }, e.checkGameweek.prototype.getCurrentWeek = function() {
            let n = {
                    id: this.compSeason
                },
                a = {
                    url: e.createApiPath("competition-season.gameweeks.current", n),
                    method: "GET",
                    callback: this.checkGameweek,
                    forceCallback: !0,
                    target: this
                };
            t.data.manager.add(a)
        }, e.checkGameweek.prototype.checkGameweek = function(e) {
            let t = this;
            if (e && e.gameweeks && e.gameweeks.length > 0) {
                let n = !1;
                e.gameweeks[0].gameweek == t.gameWeek && (n = !0), t.callback.call(t.config.target, n)
            }
        }
    }(PULSE.app.common, PULSE.core),
    function(e, t) {
        e.clubBadge = function(n) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            let o;
            if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                if (o = n.querySelectorAll(".js-badge-image"), !o.length && a < 5) return void setTimeout((function() {
                    e.clubBadge(n, !0, a + 1)
                }), 500)
            } else o = n.querySelectorAll("img");
            for (let i = 0; i < o.length; i++) {
                let l = o[i];
                if (l.complete) {
                    if (0 === l.naturalHeight && 0 === l.naturalWidth) {
                        const o = l.parentElement.dataset.size || "25";
                        if (!t.getDefaultBadge && a < 5) return void setTimeout((function() {
                            e.clubBadge(n)
                        }), 500);
                        let i = t.getDefaultBadge(o);
                        l.srcset && l.srcset.length ? l.src = l.srcset.split(",")[0] : l.src = i, l.removeAttribute("srcset")
                    }
                } else l.onerror = function() {
                    const e = this.parentElement.dataset.size || "25";
                    let n = t.getDefaultBadge(e);
                    this.srcset && this.srcset.length ? this.src = this.srcset.split(",")[0] : this.src = n, this.removeAttribute("srcset")
                }
            }
        };
        let n = document.querySelectorAll('[data-widget="club-badge-image"]');
        for (let t = 0; t < n.length; t++) new e.clubBadge(n[t])
    }(PULSE.app, PULSE.app.common),
    function(e) {
        e.removeRadioBroadcasters = function(e) {
            if (e.length > 0)
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    n.broadcasters = n.broadcasters.filter((function(e) {
                        return -1 === e.name.indexOf("UK Radio")
                    }))
                }
            return e
        }, e.reoderBroadcasters = function(e, t) {
            return "US" !== t || e.forEach((t => {
                if ("UNIVERSO" === t.abbreviation || "TELEMUND" === t.abbreviation) {
                    const n = e.indexOf(t);
                    e.splice(n, 1), e.push(t)
                }
            })), e
        }
    }(PULSE.app.common),
    function(e, t, n, a) {
        let o = function(e) {
            return e ? e.replace(/[|&;$%@"<>()+,]/g, "") : ""
        };
        t.getContentModel = function(n) {
            let i = n || {},
                l = "";
            switch (i.template = i.type, i.type) {
                case "text":
                    i.articleUrl = i.hotlinkUrl ? i.hotlinkUrl : i.url ? i.url : t.generateContentUrl(i.type, i.id), null != i.tags && i.tags.map((function(e) {
                        "Featured" === e.label && (i.articleUrl += "/featured")
                    }));
                    if (i.optaId = function(e) {
                            if (e.tags && e.tags.length > 0)
                                for (let t = 0; t < e.tags.length; t++)
                                    if (e.tags[t] && e.tags[t].label && e.tags[t].label.indexOf("OptaID") > -1) {
                                        let n = e.tags[t].label.split("_");
                                        if (n.length > 1) return n[1]
                                    }
                        }(i), i.leadMedia && i.leadMedia.variants && "video" != i.leadMedia.type) {
                        var r = e["Embed Photo"];
                        i.variant = t.getVariantBySize(i.leadMedia.variants, r.width, r.height), i.imageAlt = i.leadMedia.title
                    } else i.leadMedia && i.leadMedia.thumbnailUrl ? (i.variant = {
                        url: i.leadMedia.thumbnailUrl
                    }, i.imageAlt = i.leadMedia.title) : i.optaId && (i.variant = {
                        url: t.getDefaultTeamThumbnailUrl(i.optaId)
                    });
                    if (i.related) {
                        let e = [];
                        i.related.forEach((function(n, a) {
                            a < 3 && (n.url = t.generateContentUrl(n.type.toLowerCase(), n.id), e.push(n))
                        })), i.related = e
                    }
                    var s = new RegExp('<link rel="stylesheet"(.|\n)*?>');
                    "string" == typeof i.body && (i.body = i.body.replace(s, ""));
                    break;
                case "photo":
                    if (i.variants) {
                        r = e["Embed Photo"];
                        i.variant = t.getVariantBySize(i.variants, r.width, r.height);
                        let n = t.getVariantWithWidth(i.variants, e.Widescreen.width);
                        i.galleryVariant = n ? n.url : ""
                    }
                    i.svgPath = "M39.8,65.2H13.5c-1.2,0-2.2-1-2.2-2.2V36.7c0-0.9,0.5-1.7,1.4-2.1c0.8-0.4,1.8-0.2,2.4,0.4l8.4,8c0.9,0.9,0.9,2.3,0.1,3.2", i.svgPath += "c-0.9,0.9-2.3,0.9-3.2,0.1l-4.6-4.4v18.9h18.9l-4.4-4.6c-0.8-0.9-0.8-2.2,0-3.1l12.5-12.9c0.9-0.9,2.3-0.9,3.2-0.1", i.svgPath += "c0.9,0.9,0.9,2.3,0.1,3.2L35,54.6l6.5,6.8c0.6,0.7,0.8,1.6,0.4,2.4C41.6,64.7,40.7,65.2,39.8,65.2z M63,42.1c-0.6,0-1.1-0.2-1.5-0.6", i.svgPath += "l-8.4-8c-0.9-0.9-0.9-2.3-0.1-3.2c0.9-0.9,2.3-0.9,3.2-0.1l4.6,4.4V15.8H41.9l4.4,4.6c0.8,0.9,0.8,2.2,0,3.1L33.7,36.4", i.svgPath += "c-0.9,0.9-2.3,0.9-3.2,0.1c-0.9-0.9-0.9-2.3-0.1-3.2l11-11.4L35,15c-0.6-0.7-0.8-1.6-0.4-2.4c0.4-0.8,1.2-1.4,2.1-1.4H63", i.svgPath += "c1.2,0,2.2,1,2.2,2.2v26.3c0,0.9-0.5,1.7-1.4,2.1C63.6,42,63.3,42.1,63,42.1z";
                    break;
                case "video":
                    if (l = void 0 !== i.publishFrom ? i.publishFrom : void 0 !== i.timestamp ? i.timestamp : i.date, i.thumbnail && i.thumbnail.variants.length > 0) {
                        r = e["Embed Photo"];
                        i.variant = t.getVariantBySize(i.thumbnail.variants, r.width, r.height), void 0 === i.variant && (i.variant = {
                            url: i.thumbnailUrl
                        })
                    } else i.variant = {
                        url: i.thumbnailUrl
                    };
                    i.tags && null !== i.tags && !Array.isArray(i.tags) && i.tags.map((function(e) {
                            "fantasy" === e.label.toLowerCase() && (i.fantasy = "thumbnail--fantasy")
                        })), i.uiArgs = JSON.stringify({
                            contentId: i.id,
                            mediaId: i.mediaId ? i.mediaId : 0,
                            fantasy: i.fantasy,
                            mediaTitle: o(i.title),
                            mediaDescription: o(i.description),
                            mediaDate: l,
                            mediaHotlinkUrl: i.hotlinkUrl ? o(i.hotlinkUrl) : "",
                            mediaHotlinkText: i.metadata && i.metadata.hotlinkText ? o(i.metadata.hotlinkText) : ""
                        }), i.durationString = function(e) {
                            let t = "";
                            if (e) {
                                Math.floor(e / 3600);
                                let n = Math.floor(e / 60),
                                    a = e % 60;
                                n < 10 && (t += "0"), t += n + ":", a < 10 && (t += "0"), t += a
                            }
                            return t
                        }(i.duration), i.closedCaptioned && (i.ccString = a.lookup("label.closedcaption")),
                        function(e) {
                            let t = null;
                            return e.references && e.references.forEach((function(e) {
                                "ACCESSIBLE_VIDEO" === e.type && (t = !0)
                            })), t
                        }(i) && (i.avString = a.lookup("label.audiodescription"));
                    break;
                case "playlist":
                    "PHOTO" === i.typeRestriction ? i.url = t.generateContentUrl("gallery", i.id) : i.url = t.generateContentUrl(type, i.id), i.coverItem && i.coverItem.variants && (i.variant = t.getVariantBySize(i.coverItem.variants, e["Embed Photo"].width, e["Embed Photo"].height)), i.itemsSize = i.items ? i.items.length : 0
            }
            return i
        }
    }(PULSE.app.photoVariants, PULSE.app.common, moment, PULSE.I18N),
    function(e, t) {
        e.getPlayerModel = function(n) {
            let a = n;
            return a.url = e.generateContentUrl("player", a.id, a.name.display.replace(new RegExp(" ", "g"), "-")), a.imageSize = "110x140", a.playerImage = a ? .altIds ? .opta ? e.getPlayerImg(a.altIds.opta, a.imageSize) : e.getDefaultPlayerImg(a.imageSize), a.optaId = a ? .altIds ? .opta ? a.altIds.opta : void 0, a.activeClass = a.active ? "active" : "inactive", a.names = e.splitDisplayName(a.name.display), a.info && a.info.shirtNum && (a.shirtNum = a.info.shirtNum), a.latestPosition && (a.positionLabel = t.lookup("label." + a.latestPosition.toLowerCase())), a.nationalTeam ? a.nationality = {
                country: a.nationalTeam.country,
                isoCode: a.nationalTeam.isoCode,
                label: t.lookup("label.player.nationality")
            } : a ? .birth ? .country ? .country && a ? .birth ? .country ? .isoCode && (a.nationality = {
                country: a.birth.country.country,
                isoCode: a.birth.country.isoCode,
                label: t.lookup("label.player.nationality")
            }), a.stats = [], a.stats.push({
                label: t.lookup("label.stat.appearances"),
                stat: void 0 !== a.appearances ? a.appearances : "0"
            }), !a.latestPosition || "GOALKEEPER" !== a.latestPosition && "DEFENDER" !== a.latestPosition || a.stats.push({
                label: t.lookup("label.stat.clean_sheet"),
                stat: void 0 !== a.cleanSheets ? a.cleanSheets : "0"
            }), a.latestPosition && "GOALKEEPER" !== a.latestPosition && a.stats.push({
                label: t.lookup("label.stat.goals"),
                stat: void 0 !== a.goals ? a.goals : "0"
            }), a.latestPosition && "GOALKEEPER" !== a.latestPosition && "DEFENDER" !== a.latestPosition && a.stats.push({
                label: t.lookup("label.stat.assists"),
                stat: void 0 !== a.assists ? a.assists : "0"
            }), a.currentTeam && (a.team = {
                name: a.currentTeam.shortName,
                url: e.generateContentUrl("team", a.currentTeam.club.id, a.currentTeam.club.name.replace(new RegExp(" ", "g"), "-"))
            }, a.team.opta = a.currentTeam.altIds && a.currentTeam.altIds.opta ? a.currentTeam.altIds.opta : ""), a ? .team ? .opta && (a.clubBadge = e.getClubBadge(a.team.opta, "25"), a.clubBadgeRetina = e.getClubBadge(a.team.opta, "25", !0), a.clubBadgeSmall = e.getClubBadge(a.team.opta, "20"), a.clubBadgeSmallRetina = e.getClubBadge(a.team.opta, "20", !0), a.clubBadgeMedium = e.getClubBadge(a.team.opta, "50"), a.clubBadgeMeidumRetina = e.getClubBadge(a.team.opta, "50", !0), a.clubBadgeLarge = e.getClubBadge(a.team.opta, "100"), a.clubBadgeLargeRetina = e.getClubBadge(a.team.opta, "100", !0)), a.profileLabel = t.lookup("label.profile"), a
        }, e.getManagerModel = function(n) {
            let a = n;
            return a.url = e.generateContentUrl("manager", a.id, a.name.display.replace(new RegExp(" ", "g"), "-")), a.imageSize = "110x140", a.playerImage = e.getDefaultPlayerImg(a.imageSize), a.optaId = a.altIds && a.altIds.opta ? a.altIds.opta : void 0, a.activeClass = a.active ? "active" : "inactive", a.nationalTeam ? a.nationality = {
                country: a.nationalTeam.country,
                isoCode: a.nationalTeam.isoCode,
                label: t.lookup("label.player.nationality")
            } : a ? .birth ? .country ? .country && a ? .birth ? .country ? .isoCode && (a.nationality = {
                country: a.birth.country.country,
                isoCode: a.birth.country.isoCode,
                label: t.lookup("label.player.nationality")
            }), a.currentTeam && (a.team = {
                name: a.currentTeam.shortName,
                url: e.generateContentUrl("team", a.currentTeam.club.id, a.currentTeam.club.name.replace(new RegExp(" ", "g"), "-"))
            }, a.team.opta = a.currentTeam.altIds && a.currentTeam.altIds.opta ? a.currentTeam.altIds.opta : ""), a ? .team ? .opta && (a.clubBadge = e.getClubBadge(a.team.opta, "25"), a.clubBadgeRetina = e.getClubBadge(a.team.opta, "25", !0)), a.profileLabel = t.lookup("label.managerProfile"), a
        }, e.getPointsDeducted = function(e) {
            let t = [];
            return e && e.length > 0 && e.forEach((function(e) {
                e.annotations && e.annotations.length > 0 && e.annotations.forEach((function(n) {
                    if ("PD" === n.type && n.description) {
                        let a = e.team.shortName ? e.team.shortName : e.team.name,
                            o = "*" + n.description;
                        t.push({
                            message: o,
                            team: a
                        })
                    }
                }))
            })), t
        }, e.splitDisplayName = e => {
            const t = e.split(" "),
                n = {};
            return t.length < 2 ? (n.first = "", n.last = t[0]) : (n.first = t[0], n.last = t.slice(1, t ? .length).join(" ")), n
        }, e.isFastMovingDataEnabled = () => "true" === ("undefined" != typeof FAST_MOVING_DATA_ENABLED ? FAST_MOVING_DATA_ENABLED : "false").trim().toLowerCase()
    }(PULSE.app.common, PULSE.I18N),
    function(e, t, n) {
        e.momentGetDaysFromRange = function(e, a, o, i) {
            let l = e instanceof Date ? e : new Date(e),
                r = a instanceof Date ? a : new Date(a),
                s = l.getTime(),
                c = (r.getTime(), []),
                d = s;
            i && l.toLocaleDateString() !== r.toLocaleDateString() && c.push({
                date: l,
                string: n && o ? n(l).locale(t.language).format(o) : l.toLocaleDateString(),
                std: !!n && n(l).format("DD-MM-YYYY")
            });
            do {
                d += 864e5;
                let e = new Date(d);
                c.push({
                    date: e,
                    string: n && o ? n(e).locale(t.language).format(o) : e.toLocaleDateString(),
                    std: !!n && n(e).format("DD-MM-YYYY")
                })
            } while (d < r.getTime());
            return c
        }, e.getSinceString = function(e, t) {
            if (e) {
                let n = new Date,
                    a = Math.floor((n - e) / 1e3);
                return a <= 0 ? t ? t.justNow : "just now" : a < 60 ? Math.round(a) + (t ? t.seconds : "s") : a < 3600 ? Math.round(a / 60) + (t ? t.minutes : "m") : a < 86400 ? Math.round(a / 3600) + (t ? t.hours : "h") : Math.round(a / 86400) + (t ? t.days : "d")
            }
        }
    }(PULSE.app.common, PULSE.app, moment),
    function(e, t, n) {
        t.getDefaultPlayerImg = function(e) {
            return t.getPlayerImg("Photo-Missing", e)
        }, t.setPlayerImageLoader = function(e, n, a, o) {
            let i, l = t.getPlayerImg(e, n, o),
                r = t.getDefaultPlayerImg(n);
            a.onerror = function() {
                a.getAttribute("data-error") || (a.setAttribute("data-error", !0), i = document.querySelectorAll('[data-player="' + e + '"]'), i.forEach((e => {
                    e.setAttribute("src", r)
                })))
            }, a.setAttribute("src", l)
        }, t.getPlayerImg = function(t, n, a) {
            return e.environment.playerImagePath + n + "/" + t + "." + (a || "png")
        }, t.getDefaultTeamThumbnailUrl = function(e) {
            return e ? `${BASE_RESOURCE_URL}/i/default-thumbnails/${e}.png` : ""
        }, t.getImageUrl = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (e) {
                if (e.onDemandUrl && (n || a)) return e.onDemandUrl + "?width=" + n + "&height=" + a;
                return t.getVariantWithWidth(e.variants, n).url
            }
        }, t.getBroadcasterLogo = function(t, n, a, o) {
            let i = a ? "@x2" : "";
            return e.environment.broadcasterLogo + n + "/" + t.toLowerCase() + i + "." + (o || "png")
        }, t.getCompetitionLogo = function(t, n, a) {
            let o = n ? "@x2" : "";
            return e.environment.competitionLogo + "competition_" + t + o + "." + (a || "png")
        }, t.getClubBadge = function(t, n, a, o) {
            let i = a ? "@x2" : "",
                l = o;
            const r = [];
            return [].includes(t) || r.includes(t) ? (l = "svg", r.includes(t) && (l = "png"), e.environment.badges + "rb/" + t + "." + (l || "png")) : e.environment.badges + (n || "medium") + "/" + t + i + "." + (l || "png")
        }, t.getDefaultBadge = function(t, n) {
            return e.environment.badges + (t || "25") + "/default." + (n || "png")
        }, t.getPhotosForContainer = function(e) {
            if (e) {
                let a = e.getElementsByClassName("js-player-photo-container"),
                    o = a.length - 1;
                for (; o > -1;) {
                    let e = a[o].getAttribute("data-player"),
                        i = a[o].getAttribute("data-size") || "140",
                        l = a[o].getAttribute("data-extension");
                    t.setPlayerImageLoader(e, i, a[o], l), n.style.removeClass(a[o], "js-player-photo-container"), o--
                }
            }
        }, t.hideSponsorLogo = e => ("undefined" != typeof SPONSOR_LOGOS_TO_HIDE ? SPONSOR_LOGOS_TO_HIDE : "").trim().toLowerCase().includes(e) ? "" : e
    }(PULSE.app, PULSE.app.common, PULSE.core),
    function(e, t, n) {
        t.renderKickOffData = function(t, n) {
            if (t) {
                let a = n || {},
                    o = a.className ? a.className : "renderKOContainer",
                    i = a.format ? a.format : "HH:mm",
                    l = t.getElementsByClassName(o);
                if (l && l.length > 0)
                    for (let t = 0; t < l.length; t++) {
                        let n = l[t].getAttribute("data-kickoff");
                        if (n) {
                            let a = moment(parseInt(n)).locale(e.language).format(i);
                            l[t].innerHTML = a
                        }
                    }
            }
        }, t.orderKickOffs = function(t, n, a, o) {
            if (t && n && a) {
                let l = o || {},
                    r = l.className ? l.className : "matchWeekMatchContainer",
                    s = l.format ? l.format : "dddd D MMMM",
                    c = t.getElementsByClassName(r),
                    d = {},
                    u = [];
                for (var i = 0; i < c.length; i++) {
                    let t = c[i].getAttribute("data-kickoff");
                    if (t) {
                        let n = moment(parseInt(t)).locale(e.language).format(s);
                        d[n] ? d[n].push(c[i]) : (u.push(n), d[n] = [c[i]])
                    }
                }
                for (i = 0; i < u.length; i++)
                    if (d && d[u[i]]) {
                        let e = {
                            date: u[i]
                        };
                        n.innerHTML += Mustache.render(a, e);
                        let t = n.getElementsByClassName(u[i] + "MatchContainer");
                        if (t && t.length > 0)
                            for (let e = 0; e < d[u[i]].length; e++) t[0].appendChild(d[u[i]][e])
                    }
            }
        }
    }(PULSE.app, PULSE.app.common, PULSE.core),
    function(e, t) {
        e.getEventTypeClass = function(e, t) {
            switch (e.type) {
                case "PS":
                    return "time-w";
                case "PE":
                    return "1" === e.phase ? "time-half-w" : "time-full-w"
            }
            if (t) switch (e.description) {
                case "G":
                case "P":
                    return "ball-small"
            }
            switch (e.description) {
                case "Y":
                    return "card-yellow";
                case "R":
                    return "card-red";
                case "YR":
                    return "card-yellow-red";
                case "O":
                    return "og-w";
                case "G":
                case "P":
                    return "ball-small";
                case "OFF":
                    return "sub-off";
                case "ON":
                    return "sub-on";
                case "sub":
                    return "sub-w";
                case "S":
                case "M":
                    return "miss-p-w";
                default:
                    return ""
            }
        }, e.getEventAccessibleDescription = function(e) {
            switch (e.description) {
                case "Y":
                    return t.lookup("label.yellowcard");
                case "R":
                    return t.lookup("label.redcard");
                case "YR":
                    return t.lookup("label.yellowcard.second");
                case "O":
                    return t.lookup("label.owngoal");
                case "G":
                    return t.lookup("label.goal");
                case "P":
                    return t.lookup("label.penaltyscored");
                case "OFF":
                    return t.lookup("label.substitution.off");
                case "ON":
                    return t.lookup("label.substitution.on");
                case "sub":
                    return t.lookup("label.substitution");
                case "S":
                    return t.lookup("label.penaltysaved");
                case "M":
                    return t.lookup("label.penaltymissed");
                default:
                    return ""
            }
        }, e.getEventLabel = function(e) {
            switch (e.type) {
                case "PS":
                    return "1" === e.phase ? t.lookup("label.kickoff") : t.lookup("label.secondhalf");
                case "PE":
                    return "1" === e.phase ? t.lookup("label.halftime") : t.lookup("label.fulltime")
            }
            switch (e.description) {
                case "G":
                case "P":
                    return t.lookup("label.goal");
                case "O":
                    return t.lookup("label.owngoal");
                case "Y":
                    return t.lookup("label.yellowcard");
                case "R":
                case "YR":
                    return t.lookup("label.redcard");
                case "S":
                case "M":
                    return t.lookup("label.penaltymissed");
                case "sub":
                case "OFF":
                case "ON":
                    return t.lookup("label.substitution");
                default:
                    return ""
            }
        }, e.getEventTime = function(e) {
            let t = Math.floor(e.clock.secs / 60);
            return "1" === e.phase && t > 45 ? t = "45 +" + (t - 45) : "2" === e.phase && t > 90 && (t = "90 +" + (t - 90)), t + "'"
        }, e.getPlayerForEvent = function(e, t) {
            for (let a = 0; a < e.length; a++) {
                let o = e[a];
                if (o.lineup)
                    for (var n = 0; n < o.lineup.length; n++)
                        if (o.lineup[n].id == t) return o.lineup[n];
                if (o.substitutes)
                    for (n = 0; n < o.substitutes.length; n++)
                        if (o.substitutes[n].id == t) return o.substitutes[n]
            }
        }, e.getPlayerForType = function(n, a, o, i) {
            let l = a.clock.secs,
                r = e.getEventTime(a);
            return n[o] || (n[o] = {}), "Y" != a.description && ("P" === a.description ? r += " (" + t.lookup("label.penalty.short") + ")" : "O" === a.description && (r += " (" + t.lookup("label.owngoal.short") + ")"), n[o][i] || (n[o][i] = []), n[o][i].push({
                label: r,
                val: l
            })), n
        }, e.getPlayerEvents = function(t, n) {
            const a = {
                    goalAndAssist: {},
                    playerBookings: {}
                },
                o = {
                    goalAndAssist: {},
                    playerBookings: {}
                };
            return t && t.length > 0 && t.forEach((t => {
                const i = t.teamId == n[0].teamId ? a : o;
                if ("G" == t.description || "P" == t.description || "O" == t.description) {
                    var l = e.getPlayerForEvent(n, t.personId),
                        r = e.getPlayerForEvent(n, t.assistId);
                    i.goalAndAssist[`${t.personId}`] ? i.goalAndAssist[`${t.personId}`].matchEvents.push({
                        scorerId: t.personId,
                        time: e.getEventTime(t),
                        isPenalty: "P" == t.description,
                        scorerName: l ? .name.display || "",
                        scorerFirstName: e.splitDisplayName(l ? .name.display).first,
                        scorerLastName: e.splitDisplayName(l ? .name.display).last,
                        assistName: r ? .name.display || "",
                        description: t.description || "",
                        assistId: t.assistId || "",
                        typeClass: e.getEventTypeClass(t)
                    }) : i.goalAndAssist[`${t.personId}`] = {
                        matchEvents: [{
                            scorerId: t.personId,
                            time: e.getEventTime(t),
                            isPenalty: "P" == t.description,
                            scorerName: l ? .name.display || "",
                            scorerFirstName: e.splitDisplayName(l ? .name.display).first,
                            scorerLastName: e.splitDisplayName(l ? .name.display).last,
                            assistName: r ? .name.display || "",
                            description: t.description || "",
                            assistId: t.assistId || "",
                            typeClass: e.getEventTypeClass(t)
                        }]
                    }
                }
                if ("Y" == t.description || "YR" == t.description || "R" == t.description) {
                    if (!t || !t.personId) return;
                    var s = e.getPlayerForEvent(n, t.personId);
                    i.playerBookings[`${t.personId}`] = {
                        matchEvents: [{
                            scorerId: t.personId,
                            scorerName: s ? .name.display || "",
                            scorerFirstName: e.splitDisplayName(s ? .name.display).first,
                            scorerLastName: e.splitDisplayName(s ? .name.display).last,
                            time: e.getEventTime(t),
                            description: t.description || "",
                            typeClass: e.getEventTypeClass(t)
                        }]
                    }
                }
            })), {
                homeTeam: a,
                awayTeam: o
            }
        }, e.getTeamEventsMap = function(t, n, a) {
            let o = {
                matchEvents: [
                    [],
                    []
                ],
                assists: [
                    [],
                    []
                ]
            };
            return t && t.length > 0 && t.forEach((function(t) {
                if (null != t.teamId && t.type && ("G" == t.description || "Y" == t.description || "YR" == t.description || "R" == t.description || "P" == t.description || "O" == t.description)) {
                    let s = e.getEventTypeClass(t),
                        c = t.description;
                    if ("P" === c && (c = "G"), a && a[t.personId] && a[t.personId][c] && a[t.personId][c].length > 0 && a[t.personId][c][0].val == t.clock.secs && ("Y" !== c || !a[t.personId].YR)) {
                        var i = 0;
                        if (n[1].teamId === t.teamId && (i = 1), r = e.getPlayerForEvent(n, t.personId)) {
                            "G" === c && a[t.personId][c].length > 1 ? s = "icn ball-2-sm-w" : "G" === c && (s = "icn ball-white");
                            var l = " " + a[t.personId][c].map((function(e) {
                                return e.label
                            })).join(",") + " ";
                            o.matchEvents[i].push({
                                typeClass: s,
                                playerName: r.name.display,
                                playerUrl: e.generateContentUrl("player", r.id, r.name.display.replace(new RegExp(" ", "g"), "-")),
                                eventTimes: l
                            })
                        }
                    }
                    if (t.teamId && "G" == t.description && t.assistId && a && a[t.assistId] && a[t.assistId].AS && a[t.assistId].AS.length > 0 && a[t.assistId].AS[0].val == t.clock.secs) {
                        var r;
                        i = 0;
                        if (n[1].teamId === t.teamId && (i = 1), r = e.getPlayerForEvent(n, t.assistId)) {
                            l = " " + a[t.assistId].AS.map((function(e) {
                                return e.label
                            })).join(",") + " ";
                            o.assists[i].push({
                                playerName: r.name.display,
                                playerUrl: e.generateContentUrl("player", r.id, r.name.display.replace(new RegExp(" ", "g"), "-")),
                                eventTimes: l
                            })
                        }
                    }
                }
            })), o
        }
    }(PULSE.app.common, PULSE.I18N),
    function(e, t, n) {
        t.ModalsController = function() {
            this.modals = [], this.instances = []
        }, t.ModalsController.prototype.addModal = function(e) {
            let t = this; - 1 === t.modals.indexOf(e.config.modalContentId) && (t.modals.push(e.config.modalContentId), t.instances.push(e))
        }, t.ModalsController.prototype.closeAll = function() {
            this.instances.forEach((function(e) {
                e.close()
            }))
        }, e.modalsController = new t.ModalsController
    }(PULSE.app, PULSE.app.common, PULSE.I18N),
    function(e, t) {
        PULSE.app.common.refreshScripts = function(t) {
            let n = t.getElementsByTagName("script"),
                a = [];
            Array.prototype.map.call(n, (function(e) {
                if (!e.getAttribute("data-script-created")) {
                    let n = !0;
                    if (a.length > 0 && a.forEach((function(t) {
                            t === e.src && (n = !1)
                        })), e.parentNode.removeChild(e), n) {
                        let n = document.createElement("script");
                        n.setAttribute("data-script-created", !0), n.type = "text/javascript", n.src = e.src, a.push(e.src), t.appendChild(n)
                    }
                }
            })), e.widgetDeps(t)
        }
    }(PULSE.app), PULSE.app.common.getTableRowClass = function(e) {
        if (1 === e.position) return "tableDark";
        if (e.annotations && e.annotations.length > 0)
            for (let t = 0; t < e.annotations.length; t++) {
                let n = e.annotations[t];
                if (n.type && "Q" === n.type) return n.destination && "EU_EL" === n.destination ? "tableLight" : "tableMid";
                if (n.type && "R" === n.type) return "tableMid"
            }
        return ""
    },
    function(e, t) {
        e.templateTranslator = function() {
            return function(e, n) {
                return t.lookup(n(e))
            }
        }
    }(PULSE.app.common, PULSE.I18N),
    function(e, t, n) {
        let a = function(e) {
            let t = [];
            for (let n in e) void 0 !== e[n] && "" !== e[n] && t.push(n + "=" + e[n]);
            return t
        };
        t.createApiPath = function(t, a) {
            let o = n.object.objectByString(e.apiPath, t),
                i = [];
            for (let e in a) o.indexOf("{" + e + "}") > -1 ? o = o.replace("{" + e + "}", a[e]) : void 0 !== a[e] && null !== a[e] && i.push(e + "=" + a[e]);
            let l = e.environment.api + "/football" + o;
            return i.length > 0 && (l += "?" + i.join("&")), l
        }, t.createVotingApiPath = function(t, a) {
            let o = n.object.objectByString(e.apiPath, t),
                i = [];
            for (let e in a) o.indexOf("{" + e + "}") > -1 ? o = o.replace("{" + e + "}", a[e]) : void 0 !== a[e] && i.push(e + "=" + a[e]);
            let l = e.environment.api + o;
            return i.length > 0 && (l += "?" + i.join("&")), l
        }, t.createContentPath = function(t, n, o, i) {
            let l = e.environment.api + "/content/" + e.account + "/" + t + "/" + (o || e.defaultLanguage) + "/" + (i || "");
            if (n) {
                let e = a(n);
                e.length > 0 && (l += "?" + e.join("&"))
            }
            return l
        }, t.createLiveBlogPath = function(t, n, o, i) {
            let l = e.environment.api + "/liveblog/" + e.account + "/" + n + "/" + (t || e.defaultLanguage);
            if (void 0 === i || isNaN(i) || (l += "/below/" + i), o) {
                let e = a(o);
                e.length > 0 && (l += "?" + e.join("&"))
            }
            return l
        }, t.createCanaryPathFromReference = function(t, n) {
            return e.environment.canary + "account/" + e.canaryAccount + "/contentref/" + t + ":" + n + "/posts"
        }, t.createCanaryPathFromId = function(t) {
            return e.environment.canary + "stream/" + t + "/posts"
        }, t.createSearchPath = function(t, n, o) {
            let i = e.environment.api + "/search/" + e.account + "/";
            if (i += "?terms=" + t.join(","), n && n.length > 0 && (n.map((function(e) {
                    e = e.toUpperCase()
                })), i += "&type=" + n.join(",")), o) {
                let e = a(o);
                e.length > 0 && (i += "&" + e.join("&"))
            }
            return i
        }, t.createPollQuestionUrl = function(t) {
            return e.environment.pollQuestions + "/" + t + "/poll.js"
        }, t.createPollAnswerUrl = function(t, n) {
            return e.environment.pollAnswer + "?id=" + t + "&option=" + n + "&callback=JSON_CALLBACK"
        }, t.generateContentUrl = function(t, n, a, o) {
            let i = "//" + e.environment.domain;
            switch (a && (a = a.replace(" ", "-")), t) {
                case "text":
                    return i + "/news/" + n;
                case "player":
                    return i + "/players/" + n + "/" + (a = a || "player") + "/overview";
                case "club":
                case "team":
                    return i + "/clubs/" + n + "/" + (a = a || "club") + "/overview";
                case "stadium":
                    return i + "/clubs/" + n + "/" + (a = a || "club") + "/stadium";
                case "manager":
                    return i + "/managers/" + n + "/" + a + "/overview";
                case "referee":
                    return i + "/referees/" + n + "/" + a + "/overview";
                case "match":
                    {
                        let e = "";
                        return a && (e = "/" + a),
                        i + "/match/" + n + e
                    }
                case "video":
                    return i + "/" + t + "/single/" + n;
                default:
                    return i + "/" + t + "/" + n
            }
        }, t.getMatchCentreUrl = function(n, a) {
            if (a = a || n.gameweek.compSeason) {
                let l;
                if ("U21" === a.competition.level && e.statCompSeasons.U21.indexOf(a.id) > -1) return l = ["premier-league-2", o(a), i(n)].join("/").toLowerCase(), t.generateContentUrl("match", n.id, l);
                if ("U18" === a.competition.level && e.statCompSeasons.U18.indexOf(a.id) > -1) return l = ["u18-premier-league", o(a), i(n)].join("/").toLowerCase(), t.generateContentUrl("match", n.id, l);
                if ("U21" !== a.competition.level && "U18" !== a.competition.level && e.competitionMatchCentres.indexOf(a.competition.id) > -1) return t.generateContentUrl("match", n.id)
            }
            return ""
        };
        const o = function(e) {
                let t = e.label.split(" ");
                return t[t.length - 1].replace("/", "-")
            },
            i = function(e) {
                let t = "";
                if (e.teams && 2 === e.teams.length) {
                    let n = PULSE.I18N.lookup("label.team.tbc");
                    e.teams[0] && e.teams[0].team ? t += e.teams[0].team.shortName || e.teams[0].team.name : t += n, t += "-v-", e.teams[1] && e.teams[1].team ? t += e.teams[1].team.shortName || e.teams[1].team.name : t += n
                }
                return t.trim().split(" ").join("-")
            }
    }(PULSE.app, PULSE.app.common, PULSE.core),
    function(e) {
        e.getPhotoByVariant = function(e, t) {
            let n;
            for (let a = 0; a < e.length; a++)
                if (e[a].tag.label === t) {
                    n = e[a];
                    break
                }
            return n || null
        }, e.getVariantWithWidth = function(e, t) {
            let n = 1 / 0,
                a = !1;
            for (let o = 0; o < e.length; o++) {
                let i = e[o],
                    l = Math.abs(i.width - t);
                l < n && (n = l, a = o)
            }
            return e[a]
        }, e.getVariantBySize = function(t, n, a) {
            let o = -1;
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                i.width == n && i.height == a && (o = e)
            }
            return o ? t[o] : e.getVariantWithWidth(t, n)
        }, e.getArticleVariants = function(e) {
            let t = !!e.leadMedia && "leadMedia",
                n = !!e.thumbnail && "thumbnail",
                a = e[t || n].variants;
            return a || !1
        }, e.getDurationString = function(e) {
            if (!e) return "";
            let t = Math.floor(e / 60),
                n = e % 60,
                a = "";
            return t && (a += t + " min "), n && (a += n + " sec"), a
        }
    }(PULSE.app.common),
    function(e, t) {
        const n = {
            root: null,
            rootMargin: "0px",
            threshold: .025
        };
        e.LazyLoad = function(e) {
            const t = [].slice.call(e.querySelectorAll(".js-lazy-load")),
                n = this.getUnobservedElements(t);
            this.setObservableListener(n)
        }, e.LazyLoad.prototype.getUnobservedElements = function(e) {
            return e.filter((e => e && "true" !== e.getAttribute("data-picture-in-view")))
        }, e.LazyLoad.prototype.setObservableListener = function(e) {
            const t = this;
            t.observer = new IntersectionObserver(a, n), e.forEach((e => {
                t.observer.observe(e)
            }))
        };
        const a = e => {
                e.forEach((e => {
                    let t = e.target;
                    if (!t) return;
                    let n = t.getAttribute("data-picture-in-view");
                    if (!1 === e.isIntersecting || "true" === n) return;
                    t.setAttribute("data-picture-in-view", "true");
                    const a = i(t);
                    a && t.insertAdjacentHTML("beforeend", a.textContent.trim());
                    let l = t.querySelector(".js-faded-image");
                    l && (l.complete ? o(l, t) : l.addEventListener("load", (function() {
                        o(l, t)
                    })))
                }))
            },
            o = function(e, n) {
                t.style.addClass(e, "is-loaded"), t.style.addClass(n, "is-loaded")
            },
            i = function(e) {
                for (let t = 0; t < e.childNodes.length; t++)
                    if (e.childNodes[t].nodeType === Node.COMMENT_NODE) return e.childNodes[t];
                return null
            };
        e.widgetInitialiser.addMultipleWidgetsByName("lazy-load-images", e.LazyLoad)
    }(PULSE.app, PULSE.core),
    function(e, t) {
        const n = "u-hide";
        e.PlayerCardImage = function(e) {
            const o = this;
            if (o.container = e, o.playerId = e.dataset.player, null === o.playerId) return;
            o.placeholder = e.querySelector(".js-lazy-load"), o.placeholder.classList.add(n);
            const i = t.image.getPlayerImage(o.playerId),
                l = a.call(o, i);
            e.appendChild(l)
        };
        const a = function(e) {
            const t = this,
                a = document.createElement("img");
            return a.onerror = function() {
                this.classList.add("player-card__player-image--error"), t.placeholder.classList.remove(n)
            }, a.setAttribute("src", e), a
        };
        e.widgetInitialiser.addMultipleWidgetsByName("player-card-image", e.PlayerCardImage)
    }(PULSE.app, PULSE.app.common),
    function(e) {
        let t = [];
        e.validateConfig = function(e) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []).forEach((e => {
                n(e, i), a(e, i), o(i[e.namespace], e)
            })), !(t.length > 0) || (t.unshift(`You have ${t.length} errors initialising ${e}.`), console.warn(t.join("\n")), !1)
        };
        const n = (e, n) => !!n[e.namespace] || (t.push(`Missing configuration property. config.${e.namespace} is required and should be of type ${e.elementType}`), !1),
            a = (e, n) => {
                if (void 0 === e.namespace || "undefined" === e.elementType) return;
                let a = n[e.namespace];
                "object" == typeof a ? void 0 === a.length || 0 !== a.length || t.push(`Empty ${e.elementType.name} under config.${e.namespace}`) : t.push(`Could not find ${e.elementType.name} under config.${e.namespace}`)
            },
            o = (e, n) => {
                void 0 !== e && (e instanceof n.elementType || t.push(`Incorrect type. Expected config.${n.namespace} to be instance of ${n.elementType.name}`))
            }
    }(PULSE.app.common),
    function(e) {
        const t = "is-glued",
            n = "js-was-glued",
            a = "js-glue-placeholder";
        e.ViewportGlue = function(e) {
            const t = this;
            t.container = e, t.items = [].slice.call(e.querySelectorAll(".js-will-glue")), t.heights = [], t.observer = o.call(t, t.items)
        };
        const o = function(e) {
                const t = {
                        root: null,
                        rootMargin: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0px",
                        threshold: [.025, 1]
                    },
                    n = new IntersectionObserver(i.bind(this), t);
                return e.forEach((e => {
                    n.observe(e)
                })), n
            },
            i = function(e, n) {
                const i = this,
                    c = e.reduce(((e, n) => (n.boundingClientRect.top <= i.heights.reduce(s, 0) && !n.target.classList.contains(t) && !n.target.classList.contains(a) && e.exiting.push(n), n.boundingClientRect.top > 0 && n.target.classList.contains(a) && n.isIntersecting && e.entering.push(n), e)), {
                        exiting: [],
                        entering: []
                    });
                if (!c.exiting.length && !c.entering.length) return;
                n.disconnect(), c.exiting.forEach((e => {
                    l.call(i, e.target, i.heights.reduce(s, 0)), i.heights.push(e.boundingClientRect.height)
                })), c.entering.forEach((e => {
                    r(e.target), i.heights.splice(i.heights.indexOf(e.boundingClientRect.height), 1)
                }));
                const d = i.heights.reduce(s, 0);
                i.observer = o.call(i, i.items, `-${d}px 0px 0px 0px`)
            },
            l = function(e) {
                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if ("none" === getComputedStyle(e, null).display) return;
                const i = document.createElement("div");
                i.classList.add(a), i.setAttribute("style", `clear:both; height: ${e.clientHeight}px; width: 100%;`), e.classList.add(t, n), e.setAttribute("style", `top: ${o}px;`);
                const l = e.insertAdjacentElement("beforebegin", i);
                this.items.push(l)
            },
            r = e => {
                e.nextElementSibling.classList.remove(t, n), e.remove()
            },
            s = (e, t) => e + t;
        e.widgetInitialiser.addMultipleWidgetsByName("viewport-glue", e.ViewportGlue)
    }(PULSE.app),
    function(e, t) {
        e.ContentTracker = function(n) {
            let a = this;
            a.event = "object" == typeof n ? n : {
                contentType: n.getAttribute("data-tracker-type"),
                contentId: n.getAttribute("data-tracker-id"),
                action: n.getAttribute("data-tracker-action")
            };
            let o = function() {
                let e = "";
                return a.event.contentType || (e += "The html element must include a 'data-tracker-type'/n"), a.event.contentId || (e += "The html element must include a 'data-tracker-id'/n"), a.event.action || (e += "The html element must include a 'data-tracker-action'/n"), e
            }();
            if (o.length > 0) return o;
            let i = {
                url: e.environment.trackingApi,
                headers: [e.accountHeader],
                data: a.event,
                method: "POST",
                callback: a.ContentTracker.prototype.eventSent,
                forceCallback: !0,
                target: this
            };
            t.data.request(i.url, i.method, i.callback, i.target, null, i.data, i.headers)
        }, e.ContentTracker.prototype.eventSent = function(e, t) {};
        let n = document.querySelectorAll("[data-tracker-action]");
        for (let t = 0; t < n.length; t++) new e.ContentTracker(n[t])
    }(PULSE.app, PULSE.core),
    function(e, t) {
        t.filterOptions = function(e, t) {
            this.filters = e, this.updateReferences(t)
        }, t.filterOptions.prototype.addRefsToFilters = function() {
            const e = this;
            let t = "";
            if ("string" == typeof e.references) t += e.references;
            else
                for (let n in e.references) e.references.hasOwnProperty(n) && (t.length > 0 && (t += ","), t += n + ":" + e.references[n]);
            e.filters.references = t
        }, t.filterOptions.prototype.updateFilters = function(t) {
            this.filters = e.object.extend(this.filters, t)
        }, t.filterOptions.prototype.updateReferences = function(t) {
            const n = this;
            void 0 !== t && (n.references && "string" != typeof n.references ? n.references = e.object.extend(n.references, t) : n.references = t, n.addRefsToFilters())
        }, t.filterOptions.prototype.removeReference = function(e) {
            delete this.references[e], this.addRefsToFilters()
        }, t.filterOptions.prototype.get = function() {
            return this.filters
        }
    }(PULSE.core, PULSE.app.common),
    function(e) {
        e.StreamAMGController = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            const n = this,
                a = e.environment.streamAmg;
            n.endpoint = e.environment.streamAmg.script(a.partner, t || a.uiConfig), n.ready = !1, n.players = [], n.readyTargets = [], n.createAPIScript()
        }, e.StreamAMGController.prototype.onKDPReady = function(e) {
            this.ready ? e() : this.readyTargets.push(e)
        }, e.StreamAMGController.prototype.addPlayer = function(e) {
            this.players.push(e)
        }, e.StreamAMGController.prototype.apiLoaded = function() {
            this.ready = !0, this.readyTargets.forEach((function(e) {
                e()
            }))
        }, e.StreamAMGController.prototype.createAPIScript = function() {
            const e = this,
                t = document.createElement("script");
            t.src = e.endpoint, t.type = "text/javascript", t.onload = e.apiLoaded.bind(e), document.body.appendChild(t)
        }
    }(PULSE.app),
    function(e, t, n) {
        const a = () => {
            const e = document.getElementById("js-cookie-notice");
            if (!e) return;
            t.localStorage.setStorage("only-essential-cookies", !0);
            document.querySelectorAll(".js-cookie-notice-btn").forEach((function(e) {
                e.addEventListener("click", n.setCookies)
            })), t.style.removeClass(e, "u-hide")
        };
        n.setCookies = e => {
            const n = document.location.hostname,
                a = document.getElementById("js-cookie-notice"),
                o = e.currentTarget.dataset.acceptAllCookies,
                i = e => {
                    t.localStorage.setStorage("only-essential-cookies", e), t.localStorage.setStorage("cookie-policy-chosen", !0, 730, !0, n)
                };
            if ("true" === o) {
                i(!1);
                const e = new CustomEvent("cookiesAccepted", {
                    detail: "all"
                });
                window.dispatchEvent(e)
            } else if ("false" === o) {
                i(!0);
                const e = new CustomEvent("cookiesAccepted", {
                    detail: "essential"
                });
                window.dispatchEvent(e)
            }
            t.style.addClass(a, "u-hide")
        }, (() => {
            const e = t.localStorage.getStorage("cookie-policy-chosen", !0);
            e && "true" === e || a()
        })()
    }(PULSE.app, PULSE.core, PULSE.app.common),
    function(e, t) {
        e.CookieToggle = function(e) {
            const t = this;
            t.acceptBtn = e.querySelector(".js-accept-btn"), t.declineBtn = e.querySelector(".js-refuse-btn"), t.cookieName = e.dataset.cookieName, t.exclusionCookieName = `${t.cookieName}_exclusion`, t.renderButton(), t.listeners()
        }, e.CookieToggle.prototype.renderButton = function() {
            const e = this,
                n = "u-hide";
            t.localStorage.getStorage(e.exclusionCookieName, !0) ? (t.style.removeClass(e.acceptBtn, n), t.style.addClass(e.declineBtn, n)) : (t.style.addClass(e.acceptBtn, n), t.style.removeClass(e.declineBtn, n))
        }, e.CookieToggle.prototype.listeners = function() {
            const n = this;
            n.declineBtn.addEventListener("click", (() => {
                t.localStorage.setStorage(n.exclusionCookieName, !0, 730, !0, e.environment.domain);
                let a = new CustomEvent("cookieDeclined", {
                    detail: n.cookieName
                });
                window.dispatchEvent(a), n.renderButton()
            })), n.acceptBtn.addEventListener("click", (() => {
                t.localStorage.clearStorage(n.exclusionCookieName, !0, e.environment.domain);
                let a = new CustomEvent("cookieAdded", {
                    detail: n.cookieName
                });
                window.dispatchEvent(a), n.renderButton()
            }))
        }, e.widgetInitialiser.addMultipleWidgetsByName("cookie-toggle", e.CookieToggle)
    }(PULSE.app, PULSE.core),
    function(e, t, n, a) {
        t.dataCaptureHelpers = {};
        const o = 241,
            i = 242,
            l = 243,
            r = 244,
            s = 229,
            c = 100,
            d = {
                1: "One",
                2: "Two",
                3: "Three"
            },
            u = t.constants.dataCapture.DEFAULT_FORM_ELEMENTS,
            p = t.constants.dataCapture.CUSTOM_TEXT_ELEMENT,
            m = t.constants.dataCapture.CUSTOM_CHECKBOX_ELEMENT,
            g = t.constants.dataCapture.CUSTOM_DROPDOWN_ELEMENT,
            f = t.constants.dataCapture.PL_MORNINGS_LIVE.FIELDS,
            h = t.constants.dataCapture.PL_MORNINGS_LIVE_CLUBS,
            y = t.constants.dataCapture.PL_MORNINGS_LIVE.GUEST_OBJECT,
            b = t.constants.dataCapture.VALID_ACCESS_CODES;
        t.dataCaptureHelpers.getFormObject = function(e, n, a, o, i, l) {
            let r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "";
            let s = {
                formElements: [...u.map((e => ({ ...e
                })))]
            };
            const c = s.formElements.map((e => e.questionId)).indexOf("country");
            "false" === e.displayCountry ? c >= 0 && s.formElements.splice(c, 1) : "true" === e.countryMandatory && (s.formElements[c].mandatory = !0), "true" === e.displayUSAFirst ? s.formElements[c].displayUSAFirst = !0 : s.formElements[c].displayUSAFirst = !1;
            const f = s.formElements.map((e => e.questionId)).indexOf("postcode");
            "false" === e.displayPostcode || "false" === e.displayCountry ? f >= 0 && s.formElements.splice(f, 1) : "true" === e.postcodeMandatory && (s.formElements[f].mandatory = !0);
            const h = s.formElements.map((e => e.questionId)).indexOf("dateOfBirth");
            "false" === e.displayDateOfBirth ? h >= 0 && s.formElements.splice(h, 1) : "true" === e.dateOfBirthMandatory && (s.formElements[h].mandatory = !0);
            const y = s.formElements.map((e => e.questionId)).indexOf("lastName");
            "false" === e.displayLastName ? y >= 0 && s.formElements.splice(y, 1) : "true" === e.lastNameMandatory && (s.formElements[y].mandatory = !0);
            const b = s.formElements.map((e => e.questionId)).indexOf("phoneNumber");
            "false" === e.displayPhoneNumber ? b >= 0 && s.formElements.splice(b, 1) : "true" === e.phoneNumberMandatory && (s.formElements[b].mandatory = !0);
            const v = s.formElements.map((e => e.questionId)).indexOf("gender");
            "false" === e.displayGender ? v >= 0 && s.formElements.splice(v, 1) : "true" === e.genderMandatory && (s.formElements[v].mandatory = !0);
            const C = s.formElements.map((e => e.containerType)).indexOf("customTextField");
            if (a)
                for (let e = a; e > 0; e--) {
                    const t = structuredClone(p);
                    t.questionId = `${t.questionId}_optional_${e}`, t.title = `${t.title}_optional_${e}`, t.mandatory = !1, s.formElements.splice(C, 0, t)
                }
            if (n)
                for (let e = n; e > 0; e--) {
                    const t = structuredClone(p);
                    t.questionId = `${t.questionId}_${e}`, t.title = `${t.title}_${e}`, s.formElements.splice(C, 0, t)
                }
            const S = s.formElements.map((e => e.containerType)).indexOf("customCheckboxField");
            if (i)
                for (let e = i; e > 0; e--) {
                    const t = structuredClone(m);
                    t.questionId = `${t.questionId}_optional_${e}`, t.title = `${t.title}_optional_${e}`, t.mandatory = !1, s.formElements.splice(S, 0, t)
                }
            if (o)
                for (let e = o; e > 0; e--) {
                    const t = structuredClone(m);
                    t.questionId = `${t.questionId}_${e}`, t.title = `${t.title}_${e}`, s.formElements.splice(S, 0, t)
                }
            const L = s.formElements.map((e => e.containerType)).indexOf("customDropdownField");
            if (l)
                for (let t = l; t > 0; t--) {
                    const n = structuredClone(g);
                    n.questionId = `${n.questionId}_${t}`, n.title = `${n.title}_${t}`, n.additionalProperties = {
                        dropdownOptions: e[`additionalDropdownOptions${d[t]}`]
                    }, s.formElements.splice(L, 0, n)
                }
            const E = s.formElements.map((e => e.questionId)).indexOf("ageConsent");
            "false" === e.displayMinAge && E >= 0 && s.formElements.splice(E, 1);
            const I = s.formElements.map((e => e.questionId)).indexOf("terms");
            return "false" === e.displayTermsCheckbox && I >= 0 && s.formElements.splice(I, 1), s = t.dataCaptureHelpers.renderDataCaptureTypeSpecificFields(s, r), s
        }, t.dataCaptureHelpers.setFormListeners = function(e, n) {
            const a = e.querySelector(".js-country-dropdown"),
                d = e.querySelector(".js-usa-state-container"),
                u = e.querySelector(".js-usa-state"),
                p = e.querySelector(".js-india-state-container"),
                m = e.querySelector(".js-india-state"),
                g = e.querySelector(".js-postcode-container"),
                f = e.querySelector(".js-postcode");
            a && a.addEventListener("change", (() => {
                const e = parseInt(a.value);
                e === s || e === c ? e === s ? (d.classList.remove("u-hide"), u.dataset.required && (u.required = !0), m.required = !1, p.classList.add("u-hide"), g && (g.classList.add("u-hide"), f.required = !1)) : e === c && (p.classList.remove("u-hide"), m.dataset.required && (m.required = !0), u.required = !1, d.classList.add("u-hide"), g && (g.classList.add("u-hide"), f.required = !1)) : e === o || e === i || e === l || e === r ? (d.classList.add("u-hide"), u.required = !1, p.classList.add("u-hide"), m.required = !1, g && (g.classList.remove("u-hide"), f.dataset.required && (f.required = !0))) : (d.classList.add("u-hide"), u.required = !1, p.classList.add("u-hide"), m.required = !1, g && (g.classList.add("u-hide"), f.required = !1))
            })), t.dataCaptureHelpers.setDataCaptureTypeSpecificListeners(e, n)
        }, t.dataCaptureHelpers.getFormDataModel = function(t, n, a, o, i) {
            const l = Array.isArray(i) ? i : [i];
            let r = {
                    campaignId: n,
                    answer: l || null
                },
                s = [],
                c = [],
                d = [];
            const u = o.querySelectorAll(".js-communication-opt-in-input"),
                p = o.querySelectorAll(".js-club-opt-in-input"),
                m = o.querySelector(".js-favourite-club");
            let g = "";
            const f = [],
                h = {};
            if (e.userData.signedIn) {
                r = {
                    firstName: e.userData.first_name || "",
                    lastName: e.userData.last_name || "",
                    email: e.userData.email || "",
                    postcode: e.userData.postcode || "",
                    date_of_birth: e.userData.date_of_birth || "",
                    pl_communications: e.userData.pl_communications || [],
                    id: e.userData.id || null,
                    gender: e.userData.gender || "",
                    region: e.userData.region || "",
                    state: e.userData.state || "",
                    indiaState: e.userData.indiaState || "",
                    userLoggedIn: !0,
                    userToken: e.userData.userToken,
                    campaignId: n,
                    answer: l
                };
                let a = "";
                for (const e of t.entries()) {
                    const t = e[0];
                    let n = e[1];
                    if ("on" === n && (n = !0), t.includes("guest") && n.length) {
                        const e = parseInt(t.split("_")[1]) - 1,
                            o = t.split("_")[0];
                        if (t.includes("guestDateOfBirth")) {
                            a = t.includes("day") ? `${n}` : `${n}-${a}`, t.includes("year") && (f[e].guestDateOfBirth = a);
                            continue
                        }
                        f[e] ? f[e][o] = n : f.push({
                            [o]: n
                        })
                    }
                    t.includes("custom") && (h[t] = n), "clubAccessCode" === t && (r.clubAccessCode = n), "numberOfGuestsUnder18" === t && (r.numberOfGuestsUnder18 = n)
                }
                if (s = [...e.userData.pl_communications], c = [...e.userData.club_communications], d = [...e.userData.followed_clubs], u.forEach((e => {
                        const t = !0 === e.checked,
                            n = e.value,
                            a = s.findIndex((e => e.plmarketing === parseInt(n)));
                        t && -1 === a ? s.push({
                            plmarketing: parseInt(n)
                        }) : !t && a > -1 && s.splice(a, 1)
                    })), m && "-1" !== m.value) {
                    const e = m.value.replace("t", "");
                    d.push({
                        club: parseInt(e),
                        is_favourite: !0
                    })
                }
                p.forEach((e => {
                    const t = !0 === e.checked,
                        n = e.value,
                        a = c.findIndex((e => e.club === parseInt(n.replace("t", ""))));
                    if (t) {
                        if (-1 === a) c.push({
                            club: parseInt(n.replace("t", "")),
                            club_communications: !0
                        });
                        else {
                            c.find((e => e.club === parseInt(n.replace("t", "")))).club_communications = !0
                        }
                        d.find((e => e.club === parseInt(n.replace("t", "")))) || d.push({
                            club: parseInt(n.replace("t", "")),
                            is_favourite: !1
                        })
                    } else if (!t && a > -1) {
                        c.find((e => e.club === parseInt(n.replace("t", "")))).club_communications = !1
                    }
                }))
            } else {
                let e = "";
                for (const n of t.entries()) {
                    const t = n[0];
                    let a = n[1];
                    if ("ageConsent" === t && (a = !0), "region" === t && (a = parseInt(a)), t.includes("optin_PL")) s.push({
                        plmarketing: a
                    });
                    else if ("on" === a && (a = !0), t.includes("optin_club")) c.push({
                        club: a.replace("t", ""),
                        club_communications: !0
                    });
                    else if ("favouriteclub" !== t) {
                        if (t.includes("guest") && a.length) {
                            const n = parseInt(t.split("_")[1]) - 1,
                                o = t.split("_")[0];
                            if (t.includes("guestDateOfBirth")) {
                                e = t.includes("day") ? `${a}` : `${a}-${e}`, t.includes("year") && (f[n].guestDateOfBirth = e);
                                continue
                            }
                            f[n] ? f[n][o] = a : f.push({
                                [o]: a
                            })
                        }
                        if (t.includes("dateOfBirth")) a.length < 2 && (a = `0${a}`), g = t.includes("day") ? `${a}` : `${a}-${g}`, t.includes("year") && (r.date_of_birth = g);
                        else if (t.includes("guest")) {
                            if (!a.length) continue;
                            const n = parseInt(t.split("_")[1]) - 1,
                                o = t.split("_")[0];
                            if (t.includes("guestDateOfBirth")) {
                                e = t.includes("day") ? `${a}` : `${a}-${e}`, t.includes("year") && (f[n].guestDateOfBirth = e);
                                continue
                            }
                            f[n] ? f[n][o] = a : f.push({
                                [o]: a
                            })
                        } else t.includes("custom") ? h[t] = a : r[t] = a
                    } else "-1" !== a && d.push({
                        club: parseInt(a.replace("t", "")),
                        is_favourite: !0
                    })
                }
            }
            return r.source = "web", r.terms = !0, f.length && (r.guestFields = f), r.customFields = h, r.pl_communications = s, r.club_communications = c, r.followed_clubs = d, r.dataCaptureType = a, r
        }, t.dataCaptureHelpers.updateUserPrefs = function(n) {
            return e.userData = { ...e.userData,
                pl_communications: n.pl_communications,
                club_communications: n.club_communications,
                followed_clubs: n.followed_clubs
            }, t.updateUserAccount({
                pl_communications: n.pl_communications,
                club_communications: n.club_communications,
                followed_clubs: n.followed_clubs
            })
        }, t.dataCaptureHelpers.renderForm = function(n, o) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            n.formObject.formElements.forEach((l => {
                if (!i || i && l.signedIn) {
                    let i = a.lookup(`label.dataCapture.${l.title}`);
                    l.campaignSpecificTitle && (i = a.lookup(`label.dataCapture.${n.campaignId}.${l.title}`));
                    let r = [];
                    "dropdown" === l.elementType && (r = l ? .additionalProperties ? .dropdownOptions.split(",") || []);
                    const s = { ...l,
                        title: i,
                        campaignId: n.campaignId,
                        type: l.elementType,
                        required: l.mandatory ? "required" : "",
                        validationMessage: a.lookup(`label.dataCapture.${l.title}.validationMsg`),
                        dropdownOptions: r,
                        renderSVG: () => e => t.icon.renderSVG(e, "error-message__svg")
                    };
                    e.templates[`formelement${s.type}`] && (o.innerHTML += Mustache.render(e.templates[`formelement${s.type}`], s))
                }
            }))
        }, t.dataCaptureHelpers.setModalPolicyText = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            const l = e.querySelector(".js-policy-text"),
                r = e.querySelector(".js-update-prefs-text"),
                s = e.querySelector(".js-withdraw-club-consent");
            let c = a.lookup(`label.dataCapture.privacyPolicy.${t}`);
            if (c === `label.dataCapture.privacyPolicy.${t}` && (c = a.lookup("label.dataCapture.privacyPolicy")), l.innerHTML = `<p>${c}</p>`, n && o) {
                let e = a.lookup(`label.dataCapture.emailPrefsPolicy.${t}`);
                e === `label.dataCapture.emailPrefsPolicy.${t}` && (e = a.lookup("label.dataCapture.emailPrefsPolicy"))
            } else r.innerHTML = "";
            if (i) {
                let e = a.lookup(`label.dataCapture.withdrawClubPolicy.${t}`);
                e === `label.dataCapture.withdrawClubPolicy.${t}` && (e = a.lookup("label.dataCapture.withdrawClubPolicy")), s.innerHTML = `<p>${e}</p>`
            } else s.innerHTML = ""
        }, t.dataCaptureHelpers.checkInvalidAge = function(e, t) {
            return moment().diff(t, "years") <= parseInt(e)
        }, t.dataCaptureHelpers.renderDataCaptureTypeSpecificFields = function(e, t) {
            const n = e.formElements.map((e => e.containerType)).indexOf("dataCaptureTypeSpecificFields");
            return "pl_mornings_live_guests" !== t && "pl_mornings_live_clubs" !== t || (f.forEach((t => {
                if ("guestsContainer" !== t.containerType) e.formElements.splice(n, 0, t);
                else
                    for (let t = 4; t > 0; t--) {
                        structuredClone(y).forEach((a => {
                            a.questionId = `${a.questionId}_${t}`, a.title = `${a.title}_${t}`, a.mandatory = !1, e.formElements.splice(n, 0, a)
                        }))
                    }
            })), "pl_mornings_live_clubs" === t && e.formElements.splice(n, 0, h)), e
        }, t.dataCaptureHelpers.setDataCaptureTypeSpecificListeners = function(e, t) {
            if ("pl_mornings_live_guests" === t || "pl_mornings_live_clubs" === t) {
                const t = e.querySelector(".js-guest-dropdown"),
                    n = e.querySelectorAll(".js-guest-name"),
                    a = e.querySelectorAll(".js-guest-email"),
                    o = e.querySelectorAll(".js-guest-dob");
                if (!t) return;
                t.addEventListener("change", (() => {
                    const e = parseInt(t.value);
                    for (let e = 0; e < n.length; e++) n[e].classList.add("u-hide"), a[e].classList.add("u-hide"), o[e].classList.add("u-hide"), n[e].querySelector("input").required = !1, n[e].querySelector(".optional").classList.add("u-hide"), a[e].querySelector("input").required = !1, a[e].querySelector(".optional").classList.add("u-hide"), o[e].querySelector(".optional").classList.add("u-hide"), o[e].querySelectorAll("input").forEach((e => {
                        e.required = !1
                    }));
                    for (let t = 0; t < e; t++) n[t].classList.remove("u-hide"), a[t].classList.remove("u-hide"), o[t].classList.remove("u-hide"), n[t].querySelector("input").required = !0, a[t].querySelector("input").required = !0, o[t].querySelectorAll("input").forEach((e => {
                        e.required = !0
                    }))
                }))
            }
        }, t.dataCaptureHelpers.customFormFieldsValid = function(e, t) {
            let n = !0;
            if ("pl_mornings_live_clubs" === t) {
                const t = e.querySelector(".js-club-access-code"),
                    a = e.querySelector(".js-club-access-code-input").value;
                b.includes(a.toLowerCase()) || (n = !1, t.classList.add("invalid"))
            }
            return n
        }, t.dataCaptureHelpers.guestFormFieldsValid = function(e, t) {
            let n = !0;
            if ("pl_mornings_live_guests" === t || "pl_mornings_live_clubs" === t) {
                e.querySelectorAll(".js-guest-dob").forEach((e => {
                    if (e.classList.contains("u-hide")) return n;
                    const t = e.querySelectorAll("input");
                    let a;
                    const o = parseInt(t[0].value),
                        i = parseInt(t[1].value),
                        l = parseInt(t[2].value);
                    a = new Date(l, i - 1, o);
                    const r = new Date(2024, 3, 5);
                    let s = r.getFullYear() - a.getFullYear();
                    const c = r.getMonth() - a.getMonth();
                    return (c < 0 || 0 === c && r.getDate() < a.getDate()) && s--, s >= 18 ? (n = !1, e.classList.add("invalid"), n) : n
                }))
            }
            return n
        }
    }(PULSE.app, PULSE.app.common, PULSE.core, PULSE.I18N),
    function(e, t) {
        let n = function(e) {
                let n = this,
                    a = n.element.querySelector(".current"),
                    o = n.element.querySelector(".current");
                t.style.toggleClass(n.element, "open"), "true" === o.getAttribute("aria-expanded") ? o.setAttribute("aria-expanded", "false") : o.setAttribute("aria-expanded", "true"), (e.target && "LI" === e.target.nodeName || e.target.classList.contains("js-reset-button")) && (a && n.updateCurrent && (a.innerHTML = e.target.getAttribute("data-label")), n.target && n.callback && n.callback.call(n.config.target, e.target))
            },
            a = function(e) {
                let n = this,
                    a = n.element.getElementsByClassName("current"),
                    o = n.element.getElementsByClassName("current");
                e.target == a[0] || e.target == n.element || t.dom.isDescendant(e.target, a[0]) || (t.style.removeClass(n.element, "open"), o[0].setAttribute("aria-expanded", "false"))
            };
        e.dropdown = function(e, o) {
            let i = this;
            i.config = o || {}, i.element = e, i.updateCurrent = i.config.updateCurrent || !0, i.callback = i.config.callback, i.target = i.config.target, t.style.removeClass(i.element, "open"),
                function(e) {
                    let t = e.element.querySelector(".current");
                    const o = e.element.parentElement.querySelector(".js-reset-button");
                    e.element.getAttribute("data-listener") || (e.element.setAttribute("data-listener", !0), e.element.addEventListener("click", n.bind(e)), e.element.addEventListener("keyup", (function(t) {
                        13 === (t.which || t.keyCode) && n.call(e, t)
                    })), t && (document.addEventListener("click", a.bind(e)), document.addEventListener("keyup", (function(t) {
                        13 === (t.which || t.keyCode) && a.call(e, t)
                    }))), o && o.addEventListener("click", n.bind(e)))
                }(i)
        };
        let o = document.querySelectorAll('[data-widget="dropdown"]');
        for (let t = 0; t < o.length; t++) new e.dropdown(o[t], {})
    }(PULSE.app.common, PULSE.core),
    function(e, t) {
        e.event = e.event || {}, e.event.VIDEO = {
            START: "video/start",
            END: "video/end",
            READY: "player/ready",
            PLAY: "player/play-video",
            PAUSE: "player/pause-video",
            CLOSE_FULL_SCREEN: "player/full-screen-closed"
        }, e.event.PLAYLIST = {
            SET_MEDIA: "playlist/set-media",
            SET_TITLE: "playlist/set-title"
        }, e.event.DATA_CAPTURE = {
            ANSWERED: "data_capture/answered",
            ANSWERED_HOF: "data_capture/answeredHof",
            OPEN_MODAL: "data_capture/openModal",
            CLOSE_MODAL: "data_capture/closeModal",
            SUBMIT_SUCCESS: "data_capture/openModal",
            USER_DATA: "data_capture/userData"
        }, e.event.CAROUSEL = {
            NEXT_SLIDE: "carousel/next-slide",
            PREV_SLIDE: "carousel/prev-slide",
            END_REACHED: "carousel/end-reached",
            START_REACHED: "carousel/start-reached"
        }, e.event.USER_PREFS = {
            SET_USER_PREFS: "user-prefs/set-user-prefs"
        }, e.event.dispatch = function(e, n, a, o) {
            o = t.object.extend({
                bubbles: !0,
                cancelable: !0
            }, o || {}), (a || document.body).dispatchEvent(new CustomEvent(e, {
                detail: n || {},
                bubbles: o.bubbles,
                cancelable: o.cancelable
            }))
        }
    }(PULSE.app.common, PULSE.core),
    function(e, t, n) {
        t.fantasyAuthenticate = function() {
            let t = n.localStorage.getStorage(e.cookiePrefix + "profile", !0);
            t ? ('"' === t[0] && '"' === t[t.length - 1] && (t = t.substr(1, t.length - 2)), a(JSON.parse(window.atob(t)))) : a(null)
        };
        var a = function(t) {
            let a = document.getElementsByClassName("fantasySignIn")[0],
                o = document.getElementsByClassName("fantasySignOut")[0],
                i = n.url.updateUrlStringParam(e.environment.fantasyUserApi + "/", "redirect_uri", e.environment.redirectUri);
            i = n.url.updateUrlStringParam(i, "app", e.environment.fantasyAppId);
            let l = e.environment.fantasyUserApi;
            a && a.href && (a.href = i, o.href = l, t ? (n.style.addClass(a, "hide"), n.style.removeClass(o, "hide"), o.getElementsByClassName("fantasyUsername")[0].innerHTML = t.u.fn) : (n.style.removeClass(a, "hide"), n.style.addClass(o, "hide"))), window.FDP && (t && window.FDP.attachIdentity(t.u.id, "ism"), window.FDP.init(), window.FDP.view())
        }
    }(PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N),
    function(e) {
        let t = function(e, t) {
            if (t.className.indexOf(e) > -1) return t;
            let n = t.parentNode;
            for (; null !== n;) {
                let t = n.className ? n.className.split(" ") : [];
                if (t.length > 0 && t.indexOf(e) > -1) return n;
                n = n.parentNode
            }
            return null
        };
        e.fixtureListener = function() {}, e.fixtureListener.prototype.redirectToMatchCenter = function(e) {
            let n = e.target,
                a = e.type,
                o = e.keyCode || e.charCode;
            const i = e.target.classList.contains("js-quick-view-modal");
            if (e.stopPropagation(), "keypress" === a && 13 !== o) return;
            let l = t("multipleBroadcastersContainer", n),
                r = t("broadcasterContainer", n),
                s = r ? r.getElementsByClassName("broadcaster-liveStream") : void 0;
            if ((s && s.length || l) && -1 === n.className.indexOf("livestream") || i) return;
            let c = t("js-fixture", n);
            if (c) {
                let e = c.getAttribute("data-href");
                e && (window.location.href = e)
            }
        }
    }(PULSE.app.common),
    function(e, t, n) {
        let a = function(e, t) {
                return e - 1 >= 0 ? e - 1 : t - 1
            },
            o = function(e, t) {
                return e + 1 < t ? e + 1 : 0
            },
            i = function(e, t, a) {
                return n.style.addClass(e, a), n.style.removeClass(e, t), n.style.addClass(e.childNodes[1].childNodes[0], a + "CaptionTitle"), n.style.removeClass(e.childNodes[1].childNodes[0], t + "CaptionTitle"), n.style.addClass(e.childNodes[1].childNodes[1], a + "CaptionBody"), n.style.removeClass(e.childNodes[1].childNodes[1], t + "CaptionBody"), e
            };
        t.galleryModal = function(e) {
            let t = this;
            t.element = e, t.isWebview = n.url.getParam("webview"), t.isWebview || (t.gallery = {}, t.initModal(t), function(e) {
                let t = document.createElement("div");
                n.style.addClass(t, "galleryWrapper"), e.gallery.list = document.createElement("ul"), n.style.addClass(e.gallery.list, "galleryList"), t.appendChild(e.gallery.list), ["prev", "current", "next"].forEach((function(t) {
                    let a = document.createElement("li");
                    n.style.addClass(a, t);
                    let o = document.createElement("img");
                    n.style.addClass(o, "galleryImageContainer");
                    let i = document.createElement("figcaption");
                    n.style.addClass(i, "galleryFigCaptionContainer");
                    let l = document.createElement("span");
                    n.style.addClass(l, "galleryCaptionTitle");
                    let r = document.createElement("a");
                    n.style.addClass(r, "galleryCaptionLink");
                    let s = document.createElement("span");
                    n.style.addClass(s, "galleryCaptionBody"), i.append(l), i.append(r), i.append(s), a.append(o), a.append(i), e.gallery.list.append(a)
                })), e.gallery.items && e.gallery.items.length > 1 && (e.gallery.prevButton = document.createElement("a"), e.gallery.prevButton.tabIndex = 0, e.gallery.prevButton.setAttribute("alt", "Previous slide"), n.style.addClass(e.gallery.prevButton, "galleryNavButton"), n.style.addClass(e.gallery.prevButton, "prev"), e.gallery.prevButton.addEventListener("click", (function() {
                    e.updateGallery(e, "prev")
                })), e.gallery.prevButton.addEventListener("keydown", (function(t) {
                    13 === t.which && e.updateGallery(e, "prev")
                })), t.appendChild(e.gallery.prevButton), e.gallery.nextButton = document.createElement("a"), e.gallery.nextButton.tabIndex = 0, e.gallery.nextButton.setAttribute("alt", "Next slide"), n.style.addClass(e.gallery.nextButton, "galleryNavButton"), n.style.addClass(e.gallery.nextButton, "next"), e.gallery.nextButton.addEventListener("click", (function() {
                    e.updateGallery(e, "next")
                })), e.gallery.nextButton.addEventListener("keydown", (function(t) {
                    13 === t.which && e.updateGallery(e, "next")
                })), t.appendChild(e.gallery.nextButton)), document.addEventListener("keydown", (function(t) {
                    e.gallery.isOpen && (39 === t.which && e.gallery.items && e.gallery.items.length > 1 ? e.updateGallery(e, "next") : 37 === t.which && e.gallery.items && e.gallery.items.length > 1 ? e.updateGallery(e, "prev") : 29 === t.which && e.modal.close())
                })), e.modal.content.appendChild(t)
            }(t))
        }, t.galleryModal.prototype.initModal = function() {
            let t = this,
                a = t.element.getAttribute("data-id"),
                o = "galleryContentModal",
                i = "galleryWrapModal",
                l = "[data-ui-modal]";
            a && (o += a, i += a, l = ".modalOpener" + a);
            let r = {
                parent: t.element,
                openCallback: function(e) {
                    window.matchMedia("(min-width: 1024px)").matches && (t.openGallery(e), n.style.addClass(document.body, "fixedBody"))
                },
                closeCallback: function(e) {
                    t.closeGallery(e), n.style.removeClass(document.body, "fixedBody")
                },
                modalContentId: o,
                modalWrapId: i,
                modalWrapClass: "pl-modal",
                modalContentWrapClass: "pl-modal__content",
                selector: l
            };
            t.modal = new e.modal(r), t.modal.content = t.modal.config.modalContent.querySelector('[data-widget="gallery-modal"]') || t.modal.config.modalContent, t.modal.content && (t.modal.content.style.display = ""), t.gallery.items = [];
            for (let e = 0; e < t.element.children.length; e++) t.gallery.items[e] = {}, t.gallery.items[e].src = t.element.children[e].getAttribute("data-ui-src", e), t.element.children[e].getElementsByClassName("captionTitle").length > 0 && (t.gallery.items[e].captionTitle = t.element.children[e].getElementsByClassName("captionTitle")[0].innerHTML), t.element.children[e].getElementsByClassName("captionBody").length > 0 && (t.gallery.items[e].captionBody = t.element.children[e].getElementsByClassName("captionBody")[0].innerHTML), t.element.children[e].getElementsByClassName("captionLink").length > 0 && (t.gallery.items[e].captionLinkText = t.element.children[e].getElementsByClassName("captionLink")[0].innerHTML, t.gallery.items[e].captionLinkUrl = t.element.children[e].getElementsByClassName("captionLink")[0].getAttribute("href")), t.element.children[e].setAttribute("data-index", e)
        }, t.galleryModal.prototype.openGallery = function(e) {
            let t = this;
            t.gallery.currentIndex = parseInt(e.config.current.activator.closest(".galleryItem").getAttribute("data-index"));
            let n = a(t.gallery.currentIndex, t.gallery.items.length),
                i = o(t.gallery.currentIndex, t.gallery.items.length);
            t.assignSectionByIndex("current", t.gallery.currentIndex), t.assignSectionByIndex("prev", n), t.assignSectionByIndex("next", i), t.gallery.sliding = !1, t.gallery.isOpen = !0
        }, t.galleryModal.prototype.assignSectionByIndex = function(e, t) {
            let n = this,
                a = n.modal.content.querySelector("." + e),
                o = a.querySelector(".galleryImageContainer"),
                i = a.querySelector(".galleryFigCaptionContainer");
            o.setAttribute("src", n.gallery.items[t].src),
                function(e, t) {
                    if (e && t) {
                        let n = !0;
                        t.captionTitle && (e.childNodes[0].innerHTML = t.captionTitle, n = !1), t.captionLinkText ? (e.childNodes[1].innerHTML = t.captionLinkText, e.childNodes[1].setAttribute("href", t.captionLinkUrl)) : e.childNodes[1].innerHTML = "", t.captionBody ? (e.childNodes[2].innerHTML = t.captionBody, n = !1) : e.childNodes[2].innerHTML = "", e.style.display = n ? "none" : ""
                    }
                }(i, n.gallery.items[t])
        }, t.galleryModal.prototype.closeGallery = function(e) {
            this.gallery.isOpen = !1
        }, t.galleryModal.prototype.updateGallery = function(e, t) {
            if (!e.gallery.sliding) {
                e.gallery.sliding = !0;
                let n = e.modal.content.querySelector(".prev"),
                    l = e.modal.content.querySelector(".current"),
                    r = e.modal.content.querySelector(".next");
                if ("prev" === t) {
                    e.gallery.currentIndex = a(e.gallery.currentIndex, e.gallery.items.length);
                    let t = a(e.gallery.currentIndex, e.gallery.items.length);
                    n = i(n, "prev", "current"), l = i(l, "current", "next"), r = i(r, "next", "prev"), e.assignSectionByIndex("prev", t), e.gallery.list.insertBefore(r, l), e.gallery.prev = r, e.gallery.current = n, e.gallery.next = l
                } else {
                    e.gallery.currentIndex = o(e.gallery.currentIndex, e.gallery.items.length);
                    let t = o(e.gallery.currentIndex, e.gallery.items.length);
                    r = i(r, "next", "current"), l = i(l, "current", "prev"), n = i(n, "prev", "next"), e.assignSectionByIndex("next", t), e.gallery.list.appendChild(n), e.gallery.prev = l, e.gallery.current = r, e.gallery.next = n
                }
                setTimeout((function() {
                    e.gallery.sliding = !1
                }), 400)
            }
        }
    }(PULSE.ui, PULSE.app.common, PULSE.core),
    function(e, t, n) {
        let a = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        n.LazyLoad = function(e) {
            let t = this;
            t.element = e, t.thumbs = [], t.range = 0, t.setObservableListener()
        }, n.LazyLoad.prototype.setObservableListener = function() {
            let e = this;
            e.observer = new IntersectionObserver(e.onActivate.bind(e), a), e.observer.observe(e.element)
        }, n.LazyLoad.prototype.loadThumb = function(e, n) {
            let a = this;
            e.setAttribute("src", e.getAttribute("data-src")), e.onload = function() {
                e.removeAttribute("data-src"), t.style.removeClass(n, "placeholder"), n.setAttribute("data-initialised", "true"), a.staggerThumbLoading()
            }
        }, n.LazyLoad.prototype.onActivate = function(e) {
            let t = this;
            Array.prototype.forEach.call(e, (function(e) {
                e.isIntersecting && (t.thumbs = t.filterThumbs(e.target.querySelectorAll(".js-content-load")), t.thumbs.length > 0 && t.staggerThumbLoading())
            }))
        }, n.LazyLoad.prototype.filterThumbs = function(e) {
            let t = [];
            for (let n = 0; n < e.length; n++) "false" === e[n].getAttribute("data-initialised") && t.push(e[n]);
            return t
        }, n.LazyLoad.prototype.shuffleList = function(e) {
            let t = [];
            for (let n = 0; n <= e.length - 1; n++) t.push(n);
            if (t.length) {
                for (let e = t.length - 1; e > 0; e--) {
                    let n = Math.floor(Math.random() * (e + 1)),
                        a = t[e];
                    t[e] = t[n], t[n] = a
                }
                return t
            }
            return !1
        }, n.LazyLoad.prototype.staggerThumbLoading = function() {
            let e = this;
            if (e.thumbs.length > 0 && e.thumbs.length !== e.range) {
                let t = e.thumbs[e.range] ? e.thumbs[e.range] : "";
                if (t) {
                    let n = t.querySelector("img");
                    t && n && e.loadThumb(n, t), e.range++, e.staggerThumbLoading()
                }
            }
        };
        let o = document.querySelectorAll('[data-widget="lazy-load"]');
        for (let e = 0; e < o.length; e++) new n.LazyLoad(o[e], {})
    }(PULSE.app, PULSE.core, PULSE.app.common),
    function(e, t) {
        e.liveFixtures = function(e) {
            let t = this;
            t.config = e || {}, t.compSeason = t.config.compSeason, t.comps = t.config.comps, t.gameweekNumbers = t.config.gameweekNumbers, t.statuses = "L", t.callback = t.config.callback, t.target = t.config.target, t.container = t.config.container, t.getFixtures()
        }, e.liveFixtures.prototype.getFixtures = function() {
            let n = this,
                a = {
                    comps: n.comps,
                    compSeasons: n.compSeason,
                    statuses: n.statuses,
                    gameweekNumbers: n.gameweekNumbers
                },
                o = {
                    url: e.createApiPath("fixtures.all", a),
                    method: "GET",
                    callback: n.liveFixtures,
                    forceCallback: !0,
                    target: this
                };
            t.data.manager.add(o)
        }, e.liveFixtures.prototype.liveFixtures = function(e) {
            let n = this;
            e && e.content.length && t.style.removeClass(n.container, "u-hide"), n.callback && n.callback.call(n.target, e.content)
        }, e.checkSessionStorage = function(e, t) {
            const n = sessionStorage.getItem(e);
            return !(n && (!n || n !== t))
        }
    }(PULSE.app.common, PULSE.core),
    function(e) {
        let t = function(e, t) {
                return e.map((function(e) {
                    return e.tvShows.map((function(e) {
                        return {
                            abbreviation: e.abbreviation,
                            channel: e.channel,
                            fixtureId: t,
                            streamingURLs: e.streamingURLs
                        }
                    }))
                })).filter((function(e) {
                    return e.filter((function(e) {
                        return e.streamingURLs && e.streamingURLs.length > 0
                    })).length > 0
                })).reduce((function(e, t) {
                    return e.concat(t)
                }), [])
            },
            n = function(e) {
                let t = this;
                if (0 === t.streamingURLs.length) t.streamingURLs = e;
                else {
                    let n = e.filter((function(e) {
                        let n = e.fixtureId,
                            i = a.call(t, n);
                        return 0 === i.length || !0 !== o.call(t, e.streamingURLs, i)
                    }));
                    t.streamingURLs = t.streamingURLs.concat(n)
                }
            },
            a = function(e) {
                return this.streamingURLs.filter((function(t) {
                    return t.fixtureId === e
                })).reduce((function(e, t) {
                    return (e.streamingURLs || []).concat(t.streamingURLs)
                }), [])
            },
            o = function(e, t) {
                return e.filter((function(e) {
                    return t.indexOf(e) > -1
                })).length > 0
            };
        e.liveStreaming = function(e) {
            this.element = e, this.streamingURLs = []
        }, e.liveStreaming.prototype.saveStreamingURLs = function(e, a) {
            let o = this;
            o.countryCode !== a && (o.countryCode = a, o.streamingURLs = []);
            for (let a = 0; a < e.length; a++) {
                let i = e[a].fixture.id,
                    l = e[a].broadcasters,
                    r = t(l, i);
                n.call(o, r)
            }
        };
        e.liveStreaming.prototype.getFixturesStreamingURLs = function(t, n) {
            return n ? this.streamingURLs.filter((function(a) {
                return a.fixtureId === t && function(t) {
                    let n = moment().locale(e.language),
                        a = moment(t).locale(e.language),
                        o = moment(a).subtract(2, "hours"),
                        i = moment(a).add(4, "hours");
                    return moment(n).isBetween(o, i)
                }(n)
            })) : []
        }, e.liveStreaming.prototype.getLiveStreamData = function(e, t) {
            let n = e.tvShows[0].streamingURLs;
            0 !== this.streamingURLs.length && t || (n = []);
            let a = n && n.length > 0;
            return {
                broadcasterHasLiveStream: a,
                liveStreamURL: a ? n[0] : null
            }
        }
    }(PULSE.app),
    function(e) {
        const t = "dynamic-more__ghost",
            n = "u-hide";
        e.DynamicMore = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const n = this;
            n.container = e, n.list = e.querySelector(".js-dynamic-list"), n.list.style.position = "relative", n.items = e.querySelectorAll(".js-dynamic-child"), n.more = null, n.template = t || "common.dynamic-more", n.bucket = o.call(n, n.list);
            const i = {
                    root: n.list,
                    rootMargin: `0px -${n.more.clientWidth}px 0px 0px`,
                    threshold: 1
                },
                l = new IntersectionObserver(a.bind(n), i);
            n.items.forEach((e => l.observe(e)))
        };
        const a = function(e) {
                if (!e[0].rootBounds.right) return;
                const t = this,
                    a = e.reduce(i, {
                        exiting: [],
                        entering: []
                    });
                a.exiting.forEach(l.bind(t)), a.entering.forEach(r.bind(t));
                t.bucket.children.length ? t.more.classList.remove(n) : t.more.classList.add(n)
            },
            o = function(t) {
                const n = e.templating.render({}, this.template, !0);
                return this.more = t.appendChild(n), t.querySelector(".js-dynamic-more-bucket")
            },
            i = (e, t) => (t.boundingClientRect.right >= t.rootBounds.right ? e.exiting.push(t) : e.entering.push(t), e),
            l = function(e) {
                if ("none" === getComputedStyle(e.target, null).display) return;
                e.target.setAttribute("data-cloned", Date.now());
                const n = e.target.cloneNode(!0);
                this.bucket.appendChild(n), e.target.classList.add(t), e.target.style.left = e.boundingClientRect.left - e.rootBounds.left + "px"
            },
            r = function(e) {
                const n = this.bucket.querySelector(`[data-cloned="${e.target.getAttribute("data-cloned")}"]`);
                n && (n.remove(), e.target.classList.remove(t), e.target.removeAttribute("data-cloned"), e.target.style.left = "0")
            };
        e.widgetInitialiser.addMultipleWidgetsByName("dynamic-more", e.DynamicMore)
    }(PULSE.app),
    function(e, t, n) {
        const a = "js-mobile-nav-btn",
            o = "js-dropdown-btn",
            i = "dropdown-is-open",
            l = "is-open";
        e.MobileNavigation = function(e) {
            const n = this;
            n.container = e, n.list = e.querySelector(".js-mobile-nav"), n.button = e.querySelector(`.${a}`), t.addAriaClickListener(n.container, n.delegateEvent.bind(n))
        }, e.MobileNavigation.prototype.delegateEvent = function(e) {
            const t = this;
            if (e.target.classList.contains(a) && t.toggleMenu(), e.target.classList.contains(o)) {
                let n = t.list.querySelectorAll(`.${o} + .${l}`);
                [].slice.call(n, t.toggleDropdown), t.toggleDropdown(e.target.nextElementSibling)
            }
        }, e.MobileNavigation.prototype.toggleMenu = function() {
            n.style.toggleClass(this.list, l), n.style.toggleClass(this.button, "is-active")
        }, e.MobileNavigation.prototype.toggleDropdown = function(e) {
            const t = this;
            n.style.toggleClass(e, l), t.list.querySelectorAll(`.${o} + .${l}`).length ? n.style.addClass(t.list, i) : n.style.removeClass(t.list, i)
        }, e.widgetInitialiser.addMultipleWidgetsByName("mobile-navigation", e.MobileNavigation)
    }(PULSE.app, PULSE.app.common, PULSE.core),
    function(e, t, n) {
        const a = ".js-lazy-load",
            o = ".js-body-content",
            i = ".js-modal",
            l = "[ data-modal ]",
            r = () => c,
            s = () => d;
        n.Modal = function(e, t) {
            const c = this;
            c.root = e, c.imageSelector = a, c.containerSelector = t.containerSelector || o, c.modalSelector = t.modalSelector || i, c.modalMarker = t.modalMarker || l, c.renderModal = t.renderModal || r(), c.onDomUpdate = t.onDomUpdate || s(), c.modal = null, c.ancestor = null, c.container = document.querySelector(c.containerSelector), c.container && n.addAriaClickListener(c.root, c.delegateClick.bind(c))
        }, n.Modal.prototype.doModal = function(e) {
            const t = this,
                n = t.renderModal(e);
            n && (t.modal ? t.modal.outerHTML = n : t.container.insertAdjacentHTML("beforeend", n), t.modal = t.container.querySelector(t.modalSelector), t.onDomUpdate(t.modal))
        }, n.Modal.prototype.delegateClick = function(e) {
            const t = this;
            t.ancestor = e.target.closest(t.modalMarker), t.ancestor && (e.preventDefault(), t.doModal(t.ancestor))
        }, n.Modal.prototype.closeModalInstance = function() {
            const e = this;
            e.boundEvents && n.removeAriaClickListener(e.modal, e.boundEvents), e.modal.remove(), e.modal = null
        };
        const c = function(t) {
                const n = t.querySelector(this.imageSelector);
                if (!n) return "";
                const a = {
                    leadMediaUrls: {
                        thumbnail: n.getAttribute("data-desktop-img"),
                        thumbnailRetina: n.getAttribute("data-desktop-img-retina"),
                        thumbnailMobile: n.getAttribute("data-mobile-img"),
                        thumbnailMobileRetina: n.getAttribute("data-mobile-img-retina")
                    },
                    lazyImage: e.templates["common.lazy-image"],
                    objectFit: !1
                };
                return e.templating.render({
                    data: a,
                    PULSE: PULSE
                }, "common.modal")
            },
            d = function(t) {
                t && (new e.LazyLoad(t), u.call(this, t), m.call(this, t))
            },
            u = function(e) {
                this.boundEvents = n.addAriaClickListener(e, p.bind(this))
            },
            p = function(e) {
                const t = this,
                    n = e.target.dataset.modalAction;
                let a;
                if ("prev" === n ? a = t.ancestor.previousElementSibling : "next" === n && (a = t.ancestor.nextElementSibling), a && void 0 !== a.dataset.modal) return t.closeModalInstance(), void a.click();
                "close" === e.target.dataset.modalAction && t.closeModalInstance()
            },
            m = function(e) {
                const n = e.querySelector("[ data-modal-action='prev' ]"),
                    a = e.querySelector("[ data-modal-action='next' ]"),
                    o = this.ancestor.previousElementSibling,
                    i = this.ancestor.nextElementSibling;
                o ? t.style.removeClass(n, "disable") : t.style.addClass(n, "disable"), i ? t.style.removeClass(a, "disable") : t.style.addClass(a, "disable")
            }
    }(PULSE.app, PULSE.core, PULSE.app.common),
    function(e, t, n, a, o) {
        t.pollMatches = function(e, t, n) {
            let a = this;
            a.element = e, a.config = n, a.matchClass = a.config && a.config.matchClass ? a.config.matchClass : "matchNavMatchContainer", a.requestConfig = t, a.matchNavMatchContainer = a.element.getElementsByClassName(a.matchClass), e && a.requestConfig && a.initData()
        }, t.pollMatches.prototype.initData = function() {
            let n = {
                url: t.createApiPath("fixtures.all", this.requestConfig),
                method: "GET",
                callback: this.renderMatches,
                target: this,
                interval: e.pollingCacheRate
            };
            this.startData(n)
        }, t.pollMatches.prototype.renderMatches = function(e) {
            let t = this;
            t.hasLiveMatch = !1, e && e.content && Array.prototype.map.call(t.matchNavMatchContainer, (function(n) {
                let a = n.getAttribute("data-id"),
                    o = function(e, t) {
                        if (e && e.length > 0)
                            for (let n = 0; n < e.length; n++)
                                if (e[n].id == t) return e[n]
                    }(e.content, a);
                o && "U" != o.status ? t.renderMatch(n, o) : t.hasLiveMatch = !0
            })), t.hasLiveMatch || t.stopFixtureFeed()
        }, t.pollMatches.prototype.renderMatch = function(e, n) {
            let i = this;
            if (n.status && "U" != n.status) {
                let l = e.getElementsByClassName("matchMinuteContainer"),
                    r = e.getElementsByClassName("matchScoreContainer");
                if (l && l.length > 0 && r && r.length > 0) {
                    let s = [null != n.teams[0].score ? n.teams[0].score : "", null != n.teams[1].score ? n.teams[1].score : ""];
                    if ("C" === n.status) e.className = i.matchClass + " matchAbridged fullTime", l[0].innerHTML = o.lookup("label.match.fulltime.short");
                    else if ("A" === n.status) {
                        e.className = i.matchClass + " matchAbridged";
                        let t = o.lookup("label.match.abandoned.short");
                        l[0].innerHTML = "", s = [t, t]
                    } else {
                        i.hasLiveMatch = !0, e.className = i.matchClass + " matchAbridged live";
                        let a = "";
                        "H" === n.phase ? a = o.lookup("label.match.halftime.short") : n.clock && (a = t.getEventTime(n)), l[0].innerHTML = a
                    }
                    l[0].style.display = "";
                    let c = {
                        scores: s
                    };
                    r[0].innerHTML = Mustache.render(a.matchnavscore, c)
                }
            }
        }, t.pollMatches.prototype.stopFixtureFeed = function() {
            this.dm.stop()
        }, t.pollMatches.prototype.startData = function(e) {
            this.dm = n.data.manager.add(e)
        }
    }(PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N),
    function(e, t, n, a) {
        n.QuizList = function(e) {
            let n = this;
            n.container = e, n.quizListContainer = n.container.querySelector(".js-quiz-list-container"), n.showFeatured = "true" === n.container.getAttribute("data-show-featured"), n.items = n.container.dataset.items, n.tags = n.container.dataset.tags, n.template = n.showFeatured ? "quizListFeatured" : "quizList", n.loader = n.container.querySelector(".js-loader"), n.isFullPageQuizList = t.style.hasClass(n.container, "quiz-full-list"), n.isFullPageQuizList && (n.quizId = parseInt(n.container.getAttribute("data-quiz-id"))), n.getQuizList()
        }, n.QuizList.prototype.getQuizList = function() {
            let n = this,
                a = {
                    url: `${e.environment.api}/quiz/premierleague/quizzes?language=${e.language}&pageSize=${n.items}&tagNames=${n.tags}&orderProperty=createdDate&orderDirection=desc`,
                    callback: n.renderQuizzes,
                    target: n
                };
            t.data.manager.add(a)
        }, n.QuizList.prototype.renderQuizzes = function(t) {
            let o = this,
                i = {};
            if (i.hasFeatured = o.showFeatured, t ? .pagedResult ? .content ? .length) {
                i.list = [], t.pagedResult.content.forEach((function(e, t) {
                    o.isFullPageQuizList && (i.list.length >= 6 || e.id === o.quizId) || i.list.push({
                        featured: !(0 !== t || !o.showFeatured),
                        status: "PUBLISHED" === e.status ? e.status : "",
                        id: e.id,
                        title: e.title,
                        description: e.subtitle ? e.subtitle : "",
                        url: n.generateContentUrl("quizzes", e.id, e.title.replace(new RegExp(" ", "g"), "-")),
                        thumbnailUrl: e.leadMedia ? n.getImageUrl(e.leadMedia, "436", "254") : "",
                        featuredThumbnailUrl: e.leadMedia ? n.getImageUrl(e.leadMedia, "1076", "606") : "",
                        resourceVersion: window.RESOURCE_VERSION,
                        generalTag: a.lookup("label.quiz.tagGeneral")
                    })
                })), o.quizListContainer.innerHTML = Mustache.render(e.templates[o.template], i), o.hideLoader()
            }
        }, n.QuizList.prototype.hideLoader = function() {
            const e = this;
            e.loader && t.style.addClass(e.loader, "u-hide")
        }
    }(PULSE.app, PULSE.core, PULSE.app.common, PULSE.I18N),
    function(e, t, n, a) {
        const o = {
                All: 0,
                News: 1,
                Photos: 2,
                Videos: 3,
                Clubs: 4,
                Players: 5,
                Managers: 6
            },
            i = function(e) {
                const t = this;
                let o = e || "",
                    i = t.config.placeholder ? t.config.placeholder : "";
                t.element.innerHTML = Mustache.render(n.search, {
                    term: o,
                    placeholder: i,
                    accessibleSearchPhrase: a.lookup("label.submitsearch"),
                    resourceVersion: window.RESOURCE_VERSION
                }), t.searchTextContainer = t.element.getElementsByClassName("searchTextContainer")[0], t.searchIconContainer = t.element.getElementsByClassName("searchIconContainer")[0], t.searchKeyPressContainer = [t.searchTextContainer, t.searchIconContainer], t.emptyInputBtn = t.element.querySelector(".js-empty-input-btn")
            };
        let l = function() {
                const e = this;
                for (let t = 0; t < e.searchKeyPressContainer.length; t++) e.searchKeyPressContainer[t].addEventListener("keypress", (function(t) {
                    13 === (t.keyCode || t.which) && e.doSearch()
                }));
                e.searchTextContainer.addEventListener("keyup", (() => {
                    e.searchTextContainer.value.length > 0 ? e.element.classList.add("is-active") : e.element.classList.remove("is-active")
                })), e.searchIconContainer.addEventListener("click", (function(t) {
                    e.doSearch()
                })), e.emptyInputBtn.addEventListener("click", (() => {
                    e.searchTextContainer.value = "", e.element.classList.remove("is-active")
                }))
            },
            r = function(e) {
                let t = {};
                if (e.object_id && e.object_id.length > 0 && (t.id = parseInt(e.object_id[0])), e.type && e.type.length > 0) switch (e.object_id && e.object_id.length > 0 && (t.id = e.object_id[0]), e.type && e.type.length > 0 && (t.type = e.type[0].toLowerCase()), e.type[0]) {
                    case "PLAYER":
                    case "TOFFICIAL":
                        e.title && e.title.length > 0 && (t.name = {
                            display: e.title[0]
                        }), e.object_id && e.object_id.length > 0 && (t.personId = e.object_id[0]);
                        break;
                    case "TEAM":
                        e.title && e.title.length > 0 && (t.name = e.title[0]);
                        break;
                    case "VIDEO":
                        e.title && e.title.length > 0 && (t.title = e.title[0]), e.image_url && e.image_url.length > 0 && (t.thumbnailUrl = e.image_url[0]), e.duration && e.duration.length > 0 && (t.duration = e.duration[0]), e.description && e.description.length > 0 && (t.description = e.description[0]), e.timestamp && e.timestamp.length > 0 && (t.date = e.timestamp[0]), e.tags && e.tags.length > 0 && (t.tags = e.tags);
                        break;
                    case "PHOTO":
                        e.title && e.title.length > 0 && (t.title = e.title[0]), e.timestamp && e.timestamp.length > 0 && (t.date = e.timestamp[0]), e.image_url && e.image_url.length > 0 && (t.variants = function(e) {
                            let t = [];
                            if (e && e.length > 0)
                                for (let n = 0; n < e.length; n++) {
                                    let a = e[n].split(";");
                                    if (3 === a.length) {
                                        let e = {
                                            width: parseInt(a[0]),
                                            height: parseInt(a[1]),
                                            url: a[2]
                                        };
                                        t.push(e)
                                    }
                                }
                            return t
                        }(e.image_url)), e.tags && e.tags.length > 0 && (t.tags = e.tags);
                        break;
                    case "TEXT":
                        e.title && e.title.length > 0 && (t.title = e.title[0]), e.timestamp && e.timestamp.length > 0 && (t.date = e.timestamp[0]), e.description && e.description.length > 0 && (t.description = e.description[0]), e.body && e.body.length > 0 && (t.body = e.body[0]), e.tags && e.tags.length > 0 && (t.tags = e.tags)
                }
                return t
            };
        e.search = function(e, t) {
            let n = this;
            n.config = t || {}, n.element = e, i.call(n, ""), l.call(n)
        }, e.search.prototype.checkParam = function() {
            let e = this,
                n = t.url.getParameterByName("term"),
                a = t.url.getParameterByName("tab"),
                i = t.url.getParameterByName("playerId");
            n && (e.searchTextContainer.value = n, e.element.classList.add("is-active"), a ? (e.doSearch(n, !0), e.config.target.tabs.showTabByIndex(o[a])) : e.doSearch(n, !0, i))
        }, e.search.prototype.doSearch = function(n, a, o) {
            let i = this;
            o || e.urlHelpers.removeURLParam("playerId");
            let l = n || i.searchTextContainer.value;
            i.config.callback && i.config.target && i.config.callback.call(i.config.target, l, 0, o), i.config.updateUrl && !a && (i.url = t.url.updateUrlStringParam(window.location.href, "term", l), history.pushState({}, "", i.url))
        }, e.search.prototype.getSearchTerm = function() {
            return this.searchTextContainer.value
        }, e.search.prototype.getSearchParams = function(e) {
            let t = {};
            return e && (void 0 !== e.pageSize && void 0 !== e.page && (t.size = e.pageSize, t.start = e.pageSize * e.page), e.fullObjectResponse && (t.fullObjectResponse = !0), e.sort && (t.sort = e.sort), e.tags && (t.tags = e.tags)), t
        }, e.search.prototype.hasTerm = function() {
            let e = this.getSearchTerm();
            return void 0 !== e && "" !== e
        }, e.search.prototype.evaluateHits = function(t) {
            let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                a = [];
            return t && t.hit && t.hit.length > 0 && t.hit.forEach((function(t) {
                if (t.fields) {
                    let o = !1;
                    t.fields.tags && (o = t.fields.tags.includes("highlighted-content") || e.content.hasTag(t.fields, "highlighted-content")), n && !o ? a.push(r(t.fields)) : n || a.push(r(t.fields))
                } else if (t.response) {
                    "FOOTBALL_PERSON" === t.contentType && (t.response.type = "player");
                    let o = !1;
                    t.response.tags && (o = t.response.tags.includes("highlighted-content") || e.content.hasTag(t.response, "highlighted-content")), n && !o ? a.push(t.response) : n || a.push(t.response)
                }
            })), a
        }
    }(PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N),
    function(e, t, n) {
        const a = [{
                namespace: "container",
                elementType: HTMLElement
            }, {
                namespace: "scrollContainer",
                elementType: HTMLElement
            }, {
                namespace: "sliderElements",
                elementType: NodeList
            }, {
                namespace: "nextButton",
                elementType: HTMLElement
            }, {
                namespace: "prevButton",
                elementType: HTMLElement
            }, {
                namespace: "scrollList",
                elementType: HTMLElement
            }, {
                namespace: "paginatorContainer",
                elementType: HTMLElement
            }],
            o = "u-hide";
        t.ContentCarousel = function(e) {
            if (!t.validateConfig("ContentCarousel", e, a)) return;
            const n = this;
            n.config = e, n.container = n.config.container, n.initSlider()
        }, t.ContentCarousel.prototype.initSlider = function() {
            const e = this;
            e.element = e.config.container, e.slideContainer = e.config.scrollContainer, e.slideWidth = e.slideContainer.clientWidth, e.slideItems = e.config.sliderElements, e.itemsPerPage = parseInt(e.config.itemsPerPage), e.slideNum = Math.ceil(e.slideItems.length / e.itemsPerPage), e.slidePos = 0, e.activeSlide = 0, e.slideElementWidth = e.slideItems[0].clientWidth * e.itemsPerPage, e.nextBtn = e.config.nextButton, e.prevBtn = e.config.prevButton, e.paginatorContainer = e.config.paginatorContainer, e.fullScroll = !0, e.itemsLeft = e.slideItems.length, e.setListeners(), e.updateControls(), e.resetSlider()
        }, t.ContentCarousel.prototype.setListeners = function() {
            const e = this;
            e.nextBtn && (t.addAriaClickListener(e.nextBtn, (function() {
                e.scrollNext()
            })), e.nextBtn.addEventListener("mouseover", (function() {
                e.nudgeLeft()
            })), e.nextBtn.addEventListener("mouseout", (function() {
                e.nudgeLeft()
            }))), e.prevBtn && (e.prevBtn.addEventListener("mouseover", (function() {
                e.nudgeRight()
            })), e.prevBtn.addEventListener("mouseout", (function() {
                e.nudgeRight()
            })), t.addAriaClickListener(e.prevBtn, (function() {
                e.scrollPrev()
            }))), n.event.windowResize.add({
                method: e.resetSlider.bind(e)
            }), e.paginatorContainer && e.renderPaginator()
        }, t.ContentCarousel.prototype.renderPaginator = function() {
            const a = this;
            a.slideNum > 1 ? (a.paginatorContainer.innerHTML = e.templating.render({
                slideNum: a.slideNum
            }, "common.paginator"), a.pagerContainers = a.element.getElementsByClassName("js-pager-container"), a.pagers = a.element.getElementsByClassName("js-pager"), n.style.addClass(a.pagers[0], "is-active"), [].forEach.call(a.pagerContainers, ((e, n) => {
                t.addAriaClickListener(e, (e => {
                    a.activeSlide = n, a.slideTo(a.activeSlide), e.stopPropagation()
                }))
            })), n.style.removeClass(a.prevBtn, o), n.style.removeClass(a.nextBtn, o)) : (a.prevBtn && n.style.addClass(a.prevBtn, o), a.nextBtn && n.style.addClass(a.nextBtn, o))
        }, t.ContentCarousel.prototype.scrollNext = function() {
            const e = this;
            e.activeSlide++, e.slideTo(e.activeSlide), e.updateControls(), e.setActiveItems()
        }, t.ContentCarousel.prototype.nudgeLeft = function() {
            n.style.toggleClass(this.slideContainer, this.config.nudgeLeftClass)
        }, t.ContentCarousel.prototype.nudgeRight = function() {
            n.style.toggleClass(this.slideContainer, this.config.nudgeRightClass)
        }, t.ContentCarousel.prototype.isPaginating = function() {
            return !!this.pagerItemsContainer && this.pagerItemsContainer.offsetParent
        }, t.ContentCarousel.prototype.scrollPrev = function() {
            const e = this;
            e.activeSlide--, e.slideTo(e.activeSlide), e.updateControls(), e.setActiveItems()
        }, t.ContentCarousel.prototype.slideTo = function(e) {
            const t = this;
            t.getItemsLeft(), t.scrollSlider(), t.activeSlide = e, t.updateControls(), t.setActiveItems()
        }, t.ContentCarousel.prototype.getItemsLeft = function() {
            const e = this;
            e.itemsLeft = e.slideItems.length - e.activeSlide * e.itemsPerPage, e.itemsLeft < e.itemsPerPage ? e.fullScroll = !1 : e.fullScroll = !0
        }, t.ContentCarousel.prototype.scrollSlider = function() {
            const e = this;
            e.fullScroll ? (e.slidePos = e.slideElementWidth * e.activeSlide, e.slideContainer.style.left = "-" + e.slidePos + "px") : (e.slidePos = e.slideElementWidth * e.activeSlide - e.slideItems[0].clientWidth * (e.itemsPerPage - e.itemsLeft), e.slideContainer.style.left = "-" + e.slidePos + "px")
        }, t.ContentCarousel.prototype.updateControls = function() {
            const e = this;
            if (e.activeSlide >= e.slideNum - 1 && e.nextBtn ? n.style.addClass(e.nextBtn, "faded") : e.nextBtn && n.style.hasClass(e.nextBtn, "faded") && n.style.removeClass(e.nextBtn, "faded"), 0 === e.activeSlide && e.prevBtn ? n.style.addClass(e.prevBtn, "faded") : e.prevBtn && n.style.hasClass(e.prevBtn, "faded") && n.style.removeClass(e.prevBtn, "faded"), e.paginatorContainer && e.pagers)
                for (let t = 0; t < e.pagers.length; t++) t === e.activeSlide ? n.style.addClass(e.pagers[t], "is-active") : n.style.removeClass(e.pagers[t], "is-active")
        }, t.ContentCarousel.prototype.getActiveSlide = function() {
            return this.activeSlide
        }, t.ContentCarousel.prototype.setActiveItems = function() {
            const e = this;
            let t;
            for (var a = 0; a < e.slideItems.length; a++) n.style.removeClass(e.slideItems[a], "is-active");
            for (t = e.fullScroll ? e.activeSlide * e.itemsPerPage : e.activeSlide * e.itemsPerPage - (e.itemsPerPage - e.itemsLeft), a = 0; a < e.itemsPerPage; a++) n.style.addClass(e.slideItems[t], "is-active"), t++
        }, t.ContentCarousel.prototype.isVisibleInSlideView = (e, t) => {
            const n = e.getBoundingClientRect(),
                a = t.getBoundingClientRect(),
                o = n.top >= a.top,
                i = n.bottom <= a.bottom,
                l = n.left >= a.left,
                r = n.right <= a.right;
            return o && i && l && r
        }, t.ContentCarousel.prototype.resetSlider = function() {
            const t = this;
            if (window.innerWidth > e.measurements.tablet) {
                let e = 0;
                [].forEach.call(t.slideContainer.children, (n => {
                    t.isVisibleInSlideView(n, t.slideContainer) && e++
                })), t.itemsPerPage = e
            }
            t.slidePos = 0, t.slideElementWidth = t.slideItems[0].clientWidth * t.itemsPerPage, t.slideNum = Math.ceil(t.slideItems.length / t.itemsPerPage), t.activeSlide = 0, t.renderPaginator(), t.slideTo(t.activeSlide)
        }
    }(PULSE.app, PULSE.app.common, PULSE.core),
    function(e, t, n) {
        n.ContentList = function(e) {
            const t = this;
            t.element = e, t.itemsPerPage = t.element.getAttribute("data-items-per-page"), t.slideContainer = t.element.querySelector(".js-content-slider-content"), t.sliderElements = t.slideContainer.querySelectorAll(".js-thumb"), t.nextBtn = t.element.querySelector(".js-slide-next"), t.prevBtn = t.element.querySelector(".js-slide-prev"), t.scrollList = t.element.querySelector(".js-scroll-list"), t.paginatorContainer = t.element.querySelector(".js-paginator"), t.itemsPerPageDesktop = t.element.getAttribute("data-items-per-page-desktop") || "", t.itemsPerPageTablet = t.element.getAttribute("data-items-per-page-tablet") || "";
            const a = {
                container: t.element,
                itemsPerPage: t.itemsPerPage,
                itemsPerPageDesktop: t.itemsPerPageDesktop,
                itemsPerPageTablet: t.itemsPerPageTablet,
                scrollContainer: t.slideContainer,
                sliderElements: t.sliderElements,
                nextButton: t.nextBtn,
                prevButton: t.prevBtn,
                scrollList: t.scrollList,
                nudgeLeftClass: "nudge-left",
                nudgeRightClass: "nudge-right",
                pagerActiveClass: "",
                paginatorContainer: t.paginatorContainer
            };
            new n.ContentCarousel(a)
        }, e.widgetInitialiser.addMultipleWidgetsByName("content-carousel", n.ContentList)
    }(PULSE.app, PULSE.core, PULSE.app.common),
    function(e, t, n) {
        const a = ".js-copy-url",
            o = ".js-copy-message",
            i = ".js-social-expand",
            l = ".js-options-column-close",
            r = ".js-expand",
            s = ".js-close",
            c = "is-open",
            d = "u-hide",
            u = "is-active",
            p = "social-share__copy-message--fail";
        n.SharePage = function(e, t) {
            const n = this;
            n.element = e, n.render = n.element.getAttribute("data-render"), n.bodyContent = n.element.getAttribute("data-body"), n.defaultClosed = n.element.getAttribute("data-closed"), n.copyBtn = n.element.querySelector(a), n.copyMessage = n.element.querySelector(o), n.url = n.element.getAttribute("data-link-to") ? window.location.hostname + n.element.getAttribute("data-link-to") : t, n.defaultClosed && (n.toggleButton = n.element.querySelector(i), n.closeButton = n.element.querySelector(l), n.shareSvg = n.element.querySelector(r), n.closeSvg = n.element.querySelector(s), n.setExpandableListeners()), n.setListeners()
        }, n.SharePage.prototype.setExpandableListeners = function() {
            const e = this;
            n.addAriaClickListener(e.toggleButton, (function() {
                e.element.classList.toggle(c), e.closeSvg && e.shareSvg && (e.closeSvg.classList.toggle(d), e.shareSvg.classList.toggle(d))
            })), n.addAriaClickListener(e.closeButton, (function() {
                e.element.classList.remove(c)
            }))
        }, n.SharePage.prototype.setListeners = function() {
            const t = this;
            n.addAriaClickListener(t.element, (n => {
                const a = t.getSocialDataset(n.target);
                a && a.socialService && e.socialHelpers[a.socialService].sharePage(t.url, !1, t.updateBodyContent())
            })), document.queryCommandSupported("copy") ? n.addAriaClickListener(t.copyBtn, (() => t.copyUrl())) : t.copyButton.classList.add(d)
        }, n.SharePage.prototype.copyUrl = function() {
            const e = this,
                t = e.url || window.location.href;
            clipboard.writeText(t).then((() => e.copyUrlMessage()), (() => e.copyUrlMessage(!0)))
        }, n.SharePage.prototype.copyUrlMessage = function(e) {
            const t = this;
            t.copyBtn.classList.add(u), e && (t.copyMessage.classList.add(p), t.copyMessage.innerHTML = "URL could not be copied"), setTimeout((function() {
                t.copyBtn.classList.remove(u)
            }), 2e3)
        }, n.SharePage.prototype.getSocialDataset = function(e) {
            const t = this;
            let n = e;
            if (t.element.getAttribute("data-social-service")) return t.element.dataset;
            do {
                if (n.getAttribute("data-social-service")) return n.dataset;
                n = n.parentElement
            } while (n !== t.element);
            return !1
        }, n.SharePage.prototype.updateBodyContent = function() {
            return this.element.getAttribute("data-body")
        }
    }(PULSE.app, PULSE.core, PULSE.app.common),
    function(e) {
        const t = "twitter",
            n = "facebook",
            a = "googleplus",
            o = "facebookMessenger",
            i = () => PULSE.I18N.lookup("label.twitter.via"),
            l = () => PULSE.I18N.lookup("label.social.via"),
            r = function(e) {
                const t = this;
                t.name = e, t.socialLinks = {
                    twitter: {
                        url: "https://www.twitter.com/intent/tweet?text="
                    },
                    facebook: {
                        url: "https://www.facebook.com/sharer/sharer.php?u="
                    },
                    facebookMessenger: {
                        url: "fb-messenger://share/?link="
                    },
                    googleplus: {
                        url: "https://plus.google.com/share?url="
                    },
                    whatsapp: {
                        url: "whatsapp://send?text="
                    },
                    email: {
                        url: "mailto:?body="
                    }
                }, t.defaultWindowConfiguration = {
                    width: "500",
                    height: "500",
                    menubar: 0,
                    location: 1,
                    resizable: 0,
                    scrollbars: 0,
                    status: 0,
                    titlebar: 0,
                    toolbar: 0
                }
            };
        r.prototype.buildShareUrl = function(e, r) {
            const c = this,
                d = e || window.location.href,
                u = s(),
                p = c.socialLinks[c.name].url;
            switch (c.name) {
                case n:
                case a:
                case o:
                    return p + encodeURIComponent(d);
                case t:
                    return r ? p + encodeURIComponent(`${r} ${i()} ${d}`) : u ? p + encodeURIComponent(`${u} ${i()} ${d}`) : p + encodeURIComponent(`${d} ${i()}`);
                default:
                    return u ? p + encodeURIComponent(`${u} ${l()} ${d}`) : p + encodeURIComponent(`${r} ${l()} ${d}`)
            }
        }, r.prototype.makeWindowConfigString = function(e) {
            const t = e || this.defaultWindowConfiguration;
            return Object.keys(t).reduce(((e, n) => e + `${n}=${t[n]},`), [])
        }, r.prototype.sharePage = function(e, t, n) {
            const a = this.buildShareUrl(e, n),
                o = this.makeWindowConfigString(t);
            window.open(a, "_blank", o)
        };
        const s = () => document.querySelector(".js-page-title");
        e.socialHelpers = {
            twitter: new r(t),
            facebook: new r(n),
            google: new r(a),
            email: new r("email"),
            whatsapp: new r("whatsapp"),
            facebookMessenger: new r(o)
        }
    }(PULSE.app),
    function(e) {
        e.tabAwareWidgets = [], e.tabAwareWidget = function(t) {
            let n = this;
            n.widgetInit = t, n.tabbed = !1, n.initialised = !1, e.tabAwareWidgets.push(n);
            let a = "true" === n.widgetInit.widgetElement.getAttribute("data-tab-aware-default"),
                o = !(n.widgetInit.widgetElement.parentElement && n.widgetInit.widgetElement.parentElement.classList.contains("tabbedContent"));
            (a || o) && n.activate()
        }, e.tabAwareWidget.prototype.match = function(e) {
            return this.widgetInit.widgetElement === e
        }, e.tabAwareWidget.prototype.activate = function() {
            let e = this;
            e.initialised || (e.initialised = !0, e.createWidget())
        }, e.tabAwareWidget.prototype.createWidget = function() {
            let e = this;
            new e.widgetInit.widgetConstructor(e.widgetInit.widgetElement, e.widgetInit.widgetConfig)
        }
    }(PULSE.app);
var Mustache = function(e) {
    let t = e.render,
        n = window.RESOURCE_VERSION,
        a = window.BASE_RESOURCE_URL;
    return e.render = function(e, o, i) {
        return o.externalLinkText = "External Link", o.resourceVersion = n, o.baseResourceURL = a, t(e, o, i)
    }, e
}(Mustache);
! function(e, t, n) {
    const a = e => decodeURIComponent(Array.prototype.map.call(atob(e), (function(e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
    })).join(""));
    t.getUserAccount = function(t) {
        let o = n.localStorage.getStorage(e.cookiePrefix + "profile", !0);
        if (o) {
            const n = a(o.replace(/"/g, ""));
            fetch(e.environment.userAccount, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(n).s}`
                }
            }).then((e => e.json())).then((e => {
                let a = e;
                a ? .first_name ? (a.signedIn = !0, a.userToken = JSON.parse(n).s) : a = {
                    signedIn: !1
                }, window.userProfile = a, t(a)
            })).catch((() => console.error("Unfotunately, there was an error.")))
        } else {
            t({
                signedIn: !1
            })
        }
    }, t.updateUserAccount = function(t) {
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = n.localStorage.getStorage(e.cookiePrefix + "profile", !0);
        if (i) {
            const n = a(i.replace(/"/g, ""));
            fetch(e.environment.userAccount, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${JSON.parse(n).s}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            }).then((e => e.json())).then((e => {
                o && o(e)
            })).catch((() => console.error("Unfotunately, there was an error.")))
        }
    }
}(PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N),
function(e, t) {
    const n = "u-hide";
    e.UserData = new function() {
        let a = this;
        const o = function() {
                let n = t.localStorage.getStorage(e.cookiePrefix + "profile", !0);
                if (n) {
                    '"' === n[0] && '"' === n[n.length - 1] && (n = n.substr(1, n.length - 2));
                    let e = t.localStorage.getStorage("userData");
                    e && (a = JSON.parse(e)), a.plProfile = JSON.parse(window.atob(n)), a.loggedin = !0
                } else a.loggedin = !1, a.plProfile = null, a.club = null, r()
            },
            i = function() {
                if (a.loggedin && (!a.club || !a.club.opta || a.club.opta !== a.plProfile.u.fc) && (a.club = {
                        opta: a.plProfile.u.fc
                    }, a.club.opta)) {
                    let n = {
                        url: e.environment.api + "/football/teams/t" + a.club.opta + "?sys=opta",
                        method: "GET",
                        callback: l,
                        forceCallback: !0,
                        target: a
                    };
                    t.data.manager.add(n)
                }
                if (a.loggedin) {
                    document.querySelectorAll(".js-your-club").forEach((function(e) {
                        e && t.style.hasClass(e, n) && t.style.removeClass(e, n)
                    }))
                }
            },
            l = function(e) {
                e && e.club && (a.club.id = e.club.id, a.club.abbr = e.club.abbr, a.club.name = e.club.name, a.club.shortName = e.club.shortName, a.club.grounds = e.grounds, r())
            },
            r = function() {
                t.localStorage.setStorage("userData", JSON.stringify(a))
            };
        return o(), i(), a
    }
}(PULSE.app, PULSE.core), PULSE.app.common.scrollElementAnimated = function(e, t, n, a, o) {
        let i, l = document.querySelector(e),
            r = t.offsetTop;
        isNaN(n) || (r += n), isNaN(a) && (a = 100);
        let s = r < l.scrollTop;
        i = s ? requestAnimationFrame((function e() {
            let t = l.scrollTop,
                n = t - a;
            l.scrollTop = n <= r ? r : n, t <= r || 0 === l.scrollTop ? cancelAnimationFrame(i) : requestAnimationFrame(e)
        })) : requestAnimationFrame((function e() {
            let t = l.scrollTop,
                n = t + a;
            l.scrollTop = n >= r ? r : n;
            let s = l.scrollTop + l.offsetHeight === l.scrollHeight;
            t >= r || s ? (cancelAnimationFrame(i), "function" == typeof o && o()) : requestAnimationFrame(e)
        }))
    },
    function(e, t, n, a) {
        let o = "";
        n.videoList = function(e) {
            this.element = e, this.initModal()
        }, n.videoList.prototype.initModal = function() {
            let n = this;
            o = window.location.href;
            let i = {
                parent: n.element,
                selector: "[data-ui-modal]",
                openClass: "open",
                modifierClass: n.element.getAttribute("data-video-modal-class"),
                modalContentId: "videoPlayerContentModal",
                modalWrapId: "videoPlayerWrapModal",
                closeText: "close",
                openCallback: function(e) {
                    n.updatePlayer(e), document.body.classList.add("fixedBody")
                },
                closeCallback: function(e) {
                    n.resetPlayer(e), document.body.classList.remove("fixedBody")
                },
                modalWrapClass: "video-player-modal",
                modalContentWrapClass: "video-player-template"
            };
            n.modal = new t.modal(i), e.modalsController.addModal(n.modal), i.modifierClass && n.modal.config.modal && a.style.addClass(n.modal.config.modal, i.modifierClass)
        }, n.videoList.prototype.updatePlayer = function(i) {
            let l = this,
                r = i.config.modal.querySelector("[data-player]").getAttribute("id");
            l.player = e.videoPlayerManager.getPlayerWithName(r);
            let s = i.config.current.uiArgs.mediaId,
                c = i.config.current.uiArgs.contentId;
            l.newUrl = n.generateContentUrl("video", c), history.pushState({}, "", l.newUrl), window.onpopstate = function() {
                window.location.href = o
            };
            let d = function() {
                if (l.videoLoader && l.videoLoader.element && l.videoLoader.removeLoader(), s) l.playVideo({
                    videoID: s,
                    trackerID: c
                });
                else {
                    let e = {
                        url: n.createContentPath("video", {}, void 0, c),
                        method: "GET",
                        callback: l.playVideo,
                        target: l
                    };
                    a.data.manager.add(e)
                }
                const e = moment.utc(i.config.current.uiArgs.mediaDate).format("DD MMMM YYYY");
                l.player.setMeta({
                    title: i.config.current.uiArgs.mediaTitle,
                    description: i.config.current.uiArgs.mediaDescription,
                    date: e,
                    duration: i.config.current.uiArgs.mediaDuration,
                    contentId: i.config.current.uiArgs.contentId,
                    hotlinkUrl: i.config.current.uiArgs.mediaHotlinkUrl,
                    hotlinkText: i.config.current.uiArgs.mediaHotlinkText
                })
            };
            if (l.player) d();
            else {
                document.createElement("div");
                l.videoLoader = new t.loader(i.config.modal, {
                    init: !0,
                    loaderTemplate: e.templates.loader,
                    append: !0
                }), window.addEventListener("videoReady" + r, (function() {
                    l.player = e.videoPlayerManager.getPlayerWithName(r), d()
                }), !1)
            }
        }, n.videoList.prototype.playVideo = function(e) {
            let t = this,
                n = t.modal.config.modalContentWrapClass || "",
                a = document.getElementsByClassName(n);
            t.player.playVideoWithID(e.videoID, !1, e.id, !0, !0), a.length > 0 && a[0].addEventListener("click", (function(e) {
                e.target.className === n && t.modal.close()
            }))
        }, n.videoList.prototype.stopPlayer = function(t) {
            let n = t.config.modal.querySelector("[data-player]").getAttribute("id"),
                a = e.videoPlayerManager.getPlayerWithName(n);
            a && a.stopVideo()
        }, n.videoList.prototype.resetPlayer = function(t) {
            let n = t.config.modal.querySelector("[data-player]").getAttribute("id"),
                a = e.videoPlayerManager.getPlayerWithName(n);
            a && (a.resetPlayer(), history.pushState({}, "", o))
        }
    }(PULSE.app, PULSE.ui, PULSE.app.common, PULSE.core);