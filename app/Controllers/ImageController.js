import ImageService from "../services/ImageService.js";
import store from "../store.js"

function _draw() {
  let image = store.State.images

  document.getElementById("bg-image").style.background = `url(${image.url})`
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    console.log("ImageController is working")
    store.subscribe("images", _draw)
    ImageService.getImage()
  }
}