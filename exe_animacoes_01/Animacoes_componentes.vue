<template>
    <div class="filmes">

        

        <!-- <div class="button_cont" align="center"><a class="btn" href="add-website-here" target="_blank" rel="nofollow noopener" -->
        <button class="button_cont btn" align="center" @click="filtroAZ">A - Z</button>
        <button class="button_cont btn" align="center" @click="filtroZA">Z - A</button>
        <transition-group tag="ul" mode="out-in">
            <li v-for="(filme) in filmes" :key="filme">{{filme}}</li>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filmes: [
                "Velozes e furiosos",
                "Creed",
                "Coringa",
                "Narnia"
            ]
        }
    },
    methods: {
        filtroAZ(){
            this.filmes.sort();
        },
        filtroZA() {
            this.filmes.sort().reverse();
        }
    }
}
</script>

<style>

.v-move {
    transition: transform 0.3s;
}

li {
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.2);
    background: white;
    padding: 20px;
    max-width: 200px;
    margin: 5px auto;
    list-style-type: none;
}


.filmes {
    margin: 100px auto;
    width: 40%;
    background-color: #FFF;
    padding: 10px;

    text-align:center;
    

    border-radius: 10px; 
    border: 4px solid #494949 !important;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
}


body{
    background-color: #84e
}



.btn {
    margin: auto 15px;
    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    border: 4px solid #494949 !important;
    border-radius: 20px;
    display: inline-block;
    transition: all 0.4s ease 0s;
}


.btn:hover {
    color: #ffffff !important;
    background: #84e;
    border-color: #84e !important;
    transition: all 0.4s ease 0s;
}

button:focus {
    outline:none;
}
</style>