function getLayersByName(page, name) {
    var results = Array()

    var artboards = getArtboards(page)
    while (artboard = artboards.nextObject()) {
      var layers = getLayers(artboard)
      while (layer = layers.nextObject()) {
        if (layer.name() == String(name)) {
          results.push(layer)
        }
      }
    }

    return results
}

function getPages() {
  return doc.pages().objectEnumerator()
}

function getArtboards(page) {
  return page.artboards().objectEnumerator()
}

function getLayers(artboard) {
  return artboard.children().objectEnumerator()
}
