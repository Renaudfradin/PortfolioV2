<template>
    <div class="home">
        <div class="home2">
            <div class="presentation">
                <div class="presentation2">
                    <h1 class="skills">Contactez moi</h1>
                    <p class="metier">Je suis interessé par les grands ou petits projets.</p>
                    <p class="metier">Si vous avez des questions, n'hésitez pas à me contacter en utilisant mon adresse mail ou mon linkedin :</p>
                    <p class="metier">renaudfradin@gmail.com</p>
                    <p class="metier"><a href="https://www.linkedin.com/in/Renaudfradin/" onclick="window.open(this.href); return false;">Linkedin Renaud fradin</a></p>
                    <!-- <div class="form-contact">
                        <form action="" style="width:100%" @submit.prevent="sendEmail" id="formemail">
                            <div class="field_email_name">
                                <label class="input_name">
                                    <input v-model="name" id="prenom" class="field__input name" placeholder="Prenom" type="text">
                                    <span class="field__label-wrap"></span>
                                </label> 
                                <label class="input_name">
                                    <input v-model="email" class="field__input email" placeholder="Email" type="mail">
                                    <span class="field__label-wrap"></span>
                                </label> 
                            </div>
                            <label class="">
                                <input v-model="subject" class="field__input subject" placeholder="Sujet" type="text">
                                <span class="field__label-wrap"></span>
                            </label> 
                            <label class="">
                                <textarea v-model="text" class="field__input subject" placeholder="Text" cols="30" rows="10"></textarea>
                                <span class="field__label-wrap"></span>
                            </label>
                            <div v-if="infoform">
                                <p>Le formulaire est mal rempli</p>
                            </div>
                            <input type="submit" class="btn-send" ><br>
                        </form>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import emailjs from 'emailjs-com';
export default {
    name:'Contact',
    data(){
        return{
            infoform:false,
            name:'',
            email:'',
            subject:'',
            text:'', 
        }
    },
    methods:{
        /*sendEmail:function(e){
             if (this.name == "" || this.email == "" || this.subject == "" || this.text == "") {
                console.log("form pas remplie");
                this.infoform = true;
            }else{
                console.log("form remplie");
                this.infoform = false;

                console.log(this.name);
                console.log(this.text);
                console.log(this.subject);
                console.log(this.email);*/
                
                /*var templateParams = {
                    subject: this.formData.sujet,
                    content: this.formData.text,
                    from_name: this.formData.prenom,
                    from_email: this.formData.email,
                };*/

                /*try {
                //emailjs.send('service_e5m8weg', 'template_bjr6xev', e.target, 'user_28422VDYCwbFAaUF2U4X7' ,templateParams)
                emailjs.sendForm('service_e5m8weg', 'template_bjr6xev', e.target, 'user_28422VDYCwbFAaUF2U4X7','#formemail')
                console.log("testtt");

                } catch(error) {
                    console.log({error})
                }
                console.log("azzzzzzz");
                // Reset form field
                this.subject = ''
                this.text = ''
                this.name = ''
                this.email = ''
            }
        },*/
    }
}
</script>
<style src="./Contact.css" scoped> </style>