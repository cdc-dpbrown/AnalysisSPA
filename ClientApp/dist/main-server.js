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

module.exports = (__webpack_require__(1))(139);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(146);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domain_task_1 = __webpack_require__(5);
exports.actionCreators = {
    requestChart: function (id) { return function (dispatch, getState) {
        if (id !== getState().chart.chart_id) {
            var fetchTask = domain_task_1.fetch("/api/SettingsData/Chart?id=" + id)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_CHART', chart_id: id, chart_json: data });
            });
            domain_task_1.addTask(fetchTask);
            dispatch({ type: 'REQUEST_CHART', chart_id: id });
        }
    }; },
    getChart: function (id) { return function (dispatch, getState) {
        if (id !== getState().chart.chart_id) {
        }
    }; }
};
var unloadedState = {
    chart_id: null,
    chart_type: null,
    chart_inEdit: null,
    chart_loading: false,
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domain_task_1 = __webpack_require__(5);
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
            return {
                id: action.id,
                json: state.json,
                isLoading: true,
                chartIds: state.chartIds,
                charts: state.charts
            };
        case 'RECEIVE_DASHBOARD':
            var ids_1 = [];
            var chartStates_1 = [];
            action.json.canvas.charts.forEach(function (c) {
                ids_1.push(c.chart_id);
            });
            action.json.canvas.charts.forEach(function (c) {
                chartStates_1.push(c);
            });
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domain_task_1 = __webpack_require__(5);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(27);
var redux_thunk_1 = __webpack_require__(26);
var react_router_redux_1 = __webpack_require__(6);
var store_1 = __webpack_require__(25);
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
var Layout_1 = __webpack_require__(22);
var Home_1 = __webpack_require__(21);
var SelectDataSource_1 = __webpack_require__(24);
var FetchData_1 = __webpack_require__(20);
var Counter_1 = __webpack_require__(17);
var DashboardContainer_1 = __webpack_require__(19);
exports.routes = React.createElement(Layout_1.Layout, null,
    React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/set-data-source', component: SelectDataSource_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/open', component: DashboardContainer_1.default }),
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
var react_router_redux_1 = __webpack_require__(6);
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
var ChartState = __webpack_require__(7);
var ChartContainer = (function (_super) {
    __extends(ChartContainer, _super);
    function ChartContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //constructor(ChartProps) {
    //    super(ChartProps);
    //    console.log('constructor(ChartProps)');
    //    console.log(this.props);
    //    console.log(this.context);
    //    console.log(this.state);
    //    console.log(this);
    //    console.log(this.refs);
    //    this.state = {
    //        chart_id: ChartProps.chart_id,
    //        chart_type: ChartProps.chart_type,
    //        chart_inEdit: ChartProps.chart_inEdit,
    //        chart_loading: ChartProps.chart_loading,
    //    };
    //    console.log(ChartProps.chart_id);
    //}
    ChartContainer.prototype.componentWillMount = function () {
        console.log('componentWillMount()_ChartContainer');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    };
    ChartContainer.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('componentWillReceiveProps()_ChartContainer');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    };
    ChartContainer.prototype.render = function () {
        console.log('render()_chart');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
        return React.createElement("div", null, this.renderChart());
    };
    ChartContainer.prototype.renderChart = function () {
        {
            console.log('renderChart()');
        }
        console.log(this.props.chart_id);
        if (this.props.chart_id) {
            {
                console.log('renderChart() - chart_id not null');
            }
            return React.createElement("div", null,
                React.createElement("h1", null,
                    this.props.chart_id,
                    " "),
                React.createElement("h1", null,
                    this.props.chart_type,
                    " "),
                React.createElement("h1", null, " dpbrown "),
                React.createElement("h1", null,
                    this.props.chart_id,
                    " "));
        }
        ;
    };
    return ChartContainer;
}(React.Component));
var connectedStateandProps = react_redux_1.connect(function (state) { return state.chart; }, ChartState.actionCreators);
exports.default = connectedStateandProps(ChartContainer);


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ChartContainer_1 = __webpack_require__(16);
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    //constructor(DashboardProps) {
    //    super(DashboardProps);
    //    this.state = {
    //        id: DashboardProps.chart_id,
    //        isLoading: DashboardProps.chart_type,
    //        json: DashboardProps.chart_inEdit,
    //        chartIds: DashboardProps.chart_loading,
    //        charts: DashboardProps....
    //    };
    //}
    function Dashboard(DashboardProps) {
        var _this = _super.call(this, DashboardProps) || this;
        console.log('constructor');
        console.log(_this.props);
        return _this;
    }
    Dashboard.prototype.render = function () {
        console.log('render()_Dashboard');
        console.log(this.props);
        return React.createElement("div", null,
            React.createElement("span", null, "dpb"),
            this.renderDashboard());
    };
    //chart_id: string;
    //chart_type: string;
    //chart_inEdit: string;
    //chart_loading: boolean;
    //key = { chartContainer.chart_id }
    //chart_id = { chartContainer.chart_id }
    //chart_type = { chartContainer.chart_type }
    //chart_inEdit = { chartContainer.chart_inEdit }
    //chart_loading = { chartContainer.chart_loading }
    Dashboard.prototype.renderDashboard = function () {
        console.log('renderDashboard()');
        console.log(this.props);
        if (this.props.chartIds) {
            return React.createElement("div", null,
                this.props.chartIds.map(function (id) {
                    return React.createElement("div", { key: id, className: 'col-sm-3 cardstock' }, id);
                }),
                console.log('has chartIds'),
                this.props.charts.map(function (chartContainer) {
                    return React.createElement(ChartContainer_1.default, { key: chartContainer.chart_id, chart_id: chartContainer.chart_id, chart_type: chartContainer.chart_type, chart_inEdit: chartContainer.chart_inEdit, chart_loading: chartContainer.chart_loading });
                }));
        }
    };
    return Dashboard;
}(React.Component));
exports.default = Dashboard;
//export default connect(
//    (state: ApplicationState) => state.canvas, // Selects which state properties are merged into the component's props
//    DashboardState.actionCreators                 // Selects which action creators are merged into the component's props
//)(Dashboard) as typeof Dashboard; 


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
var react_redux_1 = __webpack_require__(2);
var DashboardState = __webpack_require__(8);
var Dashboard_1 = __webpack_require__(18);
var DashboardContainer = (function (_super) {
    __extends(DashboardContainer, _super);
    function DashboardContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardContainer.prototype.componentWillMount = function () {
        console.log('componentWillMount()_DashboardContainer');
        var id = "";
        this.props.requestDashboard(id);
    };
    DashboardContainer.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('componentWillReceiveProps()_DashboardContainer');
        this.props.requestDashboard(nextProps.id);
    };
    DashboardContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Dashboard_1.default, { id: this.props.id, isLoading: this.props.isLoading, json: this.props.json, chartIds: this.props.chartIds, charts: this.props.charts }),
            React.createElement("div", null,
                React.createElement("br", null),
                React.createElement("h1", null, this.props.id),
                React.createElement("h1", null, JSON.stringify(this.props.json)),
                React.createElement("h1", null, this.props.isLoading ? React.createElement("span", null, "Loading...") : React.createElement("span", null, "Not loading...")))));
    };
    return DashboardContainer;
}(React.Component));
var connectedStateandProps = react_redux_1.connect(function (state) { return state.dashboard; }, DashboardState.actionCreators);
exports.default = connectedStateandProps(DashboardContainer);


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
var react_router_dom_1 = __webpack_require__(3);
var react_redux_1 = __webpack_require__(2);
var WeatherForecastsState = __webpack_require__(9);
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
var NavMenu_1 = __webpack_require__(23);
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DashboardStore = __webpack_require__(8);
var ChartStore = __webpack_require__(7);
var CounterStore = __webpack_require__(4);
var WeatherForecastsStore = __webpack_require__(9);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(147);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(74);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTMzYzdlMzE3NTg1MzgxOTBiNTAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NoYXJ0LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ2hhcnRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NvdW50ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9GZXRjaERhdGEudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvU2VsZWN0RGF0YVNvdXJjZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMi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QyxvQ0FBNEM7SUFBMUY7O0lBTUEsQ0FBQztJQUxVLGlDQUFNLEdBQWI7UUFDSSxNQUFNLENBQUM7WUFDSCxxREFBMkIsQ0FDekIsQ0FBQztJQUNYLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQ0FONkMsS0FBSyxDQUFDLFNBQVMsR0FNNUQ7Ozs7Ozs7Ozs7O0FDVEQsNENBQThDO0FBQzlDLHdDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsbURBQTREO0FBQzVELDJDQUEyQztBQVczQyxzR0FBc0c7QUFDdEcsd0dBQXdHO0FBQ3hHLDREQUE0RDtBQUMvQyxnQkFBUSxHQUFHO0lBQ3BCLFNBQVMsRUFBRSxjQUFjLENBQUMsT0FBTztJQUNqQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU87SUFDekIsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO0lBQzdCLFFBQVEsRUFBRSxhQUFhLENBQUMsT0FBTztJQUMvQixnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQyxPQUFPO0NBQ2xELENBQUM7Ozs7Ozs7QUN4QkYsK0M7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTMzYzdlMzE3NTg1MzgxOTBiNTAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGF0ZSB7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT05TIC0gVGhlc2UgYXJlIHNlcmlhbGl6YWJsZSAoaGVuY2UgcmVwbGF5YWJsZSkgZGVzY3JpcHRpb25zIG9mIHN0YXRlIHRyYW5zaXRpb25zLlxyXG4vLyBUaGV5IGRvIG5vdCB0aGVtc2VsdmVzIGhhdmUgYW55IHNpZGUtZWZmZWN0czsgdGhleSBqdXN0IGRlc2NyaWJlIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIHRvIGhhcHBlbi5cclxuLy8gVXNlIEB0eXBlTmFtZSBhbmQgaXNBY3Rpb25UeXBlIGZvciB0eXBlIGRldGVjdGlvbiB0aGF0IHdvcmtzIGV2ZW4gYWZ0ZXIgc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uXHJcblxyXG5pbnRlcmZhY2UgSW5jcmVtZW50Q291bnRBY3Rpb24geyB0eXBlOiAnSU5DUkVNRU5UX0NPVU5UJyB9XHJcbmludGVyZmFjZSBEZWNyZW1lbnRDb3VudEFjdGlvbiB7IHR5cGU6ICdERUNSRU1FTlRfQ09VTlQnIH1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBJbmNyZW1lbnRDb3VudEFjdGlvbiB8IERlY3JlbWVudENvdW50QWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGluY3JlbWVudDogKCkgPT4gPEluY3JlbWVudENvdW50QWN0aW9uPnsgdHlwZTogJ0lOQ1JFTUVOVF9DT1VOVCcgfSxcclxuICAgIGRlY3JlbWVudDogKCkgPT4gPERlY3JlbWVudENvdW50QWN0aW9uPnsgdHlwZTogJ0RFQ1JFTUVOVF9DT1VOVCcgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Q291bnRlclN0YXRlPiA9IChzdGF0ZTogQ291bnRlclN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnSU5DUkVNRU5UX0NPVU5UJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50ICsgMSB9O1xyXG4gICAgICAgIGNhc2UgJ0RFQ1JFTUVOVF9DT1VOVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCAtIDEgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHsgY291bnQ6IDAgfTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0NvdW50ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQ2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRTdGF0ZSB7XHJcbiAgICBjaGFydF9pZDogc3RyaW5nO1xyXG4gICAgY2hhcnRfdHlwZTogc3RyaW5nO1xyXG4gICAgY2hhcnRfaW5FZGl0OiBzdHJpbmc7XHJcbiAgICBjaGFydF9sb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdENoYXJ0QWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRVFVRVNUX0NIQVJUJyxcclxuICAgIGNoYXJ0X2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZWNlaXZlQ2hhcnRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFQ0VJVkVfQ0hBUlQnO1xyXG4gICAgY2hhcnRfaWQ6IHN0cmluZztcclxuICAgIGNoYXJ0X2pzb246IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEdldENoYXJ0QWN0aW9uIHtcclxuICAgIHR5cGU6ICdHRVRfQ0hBUlQnO1xyXG4gICAgY2hhcnRfaWQ6IHN0cmluZztcclxuICAgIGNoYXJ0X3R5cGU6IHN0cmluZztcclxuICAgIGNoYXJ0X2luRWRpdDogc3RyaW5nO1xyXG4gICAgY2hhcnRfbG9hZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxudHlwZSBDaGFydEFjdGlvbiA9IFJlcXVlc3RDaGFydEFjdGlvbiB8IFJlY2VpdmVDaGFydEFjdGlvbiB8IEdldENoYXJ0QWN0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgcmVxdWVzdENoYXJ0OiAoaWQ6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPENoYXJ0QWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICE9PSBnZXRTdGF0ZSgpLmNoYXJ0LmNoYXJ0X2lkKSB7XHJcbiAgICAgICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgL2FwaS9TZXR0aW5nc0RhdGEvQ2hhcnQ/aWQ9JHsgaWQgfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxhbnk+KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVDRUlWRV9DSEFSVCcsIGNoYXJ0X2lkOiBpZCwgY2hhcnRfanNvbjogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX0NIQVJUJywgY2hhcnRfaWQ6IGlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRDaGFydDogKGlkOiBzdHJpbmcpOiBBcHBUaHVua0FjdGlvbjxDaGFydEFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChpZCAhPT0gZ2V0U3RhdGUoKS5jaGFydC5jaGFydF9pZCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IENoYXJ0U3RhdGUgPSB7XHJcbiAgICBjaGFydF9pZDogbnVsbCxcclxuICAgIGNoYXJ0X3R5cGU6IG51bGwsXHJcbiAgICBjaGFydF9pbkVkaXQ6IG51bGwsXHJcbiAgICBjaGFydF9sb2FkaW5nOiBmYWxzZSxcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDaGFydFN0YXRlPiA9IChzdGF0ZTogQ2hhcnRTdGF0ZSwgYWN0aW9uOiBDaGFydEFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1JFUVVFU1RfQ0hBUlQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRfaWQ6IHN0YXRlLmNoYXJ0X2lkLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfdHlwZTogc3RhdGUuY2hhcnRfdHlwZSxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2luRWRpdDogc3RhdGUuY2hhcnRfaW5FZGl0LFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ1JFQ0VJVkVfQ0hBUlQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRfaWQ6IGFjdGlvbi5jaGFydF9pZCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2pzb246IGFjdGlvbi5jaGFydF9qc29uLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2luRWRpdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnR0VUX0NIQVJUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2lkOiBhY3Rpb24uY2hhcnRfaWQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF90eXBlOiBhY3Rpb24uY2hhcnRfdHlwZSxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2luRWRpdDogYWN0aW9uLmNoYXJ0X2luRWRpdCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0NoYXJ0LnRzIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IENoYXJ0U3RhdGUgfSBmcm9tICdDbGllbnRBcHAvc3RvcmUvQ2hhcnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRTdGF0ZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAganNvbjogYW55O1xyXG4gICAgY2hhcnRJZHM6IHN0cmluZ1tdO1xyXG4gICAgY2hhcnRzOiBDaGFydFN0YXRlW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0RGFzaGJvYXJkQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRVFVRVNUX0RBU0hCT0FSRCc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVjZWl2ZURhc2hib2FyZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVDRUlWRV9EQVNIQk9BUkQnO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGpzb246IGFueTtcclxuICAgIGNoYXJ0czogYW55O1xyXG59XHJcblxyXG50eXBlIERhc2hib2FyZEFjdGlvbiA9IFJlcXVlc3REYXNoYm9hcmRBY3Rpb24gfCBSZWNlaXZlRGFzaGJvYXJkQWN0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgcmVxdWVzdERhc2hib2FyZDogKGlkOiBzdHJpbmcpOiBBcHBUaHVua0FjdGlvbjxEYXNoYm9hcmRBY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoaWQgIT09IGdldFN0YXRlKCkuZGFzaGJvYXJkLmlkKSB7XHJcbiAgICAgICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgL2FwaS9TZXR0aW5nc0RhdGEvRGFzaGJvYXJkP2lkPSR7IGlkIH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8YW55PilcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfREFTSEJPQVJEJywgaWQ6IGlkLCBqc29uOmRhdGEsIGNoYXJ0czogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyBcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVRVUVTVF9EQVNIQk9BUkQnLCBpZDogaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogRGFzaGJvYXJkU3RhdGUgPSB7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBqc29uOiBudWxsLFxyXG4gICAgY2hhcnRJZHM6IG51bGwsXHJcbiAgICBjaGFydHM6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPERhc2hib2FyZFN0YXRlPiA9IChzdGF0ZTogRGFzaGJvYXJkU3RhdGUsIGFjdGlvbjogRGFzaGJvYXJkQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFUVVFU1RfREFTSEJPQVJEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXHJcbiAgICAgICAgICAgICAgICBqc29uOiBzdGF0ZS5qc29uLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRJZHM6IHN0YXRlLmNoYXJ0SWRzLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRzOiBzdGF0ZS5jaGFydHNcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSAnUkVDRUlWRV9EQVNIQk9BUkQnOlxyXG4gICAgICAgICAgICBsZXQgaWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2hhcnRTdGF0ZXM6IENoYXJ0U3RhdGVbXSA9IFtdOyBcclxuXHJcbiAgICAgICAgICAgIGFjdGlvbi5qc29uLmNhbnZhcy5jaGFydHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWRzLnB1c2goYy5jaGFydF9pZCBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgYWN0aW9uLmpzb24uY2FudmFzLmNoYXJ0cy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydFN0YXRlcy5wdXNoKGMpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24uanNvbi5jYW52YXMuaWQsXHJcbiAgICAgICAgICAgICAgICBqc29uOiBhY3Rpb24uanNvbixcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFydElkczogaWRzLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRzOiBjaGFydFN0YXRlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvRGFzaGJvYXJkLnRzIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3RzU3RhdGUge1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxuICAgIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcclxuICAgIGRhdGVGb3JtYXR0ZWQ6IHN0cmluZztcclxuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xyXG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XHJcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG5cclxuaW50ZXJmYWNlIFJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRVFVRVNUX1dFQVRIRVJfRk9SRUNBU1RTJyxcclxuICAgIHN0YXJ0RGF0ZUluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZWNlaXZlV2VhdGhlckZvcmVjYXN0c0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUycsXHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG4gICAgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXVxyXG59XHJcblxyXG4vLyBEZWNsYXJlIGEgJ2Rpc2NyaW1pbmF0ZWQgdW5pb24nIHR5cGUuIFRoaXMgZ3VhcmFudGVlcyB0aGF0IGFsbCByZWZlcmVuY2VzIHRvICd0eXBlJyBwcm9wZXJ0aWVzIGNvbnRhaW4gb25lIG9mIHRoZVxyXG4vLyBkZWNsYXJlZCB0eXBlIHN0cmluZ3MgKGFuZCBub3QgYW55IG90aGVyIGFyYml0cmFyeSBzdHJpbmcpLlxyXG50eXBlIEtub3duQWN0aW9uID0gUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24gfCBSZWNlaXZlV2VhdGhlckZvcmVjYXN0c0FjdGlvbjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICByZXF1ZXN0V2VhdGhlckZvcmVjYXN0czogKHN0YXJ0RGF0ZUluZGV4OiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vIE9ubHkgbG9hZCBkYXRhIGlmIGl0J3Mgc29tZXRoaW5nIHdlIGRvbid0IGFscmVhZHkgaGF2ZSAoYW5kIGFyZSBub3QgYWxyZWFkeSBsb2FkaW5nKVxyXG4gICAgICAgIGlmIChzdGFydERhdGVJbmRleCAhPT0gZ2V0U3RhdGUoKS53ZWF0aGVyRm9yZWNhc3RzLnN0YXJ0RGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaChgL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHM/c3RhcnREYXRlSW5kZXg9JHsgc3RhcnREYXRlSW5kZXggfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxXZWF0aGVyRm9yZWNhc3RbXT4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJywgc3RhcnREYXRlSW5kZXg6IHN0YXJ0RGF0ZUluZGV4LCBmb3JlY2FzdHM6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgLy8gRW5zdXJlIHNlcnZlci1zaWRlIHByZXJlbmRlcmluZyB3YWl0cyBmb3IgdGhpcyB0byBjb21wbGV0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX1dFQVRIRVJfRk9SRUNBU1RTJywgc3RhcnREYXRlSW5kZXg6IHN0YXJ0RGF0ZUluZGV4IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSA9IHsgc3RhcnREYXRlSW5kZXg6IG51bGwsIGZvcmVjYXN0czogW10sIGlzTG9hZGluZzogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFdlYXRoZXJGb3JlY2FzdHNTdGF0ZT4gPSAoc3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgIGZvcmVjYXN0czogc3RhdGUuZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWNjZXB0IHRoZSBpbmNvbWluZyBkYXRhIGlmIGl0IG1hdGNoZXMgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3QuIFRoaXMgZW5zdXJlcyB3ZSBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG91dC1vZi1vcmRlciByZXNwb25zZXMuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhcnREYXRlSW5kZXggPT09IHN0YXRlLnN0YXJ0RGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUluZGV4OiBhY3Rpb24uc3RhcnREYXRlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBhY3Rpb24uZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzLnRzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBTdG9yZU1vZHVsZT4oJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG5pbXBvcnQgU2VsZWN0RGF0YVNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0RGF0YVNvdXJjZSc7XHJcbmltcG9ydCBGZXRjaERhdGEgZnJvbSAnLi9jb21wb25lbnRzL0ZldGNoRGF0YSc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gJy4vY29tcG9uZW50cy9Db3VudGVyJztcclxuXHJcbmltcG9ydCBEYXNoYm9hcmRDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL0Rhc2hib2FyZENvbnRhaW5lcic7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBDaGFydENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvQ2hhcnRDb250YWluZXInO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jb21wb25lbnRzL0NoYXJ0JztcclxuXHJcbmltcG9ydCBTZXR0aW5nc0RpYWxvZyBmcm9tICcuL2NvbXBvbmVudHMvU2V0dGluZ3NEaWFsb2cnO1xyXG5pbXBvcnQgT3BlbkNhbnZhcyBmcm9tICcuL2NvbXBvbmVudHMvT3BlbkNhbnZhcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gPExheW91dD5cclxuICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9eyBIb21lIH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvc2V0LWRhdGEtc291cmNlJyBjb21wb25lbnQ9e1NlbGVjdERhdGFTb3VyY2V9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL29wZW4nIGNvbXBvbmVudD17RGFzaGJvYXJkQ29udGFpbmVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9zYXZlJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL3NhdmUtYXMnIGNvbXBvbmVudD17Q291bnRlcn0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvdmFyaWFibGVzJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZpbHRlcicgY29tcG9uZW50PXtDb3VudGVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9jb3VudGVyJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZldGNoZGF0YS86c3RhcnREYXRlSW5kZXg/JyBjb21wb25lbnQ9eyBGZXRjaERhdGEgfSAvPlxyXG48L0xheW91dD47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHBhcmFtcy5sb2NhdGlvbikpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDaGFydFN0YXRlIGZyb20gJy4uL3N0b3JlL0NoYXJ0JztcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XHJcblxyXG50eXBlIENoYXJ0Q29udGFpbmVyUHJvcHMgPSBDaGFydFN0YXRlLkNoYXJ0U3RhdGUgJiB0eXBlb2YgQ2hhcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycyAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+OyBcclxuXHJcbmNsYXNzIENoYXJ0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENoYXJ0Q29udGFpbmVyUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgLy9jb25zdHJ1Y3RvcihDaGFydFByb3BzKSB7XHJcbiAgICAvLyAgICBzdXBlcihDaGFydFByb3BzKTtcclxuICAgICAgIFxyXG4gICAgLy8gICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yKENoYXJ0UHJvcHMpJyk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dCk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2codGhpcy5yZWZzKTtcclxuICAgIC8vICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAvLyAgICAgICAgY2hhcnRfaWQ6IENoYXJ0UHJvcHMuY2hhcnRfaWQsXHJcbiAgICAvLyAgICAgICAgY2hhcnRfdHlwZTogQ2hhcnRQcm9wcy5jaGFydF90eXBlLFxyXG4gICAgLy8gICAgICAgIGNoYXJ0X2luRWRpdDogQ2hhcnRQcm9wcy5jaGFydF9pbkVkaXQsXHJcbiAgICAvLyAgICAgICAgY2hhcnRfbG9hZGluZzogQ2hhcnRQcm9wcy5jaGFydF9sb2FkaW5nLFxyXG4gICAgLy8gICAgfTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKENoYXJ0UHJvcHMuY2hhcnRfaWQpO1xyXG4gICAgLy99XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsTW91bnQoKV9DaGFydENvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWZzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogQ2hhcnRDb250YWluZXJQcm9wcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKClfQ2hhcnRDb250YWluZXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyKClfY2hhcnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcyk7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoYXJ0KCl9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2hhcnQoKSB7XHJcbiAgICAgICAgeyBjb25zb2xlLmxvZygncmVuZGVyQ2hhcnQoKScpOyB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY2hhcnRfaWQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGFydF9pZCkge1xyXG4gICAgICAgICAgICB7IGNvbnNvbGUubG9nKCdyZW5kZXJDaGFydCgpIC0gY2hhcnRfaWQgbm90IG51bGwnKTsgfVxyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jaGFydF9pZH0gPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jaGFydF90eXBlfSA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxPiBkcGJyb3duIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY2hhcnRfaWR9IDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25uZWN0ZWRTdGF0ZWFuZFByb3BzID0gY29ubmVjdCgoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNoYXJ0LCBDaGFydFN0YXRlLmFjdGlvbkNyZWF0b3JzKTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGVkU3RhdGVhbmRQcm9wcyhDaGFydENvbnRhaW5lcikgYXMgdHlwZW9mIENoYXJ0Q29udGFpbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0NoYXJ0Q29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ291bnRlclN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50ZXInO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzIGZyb20gJy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxudHlwZSBDb3VudGVyUHJvcHMgPVxyXG4gICAgQ291bnRlclN0b3JlLkNvdW50ZXJTdGF0ZVxyXG4gICAgJiB0eXBlb2YgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+O1xyXG5cclxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb3VudGVyUHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q291bnRlcjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYSBSZWFjdCBjb21wb25lbnQuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57IHRoaXMucHJvcHMuY291bnQgfTwvc3Ryb25nPjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5wcm9wcy5pbmNyZW1lbnQoKSB9IH0+SW5jcmVtZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShDb3VudGVyKSBhcyB0eXBlb2YgQ291bnRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Db3VudGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBEYXNoYm9hcmRTdGF0ZSBmcm9tICcuLi9zdG9yZS9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcnRDb250YWluZXJcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XHJcblxyXG50eXBlIERhc2hib2FyZFByb3BzID0gRGFzaGJvYXJkU3RhdGUuRGFzaGJvYXJkU3RhdGU7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERhc2hib2FyZFByb3BzLCB7fT4ge1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IoRGFzaGJvYXJkUHJvcHMpIHtcclxuICAgIC8vICAgIHN1cGVyKERhc2hib2FyZFByb3BzKTtcclxuICAgIC8vICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAvLyAgICAgICAgaWQ6IERhc2hib2FyZFByb3BzLmNoYXJ0X2lkLFxyXG4gICAgLy8gICAgICAgIGlzTG9hZGluZzogRGFzaGJvYXJkUHJvcHMuY2hhcnRfdHlwZSxcclxuICAgIC8vICAgICAgICBqc29uOiBEYXNoYm9hcmRQcm9wcy5jaGFydF9pbkVkaXQsXHJcbiAgICAvLyAgICAgICAgY2hhcnRJZHM6IERhc2hib2FyZFByb3BzLmNoYXJ0X2xvYWRpbmcsXHJcbiAgICAvLyAgICAgICAgY2hhcnRzOiBEYXNoYm9hcmRQcm9wcy4uLi5cclxuICAgIC8vICAgIH07XHJcbiAgICAvL31cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihEYXNoYm9hcmRQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKERhc2hib2FyZFByb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXIoKV9EYXNoYm9hcmQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICByZXR1cm4gPGRpdj48c3Bhbj5kcGI8L3NwYW4+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJEYXNoYm9hcmQoKSB9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhcnRfaWQ6IHN0cmluZztcclxuICAgIC8vY2hhcnRfdHlwZTogc3RyaW5nO1xyXG4gICAgLy9jaGFydF9pbkVkaXQ6IHN0cmluZztcclxuICAgIC8vY2hhcnRfbG9hZGluZzogYm9vbGVhbjtcclxuXHJcblxyXG4gICAgLy9rZXkgPSB7IGNoYXJ0Q29udGFpbmVyLmNoYXJ0X2lkIH1cclxuICAgIC8vY2hhcnRfaWQgPSB7IGNoYXJ0Q29udGFpbmVyLmNoYXJ0X2lkIH1cclxuICAgIC8vY2hhcnRfdHlwZSA9IHsgY2hhcnRDb250YWluZXIuY2hhcnRfdHlwZSB9XHJcbiAgICAvL2NoYXJ0X2luRWRpdCA9IHsgY2hhcnRDb250YWluZXIuY2hhcnRfaW5FZGl0IH1cclxuICAgIC8vY2hhcnRfbG9hZGluZyA9IHsgY2hhcnRDb250YWluZXIuY2hhcnRfbG9hZGluZyB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGFzaGJvYXJkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJEYXNoYm9hcmQoKScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoYXJ0SWRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hhcnRJZHMubWFwKGlkID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9J2NvbC1zbS0zIGNhcmRzdG9jayc+e2lkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnaGFzIGNoYXJ0SWRzJyl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGFydHMubWFwKGNoYXJ0Q29udGFpbmVyID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hhcnRDb250YWluZXIuY2hhcnRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0X2lkPXtjaGFydENvbnRhaW5lci5jaGFydF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRfdHlwZT17Y2hhcnRDb250YWluZXIuY2hhcnRfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRfaW5FZGl0PXtjaGFydENvbnRhaW5lci5jaGFydF9pbkVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0X2xvYWRpbmc9e2NoYXJ0Q29udGFpbmVyLmNoYXJ0X2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuLy8gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5jYW52YXMsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbi8vICAgIERhc2hib2FyZFN0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbi8vKShEYXNoYm9hcmQpIGFzIHR5cGVvZiBEYXNoYm9hcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgRGFzaGJvYXJkU3RhdGUgZnJvbSAnLi4vc3RvcmUvRGFzaGJvYXJkJztcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoYm9hcmRcIjtcclxuXHJcbnR5cGUgRGFzaGJvYXJkQ29udGFpbmVyUHJvcHMgPSBEYXNoYm9hcmRTdGF0ZS5EYXNoYm9hcmRTdGF0ZSAmIHR5cGVvZiBEYXNoYm9hcmRTdGF0ZS5hY3Rpb25DcmVhdG9ycyAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+OyBcclxuXHJcbmNsYXNzIERhc2hib2FyZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEYXNoYm9hcmRDb250YWluZXJQcm9wcywge30+IHtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxNb3VudCgpX0Rhc2hib2FyZENvbnRhaW5lcicpO1xyXG4gICAgICAgIGxldCBpZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0RGFzaGJvYXJkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogRGFzaGJvYXJkQ29udGFpbmVyUHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpX0Rhc2hib2FyZENvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdERhc2hib2FyZChuZXh0UHJvcHMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICA8RGFzaGJvYXJkIGlkPXt0aGlzLnByb3BzLmlkfSBpc0xvYWRpbmc9e3RoaXMucHJvcHMuaXNMb2FkaW5nfSBqc29uPXt0aGlzLnByb3BzLmpzb259IGNoYXJ0SWRzPXt0aGlzLnByb3BzLmNoYXJ0SWRzfSBjaGFydHM9e3RoaXMucHJvcHMuY2hhcnRzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5pZH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmpzb24pfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuaXNMb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJMb2FkaW5nLi4uXCIpIDogUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJOb3QgbG9hZGluZy4uLlwiKX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25uZWN0ZWRTdGF0ZWFuZFByb3BzID0gY29ubmVjdCgoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmRhc2hib2FyZCwgRGFzaGJvYXJkU3RhdGUuYWN0aW9uQ3JlYXRvcnMpO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0ZWRTdGF0ZWFuZFByb3BzKERhc2hib2FyZENvbnRhaW5lcikgYXMgdHlwZW9mIERhc2hib2FyZENvbnRhaW5lcjtcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkQ29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0c1N0YXRlIGZyb20gJy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxyXG50eXBlIFdlYXRoZXJGb3JlY2FzdFByb3BzID1cclxuICAgIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGUgICAgICAgIC8vIC4uLiBzdGF0ZSB3ZSd2ZSByZXF1ZXN0ZWQgZnJvbSB0aGUgUmVkdXggc3RvcmVcclxuICAgICYgdHlwZW9mIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgICAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7IHN0YXJ0RGF0ZUluZGV4OiBzdHJpbmcgfT47IC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVycyAgIFxyXG5cclxuY2xhc3MgRmV0Y2hEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdlYXRoZXJGb3JlY2FzdFByb3BzLCB7fT4ge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGFkZGVkIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFdlYXRoZXJGb3JlY2FzdFByb3BzKSB7XHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIGluY29taW5nIHByb3BzIChlLmcuLCByb3V0ZSBwYXJhbXMpIGNoYW5nZVxyXG4gICAgICAgIGxldCBzdGFydERhdGVJbmRleCA9IHBhcnNlSW50KG5leHRQcm9wcy5tYXRjaC5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHdvcmtpbmcgd2l0aCBVUkwgcGFyYW1ldGVycy48L3A+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJGb3JlY2FzdHNUYWJsZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlclBhZ2luYXRpb24oKSB9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRm9yZWNhc3RzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcC4gKEMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcmVjYXN0cy5tYXAoZm9yZWNhc3QgPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnN1bW1hcnkgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUGFnaW5hdGlvbigpIHtcclxuICAgICAgICBsZXQgcHJldlN0YXJ0RGF0ZUluZGV4ID0gdGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCAtIDU7XHJcbiAgICAgICAgbGV0IG5leHRTdGFydERhdGVJbmRleCA9IHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggKyA1O1xyXG5cclxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjbGVhcmZpeCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IHB1bGwtbGVmdCcgdG89eyBgL2ZldGNoZGF0YS8keyBwcmV2U3RhcnREYXRlSW5kZXggfWAgfT5QcmV2aW91czwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodCcgdG89eyBgL2ZldGNoZGF0YS8keyBuZXh0U3RhcnREYXRlSW5kZXggfWAgfT5OZXh0PC9MaW5rPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNMb2FkaW5nID8gPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj4gOiBbXSB9XHJcbiAgICAgICAgPC9wPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUud2VhdGhlckZvcmVjYXN0cywgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgICAgICAgICAgICAgICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4pKEZldGNoRGF0YSkgYXMgdHlwZW9mIEZldGNoRGF0YTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzPHt9Piwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5PcHRpb25zPC9oMz5cclxuICAgICAgICAgICAgPHA+PGJyIC8+PC9wPlxyXG4gICAgICAgICAgICA8cD5TZXQgZGF0YSBzb3VyY2U8L3A+XHJcbiAgICAgICAgICAgIDxwPkFkZCByZWxhdGVkIGRhdGEgc291cmNlLi4uPC9wPlxyXG4gICAgICAgICAgICA8cD5PcGVuIGNhbnZhcy4uLjwvcD5cclxuICAgICAgICAgICAgPHA+U2F2ZSBjYW52YXM8L3A+XHJcbiAgICAgICAgICAgIDxwPlNhdmUgY2FudmFzIGFzLi4uPC9wPlxyXG4gICAgICAgICAgICA8cD48YnIgLz48L3A+XHJcbiAgICAgICAgICAgIDxwPlNhdmUgb3V0cHV0IGFzIEhUTUw8L3A+XHJcbiAgICAgICAgICAgIDxwPlNlbmQgb3V0cHV0IHRvIDwvcD5cclxuICAgICAgICAgICAgPHA+RXhwb3J0IGRhdGE8L3A+XHJcbiAgICAgICAgICAgIDxwPkFkZCBBbmFseXNpcyBnYWRnZXQ8L3A+XHJcbiAgICAgICAgICAgIDxwPkFkZCBTdGF0Q2FsYyBjYWxjdWxhdG9yPC9wPlxyXG4gICAgICAgICAgICA8cD5BZGQgUmVwb3J0IGdhZGdldDwvcD5cclxuICAgICAgICAgICAgPHA+PGJyIC8+PC9wPlxyXG4gICAgICAgICAgICA8cD5TaG93IGRhdGEgZGljdGlvbmFyeTwvcD5cclxuICAgICAgICAgICAgPHA+Q2FudmFzIFByb3BlcnRpZXM8L3A+XHJcbiAgICAgICAgICAgIDxwPkF1dG8tYXJyYW5nZSBnYWRnZXRzPC9wPlxyXG4gICAgICAgICAgICA8cD5SZWZyZXNoIGRhdGEgc291cmNlPC9wPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TWVudSB9IGZyb20gJy4vTmF2TWVudSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0zJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTknPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4tbmF2Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL0NvbnRlbnQvSW1hZ2VzL2VpLnBuZ1wiIGlkPSdlaS1pY29uJyAvPjxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17Jy8nfT5FcGkgSW5mbyBBbmFseXNpczwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyZml4Jz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdiBuYXZiYXItbmF2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZXhhY3QgdG89eyAnLycgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+T3B0aW9uczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eyAnL3NldC1kYXRhLXNvdXJjZScgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+U2V0IERhdGEgU291cmNlPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9vcGVuJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPk9wZW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL3NhdmUnfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+U2F2ZTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvc2F2ZS1hcyd9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5TYXZlIEFzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy92YXJpYWJsZXMnfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+VmFyaWFibGVzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9mZXRjaGRhdGEnfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+RmlsdGVyPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3REYXRhU291cmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgzPlNlbGVjdCBEYXRhIFNvdXJjZTwvaDM+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL1NlbGVjdERhdGFTb3VyY2UudHN4IiwiaW1wb3J0ICogYXMgRGFzaGJvYXJkU3RvcmUgZnJvbSAnLi9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgKiBhcyBDaGFydFN0b3JlIGZyb20gJy4vQ2hhcnQnO1xyXG5pbXBvcnQgKiBhcyBDb3VudGVyU3RvcmUgZnJvbSAnLi9Db3VudGVyJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0c1N0b3JlIGZyb20gJy4vV2VhdGhlckZvcmVjYXN0cyc7XHJcbmltcG9ydCAqIGFzIFNldHRpbmdzU3RvcmUgZnJvbSAnLi9Db3VudGVyJztcclxuXHJcbi8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgICBkYXNoYm9hcmQ6IERhc2hib2FyZFN0b3JlLkRhc2hib2FyZFN0YXRlLFxyXG4gICAgY2hhcnQ6IENoYXJ0U3RvcmUuQ2hhcnRTdGF0ZSxcclxuICAgIGNvdW50ZXI6IENvdW50ZXJTdG9yZS5Db3VudGVyU3RhdGUsXHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZS5Db3VudGVyU3RhdGUsXHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzU3RvcmUuV2VhdGhlckZvcmVjYXN0c1N0YXRlXHJcbn1cclxuXHJcbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgZGFzaGJvYXJkOiBEYXNoYm9hcmRTdG9yZS5yZWR1Y2VyLFxyXG4gICAgY2hhcnQ6IENoYXJ0U3RvcmUucmVkdWNlcixcclxuICAgIGNvdW50ZXI6IENvdW50ZXJTdG9yZS5yZWR1Y2VyLFxyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUucmVkdWNlcixcclxuICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHNTdG9yZS5yZWR1Y2VyXHJcbn07XHJcblxyXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcclxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQ3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9