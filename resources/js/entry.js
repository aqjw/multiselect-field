import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-multiselect-field', IndexField);
  app.component('detail-multiselect-field', DetailField);
  app.component('form-multiselect-field', FormField);
})
