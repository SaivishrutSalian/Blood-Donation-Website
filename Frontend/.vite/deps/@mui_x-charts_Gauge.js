import {
  ChartsSurface,
  ChartsText,
  DrawingProvider,
  arc_default,
  getPercentageValue,
  useChartContainerDimensions,
  useDrawingArea
} from "./chunk-ZNU5YPPI.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  styled_default2 as styled_default,
  useForkRef
} from "./chunk-7IQKZSEX.js";
import {
  clsx_default
} from "./chunk-2KHBIA62.js";
import {
  require_prop_types
} from "./chunk-FJ6XD5FS.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@mui/x-charts/Gauge/Gauge.js
var React6 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/Gauge/GaugeContainer.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/x-charts/Gauge/GaugeProvider.js
var React = __toESM(require_react());

// node_modules/@mui/x-charts/Gauge/utils.js
function deg2rad(angle) {
  return Math.PI * angle / 180;
}
function getPoint(angle) {
  const radAngle = deg2rad(angle);
  return [Math.sin(radAngle), -Math.cos(radAngle)];
}
function getArcRatios(startAngle, endAngle) {
  const points = [[0, 0], getPoint(startAngle), getPoint(endAngle)];
  const minAngle = Math.min(startAngle, endAngle);
  const maxAngle = Math.max(startAngle, endAngle);
  const initialAngle = Math.floor(minAngle / 90) * 90;
  for (let step = 1; step <= 4; step += 1) {
    const cardinalAngle = initialAngle + step * 90;
    if (cardinalAngle < maxAngle) {
      points.push(getPoint(cardinalAngle));
    }
  }
  const minX = Math.min(...points.map(([x]) => x));
  const maxX = Math.max(...points.map(([x]) => x));
  const minY = Math.min(...points.map(([, y]) => y));
  const maxY = Math.max(...points.map(([, y]) => y));
  return {
    cx: -minX / (maxX - minX),
    cy: -minY / (maxY - minY),
    minX,
    maxX,
    minY,
    maxY
  };
}
function getAvailableRadius(cx, cy, width, height, {
  minX,
  maxX,
  minY,
  maxY
}) {
  return Math.min(...[{
    ratio: Math.abs(minX),
    space: cx
  }, {
    ratio: Math.abs(maxX),
    space: width - cx
  }, {
    ratio: Math.abs(minY),
    space: cy
  }, {
    ratio: Math.abs(maxY),
    space: height - cy
  }].map(({
    ratio,
    space
  }) => {
    if (ratio < 1e-5) {
      return Infinity;
    }
    return space / ratio;
  }));
}

// node_modules/@mui/x-charts/Gauge/GaugeProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var GaugeContext = React.createContext({
  value: null,
  valueMin: 0,
  valueMax: 0,
  startAngle: 0,
  endAngle: 0,
  innerRadius: 0,
  outerRadius: 0,
  cornerRadius: 0,
  cx: 0,
  cy: 0,
  maxRadius: 0,
  valueAngle: null
});
if (true) {
  GaugeContext.displayName = "GaugeContext";
}
function GaugeProvider(props) {
  const {
    value = null,
    valueMin = 0,
    valueMax = 100,
    startAngle = 0,
    endAngle = 360,
    outerRadius: outerRadiusParam,
    innerRadius: innerRadiusParam,
    cornerRadius: cornerRadiusParam,
    cx: cxParam,
    cy: cyParam,
    children
  } = props;
  const {
    left,
    top,
    width,
    height
  } = useDrawingArea();
  const ratios = getArcRatios(startAngle, endAngle);
  const innerCx = cxParam ? getPercentageValue(cxParam, width) : ratios.cx * width;
  const innerCy = cyParam ? getPercentageValue(cyParam, height) : ratios.cy * height;
  let cx = left + innerCx;
  let cy = top + innerCy;
  const maxRadius = getAvailableRadius(innerCx, innerCy, width, height, ratios);
  if (cxParam === void 0) {
    const usedWidth = maxRadius * (ratios.maxX - ratios.minX);
    cx = left + (width - usedWidth) / 2 + ratios.cx * usedWidth;
  }
  if (cyParam === void 0) {
    const usedHeight = maxRadius * (ratios.maxY - ratios.minY);
    cy = top + (height - usedHeight) / 2 + ratios.cy * usedHeight;
  }
  const outerRadius = getPercentageValue(outerRadiusParam ?? maxRadius, maxRadius);
  const innerRadius = getPercentageValue(innerRadiusParam ?? "80%", maxRadius);
  const cornerRadius = getPercentageValue(cornerRadiusParam ?? 0, outerRadius - innerRadius);
  const contextValue = React.useMemo(() => {
    const startAngleRad = Math.PI * startAngle / 180;
    const endAngleRad = Math.PI * endAngle / 180;
    return {
      value,
      valueMin,
      valueMax,
      startAngle: startAngleRad,
      endAngle: endAngleRad,
      outerRadius,
      innerRadius,
      cornerRadius,
      cx,
      cy,
      maxRadius,
      valueAngle: value === null ? null : startAngleRad + (endAngleRad - startAngleRad) * (value - valueMin) / (valueMax - valueMin)
    };
  }, [value, valueMin, valueMax, startAngle, endAngle, outerRadius, innerRadius, cornerRadius, cx, cy, maxRadius]);
  return (0, import_jsx_runtime.jsx)(GaugeContext.Provider, {
    value: contextValue,
    children
  });
}
function useGaugeState() {
  return React.useContext(GaugeContext);
}

// node_modules/@mui/x-charts/Gauge/GaugeContainer.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["width", "height", "margin", "title", "desc", "value", "valueMin", "valueMax", "startAngle", "endAngle", "outerRadius", "innerRadius", "cornerRadius", "cx", "cy", "children"];
var ResizableContainer = styled_default("div", {
  name: "MuiGauge",
  slot: "Container"
})(({
  ownerState,
  theme
}) => ({
  width: ownerState.width ?? "100%",
  height: ownerState.height ?? "100%",
  display: "flex",
  position: "relative",
  flexGrow: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "&>svg": {
    width: "100%",
    height: "100%"
  },
  "& text": {
    fill: (theme.vars || theme).palette.text.primary
  }
}));
var GaugeContainer = React2.forwardRef(function GaugeContainer2(props, ref) {
  const {
    width: inWidth,
    height: inHeight,
    margin,
    title,
    desc,
    value,
    valueMin = 0,
    valueMax = 100,
    startAngle,
    endAngle,
    outerRadius,
    innerRadius,
    cornerRadius,
    cx,
    cy,
    children
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    containerRef,
    width,
    height
  } = useChartContainerDimensions(inWidth, inHeight);
  const svgRef = React2.useRef(null);
  const chartSurfaceRef = useForkRef(ref, svgRef);
  return (0, import_jsx_runtime2.jsx)(ResizableContainer, _extends({
    ref: containerRef,
    ownerState: {
      width: inWidth,
      height: inHeight
    },
    role: "meter",
    "aria-valuenow": value === null ? void 0 : value,
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax
  }, other, {
    children: width && height ? (0, import_jsx_runtime2.jsx)(DrawingProvider, {
      width,
      height,
      margin: _extends({
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }, margin),
      svgRef,
      children: (0, import_jsx_runtime2.jsx)(GaugeProvider, {
        value,
        valueMin,
        valueMax,
        startAngle,
        endAngle,
        outerRadius,
        innerRadius,
        cornerRadius,
        cx,
        cy,
        children: (0, import_jsx_runtime2.jsx)(ChartsSurface, {
          width,
          height,
          ref: chartSurfaceRef,
          title,
          desc,
          disableAxisListener: true,
          "aria-hidden": "true",
          children
        })
      })
    }) : null
  }));
});
true ? GaugeContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types.default.node,
  className: import_prop_types.default.string,
  /**
   * The radius applied to arc corners (similar to border radius).
   * Set it to '50%' to get rounded arc.
   * @default 0
   */
  cornerRadius: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The x coordinate of the arc center.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the width the drawing area.
   */
  cx: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The y coordinate of the arc center.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the height the drawing area.
   */
  cy: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  desc: import_prop_types.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types.default.bool,
  /**
   * The end angle (deg).
   * @default 360
   */
  endAngle: import_prop_types.default.number,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: import_prop_types.default.number,
  /**
   * The radius between circle center and the beginning of the arc.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the maximal radius that fit into the drawing area.
   * @default '80%'
   */
  innerRadius: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default object Depends on the charts type.
   */
  margin: import_prop_types.default.shape({
    bottom: import_prop_types.default.number,
    left: import_prop_types.default.number,
    right: import_prop_types.default.number,
    top: import_prop_types.default.number
  }),
  /**
   * The radius between circle center and the end of the arc.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the maximal radius that fit into the drawing area.
   * @default '100%'
   */
  outerRadius: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The start angle (deg).
   * @default 0
   */
  startAngle: import_prop_types.default.number,
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  title: import_prop_types.default.string,
  /**
   * The value of the gauge.
   * Set to `null` to not display a value.
   */
  value: import_prop_types.default.number,
  /**
   * The maximal value of the gauge.
   * @default 100
   */
  valueMax: import_prop_types.default.number,
  /**
   * The minimal value of the gauge.
   * @default 0
   */
  valueMin: import_prop_types.default.number,
  viewBox: import_prop_types.default.shape({
    height: import_prop_types.default.number,
    width: import_prop_types.default.number,
    x: import_prop_types.default.number,
    y: import_prop_types.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: import_prop_types.default.number
} : void 0;

// node_modules/@mui/x-charts/Gauge/GaugeValueArc.js
var React3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var StyledPath = styled_default("path", {
  name: "MuiGauge",
  slot: "ReferenceArc",
  overridesResolver: (props, styles) => styles.referenceArc
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.main
}));
function GaugeValueArc(props) {
  const {
    value,
    valueMin,
    valueMax,
    startAngle,
    endAngle,
    outerRadius,
    innerRadius,
    cornerRadius,
    cx,
    cy
  } = useGaugeState();
  if (value === null) {
    return null;
  }
  const valueAngle = startAngle + (value - valueMin) / (valueMax - valueMin) * (endAngle - startAngle);
  return (0, import_jsx_runtime3.jsx)(StyledPath, _extends({
    transform: `translate(${cx}, ${cy})`,
    d: arc_default().cornerRadius(cornerRadius)({
      startAngle,
      endAngle: valueAngle,
      innerRadius,
      outerRadius
    })
  }, props));
}

// node_modules/@mui/x-charts/Gauge/GaugeReferenceArc.js
var React4 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var StyledPath2 = styled_default("path", {
  name: "MuiGauge",
  slot: "ReferenceArc",
  overridesResolver: (props, styles) => styles.referenceArc
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.divider
}));
function GaugeReferenceArc(props) {
  const {
    startAngle,
    endAngle,
    outerRadius,
    innerRadius,
    cornerRadius,
    cx,
    cy
  } = useGaugeState();
  return (0, import_jsx_runtime4.jsx)(StyledPath2, _extends({
    transform: `translate(${cx}, ${cy})`,
    d: arc_default().cornerRadius(cornerRadius)({
      startAngle,
      endAngle,
      innerRadius,
      outerRadius
    })
  }, props));
}

// node_modules/@mui/x-charts/Gauge/gaugeClasses.js
function getGaugeUtilityClass(slot) {
  return generateUtilityClass("MuiGauge", slot);
}
var gaugeClasses = generateUtilityClasses("MuiGauge", ["root", "valueArc", "referenceArc", "valueText"]);

// node_modules/@mui/x-charts/Gauge/GaugeValueText.js
var React5 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded2 = ["text", "className"];
function defaultFormatter({
  value
}) {
  return value === null ? null : value.toLocaleString();
}
function GaugeValueText(props) {
  const {
    text = defaultFormatter,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const {
    value,
    valueMin,
    valueMax,
    cx,
    cy
  } = useGaugeState();
  const formattedText = typeof text === "function" ? text({
    value,
    valueMin,
    valueMax
  }) : text;
  if (formattedText === null) {
    return null;
  }
  return (0, import_jsx_runtime5.jsx)("g", {
    className,
    children: (0, import_jsx_runtime5.jsx)(ChartsText, _extends({
      x: cx,
      y: cy,
      text: formattedText,
      style: {
        textAnchor: "middle",
        dominantBaseline: "central"
      }
    }, other))
  });
}
true ? GaugeValueText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Height of a text line (in `em`).
   */
  lineHeight: import_prop_types2.default.number,
  /**
   * If `true`, the line width is computed.
   * @default false
   */
  needsComputation: import_prop_types2.default.bool,
  ownerState: import_prop_types2.default.any,
  /**
   * Style applied to text elements.
   */
  style: import_prop_types2.default.object,
  text: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.string])
} : void 0;

// node_modules/@mui/x-charts/Gauge/Gauge.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded3 = ["text", "children", "classes", "className"];
var useUtilityClasses = (props) => {
  const {
    classes
  } = props;
  const slots = {
    root: ["root"],
    valueArc: ["valueArc"],
    referenceArc: ["referenceArc"],
    valueText: ["valueText"]
  };
  return composeClasses(slots, getGaugeUtilityClass, classes);
};
var Gauge = React6.forwardRef(function Gauge2(props, ref) {
  const {
    text,
    children,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const classes = useUtilityClasses(props);
  return (0, import_jsx_runtime6.jsxs)(GaugeContainer, _extends({}, other, {
    className: clsx_default(classes.root, className),
    ref,
    children: [(0, import_jsx_runtime6.jsx)(GaugeReferenceArc, {
      className: classes.referenceArc
    }), (0, import_jsx_runtime6.jsx)(GaugeValueArc, {
      className: classes.valueArc
    }), (0, import_jsx_runtime6.jsx)(GaugeValueText, {
      className: classes.valueText,
      text
    }), children]
  }));
});
true ? Gauge.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types3.default.node,
  classes: import_prop_types3.default.object,
  className: import_prop_types3.default.string,
  /**
   * The radius applied to arc corners (similar to border radius).
   * Set it to '50%' to get rounded arc.
   * @default 0
   */
  cornerRadius: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * The x coordinate of the arc center.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the width the drawing area.
   */
  cx: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * The y coordinate of the arc center.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the height the drawing area.
   */
  cy: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  desc: import_prop_types3.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types3.default.bool,
  /**
   * The end angle (deg).
   * @default 360
   */
  endAngle: import_prop_types3.default.number,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: import_prop_types3.default.number,
  /**
   * The radius between circle center and the beginning of the arc.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the maximal radius that fit into the drawing area.
   * @default '80%'
   */
  innerRadius: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default object Depends on the charts type.
   */
  margin: import_prop_types3.default.shape({
    bottom: import_prop_types3.default.number,
    left: import_prop_types3.default.number,
    right: import_prop_types3.default.number,
    top: import_prop_types3.default.number
  }),
  /**
   * The radius between circle center and the end of the arc.
   * Can be a number (in px) or a string with a percentage such as '50%'.
   * The '100%' is the maximal radius that fit into the drawing area.
   * @default '100%'
   */
  outerRadius: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * The start angle (deg).
   * @default 0
   */
  startAngle: import_prop_types3.default.number,
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  text: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.string]),
  title: import_prop_types3.default.string,
  /**
   * The value of the gauge.
   * Set to `null` to not display a value.
   */
  value: import_prop_types3.default.number,
  /**
   * The maximal value of the gauge.
   * @default 100
   */
  valueMax: import_prop_types3.default.number,
  /**
   * The minimal value of the gauge.
   * @default 0
   */
  valueMin: import_prop_types3.default.number,
  viewBox: import_prop_types3.default.shape({
    height: import_prop_types3.default.number,
    width: import_prop_types3.default.number,
    x: import_prop_types3.default.number,
    y: import_prop_types3.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: import_prop_types3.default.number
} : void 0;
export {
  Gauge,
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  GaugeValueText,
  gaugeClasses,
  getGaugeUtilityClass,
  useGaugeState
};
//# sourceMappingURL=@mui_x-charts_Gauge.js.map
