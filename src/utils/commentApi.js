import Axios from "axios";
import swal from "sweetalert2";
import authUrls from "./endPoints";

class Blog {
  constructor(title, image, article, likes, topic) {
    this.blog = {
      title: title,
      image: image,
      article: article,
      likes: likes,
      topic: topic
    };
  }
}
