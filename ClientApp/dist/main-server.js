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
    requestCanvas: function (id) { return function (dispatch, getState) {
        if (id !== getState().canvas.id) {
            var fetchTask = domain_task_1.fetch("/api/SettingsData/Canvas?id=" + id)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_CANVAS', id: id, json: data, charts: null });
            });
            domain_task_1.addTask(fetchTask);
            dispatch({ type: 'REQUEST_CANVAS', id: id });
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
        case 'REQUEST_CANVAS':
            return {
                id: action.id,
                json: state.json,
                isLoading: true,
                chartIds: state.chartIds,
                charts: state.charts
            };
        case 'RECEIVE_CANVAS':
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
var Counter_1 = __webpack_require__(19);
var CanvasContainer_1 = __webpack_require__(17);
exports.routes = React.createElement(Layout_1.Layout, null,
    React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/set-data-source', component: SelectDataSource_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/open', component: CanvasContainer_1.default }),
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
var ChartContainer_1 = __webpack_require__(18);
var Canvas = (function (_super) {
    __extends(Canvas, _super);
    //constructor(CanvasProps) {
    //    super(CanvasProps);
    //    this.state = {
    //        id: CanvasProps.chart_id,
    //        isLoading: CanvasProps.chart_type,
    //        json: CanvasProps.chart_inEdit,
    //        chartIds: CanvasProps.chart_loading,
    //        charts: CanvasProps....
    //    };
    //}
    function Canvas(CanvasProps) {
        var _this = _super.call(this, CanvasProps) || this;
        console.log('constructor');
        console.log(_this.props);
        return _this;
    }
    Canvas.prototype.render = function () {
        console.log('render()_canvas');
        console.log(this.props);
        return React.createElement("div", null,
            React.createElement("span", null, "dpb"),
            this.renderCanvas());
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
    Canvas.prototype.renderCanvas = function () {
        console.log('renderCanvas()');
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
    return Canvas;
}(React.Component));
exports.default = Canvas;


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
var CanvasState = __webpack_require__(7);
var Canvas_1 = __webpack_require__(16);
var CanvasContainer = (function (_super) {
    __extends(CanvasContainer, _super);
    function CanvasContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanvasContainer.prototype.componentWillMount = function () {
        var id = "";
        this.props.requestCanvas(id);
    };
    CanvasContainer.prototype.componentWillReceiveProps = function (nextProps) {
        this.props.requestCanvas(nextProps.id);
    };
    CanvasContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Canvas_1.default, { id: this.props.id, isLoading: this.props.isLoading, json: this.props.json, chartIds: this.props.chartIds, charts: this.props.charts }),
            React.createElement("div", null,
                React.createElement("br", null),
                React.createElement("h1", null, this.props.id),
                React.createElement("h1", null, JSON.stringify(this.props.json)),
                React.createElement("h1", null, this.props.isLoading ? React.createElement("span", null, "Loading...") : React.createElement("span", null, "Not loading...")))));
    };
    return CanvasContainer;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return state.canvas; }, CanvasState.actionCreators)(CanvasContainer);


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
var ChartState = __webpack_require__(8);
var ChartContainer = (function (_super) {
    __extends(ChartContainer, _super);
    function ChartContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //constructor(ChartProps) {
    //    super(ChartProps);
    //    this.state = {
    //        chart_id: ChartProps.chart_id,
    //        chart_type: ChartProps.chart_type,
    //        chart_inEdit: ChartProps.chart_inEdit,
    //        chart_loading: ChartProps.chart_loading,
    //    };
    //}
    //componentWillReceiveProps(nextProps: ChartProps) {
    //    this.props.getChart(nextProps.chart_id);
    //}
    ChartContainer.prototype.render = function () {
        console.log('render()_chart');
        console.log(this.props);
        return React.createElement("div", null, this.renderChart());
    };
    ChartContainer.prototype.renderChart = function () {
        if (this.props.chart_id) {
            {
                console.log('renderChart()');
            }
            {
                console.log('renderChart()');
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
exports.default = react_redux_1.connect(function (state) { return state.chart; }, ChartState.actionCreators)(ChartContainer);


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
var CanvasStore = __webpack_require__(7);
var ChartStore = __webpack_require__(8);
var CounterStore = __webpack_require__(4);
var WeatherForecastsStore = __webpack_require__(9);
var SettingsStore = __webpack_require__(4);
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    canvas: CanvasStore.reducer,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWQyYWZlNzEzYjIxODBhNjgwN2EiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ2FudmFzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9DYW52YXNDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NoYXJ0Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Db3VudGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9GZXRjaERhdGEudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvU2VsZWN0RGF0YVNvdXJjZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBw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TSxFQUFFLFdBQVcsQ0FBQyxPQUFPO0lBQzNCLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTztJQUN6QixPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87SUFDN0IsUUFBUSxFQUFFLGFBQWEsQ0FBQyxPQUFPO0lBQy9CLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDLE9BQU87Q0FDbEQsQ0FBQzs7Ozs7OztBQ3hCRiwrQzs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZDJhZmU3MTNiMjE4MGE2ODA3YSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQ1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU1RBVEUgLSBUaGlzIGRlZmluZXMgdGhlIHR5cGUgb2YgZGF0YSBtYWludGFpbmVkIGluIHRoZSBSZWR1eCBzdG9yZS5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclN0YXRlIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG4vLyBVc2UgQHR5cGVOYW1lIGFuZCBpc0FjdGlvblR5cGUgZm9yIHR5cGUgZGV0ZWN0aW9uIHRoYXQgd29ya3MgZXZlbiBhZnRlciBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi5cclxuXHJcbmludGVyZmFjZSBJbmNyZW1lbnRDb3VudEFjdGlvbiB7IHR5cGU6ICdJTkNSRU1FTlRfQ09VTlQnIH1cclxuaW50ZXJmYWNlIERlY3JlbWVudENvdW50QWN0aW9uIHsgdHlwZTogJ0RFQ1JFTUVOVF9DT1VOVCcgfVxyXG5cclxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcclxuLy8gZGVjbGFyZWQgdHlwZSBzdHJpbmdzIChhbmQgbm90IGFueSBvdGhlciBhcmJpdHJhcnkgc3RyaW5nKS5cclxudHlwZSBLbm93bkFjdGlvbiA9IEluY3JlbWVudENvdW50QWN0aW9uIHwgRGVjcmVtZW50Q291bnRBY3Rpb247XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTiBDUkVBVE9SUyAtIFRoZXNlIGFyZSBmdW5jdGlvbnMgZXhwb3NlZCB0byBVSSBjb21wb25lbnRzIHRoYXQgd2lsbCB0cmlnZ2VyIGEgc3RhdGUgdHJhbnNpdGlvbi5cclxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgaW5jcmVtZW50OiAoKSA9PiA8SW5jcmVtZW50Q291bnRBY3Rpb24+eyB0eXBlOiAnSU5DUkVNRU5UX0NPVU5UJyB9LFxyXG4gICAgZGVjcmVtZW50OiAoKSA9PiA8RGVjcmVtZW50Q291bnRBY3Rpb24+eyB0eXBlOiAnREVDUkVNRU5UX0NPVU5UJyB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDb3VudGVyU3RhdGU+ID0gKHN0YXRlOiBDb3VudGVyU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkNSRU1FTlRfQ09VTlQnOlxyXG4gICAgICAgICAgICByZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH07XHJcbiAgICAgICAgY2FzZSAnREVDUkVNRU5UX0NPVU5UJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgeyBjb3VudDogMCB9O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBDaGFydFN0YXRlIH0gZnJvbSAnQ2xpZW50QXBwL3N0b3JlL0NoYXJ0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzU3RhdGUge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIGpzb246IGFueTtcclxuICAgIGNoYXJ0SWRzOiBzdHJpbmdbXTtcclxuICAgIGNoYXJ0czogQ2hhcnRTdGF0ZVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdENhbnZhc0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVRVUVTVF9DQU5WQVMnO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVDYW52YXNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFQ0VJVkVfQ0FOVkFTJztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBqc29uOiBhbnk7XHJcbiAgICBjaGFydHM6IGFueTtcclxufVxyXG5cclxudHlwZSBDYW52YXNBY3Rpb24gPSBSZXF1ZXN0Q2FudmFzQWN0aW9uIHwgUmVjZWl2ZUNhbnZhc0FjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3RDYW52YXM6IChpZDogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248Q2FudmFzQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICE9PSBnZXRTdGF0ZSgpLmNhbnZhcy5pZCkge1xyXG4gICAgICAgICAgICBsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYC9hcGkvU2V0dGluZ3NEYXRhL0NhbnZhcz9pZD0keyBpZCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPGFueT4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX0NBTlZBUycsIGlkOiBpZCwganNvbjpkYXRhLCBjaGFydHM6IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfQ0FOVkFTJywgaWQ6IGlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IENhbnZhc1N0YXRlID0ge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAganNvbjogbnVsbCxcclxuICAgIGNoYXJ0SWRzOiBudWxsLFxyXG4gICAgY2hhcnRzOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDYW52YXNTdGF0ZT4gPSAoc3RhdGU6IENhbnZhc1N0YXRlLCBhY3Rpb246IENhbnZhc0FjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlICdSRVFVRVNUX0NBTlZBUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAganNvbjogc3RhdGUuanNvbixcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJ0SWRzOiBzdGF0ZS5jaGFydElkcyxcclxuICAgICAgICAgICAgICAgIGNoYXJ0czogc3RhdGUuY2hhcnRzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFQ0VJVkVfQ0FOVkFTJzpcclxuICAgICAgICAgICAgbGV0IGlkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNoYXJ0U3RhdGVzOiBDaGFydFN0YXRlW10gPSBbXTsgXHJcblxyXG4gICAgICAgICAgICBhY3Rpb24uanNvbi5jYW52YXMuY2hhcnRzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlkcy5wdXNoKGMuY2hhcnRfaWQgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGFjdGlvbi5qc29uLmNhbnZhcy5jaGFydHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRTdGF0ZXMucHVzaChjKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uLmpzb24uY2FudmFzLmlkLFxyXG4gICAgICAgICAgICAgICAganNvbjogYWN0aW9uLmpzb24sXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRJZHM6IGlkcyxcclxuICAgICAgICAgICAgICAgIGNoYXJ0czogY2hhcnRTdGF0ZXNcclxuICAgICAgICAgICAgfTtcclxuICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0NhbnZhcy50cyIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydFN0YXRlIHtcclxuICAgIGNoYXJ0X2lkOiBzdHJpbmc7XHJcbiAgICBjaGFydF90eXBlOiBzdHJpbmc7XHJcbiAgICBjaGFydF9pbkVkaXQ6IHN0cmluZztcclxuICAgIGNoYXJ0X2xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0Q2hhcnRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFUVVFU1RfQ0hBUlQnLFxyXG4gICAgY2hhcnRfaWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVDaGFydEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUkVDRUlWRV9DSEFSVCc7XHJcbiAgICBjaGFydF9pZDogc3RyaW5nO1xyXG4gICAgY2hhcnRfanNvbjogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2V0Q2hhcnRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0dFVF9DSEFSVCc7XHJcbiAgICBjaGFydF9pZDogc3RyaW5nO1xyXG4gICAgY2hhcnRfdHlwZTogc3RyaW5nO1xyXG4gICAgY2hhcnRfaW5FZGl0OiBzdHJpbmc7XHJcbiAgICBjaGFydF9sb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG50eXBlIENoYXJ0QWN0aW9uID0gUmVxdWVzdENoYXJ0QWN0aW9uIHwgUmVjZWl2ZUNoYXJ0QWN0aW9uIHwgR2V0Q2hhcnRBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICByZXF1ZXN0Q2hhcnQ6IChpZDogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248Q2hhcnRBY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoaWQgIT09IGdldFN0YXRlKCkuY2hhcnQuY2hhcnRfaWQpIHtcclxuICAgICAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGAvYXBpL1NldHRpbmdzRGF0YS9DaGFydD9pZD0keyBpZCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPGFueT4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX0NIQVJUJywgY2hhcnRfaWQ6IGlkLCBjaGFydF9qc29uOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfQ0hBUlQnLCBjaGFydF9pZDogaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldENoYXJ0OiAoaWQ6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPENoYXJ0QWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICE9PSBnZXRTdGF0ZSgpLmNoYXJ0LmNoYXJ0X2lkKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogQ2hhcnRTdGF0ZSA9IHtcclxuICAgIGNoYXJ0X2lkOiBudWxsLFxyXG4gICAgY2hhcnRfdHlwZTogbnVsbCxcclxuICAgIGNoYXJ0X2luRWRpdDogbnVsbCxcclxuICAgIGNoYXJ0X2xvYWRpbmc6IGZhbHNlLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPENoYXJ0U3RhdGU+ID0gKHN0YXRlOiBDaGFydFN0YXRlLCBhY3Rpb246IENoYXJ0QWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9DSEFSVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydF9pZDogc3RhdGUuY2hhcnRfaWQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF90eXBlOiBzdGF0ZS5jaGFydF90eXBlLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfaW5FZGl0OiBzdGF0ZS5jaGFydF9pbkVkaXQsXHJcbiAgICAgICAgICAgICAgICBjaGFydF9sb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnUkVDRUlWRV9DSEFSVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydF9pZDogYWN0aW9uLmNoYXJ0X2lkLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfanNvbjogYWN0aW9uLmNoYXJ0X2pzb24sXHJcbiAgICAgICAgICAgICAgICBjaGFydF90eXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfaW5FZGl0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdHRVRfQ0hBUlQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRfaWQ6IGFjdGlvbi5jaGFydF9pZCxcclxuICAgICAgICAgICAgICAgIGNoYXJ0X3R5cGU6IGFjdGlvbi5jaGFydF90eXBlLFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfaW5FZGl0OiBhY3Rpb24uY2hhcnRfaW5FZGl0LFxyXG4gICAgICAgICAgICAgICAgY2hhcnRfbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvQ2hhcnQudHMiLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG4gICAgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLFxyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJyxcclxuICAgIHN0YXJ0RGF0ZUluZGV4OiBudW1iZXI7XHJcbiAgICBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdXHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB8IFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzOiAoc3RhcnREYXRlSW5kZXg6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gT25seSBsb2FkIGRhdGEgaWYgaXQncyBzb21ldGhpbmcgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIChhbmQgYXJlIG5vdCBhbHJlYWR5IGxvYWRpbmcpXHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZUluZGV4ICE9PSBnZXRTdGF0ZSgpLndlYXRoZXJGb3JlY2FzdHMuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGAvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cz9zdGFydERhdGVJbmRleD0keyBzdGFydERhdGVJbmRleCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFdlYXRoZXJGb3JlY2FzdFtdPilcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXgsIGZvcmVjYXN0czogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyAvLyBFbnN1cmUgc2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nIHdhaXRzIGZvciB0aGlzIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogV2VhdGhlckZvcmVjYXN0c1N0YXRlID0geyBzdGFydERhdGVJbmRleDogbnVsbCwgZm9yZWNhc3RzOiBbXSwgaXNMb2FkaW5nOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8V2VhdGhlckZvcmVjYXN0c1N0YXRlPiA9IChzdGF0ZTogV2VhdGhlckZvcmVjYXN0c1N0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGVJbmRleDogYWN0aW9uLnN0YXJ0RGF0ZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBzdGF0ZS5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJzpcclxuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGhlIGluY29taW5nIGRhdGEgaWYgaXQgbWF0Y2hlcyB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdC4gVGhpcyBlbnN1cmVzIHdlIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3V0LW9mLW9yZGVyIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGFydERhdGVJbmRleCA9PT0gc3RhdGUuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdHM6IGFjdGlvbi5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIFN0b3JlTW9kdWxlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShoaXN0b3J5OiBIaXN0b3J5LCBpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBTZWxlY3REYXRhU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3REYXRhU291cmNlJztcclxuaW1wb3J0IEZldGNoRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvRmV0Y2hEYXRhJztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZXInO1xyXG5pbXBvcnQgQ2FudmFzQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9DYW52YXNDb250YWluZXInO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY29tcG9uZW50cy9DYW52YXMnO1xyXG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL0NoYXJ0Q29udGFpbmVyJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4vY29tcG9uZW50cy9DaGFydCc7XHJcbmltcG9ydCBTZXR0aW5nc0RpYWxvZyBmcm9tICcuL2NvbXBvbmVudHMvU2V0dGluZ3NEaWFsb2cnO1xyXG5pbXBvcnQgT3BlbkNhbnZhcyBmcm9tICcuL2NvbXBvbmVudHMvT3BlbkNhbnZhcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gPExheW91dD5cclxuICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9eyBIb21lIH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvc2V0LWRhdGEtc291cmNlJyBjb21wb25lbnQ9e1NlbGVjdERhdGFTb3VyY2V9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL29wZW4nIGNvbXBvbmVudD17Q2FudmFzQ29udGFpbmVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9zYXZlJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL3NhdmUtYXMnIGNvbXBvbmVudD17Q291bnRlcn0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvdmFyaWFibGVzJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZpbHRlcicgY29tcG9uZW50PXtDb3VudGVyfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9jb3VudGVyJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZldGNoZGF0YS86c3RhcnREYXRlSW5kZXg/JyBjb21wb25lbnQ9eyBGZXRjaERhdGEgfSAvPlxyXG48L0xheW91dD47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHBhcmFtcy5sb2NhdGlvbikpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgKiBhcyBDYW52YXNTdGF0ZSBmcm9tICcuLi9zdG9yZS9DYW52YXMnO1xyXG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcnRDb250YWluZXJcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XHJcblxyXG50eXBlIENhbnZhc1Byb3BzID0gQ2FudmFzU3RhdGUuQ2FudmFzU3RhdGU7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENhbnZhc1Byb3BzLCB7fT4ge1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IoQ2FudmFzUHJvcHMpIHtcclxuICAgIC8vICAgIHN1cGVyKENhbnZhc1Byb3BzKTtcclxuICAgIC8vICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAvLyAgICAgICAgaWQ6IENhbnZhc1Byb3BzLmNoYXJ0X2lkLFxyXG4gICAgLy8gICAgICAgIGlzTG9hZGluZzogQ2FudmFzUHJvcHMuY2hhcnRfdHlwZSxcclxuICAgIC8vICAgICAgICBqc29uOiBDYW52YXNQcm9wcy5jaGFydF9pbkVkaXQsXHJcbiAgICAvLyAgICAgICAgY2hhcnRJZHM6IENhbnZhc1Byb3BzLmNoYXJ0X2xvYWRpbmcsXHJcbiAgICAvLyAgICAgICAgY2hhcnRzOiBDYW52YXNQcm9wcy4uLi5cclxuICAgIC8vICAgIH07XHJcbiAgICAvL31cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihDYW52YXNQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKENhbnZhc1Byb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXIoKV9jYW52YXMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICByZXR1cm4gPGRpdj48c3Bhbj5kcGI8L3NwYW4+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDYW52YXMoKSB9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhcnRfaWQ6IHN0cmluZztcclxuICAgIC8vY2hhcnRfdHlwZTogc3RyaW5nO1xyXG4gICAgLy9jaGFydF9pbkVkaXQ6IHN0cmluZztcclxuICAgIC8vY2hhcnRfbG9hZGluZzogYm9vbGVhbjtcclxuXHJcblxyXG4gICAgLy9rZXkgPSB7IGNoYXJ0Q29udGFpbmVyLmNoYXJ0X2lkIH1cclxuICAgIC8vY2hhcnRfaWQgPSB7IGNoYXJ0Q29udGFpbmVyLmNoYXJ0X2lkIH1cclxuICAgIC8vY2hhcnRfdHlwZSA9IHsgY2hhcnRDb250YWluZXIuY2hhcnRfdHlwZSB9XHJcbiAgICAvL2NoYXJ0X2luRWRpdCA9IHsgY2hhcnRDb250YWluZXIuY2hhcnRfaW5FZGl0IH1cclxuICAgIC8vY2hhcnRfbG9hZGluZyA9IHsgY2hhcnRDb250YWluZXIuY2hhcnRfbG9hZGluZyB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2FudmFzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJDYW52YXMoKScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoYXJ0SWRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hhcnRJZHMubWFwKGlkID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9J2NvbC1zbS0zIGNhcmRzdG9jayc+e2lkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ2hhcyBjaGFydElkcycpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoYXJ0cy5tYXAoY2hhcnRDb250YWluZXIgPT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcnRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGFydENvbnRhaW5lci5jaGFydF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRfaWQ9e2NoYXJ0Q29udGFpbmVyLmNoYXJ0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydF90eXBlPXtjaGFydENvbnRhaW5lci5jaGFydF90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydF9pbkVkaXQ9e2NoYXJ0Q29udGFpbmVyLmNoYXJ0X2luRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRfbG9hZGluZz17Y2hhcnRDb250YWluZXIuY2hhcnRfbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ2FudmFzLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ2FudmFzU3RhdGUgZnJvbSAnLi4vc3RvcmUvQ2FudmFzJztcclxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYW52YXNcIjtcclxuXHJcbnR5cGUgQ2FudmFzUHJvcHMgPSBDYW52YXNTdGF0ZS5DYW52YXNTdGF0ZSAmIHR5cGVvZiBDYW52YXNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+OyBcclxuXHJcbmNsYXNzIENhbnZhc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDYW52YXNQcm9wcywge30+IHtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gXCJcIjtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RDYW52YXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBDYW52YXNQcm9wcykge1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdENhbnZhcyhuZXh0UHJvcHMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhbnZhcyBpZD17dGhpcy5wcm9wcy5pZH0gaXNMb2FkaW5nPXt0aGlzLnByb3BzLmlzTG9hZGluZ30ganNvbj17dGhpcy5wcm9wcy5qc29ufSBjaGFydElkcz17dGhpcy5wcm9wcy5jaGFydElkc30gY2hhcnRzPXt0aGlzLnByb3BzLmNoYXJ0c30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmlkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuanNvbil9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5pc0xvYWRpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIkxvYWRpbmcuLi5cIikgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIk5vdCBsb2FkaW5nLi4uXCIpfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNhbnZhcyxcclxuICAgIENhbnZhc1N0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbikoQ2FudmFzQ29udGFpbmVyKSBhcyB0eXBlb2YgQ2FudmFzQ29udGFpbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0NhbnZhc0NvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ2hhcnRTdGF0ZSBmcm9tICcuLi9zdG9yZS9DaGFydCc7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydFwiO1xyXG5cclxuLy90eXBlIENoYXJ0UHJvcHMgPSBDaGFydFN0YXRlLkNoYXJ0U3RhdGUgJiB0eXBlb2YgQ2hhcnRTdGF0ZS5hY3Rpb25DcmVhdG9ycyAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+OyBcclxudHlwZSBDaGFydFByb3BzID0gQ2hhcnRTdGF0ZS5DaGFydFN0YXRlO1xyXG5cclxuY2xhc3MgQ2hhcnRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2hhcnRQcm9wcywge30+IHtcclxuXHJcbiAgICAvL2NvbnN0cnVjdG9yKENoYXJ0UHJvcHMpIHtcclxuICAgIC8vICAgIHN1cGVyKENoYXJ0UHJvcHMpO1xyXG4gICAgLy8gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIC8vICAgICAgICBjaGFydF9pZDogQ2hhcnRQcm9wcy5jaGFydF9pZCxcclxuICAgIC8vICAgICAgICBjaGFydF90eXBlOiBDaGFydFByb3BzLmNoYXJ0X3R5cGUsXHJcbiAgICAvLyAgICAgICAgY2hhcnRfaW5FZGl0OiBDaGFydFByb3BzLmNoYXJ0X2luRWRpdCxcclxuICAgIC8vICAgICAgICBjaGFydF9sb2FkaW5nOiBDaGFydFByb3BzLmNoYXJ0X2xvYWRpbmcsXHJcbiAgICAvLyAgICB9O1xyXG4gICAgLy99XHJcblxyXG4gICAgLy9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogQ2hhcnRQcm9wcykge1xyXG4gICAgLy8gICAgdGhpcy5wcm9wcy5nZXRDaGFydChuZXh0UHJvcHMuY2hhcnRfaWQpO1xyXG4gICAgLy99XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyKClfY2hhcnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hhcnQoKX1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGFydF9pZCkge1xyXG4gICAgICAgICAgICB7IGNvbnNvbGUubG9nKCdyZW5kZXJDaGFydCgpJyk7IH1cclxuICAgICAgICAgICAgeyBjb25zb2xlLmxvZygncmVuZGVyQ2hhcnQoKScpOyB9XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmNoYXJ0X2lkfSA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmNoYXJ0X3R5cGV9IDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDE+IGRwYnJvd24gPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jaGFydF9pZH0gPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNoYXJ0LFxyXG4gICAgQ2hhcnRTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4pKENoYXJ0Q29udGFpbmVyKSBhcyB0eXBlb2YgQ2hhcnRDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ2hhcnRDb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDb3VudGVyU3RvcmUgZnJvbSAnLi4vc3RvcmUvQ291bnRlcic7XHJcbmltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHMgZnJvbSAnLi4vc3RvcmUvV2VhdGhlckZvcmVjYXN0cyc7XHJcblxyXG50eXBlIENvdW50ZXJQcm9wcyA9XHJcbiAgICBDb3VudGVyU3RvcmUuQ291bnRlclN0YXRlXHJcbiAgICAmIHR5cGVvZiBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcblxyXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvdW50ZXJQcm9wcywge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Db3VudGVyPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhIFJlYWN0IGNvbXBvbmVudC48L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnsgdGhpcy5wcm9wcy5jb3VudCB9PC9zdHJvbmc+PC9wPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLnByb3BzLmluY3JlbWVudCgpIH0gfT5JbmNyZW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUuY291bnRlciwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIENvdW50ZXJTdG9yZS5hY3Rpb25DcmVhdG9ycyAgICAgICAgICAgICAgICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4pKENvdW50ZXIpIGFzIHR5cGVvZiBDb3VudGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0NvdW50ZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgZnJvbSAnLi4vc3RvcmUvV2VhdGhlckZvcmVjYXN0cyc7XHJcblxyXG4vLyBBdCBydW50aW1lLCBSZWR1eCB3aWxsIG1lcmdlIHRvZ2V0aGVyLi4uXHJcbnR5cGUgV2VhdGhlckZvcmVjYXN0UHJvcHMgPVxyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLldlYXRoZXJGb3JlY2FzdHNTdGF0ZSAgICAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxyXG4gICAgJiB0eXBlb2YgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgLy8gLi4uIHBsdXMgYWN0aW9uIGNyZWF0b3JzIHdlJ3ZlIHJlcXVlc3RlZFxyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgc3RhcnREYXRlSW5kZXg6IHN0cmluZyB9PjsgLy8gLi4uIHBsdXMgaW5jb21pbmcgcm91dGluZyBwYXJhbWV0ZXJzICAgXHJcblxyXG5jbGFzcyBGZXRjaERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8V2VhdGhlckZvcmVjYXN0UHJvcHMsIHt9PiB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgYWRkZWQgdG8gdGhlIHBhZ2VcclxuICAgICAgICBsZXQgc3RhcnREYXRlSW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzKHN0YXJ0RGF0ZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogV2VhdGhlckZvcmVjYXN0UHJvcHMpIHtcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gaW5jb21pbmcgcHJvcHMgKGUuZy4sIHJvdXRlIHBhcmFtcykgY2hhbmdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQobmV4dFByb3BzLm1hdGNoLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzKHN0YXJ0RGF0ZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgd29ya2luZyB3aXRoIFVSTCBwYXJhbWV0ZXJzLjwvcD5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZvcmVjYXN0c1RhYmxlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUGFnaW5hdGlvbigpIH1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJGb3JlY2FzdHNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZm9yZWNhc3RzLm1hcChmb3JlY2FzdCA9PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3Quc3VtbWFyeSB9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJQYWdpbmF0aW9uKCkge1xyXG4gICAgICAgIGxldCBwcmV2U3RhcnREYXRlSW5kZXggPSB0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4IC0gNTtcclxuICAgICAgICBsZXQgbmV4dFN0YXJ0RGF0ZUluZGV4ID0gdGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCArIDU7XHJcblxyXG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NsZWFyZml4IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgcHVsbC1sZWZ0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IHByZXZTdGFydERhdGVJbmRleCB9YCB9PlByZXZpb3VzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IG5leHRTdGFydERhdGVJbmRleCB9YCB9Pk5leHQ8L0xpbms+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IFtdIH1cclxuICAgICAgICA8L3A+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS53ZWF0aGVyRm9yZWNhc3RzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoRmV0Y2hEYXRhKSBhcyB0eXBlb2YgRmV0Y2hEYXRhO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9GZXRjaERhdGEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgzPk9wdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8cD48YnIgLz48L3A+XHJcbiAgICAgICAgICAgIDxwPlNldCBkYXRhIHNvdXJjZTwvcD5cclxuICAgICAgICAgICAgPHA+QWRkIHJlbGF0ZWQgZGF0YSBzb3VyY2UuLi48L3A+XHJcbiAgICAgICAgICAgIDxwPk9wZW4gY2FudmFzLi4uPC9wPlxyXG4gICAgICAgICAgICA8cD5TYXZlIGNhbnZhczwvcD5cclxuICAgICAgICAgICAgPHA+U2F2ZSBjYW52YXMgYXMuLi48L3A+XHJcbiAgICAgICAgICAgIDxwPjxiciAvPjwvcD5cclxuICAgICAgICAgICAgPHA+U2F2ZSBvdXRwdXQgYXMgSFRNTDwvcD5cclxuICAgICAgICAgICAgPHA+U2VuZCBvdXRwdXQgdG8gPC9wPlxyXG4gICAgICAgICAgICA8cD5FeHBvcnQgZGF0YTwvcD5cclxuICAgICAgICAgICAgPHA+QWRkIEFuYWx5c2lzIGdhZGdldDwvcD5cclxuICAgICAgICAgICAgPHA+QWRkIFN0YXRDYWxjIGNhbGN1bGF0b3I8L3A+XHJcbiAgICAgICAgICAgIDxwPkFkZCBSZXBvcnQgZ2FkZ2V0PC9wPlxyXG4gICAgICAgICAgICA8cD48YnIgLz48L3A+XHJcbiAgICAgICAgICAgIDxwPlNob3cgZGF0YSBkaWN0aW9uYXJ5PC9wPlxyXG4gICAgICAgICAgICA8cD5DYW52YXMgUHJvcGVydGllczwvcD5cclxuICAgICAgICAgICAgPHA+QXV0by1hcnJhbmdlIGdhZGdldHM8L3A+XHJcbiAgICAgICAgICAgIDxwPlJlZnJlc2ggZGF0YSBzb3VyY2U8L3A+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZNZW51IH0gZnJvbSAnLi9OYXZNZW51JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXYnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvQ29udGVudC9JbWFnZXMvZWkucG5nXCIgaWQ9J2VpLWljb24nIC8+PExpbmsgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnIHRvPXsnLyd9PkVwaSBJbmZvIEFuYWx5c2lzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBleGFjdCB0bz17ICcvJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5PcHRpb25zPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17ICcvc2V0LWRhdGEtc291cmNlJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5TZXQgRGF0YSBTb3VyY2U8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL29wZW4nfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+T3BlbjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvc2F2ZSd9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5TYXZlPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9zYXZlLWFzJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlNhdmUgQXM8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL3ZhcmlhYmxlcyd9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5WYXJpYWJsZXM8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL2ZldGNoZGF0YSd9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5GaWx0ZXI8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdERhdGFTb3VyY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wczx7fT4sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+U2VsZWN0IERhdGEgU291cmNlPC9oMz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvU2VsZWN0RGF0YVNvdXJjZS50c3giLCJpbXBvcnQgKiBhcyBDYW52YXNTdG9yZSBmcm9tICcuL0NhbnZhcyc7XHJcbmltcG9ydCAqIGFzIENoYXJ0U3RvcmUgZnJvbSAnLi9DaGFydCc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXJTdG9yZSBmcm9tICcuL0NvdW50ZXInO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzU3RvcmUgZnJvbSAnLi9XZWF0aGVyRm9yZWNhc3RzJztcclxuaW1wb3J0ICogYXMgU2V0dGluZ3NTdG9yZSBmcm9tICcuL0NvdW50ZXInO1xyXG5cclxuLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIGNhbnZhczogQ2FudmFzU3RvcmUuQ2FudmFzU3RhdGUsXHJcbiAgICBjaGFydDogQ2hhcnRTdG9yZS5DaGFydFN0YXRlLFxyXG4gICAgY291bnRlcjogQ291bnRlclN0b3JlLkNvdW50ZXJTdGF0ZSxcclxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLkNvdW50ZXJTdGF0ZSxcclxuICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHNTdG9yZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGVcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBjYW52YXM6IENhbnZhc1N0b3JlLnJlZHVjZXIsXHJcbiAgICBjaGFydDogQ2hhcnRTdG9yZS5yZWR1Y2VyLFxyXG4gICAgY291bnRlcjogQ291bnRlclN0b3JlLnJlZHVjZXIsXHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZS5yZWR1Y2VyLFxyXG4gICAgd2VhdGhlckZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0c1N0b3JlLnJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=