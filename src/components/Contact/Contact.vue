<template>
    <div class="home">
        <div class="home2">
            <div class="presentation">
                <div class="presentation2">
                    <h1 class="skills"><br>Contacter moi<br></h1>
                    <p class="metier">Je suis intereser par les grand ou petit projet.</p>
                    <p class="metier">Si vous avez des questions, n'hésitez pas à me contacter en utilisant le formulaire ci-dessous</p>
                    <div class="form-contact">
                    <form action="">
                        <div class="flex-name-email">
                            <label class="field field_v2" style="width:100%">
                                <input v-model="formData.prenom" id="prenom" class="field__input subject name" placeholder="Prenom" type="text">
                                <span class="field__label-wrap"></span>
                            </label> 
                            <label class="field field_v2 taile" style="width:100%;">
                                <input v-model="formData.email" class="field__input subject email" placeholder="Email" type="mail">
                                <span class="field__label-wrap"></span>
                            </label> 
                        </div>
                        <label class="field field_v2" style="width:100%">
                            <input v-model="formData.sujet" class="field__input subject" placeholder="Sujet" type="text">
                            <span class="field__label-wrap"></span>
                        </label> 
                        <label class="field field_v2" style="width:100%">
                            <textarea v-model="formData.text" class="field__input subject" placeholder="Text" cols="30" rows="10"></textarea>
                            <span class="field__label-wrap"></span>
                        </label>
                        <div v-if="infoform">
                            <p>Le formulaire est mal rempli</p>
                        </div>
                        <button class="btn-send" v-on:click.prevent="submitform">envoyer</button><br>
                    </form>
                    </div>
                </div>
            </div>
            <div class="map">
               <iframe class="map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20999.694994851732!2d2.531035006322973!3d48.85893740152371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6120bbfb81ebd%3A0x7c0f2894470f5804!2s43%20Rue%20Th%C3%A9ophile%20Gaubert%2C%2093330%20Neuilly-sur-Marne!5e0!3m2!1sfr!2sfr!4v1601890063991!5m2!1sfr!2sfr" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Contact',
    data(){
        return{
            infoform:false,
            formData:{
                prenom:'',
                email:'',
                sujet:'',
                text:'',
            }
        }
    },
    methods:{
        submitform:function(){
            if (this.formData.prenom == "" || this.formData.email == "" || this.formData.sujet == "" || this.formData.text == "") {
                console.log("form pas remplie");
                this.infoform = true;
            }else{
                console.log("form remplie");
                console.log(this.formData.prenom);
                this.infoform = false;
            }
        }
    }
}
</script>
<style src="./Contact.css" scoped> </style>