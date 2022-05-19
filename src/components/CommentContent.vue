<template>
    <div id="comment">
        <div id="black" class="d-flex flex-column justify-content-center align-items-center">
            <div id="io">
                
            </div>
            <div style="max-width: 700px" class="text-center">
                <h6 class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, exercitationem quaerat reiciendis error illo quisquam, suscipit quas tempore molestias necessitatibus aliquid, incidunt sint. Repellat dicta sint fugiat beatae sapiente harum.</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommentContent'
}
</script>

<style lang="scss" scoped>
#comment{
    width: 100%;
    height: 500px;
    background-image: url(../assets/sfondi/dio.jpg);
    background-position-x: 50%;
}
#black{
    background-color: black;
    width: 100%;
    height: 500px;
    opacity: 0.5;
}
#io{
    width: 100px;
    height: 100px;
    background-image: url(../assets/io.jpg);
    background-position-x: 80%;
    background-size: contain;
    border-radius: 50%;
    z-index: 1000;
}
</style>