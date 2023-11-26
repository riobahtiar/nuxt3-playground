<script setup lang="ts">
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import html2canvas from 'html2canvas';

const route = useRoute()
const editor = ref(ClassicEditor)
const editorData = ref('<h2>Halo Ini Adalah Konten Starter.</h2><p>Edit Saya untuk mulai membuat Slide.</p><p><br data-cke-filler="true"></p><p>Quotes bijak:</p><blockquote><p>Jangan Pernah mengulangi kesalahan yang sama, karena masih banyak kesalahan yang belum dicoba.</p><p><i><strong>~ Calon Bapakmu</strong></i></p></blockquote><figure class="media ck-widget ck-widget_selected" contenteditable="false"><div class="ck-media__wrapper" data-oembed-url="https://www.youtube.com/watch?v=0yW7w8F2TVA"><div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/0yW7w8F2TVA" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div></div><div class="ck ck-reset_all ck-widget__type-around"><div class="ck ck-widget__type-around__button ck-widget__type-around__button_before" title="Insert paragraph before block" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div><div class="ck ck-widget__type-around__button ck-widget__type-around__button_after" title="Insert paragraph after block" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div><div class="ck ck-widget__type-around__fake-caret"></div></div></figure>')
const editorConfig = {}

useSeoMeta({
    title: 'Editor | Sekolah Kita',
    ogTitle: 'My Editor | Sekolah Kita',
})

const ckeditor = CKEditor.component;

function captureContent() {
    const content = document.querySelector(".ck-editor__main") as HTMLElement;
    const cardSlide = document.querySelector(".current-content") as HTMLElement;
    const options = {
        height: 160,
        width: 270,
        windowWidth: 293,
        windowHeight: 355
    }

    if (content !== null && cardSlide !== null) {
        html2canvas(content, options).then(canvas => {
            // Clear the existing content of the card-slide div
            cardSlide.innerHTML = '';

            // Append the canvas to the card-slide div
            cardSlide.appendChild(canvas);
        });
    }
}

</script>

<template>
    <div @click.prevent="captureContent">
        <Nav />
        <main class="d-block bg-secondary-subtle pb-4" style="height: 95dvh;">
            <aside class="px-4 mb-4 bg-white py-3" style="--bs-bg-opacity: .4;">
                <div class="container">
                    dd
                </div>
            </aside>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-slide">
                            <div class="card-body">
                                <div class="current-content">
                                    click me to reload thumbnail
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div id="main-editor" class="editor-canvas">
                            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
                        </div>
                        <div class="d-block mt-4">
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                    style="height: 100px"></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style lang="scss" scoped>
.editor-canvas :deep(.ck-editor__editable_inline) {
    &:not(.ck-comment__input *) {
        height: 45dvh;
        overflow-y: auto;
    }
}

.card-slide {
    margin-bottom: 20px;

    .card-body {
        min-height: 150px;
    }
}
</style>