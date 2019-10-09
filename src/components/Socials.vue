<template>
    <div>
        <h1>ButtomNavSocial</h1>
        <social-sharing url="https://vuejs.org/"
                        title="The Progressive JavaScript Framework"
                        description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                        quote="Vue is a progressive framework for building user interfaces."
                        hashtags="vuejs,javascript,framework"
                        twitter-user="vuejs"
                        inline-template>
            <div>
                <network network="email">
                    <i class="fa fa-envelope"></i> Email
                </network>
                <network network="facebook">
                    <i class="fa fa-facebook"></i> Facebook
                </network>
                <network network="googleplus">
                    <i class="fa fa-google-plus"></i> Google +
                </network>
                <network network="line">
                    <i class="fa fa-line"></i> Line
                </network>
                <network network="linkedin">
                    <i class="fa fa-linkedin"></i> LinkedIn
                </network>
                <network network="odnoklassniki">
                    <i class="fa fa-odnoklassniki"></i> Odnoklassniki
                </network>
                <network network="pinterest">
                    <i class="fa fa-pinterest"></i> Pinterest
                </network>
                <network network="reddit">
                    <i class="fa fa-reddit"></i> Reddit
                </network>
                <network network="skype">
                    <i class="fa fa-skype"></i> Skype
                </network>
                <network network="sms">
                    <i class="fa fa-commenting-o"></i> SMS
                </network>
                <network network="telegram">
                    <i class="fa fa-telegram"></i> Telegram
                </network>
                <network network="twitter">
                    <i class="fa fa-twitter"></i> Twitter
                </network>
                <network network="vk">
                    <i class="fa fa-vk"></i> VKontakte
                </network>
                <network network="weibo">
                    <i class="fa fa-weibo"></i> Weibo
                </network>
                <network network="whatsapp">
                    <i class="fa fa-whatsapp"></i> Whatsapp
                </network>
            </div>
        </social-sharing>
        <v-bottom-nav  class="grey lighten-4"
                       shift
                       :value="true"
                       active
        >

            <social-sharing url="https://vuejs.org/"
                            title="The Progressive JavaScript Framework"
                            description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                            quote="Vue is a progressive framework for building user interfaces."
                            hashtags="vuejs,javascript,framework"
                            twitter-user="vuejs"
                            inline-template>
                <v-layout row justify-center>
                    <v-btn to="ButtomNavVuetify">
                        <span>ButtomNavVuetify</span>
                        <v-icon>web</v-icon>
                    </v-btn>
                    <network network="email">
                        <v-btn class="red">
                            <span>Email</span>
                            <v-icon class="red--text">fa-envelope</v-icon>
                        </v-btn>
                    </network>
                </v-layout>
            </social-sharing>
        </v-bottom-nav>
    </div>
</template>

<script>
    export default {
        name: 'buttom-nav-social',
        data () {
            return {
            }
        }
    }

</script>

