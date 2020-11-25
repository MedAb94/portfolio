<template>
    <div>
        <div class="mainbox">
            <div class="err">4</div>
            <i class="far fa-question-circle fa-spin"></i>
            <div class="err2">4</div>
            <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first
                place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Four0Four"
    }
</script>

<style scoped>


    .mainbox {
        margin: auto;
        height: 600px;
        position: relative;
    }

    .err {
        color: #0d47a1;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position: absolute;
        left: 20%;
        top: 8%;
    }

    .far {
        position: absolute;
        font-size: 8.5rem;
        left: 42%;
        top: 15%;
        color: #0d47a1;

    }

    .err2 {
        color: #0d47a1;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position: absolute;
        left: 68%;
        top: 8%;
    }

    .msg {
        text-align: center;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.6rem;
        position: absolute;
        left: 16%;
        top: 45%;
        width: 75%;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }
</style>