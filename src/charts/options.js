import { ColorType, LineStyle, CrosshairMode } from 'lightweight-charts';

export const seriesColors = {
  red: {line: 'rgba(237,66,69, 1)',
  bottom: 'rgba(237,66,69, 0.04)',
  top: 'rgba(237,66,69, 0.56)'},
  blurple: {line: 'rgba(114, 137, 218, 1)',
  bottom: 'rgba(114, 137, 218, 0.04)',
  top: 'rgba(114, 137, 218, 0.56)'},
  green: {line: 'rgba(87,242,135, 1)',
  bottom: 'rgba(87,242,135, 0.04)',
  top: 'rgba(87,242,135, 0.56)'}
}

export const chartColors = {
    white: '#ffffff',
    softDarkGray: 'rgba(49,53,59, 0.9)',
    softWhite: 'rgba(100,100,100, 0.4)',
    softRed: 'rgba(200, 97, 100, .5)',
    softGreen: 'rgba(39, 157, 130, .5)',
    softBlurple: 'rgba(114, 137, 218, .5)',
    discord: {
      red: '#ED4245',
      softRed: 'rgba(237,66,69,.5)',
      green: 'rgb(87,242,135)',
      softGreen: 'rgba(87,242,135, .5)',
      white: '#f2f3f5',
      white2: '#d9dadc',
      blurple: '#7289DA',
      blurple2: '#5865f2',
      softBlurple2: 'rgba(88,101,242,.2)',
      darkGray: '#424549',
      darkerGray: '#36393E',
      darkestGray: '#282B30',
      black: '#1E2124',
    }
  }


const CHART_LAYOUTS = {
  common: {
    textColor: chartColors.white,
    background: {
        color: chartColors.discord.darkestGray,
        type: ColorType.Solid,
    },
    fontSize: 10,
  }
};

const CHART_PRICE_SCALES = {
  common_right: {
    scaleMargins: { top: 0.2, bottom: 0.2 },
  }
};

const CHART_CROSSHAIR = {
  common: {
    mode: CrosshairMode.FinanceChart,
    vertLine: {
        labelBackgroundColor: chartColors.discord.darkerGray,
    },
    horzLine: {
        labelBackgroundColor: chartColors.discord.darkerGray,
    },
  }
};


const CHART_GRID = {
  common: {
    vertLines: {visible: true, color: chartColors.softDarkGray },
    horzLines: {visible: true, color: chartColors.softDarkGray },
  }
};


export const CHART_THEMES = {
  defaultSeries : {
    lineWidth: .5,
  },
  dottedLine: {
    lineStyle: LineStyle.Dotted,
  },
  nothingLine: {
    lineStyle: LineStyle.Solid
  },
  percentPriceLine : {
    lineWidth: 1,
    lineStyle: LineStyle.Dotted,
    axisLabelVisible: true,
    lineVisible: false
  },
  simpleChart : {
    layout: CHART_LAYOUTS.common,
    rightPriceScale: { visible: false},
    timeScale: {visible: false},
    crosshair: {
      visible: false,
      mode: CrosshairMode.Hidden,
      vertLine: {visible: false },
      horzLine: {visible: false },
  },
  grid: {vertLines: {visible: false}, horzLines: {visible: false}},
    handleScroll: false,
    handleScale: false
  },
  defaultChart : {
    layout: CHART_LAYOUTS.common,
    rightPriceScale: CHART_PRICE_SCALES.common_right,
    timeScale: { timeVisible: true, secondsVisible: true },
    crosshair: CHART_CROSSHAIR.common,
    grid: CHART_GRID.common,
    handleScroll: { vertTouchDrag: true },
  }
};

export const defaultSimpleChartOptions = (opts) => {
  return {
    width: opts?.width || 500,
    height: opts?.height || 500,
    layout: CHART_LAYOUTS.common,
    rightPriceScale: { visible: opts?.rightPriceScale?.visible || false},
    timeScale: { visible: opts?.timeScale?.visible || false},
    crosshair: {
        visible: opts?.crosshair?.visible || false,
        mode: opts?.crosshair?.visible ? CrosshairMode.FinanceChart : CrosshairMode.Hidden,
        vertLine: {visible: opts?.crosshair?.visible || false },
        horzLine: {visible: opts?.crosshair?.visible || false },
    },
    grid: CHART_GRID.common,
    handleScroll: opts?.handleScroll || true,
    handleScale: opts?.handleScale || true,
  }
}

export const defaultChartOptions = (opts) => {
  return {width: opts?.width || 500,
    height: opts?.height || 500,
    layout: CHART_LAYOUTS.common,
    rightPriceScale:  CHART_PRICE_SCALES.common_right,
    timeScale: { timeVisible: opts?.timeVisible || true, secondsVisible: false },
    crosshair: CHART_CROSSHAIR.common,
    grid: CHART_GRID.common,
    handleScroll: { vertTouchDrag: true },
  }
};


export const grpChartOptions = (opts) => {
  return {width: opts?.width || 500,
    height: opts?.height || 500,
    layout: CHART_LAYOUTS.common,
    rightPriceScale:  CHART_PRICE_SCALES.common_right,
    timeScale: { visible: opts?.timeVisible, timeVisible: true, secondsVisible: false },
    crosshair: CHART_CROSSHAIR.common,
    grid: CHART_GRID.common,
    handleScroll: { vertTouchDrag: true },
  }
}

