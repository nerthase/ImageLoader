function getLayerByName(page, name) {
    var artboard = page.artboards().firstObject()
    var layers = artboard.layers();
    var layerLoop = layers.array().objectEnumerator();
    while ( childLayer = layerLoop.nextObject() ) {
        if (childLayer.name() == name) {
            return childLayer;
        }
    }
    return null;
}

function getPages() {
  return doc.pages().objectEnumerator()
}
