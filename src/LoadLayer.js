export const loadWholeYear = (parameter, sources) => {
    console.log(parameter)
    const dates = ["30-01", "17-02", "13-03", "14-04", "09-05", "18-06", "18-07", "15-08", "16-09", "16-10", "10-11", "18-12" ]
    
    sources.map((source, index) => {
        source.tileCache.expireCache({});
        source.tileCache.clear();
        
        source.updateParams({LAYERS: `clear_lake:_${parameter}_${dates[index]}-2020` });
        source.refresh();
      })
}

export const clearWholeYear = (sources) => {
    sources.map((source, index) => {
        source.clear()
        source.updateParams({LAYERS: `` });
    })
}

export const loadStatisticLayer = (currentActiveStatisticsButton, source13, activeButton) => {
    let parameter;

    activeButton == 1 ? parameter = "chla" : null
    activeButton == 2 ? parameter = "turbidity" : null
    activeButton == 3 ? parameter = "sd" : null

    console.log(parameter, currentActiveStatisticsButton)

    source13.updateParams({LAYERS: `clear_lake:${parameter}_${currentActiveStatisticsButton}`});

    source13.refresh();
}

