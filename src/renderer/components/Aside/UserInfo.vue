<template>
    <div class="user-info">
        <div class="avatar no-drag" @click="login">
            <img v-if="user.is_login" :src="user.profile.avatarUrl" />
            <img v-else src="../../assets/images/max.png">
        </div> 
    </div>
</template>
<script>
    export default {
        methods: {
            login() {
                if (this.user.is_login) {

                } else {
                    this.$bus.$emit('login')
                }

            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>
<style lang="scss" scoped>
    .user-info {
        // -webkit-app-region: drag;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .avatar {
            width: 50px;
            height: 50px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                cursor: pointer;
            }
        }
        .type-icons {
            display: flex;
            justify-content: center;
            i {
                font-size: 22px;
                color: #999;
                margin-left: 8px;
            }
            i:first-child{
                margin-left: 0;
            }
        }
    }
</style>
