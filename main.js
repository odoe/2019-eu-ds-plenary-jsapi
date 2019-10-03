require(["esri/views/MapView", "esri/WebMap"], function(MapView, WebMap) {
  const webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "f2e9b762544945f390ca4ac3671cfa72"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });

  view.ui.add("toggle-snippet", "top-left");
});