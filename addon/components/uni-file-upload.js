import Component from '@ember/component';
import layout from '../templates/components/uni-file-upload';

export default Component.extend({
  classNames: ['uni-file-upload'],
  layout,
  accept: null,
  renderFile: false,
  label: '',
  filename: '',

  handleFile() {},

  actions: {
    triggerInputFile() {
      this.element.querySelector('input').click();
    },

    handleFile(event) {
      let reader = new FileReader();
      let [file] = event.target.files;

      reader.onload = () => {
        this.set('filename', file.name);
        this.get('handleFile')(file, reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }
});
