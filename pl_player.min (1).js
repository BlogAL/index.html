"use strict";
PULSE.app.templates.featuredplayerclub = '<a class="featured-player__club" href="{{ url }}"> <span class="featured-player__badge badge badge-image-container" data-widget="club-badge-image" data-size="100"> <img class="badge-image badge-image--100 js-badge-image" src="{{ clubBadge }}" srcset="{{ clubBadge }}, {{ clubBadgeRetina }} 2x"> </span> </a> ', PULSE.app.templates.featuredplayerstats = '<li class="stats-card__row"> <div class="stats-card__pos" title="{{name}}">{{name}}</div> <div class="stats-card__stat">{{ value }}</div> </li> ', PULSE.app.templates.overviewstatstable = '{{#stats}} <div class="player-overview__col"> <div class="player-overview__label">{{ label }}</div> <div class="player-overview__info">{{ stat }}</div> </div> {{/stats}}',
    function(e, t, a, l) {
        e.FeaturedPlayer = function(t) {
            let a = this;
            a.element = t, a.template = a.element.getAttribute("data-template"), a.clubContainer = a.element.querySelector(".js-player-club"), a.featuredPlayerImage = a.element.querySelector(".js-featured-player-image"), a.featuredPlayerStatsContainer = a.element.parentElement, a.featuredPlayerStats = a.element.querySelector(".js-featured-player-stats"), a.statsTemplate = a.featuredPlayerStats ? .dataset.widget, a.isListPlayer = "true" === a.featuredPlayerImage.dataset.listImage, a.compSeason = a.isListPlayer ? a.featuredPlayerStatsContainer ? .dataset.compSeason : null, a.requestConfig = {
                id: a.element.getAttribute("data-player-id"),
                comps: e.competition.FIRST,
                altIds: !0
            }, a.listRequestConfig = {
                id: a.element.getAttribute("data-player-id")
            }, a.compSeason && (a.listRequestConfig.compSeasons = a.compSeason), a.requestConfig.id && a.initData()
        }, e.FeaturedPlayer.prototype.initData = function() {
            let t = this,
                l = {
                    url: e.common.createApiPath("players.history", t.requestConfig),
                    method: "GET",
                    callback: t.renderFeaturedPlayerMetaInfo,
                    target: this
                };
            if (a.data.manager.add(l), t.isListPlayer) {
                let l = {
                    url: e.common.createApiPath("stats.player", t.listRequestConfig),
                    method: "GET",
                    callback: t.renderListPlayerMetaInfo,
                    target: this
                };
                a.data.manager.add(l)
            }
        }, e.FeaturedPlayer.prototype.renderFeaturedPlayerMetaInfo = function(a) {
            let l = this,
                s = {};
            if (a) {
                if (!a.currentTeam) return; {
                    const e = a.currentTeam.altIds ? a.currentTeam.altIds.opta : "";
                    s = {
                        url: t.generateContentUrl("club", a.currentTeam.id, a.currentTeam.club.name.replace(new RegExp(" ", "g"), "-")),
                        clubName: a.currentTeam.club.name,
                        altId: e,
                        clubBadge: t.getClubBadge(e, "100"),
                        clubBadgeRetina: t.getClubBadge(e, "100", !0)
                    }, l.featuredPlayerImage.classList.add(e)
                }
                if (a.teamHistory && a.teamHistory.details && a.teamHistory.details.length > 0 && l.compSeason)
                    for (let e = 0; e < a.teamHistory.details.length; e++) {
                        let r = a.teamHistory.details[e];
                        if (parseInt(r.season.competitions[0].compSeason.id) === parseInt(l.compSeason)) {
                            s = {
                                url: t.generateContentUrl("club", r.team.club.id, r.team.name.replace(new RegExp(" ", "g"), "-")),
                                clubName: r.team.name,
                                altId: r.team.altIds ? r.team.altIds.opta : "",
                                clubBadge: t.getClubBadge(r.team.altIds.opta, "100"),
                                clubBadgeRetina: t.getClubBadge(r.team.altIds.opta, "100", !0)
                            };
                            break
                        }
                    }
                let r = Mustache.render(e.templates[l.template], s);
                l.clubContainer.innerHTML = r, e.clubBadge(l.clubContainer, !0)
            }
        }, e.FeaturedPlayer.prototype.renderListPlayerMetaInfo = function(t) {
            let a = this;
            const s = e => {
                    let a;
                    return t ? .stats ? .forEach((t => {
                        t.name === e && (a = t.value)
                    })), a || "0"
                },
                r = t ? .entity ? .info ? .position ? .toUpperCase();
            let n = [];
            if (n.push({
                    name: l.lookup("label.stat.appearances"),
                    value: s("appearances")
                }), "GOALKEEPER" === r || "G" === r ? (n.push({
                    name: l.lookup("label.stat.clean_sheet"),
                    value: s("clean_sheet")
                }), n.push({
                    name: l.lookup("label.stat.saves"),
                    value: s("saves")
                }), n.push({
                    name: l.lookup("label.stat.goals_conceded"),
                    value: s("goals_conceded")
                })) : (n.push({
                    name: l.lookup("label.stat.goals"),
                    value: s("goals")
                }), n.push({
                    name: l.lookup("label.stat.goal_assist"),
                    value: s("goal_assist")
                })), "DEFENDER" !== r && "D" !== r || n.push({
                    name: l.lookup("label.stat.clean_sheet"),
                    value: s("clean_sheet")
                }), "MIDFIELDER" !== r && "M" !== r || n.push({
                    name: l.lookup("label.stat.big_chance_created"),
                    value: s("big_chance_created")
                }), "FORWARD" !== r && "F" !== r || n.push({
                    name: l.lookup("label.stat.total_scoring_att"),
                    value: s("total_scoring_att")
                }), t && t ? .entity) {
                let t = "";
                n.forEach((l => {
                    t += Mustache.render(e.templates[a.statsTemplate], l)
                })), a.featuredPlayerStats.innerHTML = t
            } else a.featuredPlayerStats.innerHTML = ""
        };
        let s = document.querySelectorAll('[data-widget="featured-player"]');
        for (let t = 0; t < s.length; t++) new e.FeaturedPlayer(s[t])
    }(PULSE.app, PULSE.app.common, PULSE.core, PULSE.I18N),
    function(e, t, a) {
        e.playerClubHistory = function(e, t) {
            this.element = e;
            let l = document.getElementsByClassName("playerHistoryExpand");
            this.historyCache = {}, Array.prototype.map.call(l, (function(e) {
                ["keypress", "click"].forEach((function(t) {
                    e.addEventListener(t, (function(e) {
                        if (13 === e.which || "click" === e.type) {
                            e.preventDefault();
                            let t = this.getAttribute("data-reveal");
                            if (t) {
                                let e = document.getElementsByClassName(t);
                                Array.prototype.map.call(e, (function(e) {
                                    a.style.toggleClass(e, "open")
                                })), a.style.toggleClass(this.parentNode, "expanded")
                            }
                        }
                    }))
                }))
            }))
        };
        let l = document.querySelectorAll('[data-widget="player-club-history"]');
        for (let t = 0; t < l.length; t++) new e.playerClubHistory(l[t], {})
    }(PULSE.app, PULSE.app.common, PULSE.core),
    function(e, t, a, l) {
        let s = function(e, t) {
            if (t && t.length)
                for (let a = 0; a < t.length; a++)
                    if (e === t[a].name) return t[a].value;
            return 0
        };
        e.playerOverviewStats = function(e, t) {
            let a = this;
            a.element = e, a.config = t, a.statsTemplate = "overviewstatstable", a.positions = {
                D: ["appearances", "goals", "goal_assist", "clean_sheet"],
                G: ["appearances", "clean_sheet", "goals", "goal_assist"],
                M: ["appearances", "goals", "goal_assist"],
                F: ["appearances", "goals", "goal_assist"]
            }, a.getStats()
        }, e.playerOverviewStats.prototype.getStatModel = function(e, t) {
            let a = [];
            var r = 0;
            for (r = 0; r < t.length; r++) {
                let n = s(t[r], e);
                a.push({
                    label: l.lookup("label.stat." + t[r]),
                    stat: n
                })
            }
            return a
        }, e.playerOverviewStats.prototype.getStats = function() {
            let t = this;
            t.requestConfig = {
                id: t.config.playerId,
                comps: e.competition.FIRST
            };
            let l = {
                url: e.common.createApiPath(t.config.path, t.requestConfig),
                method: "GET",
                callback: t.renderStats,
                constant: !0,
                target: this
            };
            a.data.manager.add(l)
        }, e.playerOverviewStats.prototype.renderStats = function(t) {
            let a = this;
            let l = a.getStatModel(t.stats, a.positions[t.entity.info.position]);
            var s = Mustache.render(e.templates[a.statsTemplate], {
                stats: l
            });
            a.element.innerHTML = s
        };
        let r = document.querySelectorAll('[data-widget="player-overview-stats"]');
        r = Array.prototype.map.call(r, (function(t) {
            let a = {
                playerId: t.getAttribute("data-player"),
                path: "stats.player"
            };
            return new e.playerOverviewStats(t, a)
        }))
    }(PULSE.app, PULSE.app.common, PULSE.core, PULSE.I18N);