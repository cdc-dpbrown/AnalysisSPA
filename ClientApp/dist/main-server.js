(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(144);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(145);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    increment: function () { return ({ type: 'INCREMENT_COUNT' }); },
    decrement: function () { return ({ type: 'DECREMENT_COUNT' }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
exports.reducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { count: 0 };
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(146);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = {
    toggleFullScreen: function (id) { return function (dispatch, getState) {
        dispatch({ type: 'TOGGLE_FULL_SCREEN', chart_id: id });
    }; }
};
var unloadedState = {
    chart_id: null,
    chart_type: null,
    chart_inEdit: null,
    chart_loading: false,
    chart_isFullScreen: false,
    chart_isFullWidth: false,
};
exports.reducer = function (state, action) {
    switch (action.type) {
        case 'REQUEST_CHART':
            return {
                chart_id: state.chart_id,
                chart_type: state.chart_type,
                chart_inEdit: state.chart_inEdit,
                chart_loading: true
            };
        case 'RECEIVE_CHART':
            return {
                chart_id: action.chart_id,
                chart_json: action.chart_json,
                chart_type: null,
                chart_inEdit: null,
                chart_loading: false
            };
        case 'TOGGLE_FULL_SCREEN':
            console.log("TOGGLE_FULL_SCREEN");
            console.log("state");
            console.log(state);
            console.log("action");
            console.log(action);
            return {
                chart_id: action.chart_id,
                chart_isFullScreen: state.chart_isFullScreen === true ? false : true
            };
        case 'GET_CHART':
            return {
                chart_id: action.chart_id,
                chart_type: action.chart_type,
                chart_inEdit: action.chart_inEdit,
                chart_loading: false
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domain_task_1 = __webpack_require__(9);
exports.actionCreators = {
    requestDashboard: function (id) { return function (dispatch, getState) {
        if (id !== getState().dashboard.id) {
            var fetchTask = domain_task_1.fetch("/api/SettingsData/Dashboard?id=" + id)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_DASHBOARD', id: id, json: data, charts: null });
            });
            domain_task_1.addTask(fetchTask);
            dispatch({ type: 'REQUEST_DASHBOARD', id: id });
        }
    }; }
};
var unloadedState = {
    id: null,
    isLoading: false,
    json: null,
    chartIds: null,
    charts: null
};
exports.reducer = function (state, action) {
    switch (action.type) {
        case 'REQUEST_DASHBOARD':
            console.log("REQUEST_DASHBOARD");
            console.log("state");
            console.log(state);
            console.log("action");
            console.log(action);
            return {
                id: action.id,
                json: state.json,
                isLoading: true,
                chartIds: state.chartIds,
                charts: state.charts
            };
        case 'RECEIVE_DASHBOARD':
            console.log("RECEIVE_DASHBOARD");
            console.log("state");
            console.log(state);
            console.log("action");
            console.log(action);
            var ids_1 = [];
            var chartStates_1 = [];
            action.json.canvas.charts.forEach(function (c) {
                ids_1.push(c.chart_id);
            });
            action.json.canvas.charts.forEach(function (c) {
                chartStates_1.push({
                    chart_id: c.chart_id,
                    chart_type: c.chart_type,
                    chart_inEdit: c.chart_inEdit,
                    chart_loading: c.chart_loading === true ? true : false,
                    chart_isFullScreen: c.chart_isFullScreen === true ? true : false,
                    chart_isFullWidth: c.chart_isFullWidth === true ? true : false,
                });
            });
            console.log('print chartStates');
            console.log(chartStates_1);
            return {
                id: action.json.canvas.id,
                json: action.json,
                isLoading: false,
                chartIds: ids_1,
                charts: chartStates_1
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domain_task_1 = __webpack_require__(9);
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    requestWeatherForecasts: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
            var fetchTask = domain_task_1.fetch("/api/SampleData/WeatherForecasts?startDateIndex=" + startDateIndex)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
            });
            domain_task_1.addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { startDateIndex: null, forecasts: [], isLoading: false };
exports.reducer = function (state, action) {
    switch (action.type) {
        case 'REQUEST_WEATHER_FORECASTS':
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case 'RECEIVE_WEATHER_FORECASTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: action.forecasts,
                    isLoading: false
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(139);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(26);
var redux_thunk_1 = __webpack_require__(25);
var react_router_redux_1 = __webpack_require__(5);
var store_1 = __webpack_require__(24);
function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default, react_router_redux_1.routerMiddleware(history)), devToolsExtension ? devToolsExtension() : function (f) { return f; })(redux_1.createStore);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(store_1.reducers);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
exports.default = configureStore;
function buildRootReducer(allReducers) {
    return redux_1.combineReducers(Object.assign({}, allReducers, { routing: react_router_redux_1.routerReducer }));
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(3);
var Layout_1 = __webpack_require__(21);
var Home_1 = __webpack_require__(20);
var SelectDataSource_1 = __webpack_require__(23);
var FetchData_1 = __webpack_require__(19);
var Counter_1 = __webpack_require__(17);
var Dashboard_1 = __webpack_require__(18);
exports.routes = React.createElement(Layout_1.Layout, null,
    React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/set-data-source', component: SelectDataSource_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/open', component: Dashboard_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/save', component: Counter_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/save-as', component: Counter_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/variables', component: Counter_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/filter', component: Counter_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/counter', component: Counter_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/fetchdata/:startDateIndex?', component: FetchData_1.default }));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(136);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(141);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(143);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var server_1 = __webpack_require__(14);
var react_router_dom_1 = __webpack_require__(3);
var react_router_redux_1 = __webpack_require__(5);
var history_1 = __webpack_require__(13);
var aspnet_prerendering_1 = __webpack_require__(12);
var routes_1 = __webpack_require__(11);
var configureStore_1 = __webpack_require__(10);
exports.default = aspnet_prerendering_1.createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var store = configureStore_1.default(history_1.createMemoryHistory());
        store.dispatch(react_router_redux_1.replace(params.location));
        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = (React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(react_router_dom_1.StaticRouter, { context: routerContext, location: params.location.path, children: routes_1.routes })));
        server_1.renderToString(app);
        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }
        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: server_1.renderToString(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application
    });
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var ChartState = __webpack_require__(6);
var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chart.prototype.componentWillMount = function () {
        console.log('componentWillMount()_Chart');
        console.log(this);
    };
    Chart.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('componentWillReceiveProps()_Chart');
        console.log(this);
        console.log("nextProps");
        console.log(nextProps);
        this.state = nextProps;
        console.log(this);
    };
    Chart.prototype.render = function () {
        return React.createElement("div", null, this.renderChart());
    };
    Chart.prototype.renderChart = function () {
        var _this = this;
        if (this) {
            console.log("renderChart()");
            console.log(this);
            var wrapperDivClassName = "chartRender col-sm-3 cardstock";
            if (this.props.chart_isFullScreen) {
                wrapperDivClassName = "chartRender col-sm-12 cardstock";
            }
            return React.createElement("div", { key: this.props.chart_id, className: wrapperDivClassName },
                React.createElement("div", { className: 'chart' },
                    React.createElement("div", { className: 'chartSettingsButton', id: 'settingsButton', onClick: this.handleStartEdit.bind(this) }, "..."),
                    React.createElement("h3", null,
                        "[ chart id=",
                        this.props.chart_id,
                        " ]")),
                React.createElement("div", { className: 'chartSettings' },
                    React.createElement("button", { className: 'chartSettingsButton', id: 'settingsButton', onClick: this.handleStartEdit.bind(this) }, "..."),
                    React.createElement("button", { className: 'chartFullButton', id: 'fullButton', onClick: function () { _this.props.toggleFullScreen(_this.props.chart_id).bind(_this); } }, "[]"),
                    React.createElement("p", null,
                        "[ chart id=",
                        this.props.chart_id,
                        " ]"),
                    React.createElement("p", null,
                        "[ chart_isFullScreen=",
                        this.props.chart_isFullScreen,
                        " ]")));
        }
    };
    Chart.prototype.handleStartEdit = function () {
    };
    return Chart;
}(React.Component));
var mapStateToProps = function (state) { return (state.chart); };
var ChartContainer = react_redux_1.connect(mapStateToProps, ChartState.actionCreators);
exports.default = ChartContainer(Chart);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var CounterStore = __webpack_require__(4);
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Counter.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", null,
                "Current count: ",
                React.createElement("strong", null, this.props.count)),
            React.createElement("button", { onClick: function () { _this.props.increment(); } }, "Increment"));
    };
    return Counter;
}(React.Component));
// Wire up the React component to the Redux store
exports.default = react_redux_1.connect(function (state) { return state.counter; }, // Selects which state properties are merged into the component's props
CounterStore.actionCreators // Selects which action creators are merged into the component's props
)(Counter);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var DashboardState = __webpack_require__(7);
var Chart_1 = __webpack_require__(16);
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.componentWillMount = function () {
        console.log('componentWillMount()_Dashboard');
        console.log(this);
        var id = "";
        this.props.requestDashboard(id);
    };
    Dashboard.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('componentWillReceiveProps()_Dashboard');
        console.log(this);
        console.log("nextProps");
        console.log(nextProps);
        this.state = nextProps;
        console.log(this);
        this.props.requestDashboard(nextProps.id);
    };
    Dashboard.prototype.render = function () {
        console.log('render()_Dashboard');
        console.log(this);
        return React.createElement("div", null, this.renderDashboard());
    };
    Dashboard.prototype.renderDashboard = function () {
        var _this = this;
        console.log('renderDashboard()');
        console.log(this);
        if (this.props.chartIds) {
            return React.createElement("div", null,
                console.log('has chartIds'),
                this.props.charts.map(function (chart) {
                    return React.createElement(Chart_1.default, __assign({}, chart, { key: chart.chart_id, match: _this.props.match, location: _this.props.location, history: _this.props.history, toggleFullScreen: _this.props.toggleFullScreen }));
                }));
        }
    };
    return Dashboard;
}(React.Component));
var DashboardContainer = react_redux_1.connect(function (state) { return state.dashboard; }, DashboardState.actionCreators);
exports.default = DashboardContainer(Dashboard);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(3);
var react_redux_1 = __webpack_require__(2);
var WeatherForecastsState = __webpack_require__(8);
var FetchData = (function (_super) {
    __extends(FetchData, _super);
    function FetchData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FetchData.prototype.componentWillMount = function () {
        // This method runs when the component is first added to the page
        var startDateIndex = parseInt(this.props.match.params.startDateIndex) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    };
    FetchData.prototype.componentWillReceiveProps = function (nextProps) {
        // This method runs when incoming props (e.g., route params) change
        var startDateIndex = parseInt(nextProps.match.params.startDateIndex) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    };
    FetchData.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h1", null, "Weather forecast"),
            React.createElement("p", null, "This component demonstrates fetching data from the server and working with URL parameters."),
            this.renderForecastsTable(),
            this.renderPagination());
    };
    FetchData.prototype.renderForecastsTable = function () {
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Date"),
                    React.createElement("th", null, "Temp. (C)"),
                    React.createElement("th", null, "Temp. (F)"),
                    React.createElement("th", null, "Summary"))),
            React.createElement("tbody", null, this.props.forecasts.map(function (forecast) {
                return React.createElement("tr", { key: forecast.dateFormatted },
                    React.createElement("td", null, forecast.dateFormatted),
                    React.createElement("td", null, forecast.temperatureC),
                    React.createElement("td", null, forecast.temperatureF),
                    React.createElement("td", null, forecast.summary));
            })));
    };
    FetchData.prototype.renderPagination = function () {
        var prevStartDateIndex = this.props.startDateIndex - 5;
        var nextStartDateIndex = this.props.startDateIndex + 5;
        return React.createElement("p", { className: 'clearfix text-center' },
            React.createElement(react_router_dom_1.Link, { className: 'btn btn-default pull-left', to: "/fetchdata/" + prevStartDateIndex }, "Previous"),
            React.createElement(react_router_dom_1.Link, { className: 'btn btn-default pull-right', to: "/fetchdata/" + nextStartDateIndex }, "Next"),
            this.props.isLoading ? React.createElement("span", null, "Loading...") : []);
    };
    return FetchData;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return state.weatherForecasts; }, // Selects which state properties are merged into the component's props
WeatherForecastsState.actionCreators // Selects which action creators are merged into the component's props
)(FetchData);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h3", null, "Options"),
            React.createElement("p", null,
                React.createElement("br", null)),
            React.createElement("p", null, "Set data source"),
            React.createElement("p", null, "Add related data source..."),
            React.createElement("p", null, "Open canvas..."),
            React.createElement("p", null, "Save canvas"),
            React.createElement("p", null, "Save canvas as..."),
            React.createElement("p", null,
                React.createElement("br", null)),
            React.createElement("p", null, "Save output as HTML"),
            React.createElement("p", null, "Send output to "),
            React.createElement("p", null, "Export data"),
            React.createElement("p", null, "Add Analysis gadget"),
            React.createElement("p", null, "Add StatCalc calculator"),
            React.createElement("p", null, "Add Report gadget"),
            React.createElement("p", null,
                React.createElement("br", null)),
            React.createElement("p", null, "Show data dictionary"),
            React.createElement("p", null, "Canvas Properties"),
            React.createElement("p", null, "Auto-arrange gadgets"),
            React.createElement("p", null, "Refresh data source"));
    };
    return Home;
}(React.Component));
exports.default = Home;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var NavMenu_1 = __webpack_require__(22);
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return React.createElement("div", { className: 'container-fluid' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-sm-3' },
                    React.createElement(NavMenu_1.NavMenu, null)),
                React.createElement("div", { className: 'col-sm-9' }, this.props.children)));
    };
    return Layout;
}(React.Component));
exports.Layout = Layout;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(3);
var NavMenu = (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        return React.createElement("div", { className: 'main-nav' },
            React.createElement("div", { className: 'navbar navbar-inverse' },
                React.createElement("div", { className: 'navbar-header' },
                    React.createElement("button", { type: 'button', className: 'navbar-toggle', "data-toggle": 'collapse', "data-target": '.navbar-collapse' },
                        React.createElement("span", { className: 'sr-only' }, "Toggle navigation"),
                        React.createElement("span", { className: 'icon-bar' }),
                        React.createElement("span", { className: 'icon-bar' }),
                        React.createElement("span", { className: 'icon-bar' })),
                    React.createElement("img", { src: "/Content/Images/ei.png", id: 'ei-icon' }),
                    React.createElement(react_router_dom_1.Link, { className: 'navbar-brand', to: '/' }, "Epi Info Analysis")),
                React.createElement("div", { className: 'clearfix' }),
                React.createElement("div", { className: 'navbar-collapse collapse' },
                    React.createElement("ul", { className: 'nav navbar-nav' },
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.NavLink, { exact: true, to: '/', activeClassName: 'active' }, "Options")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.NavLink, { to: '/set-data-source', activeClassName: 'active' }, "Set Data Source")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.NavLink, { to: '/open', activeClassName: 'active' }, "Open")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.NavLink, { to: '/save', activeClassName: 'active' }, "Save")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.NavLink, { to: '/save-as', activeClassName: 'active' }, "Save As")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.NavLink, { to: '/variables', activeClassName: 'active' }, "Variables")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.NavLink, { to: '/fetchdata', activeClassName: 'active' }, "Filter"))))));
    };
    return NavMenu;
}(React.Component));
exports.NavMenu = NavMenu;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SelectDataSource = (function (_super) {
    __extends(SelectDataSource, _super);
    function SelectDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectDataSource.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h3", null, "Select Data Source"));
    };
    return SelectDataSource;
}(React.Component));
exports.default = SelectDataSource;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DashboardStore = __webpack_require__(7);
var ChartStore = __webpack_require__(6);
var CounterStore = __webpack_require__(4);
var WeatherForecastsStore = __webpack_require__(8);
var SettingsStore = __webpack_require__(4);
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    dashboard: DashboardStore.reducer,
    chart: ChartStore.reducer,
    counter: CounterStore.reducer,
    settings: SettingsStore.reducer,
    weatherForecasts: WeatherForecastsStore.reducer
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(147);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(74);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTE4M2JiMGY5OGY0NzQ3ZWUxZGUiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NoYXJ0LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ2hhcnQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NvdW50ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL1NlbGVjdERhdGFTb3VyY2UudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBQyxRQUFRLGNBQWtCLENBQ2xFO3dCQUNMOzRCQUNJLG9CQUFDLDBCQUFPLElBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsUUFBUSxnQkFBb0IsQ0FDdEU7d0JBQ0w7NEJBQ0ksb0JBQUMsMEJBQU8sSUFBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBQyxRQUFRLGFBQWlCLENBQ25FLENBQ0osQ0FDSCxDQUNKLENBQ0osQ0FBQztJQUNYLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQTFDNEIsS0FBSyxDQUFDLFNBQVMsR0EwQzNDO0FBMUNZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hwQixtQ0FBK0I7QUFHL0I7SUFBOEMsb0NBQTRDO0lBQTFGOztJQU1BLENBQUM7SUFMVSxpQ0FBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDO1lBQ0gscURBQTJCLENBQ3pCLENBQUM7SUFDWCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLENBTjZDLEtBQUssQ0FBQyxTQUFTLEdBTTVEOzs7Ozs7Ozs7OztBQ1RELDRDQUE4QztBQUM5Qyx3Q0FBc0M7QUFDdEMsMENBQTBDO0FBQzFDLG1EQUE0RDtBQUM1RCwyQ0FBMkM7QUFXM0Msc0dBQXNHO0FBQ3RHLHdHQUF3RztBQUN4Ryw0REFBNEQ7QUFDL0MsZ0JBQVEsR0FBRztJQUNwQixTQUFTLEVBQUUsY0FBYyxDQUFDLE9BQU87SUFDakMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPO0lBQ3pCLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztJQUM3QixRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU87SUFDL0IsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUMsT0FBTztDQUNsRCxDQUFDOzs7Ozs7O0FDeEJGLCtDOzs7Ozs7QUNBQSw4QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGExODNiYjBmOThmNDc0N2VlMWRlIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQ0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcbi8vIFVzZSBAdHlwZU5hbWUgYW5kIGlzQWN0aW9uVHlwZSBmb3IgdHlwZSBkZXRlY3Rpb24gdGhhdCB3b3JrcyBldmVuIGFmdGVyIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLlxyXG5cclxuaW50ZXJmYWNlIEluY3JlbWVudENvdW50QWN0aW9uIHsgdHlwZTogJ0lOQ1JFTUVOVF9DT1VOVCcgfVxyXG5pbnRlcmZhY2UgRGVjcmVtZW50Q291bnRBY3Rpb24geyB0eXBlOiAnREVDUkVNRU5UX0NPVU5UJyB9XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gSW5jcmVtZW50Q291bnRBY3Rpb24gfCBEZWNyZW1lbnRDb3VudEFjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBpbmNyZW1lbnQ6ICgpID0+IDxJbmNyZW1lbnRDb3VudEFjdGlvbj57IHR5cGU6ICdJTkNSRU1FTlRfQ09VTlQnIH0sXHJcbiAgICBkZWNyZW1lbnQ6ICgpID0+IDxEZWNyZW1lbnRDb3VudEFjdGlvbj57IHR5cGU6ICdERUNSRU1FTlRfQ09VTlQnIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPENvdW50ZXJTdGF0ZT4gPSAoc3RhdGU6IENvdW50ZXJTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0lOQ1JFTUVOVF9DT1VOVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfTtcclxuICAgICAgICBjYXNlICdERUNSRU1FTlRfQ09VTlQnOlxyXG4gICAgICAgICAgICByZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgLSAxIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSB8fCB7IGNvdW50OiAwIH07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9Db3VudGVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQ2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRTdGF0ZSB7XHJcbiAgICBjaGFydF9pZDogc3RyaW5nO1xyXG4gICAgY2hhcnRfdHlwZTogc3RyaW5nO1xyXG4gICAgY2hhcnRfaW5FZGl0OiBzdHJpbmc7XHJcbiAgICBjaGFydF9sb2FkaW5nOiBib29sZWFuO1xyXG4gICAgY2hhcnRfaXNGdWxsU2NyZWVuOiBib29sZWFuO1xyXG4gICAgY2hhcnRfaXNGdWxsV2lkdGg6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0Q2hhcnRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFUVVFU1RfQ0hBUlQnO1xyXG4gICAgY2hhcnRfaWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVDaGFydEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVDRUlWRV9DSEFSVCc7XHJcbiAgICBjaGFydF9pZDogc3RyaW5nO1xyXG4gICAgY2hhcnRfanNvbjogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2V0Q2hhcnRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0dFVF9DSEFSVCc7XHJcbiAgICBjaGFydF9pZDogc3RyaW5nO1xyXG4gICAgY2hhcnRfdHlwZTogc3RyaW5nO1xyXG4gICAgY2hhcnRfaW5FZGl0OiBzdHJpbmc7XHJcbiAgICBjaGFydF9sb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVG9nZ2xlRnVsbFNjcmVlbiB7XHJcbiAgICB0eXBlOiAnVE9HR0xFX0ZVTExfU0NSRUVOJztcclxuICAgIGNoYXJ0X2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vdHlwZSBDaGFydEFjdGlvbiA9IFJlcXVlc3RDaGFydEFjdGlvbiB8IFJlY2VpdmVDaGFydEFjdGlvbiB8IEdldENoYXJ0QWN0aW9uIHwgVG9nZ2xlRnVsbFNjcmVlbjtcclxudHlwZSBDaGFydEFjdGlvbnMgPSBSZXF1ZXN0Q2hhcnRBY3Rpb24gfCBSZWNlaXZlQ2hhcnRBY3Rpb24gfCBHZXRDaGFydEFjdGlvbiB8IFRvZ2dsZUZ1bGxTY3JlZW47XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICB0b2dnbGVGdWxsU2NyZWVuOiAoaWQ6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPENoYXJ0QWN0aW9ucz4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9GVUxMX1NDUkVFTicsIGNoYXJ0X2lkOiBpZCB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IENoYXJ0U3RhdGUgPSB7XHJcbiAgICBjaGFydF9pZDogbnVsbCxcclxuICAgIGNoYXJ0X3R5cGU6IG51bGwsXHJcbiAgICBjaGFydF9pbkVkaXQ6IG51bGwsXHJcbiAgICBjaGFydF9sb2FkaW5nOiBmYWxzZSxcclxuICAgIGNoYXJ0X2lzRnVsbFNjcmVlbjogZmFsc2UsXHJcbiAgICBjaGFydF9pc0Z1bGxXaWR0aDogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDaGFydFN0YXRlPiA9IChzdGF0ZTogQ2hhcnRTdGF0ZSwgYWN0aW9uOiBDaGFydEFjdGlvbnMpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9DSEFSVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydF9pZDogc3RhdGUuY2hhcnRfaWQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF90eXBlOiBzdGF0ZS5jaGFydF90eXBlLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfaW5FZGl0OiBzdGF0ZS5jaGFydF9pbkVkaXQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9sb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFQ0VJVkVfQ0hBUlQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRfaWQ6IGFjdGlvbi5jaGFydF9pZCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2pzb246IGFjdGlvbi5jaGFydF9qc29uLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2luRWRpdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9GVUxMX1NDUkVFTic6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVE9HR0xFX0ZVTExfU0NSRUVOXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2lkOiBhY3Rpb24uY2hhcnRfaWQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9pc0Z1bGxTY3JlZW46IHN0YXRlLmNoYXJ0X2lzRnVsbFNjcmVlbiA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlICdHRVRfQ0hBUlQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRfaWQ6IGFjdGlvbi5jaGFydF9pZCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X3R5cGU6IGFjdGlvbi5jaGFydF90eXBlLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfaW5FZGl0OiBhY3Rpb24uY2hhcnRfaW5FZGl0LFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0NoYXJ0LnRzIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IENoYXJ0U3RhdGUgfSBmcm9tICdDbGllbnRBcHAvc3RvcmUvQ2hhcnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRTdGF0ZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAganNvbjogYW55O1xyXG4gICAgY2hhcnRJZHM6IHN0cmluZ1tdO1xyXG4gICAgY2hhcnRzOiBDaGFydFN0YXRlW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0RGFzaGJvYXJkQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRVFVRVNUX0RBU0hCT0FSRCc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVjZWl2ZURhc2hib2FyZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVDRUlWRV9EQVNIQk9BUkQnO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGpzb246IGFueTtcclxuICAgIGNoYXJ0czogYW55O1xyXG59XHJcblxyXG50eXBlIERhc2hib2FyZEFjdGlvbiA9IFJlcXVlc3REYXNoYm9hcmRBY3Rpb24gfCBSZWNlaXZlRGFzaGJvYXJkQWN0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgcmVxdWVzdERhc2hib2FyZDogKGlkOiBzdHJpbmcpOiBBcHBUaHVua0FjdGlvbjxEYXNoYm9hcmRBY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoaWQgIT09IGdldFN0YXRlKCkuZGFzaGJvYXJkLmlkKSB7XHJcbiAgICAgICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgL2FwaS9TZXR0aW5nc0RhdGEvRGFzaGJvYXJkP2lkPSR7IGlkIH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8YW55PilcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfREFTSEJPQVJEJywgaWQ6IGlkLCBqc29uOmRhdGEsIGNoYXJ0czogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyBcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVRVUVTVF9EQVNIQk9BUkQnLCBpZDogaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogRGFzaGJvYXJkU3RhdGUgPSB7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBqc29uOiBudWxsLFxyXG4gICAgY2hhcnRJZHM6IG51bGwsXHJcbiAgICBjaGFydHM6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPERhc2hib2FyZFN0YXRlPiA9IChzdGF0ZTogRGFzaGJvYXJkU3RhdGUsIGFjdGlvbjogRGFzaGJvYXJkQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFUVVFU1RfREFTSEJPQVJEJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVFVRVNUX0RBU0hCT0FSRFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvblwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAganNvbjogc3RhdGUuanNvbixcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJ0SWRzOiBzdGF0ZS5jaGFydElkcyxcclxuICAgICAgICAgICAgICAgIGNoYXJ0czogc3RhdGUuY2hhcnRzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFQ0VJVkVfREFTSEJPQVJEJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRUNFSVZFX0RBU0hCT0FSRFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvblwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGxldCBjaGFydFN0YXRlczogQ2hhcnRTdGF0ZVtdID0gW107IFxyXG5cclxuICAgICAgICAgICAgYWN0aW9uLmpzb24uY2FudmFzLmNoYXJ0cy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZHMucHVzaChjLmNoYXJ0X2lkIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBhY3Rpb24uanNvbi5jYW52YXMuY2hhcnRzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0U3RhdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0X2lkOiBjLmNoYXJ0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0X3R5cGU6IGMuY2hhcnRfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFydF9pbkVkaXQ6IGMuY2hhcnRfaW5FZGl0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0X2xvYWRpbmc6IGMuY2hhcnRfbG9hZGluZyA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFydF9pc0Z1bGxTY3JlZW46IGMuY2hhcnRfaXNGdWxsU2NyZWVuID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0X2lzRnVsbFdpZHRoOiBjLmNoYXJ0X2lzRnVsbFdpZHRoID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJpbnQgY2hhcnRTdGF0ZXMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhcnRTdGF0ZXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24uanNvbi5jYW52YXMuaWQsXHJcbiAgICAgICAgICAgICAgICBqc29uOiBhY3Rpb24uanNvbixcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFydElkczogaWRzLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRzOiBjaGFydFN0YXRlc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvRGFzaGJvYXJkLnRzIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3RzU3RhdGUge1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxuICAgIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcclxuICAgIGRhdGVGb3JtYXR0ZWQ6IHN0cmluZztcclxuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xyXG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XHJcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG5cclxuaW50ZXJmYWNlIFJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRVFVRVNUX1dFQVRIRVJfRk9SRUNBU1RTJyxcclxuICAgIHN0YXJ0RGF0ZUluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZWNlaXZlV2VhdGhlckZvcmVjYXN0c0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUycsXHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG4gICAgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXVxyXG59XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24gfCBSZWNlaXZlV2VhdGhlckZvcmVjYXN0c0FjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICByZXF1ZXN0V2VhdGhlckZvcmVjYXN0czogKHN0YXJ0RGF0ZUluZGV4OiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vIE9ubHkgbG9hZCBkYXRhIGlmIGl0J3Mgc29tZXRoaW5nIHdlIGRvbid0IGFscmVhZHkgaGF2ZSAoYW5kIGFyZSBub3QgYWxyZWFkeSBsb2FkaW5nKVxyXG4gICAgICAgIGlmIChzdGFydERhdGVJbmRleCAhPT0gZ2V0U3RhdGUoKS53ZWF0aGVyRm9yZWNhc3RzLnN0YXJ0RGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHM/c3RhcnREYXRlSW5kZXg9JHsgc3RhcnREYXRlSW5kZXggfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxXZWF0aGVyRm9yZWNhc3RbXT4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJywgc3RhcnREYXRlSW5kZXg6IHN0YXJ0RGF0ZUluZGV4LCBmb3JlY2FzdHM6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgLy8gRW5zdXJlIHNlcnZlci1zaWRlIHByZXJlbmRlcmluZyB3YWl0cyBmb3IgdGhpcyB0byBjb21wbGV0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX1dFQVRIRVJfRk9SRUNBU1RTJywgc3RhcnREYXRlSW5kZXg6IHN0YXJ0RGF0ZUluZGV4IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSA9IHsgc3RhcnREYXRlSW5kZXg6IG51bGwsIGZvcmVjYXN0czogW10sIGlzTG9hZGluZzogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFdlYXRoZXJGb3JlY2FzdHNTdGF0ZT4gPSAoc3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgIGZvcmVjYXN0czogc3RhdGUuZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWNjZXB0IHRoZSBpbmNvbWluZyBkYXRhIGlmIGl0IG1hdGNoZXMgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3QuIFRoaXMgZW5zdXJlcyB3ZSBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG91dC1vZi1vcmRlciByZXNwb25zZXMuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhcnREYXRlSW5kZXggPT09IHN0YXRlLnN0YXJ0RGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUluZGV4OiBhY3Rpb24uc3RhcnREYXRlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBhY3Rpb24uZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZG9tYWluLXRhc2svaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmVNb2R1bGUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGhpc3Rvcnk6IEhpc3RvcnksIGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXHJcbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xyXG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XHJcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XHJcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpLFxyXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxyXG4gICAgKShjcmVhdGVTdG9yZSk7XHJcblxyXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxyXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcclxuXHJcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgU3RvcmVNb2R1bGU+KCcuL3N0b3JlJyk7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzKSB7XHJcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IFNlbGVjdERhdGFTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdERhdGFTb3VyY2UnO1xyXG5pbXBvcnQgRmV0Y2hEYXRhIGZyb20gJy4vY29tcG9uZW50cy9GZXRjaERhdGEnO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvbXBvbmVudHMvQ291bnRlcic7XHJcblxyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jb21wb25lbnRzL0NoYXJ0JztcclxuXHJcbmltcG9ydCBTZXR0aW5nc0RpYWxvZyBmcm9tICcuL2NvbXBvbmVudHMvU2V0dGluZ3NEaWFsb2cnO1xyXG5pbXBvcnQgT3BlbkNhbnZhcyBmcm9tICcuL2NvbXBvbmVudHMvT3BlbkNhbnZhcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gPExheW91dD5cclxuICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9eyBIb21lIH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvc2V0LWRhdGEtc291cmNlJyBjb21wb25lbnQ9e1NlbGVjdERhdGFTb3VyY2V9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL29wZW4nIGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9zYXZlJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL3NhdmUtYXMnIGNvbXBvbmVudD17Q291bnRlcn0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvdmFyaWFibGVzJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZpbHRlcicgY29tcG9uZW50PXtDb3VudGVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9jb3VudGVyJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZldGNoZGF0YS86c3RhcnREYXRlSW5kZXg/JyBjb21wb25lbnQ9eyBGZXRjaERhdGEgfSAvPlxyXG48L0xheW91dD47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHBhcmFtcy5sb2NhdGlvbikpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDaGFydFN0YXRlIGZyb20gJy4uL3N0b3JlL0NoYXJ0JztcclxuXHJcbnR5cGUgQ2hhcnRQcm9wcyA9IENoYXJ0U3RhdGUuQ2hhcnRTdGF0ZVxyXG4gICAgJiB0eXBlb2YgQ2hhcnRTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgaWQ6IHN0cmluZyB9PjsgXHJcblxyXG5jbGFzcyBDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDaGFydFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbE1vdW50KClfQ2hhcnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogQ2hhcnRQcm9wcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKClfQ2hhcnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHRQcm9wc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0UHJvcHM7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hhcnQoKX1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlckNoYXJ0KClcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlckRpdkNsYXNzTmFtZSA9IFwiY2hhcnRSZW5kZXIgY29sLXNtLTMgY2FyZHN0b2NrXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGFydF9pc0Z1bGxTY3JlZW4pIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJEaXZDbGFzc05hbWUgPSBcImNoYXJ0UmVuZGVyIGNvbC1zbS0xMiBjYXJkc3RvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXt0aGlzLnByb3BzLmNoYXJ0X2lkfSBjbGFzc05hbWU9e3dyYXBwZXJEaXZDbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXJ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcnRTZXR0aW5nc0J1dHRvbicgaWQ9J3NldHRpbmdzQnV0dG9uJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0RWRpdC5iaW5kKHRoaXMpfT4uLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+WyBjaGFydCBpZD17dGhpcy5wcm9wcy5jaGFydF9pZH0gXTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydFNldHRpbmdzJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2hhcnRTZXR0aW5nc0J1dHRvbicgaWQ9J3NldHRpbmdzQnV0dG9uJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0RWRpdC5iaW5kKHRoaXMpfT4uLi48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2hhcnRGdWxsQnV0dG9uJyBpZD0nZnVsbEJ1dHRvbicgb25DbGljaz17KCkgPT4ge3RoaXMucHJvcHMudG9nZ2xlRnVsbFNjcmVlbih0aGlzLnByb3BzLmNoYXJ0X2lkKS5iaW5kKHRoaXMpfX0+W108L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5bIGNoYXJ0IGlkPXt0aGlzLnByb3BzLmNoYXJ0X2lkfSBdPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlsgY2hhcnRfaXNGdWxsU2NyZWVuPXt0aGlzLnByb3BzLmNoYXJ0X2lzRnVsbFNjcmVlbn0gXTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN0YXJ0RWRpdCgpIHtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiAoc3RhdGUuY2hhcnQpO1xyXG5jb25zdCBDaGFydENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBDaGFydFN0YXRlLmFjdGlvbkNyZWF0b3JzKTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDb250YWluZXIoQ2hhcnQpIGFzIHR5cGVvZiBDaGFydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9DaGFydC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXJTdG9yZSBmcm9tICcuLi9zdG9yZS9Db3VudGVyJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcclxuXHJcbnR5cGUgQ291bnRlclByb3BzID1cclxuICAgIENvdW50ZXJTdG9yZS5Db3VudGVyU3RhdGVcclxuICAgICYgdHlwZW9mIENvdW50ZXJTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q291bnRlclByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNvdW50ZXI8L2gxPlxyXG5cclxuICAgICAgICAgICAgPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGEgUmVhY3QgY29tcG9uZW50LjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+eyB0aGlzLnByb3BzLmNvdW50IH08L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMucHJvcHMuaW5jcmVtZW50KCkgfSB9PkluY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoQ291bnRlcikgYXMgdHlwZW9mIENvdW50ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIERhc2hib2FyZFN0YXRlIGZyb20gJy4uL3N0b3JlL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0JztcclxuaW1wb3J0ICogYXMgQ2hhcnRTdGF0ZSBmcm9tICcuLi9zdG9yZS9DaGFydCc7XHJcblxyXG50eXBlIERhc2hib2FyZFByb3BzID0gRGFzaGJvYXJkU3RhdGUuRGFzaGJvYXJkU3RhdGVcclxuICAgICYgdHlwZW9mIERhc2hib2FyZFN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIHR5cGVvZiBDaGFydFN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+OyBcclxuXHJcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEYXNoYm9hcmRQcm9wcywge30+IHtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxNb3VudCgpX0Rhc2hib2FyZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGxldCBpZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0RGFzaGJvYXJkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogRGFzaGJvYXJkUHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpX0Rhc2hib2FyZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dFByb3BzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRQcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3REYXNoYm9hcmQobmV4dFByb3BzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXIoKV9EYXNoYm9hcmQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyRGFzaGJvYXJkKCl9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGFzaGJvYXJkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJEYXNoYm9hcmQoKScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoYXJ0SWRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdoYXMgY2hhcnRJZHMnKX1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYXJ0cy5tYXAoY2hhcnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uY2hhcnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGFydC5jaGFydF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoPXt0aGlzLnByb3BzLm1hdGNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVGdWxsU2NyZWVuPXt0aGlzLnByb3BzLnRvZ2dsZUZ1bGxTY3JlZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBEYXNoYm9hcmRDb250YWluZXIgPSBjb25uZWN0KChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUuZGFzaGJvYXJkLCBEYXNoYm9hcmRTdGF0ZS5hY3Rpb25DcmVhdG9ycyk7XHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZENvbnRhaW5lcihEYXNoYm9hcmQpIGFzIHR5cGVvZiBEYXNoYm9hcmQ7XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcclxuXHJcbi8vIEF0IHJ1bnRpbWUsIFJlZHV4IHdpbGwgbWVyZ2UgdG9nZXRoZXIuLi5cclxudHlwZSBXZWF0aGVyRm9yZWNhc3RQcm9wcyA9XHJcbiAgICBXZWF0aGVyRm9yZWNhc3RzU3RhdGUuV2VhdGhlckZvcmVjYXN0c1N0YXRlICAgICAgICAvLyAuLi4gc3RhdGUgd2UndmUgcmVxdWVzdGVkIGZyb20gdGhlIFJlZHV4IHN0b3JlXHJcbiAgICAmIHR5cGVvZiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAvLyAuLi4gcGx1cyBhY3Rpb24gY3JlYXRvcnMgd2UndmUgcmVxdWVzdGVkXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBzdGFydERhdGVJbmRleDogc3RyaW5nIH0+OyAvLyAuLi4gcGx1cyBpbmNvbWluZyByb3V0aW5nIHBhcmFtZXRlcnMgICBcclxuXHJcbmNsYXNzIEZldGNoRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXZWF0aGVyRm9yZWNhc3RQcm9wcywge30+IHtcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBhZGRlZCB0byB0aGUgcGFnZVxyXG4gICAgICAgIGxldCBzdGFydERhdGVJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0YXJ0RGF0ZUluZGV4KSB8fCAwO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdFdlYXRoZXJGb3JlY2FzdHMoc3RhcnREYXRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBXZWF0aGVyRm9yZWNhc3RQcm9wcykge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiBpbmNvbWluZyBwcm9wcyAoZS5nLiwgcm91dGUgcGFyYW1zKSBjaGFuZ2VcclxuICAgICAgICBsZXQgc3RhcnREYXRlSW5kZXggPSBwYXJzZUludChuZXh0UHJvcHMubWF0Y2gucGFyYW1zLnN0YXJ0RGF0ZUluZGV4KSB8fCAwO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdFdlYXRoZXJGb3JlY2FzdHMoc3RhcnREYXRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cclxuICAgICAgICAgICAgPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCB3b3JraW5nIHdpdGggVVJMIHBhcmFtZXRlcnMuPC9wPlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRm9yZWNhc3RzVGFibGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCkgfVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckZvcmVjYXN0c1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JlY2FzdHMubWFwKGZvcmVjYXN0ID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5zdW1tYXJ5IH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHByZXZTdGFydERhdGVJbmRleCA9IHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggLSA1O1xyXG4gICAgICAgIGxldCBuZXh0U3RhcnREYXRlSW5kZXggPSB0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4ICsgNTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2xlYXJmaXggdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLWxlZnQnIHRvPXsgYC9mZXRjaGRhdGEvJHsgcHJldlN0YXJ0RGF0ZUluZGV4IH1gIH0+UHJldmlvdXM8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHQnIHRvPXsgYC9mZXRjaGRhdGEvJHsgbmV4dFN0YXJ0RGF0ZUluZGV4IH1gIH0+TmV4dDwvTGluaz5cclxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzTG9hZGluZyA/IDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+IDogW10gfVxyXG4gICAgICAgIDwvcD47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLndlYXRoZXJGb3JlY2FzdHMsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBXZWF0aGVyRm9yZWNhc3RzU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShGZXRjaERhdGEpIGFzIHR5cGVvZiBGZXRjaERhdGE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0ZldGNoRGF0YS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wczx7fT4sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+T3B0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxwPjxiciAvPjwvcD5cclxuICAgICAgICAgICAgPHA+U2V0IGRhdGEgc291cmNlPC9wPlxyXG4gICAgICAgICAgICA8cD5BZGQgcmVsYXRlZCBkYXRhIHNvdXJjZS4uLjwvcD5cclxuICAgICAgICAgICAgPHA+T3BlbiBjYW52YXMuLi48L3A+XHJcbiAgICAgICAgICAgIDxwPlNhdmUgY2FudmFzPC9wPlxyXG4gICAgICAgICAgICA8cD5TYXZlIGNhbnZhcyBhcy4uLjwvcD5cclxuICAgICAgICAgICAgPHA+PGJyIC8+PC9wPlxyXG4gICAgICAgICAgICA8cD5TYXZlIG91dHB1dCBhcyBIVE1MPC9wPlxyXG4gICAgICAgICAgICA8cD5TZW5kIG91dHB1dCB0byA8L3A+XHJcbiAgICAgICAgICAgIDxwPkV4cG9ydCBkYXRhPC9wPlxyXG4gICAgICAgICAgICA8cD5BZGQgQW5hbHlzaXMgZ2FkZ2V0PC9wPlxyXG4gICAgICAgICAgICA8cD5BZGQgU3RhdENhbGMgY2FsY3VsYXRvcjwvcD5cclxuICAgICAgICAgICAgPHA+QWRkIFJlcG9ydCBnYWRnZXQ8L3A+XHJcbiAgICAgICAgICAgIDxwPjxiciAvPjwvcD5cclxuICAgICAgICAgICAgPHA+U2hvdyBkYXRhIGRpY3Rpb25hcnk8L3A+XHJcbiAgICAgICAgICAgIDxwPkNhbnZhcyBQcm9wZXJ0aWVzPC9wPlxyXG4gICAgICAgICAgICA8cD5BdXRvLWFycmFuZ2UgZ2FkZ2V0czwvcD5cclxuICAgICAgICAgICAgPHA+UmVmcmVzaCBkYXRhIHNvdXJjZTwvcD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdk1lbnUgfSBmcm9tICcuL05hdk1lbnUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdk1lbnUgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS05Jz5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdtYWluLW5hdic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9Db250ZW50L0ltYWdlcy9laS5wbmdcIiBpZD0nZWktaWNvbicgLz48TGluayBjbGFzc05hbWU9J25hdmJhci1icmFuZCcgdG89eycvJ30+RXBpIEluZm8gQW5hbHlzaXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGVhcmZpeCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGV4YWN0IHRvPXsgJy8nIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPk9wdGlvbnM8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsgJy9zZXQtZGF0YS1zb3VyY2UnIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlNldCBEYXRhIFNvdXJjZTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvb3Blbid9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5PcGVuPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9zYXZlJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlNhdmU8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL3NhdmUtYXMnfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+U2F2ZSBBczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvdmFyaWFibGVzJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlZhcmlhYmxlczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvZmV0Y2hkYXRhJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPkZpbHRlcjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0RGF0YVNvdXJjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzPHt9Piwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5TZWxlY3QgRGF0YSBTb3VyY2U8L2gzPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9TZWxlY3REYXRhU291cmNlLnRzeCIsImltcG9ydCAqIGFzIERhc2hib2FyZFN0b3JlIGZyb20gJy4vRGFzaGJvYXJkJztcclxuaW1wb3J0ICogYXMgQ2hhcnRTdG9yZSBmcm9tICcuL0NoYXJ0JztcclxuaW1wb3J0ICogYXMgQ291bnRlclN0b3JlIGZyb20gJy4vQ291bnRlcic7XHJcbmltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHNTdG9yZSBmcm9tICcuL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5pbXBvcnQgKiBhcyBTZXR0aW5nc1N0b3JlIGZyb20gJy4vQ291bnRlcic7XHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgZGFzaGJvYXJkOiBEYXNoYm9hcmRTdG9yZS5EYXNoYm9hcmRTdGF0ZSxcclxuICAgIGNoYXJ0OiBDaGFydFN0b3JlLkNoYXJ0U3RhdGUsXHJcbiAgICBjb3VudGVyOiBDb3VudGVyU3RvcmUuQ291bnRlclN0YXRlLFxyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuQ291bnRlclN0YXRlLFxyXG4gICAgd2VhdGhlckZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0c1N0b3JlLldlYXRoZXJGb3JlY2FzdHNTdGF0ZVxyXG59XHJcblxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGRhc2hib2FyZDogRGFzaGJvYXJkU3RvcmUucmVkdWNlcixcclxuICAgIGNoYXJ0OiBDaGFydFN0b3JlLnJlZHVjZXIsXHJcbiAgICBjb3VudGVyOiBDb3VudGVyU3RvcmUucmVkdWNlcixcclxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLnJlZHVjZXIsXHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzU3RvcmUucmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDc0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==