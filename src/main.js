import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"

import "primeflex/primeflex.css"
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';      
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";


  
 

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);

app.use(VueAxios, axios);
app.component("DataTablePrime",DataTable)
app.component("ColumnPrime",Column)
app.component("ColumnGroupPrime",ColumnGroup)
app.component("RowPrime",Row)
app.component("DialogModel",Dialog)
app.component("InputTextPrime",InputText)
app.mount('#app');

