<template>
    <div>
        <p>This is MinePage</p>
        <router-link to="/" class="tab">首页</router-link>
        <router-link to="/mine" class="tab">我的</router-link>
        <div id = "mine-list" v-for = "item in data">
            <div>{{item.money}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Mile',
        data() {
            return {
                data: [
                    {money: 100},
                    {money: 1000},
                    {money: 10000},
                ]
            }
        }
    }
</script>
