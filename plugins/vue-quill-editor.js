import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

import ImageResize from 'quill-image-resize-module'
import { ImageDrop } from 'quill-image-drop-module'


if(process.browser){
    Quill.register("modules/ImageResize", ImageResize);
    Quill.register("modules/imageDrop", ImageDrop);
}

Vue.use(VueQuillEditor)