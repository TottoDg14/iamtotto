"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./context/LanguageContext.js
var LanguageContext = __webpack_require__(922);
;// CONCATENATED MODULE: ./comps/Navbar.js





const MenuIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "4",
                x2: "20",
                y1: "12",
                y2: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "4",
                x2: "20",
                y1: "6",
                y2: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "4",
                x2: "20",
                y1: "18",
                y2: "18"
            })
        ]
    })
;
const CloseIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18 6 6 18"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m6 6 12 12"
            })
        ]
    })
;
const Navbar = ()=>{
    const { lang , toggleLang , t  } = (0,LanguageContext/* useLanguage */.Z)();
    const { /*#__PURE__*/ 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: scrolled , 1: setScrolled  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll)
        ;
    }, []);
    const navItems = [
        {
            href: '#hero',
            label: t.nav.home
        },
        {
            href: '#about',
            label: t.nav.about
        },
        {
            href: '#services',
            label: t.nav.services
        },
        {
            href: '#projects',
            label: t.nav.projects
        },
        {
            href: '#contact',
            label: t.nav.contact
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        "data-testid": "navbar",
        className: "jsx-f52ae05e4ece0103" + " " + `navbar ${scrolled ? 'scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-f52ae05e4ece0103" + " " + "nav-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            "data-testid": "nav-logo",
                            className: "jsx-f52ae05e4ece0103" + " " + "logo",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-f52ae05e4ece0103" + " " + "logo-bracket",
                                    children: "<"
                                }),
                                "DM",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-f52ae05e4ece0103" + " " + "logo-bracket",
                                    children: "/>"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-f52ae05e4ece0103" + " " + `nav-links ${isOpen ? 'open' : ''}`,
                        children: navItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: item.href,
                                "data-testid": `nav-link-${item.href.slice(1)}`,
                                onClick: ()=>setIsOpen(false)
                                ,
                                className: "jsx-f52ae05e4ece0103" + " " + "nav-link",
                                children: item.label
                            }, item.href)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-f52ae05e4ece0103" + " " + "nav-actions",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: toggleLang,
                                "data-testid": "lang-toggle-button",
                                "aria-label": "Toggle language",
                                className: "jsx-f52ae05e4ece0103" + " " + "lang-toggle",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-f52ae05e4ece0103" + " " + ((lang === 'es' ? 'active' : '') || ""),
                                        children: "ES"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-f52ae05e4ece0103" + " " + "separator",
                                        children: "/"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-f52ae05e4ece0103" + " " + ((lang === 'en' ? 'active' : '') || ""),
                                        children: "EN"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setIsOpen(!isOpen)
                                ,
                                "data-testid": "mobile-menu-toggle",
                                "aria-label": "Toggle menu",
                                className: "jsx-f52ae05e4ece0103" + " " + "menu-toggle",
                                children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(MenuIcon, {})
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "f52ae05e4ece0103",
                children: ".navbar.jsx-f52ae05e4ece0103{position:fixed;\ntop:0;\nleft:0;\nright:0;\nz-index:1000;\npadding:1rem 0;\n-webkit-transition:all 0.3s ease;\ntransition:all 0.3s ease}\n.navbar.scrolled.jsx-f52ae05e4ece0103{background:rgba(9, 9, 11, 0.85);\nbackdrop-filter:blur(20px);\nborder-bottom:1px solid rgba(255, 255, 255, 0.1)}\n.nav-container.jsx-f52ae05e4ece0103{max-width:1200px;\nmargin:0 auto;\npadding:0 1.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\n.logo.jsx-f52ae05e4ece0103{font-family:var(--font-mono);\nfont-size:1.5rem;\nfont-weight:700;\ncolor:var(--text-primary);\n-webkit-transition:color 0.3s ease;\ntransition:color 0.3s ease}\n.logo.jsx-f52ae05e4ece0103:hover{color:var(--accent-primary)}\n.logo-bracket.jsx-f52ae05e4ece0103{color:var(--accent-primary)}\n.nav-links.jsx-f52ae05e4ece0103{display:none;\ngap:2rem}\n.nav-link.jsx-f52ae05e4ece0103{font-family:var(--font-mono);\nfont-size:0.875rem;\ntext-transform:uppercase;\nletter-spacing:0.1em;\ncolor:var(--text-secondary);\n-webkit-transition:color 0.3s ease;\ntransition:color 0.3s ease;\nposition:relative}\n.nav-link.jsx-f52ae05e4ece0103::after{content:'';\nposition:absolute;\nbottom:-4px;\nleft:0;\nwidth:0;\nheight:2px;\nbackground:var(--accent-primary);\n-webkit-transition:width 0.3s ease;\ntransition:width 0.3s ease}\n.nav-link.jsx-f52ae05e4ece0103:hover{color:var(--accent-primary)}\n.nav-link.jsx-f52ae05e4ece0103:hover::after{width:100%}\n.nav-actions.jsx-f52ae05e4ece0103{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ngap:1rem}\n.lang-toggle.jsx-f52ae05e4ece0103{font-family:var(--font-mono);\nfont-size:0.75rem;\nletter-spacing:0.1em;\ncolor:var(--text-secondary);\npadding:0.5rem 0.75rem;\nborder:1px solid var(--border);\nborder-radius:4px;\n-webkit-transition:all 0.3s ease;\ntransition:all 0.3s ease}\n.lang-toggle.jsx-f52ae05e4ece0103:hover{border-color:var(--accent-primary)}\n.lang-toggle.jsx-f52ae05e4ece0103 .active.jsx-f52ae05e4ece0103{color:var(--accent-primary)}\n.lang-toggle.jsx-f52ae05e4ece0103 .separator.jsx-f52ae05e4ece0103{margin:0 0.25rem}\n.menu-toggle.jsx-f52ae05e4ece0103{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\ncolor:var(--text-primary)}\n@media (min-width:768px) {.nav-links.jsx-f52ae05e4ece0103{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}\n.menu-toggle.jsx-f52ae05e4ece0103{display:none}\n.nav-links.open.jsx-f52ae05e4ece0103{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}}\n@media (max-width:767px) {.nav-links.jsx-f52ae05e4ece0103{position:fixed;\ntop:70px;\nleft:0;\nright:0;\nbackground:rgba(9, 9, 11, 0.95);\nbackdrop-filter:blur(20px);\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\npadding:2rem;\ngap:1.5rem;\nborder-bottom:1px solid var(--border);\n-webkit-transform:translateY(-100%);\n-moz-transform:translateY(-100%);\n-ms-transform:translateY(-100%);\ntransform:translateY(-100%);\nopacity:0;\nvisibility:hidden;\n-webkit-transition:all 0.3s ease;\ntransition:all 0.3s ease}\n.nav-links.open.jsx-f52ae05e4ece0103{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-transform:translateY(0);\n-moz-transform:translateY(0);\n-ms-transform:translateY(0);\ntransform:translateY(0);\nopacity:1;\nvisibility:visible}\n.nav-link.jsx-f52ae05e4ece0103{font-size:1rem}}"
            })
        ]
    }));
};
/* harmony default export */ const comps_Navbar = (Navbar);

;// CONCATENATED MODULE: ./comps/Footer.js




const HeartIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "heart-icon",
        /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        })
    })
;
const Footer = ()=>{
    const { t , lang  } = (0,LanguageContext/* useLanguage */.Z)();
    const currentYear = new Date().getFullYear();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        "data-testid": "footer",
        className: "jsx-83156f6792dbe164" + " " + "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-83156f6792dbe164" + " " + "footer-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-83156f6792dbe164" + " " + "footer-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-83156f6792dbe164" + " " + "footer-brand",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-83156f6792dbe164" + " " + "logo-bracket",
                                    children: "<"
                                }),
                                "DM",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-83156f6792dbe164" + " " + "logo-bracket",
                                    children: "/>"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "jsx-83156f6792dbe164" + " " + "footer-text",
                            children: [
                                t.footer.made,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {}),
                                " ",
                                t.footer.by
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-83156f6792dbe164" + " " + "footer-links",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/privacy",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    "data-testid": "privacy-link",
                                    className: "jsx-83156f6792dbe164" + " " + "footer-link",
                                    children: lang === 'es' ? 'Pol\xedtica de Privacidad' : 'Privacy Policy'
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "jsx-83156f6792dbe164" + " " + "footer-rights",
                            children: [
                                "\xa9 ",
                                currentYear,
                                " David Marquez. ",
                                t.footer.rights,
                                "."
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "83156f6792dbe164",
                children: ".footer{padding:3rem 0;\nbackground:#09090B;\nborder-top:1px solid rgba(255, 255, 255, 0.1)}\n.footer-container{max-width:1200px;\nmargin:0 auto;\npadding:0 1.5rem}\n.footer-content{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ngap:1rem;\ntext-align:center}\n.footer-brand{font-family:'JetBrains Mono', monospace;\nfont-size:1.5rem;\nfont-weight:700;\ncolor:#FAFAFA}\n.logo-bracket{color:#00E5FF}\n.footer-text{font-family:'JetBrains Mono', monospace;\nfont-size:0.875rem;\ncolor:#A1A1AA;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ngap:0.5rem;\nmargin:0}\n.footer-text .heart-icon{color:#FF3366;\n-webkit-animation:pulse 1.5s ease infinite;\nanimation:pulse 1.5s ease infinite}\n@keyframes pulse {0%, 100% {transform:scale(1)}50% {transform:scale(1.2)}}\n.footer-links{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\ngap:1.5rem}\n.footer-link{font-family:'JetBrains Mono', monospace;\nfont-size:0.75rem;\ncolor:#A1A1AA;\ntext-transform:uppercase;\nletter-spacing:0.1em;\n-webkit-transition:color 0.3s ease;\ntransition:color 0.3s ease}\n.footer-link:hover{color:#00E5FF}\n.footer-rights{font-size:0.75rem;\ncolor:#A1A1AA;\nopacity:0.6;\nmargin:0}"
            })
        ]
    }));
};
/* harmony default export */ const comps_Footer = (Footer);

;// CONCATENATED MODULE: ./comps/Layout.js




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-52c0194da15db7c9" + " " + "layout",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(comps_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "jsx-52c0194da15db7c9",
                /*#__PURE__*/ children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(comps_Footer, {}),
            jsx_runtime_.jsx((style_default()), {
                id: "52c0194da15db7c9",
                children: ".layout.jsx-52c0194da15db7c9{min-height:100vh;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\nmain.jsx-52c0194da15db7c9{-webkit-flex:1;\n-ms-flex:1;\nflex:1}"
            })
        ]
    }));
};
/* harmony default export */ const comps_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(LanguageContext/* LanguageProvider */.i, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(comps_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 211:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,922], () => (__webpack_exec__(565)));
module.exports = __webpack_exports__;

})();