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
exports.actionCreators = {};
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
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    };
    Chart.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('componentWillReceiveProps()_Chart');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    };
    //static propTypes = {
    //    //chart: React.PropTypes.shape({
    //    //    chart_id: React.PropTypes.string,
    //    //    chart_type: React.PropTypes.string,
    //    //    chart_inEdit: React.PropTypes.string,
    //    //    chart_loading: React.PropTypes.string,
    //    //}).isRequired,
    //    //onSave: React.PropTypes.func.isRequired,
    //    //onCancel: React.PropTypes.func.isRequired,
    //};
    //constructor(props) {
    //    super(props);
    //    //this.state = {
    //    //    chart_id: this.props.chart_id,
    //    //    chart_type: this.props.chart_type,
    //    //    chart_inEdit: this.props.chart_inEdit,
    //    //    chart_loading: this.props.chart_loading,
    //    //};
    //}
    //                <button onClick={this.handleStartEdit.bind(this)}>Eder</button>
    //<div className='rate-control red' rate-value="95"><p>92%</p></div>
    //<div>
    //    <h1>{this.props.chart_id} </h1>
    //</div>;
    Chart.prototype.render = function () {
        return React.createElement("div", null, this.renderChart());
    };
    Chart.prototype.renderChart = function () {
        if (this) {
            console.log("renderChart()");
            return React.createElement("div", null,
                React.createElement("h3", null,
                    "[ chart id=",
                    this.props.chart_id,
                    " ]"));
        }
    };
    Chart.prototype.handleStartEdit = function () {
    };
    return Chart;
}(React.Component));
var ChartContainer = react_redux_1.connect(function (state) { return state; }, ChartState.actionCreators);
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
        var id = "";
        this.props.requestDashboard(id);
    };
    Dashboard.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('componentWillReceiveProps()_Dashboard');
        this.props.requestDashboard(nextProps.id);
    };
    Dashboard.prototype.render = function () {
        console.log('render()_Dashboard');
        console.log(this.props);
        return React.createElement("div", null,
            React.createElement("span", null, "dpb"),
            this.renderDashboard());
    };
    //                    {this.props.chartIds.map(id =>
    //    <div key={id} className='col-sm-3 cardstock'>{id}</div>
    //)
    //}
    Dashboard.prototype.renderDashboard = function () {
        var _this = this;
        console.log('renderDashboard()');
        console.log(this.props);
        if (this.props.chartIds) {
            return React.createElement("div", null,
                console.log('has chartIds'),
                this.props.charts.map(function (chart) {
                    return React.createElement("div", { key: chart.chart_id, className: 'col-sm-3 cardstock' },
                        React.createElement(Chart_1.default, { key: chart.chart_id, chart_id: chart.chart_id, chart_type: chart.chart_type, chart_inEdit: chart.chart_inEdit, chart_loading: chart.chart_loading, match: _this.props.match, location: _this.props.location, history: _this.props.history }));
                }),
                "}");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzI0NzYxNGQ2NTRhOGVhMGVhYjEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NoYXJ0LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ2hhcnQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NvdW50ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL1NlbGVjdERhdGFTb3VyY2UudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Qzs7Ozs7OztBQ3hCRiwrQzs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMjQ3NjE0ZDY1NGE4ZWEwZWFiMSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQ1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclN0YXRlIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG4vLyBVc2UgQHR5cGVOYW1lIGFuZCBpc0FjdGlvblR5cGUgZm9yIHR5cGUgZGV0ZWN0aW9uIHRoYXQgd29ya3MgZXZlbiBhZnRlciBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi5cclxuXHJcbmludGVyZmFjZSBJbmNyZW1lbnRDb3VudEFjdGlvbiB7IHR5cGU6ICdJTkNSRU1FTlRfQ09VTlQnIH1cclxuaW50ZXJmYWNlIERlY3JlbWVudENvdW50QWN0aW9uIHsgdHlwZTogJ0RFQ1JFTUVOVF9DT1VOVCcgfVxyXG5cclxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcclxuLy8gZGVjbGFyZWQgdHlwZSBzdHJpbmdzIChhbmQgbm90IGFueSBvdGhlciBhcmJpdHJhcnkgc3RyaW5nKS5cclxudHlwZSBLbm93bkFjdGlvbiA9IEluY3JlbWVudENvdW50QWN0aW9uIHwgRGVjcmVtZW50Q291bnRBY3Rpb247XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTiBDUkVBVE9SUyAtIFRoZXNlIGFyZSBmdW5jdGlvbnMgZXhwb3NlZCB0byBVSSBjb21wb25lbnRzIHRoYXQgd2lsbCB0cmlnZ2VyIGEgc3RhdGUgdHJhbnNpdGlvbi5cclxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgaW5jcmVtZW50OiAoKSA9PiA8SW5jcmVtZW50Q291bnRBY3Rpb24+eyB0eXBlOiAnSU5DUkVNRU5UX0NPVU5UJyB9LFxyXG4gICAgZGVjcmVtZW50OiAoKSA9PiA8RGVjcmVtZW50Q291bnRBY3Rpb24+eyB0eXBlOiAnREVDUkVNRU5UX0NPVU5UJyB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDb3VudGVyU3RhdGU+ID0gKHN0YXRlOiBDb3VudGVyU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkNSRU1FTlRfQ09VTlQnOlxyXG4gICAgICAgICAgICByZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH07XHJcbiAgICAgICAgY2FzZSAnREVDUkVNRU5UX0NPVU5UJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgeyBjb3VudDogMCB9O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0U3RhdGUge1xyXG4gICAgY2hhcnRfaWQ6IHN0cmluZztcclxuICAgIGNoYXJ0X3R5cGU6IHN0cmluZztcclxuICAgIGNoYXJ0X2luRWRpdDogc3RyaW5nO1xyXG4gICAgY2hhcnRfbG9hZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlcXVlc3RDaGFydEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVRVUVTVF9DSEFSVCcsXHJcbiAgICBjaGFydF9pZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVjZWl2ZUNoYXJ0QWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRUNFSVZFX0NIQVJUJztcclxuICAgIGNoYXJ0X2lkOiBzdHJpbmc7XHJcbiAgICBjaGFydF9qc29uOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBHZXRDaGFydEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnR0VUX0NIQVJUJztcclxuICAgIGNoYXJ0X2lkOiBzdHJpbmc7XHJcbiAgICBjaGFydF90eXBlOiBzdHJpbmc7XHJcbiAgICBjaGFydF9pbkVkaXQ6IHN0cmluZztcclxuICAgIGNoYXJ0X2xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgQ2hhcnRBY3Rpb24gPSBSZXF1ZXN0Q2hhcnRBY3Rpb24gfCBSZWNlaXZlQ2hhcnRBY3Rpb24gfCBHZXRDaGFydEFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIC8vcmVxdWVzdENoYXJ0OiAoaWQ6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPENoYXJ0QWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAvLyAgICBpZiAoaWQgIT09IGdldFN0YXRlKCkuY2hhcnQuY2hhcnRfaWQpIHtcclxuICAgIC8vICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvU2V0dGluZ3NEYXRhL0NoYXJ0P2lkPSR7IGlkIH1gKVxyXG4gICAgLy8gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxhbnk+KVxyXG4gICAgLy8gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfQ0hBUlQnLCBjaGFydF9pZDogaWQsIGNoYXJ0X2pzb246IGRhdGEgfSk7XHJcbiAgICAvLyAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgXHJcbiAgICAvLyAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVRVUVTVF9DSEFSVCcsIGNoYXJ0X2lkOiBpZCB9KTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfSxcclxuICAgIC8vZ2V0Q2hhcnQ6IChpZDogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248Q2hhcnRBY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgIC8vICAgIGlmIChpZCAhPT0gZ2V0U3RhdGUoKS5jaGFydC5jaGFydF9pZCkge1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy99XHJcbn07XHJcblxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBDaGFydFN0YXRlID0ge1xyXG4gICAgY2hhcnRfaWQ6IG51bGwsXHJcbiAgICBjaGFydF90eXBlOiBudWxsLFxyXG4gICAgY2hhcnRfaW5FZGl0OiBudWxsLFxyXG4gICAgY2hhcnRfbG9hZGluZzogZmFsc2UsXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Q2hhcnRTdGF0ZT4gPSAoc3RhdGU6IENoYXJ0U3RhdGUsIGFjdGlvbjogQ2hhcnRBY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdSRVFVRVNUX0NIQVJUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2lkOiBzdGF0ZS5jaGFydF9pZCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X3R5cGU6IHN0YXRlLmNoYXJ0X3R5cGUsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9pbkVkaXQ6IHN0YXRlLmNoYXJ0X2luRWRpdCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2xvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdSRUNFSVZFX0NIQVJUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0X2lkOiBhY3Rpb24uY2hhcnRfaWQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9qc29uOiBhY3Rpb24uY2hhcnRfanNvbixcclxuICAgICAgICAgICAgICAgIGNoYXJ0X3R5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9pbkVkaXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9sb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0dFVF9DSEFSVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydF9pZDogYWN0aW9uLmNoYXJ0X2lkLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfdHlwZTogYWN0aW9uLmNoYXJ0X3R5cGUsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9pbkVkaXQ6IGFjdGlvbi5jaGFydF9pbkVkaXQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9sb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9DaGFydC50cyIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBDaGFydFN0YXRlIH0gZnJvbSAnQ2xpZW50QXBwL3N0b3JlL0NoYXJ0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkU3RhdGUge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIGpzb246IGFueTtcclxuICAgIGNoYXJ0SWRzOiBzdHJpbmdbXTtcclxuICAgIGNoYXJ0czogQ2hhcnRTdGF0ZVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdERhc2hib2FyZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVRVUVTVF9EQVNIQk9BUkQnO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVEYXNoYm9hcmRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFQ0VJVkVfREFTSEJPQVJEJztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBqc29uOiBhbnk7XHJcbiAgICBjaGFydHM6IGFueTtcclxufVxyXG5cclxudHlwZSBEYXNoYm9hcmRBY3Rpb24gPSBSZXF1ZXN0RGFzaGJvYXJkQWN0aW9uIHwgUmVjZWl2ZURhc2hib2FyZEFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3REYXNoYm9hcmQ6IChpZDogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248RGFzaGJvYXJkQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICE9PSBnZXRTdGF0ZSgpLmRhc2hib2FyZC5pZCkge1xyXG4gICAgICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvU2V0dGluZ3NEYXRhL0Rhc2hib2FyZD9pZD0keyBpZCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPGFueT4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX0RBU0hCT0FSRCcsIGlkOiBpZCwganNvbjpkYXRhLCBjaGFydHM6IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfREFTSEJPQVJEJywgaWQ6IGlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IERhc2hib2FyZFN0YXRlID0ge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAganNvbjogbnVsbCxcclxuICAgIGNoYXJ0SWRzOiBudWxsLFxyXG4gICAgY2hhcnRzOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxEYXNoYm9hcmRTdGF0ZT4gPSAoc3RhdGU6IERhc2hib2FyZFN0YXRlLCBhY3Rpb246IERhc2hib2FyZEFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlICdSRVFVRVNUX0RBU0hCT0FSRCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAganNvbjogc3RhdGUuanNvbixcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJ0SWRzOiBzdGF0ZS5jaGFydElkcyxcclxuICAgICAgICAgICAgICAgIGNoYXJ0czogc3RhdGUuY2hhcnRzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFQ0VJVkVfREFTSEJPQVJEJzpcclxuICAgICAgICAgICAgbGV0IGlkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNoYXJ0U3RhdGVzOiBDaGFydFN0YXRlW10gPSBbXTsgXHJcblxyXG4gICAgICAgICAgICBhY3Rpb24uanNvbi5jYW52YXMuY2hhcnRzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlkcy5wdXNoKGMuY2hhcnRfaWQgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGFjdGlvbi5qc29uLmNhbnZhcy5jaGFydHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRTdGF0ZXMucHVzaChjKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uLmpzb24uY2FudmFzLmlkLFxyXG4gICAgICAgICAgICAgICAganNvbjogYWN0aW9uLmpzb24sXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRJZHM6IGlkcyxcclxuICAgICAgICAgICAgICAgIGNoYXJ0czogY2hhcnRTdGF0ZXNcclxuICAgICAgICAgICAgfTtcclxuICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0Rhc2hib2FyZC50cyIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0c1N0YXRlIHtcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIHN0YXJ0RGF0ZUluZGV4OiBudW1iZXI7XHJcbiAgICBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XHJcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XHJcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcclxuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xyXG4gICAgc3VtbWFyeTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT05TIC0gVGhlc2UgYXJlIHNlcmlhbGl6YWJsZSAoaGVuY2UgcmVwbGF5YWJsZSkgZGVzY3JpcHRpb25zIG9mIHN0YXRlIHRyYW5zaXRpb25zLlxyXG4vLyBUaGV5IGRvIG5vdCB0aGVtc2VsdmVzIGhhdmUgYW55IHNpZGUtZWZmZWN0czsgdGhleSBqdXN0IGRlc2NyaWJlIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIHRvIGhhcHBlbi5cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUycsXHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVjZWl2ZVdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnLFxyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxuICAgIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W11cclxufVxyXG5cclxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcclxuLy8gZGVjbGFyZWQgdHlwZSBzdHJpbmdzIChhbmQgbm90IGFueSBvdGhlciBhcmJpdHJhcnkgc3RyaW5nKS5cclxudHlwZSBLbm93bkFjdGlvbiA9IFJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzQWN0aW9uIHwgUmVjZWl2ZVdlYXRoZXJGb3JlY2FzdHNBY3Rpb247XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTiBDUkVBVE9SUyAtIFRoZXNlIGFyZSBmdW5jdGlvbnMgZXhwb3NlZCB0byBVSSBjb21wb25lbnRzIHRoYXQgd2lsbCB0cmlnZ2VyIGEgc3RhdGUgdHJhbnNpdGlvbi5cclxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgcmVxdWVzdFdlYXRoZXJGb3JlY2FzdHM6IChzdGFydERhdGVJbmRleDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAvLyBPbmx5IGxvYWQgZGF0YSBpZiBpdCdzIHNvbWV0aGluZyB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgKGFuZCBhcmUgbm90IGFscmVhZHkgbG9hZGluZylcclxuICAgICAgICBpZiAoc3RhcnREYXRlSW5kZXggIT09IGdldFN0YXRlKCkud2VhdGhlckZvcmVjYXN0cy5zdGFydERhdGVJbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzP3N0YXJ0RGF0ZUluZGV4PSR7IHN0YXJ0RGF0ZUluZGV4IH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8V2VhdGhlckZvcmVjYXN0W10+KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUycsIHN0YXJ0RGF0ZUluZGV4OiBzdGFydERhdGVJbmRleCwgZm9yZWNhc3RzOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUycsIHN0YXJ0RGF0ZUluZGV4OiBzdGFydERhdGVJbmRleCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgPSB7IHN0YXJ0RGF0ZUluZGV4OiBudWxsLCBmb3JlY2FzdHM6IFtdLCBpc0xvYWRpbmc6IGZhbHNlIH07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxXZWF0aGVyRm9yZWNhc3RzU3RhdGU+ID0gKHN0YXRlOiBXZWF0aGVyRm9yZWNhc3RzU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdSRVFVRVNUX1dFQVRIRVJfRk9SRUNBU1RTJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUluZGV4OiBhY3Rpb24uc3RhcnREYXRlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBmb3JlY2FzdHM6IHN0YXRlLmZvcmVjYXN0cyxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnOlxyXG4gICAgICAgICAgICAvLyBPbmx5IGFjY2VwdCB0aGUgaW5jb21pbmcgZGF0YSBpZiBpdCBtYXRjaGVzIHRoZSBtb3N0IHJlY2VudCByZXF1ZXN0LiBUaGlzIGVuc3VyZXMgd2UgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdXQtb2Ytb3JkZXIgcmVzcG9uc2VzLlxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnN0YXJ0RGF0ZUluZGV4ID09PSBzdGF0ZS5zdGFydERhdGVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVJbmRleDogYWN0aW9uLnN0YXJ0RGF0ZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmVjYXN0czogYWN0aW9uLmZvcmVjYXN0cyxcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvV2VhdGhlckZvcmVjYXN0cy50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIFN0b3JlTW9kdWxlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShoaXN0b3J5OiBIaXN0b3J5LCBpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBTZWxlY3REYXRhU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3REYXRhU291cmNlJztcclxuaW1wb3J0IEZldGNoRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvRmV0Y2hEYXRhJztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZXInO1xyXG5cclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvRGFzaGJvYXJkJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4vY29tcG9uZW50cy9DaGFydCc7XHJcblxyXG5pbXBvcnQgU2V0dGluZ3NEaWFsb2cgZnJvbSAnLi9jb21wb25lbnRzL1NldHRpbmdzRGlhbG9nJztcclxuaW1wb3J0IE9wZW5DYW52YXMgZnJvbSAnLi9jb21wb25lbnRzL09wZW5DYW52YXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IDxMYXlvdXQ+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXsgSG9tZSB9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL3NldC1kYXRhLXNvdXJjZScgY29tcG9uZW50PXtTZWxlY3REYXRhU291cmNlfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9vcGVuJyBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvc2F2ZScgY29tcG9uZW50PXtDb3VudGVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9zYXZlLWFzJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL3ZhcmlhYmxlcycgY29tcG9uZW50PXtDb3VudGVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9maWx0ZXInIGNvbXBvbmVudD17Q291bnRlcn0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvY291bnRlcicgY29tcG9uZW50PXtDb3VudGVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9mZXRjaGRhdGEvOnN0YXJ0RGF0ZUluZGV4PycgY29tcG9uZW50PXsgRmV0Y2hEYXRhIH0gLz5cclxuPC9MYXlvdXQ+O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBQcmVwYXJlIFJlZHV4IHN0b3JlIHdpdGggaW4tbWVtb3J5IGhpc3RvcnksIGFuZCBkaXNwYXRjaCBhIG5hdmlnYXRpb24gZXZlbnRcclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBpbmNvbWluZyBVUkxcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwbGFjZShwYXJhbXMubG9jYXRpb24pKTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHBlcmZvcm0gYW4gaW5pdGFsIHJlbmRlciB0aGF0IHdpbGxcclxuICAgICAgICAvLyBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgIGNvbnN0IHJvdXRlckNvbnRleHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgY29udGV4dD17IHJvdXRlckNvbnRleHQgfSBsb2NhdGlvbj17IHBhcmFtcy5sb2NhdGlvbi5wYXRoIH0gY2hpbGRyZW49eyByb3V0ZXMgfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQudXJsKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcm91dGVyQ29udGV4dC51cmwgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT25jZSBhbnkgYXN5bmMgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ2hhcnRTdGF0ZSBmcm9tICcuLi9zdG9yZS9DaGFydCc7XHJcblxyXG50eXBlIENoYXJ0UHJvcHMgPSBDaGFydFN0YXRlLkNoYXJ0U3RhdGUgJiB0eXBlb2YgQ2hhcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycyAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+OyBcclxuXHJcbmNsYXNzIENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENoYXJ0UHJvcHMsIHt9PiB7XHJcblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbE1vdW50KClfQ2hhcnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IENoYXJ0UHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpX0NoYXJ0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlZnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyAgICAvL2NoYXJ0OiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8vICAgIC8vICAgIGNoYXJ0X2lkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vICAgIC8vICAgIGNoYXJ0X3R5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gICAgLy8gICAgY2hhcnRfaW5FZGl0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vICAgIC8vICAgIGNoYXJ0X2xvYWRpbmc6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gICAgLy99KS5pc1JlcXVpcmVkLFxuICAgIC8vICAgIC8vb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIC8vICAgIC8vb25DYW5jZWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgLy99O1xuXG4gICAgLy9jb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIC8vICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vICAgIC8vdGhpcy5zdGF0ZSA9IHtcbiAgICAvLyAgICAvLyAgICBjaGFydF9pZDogdGhpcy5wcm9wcy5jaGFydF9pZCxcbiAgICAvLyAgICAvLyAgICBjaGFydF90eXBlOiB0aGlzLnByb3BzLmNoYXJ0X3R5cGUsXG4gICAgLy8gICAgLy8gICAgY2hhcnRfaW5FZGl0OiB0aGlzLnByb3BzLmNoYXJ0X2luRWRpdCxcbiAgICAvLyAgICAvLyAgICBjaGFydF9sb2FkaW5nOiB0aGlzLnByb3BzLmNoYXJ0X2xvYWRpbmcsXG4gICAgLy8gICAgLy99O1xuICAgIC8vfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdGFydEVkaXQuYmluZCh0aGlzKX0+RWRlcjwvYnV0dG9uPlxyXG4gICAgLy88ZGl2IGNsYXNzTmFtZT0ncmF0ZS1jb250cm9sIHJlZCcgcmF0ZS12YWx1ZT1cIjk1XCI+PHA+OTIlPC9wPjwvZGl2PlxyXG4gICAgLy88ZGl2PlxyXG4gICAgLy8gICAgPGgxPnt0aGlzLnByb3BzLmNoYXJ0X2lkfSA8L2gxPlxyXG4gICAgLy88L2Rpdj47XHJcblxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoYXJ0KCl9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2hhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJDaGFydCgpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMz5bIGNoYXJ0IGlkPXt0aGlzLnByb3BzLmNoYXJ0X2lkfSBdPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdGFydEVkaXQoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0Q29udGFpbmVyID0gY29ubmVjdCgoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLCBDaGFydFN0YXRlLmFjdGlvbkNyZWF0b3JzKTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDb250YWluZXIoQ2hhcnQpIGFzIHR5cGVvZiBDaGFydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9DaGFydC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXJTdG9yZSBmcm9tICcuLi9zdG9yZS9Db3VudGVyJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcclxuXHJcbnR5cGUgQ291bnRlclByb3BzID1cclxuICAgIENvdW50ZXJTdG9yZS5Db3VudGVyU3RhdGVcclxuICAgICYgdHlwZW9mIENvdW50ZXJTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q291bnRlclByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNvdW50ZXI8L2gxPlxyXG5cclxuICAgICAgICAgICAgPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGEgUmVhY3QgY29tcG9uZW50LjwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+eyB0aGlzLnByb3BzLmNvdW50IH08L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMucHJvcHMuaW5jcmVtZW50KCkgfSB9PkluY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgQ291bnRlclN0b3JlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoQ291bnRlcikgYXMgdHlwZW9mIENvdW50ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIERhc2hib2FyZFN0YXRlIGZyb20gJy4uL3N0b3JlL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0JztcclxuXHJcbnR5cGUgRGFzaGJvYXJkUHJvcHMgPSBEYXNoYm9hcmRTdGF0ZS5EYXNoYm9hcmRTdGF0ZSAmIHR5cGVvZiBEYXNoYm9hcmRTdGF0ZS5hY3Rpb25DcmVhdG9ycyAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+OyBcclxuXHJcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEYXNoYm9hcmRQcm9wcywge30+IHtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxNb3VudCgpX0Rhc2hib2FyZCcpO1xyXG4gICAgICAgIGxldCBpZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0RGFzaGJvYXJkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogRGFzaGJvYXJkUHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpX0Rhc2hib2FyZCcpO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdERhc2hib2FyZChuZXh0UHJvcHMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlcigpX0Rhc2hib2FyZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjxzcGFuPmRwYjwvc3Bhbj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyRGFzaGJvYXJkKCl9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGFydElkcy5tYXAoaWQgPT5cclxuLy8gICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9J2NvbC1zbS0zIGNhcmRzdG9jayc+e2lkfTwvZGl2PlxyXG4vLylcclxuLy99XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGFzaGJvYXJkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJEYXNoYm9hcmQoKScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoYXJ0SWRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdoYXMgY2hhcnRJZHMnKX1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYXJ0cy5tYXAoY2hhcnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NoYXJ0LmNoYXJ0X2lkfSBjbGFzc05hbWU9J2NvbC1zbS0zIGNhcmRzdG9jayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoYXJ0LmNoYXJ0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0X2lkPXtjaGFydC5jaGFydF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydF90eXBlPXtjaGFydC5jaGFydF90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0X2luRWRpdD17Y2hhcnQuY2hhcnRfaW5FZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0X2xvYWRpbmc9e2NoYXJ0LmNoYXJ0X2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g9e3RoaXMucHJvcHMubWF0Y2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgRGFzaGJvYXJkQ29udGFpbmVyID0gY29ubmVjdCgoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmRhc2hib2FyZCwgRGFzaGJvYXJkU3RhdGUuYWN0aW9uQ3JlYXRvcnMpO1xyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRDb250YWluZXIoRGFzaGJvYXJkKSBhcyB0eXBlb2YgRGFzaGJvYXJkO1xyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgZnJvbSAnLi4vc3RvcmUvV2VhdGhlckZvcmVjYXN0cyc7XHJcblxyXG4vLyBBdCBydW50aW1lLCBSZWR1eCB3aWxsIG1lcmdlIHRvZ2V0aGVyLi4uXHJcbnR5cGUgV2VhdGhlckZvcmVjYXN0UHJvcHMgPVxyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLldlYXRoZXJGb3JlY2FzdHNTdGF0ZSAgICAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxyXG4gICAgJiB0eXBlb2YgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgLy8gLi4uIHBsdXMgYWN0aW9uIGNyZWF0b3JzIHdlJ3ZlIHJlcXVlc3RlZFxyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgc3RhcnREYXRlSW5kZXg6IHN0cmluZyB9PjsgLy8gLi4uIHBsdXMgaW5jb21pbmcgcm91dGluZyBwYXJhbWV0ZXJzICAgXHJcblxyXG5jbGFzcyBGZXRjaERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8V2VhdGhlckZvcmVjYXN0UHJvcHMsIHt9PiB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgYWRkZWQgdG8gdGhlIHBhZ2VcclxuICAgICAgICBsZXQgc3RhcnREYXRlSW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzKHN0YXJ0RGF0ZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogV2VhdGhlckZvcmVjYXN0UHJvcHMpIHtcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gaW5jb21pbmcgcHJvcHMgKGUuZy4sIHJvdXRlIHBhcmFtcykgY2hhbmdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQobmV4dFByb3BzLm1hdGNoLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzKHN0YXJ0RGF0ZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgd29ya2luZyB3aXRoIFVSTCBwYXJhbWV0ZXJzLjwvcD5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZvcmVjYXN0c1RhYmxlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUGFnaW5hdGlvbigpIH1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJGb3JlY2FzdHNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZm9yZWNhc3RzLm1hcChmb3JlY2FzdCA9PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3Quc3VtbWFyeSB9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJQYWdpbmF0aW9uKCkge1xyXG4gICAgICAgIGxldCBwcmV2U3RhcnREYXRlSW5kZXggPSB0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4IC0gNTtcclxuICAgICAgICBsZXQgbmV4dFN0YXJ0RGF0ZUluZGV4ID0gdGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCArIDU7XHJcblxyXG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NsZWFyZml4IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgcHVsbC1sZWZ0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IHByZXZTdGFydERhdGVJbmRleCB9YCB9PlByZXZpb3VzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IG5leHRTdGFydERhdGVJbmRleCB9YCB9Pk5leHQ8L0xpbms+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IFtdIH1cclxuICAgICAgICA8L3A+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS53ZWF0aGVyRm9yZWNhc3RzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoRmV0Y2hEYXRhKSBhcyB0eXBlb2YgRmV0Y2hEYXRhO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9GZXRjaERhdGEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgzPk9wdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8cD48YnIgLz48L3A+XHJcbiAgICAgICAgICAgIDxwPlNldCBkYXRhIHNvdXJjZTwvcD5cclxuICAgICAgICAgICAgPHA+QWRkIHJlbGF0ZWQgZGF0YSBzb3VyY2UuLi48L3A+XHJcbiAgICAgICAgICAgIDxwPk9wZW4gY2FudmFzLi4uPC9wPlxyXG4gICAgICAgICAgICA8cD5TYXZlIGNhbnZhczwvcD5cclxuICAgICAgICAgICAgPHA+U2F2ZSBjYW52YXMgYXMuLi48L3A+XHJcbiAgICAgICAgICAgIDxwPjxiciAvPjwvcD5cclxuICAgICAgICAgICAgPHA+U2F2ZSBvdXRwdXQgYXMgSFRNTDwvcD5cclxuICAgICAgICAgICAgPHA+U2VuZCBvdXRwdXQgdG8gPC9wPlxyXG4gICAgICAgICAgICA8cD5FeHBvcnQgZGF0YTwvcD5cclxuICAgICAgICAgICAgPHA+QWRkIEFuYWx5c2lzIGdhZGdldDwvcD5cclxuICAgICAgICAgICAgPHA+QWRkIFN0YXRDYWxjIGNhbGN1bGF0b3I8L3A+XHJcbiAgICAgICAgICAgIDxwPkFkZCBSZXBvcnQgZ2FkZ2V0PC9wPlxyXG4gICAgICAgICAgICA8cD48YnIgLz48L3A+XHJcbiAgICAgICAgICAgIDxwPlNob3cgZGF0YSBkaWN0aW9uYXJ5PC9wPlxyXG4gICAgICAgICAgICA8cD5DYW52YXMgUHJvcGVydGllczwvcD5cclxuICAgICAgICAgICAgPHA+QXV0by1hcnJhbmdlIGdhZGdldHM8L3A+XHJcbiAgICAgICAgICAgIDxwPlJlZnJlc2ggZGF0YSBzb3VyY2U8L3A+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZNZW51IH0gZnJvbSAnLi9OYXZNZW51JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXYnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvQ29udGVudC9JbWFnZXMvZWkucG5nXCIgaWQ9J2VpLWljb24nIC8+PExpbmsgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnIHRvPXsnLyd9PkVwaSBJbmZvIEFuYWx5c2lzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz17ICcvJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5PcHRpb25zPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17ICcvc2V0LWRhdGEtc291cmNlJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5TZXQgRGF0YSBTb3VyY2U8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL29wZW4nfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+T3BlbjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvc2F2ZSd9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5TYXZlPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9zYXZlLWFzJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlNhdmUgQXM8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL3ZhcmlhYmxlcyd9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5WYXJpYWJsZXM8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL2ZldGNoZGF0YSd9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5GaWx0ZXI8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdERhdGFTb3VyY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wczx7fT4sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+U2VsZWN0IERhdGEgU291cmNlPC9oMz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvU2VsZWN0RGF0YVNvdXJjZS50c3giLCJpbXBvcnQgKiBhcyBEYXNoYm9hcmRTdG9yZSBmcm9tICcuL0Rhc2hib2FyZCc7XHJcbmltcG9ydCAqIGFzIENoYXJ0U3RvcmUgZnJvbSAnLi9DaGFydCc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXJTdG9yZSBmcm9tICcuL0NvdW50ZXInO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzU3RvcmUgZnJvbSAnLi9XZWF0aGVyRm9yZWNhc3RzJztcclxuaW1wb3J0ICogYXMgU2V0dGluZ3NTdG9yZSBmcm9tICcuL0NvdW50ZXInO1xyXG5cclxuLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIGRhc2hib2FyZDogRGFzaGJvYXJkU3RvcmUuRGFzaGJvYXJkU3RhdGUsXHJcbiAgICBjaGFydDogQ2hhcnRTdG9yZS5DaGFydFN0YXRlLFxyXG4gICAgY291bnRlcjogQ291bnRlclN0b3JlLkNvdW50ZXJTdGF0ZSxcclxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLkNvdW50ZXJTdGF0ZSxcclxuICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHNTdG9yZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGVcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBkYXNoYm9hcmQ6IERhc2hib2FyZFN0b3JlLnJlZHVjZXIsXHJcbiAgICBjaGFydDogQ2hhcnRTdG9yZS5yZWR1Y2VyLFxyXG4gICAgY291bnRlcjogQ291bnRlclN0b3JlLnJlZHVjZXIsXHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZS5yZWR1Y2VyLFxyXG4gICAgd2VhdGhlckZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0c1N0b3JlLnJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=